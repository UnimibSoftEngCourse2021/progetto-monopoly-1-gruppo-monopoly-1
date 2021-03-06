import React from 'react'
import AttivaCartaStrategy from './AttivaCartaStrategy';

class StrategyUscitaPrigione extends AttivaCartaStrategy {
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
        nuoviGiocatori[turnoGiocatore].carteUscitaPrigione += 1;
        cambiaTesto(nuovoTesto);
        handleOpen();
        setGiocatori(nuoviGiocatori);               
    }

    render () {
        return(
            <div>
            </div>
        )
    }
}

export default StrategyUscitaPrigione;