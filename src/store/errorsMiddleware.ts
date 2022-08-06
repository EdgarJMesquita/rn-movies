import isPromise from "is-promise";
import { has } from "underscore";

export default function errorMiddleware() {
  return (next) => (action) => {
    /* const types = {
      LOADING: true,
    }; */
    if (!isPromise(action.payload)) {
      return next(action);
    }
    /* if (has(types, action.type)) {
      return next(action).catch((error) => {
        return error;
      });
    } */
    return next(action);
  };
}
