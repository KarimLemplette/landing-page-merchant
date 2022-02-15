import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import './Navbar.css';

function Navbar() {
    return (
        <MDBContainer breakpoint="md" className='navbar-buttons'>
            <MDBBtn rounded className='mx-2 mt-3' color='secondary'>
                Les commercants
            </MDBBtn>
            <MDBBtn rounded className='mx-2 mt-3' color='warning'>
                S'inscrire/Mon compte
            </MDBBtn>
        </MDBContainer>
    )
}

export default Navbar;
