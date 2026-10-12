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
	<a href="#electronica">Electrónica</a>
	<a href="#programacion">Operación</a>
	<a href="#integracion">Verificación</a>
	<a href="#conclusion">Conclusiones</a>
</nav>

## Propósito y criterios del diseño
{: #planteamiento }

El diseño representa un brazo robótico de tres grados de libertad cuyo extremo incorpora una pinza. Su función prevista es posicionar ese extremo mediante articulaciones y sujetar objetos con la pinza. El material disponible documenta el modelado geométrico y las piezas mediante renders CAD; las imágenes no son registros de un prototipo físico.

La organización responde a cuatro requisitos funcionales visibles en el diseño: sostener el conjunto sobre una base, enlazar las articulaciones, disponer de un soporte para el accionamiento y terminar en una pinza de dos partes. Los renders no incluyen cotas, escala, especificación de materiales ni cargas admisibles; por ello se describe la disposición sin atribuirle valores dimensionales no disponibles.

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

Las siete vistas de componente y el render general permiten describir las piezas y el orden funcional. La cantidad de la tabla indica cuántas representaciones de cada elemento aparecen en las imágenes, no una lista de compra ni un despiece verificado del ensamble.

| Elemento visible | Representaciones | Función en la disposición | Material y dimensiones |
|---|---:|---|---|
| Base (`base.png`) | 1 | Apoyo del conjunto | No indicados en el render |
| Tapa (`tapa_base.png`) | 1 | Cierre o cubierta de la base | No indicados en el render |
| Soporte (`primerservo.png`) | 1 | Interfaz representada para un servo | No se indica modelo de servo, material o medida |
| Joint1 (`Joint1.png`) | 1 | Elemento de articulación | No indicados en el render |
| Joint2 (`joint2.png`) | 1 | Elemento de articulación | No indicados en el render |
| Pieza de pinza (`griper1_Joint3.png`) | 1 | Primera parte del extremo | No indicados en el render |
| Pieza de pinza (`griper2.png`) | 1 | Segunda parte del extremo | No indicados en el render |

El conjunto contiene tres grados de libertad según la descripción del proyecto. En las vistas individuales se reconocen dos piezas Joint y dos partes de pinza; los renders no permiten asignar con certeza un actuador, una unión específica o una cantidad de tornillos a cada eje. Por ese motivo, el inventario se limita a las piezas gráficas identificables y no estima componentes comerciales.

### Vistas de componentes

Los siguientes renders muestran las piezas modeladas de forma individual. Son vistas ilustrativas: no tienen cotas ni escala de fabricación.

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

## Electrónica documentada
{: #electronica }

El repositorio contiene una práctica electrónica independiente: una placa con ATtiny45V que gobierna una secuencia de tres LEDs mediante pulsadores. La documentación no establece que esta placa accione el brazo robótico; se presenta aquí como el diseño electrónico disponible, sin confundirlo con un sistema de control del brazo.

### Bloques de alimentación, procesamiento y señalización
{: #diagrama-electronico }

```text
Batería ── interruptor ── alimentación indicada como +3.3 V
                                  │
                                  ▼
Pulsadores ── señales de entrada ── ATtiny45V ── salidas ── 3 LEDs
                                      ▲
                                      │
                   Conector ISP: RESET, MOSI, MISO, SCK
```

El esquema electrónico representa la batería y el interruptor como fuente conmutada, el ATtiny45V como elemento de procesamiento, dos pulsadores y tres LEDs como entradas y salidas de usuario, y un conector ISP para programación. El valor de alimentación rotulado es +3.3 V. El pinout dibujado asocia MOSI/PB0, MISO/PB1, SCK/PB2 y RESET/PB5 al conector de programación. El diagrama describe las señales visibles en el esquema, no una conexión con los motores del brazo.

### Componentes de la placa
{: #materiales-electronicos }

| Componente | Cantidad identificable | Función |
|---|---:|---|
| ATtiny45V | 1 | Procesamiento de entradas y control de LEDs |
| LEDs | 3 | Indicadores de la secuencia |
| Pulsadores | 2 | Entradas manuales |
| Interruptor Würth | 1 | Conmutación de la alimentación |
| Batería tipo celda | 1 | Fuente indicada en el esquema |
| Conector de programación ISP | 1 (4 señales) | RESET, MOSI, MISO y SCK |
| Conector de alimentación | 1 (2 contactos en el esquema) | Alimentación y GND |
| Resistencias | Referencias R1–R7 en el esquema | Limitación y redes de señal según el circuito |

La descripción escrita de la placa también enumera cinco resistencias de 220 Ω, mientras que el esquema dibuja las referencias R1 a R7 sin valores legibles. Por tanto, no se atribuye un valor inequívoco a todas las resistencias ni se deducen números de parte. El modelo y la tensión exactos de la batería tampoco aparecen especificados.

### Esquemático y disposición de la tarjeta
{: #diseno-electronico }

El esquema y la imagen de distribución de la PCB permiten reconocer la conectividad propuesta, la ubicación de los componentes, las pistas y los conectores. Ambos recursos se encuentran en la sección [Creación de PCBs](05-creacion-de-pcbs.md#archivos), junto con un visor del modelo electrónico 3D. Son documentación gráfica del circuito; no equivalen a un proyecto CAD editable ni a un paquete Gerber.

## Lógica de operación y programación
{: #programacion }

### Secuencia de control
{: #flujo }

```text
Encender la placa
       ↓
Inicializar el ATtiny45V y las señales
       ↓
Leer la entrada del pulsador
       ↓
¿Se detectó una pulsación válida?
   ├── No: mantener el estado actual y volver a leer
   └── Sí: avanzar el índice de LED
                 ↓
          Apagar los otros LEDs
                 ↓
          Encender el LED seleccionado
                 └────────→ volver a leer
```

El flujo expresa la lógica de secuencia descrita para la placa: cada pulsación válida avanza la indicación y se mantiene encendido un LED a la vez. El antirrebote es una consideración necesaria al leer pulsadores mecánicos. La información disponible no define el estado después del tercer LED ni la función del segundo pulsador, por lo que no se le atribuye un comportamiento concreto.

### Operación descrita
{: #operacion }

1. El interruptor conecta o desconecta la alimentación de la placa.
2. El pulsador de avance permite recorrer la secuencia de LEDs.
3. Los tres LEDs señalan el estado seleccionado; la descripción indica que los no seleccionados permanecen apagados.
4. El segundo pulsador forma parte del esquema, pero su función no está determinada en la documentación disponible.
5. El conector ISP se utiliza para programar el ATtiny45V; el procedimiento documentado usa Arduino IDE y un programador compatible, por ejemplo Arduino Uno con ArduinoISP.

No se documenta una interfaz gráfica, conexión remota ni panel de control del brazo. La interfaz descrita aquí se limita a los pulsadores, el interruptor y los indicadores de la placa.

### Organización lógica y herramientas
{: #software }

La arquitectura lógica descrita separa la lectura de las entradas, la actualización del índice de secuencia y la escritura de las salidas de los LEDs. En una implementación, esos bloques pueden organizarse como inicialización de pines, lectura y validación de pulsación, avance del estado y actualización de indicadores. No se asignan nombres de funciones porque el código fuente no está incluido en el repositorio.

La herramienta de programación descrita es Arduino IDE con un núcleo de placas compatible con ATtiny45/45V y programación ISP. No se indica versión del IDE, del núcleo ni bibliotecas externas utilizadas; tampoco hay un archivo de firmware descargable entre los recursos del proyecto. La explicación anterior documenta la operación lógica, no afirma que el código final esté disponible o que compile en una configuración específica.

## Integración y verificación documentada
{: #integracion }

Los recursos describen por separado el diseño mecánico del brazo y la placa de LEDs. No hay una conexión documentada entre la placa ATtiny45V y los actuadores del brazo, ni un sistema de alimentación, cableado o programa de control integrado. En consecuencia, el alcance demostrable es el diseño CAD del brazo y el diseño esquemático/de PCB de una práctica electrónica distinta.

En el brazo, la verificación posible a partir de estos recursos es visual: identificar la base, el soporte, las articulaciones y la pinza, y revisar su organización en el render general. En la placa, el esquema y el diseño de pistas permiten inspeccionar visualmente los bloques del circuito. No se presentan mediciones eléctricas, registros de pruebas por bloque, fotografías de una tarjeta montada ni resultados de una prueba funcional completa.

Las dos rutas mecánicas se comparan por compatibilidad con la geometría: la impresión 3D reproduce piezas con volumen, y el corte láser produce perfiles planos que requieren rediseño y ensamble por placas. No existen datos de versiones físicas paralelas para comparar tiempos, ajustes, desempeño o resultados de fabricación.

## Balance técnico y alcance de la entrega
{: #conclusion }

La documentación permite explicar el concepto de un brazo de tres grados de libertad con pinza, identificar siete piezas a partir de sus renders, interpretar su disposición general y justificar por qué la impresión 3D se ajusta mejor a la geometría volumétrica representada. También contiene el esquema y el diseño visual de una PCB con ATtiny45V, junto con su lista general de componentes, la secuencia funcional descrita y un procedimiento de programación ISP.

Los resultados presentados son de diseño y documentación gráfica. No se dispone de cotas mecánicas verificables, especificaciones completas de materiales, modelos CAD editables o archivos de fabricación del brazo; tampoco de evidencia de fabricación, ensamblaje físico, pruebas mecánicas, código final del ATtiny45V, mediciones electrónicas o integración entre esa placa y el brazo. Estas limitaciones acotan las conclusiones: los renders prueban la representación visual de la propuesta, no su fabricación ni su desempeño; las imágenes electrónicas muestran el circuito diseñado, no su funcionamiento medido.

## Sección anterior

- [Creación de PCBs](05-creacion-de-pcbs.md)
- [Inicio](index.md)