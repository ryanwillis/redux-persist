# Changelog
All notable changes to this project (after v6.1.0) should be documented in this file.

The format is (mostly) based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [7.2.1] - 2022-02-20
### changed
- Added @reduxjs/toolkit dev dependecy and types

## [7.2.0] - 2022-02-19
### changed
- Merged upstream changes from rt2zz/redux-persist


## [7.1.0] - 2022-02-19
### changed
- Merged security pull requests from dependabot updating immer, path-parse and trim-off-newlines
- Merged pull request #8 improving typing on PersistConfig black/whitelist
- Merged pull request #9 typo fix for README

## [7.0.1] - 2021-01-08
### changed
- Added return types for `createMigrate`, `createTransform` and `getStoredState`.
- Fixed props type and callback binding in react implementation.
- Replaced `Action` type with `AnyAction` on `persistReducer` and `persistCombineReducers` type definitions.

## [7.0.0] - 2021-01-07
### Changed
- Forked from [redux-persist](https://github.com/rt2zz/redux-persist/).
- Changed name to `reduxjs-toolkit-persist` and altered imports and build paths accordingly.
- Replaced core [redux](https://github.com/reduxjs/redux) dependency with [reduxjs/toolkit](https://github.com/reduxjs/redux-toolkit).
- Upgraded all dependencies.
- Added node 12 to travis-ci config. Removed node 8.
- Removed `@babel/polyfill` dependency.
- Removed unsupported `suppress_comments` and `warnings` options from [Rollup](https://github.com/rollup/rollup) config files.
- Updated README.md with new toolkit usage and [Capacitor](https://github.com/ryanwillis/redux-persist-capacitor) storage adapter.


## [0.2.0] through [6.1.0] - 2015-07-24 through 2021-10-17

See notes on the original [GitHub releases page](https://github.com/rt2zz/redux-persist/releases)
