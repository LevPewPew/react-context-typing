import { useContext, useEffect } from "react";
import * as foobar from "../contexts/foobar";

// NEXT create another context and combine them, then change import naming convention
function Fizz() {
  // NEXT change this to useFoobar, and add the "missing foobar provider" stuff
  const [foobarState, foobarDispatch] = useContext(foobar.context);

  useEffect(() => {
    foobarDispatch({ type: "SET_BUZZ", payload: 0 });
    foobarDispatch({ type: "SET_BUZZ" }); // error is expected!
  }, [foobarState.fizz, foobarDispatch]);

  function incrementFizz() {
    foobarDispatch({ type: "INCREMENT_FIZZ" });
    foobarDispatch({ type: "INCREMENT_FIZZ", payload: 0 }); // error is expected!
  }

  return (
    <div>
      <button type="button" onClick={incrementFizz}>
        CLICKME
      </button>
      <div>Fizz: {foobarState.fizz}</div>
    </div>
  );
}

export default Fizz;
