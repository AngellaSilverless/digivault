jQuery(document).ready(function( $ ) {

/* Add class on load */

    $("html").delay(1500).queue(function(next) {
        $(this).addClass("loaded");

        next();
    });
 
/* Smooth scroll */

    $('nav a, a.button, a.next-section').click(function(e) {
	    if($(this).attr('href') != "#") {
	        $('html, body').animate({
	            scrollTop: $( $(this).attr('href') ).offset().top
	        }, 500);
	        return false;
	    }
    });

/* Slider control */

	// Bigger Slide

	$(".slider .prev").click(function() {
		var slider    = $(this).parents(".slider-wrapper");
		var current   = $(this).parents(".slider-item");
		var margin    = parseInt(parseFloat(slider.css("margin-left")) * (100 / document.documentElement.clientWidth));

		var slide_w   = 40;
		var animation = 1000;
		
		current.removeClass("current").find(".copy").slideUp(1000);
		current.prev().addClass("current").find(".copy").slideDown(1000);
		
		
		$(".slider-item:last").insertBefore($(".slider-item:first"));
		slider.css("margin-left", (margin + (-1) * slide_w) + "vw");
		
		slider.animate({
			marginLeft: (margin + "vw")
		}, animation);
	});
	
	$(".slider .next").click(function() {
		var slider    = $(this).parents(".slider-wrapper");
		var current   = $(this).parents(".slider-item");
		var margin    = parseInt(parseFloat(slider.css("margin-left")) * (100 / document.documentElement.clientWidth));

		var slide_w   = 40;
		var animation = 1000;
		
		current.removeClass("current").find(".copy").slideUp(1000);
		current.next().addClass("current").find(".copy").slideDown(1000);
		
		slider.animate({
			marginLeft: (margin + (-1) * slide_w) + "vw"
		}, animation, function() {
			$(".slider-item:first").insertAfter($(".slider-item:last"));
			slider.css("margin-left", (margin + "vw"));
		});
	});
	
	// Smaller Slide
	
	$(".slider-insights .prev").click(function() {
		var slider    = $(".slider-wrapper");
		var margin    = parseInt(parseFloat(slider.css("margin-left")) * (100 / document.documentElement.clientWidth));

		var slide_w   = 30;
		var animation = 1000;
		
		$(".slider-item:last").insertBefore($(".slider-item:first"));
		slider.css("margin-left", (margin + (-1) * slide_w) + "vw");
		
		slider.animate({
			marginLeft: (margin + "vw")
		}, animation);
	});
	
	$(".slider-insights .next").click(function() {
		var slider    = $(".slider-wrapper");
		var margin    = parseInt(parseFloat(slider.css("margin-left")) * (100 / document.documentElement.clientWidth));

		var slide_w   = 30;
		var animation = 1000;
		
		slider.animate({
			marginLeft: (margin + (-1) * slide_w) + "vw"
		}, animation, function() {
			$(".slider-item:first").insertAfter($(".slider-item:last"));
			slider.css("margin-left", (margin + "vw"));
		});
	});

// ========== Controller for lightbox elements

/*
	$(".gallery").each(function() {
		$(this).find(".lightbox-gallery").magnificPopup({
	        type: 'image',
	        gallery:{
	            enabled:true
	        }
	    });
	});
    
    $('.single-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});
	
	$('.post-image a').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300
		}
	});
 
// GLOBAL OWL CAROUSEL SETTINGS

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayHoverPause:true,
        nav:true,
    	    navClass: ['owl-prev', 'owl-next'],
        responsive:{
            0:{
                items: 1
            },
            768: {
	            items: 2
            },
            992:{
                items: 3
            },
            1200: {
	            items: 4
            }
        }
    });
*/

/* CLASS AND FOCUS ON CLICK */
    
    $(".menu-trigger").click(function() {
	    $(".menu-collapse").toggleClass("visible");
	    $(".current-menu-item").toggleClass("loaded");
	    $(".menu-trigger").toggleClass("opened");
    });
    
    $(".read-more").click(function() {
	    $(this).prev().slideToggle();
	    $(this).text($(this).text() == "Read more" ? "Read less" : "Read more");
    });
    
    $(".toggle-solutions a").click(function(e) {
	    if (e.target !== this)
			return;
    
	    e.preventDefault();
	    $(this).parent().find(".sub-menu").slideToggle();
    });
    
    $('#main-contact textarea').on('input', function () {
		this.style.height = 'auto';
		this.style.height = (this.scrollHeight) + 'px';
	});
	
	$(".custom-select").click(function() {
		$(this).find(".options").toggleClass("visible");
	});
	
	$(".options span").click(function() {
		$(this).parents(".custom-select").find("input").val($(this).text());
	});
	
	$(".slider-item").hover(function() {
		$(this).find(".wrapper-more").stop().slideDown();
	}, function() {
		$(this).find(".wrapper-more").stop().slideUp();
	});

// ========== Add class if in viewport on page load

	$.fn.isOnScreen = function(){
	    
	    var win = $(window);
	    
	    var viewport = {
	        top : win.scrollTop(),
	        left : win.scrollLeft()
	    };
	    viewport.right = viewport.left + win.width();
	    viewport.bottom = viewport.top + win.height();
	    
	    var bounds = this.offset();
	    bounds.right = bounds.left + this.outerWidth();
	    bounds.bottom = bounds.top + this.outerHeight();
	    
	    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	    
	};

	$('.slide-up, .slide-down, .slide-right, .slow-fade, .home-text-effect').each(function() {
		if ($(this).isOnScreen()) {
			$(this).addClass('active');
		} 
	});

// ========== Add class on entering viewport

	$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
	};
	
	$(window).on('resize scroll', function() {
		
		$('.slide-up, .slide-down, .slide-right, .slow-fade, .home-text-effect').each(function() {
			if ($(this).isInViewport()) {
				$(this).addClass('active');    
			} 
		});
	    
	});

});//Don't remove ---- end of jQuery wrapper
