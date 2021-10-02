import "./page.categories.css";
import logoNaranja from "../../img/logo_woker_naranja.svg";
import abogado from "../../img/abogado.svg";
import fondo2 from "../../img/fondo-2.svg";


export function Categories() {
    return <div className="body-categories">
        <img src={fondo2} className="fondo2" alt="fondo2" />
        <img src={logoNaranja} className="logoNaranja" alt="logoNaranja" />
        <h2  className="titulo-h2-categories">Selecciona una categoria legal<br />para encontrar soluciones</h2>
        <div className="all-categories">
            <div className="flex-cat">
                <div className="cat">
                    <img src={abogado} className="icon-cat" alt="icon-cat" />
                    <p className="titulo-cat">Transito y <br />Accidentes</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
                <div className="cat">
                    <img src={abogado} className="icon-cat" alt="icon-cat" />
                    <p className="titulo-cat">Violencia<br />Doméstica</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
            </div>
            <div className="flex-cat">
                <div className="cat">
                    <img src={abogado} className="icon-cat" alt="icon-cat" />
                    <p className="titulo-cat">Injusticias<br />y Estafas</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
                <div className="cat">
                    <img src={abogado} className="icon-cat" alt="icon-cat" />
                    <p className="titulo-cat">Defensa<br />LGBT</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
            </div>
            <div className="flex-cat">
                <div className="cat">
                    <img src={abogado} className="icon-cat" alt="icon-cat" />
                    <p className="titulo-cat">Asuntos Laborales<br />y Administrativos</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
                <div className="cat">
                    <img src={abogado} className="icon-cat" alt="icon-cat" />
                    <p className="titulo-cat">Discriminación<br />Social</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
            </div>
            <div className="flex-cat">
                <div className="cat">
                    <img src={abogado} className="icon-cat" alt="icon-cat" />
                    <p className="titulo-cat">Protección<br />al Consumidor</p>
                    <div className="flex-btn">
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                        <div className="circle-2"></div>
                    </div>
                </div>
                <div className="cat">
                    <img src={abogado} className="icon-cat" alt="icon-cat" />
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