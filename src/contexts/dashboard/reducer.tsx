import { Action, Dashboard } from "./types.d";

function reducer(state: Dashboard, action: Action) {
  switch (action.type) {
    case "SET_DASHBOARD":
      return { ...state, kind: action.payload };
    default:
      throw new Error("invalid 'action.type'");
  }
}

export default reducer;
