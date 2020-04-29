import React from 'react'
import classes from './Work.module.scss'
import Button from "../../Button/Button";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const Work = props => {

    const Bounce = styled.div`animation: 1s ${keyframes`${fadeIn}`} `;

    return (
        <div className={classes.work}>
            <div className={classes.showWork}>
                <Bounce>
                    <div className={classes.dimmingBlock}>
                        <div className={`${classes.wrapButton} ${classes.topWrapButton}`}>
                            <a href="#">
                                <Button name={'Смотреть'}/>
                            </a>
                        </div>
                        <div className={`${classes.wrapButton} ${classes.bottomWrapButton}`}>
                            <a href="#">
                                <Button name={'Github'}/>
                            </a>
                        </div>
                    </div>
                </Bounce>



            </div>
            <div>
                <h3>Название проетка</h3>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit.
                </p>
            </div>
        </div>
    );
};

export default Work;

// style={{backgroundImage: props.bImageUrl}}
