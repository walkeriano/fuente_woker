import "./page.all_pro.css";
import logoNaranja from "../../img/logo_woker_naranja.svg";
import abogado from "../../img/abogado.svg";
import usuario2 from "../../img/usuario-2.svg";
import flecha from "../../img/btn_flecha.svg";
import men from "../../img/men.png";
import fondo2 from "../../img/fondo-2.svg";


export function AllPro() {
    return <div className="body-allPro">
        <img src={fondo2} className="fondo2" alt="fondo2" />
        <div className="header">
            <button className="x">X</button>
            <img src={logoNaranja} className="logoNaranja" alt="logoNaranja" />
            <img src={abogado} className="abogado-btn" alt="abogado" />
        </div>
        <h2  className="titulo-h2-allPro">Desliza para visualizar los expedientes<br />profesionales disponibles</h2>
        <div className="all-pros">
            <h2 className="h2-tittle">Transito & Accidentes</h2>
            <div className="flex-results">
                <p className="numbers">145</p>
                <img className="icon-user" src={usuario2} alt="usuario" />
                <p className="results-disponibles">Abogados Disponibles</p>
            </div>
            <div className="flex-expedientes">
                <div className="flechas">
                    <img src={flecha} alt="btn_flecha" />
                </div>
                <div className="flex-visualizacion">
                    <div className="vacio"></div>
                    <div className="profile">
                        <p className="name-profile">FERNANDO PRADA</p>
                        <img className="men" src={men} alt="men" />
                    </div>
                    <div className="vacio-2"></div>
                </div>
                <div className="flechas-2">
                    <img src={flecha} alt="btn_flecha" />
                </div>
            </div>
        
            <div className="btn-contacto-div">
              <span className="btn-contacto">
                Contactar
              </span>
            </div>
        </div>
    </div>
    
}