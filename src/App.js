import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Remote from "./components/Remote/Remote";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

const App = props => (
    <div className={'App'}>
        <Header id='header' projectWidth={'projectWidth'}/>
        <Profile id='profile' projectWidth={'projectWidth'}/>
        <Skills id='skills' projectWidth={'projectWidth'}/>
        <Works id='works' projectWidth={'projectWidth'}/>
        <Remote id='remote' projectWidth={'projectWidth'}/>
        <Contacts id='contacts' projectWidth={'projectWidth'}/>
        <Footer id='footer' projectWidth={'projectWidth'}/>
    </div>
);

export default App;
