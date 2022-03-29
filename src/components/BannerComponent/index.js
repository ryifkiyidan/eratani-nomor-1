import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../../assets/Banner.png';

function BannerComponent() {
  return (
    <Container fluid className="p-0">
      <img alt="logo" src={Banner} className="d-inline-block align-top w-100 banner-image" />
    </Container>
  );
}

export default BannerComponent;
