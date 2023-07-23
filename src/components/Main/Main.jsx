import React from 'react';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import './Main.css';
import NavTab from '../NavTab/NavTab';
import Header from '../Header/Header';

function Main({ loggedIn }) {
  return (
    <>
      <main className='main'>
        <Header loggedIn={loggedIn}/>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
};

export default Main;


