declare module "reduxjs-toolkit-persist/es/storage/session" {
  import { WebStorage } from "reduxjs-toolkit-persist/es/types";

  const sessionStorage: WebStorage;
  export default sessionStorage;
}

declare module "reduxjs-toolkit-persist/lib/storage/session" {
  export * from "reduxjs-toolkit-persist/es/storage/session";
  export { default } from "reduxjs-toolkit-persist/es/storage/session";
}
