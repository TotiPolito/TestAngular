import { Component, inject, signal } from '@angular/core';
import { PostsService, Post } from '../posts.service';
import { finalize } from 'rxjs';

@Component({
  standalone: true,
  template: `
    <section class="page-intro"><div class="eyebrow">07 / PETICIONES HTTP</div><h1>HttpClient: pedir datos a una API</h1><p>Esta lista no está escrita dentro de la app: al tocar el botón, Angular hace una petición GET a un servidor público y muestra la respuesta.</p></section>
    <section class="learning-guide">
      <div class="guide-title"><span class="guide-badge">PROBÁ</span><h2>Hacé una petición de verdad</h2></div>
      <p>La solicitud empieza cuando tocás el botón. El indicador representa el tiempo real de red; no agregamos una espera artificial.</p>
      <button class="button primary" type="button" (click)="loadPosts()" [disabled]="loading()">{{ loading() ? 'Consultando API…' : 'GET: traer 5 publicaciones' }}</button>
      @if (error()) { <p class="http-error">{{ error() }}</p> }
      @if (posts(); as list) { <div class="http-results"><p class="muted">Respuesta recibida: {{ list.length }} publicaciones.</p>
        @for (post of list; track post.id) { <article class="http-post"><span>#{{ post.id }} · usuario {{ post.userId }}</span><h3>{{ post.title }}</h3><p>{{ post.body }}</p></article> }
      </div> }
    </section>
    <section class="http-columns">
      <article class="learning-guide"><div class="guide-title"><span class="guide-badge">RECORRIDO</span><h2>¿Qué piezas intervienen?</h2></div><ol><li>El componente llama a <code>PostsService.getPosts()</code>.</li><li>El servicio usa <code>HttpClient.get()</code> con la URL.</li><li>La API responde con JSON; <code>Post[]</code> describe esos datos.</li><li>La suscripción recibe la respuesta y las señales actualizan la plantilla.</li></ol><p class="concept-note">El servicio no agrega una espera para simular una lista ya disponible: aquí consultamos un servidor externo. Si los datos ya están en memoria, no hace falta una petición HTTP.</p></article>
      <article class="learning-guide"><div class="guide-title"><span class="guide-badge">CÓDIGO</span><h2>El servicio</h2></div><pre class="topic-code"><code>// GET devuelve Observable&lt;Post[]&gt;
getPosts() {{ '{' }}
  return this.http.get&lt;Post[]&gt;(url, {{ '{' }}
    params: {{ '{' }} _limit: 5 {{ '}' }}
  {{ '}' }});
{{ '}' }}

http.post(url, nuevoPost);
http.put(url, postCompleto);
http.patch(url, cambios);
http.delete(url);</code></pre><p>La demo solo ejecuta GET. Los verbos de escritura quedan como referencia y no modifican ningún dato.</p></article>
    </section>
    <section class="learning-guide"><div class="guide-title"><span class="guide-badge">CONFIGURACIÓN</span><h2>¿De dónde sale HttpClient?</h2></div><p>En <code>main.ts</code> la app registra el cliente con <code>provideHttpClient()</code>. El servicio lo recibe con <code>inject(HttpClient)</code>.</p><pre class="topic-code"><code>provideHttpClient() // main.ts

private readonly http = inject(HttpClient); // servicio</code></pre><p class="muted">Esta práctica necesita conexión a internet para llegar a JSONPlaceholder.</p></section>
  `
})
export class HttpClientComponent {
  private readonly service = inject(PostsService);
  readonly loading = signal(false);
  readonly posts = signal<Post[] | null>(null);
  readonly error = signal('');

  loadPosts(): void {
    this.loading.set(true);
    this.error.set('');
    this.posts.set(null);
    // subscribe inicia la petición HTTP; next/error/finalize representan su ciclo de vida.
    // subscribe inicia la petición; finalize apaga el estado de carga aunque falle.
    this.service.getPosts().pipe(finalize(() => this.loading.set(false))).subscribe({
      next: posts => this.posts.set(posts),
      error: () => this.error.set('No se pudo conectar. Revisá tu conexión y volvé a intentar.')
    });
  }
}
