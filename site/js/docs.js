const openNavButton = document.querySelector('.docs__open-nav');
const closeNavButton = document.querySelector('.docs__close-nav');
const docsNavigation = document.querySelector('.docs__navigation');

openNavButton.addEventListener('click', () => {
	docsNavigation.classList.add('active');
});

closeNavButton.addEventListener('click', () => {
	docsNavigation.classList.remove('active');
});
