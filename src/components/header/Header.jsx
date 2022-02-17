import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './Header.css';
import logo from '../../assets/logo.png';
import background from '../../assets/bluetexture.jpg';
import { Navbar } from '..';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Header() {
    return (
        <div style={{backgroundImage:`url(${background})`}}>
            <MDBContainer breakpoint="md" className='responsive-container-header'>
                <MDBRow>
                    <Navbar></Navbar>
                </MDBRow>
            </MDBContainer>
            <MDBContainer breakpoint="md" className='container-fluid'>
                <MDBRow className='d-flex align-items-center'>
                        <MDBCol size='md' className='col-md-6 order-sm-first order-last'>
                            <h1 className="header-h2 responsive-header-h2">L’<span style={{color: '#ffc107'}}>e</span>.Commerce Citoyen</h1>
                            <p className="header-p responsive-header-p">
                                Des centaines de commerces proches de
                                chez vous ont déjà en stock le produit que vous souhaitez commander, demandez-leur
                                directement grâce à Lemplette
                            </p>
                        </MDBCol>
                        <MDBCol size='md' className='col-md-5 mt-5 responsive-image-header-width'>
                            <img src={logo} className='img-fluid'/>
                        </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size='md' className='col-md-12 mt-5 mb-5 text-center'>
                        <MDBBtn rounded className='mx-2 btn btn-warning btn-lg font-weight-bold'>
                            Déposer une demande
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Header;