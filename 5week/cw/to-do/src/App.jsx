import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodo] = useState([
    {
      title: "todo 1",
      description: "noon",
      done: true,
    },
    {
      title: "todo 2",
      description: "night",
      done: false,
    },
  ]);
  function addTodo() {
    let inputtext = document.getElementById("inputid").value;
    setTodo([
      ...todos,
      {
        title: inputtext,
        description: "yes i did it",
        done: true,
      },
    ]);
  }
  return (
    <div>
      <input id="inputid" type="text" />
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
