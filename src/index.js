function handleSplit(arr, className, stagger, parent, text) {
    // Set the aria label for accessiblity
    parent.setAttribute('aria-label', text)

    const ariaContainer = document.createElement('span');
    ariaContainer.setAttribute('aria-hidden', true);


    arr.map((el) => {
        if (el === ' ') {
            el = '&nbsp;'
        }
        ariaContainer.innerHTML += `<span class=${className}>${el}</span>`
    })

    parent.appendChild(ariaContainer)

    // Add the delays to the children of the arr
    const children = ariaContainer.querySelectorAll(`.${className}`);

    children.forEach((child, index) => {
        let itemStagger = stagger * index;

        child.style.cssText = `
                        transition-delay: ${itemStagger}s;
                        animation-delay: ${itemStagger}s;
                        display: inline-block;
                    `
    })
}

const ultratype = ({ el, activeClass = 'active' }) => {
    const textSplit = {
        splitByWord(params = { stagger: 0.1, className: "word" }) {
            let className = params.className
            let stagger = params.stagger

            const elContent = el.innerText

            const words = el.innerText.split(' ');
            // Clear the element
            el.innerHTML = ''

            // Handle the spaces between the words by add nbsp;
            let newWordsArr = [];

            words.map(word => {
                newWordsArr.push(word);
                newWordsArr.push('&nbsp;')
            });
            return handleSplit(newWordsArr, className, stagger, el, elContent)

        },
        splitByLetter(params = { stagger: 0.1, className: "letter" }) {
            let className = params.className
            let stagger = params.stagger

            const elContent = el.innerText

            const letters = el.innerText.split('');
            // Clear the element
            el.innerHTML = '';

            handleSplit(letters, className, stagger, el, elContent);
        },
        applyActiveClass() {
            el.classList.add(activeClass);
        },
        removeActiveClass() {
            el.classList.remove(activeClass);
        },
        toggleActiveClass() {
            el.classList.toggle(activeClass)
        }
    }

    return textSplit;
}

module.exports = ultratype;
