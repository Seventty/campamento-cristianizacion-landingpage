import React from "react";
import "./styles.css";
import { BiCheck } from "react-icons/bi";

const Information = () => {
  return (
    <section id="information">
      <h2>Informacion de campamento</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Title 1</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Title 2</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Title 3</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Information;