import { createContext, useReducer } from "react";

interface Foobar {
  fizz: number;
  buzz: number;
}

type Action =
  | { type: "SET_FIZZ"; payload: number }
  | { type: "INCREMENT_FIZZ" }
  | { type: "SET_BUZZ"; payload: number }
  | { type: "INCREMENT_BUZZ" };

function reducer(state: Foobar, action: Action) {
  switch (action.type) {
    case "SET_FIZZ":
      return { ...state, fizz: action.payload };
    case "INCREMENT_FIZZ":
      return { ...state, fizz: state.fizz + 1 };
    case "SET_BUZZ":
      return { ...state, buzz: action.payload };
    case "INCREMENT_BUZZ":
      return { ...state, buzz: state.buzz + 1 };
    default:
      throw new Error("invalid 'action.type'");
  }
}

export const context = createContext<[Foobar, React.Dispatch<Action>]>(
  undefined!
);

const initialState: Foobar = { fizz: 0, buzz: 0 };

function Provider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  /* must provide this type, because TS implicitly things this is an array that
  could take values of either the state or the dispatch, but it is infact a tuple */
  const value: [Foobar, React.Dispatch<Action>] = [state, dispatch];

  return <context.Provider value={value}>{children}</context.Provider>;
}

export default Provider;

// NEXT create a private repo example thing
