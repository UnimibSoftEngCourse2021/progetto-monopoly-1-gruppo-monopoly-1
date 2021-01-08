import React, { Component } from 'react';


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

    spostaSegnalino () {
        // da implementare con mappa delle 40 caselle 
        let ascissa = this.props.segnalini[0][1];
        ascissa = ascissa-10;
        this.props.segnalini[0]=["hat", ascissa, 600, "visible",0];
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

        this.spostaSegnalino();
               
        this.setState({
            primoMsgTA: `${sommaDadi}`,
            secondoMsgTA: 'Il punteggio dei dadi è doppio: '+dado1+' + '+dado2 +' ' + `${punteggioDoppio}`,
            terzoMsgTA: `${sommaDadi}`
        })

    }

    render () {

        return (
            <table className="tableController">
            <tr><td className="tdController" colspan="5">
                    <button type="button" onClick={() => this.spostaAuto()}>Sposta auto di 1</button></td></tr>
            <tr className="trController">
                <td className="tdController">
                    <button type="button" onClick={() => this.tiraDadi()}>Tira dadi</button></td>
                <td className="tdController">
                    <button type="button" onClick={() => alert('costruisci')}>Costruisci</button></td>
                <td className="tdController">
                    <button type="button" onClick={() => alert('vendi')}>Vendi</button></td>    
                <td className="tdController">
                    <button type="button" onClick={() => alert('fine turno')}>Fine turno</button></td>   
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

