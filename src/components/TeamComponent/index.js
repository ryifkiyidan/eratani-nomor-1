import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AndrewS from '../../assets/Andrew Soeherman.png';
import KevinJ from '../../assets/Kevin Juan.png';
import AnglesG from '../../assets/Angles Gani.png';
import BharatO from '../../assets/pak bharat 3.png';
import Riswanto from '../../assets/Pak-Riswanto 1.png';
import LinkedIn from '../../assets/Linkedin.png';

function TeamComponent() {
  function Card({ image, linkedIn, name, jobPosition }) {
    return (
      <div>
        <div className="card-container">
          <img src={image} alt="team" />
          <a href={linkedIn} className="card-linkedin">
            <img src={LinkedIn} alt="team" />
          </a>
          <div className="card-detail-container">
            <p className="card-detail-name">{name}</p>
            <p className="card-detail-position">{jobPosition}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Container className="team-container px-3 pt-5 mb-2">
      <Row>
        <Col className="text-center mb-4">
          <h1 className="text-success text-bold font-weight-bold">Tim Kami</h1>
        </Col>
        <div className="text-center d-flex flex-flow flex-wrap justify-content-center">
          <Card image={AndrewS} linkedIn="asd" name="Andrew Soeherman" jobPosition="CEO of Eratani" />
          <Card image={KevinJ} linkedIn="asd" name="Kevin Juan" jobPosition="SVP Business & Operation" />
          <Card image={AnglesG} linkedIn="asd" name="Angles Gani" jobPosition="SVP Sales" />
          <Card image={BharatO} linkedIn="asd" name="Bharat Ongso" jobPosition="Advisor" />
          <Card image={Riswanto} linkedIn="asd" name="Riswanto" jobPosition="Advisor" />
        </div>
      </Row>
    </Container>
  );
}

export default TeamComponent;
