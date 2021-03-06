import React, { Component } from 'react'

class GestoreDifficolta extends Component {
    
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
                            value="normale" 
                            checked={this.props.difficolta === "normale"}
                            onChange={this.props.gestisciDifficolta}
                        /> Normale
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

export default GestoreDifficolta;