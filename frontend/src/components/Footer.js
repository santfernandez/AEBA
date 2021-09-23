import React from 'react'
import { LinkContainer, Link } from 'react-router-bootstrap'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Logo from '../images/isologo-aeba-negro-1.png'
import Instagram from '../images/logotipo-de-instagram.png'
import Facebook from '../images/facebook.png'

const Footer = () => {
    return (
        <footer>
             <div className='footer' id='contacto'>
                <div className='footer-main-content'>
                    <div className="footer-logo-container">
                        <Image className='logo-footer' src={Logo} fluid/>
                    </div>
                    <div className="contact-info-container">
                        <ul>
                            <li className="contact-info-phone"></li>
                            <li className="contact-info-adress"></li>
                        </ul>
                     </div>
                </div>
                <div className="icons-footer">
                    <a  className="fb-icon-footer" target="_blank" rel="noreferrer" href="https://www.facebook.com/AEBA-Asociaci%C3%B3n-de-Educadores-de-la-provincia-de-Buenos-Aires-100686775269741"><img src={Facebook} alt="Ícono Facebook" className="fb-icon-img"/></a>
                    <a  className="ig-icon-footer" target="_blank" rel="noreferrer" href="http://www.instagram.com/aeba_educadores"><img src={Instagram} alt="Ícono Instagram" className="ig-icon-img" /></a>
                </div>          
            </div>
        </footer>
    )
}

export default Footer;
