// import logo from './assets/Logo.png';
import AboutComponent from 'components/AboutComponent';
import BannerComponent from 'components/BannerComponent';
import React from 'react';
import { ThemeProvider } from 'react-bootstrap';
import './App.css';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <NavbarComponent />
      <BannerComponent />
      <AboutComponent />
    </ThemeProvider>
  );
}

export default App;
