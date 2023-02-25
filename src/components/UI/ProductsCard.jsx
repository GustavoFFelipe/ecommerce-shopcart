import React from "react";
import productImg from '../../assets/images/arm-chair-01.jpg';

import '../../styles/productCard.css' 
import {Link} from 'react-router-dom';
import {motion} from "framer-motion";

const ProductsCard = () => {
    return(
        <div className="product__item">
            <div className="product__img">
            <Link to='/shop/id'><motion.img whileHover={{scale: 1.1}} src={productImg} alt="" /></Link>
            </div>
            <h3 className="product__name"><Link to='/shop/id'>Cadeira Hilheus </Link></h3> 
            <div className="product__button">
                <span className="price">R$ 398,50</span>
                <motion.span whileTap={{scale: 1.5}}><i class="ri-add-line"></i></motion.span>
            </div>
        </div>
    )
};

export default ProductsCard;
