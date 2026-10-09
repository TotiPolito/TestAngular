import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  standalone: true, imports: [RouterLink],
  template: `
    <section class="welcome-row"><div><div class="eyebrow"><span class="spark">✳</span> EMPEZAMOS DE A POCO</div><h1>Primero probá.<br><em>Después entendé.</em></h1><p class="lead">No hace falta saber todo antes de empezar.<br>Cada módulo te guía con una acción concreta.</p><a class="button primary" routerLink="/senales">Hacer el primer ejercicio <span>→</span></a></div><div class="hero-art"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="hero-core"><span>ng</span><small>LAB</small></div><span class="float-chip chip-signal">◉ &nbsp; signal()</span><span class="float-chip chip-rx">◌ &nbsp; Observable</span><span class="float-chip chip-route">↗ &nbsp; routes</span><span class="hero-spark">✳</span></div></section>
    <section class="learning-guide home-guide"><div class="guide-title"><span class="guide-badge">GUÍA</span><h2>Cómo usar este laboratorio</h2></div><div class="guide-steps"><div><b>1</b><p><strong>Hacé lo que dice “Probá esto”</strong><br>Por ejemplo, tocá el botón +.</p></div><div><b>2</b><p><strong>Contá qué cambió en pantalla</strong><br>El número, el mensaje y la barra.</p></div><div><b>3</b><p><strong>Relacioná el cambio con el código</strong><br>La explicación te muestra qué línea lo produjo.</p></div></div></section>
    <div class="section-heading"><div><div class="eyebrow">EL RECORRIDO</div><h2>Elegí un tema para practicar</h2></div><span class="muted">4 módulos · en orden sugerido</span></div>
    <section class="module-grid">
      <a class="module-card" routerLink="/senales"><div class="card-top"><span class="module-icon coral">◉</span><span class="module-number">01 / REACTIVIDAD</span></div><h3>Señales</h3><p>Un contador cambia; la pantalla sigue ese cambio.</p><div class="card-link">Empezar por acá <span>↗</span></div></a>
      <a class="module-card" routerLink="/data-binding"><div class="card-top"><span class="module-icon blue">⟷</span><span class="module-number">02 / PLANTILLAS</span></div><h3>Data binding</h3><p>Escribí tu nombre y mirá cómo viaja al saludo.</p><div class="card-link">Hacer el ejercicio <span>↗</span></div></a>
      <a class="module-card" routerLink="/servicios-observables"><div class="card-top"><span class="module-icon green">◌</span><span class="module-number">03 / DATOS</span></div><h3>Servicios & RxJS</h3><p>Seguí el recorrido de una lista que llega más tarde.</p><div class="card-link">Seguir los datos <span>↗</span></div></a>
      <a class="module-card" routerLink="/pipes"><div class="card-top"><span class="module-icon violet">⇢</span><span class="module-number">04 / FORMATO</span></div><h3>Pipes</h3><p>Compará cada valor antes y después de transformarlo.</p><div class="card-link">Ver ejemplos claros <span>↗</span></div></a>
    </section>
    <section class="bottom-grid"><div class="progress-card"><div class="section-heading compact"><div><div class="eyebrow">EJEMPLO DE SERVICIO</div><h2>Estado compartido</h2></div><span class="progress-count">{{ course.completed() }}<small> / {{ course.total }}</small></span></div><div class="progress-track large"><span [style.width.%]="(course.completed() / course.total) * 100"></span></div><p>Este contador es una demostración: el servicio lo conserva al cambiar de página.</p></div><div class="tip-card"><span class="tip-icon">✳</span><div><div class="eyebrow">REGLA DE ORO</div><p>Si no sabés qué mirar, volvé al paso 1: hacé clic y describí lo que cambió.</p></div></div></section>
  `
})
export class HomeComponent { readonly course = inject(CourseService); }
