import createWebStorage from './createWebStorage'
import type { Storage } from '../types';

const webStorage : Storage = createWebStorage('session');

export default webStorage;
