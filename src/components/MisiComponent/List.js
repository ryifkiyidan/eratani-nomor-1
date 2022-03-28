import React from 'react';
import { Col } from 'react-bootstrap';
import Bullet from '../../assets/Ellipse 76.png';

function List({ text }) {
  return (
    <Col className="d-flex flex-row">
      <div className="pe-2">
        <img alt="bullet" src={Bullet} width="18" height="18" />
      </div>
      <div>
        <p className="m-0 text-content">{text}</p>
      </div>
    </Col>
  );
}

export default List;
