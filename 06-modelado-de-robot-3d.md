---
layout: default
title: Diseño del brazo robótico
nav_order: 7
---

# Diseño del brazo robótico

El brazo robótico de **3 grados de libertad (GDL)** se modela en **Autodesk Inventor** mediante dos alternativas de fabricación: piezas diseñadas en 3D para impresión 3D y perfiles diseñados en 2D para corte láser CNC. Cada subsección reunirá los planos, modelos y recursos correspondientes a su proceso.

<div class="robot-arm-overview">
	<p class="robot-arm-overview__eyebrow">DISEÑO CAD · FABRICACIÓN DIGITAL</p>
	<p class="robot-arm-overview__summary">Dos rutas de fabricación para un mismo brazo: componentes impresos en 3D y perfiles planos preparados para corte láser CNC.</p>
	<div class="robot-arm-overview__facts">
		<span><strong>03</strong> grados de libertad</span>
		<span><strong>02</strong> procesos de fabricación</span>
		<span><strong>CAD</strong> Autodesk Inventor</span>
	</div>
</div>

<nav class="robot-arm-route-nav" aria-label="Rutas de fabricación">
	<a href="#impresion-3d"><span>01</span><strong>Impresión 3D</strong><small>Piezas y ensamble</small></a>
	<a href="#corte-laser"><span>02</span><strong>Corte láser CNC</strong><small>Perfiles en 2D</small></a>
</nav>

