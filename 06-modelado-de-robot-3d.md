---
layout: default
title: Diseño del brazo robótico
nav_order: 7
---

# Diseño del brazo robótico

<div class="robot-arm-overview">
	<p class="robot-arm-overview__eyebrow">PROYECTO MECATRÓNICO / AUTODESK INVENTOR</p>
	<p class="robot-arm-overview__summary">Un brazo robótico de tres grados de libertad, diseñado para explorar dos formas de fabricación: impresión 3D y corte láser CNC.</p>
	<div class="robot-arm-overview__facts">
		<span><strong>03</strong><small>GDL</small></span>
		<span><strong>02</strong><small>rutas de fabricación</small></span>
		<span><strong>CAD</strong><small>Autodesk Inventor</small></span>
	</div>
</div>

<figure class="robot-arm-hero-image">
	<a href="{{ '/assets/brazo_3d/ensamble_3d.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Ensamble 3D completo" aria-label="Ver el render del brazo ensamblado a tamaño completo">
		<img src="{{ '/assets/brazo_3d/ensamble_3d.png' | relative_url }}" alt="Vista general del brazo robótico ensamblado en Autodesk Inventor" fetchpriority="high">
	</a>
	<figcaption><strong>Ensamble general</strong><span>Vista CAD · 3 grados de libertad</span></figcaption>
</figure>

<nav class="robot-arm-route-nav" aria-label="Rutas de fabricación">
	<a href="#impresion-3d"><span>01</span><strong>Fabricación aditiva</strong><small>Impresión 3D · piezas y ensamble</small><b aria-hidden="true">↘</b></a>
	<a href="#corte-laser"><span>02</span><strong>Corte de lámina</strong><small>CNC láser · diseño en 2D</small><b aria-hidden="true">↘</b></a>
</nav>

