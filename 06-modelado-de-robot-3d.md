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

El corte láser es una opción de fabricación para piezas de perfil plano. La geometría tridimensional del brazo no se convierte directamente en piezas de lámina: cada componente debe representarse como un contorno 2D y sus uniones deben diseñarse de acuerdo con el espesor del material. Esta ruta es adecuada para placas laterales, soportes y perfiles; la base, la tapa y la pinza requerirían adaptar su forma o combinar varias placas para obtener volumen.

<div class="robot-arm-process" aria-label="Flujo de fabricación CNC">
	<div><span>01</span><strong>Definir perfiles</strong><small>Seleccionar vistas planas de cada pieza</small></div>
	<div><span>02</span><strong>Preparar el corte</strong><small>Distribuir contornos y compensar el ancho de corte</small></div>
	<div><span>03</span><strong>Ensamblar placas</strong><small>Unir perfiles para reconstruir la estructura</small></div>
</div>

La fabricación por láser favorece perfiles repetibles y un montaje por placas, pero limita las formas a superficies planas y hace que las uniones dependan del espesor, el ajuste entre piezas y la fijación. La impresión 3D representa de forma más directa las geometrías volumétricas visibles en el modelo.

## Secuencia mecánica representada
{: #ensamble }

El orden funcional que comunica el diseño se puede resumir así:

```text
Base y tapa
    ↓
Soporte del servo y articulación inicial
    ↓
Articulación siguiente
    ↓
Extremo con dos piezas de pinza
```

La secuencia describe la relación general que se aprecia entre las familias de piezas, no un instructivo de montaje con fijaciones específicas. En una construcción mecánica, el montaje parte de la base, continúa por los soportes y articulaciones, y termina en el extremo; cada unión debe permitir el giro previsto sin que las piezas colisionen.

## Criterios de revisión mecánica
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

Estos criterios sirven para interpretar y revisar el modelo. La apariencia de un render no constituye una medición de holgura, resistencia o capacidad de carga.

## Alcance y conclusión
{: #conclusion }

El material visual documenta una propuesta mecánica reconocible: base, soporte de accionamiento, articulaciones y pinza. La combinación de la vista general con los renders individuales permite explicar la organización del brazo y distinguir las piezas que lo componen. El modelo tridimensional es el medio más apropiado para comunicar su volumen, mientras que el corte láser representa una adaptación alternativa a perfiles planos.

El alcance de esta página es el diseño geométrico y la comparación conceptual de procesos de fabricación. Las imágenes disponibles no proporcionan cotas, materiales, cargas admisibles ni evidencia de fabricación o funcionamiento, por lo que las conclusiones se limitan a la configuración visual y a criterios de diseño mecánico. La electrónica y el software no se atribuyen al brazo en ausencia de una relación documentada con este modelo.

## Sección anterior

- [Creación de PCBs](05-creacion-de-pcbs.md)
- [Inicio](index.md)