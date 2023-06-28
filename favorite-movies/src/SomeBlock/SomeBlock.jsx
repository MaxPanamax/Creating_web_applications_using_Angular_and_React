import"./SomeBlock.css"

 function SomeBlock(props) {
  // console.log(props);
  return (
    <div className="SomeBlock">
      <h3>{props.displayQuote.quote}</h3>
      <h3>{props.displayQuote.author}</h3>
    </div>
  );
}