jQuery(document).ready(function(p){function e(){0<p(".slider-insights .slider-wrapper").length&&((0<p(".category__filter.active").length?p(".slider-item."+p(".category__filter.active").attr("data-name")):p(".slider-item")).length>Math.floor(100/s.getSliderInsightsWidth())?p(".control-wrap").removeClass("hidden"):p(".control-wrap").addClass("hidden"))}function r(e){return t*e/100}p("html").delay(1500).queue(function(e){p(this).addClass("loaded"),e()}),p("nav a, a.button, a.next-section").click(function(e){if("#"!=p(this).attr("href"))return p("html, body").animate({scrollTop:p(p(this).attr("href")).offset().top},500),!1}),p(".menu-trigger").click(function(){p(".mainMenu").slideToggle()}),p(".read-more").click(function(){p(this).prev().slideToggle(),p(this).text("Read more"==p(this).text()?"Read less":"Read more")}),p(".toggle-solutions a").click(function(e){e.target===this&&(e.preventDefault(),p(this).parent().find(".sub-menu").slideToggle())}),p("#main-contact textarea").on("input",function(){this.style.height="auto",this.style.height=this.scrollHeight+"px"}),p(".custom-select").click(function(){p(this).find(".options").toggleClass("visible")}),p(".options span").click(function(){p(this).parents(".custom-select").find("input").val(p(this).text()).trigger("input")}),p(".slider-item").hover(function(){p(this).find(".wrapper-more").stop().slideDown()},function(){p(this).find(".wrapper-more").stop().slideUp()}),p("#map .marker").click(function(){var e="#pin-"+p(this).attr("id");p(".pin").not(e).animate({opacity:0},500,function(){p(".pin").not(e).css({display:"none"})}),p(e).css({display:"block"}).animate({opacity:1},500)}),p(".slider-insights .link-insight").click(function(e){f&&e.preventDefault()}),p(".form-fields .wpcf7-form-control").on("input",function(){p(this).val()?p(this).parents("label").find(".contact-label").addClass("visible"):p(this).parents("label").find(".contact-label").removeClass("visible")}),p(".slider .slider-item .item").on("click",function(e){h||(p(this).parent().is(p(".slider-item.current").next())?p(".slider .slider-item.current .next")[0].click():p(this).parent().is(p(".slider-item.current").prev())&&p(".slider .slider-item.current .prev")[0].click())}),p.fn.isOnScreen=function(){var e=p(window),t={top:e.scrollTop(),left:e.scrollLeft()};t.right=t.left+e.width(),t.bottom=t.top+e.height();var i=this.offset();return i.right=i.left+this.outerWidth(),i.bottom=i.top+this.outerHeight(),!(t.right<i.left||t.left>i.right||t.bottom<i.top||t.top>i.bottom)},p(".slide-up, .slide-down, .slide-right, .slow-fade, .home-text-effect").each(function(){p(this).isOnScreen()&&p(this).addClass("active")}),0<p("#map").length&&!p("#map").hasClass("active")&&p("#map").isOnScreen()&&p("#map").addClass("active"),p.fn.isInViewport=function(){var e=p(this).offset().top,t=e+p(this).outerHeight(),i=p(window).scrollTop(),r=i+p(window).height();return i<t&&e<r},p(window).on("resize scroll",function(){p(".slide-up, .slide-down, .slide-right, .slow-fade, .home-text-effect").each(function(){p(this).isInViewport()&&p(this).addClass("active")}),0<p("#map").length&&!p("#map").hasClass("active")&&p("#map").isInViewport()&&p("#map").addClass("active")});var s=function(){function e(){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e<=576?(a=100,o=4.5,f=80,h=l=30,m=5):e<=768?(a=90,l=35,o=4.5,f=80,h=42,m=5):e<=992?(a=45,l=32,o=3,f=55,h=42,m=5):e<=1200?(a=45,l=38,o=3,f=50,h=42,m=5):e<=1600?(a=32,l=36,o=2,f=35,h=42,m=5):1600<e&&(l=38,o=3.5,f=a=30,h=42,m=5)}function t(){return 50-3*(f+2*m)/2}p(".slider-insights");var i=p(".slider-insights .slider-wrapper"),r=p(".slider-insights .slider-wrapper .slider-item"),s=p(".slider-insights .slider-wrapper .slider-item .wrapper-item"),n=p(".slider-insights .control-wrap"),a=0,l=0,o=0,d=(p(".slider"),p(".slider .slider-wrapper")),c=p(".slider .slider-wrapper .slider-item"),f=0,h=0,m=0;return{getSliderInsightsWidth:function(){return a},getSliderWidth:function(){return f+2*m},getSliderMargin:function(){return t()},setSliderInsightsWidth:function(){e(),i.css({width:r.length*a+"vw"}),s.css({padding:"0 "+o+"vw"}),r.each(function(){0!=parseFloat(p(this).css("width"))&&p(this).css({width:a+"vw"}),p(this).css({height:l+"em"})}),n.css({marginLeft:o+"vw",width:Math.floor(100/a)*a-2*o+"vw"})},setSliderWidth:function(){e(),d.css({width:c.length*(f+2*m)+"vw",marginLeft:t()+"vw"}),c.css({width:f+"vw",height:h+"em",margin:"0 "+m+"vw"})}}}();if(s.setSliderWidth(),s.setSliderInsightsWidth(),e(),p(window).on("resize",function(){s.setSliderWidth(),s.setSliderInsightsWidth(),e()}),p(".slider-insights").length)var n=p(".slider-insights .slider-wrapper"),a=s.getSliderInsightsWidth(),t=window.innerWidth,l=parseInt(parseFloat(n.css("margin-left"))*(100/document.documentElement.clientWidth));else if(p(".slider").length){var o,d,c;n=p(".slider .slider-wrapper"),a=s.getSliderWidth(),t=window.innerWidth,l=parseInt(parseFloat(n.css("margin-left"))*(100/document.documentElement.clientWidth))}var f=!1;p(document).on("mousedown touchstart",".slider-insights .slider-wrapper",function(e){if(p(document).off("mousemove touchmove"),f=!1,"mousedown"==e.type&&1!=e.which)return!0;if(p(e.target).hasClass("next")||p(e.target).hasClass("prev"))return!0;if(0<p(".control-wrap").length&&!p(".control-wrap").hasClass("hidden")){c=d=o=0;var i=e.pageX||e.originalEvent.touches[0].pageX;p(document).on("mousemove touchmove",".slider-insights .slider-wrapper",function(e){f=!0;var t=e.pageX||e.originalEvent.touches[0].pageX;if(c=i-t,n.css("transform","translateX("+-1*c+"px)"),d=Math.ceil(c/r(a)),c<0){if(d==-1*o){for(;p(".slider-item:last").insertBefore(p(".slider-item:first")),0==parseFloat(p(".slider-item:last").css("width")););n.css("margin-left",l+-1*(o+1)*a+"vw"),o++}}else if(d==o+3&&2<d){for(;p(".slider-item:first").insertAfter(p(".slider-item:last")),0==parseFloat(p(".slider-item:first").css("width")););n.css("margin-left",l+(o+1)*a+"vw"),o++}})}}),p(document).on("mouseup touchend",".slider-insights .slider-wrapper",function(e){if(p(document).off("mousemove touchmove"),"mouseup"==e.type&&1!=e.which)return!0;if(!f)return!0;if(p(e.target).hasClass("next")||p(e.target).hasClass("prev"))return!0;if(0<p(".control-wrap").length&&!p(".control-wrap").hasClass("hidden"))if(p(document).off("mousemove touchmove"),d<=0){var t=(i=r(l+-1*o*a)/2)-c;n.animate({marginLeft:i-t},function(){n.css({transform:"translateX(0)",marginLeft:0})})}else{var i;t=(i=r(l+-1*d*a))+c;n.animate({marginLeft:t},function(){for(var e=0;e<d;e++)for(;p(".slider-item:first").insertAfter(p(".slider-item:last")),0==parseFloat(p(".slider-item:first").css("width")););n.css({transform:"translateX(0)",marginLeft:0})})}});var h=!1;p(document).on("mousedown touchstart",".slider .slider-wrapper",function(e){if(p(document).off("mousemove touchmove"),h=!1,"mousedown"==e.type&&1!=e.which)return!0;if(p(e.target).hasClass("next")||p(e.target).hasClass("prev"))return!0;if(!p(".control-wrap").hasClass("hidden")){o=c=o=0;var i=e.pageX||e.originalEvent.touches[0].pageX;p(document).on("mousemove touchmove",".slider .slider-wrapper",function(e){h=!0;var t=e.pageX||e.originalEvent.touches[0].pageX;c=i-t,n.css("transform","translateX("+-1*c+"px)"),d=Math.ceil(c/r(a)),c<0?d==-1*o&&(p(".slider-item:last").insertBefore(p(".slider-item:first")),n.css("margin-left",l+-1*(o+1)*a+"vw"),o++):d==o+3&&2<d&&(p(".slider-item:first").insertAfter(p(".slider-item:last")),n.css("margin-left",l+(o+1)*a+"vw"),o++)})}}),p(document).on("mouseup touchend",".slider .slider-wrapper",function(e){if(p(document).off("mousemove touchmove"),"mouseup"==e.type&&1!=e.which)return!0;if(!h)return!0;if(p(e.target).hasClass("next")||p(e.target).hasClass("prev"))return!0;if(slideMargin=parseFloat(p(".slider-item").eq(0).css("margin-left")),d<=0){var t=c+r(l);n.animate({marginLeft:t},function(){n.css({transform:"translateX(0)",marginLeft:l+"vw"});for(var e=p(".slider-item.current"),t=e,i=0;i<o;i++)t=t.prev();e.removeClass("current").find(".copy").slideUp(200),t.addClass("current").find(".copy").slideDown(200)})}else{t=c+r(l-d*a);n.animate({marginLeft:t},function(){n.css({transform:"translateX(0)",marginLeft:l+"vw"});for(var e=p(".slider-item.current"),t=e,i=0;i<d;i++)p(".slider-item:first").insertAfter(p(".slider-item:last")),t=t.next();e.removeClass("current").find(".copy").slideUp(300),t.addClass("current").find(".copy").slideDown(300)})}}),p(".slider .prev").click(function(){var e=p(this).parents(".slider-wrapper"),t=p(this).parents(".slider-item"),i=s.getSliderMargin(),r=s.getSliderWidth();t.removeClass("current").find(".copy").slideUp(500),t.prev().addClass("current").find(".copy").slideDown(500),p(".slider-item:last").insertBefore(p(".slider-item:first")),e.css("margin-left",i+-1*r+"vw"),e.animate({marginLeft:i+"vw"},500)}),p(".slider .next").click(function(){var e=p(this).parents(".slider-wrapper"),t=p(this).parents(".slider-item"),i=s.getSliderMargin(),r=s.getSliderWidth();t.removeClass("current").find(".copy").slideUp(500),t.next().addClass("current").find(".copy").slideDown(500),e.animate({marginLeft:i+-1*r+"vw"},500,function(){p(".slider-item:first").insertAfter(p(".slider-item:last")),e.css("margin-left",i+"vw")})}),p(".slider-insights .prev").click(function(){for(var e=p(".slider-wrapper"),t=parseInt(parseFloat(e.css("margin-left"))*(100/document.documentElement.clientWidth)),i=s.getSliderInsightsWidth();p(".slider-item:last").insertBefore(p(".slider-item:first")),0==parseFloat(p(".slider-item:last").css("width")););e.css("margin-left",t+-1*i+"vw"),e.animate({marginLeft:t+"vw"},500)}),p(".slider-insights .next").click(function(){var t=p(".slider-wrapper"),i=parseInt(parseFloat(t.css("margin-left"))*(100/document.documentElement.clientWidth)),e=s.getSliderInsightsWidth();t.animate({marginLeft:i+-1*e+"vw"},500,function(){do{var e=parseFloat(p(".slider-item:first").css("width"));p(".slider-item:first").insertAfter(p(".slider-item:last"))}while(0==e);t.css("margin-left",i+"vw")})}),p(".category__filter").click(function(){var e=p(this).attr("data-name");if(p(this).addClass("active").siblings("a").removeClass("active"),p(".reset-category").addClass("visible"),p(".slider-wrapper").attr("current-filter")!=e){var t=p(".slider-item").not("."+e),i=p(".slider-item."+e),r=s.getSliderInsightsWidth();t.find(".wrapper-info").addClass("hidden").animate({width:0},300),t.find("h2.heading").animate({opacity:0},300,function(){t.animate({width:0},500,function(){})}),i.animate({width:r+"vw"},500,function(){i.find("h2.heading").animate({opacity:1},300),i.find(".wrapper-info").animate({width:"90%"},300,function(){i.find(".wrapper-info").removeClass("hidden")})}),p(".slider-item."+e).length>Math.floor(100/r)?p(".control-wrap").removeClass("hidden"):p(".control-wrap").addClass("hidden"),p(".slider-wrapper").attr("current-filter",e)}}),p(".reset-category").click(function(){if("all"!=p(".slider-wrapper").attr("current-filter")){p(".category__filter").removeClass("active"),p(".reset-category").removeClass("visible");var e=p(".slider-item"),t=s.getSliderInsightsWidth();e.animate({width:t+"vw"},500,function(){e.find("h2.heading").animate({opacity:1},300),e.find(".wrapper-info").animate({width:"90%"},300,function(){e.find(".wrapper-info").removeClass("hidden")})}),e.length>Math.floor(100/t)?p(".control-wrap").removeClass("hidden"):p(".control-wrap").addClass("hidden"),p(".slider-wrapper").attr("current-filter","all")}})});