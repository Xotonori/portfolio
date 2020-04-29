import React from 'react'
import classes from './Works.module.scss'
import Work from "./Work/Work";
import img1 from './Work/img/work.png'

const Works = props => {
    return (
        <div id={props.id} className={`${classes.wrapWorks} ${props.projectWidth}`}>
            <h2 className={classes.title}>Мои работы</h2>
            <div className={classes.works}>
                <Work bImageUrl={img1}/>
                <Work/>
                <Work/>
                <Work/>
            </div>
        </div>
    );
};

export default Works;