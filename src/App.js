import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import AboutComponent from 'components/AboutComponent';
import BannerComponent from 'components/BannerComponent';
import VisiComponent from 'components/VisiComponent';
import NavbarComponent from './components/NavbarComponent';
import './App.css';
import MisiComponent from 'components/MisiComponent';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <NavbarComponent />
      <BannerComponent />
      <AboutComponent />
      <VisiComponent />
      <MisiComponent />
    </ThemeProvider>
  );
}

export default App;
