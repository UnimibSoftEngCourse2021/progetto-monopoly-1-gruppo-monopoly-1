//import logo from './img/monopoly_logo.jpg'
import ComponentPlayerLeft from './components/ComponentPlayerLeft';
import ComponentPlayerRight from './components/ComponentPlayerRight';
import ComponentProprietaLeft from './components/ComponentProprietaLeft';
import ComponentProprietaRight from './components/ComponentProprietaRight';
import ComponentBoard from './components/ComponentBoard';

function App() {
  return (
    <div className="App">
      <table className="tabella1">
        <tr>
          <td className="colonna-menu" ><ComponentPlayerLeft /></td>
          <td className="colonnaBoard" rowspan="2"><ComponentBoard /></td>
          <td className="colonna-menu" ><ComponentPlayerRight /></td>
        </tr>
        <tr>
          <td className="colonna-menu"><ComponentProprietaLeft /></td>
          <td className="colonna-menu"><ComponentProprietaRight /></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
