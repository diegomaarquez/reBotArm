---
layout: default
title: Creación de PCBs
nav_order: 6
---

# Creación de PCBs

Una PCB (placa de circuito impreso) conecta y sostiene los componentes electrónicos de un proyecto. Para el brazo robótico, puede servir para organizar conexiones de alimentación, controladores de motores, sensores y señales de control.

> El diseño final depende de los componentes, corrientes y tensiones reales del robot. Verifica sus hojas de datos antes de fabricar la placa.

## 1) Definir qué debe hacer la placa

Antes de dibujar el circuito, anota:

- Qué componentes se conectarán: microcontrolador, servomotores, sensores y conectores.
- La tensión y corriente requeridas por cada componente.
- Qué señales necesita cada conexión y dónde se ubicarán los conectores.
- Las dimensiones máximas y los orificios de montaje disponibles.

Separa las conexiones de alimentación de motores de las señales de control cuando el diseño lo requiera. No supongas que una salida de microcontrolador puede alimentar directamente un motor.

## 2) Dibujar el esquema eléctrico

En una herramienta de diseño electrónico, como KiCad, crea un proyecto y coloca los símbolos de los componentes. Conecta alimentación, tierra y señales; agrega etiquetas y valores para que el circuito sea fácil de revisar.

Antes de pasar a la placa:

- Comprueba que cada componente tenga alimentación y tierra donde corresponde.
- Confirma el orden de pines de conectores, sensores y controladores.
- Ejecuta la verificación eléctrica (ERC) y revisa los avisos.
- Compara el esquema con las hojas de datos de los componentes.

## 3) Diseñar la placa

Asigna una huella (footprint) adecuada a cada componente y actualiza la PCB desde el esquema. Después:

1. Define el contorno de la placa y los orificios de montaje.
2. Ubica primero los conectores y componentes que tienen restricciones mecánicas.
3. Agrupa los componentes por función y deja espacio para cables y herramientas.
4. Traza las pistas respetando las reglas eléctricas del fabricante y las necesidades de corriente.
5. Añade nombres de conectores y señales en la serigrafía.

La anchura de pista, el espaciado y el número de capas deben elegirse según las especificaciones del fabricante y las condiciones eléctricas del circuito; no uses valores genéricos sin comprobarlos.

## 4) Revisar antes de fabricar

Ejecuta la verificación de reglas de diseño (DRC) y corrige los errores. Revisa también visualmente:

- Que no haya pistas sin conectar ni cortocircuitos.
- Que la polaridad y orientación de los componentes sean correctas.
- Que los conectores puedan instalarse y conectarse físicamente.
- Que el contorno y los orificios coincidan con el espacio disponible.

Exporta los archivos de fabricación solicitados por el proveedor, normalmente Gerber y taladros, y revisa el resultado con un visor antes de enviar el pedido.

## 5) Montaje y prueba

Al recibir la placa, inspecciona soldaduras y orientación. Prueba primero la alimentación y las señales sin conectar cargas que puedan dañarse. Después incorpora los componentes y valida cada función de forma gradual.

## Lista de comprobación

- [ ] El esquema coincide con las hojas de datos.
- [ ] Se revisaron los avisos de ERC y DRC.
- [ ] Las huellas y conectores corresponden a los componentes reales.
- [ ] Se verificaron dimensiones, montaje y archivos de fabricación.
- [ ] La placa se probó de forma gradual y segura.

## Siguiente sección

- [Modelado de Robot 3D](06-modelado-de-robot-3d.md)
- [Inicio](index.md)