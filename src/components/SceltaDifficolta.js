import React, { Component } from 'react'

class SceltaDifficolta extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <div> Scegli la difficoltà:
                <form>
                    <div>
                        <input 
                            type="radio" 
                            value="facile" 
                            checked={this.props.difficolta === "facile"}
                            onChange={this.props.gestisciDifficolta}
                        /> Facile
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            value="medio" 
                            checked={this.props.difficolta === "medio"}
                            onChange={this.props.gestisciDifficolta}
                        /> Medio
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            value="difficile" 
                            checked={this.props.difficolta === "difficile"}
                            onChange={this.props.gestisciDifficolta}
                        /> Difficile
                    </div>
                </form>
            </div>       
        );
    }
}

export default SceltaDifficolta;