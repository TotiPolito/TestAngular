import { Pipe, PipeTransform } from '@angular/core';

// Pipe de apoyo para demostrar que un pipe también puede transformar listas.
@Pipe({ name: 'lessonCount', standalone: true })
export class LessonCountPipe implements PipeTransform {
  transform(value: readonly unknown[] | null | undefined): number { return value?.length ?? 0; }
}
