import React from "react";
import "./styles.css";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const actualYear = new Date().getFullYear();
  return (
    <footer>
      <h2>Iglesia Cristianización S.P.M</h2>
      <h3>Campamento Juvenil Generación Que Golpea</h3>
      <h4>26 al 28 de Agosto 2022</h4>
      <small>
        Vacaional Brisas del Mar, San Cristobal. Costo: RD$3,500P/P
      </small>

      <div className="footer__socials">
        <a href="https://wa.me/18095294493">
          <IoLogoWhatsapp />
        </a>
        <a href="https://web.facebook.com/IglesiadelaCristianizacionSanPedroDeMacoris">
          <BsFacebook />
        </a>
      </div>

      <div className="footer_copyright">
        <small>
          {actualYear} &copy; Cristianización San Pedro de Macoris, All rights
          reserved.
        </small>
        <small>
          {actualYear} &copy; Rainiery Valerio Gonzalez, All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
