import React, { Component } from 'react';


let dado1;
let dado2;
let sommaDadi;
let punteggioDoppio;
let ascissa;

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


    tiraDadi = () => {        
        dado1 = Math.floor(Math.random()*6) + 1;
        dado2 = Math.floor(Math.random()*6) + 1;
        sommaDadi = dado1 + dado2;
        punteggioDoppio = verificaPunteggioDoppio(dado1, dado2);   

        ascissa = this.props.segnalini[0][1];
        ascissa = ascissa-10;
        this.props.segnalini[0]=["hat", ascissa, 600, "visible",0];
        this.props.muoviPedine();      
               
        this.setState({
            primoMsgTA: `${sommaDadi}`,
            secondoMsgTA: 'Il punteggio dei dadi è doppio: '+dado1+' + '+dado2 +' ' + `${punteggioDoppio}`,
            terzoMsgTA: `${sommaDadi}`
        })

    }

    render () {

        return (
            <table className="tableController">
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

