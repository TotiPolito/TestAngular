import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ standalone: true, imports: [RouterLink], template: `
  <div class="page-intro"><div class="eyebrow"><span class="module-icon coral small">◈</span> MÓDULO 00 · FUNDAMENTOS</div><h1>¿Qué es Angular?</h1><p class="lead">El conjunto de herramientas que conecta la interfaz, los datos y la navegación.</p></div>
  <section class="angular-definition"><div class="definition-mark">A</div><div><span class="eyebrow">EN UNA FRASE</span><p><strong>Angular es un framework de TypeScript para construir aplicaciones web.</strong> Te da una estructura y herramientas listas para crear pantallas interactivas: componentes, rutas, servicios, formularios y más.</p><small>En esta app usamos Angular 19 con componentes standalone.</small></div></section>
  <section class="learning-guide"><div class="guide-title"><span class="guide-badge">IMAGINÁLO ASÍ</span><h2>Angular coordina estas piezas</h2></div><div class="angular-map"><a routerLink="/data-binding"><b>1</b><strong>Componente</strong><small>guarda estado y acciones</small></a><span>→</span><div><b>2</b><strong>Plantilla</strong><small>muestra datos y escucha eventos</small></div><span>↔</span><a routerLink="/rutas"><b>3</b><strong>Router</strong><small>elige qué pantalla mostrar</small></a></div><div class="angular-map secondary-map"><a routerLink="/servicios-observables"><b>4</b><strong>Servicio</strong><small>comparte lógica y datos</small></a><span>→</span><a routerLink="/http-client"><b>5</b><strong>HttpClient</strong><small>pide datos a una API</small></a><span>→</span><a routerLink="/pipes"><b>6</b><strong>Pipe</strong><small>formatea lo que se ve</small></a></div></section>
  <div class="lesson-layout"><section class="lesson-main"><article class="concept-card expanded-concept"><span class="concept-number">SPA</span><div><h3>¿Qué significa que sea una SPA?</h3><p>Al entrar, el navegador carga la base de la aplicación. Después Angular cambia la vista dentro de esa misma página cuando navegás; no vuelve a descargar el sitio entero cada vez. Probalo: abrí <a routerLink="/senales">Señales</a> y mirá que cambia la ruta y el contenido.</p></div></article><article class="concept-card expanded-concept"><span class="concept-number">TIPO</span><div><h3>Framework y biblioteca no son lo mismo</h3><p>Una biblioteca resuelve una tarea puntual y vos decidís cuándo llamarla. Angular propone una estructura más completa: define cómo conectar componentes, navegación, dependencias y servicios.</p></div></article></section>
    <aside class="code-card"><div class="code-head"><span>MAPA MENTAL DE ESTA APP</span><span class="code-dots">● ● ●</span></div><pre><span class="code-comment">// El usuario navega a una URL</span>
/rutas

<span class="code-comment">// Router elige una página</span>
Routes → RoutesComponent

<span class="code-comment">// La página usa un servicio</span>
Component → CourseService

<span class="code-comment">// La plantilla muestra datos</span>
{{ '{{' }} course.completed() {{ '}}' }}</pre><div class="code-note"><span>✳</span> No tenés que memorizar todas las piezas: seguí el recorrido de una acción.</div></aside></div>
  <div class="next-lesson"><span>¿Seguimos?</span><a routerLink="/standalone-vs-modules">Ver Standalone y NgModules <b>→</b></a></div>
` })
export class AngularComponent {}
