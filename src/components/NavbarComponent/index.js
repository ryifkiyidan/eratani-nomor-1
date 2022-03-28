import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/Logo.png';
import './styles.css';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container fluid className="px-5">
          <Navbar.Brand className="px-3" href="#home">
            <img alt="" src={logo} width="100" height="auto" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="me-3" href="#home">
              Beranda
            </Nav.Link>
            <Nav.Link className="me-3" href="#about">
              Tentang Kami
            </Nav.Link>
            <Nav.Link className="me-3" href="#tips">
              Tips & Berita Pertanian
            </Nav.Link>
            <Nav.Link className="me-3" href="#activity">
              Kegiatan
            </Nav.Link>
          </Nav>
          <div>
            <Button variant="warning">Mitra Petani</Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
