declare module "reduxjs-toolkit-persist/es/storage/getStorage" {
  import { Storage } from "reduxjs-toolkit-persist/es/types";

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function getStorage(type: string): Storage;
}

declare module "reduxjs-toolkit-persist/lib/storage/getStorage" {
  export * from "reduxjs-toolkit-persist/es/storage/getStorage";
  export { default } from "reduxjs-toolkit-persist/es/storage/getStorage";
}
