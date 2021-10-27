import "./page.abogados.css";
import expwoklogo from "../../img/exp-wok-logo.svg";
import fondo2 from "../../img/fondo-2.svg";
import candado2 from "../../img/candado_2.svg";
import alert from "../../img/alert.svg";
import { useHistory } from "react-router-dom";

export function Abogados() {
  let history = useHistory();

  return (
    <div className="body-allPro">
      <img src={fondo2} className="fondo2" alt="fondo2" />
      <section className="sec-gen">
        <div className="header-exp">
          <img src={expwoklogo} className="expwoklogo" alt="expwoklogo" />
          <button onClick={() => history.push("/")} className="x2">
            X
          </button>
        </div>
        <h2 className="titulo-h2-expedientes">
          Hola ¿Qué tal?
          <br />
          ingresa tu codigo
          <br />
          de expediente
        </h2>
        <img src={candado2} className="candado2" alt="candado2" />
        <div className="div_password2">
          <input
            className="input_password2"
            name=""
            id=""
            type="password"
            placeholder="Escribe Aquí"
            required
          />
          <button onClick={() => history.push("/page.actprofile")} className="flecha2" href="">
            {" "}
            >{" "}
          </button>
        </div>
        <span className="lost-cod">Olvide mi codigo de acceso</span>
        <br />
        <br />
        <br />
        <br />
        <div className="flex-alert2">
          <p className="p-divs">Exclusivo para Abogados</p>
          <img src={alert} className="alert2" alt="alert" />
        </div>
        <br /><br /><br /><br />
      </section>
    </div>
  );
}
