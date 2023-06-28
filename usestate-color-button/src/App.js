import "./styles.css";
import React, { useState } from "react";

function Button(props) {
  const handlerClick = () => {
    props.onClickAct(props.bkColor);
  };
  return (
    <button
      className="Button"
      onClick={handlerClick}
      style={{ backgroundColor: props.bkColor }}
    >
      {props.text}
    </button>
  );
}
function DisplayBlock(props) {
  return (
    <div class="DisplayBlock" style={{ backgroundColor: props.bkColor }}>
      Some text
    </div>
  );
}
export default function App() {
  const [displayBkColor, setDisplayBkColor] = useState("white");
  const stateFunc = (newBkColor) => {
    setDisplayBkColor(newBkColor);
  };
  return (
    <>
      <Button bkColor="red" text="Red" onClickAct={stateFunc} />
      <Button bkColor="green" text="Green" onClickAct={stateFunc} />
      <Button bkColor="yellow" text="Yellow" onClickAct={stateFunc} />
      <DisplayBlock bkColor={displayBkColor} />
    </>
  );
}
