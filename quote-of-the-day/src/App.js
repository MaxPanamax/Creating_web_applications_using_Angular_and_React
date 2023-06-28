import "./styles.css";
import { useState } from "react";

let quotesOfADay = [
  {
    id: 0,
    quote: " Успех - это идти от неудачи к неудаче, не теряя энтузиазма.",
    author: "Уинстон Черчилль"
  },
  {
    id: 1,
    quote: " Не считай дни, извлекай из них пользу.",
    author: "Мухаммед Али"
  },
  {
    id: 2,
    quote: " Не ждите. Время никогда не будет подходящим.",
    author: "Наполеон Хилл"
  },
  {
    id: 3,
    quote: " Неисследованная жизнь не стоит того, чтобы ее жить.",
    author: "Сократ"
  },
  {
    id: 4,
    quote: " Усердно работайте, мечтайте по-крупному.",
    author: "Unnamed Author"
  },
  {
    id: 5,
    quote:
      " Я не потерпел неудачу. Я просто нашел 10 000 способов, которые не работают.",
    author: "Томас Эдисон"
  },
  {
    id: 6,
    quote:
      " Мотивация - это то, что заставляет вас начать. Привычка - это то, что заставляет вас продолжать. ",
    author: "Джим Рюн"
  },
  {
    id: 7,
    quote:
      " Вы должны выучить правила игры. А затем вы должны играть лучше, чем кто-либо другой.",
    author: "Альберт Эйнштейн"
  }
];

function Button(props) {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  let randomQuote = getRandomIntInclusive(0, 7);
  // console.log(randomQuote);

  const clickHandler = () => {
    props.onClikAct(quotesOfADay[randomQuote]);
  };

  return (
    <div className="Button">
      <button onClick={clickHandler}>Show me a new quote!</button>
    </div>
  );
}

function SomeBlock(props) {
  // console.log(props);
  return (
    <div className="SomeBlock">
      <h3>{props.displayQuote.quote}</h3>
      <h3>{props.displayQuote.author}</h3>
    </div>
  );
}

export default function App() {
  let [quote, setQuote] = useState(quotesOfADay[0]);
  // console.log(quote);

  const setStateFunc = (newState) => {
    setQuote(newState);
  };

  return (
    <div className="App">
      <SomeBlock displayQuote={quote} />
      <Button onClikAct={setStateFunc} />
    </div>
  );
}
