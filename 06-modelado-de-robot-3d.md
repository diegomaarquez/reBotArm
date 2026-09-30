---
layout: default
title: Modelado de Robot 3D
nav_order: 7
---

# Modelado de Robot 3D

## Brazo robótico de 3 grados de libertad

El proyecto consiste en un brazo robótico de **3 grados de libertad (GDL)**, modelado en **Autodesk Inventor**. Esta página reunirá los planos de fabricación, las imágenes renderizadas de las piezas, el ensamble CAD, el render general y el modelo 3D del brazo.

> Los archivos del brazo todavía no están en el repositorio. Las rutas de esta página son una propuesta para organizar los entregables; se actualizarán cuando se agreguen los archivos reales. El archivo `assets/3d/g.stl` corresponde a la PCB y no al brazo robótico.

## Planos de las piezas

Aquí se publicará un plano por cada pieza fabricada. Los planos deben incluir vistas suficientes para definir la geometría, cotas, unidades, material y escala. Los nombres de pieza se tomarán del proyecto de Inventor para que coincidan con el ensamble.

Carpeta propuesta: `assets/files/robot-3d/planos/`.

Se pueden publicar como PDF para consulta y conservar los archivos editables de dibujo de Inventor (`.idw` o `.dwg`) junto con las piezas (`.ipt`).

| Pieza | Plano |
| --- | --- |
| Se agregará el nombre usado en Inventor | Pendiente de agregar |

## Imágenes renderizadas de cada pieza

Se añadirá una imagen renderizada independiente por cada pieza, identificada con el mismo nombre que tiene en Inventor. Las imágenes permiten apreciar la forma y el acabado; las dimensiones de fabricación se consultan en los planos.

Carpeta propuesta: `assets/img/robot-3d/piezas/`.

| Pieza | Render |
| --- | --- |
| Se agregará el nombre usado en Inventor | Pendiente de agregar |

## Ensamble en software CAD

El ensamble completo se realizará en Autodesk Inventor y reunirá los componentes y piezas del brazo. Se documentará con el archivo de ensamble (`.iam`) y, cuando esté disponible, una captura del árbol de componentes.

En la revisión del ensamble se comprobará que:

- Las tres articulaciones estén representadas con restricciones coherentes con sus grados de libertad.
- Las piezas coincidan en sus puntos de unión y no haya interferencias.
- Los actuadores y elementos de sujeción tengan espacio para montarse.
- El movimiento previsto no provoque colisiones entre las piezas.

Carpeta propuesta para el archivo CAD: `assets/files/robot-3d/ensamble/`.

## Renderizado del brazo completo

Se agregará un render del ensamble completo para mostrar el aspecto final del brazo. La imagen se guardará como `assets/img/robot-3d/ensamble-render.png` cuando esté disponible.

## Modelo 3D manipulable

El modelo se exportará desde Inventor como STL para poder girarlo y acercarlo desde esta página. También se recomienda conservar una exportación STEP para intercambio CAD, ya que mantiene mejor la estructura geométrica para continuar editando el diseño.

Cuando se agregue el STL del brazo, aquí se mostrará en un visor interactivo. Por ahora, el visor está pendiente del archivo de ensamble; no se reutiliza `assets/3d/g.stl` porque ese modelo pertenece a la PCB.

Carpeta propuesta: `assets/3d/robot-3d/`.

## Lista de entregables

- [ ] Planos PDF de las piezas.
- [ ] Render individual de cada pieza.
- [ ] Ensamble editable de Inventor (`.iam`) y piezas (`.ipt`).
- [ ] Render del brazo ensamblado.
- [ ] Modelo del brazo exportado en STL y STEP.

## Sección anterior

- [Creación de PCBs](05-creacion-de-pcbs.md)
- [Inicio](index.md)