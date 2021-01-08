declare module "reduxjs-toolkit-persist/es/createTransform" {
  import { PersistConfig, Transform, TransformInbound, TransformOutbound } from "reduxjs-toolkit-persist/es/types";

  interface TransformConfig {
    whitelist?: Array<string>;
    blacklist?: Array<string>;
  }

  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function createTransform<HSS, ESS, S = any, RS = any>(
    inbound?: TransformInbound<HSS, ESS, S> | null,
    outbound?: TransformOutbound<ESS, HSS, RS> | null,
    config?: TransformConfig,
  ): Transform<HSS, ESS, S, RS>;
}

declare module "reduxjs-toolkit-persist/lib/createTransform" {
  export * from "reduxjs-toolkit-persist/es/createTransform";
  export { default } from "reduxjs-toolkit-persist/es/createTransform";
}
