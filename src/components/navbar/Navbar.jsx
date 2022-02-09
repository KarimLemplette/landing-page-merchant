import React from 'react';
import './Navbar.css';
import Button from '../button';

function Navbar() {
    return (
        <section className="navbar">
            <Button styleName="purple" text="Les commercants"/>
            <Button styleName="orange" text="S'inscrire/Mon compte"/>
        </section>
    )
}

export default Navbar;
