jQuery(document).ready(function(m){m("html").delay(1500).queue(function(i){m(this).addClass("loaded"),i()}),m("nav a, a.button, a.next-section").click(function(i){if("#"!=m(this).attr("href"))return m("html, body").animate({scrollTop:m(m(this).attr("href")).offset().top},500),!1});var n=function(){function i(){var i=Math.max(document.documentElement.clientWidth,window.innerWidth||0);i<=576?(a=100,d=4.5,h=80,f=l=30,p=5):i<=768?(a=90,l=35,d=4.5,h=80,f=42,p=5):i<=992?(a=45,l=32,d=3,h=55,f=42,p=5):i<=1200?(a=45,l=38,d=3,h=50,f=42,p=5):i<=1600?(a=32,l=36,d=2,h=35,f=42,p=5):1600<i&&(l=38,d=3.5,h=a=30,f=42,p=5)}function t(){return 50-3*(h+2*p)/2}m(".slider-insights");var e=m(".slider-insights .slider-wrapper"),r=m(".slider-insights .slider-wrapper .slider-item"),n=m(".slider-insights .slider-wrapper .slider-item .wrapper-item"),s=m(".slider-insights .control-wrap"),a=0,l=0,d=0,o=(m(".slider"),m(".slider .slider-wrapper")),c=m(".slider .slider-wrapper .slider-item"),h=0,f=0,p=0;return{getSliderInsightsWidth:function(){return a},getSliderWidth:function(){return h+2*p},getSliderMargin:function(){return t()},setSliderInsightsWidth:function(){i(),e.css({width:r.length*a+"vw"}),n.css({padding:"0 "+d+"vw"}),r.css({width:a+"vw",height:l+"em"}),s.css({marginLeft:d+"vw",width:Math.floor(100/a)*a-2*d+"vw"})},setSliderWidth:function(){i(),o.css({width:c.length*(h+2*p)+"vw",marginLeft:t()+"vw"}),c.css({width:h+"vw",height:f+"em",margin:"0 "+p+"vw"})}}}();n.setSliderWidth(),n.setSliderInsightsWidth(),m(window).on("resize",function(){n.setSliderWidth(),n.setSliderInsightsWidth()}),m(".slider .prev").click(function(){var i=m(this).parents(".slider-wrapper"),t=m(this).parents(".slider-item"),e=n.getSliderMargin(),r=n.getSliderWidth();t.removeClass("current").find(".copy").slideUp(500),t.prev().addClass("current").find(".copy").slideDown(500),m(".slider-item:last").insertBefore(m(".slider-item:first")),i.css("margin-left",e+-1*r+"vw"),i.animate({marginLeft:e+"vw"},500)}),m(".slider .next").click(function(){var i=m(this).parents(".slider-wrapper"),t=m(this).parents(".slider-item"),e=n.getSliderMargin(),r=n.getSliderWidth();t.removeClass("current").find(".copy").slideUp(500),t.next().addClass("current").find(".copy").slideDown(500),i.animate({marginLeft:e+-1*r+"vw"},500,function(){m(".slider-item:first").insertAfter(m(".slider-item:last")),i.css("margin-left",e+"vw")})}),m(".slider-insights .prev").click(function(){var i=m(".slider-wrapper"),t=parseInt(parseFloat(i.css("margin-left"))*(100/document.documentElement.clientWidth)),e=n.getSliderInsightsWidth();m(".slider-item:last").insertBefore(m(".slider-item:first")),i.css("margin-left",t+-1*e+"vw"),i.animate({marginLeft:t+"vw"},500)}),m(".slider-insights .next").click(function(){var i=m(".slider-wrapper"),t=parseInt(parseFloat(i.css("margin-left"))*(100/document.documentElement.clientWidth)),e=n.getSliderInsightsWidth();i.animate({marginLeft:t+-1*e+"vw"},500,function(){m(".slider-item:first").insertAfter(m(".slider-item:last")),i.css("margin-left",t+"vw")})}),m(".menu-trigger").click(function(){m(".mainMenu").slideToggle()}),m(".read-more").click(function(){m(this).prev().slideToggle(),m(this).text("Read more"==m(this).text()?"Read less":"Read more")}),m(".toggle-solutions a").click(function(i){i.target===this&&(i.preventDefault(),m(this).parent().find(".sub-menu").slideToggle())}),m("#main-contact textarea").on("input",function(){this.style.height="auto",this.style.height=this.scrollHeight+"px"}),m(".custom-select").click(function(){m(this).find(".options").toggleClass("visible")}),m(".options span").click(function(){m(this).parents(".custom-select").find("input").val(m(this).text()).trigger("input")}),m(".category__filter").click(function(){var i=m(this).attr("data-name");if(m(this).addClass("active").siblings("a").removeClass("active"),m(".reset-category").addClass("visible"),m(".slider-wrapper").attr("current-filter")!=i){var t=m(".slider-item").not("."+i),e=m(".slider-item."+i);t.find(".wrapper-info").addClass("hidden").animate({width:0},300),t.find("h2.heading").animate({opacity:0},300,function(){t.animate({width:0},500,function(){})}),e.animate({width:"30vw"},500,function(){e.find("h2.heading").animate({opacity:1},300),e.find(".wrapper-info").animate({width:"90%"},300,function(){e.find(".wrapper-info").removeClass("hidden")})}),3<m(".slider-item."+i).length?m(".control-wrap").removeClass("hidden"):m(".control-wrap").addClass("hidden"),m(".slider-wrapper").attr("current-filter",i)}}),m(".reset-category").click(function(){if("all"!=m(".slider-wrapper").attr("current-filter")){m(".category__filter").removeClass("active"),m(".reset-category").removeClass("visible");var i=m(".slider-item");i.animate({width:"30vw"},500,function(){i.find("h2.heading").animate({opacity:1},300),i.find(".wrapper-info").animate({width:"90%"},300,function(){i.find(".wrapper-info").removeClass("hidden")})}),3<i.length?m(".control-wrap").removeClass("hidden"):m(".control-wrap").addClass("hidden"),m(".slider-wrapper").attr("current-filter","all")}}),m(".slider-item").hover(function(){m(this).find(".wrapper-more").stop().slideDown()},function(){m(this).find(".wrapper-more").stop().slideUp()}),m("#map .marker").click(function(){var i="#pin-"+m(this).attr("id");m(".pin").not(i).animate({opacity:0},500,function(){m(".pin").not(i).css({display:"none"})}),m(i).css({display:"block"}).animate({opacity:1},500)}),m(".form-fields .wpcf7-form-control").on("input",function(){m(this).val()?m(this).parents("label").find(".contact-label").addClass("visible"):m(this).parents("label").find(".contact-label").removeClass("visible")}),m(".slider .slider-item .item").on("click",function(i){m(this).parent().is(m(".slider-item.current").next())?m(".slider .slider-item.current .next")[0].click():m(this).parent().is(m(".slider-item.current").prev())&&m(".slider .slider-item.current .prev")[0].click()}),m.fn.isOnScreen=function(){var i=m(window),t={top:i.scrollTop(),left:i.scrollLeft()};t.right=t.left+i.width(),t.bottom=t.top+i.height();var e=this.offset();return e.right=e.left+this.outerWidth(),e.bottom=e.top+this.outerHeight(),!(t.right<e.left||t.left>e.right||t.bottom<e.top||t.top>e.bottom)},m(".slide-up, .slide-down, .slide-right, .slow-fade, .home-text-effect").each(function(){m(this).isOnScreen()&&m(this).addClass("active")}),0<m("#map").length&&!m("#map").hasClass("active")&&m("#map").isOnScreen()&&m("#map").addClass("active"),m.fn.isInViewport=function(){var i=m(this).offset().top,t=i+m(this).outerHeight(),e=m(window).scrollTop(),r=e+m(window).height();return e<t&&i<r},m(window).on("resize scroll",function(){m(".slide-up, .slide-down, .slide-right, .slow-fade, .home-text-effect").each(function(){m(this).isInViewport()&&m(this).addClass("active")}),0<m("#map").length&&!m("#map").hasClass("active")&&m("#map").isInViewport()&&m("#map").addClass("active")})});