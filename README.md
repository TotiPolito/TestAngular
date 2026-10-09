# Angular Lab

Mini laboratorio interactivo para practicar Angular 19. Cada lección combina una acción en pantalla, una explicación y fragmentos comentados del código que la produce.

## Requisitos

- Node.js (versión compatible con Angular 19).
- npm, incluido con Node.js.
- Conexión a internet la primera vez para instalar dependencias. La lección de HttpClient también consulta una API pública.

## Iniciar la web

1. Descargá o cloná este repositorio.
2. Abrí una terminal en la carpeta del proyecto (donde está `package.json`).
3. Instalá las dependencias y arrancá el servidor:

```bash
npm install
npm start
```

4. Abrí [http://localhost:4200](http://localhost:4200) en el navegador. Para apagar el servidor, volvé a la terminal y presioná `Ctrl+C`.

## Recorrido sugerido

1. **¿Qué es Angular?** — piezas principales y navegación SPA.
2. **Standalone vs NgModules** — dos formas de organizar dependencias.
3. **Rutas** — enlaces, rutas con parámetros y navegación sin recargar.
4. **Señales** — estado reactivo con `signal` y `computed`.
5. **Data binding** — interpolación, propiedades, eventos y `ngModel`.
6. **Servicios y Observables** — lógica compartida y flujo de datos.
7. **HttpClient** — petición GET real, estado de carga y errores.
8. **Pipes** — formato para mostrar valores en plantillas.

## Dónde mirar el código

- `src/app/app.routes.ts`: rutas y carga diferida con `loadComponent`.
- `src/app/pages/angular.component.ts`: mapa de conceptos de Angular.
- `src/app/pages/standalone.component.ts`: comparación interactiva de los estilos.
- `src/app/pages/routes.component.ts` y `route-example.component.ts`: navegación y parámetros.
- `src/app/pages/signals.component.ts`: `signal`, `computed`, `set` y `update`.
- `src/app/pages/binding.component.ts`: tipos de data binding.
- `src/app/course.service.ts` y `src/app/pages/data.component.ts`: servicio, estado y Observable.
- `src/app/posts.service.ts` y `src/app/pages/http-client.component.ts`: HttpClient y petición GET a JSONPlaceholder.
- `src/app/reading-time.pipe.ts` y `src/app/pages/pipes.component.ts`: pipe personalizado y pipes integrados.

La lección de servicios tiene una espera opcional para mostrar cómo se representa una respuesta asíncrona. HttpClient, en cambio, hace una petición real a internet solo cuando tocás el botón; si una lista ya está en memoria, no necesita esperar ni hacer una petición.
