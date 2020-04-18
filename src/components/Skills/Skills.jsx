import React from 'react'
import classes from './Skills.module.scss'

const Skills = props => {
    return (
        <div id={props.id} className={`${classes.Skills} ${props.gridWidth}`}>
            Skills
        </div>
    );
};

export default Skills;