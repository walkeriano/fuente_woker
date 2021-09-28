import "./mod_acces.css";

export function ModAcces() {
  return (
    <div className="acceso_usuario">
      <h2>
        Bienvenido(a), Selecciona
        <br />
        tu forma de acceso
      </h2>
      <div className="action_acceso_usuario">
        <div className="btn_usuario">
          <div className="usuario">
            <a href="./inicio_sesion_user.html">
              <img src="./img/usuario.svg" alt="usuario" />
            </a>
          </div>
          <p>Usuario</p>
        </div>
        <span className="linea"></span>
        <div className="btn_abogado">
          <div className="usuario">
            <a href="./inicio_sesion_user.html">
              <img src="./img/abogado.svg" alt="abogado" />
            </a>
          </div>
          <p>Abogado</p>
        </div>
      </div>
      <div className="flex_form">
        <div className="flex_acceso_rapido">
          <p>Acceso Rápido</p>
          <div className="acceso_rapido">
            <div>
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
            <div>
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
            <a href="">></a>
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
            <a href=""> > </a>
          </div>
        </form>
      </div>
      <a className="lost_password" href="">
        ¿Olvidaste tu contraseña?
      </a>
    </div>
  );
}
