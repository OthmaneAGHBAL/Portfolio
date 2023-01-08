import React from "react";
import { Container, Row, Col} from 'reactstrap';
import './Autres.css';

const Autres = () => {
    return (
         <section id="Autres">
            <Container>
                <Row >
                    <Col lg="12" md="12">
                        <div className=" fs-1 align-content-center text-center fw-bold my-2">Autres</div>
                    </Col>
                </Row>
                <Row>
                    <Col lg='6' md='6' className="col">
                    <div class="card">
                            <h3>Langues</h3>
                            <p>Arabe</p>
                            <p>Francais</p>
                            <p>Anglais</p>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div class="card">
                            <h3>Loisirs</h3>
                            <p>Programmation</p>
                            <p>Sport</p>
                            <p>Design</p>
                        </div>
                    </Col>
                </Row>
            </Container>
         </section>
    )
}

export default Autres;