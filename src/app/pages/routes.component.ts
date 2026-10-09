import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ standalone: true, imports: [RouterLink], template: `
  <div class="page-intro"><div class="eyebrow"><span class="module-icon green small">↗</span> MÓDULO 00 · NAVEGACIÓN</div><h1>Rutas</h1><p class="lead">Una URL indica qué componente mostrar, sin recargar toda la aplicación.</p></div>
  <section class="learning-guide"><div class="guide-title"><span class="guide-badge">PROBALO</span><h2>Hacé una navegación real</h2></div><div class="route-demo-links"><a routerLink="/senales">Ir a Señales <b>/senales ↗</b></a><a routerLink="/pipes">Ir a Pipes <b>/pipes ↗</b></a><a [routerLink]="['/rutas/leccion', 42]" [queryParams]="{ modo: 'repaso' }">Abrir ejemplo con parámetros <b>/rutas/leccion/42?modo=repaso ↗</b></a></div><p class="guide-hint">Mirá la barra de direcciones al tocar un enlace. Cambia la vista y la URL, pero no se recarga el sitio entero.</p></section>
  <div class="lesson-layout"><section class="lesson-main"><article class="demo-card"><div class="demo-header"><div><span class="eyebrow">LAS TRES PIEZAS</span><h2>Del enlace a la pantalla</h2></div><span class="binding-tag">Angular Router</span></div><div class="route-flow"><div><span>1 · DEFINÍS LA RUTA</span><code>path → component</code><small>Qué URL corresponde a qué pantalla.</small></div><b>→</b><div><span>2 · NAVEGÁS</span><code>routerLink</code><small>Un enlace cambia la URL con Angular.</small></div><b>→</b><div><span>3 · SE MUESTRA</span><code>router-outlet</code><small>El componente aparece en este espacio.</small></div></div><div class="route-facts"><div><strong>path</strong><span>La parte de la URL que identifica la pantalla.</span></div><div><strong>:id</strong><span>Parámetro variable, por ejemplo <code>/leccion/42</code>.</span></div><div><strong>?modo=repaso</strong><span>Query param útil para filtros y opciones.</span></div><div><strong>**</strong><span>Ruta comodín: captura direcciones desconocidas.</span></div></div></article><article class="concept-card expanded-concept"><span class="concept-number">LAZY</span><div><h3>¿Por qué <code>loadComponent</code>?</h3><p>Importa una página cuando alguien llega a su ruta. Así el primer paquete no necesita incluir de entrada todos los módulos. Este laboratorio usa carga diferida para sus páginas.</p></div></article></section>
    <aside class="code-card"><div class="code-head"><span>app.routes.ts</span><span class="live-label"><i></i> CARGA DIFERIDA</span></div><pre><span class="code-comment">// URL → página</span>
&#123; path: <span class="code-green">'rutas'</span>,
  loadComponent: () =&gt;
    import(<span class="code-green">'./pages/routes.component'</span>)
      .then(m =&gt; m.RoutesComponent)
&#125;,

<span class="code-comment">// URL con datos variables</span>
&#123; path: <span class="code-green">'rutas/leccion/:id'</span>,
  loadComponent: ...
&#125;

<span class="code-comment">// HTML de la app</span>
&lt;a routerLink=<span class="code-green">"/pipes"</span>&gt;Pipes&lt;/a&gt;
&lt;router-outlet /&gt;</pre><div class="code-note"><span>✳</span> La ruta con <code>:id</code> lleva a un segundo ejercicio para leer parámetros.</div></aside></div>
  <div class="next-lesson"><span>Ahora mirá cómo se lee un parámetro:</span><a [routerLink]="['/rutas/leccion', 42]" [queryParams]="{ modo: 'repaso' }">Abrir /rutas/leccion/42 <b>→</b></a></div>
` })
export class RoutesComponent {}
