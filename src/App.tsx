import { useState } from "react";
import "./App.css";
import { Card, Conditional, Wrapper } from "./components";

function App() {
  //!CODIGO

  const companyName = "REACT";
  const imgUrl =
    "https://static.vecteezy.com/system/resources/previews/021/027/473/original/ceo-icon-vector.jpg";

  // let counter = 0;

  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h1>Welcome to {companyName}</h1>
      <h2>{counter}</h2>

      <button
        className="button-1"
        role="button"
        onClick={() => {
          // counter++;
          // console.log(counter);
          // setCounter((c) => c + 1);
          setCounter(counter + 1);
        }}
      >
        Click
      </button>

      <hr />
      <Card name="Charles" title="CEO" image={imgUrl} />
      <hr />
      <Wrapper />
      <hr />
      <Conditional counter={counter} />
    </div>
  );
}

export default App;
