# rdh Componente reusable para animaciones v0.1
###### Conjunto de métodos dinámicos y reusables para animaciones, accesibles a través de clases en html

**Métodos disponibles**
- Animación básica
- Animación en secuencia
- Animacion en desplazamiento o scroll

## Animación básica `rdh-animation`
Esta clase define a los elementos con animación y se ejecuta al cargar el sitio.

**`rdh-animation`** Elemento con animación.

**`data-animation-class="css-class"`** Atributo que guarda la clase con la animación a ejecutar. El valor de "`css-class`" representa una clase de css con la animación vinculada.
```html
<div class="rdh-animation" data-animation-class="fade-in"></div>
```

## Animación en secuencia `rdh-sequence-animation`
Esta clase define un bloque de elementos que se pretende animar a manera de secuencia, agregando un tiempo de espera a cada elemento. Los elementos a animar deben estar contenidos dentro de un elemento padre.

**`rdh-squence-animation`** Elemento *padre*, define el bloque de animación en secuencia.

**`data-sequence-delay="n"`** Atributo del elemento *padre* que define el tiempo de espera entre los elementos hijos a animar. El valor de "`n`" representa el tiempo en segundos.

**`rdh-squence-child`** Elemento *hijo*, define los elementos hijos a animar dentro de la secuencia.
```html
<div class="rdh-sequence-animation" data-sequence-delay="0.5">
    <div class="rdh-sequence-child"></div>
    <div class="rdh-sequence-child"></div>
</div>
```

## Animación en desplazamiento o scroll `rdh-scroll-animation`
Esta clase define un bloque de elementos con animación y se ejecuta al estar visibles después de desplazar la ventana (scroll). Los elementos a animar deben estar contenidos dentro de un elemento padre.

**`rdh-scroll-animation`** Elemento *padre*, define el bloque de elementos a animar.

**`rdh-animate`** Elemento *hijo*, define los elementos hijos a animar al estar visibles después de desplazar la ventana.

**`data-animation-class="css-class"`** Atributo que guarda la clase con la animación a ejecutar. El valor de "`css-class`" representa una clase de css con la animación vinculada.
```html
<div class="rdh-scroll-animation">
    <div class="rdh-animate" data-animation-class="fade-in"></div>
</div>
```

## Combinación de métodos
Todos los métodos son dinámicos y pueden reutilizarse las veces que sean necesario en el sitio. Las clases pueden combinarse de diferentes formas de acuerdo a las reglas de cada método para lograr el resultado deseado.
### Animación en secuencia + Animación básica
**`rdh-sequence-animation` + `rdh-animation`** Ejecuta la animación en secuencia al momento de cargar el sitio, sin importar en qué parte de la página estén los elementos a animar.
```html
<div class="rdh-sequence-animation" data-sequence-delay="0.2">
    <div class="rdh-animation rdh-sequence-child" data-animation-class="fade-in"></div>
    <div class="rdh-animation rdh-sequence-child" data-animation-class="fade-in"></div>
</div>
```
### Animación en secuencia + Animación en scroll
**`rdh-sequence-animation` + `rdh-scroll-animation`** Ejecuta la animación en secuencia al momento de ser visible después de desplazar la ventana.
```html
<div class="rdh-sequence-animation rdh-scroll-animation" data-sequence-delay="0.5">
    <div class="rdh-animate rdh-sequence-child" data-animation-class="fade-in"></div>
    <div class="rdh-animate rdh-sequence-child" data-animation-class="fade-in"></div>
</div>
```

# Activar componentes
Para poder hacer uso de las clases antes se tienen que inicializar los métodos, es necesario ejecutar los siguientes comandos.

**`sequenceAnimationInitialize()`** Inicializa la funcionalidad para las aniamciones en secuencia.

**`scrollAnimationInitialize()`** Inicializa la funcionalidad para las animaciones en scroll.

**`basicAnimationInitialize()`** Inicializa la funcionalidad para los elementos animados. Este comando siempre debe ir al útlimo de los demás.
```javascript
window.addEventListener("load", function() {
    sequenceAnimationInitialize();
    scrollAnimationInitialize();
    basicAnimationInitialize();
});
```

### And that's it. Hazme saber de algún error o sugerencia (: