import { useContext, useEffect } from "react";
import { FoobarContext, FoobarActionKind } from "../context";

export function Fizz() {
  const [state, dispatch] = useContext(FoobarContext);

  useEffect(() => {
    dispatch({ type: FoobarActionKind.SET_BUZZ, payload: 0 });
  }, [state.fizz, dispatch]);

  function incrementFizz() {
    dispatch({ type: FoobarActionKind.INCREMENT_FIZZ });
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
