import { useContext, useEffect } from "react";
import * as Foobar from "../contexts/foobar";

export function Fizz() {
  const [state, dispatch] = useContext(Foobar.context);

  useEffect(() => {
    dispatch({ type: "SET_BUZZ", payload: 0 });
  }, [state.fizz, dispatch]);

  function incrementFizz() {
    dispatch({ type: "INCREMENT_FIZZ" });
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
