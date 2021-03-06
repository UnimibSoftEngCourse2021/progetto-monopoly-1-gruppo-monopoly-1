import React from 'react';

class Banca extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            testo: '',
        }
        this.decrementaCase = this.decrementaCase.bind(this);
        this.incrementaCase = this.incrementaCase.bind(this);
        this.decrementaAlberghi = this.decrementaAlberghi.bind(this);
        this.incrementaAlberghi = this.incrementaAlberghi.bind(this);
    }

    caseDisponibili = 32;
    alberghiDisponibili = 12;

    static instance = null;
    static createInstance() {
        var object = new Banca();
        return object;
    }
  
    static getInstance() {
        if (!Banca.instance) {
            Banca.instance = Banca.createInstance();
        }
        return Banca.instance;
    }

    decrementaCase() {
        this.caseDisponibili -= 1;
    }

    incrementaCase() {
        this.caseDisponibili += 1; 
    }

    decrementaAlberghi() {
        this.alberghiDisponibili -= 1;
    } 
    
    incrementaAlberghi() {
        this.alberghiDisponibili += 1;
    } 
    
    handleOpen = () => {this.setState({open: true})};
    handleClose = () => {this.setState({open: false})};

    giocatorePassaDalVia = (giocatori, turnoGiocatore, setGiocatori, handleOpen, cambiaTesto, difficolta) => {
        // Incrementa il capitale del giocatore di turno di 500 quando passa dal VIA              
        var nuoviGiocatori = giocatori;
        nuoviGiocatori[turnoGiocatore].capitale=giocatori[turnoGiocatore].capitale+500;
        if (difficolta === "facile") {
            nuoviGiocatori[turnoGiocatore].carteBonus += 1;
            setGiocatori(nuoviGiocatori);
            cambiaTesto('Giocatore ' + (turnoGiocatore + 1) + ' passa dal Via ritirando una carta bonus. ');
        } else {
            setGiocatori(nuoviGiocatori);
            cambiaTesto('Giocatore ' + (turnoGiocatore + 1) + ' passa dal Via. ');
        }
        handleOpen(); 
    }

    partitaCountdown = (giocatori)=> {
        
            var vincitore = giocatori[0];
            var i;
                        
            for(i=1; i<giocatori.length; i++){
                if(vincitore.capitale < giocatori[i].capitale){
                    vincitore = giocatori[i];
                }
            }
            //verifico che ci sia un pareggio
            var pareggio = 0;
            var n = 0;
            while(n<giocatori.length){
                if(vincitore.capitale === giocatori[n].capitale){
                    pareggio++
                }
                n++;
            }
                        
            if(pareggio<2){
                return('Il tempo è finito: Giocatore: '+ vincitore.numero +' hai vinto');
            }
            else{
                return("Il tempo è finito: C'é stato un pareggio");
            }
    }
    getSaldoGiocatore
}

export default Banca;