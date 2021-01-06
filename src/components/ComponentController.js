import React, { Component } from 'react';

var primoMsgTA= 'ultimo messaggio';
var secondoMsgTA= 'penultimo messaggio';
var terzoMsgTA= 'terzultimo messaggio';

function     funz2() {
    this.setState({messaggioUno: 'dddsj'})

    //this.messaggioUno = str1
}

function funzprova() {
    //alert('prova ');   // ok
    //funz2();
    //alert(document.getElementById('w3review').value);   // ok
    primoMsgTA= 'ddddddddddd';
}

class ComponentController extends React.Component {

	constructor(props) {
        super(props);
        this.state = {

        };
      }


    render () {

        return (
            <table className="tableController">
            <tr className="trController">
                <td className="tdController">
                    <button onClick={() => funzprova()}>Tira dadi</button></td>
                <td className="tdController">
                    <button type="button" onClick={() => alert('costruisci')}>Costruisci</button></td>
                <td className="tdController">
                    <button type="button" onClick={() => alert('vendi')}>Vendi {primoMsgTA}</button></td>    
                <td className="tdController">
                    <button type="button" onClick={() => alert('fine turno')}>Fine turno</button></td>   
                <td className="tdController">
                    <button type="button" onClick={() => alert('esci')}>Esci</button></td>   
            </tr>
            <tr className="trControllerTA">
                <td className="tdController" colspan="5">
                    <AreaTesto />
                </td>  
            </tr>
            </table>            
        )
    }


}

// {this.state.messaggioTA1+"\n"+this.state.messaggioTA2+"\n"+this.state.messaggioTA3}
// https://it.reactjs.org/docs/lifting-state-up.html

class AreaTesto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        messaggioUno: primoMsgTA,
        messaggioDue: secondoMsgTA,
        messaggioTre: terzoMsgTA
      };
    }
  
    render() {
      return (
        <textarea className="ControllerTA" id="w3review" name="w3review" >
            {this.state.messaggioUno+"\n"+this.state.messaggioDue+"\n"+this.state.messaggioTre}
        </textarea>
      );
    }

    funz1() {
        this.setState({messaggioUno: 'dddsj'})

        //this.messaggioUno = str1
    }

  }


export default ComponentController;

