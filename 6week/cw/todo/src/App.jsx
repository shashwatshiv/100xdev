import { useState } from "react";
let counterId = 4;
function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: "go to gym", description: "leg day" },
    { id: 2, title: "go to guna", description: "saza day" },
    { id: 3, title: "go to goa", description: "maza day" },
  ]);
  let inputTitle;
  let inputDes;
  return (
    <>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          inputTitle = e.target.value;
        }}
      />
      <br />
      <input
        type="text"
        placeholder="desciption"
        onChange={(e) => {
          inputDes = e.target.value;
        }}
      />
      <br />
      <button
        onClick={() => {
          setTodo([
            ...todo,
            { id: counterId++, title: inputTitle, description: inputDes },
          ]);
        }}>
        Add Todo
      </button>
      {todo.map((todos) => {
        return (
          <Todo
            key={todos.id}
            title={todos.title}
            description={todos.description}
            id={todos.id}></Todo>
        );
      })}
    </>
  );
}
function Todo({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </>
  );
}

export default App;
