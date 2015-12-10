	
jQuery(document).ready(function($) {

	slideshowSetup();

});

$(window).on('resize', slideshowSetup);


function slideshowSetup(){

	//window proportions
	w = $('.hero-project').width();
	h = $(window).height();

	//elements
	container = $('.project-slideshow');
	track = $('.project-slideshow-track');
	slides = $('.project-slide');

	//number of slides
	nSlides = slides.length;

	//scale factor for slides
	slideScale = 1.2;
	
	//width of track: number of slides(scaled) * window width
	trackWidth = nSlides * (w * slideScale);

	//width of slide: window width * slide scale factor
	slideWidth = w * slideScale;
	 
	//overall sizing
	container.width(trackWidth);
	track.width(trackWidth);
	slides.width(slideWidth);


}


