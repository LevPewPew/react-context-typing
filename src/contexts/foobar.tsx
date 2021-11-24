import { createContext, useReducer } from "react";

interface Foobar {
  fizz: number;
  buzz: number;
}

type FoobarActionKindWithPayload = "SET_FIZZ" | "SET_BUZZ";

type FoobarActionKindNoPayload = "INCREMENT_FIZZ" | "INCREMENT_BUZZ";

type FoobarAction = FoobarActionWithPayload | FoobarActionNoPayload;

interface FoobarActionWithPayload {
  type: FoobarActionKindWithPayload;
  payload: number;
}

interface FoobarActionNoPayload {
  type: FoobarActionKindNoPayload;
}

function foobarReducer(state: Foobar, action: FoobarAction) {
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

/* LEFTOFF: change to use missing context guard, this should be better than the
epic react "better error message" approach since can catch this at compile time... :) */
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
export const context = createContext<[Foobar, React.Dispatch<FoobarAction>]>(
  undefined!
);

const initialState: Foobar = { fizz: 0, buzz: 0 };

function Provider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(foobarReducer, initialState);
  // must provide this type, because TS implicitly things this is an array that could take values of either the state or the dispatch, but it is infact a tuple
  const value: [Foobar, React.Dispatch<FoobarAction>] = [state, dispatch];

  return <context.Provider value={value}>{children}</context.Provider>;
}

export default Provider;

// NEXT create a private repo example thing
