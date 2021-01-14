//import logo from './img/monopoly_logo.jpg'
import React from 'react'
import TabellaGiocatori from './components/Tabelle/TabellaGiocatori';
import ComponentProprietaLeft from './components/ComponentProprietaLeft';
import ComponentProprietaRight from './components/ComponentProprietaRight';
import ComponentBoard from './components/ComponentBoard';
import TabellaTerreni from './components/Tabelle/TabellaTerreni';
import TabellaSocietàStazioni from './components/Tabelle/TabellaSocietàStazioni';

//rff

function App(props) {

  const [caselle, setCaselle] = React.useState(
    [
      {
        tipo: 'servizio',
        nome: 'GO',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'mediterranean avenue',
        proprietario: ''
      },
      {
        tipo: 'probabilita',
        nome: 'probabilita',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'baltic avenue',
        proprietario: ''
      },
      {
        tipo: 'servizio',
        nome: 'income tax',
        proprietario: ''
      },
      {
        tipo: 'stazione',
        nome: 'reading railroad',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'oriental avenue',
        proprietario: ''
      },
      {
        tipo: 'imprevisti',
        nome: 'imprevisti',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'vermont avenue',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'connecticut avenue',
        proprietario: ''
      },
      {
        tipo: 'prigione',
        nome: 'prigione',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'st. charles place',
        proprietario: ''
      },
      {
        tipo: 'societa',
        nome: 'electric company',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'states avenue',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'virginia avenue',
        proprietario: ''
      },
      {
        tipo: 'stazione',
        nome: 'pennsylvania road',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'st. james place',
        proprietario: ''
      },
      {
        tipo: 'probabilita',
        nome: 'probabilita',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'tennessee avenue',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'new york avenue',
        proprietario: ''
      },
      {
        tipo: 'free parking',
        nome: 'free parking',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'kentucky avenue',
        proprietario: ''
      },
      {
        tipo: 'imprevisti',
        nome: 'imprevisti',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'indiana avenue',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'illinois avenue',
        proprietario: ''
      },
      {
        tipo: 'stazione',
        nome: 'b&o stazione',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'atlantic avenue',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'ventnor avenue',
        proprietario: ''
      },
      {
        tipo: 'societa',
        nome: 'societa acqua',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'marvin gardens',
        proprietario: ''
      },
      {
        tipo: 'go to jail',
        nome: 'go to jail',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'pacific avenue',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'north carolina avenue',
        proprietario: ''
      },
      {
        tipo: 'probabilita',
        nome: 'probabilita',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'pennsylvania avenue',
        proprietario: ''
      },
      {
        tipo: 'stazione',
        nome: 'short line',
        proprietario: ''
      },
      {
        tipo: 'imprevisti',
        nome: 'imprevisti',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'park place',
        proprietario: ''
      },
      {
        tipo: 'tasse',
        nome: 'luxury tax',
        proprietario: ''
      },
      {
        tipo: 'terreno',
        nome: 'boardwalk',
        proprietario: ''
      },
    ]
  );
  
  const [terreni, setTerreni] = React.useState(
    [
      {
        nome: 'Vicolo Corto',
        proprietario: 0,
        case: 0,
        alberghi: 0,
        valore: 60,
        colore: 'marrone',
        ipotecato: true,
      },
      {
        nome: 'Vicolo Stretto',
        proprietario: 0,
        case: 4,
        alberghi: 0,
        valore: 60,
        colore: 'marrone',
        ipotecato: false,
      },
      {
        nome: 'Bastioni Gran Sasso',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 100,
        colore: 'azzurro',  
        ipotecato: false,
      },
      {
        nome: 'Viale Monte Rosa',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 100,
        colore: 'azzurro',
        ipotecato: false,
      },
      {
        nome: 'Viale Vesuvio',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 120,
        colore: 'azzurro',
        ipotecato: false,
      },
      {
        nome: 'Via Accademia',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 140,
        colore: 'rosa',
        ipotecato: false,
      },
      {
        nome: 'Corso Ateneo',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 140,
        colore: 'rosa',
        ipotecato: false,
      },
      {
        nome: 'Piazza Università',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 160,
        colore: 'rosa',
        ipotecato: false,
      },
      {
        nome: 'Via Verdi',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 180,
        colore: 'arancione', 
        ipotecato: false,
      },
      {
        nome: 'Corso Raffaello',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 180,
        colore: 'arancione', 
        ipotecato: false,
      },
      {
        nome: 'Piazza Dante',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 200,
        colore: 'arancione',
        ipotecato: false,
      },
      {
        nome: 'Via Marco Polo',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 220,
        colore: 'rosso',
        ipotecato: false,
      },
      {
        nome: 'Corso Magellano',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 240,
        colore: 'rosso',
        ipotecato: false,
      },
      {
        nome: 'Largo Colombo',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 240,
        colore: 'rosso',
        ipotecato: false,
      },
      {
        nome: 'Viale Costantino',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 260,
        colore: 'giallo',
        ipotecato: false,
      },
      {
        nome: 'Viale Traiano',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 260,
        colore: 'giallo',
        ipotecato: false,
      },
      {
        nome: 'Piazza Giulio Cesare',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 280,
        colore: 'giallo',  
        ipotecato: false,
      },
      {
        nome: 'Via Roma',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 300,
        colore: 'verde', 
        ipotecato: false,
      },
      {
        nome: 'Corso Impero',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 300,
        colore: 'verde',
        ipotecato: false,
      },
      {
        nome: 'Largo Augusto',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 320,
        colore: 'verde',  
        ipotecato: false,
      },
      {
        nome: 'Viale dei Giardini',
        proprietario: -1,
        case: 0,
        alberghi: 0,
        valore: 350,
        colore: 'blu', 
        ipotecato: false,
      },
      {
        nome: 'Parco della Vittoria',
        proprietario: 0,
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
        nome: 'Stazione ovest',
        proprietario: 0,
        valore: 200,
        ipotecato: false,
      },
      {
        nome: 'Stazione nord',
        proprietario: 0,
        valore: 200,
        ipotecato: false,
      },
      {
        nome: 'Stazione sud',
        proprietario: -1,
        valore: 200,
        ipotecato: false,
      },
      {
        nome: 'Stazione est',
        proprietario: 0,
        valore: 200,
        ipotecato: false,
      },
      {
        nome: 'Società acqua potabile',
        proprietario: 0,
        valore: 150,
        ipotecato: false,
      },
      {
        nome: 'Società elettrica',
        proprietario: -1,
        valore: 150,
        ipotecato: false,
      },
    ]
  );

  

  const [giocatori, setGiocatori] = React.useState(
    [
      {
        nome: '0',
        capitale: 1500,
        pedina: '',
      },
      {
        nome: '1',
        capitale: 1500,
        pedina: '',
      },
      {
        nome: '2',
        capitale: 1500,
        pedina: '',
      },
      {
        nome: '3',
        capitale: 1500,
        pedina: '',
      },
      {
        nome: '4',
        capitale: 1500,
        pedina: '',
      },
      {
        nome: '5',
        capitale: 1500,
        pedina: '',
      },
    ]
  );

  const [turnoGiocatore, setTurnoGiocatore] = React.useState(0);

  

  
  

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
              giocatori={giocatori}
              setGiocatori={setGiocatori}
              societàStazioni={societàStazioni}
              setSocietàStazioni={setSocietàStazioni}
              caselle={caselle} setCaselle={setCaselle}
            />
          </td>
          <td className="colonna1" >
            <TabellaGiocatori giocatori={giocatori}/>
          </td>

        </tr>
        <tr>
          <td className="colonna1"><ComponentProprietaLeft /></td>
          <td className="colonna1"><ComponentProprietaRight /></td>
        </tr>
      </table>
      
      
      <TabellaTerreni terreni={terreni} />
      
    </div>

  );
}

export default App;
