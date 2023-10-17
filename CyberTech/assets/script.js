const burger = document.querySelector('.burger');
const sidebar = document.querySelector('ul.sidebar');

burger.addEventListener('click', () => {
	sidebar.classList.toggle('open');
});