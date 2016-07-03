$(document).ready(function(){
	setTimeout(function(){
		fade_action($('.navbar-brand'));
	}, 200);

	setTimeout(function(){
		fade_action($('.navbar-nav'));
	}, 600);

	setTimeout(function(){
		fade_action($('.mei-hua'));
	}, 1000);

	setTimeout(function(){
		fade_action($('.ruby-1'));
	}, 1800);

	setTimeout(function(){
		fade_action($('.wrapper'));
	}, 2000);

	function fade_action(ele){
		$(ele).fadeIn(1000);
	};
})


;
