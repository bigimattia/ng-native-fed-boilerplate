import { initFederation } from '@angular-architects/native-federation';

/**
 * The json defined here can be changed at runtime and contains the remote modules
 * that we want to load.
 */
initFederation('federation.manifest.json')
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
