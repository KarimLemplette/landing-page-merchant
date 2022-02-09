import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
    return (
        <section className="header">
            <section className='header-text'>
                <h2 className="header-h2">{'L’e.Commerce Citoyen'}</h2>
                <p className="header-p">{'Des centaines de commerces proches de \n chez vous ont déjà en stock le produit que \n vous souhaitez commander, demandez-leur \n directement grâce à Lemplette'}</p>
            </section>
            <section>
                <img src={logo} className='logo'/>
            </section>
        </section>
    )
}

export default Header;