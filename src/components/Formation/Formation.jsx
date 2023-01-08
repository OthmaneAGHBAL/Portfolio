import React from "react";
import { Container, Row, Col} from 'reactstrap';


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './Formation.css'

const Formation = () => {
    return (
          <section id="Formation">
            <div className=" fs-1 align-content-center text-center fw-bold">Formation</div>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: ' #212529' }}
                contentArrowStyle={{ borderRight: '7px solid  #212529' }}
                date="2021 - Present"
                iconStyle={{ background: '#0dcaf0', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-light">Ecole National des sciences appliquées</h3>
                <h5 className="vertical-timeline-element-subtitle text-light">- Oujda -</h5>
                <p className=" text-info">
                Cycle ingenieur , genie informatique
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: ' #212529' }}
                contentArrowStyle={{ borderRight: '7px solid  #212529' }}
                date="2019 - 2021"
                iconStyle={{ background: '#0dcaf0', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-light">Ecole National des sciences appliquées</h3>
                <h5 className="vertical-timeline-element-subtitle text-light">- Oujda -</h5>
                <p className=" text-info">
                Cycle preparatoire 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: ' #212529' }}
                contentArrowStyle={{ borderRight: '7px solid  #212529' }}
                date="2018 - 2019"
                iconStyle={{ background: '#0dcaf0', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-light">Lycee Zineb Anefzaouia</h3>
                <h5 className="vertical-timeline-element-subtitle text-light">- Oujda -</h5>
                <p className=" text-info">
                2 bac , sciences Math A
                </p>
            </VerticalTimelineElement>
   
            
            </VerticalTimeline>
          </section>
    )
}

export default Formation;