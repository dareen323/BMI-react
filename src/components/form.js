import { useState } from "react";
import Box from "./box";
import "./style.css";

function Form() {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");

  const [massage, setMessage] = useState("");
  const [BMIMessage, setBMIMessage] = useState("");

  function calculateBMI() {
    const alt = height / 100;
    const BMI = weight / (alt * alt);

    if (height === "" && weight === "") {
      alert(" Please fill in the weight and height correctly !");
    } else if (!alt) {
      alert(" Please fill in the weight and height correctly !");
    } else if (BMI < 18.5) {
      setMessage(`Underweight !`);
      setBMIMessage(`Your BMI is: ${BMI.toFixed(2)}`);
    } else if (BMI >= 18.5 && BMI < 24) {
      setMessage(`Normal weight !`);
      setBMIMessage(`Your BMI is: ${BMI.toFixed(2)}`);
    } else if (BMI >= 25 && BMI < 29.9) {
      setMessage(`Overweight !`);

      setBMIMessage(`Your BMI is: ${BMI.toFixed(2)}`);
    } else if (BMI >= 30) {
      setMessage(`Obesity!`);

      setBMIMessage(`Your BMI is: ${BMI.toFixed(2)}`);
    }
    setweight("");
    setheight("");
  }

  return (
    <div className="app">
      <div className="area-input">
        <h1>BMI Calculator</h1>
        <span></span>
        <input
          type="text"
          placeholder=" weight[KG] Ex: 75"
          value={weight}
          onChange={(e) => setweight(e.target.value)}
        />

        <input
          type="text"
          placeholder="height em [CM] Ex: 170"
          value={height}
          onChange={(e) => setheight(e.target.value)}
        />

        <button onClick={calculateBMI}>Calculate</button>

       
      </div>
   <Box msg={massage}/>
  <Box BMI= {BMIMessage}/>
    </div>
  );
}
export default Form;