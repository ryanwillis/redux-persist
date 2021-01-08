declare module "reduxjs-toolkit-persist/es/stateReconciler/hardSet" {
  import { PersistConfig } from "reduxjs-toolkit-persist";

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function hardSet<S>(inboundState: S): S;
}

declare module "reduxjs-toolkit-persist/lib/stateReconciler/hardSet" {
  export * from "reduxjs-toolkit-persist/es/stateReconciler/hardSet";
  export { default } from "reduxjs-toolkit-persist/es/stateReconciler/hardSet";
}
