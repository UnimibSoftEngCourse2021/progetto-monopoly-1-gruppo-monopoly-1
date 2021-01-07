import React, { Component } from 'react';
import { iniziaPartita } from './iniziaPartita';

class ComponentMenuDx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Click Me',
        };
    }

    render(){
        return (<button onClick={() => iniziaPartita()}>{this.state.text}</button>);

    }
}
export default ComponentMenuDx;