import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../../assets/Logo.png';

function FooterComponent() {
  function Link({ icon, link }) {
    return (
      <a className="btn btn-link text-white px-3" href={link}>
        <i className={'size-18 fa-brands fa-' + icon}></i>
      </a>
    );
  }

  function Copyright() {
    return (
      <div className="text-center p-3 size-12">
        Copyright © 2021 by
        <a className="ps-1 text-white text-decoration-none" href="https://eratani.co.id/">
          PT Eratani Teknologi Nusantara
        </a>
      </div>
    );
  }

  return (
    <footer className="bg-success text-white text-center text-lg-start mt-5">
      <div className="d-flex flex-row flex-wrap justify-content-between h-100 footer-container">
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-center h-100">
          <div className="pe-5 size-12">
            <div className="mb-4">
              <img alt="logo" src={Logo} className="white-logo" />
            </div>
            <div className="text-break address mb-4">Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec. Tebet, Gedung Pakuwon Tower Lt 26 Unit J, Jakarta Selatan, DKI Jakarta 12870, Indonesia</div>
            <div className="d-flex flex-column flex-wrap">
              <div className="mb-2">Email : info.eratani@eratani.co.id</div>
              <div>Telepon : +62 811 952 2577</div>
            </div>
          </div>
          <div className="ps-5">
            <div className="size-18 mb-3">
              <b>Menu</b>
            </div>
            <div className="size-12 mb-1">Tim Kami</div>
            <div className="size-12 mb-1">Mitra Eratani</div>
            <div className="size-12 mb-1">Tips & Berita Pertanian</div>
            <div className="size-12">Karir</div>
          </div>
        </div>
        <div className="d-flex flex-column flex-wrap align-items-center justify-content-center pe-5 me-5">
          <div className="d-flex flex-row flex-wrap justify-content-center align-items-center my-auto">
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center mx-2">
              <i className="size-18 fa-solid fa-globe"></i>
            </div>
            <div className="d-flex flex-column flex-wrap justify-content-center align-items-center size-18 mx-2">
              <b>IN</b>
              <div className="lang-bar bg-warning"></div>
            </div>
            <div className="d-flex flex-column flex-wrap justify-content-center align-items-center size-18 mx-2">
              <b>EN</b>
              <div className="lang-bar bg-transparent"></div>
            </div>
          </div>
          <div>
            <Link icon="tiktok" link="https://tiktok.com" />
            <Link icon="instagram" link="https://instagram.com" />
            <Link icon="linkedin" link="https://linkedin.com" />
            <Link icon="youtube" link="https://youtube.com" />
            <Link icon="whatsapp" link="https://whatsapp.com" />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}

export default FooterComponent;
