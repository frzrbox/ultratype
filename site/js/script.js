import {splitByLetter, splitByWord} from './ultratype'

const splitLetterElements = document.querySelectorAll('.split-by-letter');
const splitWordElements = document.querySelectorAll('.split-by-word');
const clipboardElements = document.querySelectorAll('.clipboard')

splitLetterElements.forEach(el => {
    splitByLetter(el) 
})

splitWordElements.forEach(el => {
    splitByWord(el)
})
