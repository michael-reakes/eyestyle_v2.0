
$(document).ready(function() {
	
	//Fix IE z-index issues
	if ($.browser.msie  && parseInt($.browser.version) == 7) {
			var zIndexNumber = 1000;
			$('#Menu ul li').each(function() { /* Pages menu */
				$(this).css('z-index', zIndexNumber);
				zIndexNumber -= 10;
			});
			$('.SideCategoryListFlyout ul li').each(function() {
				$(this).css('z-index', zIndexNumber);
				zIndexNumber -= 10;
			});
		}
	if ($.browser.msie  && parseInt($.browser.version) == 6) {
			var zIndexNumber = 1000;
			$('#Menu ul li').each(function() { /* Pages menu */
				$(this).css('z-index', zIndexNumber);
				zIndexNumber -= 10;
			});
			$('.SideCategoryListFlyout ul li').each(function() {
				$(this).css('z-index', zIndexNumber);
				zIndexNumber -= 10;
			});
		}
	
});