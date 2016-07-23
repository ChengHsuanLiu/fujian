$(document).ready(function(){
	check_footer_position();

	setTimeout(function(){
		fade_action($('.navbar-brand'));
	}, 100);

	setTimeout(function(){
		fade_action($('.navbar-nav'));
	}, 400);

	setTimeout(function(){
		fade_action($('.mei-hua'));
	}, 700);

	setTimeout(function(){
		fade_action($('.ruby-1'));
	}, 1200);

	setTimeout(function(){
		fade_action($('.wrapper'));
	}, 1700);

	setTimeout(function(){
		fade_action($('.footer'));
	}, 2200);

	function fade_action(ele){
		$(ele).fadeIn(1000);
	};

	function check_footer_position(){
		var full_height = $(window).height();
		var body_height = $('body').height();

		if(full_height > body_height){
			$('.footer').addClass('fix-footer');
		}else{
			$('.footer').removeClass('fix-footer');
		}
	}


	$(window).scroll(function(){
		if($(window).scrollTop() > 150){
			$('.hide-navbar').addClass('in-show');
		}else{
			$('.hide-navbar').removeClass('in-show');
		}
	})

	$(window).resize(function(){
		check_footer_position();
	})
})


