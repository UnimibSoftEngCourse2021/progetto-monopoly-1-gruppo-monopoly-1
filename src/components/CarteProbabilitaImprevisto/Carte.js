import React, { Component } from 'react';
import CryptoRandom from '../CryptoRandom';
import EsecutoreCarte from './EsecutoreCarte';
import StrategyCaselleIndietro from './StrategyCaselleIndietro';
import StrategyModificaSaldo from './StrategyModificaSaldo';
import StrategySpostaADestinazione from './StrategySpostaADestinazione';
import StrategyUscitaPrigione from './StrategyUscitaPrigione';

class Carte extends Component {
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

    static instance = null;
    static createInstance() {
        var object = new Carte();
        return object;
    }
  
    static getInstance () {
        if (!Carte.instance) {
            Carte.instance = Carte.createInstance();
        }
        return Carte.instance;
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

        let strategy;
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


        // this.attivaCarta(   idCarta, 
        //                     turnoGiocatore, 
        //                     giocatori, 
        //                     setGiocatori, 
        //                     segnalini, 
        //                     setSegnalini, 
        //                     terreni, 
        //                     setTerreni, 
        //                     tavolaGioco, 
        //                     setTavolaGioco, 
        //                     societàStazioni, 
        //                     setSocietàStazioni,
        //                     pagaAffitto,
        //                     testo,
        //                     cambiaTesto,
        //                     handleOpen,
        //                     handleClose,
        //                     difficolta,
        //                     nuovoTesto);
    }

