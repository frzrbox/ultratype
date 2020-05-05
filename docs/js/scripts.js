import ultratype from '../../src/index'

const byLetter = document.querySelector('.by-letter')
const byWord = document.querySelector('.by-word')
const addBtn = document.querySelector('.add-btn')
const removeBtn = document.querySelector('.remove-btn')

const letters = ultratype({ el: byLetter })
const words = ultratype({ el: byWord })

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