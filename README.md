# Angular Lab

Mini laboratorio interactivo para practicar Angular con ejemplos que podés probar y ver reflejados en el código.

Incluye **señales**, **data binding**, **rutas**, **servicios**, **Observables** y **pipes**, con explicaciones en español y fragmentos de código comentados.

## Empezar

Necesitás [Node.js](https://nodejs.org/) instalado. Al instalarlo también tendrás `npm`.

```bash
git clone https://github.com/TotiPolito/TestAngular.git
cd TestAngular
npm install
npm start
```

La aplicación se abre en [http://localhost:4200](http://localhost:4200). Si el navegador no se abre automáticamente, pegá esa dirección. Para detener el servidor, volvé a la terminal y presioná `Ctrl+C`.

También podés descargar el repo como ZIP desde GitHub. Descomprimilo, abrí una terminal dentro de la carpeta `TestAngular` y ejecutá `npm install` y `npm start`.

## Qué vas a encontrar

- **Señales:** cambiá el contador y observá cómo se actualizan el estado y sus valores derivados.
- **Data binding:** editá un nombre y seguí cómo llega desde el campo a la vista.
- **Rutas:** navegá entre módulos con la barra superior.
- **Servicios y Observables:** la lista local aparece al instante. El botón de simulación agrega una demora opcional para mostrar cómo se ve una respuesta de servidor; el servicio no agrega esperas por sí mismo.
- **Pipes:** cambiá un texto y compará el valor original con el resultado formateado.

## Comandos

```bash
npm start       # inicia el servidor de desarrollo
npm run build   # compila la aplicación para producción
```

## Recorrido del código

| Archivo | Qué muestra |
| --- | --- |
| `src/app/app.routes.ts` | Rutas y páginas de la aplicación |
| `src/app/pages/signals.component.ts` | `signal`, `computed`, `set` y `update` |
| `src/app/pages/binding.component.ts` | Interpolación, property, event y two-way binding |
| `src/app/course.service.ts` | Servicio compartido, datos y Observable |
| `src/app/pages/data.component.ts` | Consumo del servicio y `async` pipe |
| `src/app/pages/pipes.component.ts` | Pipes integrados y personalizado |
| `src/app/reading-time.pipe.ts` | Implementación del pipe `readingTime` |

## Tecnologías

Angular 19 · TypeScript · RxJS · SCSS · componentes standalone
