// Scroll to top
$(document).ready(function() {
	$('#go-top').click(function() {
		$('body, html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});