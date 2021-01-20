import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import hat from '../img/hat.png'
import iron from '../img/iron.png'
import car from '../img/car.png'
import boat from '../img/boat.png'
import doggo from '../img/doggo.png'
import shoe from '../img/shoe.png'
import thimble from '../img/thimble.png'
import wheelbarrow from '../img/wheelbarrow.png'

class SceltaPedina extends Component {
    constructor(props){
        super(props);
        this.state = {
            pedine: [boat, car, doggo, hat, iron, shoe, thimble, wheelbarrow],
            giocatoreAttuale: 1,
            giocatori: [],
            iniziaPartita: false,
            numeroGiocatori: parseInt(this.props.numeroGiocatori),
            difficolta: this.props.difficolta
        }
    }

    // Questa funzione crea una lista di oggetti. Ogni oggetto rappresenta un giocatore.
    // Ogni giocatore è caratterizzato da un numero e da una pedina.
    associaGiocatorePedina = (pedina) => {
        // Se una pedina è già stata scelta da un giocatore, non può più essere scelta dagli altri.
        if (this.state.giocatori.find(giocatore => giocatore.pedina === pedina)) {
            alert('Non puoi scegliere una pedina già selezionata!');
        // Se la pedina è disponibile, aggiunge alla lista dei giocatori un oggetto avente per giocatore
        // il numero del giocatore attuale e per pedina la pedina selezionata.
        } else {
            this.setState((statoPrecedente) => ({
            giocatoreAttuale: statoPrecedente.giocatoreAttuale + 1,
            giocatori: [
                ...statoPrecedente.giocatori, 
                {
                    giocatore: statoPrecedente.giocatoreAttuale,
                    pedina,
                    capitale: 1500,
                    inGioco: true
                } 
            ],
            // Se tutti i giocatori hanno scelto la loro pedina, imposta iniziaPartita a true. In questo modo viene avviata la partita. 
            iniziaPartita: statoPrecedente.giocatoreAttuale === this.state.numeroGiocatori ? true : false
            })) 
        }
    } 

    render() {
        return(
            <div>
                {
                    // Se iniziaPartita è true avvia la partita. Altrimenti si consente ai giocatori di scegliere la pedina.
                    this.state.iniziaPartita ?
                    ReactDOM.render(
                        <React.StrictMode>
                            <App numeroGiocatori={this.state.numeroGiocatori} difficolta={this.state.difficolta} giocatori={this.state.giocatori}/>
                        </React.StrictMode>,
                        document.getElementById('root')
                    )
                    :
                    <div className="scelta-pedina">
                        <h1>Giocatore {this.state.giocatoreAttuale} scegli la tua pedina:</h1>
                        <div className="contenitore-pedine">
                            {
                                this.state.pedine.map(pedina => (
                                    <div className="contenitore-pedine-interno" onClick={() => this.associaGiocatorePedina(pedina)}>
                                        <img 
                                        alt=""
                                        className="scelta-pedina-immagine"
                                        src={pedina}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }
                
            </div>
        );
    }
}

export default SceltaPedina
