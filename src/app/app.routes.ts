import { Routes } from '@angular/router';

// Cada loadComponent importa la página recién cuando se visita esa ruta (lazy loading).
export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home.component').then((m) => m.HomeComponent), title: 'Inicio · Angular Lab' },
  { path: 'angular', loadComponent: () => import('./pages/angular.component').then((m) => m.AngularComponent), title: '¿Qué es Angular? · Angular Lab' },
  { path: 'standalone-vs-modules', loadComponent: () => import('./pages/standalone.component').then((m) => m.StandaloneComponent), title: 'Standalone y NgModules · Angular Lab' },
  { path: 'rutas/leccion/:id', loadComponent: () => import('./pages/route-example.component').then((m) => m.RouteExampleComponent), title: 'Parámetros de ruta · Angular Lab' },
  { path: 'rutas', loadComponent: () => import('./pages/routes.component').then((m) => m.RoutesComponent), title: 'Rutas · Angular Lab' },
  { path: 'senales', loadComponent: () => import('./pages/signals.component').then((m) => m.SignalsComponent), title: 'Señales · Angular Lab' },
  { path: 'data-binding', loadComponent: () => import('./pages/binding.component').then((m) => m.BindingComponent), title: 'Data binding · Angular Lab' },
  { path: 'servicios-observables', loadComponent: () => import('./pages/data.component').then((m) => m.DataComponent), title: 'Servicios y Observables · Angular Lab' },
  { path: 'http-client', loadComponent: () => import('./pages/http-client.component').then((m) => m.HttpClientComponent), title: 'HttpClient · Angular Lab' },
  { path: 'pipes', loadComponent: () => import('./pages/pipes.component').then((m) => m.PipesComponent), title: 'Pipes · Angular Lab' },
  { path: '**', redirectTo: '' }
];
