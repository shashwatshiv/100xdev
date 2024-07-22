import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  );
}

function CustomButton(props) {
  function onclickHandler() {
    props.setCount(props.count + 10);
  }
  return <button onClick={onclickHandler}>Counter {props.count}</button>;
}

export default App;
