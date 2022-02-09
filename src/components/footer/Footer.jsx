import React from 'react';
import './Footer.css';

function Footer () {
  return (
    <section className="footer">
        <section className='footer-header'>
            <h2>Lemplett<span style={{color: '#ffc107'}}>e</span>, le <span style={{color: '#ffc107'}}>e</span>Commerce Citoy<span style={{color: '#ffc107'}}>e</span>n</h2>
            <hr className="footer-separator" />
        </section>
        <section className="footer-info">
            <section className="footer-info-left">
            <section className="footer-info-title">
                À Propos
            </section>
            <section className="footer-info-text">
                Pourquoi Lemplette ?
                <br/>
                Espace Presse
                <br/>
                On parle de nous
                <br/>
                Espace Carrière
                <br/>
                Blog
            </section>        
            </section>
            <section className="footer-info-center">
            <section className="footer-info-title">
                Conditions
            </section>
            <section className="footer-info-text">
                Mention Légales
                <br/>
                Confidentialité
                <br/>
                Cookies
                <br/>
                Près de chez vous
                <br/>
                Crédits
            </section>
            </section>
            <section className="footer-info-right">
                <section className="footer-info-title">
                Aide
                </section>
                <section className="footer-info-text">
                    FAQ
                    <br/>
                    Contact
                </section>
            </section>
        </section>
    </section>
  )
}

export default Footer;