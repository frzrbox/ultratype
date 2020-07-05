function handleSplit(arr, className, stagger, parent, text, from) {
  // Set the aria label for accessiblity
  parent.setAttribute("aria-label", text);

  const ariaContainer = document.createElement("span");
  ariaContainer.setAttribute("aria-hidden", true);

  arr.map((el) => {
    if (el === " ") {
      el = "&nbsp;";
    }
    ariaContainer.innerHTML += `<span class=${className}>${el}</span>`;
  });

  parent.appendChild(ariaContainer);

  // Add the delays to the children of the arr
  const children = ariaContainer.querySelectorAll(`.${className}`);

  children.forEach((child, index) => {
    let itemStagger = stagger * index;

    if (from === "right") {
      itemStagger = stagger * (children.length - index - 1);
    }

    if (from === "center") {
      const middle = Math.floor(children.length / 2);

      if (index === middle) {
        itemStagger = 0;
      } else {
        // Set the items stagger equally to the other children starting from the middle
        itemStagger = stagger * Math.abs(index - middle);
        console.log(index - middle);
      }
    }

    // Don't and the animation delay to space in words
    if (child.innerHTML !== "&nbsp;") {
      child.style.cssText = `
                            transition-delay: ${itemStagger}s;
                            animation-delay: ${itemStagger}s;
                            display: inline-block;
                        `;
    }
  });
}

const ultratype = ({ el, activeClass = "active" }) => {
  const textSplit = {
    splitByWord({ stagger = 0.1, className = "word", from = "left" } = {}) {
      const elContent = el.innerText;

      const words = el.innerText.split(" ");

      el.innerHTML = "";

      // Handle the spaces between the words by add nbsp;
      let newWordsArr = [];

      words.map((word) => {
        newWordsArr.push(word);
        newWordsArr.push("&nbsp;");
      });
      return handleSplit(newWordsArr, className, stagger, el, elContent, from);
    },
    splitByLetter({ stagger = 0.1, className = "letter", from = "left" } = {}) {
      const elContent = el.innerText;

      const letters = el.innerText.split("");

      el.innerHTML = "";

      handleSplit(letters, className, stagger, el, elContent, from);
    },
    applyActiveClass() {
      el.classList.add(activeClass);
    },
    removeActiveClass() {
      el.classList.remove(activeClass);
    },
    toggleActiveClass() {
      el.classList.toggle(activeClass);
    },
  };

  return textSplit;
};

module.exports = ultratype;
