import React from 'react'
import { Grid, TextField } from '@material-ui/core';
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
    const [segnalini, setSegnalini] = React.useState (
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

    //Variabile di stato utilizzata per gestire le partite a tempo
    //se la partita non è a tempo sarà uguale a null
    //se è a tempo avrà il valore del numero di turni che mancano alla fine della partita
    const [tempo, setTempo] = React.useState(null);
    const handleChangeTempo = (event) => {
        if(event.target.value % 1 !== 0){
            alert('Controlla di aver inserito un numero di turni corretto')
        }
        else{
            setTempo(event.target.value);
        }
        
    };

    
 

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

            // Qui viene creata una lista di segnalini.
            // Ogni volta che un giocatore sceglie una pedina, la lista viene aggiornata in modo
            // da associare ogni segnalino (pedina) al corrispondente giocatore.
            var nuovaListaSegnalini = segnalini;
            nuovaListaSegnalini[n-1] =  {
                                            nome: pedina,
                                            ascissa: 940,
                                            ordinata: 600,
                                            visibilita: "visible",
                                            strato: n-1,
                                            attualeCasella: 0,
                                            giocatore: n
                                        };
            setSegnalini(nuovaListaSegnalini);

            setGiocatoreAttuale(giocatoreAttuale + 1);

            // Se tutti i giocatori hanno scelto la loro pedina, imposta iniziaPartita a true. 
            // In questo modo viene avviata la partita. 
            if(giocatoreAttuale === numeroGiocatori){
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
                            segnalini={segnalini}
                            setSegnalini={setSegnalini}
                            tempo={tempo}
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

            <Grid container  direction="column" alignItems="center" style={{marginTop:'100px'}}>
                <h2>Se vuoi svolgere una partita a tempo inserisci qui il numero di turni</h2>
                <TextField variant="outlined" style={{margin:'16px', marginLeft:'32px', width:'350px'}} onChange={handleChangeTempo} />
            </Grid>
              
        </div>
    );
}

export default SceltaPedina;