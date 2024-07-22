import { lazy, Suspense, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
const Landing = lazy(() => import("./components/Landing"));
const Dashboard = lazy(() => import("./components/Dashboard"));
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello</h1>
      <BrowserRouter>
        <AppBar></AppBar>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading"}>
                <Dashboard></Dashboard>
              </Suspense>
            }></Route>
          <Route
            path="/landing"
            element={
              <Suspense fallback={"loading"}>
                <Landing></Landing>
              </Suspense>
            }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
const AppBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}>
        Home
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}>
        dashboard
      </button>
      <button
        onClick={() => {
          navigate("/landing");
        }}>
        Landing
      </button>
    </>
  );
};
export default App;
