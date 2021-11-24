import { createContext, useReducer } from "react";
import reducer from "./reducer";
import { Action, Foobar } from "./types.d";

/* undefined! is a way to assert a non-null type. This is useful for avoiding 
passing an initial value when we know that the context would not be used without
a provider (which is pretty much always...) */
export const context = createContext<
  [state: Foobar, dispatch: React.Dispatch<Action>]
>(undefined!);

const initialState: Foobar = { fizz: 0, buzz: 0 };

function FoobarProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  /* explicit tuple type because TS's implicit type will be an array of unions */
  const value: [Foobar, React.Dispatch<Action>] = [state, dispatch];

  return <context.Provider value={value}>{children}</context.Provider>;
}

export default FoobarProvider;
