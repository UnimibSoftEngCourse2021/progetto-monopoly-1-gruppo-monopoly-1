import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import MonopolyLogoMenu from '../src/img/monopoly_logo_menu.png';
import GestoreNumeroGiocatori from './components/GestoreNumeroGiocatori';
import GestoreDifficolta from './components/GestoreDifficolta'
import GestorePedina from './components/GestorePedine'

class Menu extends Component {
    constructor(props) {
      super(props);
      this.state={
        numeroGiocatori: "2",
        difficolta: "facile"
      }
    }

    gestisciNumeroGiocatori = changeEvent => {
      this.setState({
          numeroGiocatori: changeEvent.target.value
      })
    }

    gestisciDifficolta = changeEvent => {
      this.setState({
          difficolta: changeEvent.target.value 
      })
    }

    iniziaPartita = (numero, diff) => {

      let numeroGiocatori = numero;
      let difficolta = diff;
  
      ReactDOM.render(
          <React.StrictMode>
              <GestorePedina numeroGiocatori={numeroGiocatori} difficolta={difficolta}/>
          </React.StrictMode>,
          document.getElementById('root')
      );
    }

    render() {
      
      return (
        <div className="Menu">
          <table className="tabellaMenu">
            <tr>
              <td className="colonna1" >
                <GestoreDifficolta gestisciDifficolta={this.gestisciDifficolta} difficolta={this.state.difficolta}/>
              </td>
              <td className="logoMonopoly">
                <img className="logo" src={MonopolyLogoMenu} class="Profile-image" alt="Profile image" width="500"/>
                <button className = "bottone-inizia-partita" onClick={() => this.iniziaPartita(this.state.numeroGiocatori, this.state.difficolta)}>
                  Inizia la partita
                </button>
              </td>
              <td className="colonna1" >
                <GestoreNumeroGiocatori numeroGiocatori={this.state.numeroGiocatori} gestisciNumeroGiocatori={this.gestisciNumeroGiocatori}/>
                Il numero dei giocatori scelto è: {this.state.numeroGiocatori}
              </td>
            </tr>
          </table>
        </div>
      );
    }
  }

  export default Menu;

