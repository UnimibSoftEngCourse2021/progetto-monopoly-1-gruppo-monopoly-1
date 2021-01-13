//import logo from './img/monopoly_logo.jpg'
import React, { Component } from 'react'
import TabellaGiocatori from './components/Tabelle/TabellaGiocatori';
import ComponentProprietaLeft from './components/ComponentProprietaLeft';
import ComponentProprietaRight from './components/ComponentProprietaRight';
import ComponentBoard from './components/ComponentBoard';
import TabellaTerreni from './components/Tabelle/TabellaTerreni';



function App(props) {

  
  const [terreni, setTerreni] = React.useState(
    [
      {
        nome: 'Vicolo Corto',
        proprietario: 2,
        case: 0,
        alberghi: 0,
        valore: 60,
        colore: 'marrone',
        ipotecato: true,
      },
      {
        nome: 'Vicolo Stretto',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 60,
        colore: 'marrone',
        ipotecato: false,
      },
      {
        nome: 'Bastioni Gran Sasso',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 100,
        colore: 'azzurro',  
        ipotecato: false,
      },
      {
        nome: 'Viale Monte Rosa',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 100,
        colore: 'azzurro',
        ipotecato: false,
      },
      {
        nome: 'Viale Vesuvio',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 120,
        colore: 'azzurro',
        ipotecato: false,
      },
      {
        nome: 'Via Accademia',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 140,
        colore: 'rosa',
        ipotecato: false,
      },
      {
        nome: 'Corso Ateneo',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 140,
        colore: 'rosa',
        ipotecato: false,
      },
      {
        nome: 'Piazza Università',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 160,
        colore: 'rosa',
        ipotecato: false,
      },
      {
        nome: 'Via Verdi',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 180,
        colore: 'arancione', 
        ipotecato: false,
      },
      {
        nome: 'Corso Raffaello',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 180,
        colore: 'arancione', 
        ipotecato: false,
      },
      {
        nome: 'Piazza Dante',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 200,
        colore: 'arancione',
        ipotecato: false,
      },
      {
        nome: 'Via Marco Polo',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 220,
        colore: 'rosso',
        ipotecato: false,
      },
      {
        nome: 'Corso Magellano',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 240,
        colore: 'rosso',
        ipotecato: false,
      },
      {
        nome: 'Largo Colombo',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 240,
        colore: 'rosso',
        ipotecato: false,
      },
      {
        nome: 'Viale Costantino',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 260,
        colore: 'giallo',
        ipotecato: false,
      },
      {
        nome: 'Viale Traiano',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 260,
        colore: 'giallo',
        ipotecato: false,
      },
      {
        nome: 'Piazza Giulio Cesare',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 280,
        colore: 'giallo',  
        ipotecato: false,
      },
      {
        nome: 'Via Roma',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 300,
        colore: 'verde', 
        ipotecato: false,
      },
      {
        nome: 'Corso Impero',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 300,
        colore: 'verde',
        ipotecato: false,
      },
      {
        nome: 'Largo Augusto',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 320,
        colore: 'verde',  
        ipotecato: false,
      },
      {
        nome: 'Viale dei Giardini',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 350,
        colore: 'blu', 
        ipotecato: false,
      },
      {
        nome: 'Parco della Vittoria',
        proprietario: '',
        case: 0,
        alberghi: 0,
        valore: 400,
        colore: 'blu', 
        ipotecato: false,
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

  //Questa funzione permette di spostare una quantità di denaro (quanto) da un giocatore (da) a un giocatore (a).
  //I giocatori sono identificati attraverso la loro posizione nell'array giocatori.
  function SpostaSoldi(quanto, da, a){
    giocatori[da].capitale = giocatori[da].capitale - quanto;
    giocatori[a].capitale = giocatori[a].capitale + quanto;
  }

  function CambiaProprietario(terreno, proprietario){
    terreni[terreno].proprietario = proprietario;
  }

  function CostruisciCasa(terreno, giocatore){
    terreni[terreno].case ++;
    giocatori[giocatore].capitale = giocatori[giocatore].capitale - 50;
  }

  function CostruisciAlbergo(terreno, giocatore){
    terreni[terreno].alberghi ++;
    giocatori[giocatore].capitale = giocatori[giocatore].capitale - 40;
  }
 

  return (
    <div className="App">
      <table className="tabella1">
        <tr>
          <td className="colonna1" ><ComponentProprietaRight  /></td>
          <td className="colonnaBoard" rowspan="2">
            <ComponentBoard 
              turnoGiocatore={turnoGiocatore} 
              setTurnoGiocatore={setTurnoGiocatore}
              numeroGiocatori={props.numeroGiocatori}
              terreni={terreni}
              setTerreni={setTerreni}
              giocatori={giocatori}
              setGiocatori={setGiocatori}
              CostruisciCasa={CostruisciCasa}
              CostruisciAlbergo={CostruisciAlbergo}
              
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
