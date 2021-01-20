import React, { Component } from 'react'
import ComponentMenuDx from './components/ComponentMenuDx';
import MonopolyLogoMenu from '../src/img/monopoly_logo_menu.png';
import SceltaNumeroGiocatori from './components/SceltaNumeroGiocatori';
import SceltaDifficolta from './components/SceltaDifficolta'
import { iniziaPartita } from './components/iniziaPartita'

class Menu extends Component {
    constructor(props) {
      super(props);
      this.state={
        numeroGiocatori: "2",
        difficolta: "normale"
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

    render() {
      
      return (
        <div className="Menu">
          <table className="tabellaMenu">
            <tr>
              <td className="colonna1" >
                <SceltaDifficolta gestisciDifficolta={this.gestisciDifficolta} difficolta={this.state.difficolta}/>
              </td>
              <td className="logoMonopoly">
                <img className="logo" src={MonopolyLogoMenu} class="Profile-image" alt="Profile image" width="500"/>
                <button className = "bottone-inizia-partita" onClick={() => iniziaPartita(this.state.numeroGiocatori, this.state.difficolta)}>
                  Inizia la partita
                </button>
              </td>
              <td className="colonna1" >
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