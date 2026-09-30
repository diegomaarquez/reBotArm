---
layout: default
title: Creación de PCBs
nav_order: 6
---

# Creación de PCBs

## Proyecto: secuencia de tres LEDs

Esta placa utiliza un microcontrolador ATtiny45V para controlar tres LEDs. Al accionar un pulsador, los LEDs se encienden secuencialmente, uno por uno. El interruptor mecánico conecta o desconecta la alimentación.

El orden previsto es LED 1, LED 2 y LED 3. El tiempo entre LEDs y si los LEDs anteriores permanecen encendidos o se apagan al avanzar depende del programa del ATtiny45V y debe confirmarse con el comportamiento final.

## Materiales

- 1 microcontrolador ATtiny45V.
- 1 batería tipo reloj; modelo y tensión por confirmar.
- 1 interruptor mecánico Würth.
- 1 conector hembra de 6 pines.
- 5 resistencias de 220 ohmios.
- 2 pulsadores genéricos.
- 3 LEDs.

## Funcionamiento

1. El interruptor mecánico conecta la batería y alimenta el circuito.
2. Al presionar el botón de inicio, el ATtiny45V comienza la secuencia.
3. El microcontrolador enciende los LEDs en orden, uno por uno.
4. El segundo pulsador también forma parte del circuito; su función debe especificarse según el programa cargado.

## Archivos del proyecto

Los tres adjuntos todavía no están en el repositorio. Cuando se agreguen, se mostrarán aquí:

- Foto del esquema electrónico: `assets/img/pcb/esquematico-electronico.png`.
- Foto del diseño de la PCB: `assets/img/pcb/diseno-pcb.png`.
- Modelo 3D STL de la PCB terminada: `assets/files/pcb-rebot-arm.stl`.

El STL permite visualizar la geometría 3D; para fabricar una placa electrónica normalmente se necesitan archivos Gerber y de taladros, no un STL.

## Notas de revisión

- Confirmar el modelo y la tensión de la batería tipo reloj y que pueda alimentar el circuito.
- Verificar la conexión del ATtiny45V, la polaridad de los LEDs y el orden de pines del conector.
- Confirmar en el esquema cómo se usan las cinco resistencias y cuál es la función del segundo pulsador.
- Comprobar que cada LED tenga una resistencia limitadora en serie y que sus corrientes estén dentro de los límites de los componentes.

## Siguiente sección

- [Modelado de Robot 3D](06-modelado-de-robot-3d.md)
- [Inicio](index.md)