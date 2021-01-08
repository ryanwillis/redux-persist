declare module "reduxjs-toolkit-persist/es/createMigrate" {
  import { MigrationManifest, PersistMigrate, PersistedState } from "reduxjs-toolkit-persist/es/types";

  interface MigrationConfig {
    debug: boolean;
  }

  /**
   * @desc Creates a migration path for your app's state.
   * @param migrations migration manifest
   * @param config migration configuration
   */
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function createMigrate(migrations: MigrationManifest, config?: MigrationConfig): PersistMigrate;
}

declare module "reduxjs-toolkit-persist/lib/createMigrate" {
  export * from "reduxjs-toolkit-persist/es/createMigrate";
  export { default } from "reduxjs-toolkit-persist/es/createMigrate";
}
