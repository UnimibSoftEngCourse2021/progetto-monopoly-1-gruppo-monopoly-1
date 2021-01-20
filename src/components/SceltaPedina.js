import React from 'react'
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
            nome: '0',
            capitale: 1500,
            pedina: '',
            inGioco: false,
          },
          {
            nome: '1',
            capitale: 1500,
            pedina: '',
            inGioco: false,
          },
          {
            nome: '2',
            capitale: 1500,
            pedina: '',
            inGioco: false,
          },
          {
            nome: '3',
            capitale: 1500,
            pedina: '',
            inGioco: false,
          },
          {
            nome: '4',
            capitale: 1500,
            pedina: '',
            inGioco: false,
          },
          {
            nome: '5',
            capitale: 1500,
            pedina: '',
            inGioco: false,
          },
        ]
      );

    // Questa funzione crea una lista di oggetti. Ogni oggetto rappresenta un giocatore.
    // Ogni giocatore è caratterizzato da un numero e da una pedina.
    function associaGiocatorePedina(pedina){
        // Se una pedina è già stata scelta da un giocatore, non può più essere scelta dagli altri.
        if (giocatori.find(giocatore => giocatore.pedina === pedina)) {
            alert('Non puoi scegliere una pedina già selezionata!');
        }
        // Se la pedina è disponibile, aggiunge alla lista dei giocatori un oggetto avente per giocatore
        // il numero del giocatore attuale e per pedina la pedina selezionata.
        else {
            setGiocatoreAttuale(giocatoreAttuale + 1);
            var giocatori0 = giocatori;
            var n = giocatoreAttuale-1;
            giocatori0[n] = {nome: n.toString(), capitale: 1500, pedina, inGioco: true };
            setGiocatori(giocatori0);
            
            // Se tutti i giocatori hanno scelto la loro pedina, imposta iniziaPartita a true. 
            //In questo modo viene avviata la partita. 
            if(giocatoreAttuale === numeroGiocatori){
                //Tolgo dall'array giocatori i giocatori in più
                var nuoviGiocatori = giocatori.slice(0, n+1);
                setGiocatori(nuoviGiocatori);
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
