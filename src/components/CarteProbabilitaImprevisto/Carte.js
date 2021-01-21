import React, { Component } from 'react';

class Carte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messaggioCarte: 'Messaggio Carte',

            //carta = [Numero carta, Descrizione, Somma di denaro, Somma per ogni casa, Somma per ogni albergo, Somma per ogni giocatore]
            carte: [
                //Probabilità
                [0, 'Serata della Grande Opera: incassa $50 da ogni giocaotore', 0, 0, 0, 50],
                [1, 'Errore della banca: incassa $200', 200, 0, 0, 0],
                [2, 'Parcella del medico: paga $50', -50, 0, 0, 0],
                [3, 'Rimborso della imposta sul reddito: incassa $20', 20, 0, 0, 0],
                [4, 'Rendimento assicurazione sulla vita: incassa $100', 100, 0, 0, 0],
                [5, 'Paga le spese mediche ospedaliere: paga $50', -50, 0, 0, 0],
                [6, 'Paga le tasse scolastiche: paga $50', -50, 0, 0, 0],
                [7, 'Commisione consulenza: incassa $25', 25, 0, 0, 0],
                [8, 'Hai vinto il secondo posto in una gara di bellezza: incassa $10', 10, 0, 0, 0],
                [9, 'Eredità: incassa $100', 100, 0, 0, 0],
                [10, 'Vendita di azioni: incassa $100', 100, 0, 0, 0],
                [11, 'Rendimento fondo vacanze: incassa $100', 100, 0, 0, 0],
                [12, 'Sei stato tassato per le riparazioni in questa strada: paga $45 per casa e $115 per hotel', 0, -45, -115, 0],
                [13, 'Esci di Prigione', 0, 0, 0, 0],
                [14, 'Vai in Prigione senza passare dal Via', 0, 0, 0, 0],
                [15, 'Vai al Via', 0, 0, 0, 0], //ATTENZIONE LA CARTA DOVREBBE DARE 200$, DA FARE DOPO SVILUPPO DELLA CASELLA VIA

                //Imprevisti
                [16, 'Esci di Prigione', 0, 0, 0, 0],
                [17, 'Vai al Via', 0, 0, 0, 0], //ATTENZIONE LA CARTA DOVREBBE DARE 200$, DA FARE DOPO SVILUPPO DELLA CASELLA VIA
                [18, 'Vai a Illinois Avenue', 0, 0, 0, 0], //ATTENZIONE LA CARTA DOVREBBE DARE 200$ IN CASO SI PASSI DAL VIA, DA FARE DOPO SVILUPPO DELLA CASELLA VIA
                [19, 'Vai a St. Charles Place', 0, 0, 0, 0], //ATTENZIONE LA CARTA DOVREBBE DARE 200$ IN CASO SI PASSI DAL VIA, DA FARE DOPO SVILUPPO DELLA CASELLA VIA
                [20, 'La Banca paga un dividendo: incassi $50', 50, 0, 0, 0],
                [21, 'Vai indietro di 3 caselle', 0, 0, 0, 0],
                [22, 'Vai in Prigione senza passare dal Via', 0, 0, 0, 0],
                [23, 'Riparazioni generali a tutte le tue proprietà: paga $25 per casa e $100 per hotel', 0, -25, -100, 0],
                [24, 'Paga tasse scadute: paga $10', -10, 0, 0, 0],
                [25, 'Vai a Reading Railroad', 0, 0, 0, 0],
                [26, 'Vai a Boardwalk', 0, 0, 0, 0],
                [27, 'Sei eletto chairman della tavola da gioco: paga $50 da ogni giocaotore', 0, 0, 0, -50],
                [28, 'Rendimento prestito immobiliare: incassa $150', 150, 0, 0, 0],
                [29, 'Muovi la pedina al prossimo Utility, se non ha proprietario puoi comprarlo, se lo ha tira i dadi e paga 10 volte il risultato del lancio', 0, 0, 0, 0],
                [30, 'Muovi la pedina alla prossimo Stazione, se non ha proprietario puoi comprarla, se lo ha paga il doppio del noleggio', 0, 0, 0, 0],
                [31, 'Hai vinto una competizione di cruciverba: incassa $100', 100, 0, 0, 0],

            ]
        }
    }

    estraiCarta = (probabilitaOImprevisto, turnoGiocatore, giocatori, setGiocatori) => { //probabilità==true imprevisto==false
        let idCarta;
        if (probabilitaOImprevisto){
            idCarta = Math.floor(Math.random()*(15));
        }else{
            idCarta = Math.floor(Math.random()*(31-16)+16);
        };
        alert('Giocatore: ' + turnoGiocatore + ' \n La carta è: ' + this.state.carte[idCarta][1]);
        this.attivaCarta(idCarta, turnoGiocatore, giocatori, setGiocatori);
    }

    attivaCarta = (idCarta, turnoGiocatore, giocatori, setGiocatori) => {
        //  TODO
        if (this.state.carte[idCarta][2] != 0){
            //<Banca saldoContoGiocatori={() => this.props.modificaSaldo(this.state.carte[idCarta][2], giocatore)}/>
            var nuoviGiocatori = giocatori;
            nuoviGiocatori[turnoGiocatore].capitale += this.state.carte[idCarta][2];
            setGiocatori(nuoviGiocatori);

        }
        if (this.state.carte[idCarta][3] != 0){
            let sommaDiDenaro = 0;
            sommaDiDenaro = this.state.carte[idCarta][3];
            
        }
    }

    render () {
        
        return (
            <div>  
            </div>
        )
    }
}
export default Carte;