declare module "reduxjs-toolkit-persist/es/persistReducer" {
  import { AnyAction, Reducer } from "@reduxjs/toolkit";
  import { PersistState, PersistConfig } from "reduxjs-toolkit-persist/es/types";

  interface PersistPartial {
    _persist: PersistState;
  }

  /**
   * @desc It provides a way of combining the reducers, replacing redux's @see combineReducers
   * @param config persistence configuration
   * @param baseReducer reducer used to persist the state
   */
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function persistReducer<S, A extends AnyAction>(config: PersistConfig<S>, baseReducer: Reducer<S, A>): Reducer<S & PersistPartial, A>;
  
}

declare module "reduxjs-toolkit-persist/lib/persistReducer" {
  export * from "reduxjs-toolkit-persist/es/persistReducer";
  export { default } from "reduxjs-toolkit-persist/es/persistReducer";
}
