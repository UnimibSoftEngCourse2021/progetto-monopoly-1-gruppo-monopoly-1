import ComponentMenuDx from './components/ComponentMenuDx';
import MonopolyLogoMenu from '../src/img/monopoly_logo_menu.png';

function Menu() {
    return (
      <div className="Menu">
        <table className="tabellaMenu">
          <tr>
            <td className="colonna1" ><ComponentMenuDx /></td>
            <td className="logoMonopoly">
                <img className="logo" src={MonopolyLogoMenu} class="Profile-image" alt="Profile image" width="500"/>
            </td>
            <td className="colonna1" ></td>
          </tr>
          <tr>
            
          </tr>
        </table>
      </div>
    );
  }

  export default Menu;