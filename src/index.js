export class CreateTextSplit {
    constructor() {
        this.element;
        this.className;
        this.activeClass;
    }

    config({ el, activeClass = 'active' }) {
        this.element = el;
        this.activeClass = activeClass;
    }

    applyActiveClass() {
        this.element.classList.add(this.activeClass);
    }

    removeActiveClass() {
        this.element.classList.remove(this.activeClass);
    }

    handleSplit(arr, className, stagger) {
        arr.map((el) => {
            if (el === ' ') {
                el = '&nbsp;'
            }
            this.element.innerHTML += `<span class=${className}>${el}</span>`
        })

        // Add the delays to the children of the arr
        const children = this.element.querySelectorAll(`.${className}`);

        children.forEach((child, index) => {
            let itemStagger = stagger * index;

            child.style.cssText = `
                    transition-delay: ${itemStagger}s;
                    animation-delay: ${itemStagger}s;
                    display: inline-block;
                `
        })
    }

    splitByLetter({ stagger = 0.1, className = 'item' }) {
        if (this.element) {
            const letters = this.element.innerText.split('');
            // Clear the element
            this.element.innerHTML = ''

            this.handleSplit(letters, className, stagger)

        } else {
            console.error('NO ELEMENT FOUND: Add one using the config method')
        }
    }

    splitByWord({ stagger = 0.1, className = 'item' }) {
        if (this.element) {
            const words = this.element.innerText.split(' ');
            // Clear the element
            this.element.innerHTML = ''

            // Handle the spaces between the words by add nbsp;
            let newWordsArr = [];

            words.map(word => {
                newWordsArr.push(word);
                newWordsArr.push('&nbsp;')
            })

            this.handleSplit(newWordsArr, className, stagger)

        } else {
            console.error('NO ELEMENT FOUND: Add one using the config method')
        }
    }
}
