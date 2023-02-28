import React from 'react'
import { Container,Row } from 'reactstrap';
import {NavLink} from 'react-router-dom';

import {motion} from 'framer-motion'

//css
import './Header.css';
//Icons and photos
import 'remixicon/fonts/remixicon.css'
import userIcon from '../../assets/images/user-icon.png';
import logo from '../../assets/images/logo.svg';

const nav__links = [
  {
    path: "home",
    display: "Home"
  },
  {
    path: "shop",
    display: "Comprar"
  }, 
  {
    path: "cart",
    display: "Carrinho"
  }, 
]

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <div className='logoContainer'>
                <i class="ri-cloud-line"></i>
                <h1 className='header-title'>ShopCart</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                { //*função MAP mapeia os links que estao no array e retorna 
                //função NAVCLASS adiociona a classe para mostarr que o link esta ativo
                  nav__links.map((item, index )=>(
                    <li className='nav__item' key={index}>
                      <NavLink to={item.path}
                      className={(navClass) => navClass.isActive ? "nav__active" : ""}>
                        {item.display}
                      </NavLink> 
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="nav__icons">
                <span className="fav__icon">
                  <i class="ri-heart-line"></i>
                  <span className='badge'>1</span>
                </span>
                <span className="cart__icon">
                  <i class="ri-shopping-bag-line"></i>
                  <span className='badge'>1</span>
                </span>
                <span className="user__icon"><motion.img whileTap={{scale: 2 }} src={userIcon} alt="Foto de usuário" /></span>
            </div>

    {/**-----------------Mobile Navigation -------------------*/}

              <div className="mobile__navigation">
                <span className="mobile__menu"><i class="ri-menu-line"></i></span>
              </div>
          </div>

        </Row>
      </Container>
    </header>
  )
}

export default Header