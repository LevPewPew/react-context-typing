import { useContext, useEffect } from "react";
import * as foobar from "../contexts/foobar";

// NEXT create another context and combine them, then change import naming convention
function Fizz() {
  const [state, dispatch] = useContext(foobar.context);

  useEffect(() => {
    dispatch({ type: "SET_BUZZ", payload: 0 });
    dispatch({ type: "SET_BUZZ" }); // error is expected!
  }, [state.fizz, dispatch]);

  function incrementFizz() {
    dispatch({ type: "INCREMENT_FIZZ" });
    dispatch({ type: "INCREMENT_FIZZ", payload: 0 }); // error is expected!
  }

  return (
    <div>
      <button type="button" onClick={incrementFizz}>
        CLICKME
      </button>
      <div>Fizz: {state.fizz}</div>
    </div>
  );
}

export default Fizz;
