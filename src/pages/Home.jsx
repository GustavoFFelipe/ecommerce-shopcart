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



const Home = () => {
    const [dataTrending, setDataTrending] = useState(products);
    useEffect(() =>{
        const filteredProducts = products.filter(item => item.category === 'chair')
        setDataTrending(filteredProducts);
    }, [])

    const [dataBestSell, setDataBestSell] = useState(products);
    useEffect(() =>{
        const filteredProducts = products.filter(item => item.category === 'sofa')
        setDataBestSell(filteredProducts);
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
    </Helmet>

    
    )
}

export default Home