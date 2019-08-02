
const btnClose = document.querySelector('.btn-close');
const btnOpen = document.querySelector('.btn-open');
const menu = document.querySelector(".menu");



btnClose.addEventListener('click', function() {
	

	//menu.innerHTML = "";

	menu.classList.add('fade-menu');


	setTimeout(() => {
		menu.style.display = 'none';
	},500)
	
})

btnOpen.addEventListener('click', function() {
	const menu = document.querySelector(".menu");

	
	menu.classList.remove('fade-menu');
	menu.style.display = 'block';


	
})

