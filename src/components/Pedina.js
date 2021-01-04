import React, { Component } from 'react';

//  <img className="pedina" src={car} alt=""  style={props}  />
//  <div>{this.props.value}</div>
class Pedina extends Component {
      
    render (props) {
        return (            
            <img className="pedina" src={this.props.figura} alt=""  style={this.props.stile}  />
        )
    }
}

export default Pedina;
