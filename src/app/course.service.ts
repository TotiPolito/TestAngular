import { Injectable, signal } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

export interface Lesson { id: number; title: string; category: string; minutes: number; done: boolean; }

// providedIn:'root' crea una instancia compartida para toda la aplicación.
@Injectable({ providedIn: 'root' })
export class CourseService {
  // El servicio es la fuente de verdad del progreso; los componentes consumen su señal.
  readonly completed = signal(0);
  readonly total = 8;

  getLessons(simulateServerDelay = false): Observable<Lesson[]> {
    // Estos datos ya están en memoria, así que of() puede entregarlos enseguida.
    const lessons = [
      { id: 1, title: 'Arranque standalone', category: 'Fundamentos', minutes: 8, done: true },
      { id: 2, title: 'Señales y estado', category: 'Reactividad', minutes: 12, done: true },
      { id: 3, title: 'Data binding', category: 'Plantillas', minutes: 10, done: false },
      { id: 4, title: 'Rutas y navegación', category: 'Navegación', minutes: 14, done: false },
      { id: 5, title: 'Servicios', category: 'Arquitectura', minutes: 11, done: false },
      { id: 6, title: 'Observables', category: 'RxJS', minutes: 16, done: false },
      { id: 7, title: 'Pipes', category: 'Plantillas', minutes: 9, done: false },
      { id: 8, title: 'Proyecto final', category: 'Práctica', minutes: 20, done: false }
    ];
    // La espera es opcional y solo simula el tiempo de una respuesta de red.
    return simulateServerDelay ? of(lessons).pipe(delay(1200)) : of(lessons);
  }

  completeLesson(): void { this.completed.update((value) => Math.min(value + 1, this.total)); }
}
