import React from 'react'
import classes from './Skill.module.scss'

const Skill = props => {
    return (
            <figure className={classes.icon}>
                {props.icon}
                <figcaption>{props.title}</figcaption>
            </figure>
    );
};

export default Skill;









