import "./styles.css";
import Rondom from "/src/Rondom/Rondom";
export default function App() {
  return (
    <div className="App">
      <h1>Случайное число</h1>

      <Rondom max={10} />
    </div>
  );
}
