import { Component, computed, signal } from '@angular/core';

@Component({ standalone: true, template: `
  <div class="page-intro"><div class="eyebrow"><span class="module-icon coral small">◉</span> MÓDULO 01 · REACTIVIDAD</div><h1>Señales</h1><p class="lead">Un estado pequeño, una interfaz que responde al instante.</p></div>
  <section class="learning-guide"><div class="guide-title"><span class="guide-badge">PRÁCTICA</span><h2>Seguí el cambio</h2></div><div class="guide-steps"><div><b>1</b><p><strong>Tocá +</strong><br>El contador aumenta de uno en uno.</p></div><div><b>2</b><p><strong>Mirá el código de la derecha</strong><br>El valor de signal y el cálculo se actualizan.</p></div><div><b>3</b><p><strong>La idea clave</strong><br>Una señal avisa a Angular cuando cambia.</p></div></div></section>
  <div class="lesson-layout"><section class="lesson-main"><article class="demo-card signal-demo"><div class="demo-header"><div><span class="eyebrow">PASO 1 · HACÉ CLIC</span><h2>Contador reactivo</h2></div><span class="live-label"><i></i> CÓDIGO EN VIVO</span></div><p class="body-copy">Tocá + varias veces. Mirá el contador y el panel de código: el número actual cambia en ambos lugares.</p><div class="counter-display"><button class="circle-button" (click)="decrement()" aria-label="Restar uno">−</button><div class="counter-value"><strong>{{ count() }}</strong><span>valor actual</span></div><button class="circle-button plus" (click)="increment()" aria-label="Sumar uno">+</button></div><div class="signal-meter"><div class="meter-label"><span>Intensidad calculada</span><strong>{{ level() }}%</strong></div><div class="progress-track"><span [style.width.%]="level()"></span></div><p class="signal-message">{{ message() }}</p></div><button class="text-button" (click)="reset()">↺ Reiniciar contador</button></article>
    <article class="concept-card"><span class="concept-number">01</span><div><h3>¿Qué está pasando?</h3><p><code>signal(0)</code> crea estado reactivo. En la plantilla se lee con <code>count()</code>; <code>update()</code> cambia el valor y Angular actualiza solo lo que depende de él.</p></div></article></section>
    <aside class="code-card"><div class="code-head"><span>El mismo estado que ves a la izquierda</span><span class="live-label"><i></i> VIVO</span></div><pre><span [class.code-active]="lastAction() === 'reset'"><span class="code-comment">// signal guarda el valor actual</span>
count = signal(<span class="code-green">{{ count() }}</span>);</span>

<span class="code-comment">// computed se recalcula cuando count cambia</span>
level = computed(() =&gt; <span class="code-green">{{ level() }}</span>); <span class="code-comment">// {{ count() }} × 10, máximo 100</span>

<span [class.code-active]="lastAction() === 'increment'">// Al tocar +: count.update(n =&gt; n + 1);</span>
<span [class.code-active]="lastAction() === 'decrement'">// Al tocar −: count.update(n =&gt; n - 1);</span>

<span class="code-comment">// La plantilla muestra el valor</span>
{{ '{{' }} count() {{ '}}' }} <span class="code-comment">// ahora muestra {{ count() }}</span></pre><div class="code-note"><span>✳</span> La señal guarda {{ count() }}. computed calcula {{ level() }}. Ambas expresiones dependen del mismo count.</div></aside></div>
` })
export class SignalsComponent {
  // signal guarda estado reactivo local al componente.
  readonly count = signal(0);
  readonly lastAction = signal<'increment' | 'decrement' | 'reset'>('reset');
  // computed deriva un valor; no hace falta sincronizarlo manualmente.
  readonly level = computed(() => Math.min(this.count() * 10, 100));
  readonly message = computed(() => this.count() === 0 ? 'Todo empieza con un primer paso.' : this.count() < 5 ? '¡Bien! Tu señal está creciendo.' : this.count() < 10 ? '¡Vas con todo, seguí así!' : '¡Señal al máximo! Ya dominas lo básico.');
  increment(): void { this.lastAction.set('increment'); this.count.update((value) => value + 1); }
  decrement(): void { this.lastAction.set('decrement'); this.count.update((value) => Math.max(0, value - 1)); }
  reset(): void { this.lastAction.set('reset'); this.count.set(0); }
}
