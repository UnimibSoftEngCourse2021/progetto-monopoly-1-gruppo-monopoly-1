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
        this.state = {
          // Tracciato record: nome, ascissa, ordinata, visibilita, strato, attualeCasella 
          segnalini: [
                        ["hat", 940, 600, "visible",0,0],
                        ["iron", 940, 600, "visible",1,0],
                        ["car", 940, 600, "visible",2,0],
                        ["boat", 940, 600, "visible",3,0],
                        ["doggo", 940, 600, "visible",4,0],
                        ["shoe", 940, 600, "visible",5,0],
                        ["thimble", 940, 600, "hidden",6,0],
                        ["wheelbarrow", 940, 600, "hidden",7,0],
                    ],
         // turnoGiocatore: 0,
         // numeroGiocatori: 4
        };
      }


      muoviPedine = changeEvent => {
        this.setState({
            
        })
      }
  

    render () {

        for (let i = 0; i < this.state.segnalini.length; i++) {
            let visSegn;
            const [a, xposSegnalino, tposSegnalino, visSegnalino, strato] = this.state.segnalini[i];
            /// if visibiità segnalini
            if (i<=this.props.numeroGiocatori-1) {visSegn='visible'} else {visSegn='hidden'}

            const segnalinoSet = {  left: xposSegnalino+"px",
                                    top: tposSegnalino+"px",
                                    visibility: visSegn,
                                    zIndex: strato
                                 }
            switch (a) {
                case "car": var mystyleCar = segnalinoSet;
                    break;
                case "boat": var mystyleBoat = segnalinoSet;
                    break;
                case "hat": var mystyleHat = segnalinoSet;
                    break;
                case "iron": var mystyleIron = segnalinoSet;
                    break;
                case "doggo": var mystyleDoggo = segnalinoSet;
                    break;
                case "shoe": var mystyleShoe = segnalinoSet;
                    break;
                case "thimble": var mystyleThimble = segnalinoSet;
                    break;
                case "wheelbarrow": var mystyleWheelbarrow = segnalinoSet;
                    break;                    
            }                   
        }

        for (let i = 0; i < this.props.segnalini2.length; i++) {
            const segnalinoSet2 =   {
                                        left: this.props.segnalini2[i].ascissa + "px",
                                        top: this.props.segnalini2[i].ordinata + "px",
                                        visibility: this.props.segnalini2[i].visibilita,
                                        strato: this.props.segnalini2[i].strato
                                    }
            switch (this.props.segnalini2[i].nome) {
                case car: var mystyleCar2 = segnalinoSet2;
                    break;
                case boat: var mystyleBoat2 = segnalinoSet2;
                    break;
                case hat: var mystyleHat2 = segnalinoSet2;
                    break;
                case iron: var mystyleIron2 = segnalinoSet2;
                    break;
                case doggo: var mystyleDoggo2 = segnalinoSet2;
                    break;
                case shoe: var mystyleShoe2 = segnalinoSet2;
                    break;
                case thimble: var mystyleThimble2 = segnalinoSet2;
                    break;
                case wheelbarrow: var mystyleWheelbarrow2 = segnalinoSet2;
                    break;
                // default: var mystyleDefault =   {
                //                                     left: "940px",
                //                                     top: "600px",
                //                                     visibility: "hidden",
                //                                     strato: this.props.segnalini2[i].strato
                //                                 }
            }
        }

             
        return (
            <div className="imgTavola" >
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === car)) ?
                    <Pedina figura={car} stile={mystyleCar2} /> :
                    <div></div>
                }
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === boat)) ?
                    <Pedina figura={boat} stile={mystyleBoat2} /> :
                    <div></div>
                }
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === hat)) ?
                    <Pedina figura={hat} stile={mystyleHat2} /> :
                    <div></div>
                }
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === iron)) ?
                    <Pedina figura={iron} stile={mystyleIron2} /> :
                    <div></div>
                }
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === doggo)) ?
                    <Pedina figura={doggo} stile={mystyleDoggo2} /> :
                    <div></div>
                }
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === shoe)) ?
                    <Pedina figura={shoe} stile={mystyleShoe2} /> :
                    <div></div>
                }
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === thimble)) ?
                    <Pedina figura={thimble} stile={mystyleThimble2} /> :
                    <div></div>
                }
                {
                    (this.props.giocatori.find(giocatore => giocatore.pedina === wheelbarrow)) ?
                    <Pedina figura={wheelbarrow} stile={mystyleWheelbarrow2} /> :
                    <div></div>
                }

                <ComponentController 
                    segnalini={this.state.segnalini} muoviPedine={this.muoviPedine} 
                    muoviPedine={this.muoviPedine} 
                    tavolaGioco={tavolaGioco} 
                    turnoGiocatore={this.props.turnoGiocatore} 
                    setTurnoGiocatore={this.props.setTurnoGiocatore}
                    numeroGiocatori={this.props.numeroGiocatori}
                    terreni={this.props.terreni}
                    setTerreni={this.props.setTerreni}
                    giocatori={this.props.giocatori}
                    setGiocatori={this.props.setGiocatori}
                    segnalini2={this.props.segnalini2}
                    setSegnalini2={this.props.setSegnalini2}
                    societàStazioni={this.props.societàStazioni}
                    setSocietàStazioni={this.props.setSocietàStazioni}
                    caselle={this.props.caselle} 
                    setCaselle={this.props.setCaselle}
                    tempo={this.props.tempo}
                    setTempo={this.props.setTempo}
                />

            </div>
      
        )
    }
}

export default ComponentBoard;

