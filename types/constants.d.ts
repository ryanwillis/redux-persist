declare module "reduxjs-toolkit-persist/es/constants" {
  const KEY_PREFIX: 'persist:';
  const FLUSH: 'persist/FLUSH';
  const REHYDRATE: 'persist/REHYDRATE';
  const PAUSE: 'persist/PAUSE';
  const PERSIST: 'persist/PERSIST';
  const PURGE: 'persist/PURGE';
  const REGISTER: 'persist/REGISTER';
  const DEFAULT_VERSION: number;
}

declare module "reduxjs-toolkit-persist/lib/constants" {
  export * from "reduxjs-toolkit-persist/es/constants";
}
