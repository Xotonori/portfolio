import React from 'react'
import classes from './Footer.module.scss'

const Footer = props => {
    return (
        <footer id={props.id} className={`${classes.Footer} ${props.gridWidth}`}>
            Footer
        </footer>
    );
};

export default Footer;