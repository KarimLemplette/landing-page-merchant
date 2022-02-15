import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './Header.css';
import logo from '../../assets/logo.png';
import background from '../../assets/bluetexture.jpg';
import { Navbar } from '..';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Header() {
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
        <section className="header">
           
            <MDBContainer breakpoint="md">
                <MDBRow>
                    <Navbar></Navbar>
                        <MDBCol size='md' className='col-md-6'>
                            <h1 className="header-h2">L’<span style={{color: '#ffc107'}}>e</span>.Commerce Citoyen</h1>
                            <p className="header-p">
                                        Des centaines de commerces proches de
                                        chez vous ont déjà en stock le produit que vous souhaitez commander, demandez-leur
                                        directement grâce à Lemplette
                            </p>
                        </MDBCol>
                        <MDBCol size='md' className='col-md-4'>
                            <img src={logo} className='logo'/>
                        </MDBCol>
                </MDBRow>
                    <MDBRow>
                        <MDBCol size='md' className='col-md-6 offset-md-4 mt-5'>
                            <MDBBtn rounded className='mx-2 btn btn-warning btn-lg'>
                                Déposer une demande
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
            </MDBContainer>
           
        </section>
        </div>
    )
}

export default Header;