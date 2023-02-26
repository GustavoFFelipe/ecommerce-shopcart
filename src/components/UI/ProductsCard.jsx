import React from "react";
import '../../styles/productCard.css' 
import {Link} from 'react-router-dom';
import {motion} from "framer-motion";

const ProductsCard = ({item}) => {
    return(
        <div className="product__item">
            <div className="product__img">
            <Link to={`/shop/${item.id}`}><motion.img whileHover={{scale: 1.1}} src={item.imgUrl} alt="" /></Link>
            </div>
            <h3 className="product__name"><Link to='/shop/id'>{item.productName}</Link></h3> 
            <div className="product__button">
                <span className="price">R$ {item.price}</span>
                <motion.span whileTap={{scale: 1.5}}><i class="ri-add-line"></i></motion.span>
            </div>
        </div>
    )
};

export default ProductsCard;
