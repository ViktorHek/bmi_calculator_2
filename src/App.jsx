import './App.css';
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <fomr>
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          required
          placeholder="Weight in kgs"
          name="weight"
          id="weight"
        />
        <label htmlFor="height">Height</label>
        <input
          type="number"
          required
          placeholder="Height in cm"
          name="height"
          id="height"
        />
        <button>Calculate BMI</button>
      </fomr>
    );
  }
}

export default App;
