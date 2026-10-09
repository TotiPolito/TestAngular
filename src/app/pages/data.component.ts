import { Component, inject, signal } from '@angular/core';
import { AsyncPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { shareReplay, tap } from 'rxjs';
import { CourseService } from '../course.service';
import { ReadingTimePipe } from '../reading-time.pipe';

@Component({ standalone: true, imports: [AsyncPipe, TitleCasePipe, UpperCasePipe, ReadingTimePipe], template: `
  <div class="page-intro"><div class="eyebrow"><span class="module-icon green small">◌</span> MÓDULO 03 · DATOS</div><h1>Servicios & RxJS</h1><p class="lead">Compartir datos y representar respuestas que llegan más tarde.</p></div>
  <section class="learning-guide"><div class="guide-title"><span class="guide-badge">IDEA CLAVE</span><h2>¿Para qué sirve un servicio?</h2></div><div class="service-plain-language"><p>La lista vive en <code>CourseService</code>. Un servicio organiza y comparte datos; <strong>no agrega esperas por sí mismo</strong>.</p><p>En una app real, el servicio suele pedir los datos a un servidor. La red tarda un tiempo impredecible y el Observable representa esa respuesta futura. Acá la demora es opcional y solo sirve para practicar ese caso.</p></div></section>
  <div class="lesson-layout"><section class="lesson-main"><article class="demo-card"><div class="demo-header"><div><span class="eyebrow">PROBÁ LAS DOS SITUACIONES</span><h2>Tu lista de lecciones</h2></div><span class="live-label"><i></i> {{ loaded() ? (serverDelay() ? 'RESPUESTA RECIBIDA' : 'DATOS LOCALES') : 'ESPERANDO AL SERVIDOR' }}</span></div><p class="body-copy">Primero ves los datos locales enseguida. Después podés simular que vienen por internet para entender por qué una app real necesita un estado de carga.</p><div class="data-meta"><span>◷ &nbsp; Ejemplo local</span><span>♧ &nbsp; {{ lessonTotal() }} lecciones</span></div><div class="load-controls"><button class="button" (click)="loadLessons(false)">Ver datos locales</button><button class="button simulate" (click)="loadLessons(true)">Simular respuesta del servidor (1,2 s)</button></div>
    @if (lessons$ | async; as lessons) { <div class="lesson-list">@for (lesson of lessons; track lesson.id) { <div class="lesson-row"><span class="lesson-check" [class.checked]="lesson.done">{{ lesson.done ? '✓' : '·' }}</span><div class="lesson-info"><strong>{{ lesson.title | titlecase }}</strong><small>{{ lesson.category | uppercase }} · {{ lesson.minutes | readingTime }}</small></div><span class="lesson-state" [class.complete]="lesson.done">{{ lesson.done ? 'Hecha' : 'Pendiente' }}</span></div> }</div> } @else { <div class="loading-state"><span class="spinner"></span><div><strong>Esperando los datos...</strong><small>Este es el estado de carga de la simulación.</small></div></div> }
    <div class="service-progress"><div><span>Estado compartido por el servicio</span><strong>{{ course.completed() }} / {{ course.total }}</strong></div><div class="progress-track"><span [style.width.%]="(course.completed() / course.total) * 100"></span></div><button class="text-button" (click)="course.completeLesson()">+ Cambiar el estado compartido</button><small class="service-explanation">No modifica la lista: cambia otra señal del servicio. Mirá el mismo contador al volver a Inicio.</small></div></article></section>
    <aside class="code-card"><div class="code-head"><span>VISTA EN VIVO · Observable</span><span class="live-label"><i></i> {{ loaded() ? (serverDelay() ? 'RESPUESTA' : 'LOCAL') : 'ESPERANDO' }}</span></div><pre><span class="code-comment">// El servicio es dueño de la lista</span>
&#64;<span class="code-yellow">Injectable</span>(&#123; providedIn: <span class="code-green">'root'</span> &#125;)
<span class="code-purple">export class</span> CourseService &#123;
  getLessons() &#123; <span class="code-purple">return</span> of(data); &#125;
&#125;

<span class="code-comment">// Por internet, el patrón sería:</span>
<span class="code-purple">return</span> this.http.get&lt;Lesson[]&gt;(<span class="code-green">'/api/lecciones'</span>);
<span class="code-comment">// async pinta cuando la respuesta llega</span>
{{ '{{' }} lessons$ | async {{ '}}' }}
<span class="code-green">// ahora: {{ loaded() ? lessonTotal() + ' lecciones; ' + (serverDelay() ? 'demora simulada' : 'al instante') : 'esperando respuesta' }}</span>
<span class="code-comment">// estado compartido:</span>
completed = {{ course.completed() }};</pre><div class="code-note"><span>✳</span> El servicio organiza los datos. La demora no es necesaria: acá es un botón opcional para practicar.</div></aside></div>
` })
export class DataComponent {
  readonly course = inject(CourseService);
  readonly loaded = signal(false);
  readonly lessonTotal = signal(0);
  readonly serverDelay = signal(false);
  lessons$ = this.createLessons(false);
  // Cambiar el Observable hace que AsyncPipe deje el anterior y siga el nuevo.
  loadLessons(simulateDelay: boolean): void {
    this.loaded.set(false);
    this.serverDelay.set(simulateDelay);
    this.lessons$ = this.createLessons(simulateDelay);
  }

  private createLessons(simulateDelay: boolean) {
    return this.course.getLessons(simulateDelay).pipe(
      tap((lessons) => { this.loaded.set(true); this.lessonTotal.set(lessons.length); }),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}
