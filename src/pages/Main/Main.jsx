import React from 'react';
import Promo from '../../components/Promo/Promo';
import Techs from '../../components/Techs/Techs';
import AboutProject from '../../components/AboutProject/AboutProject';
import AboutMe from '../../components/AboutMe/AboutMe'
import Portfolio from '../../components/Portfolio/Portfolio'
import Footer from '../../components/Footer/Footer'
import './Main.css';
import NavTab from '../../components/NavTab/NavTab';
import Header from '../../components/Header/Header';

function Main({ isLoggedIn }) {
  return (
    <>
    <Header isLoggedIn={isLoggedIn}/>
      <main className='main'>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Main;


