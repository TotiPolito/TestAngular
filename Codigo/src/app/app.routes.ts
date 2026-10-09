import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { SignalsComponent } from './pages/signals.component';
import { BindingComponent } from './pages/binding.component';
import { DataComponent } from './pages/data.component';
import { PipesComponent } from './pages/pipes.component';

// Cada URL carga una página independiente. loadComponent implementa lazy loading.
export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio · Angular Lab' },
  { path: 'senales', component: SignalsComponent, title: 'Señales · Angular Lab' },
  { path: 'data-binding', component: BindingComponent, title: 'Data binding · Angular Lab' },
  { path: 'servicios-observables', component: DataComponent, title: 'Servicios y Observables · Angular Lab' },
  { path: 'pipes', component: PipesComponent, title: 'Pipes · Angular Lab' },
  { path: '**', redirectTo: '' }
];
