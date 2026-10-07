---
layout: default
title: Diseño del brazo robótico
nav_order: 7
---

# Diseño del brazo robótico

El brazo robótico de **3 grados de libertad (GDL)** se modela en **Autodesk Inventor** mediante dos alternativas de fabricación: piezas diseñadas en 3D para impresión 3D y perfiles diseñados en 2D para corte láser CNC. Cada subsección reunirá los planos, modelos y recursos correspondientes a su proceso.

## 1. Brazo modelado en 3D para impresión 3D

Esta alternativa comprende el modelado de las piezas y el ensamble del brazo en 3D con Autodesk Inventor, para fabricar sus componentes mediante impresión 3D.

### Planos de las piezas

Se publicará un plano por cada pieza fabricada, con las vistas y cotas necesarias para definir su geometría, unidades, material y escala. Los nombres de pieza coincidirán con los del proyecto de Inventor.

Carpeta propuesta: `assets/files/brazo-3d/planos/`.

Los planos se publicarán en PDF para consulta. Se conservarán también los dibujos editables de Inventor (`.idw` o `.dwg`) y las piezas (`.ipt`).

| Pieza | Plano |
| --- | --- |
| Pendiente de definir | Pendiente de agregar |

### Imágenes de las piezas

Se añadirá una imagen renderizada por pieza, identificada con el mismo nombre que tiene en Inventor. Las dimensiones de fabricación se consultarán en los planos.

Carpeta propuesta: `assets/img/brazo-3d/piezas/`.

| Pieza | Render |
| --- | --- |
| Pendiente de definir | Pendiente de agregar |

### Ensamble CAD y render general

El ensamble completo reunirá los componentes y piezas del brazo en Autodesk Inventor. Se documentará con el archivo de ensamble (`.iam`), una captura del árbol de componentes y un render general cuando estén disponibles.

En la revisión del ensamble se comprobará que:

- Las tres articulaciones estén representadas con restricciones coherentes con sus grados de libertad.
- Las piezas coincidan en sus puntos de unión y no haya interferencias.
- Los actuadores y elementos de sujeción tengan espacio para montarse.
- El movimiento previsto no provoque colisiones entre las piezas.

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

## Sección anterior

- [Creación de PCBs](05-creacion-de-pcbs.md)
- [Inicio](index.md)