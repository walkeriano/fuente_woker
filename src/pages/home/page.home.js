import "./page.home.css";
import logo from '../../img/logo_woker.svg';
import flecha from '../../img/btn_flecha.svg';

export function Home() {
    return <section className = "body_home">
        <h1 className = "titulo_h1">Respaldo Legal Inmediato</h1>
        <img src={logo} className="logo_woker" alt="logo_woker" />
        
        <h2 className = "titulo_h2">
            CONTACTA ABOGADOS AL INSTANTE
        </h2>
        <div className="a_conocenos_div">
            <a className="a_conocenos" href="">Iniciar Busqueda</a> 
        </div>
        <img src={flecha} className="btn_flecha" alt="btn_flecha" />
    </section>
}