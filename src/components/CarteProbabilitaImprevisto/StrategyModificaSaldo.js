import React, { Component } from 'react'
import AttivaCartaStrategy from './AttivaCartaStrategy';

class StrategyModificaSaldo extends AttivaCartaStrategy {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    attivaCarta = ( idCarta, 
                    turnoGiocatore, 
                    giocatori, 
                    setGiocatori, 
                    segnalini, 
                    setSegnalini, 
                    terreni, 
                    setTerreni, 
                    tavolaGioco, 
                    setTavolaGioco, 
                    societàStazioni, 
                    setSocietàStazioni,
                    pagaAffitto,
                    testo,
                    cambiaTesto,
                    handleOpen,
                    handleClose,
                    difficolta,
                    nuovoTesto,
                    carte) => {
        let nuoviGiocatori = giocatori;
                        
        //Modifica il saldo del giocatore di una somma prefissata
        if (carte[idCarta][2] !== 0){
            nuoviGiocatori[turnoGiocatore].capitale += carte[idCarta][2];
        }
                
        //Modifica il saldo in base alle case e agli alberghi posseduti dal giocatore
        let numeroCase = 0;
        let numeroAlberghi = 0;
        if (idCarta === 22) {
            for (let i = 0; i < terreni.length; i++) {   
                if (terreni[i].proprietario === turnoGiocatore) {
                    numeroCase += terreni[i].case;
                    numeroAlberghi += terreni[i].alberghi;
                }
            }
            nuoviGiocatori[turnoGiocatore].capitale += (carte[idCarta][3]*numeroCase) + (carte[idCarta][4]*numeroAlberghi);
        }
                
        //Modifica il saldo ricevendo o distribuendo agli altri giocatori una somma di denaro 
        if (carte[idCarta][5] !== 0) {
            nuoviGiocatori[turnoGiocatore].capitale += (nuoviGiocatori.length * carte[idCarta][5]);
            if (carte[idCarta][5] > 0) {
                for (let i = 0; i < nuoviGiocatori.length; i++) {   
                    nuoviGiocatori[i].capitale -= carte[idCarta][5];
                }
            } else {
                for (let i = 0; i < nuoviGiocatori.length; i++) {   
                    nuoviGiocatori[i].capitale += carte[idCarta][5];
                }
            }
        }
        setGiocatori(nuoviGiocatori);
    }

    render () {
        return(
            <div>
            </div>
        )
    }
}

export default StrategyModificaSaldo;