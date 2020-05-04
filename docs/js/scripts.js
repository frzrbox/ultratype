import { CreateTextSplit } from '../../src/index'

const byLetter = document.querySelector('.by-letter')
const byWord = document.querySelector('.by-word')
const addBtn = document.querySelector('.add-btn')
const removeBtn = document.querySelector('.remove-btn')
const letters = new CreateTextSplit()
const words = new CreateTextSplit()

letters.config({
    el: byLetter,
    activeClass: 'active'
});

letters.splitByLetter({
    stagger: 0.05,
    className: 'letter'
})

words.config({
    el: byWord
})

words.splitByWord({
    stagger: 0.05,
    className: "word"
})


addBtn.addEventListener('click', () => {
    letters.applyActiveClass()
    words.applyActiveClass()
})

removeBtn.addEventListener('click', () => {
    letters.removeActiveClass()
    words.removeActiveClass()
})