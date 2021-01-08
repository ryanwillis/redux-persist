declare module "reduxjs-toolkit-persist/es/createPersistoid" {
  import { PersistConfig, Persistoid } from "reduxjs-toolkit-persist/es/types";

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function createPersistoid(config: PersistConfig<any>): Persistoid;
}

declare module "reduxjs-toolkit-persist/lib/createPersistoid" {
  export * from "reduxjs-toolkit-persist/es/createPersistoid";
  export { default } from "reduxjs-toolkit-persist/es/createPersistoid";
}
