import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/styles.css";
import App from './App';
import { Home } from './pages/home/page.home';
import { Categories } from './pages/categories/page.categories';
import { AllPro } from './pages/all_pro/page.all_pro';
import { Profile } from './pages/profile/page.profile';

function app(props) {
    return (
        <div>
            {Home()}
            {Categories()}
            {AllPro()}
            {Profile()}
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));