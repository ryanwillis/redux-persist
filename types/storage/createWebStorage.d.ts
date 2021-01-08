declare module "reduxjs-toolkit-persist/es/storage/createWebStorage" {
  import { WebStorage } from "reduxjs-toolkit-persist/es/types";

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function createWebStorage(type: string): WebStorage;
}

declare module "reduxjs-toolkit-persist/lib/storage/createWebStorage" {
  export * from "reduxjs-toolkit-persist/es/storage/createWebStorage";
  export { default } from "reduxjs-toolkit-persist/es/storage/createWebStorage";
}
