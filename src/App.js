import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(false);
  const luckyName = useRef();

  const submitChange = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    name === "" ? alert("plz fill the field") : setState(true);
  };

  return (
    <div className="App" onSubmit={submitChange}>
      <form action="">
        <div>
          <label htmlFor="luckyName">Enter your lucky name</label>
          <input type="text" id="luckyName" ref={luckyName} />
        </div>
        <br />
        <button>Submit</button>
      </form>
      <p>{state ? `you lucky num is ${luckyName.current.value}` : " "}</p>
    </div>
  );
}

export default App;
