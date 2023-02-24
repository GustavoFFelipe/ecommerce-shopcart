import React from 'react';

import {Container, Row} from 'reactstrap';
import {motion} from 'framer-motion'

import './services.css'



const Services = () => {  
    return (
        <section className="services">
            <Container className='container__rows'>
            <Row className='columns'>
                <div className='column'>
                    <div className="service__item">
                        <span><i class="ri-truck-line"></i></span>
                        <div>
                            <h4>Entrega grátis</h4>
                            <p>Em todo o Brasil</p>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className="service__item">
                        <span><i class="ri-refresh-line"></i></span>
                        <div>
                            <h4>Troca rápida</h4>
                            <p>Sem burocracia</p>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className="service__item">
                        <span><i class="ri-secure-payment-line"></i></span>
                        <div>
                            <h4>Pagamento seguro</h4>
                            <p>Fácil e seguro.</p>
                        </div>
                    </div>
                </div>
                <div className='column'>
                    <div className="service__item">
                        <span><i class="ri-exchange-dollar-line"></i></span>
                        <div>
                            <h4>Satisfação</h4>
                            <p>ou seu dinheiro de volta.</p>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
        </section>
    )
    
}

export default Services