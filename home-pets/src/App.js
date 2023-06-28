import HomePets from "./HomePets/homePets";
import "./styles.css";

export default function App() {
  let pets =
    "Доберма́н (нем. dobermann) — порода короткошёрстных служебных собак, выведенная в городе Апольда (Тюрингия, Германия) в конце XIX века Карлом Фридрихом Луисом Доберманом, названа в честь своего создателя";
  return (
    <div className="App">
      <h1>Home pets</h1>
      <img
        src={
          "https://i2.imageban.ru/out/2023/03/07/587b1a5b83594fffedf39735a3c29d13.jpg"
        }
      />

      <HomePets pets={pets} />
    </div>
  );
}
