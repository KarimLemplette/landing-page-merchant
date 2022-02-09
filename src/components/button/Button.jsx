import React from 'react';

import './Button.css';

function Button(props) {
    return (
        <button className={props.styleName}>
            {props.text}
        </button>
    )
}

export default Button;