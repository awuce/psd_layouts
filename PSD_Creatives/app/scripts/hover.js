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