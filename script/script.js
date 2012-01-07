// Scroll to top
$(document).ready(function() {
	// hide #go-top at initial position
	$('#go-top').hide();
	
	// fade in #go-top
	$(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('#go-top').fadeIn();
			} else {
				$('#go-top').fadeOut();
			}
		});
		
		// scroll to 0px on click
		$('#go-top').click(function() {
			$('body, html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});