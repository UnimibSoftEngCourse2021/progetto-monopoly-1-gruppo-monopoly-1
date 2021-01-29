import React, { Component } from 'react';
import CryptoRandom from '../CryptoRandom';
import StrategyCaselleIndietro from './StrategyCaselleIndietro';
import StrategyModificaSaldo from './StrategyModificaSaldo';
import StrategySpostaADestinazione from './StrategySpostaADestinazione';
import StrategyUscitaPrigione from './StrategyUscitaPrigione';

class GestoreCarte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //carta = [Numero casella, Descrizione, Somma di denaro, Somma per ogni casa, Somma per ogni albergo, Somma per ogni giocatore]
            carte: [
                //Probabilità
                [40, 'Serata della Grande Opera: incassa $50 da ogni giocatore', 0, 0, 0, 50], //idCarta == 0
                [40, 'Errore della banca: incassa $200', 200, 0, 0, 0], //idCarta == 1
                [40, 'Parcella del medico: paga $50', -50, 0, 0, 0], //idCarta == 2
                [40, 'Rimborso della imposta sul reddito: incassa $20', 20, 0, 0, 0], //idCarta == 3
                [40, 'Rendimento assicurazione sulla vita: incassa $100', 100, 0, 0, 0], //idCarta == 4
                [40, 'Paga le spese mediche ospedaliere: paga $50', -50, 0, 0, 0], //idCarta == 5
                [40, 'Paga le tasse scolastiche: paga $50', -50, 0, 0, 0], //idCarta == 6
                [40, 'Commisione consulenza: incassa $25', 25, 0, 0, 0], //idCarta == 7
                [40, 'Hai vinto il secondo posto in una gara di bellezza: incassa $10', 10, 0, 0, 0], //idCarta == 8
                [40, 'Eredità: incassa $100', 100, 0, 0, 0], //idCarta == 9
                [40, 'Vendita di azioni: incassa $100', 100, 0, 0, 0], //idCarta == 10
                [40, 'Rendimento fondo vacanze: incassa $100', 100, 0, 0, 0], //idCarta == 11
                [40, 'Esci di Prigione', 0, 0, 0, 0], //idCarta == 12
                [10, 'Vai in Prigione senza passare dal Via', 0, 0, 0, 0], //idCarta == 13
                [0, 'Vai al Via', 0, 0, 0, 0], //idCarta == 14

                //Imprevisti
                [40, 'Esci di Prigione', 0, 0, 0, 0], //idCarta == 15
                [0, 'Vai al Via', 0, 0, 0, 0], //idCarta == 16
                [24, 'Vai a Illinois Avenue', 0, 0, 0, 0], //idCarta == 17
                [11, 'Vai a St. Charles Place', 0, 0, 0, 0], //idCarta == 18
                [40, 'La Banca paga un dividendo: incassi $50', 50, 0, 0, 0], //idCarta == 19
                [40, 'Vai indietro di 3 caselle', 0, 0, 0, 0], //idCarta == 20
                [10, 'Vai in Prigione senza passare dal Via', 0, 0, 0, 0], //idCarta == 21
                [40, 'Riparazioni generali a tutte le tue proprietà: paga $25 per casa e $100 per hotel', 0, -25, -100, 0], //idCarta == 22
                [40, 'Paga tasse scadute: paga $10', -10, 0, 0, 0], //idCarta == 23
                [5, 'Vai a Reading Railroad', 0, 0, 0, 0], //idCarta == 24
                [39, 'Vai a Boardwalk', 0, 0, 0, 0], //idCarta == 25
                [40, 'Sei eletto chairman della tavola da gioco: paga $50 a ogni giocaotore', 0, 0, 0, -50], //idCarta == 26
                [40, 'Rendimento prestito immobiliare: incassa $150', 150, 0, 0, 0], //idCarta == 27
                [40, 'Muovi la pedina al prossimo Utility, se non ha proprietario puoi comprarlo, se lo ha tira i dadi e paga 10 volte il risultato del lancio', 0, 0, 0, 0], //idCarta == 28
                [40, 'Muovi la pedina alla prossima Stazione, se non ha proprietario puoi comprarla, se lo ha paga il doppio del noleggio', 0, 0, 0, 0], //idCarta == 29
                [40, 'Hai vinto una competizione di cruciverba: incassa $100', 100, 0, 0, 0], //idCarta == 30
            ],
        }
    }

    //Metodo che estrae casualmente una carta Probabilità o Imprevisto
    estraiCarta = ( probabilitaOImprevisto, 
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
                    nuovoTesto) => {
        //probabilità==true, imprevisto==false
        let idCarta;
        if (probabilitaOImprevisto){
            idCarta = CryptoRandom(0,14); //Il max è incluso e il min è incluso
        }else{
            idCarta = CryptoRandom(15,30); //Il max è incluso e il min è incluso
        }
        
        nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' pesca la carta: ' + this.state.carte[idCarta][1] + '. ';
        console.log(nuovoTesto);

        let strategy = '';
        console.log(strategy);
        if ((idCarta === 22) || (this.state.carte[idCarta][2] !== 0) || (this.state.carte[idCarta][5] !== 0) ) {
            strategy = new StrategyModificaSaldo();
        } else if (idCarta === 12 || idCarta === 15) {
            strategy = new StrategyUscitaPrigione();
        } else if ((this.state.carte[idCarta][0] !== 40) || (idCarta === 28) || (idCarta === 29)) {
            strategy = new StrategySpostaADestinazione();
        } else if (idCarta === 20) {
            strategy = new StrategyCaselleIndietro();
        }
        strategy.attivaCarta(   idCarta, 
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
                                this.state.carte 
        );  
    }

    render () {
        
        return (
            <div>
            </div>
        )
    }
}
export default GestoreCarte;