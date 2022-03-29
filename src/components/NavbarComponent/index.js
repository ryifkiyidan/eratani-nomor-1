import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/Logo.png';

function NavbarComponent() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  // @ts-ignore
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleToggle = () => {
    if (!navBackground) {
      setNavBackground(true);
    }
  };

  return (
    <Navbar fixed="top" expand="lg" style={{ transition: '0.5s ease', backgroundColor: navBackground ? 'white' : 'transparent' }} className="navbar-container py-3">
      <Container fluid className="px-0 px-lg-5">
        <Navbar.Brand className="mx-4 mx-lg-5" href="#home">
          <img alt="logo" src={Logo} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-3 mx-lg-5" onClick={() => handleToggle()} />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="mx-auto">
            <Nav.Link className="mx-0 mx-lg-3" href="#home">
              Beranda
            </Nav.Link>
            <Nav.Link className="mx-0 mx-lg-3" href="#about">
              Tentang Kami
            </Nav.Link>
            <Nav.Link className="mx-0 mx-lg-3" href="#tips">
              Tips & Berita Pertanian
            </Nav.Link>
            <Nav.Link className="mx-0 mx-lg-3" href="#activity">
              Kegiatan
            </Nav.Link>
          </Nav>
          <Button className="button-navbar" variant="warning">
            Mitra Petani
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
