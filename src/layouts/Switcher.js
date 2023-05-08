import { Fragment, useContext, useState } from "react";
import ColorContext from "../context/colorContext";

const colors = [
  { name: "blue", colorImg: "img/styleswitcher/azul.jpg" },
  { name: "red", colorImg: "img/styleswitcher/rojo.jpg" },
  { name: "goldrenrod", colorImg: "img/styleswitcher/amarillo-oscuro.jpg" },
  { name: "magenta", colorImg: "img/styleswitcher/morado.jpg" },
  { name: "yellowgreen", colorImg: "img/styleswitcher/verde.jpg" },
  { name: "orange", colorImg: "img/styleswitcher/anaranjado.jpg" },
  { name: "green", colorImg: "img/styleswitcher/verde-oscuro.jpg" },
  { name: "yellow", colorImg: "img/styleswitcher/amarillo.jpg" },
];

const Switcher = () => {
  const { changeColor } = useContext(ColorContext);
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      {/* Live Style Switcher Starts - demo only */}
      <div
        id="switcher"
        className=""
        style={{ display: toggle ? "block" : "none" }}
      >
        <div className="content-switcher">
          <h4>Cambia de estilo</h4>
          <ul>
            {colors.map((color, i) => (
              <li key={i}>
                <a
                  href="#"
                  title={color.name}
                  className="color"
                  key={i}
                  onClick={() => changeColor(color.name)}
                >
                  <img src={color.colorImg} alt={color.name} />
                </a>
              </li>
            ))}
          </ul>
          <br />
          {/* <a
            href=""
            className="waves-effect waves-light btn font-weight-600 purchase hoverable"
          >
            {" "}
            <span>
              <i className="fa fa-shopping-cart" /> PURCHASE
            </span>
          </a> */}
          <div id="hideSwitcher" onClick={() => setToggle(false)}>
            ×
          </div>
        </div>
      </div>
      <div
        id="showSwitcher"
        className="styleSecondColor"
        onClick={() => setToggle(true)}
        style={{ display: toggle ? "none" : "block" }}
      >
        <i className="fa fa-cog fa-spin" />
      </div>
      {/* Live Style Switcher Ends - demo only */}
    </Fragment>
  );
};
export default Switcher;
