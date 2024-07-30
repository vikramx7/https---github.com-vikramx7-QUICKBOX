import { NavLink, Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import { ThemeContext } from '../Contexts/ThemeContext';
import Styles from '../Styles/Navbar.module.css';
import { Button } from '@chakra-ui/react';
import { AuthContext } from '../Contexts/AuthContext';
import SideNavbar from './SideNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleUser, faBasketShopping, faBell, faHeadset } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { authState, loginUser, logoutUser, userCart, text, setText } = useContext(AuthContext);
  const [itemCount, setItemCount] = useState(0);

  const handleText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (authState.isAuth) {
      let count = 0;
      userCart.cart.forEach(item => {
        count += Number(item.quantity);
      });
      setItemCount(count);
    } else {
      setItemCount(0);
    }
  }, [userCart.cart, authState.isAuth]);

  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <Link to="/">
          <img
            src="https://i.ibb.co/xH2f3Lb/Box-Delivery-Service.png"
            alt="logo"
            className={Styles.logoImg}
          />
        </Link>
      </div>
      <div className={Styles.sideNavbar}>
        <SideNavbar />
      </div>
      <div className={Styles.searchContainer}>
        <input
          type="search"
          className={Styles.search}
          value={text}
          onChange={handleText}
          placeholder="Search for Products"
        />
        <Link to="/products/freshfruits" className={Styles.searchIconLink}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={Styles.searchIcon}
          />
        </Link>
      </div>
      <div className={Styles.icons}>
        <Link to="/cart" className={Styles.icon}>
          <FontAwesomeIcon icon={faBasketShopping} />
          <sup>{itemCount}</sup>
        </Link>
       <div className={Styles.icon}>
  <Link to="/PricingSection" className={Styles.icon}>
    <FontAwesomeIcon icon={faBell} />
  </Link>
</div>

        <div className={Styles.icon}>
          <FontAwesomeIcon icon={faHeadset} />
        </div>
      </div>
      <div className={Styles.logsin}>
        <FontAwesomeIcon icon={faCircleUser} className={Styles.icon} />
        <div>
          {authState.isAuth ? authState.token.name : <Signup />}
        </div>
        <div>
          {authState.isAuth ? (
            <Button onClick={logoutUser}>Logout</Button>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
