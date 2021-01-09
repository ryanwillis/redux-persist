declare module "reduxjs-toolkit-persist/es/persistCombineReducers" {
  import { AnyAction, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
  import { PersistPartial } from "reduxjs-toolkit-persist/es/persistReducer";
  import { PersistConfig } from "reduxjs-toolkit-persist/es/types";

  /**
   * @desc It provides a way of combining the reducers, replacing redux's @see combineReducers
   * @param config persistence configuration
   * @param reducers set of keyed functions mapping to the application state
   * @returns reducer
   */
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function persistCombineReducers<S, A extends AnyAction>(config: PersistConfig<S>, reducers: ReducersMapObject<S, A>): Reducer<S & PersistPartial, A>;
}

declare module "reduxjs-toolkit-persist/lib/persistCombineReducers" {
  export * from "reduxjs-toolkit-persist/es/persistCombineReducers";
  export { default } from "reduxjs-toolkit-persist/es/persistCombineReducers";
}
