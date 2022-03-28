import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function VisiComponent() {
  return (
    <>
      <Container className="px-3 pt-5 mb-2">
        <Row>
          <Col className="text-center mb-4">
            <h1 className="text-success text-bold font-weight-bold">Visi Eratani</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center text-content m-0">
              Menjadi platform Agri-Tech no.1 di Indonesia dengan membangun ekosistem pertanian yang kuat dari hulu ke hilir, mulai dari pembiayaan, pengadaan barang, edukasi, sampai distribusi hasil panen dan memberikan kemudahan bagi
              petani untuk mendapatkan akses dengan dukungan teknologi untuk mensejahterahkan kehidupan petani di Indonesia kedepannya.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VisiComponent;
