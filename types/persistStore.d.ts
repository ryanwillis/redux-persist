declare module "reduxjs-toolkit-persist/es/persistStore" {
  import { Store } from '@reduxjs/toolkit';
  import { PersistorOptions, Persistor } from "reduxjs-toolkit-persist/es/types";

  /**
   * @desc Creates a persistor for a given store.
   * @param store store to be persisted (or match an existent storage)
   * @param persistorOptions enhancers of the persistor
   * @param callback bootstrap callback of sort.
   */
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function persistStore(store: Store, persistorOptions?: PersistorOptions | null, callback?: () => any): Persistor;
}

declare module "reduxjs-toolkit-persist/lib/persistStore" {
  export * from "reduxjs-toolkit-persist/es/persistStore";
  export { default } from "reduxjs-toolkit-persist/es/persistStore";
}
