'use strict';

const items = document.querySelectorAll('.accordion-item');
const accordion = document.querySelector('.accordion');

let opened = '';

accordion.addEventListener('click', function (e) {
	e.preventDefault();
	const clicked = e.target.closest('.accordion-item');
	if (!clicked) return;

	items.forEach(item => {
		item.querySelector('.answer').classList.add('hidden');
		item.querySelector('.question').classList.remove('font-bold');
		item.querySelector('.arrow').classList.remove('rotate-180');
	});

	if (!opened || opened !== clicked.dataset.tab) {
		clicked.querySelector('.answer').classList.remove('hidden');
		clicked.querySelector('.question').classList.add('font-bold');
		clicked.querySelector('.arrow').classList.add('rotate-180');
		opened = clicked.dataset.tab;
	} else if (opened === clicked.dataset.tab) {
		clicked.querySelector('.answer').classList.add('hidden');
		clicked.querySelector('.question').classList.remove('font-bold');
		clicked.querySelector('.arrow').classList.remove('rotate-180');
		opened = '';
	}
});
