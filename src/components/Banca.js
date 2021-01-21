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

    
    partitaCountdown = (giocatori)=> {
        
            var vincitore = giocatori[0];
            var i;
                        
            for(i=1; i<giocatori.length; i++){
                if(vincitore.capitale < giocatori[i].capitale){
                    vincitore = giocatori[i];
                }
            }
            console.log(vincitore);
            //verifico che ci sia un pareggio
            var pareggio = 0;
            var n = 0;
            while(n<giocatori.length){
                if(vincitore.capitale === giocatori[n].capitale){
                    pareggio++
                }
                n++;
            }
                        
            if(pareggio<2){
                alert('Il tempo è finito: Giocatore: '+ vincitore.numero +' hai vinto');
                //concludere la partita
                return;
            }
            else{
                alert("Il tempo è finito: C'é stato un pareggio");
                //concludere la partita
                return;
            }

    }


    getSaldoGiocatore
}
export default Banca;