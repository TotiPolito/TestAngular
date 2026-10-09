import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineLatest, map } from 'rxjs';

@Component({ standalone: true, imports: [AsyncPipe, RouterLink], template: `
  <div class="page-intro"><div class="eyebrow"><span class="module-icon green small">↗</span> EJERCICIO DE RUTAS · PARÁMETROS</div><h1>Datos en la URL</h1><p class="lead">La ruta actual es <code>/rutas/leccion/:id</code>. Cambiá los parámetros para ver qué lee Angular.</p></div>
  <section class="learning-guide"><div class="guide-title"><span class="guide-badge">MIRÁ LA URL</span><h2>Path param y query param</h2></div><div class="route-demo-links"><a [routerLink]="['/rutas/leccion', 7]" [queryParams]="{ modo: 'practica' }">Lección 7 · práctica <b>/7?modo=practica</b></a><a [routerLink]="['/rutas/leccion', 99]" [queryParams]="{ modo: 'repaso' }">Lección 99 · repaso <b>/99?modo=repaso</b></a></div></section>
  <div class="lesson-layout"><section class="lesson-main"><article class="demo-card route-param-card">@if (params$ | async; as params) { <div class="param-grid"><div><span>PATH PARAMETER</span><strong>{{ params.id }}</strong><code>route.paramMap.get('id')</code></div><div><span>QUERY PARAMETER</span><strong>{{ params.mode }}</strong><code>route.queryParamMap.get('modo')</code></div></div> }</article><a class="back-link" routerLink="/rutas">← Volver a la lección de Rutas</a></section>
    <aside class="code-card"><div class="code-head"><span>route-example.component.ts</span><span class="code-dots">● ● ●</span></div><pre><span class="code-comment">// :id viene del path</span>
route.paramMap
  .get(<span class="code-green">'id'</span>) <span class="code-comment">// {{ (params$ | async)?.id ?? '...' }}</span>

<span class="code-comment">// modo viene después de ?</span>
route.queryParamMap
  .get(<span class="code-green">'modo'</span>) <span class="code-comment">// {{ (params$ | async)?.mode ?? '...' }}</span>

<span class="code-comment">// Cambian sin reconstruir la página</span>
/rutas/leccion/42?modo=repaso</pre><div class="code-note"><span>✳</span> Usá un path param para identificar un recurso y un query param para opciones, filtros o búsqueda.</div></aside></div>
` })
export class RouteExampleComponent {
  private readonly route = inject(ActivatedRoute);
  readonly params$ = combineLatest([this.route.paramMap, this.route.queryParamMap]).pipe(
    map(([path, query]) => ({ id: path.get('id') ?? '(falta id)', mode: query.get('modo') ?? '(sin modo)' }))
  );
}
