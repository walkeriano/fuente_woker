import "./page.home.css";
import logo from "../../img/logo_woker.svg";
import flecha from "../../img/btn_flecha.svg";
import usuario from "../../img/usuario.svg";
import abogado from "../../img/abogado.svg";
import fondo from "../../img/fondo.svg";
import { useState, useRef } from "react";

export function Home() {
  const [show, setShow] = useState(false);
  const refButtonFb = useRef(null);
  const refButtonGmail = useRef(null);

  function authFacebook() {
    // invocar api de facebook
    console.log("autenticacion facebook");
  }

  function authGmail() {
    // invocar api de gmail
    console.log("autenticacion gmail");
  }

  function activateAuthSocial(social, ref) {
    console.log("social", social);
    console.log("ref", ref);
    const { current } = ref;
    current.classList.toggle("is-active");

    social === "facebook" ? authFacebook() : authGmail();
  }
  return (
    <section className="body_home">
      
      <div>
        <img src={fondo} className="fondo" alt="fondo" />
        <h1 className="titulo_h1">Respaldo Legal Inmediato</h1>
        <img src={logo} className="logo_woker" alt="logo_woker" />
        
        {!show && (
          <div>
            <h2 className="titulo_h2">Contacta<br />Abogados al Instante</h2>
            <div className="a_conocenos_div">
              <span onClick={() => setShow(true)} className="a_conocenos">
                Iniciar
              </span>
            </div>
            <div className="btn_flecha">
                <img src={flecha} alt="btn_flecha" />
            </div>
          </div>
        )}
      </div>
      {show ? (
        <div className="acceso_usuario">
          <h2 className="h2">
            Bienvenido(a), Selecciona
            <br />
            tu forma de acceso
          </h2>
          <div className="action_acceso_usuario">
            <div className="btn_usuario">
              <div className="usuario">
                <img src={usuario} alt="usuario" />
              </div>
              <p>Usuario</p>
            </div>
            <span className="linea"></span>
            <div className="btn_abogado">
              <div className="usuario">
                <img src={abogado} alt="abogado" />
              </div>
              <p>Abogado</p>
            </div>
          </div>
          <div className="flex_form">
            <div className="flex_acceso_rapido">
              <p>Acceso Rápido</p>
              <div className="acceso_rapido">
                <div
                  ref={refButtonFb}
                  className="cursor-pointer"
                  onClick={() => activateAuthSocial("facebook", refButtonFb)}
                >
                  <div className="acceso_fb">
                    <div>
                      <div className="box_fb">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                      </div>
                      <div className="btn_fb"></div>
                    </div>
                  </div>
                  <p className="fb">Facebook</p>
                </div>
                <div
                  ref={refButtonGmail}
                  className="cursor-pointer"
                  onClick={() => activateAuthSocial("gmail", refButtonGmail)}
                >
                  <div className="acceso_gmail">
                    <div className="box_gmail">
                      <div className="circle"></div>
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                    <div className="btn_gmail"></div>
                  </div>
                  <p className="gmail">Gmail</p>
                </div>
              </div>
            </div>
            <form className="flex_iniciar_sesion">
              <p>Iniciar Sesión</p>
              <div className="div_name">
                <input
                  className="input_name"
                  name=""
                  id=""
                  type="text"
                  placeholder="Nombre"
                  required
                />
                <a className="flecha" href="">
                  >
                </a>
              </div>
              <div className="div_password">
                <input
                  className="input_password"
                  name=""
                  id=""
                  type="password"
                  placeholder="Password"
                  required
                />
                <a className="flecha" href="">
                  {" "}
                  >{" "}
                </a>
              </div>
            </form>
          </div>
          <a className="lost_password" href="">
            ¿Olvidaste tu contraseña?
          </a>
          <div className="cerrar-div">
            <span onClick={() => setShow(false)} className="cerrar">
              X
            </span>
          </div>
        </div>
      ) : null}
    </section>
  );
}
