// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function clickMe() {
    alert("You clicked me");
  }
  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <main>
      <h1>You clicked me {count} times</h1>

      <button onClick={() => handleIncrease()}>Increase</button>
      <button onClick={() => handleDecrease()}>Decrease</button>
      <button onClick={() => handleReset()}>Reset</button>
      <h1>How to cook indomie</h1>
      <h3>Blog article written by Ibrahim Aliyu</h3>
      <img className="indomie-photo" src="./indomie-photo.webp" />
      <img className="indomie-photo" src="./indomie-photo.webp" />
      <caption>Picture of my indomie</caption>
      <br />
      <p>
        To cook indomie you need some certain ingredents. Here is a list of
        ingredients you need
      </p>
      <ul>
        <li>clean water</li>
        <li>seasoning</li>
        <li>atarugu</li>
        <li>Pepper</li>
        <li>Onions</li>
        <li>Garlic</li>
      </ul>

      <p>
        Now, that we have all these ingredients, we can start cooking our
        indomie using the following steps
      </p>
      <ol>
        <li>Put the clean water in a pot</li>
        <li>Put the pot on the fire</li>
        <li>Wait for the water to boil</li>
        <li>Add the indomie to the boiling water</li>
        <li>Add the seasoning and stir</li>
        <li>Wait for 2 minutes</li>
        <li>Serve and enjoy</li>
      </ol>

      <button onClick={() => clickMe()}>Click Me</button>

      <h1>
        We have two type of listings in HTML. WE HAVE ORDERED LIST AND WE HAVE
        UNORDERED LISTS
      </h1>
    </main>
  );
}

export default App;