## Propósito y criterios del diseño
{: #planteamiento }

El diseño representa un brazo robótico de tres grados de libertad cuyo extremo incorpora una pinza. Su función prevista es posicionar ese extremo mediante articulaciones y sujetar objetos con la pinza. El trabajo presentado se centra en el modelado geométrico de las piezas y el ensamble CAD, además de explorar su adaptación a impresión 3D y corte láser.

Los criterios de diseño son organizar los componentes alrededor de una base, relacionar las articulaciones en una cadena mecánica, disponer de un soporte para el accionamiento y formar una pinza con dos partes. Para pasar del modelo visual a una fabricación repetible se requieren cotas y especificaciones del CAD; por eso esta página describe la configuración y no asigna dimensiones ni materiales que no aparecen en los recursos gráficos.

### Organización funcional

```text
Órdenes de movimiento
        ↓
Accionamiento de las articulaciones
        ↓
Base → Joint1 → Joint2 → extremo con pinza
        ↓
Posicionamiento y sujeción del objeto
```

El esquema expresa la relación mecánica y la función general del brazo; no representa un circuito ni un control electrónico concreto. En los renders se identifican la base, su tapa, un soporte de servo, las piezas `Joint1` y `joint2`, y las dos partes de la pinza.

### Alternativas de fabricación y criterio de selección

| Ruta | Geometría apropiada | Consideración de diseño |
|---|---|---|
| Impresión 3D | Base, soportes, articulaciones y piezas con volumen | Permite integrar formas y alojamientos en una pieza; la orientación y el material influyen en la resistencia. |
| Corte láser CNC | Perfiles planos cortados desde una lámina | Requiere diseñar contornos 2D y uniones compatibles con el espesor y el ancho de corte. |

El modelo tridimensional es la representación de referencia porque permite visualizar el volumen y la relación espacial de las piezas. La impresión 3D es la ruta más directa para reproducir componentes volumétricos; el corte láser se mantiene como una alternativa que exige rediseñar las piezas para construcción en lámina. La selección describe la adecuación geométrica de cada proceso y no afirma que se haya fabricado una versión.

## 1. Brazo modelado en 3D para impresión 3D
{: #impresion-3d }

Esta alternativa comprende el modelado de las piezas y el ensamble del brazo en 3D con Autodesk Inventor, para fabricar sus componentes mediante impresión 3D.

### Componentes representados

Las vistas disponibles muestran siete componentes distintos:

1. **Base:** soporte inferior y referencia de montaje del brazo.
2. **Tapa de la base:** pieza complementaria que cubre o cierra la base.
3. **Soporte del primer servo:** interfaz mecánica representada para alojar el accionamiento.
4. **Joint1:** componente de la primera articulación.
5. **Joint2:** componente de la segunda articulación.
6. **Primera pieza de la pinza:** elemento asociado al extremo `Joint3`.
7. **Segunda pieza de la pinza:** elemento que completa la pinza en el modelo.

Este inventario describe los elementos identificables en los renders y no incluye fijaciones, motores ni componentes comerciales, que no se muestran de forma verificable.

### Imágenes de las piezas

Los siguientes renders muestran las piezas modeladas. Las dimensiones de fabricación se consultarán en los planos.

<div class="robot-arm-gallery-toolbar">
	<p>Explora los componentes <span data-gallery-count>07 piezas</span></p>
	<div class="robot-arm-gallery-filters" role="group" aria-label="Filtrar componentes">
		<button type="button" data-gallery-filter="all" aria-pressed="true">Todas <span>07</span></button>
		<button type="button" data-gallery-filter="base" aria-pressed="false">Base <span>03</span></button>
		<button type="button" data-gallery-filter="articulaciones" aria-pressed="false">Articulaciones <span>02</span></button>
		<button type="button" data-gallery-filter="pinza" aria-pressed="false">Pinza <span>02</span></button>
	</div>
</div>

<div class="robot-arm-gallery">
	<figure data-gallery-category="base">
		<a href="{{ '/assets/brazo_3d/base.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Base del brazo robótico" aria-label="Ampliar la base del brazo robótico">
			<img src="{{ '/assets/brazo_3d/base.png' | relative_url }}" alt="Render de la base del brazo robótico" loading="lazy">
		</a>
		<figcaption>Base (base.png)</figcaption>
	</figure>
	<figure data-gallery-category="base">
		<a href="{{ '/assets/brazo_3d/tapa_base.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Tapa de la base" aria-label="Ampliar la tapa de la base">
			<img src="{{ '/assets/brazo_3d/tapa_base.png' | relative_url }}" alt="Render de la tapa de la base" loading="lazy">
		</a>
		<figcaption>Tapa de la base (tapa_base.png)</figcaption>
	</figure>
	<figure data-gallery-category="base">
		<a href="{{ '/assets/brazo_3d/primerservo.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Soporte del primer servo" aria-label="Ampliar el soporte del primer servo">
			<img src="{{ '/assets/brazo_3d/primerservo.png' | relative_url }}" alt="Render del soporte del primer servo" loading="lazy">
		</a>
		<figcaption>Soporte del primer servo (primerservo.png)</figcaption>
	</figure>
	<figure data-gallery-category="articulaciones">
		<a href="{{ '/assets/brazo_3d/Joint1.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Joint1" aria-label="Ampliar Joint1">
			<img src="{{ '/assets/brazo_3d/Joint1.png' | relative_url }}" alt="Render de la pieza Joint1" loading="lazy">
		</a>
		<figcaption>Joint1 (Joint1.png)</figcaption>
	</figure>
	<figure data-gallery-category="articulaciones">
		<a href="{{ '/assets/brazo_3d/joint2.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Joint2" aria-label="Ampliar Joint2">
			<img src="{{ '/assets/brazo_3d/joint2.png' | relative_url }}" alt="Render de la pieza joint2" loading="lazy">
		</a>
		<figcaption>Joint2 (joint2.png)</figcaption>
	</figure>
	<figure data-gallery-category="pinza">
		<a href="{{ '/assets/brazo_3d/griper1_Joint3.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Primera pieza de la pinza · Joint3" aria-label="Ampliar la primera pieza de la pinza">
			<img src="{{ '/assets/brazo_3d/griper1_Joint3.png' | relative_url }}" alt="Render de la primera pieza de la pinza, correspondiente a Joint3" loading="lazy">
		</a>
		<figcaption>Primera pieza de la pinza (griper1_Joint3.png)</figcaption>
	</figure>
	<figure data-gallery-category="pinza">
		<a href="{{ '/assets/brazo_3d/griper2.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Segunda pieza de la pinza" aria-label="Ampliar la segunda pieza de la pinza">
			<img src="{{ '/assets/brazo_3d/griper2.png' | relative_url }}" alt="Render de la segunda pieza de la pinza" loading="lazy">
		</a>
		<figcaption>Segunda pieza de la pinza (griper2.png)</figcaption>
	</figure>
</div>

### Ensamble y lectura del modelo

El render general presenta las piezas en su disposición de brazo: la base sirve de soporte; el soporte del servo y las articulaciones forman la cadena que alcanza el extremo; y las dos piezas de la pinza aparecen al final. Las vistas individuales permiten observar la geometría de cada componente por separado. En conjunto, ambas representaciones comunican la forma y organización del diseño.

La comprobación dimensional de las uniones, holguras, recorridos y posibles interferencias corresponde al modelo CAD editable. Los renders permiten una revisión visual general, pero no bastan para validar tolerancias ni movimiento real.

## 2. Brazo modelado en 2D para corte láser CNC
{: #corte-laser }

Esta alternativa reunirá los perfiles planos de las piezas del brazo, dibujados en Autodesk Inventor para su fabricación mediante corte láser CNC. Los archivos se prepararán según las unidades y requisitos del equipo o servicio de corte; se indicarán el material y el espesor cuando estén definidos.

### Planos y archivos de corte

Cada pieza se identificará con su nombre y tendrá las dimensiones necesarias para fabricarla. Se incluirán los archivos editables de Inventor y una exportación vectorial compatible con el equipo de corte, por ejemplo DXF o DWG. El PDF servirá como referencia visual y de cotas.

Carpeta propuesta: `assets/files/brazo-2d/corte-laser/`.

Los planos y archivos de corte se incorporarán aquí cuando estén preparados en Inventor.

<div class="robot-arm-process" aria-label="Flujo de fabricación CNC">
	<div><span>01</span><strong>Dibujo 2D</strong><small>Geometría de cada pieza</small></div>
	<div><span>02</span><strong>Preparación CAD</strong><small>Exportación DXF o DWG</small></div>
	<div><span>03</span><strong>Corte CNC</strong><small>Fabricación en lámina</small></div>
</div>

### Vistas del diseño 2D

Se añadirán imágenes de las piezas y de su distribución en el material para mostrar el diseño preparado para corte.

Carpeta propuesta: `assets/img/brazo-2d/corte-laser/`.

### Entregables para corte láser CNC

- [ ] Diseño editable de las piezas en Autodesk Inventor.
- [ ] Archivos de corte vectoriales (DXF o DWG, según el equipo disponible).
- [ ] Planos PDF con cotas, unidades, material y espesor definidos.
- [ ] Imágenes de las piezas y de su distribución para corte.

Los archivos del brazo aún no están en el repositorio. Las carpetas y tablas de esta página organizan los entregables pendientes.

### Preparación, montaje y comprobación mecánica

Para cada ruta de fabricación se registrarán la versión del diseño, el material y espesor, la máquina o servicio, los parámetros relevantes, el archivo enviado y los ajustes realizados. En la ruta láser también se anotarán las tolerancias de ranuras y uniones que deban ajustarse al kerf del equipo.

Como guía de montaje inicial, sujeta a revisión con el ensamble real:

1. Identificar las piezas y comprobarlas frente a sus planos.
2. Montar la base y su tapa, verificando el espacio para fijaciones y accionamiento.
3. Fijar los soportes y unir las articulaciones en el orden definido por el ensamble CAD.
4. Instalar las dos piezas de la pinza y revisar su alineación.
5. Comprobar manualmente el recorrido de cada unión y corregir roces antes de energizar actuadores.

El orden definitivo, las fijaciones y las fotografías paso a paso se completarán cuando se disponga de un prototipo. No hay evidencia de fabricación, ensamblaje físico ni resultados de pruebas mecánicas en los archivos actuales.

### Criterios para pruebas mecánicas

Una vez fabricado el brazo, se registrará para cada articulación su movimiento observado, posibles interferencias, holguras, estabilidad de las uniones y ajustes requeridos. También se probará la apertura y cierre de la pinza si su mecanismo y accionamiento están definidos. Se anotarán el método, las condiciones, el resultado y cualquier limitación; estas pruebas aún no se han realizado o documentado.

## Electrónica, control y operación
{: #control }

La placa descrita en [Creación de PCBs](05-creacion-de-pcbs.md) controla una secuencia de LEDs con un ATtiny45V; la información disponible no establece que sea el controlador del brazo. Para documentar una futura integración se necesitarán el diagrama de bloques de la electrónica del robot, esquema editable, lista de componentes con valores y referencias, diseño de tarjeta y archivos de fabricación, además de evidencias de montaje y verificaciones eléctricas por bloques.

Tampoco se han encontrado en este proyecto el programa de control del brazo, una interfaz de operación ni una lista de dependencias de software. Para completar esa parte se deberá identificar el controlador y sus conexiones, describir el flujo desde las órdenes hasta el movimiento, adjuntar el diagrama de ejecución, explicar las funciones principales y entregar el código correspondiente con instrucciones para compilarlo y ejecutarlo. Los modos de operación, controles y parámetros de acceso se documentarán cuando se definan; no se presuponen en esta página.

## Integración y validación del sistema
{: #validacion }

La evaluación de una versión funcional debe abarcar el montaje físico de actuadores, alimentación, cableado y controlador; la respuesta del hardware a las órdenes del software; y cada modo de operación previsto. La prueba integral deberá mostrar una secuencia de uso completa con evidencia del prototipo y resultados observados. No se dispone todavía de esos registros ni de versiones físicas que puedan compararse.

Cuando existan versiones fabricadas, se compararán bajo criterios comunes: correspondencia con el CAD, tiempo y dificultad de fabricación, ajustes de montaje, estabilidad, movimiento e incidencias. Se mantendrán separados los resultados de la ruta de impresión 3D y los del corte láser, sin atribuirles pruebas que no se hayan efectuado.

## Estado de la documentación y conclusiones
{: #estado }

Actualmente están disponibles renders de siete componentes y una imagen del ensamble CAD. Estos recursos respaldan la definición visual del diseño, pero no sustituyen bocetos iniciales, modelos editables, planos acotados, archivos de fabricación, fotos de prototipos ni resultados de pruebas. Los archivos correspondientes a esas evidencias aún no se encuentran en el repositorio.

Por tanto, puede describirse la propuesta geométrica y organizar sus dos rutas de fabricación, pero todavía no se puede concluir que se hayan cumplido dimensiones, resistencia, desempeño, control o integración. La entrega final deberá vincular cada plano, archivo, fotografía y resultado con la versión del brazo a la que pertenece, y registrar los problemas encontrados, las correcciones aplicadas y las limitaciones observadas.

## Sección anterior

- [Creación de PCBs](05-creacion-de-pcbs.md)
- [Inicio](index.md)