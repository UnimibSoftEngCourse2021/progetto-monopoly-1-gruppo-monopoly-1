import React, { Component } from 'react'
import AttivaCartaStrategy from './AttivaCartaStrategy';

class EsecutoreCarte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attivaCarta: new AttivaCartaStrategy()
        }   
    }

    setStrategia(strategia) {
        this.setState = ({
            attivaCarta: strategia
        })
    }

    attivaStrategiaCarte = () => {
        this.state.attivaCarta.attivaCarta( this.props.idCarta, 
                                            this.props.turnoGiocatore, 
                                            this.props.giocatori, 
                                            this.props.setGiocatori, 
                                            this.props.segnalini, 
                                            this.props.setSegnalini, 
                                            this.props.terreni, 
                                            this.props.setTerreni, 
                                            this.props.tavolaGioco, 
                                            this.props.setTavolaGioco, 
                                            this.props.societàStazioni, 
                                            this.props.setSocietàStazioni,
                                            this.props.pagaAffitto,
                                            this.props.testo,
                                            this.props.cambiaTesto,
                                            this.props.handleOpen,
                                            this.props.handleClose,
                                            this.props.difficolta,
                                            this.props.nuovoTesto,
                                            this.props.carte
        );
    }

    render () {
        return(
            <div>
            </div>
        )
    }
}

export default EsecutoreCarte;