import React, { Component } from 'react'

class Tavola extends Component {
    state = {
        caselle: [],
        pedine: ['boat', 'car', 'doggo', 'hat', 'iron', 'shoe', 'thimble', 'wheelbarrow']
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

    render() {
        return(
            <div className="contenitore-tavola">
                <div className="tavola"
                    style={{
                        gridTemplate: `repeat(11, 1fr) /repeat(11, 1fr)`
                    }}>
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
                    <div className="tavola-centrale">
                        <h1>Prova</h1>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Tavola