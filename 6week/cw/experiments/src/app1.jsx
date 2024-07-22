import { useState } from "react";

const App = () => {
  return (
    <div>
      <HeaderWithButton></HeaderWithButton>
      <Header title="raman"></Header>
      <Header title="raman2"></Header>
      <Header title="raman3"></Header>
      <Header title="raman4"></Header>
    </div>
    // rather  than creating a div tag as parent use empty tag or React.Fragment inside the tags to pervent
    // creation of empty div tag in rendered dom
  );
};
function HeaderWithButton() {
  let [random, setRandom] = useState("my name is shashwat");
  return (
    <>
      <button
        onClick={() => {
          setRandom(" My name is " + Math.random());
        }}>
        click to update name
      </button>
      <Header title={random}></Header>
    </>
  );
}
const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
export default App;
