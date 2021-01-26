import React, { Component } from 'react';

class Banca extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saldoContoGiocatori: [0,0,0,0,0,0],
            contrattiGiocatori: [0,0,0,0,0,0],
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

    giocatorePassaDalVia = (giocatori,turnoGiocatore,setGiocatori, handleOpen, cambiaTesto, difficolta) => {
        // Incrementa il capitale del giocatore di turno di 500 quando passa dal VIA              
        var nuoviGiocatori = giocatori;
        nuoviGiocatori[turnoGiocatore].capitale=giocatori[turnoGiocatore].capitale+500;
        if (difficolta === "facile") {
            console.log("Entrato");
            nuoviGiocatori[turnoGiocatore].carteBonus += 1;
            setGiocatori(nuoviGiocatori);
            console.log("Carte bonus: " + nuoviGiocatori[turnoGiocatore].carteBonus); 
            console.log("Carte bonus: " + giocatori[turnoGiocatore].carteBonus); 
        } else {
            setGiocatori(nuoviGiocatori);
        }
        cambiaTesto('Giocatore ' + (turnoGiocatore + 1) + ' passa Dal Via');
        handleOpen(); 
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
                return('Il tempo è finito: Giocatore: '+ vincitore.numero +' hai vinto');
            }
            else{
                return("Il tempo è finito: C'é stato un pareggio");
            }
    }
    getSaldoGiocatore
}

export default Banca;