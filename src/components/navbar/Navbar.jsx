import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './Navbar.css';

function Navbar() {
    return (
        <section className="navbar-test">
            <MDBBtn rounded className='mx-2' color='secondary'>
                Les commercants
            </MDBBtn>
            <MDBBtn rounded className='mx-2' color='warning'>
                S'inscrire/Mon compte
            </MDBBtn>
        </section>
    )
}

export default Navbar;
