import React, { Component } from 'react'

class GestoreNumeroGiocatori extends Component {
    
    render() {
        return(
            <div> Scegli il numero dei giocatori:
                <form>
                    <div>
                        <input 
                            type="radio" 
                            value="2" 
                            checked={this.props.numeroGiocatori === "2"}
                            onChange={this.props.gestisciNumeroGiocatori}
                        /> 2
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            value="3" 
                            checked={this.props.numeroGiocatori === "3"}
                            onChange={this.props.gestisciNumeroGiocatori}
                        /> 3
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            value="4" 
                            checked={this.props.numeroGiocatori === "4"}
                            onChange={this.props.gestisciNumeroGiocatori}
                        /> 4
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            value="5" 
                            checked={this.props.numeroGiocatori === "5"}
                            onChange={this.props.gestisciNumeroGiocatori}
                        /> 5
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            value="6" 
                            checked={this.props.numeroGiocatori === "6"}
                            onChange={this.props.gestisciNumeroGiocatori}
                        /> 6
                    </div>
                </form>
            </div>       
        );
    }
}

export default GestoreNumeroGiocatori