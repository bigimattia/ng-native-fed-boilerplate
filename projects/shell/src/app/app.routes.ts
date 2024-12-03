import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'portal',
    loadComponent: () =>
    loadRemoteModule('portal', './Component').then((m) => m.AppComponent),
  },
];
