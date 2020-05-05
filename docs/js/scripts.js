import ultratype from '../../src/index'

const heroText = document.querySelector('.hero-text')
const byLetter = document.querySelector('.by-letter')
const byWord = document.querySelector('.by-word')
const addBtn = document.querySelector('.add-btn')
const removeBtn = document.querySelector('.remove-btn')



const hero = ultratype({ el: heroText })
const letters = ultratype({ el: byLetter })
const words = ultratype({ el: byWord })

hero.splitByLetter({ className: 'text-element', stagger: 0.15 })
letters.splitByLetter()
words.splitByWord()

addBtn.addEventListener('click', () => {
    letters.applyActiveClass()
    words.applyActiveClass()
})

removeBtn.addEventListener('click', () => {
    letters.removeActiveClass()
    words.removeActiveClass().addActiveClass()
})