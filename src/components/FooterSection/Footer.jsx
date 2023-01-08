/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


const Footer = () => {
    return (
      <footer className="footer bg-dark d-flex justify-content-between p-3">

                <h4 className=" text-light mx-4 d-flex align-items-center mb-0">.AGHBAL Othmane.</h4>
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
                
      </footer>
    )
}

export default Footer;