import React, { Component } from 'react';

class ComponentController extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            messaggioTA1: "ultimo messaggio",
            messaggioTA2: "penultimo messaggio",
            messaggioTA3: "terzultimo messaggio"
        };
      }

    render () {

        return (
            <table className="tableController">
            <tr className="trController">
                <td className="tdController">
                    <button type="button" onClick={() => alert('tira dadi')}>Tira dadi</button></td>
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
                    <textarea className="ControllerTA" id="w3review" name="w3review" >
                     {this.state.messaggioTA1+"\n"+this.state.messaggioTA2+"\n"+this.state.messaggioTA3}
                    </textarea>
                </td>  
            </tr>
            </table>            
        )
    }
}

export default ComponentController;

