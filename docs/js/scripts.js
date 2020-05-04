const element = document.querySelector('.element')
const addBtn = document.querySelector('.add-btn')
const removeBtn = document.querySelector('.remove-btn')
const item = new CreateTextSplit()

item.config({
    el: element,
    activeClass: 'active'
});

item.splitByWord({
    stagger: 0.1,
    className: 'cool'
})

addBtn.addEventListener('click', () => {
    item.applyActiveClass()
})

removeBtn.addEventListener('click', () => {
    item.removeActiveClass()
})