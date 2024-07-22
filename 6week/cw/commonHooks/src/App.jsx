import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    // fetch("").then(async (res) => {
    // let json = await res.json;
    // setTodo(json.todos);
    // });
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);
  const [id, setId] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          setId(1);
        }}>
        1
      </button>
      <button
        onClick={() => {
          setId(2);
        }}>
        2
      </button>
      <button
        onClick={() => {
          setId(3);
        }}>
        3
      </button>
      <button
        onClick={() => {
          setId(4);
        }}>
        4
      </button>
      <TodoID id={id}></TodoID>
      {todos.map((todo) => (
        <Todo title={todo.title} description={todo.description}></Todo>
      ))}
    </div>
  );
}

function TodoID({ id }) {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`).then(async (res) => {
      let son = await res.json();
      setTodo(son.todo);
    });
  }, [id]);

  return (
    <>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </>
  );
}

const Todo = ({ title, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
};
export default App;
