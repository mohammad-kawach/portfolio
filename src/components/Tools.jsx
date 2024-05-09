import typescript from "../assets/icons/typescript.svg";
import bootstrap from "../assets/icons/bootstrap.png";
import cpp from "../assets/icons/c++.png";
import tailwind from "../assets/icons/tailwind-css.png";
import redux from "../assets/icons/redux.png";
import linux from "../assets/icons/linux.png";
import mui from "../assets/icons/material-ui.svg";
import mysql from "../assets/icons/mysql.png";
import nextjs from "../assets/icons/next-js.svg";

const Tools = () => {
  return (
    <>
      <div className="subheading mb-3">Programming Languages & Tools</div>
      <ul className="list-inline dev-icons grid-icons">
        <li className="list-inline-item inline-flex">
          <i className="fab fa-html5"></i>
        </li>
        <li className="list-inline-item inline-flex">
          <i className="fab fa-css3-alt"></i>
        </li>
        <li className="list-inline-item inline-flex">
          <i className="fab fa-js-square"></i>
        </li>
        <li className="list-inline-item inline-flex">
          <img src={typescript} alt="icon" />
        </li>
        <li className="list-inline-item inline-flex">
          <i className="fab fa-react"></i>
        </li>
        <li className="list-inline-item inline-flex tool-icon">
          <img className="nextjs-icon" src={nextjs} alt="icon" />
        </li>
        <li className="list-inline-item inline-flex">
          <img src={redux} alt="icon" />
        </li>
        <li className="list-inline-item inline-flex tool-icon">
          <img src={mui} alt="icon" />
        </li>
        <li className="list-inline-item inline-flex">
          <i className="fab fa-node-js"></i>
        </li>
        <li className="list-inline-item inline-flex">
          <img src={bootstrap} alt="icon" />
        </li>
        <li className="list-inline-item inline-flex">
          <img src={tailwind} alt="icon" />
        </li>

        <li className="list-inline-item inline-flex">
          <i className="fab fa-sass"></i>
        </li>
        <li className="list-inline-item inline-flex">
          <i className="fab fa-less"></i>
        </li>
        <li className="list-inline-item inline-flex">
          <i className="fab fa-wordpress"></i>
        </li>
        <li className="list-inline-item inline-flex">
          <i className="fab fa-npm"></i>
        </li>
        <li className="list-inline-item inline-flex">
          <i className="fab fa-java"></i>
        </li>
        <li className="list-inline-item inline-flex">
          <i className="fas fa-database"></i>
        </li>
        <li className="list-inline-item inline-flex">
          <i className="fab fa-php"></i>
        </li>
        <li className="list-inline-item inline-flex">
          <i className="fab fa-github"></i>
        </li>
        <li className="list-inline-item inline-flex">
          <i className="fab fa-git"></i>
        </li>
        <li className="list-inline-item inline-flex">
          <i className="fab fa-python"></i>
        </li>

        <li className="list-inline-item inline-flex">
          <img src={cpp} alt="icon" />
        </li>
        <li className="list-inline-item inline-flex">
          <img src={linux} alt="icon" />
        </li>
        

        <li className="list-inline-item inline-flex">
          <img src={mysql} alt="icon" />
        </li>
      </ul>
    </>
  );
};

export default Tools;
