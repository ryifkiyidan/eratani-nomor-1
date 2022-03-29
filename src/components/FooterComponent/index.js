import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../../assets/Logo.png';

function InfoContainer() {
  return (
    <div className="px-2 px-lg-5 size-12 mb-2 mb-lg-0">
      <div className="mb-3 mb-lg-4">
        <img alt="logo" src={Logo} className="white-logo" />
      </div>
      <div className="text-break address mb-2 mb-lg-4">Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec. Tebet, Gedung Pakuwon Tower Lt 26 Unit J, Jakarta Selatan, DKI Jakarta 12870, Indonesia</div>
      <div className="d-flex flex-column flex-wrap">
        <div className="mb-1 mb-lg-2">Email : info.eratani@eratani.co.id</div>
        <div>Telepon : +62 811 952 2577</div>
      </div>
    </div>
  );
}

function MenuContainer() {
  return (
    <div className="px-2 px-lg-5 mt-4 mt-lg-0">
      <div className="size-18 mb-3">
        <b>Menu</b>
      </div>
      <div className="size-12 mb-1">Tim Kami</div>
      <div className="size-12 mb-1">Mitra Eratani</div>
      <div className="size-12 mb-1">Tips & Berita Pertanian</div>
      <div className="size-12">Karir</div>
    </div>
  );
}

function LanguageButton() {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-lg-center align-items-lg-center my-0 my-lg-auto">
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
  );
}

function Link({ icon, link }) {
  return (
    <a className="btn btn-link text-white px-2 px-lg-3" href={link}>
      <i className={'size-18 fa-brands fa-' + icon}></i>
    </a>
  );
}

function SocialMedia() {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-start justify-content-lg-center align-items-start align-items-lg-center">
      <Link icon="tiktok" link="https://tiktok.com" />
      <Link icon="instagram" link="https://instagram.com" />
      <Link icon="linkedin" link="https://linkedin.com" />
      <Link icon="youtube" link="https://youtube.com" />
      <Link icon="whatsapp" link="https://whatsapp.com" />
    </div>
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

function FooterComponent() {
  return (
    <footer className="bg-success text-white text-lg-start mt-5">
      <Container className="footer-container-lg p-5">
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
          <InfoContainer />
          <MenuContainer />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center px-0 px-lg-5">
          <LanguageButton />
          <SocialMedia />
        </div>
      </Container>
      <Container className="footer-container p-5">
        <div className="d-flex flex-column flex-wrap">
          <InfoContainer />
          <SocialMedia />
        </div>
        <div className="d-flex flex-column px-0 px-lg-5">
          <LanguageButton />
          <MenuContainer />
        </div>
      </Container>
      <Copyright />
    </footer>
  );
}

export default FooterComponent;
