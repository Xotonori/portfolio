import React from 'react'
import classes from './Contacts.module.scss'

const Contacts = props => {
    return (
        <div id={props.id} className={`${classes.Contacts} ${props.gridWidth}`}>
            Contacts
        </div>
    );
};

export default Contacts;