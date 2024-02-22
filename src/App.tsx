import { useState } from "react";
import "./App.css";
import { Card, Conditional, Wrapper } from "./components";
import { useApi } from "./hooks/useApi.hook";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  //!CODIGO

  const companyName = "REACT";
  const imgUrl =
    "https://static.vecteezy.com/system/resources/previews/021/027/473/original/ceo-icon-vector.jpg";

  // let counter = 0;

  const [counter, setCounter] = useState(0);
  const [info] = useApi(
    "https://api.github.com/users/moche123",
    "twitter_username"
  );

  const [name, setName] = useLocalStorage("name", "Carlos");

  // const [twitterUsername, setTwitterUsername] = useState<string>("");

  //!UseEffect

  // useEffect(() => {
  //   //!MONTAJE
  //   // console.log(`Counter ha cambiado ${counter}`);

  //   const interval = setInterval(() => {
  //     console.log(`INTERVAL ${counter}`);
  //   }, 1000);

  //   return () => {
  //     //! Desmontaje
  //     console.log("Clear interval");
  //     clearInterval(interval);
  //   };
  // }, [counter]); //!Actualizacion

  //*LLAMADAS HTTP
  // useEffect(() => {
  //   fetch("https://api.github.com/users/moche123")
  //     .then((data) => data.json())
  //     .then((info: IGithubApi) => {
  //       setTwitterUsername(info.twitter_username);
  //     });
  // }, []); //!Actualizacion

  return (
    <div className="container">
      <h1>Welcome to {companyName}</h1>
      <hr />

      <h2>{info}</h2>

      <h2>{counter}</h2>

      <hr />
      {name}
      <hr />

      <button
        className="button-1"
        role="button"
        onClick={() => {
          setCounter(counter + 1);
          setName(`${name}+`);
        }}
      >
        Click
      </button>

      <hr />
      <Card name="Charles" title="CEO" image={imgUrl} />
      <hr />
      <Wrapper>
        <p className="mb-0">This is child content</p>
      </Wrapper>
      <hr />
      <Wrapper>
        <p className="mb-0">This is child content 2</p>
      </Wrapper>
      <hr />
      <Wrapper>
        <p className="mb-0">This is child content 3</p>
      </Wrapper>
      <hr />
      <Conditional counter={counter} />
    </div>
  );
}

export default App;
