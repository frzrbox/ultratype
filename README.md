# Ultratype

Dynamic typography for the web

⚠️⚠️ Still A Work In Progress Dont Use In Production ⚠️⚠️

## Api

[Text Split](https://github.com/frzrbox/ultratype#text-split)

## Ultratype

**props**

<!-- prettier-ignore -->
| Name        | Description                       | Default | Required |
|-------------|-----------------------------------|---------|----------|
| el          | Element that will be affected     | null    | true     |
| activeClass | A class to manipulate the element | active  | false    |

### Usage

```html
<h1>Cool heading</h1>
```

```js
import ultratype from "ultratype";

const element = document.querySelector("h1");

ultratype({ el: element }); //activeClass will be 'active by default'
ultratype({ el: element, activeClass: "visible" }); // activeClass will be 'visible'
```

## Text Splitting

Split and animate text in an accessible way

**Methods**

<!-- prettier-ignore -->
| Name              | Description                     | Props              |
| ----------------- | ------------------------------- | ------------------ |
| splitByLetter     | splits an element by letter     | stagger, className |
| splitByWord       | splits an element by word       | stagger, className |
| applyActiveClass  | add activeClass to element      | none               |
| removeActiveClass | remove activeClass from element | none               |
| toggleActiveClass | toggles activeClass on element  | none               |

### Usage

```html
<h1>This is a heading</h1>
<button class="toggleText">Toggle Text Animation</button>
```

```js
import ultratype from 'ultratype';

const toogleButton = document.querySelector('.toggleText');
const byLetter = document.querySelector('.by-letter);

const letters = ultratype({el: byLetter});
letters.splitByLetter();

toggleButton.addEventListener('click', () => letters.toggleActiveClass())
```

```css
.letter {
	opacity: 0;
	color: var(--color-dark-accent);
	transform: translateX(10px);
	transition: var(--transition-out);
	font-size: 10rem;
	font-family: var(--special-accent-font);
}
.by-letter.active .letter {
	opacity: 1;
	transform: translateX(0px);
	transition: var(--transition-in);
}
```
