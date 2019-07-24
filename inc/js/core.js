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
		var animation = 500;
		
		current.removeClass("current").find(".copy").slideUp(animation);
		current.prev().addClass("current").find(".copy").slideDown(animation);
		
		
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
		var animation = 500;
		
		current.removeClass("current").find(".copy").slideUp(animation);
		current.next().addClass("current").find(".copy").slideDown(animation);
		
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
		var animation = 500;
		
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
		var animation = 500;
		
		slider.animate({
			marginLeft: (margin + (-1) * slide_w) + "vw"
		}, animation, function() {
			$(".slider-item:first").insertAfter($(".slider-item:last"));
			slider.css("margin-left", (margin + "vw"));
		});
	});

/* Class and focus on click */
    
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
		$(this).parents(".custom-select").find("input").val($(this).text()).trigger("input");
	});
	
	$(".category__filter").click(function() {
		var cat = $(this).attr("data-name");
		
		$(this).addClass("active").siblings("a").removeClass("active");
		$(".reset-category").addClass("visible");
		
		if($(".slider-wrapper").attr("current-filter") != cat) {
		
			var itemsHide = $(".slider-item").not("." + cat);
			var itemsShow = $(".slider-item." + cat);
			
			itemsHide.find(".wrapper-info").addClass("hidden").animate({
				width: 0
			}, 300);
			itemsHide.find("h2.heading").animate({
				opacity: 0
			}, 300, function() {
				itemsHide.animate({
					width: 0
				}, 500, function() {
					
				});
			});
			
			itemsShow.animate({
				width: "30vw"
			}, 500, function() {
				itemsShow.find("h2.heading").animate({
					opacity: 1
				}, 300);
				itemsShow.find(".wrapper-info").animate({
					width: "90%"
				}, 300, function() {
					itemsShow.find(".wrapper-info").removeClass("hidden");
				});
			});
			
			if($(".slider-item." + cat).length > 3) {
				$(".control-wrap").removeClass("hidden");
			} else {
				$(".control-wrap").addClass("hidden");
			}
			
			$(".slider-wrapper").attr("current-filter", cat);
		}
	});
	
	$(".reset-category").click(function() {
		
		if($(".slider-wrapper").attr("current-filter") != "all") {
		
			$(".category__filter").removeClass("active");
			$(".reset-category").removeClass("visible");
			
			var items = $(".slider-item");
	
			items.animate({
				width: "30vw"
			}, 500, function() {
				items.find("h2.heading").animate({
					opacity: 1
				}, 300);
				items.find(".wrapper-info").animate({
					width: "90%"
				}, 300, function() {
					items.find(".wrapper-info").removeClass("hidden");
				});
			});
			
			if(items.length > 3) {
				$(".control-wrap").removeClass("hidden");
			} else {
				$(".control-wrap").addClass("hidden");
			}
			
			$(".slider-wrapper").attr("current-filter", "all");
		
		}
	});
	
	$(".slider-item").hover(function() {
		$(this).find(".wrapper-more").stop().slideDown();
	}, function() {
		$(this).find(".wrapper-more").stop().slideUp();
	});
	
	$("#map .marker").click(function() {
		var pin = "#pin-" + $(this).attr("id");
		
		$(".pin").not(pin).animate({
			opacity: 0
		}, 500, function() {
			$(".pin").not(pin).css({
				"display": "none"
			})
		});
		
		$(pin).css({
			display: "block"
		}).animate({
			opacity: 1
		}, 500);
	});
	

/* Form Control */

	$(".form-fields .wpcf7-form-control").on('input', function() {
		if($(this).val()) {
			$(this).parents("label").find(".contact-label").addClass("visible");
		} else {
			$(this).parents("label").find(".contact-label").removeClass("visible");
		} 
	});

/* Slider Item click */

	$(".slider .slider-item .item").on("click", function(e) {
		if($(this).parent().is($(".slider-item.current").next())) {
			$(".slider .slider-item.current .next")[0].click();
		} else if($(this).parent().is($(".slider-item.current").prev())) {
			$(".slider .slider-item.current .prev")[0].click();
		}
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
		
	if($("#map").length > 0 && !($("#map").hasClass("active"))) {
		if($("#map").isOnScreen()) {
			$("#map").addClass('active');
		}
	}

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
		
		if($("#map").length > 0 && !($("#map").hasClass("active"))) {
			if($("#map").isInViewport()) {
				$("#map").addClass('active');
			}
		}
	    
	});

});//Don't remove ---- end of jQuery wrapper
