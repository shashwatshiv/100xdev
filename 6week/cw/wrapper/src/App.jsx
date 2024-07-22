import { Children, useEffect, useState } from "react";

function App() {
  return (
    <>
      <CardWrapper> Hello kitty</CardWrapper>
      <CardWrapper>
        <CardWrapper>Double Wrapper</CardWrapper>
      </CardWrapper>
      <CardWrapper>
        <TextComponent></TextComponent>
      </CardWrapper>
      <Todo></Todo>
    </>
  );
}

function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: 20 }}>{children}</div>
  );
}
function TextComponent() {
  return <div>Hi there</div>;
}

function Todo() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
        let json = await res.json();
        setTodo(json.todos);
      });
    }, 5000);
  }, []);

  return (
    <div>
      {todo.map((to) => {
        return (
          <div>
            <h1>{to.title}</h1>
            <h2>{to.description}</h2>
          </div>
        );
      })}
    </div>
  );
}
export default App;
