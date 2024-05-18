import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <input type="text" id="title"></input>
      <br></br>
      <input type="text" id=""></input>
      <br></br>
      <button onClick={todoHandler}>Add To-Do</button>
    </div>
  );
}
function todoHandler() {
  console.log("dhsldkls");
}
function TodoButton() {
  return <></>;
}

export default App;
