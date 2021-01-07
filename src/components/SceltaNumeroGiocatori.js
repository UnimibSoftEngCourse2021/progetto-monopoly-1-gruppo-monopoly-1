import React, { Component } from 'react'

class SceltaNumeroGiocatori extends Component {
    constructor(props) {
        super(props);
        this.state={
            numeroGiocatori: "2"
        }
    }
    
    gestisciNumeroGiocatori = changeEvent => {
        this.setState({
            numeroGiocatori: changeEvent.target.value
        })
    }

    render() {
        return(
            <div> Scegli il numero dei giocatori:
                <form>
                    <div>
                        <input 
                            type="radio" 
                            value="2" 
                            checked={this.state.numeroGiocatori === "2"}
                            onChange={this.gestisciNumeroGiocatori}
                        /> 2
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            value="3" 
                            checked={this.state.numeroGiocatori === "3"}
                            onChange={this.gestisciNumeroGiocatori}
                        /> 3
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            value="4" 
                            checked={this.state.numeroGiocatori === "4"}
                            onChange={this.gestisciNumeroGiocatori}
                        /> 4
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            value="5" 
                            checked={this.state.numeroGiocatori === "5"}
                            onChange={this.gestisciNumeroGiocatori}
                        /> 5
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            value="6" 
                            checked={this.state.numeroGiocatori === "6"}
                            onChange={this.gestisciNumeroGiocatori}
                        /> 6
                    </div>
                </form>
            </div>       
        );
    }
}

export default SceltaNumeroGiocatori