import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root', standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="app-shell">
      <aside class="sidebar">
        <a class="brand" routerLink="/" aria-label="Angular Lab, inicio"><span class="brand-mark">A<span>+</span></span><span class="brand-name">angular<span>lab</span></span></a>
        <div class="side-label">TU ESPACIO</div>
        <div class="profile"><div class="avatar">T</div><div><strong>Tu laboratorio</strong><small>Aprendiendo Angular</small></div><span class="dots">···</span></div>
        <div class="side-label nav-label">APRENDE</div>
        <nav class="nav-list" aria-label="Navegación principal">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}"><span class="nav-icon">⌂</span>Resumen<span class="nav-arrow">↗</span></a>
          <a routerLink="/angular" routerLinkActive="active"><span class="nav-icon">◈</span>¿Qué es Angular?</a>
          <a routerLink="/standalone-vs-modules" routerLinkActive="active"><span class="nav-icon">▣</span>Standalone / Modules</a>
          <a routerLink="/rutas" routerLinkActive="active"><span class="nav-icon">↗</span>Rutas</a>
          <a routerLink="/senales" routerLinkActive="active"><span class="nav-icon">◉</span>Señales</a>
          <a routerLink="/data-binding" routerLinkActive="active"><span class="nav-icon">⟷</span>Data binding</a>
          <a routerLink="/servicios-observables" routerLinkActive="active"><span class="nav-icon">◌</span>Servicios & RxJS</a>
          <a routerLink="/http-client" routerLinkActive="active"><span class="nav-icon">⇄</span>HttpClient</a>
          <a routerLink="/pipes" routerLinkActive="active"><span class="nav-icon">⇢</span>Pipes</a>
        </nav>
        <div class="sidebar-bottom"><div class="mini-progress"><div class="mini-progress-head"><span>Estado compartido</span><strong>{{ course.completed() }}/{{ course.total }}</strong></div><div class="progress-track"><span [style.width.%]="(course.completed() / course.total) * 100"></span></div><small>El servicio conserva este valor.</small></div><div class="version"><span class="status-dot"></span> Angular 19 · Standalone</div></div>
      </aside>
      <main class="main-area">
        <header class="topbar"><div class="breadcrumb"><span>Tu espacio</span><b>/</b><strong>Laboratorio</strong></div><div class="top-actions"><span class="live-badge"><i></i> ENTORNO LOCAL</span><div class="top-avatar">T</div></div></header>
        <div class="page-content"><router-outlet /></div>
        <footer class="footer"><span>Hecho para aprender haciendo.</span><span>Angular Lab <b>·</b> Tu espacio de práctica</span></footer>
      </main>
    </div>
  `
})
export class AppComponent {
  // inject() obtiene el servicio sin constructor; su estado se comparte entre rutas.
  readonly course = inject(CourseService);
}
