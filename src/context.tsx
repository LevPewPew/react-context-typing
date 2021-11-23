import { createContext, useReducer } from "react";

interface Foobar {
  fizz: number;
  buzz: number;
}

// NEXT change this to a string union
export enum FoobarActionKind {
  SET_FIZZ = "SET_FIZZ",
  INCREMENT_FIZZ = "INCREMENT_FIZZ",
  SET_BUZZ = "SET_BUZZ",
  INCREMENT_BUZZ = "INCREMENT_BUZZ",
}

interface FoobarAction {
  type: FoobarActionKind;
  payload?: number;
}

function foobarReducer(state: Foobar, action: FoobarAction) {
  switch (action.type) {
    case "SET_FIZZ":
      if (action.payload) {
        return { ...state, fizz: action.payload };
      } else {
        return state;
      }
    case "INCREMENT_FIZZ":
      return { ...state, fizz: state.fizz + 1 };
    case "SET_BUZZ":
      if (action.payload) {
        return { ...state, buzz: action.payload };
      } else {
        return state;
      }
    case "INCREMENT_BUZZ":
      return { ...state, buzz: state.buzz + 1 };
    default:
      return state;
  }
}

/* LEFTOFF: change to use missing context guard, this should be better than the
epic react "better error message" approach since can catch this at compile time... :) */
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
export const FoobarContext = createContext<
  [Foobar, React.Dispatch<FoobarAction>]
>(undefined!);

const initialState: Foobar = { fizz: 0, buzz: 0 };

export function FoobarProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(foobarReducer, initialState);
  // must provide this type, because TS implicitly things this is an array that could take values of either the state or the dispatch, but it is infact a tuple
  const value: [Foobar, React.Dispatch<FoobarAction>] = [state, dispatch];

  return (
    <FoobarContext.Provider value={value}>{children}</FoobarContext.Provider>
  );
}

// NEXT create a private repo example thing
