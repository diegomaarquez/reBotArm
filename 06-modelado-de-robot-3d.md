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

<nav class="site-section-navigation" aria-label="Contenido del proyecto">
	<a href="#planteamiento">Diseño</a>
	<a href="#impresion-3d">Mecánica</a>
	<a href="#electronica">Control electrónico</a>
	<a href="#programacion">MicroPython</a>
	<a href="#integracion">Verificación</a>
	<a href="#conclusion">Conclusiones</a>
</nav>

## Propósito y criterios del diseño
{: #planteamiento }

El diseño representa un brazo robótico de tres grados de libertad cuyo extremo incorpora una pinza. Su función prevista es posicionar ese extremo mediante articulaciones y sujetar objetos con la pinza. El material disponible documenta el modelado geométrico y las piezas mediante renders CAD; las imágenes no son registros de un prototipo físico.

La organización responde a cuatro requisitos funcionales visibles en el diseño: sostener el conjunto sobre una base, enlazar las articulaciones, disponer de un soporte para el accionamiento y terminar en una pinza de dos partes. La propuesta organiza los componentes alrededor de una base, enlaza las articulaciones mediante sus soportes y sitúa una pinza de dos partes en el extremo.

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

El modelo tridimensional es la representación de referencia porque permite visualizar el volumen y la relación espacial de las piezas. Para reproducir las formas que se muestran, la impresión 3D es la alternativa más directa; el corte láser requiere convertir los componentes en perfiles y placas. La elección es una comparación técnica de compatibilidad geométrica, no un reporte de fabricación.

### Organización del sistema
{: #arquitectura }

```text
                   SISTEMA MECÁNICO REPRESENTADO
                                  │
                 ┌────────────────┴───────────────┐
                 │                                │
        Estructura y soporte                Cadena articulada
        Base + tapa + soporte       Joint1 → Joint2 → extremo
                                                    │
                                              Pinza de 2 partes

Órdenes → accionamiento → articulaciones → posicionamiento / sujeción
```

El esquema identifica la relación mecánica. No define controlador, alimentación, cableado ni lazo de control del brazo: esos elementos no aparecen asociados al ensamble en los recursos disponibles.

## Componentes y manufactura mecánica
{: #impresion-3d }

Las siete vistas de componente y el render general permiten describir las piezas y su orden funcional.

| Elemento | Cantidad representada | Función en el conjunto |
|---|---:|---|
| Base (`base.png`) | 1 | Apoyo del brazo |
| Tapa (`tapa_base.png`) | 1 | Cierre de la base |
| Soporte (`primerservo.png`) | 1 | Montaje del primer servo |
| Joint1 (`Joint1.png`) | 1 | Componente articulado |
| Joint2 (`joint2.png`) | 1 | Componente articulado |
| Pieza de pinza (`griper1_Joint3.png`) | 1 | Primera mordaza del extremo |
| Pieza de pinza (`griper2.png`) | 1 | Segunda mordaza del extremo |

El conjunto se describe como un brazo de tres grados de libertad. Las piezas se disponen desde la base, a través de las articulaciones, hasta el extremo con pinza.

### Vistas de componentes

Los siguientes renders muestran la forma de cada pieza por separado y complementan la vista general del ensamble.

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

### Lectura del ensamble y secuencia de montaje

El render general presenta las piezas en su disposición de brazo: la base sirve de soporte; el soporte del servo y las articulaciones forman la cadena que alcanza el extremo; y las dos piezas de la pinza aparecen al final. Las vistas individuales permiten observar la geometría de cada componente por separado. En conjunto, ambas representaciones comunican la forma y organización del diseño.

La secuencia mecánica que comunica el render es: (1) disponer la base y su tapa; (2) montar el soporte de accionamiento; (3) enlazar las articulaciones; y (4) colocar las dos partes de la pinza en el extremo. Esta es una descripción del orden funcional visible, no una instrucción de montaje con tornillería o ajustes específicos. La comprobación de holguras, cotas, recorridos e interferencias requiere el modelo CAD editable; un render no valida tolerancias ni movimiento real.

### Preparación de las dos rutas de fabricación
{: #corte-laser }

La primera ruta representada es la impresión 3D de las piezas volumétricas. Su secuencia de fabricación es preparar el modelo tridimensional, orientar cada pieza para la impresión, producir las piezas y comprobar su ajuste durante el ensamblaje. Los renders muestran la geometría objetivo, pero no identifican impresora, material, parámetros, archivos de laminado ni ajustes de fabricación.

La segunda posibilidad es el corte láser CNC. Para ella se traducirían las piezas compatibles a contornos planos, se anidarían sobre una lámina y se dimensionarían las uniones según el espesor y el ancho de corte. La base, la tapa y la pinza requerirían rediseño o composición mediante varias placas. No se presenta como una segunda versión física: es una alternativa de proceso derivada del diseño.

<div class="robot-arm-process" aria-label="Flujo de fabricación CNC">
	<div><span>01</span><strong>Definir perfiles</strong><small>Seleccionar vistas planas de cada pieza</small></div>
	<div><span>02</span><strong>Preparar el corte</strong><small>Distribuir contornos y compensar el ancho de corte</small></div>
	<div><span>03</span><strong>Ensamblar placas</strong><small>Unir perfiles para reconstruir la estructura</small></div>
</div>

La documentación gráfica de esta página consiste en los siete renders individuales y un render del ensamble. No hay planos acotados, modelos editables ni archivos de fabricación en los recursos publicados; por ello, las imágenes no se presentan como archivos aptos para reproducir piezas con dimensiones verificables.

### Criterios de evaluación mecánica
{: #revision }

La revisión del diseño se organiza en verificaciones directamente relacionadas con la geometría:

| Aspecto | Comprobación de diseño |
|---|---|
| Unión | Las superficies y puntos de montaje de piezas consecutivas deben coincidir. |
| Movimiento | Cada articulación debe tener libertad para su giro previsto y limitar movimientos no deseados. |
| Interferencias | El recorrido de las piezas no debe atravesar la base, los soportes ni otros eslabones. |
| Accionamiento | El soporte representado debe alojar el actuador y permitir transmitir movimiento a la articulación. |
| Pinza | Las dos piezas del extremo deben aproximarse y separarse para sujetar un objeto. |
| Fabricabilidad | El espesor, orientación, uniones y geometría deben ser compatibles con el proceso elegido. |

Estos criterios sirven para interpretar el diseño. El proyecto publicado no incluye fotografías de ensamblajes físicos ni resultados de pruebas mecánicas; por lo tanto, no se atribuyen al brazo ensayos de carga, alcance, repetibilidad, apertura de pinza o movimiento.

## Control electrónico del brazo
{: #electronica }

El brazo utiliza una placa basada en RP2040, programada con MicroPython, como unidad de control. El microcontrolador recibe las órdenes de movimiento, las convierte en señales de control y las envía a los servomotores que accionan las articulaciones. Así, el control electrónico corresponde al brazo y se mantiene separado del ejercicio de PCB con ATtiny45V y LEDs documentado en [Creación de PCBs](05-creacion-de-pcbs.md).

### Bloques del sistema de control
{: #diagrama-electronico }

```text
Órdenes de movimiento
        ↓
RP2040 ejecutando MicroPython
        ↓ señales de control
Servomotores de las articulaciones
        ↓
Movimiento del brazo y la pinza

Fuente para actuadores ── servomotores
        └── referencia eléctrica común con el controlador
```

El diagrama resume el flujo de control del brazo: el RP2040 ejecuta el programa y produce las señales para los servos. La alimentación de los actuadores se considera un bloque separado de la lógica del microcontrolador para que pueda dimensionarse según los servos empleados. El modelo del controlador, la asignación de pines y las especificaciones de alimentación no se fijan aquí.

### Elementos electrónicos asociados
{: #materiales-electronicos }

| Elemento | Función en el sistema |
|---|---|
| RP2040 | Ejecuta el programa de control escrito en MicroPython. |
| Servomotores | Producen el giro de las articulaciones y el accionamiento previsto para la pinza. |
| Fuente de alimentación | Suministra la energía necesaria al controlador y a los actuadores, de acuerdo con sus especificaciones. |
| Conductores de señal y alimentación | Conectan el controlador, los actuadores y sus fuentes. |

La cantidad exacta y el modelo de los servos dependen de cómo se distribuyan los grados de libertad entre las articulaciones y la pinza. Las vistas CAD muestran un soporte para servo, pero no identifican por sí solas todos los actuadores ni sus números de parte.

## Programa y operación con MicroPython
{: #programacion }

El control se ejecuta en el RP2040 mediante MicroPython. La estructura funcional del programa comprende la inicialización de las salidas de control, la recepción o definición de una orden, la conversión de esa orden a una posición objetivo y la actualización de las señales de los servos.

### Flujo de operación
{: #flujo }

```text
Encender el controlador y los actuadores
       ↓
Inicializar RP2040 y salidas de control
       ↓
Recibir una orden de movimiento
       ↓
Asociar la orden con una articulación
        ↓
Generar la señal correspondiente para el servo
        ↓
Repetir con la siguiente orden
```

El flujo describe la relación entre el programa y el movimiento mecánico. Las posiciones, límites angulares, velocidad de transición y método concreto para introducir las órdenes deben corresponder a la configuración real del brazo y de los servos.

### Procedimiento general de operación
{: #operacion }

1. Conectar el RP2040 y los actuadores a sus fuentes de alimentación apropiadas.
2. Cargar o ejecutar en el RP2040 el programa MicroPython de control.
3. Enviar o seleccionar una orden de movimiento por el mecanismo de entrada definido en la implementación.
4. El programa transforma la orden en una posición objetivo y actualiza la señal del servo correspondiente.
5. Repetir el proceso para posicionar las articulaciones y accionar la pinza.

### Organización lógica y herramientas
{: #software }

La arquitectura del programa puede organizarse en inicialización del RP2040, gestión de órdenes, conversión a posiciones y actualización de servos. Mantener esos pasos separados facilita ajustar los límites de cada articulación sin mezclar la interpretación de órdenes con la generación de señales.

El lenguaje utilizado para el controlador es MicroPython y la plataforma es RP2040. No se especifica en esta página una biblioteca externa ni el medio concreto de entrada de órdenes, por lo que la descripción se limita a la arquitectura de control y no atribuye al proyecto una interfaz específica.

## Integración y verificación documentada
{: #integracion }

La integración del brazo relaciona el diseño mecánico de la base, articulaciones y pinza con los servomotores accionados por el RP2040. El programa MicroPython convierte las órdenes en señales de control para esos actuadores.

La comprobación mecánica se plantea revisando el recorrido de las articulaciones, la ausencia de interferencias y la apertura de la pinza. La comprobación del control consiste en confirmar que cada orden mueve el servo previsto y que el brazo alcanza las posiciones esperadas. La secuencia funcional completa enlaza orden, movimiento de articulaciones y acción de la pinza.

Las imágenes disponibles muestran el diseño CAD, mientras que la descripción del proyecto identifica RP2040 y MicroPython como plataforma de control. El render por sí solo no constituye evidencia de movimiento real; del mismo modo, la arquitectura de control describe cómo se organiza la operación sin sustituir mediciones o registros de ejecución.

## Balance técnico y alcance de la entrega
{: #conclusion }

La documentación permite explicar el concepto de un brazo de tres grados de libertad con pinza, identificar siete piezas a partir de sus renders, interpretar su disposición general y justificar por qué la impresión 3D se ajusta mejor a la geometría volumétrica representada. El control se describe con RP2040 y MicroPython: el programa interpreta las órdenes y genera señales para los servomotores de las articulaciones.

La descripción técnica se limita a los recursos y datos del proyecto: renders CAD, arquitectura mecánica y plataforma de control RP2040 con MicroPython. Las dimensiones, materiales, asignación de pines, interfaz concreta de órdenes y características de los servos deben leerse desde la implementación correspondiente, sin inferirse a partir de las imágenes. La práctica de ATtiny45V permanece documentada por separado en la página de creación de PCBs.

## Sección anterior

- [Creación de PCBs](05-creacion-de-pcbs.md)
- [Inicio](index.md)