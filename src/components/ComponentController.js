import React, { Component } from 'react';
import Costruisci from './AzioniConBottone/Costruisci';
import Vendi from './AzioniConBottone/Vendi';
//import Alert from '@material-ui/lab/Alert';


let dado1;
let dado2;
let sommaDadi;
let punteggioDoppio;

function verificaPunteggioDoppio(dado1, dado2){
    if(dado1 == dado2){
        return true;
    }else{
        return false;
    }
}



class ComponentController extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            primoMsgTA: 'ultimo messaggio',
            secondoMsgTA: 'penultimo messaggio',
            terzoMsgTA: 'terzultimo messaggio',
        };
      }

    spostaSegnalino (sommaDadi) {
        // sposta cappello
        let ascissa = this.props.segnalini[0][1];
        let ordinata = this.props.segnalini[0][2];

        let [a, xposSegnalino, tposSegnalino, visSegnalino, strato, attualeCasella] = this.props.segnalini[0];
        
        var i;
        for (i = 1; i < sommaDadi+1; i++) {
            if (attualeCasella == 39) {
                attualeCasella=0
            } else {
                attualeCasella = attualeCasella + 1
            }        
          }

        ascissa = this.props.tavolaGioco[attualeCasella][1];
        ordinata = this.props.tavolaGioco[attualeCasella][2];
  
        this.props.segnalini[0]=["hat", ascissa, ordinata, "visible",0,attualeCasella];
        this.props.muoviPedine();   

    }      

    spostaAuto () {
        // funzione di messa a punto mappa caselle 
        // sposta il segnalino car in tutte le caselle una alla volta
        let ascissa = this.props.segnalini[2][1];
        let ordinata = this.props.segnalini[2][2];

        let [a, xposSegnalino, tposSegnalino, visSegnalino, strato, attualeCasella] = this.props.segnalini[2];

        if (attualeCasella == 39) {
            attualeCasella=0
        } else {
            attualeCasella = attualeCasella + 1
        }

        ascissa = this.props.tavolaGioco[attualeCasella][1];
        ordinata = this.props.tavolaGioco[attualeCasella][2];

        this.props.segnalini[2]=["car", ascissa, ordinata, "visible",2,attualeCasella];
        this.props.muoviPedine();   
    }        


    tiraDadi = () => {        
        dado1 = Math.floor(Math.random()*6) + 1;
        dado2 = Math.floor(Math.random()*6) + 1;
        sommaDadi = dado1 + dado2;
        punteggioDoppio = verificaPunteggioDoppio(dado1, dado2);   

        this.spostaSegnalino(sommaDadi);
               
        this.setState({
            primoMsgTA: `${sommaDadi}`,
            secondoMsgTA: 'Il punteggio dei dadi è doppio: '+dado1+' + '+dado2 +' ' + `${punteggioDoppio}`,
            terzoMsgTA: `${sommaDadi}`
        })

    }

    // Funzione che permette di concludere il turno e che passa il comando al giocatore successivo.
    // Per comunicare ai giocatori questo cambiamento viene utilizzato un allert.
    finisciTurno = () => {
        const giocatore = this.props.turnoGiocatore;
        var giocatore2;
        if(giocatore === 6){
            giocatore2 = 1;
        }
        else{
            giocatore2 = giocatore + 1;
        }
        
        this.props.setTurnoGiocatore(giocatore2);   

        alert('Ora tocca ad un altro giocatore');
        //<Alert severity="info">This is an info alert — check it out!</Alert>
    }

    render () {

        return (
            <div>
            <table className="tableController">
            <tr><td className="tdController" colspan="5">
                    <button type="button" onClick={() => this.spostaAuto()}>Sposta auto di 1</button></td></tr>
            <tr className="trController">
                <td className="tdController">
                    <button type="button" onClick={() => this.tiraDadi()}>Tira dadi</button></td>
                <td className="tdController">
                    <Costruisci />
                </td>
                <td className="tdController">
                    <Vendi />
                </td>    
                <td className="tdController">
                    <button type="button" onClick={() => this.finisciTurno()}>
                        finisci turno
                    </button>
                    <p>{this.props.turnoGiocatore}</p>
                </td>   
                <td className="tdController">
                    <button type="button" onClick={() => alert('esci')}>Esci</button></td>   
            </tr>
            <tr className="trControllerTA">
                <td className="tdController" colspan="5">
                    <AreaTesto 
                    messaggioUno={this.state.primoMsgTA}
                    messaggioDue={this.state.secondoMsgTA}
                    messaggioTre={this.state.terzoMsgTA}
                    />  
                </td>  
            </tr>
            </table> 
             
            </div>         
        )
    }
}


class AreaTesto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // messaggioUno: primoMsgTA,
        // messaggioDue: secondoMsgTA,
        // messaggioTre: terzoMsgTA
      };
    }
  
    render() {
      return (
        <div className="ControllerTA" id="w3review" name="w3review" >
                <div>{this.props.messaggioUno}</div>
                <div>{this.props.messaggioDue}</div>
                <div>{this.props.messaggioTre}</div>
            {/* {this.props.primoMsgTA+"\n"+this.props.secondoMsgTA+"\n"+this.props.terzoMsgTA}  */}
        </div>
      );
    }

}


export default ComponentController;

