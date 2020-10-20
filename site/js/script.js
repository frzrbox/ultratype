import { splitByLetter, splitByWord } from '../../src';

const splitLetterElements = document.querySelectorAll('.split-by-letter');
const splitWordElements = document.querySelectorAll('.split-by-word');
const scrollElements = document.querySelectorAll('.scroll-element');

const observer = new IntersectionObserver((entries) => {
	entries.map((entry) => {
		if (entry.isIntersecting) {
			entry.target.setAttribute('data-state', 'in-view');
		} else {
			entry.target.removeAttribute('data-state');
		}
	});
});

splitLetterElements.forEach((el) => {
	splitByLetter(el);
});

splitWordElements.forEach((el) => {
	splitByWord(el);
});

scrollElements.forEach((el) => {
	observer.observe(el);
});

const staggerModesSelect = document.querySelector('#stagger-modes');
const staggerModeExample = document.querySelector('.stagger-mode__example');
const initialText = staggerModeExample.innerHTML;

staggerModeExample.innerHTML = `${initialText}  ${staggerModesSelect.value}`;
splitByLetter(staggerModeExample);

staggerModesSelect.addEventListener('change', (e) => {
	staggerModeExample.innerHTML = `${initialText}  ${e.target.value}`;
	staggerModeExample.setAttribute('data-stagger-mode', e.target.value);
	splitByLetter(staggerModeExample);
});