## 1. Brazo modelado en 3D para impresión 3D
{: #impresion-3d }

Esta alternativa comprende el modelado de las piezas y el ensamble del brazo en 3D con Autodesk Inventor, para fabricar sus componentes mediante impresión 3D.

### Planos de las piezas

Se publicará un plano por cada pieza fabricada, con las vistas y cotas necesarias para definir su geometría, unidades, material y escala. Los nombres de pieza coincidirán con los del proyecto de Inventor.

Carpeta propuesta: `assets/files/brazo-3d/planos/`.

Los planos se publicarán en PDF para consulta. Se conservarán también los dibujos editables de Inventor (`.idw` o `.dwg`) y las piezas (`.ipt`).

### Imágenes de las piezas

Los siguientes renders muestran las piezas modeladas. Las dimensiones de fabricación se consultarán en los planos.

<div class="robot-arm-gallery">
	<figure>
		<a href="{{ '/assets/brazo_3d/base.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Base del brazo robótico" aria-label="Ampliar la base del brazo robótico">
			<img src="{{ '/assets/brazo_3d/base.png' | relative_url }}" alt="Render de la base del brazo robótico" loading="lazy">
			<span class="robot-arm-gallery__zoom" aria-hidden="true">Ampliar</span>
		</a>
		<figcaption>Base (base.png)</figcaption>
	</figure>
	<figure>
		<a href="{{ '/assets/brazo_3d/tapa_base.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Tapa de la base" aria-label="Ampliar la tapa de la base">
			<img src="{{ '/assets/brazo_3d/tapa_base.png' | relative_url }}" alt="Render de la tapa de la base" loading="lazy">
			<span class="robot-arm-gallery__zoom" aria-hidden="true">Ampliar</span>
		</a>
		<figcaption>Tapa de la base (tapa_base.png)</figcaption>
	</figure>
	<figure>
		<a href="{{ '/assets/brazo_3d/primerservo.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Soporte del primer servo" aria-label="Ampliar el soporte del primer servo">
			<img src="{{ '/assets/brazo_3d/primerservo.png' | relative_url }}" alt="Render del soporte del primer servo" loading="lazy">
			<span class="robot-arm-gallery__zoom" aria-hidden="true">Ampliar</span>
		</a>
		<figcaption>Soporte del primer servo (primerservo.png)</figcaption>
	</figure>
	<figure>
		<a href="{{ '/assets/brazo_3d/Joint1.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Joint1" aria-label="Ampliar Joint1">
			<img src="{{ '/assets/brazo_3d/Joint1.png' | relative_url }}" alt="Render de la pieza Joint1" loading="lazy">
			<span class="robot-arm-gallery__zoom" aria-hidden="true">Ampliar</span>
		</a>
		<figcaption>Joint1 (Joint1.png)</figcaption>
	</figure>
	<figure>
		<a href="{{ '/assets/brazo_3d/joint2.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Joint2" aria-label="Ampliar Joint2">
			<img src="{{ '/assets/brazo_3d/joint2.png' | relative_url }}" alt="Render de la pieza joint2" loading="lazy">
			<span class="robot-arm-gallery__zoom" aria-hidden="true">Ampliar</span>
		</a>
		<figcaption>Joint2 (joint2.png)</figcaption>
	</figure>
	<figure>
		<a href="{{ '/assets/brazo_3d/griper1_Joint3.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Primera pieza de la pinza · Joint3" aria-label="Ampliar la primera pieza de la pinza">
			<img src="{{ '/assets/brazo_3d/griper1_Joint3.png' | relative_url }}" alt="Render de la primera pieza de la pinza, correspondiente a Joint3" loading="lazy">
			<span class="robot-arm-gallery__zoom" aria-hidden="true">Ampliar</span>
		</a>
		<figcaption>Primera pieza de la pinza (griper1_Joint3.png)</figcaption>
	</figure>
	<figure>
		<a href="{{ '/assets/brazo_3d/griper2.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Segunda pieza de la pinza" aria-label="Ampliar la segunda pieza de la pinza">
			<img src="{{ '/assets/brazo_3d/griper2.png' | relative_url }}" alt="Render de la segunda pieza de la pinza" loading="lazy">
			<span class="robot-arm-gallery__zoom" aria-hidden="true">Ampliar</span>
		</a>
		<figcaption>Segunda pieza de la pinza (griper2.png)</figcaption>
	</figure>
</div>

### Ensamble CAD y render general

El ensamble completo reunirá los componentes y piezas del brazo en Autodesk Inventor. Se documentará con el archivo de ensamble (`.iam`), una captura del árbol de componentes y un render general cuando estén disponibles.

En la revisión del ensamble se comprobará que:

- Las tres articulaciones estén representadas con restricciones coherentes con sus grados de libertad.
- Las piezas coincidan en sus puntos de unión y no haya interferencias.
- Los actuadores y elementos de sujeción tengan espacio para montarse.
- El movimiento previsto no provoque colisiones entre las piezas.

<figure class="robot-arm-assembly">
	<a href="{{ '/assets/brazo_3d/ensamble_3d.png' | relative_url }}" data-lightbox-trigger data-lightbox-caption="Ensamble 3D completo" aria-label="Ampliar el ensamble completo del brazo">
		<img src="{{ '/assets/brazo_3d/ensamble_3d.png' | relative_url }}" alt="Render del ensamble completo del brazo robótico" loading="lazy">
		<span class="robot-arm-gallery__zoom" aria-hidden="true">Ampliar</span>
	</a>
	<figcaption>Ensamble 3D completo (ensamble_3d.png)</figcaption>
</figure>

Carpeta propuesta: `assets/files/brazo-3d/ensamble/`.

### Modelo 3D manipulable

El ensamble se exportará en STL para visualizarlo en esta página y en STEP para facilitar el intercambio CAD.

Carpeta propuesta para el modelo: `assets/3d/brazo-3d/`.

Los archivos del brazo todavía no están en el repositorio; el visor se añadirá cuando se incorpore el STL. El archivo `assets/3d/g.stl` corresponde a la PCB y no al brazo robótico.

### Entregables para impresión 3D

- [ ] Piezas de Inventor (`.ipt`) y ensamble editable (`.iam`).
- [ ] Planos PDF de las piezas.
- [ ] Exportaciones STL para impresión y STEP para intercambio CAD.
- [ ] Renders individuales y del brazo ensamblado.

## 2. Brazo modelado en 2D para corte láser CNC
{: #corte-laser }

Esta alternativa reunirá los perfiles planos de las piezas del brazo, dibujados en Autodesk Inventor para su fabricación mediante corte láser CNC. Los archivos se prepararán según las unidades y requisitos del equipo o servicio de corte; se indicarán el material y el espesor cuando estén definidos.

### Planos y archivos de corte

Cada pieza se identificará con su nombre y tendrá las dimensiones necesarias para fabricarla. Se incluirán los archivos editables de Inventor y una exportación vectorial compatible con el equipo de corte, por ejemplo DXF o DWG. El PDF servirá como referencia visual y de cotas.

Carpeta propuesta: `assets/files/brazo-2d/corte-laser/`.

| Pieza | Plano PDF | Archivo de corte |
| --- | --- | --- |
| Pendiente de definir | Pendiente de agregar | Pendiente de agregar |

### Vistas del diseño 2D

Se añadirán imágenes de las piezas y de su distribución en el material para mostrar el diseño preparado para corte.

Carpeta propuesta: `assets/img/brazo-2d/corte-laser/`.

### Entregables para corte láser CNC

- [ ] Diseño editable de las piezas en Autodesk Inventor.
- [ ] Archivos de corte vectoriales (DXF o DWG, según el equipo disponible).
- [ ] Planos PDF con cotas, unidades, material y espesor definidos.
- [ ] Imágenes de las piezas y de su distribución para corte.

Los archivos del brazo aún no están en el repositorio. Las carpetas y tablas de esta página organizan los entregables pendientes.

<dialog class="robot-arm-lightbox" data-image-lightbox aria-label="Imagen ampliada">
	<button class="robot-arm-lightbox__close" type="button" data-lightbox-close aria-label="Cerrar imagen" title="Cerrar">×</button>
	<img data-lightbox-image alt="">
	<p data-lightbox-caption></p>
</dialog>

<script src="{{ '/assets/js/robot-arm-lightbox.js' | relative_url }}" defer></script>

## Sección anterior

- [Creación de PCBs](05-creacion-de-pcbs.md)
- [Inicio](index.md)