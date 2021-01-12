//import logo from './img/monopoly_logo.jpg'
import React, { Component } from 'react'
import TabellaGiocatori from './components/Tabelle/TabellaGiocatori';
import ComponentProprietaLeft from './components/ComponentProprietaLeft';
import ComponentProprietaRight from './components/ComponentProprietaRight';
import ComponentBoard from './components/ComponentBoard';
import TabellaTerreni from './components/Tabelle/TabellaTerreni';



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
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 60,
        colore: 'marrone',
      },
      {
        nome: 'Vicolo Stretto',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 60,
        colore: 'marrone', 
      },
      {
        nome: 'Bastioni Gran Sasso',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 100,
        colore: 'azzurro',  
      },
      {
        nome: 'Viale Monte Rosa',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 100,
        colore: 'azzurro',
      },
      {
        nome: 'Viale Vesuvio',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 120,
        colore: 'azzurro',
      },
      {
        nome: 'Via Accademia',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 140,
        colore: 'rosa',
      },
      {
        nome: 'Corso Ateneo',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 140,
        colore: 'rosa',
      },
      {
        nome: 'Piazza Università',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 160,
        colore: 'rosa',
      },
      {
        nome: 'Via Verdi',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 180,
        colore: 'arancione', 
      },
      {
        nome: 'Corso Raffaello',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 180,
        colore: 'arancione', 
      },
      {
        nome: 'Piazza Dante',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 200,
        colore: 'arancione',  
      },
      {
        nome: 'Via Marco Polo',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 220,
        colore: 'rosso',  
      },
      {
        nome: 'Corso Magellano',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 240,
        colore: 'rosso',
      },
      {
        nome: 'Largo Colombo',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 240,
        colore: 'rosso',
      },
      {
        nome: 'Viale Costantino',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 260,
        colore: 'giallo',
      },
      {
        nome: 'Viale Traiano',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 260,
        colore: 'giallo',
      },
      {
        nome: 'Piazza Giulio Cesare',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 280,
        colore: 'giallo',  
      },
      {
        nome: 'Via Roma',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 300,
        colore: 'verde', 
      },
      {
        nome: 'Corso Impero',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 300,
        colore: 'verde',
      },
      {
        nome: 'Largo Augusto',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 320,
        colore: 'verde',  
      },
      {
        nome: 'Viale dei Giardini',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 350,
        colore: 'blu', 
      },
      {
        nome: 'Parco della Vittoria',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 400,
        colore: 'blu', 
      },
    ]
  ); 

  const [stazioni, setStazioni] = React.useState(
    [
      {
        nome: 'Stazione ovest',
        proprietario: '',
        valore: 200
      },
      {
        nome: 'Stazione nord',
        proprietario: '',
        valore: 200
      },
      {
        nome: 'Stazione sud',
        proprietario: '',
        valore: 200
      },
      {
        nome: 'Stazione est',
        proprietario: '',
        valore: 200
      },
    ]
  );

  const [società, setSocietà] = React.useState(
    [
      {
        nome: 'Società acqua potabile',
        proprietario: '',
        valore: 150
      },
      {
        nome: 'Società elettrica',
        proprietario: '',
        valore: 150
      },
    ]
  );

  const [giocatori, setGiocatori] = React.useState(
    [
      {
        nome: '',
        capitale: 0,
        pedina: '',
      },
      {
        nome: '',
        capitale: 0,
        pedina: '',
      },
      {
        nome: '',
        capitale: 0,
        pedina: '',
      },
      {
        nome: '',
        capitale: 0,
        pedina: '',
      },
      {
        nome: '',
        capitale: 0,
        pedina: '',
      },
      {
        nome: '',
        capitale: 0,
        pedina: '',
      },
    ]
  );

  const [turnoGiocatore, setTurnoGiocatore] = React.useState(1);

  return (
    <div className="App">
      <table className="tabella1">
        <tr>
          <td className="colonna1" ><ComponentProprietaRight  /></td>
          <td className="colonnaBoard" rowspan="2"><ComponentBoard turnoGiocatore={turnoGiocatore} setTurnoGiocatore={setTurnoGiocatore}
                                                    numeroGiocatori={props.numeroGiocatori} 
                                                    caselle={caselle} setCaselle={setCaselle}   /></td>
          <td className="colonna1" ><TabellaGiocatori giocatori={giocatori}/></td>
        </tr>
        <tr>
          <td className="colonna1"><ComponentProprietaLeft /></td>
          <td className="colonna1"><ComponentProprietaRight /></td>
        </tr>
      </table>
      <TabellaTerreni terreni={terreni} />
      <h1>{giocatori[3].nome}</h1>
    </div>
  );
}

export default App;
