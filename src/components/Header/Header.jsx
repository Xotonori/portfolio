import React from 'react'
import classes from './Header.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";


const onPhoneAnimationMouseOver = (e) => {
    let phone = e.target;
    setTimeout(() => phone.style.backgroundPosition = '100% 100%')
};

const onPhoneAnimationMouseOut = (e) => {
    let phone = e.target;
    setTimeout(() => phone.style.backgroundPosition = '0 100%')
};

const Header = props => {

    return (
        <header id={props.id} className={`${classes.Header} ${props.projectWidth}`}>

            <a
                className={classes.phone}
                href="tel:+79218857226"
                onMouseOver={onPhoneAnimationMouseOver}
                onMouseOut={onPhoneAnimationMouseOut}
            > +7 (921) 885 72 26 </a>
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