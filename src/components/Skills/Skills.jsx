import React from 'react'
import classes from './Skills.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHtml5, faCss3, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons'
import Icon from '@iconify/react';
import reduxIcon from '@iconify/icons-simple-icons/redux';
import typeScript from '@iconify/icons-simple-icons/typescript';
import Skill from "./Skill/Skill";

const Skills = props => {
    return (
        <div id={props.id} className={`${classes.Skills} ${props.projectWidth}`}>
            <Skill icon={<FontAwesomeIcon icon={faHtml5} size={'5x'}/>} title={'HTML5'}/>
            <Skill icon={<FontAwesomeIcon icon={faCss3} size={'5x'}/>} title={'CSS3'}/>
            <Skill icon={<FontAwesomeIcon icon={faJsSquare} size={'5x'}/>} title={'JavaScript'}/>
            <Skill icon={<FontAwesomeIcon icon={faReact} size={'5x'}/>} title={'React'}/>
            <Skill icon={<Icon icon={reduxIcon} height="75px"/>} title={'Redux'}/>
            <Skill icon={<Icon icon={typeScript} height="75px"/>} title={'TypeScript'}/>
        </div>
    );
};

export default Skills;









