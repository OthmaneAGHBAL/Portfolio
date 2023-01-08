import React from "react";
import { Container, Row, Col} from 'reactstrap';
import HeroImage from '../../assests/logo_perso.svg'
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section id="HeroSection">
            <Container>
                <Row>
                    <Col lg='7' md='6'>
                        <div className="hero__content">
                        <h2 className="hero__title">
                            Salut ! ,<br /> Je suis AGHBAL Othmane  
                        </h2>
                        <p className="mb-5 hero__text">
                        Eleve ingenieur en génie informatique a l'ENSAO <br/>Developpeur full stack & designer 
                        </p>
                        </div>
                            <div class="social_media">
                                <a href="#" class="icon facebook">
                                    <div class="tooltip">Facebook</div>
                                    <span><i class="fab fa-facebook-f"></i></span>
                                </a>
                                <a href="#" class="icon instagram">
                                    <div class="tooltip">Instagram</div>
                                    <span><i class="fab fa-instagram"></i></span>
                                </a>
                                <a href="#" class="icon github">
                                    <div class="tooltip">Github</div>
                                    <span><i class="fab fa-github"></i></span>
                                </a>
                                <a href="#" class="icon linkedin">
                                    <div class="tooltip">Linkedin</div>
                                    <span><i class="fab fa-linkedin"></i></span>
                                </a>
                                </div>
                    </Col>

                    <Col lg='5' md='6'>
                        <img src={HeroImage} className='logo_hero' alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroSection;