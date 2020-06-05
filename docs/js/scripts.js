import ultratype from '../../src/index'

const heroText = document.querySelector('.hero-text')
const byLetter = document.querySelector('.by-letter')
const byWord = document.querySelector('.by-word')
const addBtn = document.querySelector('.add-btn')
const removeBtn = document.querySelector('.remove-btn')
const headingInput = document.querySelector('.heading-input')
const subheadInput = document.querySelector('.subhead-input')
const hoverEffect = document.querySelectorAll('.hover-effect');


const hero = ultratype({ el: heroText })
const letters = ultratype({ el: byLetter })
const words = ultratype({ el: byWord })

hoverEffect.forEach(effect => {
    ultratype({ el: effect }).splitByLetter({ className: 'hover-letter', stagger: 0.05 });
})



hero.splitByLetter({ className: 'text-element' })
letters.splitByLetter()
words.splitByWord()

addBtn.addEventListener('click', () => {
    letters.applyActiveClass()
    words.applyActiveClass()
})

removeBtn.addEventListener('click', () => {
    letters.removeActiveClass()
    words.removeActiveClass()
})


headingInput.addEventListener('change', e => {
    byLetter.innerText = e.target.value
    letters.splitByLetter()
})

subheadInput.addEventListener('change', e => {
    byWord.innerText = e.target.value
    words.splitByWord()
})