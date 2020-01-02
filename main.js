$(function(){
	$('.photo-activ1'). on('click', function(e){
 	  e.preventDefault();
 	  $('.invis-text1'). toggleClass('team-show');
	});
	$('.photo-activ2'). on('click', function(e){
 	  e.preventDefault();
 	  $('.invis-text2'). toggleClass('team-show');
	});
	$('.photo-activ3'). on('click', function(e){
 	  e.preventDefault();
 	  $('.invis-text3'). toggleClass('team-show');
	});
	$('.photo-activ4'). on('click', function(e){
 	  e.preventDefault();
 	  $('.invis-text4'). toggleClass('team-show');
	});
	$('.show-btn'). on('click', function(e){
 	  e.preventDefault();
 	  $('.invisibl-block'). toggleClass('invisibl-block-show');
	});
	$('.burg-btn'). on('click', function(e){
 	  e.preventDefault();
 	  $('.menu-block').toggleClass('navigation-show');
 	  $('.navigation').toggleClass('navigation2');
 	  $('.bloc-menu-1').toggleClass('wrap2');
	});
});