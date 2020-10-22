---
layout: 'layouts/docs.njk'
title: Documentation
metaDesc: Dynamic typography for the web
---

## <a id="get-started">Get Started</a>

Ultratype is a lightweight library for creating split text animations. It differs from other animation libraries because it acts only as a splitter of sorts. What this means is that it does no animating own its own, rather it splits the text and gives each element __css custom properties__ that can be referenced in css. One of the main purposes of Ultratype is to leverage the cascade and power of modern css.

<hr/>

## <a id="installation">Installation</a>
You can install Ultratype with the following methods.

__NPM__ 

```shell    
npm i ultratype
```

__UNPKG__
```html
<script src="https://unpkg.com/ultratype@0.1.0/lib/index.js"></script>
```

<hr/>

## <a id="how-it-works">How it works</a>

In order to create split text animations and do it accessibly it requires a significant amount of markup.



__Before__
```html
<h2>Heading</h2>
```

__After__
```html
<h2 aria-label="heading">
    <span aria-hidden="true">
        <span>H<span>
        <span>e<span>
        <span>a<span>
        <span>d<span>
        <span>i<span>
        <span>n<span>
        <span>g<span>
    </span>    
<h2>
```

If you're only splitting one or two elements manually doing this isn't so bad. The real issue comes when you have to split multiple elements or if your text is coming from an external source like a CMS. Ultratype essentially acts as a way to automate this proccess while adding some extra goodies along the way. 

<hr/>

## <a id="options">Options</a>

By adding the following __data-attributes__ to your element you can change the way __custom properties__ are assigned to it.

### data-delay

- Accepts a number greater than 0
- This will be the delay between the split elements in seconds (default: 0)
- If no delay is specified the elements will not stagger
- This is accessed in css as __var(--delay)__

```html
<!-- The delay between each letter will be 0.4s -->
<h2 class="split-by-letter" data-delay="0.4"><h2>
```


### data-initial-delay
  - Accepts a number greater than 0
  - Added to each elements __var(--delay)__

```html
<!-- The total delay for each element will be it's staggered value + 1s -->
<h2 class="split-by-letter" data-delay="0.4" data-initial-delay="1">Heading</h2>
```

### data-stagger-mode
  - Changes the direction that the delay is added to each element
  - Options: left, right, center
  - Defaults to left

```html
<!-- The element's letters will have the shortest delay starting from the right  -->
<h2 class="splt-by-letter" data-delay="0.2" data-stagger-mode="right">Heading</h2>
```

<hr/>

## <a id="custom-properties">Custom Properties</a>
In Ultratype everytime an element is split, the following custom properties are added to be referenced in css.

- __delay__ - value in seconds, can be used to create staggering effects with your elements
- __content__ - the content of the split element (ex. if the element is 'l' then the value of __var(--content)__ would also be 'l')

<hr/>

## <a id="split-by-letter">Split by letter</a>

A built-in function that will split you element's text into letters. It accepts one element as an argument. Once the element is split, it will assign each letter a class of __letter__ to reference in css.

__Example__

```html
<h2 class="split-by-letter" data-delay="0.1">Heading</h2>
```

```js
// Only required if you are using npm, otherwise you can just call splitByLetter()
import {splitByLetter} from 'ultratype/lib';

const splitElement = document.querySelector('.split-by-letter');

splitByLetter(splitElement);
```

```css
.split-by-letter{
    font-size: 2em;
}

.split-by-letter .letter{
    /* Adding var(--delay) here creates the staggered animation  */
    animation: fade 0.4s var(--delay) linear both;
}

@keyframes fade{
    from{
        opacity: 0;
    }
}
```

<hr/>

## <a id="split-by-word">Split by word</a>

A built-in function that will separate you element's text by words. It accepts one element as an argument. Once the element is split, it will assign each word a class of __word__ to reference in css.

__Example__

```html
<h2 class="split-by-word" data-delay="0.1">Split By Word</h2>
```

```js
// Only required if you are using npm, otherwise you can just call splitByWord()
import {splitByWord} from 'ultratype/lib';

const splitElement = document.querySelector('.split-by-word');

splitByWord(splitElement);
```

```css
.split-by-word{
    font-size: 2em;
}

.split-by-word .word{
    /* Adding var(--delay) here creates the staggered animation  */
    animation: slideIn 0.4s var(--delay) linear both;
}

@keyframes slideIn{
    from{
        transform: translate3d(0, 20px, 0);
        opacity: 0;
    }
}
```