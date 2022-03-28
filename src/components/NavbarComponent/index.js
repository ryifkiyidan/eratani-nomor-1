import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/Logo.png';

function NavbarComponent() {
  return (
    <>
      <Navbar fixed="top" bg="light" variant="light" className="py-3">
        <Container fluid className="px-5">
          <Navbar.Brand className="px-5" href="#home">
            <img alt="logo" src={Logo} width="180" height="auto" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="me-5" href="#home">
                Beranda
              </Nav.Link>
              <Nav.Link className="me-5" href="#about">
                Tentang Kami
              </Nav.Link>
              <Nav.Link className="me-5" href="#tips">
                Tips & Berita Pertanian
              </Nav.Link>
              <Nav.Link className="me-5" href="#activity">
                Kegiatan
              </Nav.Link>
            </Nav>
            <div>
              <Button variant="warning">Mitra Petani</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
