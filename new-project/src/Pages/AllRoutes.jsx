import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sign from "./Sign";
import Account from "../Component/Auth/Account";
import Profile from "./Profile";
import AllProduct from "./Products";
import SingleProduct from "../Component/Prouduts/SingleProducts";
import Cart from "./Cart";
import CheckoutForm from "../Component/Cart/Purchas";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Sign/>} />
      <Route path="/account" element={<Account/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/products" element={<AllProduct/>} />
      <Route path="/:category/:id" element={<SingleProduct />} />
      <Route path="/chackOutFrom" element={<CheckoutForm />} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  );
}

export default AllRoutes;
