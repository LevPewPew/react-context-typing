import logo from "./logo.svg";
import "./App.css";
import FoobarProvider from "./contexts/foobar";
import Fizz from "./components/Fizz";

function App() {
  return (
    <FoobarProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
          <Fizz />
        </header>
      </div>
    </FoobarProvider>
  );
}

export default App;
