import React, { Component } from 'react';
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



class ComponentBoard extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
          segnalini: [
                        ["hat", 940, 600, "visible",0],
                        ["iron", 700, 600, "visible",1],
                        ["car", 810, 600, "visible",2],
                        ["boat", 870, 600, "visible",3],
                        ["doggo", 400, 7, "visible",4],
                        ["shoe", 400, 8, "visible",5],
                        ["thimble", 400, 8, "visible",6],
                        ["wheelbarrow", 400, 8, "visible",7],
                    ],
          turnoGiocatore: 0,
          numeroGiocatori: 4
        };
      }

    render () {

        for (let i = 0; i < this.state.segnalini.length; i++) {
            const [a, xposSegnalino, tposSegnalino, visSegnalino, strato] = this.state.segnalini[i];
            const segnalinoSet = {  left: xposSegnalino+"px",
                                    top: tposSegnalino+"px",
                                    visibility: visSegnalino,
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
             
        return (
            <div className="imgTavola" >
                <Pedina figura={car} stile={mystyleCar} />
                <Pedina figura={boat} stile={mystyleBoat} />  
                <Pedina figura={hat} stile={mystyleHat} />
                <Pedina figura={iron} stile={mystyleIron} />
                <Pedina figura={doggo} stile={mystyleDoggo} />
                <Pedina figura={shoe} stile={mystyleShoe} />
                <Pedina figura={thimble} stile={mystyleThimble} />
                <Pedina figura={wheelbarrow} stile={mystyleWheelbarrow} />
                <ComponentController />
            </div>
        )
    }
}

export default ComponentBoard;

