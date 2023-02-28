import React from 'react'
import {useState, useEffect} from 'react';

import Helmet from '../components/Helmet/Helmet'

import heroImg from '../assets/images/hero-img.png'
import {motion} from 'framer-motion'
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/counter-timer-img.png';



const Home = () => {
    const [dataTrending, setDataTrending] = useState([]);
    const [dataBestSell, setDataBestSell] = useState([]);
    const [newArrivels, setNewArrivels] = useState([]);
    useEffect(() =>{
        const filteredTrandingProducts = products.filter(item => item.category === 'chair')

        const filteredBestSalesProducts = products.filter(item => item.category === 'sofa')

        const filteredNewArrivels = products.filter(item => item.category === 'mobile');


        setNewArrivels(filteredNewArrivels);
        setDataTrending(filteredTrandingProducts);
        setDataBestSell(filteredBestSalesProducts);
    }, [])


    const year = new Date().getFullYear();
    return (
    <Helmet title={'Home'} >
        <section className='hero__section'>
            <Container className='hero__container'>
                <Row className='row__container'>
                    <Col lg="6" md="6">
                        <div className="hero__content">
                            <p className="hero__subtitle">
                                Modelos da linha {year}
                            </p>
                            <h2>Fazendo sua casa mais moderna & bonita, para seu dia a dia.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit voluptas rem quos! Eius neque laboriosam eos quasi odio accusamus sunt eum itaque fugiat. Nisi sequi aliquam repellat maiores sit.</p>

                            <Link to='shop'><motion.button whileTap={{scale: 1.5}} className="buy__btn">Compre Agora</motion.button></Link>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Services />
        <section className="trending__products">
            <Container>
                <Row>
                    <div className="colContainer">
                        <h2 className="section__title">Produtos em alta</h2>
                    </div>
                    <ProductsList data={dataTrending} />
                </Row>
            </Container>
        </section>
        <section>
            <Container>
            <Row>
                    <div className="colContainer">
                        <h2 className="section__title">Mais vendidos</h2>
                    </div>
                    <ProductsList data={dataBestSell} />
                </Row>
            </Container>
        </section>

        <section className='timer__section'>
            <Container>
                <Row className='timer__count'>
                    <div className='counter'>
                        <div className="clock__top-content">
                            <h3 className='text-white-title'>Ofertas por tempo limitado</h3>
                            <h4 className='text-white'>Qualidade imperdivel</h4>
                        </div>
                        <Clock />

                        <Link to='/shop'><motion.button whileTap={{scale: 2}} className="buy__btn buy__btn-offer">Visite a loja</motion.button></Link>
                    </div>

                    <div  className="colContainer__img">
                        <img src={counterImg} alt="" />
                    </div >
                </Row>
            </Container>
        </section>

        <section className="new__arrivals">
            <Container>
                <Row>
                <div className="colContainer">
                        <h2 className="section__title">Novidades no ar</h2>
                </div>
                <div className='new'>
                <ProductsList data={newArrivels} />
                </div>
                </Row>
            </Container>
        </section>
    </Helmet>

    
    )
}

export default Home