import React from 'react'
import classes from './Input.module.scss'

const Input = props => (
        <div className={classes.inputWrapper}>
            <input
                type={props.type ? props.type : 'text'}
                placeholder={props.placeholder}
                value={props.value}
                className={`${classes.Input} ${props.errorClass} ${props.className}`}
                onChange={props.onChange}
            />
        </div>
);

export default Input;