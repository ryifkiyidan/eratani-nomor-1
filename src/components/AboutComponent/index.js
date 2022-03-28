import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutImage from '../../assets/Pic.png';
import Logo from '../../assets/Logo.png';

function AboutComponent() {
  return (
    <>
      <Container className="px-3 pt-5 mb-2">
        <Row>
          <Col className="text-center mb-4">
            <h1 className="text-success text-bold font-weight-bold">Tentang Kami</h1>
          </Col>
        </Row>
        <Row>
          <Col md="4">
            <div className="parent">
              <img alt="about" src={AboutImage} className="image1 w-100 h-auto" />
              <img alt="logo" src={Logo} className="image2 w-75" />
            </div>
          </Col>
          <Col md="8">
            <div className="ps-0 ps-md-5 pt-3 pt-md-0">
              <p className="text-content m-0">
                Eratani adalah perusahaan Agri-tech yang didirikan oleh anak bangsa. Berangkat dari mimpi dan semangat yang besar, Eratani memiliki misi untuk menyejahterakan petani nusantara dengan mempermudah jalannya proses pertanian
                dari hulu sampai hilir. Melalui digitalisasi proses hulu (pendanaan petani, pengelolaan rantai pasokan) hingga proses hilir (distribusi & penyaluran hasil panen), Eratani berfokus membangun ekosistem pertanian yang kuat dan
                berusaha memberikan kemudahan akses kepada petani dengan teknologi untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutComponent;
