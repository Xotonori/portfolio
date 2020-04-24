import React from 'react'
import classes from './Profile.module.scss'
import photo from './img/profile.jpeg'



const Profile = props => {
    return (
        <div id={props.id} className={`${classes.Profile} ${props.projectWidth}`}>
            <div className={classes.wrapper}>
                <h2 className={classes.title}>
                    Привет!<br/>
                    Меня зовут Алексей.<br/>
                    Я Front-end разработчик.
                </h2>
                <img src={photo} className={classes.photo} alt="photo"/>
            </div>
        </div>
    );
};

export default Profile;