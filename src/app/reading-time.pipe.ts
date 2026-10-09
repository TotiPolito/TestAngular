import { Pipe, PipeTransform } from '@angular/core';

// Pipe propio: transforma minutos en texto legible y se puede reutilizar en cualquier plantilla.
@Pipe({ name: 'readingTime', standalone: true })
export class ReadingTimePipe implements PipeTransform {
  transform(minutes: number): string {
    return minutes === 1 ? '1 minuto' : `${minutes} minutos`;
  }
}
