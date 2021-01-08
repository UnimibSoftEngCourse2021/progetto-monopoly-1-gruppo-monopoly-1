import React, { Component } from 'react'
import MonopolyLogoMenu from '../src/img/monopoly_logo_menu.png'
import SceltaDifficolta from './components/ScegliDifficolta'
import SceltaNumeroGiocatori from './components/SceltaNumeroGiocatori'
import { iniziaPartita } from './components/iniziaPartita'

class Menu extends Component {
    constructor(props) {
      super(props);
      this.state={
        numeroGiocatori: "2",
        difficolta: "",
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

    render() {
      
      return (
        <div className="Menu">
          <table className="tabellaMenu">
            <tr>
              <td className="colonna-menu" >
                <SceltaDifficolta selezionaDifficolta={this.selezionaDifficolta} difficolta={this.state.difficolta}/>
              </td>
              <td className="logo-monopoly">
                <img className="logo" src={MonopolyLogoMenu} class="Profile-image" alt="" width="500"/>
                <button className = "bottone-inizia-partita" onClick={() => iniziaPartita(this.state.numeroGiocatori, this.state.difficolta)}>
                  Inizia la partita
                </button>
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