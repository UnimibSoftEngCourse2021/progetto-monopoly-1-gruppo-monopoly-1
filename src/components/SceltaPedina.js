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

function SceltaPedina(props){

    const pedine = [boat, car, doggo, hat, iron, shoe, thimble, wheelbarrow];
    const [giocatoreAttuale, setGiocatoreAttuale] = React.useState(1);
    const [iniziaPartita, setIniziaPatita] = React.useState(false);
    const numeroGiocatori = parseInt(props.numeroGiocatori);
    const [giocatori, setGiocatori] = React.useState(
        [
          {
            numero: 1,
            capitale: 0,
            pedina: '',
            numeroContrattiIniziali: 0,
            inPrigione: false,
            inGioco: false,
          },
          {
            numero: 2,
            capitale: 0,
            pedina: '',
            numeroContrattiIniziali: 0,
            inPrigione: false,
            inGioco: false,
          },
          {
            numero: 3,
            capitale: 0,
            pedina: '',
            numeroContrattiIniziali: 0,
            inPrigione: false,
            inGioco: false,
          },
          {
            numero: 4,
            capitale: 0,
            pedina: '',
            numeroContrattiIniziali: 0,
            inPrigione: false,
            inGioco: false,
          },
          {
            numero: 5,
            capitale: 0,
            pedina: '',
            numeroContrattiIniziali: 0,
            inPrigione: false,
            inGioco: false,
          },
          {
            numero: 6,
            capitale: 0,
            pedina: '',
            numeroContrattiIniziali: 0,
            inPrigione: false,
            inGioco: false,
          },
        ]
    );
    const [segnalini2, setSegnalini2] = React.useState (
        [
            {
                nome: "",
                ascissa: 940,
                ordinata: 600,
                visibilita: "hidden",
                strato: 0,
                attualeCasella: 0,
                giocatore: 1
            },
            {
                nome: "",
                ascissa: 940,
                ordinata: 600,
                visibilita: "hidden",
                strato: 1,
                attualeCasella: 0,
                giocatore: 2
            },
            {
                nome: "",
                ascissa: 940,
                ordinata: 600,
                visibilita: "hidden",
                strato: 2,
                attualeCasella: 0,
                giocatore: 3
            },
            {
                nome: "",
                ascissa: 940,
                ordinata: 600,
                visibilita: "hidden",
                strato: 3,
                attualeCasella: 0,
                giocatore: 4
            },
            {
                nome: "",
                ascissa: 940,
                ordinata: 600,
                visibilita: "hidden",
                strato: 4,
                attualeCasella: 0,
                giocatore: 5
            },
            {
                nome: "",
                ascissa: 940,
                ordinata: 600,
                visibilita: "hidden",
                strato: 5,
                attualeCasella: 0,
                giocatore: 6
            }
        ]
    );

    // Questa funzione associa ad ogni giocatore una pedina.
    function associaGiocatorePedina(pedina){
        // Se una pedina è già stata scelta da un giocatore, non può più essere scelta dagli altri.
        if (giocatori.find(giocatore => giocatore.pedina === pedina)) {
            alert('Non puoi scegliere una pedina già selezionata!');
        }
        // Se la pedina è disponibile, associa la pedina al giocatore e imposta i valori iniziali degli altri attributi
        // del giocatore.
        else {
            var nuovaListaGiocatori = giocatori;
            var n = giocatoreAttuale;
            if (numeroGiocatori === 2) {
                nuovaListaGiocatori[n-1] = {numero: n, capitale: 8750, pedina, numeroContrattiIniziali: 7, inPrigione: false, inGioco: true };
            }
            else if (numeroGiocatori === 3) {
                nuovaListaGiocatori[n-1] = {numero: n, capitale: 7500, pedina, numeroContrattiIniziali: 6, inPrigione: false, inGioco: true };
            }
            else if (numeroGiocatori === 4) {
                nuovaListaGiocatori[n-1] = {numero: n, capitale: 6250, pedina, numeroContrattiIniziali: 5, inPrigione: false, inGioco: true };
            }
            else if (numeroGiocatori === 5) {
                nuovaListaGiocatori[n-1] = {numero: n, capitale: 5000, pedina, numeroContrattiIniziali: 4, inPrigione: false, inGioco: true };
            }
            else {
                nuovaListaGiocatori[n-1] = {numero: n, capitale: 3750, pedina, numeroContrattiIniziali: 3, inPrigione: false, inGioco: true };
            }
            setGiocatori(nuovaListaGiocatori);

            var nuovaListaSegnalini = segnalini2;
            nuovaListaSegnalini[n-1] =  {
                                            nome: pedina,
                                            ascissa: 940,
                                            ordinata: 600,
                                            visibilita: "visible",
                                            strato: n-1,
                                            attualeCasella: 0,
                                            giocatore: n
                                        };
            setSegnalini2(nuovaListaSegnalini);

            setGiocatoreAttuale(giocatoreAttuale + 1);

            // Se tutti i giocatori hanno scelto la loro pedina, imposta iniziaPartita a true. 
            // In questo modo viene avviata la partita. 
            if(giocatoreAttuale === numeroGiocatori){
                console.log(giocatori);
                setIniziaPatita(true);
            }
        }
    }

    return(
        <div>
            {
                // Se iniziaPartita è true avvia la partita. Altrimenti si consente ai giocatori di scegliere la pedina.
                iniziaPartita ?
                ReactDOM.render(
                    <React.StrictMode>
                        <App 
                            numeroGiocatori={numeroGiocatori} 
                            difficolta={props.difficolta} 
                            giocatori={giocatori}
                            setGiocatori={setGiocatori}
                            segnalini2={segnalini2}
                            setSegnalini2={setSegnalini2}
                        />
                    </React.StrictMode>,
                    document.getElementById('root')
                )
                :
                <div className="scelta-pedina">
                    <h1>Giocatore {giocatoreAttuale} scegli la tua pedina:</h1>
                    <div className="contenitore-pedine">
                        {
                            pedine.map(pedina => (
                                <div className="contenitore-pedine-interno" onClick={() => associaGiocatorePedina(pedina)}>
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

export default SceltaPedina;




/*class SceltaPedina extends Component {
    constructor(props){
        super(props);
        this.handleChangeGiocatori = this.handleChangeGiocatori.bind(this);
        this.state = {
            pedine: [boat, car, doggo, hat, iron, shoe, thimble, wheelbarrow],
            giocatoreAttuale: 1,
            giocatori0: [],
            iniziaPartita: false,
            numeroGiocatori: parseInt(this.props.numeroGiocatori),
            difficolta: this.props.difficolta,
            giocatori: []
        }
    }

    handleChangeGiocatori(nuoviGiocatori) {
        this.setState({giocatori: nuoviGiocatori});
    }

    // Questa funzione crea una lista di oggetti. Ogni oggetto rappresenta un giocatore.
    // Ogni giocatore è caratterizzato da un numero e da una pedina.
    associaGiocatorePedina = (pedina) => {
        // Se una pedina è già stata scelta da un giocatore, non può più essere scelta dagli altri.
        if (this.state.giocatori0.find(giocatore => giocatore.pedina === pedina)) {
            alert('Non puoi scegliere una pedina già selezionata!');
        // Se la pedina è disponibile, aggiunge alla lista dei giocatori un oggetto avente per giocatore
        // il numero del giocatore attuale e per pedina la pedina selezionata.
        } else {
            this.setState((statoPrecedente) => ({
            giocatoreAttuale: statoPrecedente.giocatoreAttuale + 1,
            giocatori0: [
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
                            <App 
                                numeroGiocatori={this.state.numeroGiocatori} 
                                difficolta={this.state.difficolta} 
                                giocatori={this.state.giocatori}
                                giocatori0={this.state.giocatori0}
                                setGiocatori={this.handleChangeGiocatori}
                            />
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

export default SceltaPedina*/
