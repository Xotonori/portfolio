import React from 'react'
import classes from './Button.module.scss'

const Button = props => {
    return (
        <button className={classes.Button}>
            {props.name}
        </button>
    );
};

export default Button;