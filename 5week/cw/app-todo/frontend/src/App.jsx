import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import "./App.css";

function App() {
  const [todos, setTodo] = useState([]);
  fetch("http://localhost:3000/todos").then(async (res) => {
    const json = await res.json();
    setTodo(json.todos);
  });

  return (
    <>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  );
}

export default App;
