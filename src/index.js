import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/styles.css";
import App from './App';
import { Home } from './pages/home/page.home';
import { Categories } from './pages/categories/page.categories';
import { AllPro } from './pages/all_pro/page.all_pro';
import { Profile } from './pages/profile/page.profile';
import { Expedientes } from './pages/expedientes/page.expedientes';
import { Abogados } from './pages/abogados/page.abogados';
import { Actprofile } from './pages/actprofile/page.actprofile';

function app(props) {
    return (
        <div>
            {Home()}
            {Categories()}
            {AllPro()}
            {Profile()}
            {Expedientes()}
            {Abogados()}
            {Actprofile()}
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));