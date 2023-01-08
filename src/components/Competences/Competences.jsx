import React, { useState } from "react";
import './Competences.css'
import {Container, Row, Col} from 'reactstrap';

import c from '../../assests/c.svg';
import cplusplus from '../../assests/c++.svg';
import python from '../../assests/python.svg';
import java from '../../assests/java.svg';
import sql from '../../assests/sql.png';
import pl_sql from '../../assests/pl-sql.svg';

import html from '../../assests/html.svg';
import css from '../../assests/css.svg';
import bootstrap from '../../assests/bootstrap.svg';
import tailwind from '../../assests/tailwindcss.svg';
import js from '../../assests/js.svg';
import php from '../../assests/php.svg';
import react_ from '../../assests/react.svg';

import word from '../../assests/m-word.svg';
import powerpoint from '../../assests/m-powerpoint.svg';
import excel from '../../assests/m-excel.svg';

import ai from '../../assests/ai.png';



const Competences = () => {
    return (
          <section id="Competences">
            <div className=" fs-1 align-content-center text-center fw-bold">Competences</div>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div class="main-container">
                            <div class="cards">
                            <div class="card card-5 bg-dark">
                                <div class="card__icon">Programmation</div>
                                <h5 class="card__title">
                                    <ul>
                                        <li><img src={c} alt="" /></li>
                                        <li><img src={cplusplus} alt="" /></li>
                                        <li><img src={python} alt="" /></li>
                                        <li><img src={java} alt="" /></li>
                                        <li><img src={sql} alt="" /></li>
                                        <li><img src={pl_sql} alt="" /></li>
                                    </ul>
                                </h5>
                                </div>
                            </div>
                            </div>
                    </Col>

                    <Col lg='6' md='6'>
                    <div class="main-container">
                            <div class="cards">
                    <div class="card card-5 bg-dark">
                                <div class="card__icon">Dev Web</div>
                                <h5 class="card__title">
                                    <ul>
                                        <li><img src={html} alt="" /></li>
                                        <li><img src={css} alt="" /></li>
                                        <li><img src={bootstrap} alt="" /></li>
                                        <li><img src={tailwind} alt="" /></li>
                                        <li><img src={js} alt="" /></li>
                                        <li><img src={php} alt="" /></li>
                                        <li><img src={react_} alt="" /></li>
                                    </ul>
                                </h5>
                                </div>
                                </div>
                            </div>
                    </Col>
                    
                </Row>

                <Row>
                    <Col lg='6' md='6'>
                    <div class="main-container">
                            <div class="cards">
                    <div class="card card-5 bg-dark">
                                <div class="card__icon">Bureautiques</div>
                                <h5 class="card__title">
                                    <ul>
                                        <li><img src={word} alt="" /></li>
                                        <li><img src={powerpoint} alt="" /></li>
                                        <li><img src={excel} alt="" /></li>
                                    </ul>
                                </h5>
                                </div>
                                </div>
                            </div>
                    </Col>
                    <Col lg='6' md='6'>
                    <div class="main-container">
                            <div class="cards">
                        <div class="card card-5 bg-dark">
                                <div class="card__icon">Design</div>
                                <h5 class="card__title">
                                    <ul>
                                        <li><img src={ai} alt="" /></li>
                                    </ul>
                                </h5>
                                </div>
                                </div>
                            </div>
                    </Col>
                </Row>
            </Container>
          </section>
    )
}

export default Competences;