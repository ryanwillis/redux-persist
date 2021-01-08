declare module "reduxjs-toolkit-persist/es/storage" {
  import { WebStorage } from "reduxjs-toolkit-persist/es/types";

  const localStorage: WebStorage;
  export default localStorage;
}

declare module "reduxjs-toolkit-persist/lib/storage" {
  export * from "reduxjs-toolkit-persist/es/storage";
  export { default } from "reduxjs-toolkit-persist/es/storage";
}
