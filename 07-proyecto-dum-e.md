---
layout: default
title: Proyecto D.U.M-E
nav_order: 8
---

# Proyecto D.U.M-E

<div class="site-page-intro">
	<p class="site-eyebrow">PROYECTO FINAL · INTEGRACIÓN MECATRÓNICA</p>
	<p class="site-page-lead">Diseño de un brazo robótico articulado de 6 grados de libertad con actuadores reubicados y transmisión por poleas síncronas.</p>
</div>

<nav class="site-section-navigation" aria-label="Secciones del proyecto D.U.M-E">
	<a href="#propuesta">Propuesta</a>
	<a href="#arquitectura">Arquitectura</a>
	<a href="#parametros">Parámetros</a>
	<a href="#seguridad">Seguridad</a>
	<a href="#presentacion">Presentación</a>
</nav>

## ¿Qué es D.U.M-E?
{: #propuesta }

**D.U.M-E** significa *Dispositivo Universal de Manipulación Experimental*. La propuesta desarrolla un brazo robótico antropomórfico de seis grados de libertad para tareas de manipulación y *pick and place*.

El rediseño responde a una limitación de la actuación directa: montar motores pesados en los eslabones aumenta la inercia y el torque que debe soportar el hombro. La propuesta traslada los actuadores principales hacia la base y transmite el movimiento a las articulaciones mediante poleas y correas síncronas. Así se busca reducir la masa móvil y aprovechar los motores y reductores disponibles.

## Arquitectura del sistema
{: #arquitectura }

- **Estructura:** base y eslabones articulados; el alcance horizontal planteado es de aproximadamente 0,77 m.
- **Actuación:** motores paso a paso NEMA 34 para la base y el hombro, y motores NEMA 17 con reductores planetarios para otras articulaciones.
- **Transmisión:** reductores existentes de 10:1 combinados con etapas por correas síncronas. Las relaciones adicionales descritas varían según la articulación.
- **Control:** consignas Step/Dir, trayectorias coordinadas, homing y límites de movimiento gestionados por software.
- **Carga útil:** la presentación plantea 1,5 kg como carga nominal de operación y hasta 5 kg como capacidad estructural por evaluar; no son capacidades experimentales certificadas.

## Parámetros de diseño
{: #parametros }

Las cifras siguientes son las estimaciones y objetivos consignados en la presentación. Deben confirmarse mediante cálculos, selección final de componentes y ensayos del prototipo.

| Parámetro | Valor planteado |
|---|---:|
| Grados de libertad | 6 |
| Factor de seguridad de diseño | 3 |
| Carga nominal prevista | 1,5 kg |
| Capacidad estructural objetivo | Hasta 5 kg |
| Alcance horizontal aproximado | 0,77 m |
| Eslabón hombro-codo | 264 mm |
| Eslabón codo-muñeca | 242 mm |
| Masa móvil estimada | Aproximadamente 1,2 kg |

La presentación compara una configuración de motores colgados con otra de motores en la base y bandas. En esa comparación, el torque estimado del hombro pasa de 59,5 N·m a 46,4 N·m con FS=3. Son valores de diseño reportados, no resultados de una prueba física.

## Materiales y seguridad
{: #seguridad }

Se consideran PETG o nylon para piezas estructurales y poleas, con posibles refuerzos de aluminio en los eslabones. La selección final dependerá de la rigidez, la temperatura, el desgaste y las cargas reales; la presentación desaconseja usar TPU en la transmisión por su elasticidad.

La propuesta contempla cubiertas para las correas y los puntos de pellizco, límites de recorrido por software y un paro de emergencia físico que interrumpa la potencia. Estas medidas deben implementarse y verificarse antes de operar el brazo. Los límites por software complementan, pero no sustituyen, las protecciones físicas ni una puesta en marcha segura.

## Presentación del proyecto
{: #presentacion }

El visor de Microsoft Office intenta mostrar la presentación desde el archivo público del sitio. Requiere conexión a internet y que el sitio publicado sea accesible; si el visor no carga, puedes abrir o descargar el archivo directamente.

<div class="responsive-embed">
	<iframe
		src="https://view.officeapps.live.com/op/embed.aspx?src={{ '/assets/Dume.pptx' | absolute_url | uri_escape }}"
		title="Presentación del proyecto D.U.M-E"
		loading="lazy"
		allowfullscreen>
	</iframe>
</div>

<p><a href="{{ '/assets/Dume.pptx' | relative_url }}" download>Descargar la presentación D.U.M-E (PPTX)</a></p>

## Navegación

- [Creación de PCBs](05-creacion-de-pcbs.md)
- [Diseño del brazo robótico](06-modelado-de-robot-3d.md)
- [Inicio](index.md)
