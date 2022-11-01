import React, { Component } from 'react';
import "./style.css"

export default class Box extends Component {
  render() {
    return (
      
        <div class="color">
          <h2>Your BMI= {this.state.val}</h2>
                <h2>{this.state.BMI}</h2>
        </div>
      
    )
  }
}

