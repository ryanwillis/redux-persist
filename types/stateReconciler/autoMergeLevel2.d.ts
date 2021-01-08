declare module "reduxjs-toolkit-persist/es/stateReconciler/autoMergeLevel2" {
  import { PersistConfig } from "reduxjs-toolkit-persist";

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function autoMergeLevel2<S>(inboundState: S, originalState: S, reducedState: S, config: PersistConfig<S>): S;
}

declare module "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel2" {
  export * from "reduxjs-toolkit-persist/es/stateReconciler/autoMergeLevel2";
  export { default } from "reduxjs-toolkit-persist/es/stateReconciler/autoMergeLevel2";
}
