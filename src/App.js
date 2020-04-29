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
      <Header id='header' projectWidth={classes.projectWidth}/>
      <Profile id='profile' projectWidth={classes.projectWidth}/>
      <Skills id='skills' projectWidth={classes.projectWidth}/>
      <Works id='works' projectWidth={classes.projectWidth}/>
      <Remote id='remote' projectWidth={classes.projectWidth}/>
      <Contacts id='contacts' projectWidth={classes.projectWidth}/>
      <Footer id='footer' projectWidth={classes.projectWidth}/>
    </div>
  );
}

export default App;
