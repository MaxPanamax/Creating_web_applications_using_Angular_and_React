import "./styles.css";
import React from "react";

import {useState} from 'react';
class Counter extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    currentValue: 0
  };
  }
  render() {
    const handlerClick = () => {
    this.setState({currentValue:
    this.state.currentValue +
    1 });
    };
    return <button onClick={handlerClick}>
    {this.state.currentValue}
    </button>;
    }
} 
export default function App() {
  let [btText,setBtText]=useState("Befrore Click!")
  const btClick=()=>{
    setBtText("You click the button")
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
<button onClick={btClick}>{btText}</button>
<Counter />
    </div>
  );
}
