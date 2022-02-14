import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './Header.css';
import logo from '../../assets/logo.png';
import { Navbar } from '..';

function Header() {
    return (
        <section className="header">
            <Navbar></Navbar>
            <section className='header-top'>
                <section className='header-text'>
                    <h2 className="header-h2">L’<span style={{color: '#ffc107'}}>e</span>.Commerce Citoyen</h2>
                    <p className="header-p">
                        Des centaines de commerces proches de
                        chez vous ont déjà en stock le produit que vous souhaitez commander, demandez-leur
                        directement grâce à Lemplette
                    </p>
                </section>
                <section>
                    <img src={logo} className='logo'/>
                </section>
            </section>
            <MDBBtn rounded className='mx-2' color='warning'>
                Déposer une demande
            </MDBBtn>
        </section>
    )
}

export default Header;