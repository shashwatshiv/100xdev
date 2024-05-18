import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodo] = useState([
    {
      title: "complete react video1",
      description: "do it before noon",
      done: true,
    },
    {
      title: "complete DSA video1",
      description: "do it before night",
      done: false,
    },
  ]);
  function addTodo() {
    setTodo([
      ...todos,
      {
        title: "new Todo",
        description: "yes i did it",
        done: true,
      },
    ]);
  }
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
