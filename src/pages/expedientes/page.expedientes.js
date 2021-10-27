import "./page.expedientes.css";
import expwoklogo from "../../img/exp-wok-logo.svg";
import fondo2 from "../../img/fondo-2.svg";
import candado from "../../img/candado.svg";
import alert from "../../img/alert.svg";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function Expedientes() {
  const [view, setView] = useState(false);
  let history = useHistory();

  return (
    <div className="body-allPro">
      <img src={fondo2} className="fondo2" alt="fondo2" />
      {!view && (
        <section className="sec-gen">
          <div className="header-exp">
            <img src={expwoklogo} className="expwoklogo" alt="expwoklogo" />
            <button onClick={() => history.push("/")} className="x2">
              X
            </button>
          </div>
          <h2 className="titulo-h2-expedientes">
            Ofrece tus Servicios
            <br />
            profesionales
            <br />
            sin comisiones
          </h2>
          <div className="div-acceso">
            <div>
              <img></img>
              <p className="p-div1">EXCLUSIVO PARA ABOGADOS</p>
            </div>
            <p className="p-div1">
              Para crear tu expediente profesional
              <br />
              es necesario confirmar tu identidad
            </p>
            <form>
              <input
                className="inp"
                placeholder="Colegiatura del Perú"
                type="text"
                name=""
              />
              <input
                className="inp"
                placeholder="N° de Licencia Vigente"
                type="text"
                name=""
              />
            </form>
          </div>
          <div className="flex-datos">
            <p className="p-divs">1. Ingresa los siguientes datos</p>
            <div className="box-div"></div>
          </div>
          <div className="div-datos">
            <div>
              <img></img>
              <img></img>
            </div>
            <form>
              <input
                className="inp"
                id=""
                placeholder="Nombres"
                type="text"
                name="a"
              />
              <input
                className="inp"
                placeholder="Apellidos"
                type="text"
                name=""
              />
              <input
                className="inp"
                placeholder="N° de Cel / What´s App"
                type="text"
                name=""
              />
              <input
                className="inp"
                placeholder="Correo Electrónico"
                type="text"
                name=""
              />
            </form>
          </div>
          <div className="flex-datos">
            <p className="p-divs">2. Define tu categoría de servicio</p>
            <div className="box-div"></div>
          </div>
          <p className="p-divs-exp">
            Selecciona la categoría donde deseas
            <br />
            ofrecer tu experiencia profesional
          </p>
          <div className="div-categoria">
            <form className="form-fortaleza">
              <select className="inp" name="select">
                <option value="value2" selected>
                  Transito & Accidentes
                </option>
                <option value="value3">Violencia Doméstica</option>
                <option value="value4">Injusticias & Estafas</option>
                <option value="value5">Defensa LGBTQ+</option>
                <option value="value6">Asuntos Corporativos</option>
                <option value="value7">Discriminación Social</option>
                <option value="value8">Protección al Consumidor</option>
                <option value="value9">Protección Animal</option>
              </select>
              <select className="inp" name="select">
                <option value="value2">Transito & Accidentes</option>
                <option value="value3" selected>
                  Violencia Doméstica
                </option>
                <option value="value4">Injusticias & Estafas</option>
                <option value="value5">Defensa LGBTQ+</option>
                <option value="value6">Asuntos Corporativos</option>
                <option value="value7">Discriminación Social</option>
                <option value="value8">Protección al Consumidor</option>
                <option value="value9">Protección Animal</option>
              </select>
              <input
                className="inp"
                placeholder="Curriculum Vitae"
                type="text"
                name=""
              />
            </form>
          </div>
          <div className="flex-datos">
            <p className="p-divs">3. Elige tus fortalezas principales</p>
            <div className="box-div"></div>
          </div>
          <p className="p-divs">
            Selecciona las opciones que<br />representen
            los beneficios de<br />contratar tus servicios
          </p>
          <div className="div-fortaleza">
            <form className="form-fortaleza">
              <select className="inp" name="select">
                <option value="value1" selected>
                  Horario de Atención
                </option>
                <option value="value2">Atención 24hr.</option>
                <option value="value3">Atención Diurna</option>
                <option value="value3">Atención Nocturna</option>
                <option value="value3">Atención Inmediata</option>
              </select>
              <select className="inp" name="select">
                <option value="value1" selected>
                  Grado Profesional
                </option>
                <option value="value2">Especialista</option>
                <option value="value3">Bachiller</option>
                <option value="value4">Maestría</option>
                <option value="value5">Doctorado</option>
              </select>
              <select className="inp" name="select">
                <option value="value1" selected>
                  Beneficio Personal
                </option>
                <option value="value2">Puntual</option>
                <option value="value3">Eficaz</option>
                <option value="value4">Proactivo</option>
                <option value="value5">Persistente</option>
                <option value="value6">Creativo</option>
                <option value="value7">Productivo</option>
              </select>
            </form>
          </div>
          <div className="flex-datos2">
            <input type="radio" className="radio-ter" />
            <p className="p-divs">Acepto términos y condiciones</p>
          </div>
          <span onClick={() => setView(true)} className="btn-crear-exp">
            Crear Expediente
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      )}
      {view ? (
        <section className="sec-gen">
          <div className="header-exp">
            <img src={expwoklogo} className="expwoklogo" alt="expwoklogo" />
          </div>
          <h2 className="titulo-h2-expedientes">
            Felicitaciones,
            <br />
            ya casí está listo
            <br />
            tu expediente
          </h2>
          <div className="div-candado">
            <div>
              <img src={candado} className="candado" alt="candado" />
              <p className="p-div3">! FILTRO DE SEGURIDAD !</p>
            </div>
            <p className="p-div4">
              Estámos confirmando tus datos
              <br />
              esto puede tardar unos minutos
            </p>
            <p className="p-div5">
              Te enviaremos un Mail para
              <br />
              activar tus credenciales
            </p>
          </div>
          <div className="flex-alert">
            <p className="p-divs">Exclusivo para Abogados</p>
            <img src={alert} className="alert" alt="alert" />
          </div>
          <span onClick={() => history.push("/")} className="btn-crear-exp">
            Entendido, Gracias
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      ) : null}
    </div>
  );
}
