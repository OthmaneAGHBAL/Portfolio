import React from "react";


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import './Stages.css'

const Stages = () => {
    return (
          <section id="Stages">
            <div className=" fs-1 align-content-center text-center fw-bold my-2">Stages</div>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: ' #212529' }}
                contentArrowStyle={{ borderRight: '7px solid  #212529' }}
                date="07-2022"
                iconStyle={{ background: '#0dcaf0', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title text-light">Digitalisation Archive Medical + Design des logos Services</h3>
                <h5 className="vertical-timeline-element-subtitle text-light">- CHU Oujda -</h5>
                <p className=" text-info">
                Une plateforme gestion-astatitiques pour les archives medicals du CHU , chaque services a son propre espace , dossiers et statistiques.<br/>
                 Il existe 3 types d'utilisateurs : <br/>
                 <strong className=" text-light">1 - User archiviste :</strong>  responsable au ajout et modification du dossier , aussi le controle de l'entrée et sortie de ce dernier a partir un systeme qui sauvegarde  tout les mouvements des dossiers. <br />
                 <strong className=" text-light">2 - User simple  :</strong>  tout utilisateurs qui a juste le droit de visualiser la lsite des dossiers et de chercher quelqu'un en cas de besion <br />
                 <strong className=" text-light">2 - User du Service Info  :</strong>  Il sont responsable a l'ajout des utilisateurs & services  <br />
                 Et une partie dedie aux statistiques , par maladies , par nom ,par age , ......<br/>
                 <strong>De plus</strong> :  des desing pour 3 services : <br/>
                 1 - Systeme Informatique & système d’Information <br/>
                 2 - Service Equipements & Maintenance <br/>
                 3 - Service du Patrimoine & Logistique <br/>
                </p>
                
            </VerticalTimelineElement>

        
            
            </VerticalTimeline>
          </section>
    )
}

export default Stages;