import React, { Component } from 'react'

class Tavola extends Component {
    state = {
        caselle: [],
        pedine: ['boat', 'car', 'doggo', 'hat', 'iron', 'shoe', 'thimble', 'wheelbarrow'],
    }

    // Questa funzione viene chiamata quando un'istanza di Tavola viene inserita nell'albero DOM.
    // Questa funzione crea le caselle della tavola da gioco.
    componentDidMount() {
        const caselle = this.creaCaselle();
        this.setState({
            caselle
        })
    }

    creaCaselle() {
        const caselle = [
            {riga: 11, col: 11, numero: 1},
            {riga: 11, col: 10, numero: 2},
            {riga: 11, col: 9, numero: 3},
            {riga: 11, col: 8, numero: 4},
            {riga: 11, col: 7, numero: 5},
            {riga: 11, col: 6, numero: 6},
            {riga: 11, col: 5, numero: 7},
            {riga: 11, col: 4, numero: 8},
            {riga: 11, col: 3, numero: 9},
            {riga: 11, col: 2, numero: 10},
            {riga: 11, col: 1, numero: 11},
            {riga: 10, col: 1, numero: 12},
            {riga: 9, col: 1, numero: 13},
            {riga: 8, col: 1, numero: 14},
            {riga: 7, col: 1, numero: 15},
            {riga: 6, col: 1, numero: 16},
            {riga: 5, col: 1, numero: 17},
            {riga: 4, col: 1, numero: 18},
            {riga: 3, col: 1, numero: 19},
            {riga: 2, col: 1, numero: 20},
            {riga: 1, col: 1, numero: 21},
            {riga: 1, col: 2, numero: 22},
            {riga: 1, col: 3, numero: 23},
            {riga: 1, col: 4, numero: 24},
            {riga: 1, col: 5, numero: 25},
            {riga: 1, col: 6, numero: 26},
            {riga: 1, col: 7, numero: 27},
            {riga: 1, col: 8, numero: 28},
            {riga: 1, col: 9, numero: 29},
            {riga: 1, col: 10, numero: 30},
            {riga: 1, col: 11, numero: 31},
            {riga: 2, col: 11, numero: 32},
            {riga: 3, col: 11, numero: 33},
            {riga: 4, col: 11, numero: 34},
            {riga: 5, col: 11, numero: 35},
            {riga: 6, col: 11, numero: 36},
            {riga: 7, col: 11, numero: 37},
            {riga: 8, col: 11, numero: 38},
            {riga: 9, col: 11, numero: 39},
            {riga: 10, col: 11, numero: 40},
        ];
        return caselle;
    }

    // Questa funzione si occupa di calcolare il risultato del lancio di due dadi 
    // e di spostare la pedina del giocatore in base a tale risultato.
    lanciaDadi = () => {
        const dado1 = Math.floor(Math.random()*6) + 1;
        const dado2 = Math.floor(Math.random()*6) + 1;
        const risultato = dado1 + dado2;
        this.setState({
            dado1,
            dado2,
            risultato
        });
        this.props.spostaGiocatore(risultato, this.props.giocatoreAttuale);
    }

    render() {
        // Prepara una lista di locazioni dei giocatori.
        // Se la lista è vuota, i giocatori verranno posizionati tutti nella locazione 0, come stabilito nello stato iniziale di Partita.
        // Se la lista non è vuota, i giocatori verranno posizionati nella specifica locazione del giocatore.
        let locazioniGiocatori = [];
        if (this.state.caselle.length > 0) {
            locazioniGiocatori = this.props.giocatori.map(giocatore => this.state.caselle[giocatore.locazione % this.state.caselle.length]);
        }
        
        return(
            <div className="contenitore-tavola">
                <td className="colonna-gioco">Giocatori</td>
                {/*Crea una griglia di 11 righe e 11 colonne */}
                <div className="tavola"
                    style={{
                        gridTemplate: `repeat(11, 1fr) /repeat(11, 1fr)`
                    }}>
                    {/* Per ogni casella della lista di caselle mostra la relativa immagine.
                        L'indivuazione dell'immagine corretta per la casella avviene in base agli attributi di riga e colonna della casella.
                     */}
                    {
                        this.state.caselle.map((casella, i) => (
                            <div 
                            style={{
                                gridRow: casella.riga,
                                gridColumn: casella.col 
                            }}
                            key={i} 
                            className="casella-gioco">
                                {      
                                    (casella.numero <= 40) ?    
                                    <img alt="" src={`./caselle/${casella.numero}.jpg`} /> :
                                    casella.numero
                                }
                            </div>
                        ))
                    }

                    {
                        // Viene utilizzata la lista locazioniGiocatori per mostrare l'attuale locazione della pedina di ciascun giocatore.
                        // In particolare la lista locazioniGiocatori contiene le locazioni attuali dei giocatori rappresentate come caselle.
                        // Pertanto è ancora possibile utilizzare gli attributi di riga e colonna di ciascuna casella per individuare la casella
                        // sulla quale mostrare ciascuna pedina.
                        // La pedina di ciascun giocatore viene poi mostrata tramite la relativa immagine che viene renderizzata nuovamente.
                        locazioniGiocatori.map((locazione, i) => {
                            const giocatore = this.props.giocatori[i];
                            return (
                                <div
                                    key={giocatore.numero}
                                    style={{
                                        gridRow: locazione.riga,
                                        gridColumn: locazione.col
                                    }}
                                    className="avatar-giocatore">
                                    <img
                                        alt={giocatore.numero}
                                        className="pedina"
                                        src={`./pedine/${giocatore.pedina}.png`} />
                                </div>
                            )
                        })
                    }

                    <div className="tavola-centrale">
                        <button onClick={this.lanciaDadi} className="bottone">Lancia i dadi</button>
                        <h5 className="dadi-info">Primo dado: {this.state.dado1}</h5>
                        <h5 className="dadi-info">Secondo dado: {this.state.dado2}</h5>
                        <h5 className="dadi-info">Risultato: {this.state.risultato}</h5>
                    </div>
                </div>
                <td className="colonna-gioco-proprietà">
                    Proprietà
                </td>
            </div>
        );
    }
}

export default Tavola