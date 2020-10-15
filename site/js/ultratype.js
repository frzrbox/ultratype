function handleSplit(parent, elements, className) {
  // Create accessible wrapper
  parent.setAttribute("aria-label", parent.innerText);
  parent.innerHTML = `<span aria-hidden="true"></span>`;

  const wrapper = parent.querySelector('[aria-hidden="true"]');

  elements.forEach((el) => {
    // Edge case if value is a space
    if (el === " ") {
      el = "&nbsp;";
    }

    wrapper.innerHTML += `<span class="${className}">${el}</span>`;
  });

  // Setup base styles
  const innerElements = parent.querySelectorAll(`.${className}`);
  const filteredElements = Array.from(innerElements).filter(
    (el) => el.innerText.replace(/\s/g, "") !== ""
  );
  filteredElements.forEach((el, i) => {
    // Get config attributes
    const delay = Number(parent.getAttribute("data-delay"));
    const initialDelay = Number(parent.getAttribute("data-initial-delay"));
    const staggerMode = parent.getAttribute("data-stagger-mode");

    let elDelay = delay;

    switch (staggerMode) {
      case "every other":
        if (i % 2 === 0) {
          elDelay = delay;
        } else {
          elDelay = 0;
        }
        break;
      case "right":
        elDelay = delay * (filteredElements.length - i - 1);
        break;
      case "center":
        const middle = Math.floor(filteredElements.length / 2);

        if (i === middle) {
          elDelay = 0;
        } else {
          elDelay = delay * Math.abs(i - middle);
        }
        break;
      default:
        elDelay = delay * i;
    }

    if (initialDelay) {
      elDelay = elDelay + initialDelay;
    }

    el.style = `
       display: inline-block;
       --content: '${el.innerText}';
       --delay: ${elDelay}s;
   `;
  });

  // Handle ultratype group
  if (parent.closest("[data-ultratype-group")) {
    const ultratypeGroup = document.querySelector("[data-ultratype-group");
    const ultratypeGroupChildren = Array.from(ultratypeGroup.children);

    // Loop through all children within the ultratype group
    ultratypeGroupChildren.forEach((el, i) => {
      const spansWrapper = el.querySelector('[aria-hidden="true"]');
      if (spansWrapper) {
        const elementSpans = spansWrapper.querySelectorAll(`.${className}`);

        elementSpans.forEach((span, j) => {
          // Pause all animations except for the first
          if (i !== 0) {
            span.style.animationPlayState = "paused";
          }

          if (j === elementSpans.length - 1) {
            span.addEventListener("animationend", () => {
              if(i < ultratypeGroupChildren.length - 1){
                let nextIndex = i + 1;
                // Need to do this whole thing or won't know what way the next item splits by
                const nextItemSpans = Array.from(
                  ultratypeGroupChildren[nextIndex].querySelector(
                    '[aria-hidden="true"'
                  ).children
                );
                nextItemSpans.forEach((span) => {
                  span.style.animationPlayState = "running";
                });
              }
            });
          }
        });
      }
    });
  }
}

function splitByLetter(el) {
  const splitEl = el.innerText.split("");

  handleSplit(el, splitEl, "letter");
}

function splitByWord(el) {
  const splitEl = el.innerText.split(" ");
  let newWords = [];

  splitEl.map((word) => {
    newWords.push(word);
    newWords.push("&nbsp;");
  });

  handleSplit(el, newWords.slice(0, -1), "word");
}

module.exports = {
  splitByLetter,
  splitByWord,
};