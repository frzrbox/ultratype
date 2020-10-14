import {splitByLetter} from '../../src'

const splitLetterElements = document.querySelectorAll('.split-by-letter');

splitLetterElements.forEach(el => {
    splitByLetter(el) 
})
