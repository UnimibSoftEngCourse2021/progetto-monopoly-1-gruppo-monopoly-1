import React, { Component } from 'react'
import Tavola from './Tavola'

class Partita extends Component {
    constructor(props) {
        super(props);
        this.state={
            difficolta: this.props.difficolta,
            numeroGiocatori: this.props.numeroGiocatori,
            // I giocatori sono definiti da: pedina, numero del giocatore, locazione(casella) attuale
            giocatori:  [
                            {pedina: "hat", numero: 1, locazione: 0},
                            {pedina: "iron", numero: 2, locazione: 0},
                            {pedina: "car", numero: 3, locazione: 0},
                            {pedina: "boat", numero: 4, locazione: 0},
                            {pedina: "doggo", numero: 5, locazione: 0},
                            {pedina: "shoe", numero: 6, locazione: 0},
                            {pedina: "thimble", numero: 7, locazione: 0},
                            {pedina: "wheelbarrow", numero: 8, locazione: 0},
                        ],
            giocatoreAttuale: 1,
            casella: null
        }
    }

    spostaGiocatore = (numero, giocatorePrecedente) => {
        this.setState((statoPrecedente) => {
            // Considero una variabile giocatoreAttuale che inizialmente equivale all'oggetto giocatore che ha appena lanciato i dadi. 
            let giocatoreAttuale = statoPrecedente.giocatori.find(giocatore => giocatore.numero === statoPrecedente.giocatoreAttuale);
            
            // Qui aggiorno il valore della locazione aggiungendogli il risultato del lancio dei dadi.
            // La notazione ... significa che gli altri valori del giocatore rimangono invariati.
            giocatoreAttuale = {
                ...giocatoreAttuale,
                locazione: giocatoreAttuale.locazione + numero % 40,
            }
        
            return {
                // Qui viene utilizzato map per restituire una nuova di lista di giocatori con queste caratteristiche:
                // 1. Se il giocatore è quello che ha appena lanciato i dadi, allora i valori dei suoi attributi vengono sostituiti da quelli di giocatoreAttuale.
                // 2. Altrimenti il giocatore viene lasciato invariato.
                giocatori: statoPrecedente.giocatori.map(giocatore => {
                    if (giocatore.numero === statoPrecedente.giocatoreAttuale) {
                        return giocatoreAttuale;
                    }
                    return giocatore;
                }),
                // Il giocatore attuale ora diviene il giocatore successivo a quello che ha appena lanciato i dadi.
                giocatoreAttuale: giocatorePrecedente % this.state.numeroGiocatori + 1
             };
         });
    }

    render() {
        return(
            <div className="interfaccia-gioco">
                <Tavola
                    giocatori={this.state.giocatori} 
                    giocatoreAttuale={this.state.giocatoreAttuale}
                    casella={this.state.casella}
                    spostaGiocatore={this.spostaGiocatore}
                />
            </div>
        );
    }
}

export default Partita