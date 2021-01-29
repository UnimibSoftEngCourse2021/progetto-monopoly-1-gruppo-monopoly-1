import React, { Component } from 'react'
import CryptoRandom from '../CryptoRandom';
import StrategyModificaSaldo from './StrategyModificaSaldo';
import StrategySpostaADestinazione from './StrategySpostaADestinazione';
import StrategyUscitaPrigione from './StrategyUscitaPrigione';

class StrategyCaselleIndietro extends Component {
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
        let nuoviSegnalini = segnalini;    

        // Sposta la pedina indietro di 3 caselle.
        // Se la pedina finisce sulla casella Vai in Prigione!, allora la pedina viene spostata in prigione.
        // Se la pedina finisce sulla casella 33, allora il giocatore pesca una carta.
        if (nuoviSegnalini[turnoGiocatore].attualeCasella === 2) {
            nuoviSegnalini[turnoGiocatore].attualeCasella = 39;
            nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[39][1];
            nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[39][2];
        } else if (nuoviSegnalini[turnoGiocatore].attualeCasella === 33) {
            nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' va in Prigione. ';    
            cambiaTesto(nuovoTesto);
            handleOpen();
            nuoviSegnalini[turnoGiocatore].attualeCasella = 10;
            nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[10][1];
            nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[10][2];
            nuoviGiocatori[turnoGiocatore].inPrigione = true;
        } else if (nuoviSegnalini[turnoGiocatore].attualeCasella === 36) {
                nuoviSegnalini[turnoGiocatore].attualeCasella -= 3;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[nuoviSegnalini[turnoGiocatore].attualeCasella][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[nuoviSegnalini[turnoGiocatore].attualeCasella][2];
                
                let idNuovaCarta = CryptoRandom(0,14); 
                nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' pesca la carta: ' + carte[idNuovaCarta][1] + '. ';
                
                let strategy = '';
                if ((carte[idNuovaCarta][2] !== 0) || (carte[idNuovaCarta][5] !== 0) ) {
                    strategy = new StrategyModificaSaldo();
                } else if (idNuovaCarta === 12 || idNuovaCarta === 15) {
                    strategy = new StrategyUscitaPrigione();
                } else if (carte[idNuovaCarta][0] !== 40) {
                    strategy = new StrategySpostaADestinazione();
                }
                strategy.attivaCarta(   idNuovaCarta, 
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
                                        carte);  
            } else {
                nuoviSegnalini[turnoGiocatore].attualeCasella -= 3;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[nuoviSegnalini[turnoGiocatore].attualeCasella][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[nuoviSegnalini[turnoGiocatore].attualeCasella][2];
            }
        cambiaTesto(nuovoTesto);
        handleOpen();
        setGiocatori(nuoviGiocatori);
        setSegnalini(nuoviSegnalini);
    }

    render () {
        return(
            <div>
            </div>
        )
    }
}

export default StrategyCaselleIndietro;