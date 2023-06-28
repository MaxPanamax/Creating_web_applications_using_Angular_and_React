import DataTime from "./DataTime/dataTime";
import "./styles.css";

export default function App() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  return (
    <div className="App">
      <h1>Exact time</h1>
      <DataTime time={time} />
    </div>
  );
}
