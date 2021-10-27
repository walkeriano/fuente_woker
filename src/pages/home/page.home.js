import "./page.home.css";
import logo from "../../img/logo_woker.svg";
import flecha from "../../img/btn_flecha.svg";
import usuario from "../../img/usuario.svg";
import abogado from "../../img/abogado.svg";
import fondo from "../../img/fondo.svg";
import iconFb from "../../img/fb-icon.svg";
import iconGmail from "../../img/gmail-icon.svg";
import iconop1 from "../../img/icon-op1.svg";
import iconop2 from "../../img/icon-op2.svg";
import iconop3 from "../../img/icon-op3.svg";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

export function Home() {
  const [show, setShow] = useState(false);
  const [showFormUser, setFormShowUser] = useState(true);
  const refButtonFb = useRef(null);
  const refButtonGmail = useRef(null);
  const refButtonGmail2 = useRef(null);
  let history = useHistory();

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

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit!!!");
    history.push("/categories/page-categories");
  };
  
  return (
    <section className="body_home">
      <div>
        <img src={fondo} className="fondo" alt="fondo" />
        <h1 className="titulo_h1">Respaldo Legal Inmediato</h1>
        <img src={logo} className="logo_woker" alt="logo_woker" />

        {!show && (
          <div>
            <h1 className="titulo_h2">
              Contacta
              <br />
              Abogados al Instante
            </h1>
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
            <div onClick={() => setFormShowUser(true)} className="btn_usuario">
              <div className="usuario">
                <img src={usuario} alt="usuario" />
              </div>
              <p className="pUser">USUARIO</p>
            </div>
            <div onClick={() => setFormShowUser(false)} className="btn_abogado">
              <div className="abogado">
                <img src={abogado} alt="abogado" />
              </div>
              <p className="pUser">ABOGADO</p>
            </div>
          </div>
          {showFormUser && (
            <div className="flex_form">
              <div className="flex_acceso_rapido">
                <p className="p">Acceso Rápido</p>
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
                        <div className="btn_fb">
                          <img src={iconFb} className="iconFb" alt="iconFb" />
                        </div>
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
                      <div className="btn_gmail">
                        <img
                          src={iconGmail}
                          className="iconGmail"
                          alt="iconGmail"
                        />
                      </div>
                    </div>
                    <p className="gmail">Gmail</p>
                  </div>
                </div>
              </div>
              <form className="flex_iniciar_sesion" onSubmit={onSubmit}>
                <p className="p">Iniciar Sesión</p>
                <div className="div_name">
                  <input
                    className="input_name"
                    name=""
                    id=""
                    type="text"
                    placeholder="Nombre"
                    required
                  />
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
                  <button className="flecha" href="">
                    {" "}
                    >{" "}
                  </button>
                </div>
              </form>
              <a className="lost_password" href="">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          )}

          {!showFormUser && (
            <div className="flex_form2">
            <div className="flex_acceso_rapido2">
              <p className="p2">Expedientes Woker</p>
              <div className="acceso_rapido">
                <div
                  ref={refButtonFb}
                  className="cursor-pointer"
                  onClick={() => activateAuthSocial("facebook", refButtonFb)}
                >
                  <div className="acceso_fb2">
                    <div>
                      <div className="box_fb">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                      </div>
                      <div onClick={() => history.push("/page.abogados")} className="btn_fb2">
                        <img src={iconop1} className="iconop1" alt="iconop1" />
                      </div>
                    </div>
                  </div>
                  <p className="fb2">Visualizar Expediente</p>
                </div>
                <div
                  ref={refButtonGmail}
                  className="cursor-pointer"
                  onClick={() => activateAuthSocial("gmail", refButtonGmail)}
                >
                  <div className="acceso_gmail2">
                    <div className="box_gmail">
                      <div className="circle"></div>
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                    <div onClick={() => history.push("/page.expedientes")} className="btn_gmail2">
                      <img
                        src={iconop2}
                        className="iconop2"
                        alt="iconop2"
                      />
                    </div>
                  </div>
                  <p className="gmail2">Crear Nuevo Expediente</p>
                </div>
                <div
                  ref={refButtonGmail2}
                  className="cursor-pointer"
                  onClick={() => activateAuthSocial("gmail", refButtonGmail2)}
                >
                  <div className="acceso_gmail3">
                    <div className="box_gmail">
                      <div className="circle"></div>
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                    <div  className="btn_gmail2">
                      <img
                        src={iconop3}
                        className="iconop3"
                        alt="iconop3"
                      />
                    </div>
                  </div>
                  <p className="gmail3">Atención al Cliente</p>
                </div>
              </div>
            </div>
          </div>
          )}
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
