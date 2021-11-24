import { useContext } from "react";
import * as foobar from "../contexts/foobar/FoobarProvider";

function Buzz() {
  const [foobarState, foobarDispatch] = useContext(foobar.context);

  function incrementBuzz() {
    foobarDispatch({ type: "INCREMENT_BUZZ" });
  }

  return (
    <div>
      <div>Buzz: {foobarState.buzz}</div>
      <button type="button" onClick={incrementBuzz}>
        INCREMENT BUZZ
      </button>
    </div>
  );
}

export default Buzz;
