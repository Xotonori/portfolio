import React from 'react'
import classes from './Anchor.module.scss'
import {Link} from "react-scroll";


const Anchor = props => {

    return (
        <Link to={props.to}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className={classes.item}
        >
            {props.anchorName}
        </Link>

);


};

export default Anchor;