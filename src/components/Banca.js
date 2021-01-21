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

    giocatorePassaDalVia = (giocatori,turnoGiocatore,setGiocatori) => {
        // Incrementa il capitale del giocatore di turno di 500 quando passa dal VIA              
        var nuoviGiocatori = giocatori;
        nuoviGiocatori[turnoGiocatore].capitale=giocatori[turnoGiocatore].capitale+500;
        setGiocatori(nuoviGiocatori);
        alert('Giocatore ' + (turnoGiocatore + 1) + ' passa Dal Via');  
    }

    getSaldoGiocatore
}
export default Banca;