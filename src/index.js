class CreateTextSplit {
    constructor() {
        this.element;
        this.className;
        this.activeClass;
    }

    config(options) {
        const { el, activeClass } = options;
        this.element = el;
        this.activeClass = activeClass;
    }

    applyActiveClass() {
        this.element.classList.add(this.activeClass);
    }

    removeActiveClass() {
        this.element.classList.remove(this.activeClass);
    }

    splitByWord({ stagger, ease = 'ease', className }) {
        if (this.element) {
            const letters = this.element.innerText.split('');
            this.element.innerHTML = ''

            letters.map((letter) => {
                if (letter === ' ') {
                    letter = '&nbsp;'
                }
                this.element.innerHTML += `<span class=${className}>${letter}</span>`
            })

            const children = this.element.querySelectorAll(`.${className}`);

            children.forEach((child, index) => {
                let itemStagger = stagger * index;

                child.style.cssText = `
                        transition-delay: ${itemStagger}s;
                        animation-delay: ${itemStagger}s;
                        display: inline-block;
                    `
            })
        } else {
            console.error('NO ELEMENT FOUND: Add one using the config method')
        }
    }
}

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