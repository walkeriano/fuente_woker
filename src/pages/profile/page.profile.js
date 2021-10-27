import "./page.profile.css";
import logo from "../../img/logo_woker.svg";
import abogado from "../../img/abogado.svg";
import fondo3 from "../../img/fondo-3.svg";
import men2 from "../../img/men2.png";
import wssLogo from "../../img/wss-icon.svg";
import iconLlamada from "../../img/llamada-icon.svg";
import iconCorreo from "../../img/correo-icon.svg";
import horario from "../../img/24h-icon.svg";
import maestria from "../../img/maestria-icon.svg";
import creativo from "../../img/creativo-icon.svg";
import { useHistory } from "react-router-dom";

export function Profile() {
  let history = useHistory();

  return (
    <section className="body_home3">
      <img src={fondo3} className="fondo3" alt="fondo3" />
      <div className="header2">
        <button  onClick={() => history.push("/all-pro/page-all-pro")}
        className="x3">X</button>
        <img src={logo} className="logo_woker2" alt="logo_woker" />
        <img src={abogado} className="abogado-btn" alt="abogado" />
      </div>
      <div className="sectionProfile">
        <div className="divNameUser">
          <h3 className="nameUser">FERNANDO PRADA</h3>
          <p>Violencia Doméstica</p>
        </div>
        <img className="men2" src={men2} alt="men2" />
        <div className="flexBtnProfile">
          <button className="flexBtn">Visualizar CV</button>
          <button className="flexBtn">Compartir</button>
        </div>
        <div className="flexBtnContact">
          <div className="btnContact">
            <img src={wssLogo} className="wssLogo" alt="wssLogo" />
            <p className="pMensaje">Enviar Mensaje</p>
            <div className="flex-btn2">
              <div className="circle-2"></div>
              <div className="circle-2"></div>
              <div className="circle-2"></div>
            </div>
          </div>
          <div className="btnContact">
            <img src={iconLlamada} className="iconLlamada" alt="iconLlamada" />
            <p className="pMensaje">Iniciar Llamada</p>
            <div className="flex-btn2">
              <div className="circle-2"></div>
              <div className="circle-2"></div>
              <div className="circle-2"></div>
            </div>
          </div>
          <div className="btnContact">
            <img src={iconCorreo} className="iconCorreo" alt="iconCorreo" />
            <p className="pMensaje">
              Enviar
              <br />
              Mail
            </p>
            <div className="flex-btn2">
              <div className="circle-2"></div>
              <div className="circle-2"></div>
              <div className="circle-2"></div>
            </div>
          </div>
        </div>
        <div className="secBenefits">
          <div className="benefits">
            <img src={horario} className="horario" alt="horario" />
            <p className="pBenefits">Atención 24h.</p>
          </div>
          <div className="benefits">
            <img src={maestria} className="maestria" alt="maestria" />
            <p className="pBenefits">Maestría</p>
          </div>
          <div className="benefits">
            <img src={creativo} className="creativo" alt="creativo" />
            <p className="pBenefits">Creativo</p>
          </div>
        </div>
        <br />
        <br />
      </div>
    </section>
  );
}
