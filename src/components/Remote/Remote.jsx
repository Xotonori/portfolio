import React from 'react'
import classes from './Remote.module.scss'

const Remote = props => {
    return (
        <div id={props.id} className={`${classes.Remote} ${props.projectWidth}`}>
            Remote
        </div>
    );
};

export default Remote;