import React, { Component } from 'react';
import { iniziaPartita } from './iniziaPartita';

class ComponentMenuDx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Facile',
            text1: 'Medio',
            text2: 'Difficile',
        };
    }

    render(){
        return (
                <div>
                    <div>
                        <button onClick={() => iniziaPartita('facile')}>{this.state.text}</button>
                    </div>
                    <div>
                        <button onClick={() => iniziaPartita('medio')}>{this.state.text1}</button>  
                    </div>
                    <div>
                        <button onClick={() => iniziaPartita('difficile')}>{this.state.text2}</button>  
                    </div>
                </div>
            );

    }
}
export default ComponentMenuDx;

       