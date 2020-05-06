# Ultratype

Dynamic typography for the web

[Demo](https://ultratype.netlify.app/)

`npm i ultratype`

## Api

[Text Split](https://github.com/frzrbox/ultratype#text-splitting)

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
import ultratype from "ultratype/lib";

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
import ultratype from "ultratype/lib";

const toogleButton = document.querySelector(".toggleText");
const byLetter = document.querySelector(".by-letter");

const letters = ultratype({ el: byLetter });
letters.splitByLetter();

toggleButton.addEventListener("click", () => letters.toggleActiveClass());
```

```css
:root {
	/* Easing */
	--transition-out: all 0.2s ease-out;
	--transition-in: all 0.2s ease-in;
}

.letter {
	opacity: 0;
	transform: translateX(10px);
	transition: var(--transition-out);
}
.by-letter.active .letter {
	opacity: 1;
	transform: translateX(0px);
	transition: var(--transition-in);
}
```

### Accessibility

Ultratype automatically converts the split text into accessible html

**Input**

```html
<h1>Yooo I have clout</h1>
```

**Output**

```html
<h1 aria-label="Yooo I have clout">
	<span aria-hidden="true">
		<span>Yooo</span>
		<span> </span>
		<span>I</span>
		<span> </span>
		<span>have</span>
		<span> </span>
		<span>clout</span>
	</span>
</h1>
```
