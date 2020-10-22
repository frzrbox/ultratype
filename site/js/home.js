import { splitByLetter } from '../../src';

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
