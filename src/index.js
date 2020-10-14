function handleSplit(parent, elements, className){
    // Create accessible wrapper
   parent.setAttribute('aria-label', parent.innerText);
   parent.innerHTML = `<span aria-hidden="true"></span>`;

   const wrapper = parent.querySelector('[aria-hidden="true"]');

    elements.forEach(el => {
        // Edge case if value is a space
        if(el === ' '){el = '&nbsp;'}

        wrapper.innerHTML += `<span class="${className}">${el}</span>`
    })

    // Setup base styles
    parent.querySelectorAll(`.${className}`).forEach((el, i) => {
        // Get config attributes
        const delay = Number(parent.getAttribute('data-delay'));
        const initialDelay = Number(parent.getAttribute('data-initial-delay'));
        const staggerMode = parent.getAttribute('data-stagger-mode');

        let elDelay = delay;

        switch (staggerMode){
            case 'every other':
                // Only even letter will get a delay
                if((i + 1) % 2 === 0){
                     elDelay = delay;
                }else{
                     elDelay = 0;
                }
                break;
            default:
                 elDelay = delay * i;
        };

        if(initialDelay){
            elDelay = elDelay + initialDelay
        }

        el.style = `
            display: inline-block;
            --content: '${el.innerText}';
            --delay: ${elDelay}s;
        `;
    });
}

function splitByLetter(el){
   const splitEl = el.innerText.split('');

   handleSplit(el, splitEl, 'letter')
}

function splitByWord(el){
    const splitEl = el.innerText.split(' ');
    let newWords = [];

    splitEl.map(word => {
        newWords.push(word);
        newWords.push('&nbsp;');
    })

    handleSplit(el, newWords, 'word');
}

module.exports = {
    splitByLetter,
    splitByWord
}