import { useState, memo } from "react";

const App = () => {
  let [random, setRandom] = useState("shashwat");
  let name = "shashwat";
  return (
    <div>
      <button
        onClick={() => {
          setRandom(Math.random);
        }}>
        click to update name
      </button>
      <Header title={random}></Header>
      <Header title="raman"></Header>
      <Header title="raman2"></Header>
      <Header title="raman3"></Header>
      <Header title="raman4"></Header>
    </div>
    // rather  than creating a div tag as parent use empty tag or React.Fragment inside the tags to pervent
    // creation of empty div tag in rendered dom
  );
};

const Header = memo(({ title }) => {
  return (
    <div>
      <h1>My name is {title}</h1>
    </div>
  );
});
export default App;
