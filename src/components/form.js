import React, { Component } from 'react'
import Box from './box';

export default class Form extends Component {
  constructor(props) {
		super(props);
		this.state = {weight: 0,height: 0,BMI: null, Result:""}
		};
  

  render() {
    return (
      <div className="app">
        <div className="area-input">
          <h1>BMI Calculator</h1>
          <span></span>
          <input
         
            type="text"
            placeholder=" weight[KG] Ex: 75"
          
            onChange={e => {
              this.setState({'height': e.target.value})}}
              />
        
  
          <input
            type="text"
            placeholder="height em [CM] Ex: 170"
           
            onChange={e => {
              this.setState({'weight': e.target.value}) }}  />
  
          <button  onClick={e => {
                        this.calculateBMI()}}> Calculate Now </button>
  
         
        </div>
        <h2> {this.state.BMI}</h2>
                <h2>{this.state.Result}</h2>
      </div>
    );
  
  }
  calculateBMI() {
    const alt = this.state.height / 100;
    let BMI = this.state.weight / (alt * alt);
    if (this.state.height === "" && this.state.weight === "") {
      alert(" Please fill in the weight and height correctly !");
    } else if (!alt) {
      alert(" Please fill in the weight and height correctly !");}
   else if (BMI < 18.5) {
        this.setState({'Result':'Under Weight'})
    } else if (BMI > 18.5 && BMI <= 24.9) {
        this.setState({'Result': 'Normal weight'})
    } else if (BMI > 24.9 && BMI < 30) {
        this.setState({'Result': 'Overweight'})
    } else {
        this.setState({'Result': 'Obesity'})
    }
    // console.log(this.state.BMI);
    
    
  }
 
  
    // console.log(Result);
}

