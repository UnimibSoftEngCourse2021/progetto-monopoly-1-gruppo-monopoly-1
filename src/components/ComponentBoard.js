import React from 'react';
import Pedina from './Pedina';
import ComponentController from './ComponentController';
import hat from '../img/hat.png';
import iron from '../img/iron.png';
import car from '../img/car.png';
import boat from '../img/boat.png';
import doggo from '../img/doggo.png';
import shoe from '../img/shoe.png';
import thimble from '../img/thimble.png';
import wheelbarrow from '../img/wheelbarrow.png';

// Struttura dati che mappa la tavola da gioco.
// Partendo da GO come elemento 0 e proseguendo nel verso di gioco
// Tracciato record: indice, ascissa, ordinata, nome casella
const tavolaGioco = [
    [0, 940, 600, "GO"],
    [1, 870, 600, "GO"],
    [2, 820, 600, "GO"],
    [3, 770, 600, "GO"],
    [4, 720, 600, "GO"],
    [5, 660, 600, "GO"],
    [6, 610, 600, "GO"],
    [7, 560, 600, "GO"],
    [8, 500, 600, "GO"],
    [9, 450, 600, "GO"],
    [10, 370, 600, "JAIL"],
    [11, 370, 530, "GO"],
    [12, 370, 480, "GO"],
    [13, 370, 420, "GO"],
    [14, 370, 360, "GO"],
    [15, 370, 310, "GO"],
    [16, 370, 250, "GO"],
    [17, 370, 200, "GO"],
    [18, 370, 150, "GO"],
    [19, 370, 100, "GO"],
    [20, 370, 20, "FREE PARKING"],
    [21, 450, 20, "GO"],
    [22, 500, 20, "GO"],
    [23, 560, 20, "GO"],
    [24, 610, 20, "GO"],
    [25, 660, 20, "GO"],
    [26, 720, 20, "GO"],
    [27, 770, 20, "GO"],
    [28, 820, 20, "GO"],
    [29, 880, 20, "GO"],
    [30, 940, 20, "GO TO JAIL"],
    [31, 940, 100, "GO"],
    [32, 940, 150, "GO"],
    [33, 940, 200, "GO"],
    [34, 940, 250, "GO"],
    [35, 940, 310, "GO"],
    [36, 940, 360, "GO"],
    [37, 940, 420, "GO"],
    [38, 940, 480, "GO"],
    [39, 940, 530, "GO"]
];

class ComponentBoard extends React.Component {

	constructor(props) {
        super(props);
        this.state={
        }
      }

      muoviPedine = changeEvent => {
        this.setState({
            
        })
      } 

    render () {
        // Con questo ciclo for creo uno stile di visualizzazione per ogni pedina che sia
        // stata scelta da almeno un giocatore. Questo stile verrà utilizzato nel
        // componente Pedina per la visualizzazione della pedina stessa.
        for (let i = 0; i < this.props.segnalini.length; i++) {
            const segnalinoSet =   {
                                        left: this.props.segnalini[i].ascissa + "px",
                                        top: this.props.segnalini[i].ordinata + "px",
                                        visibility: this.props.segnalini[i].visibilita,
                                        strato: this.props.segnalini[i].strato
                                    }
            switch (this.props.segnalini[i].nome) {
                case car: var mystyleCar = segnalinoSet;
                    break;
                case boat: var mystyleBoat = segnalinoSet;
                    break;
                case hat: var mystyleHat = segnalinoSet;
                    break;
                case iron: var mystyleIron = segnalinoSet;
                    break;
                case doggo: var mystyleDoggo = segnalinoSet;
                    break;
                case shoe: var mystyleShoe = segnalinoSet;
                    break;
                case thimble: var mystyleThimble = segnalinoSet;
                    break;
                case wheelbarrow: var mystyleWheelbarrow = segnalinoSet;
                    break;
            }
        }

        return (
            <div className="imgTavola" >
                {/* Se una pedina è stata scelta da un giocatore, deve essere visualizzata con
                    lo stile impostato precedentemente. Altrimenti la pedina non viene visualizzata */}
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === car)) ?
                    <Pedina figura={car} stile={mystyleCar} /> :
                    <div></div>
                }
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === boat)) ?
                    <Pedina figura={boat} stile={mystyleBoat} /> :
                    <div></div>
                }
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === hat)) ?
                    <Pedina figura={hat} stile={mystyleHat} /> :
                    <div></div>
                }
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === iron)) ?
                    <Pedina figura={iron} stile={mystyleIron} /> :
                    <div></div>
                }
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === doggo)) ?
                    <Pedina figura={doggo} stile={mystyleDoggo} /> :
                    <div></div>
                }
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === shoe)) ?
                    <Pedina figura={shoe} stile={mystyleShoe} /> :
                    <div></div>
                }
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === thimble)) ?
                    <Pedina figura={thimble} stile={mystyleThimble} /> :
                    <div></div>
                }
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === wheelbarrow)) ?
                    <Pedina figura={wheelbarrow} stile={mystyleWheelbarrow} /> :
                    <div></div>
                }
                    <div className="contoRovescio">
                        {(this.props.counter!=null)?<div>Countdown: {this.props.counter}</div>
                                : <div>Countdown: non attivo</div>}
                    </div>
                <ComponentController 
                    muoviPedine={this.muoviPedine} 
                    tavolaGioco={tavolaGioco} 
                    turnoGiocatore={this.props.turnoGiocatore} 
                    setTurnoGiocatore={this.props.setTurnoGiocatore}
                    numeroGiocatori={this.props.numeroGiocatori}
                    terreni={this.props.terreni}
                    setTerreni={this.props.setTerreni}
                    giocatori={this.props.giocatori}
                    setGiocatori={this.props.setGiocatori}
                    segnalini={this.props.segnalini}
                    setSegnalini={this.props.setSegnalini}
                    societàStazioni={this.props.societàStazioni}
                    setSocietàStazioni={this.props.setSocietàStazioni}
                    caselle={this.props.caselle} 
                    setCaselle={this.props.setCaselle}
                    tempo={this.props.tempo}
                    setTempo={this.props.setTempo}
                    decrementaTempo={this.props.decrementaTempo}
                    numeroDifficoltà={this.props.numeroDifficoltà}
                />
            </div>
        )
    }
}

export default ComponentBoard;

