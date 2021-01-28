import React, { Component } from 'react'
import AttivaCartaStrategy from './AttivaCartaStrategy';

class StrategySpostaADestinazione extends AttivaCartaStrategy {
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

        //Sposta la pedina a... in base a idCarta la pedina va in diverse destinazioni tra cui Via e Prigione
        //la casella numero 40 non esiste sulla tabella di gioco, il valore è usato per determinare se deve essere
        //effettuato uno spostamento dalla pedina in una casella fissata
        if (carte[idCarta][0] !== 40) {
            if ((segnalini[turnoGiocatore].attualeCasella > this.state.carte[idCarta][0]) &&
             (idCarta === 24 || idCarta === 25 || idCarta === 17 || idCarta === 18)){
                nuoviGiocatori[turnoGiocatore].capitale += 500;
                if (difficolta === "facile") {
                    nuoviGiocatori[turnoGiocatore].carteBonus += 1;
                    nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' passa dal Via ritirando una carta bonus. ';
                    cambiaTesto(nuovoTesto);
                    handleOpen();
                } else {
                    nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' passa dal Via. ';
                    cambiaTesto(nuovoTesto);
                    handleOpen();
                }
            }
            if (idCarta === 13 || idCarta === 21) {
                nuoviGiocatori[turnoGiocatore].inPrigione = true;
                nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' va in Prigione. ';
                cambiaTesto(nuovoTesto);
                handleOpen();
            }
            if (idCarta === 14 || idCarta === 16) {
                nuoviGiocatori[turnoGiocatore].capitale += 500;
                if (difficolta === "facile") {
                    nuoviGiocatori[turnoGiocatore].carteBonus += 1;
                    nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' passa dal Via ritirando una carta bonus. ';
                    cambiaTesto(nuovoTesto);
                    handleOpen();
                } else {
                    nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' passa dal Via. ';
                    cambiaTesto(nuovoTesto);
                    handleOpen();
                }
            }
            nuoviSegnalini[turnoGiocatore].attualeCasella = carte[idCarta][0];
            nuoviSegnalini[turnoGiocatore].ascissa = tavolaGioco[carte[idCarta][0]][1];
            nuoviSegnalini[turnoGiocatore].ordinata = tavolaGioco[carte[idCarta][0]][2];
        }

        // Sposta il giocatore alla stazione più vicina. Se la stazione appartiene a un avversario,
        //il giocatore paga il doppio del noleggio.
        if (idCarta === 29) {
            if (segnalini[turnoGiocatore].attualeCasella >= 36 || segnalini[turnoGiocatore].attualeCasella <= 4) {
                if (segnalini[turnoGiocatore].attualeCasella >= 36) {
                    nuoviGiocatori[turnoGiocatore].capitale += 500;
                    nuovoTesto += 'Giocatore ' + (turnoGiocatore + 1) + ' passa dal Via. ';
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
                    let dado1 = CryptoRandom(1,6); 
                    let dado2 = CryptoRandom(1,6); 
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
                    let dado1 = CryptoRandom(1,6); 
                    let dado2 = CryptoRandom(1,6); 
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
        return(
            <div>
            </div>
        )
    }
}

export default StrategySpostaADestinazione;