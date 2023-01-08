import React, { useState } from 'react';
import Slider from 'react-slick';
import './Certificats.css';
import { Container, Row, Col} from 'reactstrap';


import cert1 from '../../assests/cert1.jpg';
import cert2 from '../../assests/cert2.jpg';
import cert3 from '../../assests/cert3.jpg';
import cert4 from '../../assests/cert4.jpg';
import cert5 from '../../assests/cert5.jpg';
import cert6 from '../../assests/cert6.jpg';



const Certificats = () => {

  const [sliderValue, setSliderValue] = useState(0);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (current) => setSliderValue(current),
  };

    return (
          <section className="bg-dark p-1" id="Certificats">
            <div className=" fs-1 align-content-center text-light text-center fw-bold py-3">Certificats</div>
            <Container>
                <Row>
                <Col >
                <div>
                  <Slider {...settings} className="slides">
                    <div>
                      <img src={cert1} alt="" />
                    </div>
                    <div>
                      <img src={cert2} alt="" />
                    </div>
                    <div>
                      <img src={cert3} alt="" />
                    </div>
                    <div>
                      <img src={cert4} alt="" />
                    </div>
                    <div>
                      <img src={cert5} alt="" />
                    </div>
                    <div>
                      <img src={cert6} alt="" />
                    </div>
                  </Slider>
                </div>
                </Col>
                </Row>
            </Container>
          </section>
    )
}

export default Certificats;