$(function(){
	$.jInvertScroll(['.container']);

	$('.mainphoto').hover(function(){
		$(this).fadeTo("fast",0.5);
		},
		function(){
		$(this).fadeTo("fast",1);
		});	

	$('#details').click(function(){
		$('#about').show(400);
		$('#gray').show(400);
	});
	
	$('#contactme').click(function(){
		$('#contact').show(400);
		$('#gray').show(400);
	});
	
	$('#aboutme').click(function(){
		$('#about2').show(400);
		$('#gray').show(400);
	});
	
	
	$('.close').click(function(){
		$('.popup').hide(400);
	});
	
	$('#gray').click(function(){
		$('.popup').hide(400);
	});
});