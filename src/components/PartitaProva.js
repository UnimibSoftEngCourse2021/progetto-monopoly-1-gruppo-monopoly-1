import React, { Component } from 'react';
import { iniziaPartita } from './iniziaPartita';

class PartitaProva extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (
                <div>
                    {iniziaPartita()}
                </div>
            );

    }
}
export default PartitaProva;

       