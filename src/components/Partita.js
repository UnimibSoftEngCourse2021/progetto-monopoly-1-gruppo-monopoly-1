import React, { Component } from 'react'
import App from '../App'
import SceltaDifficolta from './ScegliDifficolta'

class Partita extends Component {
    constructor(props) {
        super(props);
        this.state={
            difficolta: "",
            partitaIniziata: false,
            numeroGiocatori: this.props.numeroGiocatori,
            giocatori: [],
        }
    }

    render() {
        return(
            <div>
                {
                    this.props.partitaIniziata ?
                    <App difficolta={this.state.difficolta}/> :
                    <SceltaDifficolta 
                        difficolta={this.state.difficolta} 
                        selezionaDifficolta={this.selezionaDifficolta} 
                        partitaIniziata={this.state.partitaIniziata}
                        />
                }
            </div>
        );
    }
}

export default Partita