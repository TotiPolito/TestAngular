import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// El servicio concentra la URL y el tipo de respuesta para reutilizar la petición.
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class PostsService {
  private readonly http = inject(HttpClient);

  // HttpClient devuelve un Observable. La petición se ejecuta al suscribirse.
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
      params: { _limit: 5 }
    });
  }
}
