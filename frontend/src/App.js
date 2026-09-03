import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Collections from "./pages/Collections";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/admin/Settings";
import Users from "./pages/admin/Users";
import Payments from "./pages/admin/Payments";
import Products from "./pages/admin/products/Products";
import AdminLayout from "./layout/AdminLayout";
import Overview from "./pages/admin/Overview";
import AddProduct from "./pages/admin/products/AddProduct";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminLayout />} >
        <Route path="/admin/overview" element={<Overview />} />
           <Route path="/admin/settings" element={<Settings />} />
           <Route path="/admin/users" element={<Users />} />
           <Route path="/admin/payments" element={<Payments />} />
           <Route path="/admin/products" element={<Products />} />
           <Route path="/admin/products/add" element={<AddProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
