// @flow

import type { Storage } from '../types'


let noopStorage : Storage = {
  getItem: ( key ) => {},
  setItem: ( key, val ) => {},
  removeItem: ( key ) => {}
}

function hasStorage(storageType) {
  if (typeof self !== 'object' || !(storageType in self)) {
    return false
  }

  try {
    let storage = self[storageType]
    const testKey = `reduxjs-toolkit-persist ${storageType} test`
    storage.setItem(testKey, 'test')
    storage.getItem(testKey)
    storage.removeItem(testKey)
  } catch (e) {
    if (process.env.NODE_ENV !== 'production')
      console.warn(
        `reduxjs-toolkit-persist ${storageType} test failed, persistence will be disabled.`
      )
    return false
  }
  return true
}

export default function getStorage(type: string): Storage {
  const storageType = `${type}Storage`
  if (hasStorage(storageType)) return self[storageType]
  else {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        `reduxjs-toolkit-persist failed to create sync storage. falling back to noop storage.`
      )
    }
    return noopStorage
  }
}
