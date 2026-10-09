import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, JsonPipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ReadingTimePipe } from '../reading-time.pipe';
import { FormsModule } from '@angular/forms';

@Component({ standalone: true, imports: [CurrencyPipe, DatePipe, JsonPipe, PercentPipe, TitleCasePipe, UpperCasePipe, ReadingTimePipe, FormsModule], template: `
  <div class="page-intro"><div class="eyebrow"><span class="module-icon violet small">⇢</span> MÓDULO 04 · FORMATO</div><h1>Pipes</h1><p class="lead">Mismo dato, presentación más clara. Todo desde la plantilla.</p></div>
  <section class="learning-guide"><div class="guide-title"><span class="guide-badge">PRÁCTICA</span><h2>Cambiá el dato, mirá el resultado</h2></div><div class="guide-steps"><div><b>1</b><p><strong>Escribí una frase abajo</strong><br>Probá una palabra en minúsculas.</p></div><div><b>2</b><p><strong>Mirá el código y el resultado</strong><br>El pipe uppercase transforma el texto.</p></div><div><b>3</b><p><strong>El original se conserva</strong><br>Solo cambia cómo se muestra.</p></div></div></section>
  <section class="demo-card pipes-card"><div class="demo-header"><div><span class="eyebrow">PASO 1 · EDITÁ EL TEXTO</span><h2>Una caja de herramientas</h2></div><span class="live-label"><i></i> CÓDIGO EN VIVO</span></div><p class="body-copy">Un pipe transforma lo que se muestra en pantalla. No modifica el valor original.</p><label class="field-label" for="pipe-text">Texto original</label><input id="pipe-text" class="text-input" [(ngModel)]="pipeText" />
  <div class="live-transform"><div><span>VALOR ORIGINAL</span><strong class="original-value">{{ pipeText }}</strong></div><b>|</b><div><span>PIPE APLICADO EN EL CÓDIGO</span><code>{{ '{{' }} pipeText | uppercase {{ '}}' }}</code></div><b>→</b><div><span>LO QUE VE EL USUARIO</span><strong>{{ pipeText | uppercase }}</strong></div></div><p class="pipe-plain-language"><strong>Leé el símbolo | como “pasá este valor por”.</strong> Angular recibe <code>pipeText</code>, lo pasa por <code>uppercase</code> y muestra el resultado. El texto original sigue igual. En esta pantalla <code>| uppercase</code> es un pipe de plantilla; el <code>.pipe()</code> de RxJS sirve para componer operaciones de Observables y es otro uso de la palabra.</p><div class="pipe-grid">
    <div class="pipe-item"><span class="pipe-type">TEXTO</span><code>uppercase</code><div class="pipe-result">{{ pipeText | uppercase }}</div><small>Sirve para mostrar texto en mayúsculas.</small></div>
    <div class="pipe-item"><span class="pipe-type">TEXTO</span><code>titlecase</code><div class="pipe-result">{{ 'aprende haciendo' | titlecase }}</div><small>Convierte palabras a formato de título.</small></div>
    <div class="pipe-item"><span class="pipe-type">MONEDA</span><code>currency:'ARS'</code><div class="pipe-result">{{ 24500 | currency:'ARS':'symbol-narrow':'1.0-0' }}</div><small>Formatea un precio en pesos argentinos.</small></div>
    <div class="pipe-item"><span class="pipe-type">PORCENTAJE</span><code>percent:'1.0-0'</code><div class="pipe-result">{{ 0.72 | percent:'1.0-0' }}</div><small>0,72 se presenta como 72 %.</small></div>
    <div class="pipe-item"><span class="pipe-type">FECHA</span><code>date:'longDate'</code><div class="pipe-result">{{ today | date:'longDate':'':'es-AR' }}</div><small>Convierte una fecha en texto legible.</small></div>
    <div class="pipe-item"><span class="pipe-type">PERSONALIZADO</span><code>readingTime</code><div class="pipe-result">{{ 12 | readingTime }}</div><small>12 se convierte en “12 minutos”.</small></div>
  </div><div class="custom-pipe-note"><span>✳</span><span><strong>Tu turno:</strong> abre <code>reading-time.pipe.ts</code> y cambia el texto que devuelve el transform.</span></div><details class="json-example"><summary>También existe <code>json</code> para inspeccionar objetos</summary><pre>{{ sample | json }}</pre></details></section>
` })
export class PipesComponent {
  pipeText = 'angular en acción';
  readonly today = new Date();
  readonly sample = { tema: 'Pipes', aprendido: true, minutos: 12 };
}
