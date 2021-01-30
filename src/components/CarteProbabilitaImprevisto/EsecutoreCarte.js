import React, { Component } from 'react'
import AttivaCartaStrategy from './AttivaCartaStrategy';

class EsecutoreCarte extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    attivaCarta = new AttivaCartaStrategy();

    setStrategia(strategia) {
        this.attivaCarta = strategia;
    }
    
    attivaStrategiaCarte = (idCarta, 
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
        this.attivaCarta.attivaCarta(   idCarta, 
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
                                        carte);
    }

    render () {
        return(
            <div>
                
            </div>
        )
    }
}

export default EsecutoreCarte;