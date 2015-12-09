	
jQuery(document).ready(function($) {

	$('.project-slick').on('init', function(event, slick){
		var currentSlideO = slick.$slides[0];
		var previousSlideO = $(currentSlideO).prev();
		var nextSlideO = $(currentSlideO).next();

		previousSlideO.addClass('project-slick-previous');
		nextSlideO.addClass('project-slick-next');

		projectSlickSetup(slick,0);
	});	

	$('.project-slick').slick({
		centerMode: true,
		centerPadding: 0,
		speed: 10000,
		fade: false,		
		arrows: true,
		dots: true
	});	

	$('.project-slick').on('beforeChange', function(event, slick, currentSlide){
		$('.project-slick-slide').removeClass('shifted').addClass('moving');
		console.log('moving');
	});

	$('.project-slick').on('afterChange', function(event, slick, currentSlide){
		console.log('done moving');
		projectSlickSetup(slick,currentSlide);
	});

});


function projectSlickSetup(slick,currentSlide){

	var currentSlideO = slick.$slides[currentSlide]
	var previousSlideO = $(currentSlideO).prev();
	var previousPreviousSlideO = previousSlideO.prev();
	var nextSlideO = $(currentSlideO).next();
	var nextNextSlideO = nextSlideO.next();

	$('.project-slick-slide').removeClass('project-slick-previous').removeClass('project-slick-next').removeClass('project-slick-next-next').removeClass('project-slick-previous-previous');

	previousSlideO.addClass('project-slick-previous');
	previousPreviousSlideO.addClass('project-slick-previous-previous');	
	nextSlideO.addClass('project-slick-next');
	nextNextSlideO.addClass('project-slick-next-next');


	$('.project-slick-slide').removeClass('moving').addClass('shifted');

}
