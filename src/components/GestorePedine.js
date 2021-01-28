import React from 'react'
import { Grid, TextField, Snackbar, Button } from '@material-ui/core';
import ReactDOM from 'react-dom'
import Tavola from '../Tavola'
import hat from '../img/hat.png'
import iron from '../img/iron.png'
import car from '../img/car.png'
import boat from '../img/boat.png'
import doggo from '../img/doggo.png'
import shoe from '../img/shoe.png'
import thimble from '../img/thimble.png'
import wheelbarrow from '../img/wheelbarrow.png'
import CryptoRandom from './CryptoRandom';

function GestorePedine(props){

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
            numeroTurniPrigione: 0,
            carteUscitaPrigione: 0,
            inGioco: false,
            carteBonus: 0
          },
          {
            numero: 2,
            capitale: 0,
            pedina: '',
            numeroContrattiIniziali: 0,
            inPrigione: false,
            numeroTurniPrigione: 0,
            carteUscitaPrigione: 0,
            inGioco: false,
            carteBonus: 0
          },
          {
            numero: 3,
            capitale: 0,
            pedina: '',
            numeroContrattiIniziali: 0,
            inPrigione: false,
            numeroTurniPrigione: 0,
            carteUscitaPrigione: 0,
            inGioco: false,
            carteBonus: 0
          },
          {
            numero: 4,
            capitale: 0,
            pedina: '',
            numeroContrattiIniziali: 0,
            inPrigione: false,
            numeroTurniPrigione: 0,
            carteUscitaPrigione: 0,
            inGioco: false,
            carteBonus: 0
          },
          {
            numero: 5,
            capitale: 0,
            pedina: '',
            numeroContrattiIniziali: 0,
            inPrigione: false,
            numeroTurniPrigione: 0,
            carteUscitaPrigione: 0,
            inGioco: false,
            carteBonus: 0
          },
          {
            numero: 6,
            capitale: 0,
            pedina: '',
            numeroContrattiIniziali: 0,
            inPrigione: false,
            numeroTurniPrigione: 0,
            carteUscitaPrigione: 0,
            inGioco: false,
            carteBonus: 0
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
            setTesto('Controlla di aver inserito un numero di turni corretto');
            setOpen(true);
        }
        else{
            setTempo(event.target.value);
        }
        
    };

    //Partita a tempo countdown
    const [tempoMinuti, setTempoMinuti] = React.useState(null);
    const handleChangeTempoMinuti = (event) => {
        if(event.target.value % 1 !== 0){
            setTesto('Controlla di aver inserito un numero di minuti corretto');
            setOpen(true);
        }
        else{
            setTempoMinuti(event.target.value);
        }
        
    };

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {setOpen(false)};
    const [testo, setTesto] = React.useState('');
    
 
    // Questa funzione associa ad ogni giocatore una pedina.
    function associaGiocatorePedina(pedina){
        // Se una pedina è già stata scelta da un giocatore, non può più essere scelta dagli altri.
        if (giocatori.find(giocatore => giocatore.pedina === pedina)) {
            setTesto("Non puoi scegliere una pedina già selezionata!");
            setOpen(true);
        }
        // Se la pedina è disponibile, associa la pedina al giocatore e imposta i valori iniziali degli altri attributi
        // del giocatore.
        else {
            var nuovaListaGiocatori = giocatori;
            var n = giocatoreAttuale;
            if (numeroGiocatori === 2) {
                nuovaListaGiocatori[n-1] =  {
                                                numero: n, 
                                                capitale: 8750, 
                                                pedina, 
                                                numeroContrattiIniziali: 7, 
                                                inPrigione: false,
                                                numeroTurniPrigione: 0, 
                                                carteUscitaPrigione: 1, 
                                                inGioco: true,
                                                carteBonus: 0 
                                            };
            }
            else if (numeroGiocatori === 3) {
                nuovaListaGiocatori[n-1] =  {
                                                numero: n, 
                                                capitale: 7500, 
                                                pedina, 
                                                numeroContrattiIniziali: 6, 
                                                inPrigione: false, 
                                                numeroTurniPrigione: 0,
                                                carteUscitaPrigione: 0, 
                                                inGioco: true,
                                                carteBonus: 0 
                                            };
            }
            else if (numeroGiocatori === 4) {
                nuovaListaGiocatori[n-1] =  {   
                                                numero: n, 
                                                capitale: 6250, 
                                                pedina, 
                                                numeroContrattiIniziali: 5, 
                                                inPrigione: false, 
                                                numeroTurniPrigione: 0,
                                                carteUscitaPrigione: 0, 
                                                inGioco: true,
                                                carteBonus: 0 
                                            };
            }
            else if (numeroGiocatori === 5) {
                nuovaListaGiocatori[n-1] =  {
                                                numero: n, 
                                                capitale: 5000, 
                                                pedina, 
                                                numeroContrattiIniziali: 4, 
                                                inPrigione: false, 
                                                numeroTurniPrigione: 0,
                                                carteUscitaPrigione: 0, 
                                                inGioco: true,
                                                carteBonus: 0 
                                            };
            }
            else {
                nuovaListaGiocatori[n-1] =  {
                                                numero: n, 
                                                capitale: 3750, 
                                                pedina, 
                                                numeroContrattiIniziali: 3, 
                                                inPrigione: false, 
                                                numeroTurniPrigione: 0,
                                                carteUscitaPrigione: 0, 
                                                inGioco: true,
                                                carteBonus: 0 
                                            };
            }
            setGiocatori(nuovaListaGiocatori);

            // Qui viene creata una lista di segnalini.
            // Ogni volta che un giocatore sceglie una pedina, la lista viene aggiornata in modo
            // da associare ogni segnalino (pedina) al corrispondente giocatore.
            //Se la difficoltà e normale o difficile le posizioni dei segnalini saranno scelte in modo casuale.
            var nuovaListaSegnalini = segnalini;
            if(props.difficolta === 'normale' || props.difficolta === 'difficile'){
                //var min = Math.ceil(0);
                //var max = Math.floor(40);
                //var num = Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
                var num = CryptoRandom(0,39);
                console.log(num);
                nuovaListaSegnalini[n-1] =  {
                    nome: pedina,
                    ascissa: posizionaCasualmente('ascissa', num),
                    ordinata: posizionaCasualmente('ordinata', num),
                    visibilita: "visible",
                    strato: n-1,
                    attualeCasella: num,
                    giocatore: n
                };
            }
            else{
                nuovaListaSegnalini[n-1] =  {
                    nome: pedina,
                    ascissa: 940,
                    ordinata: 600,
                    visibilita: "visible",
                    strato: n-1,
                    attualeCasella: 0,
                    giocatore: n
                };
            }
            
            setSegnalini(nuovaListaSegnalini);

            setGiocatoreAttuale(giocatoreAttuale + 1);

            // Se tutti i giocatori hanno scelto la loro pedina, imposta iniziaPartita a true. 
            // In questo modo viene avviata la partita. 
            if(giocatoreAttuale === numeroGiocatori){
                setIniziaPatita(true);
            }
        }
    }

    function posizionaCasualmente(asse, n){
        if(asse === 'ordinata'){
            if( n>=0 && n<=10 ){
                return(600);
            }
            if( n>=20 && n<=30 ){
                return(20);
            }
            else{
                switch(n){
                    case 31: case 19: return(100);
                    
                    case 32: case 18: return(150);
                    
                    case 33: case 17: return(200);
                    
                    case 34: case 16: return(250);
                    
                    case 35: case 15: return(310);
                    
                    case 36: case 14: return(360);
                    
                    case 37: case 13: return(420);
                    
                    case 38: case 12: return(480);
                   
                    default: return(530);
                }

            }
        }
        else{
            if( n>=10 && n<=20 ){
                return(370);
            }
            if( n>=30 && n<=39 ){
                return(940);
            }
            else{
                switch(n){
                    case 21: case 9: return(450);
                    
                    case 22: case 8: return(500);
                    
                    case 23: case 7: return(560);
                    
                    case 24: case 6: return(610);
                    
                    case 25: case 5: return(660);
                    
                    case 26: case 4: return(720);
                    
                    case 27: case 3: return(770);
                    
                    case 28: case 2: return(820);
                   
                    default: return(880);
                }

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
                        <Tavola 
                            numeroGiocatori={numeroGiocatori} 
                            difficolta={props.difficolta} 
                            giocatori={giocatori}
                            setGiocatori={setGiocatori}
                            segnalini={segnalini}
                            setSegnalini={setSegnalini}
                            tempo={tempo}
                            tempoMinuti={tempoMinuti}
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
                <h2>Oppure i minuti del countdown</h2>
                <TextField variant="outlined" style={{margin:'16px', marginLeft:'32px', width:'350px'}} onChange={handleChangeTempoMinuti} />
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={testo}
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}> UNDO </Button>
                    </React.Fragment>
                }
            />
              
        </div>
    );
}

export default GestorePedine;
