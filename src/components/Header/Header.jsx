import React, { useRef } from "react";
import { Container } from 'reactstrap';
import './Header.css';

const navLinks = [
    {
      display: "Formation",
      url: "#Formation",
    },
    {
      display: "Projets",
      url: "#Projets",
    },
    {
      display: "Stages",
      url: "#Stages",
    },
  
    {
      display: "Competences",
      url: "#Competences",
    },
    {
      display: "Certificats",
      url: "#Certificats",
    },
    {
      display: "Autres",
      url: "#Autres",
    },
  ];
  

const Header = () => {

    const menuRef = useRef();
    const menuToggle = () => menuRef.current.classList.toggle('active_menu');

     return (
        <div className="header">
            <Container>
                 <div className="navigation d-flex align-items-center justify-content-between">
                    <div className="align-items-center">
                        <h4 className="logo">
                           .AGHBAL Othmane.
                        </h4>
                    </div>

                    <div className="nav d-flex align-items-center gap-5">
                        <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                            <ul className="nav__list">
                                {navLinks.map((item, index) => (
                                    <li key={index} className="nav__item">
                                       <a href={item.url}>{item.display}</a>
                                   </li>
                                ))}   
                            </ul>
                        </div>
                    </div>

                    <div className="mobile__menu">
                        <span>
                            <i className="ri-menu-line" onClick={menuToggle}></i>
                        </span>
                    </div>
                 </div>
            </Container>
        </div>
     )
}

export default Header;