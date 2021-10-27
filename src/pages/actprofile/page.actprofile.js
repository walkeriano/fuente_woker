import "./page.actprofile.css";
import expwoklogo from "../../img/exp-wok-logo.svg";
import fondo2 from "../../img/fondo-2.svg";
import men2 from "../../img/men2.png";
import wssLogo from "../../img/wss-icon.svg";
import iconLlamada from "../../img/llamada-icon.svg";
import iconCorreo from "../../img/correo-icon.svg";
import horario from "../../img/24h-icon.svg";
import maestria from "../../img/maestria-icon.svg";
import creativo from "../../img/creativo-icon.svg";
import edit from "../../img/edit.svg";
import agilizar from "../../img/agilizar.svg";
import funone from "../../img/fun-one.svg";
import funtwo from "../../img/fun-two.svg";
import funthree from "../../img/fun-three.svg";
import funfour from "../../img/fun-four.svg";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export function Actprofile() {
  let history = useHistory();
  const [view, setView] = useState(false);

  return (
    <div className="body-allPro">
      <img src={fondo2} className="fondo2" alt="fondo2" />
      <section className="sec-gen">
        {!view && (
          <div>
            <div className="header-exp">
              <img src={expwoklogo} className="expwoklogo" alt="expwoklogo" />
              <button
                onClick={() => history.push("/page.abogados")}
                className="x2"
              >
                Cerrar
              </button>
            </div>
            <div className="sectionProfile2">
              <div className="divNameUser">
                <h3 className="nameUser">FERNANDO PRADA</h3>
                <p>Violencia Doméstica</p>
              </div>
              <div className="flex-functions">
                <div className="column-functions">
                  <div>
                    <h2 className="h2-functions">AWD143</h2>
                    <p className="p-functions">Codigo de Expediente</p>
                  </div>
                  <div className="flex-edit">
                    <p className="p-edit">Editar</p>
                    <img src={edit} className="edit" alt="edit" />
                  </div>
                </div>
                <div onClick={() => setView(true)} className="btn-agilizar">
                  <img className="agilizar" src={agilizar} alt="men2" />
                  <p className="p-agilizar">
                    Agilizar
                    <br />
                    alcance
                  </p>
                  <div className="flex-circle">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
              <img className="men3" src={men2} alt="men2" />
              <div className="flexBtnProfile">
                <button className="flexBtn-agilizar">Visualizar CV</button>
                <button className="flexBtn-agilizar">Compartir</button>
              </div>
              <div className="flexBtnContact">
                <div className="btnContact-agilizar">
                  <img src={wssLogo} className="wssLogo" alt="wssLogo" />
                  <p className="pMensaje-agilizar">Enviar Mensaje</p>
                  <div className="flex-btn3">
                    <div className="circle-2"></div>
                    <div className="circle-2"></div>
                    <div className="circle-2"></div>
                  </div>
                </div>
                <div className="btnContact-agilizar">
                  <img
                    src={iconLlamada}
                    className="iconLlamada"
                    alt="iconLlamada"
                  />
                  <p className="pMensaje-agilizar">Iniciar Llamada</p>
                  <div className="flex-btn3">
                    <div className="circle-2"></div>
                    <div className="circle-2"></div>
                    <div className="circle-2"></div>
                  </div>
                </div>
                <div className="btnContact-agilizar">
                  <img
                    src={iconCorreo}
                    className="iconCorreo"
                    alt="iconCorreo"
                  />
                  <p className="pMensaje-agilizar">
                    Enviar
                    <br />
                    Mail
                  </p>
                  <div className="flex-btn3">
                    <div className="circle-2"></div>
                    <div className="circle-2"></div>
                    <div className="circle-2"></div>
                  </div>
                </div>
              </div>
              <div className="secBenefits2">
                <div className="benefits2">
                  <img src={horario} className="horario" alt="horario" />
                  <p className="pBenefits">Atención 24h.</p>
                </div>
                <div className="benefits2">
                  <img src={maestria} className="maestria" alt="maestria" />
                  <p className="pBenefits">Maestría</p>
                </div>
                <div className="benefits2">
                  <img src={creativo} className="creativo" alt="creativo" />
                  <p className="pBenefits">Creativo</p>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        )}
        {view ? (
          <div>
            <div className="header-exp">
              <img src={expwoklogo} className="expwoklogo" alt="expwoklogo" />
              <button onClick={() => setView(false)} className="x2">
                Volver
              </button>
            </div>
            <div className="Sec-agilizar">
              <h2 className="h2-agilizar">
                Llega a más personas
                <br />
                en menos tiempo
              </h2>
              <div className="flex-info-agilizar">
                <div className="btn-agilizar">
                  <img className="agilizar" src={agilizar} alt="men2" />
                  <p className="p-agilizar">
                    Agilizar
                    <br />
                    alcance
                  </p>
                  <div className="flex-circle">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </div>
                <div>
                  <h2 className="h2-info-agil">¿Cómo funciona?</h2>
                  <p className="p-info-agil">
                    Función pagada que te permite
                    <br />
                    utilizar diferentes métodos de
                    <br />
                    agilización, aumentando el
                    <br />
                    transito de usuarios en tu
                    <br />
                    expediente profesional.
                  </p>
                </div>
              </div>
              <div className="flex-paso">
                <p>Paso 1° / ¿Cuál es tu objetivo?</p>
                <div className="box-div"></div>
              </div>
              <p className="p-descr">
                Selecciona el metodo de agilización
                <br />
                que más se acomoda a tus intereses
              </p>
              <div className="flex-functions-agilizar">
                <div className="functions-agilizar">
                  <div className="div-circle">
                    <img src={funone} className="funone" alt="funone" />
                  </div>
                  <h2 className="h2-functions-agil">
                    Superposición
                    <br />
                    de Ubicación
                  </h2>
                  <p className="p-functions-agil">
                    Aparece en las primeras
                    <br />
                    opciones de tus categorías.
                  </p>
                  <p className="price-functions-agil">S/40.00</p>
                </div>
                <div className="functions-agilizar">
                  <div className="div-circle">
                    <img src={funtwo} className="funtwo" alt="funtwo" />
                  </div>
                  <h2 className="h2-functions-agil">
                    Presencia
                    <br />
                    Continua
                  </h2>
                  <p className="p-functions-agil">
                    Aparece fecuentemente
                    <br />
                    en la lista de expedientes.
                  </p>
                  <p className="price-functions-agil">S/40.00</p>
                </div>
              </div>
              <div className="flex-functions-agilizar">
                <div className="functions-agilizar">
                  <div className="div-circle">
                    <img src={funthree} className="funthree" alt="funthree" />
                  </div>
                  <h2 className="h2-functions-agil">
                    Maximiza
                    <br />
                    El Alcance
                  </h2>
                  <p className="p-functions-agil">
                    Ofrece tus servicios
                    <br />
                    en más categorías
                    <br />
                    simultaneamente.
                  </p>
                  <p className="price-functions-agil">S/40.00</p>
                </div>
                <div className="functions-agilizar">
                  <div className="div-circle">
                    <img src={funfour} className="funfour" alt="funfour" />
                  </div>
                  <h2 className="h2-functions-agil">
                    WOKER
                    <br />
                    Representantes
                  </h2>
                  <p className="p-functions-agil">
                    Seguridad y confianza
                    <br />
                    con nuestra insignia de
                    <br />
                    experiencia profesional.
                  </p>
                  <p className="price-functions-agil">S/40.00</p>
                </div>
              </div>
              <p>¿Listo para agilizar tu expediente?</p>
              <img></img>
              <div className="flex-paso">
                <p>Paso 2° / Realiza tu pago seguro</p>
                <div className="box-div"></div>
              </div>
              <p>dsadsadasdasdasdas</p>
              <div></div>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
