import { createContext, useReducer } from "react";
import reducer from "./reducer";
import { Action, Dashboard } from "./types.d";

export const context = createContext<
  [state: Dashboard, dispatch: React.Dispatch<Action>]
>(undefined!);

const initialState: Dashboard = { kind: "car" };

function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value: [Dashboard, React.Dispatch<Action>] = [state, dispatch];

  return <context.Provider value={value}>{children}</context.Provider>;
}

export default DashboardProvider;
