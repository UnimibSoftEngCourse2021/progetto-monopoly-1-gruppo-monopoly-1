import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Partita from './Partita'

export function iniziaPartita(numero, diff) {

    let numeroGiocatori = numero;
    let difficolta = diff;

    ReactDOM.render(
        <React.StrictMode>
            <Partita numeroGiocatori={numeroGiocatori} difficolta={difficolta} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default iniziaPartita()
