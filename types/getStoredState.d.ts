declare module "reduxjs-toolkit-persist/es/getStoredState" {
  import { PersistConfig } from "reduxjs-toolkit-persist/es/types";

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function getStoredState(config: PersistConfig<any>): Promise<object | undefined>;
}

declare module "reduxjs-toolkit-persist/lib/getStoredState" {
  export * from "reduxjs-toolkit-persist/es/getStoredState";
  export { default } from "reduxjs-toolkit-persist/es/getStoredState";
}
