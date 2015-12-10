	
//elements
var container = $('.project-slideshow');
var	track = $('.project-slideshow-track');
var	slides = $('.project-slide');	

//total number of slides
nSlides = slides.length;


//scale factor for slides
var slideScale = 1.2;

//position of the track along it's axis
var trackPosition = 0;


jQuery(document).ready(function($) {

	slideshowSetup();

	$('.slideshow-previous').click(function(event) {
	  	event.preventDefault();
	  	slideshowIncrement('previous');
	});	

	$('.slideshow-next').click(function(event) {
	  	event.preventDefault();
	  	slideshowIncrement('next');
	});

});

$(window).on('resize', slideshowSetup);


function slideshowSetup(){

	//width of containing element
	w = $('.hero-project').width();

	//width of slide: window width * slide scale factor
	slideWidth = w * slideScale;

	//width of track: number of slides(scaled) * window width
	trackWidth = nSlides * (w * slideScale);	

	//overall sizing
	slides.width(slideWidth);
	track.width(trackWidth);

}


function slideshowIncrement(direction){

	//width of containing element
	w = $('.hero-project').width();

	//width of track
	trackWidth = nSlides * (w * slideScale);
	 
	//distance of one slide translation
	trackTranslation = -1 * ( (w / trackWidth) * 100);

	//maximum track translation before stopping
	trackMax = (trackTranslation * (nSlides-1));
	console.log(trackMax);

	if(direction == 'next'){
		//add the translation distance to the current track position
		trackPosition += trackTranslation;	
		if(trackPosition < trackMax){
			trackPosition = trackMax;
		}		
	}
	else{
		//subtract the translation distance from the current track position
		trackPosition -= trackTranslation;			
		if(trackPosition > 0){
			trackPosition = 0;
		}
	}

	track.css('transform','translate(' + trackPosition + '%)');

}


