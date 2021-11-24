import { createContext, useReducer } from "react";
import reducer from "./reducer";
import { Action, Foobar } from "./types.d";

export const context = createContext<
  [state: Foobar, dispatch: React.Dispatch<Action>]
>(undefined!);

const initialState: Foobar = { fizz: 0, buzz: 0 };

function FoobarProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value: [Foobar, React.Dispatch<Action>] = [state, dispatch];

  return <context.Provider value={value}>{children}</context.Provider>;
}

export default FoobarProvider;
