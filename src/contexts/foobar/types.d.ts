export interface Foobar {
  fizz: number;
  buzz: number;
}

export type Action =
  | { type: "SET_FIZZ"; payload: number }
  | { type: "INCREMENT_FIZZ" }
  | { type: "SET_BUZZ"; payload: number }
  | { type: "INCREMENT_BUZZ" };
