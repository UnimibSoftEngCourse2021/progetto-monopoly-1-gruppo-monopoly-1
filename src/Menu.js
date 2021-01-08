import React, { Component } from 'react'
import MonopolyLogoMenu from '../src/img/monopoly_logo_menu.png'
import Partita from './components/Partita'
import SceltaDifficolta from './components/ScegliDifficolta'
import SceltaNumeroGiocatori from './components/SceltaNumeroGiocatori'
import iniziaPartita from './components/iniziaPartita'
import App from './App'
import ComponentBoard from './components/ComponentBoard'

class Menu extends Component {
    constructor(props) {
      super(props);
      this.state={
        numeroGiocatori: "2",
        difficolta: "",
        partitaIniziata: false,
      }
    }

    gestisciNumeroGiocatori = changeEvent => {
      this.setState({
          numeroGiocatori: changeEvent.target.value
      })
    }

    selezionaDifficolta = difficoltaSelezionata => {
      this.setState({
          difficolta: difficoltaSelezionata
      })
    }

    modificaPartitaIniziata = () => {
      this.setState({
        partitaIniziata: true
      })
    }

    render() {
      
      return (
        <div className="Menu">
          <table className="tabellaMenu">
            <tr>
              <td className="colonna-menu" >
                <SceltaDifficolta selezionaDifficolta={this.selezionaDifficolta} difficolta={this.state.difficolta}/>
                {/* <Partita numeroGiocatori={this.state.numeroGiocatori} /> */}
              </td>
              <td className="logo-monopoly">
                <img className="logo" src={MonopolyLogoMenu} class="Profile-image" alt="Profile image" width="500"/>
                <button className = "bottone-inizia-partita" onClick={() => this.modificaPartitaIniziata()}>
                  Inizia la partita
                </button>
                {
                  this.state.partitaIniziata ?
                  <div></div>
                  :
                  <div></div>
                }
              </td>
              <td className="colonna-menu" >
                <SceltaNumeroGiocatori numeroGiocatori={this.state.numeroGiocatori} gestisciNumeroGiocatori={this.gestisciNumeroGiocatori}/>
                Il numero dei giocatori scelto è: {this.state.numeroGiocatori}
              </td>
            </tr>
          </table>
        </div>
      );
    }
  }

  export default Menu;