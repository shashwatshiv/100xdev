import React, { useEffect, useState } from "react";
import App2 from "./app2";
import "./App.css";
import { use } from "react";

function App() {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 5000);
  }, []);
  return (
    <>
      <MyComponent></MyComponent>
      {render ? <EffectComponent></EffectComponent> : <div></div>}
      <EffectClassComponent> </EffectClassComponent>
      <App2></App2>
    </>
  );
}
class EffectClassComponent extends React.Component {
  componentDidMount() {
    console.log("mounted");
  }
  componentWillUnmount() {
    console.log("unmount");
  }
  render() {
    return <>use effect class component</>;
  }
}
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Count</button>
      </div>
    );
  }
}
function EffectComponent() {
  useEffect(() => {
    console.log("inside use effect");
    return () => {
      console.log("inside return");
    };
  }, []);
  return (
    <>
      <p>inside the component</p>
    </>
  );
}
export default App;
