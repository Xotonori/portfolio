import React, {useState} from 'react'
import classes from './Work.module.scss'
import './option.css'
import Button from "../../Button/Button";
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Work = props => {
    const [isVisible, setIsVisible] = useState(false);


    return (
        <div className={classes.work}>

                <TransitionGroup className={classes.showWork} onMouseOver={()=>setIsVisible(true)} onMouseLeave={()=>setIsVisible(false)}>
                    {isVisible && (

                        <CSSTransition
                            classNames={'option'}
                            timeout={300}
                        >

                            <div className={classes.wrapperDimmingBlock}>
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
                            </div>

                        </CSSTransition>

                    )}
                </TransitionGroup>

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