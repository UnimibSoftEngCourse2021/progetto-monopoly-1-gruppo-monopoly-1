import React, { Component } from 'react';
import TabellaGiocatori from './Tabelle/TabellaGiocatori';

class Banca extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saldoContoGiocatori: [0,0,0,0,0,0],
            contrattiGiocatori: [0,0,0,0,0,0],
        }
    }


    // Passa i parametri a TabellaGiocatori (attualmente non funziona)
    creaTabellaGiocatori = () => {
        for(let i=1; i<=6; i++){
            //this.state.createData(i, this.state.saldoContoGiocatori[i]);
            <TabellaGiocatori props={i, this.state.saldoContoGiocatori[i]} />
        }
    }

    //Modifica il saldo al giocatore (giocatore identificato tramite un numero int)
    modificaSaldo = (sommaDiDenaro, giocatore) => {
        if(this.state.saldoContoPedine[giocatore] + sommaDiDenaro >= 0){
            this.state.saldoContoPedine[giocatore] += sommaDiDenaro;
        }else{
            console.log("Errore"); //TODO
        }
    }

    getSaldoGiocatore
}
export default Banca;