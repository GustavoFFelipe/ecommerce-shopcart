
import {Routes, Route, Navigate} from 'react-router-dom';
//Routes
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductsDetails from '../pages/ProductsDetails';
import Shop from '../pages/Shop';
import SignUp from '../pages/SignUp';

const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={<Navigate to = "home" />} />
            <Route path="/home" element={<Home />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/shop/:id" element={<ProductsDetails />} /> 
            <Route path="/shop" element={<Shop />} /> 
            <Route path="/signup" element={<SignUp />} /> 

        </Routes>
    )
}

export default Routers;