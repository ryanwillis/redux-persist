import createWebStorage from './createWebStorage'
import type { Storage } from '../types';

const webStorage : Storage = createWebStorage('local');

export default webStorage;
