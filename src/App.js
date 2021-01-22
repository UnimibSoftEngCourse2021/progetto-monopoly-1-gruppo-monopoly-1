import React from 'react'
import TabellaGiocatori from './components/Tabelle/TabellaGiocatori';
import ComponentBoard from './components/ComponentBoard';
import TabellaTerreni from './components/Tabelle/TabellaTerreni';
import TabellaSocietàStazioni from './components/Tabelle/TabellaSocietàStazioni';
import Banca from './components/Banca';



function App(props) {

  // Countdown
  const [counter, setCounter] = React.useState(20);

  var banca1 = new Banca;

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if (counter==0) {
      alert('tempo finito');  
      banca1.partitaCountdown(props.giocatori);
    }
  }, [counter]);

  const [caselle, setCaselle] = React.useState(
    [
      {
        tipo: 'servizio',
        nome: 'GO',
        riferimento: -1,
      },
      {
        tipo: 'terreno',
        nome: 'Mediterranean avenue',
        riferimento: 0,
      },
      {
        tipo: 'probabilita',
        nome: 'probabilita',
        riferimento: -1,
      },
      {
        tipo: 'terreno',
        nome: 'Baltic avenue',
        riferimento: 1,
      },
      {
        tipo: 'servizio',
        nome: 'income tax',
        riferimento: -1,
      },
      {
        tipo: 'stazione',
        nome: 'Reading railroad',
        riferimento: 0,
      },
      {
        tipo: 'terreno',
        nome: 'Oriental avenue',
        riferimento: 2,
      },
      {
        tipo: 'imprevisti',
        nome: 'imprevisti',
        riferimento: -1,
      },
      {
        tipo: 'terreno',
        nome: 'Vermont avenue',
        riferimento: 15,
      },
      {
        tipo: 'terreno',
        nome: 'Connecticut avenue',
        riferimento: 4,
      },
      {
        tipo: 'prigione',
        nome: 'prigione',
        riferimento: -1,
      },
      {
        tipo: 'terreno',
        nome: 'St. charles place',
        riferimento: 5,
      },
      {
        tipo: 'societa',
        nome: 'Electric company',
        riferimento: 4,
      },
      {
        tipo: 'terreno',
        nome: 'States avenue',
        riferimento: 6,
      },
      {
        tipo: 'terreno',
        nome: 'Virginia avenue',
        riferimento: 7,
      },
      {
        tipo: 'stazione',
        nome: 'Pennsylvania railroad',
        riferimento: 1,
      },
      {
        tipo: 'terreno',
        nome: 'St. james place',
        riferimento: 8,
      },
      {
        tipo: 'probabilita',
        nome: 'probabilita',
        riferimento: -1,
      },
      {
        tipo: 'terreno',
        nome: 'Tennessee avenue',
        riferimento: 9,
      },
      {
        tipo: 'terreno',
        nome: 'New york avenue',
        riferimento: 10,
      },
      {
        tipo: 'free parking',
        nome: 'free parking',
        riferimento: -1,
      },
      {
        tipo: 'terreno',
        nome: 'Kentucky avenue',
        riferimento: 11,
      },
      {
        tipo: 'imprevisti',
        nome: 'imprevisti',
        riferimento: -1,
      },
      {
        tipo: 'terreno',
        nome: 'Indiana avenue',
        riferimento: 12,
      },
      {
        tipo: 'terreno',
        nome: 'Illinois avenue',
        riferimento: 13,
      },
      {
        tipo: 'stazione',
        nome: 'B&O railroad',
        riferimento: 2,
      },
      {
        tipo: 'terreno',
        nome: 'Atlantic avenue',
        riferimento: 14,
      },
      {
        tipo: 'terreno',
        nome: 'Ventnor avenue',
        riferimento: 3,
      },
      {
        tipo: 'societa',
        nome: 'Water works',
        riferimento: 5,
      },
      {
        tipo: 'terreno',
        nome: 'Marvin gardens',
        riferimento: 16,
      },
      {
        tipo: 'go to jail',
        nome: 'go to jail',
        riferimento: -1,
      },
      {
        tipo: 'terreno',
        nome: 'Pacific avenue',
        riferimento: 17,
      },
      {
        tipo: 'terreno',
        nome: 'North carolina avenue',
        riferimento: 18,
      },
      {
        tipo: 'probabilita',
        nome: 'probabilita',
        riferimento: -1,
      },
      {
        tipo: 'terreno',
        nome: 'Pennsylvania avenue',
        riferimento: 19,
      },
      {
        tipo: 'stazione',
        nome: 'Short line',
        riferimento: 3,
      },
      {
        tipo: 'imprevisti',
        nome: 'imprevisti',
        riferimento: -1,
      },
      {
        tipo: 'terreno',
        nome: 'Park place',
        riferimento: 20,
      },
      {
        tipo: 'tasse',
        nome: 'luxury tax',
        riferimento: -1,
      },
      {
        tipo: 'terreno',
        nome: 'Boardwalk',
        riferimento: 21,
      },
    ]
  );
  
  const [terreni, setTerreni] = React.useState(
    [
      {
        nome: 'Mediterranean avenue',
        coloreSfondo: '#7E3C09',
        proprietario: 0,
        case: 0,
        alberghi: 0,
        valore: 60,
        colore: 'marrone',
        ipotecato: false,
      },
      {
        nome: 'Baltic avenue',
        coloreSfondo: '#7E3C09',
        proprietario: 0,
        case: 4,
        alberghi: 0,
        valore: 60,
        colore: 'marrone',
        ipotecato: false,
      },
      {
        nome: 'Oriental avenue',
        coloreSfondo: '#14E3ED',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 100,
        colore: 'azzurro',  
        ipotecato: false,
      },
      {
        nome: 'Vermont avenue',
        coloreSfondo: '#14E3ED',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 100,
        colore: 'azzurro',
        ipotecato: false,
      },
      {
        nome: 'Connecticut avenue',
        coloreSfondo: '#14E3ED',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 120,
        colore: 'azzurro',
        ipotecato: false,
      },
      {
        nome: 'St. charles place',
        coloreSfondo: '#C00FA9',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 140,
        colore: 'rosa',
        ipotecato: false,
      },
      {
        nome: 'States avenue',
        coloreSfondo: '#C00FA9',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 140,
        colore: 'rosa',
        ipotecato: false,
      },
      {
        nome: 'Virginia avenue',
        coloreSfondo: '#C00FA9',
        proprietario: 5,
        case: 0,
        alberghi: 0,
        valore: 160,
        colore: 'rosa',
        ipotecato: false,
      },
      {
        nome: 'St. james place',
        coloreSfondo: '#FF8C00',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 180,
        colore: 'arancione', 
        ipotecato: false,
      },
      {
        nome: 'Tennessee avenue',
        coloreSfondo: '#FF8C00',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 180,
        colore: 'arancione', 
        ipotecato: false,
      },
      {
        nome: 'New york avenue',
        coloreSfondo: '#FF8C00',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 200,
        colore: 'arancione',
        ipotecato: false,
      },
      {
        nome: 'Kentucky avenue',
        coloreSfondo: '#E01630',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 220,
        colore: 'rosso',
        ipotecato: false,
      },
      {
        nome: 'Indiana avenue',
        coloreSfondo: '#E01630',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 220,
        colore: 'rosso',
        ipotecato: false,
      },
      {
        nome: 'Illinois avenue',
        coloreSfondo: '#E01630',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 240,
        colore: 'rosso',
        ipotecato: false,
      },
      {
        nome: 'Atlantic avenue',
        coloreSfondo: '#F0F00D',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 260,
        colore: 'giallo',
        ipotecato: false,
      },
      {
        nome: 'Ventnor avenue',
        coloreSfondo: '#F0F00D',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 260,
        colore: 'giallo',
        ipotecato: false,
      },
      {
        nome: 'Marvin gardens',
        coloreSfondo: '#F0F00D',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 280,
        colore: 'giallo',  
        ipotecato: false,
      },
      {
        nome: 'Pacific avenue',
        coloreSfondo: '#265E08',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 300,
        colore: 'verde', 
        ipotecato: false,
      },
      {
        nome: 'North carolina avenue',
        coloreSfondo: '#265E08',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 300,
        colore: 'verde',
        ipotecato: false,
      },
      {
        nome: 'Pennsylvania avenue',
        coloreSfondo: '#265E08',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 320,
        colore: 'verde',  
        ipotecato: false,
      },
      {
        nome: 'Park place',
        coloreSfondo: '#080883',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 350,
        colore: 'blu', 
        ipotecato: false,
      },
      {
        nome: 'Boardwalk',
        coloreSfondo: '#080883',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 400,
        colore: 'blu', 
        ipotecato: false,
      },
    ]
  );
   
  const [societàStazioni, setSocietàStazioni] = React.useState(
    [
      {
        nome: 'Reading railroad',
        proprietario: -1,
        valore: 200,
        ipotecato: false,
      },
      {
        nome: 'Pennsylvania railroad',
        proprietario: -1,
        valore: 200,
        ipotecato: false,
      },
      {
        nome: 'B&O railroad',
        proprietario: -1,
        valore: 200,
        ipotecato: false,
      },
      {
        nome: 'Short line',
        proprietario: -1,
        valore: 200,
        ipotecato: false,
      },
      {
        nome: 'Electric company',
        proprietario: -1,
        valore: 150,
        ipotecato: false,
      },
      {
        nome: 'Water works',
        proprietario: -1,
        valore: 150,
        ipotecato: false,
      },
    ]
  );
 
  
  const [turnoGiocatore, setTurnoGiocatore] = React.useState(IniziaPerPrimo());

  function IniziaPerPrimo() {
    var min = Math.ceil(0);
    var max = Math.floor(props.numeroGiocatori);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
  }

  //Variabile di stato utilizzata per gestire le partite a tempo
  //se la partita non è a tempo sarà uguale a null
  //se è a tempo avrà il valore del numero di turni che mancano alla fine della partita
  const [tempo, setTempo] = React.useState(props.tempo);
  function decrementaTempo(){
    setTempo(tempo-1);
  }
  

  return (
    <div className="App">
      <table className="tabella1">
        <tr>
          <td className="colonna1">
            <TabellaSocietàStazioni societàStazioni={societàStazioni}  />
          </td>

          <td className="colonnaBoard" rowspan="2">
            <ComponentBoard 
              turnoGiocatore={turnoGiocatore} 
              setTurnoGiocatore={setTurnoGiocatore}
              numeroGiocatori={props.numeroGiocatori}
              terreni={terreni}
              setTerreni={setTerreni}
              giocatori={props.giocatori}
              setGiocatori={props.setGiocatori}
              segnalini={props.segnalini}
              setSegnalini={props.setSegnalini}
              societàStazioni={societàStazioni}
              setSocietàStazioni={setSocietàStazioni}
              caselle={caselle} setCaselle={setCaselle}
              tempo={tempo}
              setTempo={setTempo}
              decrementaTempo={decrementaTempo}
              counter={counter}
              setCounter={setCounter}
            />
          </td>
          <td className="colonna1" >
            <TabellaGiocatori giocatori={props.giocatori} turnoGiocatore={turnoGiocatore}/>
          </td>

        </tr>
        
      </table>
      
      
      <TabellaTerreni terreni={terreni} />
      
    </div>

  );
}

export default App;
