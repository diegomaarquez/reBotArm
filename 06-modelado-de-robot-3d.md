---
layout: default
title: Modelado de Robot 3D
nav_order: 7
---

# Modelado de Robot 3D

El modelado 3D permite visualizar el brazo robótico, revisar su montaje y detectar interferencias antes de fabricar piezas. El modelo debe representar las dimensiones y componentes reales, no solo la apariencia exterior.

## 1) Reunir medidas y componentes

Antes de modelar, identifica los elementos que condicionan la geometría:

- Servomotores, motores o actuadores y sus dimensiones.
- Longitud de cada eslabón y posición de los ejes de articulación.
- Tornillos, soportes, rodamientos y conectores.
- Espacio para cables y acceso para montaje y mantenimiento.

Usa las hojas de datos o mide las piezas físicas. Registra las unidades y conserva una referencia para cada dimensión.

## 2) Dividir el brazo en piezas

Organiza el modelo en componentes independientes, por ejemplo:

- Base fija.
- Eslabones móviles.
- Soportes para actuadores.
- Efector final o pinza.
- Cubiertas y piezas de montaje.

Mantener las piezas separadas facilita modificar dimensiones, revisar el ensamblaje y preparar piezas para impresión o fabricación.

## 3) Modelar las piezas y el ensamblaje

En el programa CAD elegido, trabaja con medidas paramétricas siempre que sea posible. Modela primero las interfaces mecánicas (agujeros, ejes y superficies de montaje) y después agrega la geometría exterior.

1. Crea la base y define el origen del ensamblaje.
2. Añade cada eslabón con la distancia correcta entre ejes.
3. Coloca actuadores y soportes usando sus dimensiones reales.
4. Ensambla las piezas con restricciones que representen las articulaciones.
5. Añade la pinza u otra herramienta en el extremo del brazo.

## 4) Revisar movimiento y fabricación

Comprueba el recorrido de cada articulación y busca colisiones entre piezas, cables y estructura. Verifica también que:

- Los actuadores puedan montarse y retirarse.
- Los tornillos y herramientas tengan espacio de acceso.
- Las paredes, uniones y soportes sean adecuados para el proceso de fabricación.
- Los cables puedan seguir el movimiento sin quedar atrapados o tensos.

Las holguras y espesores dependen del material, del proceso de fabricación y de las cargas. Confírmalos con las especificaciones del proceso y pruebas físicas.

## 5) Preparar entregables

Guarda el archivo editable del proyecto y exporta formatos de intercambio o fabricación según se necesite, por ejemplo STEP para intercambio CAD o STL para impresión 3D. Revisa la orientación, escala y unidades antes de exportar.

## Lista de comprobación

- [ ] Las dimensiones se basan en componentes reales.
- [ ] Las articulaciones y distancias entre ejes son correctas.
- [ ] Se revisaron interferencias durante el movimiento.
- [ ] Hay espacio para cables, tornillos y mantenimiento.
- [ ] Los archivos exportados conservan escala y unidades.

## Sección anterior

- [Creación de PCBs](05-creacion-de-pcbs.md)
- [Inicio](index.md)