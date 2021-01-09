//import logo from './img/monopoly_logo.jpg'
import React, { Component } from 'react'
import TabellaGiocatori from './components/Tabelle/TabellaGiocatori';
import ComponentProprietaLeft from './components/ComponentProprietaLeft';
import ComponentProprietaRight from './components/ComponentProprietaRight';
import ComponentBoard from './components/ComponentBoard';
import TabellaTerreni from './components/Tabelle/TabellaTerreni';



function App() {

  
  const [terreni, setTerreni] = React.useState(
    [
      {
        nome: 'Vicolo Corto',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 60,
      },
      {
        nome: 'Vicolo Stretto',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 60,   
      },
      {
        nome: 'Bastioni Gran Sasso',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 100,   
      },
      {
        nome: 'Viale Monte Rosa',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 100,
      },
      {
        nome: 'Viale Vesuvio',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 120,   
      },
      {
        nome: 'Via Accademia',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 140,   
      },
      {
        nome: 'Corso Ateneo',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 140,
      },
      {
        nome: 'Piazza Università',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 160,
      },
      {
        nome: 'Via Verdi',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 180,   
      },
      {
        nome: 'Corso Raffaello',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 180,
      },
      {
        nome: 'Piazza Dante',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 200,   
      },
      {
        nome: 'Via Marco Polo',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 220,   
      },
      {
        nome: 'Corso Magellano',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 240,
      },
      {
        nome: 'Largo Colombo',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 240,   
      },
      {
        nome: 'Viale Costantino',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 260,   
      },
      {
        nome: 'Viale Traiano',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 260,
      },
      {
        nome: 'Piazza Giulio Cesare',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 280,   
      },
      {
        nome: 'Via Roma',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 300,   
      },
      {
        nome: 'Corso Impero',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 300,
      },
      {
        nome: 'Largo Augusto',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 320,   
      },
      {
        nome: 'Viale dei Giardini',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 350,   
      },
      {
        nome: 'Parco della Vittoria',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 400,
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
      },
      {
        nome: '',
        capitale: 0,
      },
      {
        nome: '',
        capitale: 0,
      },
      {
        nome: '',
        capitale: 0,
      },
      {
        nome: 'Luigi',
        capitale: 0,
      },
      {
        nome: '',
        capitale: 0,
      },
    ]
  );

  return (
    <div className="App">
      <table className="tabella1">
        <tr>
          <td className="colonna1" ><ComponentProprietaRight  /></td>
          <td className="colonnaBoard" rowspan="2"><ComponentBoard /></td>
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
