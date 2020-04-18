import React from 'react'
import classes from './Header.module.scss'
import Anchor from "./Anchor/Anchor";

const Header = props => {
    return (
        <header id={props.id} className={`${classes.Header} ${props.gridWidth}`}>
            <nav className={classes.navigation}>
                <Anchor anchorName={'Главная'} to={'header'}/>
                <Anchor anchorName={'Обо мне'} to={'profile'}/>
                <Anchor anchorName={'Скилы'} to={'skills'}/>
                <Anchor anchorName={'Проекты'} to={'works'}/>
                <Anchor anchorName={'Удаленка'} to={'remote'}/>
                <Anchor anchorName={'Контакты'} to={'contacts'}/>
            </nav>
        </header>
    );
};

export default Header;