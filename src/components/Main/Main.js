import React from 'react';
import Promo from './Promo';
import NavTab from './NavTab';
import AboutProject from './AboutProject';
import Techs from './Techs'
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Header from '../Header';
import Footer from '../Footer';

function Main(props) {
  return (
    <main className="main">
      <Header loggedIn={props.loggedIn} />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
}
export default Main;