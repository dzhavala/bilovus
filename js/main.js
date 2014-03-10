(function ($, undefined){

    // Waypoint 
    $('.grid-item').waypoint(function(direction) {
    	$(this).removeClass('hidden');
    }, {
    	offset: '95%',
    	triggerOnce: true
    });

    $(window).resize(function() {
        $.waypoints('refresh');
    });


    // Compact header
    var compactHeader = false,
    	windowScrollPosiiton;

    $(window).scroll(function() {
    	windowScrollPosiiton = $(window).scrollTop();
        if (!compactHeader && windowScrollPosiiton > 0) {
        	compactHeader = true;
        	$('.header').addClass('is-compact-header');    	
        } else if (compactHeader && windowScrollPosiiton == 0) {
        	compactHeader = false;
        	$('.header').removeClass('is-compact-header'); 
        }
    });


    // Menu trigger
    $('.menu-trigger').on('click', function(event) {
        event.preventDefault();
        $('.header').toggleClass('is-opened-header');
    });
}(jQuery));
