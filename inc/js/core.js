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

	

/* Class and focus on click */
    
    $(".menu-trigger").click(function() {
	    $(".mainMenu").slideToggle();
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
	
	
	
// ========== Slider control	

	
/****************************************************/
/*        Closure to set and get slider width        /
/****************************************************/
	
	var sliders = (function() {
		
		// Insights Slider //
		var sliderI  = $(".slider-insights");
		var wrapperI = $(".slider-insights .slider-wrapper");
		var itemsI   = $(".slider-insights .slider-wrapper .slider-item");
		var paddingI = $(".slider-insights .slider-wrapper .slider-item .wrapper-item");
		var controlI = $(".slider-insights .control-wrap");
		
		var sliderInsightsWidth   = 0;
		var sliderInsightsHeight  = 0;
		var sliderInsightsPadding = 0;
		
		// About Slider //
		var sliderA  = $(".slider");
		var wrapperA = $(".slider .slider-wrapper");
		var itemsA   = $(".slider .slider-wrapper .slider-item");
		
		var sliderWidth   = 0;
		var sliderHeight  = 0;
		var sliderMargin  = 0;
		
		
		// Function to set width variable according to viewport //
		function getSize() {
			var width = Math.max(document.documentElement.clientWidth,  window.innerWidth  || 0);
			
			/*=========== EXTRA SMALL (576px) ==========*/
			if(width <= 576) {
				sliderInsightsWidth   = 100;
				sliderInsightsHeight  = 30;
				sliderInsightsPadding = 4.5;
				
				sliderWidth   = 80;
				sliderHeight  = 30;
				sliderMargin  = 5;
			}
			
			/*=========== SMALL (768px) ==========*/
			else if(width <= 768) {
				sliderInsightsWidth   = 90;
				sliderInsightsHeight  = 35;
				sliderInsightsPadding = 4.5;
				
				sliderWidth   = 80;
				sliderHeight  = 42	;
				sliderMargin  = 5;
			}
			
			/*=========== MEDIUM (992px) ==========*/
			else if(width <= 992) {
				sliderInsightsWidth   = 45;
				sliderInsightsHeight  = 32;
				sliderInsightsPadding = 3;
				
				sliderWidth   = 55;
				sliderHeight  = 42;
				sliderMargin  = 5;
			}
			
			/*=========== LARGE (1200px) ==========*/
			else if(width <= 1200) {
				sliderInsightsWidth   = 45;
				sliderInsightsHeight  = 38;
				sliderInsightsPadding = 3;
				
				sliderWidth   = 50;
				sliderHeight  = 42;
				sliderMargin  = 5;
			}
			
			/*======== EXTRA LARGE (1600px) =======*/
			else if(width <= 1600) {
				sliderInsightsWidth   = 32;
				sliderInsightsHeight  = 36;
				sliderInsightsPadding = 2;
				
				sliderWidth   = 35;
				sliderHeight  = 42;
				sliderMargin  = 5;
			}
			
			/*======== BIGGER SCREENS (>1600px) =======*/
			else if(width > 1600) {
				sliderInsightsWidth   = 30;
				sliderInsightsHeight  = 38;
				sliderInsightsPadding = 3.5;
				
				sliderWidth   = 30;
				sliderHeight  = 42;
				sliderMargin  = 5;
			}
		}
		
		function getWrapperMargin() {
			return 50 - (3 * (sliderWidth + 2 * sliderMargin)) / 2;
		}
		
		// Change Insights Slider size
		function changeInsightsSliderSize() {
			wrapperI.css({
				width: itemsI.length * sliderInsightsWidth + "vw"
			});
			
			paddingI.css({
				padding: "0 " + sliderInsightsPadding + "vw"
			});
			
			itemsI.each(function() {
				if(parseFloat($(this).css("width")) != 0) {
					$(this).css({
						width: sliderInsightsWidth + "vw"
					});
				}
				$(this).css({
					height: sliderInsightsHeight + "em"
				});
			});
			
			controlI.css({
				marginLeft: sliderInsightsPadding + "vw",
				width: (Math.floor(100/sliderInsightsWidth) * sliderInsightsWidth - 2 * sliderInsightsPadding) + "vw"
			});
		}
		
		// Change About Slider size
		function changeSliderSize() {
			wrapperA.css({
				width: itemsA.length * (sliderWidth + 2 * sliderMargin) + "vw",
				marginLeft: getWrapperMargin() + "vw"
			});
			
			itemsA.css({
				width: sliderWidth + "vw",
				height: sliderHeight + "em",
				margin: "0 " + sliderMargin + "vw"
			});
		}
		
		return {
			getSliderInsightsWidth: function() {
				return sliderInsightsWidth;
			},
			getSliderWidth: function() {
				return sliderWidth + 2 * sliderMargin;
			},
			getSliderMargin: function() {
				return getWrapperMargin();
			},
			setSliderInsightsWidth: function() {
				getSize();
				changeInsightsSliderSize();
			},
			setSliderWidth: function() {
				getSize();
				changeSliderSize();
			}
		}
	})();
	
/****************************************************/
/*        Set width according to viewport size       /
/****************************************************/

	sliders.setSliderWidth();
	sliders.setSliderInsightsWidth();
	
	$(window).on("resize", function() {
		sliders.setSliderWidth();
		sliders.setSliderInsightsWidth();
		
		
		if($(".slider-insights .slider-wrapper").length > 0) {
			
			var items;
			
			if($(".category__filter.active").length > 0) {
				items = $(".slider-item." + $(".category__filter.active").attr("data-name"));
			} else {
				items = $(".slider-item");
			}
			
			if(items.length > Math.floor(100 / sliders.getSliderInsightsWidth())) {
				$(".control-wrap").removeClass("hidden");
			} else {
				$(".control-wrap").addClass("hidden");
			}
		}
	});
	
	/* Drag Slider */
	
	if($(".slider-insights").length) {
		var slider      = $(".slider-insights .slider-wrapper");
		var slideWidth  = sliders.getSliderInsightsWidth();
		var windowWidth = window.innerWidth;
		var margin      = parseInt(parseFloat(slider.css("margin-left")) * (100 / document.documentElement.clientWidth));
		var addSlide, countSlides, pixelsDrag;
		
	} else if($(".slider").length) {
		var slider      = $(".slider .slider-wrapper");
		var slideWidth  = sliders.getSliderWidth();
		var windowWidth = window.innerWidth;
		var margin      = parseInt(parseFloat(slider.css("margin-left")) * (100 / document.documentElement.clientWidth));
		var addSlide, countSlides, pixelsDrag;
	}
	
/****************************************************/
/*       Slider Posts - Mouse and touch events       /
/****************************************************/
	
	$(document).on("mousedown touchstart", ".slider-insights .slider-wrapper", function(e) {
		
		if(e.type == "mousedown") {
			if(e.which != 1) return true;
		}
		
		if($(e.target).hasClass("next") || $(e.target).hasClass("prev")) return true;
		
		if($(".control-wrap").length > 0 && !$(".control-wrap").hasClass("hidden")) {
			addSlide      = 0;
			countSlides   = 0;
			pixelsDrag    = 0;
			var startX    = e.pageX || e.originalEvent.touches[0].pageX;
			
			$(document).on("mousemove touchmove", ".slider-insights .slider-wrapper", function(e) {
				var x      = e.pageX || e.originalEvent.touches[0].pageX;
				pixelsDrag = startX - x;
				
				// Slider transform on drag
				slider.css("transform", "translateX(" + (-1) * (pixelsDrag) + "px)");
				
				countSlides = Math.ceil((pixelsDrag) / vwTOpx(slideWidth));
				
				if(pixelsDrag < 0) {
					
					if(countSlides == addSlide * (-1)) {
						do {
							$(".slider-item:last").insertBefore($(".slider-item:first"));
						} while(parseFloat($(".slider-item:last").css("width")) == 0);
						
						slider.css("margin-left", (margin + (-1) * (addSlide + 1) * slideWidth) + "vw");
						addSlide++;
					}
				} else {
					
					if(countSlides == addSlide + 3 && countSlides > 2) {
						do {
							$(".slider-item:first").insertAfter($(".slider-item:last"));
						} while(parseFloat($(".slider-item:first").css("width")) == 0);
						
						slider.css("margin-left", (margin + (addSlide + 1) * slideWidth) + "vw");
						addSlide++;
					}
				}
			
			});
		}
	});
		
	$(document).on("mouseup touchend", ".slider-insights .slider-wrapper", function(e) {
		
		if(e.type == "mouseup") {
			if(e.which != 1) return true;
		}
		
		if($(e.target).hasClass("next") || $(e.target).hasClass("prev")) return true;
		
		if($(".control-wrap").length > 0 && !$(".control-wrap").hasClass("hidden")) {
			$(document).off("mousemove touchmove");
			
			if(countSlides <= 0) {
				var currMargin = vwTOpx((margin + (-1) * (addSlide) * slideWidth)) / 2;
				var diff = currMargin - pixelsDrag;
				
				slider.animate({
					marginLeft: currMargin - diff
				}, function() {
					slider.css({
						transform: "translateX(0)",
						marginLeft: 0
					});
				});
				
			} else {
				var currMargin = vwTOpx((margin + (-1) * (countSlides) * slideWidth));
				var diff = currMargin + pixelsDrag;
				
				slider.animate({
					marginLeft: diff
				}, function() {
					for(var i = 0; i < countSlides; i++) {
						do {
							$(".slider-item:first").insertAfter($(".slider-item:last"));
						} while(parseFloat($(".slider-item:first").css("width")) == 0);
					}
					
					slider.css({
						transform: "translateX(0)",
						marginLeft: 0
					});
				});
			}
		}
		
	});
	
/****************************************************/
/*      Slider About Us - Mouse and touch events     /
/****************************************************/
	
	$(document).on("mousedown touchstart", ".slider .slider-wrapper", function(e) {
		
		if(e.type == "mousedown") {
			if(e.which != 1) return true;
		}
		
		if($(e.target).hasClass("next") || $(e.target).hasClass("prev")) return true;
		
		if(!$(".control-wrap").hasClass("hidden")) {
			addSlide      = 0;
			pixelsDrag    = 0;
			addSlide      = 0;
			var startX    = e.pageX || e.originalEvent.touches[0].pageX;
			
			$(document).on("mousemove touchmove", ".slider .slider-wrapper", function(e) {
				
				var x      = e.pageX || e.originalEvent.touches[0].pageX;
				pixelsDrag = startX - x;
				
				// Slider transform on drag
				slider.css("transform", "translateX(" + (-1) * (pixelsDrag) + "px)");
				
				countSlides = Math.ceil((pixelsDrag) / vwTOpx(slideWidth));
				
				if(pixelsDrag < 0) {
					
					if(countSlides == addSlide * (-1)) {
						$(".slider-item:last").insertBefore($(".slider-item:first"));
						slider.css("margin-left", (margin + (-1) * (addSlide + 1) * slideWidth) + "vw");
						addSlide++;
					}
				} else {
					
					if(countSlides == addSlide + 3 && countSlides > 2) {
						$(".slider-item:first").insertAfter($(".slider-item:last"));
						slider.css("margin-left", (margin + (addSlide + 1) * slideWidth) + "vw");
						addSlide++;
					}
				}
			
			});
		}
	});
		
	$(document).on("mouseup touchend", ".slider .slider-wrapper", function(e) {
		
		if(e.type == "mouseup") {
			if(e.which != 1) return true;
		}
		
		if($(e.target).hasClass("next") || $(e.target).hasClass("prev")) return true;
		
		$(document).off("mousemove touchmove");
		
		slideMargin = parseFloat($(".slider-item").eq(0).css("margin-left"));
		
		if(countSlides <= 0) {
			
			var diff = pixelsDrag + vwTOpx(margin);
			
			slider.animate({
				marginLeft: diff
			}, function() {
				slider.css({
					transform: "translateX(0)",
					marginLeft: margin + "vw"
				});
				
				var current    = $(".slider-item.current");
				var newCurrent = current;
				var animation  = 200;
				
				for(var i = 0; i < addSlide; i++) {
					newCurrent = newCurrent.prev();
				}
				
				current.removeClass("current").find(".copy").slideUp(animation);
				newCurrent.addClass("current").find(".copy").slideDown(animation);
			});
			
		} else {
			var diff = pixelsDrag + vwTOpx(margin - countSlides * slideWidth);
			
			slider.animate({
				marginLeft: diff
			}, function() {
				
				slider.css({
					transform: "translateX(0)",
					marginLeft: margin + "vw"
				});
				
				var current    = $(".slider-item.current");
				var newCurrent = current;
				var animation  = 300;
				
				for(var i = 0; i < countSlides; i++) {
					$(".slider-item:first").insertAfter($(".slider-item:last"));
					newCurrent = newCurrent.next();
				}
				
				current.removeClass("current").find(".copy").slideUp(animation);
				newCurrent.addClass("current").find(".copy").slideDown(animation);
			});
		}
		
	});
	
	function vwTOpx(value) {
		return (windowWidth * value) / 100;
	}
	
/****************************************************/
/*          Slider About Us - PREV and NEXT          /
/****************************************************/

	$(".slider .prev").click(function() {
		var slider    = $(this).parents(".slider-wrapper");
		var current   = $(this).parents(".slider-item");
		var margin    = sliders.getSliderMargin();

		var slide_w   = sliders.getSliderWidth();
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
		var margin    = sliders.getSliderMargin();

		var slide_w   = sliders.getSliderWidth();
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
	
/****************************************************/
/*           Slider Posts - PREV and NEXT            /
/****************************************************/
	
	$(".slider-insights .prev").click(function() {
		var slider    = $(".slider-wrapper");
		var margin    = parseInt(parseFloat(slider.css("margin-left")) * (100 / document.documentElement.clientWidth));

		var slide_w   = sliders.getSliderInsightsWidth();
		var animation = 500;
		
		do {
			$(".slider-item:last").insertBefore($(".slider-item:first"));
		} while(parseFloat($(".slider-item:last").css("width")) == 0);
		
		
		slider.css("margin-left", (margin + (-1) * slide_w) + "vw");
		
		slider.animate({
			marginLeft: (margin + "vw")
		}, animation);
	});
	
	$(".slider-insights .next").click(function() {
		var slider    = $(".slider-wrapper");
		var margin    = parseInt(parseFloat(slider.css("margin-left")) * (100 / document.documentElement.clientWidth));

		var slide_w   = sliders.getSliderInsightsWidth();
		var animation = 500;
		
		slider.animate({
			marginLeft: (margin + (-1) * slide_w) + "vw"
		}, animation, function() {
			
			do {
				var firstWidth = parseFloat($(".slider-item:first").css("width"));
				$(".slider-item:first").insertAfter($(".slider-item:last"));
				
			} while(firstWidth == 0);
			
			slider.css("margin-left", (margin + "vw"));
		});
	});
	
	
	$(".category__filter").click(function() {
		var cat = $(this).attr("data-name");
		
		$(this).addClass("active").siblings("a").removeClass("active");
		$(".reset-category").addClass("visible");
		
		if($(".slider-wrapper").attr("current-filter") != cat) {
		
			var itemsHide = $(".slider-item").not("." + cat);
			var itemsShow = $(".slider-item." + cat);
			var newWidth  = sliders.getSliderInsightsWidth();
			
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
				width: newWidth + "vw"
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
			
			if($(".slider-item." + cat).length > Math.floor(100/newWidth)) {
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
			var newWidth = sliders.getSliderInsightsWidth();
	
			items.animate({
				width: newWidth + "vw"
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
			
			if(items.length > Math.floor(100/newWidth)) {
				$(".control-wrap").removeClass("hidden");
			} else {
				$(".control-wrap").addClass("hidden");
			}
			
			$(".slider-wrapper").attr("current-filter", "all");
		
		}
	});

});//Don't remove ---- end of jQuery wrapper
