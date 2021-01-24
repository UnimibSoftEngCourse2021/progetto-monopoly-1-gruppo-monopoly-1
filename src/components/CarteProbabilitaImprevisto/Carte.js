import React, { Component } from 'react';

class Carte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //carta = [Numero carta, Descrizione, Somma di denaro, Somma per ogni casa, Somma per ogni albergo, Somma per ogni giocatore]
            carte: [
                //Probabilità
                [0, 'Serata della Grande Opera: incassa $50 da ogni giocatore', 0, 0, 0, 50], //fatto
                [1, 'Errore della banca: incassa $200', 200, 0, 0, 0], //fatto
                [2, 'Parcella del medico: paga $50', -50, 0, 0, 0], //fatto
                [3, 'Rimborso della imposta sul reddito: incassa $20', 20, 0, 0, 0], //fatto
                [4, 'Rendimento assicurazione sulla vita: incassa $100', 100, 0, 0, 0], //fatto
                [5, 'Paga le spese mediche ospedaliere: paga $50', -50, 0, 0, 0], //fatto
                [6, 'Paga le tasse scolastiche: paga $50', -50, 0, 0, 0], //fatto
                [7, 'Commisione consulenza: incassa $25', 25, 0, 0, 0], //fatto
                [8, 'Hai vinto il secondo posto in una gara di bellezza: incassa $10', 10, 0, 0, 0], //fatto
                [9, 'Eredità: incassa $100', 100, 0, 0, 0], //fatto
                [10, 'Vendita di azioni: incassa $100', 100, 0, 0, 0], //fatto
                [11, 'Rendimento fondo vacanze: incassa $100', 100, 0, 0, 0], //fatto
                [12, 'Esci di Prigione', 0, 0, 0, 0], //fatto
                [13, 'Vai in Prigione senza passare dal Via', 0, 0, 0, 0], //fatto
                [14, 'Vai al Via', 0, 0, 0, 0], //fatto

                //Imprevisti
                [15, 'Esci di Prigione', 0, 0, 0, 0], //fatto
                [16, 'Vai al Via', 0, 0, 0, 0], //fatto
                [17, 'Vai a Illinois Avenue', 0, 0, 0, 0], //ATTENZIONE LA CARTA DOVREBBE DARE 200$ IN CASO SI PASSI DAL VIA, DA FARE DOPO SVILUPPO DELLA CASELLA VIA  //fatto
                [18, 'Vai a St. Charles Place', 0, 0, 0, 0], //ATTENZIONE LA CARTA DOVREBBE DARE 200$ IN CASO SI PASSI DAL VIA, DA FARE DOPO SVILUPPO DELLA CASELLA VIA //fatto
                [19, 'La Banca paga un dividendo: incassi $50', 50, 0, 0, 0], //fatto
                [20, 'Vai indietro di 3 caselle', 0, 0, 0, 0], //fatto
                [21, 'Vai in Prigione senza passare dal Via', 0, 0, 0, 0], //fatto
                [22, 'Riparazioni generali a tutte le tue proprietà: paga $25 per casa e $100 per hotel', 0, -25, -100, 0], //fatto
                [23, 'Paga tasse scadute: paga $10', -10, 0, 0, 0], //fatto
                [24, 'Vai a Reading Railroad', 0, 0, 0, 0], //fatto
                [25, 'Vai a Boardwalk', 0, 0, 0, 0], //fatto
                [26, 'Sei eletto chairman della tavola da gioco: paga $50 da ogni giocaotore', 0, 0, 0, -50], //fatto
                [27, 'Rendimento prestito immobiliare: incassa $150', 150, 0, 0, 0], //fatto
                [28, 'Muovi la pedina al prossimo Utility, se non ha proprietario puoi comprarlo, se lo ha tira i dadi e paga 10 volte il risultato del lancio', 0, 0, 0, 0],
                [29, 'Muovi la pedina alla prossima Stazione, se non ha proprietario puoi comprarla, se lo ha paga il doppio del noleggio', 0, 0, 0, 0], //fatto
                [30, 'Hai vinto una competizione di cruciverba: incassa $100', 100, 0, 0, 0], //fatto

            ]
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
                    pagamentoImprevisto, 
                    pagaAffitto,
                    setPagamentoImprevisto,
                    cambiaPagamentoImprevisto) => {
        //probabilità==true, imprevisto==false
        let idCarta;
        if (probabilitaOImprevisto){
            idCarta =13; //Math.floor(Math.random()*(14));
        }else{
            idCarta =28;//Math.floor(Math.random()*(30-15)+15);
        };
        alert('Giocatore ' + (turnoGiocatore + 1) + ': \nLa carta è: ' + this.state.carte[idCarta][1]);
        this.attivaCarta(   idCarta, 
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
                            pagamentoImprevisto, 
                            pagaAffitto,
                            setPagamentoImprevisto,
                            cambiaPagamentoImprevisto);
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
                    pagamentoImprevisto, 
                    pagaAffitto,
                    setPagamentoImprevisto,
                    cambiaPagamentoImprevisto) => {
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
                if(terreni[i].proprietario==turnoGiocatore){
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

        //Modifica spostamentoPerCarta in modo che la pedina vada in prigione senza passare dal Via
        if(idCarta===13 || idCarta===21){
            if(segnalini[turnoGiocatore].attualeCasella > 10){
                //segnalini[numSegnalino].attualeCasella
                nuoviGiocatori[turnoGiocatore].capitale -= 200;
            }
            nuoviSegnalini[turnoGiocatore].attualeCasella=10;
            nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[10][1];
            nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[10][2];
            nuoviGiocatori[turnoGiocatore].inPrigione = true;
        }

        //Modifica spostamentoPerCarta in modo che la pedina vada indietro di 3 caselle
        if(idCarta===20){
            
            //spostamentoPerCarta = 37;
            if(nuoviSegnalini[turnoGiocatore].attualeCasella>3){
                nuoviGiocatori[turnoGiocatore].capitale -= 200;
            }
        }

        //Modifica spostamentoPerCarta in modo che la pedina vada al Via
        if(idCarta===14 || idCarta===16){
            //spostamentoPerCarta = 40 - attualeCasella;
        }

        // Se il giocatore pesca una carta di uscita dalla prigione, incrementa il contatore
        // delle carte di uscita di prigione del giocatore di 1.
        if (idCarta === 12 || idCarta === 15) {
            nuoviGiocatori[turnoGiocatore].carteUscitaPrigione += 1;
        }

        // Sposta la pedina a Reading Railroad. Se passa dal Via il giocatore riceve € 500.
        if (idCarta === 24) {
            if(segnalini[turnoGiocatore].attualeCasella > 5){
                nuoviGiocatori[turnoGiocatore].capitale += 500;
                alert('Giocatore ' + (turnoGiocatore + 1) + ' passa Dal Via');
            }
            nuoviSegnalini[turnoGiocatore].attualeCasella=5;
            nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[5][1];
            nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[5][2];
        }

        // Sposta la pedina a Boardwalk. Se passa dal Via il giocatore riceve € 500.
        if (idCarta === 25) {
            if(segnalini[turnoGiocatore].attualeCasella > 39){
                nuoviGiocatori[turnoGiocatore].capitale += 500;
                alert('Giocatore ' + (turnoGiocatore + 1) + ' passa Dal Via');
            }
            nuoviSegnalini[turnoGiocatore].attualeCasella=39;
            nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[39][1];
            nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[39][2];
        }

        // Sposta la pedina a Illinois Avenue. Se passa dal Via il giocatore riceve € 500.
        if (idCarta === 17) {
            if(segnalini[turnoGiocatore].attualeCasella > 24){
                nuoviGiocatori[turnoGiocatore].capitale += 500;
                alert('Giocatore ' + (turnoGiocatore + 1) + ' passa Dal Via');
            }
            nuoviSegnalini[turnoGiocatore].attualeCasella=24;
            nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[24][1];
            nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[24][2];
        }

        // Sposta la pedina a St. Charles Place. Se passa dal Via il giocatore riceve € 500.
        if (idCarta === 18) {
            if(segnalini[turnoGiocatore].attualeCasella > 11){
                nuoviGiocatori[turnoGiocatore].capitale += 500;
                alert('Giocatore ' + (turnoGiocatore + 1) + ' passa Dal Via');
            }
            nuoviSegnalini[turnoGiocatore].attualeCasella=11;
            nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[11][1];
            nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[11][2];
        }

        // Sposta il giocatore alla stazione più vicina. Se la stazione appartiene a un avversario, il giocatore paga il doppio del noleggio.
        if (idCarta === 29) {
            if (segnalini[turnoGiocatore].attualeCasella >= 36 || segnalini[turnoGiocatore].attualeCasella <= 4) {
                if (segnalini[turnoGiocatore].attualeCasella >= 36) {
                    nuoviGiocatori[turnoGiocatore].capitale += 500;
                    alert('Giocatore ' + (turnoGiocatore + 1) + ' passa Dal Via');
                }
                nuoviSegnalini[turnoGiocatore].attualeCasella=5;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[5][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[5][2];
                setGiocatori(nuoviGiocatori);
                setSegnalini(nuoviSegnalini);
                if (societàStazioni[0].proprietario !== -1) {
                    pagaAffitto();
                } 
            }
            if (segnalini[turnoGiocatore].attualeCasella >= 6 && segnalini[turnoGiocatore].attualeCasella <= 14) {
                nuoviSegnalini[turnoGiocatore].attualeCasella=15;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[15][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[15][2];
                setGiocatori(nuoviGiocatori);
                setSegnalini(nuoviSegnalini);
                if (societàStazioni[1].proprietario !== -1) {
                    console.log("Entrato");
                    pagaAffitto();
                    console.log("Uscito");
                }
            }
            if (segnalini[turnoGiocatore].attualeCasella >= 16 && segnalini[turnoGiocatore].attualeCasella <= 24) {
                nuoviSegnalini[turnoGiocatore].attualeCasella=25;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[25][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[25][2];
                setGiocatori(nuoviGiocatori);
                setSegnalini(nuoviSegnalini);
                if (societàStazioni[2].proprietario !== -1) {
                    pagaAffitto();
                }
            }
            if (segnalini[turnoGiocatore].attualeCasella >= 26 && segnalini[turnoGiocatore].attualeCasella <= 34) {
                nuoviSegnalini[turnoGiocatore].attualeCasella=35;
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
                    alert('Giocatore ' + (turnoGiocatore + 1) + ' passa Dal Via');
                }
                nuoviSegnalini[turnoGiocatore].attualeCasella=12;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[12][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[12][2];
                setGiocatori(nuoviGiocatori);
                setSegnalini(nuoviSegnalini);
                if (societàStazioni[4].proprietario !== -1 && societàStazioni[4].proprietario !== turnoGiocatore) {
                    console.log("Pagamento imprevisto1: " + pagamentoImprevisto);
                    var nuovoPagamento = true;
                    cambiaPagamentoImprevisto();
                    setPagamentoImprevisto(nuovoPagamento);
                    setPagamentoImprevisto(pagamentoImprevisto => pagamentoImprevisto || true);
                    console.log("Pagamento imprevisto2: " + pagamentoImprevisto);
                    let dado1 = Math.floor(Math.random()*6) + 1;
                    let dado2 = Math.floor(Math.random()*6) + 1;
                    let affitto = (dado1 + dado2) * 10;
                    nuoviGiocatori[turnoGiocatore].capitale -= affitto;
                    // Devo aggiungere l'affitto pagato sulla casella per evitare che questa somma
                    // venga sottratta al giocatore visto che si trova sulla casella dell'avversario
                    // alla fine del turno.
                    nuoviGiocatori[turnoGiocatore].capitale += 150;
                    nuoviGiocatori[societàStazioni[4].proprietario].capitale += affitto;
                    // Per lo stesso motivo devo sottrarre l'affitto dall'avversario.
                    nuoviGiocatori[societàStazioni[4].proprietario].capitale -= 150;
                    alert('Giocatore ' + (turnoGiocatore + 1) + ': paga ' + affitto);
                } 
            }
            if (segnalini[turnoGiocatore].attualeCasella >= 13 && segnalini[turnoGiocatore].attualeCasella <= 27) {
                nuoviSegnalini[turnoGiocatore].attualeCasella=28;
                nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[28][1];
                nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[28][2];
                setGiocatori(nuoviGiocatori);
                setSegnalini(nuoviSegnalini);
                if (societàStazioni[5].proprietario !== -1 && societàStazioni[5].proprietario !== turnoGiocatore) {
                    console.log("Pagamento imprevisto1: " + pagamentoImprevisto);
                    cambiaPagamentoImprevisto();
                    setPagamentoImprevisto(true);
                    setPagamentoImprevisto(pagamentoImprevisto => pagamentoImprevisto || true);
                    console.log("Pagamento imprevisto2: " + pagamentoImprevisto);
                    let dado1 = Math.floor(Math.random()*6) + 1;
                    let dado2 = Math.floor(Math.random()*6) + 1;
                    let affitto = (dado1 + dado2) * 10;
                    nuoviGiocatori[turnoGiocatore].capitale -= affitto;
                    nuoviGiocatori[societàStazioni[5].proprietario].capitale += affitto;
                    alert('Giocatore ' + (turnoGiocatore + 1) + ': paga ' + affitto);
                }
            }
        }

        setGiocatori(nuoviGiocatori);
        setSegnalini(nuoviSegnalini);
        //return spostamentoPerCarta;
    }

    render () {
        
        return (
            <div>  
            </div>
        )
    }
}
export default Carte;