import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import AboutComponent from 'components/AboutComponent';
import BannerComponent from 'components/BannerComponent';
import VisiComponent from 'components/VisiComponent';
import NavbarComponent from './components/NavbarComponent';
import MisiComponent from 'components/MisiComponent';
import TeamComponent from 'components/TeamComponent';
import FooterComponent from 'components/FooterComponent';
import './App.css';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <NavbarComponent />
      <BannerComponent />
      <AboutComponent />
      <VisiComponent />
      <MisiComponent />
      <TeamComponent />
      <FooterComponent />
    </ThemeProvider>
  );
}

export default App;
