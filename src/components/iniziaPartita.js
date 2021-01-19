import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import Banca from './Banca'

export function iniziaPartita(numero, diff) {

    let numeroGiocatori = numero;
    let difficolta = diff;

    ReactDOM.render(
        <React.StrictMode>
            <App numeroGiocatori={numeroGiocatori} difficolta={difficolta}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

    //alert('prova '+numeroGiocatori);
    if(numeroGiocatori===2){
        <Banca saldoContoPedine={[8750,8750,0,0,0,0]} contrattiGiocatori={[7,7,0,0,0,0]} />
    };
    if(numeroGiocatori===3){
        <Banca saldoContoPedine={[7500,7500,7500,0,0,0]} contrattiGiocatori={[6,6,6,0,0,0]} />
    };
    if(numeroGiocatori===4){
        <Banca saldoContoPedine={[6250,6250,6250,6250,0,0]} contrattiGiocatori={[5,5,5,5,0,0]} />
    };
    if(numeroGiocatori===5){
        <Banca saldoContoPedine={[5000,5000,5000,5000,5000,0]} contrattiGiocatori={[4,4,4,4,4,0]} />
    };
    if(numeroGiocatori===6){
        <Banca saldoContoPedine={[3750,3750,3750,3750,3750,3750]} contrattiGiocatori={[3,3,3,3,3,3]} />
    };
}

export default iniziaPartita()
