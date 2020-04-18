import React from 'react';
import classes from './App.module.scss';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Remote from "./components/Remote/Remote";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {




    return (
    <div className={classes.App}>
      <Header id='header' gridWidth={classes.gridProjectWidth}/>
      <Profile id='profile' gridWidth={classes.gridProjectWidth}/>
      <Skills id='skills' gridWidth={classes.gridProjectWidth}/>
      <Works id='works' gridWidth={classes.gridProjectWidth}/>
      <Remote id='remote' gridWidth={classes.gridProjectWidth}/>
      <Contacts id='contacts' gridWidth={classes.gridProjectWidth}/>
      <Footer id='footer' gridWidth={classes.gridProjectWidth}/>
    </div>
  );
}

export default App;
