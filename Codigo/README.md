# Angular Lab

Mini aplicación para practicar Angular 19 standalone: señales, data binding, rutas, servicios, Observables y pipes. El código incluye comentarios en los puntos donde se aplica cada concepto.

## Ejecutar en localhost

Con una instalación habitual de Node.js y npm, desde esta carpeta:

```bash
npm install
npm start
```

Abre `http://localhost:4200`. La primera instalación requiere conexión a internet para descargar Angular y sus dependencias.

En el entorno actual también puedes arrancarla en PowerShell con `./run-local.ps1` (usa el pnpm incluido en Codex). Para detener el servidor, pulsa `Ctrl+C` en esa terminal.

## Mapa para estudiar

- `src/app/app.routes.ts`: rutas y navegación.
- `src/app/pages/signals.component.ts`: `signal`, `computed`, `set` y `update`.
- `src/app/pages/binding.component.ts`: interpolación, property, event y two-way binding con `ngModel`.
- `src/app/course.service.ts`: servicio singleton, estado compartido y Observable de ejemplo.
- `src/app/pages/data.component.ts`: consumo del servicio y `async` pipe.
- `src/app/reading-time.pipe.ts`: pipe personalizado.
- `src/app/pages/pipes.component.ts`: pipes integrados y personalizado.

La lista de lecciones usa `of(...).pipe(delay(...))` para simular una respuesta asíncrona sin depender de una API externa.
