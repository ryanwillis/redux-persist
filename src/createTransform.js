// @flow

import type { Transform } from './types'

type TransformConfig = {
  allowlist?: Array<string>,
  denylist?: Array<string>,
}

export default function createTransform(
  // @NOTE inbound: transform state coming from redux on its way to being serialized and stored
  inbound: ?Function,
  // @NOTE outbound: transform state coming from storage, on its way to be rehydrated into redux
  outbound: ?Function,
  config: TransformConfig = {}
) : Transform {
  let allowlist = config.allowlist || null
  let denylist = config.denylist || null

  function allowlistdenylistCheck(key) {
    if (allowlist && allowlist.indexOf(key) === -1) return true
    if (denylist && denylist.indexOf(key) !== -1) return true
    return false
  }

  return {
    in: (state: Object, key: string, fullState: Object) =>
      !allowlistdenylistCheck(key) && inbound
        ? inbound(state, key, fullState)
        : state,
    out: (state: Object, key: string, fullState: Object) =>
      !allowlistdenylistCheck(key) && outbound
        ? outbound(state, key, fullState)
        : state,
  }
}
