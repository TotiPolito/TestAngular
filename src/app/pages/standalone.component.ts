import { Component, signal } from '@angular/core';

@Component({ standalone: true, template: `
  <div class="page-intro"><div class="eyebrow"><span class="module-icon blue small">▣</span> MÓDULO 00 · ESTRUCTURA</div><h1>Standalone vs NgModules</h1><p class="lead">Dos formas de decirle a Angular qué piezas usa una pantalla.</p></div>
  <section class="learning-guide"><div class="guide-title"><span class="guide-badge">IDEA CLAVE</span><h2>La diferencia está en cómo se conectan las piezas</h2></div><div class="standalone-plain"><p><strong>Standalone:</strong> cada componente importa directamente lo que necesita.</p><p><strong>NgModule:</strong> un módulo agrupa componentes relacionados y declara sus dependencias.</p></div></section>
  <section class="demo-card comparison-card"><div class="demo-header"><div><span class="eyebrow">ELEGÍ UNA PESTAÑA</span><h2>Compará el código</h2></div><span class="binding-tag">{{ selected() === 'standalone' ? 'EL ESTILO DE ESTA APP' : 'ESTILO CLÁSICO' }}</span></div><div class="comparison-tabs"><button [class.selected]="selected() === 'standalone'" (click)="selected.set('standalone')">Standalone</button><button [class.selected]="selected() === 'module'" (click)="selected.set('module')">NgModule</button></div>
  @if (selected() === 'standalone') { <div class="comparison-content"><div class="comparison-explanation"><span class="module-icon blue">▣</span><h3>Standalone</h3><p>El componente declara sus dependencias en su propio <code>imports</code>. No hace falta ponerlo en <code>declarations</code> de un módulo.</p><ul><li>Menos archivos de configuración.</li><li>Dependencias visibles junto al componente.</li><li>Puede cargarse por separado con <code>loadComponent</code>.</li></ul></div><pre class="comparison-code"><span class="code-comment">// Este componente es independiente</span>
&#64;Component(&#123;
  standalone: true,
  imports: [DatePipe],
  template: '...'
&#125;)
export class TarjetaComponent &#123; &#125;

<span class="code-comment">// La ruta puede cargarlo cuando hace falta</span>
&#123; path: 'tarjeta',
  loadComponent: () =&gt;
    import('./tarjeta.component')
&#125;</pre></div> } @else { <div class="comparison-content"><div class="comparison-explanation"><span class="module-icon violet">▤</span><h3>NgModule</h3><p>El módulo agrupa componentes en <code>declarations</code> y centraliza imports y providers. Es común en proyectos anteriores y Angular todavía lo soporta.</p><ul><li>Ayuda a entender código legado.</li><li>Los módulos de funcionalidad pueden cargarse de forma diferida.</li><li>Un componente declarado debe indicar <code>standalone: false</code>.</li></ul></div><pre class="comparison-code"><span class="code-comment">// El componente pertenece al módulo</span>
&#64;Component(&#123;
  standalone: false
&#125;)
export class TarjetaComponent &#123; &#125;

&#64;NgModule(&#123;
  declarations: [TarjetaComponent],
  imports: [BrowserModule]
&#125;)
export class AppModule &#123; &#125;</pre></div> }
  <div class="concept-note"><span>✳</span><p><strong>¿Cuál conviene aprender?</strong> Angular recomienda standalone para código nuevo. NgModules no desaparecieron: vas a encontrarlos en proyectos existentes y podés combinar ambos enfoques.</p></div></section>
  <article class="concept-card expanded-concept"><span class="concept-number">ESTA APP</span><div><h3>Fijate en el componente raíz</h3><p><code>app.component.ts</code> tiene <code>standalone: true</code> y carga <code>RouterLink</code>, <code>RouterOutlet</code> y <code>RouterLinkActive</code> en sus propios imports.</p></div></article>
` })
export class StandaloneComponent {
  readonly selected = signal<'standalone' | 'module'>('standalone');
}
