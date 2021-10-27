import "./page.categories.css";
import logoNaranja from "../../img/logo_woker_naranja.svg";
import abogado from "../../img/abogado.svg";
import fondo2 from "../../img/fondo-2.svg";
import catVioDom from "../../img/cat-vio-dom.svg";
import catEstafas from "../../img/cat-estafas.svg";
import catLgbt from "../../img/cat-lgtbq.svg";
import catAdm from "../../img/cat-administrativos.svg";
import catDiscr from "../../img/cat-discriminacion.svg";
import catTransito from "../../img/cat-accident.svg";
import catProteccion from "../../img/cat-proteccion.svg";
import catAnimal from "../../img/cat-animal.svg";
import { useHistory } from "react-router-dom";


export function Categories() {
    let history = useHistory();

    return <div className="body-categories">
        <img src={fondo2} className="fondo2" alt="fondo2" />
        <img src={logoNaranja} className="logoNaranja" alt="logoNaranja" />
        <h2  className="titulo-h2-categories">Selecciona una categoría legal<br />para iniciar la busqueda</h2>
        <div className="all-categories">
            <div className="flex-cat">
                <div onClick={() => history.push("/all-pro/page-all-pro")} className="cat">
                    <img src={catTransito} className="catTransito" alt="catTransito" />
                    <p className="titulo-cat">Transito y <br />Accidentes</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
                <div onClick={() => history.push("/all-pro/page-all-pro")}  className="cat">
                    <img src={catVioDom} className="catVioDom" alt="catVioDom" />
                    <p className="titulo-cat">Violencia<br />Doméstica</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
            </div>
            <div className="flex-cat">
                <div onClick={() => history.push("/all-pro/page-all-pro")}  className="cat">
                    <img src={catEstafas} className="catEstafas" alt="catEstafas" />
                    <p className="titulo-cat">Injusticias<br />y Estafas</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
                <div onClick={() => history.push("/all-pro/page-all-pro")}  className="cat">
                    <img src={catLgbt} className="catLgbt" alt="catLgbt" />
                    <p className="titulo-cat">Defensa<br />LGBTQ+</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
            </div>
            <div className="flex-cat">
                <div onClick={() => history.push("/all-pro/page-all-pro")}  className="cat">
                    <img src={catAdm} className="catAdm" alt="catAdm}" />
                    <p className="titulo-cat">Asuntos <br />Corporativos</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
                <div onClick={() => history.push("/all-pro/page-all-pro")}  className="cat">
                    <img src={catDiscr} className="catDiscr" alt="catDiscr" />
                    <p className="titulo-cat">Discriminación<br />Social</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
            </div>
            <div className="flex-cat">
                <div onClick={() => history.push("/all-pro/page-all-pro")}  className="cat">
                    <img src={catProteccion} className="catProteccion" alt="catProteccion" />
                    <p className="titulo-cat">Protección<br />al Consumidor</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
                <div onClick={() => history.push("/all-pro/page-all-pro")}  className="cat">
                    <img src={catAnimal} className="catAnimal" alt="catAnimal" />
                    <p className="titulo-cat">Protección<br />Animal</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
}