    //Metodo che attiva l'effetto della carta estratta
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
                    nuovoTesto) => {
        let nuoviGiocatori = giocatori;
        let nuoviSegnalini = segnalini;

        //Modifica il saldo del giocatore di una somma prefissata
        if (this.state.carte[idCarta][2] !== 0){
            nuoviGiocatori[turnoGiocatore].capitale += this.state.carte[idCarta][2];
        }

        //Modifica il saldo in base alle case e alberghi posseduti dal giocatore
        let numeroCase = 0;
        let numeroAlberghi = 0;
        if (idCarta === 23){
            for (let i = 0; i < terreni.length; i++) {   
                if(terreni[i].proprietario === turnoGiocatore){
                    numeroCase += terreni[i].case;
                    numeroAlberghi += terreni[i].alberghi;
                }
            }
            nuoviGiocatori[turnoGiocatore].capitale += (this.state.carte[idCarta][3]*numeroCase)
                +(this.state.carte[idCarta][4]*numeroAlberghi);
        }

        //Modifica il saldo ricevendo o distribuendo agli altri giocatori una somma di denaro 
        if(this.state.carte[idCarta][5] !== 0){
            nuoviGiocatori[turnoGiocatore].capitale += (nuoviGiocatori.length * this.state.carte[idCarta][5]);
            if(this.state.carte[idCarta][5] > 0){
                for (let i = 0; i < nuoviGiocatori.length; i++) {   
                    nuoviGiocatori[i].capitale -= this.state.carte[idCarta][5];
                }
            }else{
                for (let i = 0; i < nuoviGiocatori.length; i++) {   
                    nuoviGiocatori[i].capitale += this.state.carte[idCarta][5];
                }
            }
        }

        // Sposta la pedina indietro di 3 caselle.
        // Se la pedina finisce sulla casella Vai in Prigione!, allora la pedina viene spostata in prigione.
        // Se la pedina finisce sulla casella 33, allora il giocatore pesca una carta.
        if(idCarta===20){
            if(nuoviSegnalini[turnoGiocatore].attualeCasella === 2){
                nuoviSegnalini[turnoGiocatore].attualeCasella = 39;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[39][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[39][2];
            } else if (nuoviSegnalini[turnoGiocatore].attualeCasella === 33) {
                nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' va in Prigione. ';
                console.log(nuovoTesto);
                cambiaTesto(nuovoTesto);
                handleOpen();
                nuoviSegnalini[turnoGiocatore].attualeCasella=10;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[10][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[10][2];
                nuoviGiocatori[turnoGiocatore].inPrigione = true;
            } else if (nuoviSegnalini[turnoGiocatore].attualeCasella === 36) {
                nuoviSegnalini[turnoGiocatore].attualeCasella -= 3;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[nuoviSegnalini[turnoGiocatore].attualeCasella][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[nuoviSegnalini[turnoGiocatore].attualeCasella][2];
                this.estraiCarta(   true, 
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
                                    nuovoTesto)
            
            } else {
                nuoviSegnalini[turnoGiocatore].attualeCasella -= 3;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[nuoviSegnalini[turnoGiocatore].attualeCasella][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[nuoviSegnalini[turnoGiocatore].attualeCasella][2];
            }
        }

        // Se il giocatore pesca una carta di uscita dalla prigione, incrementa il contatore
        // delle carte di uscita di prigione del giocatore di 1.
        if (idCarta === 12 || idCarta === 15) {
            nuoviGiocatori[turnoGiocatore].carteUscitaPrigione += 1;
        }

        //Sposta la pedina a... in base a idCarta la pedina va in diverse destinazioni tra cui Via e Prigione
        //la casella numero 40 non esiste sulla tabella di gioco, il valore è usato per determinare se deve essere
        //effettuato uno spostamento dalla pedina in una casella fissata
        if (this.state.carte[idCarta][0] !== 40) {
            if((segnalini[turnoGiocatore].attualeCasella > this.state.carte[idCarta][0]) &&
             (idCarta === 24 || idCarta === 25 || idCarta === 17 || idCarta === 18)){
                nuoviGiocatori[turnoGiocatore].capitale += 500;
                if (difficolta === "facile") {
                    nuoviGiocatori[turnoGiocatore].carteBonus += 1;
                    nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' passa dal Via ritirando una carta bonus. ';
                    console.log(nuovoTesto);
                    cambiaTesto(nuovoTesto);
                    handleOpen();
                } else {
                    nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' passa dal Via. ';
                    console.log(nuovoTesto);
                    cambiaTesto(nuovoTesto);
                    handleOpen();
                }
            }
            if(idCarta===13 || idCarta===21){
                nuoviGiocatori[turnoGiocatore].inPrigione = true;
                nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' va in Prigione. ';
                console.log(nuovoTesto);
                cambiaTesto(nuovoTesto);
                handleOpen();
            }
            if(idCarta===14 || idCarta===16){
                nuoviGiocatori[turnoGiocatore].capitale += 500;
                if (difficolta === "facile") {
                    nuoviGiocatori[turnoGiocatore].carteBonus += 1;
                    nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' passa dal Via ritirando una carta bonus. ';
                    console.log(nuovoTesto);
                    cambiaTesto(nuovoTesto);
                    handleOpen();
                } else {
                    nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' passa dal Via. ';
                    console.log(nuovoTesto);
                    cambiaTesto(nuovoTesto);
                    handleOpen();
                }
            }
            nuoviSegnalini[turnoGiocatore].attualeCasella = this.state.carte[idCarta][0];
            nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[this.state.carte[idCarta][0]][1];
            nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[this.state.carte[idCarta][0]][2];
        }

        // Sposta il giocatore alla stazione più vicina. Se la stazione appartiene a un avversario,
        //il giocatore paga il doppio del noleggio.
        if (idCarta === 29) {
            if (segnalini[turnoGiocatore].attualeCasella >= 36 || segnalini[turnoGiocatore].attualeCasella <= 4) {
                if (segnalini[turnoGiocatore].attualeCasella >= 36) {
                    nuoviGiocatori[turnoGiocatore].capitale += 500;
                    nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' passa dal Via. ';
                    console.log(nuovoTesto);
                    cambiaTesto(nuovoTesto);
                    handleOpen();
                }
                nuoviSegnalini[turnoGiocatore].attualeCasella = 5;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[5][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[5][2];
                setGiocatori(nuoviGiocatori);
                setSegnalini(nuoviSegnalini);
                if (societàStazioni[0].proprietario !== -1) {
                    pagaAffitto();
                } 
            }
            if (segnalini[turnoGiocatore].attualeCasella >= 6 && segnalini[turnoGiocatore].attualeCasella <= 14) {
                nuoviSegnalini[turnoGiocatore].attualeCasella = 15;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[15][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[15][2];
                setGiocatori(nuoviGiocatori);
                setSegnalini(nuoviSegnalini);
                if (societàStazioni[1].proprietario !== -1) {
                    pagaAffitto();
                }
            }
            if (segnalini[turnoGiocatore].attualeCasella >= 16 && segnalini[turnoGiocatore].attualeCasella <= 24) {
                nuoviSegnalini[turnoGiocatore].attualeCasella = 25;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[25][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[25][2];
                setGiocatori(nuoviGiocatori);
                setSegnalini(nuoviSegnalini);
                if (societàStazioni[2].proprietario !== -1) {
                    pagaAffitto();
                }
            }
            if (segnalini[turnoGiocatore].attualeCasella >= 26 && segnalini[turnoGiocatore].attualeCasella <= 34) {
                nuoviSegnalini[turnoGiocatore].attualeCasella = 35;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[35][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[35][2];
                setGiocatori(nuoviGiocatori);
                setSegnalini(nuoviSegnalini);
                if (societàStazioni[3].proprietario !== -1) {
                    pagaAffitto();
                }
            }
        }

        // Se il giocatore pesca la carta con ID 28, la sua pedina viene spostata alla società più vicina.
        // Se la società appartiene a un avversario, il giocatore paga 10 volte il risultato del lancio dei dadi.
        if (idCarta === 28) {
            if (segnalini[turnoGiocatore].attualeCasella >= 29 || segnalini[turnoGiocatore].attualeCasella <= 11) {
                if (segnalini[turnoGiocatore].attualeCasella >= 29) {
                    nuoviGiocatori[turnoGiocatore].capitale += 500;
                    nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' passa dal Via. ';
                    console.log(nuovoTesto);
                    cambiaTesto(nuovoTesto);
                    handleOpen();
                }
                nuoviSegnalini[turnoGiocatore].attualeCasella = 12;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[12][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[12][2];
                setGiocatori(nuoviGiocatori);
                setSegnalini(nuoviSegnalini);
                if (societàStazioni[4].proprietario !== -1 && societàStazioni[4].proprietario !== turnoGiocatore) {
                    //let dado1 = Math.floor(Math.random()*6) + 1;
                    let dado1 = CryptoRandom(1,6); //Il max è incluso e il min è incluso
                    //let dado2 = Math.floor(Math.random()*6) + 1;
                    let dado2 = CryptoRandom(1,6); //Il max è incluso e il min è incluso
                    let affitto = (dado1 + dado2) * 10;
                    nuoviGiocatori[turnoGiocatore].capitale -= affitto;
                    // Devo aggiungere l'affitto pagato sulla casella per evitare che questa somma
                    // venga sottratta al giocatore visto che si trova sulla casella dell'avversario
                    // alla fine del turno.
                    nuoviGiocatori[turnoGiocatore].capitale += 150;
                    nuoviGiocatori[societàStazioni[4].proprietario].capitale += affitto;
                    // Per lo stesso motivo devo sottrarre l'affitto dall'avversario.
                    nuoviGiocatori[societàStazioni[4].proprietario].capitale -= 150;
                    nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ': paga ' + affitto + '. ';
                    console.log(nuovoTesto);
                    cambiaTesto(nuovoTesto);
                    handleOpen();
                } 
            }
            if (segnalini[turnoGiocatore].attualeCasella >= 13 && segnalini[turnoGiocatore].attualeCasella <= 27) {
                nuoviSegnalini[turnoGiocatore].attualeCasella = 28;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[28][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[28][2];
                setGiocatori(nuoviGiocatori);
                setSegnalini(nuoviSegnalini);
                if (societàStazioni[5].proprietario !== -1 && societàStazioni[5].proprietario !== turnoGiocatore) {
                    //let dado1 = Math.floor(Math.random()*6) + 1;
                    let dado1 = CryptoRandom(1,6); //Il max è incluso e il min è incluso
                    //let dado2 = Math.floor(Math.random()*6) + 1;
                    let dado2 = CryptoRandom(1,6); //Il max è incluso e il min è incluso
                    let affitto = (dado1 + dado2) * 10;
                    nuoviGiocatori[turnoGiocatore].capitale -= affitto;
                    // Devo aggiungere l'affitto pagato sulla casella per evitare che questa somma
                    // venga sottratta al giocatore visto che si trova sulla casella dell'avversario
                    // alla fine del turno.
                    nuoviGiocatori[turnoGiocatore].capitale += 150;
                    nuoviGiocatori[societàStazioni[5].proprietario].capitale += affitto;
                    // Per lo stesso motivo devo sottrarre l'affitto dall'avversario.
                    nuoviGiocatori[societàStazioni[4].proprietario].capitale -= 150;
                    nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ': paga ' + affitto + '. ';
                    console.log(nuovoTesto);
                    cambiaTesto(nuovoTesto);
                    handleOpen();
                }
            }
        }
        cambiaTesto(nuovoTesto);
        handleOpen();
        setGiocatori(nuoviGiocatori);
        setSegnalini(nuoviSegnalini);
    }

    render () {
        
        return (
            <div>
            </div>
        )
    }
}
export default Carte;