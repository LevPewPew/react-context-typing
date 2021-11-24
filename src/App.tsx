import { useContext, useEffect } from "react";
import * as foobar from "./contexts/foobar/FoobarProvider";
import * as dashboard from "./contexts/dashboard/DashboardProvider";
import Fizz from "./components/Fizz";
import Buzz from "./components/Buzz";
import DashboardCycler from "./components/DashboardCycler";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [, foobarDispatch] = useContext(foobar.context);
  const [dashboardState] = useContext(dashboard.context);

  useEffect(() => {
    foobarDispatch({ type: "SET_FIZZ", payload: 0 });
    foobarDispatch({ type: "SET_BUZZ", payload: 0 });
    // foobarDispatch({ type: "SET_BUZZ" }); // uncomment this to see EXPECTED error
    // foobarDispatch({ type: "INCREMENT_FIZZ", payload: 0 }); // uncomment this to see EXPECTED error
  }, [dashboardState.kind, foobarDispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{dashboardState.kind}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <div style={{ display: "flex" }}>
          <Fizz />
          <Buzz />
        </div>
        <br />
        <DashboardCycler />
      </header>
    </div>
  );
}

export default App;
