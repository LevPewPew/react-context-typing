import { useContext } from "react";
import * as foobar from "../contexts/foobar/FoobarProvider";

function Fizz() {
  const [foobarState, foobarDispatch] = useContext(foobar.context);

  function incrementFizz() {
    foobarDispatch({ type: "INCREMENT_FIZZ" });
  }

  return (
    <div>
      <div>Fizz: {foobarState.fizz}</div>
      <button type="button" onClick={incrementFizz}>
        INCREMENT FIZZ
      </button>
    </div>
  );
}

export default Fizz;
