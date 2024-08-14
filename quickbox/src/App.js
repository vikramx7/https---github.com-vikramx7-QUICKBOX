import React, { useContext } from 'react';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
// import Navbar from './Components/Navbar';
import { AuthContext } from './Contexts/AuthContext';

function App() {
  const { authState } = useContext(AuthContext);

  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* Render Navbar only if the user is not an admin */}
      {/* {!authState.isAuth || authState.role !== 'admin' ? <Navbar /> : null} */}
      <AllRoutes />
    </div>
  );
}

export default App;
