import React from 'react'
import classes from './Header.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";

const Header = props => {
    return (
        <header id={props.id} className={`${classes.Header} ${props.projectWidth}`}>
            <nav className={classes.navigation}>
                <Link className={classes.item} smooth={true} onClick={() => scroll.scrollToTop()}>Главная</Link>
                <Link className={classes.item} to={'profile'} smooth={true}>Обо мне</Link>
                <Link className={classes.item} to={'skills'} smooth={true} offset={-44}>Скилы</Link>
                <Link className={classes.item} to={'works'} smooth={true} offset={-44}>Проекты</Link>
                <Link className={classes.item} to={'remote'} smooth={true} offset={-44}>Удаленка</Link>
                <Link className={classes.item} to={'contacts'} smooth={true} offset={-44}>Контакты</Link>
            </nav>
        </header>
    );
};

export default Header;