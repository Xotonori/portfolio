import React from 'react'
import classes from './Remote.module.scss'
import Button from "../Button/Button";

const Remote = props => {
    return (
        <div id={props.id} className={`${classes.Remote} ${props.projectWidth}`}>
            <h2>Рассматриваю варианты удаленной работы</h2>
            <Button
                name={'Нанять меня'}
            />
        </div>
    );
};

export default Remote;