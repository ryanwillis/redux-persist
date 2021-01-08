declare module "reduxjs-toolkit-persist/es/purgeStoredState" {
  import { PersistConfig } from "reduxjs-toolkit-persist/es/types";
  /**
   * @desc Removes stored state.
   * @param config persist configuration
   */
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function purgeStoredState<S>(config: PersistConfig<S>): any;
}

declare module "reduxjs-toolkit-persist/lib/purgeStoredState" {
  export * from "reduxjs-toolkit-persist/es/purgeStoredState";
  export { default } from "reduxjs-toolkit-persist/es/purgeStoredState";
}
