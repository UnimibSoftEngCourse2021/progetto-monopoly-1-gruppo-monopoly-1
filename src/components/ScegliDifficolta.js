import React, { Component } from 'react'
import iniziaPartita from './iniziaPartita'

class SceltaDifficolta extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        return (
                <div>
                    <div>
                        <button onClick={() => this.props.selezionaDifficolta('facile')}>Facile</button>
                    </div>
                    <div>
                        <button onClick={() => this.props.selezionaDifficolta('medio')}>Medio</button>  
                    </div>
                    <div>
                        <button onClick={() => this.props.selezionaDifficolta('difficile')}>Difficile</button>  
                    </div>
                </div>
            );

    }
}

export default SceltaDifficolta;

       