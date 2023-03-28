(function ($) {

	$(window).on('load', function() {
		// init lazyload
		initLazyload($('body'));
	});

	// for modal bootstrap
	$('.modal').on('show.bs.modal', function() {
		var $this = $(this);
		setTimeout(function() {
			initLazyload($this);
		}, 300);
	});

	// global event listener
	$(document).ajaxStop(	function() {
				var $this = $(this);
				initLazyload($this);
			}
	);

	function initLazyload($wrapper) {
		$wrapper.find('[data-original]').lazyload({src: 'data-original'});
	}

})(jQuery);
