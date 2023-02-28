import React from 'react';
import './Footer.css';
import {Container, Row, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';



const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <div className='footerContainer'>
              <div className='colContainer'>
                <div className="logo">
                <i class="ri-cloud-line"></i>
                  <div>
                    <h1>ShopCart</h1>
                  </div>
                </div>
              </div>
              <div className="colContainer">
                <ListGroup>
                  <ListGroupItem className='link'>
                    <Link to='/shop'>Produtos</Link>
                  </ListGroupItem>
                  <ListGroupItem className='link'>
                    <Link to='/cart'>Carrinho</Link>
                  </ListGroupItem>
                  <ListGroupItem className='link'>
                    <Link to='/Login'>Login</Link>
                  </ListGroupItem>
                  <ListGroupItem className='link'>
                    <Link to='/policy'>Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
              <div className="colContainer ">
                <ListGroup className='contactContainer'>
                  <ListGroupItem className='contact'>
                    <span><i class="ri-map-pin-line"></i></span>
                      <p>123, Rua Descobrimento, nº 35, São Paulo - Brasil.</p>
                  </ListGroupItem>
                  <ListGroupItem className='contact'>
                    <span><i class="ri-phone-fill"></i></span>
                      <p>+55 (00) 9 1122-3344</p>
                  </ListGroupItem>
                  <ListGroupItem className='contact'>
                    <span><i class="ri-mail-send-line"></i></span>
                      <p>meumelhor@email.com</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
          </div>
          <div className="copy">
                <p className>Copyright 2023.</p>
              </div>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer