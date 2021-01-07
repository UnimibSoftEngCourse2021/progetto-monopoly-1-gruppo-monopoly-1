import React, { Component } from 'react'
import ComponentMenuDx from './components/ComponentMenuDx';
import MonopolyLogoMenu from '../src/img/monopoly_logo_menu.png';
import SceltaNumeroGiocatori from './components/SceltaNumeroGiocatori';

class Menu extends Component {
    constructor(props) {
      super(props);
      this.state={
        numeroGiocatori: "2"
      }
    }

    gestisciNumeroGiocatori = changeEvent => {
      this.setState({
          numeroGiocatori: changeEvent.target.value
      })
    }

    render() {
      
      return (
        <div className="Menu">
          <table className="tabellaMenu">
            <tr>
              <td className="colonna1" ><ComponentMenuDx /></td>
                <td className="logoMonopoly">
                  <img className="logo" src={MonopolyLogoMenu} class="Profile-image" alt="Profile image" width="500"/>
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