import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import Menu from '../Menu';
import reportWebVitals from '../reportWebVitals';

export function iniziaPartita(numero, diff) {

    let numeroGiocatori = numero;
    let difficolta = diff;

    React.render(
        <React.StrictMode>
            <App numeroGiocatori={numeroGiocatori} difficolta={difficolta} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default iniziaPartita()
