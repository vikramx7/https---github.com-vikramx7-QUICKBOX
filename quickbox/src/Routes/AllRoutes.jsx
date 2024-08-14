import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import FreshFruits from '../Pages/FreshFruits';
import SingleFruits from '../Pages/SingleFruits';
import Cart from '../Pages/Cart';
import PrivateRoute from '../Routes/PrivateRoute';
import PricingSection from '../Pages/PricingSection';
import PaymentPage from '../Pages/PaymentPage';
import WalletPage from '../Pages/WalletPage';
import ContactForm from '../Pages/ContactForm';

// Admin Pages
import AdminDashboard from '../Components/Admin/AdminDashboard';
import Notifications from '../Components/Admin/Notification';
import UploadProduct from '../Components/Admin/UploadProduct';
import ProductList from '../Components/Admin/ProductList';
import UserList from '../Components/Admin/UserList';
import EditUser from '../Components/Admin/UserEdit';
import AdminPage from '../Components/Admin/Adminpage';

const AllRoutes = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products/freshfruits" element={<FreshFruits />} />
      <Route path="/products/freshfruits/:id" element={<SingleFruits />} />
      <Route path="/PricingSection" element={<PricingSection />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/PaymentPage" element={<PaymentPage />} />
      <Route path="/wallet" element={<WalletPage />} />
      <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/notifications" element={<PrivateRoute adminOnly><Notifications /></PrivateRoute>} />
      <Route path="/update" element={<UploadProduct />} />
      <Route path="/list" element={<ProductList/>} />
      <Route path="/adminp" element={<AdminPage/>} />
      {/* <Route path="/user" element={<UserList />} /> */}
      <Route path="/edituser" element={<EditUser/>} />
    </Routes>
  );
};

export default AllRoutes;
