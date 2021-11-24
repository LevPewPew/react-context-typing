import { Action, Foobar } from "./types.d";

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

export default reducer;
