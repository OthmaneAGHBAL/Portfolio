import React from "react";
import './Projets.css'; 
import  {Container, Row, Col} from 'reactstrap';
import archive from '../../assests/logo_archive.svg';
import taskmanager from '../../assests/task_manager.svg';
import membercom from '../../assests/logo_mebmer_com.svg';
import ProjetsCard from "./ProjetsCard";

const projetsData = [
    {
      id: "01",
      title: "MemberCom",
      url: "https://github.com/OthmaneAGHBAL/MemberCom",
      description: "Une application web pour l'intercommunication dans l'entreprise , echange de messages ou données , Affectation des taches , annonces quotidiennes",
      imgUrl: membercom,
    },
  
    {
      id: "02",
      title: "Archive Medical CHU",
      url: "https://github.com/OthmaneAGHBAL/Archive_Chu_Oujda",
      description: "Plateforme Web dediee au archives mediceaux du CHU Oujda , dans le but de gerer ces archives et de plus extraire les statistiques a partir les données des patients vue son l'importance pour les medecins,professeurs et chercheurs.",
      imgUrl: archive,
    },
  
    {
      id: "03",
      title: "Task Manager",
      url: "https://github.com/OthmaneAGHBAL/Mini_projet_Task_Manager",
      description: "Application Mobile cree pour gerer les taches quotidiennes des gens realisé avec java sur androidsudion avec une base de donnes SQLite",
      imgUrl: taskmanager,
    },
  ];

const Projets = () => {
    return (
          <section id="Projets">
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <div className="course__top d-flex justify-content-between align-items-center">
                        <div className="course__top__left w-100">
                            <h2>Projets</h2>
                            <p>Voir code source sur github</p>
                        </div>
                        </div>
                    </Col>

                    {projetsData.map((item) => (
                        <Col lg='4' md='6' sm='6'>
                            <ProjetsCard key={item.id} item={item} />
                        </Col>
                    ))}

                </Row>
            </Container>
          </section>
    )
}

export default Projets;