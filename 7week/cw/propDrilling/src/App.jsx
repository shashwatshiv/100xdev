import React, { useContext, useState } from "react";
import CountContext from "./context";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}></Count>
      </CountContext.Provider>
    </>
  );
}
function Button({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}>
        Decrease
      </button>
    </div>
  );
}
const Count = ({ setCount }) => {
  return (
    <div>
      <CountRenderer></CountRenderer>

      <Button setCount={setCount}></Button>
    </div>
  );
};

function CountRenderer() {
  const count = useContext(CountContext);
  return <>{count}</>;
}
export default App;
