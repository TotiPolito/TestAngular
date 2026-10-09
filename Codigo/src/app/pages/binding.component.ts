import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({ standalone: true, imports: [FormsModule], template: `
  <div class="page-intro"><div class="eyebrow"><span class="module-icon blue small">⟷</span> MÓDULO 02 · PLANTILLAS</div><h1>Data binding</h1><p class="lead">El puente entre tu componente y la plantilla.</p></div>
  <section class="learning-guide"><div class="guide-title"><span class="guide-badge">PRÁCTICA</span><h2>Seguí tu nombre</h2></div><div class="guide-steps"><div><b>1</b><p><strong>Cambiá el texto</strong><br>Escribí cualquier nombre en el campo.</p></div><div><b>2</b><p><strong>Mirá la tarjeta y el código</strong><br>Los dos muestran el mismo nombre.</p></div><div><b>3</b><p><strong>Hacé clic en Saludar</strong><br>Eso es un evento: una acción que ejecuta una función.</p></div></div></section>
  <div class="lesson-layout"><section class="lesson-main"><article class="demo-card"><div class="demo-header"><div><span class="eyebrow">PASO 1 · ESCRIBÍ EN EL CAMPO</span><h2>Tu tarjeta en tiempo real</h2></div><span class="live-label"><i></i> CÓDIGO EN VIVO</span></div><p class="body-copy">Escribí otro nombre. Mirá cómo cambia el saludo, el avatar y el panel de código sin tocar ningún botón.</p><label class="field-label" for="name">¿Cómo te llamas?</label><input id="name" class="text-input" [(ngModel)]="name" placeholder="Escribe tu nombre..." />
    <div class="preview-card"><div class="preview-top"><div class="preview-avatar">{{ name ? name.charAt(0).toUpperCase() : '?' }}</div><span class="preview-label">VISTA PREVIA</span></div><h3>¡Hola, {{ name || 'explorador' }}!</h3><p>Estás aprendiendo Angular paso a paso.</p><button class="button preview-button" [disabled]="!name" (click)="sayHello()">{{ name ? 'Saludar a ' + name : 'Escribe tu nombre primero' }}</button>@if (greeting()) { <p class="greeting">{{ greeting() }}</p> }</div>
    <div class="binding-list"><div><span class="binding-symbol">{{ '{{ }}' }}</span><span><strong>Interpolación</strong><small>El nombre aparece en el texto.</small></span></div><div><span class="binding-symbol">[ ]</span><span><strong>Property binding</strong><small>El botón se desactiva si no hay nombre.</small></span></div><div><span class="binding-symbol">( )</span><span><strong>Event binding</strong><small>El click dispara una acción.</small></span></div><div><span class="binding-symbol">[( )]</span><span><strong>Two-way binding</strong><small>Input y componente se mantienen en sync.</small></span></div></div></article></section>
    <aside class="code-card"><div class="code-head"><span>VISTA EN VIVO · binding</span><span class="live-label"><i></i> {{ name ? 'name = ' + name : 'VACÍO' }}</span></div><pre><span class="code-comment">&lt;!-- Tu texto queda guardado acá --&gt;</span>
name = <span class="code-green">'{{ name }}'</span>;

&lt;input [(<span class="code-purple">ngModel</span>)]=<span class="code-green">"name"</span> /&gt;

<span class="code-comment">&lt;!-- Angular reemplaza name por su valor --&gt;</span>
&lt;h3&gt;Hola, {{ '{{' }} name || 'explorador' {{ '}}' }}&lt;/h3&gt;
<span class="code-green">Vista ahora: ¡Hola, {{ name || 'explorador' }}!</span>

<span class="code-comment">&lt;!-- Propiedad + evento --&gt;</span>
&lt;button [<span class="code-purple">disabled</span>]=<span class="code-green">"!name"</span>
        (<span class="code-purple">click</span>)=<span class="code-green">"sayHello()"</span>&gt;
  {{ name ? 'Saludar a ' + name : 'Escribe tu nombre primero' }}
&lt;/button&gt;
<span class="code-comment">// el click muestra: {{ greeting() || '(todavía no hiciste click)' }}</span></pre><div class="code-note"><span>✳</span> ngModel copia el texto a name; la interpolación usa ese mismo name para pintar el saludo.</div></aside></div>
` })
export class BindingComponent {
  // ngModel necesita una propiedad que pueda leer y actualizar.
  name = 'Alex';
  readonly greeting = signal('');
  sayHello(): void { this.greeting.set(`¡Qué bueno verte, ${this.name}!`); }
}
