import React from "react";
import "./styles.css";
import { BiCheck, BiBible } from "react-icons/bi";
import { FaBed, FaBath, FaUserCircle, FaSoap, FaFemale, FaMale } from "react-icons/fa";
import { MdFastfood, MdHealthAndSafety, MdPool, MdDoNotDisturbAlt } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { TiWarning } from "react-icons/ti";
import { RiHandHeartFill } from "react-icons/ri";

const Information = () => {
  return (
    <section id="information">
      <h2>Informacion de campamento</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Lo que necesitas llevar al Campamento</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiBible className="service__list-icon" />
              <p>Una Biblia.</p>
            </li>
            <li>
              <FaBed className="service__list-icon" />
              <p>Una cobija para arroparte, sábanas y almohada.</p>
            </li>
            <li>
              <FaBath className="service__list-icon" />
              <p>Toalla de baño.</p>
            </li>
            <li>
              <FaUserCircle className="service__list-icon" />
              <p>Articulos de uso personal.</p>
            </li>
            <li>
              <FaSoap className="service__list-icon" />
              <p>Jabón, pasta dental, repelente, protector solar.</p>
            </li>
            <li>
              <MdFastfood className="service__list-icon" size={75}/>
              <p>
                Si desea llevar algún tipo de snacks, puede llevarlos, pero los
                mismos NO pueden requerir de refrigeración.
              </p>
            </li>
            <li>
              <MdHealthAndSafety className="service__list-icon" size={75}/>
              <p>
                En caso de presentar alguna condición médica, llevar los
                medicamentos apropiados y notificar al liderazgo.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Código de vestimenta / Vestimenta requerida para piscina</h3>
          </div>
          <ul className="service__list">
            <li>
              <GiClothes className="service__list-icon" size={50}/>
              <p>Pijamas que no sean cortas (en el caso de las chicas)</p>
            </li>
            <li>
              <RiHandHeartFill className="service__list-icon" />
              <p>Ropa cómoda (preferiblemente t-shirts y jeans)</p>
            </li>
            <li>
                <TiWarning className="service__list-icon" size={75}/>
              <p>
                <b>OJO:</b> NADA DE ROPAS <b>TRANSPARENTES</b>, ROPAS DEMASIADO{" "}
                <b>PEGADAS</b>, ESCOTES <b>PRONUNCIADOS</b> NI <b>TIRANTES</b>
              </p>
            </li>
            <li>
              <MdPool className="service__list-icon" />
              <p><b>VESTIMENTA REQUERIDA PARA LA PISCINA:</b></p>
            </li>
            <li>
              <FaFemale className="service__list-icon" />
              <p><b>Chicas:</b></p>
            </li>
            <li>
            <BiCheck className="service__list-icon" size={50}/>
              <p>Ropa interior oscura y que pueda cubrir bien el cuerpo.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon" size={30}/>
              <p>Pantalones sobre las rodillas.</p>
            </li>
            <li>
            <BiCheck className="service__list-icon" size={30}/>
              <p>T-shirt que no sea transparente</p>
            </li>
            <li>
              <FaMale className="service__list-icon" />
              <p><b>Chicos:</b></p>
            </li>
            <li>
            <BiCheck className="service__list-icon" size={30}/>
              <p>Uso de t-shirt</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Uso de bermudas de baño</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Prohibido llevar</h3>
          </div>
          <ul className="service__list">
            <li>
              <MdDoNotDisturbAlt className="service__list-icon" size={65}/>
              <p>Objetos cortantes o punzantes como: Cuchillos, navajas, Gilletes, tijeras, cutter, destornilladores, etc...</p>
            </li>
            <li>
              <MdDoNotDisturbAlt className="service__list-icon" size={60}/>
              <p>Accesorios y objetos innecesarios de valor como: <b>cadenas, pendientes o pulseras de oro.</b></p>
            </li>
            <li>
              <MdDoNotDisturbAlt className="service__list-icon" size={75}/>
              <p>Dispositivos electrónicos que no sea el celular como: <b>Tablets, Laptops, AirPods, consolas de VideoJuegos.</b></p>
            </li>
            <li>
              <MdDoNotDisturbAlt className="service__list-icon" size={25}/>
              <p>Vapes o Cigarrillos Electrónicos</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Information;
