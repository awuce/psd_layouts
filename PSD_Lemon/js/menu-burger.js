$(document).ready(function() {
	$('.menu__burger').click(function(event) {
		$('.menu__burger, .menu__list').toggleClass('active-burger');
		$('body').toggleClass('lock-scroll');
	})
})