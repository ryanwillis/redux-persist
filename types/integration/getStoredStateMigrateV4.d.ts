declare module "reduxjs-toolkit-persist/es/integration/getStoredStateMigrateV4" {
  import { PersistConfig, Transform } from "reduxjs-toolkit-persist/es/types";

  interface V4Storage {
    keys?(cb: (err: any, allKeys: Array<string>) => any): any;
    getAllKeys?(cb: (err: any, allKeys: Array<string>) => any): any;
    getItem?(cb: (err: any, serialized?: string | null) => any): any;
  }

  interface V4Config {
    storage?: V4Storage;
    keyPrefix?: string;
    transforms?: Array<Transform<any, any>>;
    blacklist?: Array<string>;
    whitelist?: Array<string>;
  }

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function getStoredState(v4Config: V4Config): (config: PersistConfig<any>) => Promise<object | undefined>;
}

declare module "reduxjs-toolkit-persist/lib/integration/getStoredStateMigrateV4" {
  export * from "reduxjs-toolkit-persist/es/integration/getStoredStateMigrateV4";
  export { default } from "reduxjs-toolkit-persist/es/integration/getStoredStateMigrateV4";
}
