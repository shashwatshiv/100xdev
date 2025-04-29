import React, { useEffect, useState } from "react";
import axios from "axios";
function useTodo(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const value = setInterval(() => {
      axios
        .get("")
        .then((res) => {
          setTodos(res.data.todos);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, n * 1000);
    axios
      .get("")
      .then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      clearInterval(value);
    };
  }, [n]);
  return { todos, loading };
}
const App2 = () => {
  const { todos, loading } = useTodo(10);
  if (loading) {
    return <>loading ...</>;
  }
  return (
    <>
      {todos.map((todo) => (
        <Track todo={todo}></Track>
      ))}
    </>
  );
};
const Track = ({ todo }) => {
  return (
    <>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
    </>
  );
};
export default App2;
