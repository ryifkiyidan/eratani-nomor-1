import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Bullet from '../../assets/Ellipse 76.png';

function MisiComponent() {
  function List({ text }) {
    return (
      <Col md="12" className="d-flex flex-row mb-3">
        <div className="d-flex align-items-start pt-3 ps-2 pe-3 pe-lg-4">
          <img alt="bullet" src={Bullet} className="bullet-icon" />
        </div>
        <div>
          <p className="m-0 text-content">{text}</p>
        </div>
      </Col>
    );
  }

  return (
    <Container className="px-3 pt-5 mb-2">
      <Row>
        <Col className="text-center mb-4">
          <h1 className="text-success text-bold font-weight-bold">Misi Eratani</h1>
        </Col>
      </Row>
      <Row>
        <List text="Membangun dan memajukan ekosistem pertanian dengan digitalisasi dan transparansi di setiap prosesnya." />
        <List text="Menjadi platform dan mitra bagi petani dalam mendukung segala proses pertanian." />
        <List text="Menjadi mitra bagi para kreditor, supplier, dan distributor guna meningkatkan kinerja rantai pasok di dunia pertanian." />
        <List text="Berkolaborasi dengan badan usaha pangan guna meningkatkan ketahanan pangan nasional." />
        <List text="Memberikan dampak sosial yang positif dan membangun bagi ekosistem pertanian di Indonesia." />
      </Row>
    </Container>
  );
}

export default MisiComponent;
