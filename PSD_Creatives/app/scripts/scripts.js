let scrollLink = document.getElementById('scroll__link');
let corner = document.getElementById('corner');

scrollLink.addEventListener('mouseover', (event) => {
	event.target.setAttribute('style', 'background-color: #f5f5f5');
	corner.setAttribute('style', 'border-color: rgba(0,0,0,1)');
});

scrollLink.addEventListener('mouseout', (event) => {
	event.target.setAttribute('style', 'background-color: rgba(0,0,0,0)');
	corner.setAttribute('style', 'border-color: #f5f5f5');
});

let links = document.getElementById('linkToTeam');
l.addEventListener('click', slowScroll);

function slowScroll(e) {
	e.preventDefault();
	document.querySelector(this.getAttribute('href'))
			.scrollIntoView({ behavior: 'smooth' });
}

function menuBurger() {
	document.querySelector('.nav-wrapper').classList.toggle('active');
	document.querySelector('.nav').classList.toggle('active');
	const items = document.querySelectorAll('.nav__item');
	for (const i of items) {
		i.classList.toggle('active');
	}
	document.body.classList.toggle('lock');
}