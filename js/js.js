// JavaScript Document

/*Fixed menu*/
$(document).ready(function(){
    var $menu = $("#menu");
    $(window).scroll(function(){
      if ($(this).scrollTop()>88&&$menu.hasClass("default")){
        $menu.fadeOut('fast',function(){
        $(this).removeClass("default")
        .addClass("fixed")
        .fadeIn('fast');  
        $('#container_logo').removeClass("logo_move");
        $('#container_logo').addClass("logo_fixed");
        });
        } else if($(this).scrollTop()<=88&&$menu.hasClass("fixed")) {
        $menu.fadeOut('fast', function(){
        $(this).removeClass("fixed")
        .addClass("default")
        .fadeIn('fast');  
        $('#container_logo').removeClass("logo_fixed");
        $('#container_logo').addClass("logo_move"); 
     });
    }
  });
});

/*Active menu item*/
$('nav.nav-top ul li').each(function (){
	if (this.getElementsByTagName("a")[0].href=location.href)
		this.className="current";
});


/*Slider*/
$(function () {
	var elWrap = $('#slider'),
	el =  elWrap.find('img'),
	indexImg = 1,
	indexMax = el.length,
	phase = 6000;
	function change () {
		el.fadeOut(500);
		el.filter(':nth-child('+indexImg+')').fadeIn(500);
	}	
		
	function autoCange () {	
		indexImg++;
		if(indexImg > indexMax) {
			indexImg = 1;
		}			
		change ();
	}	
	var interval = setInterval(autoCange, phase);

	elWrap.mouseover(function() {
		clearInterval(interval);
	});
	elWrap.mouseout(function() {
		interval = setInterval(autoCange, phase);
	});

	var	btnNext = $('span.next'),
		btnPrev = $('span.prev');
	btnNext.click(function() {
		indexImg++;
		if(indexImg > indexMax) {
			indexImg = 1;
		}
		change ();
	});
	btnPrev.click(function() {
		indexImg--;
		if(indexImg < 1) {
			indexImg = indexMax;
		}
		change ();
	});	
});


/*news*/
$(document).ready(function(){
	$(".accordion h3:first").addClass("active");
	$(".accordion .ac:not(:first)").hide();
	$(".accordion h3").click(function(){
		$(this).next(".ac").slideToggle("slow")
		.siblings(".ac:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("h3").removeClass("active");
	});
});


/*Clubs Table*/
$('.full').click(function(){
	$('.container-tbl').addClass('container-full');
});
$('.scroll').click(function(){
	$('.container-tbl').removeClass('container-full');
});


/*Rating - tabs*/
$(document).ready(function(){
    var tabs = $('#tabs');
    $('.tabs-content > div', tabs).each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });
    tabs.on('click', '.tabs a', function(e){
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tabs a',tabs).removeClass();
        $(this).addClass('active');
        $('.tabs-content > div', tabs).hide(0);
        $(tabId).show();
    });
});


/*To Top*/
$(document).ready(function(){
	$(function(){
		$('#toTop').hide();
		$(window).scroll(function(){
			if($(this).scrollTop()>100){
				$('#toTop').fadeIn();
			} else $('#toTop').fadeOut();
		})
		$('#toTop').click(function(){
			$('body, html').animate({
				scrollTop:0},1000);
			return false;
			})
		})
});



$(function (){
    $('.menu-btn').click(function(){
    $('.responsive-menu').toggleClass('expand')
    });
});
