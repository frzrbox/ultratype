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
