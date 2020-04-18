import React from 'react'
import classes from './Profile.module.scss'

const Profile = props => {
    return (
        <div id={props.id} className={`${classes.Profile} ${props.gridWidth}`}>
            Profile
        </div>
    );
};

export default Profile;