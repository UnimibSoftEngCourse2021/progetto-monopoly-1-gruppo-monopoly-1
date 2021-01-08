import React, { Component } from 'react'
import Tavola from './Tavola'

class Partita extends Component {
    constructor(props) {
        super(props);
        this.state={
            difficolta: this.props.difficolta,
            numeroGiocatori: this.props.numeroGiocatori,
            giocatori: [],
        }
    }

    render() {
        return(
            <div className="interfaccia-gioco">
                <Tavola />
            </div>
        );
    }
}

export default Partita