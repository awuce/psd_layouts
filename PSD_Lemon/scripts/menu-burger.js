//JQuery
// $(document).ready(function() {
// 	$('.menu__burger').click(function(event) {
// 		$('.menu__burger, .menu__list').toggleClass('active-burger');
// 		$('body').toggleClass('lock-scroll');
// 	})
// })
//Vanalla JS
function menuBurger() {
	document.querySelector('.menu__burger').classList.toggle('active-burger');
	document.querySelector('.menu__list').classList.toggle('active-burger');
	document.body.classList.toggle('lock-scroll');
}