import React, { Component } from 'react';

// var primoMsgTA= 'ultimo messaggio';
// var secondoMsgTA= 'penultimo messaggio';
// var terzoMsgTA= 'terzultimo messaggio';

function     funz2() {
    this.setState({messaggioUno: 'dddsj'})

    //this.messaggioUno = str1
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

    funzprova = () => {
        this.setState({
          primoMsgTA: 'ddddddddddd',
        })
    }

    render () {

        return (
            <table className="tableController">
            <tr className="trController">
                <td className="tdController">
                    <button onClick={() => this.funzprova()}>Tira dadi</button></td>
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

// {this.state.messaggioTA1+"\n"+this.state.messaggioTA2+"\n"+this.state.messaggioTA3}
// https://it.reactjs.org/docs/lifting-state-up.html

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

    funz1() {
        this.setState({messaggioUno: 'dddsj'})

        //this.messaggioUno = str1
    }

  }


export default ComponentController;
