import React from 'react'
import classes from './Works.module.scss'

const Works = props => {
    return (
        <div id={props.id} className={`${classes.Works} ${props.gridWidth}`}>
            Works
        </div>
    );
};

export default Works;