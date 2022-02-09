import React from 'react';
import './Subheader.css';
import Button from '../button';

function Subheader() {
    return (
        <section className="subheader">
            <Button styleName="orange" text="Deposer une demande"/>
        </section>
    )
}

export default Subheader;