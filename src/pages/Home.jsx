import React from "react";
import Header from "../components/header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import Citation from "../components/Citation/Citation"; 
import Formation from "../components/Formation/Formation";
import Projets from "../components/Projets/Projets";
import Competences from "../components/Competences/Competences";
import Certificats from "../components/Certificats/Certificats";
import Autres from "../components/Autres/Autres";
import Footer from "../components/FooterSection/Footer";
import Stages from "../components/Stages/Stages";

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Citation />
            <Formation />
            <Projets />
            <Stages />
            <Competences />
            <Certificats />
            <Autres />
            <Footer />
        </div>
    )
}

export default Home;