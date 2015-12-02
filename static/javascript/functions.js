
//global variables
var cw,ch;
var loaded = false;

/**
 * 'dom-is-sized' is triggered when the sizing module finishes a 
 * resize. We listen for the first of these, and remove the "curtain"
 * which 
 */
$(document).one('dom-is-sized', function() {
	
});


//initial events, and general event binding
jQuery(document).ready(function($) {
	
	$('#backtotop').click(function(event) {
	  	event.preventDefault();
		$('body,html').animate({scrollTop:0},2000);
	});

	$(".jump").click(function(e){
		e.preventDefault();
		var href = $(this).attr("href");
		href = href.toLowerCase();
		scrollLink(href);	
	});

	$(".menu-toggle").click(function(e){
		e.preventDefault();
		cycleMenu();
	});

	$('.menu-nav-toggle').click(function(event) {
	  	event.preventDefault();
	  	menuNavToggle($(this));
	});	


	$('*[data-sort-key]').on('click', function() {
		activate( $(this) );
		filter( $(this).data('sort-key'), $('*[data-sort-value]') );
	});	

});//end document.ready


$(window).scroll(function() { 
	
	window.requestAnimationFrame(headerSpy);


});//end window.scroll


/** ----------- MENU AND HEADER --------------------------------- */


function headerSpy(){

	var headerHeight = $('#header-olin').height();				

	if($(window).scrollTop() >= headerHeight){
		if($('body').hasClass('header-before')){
			$('body').removeClass('header-before').addClass('header-after');
			$('#header-rwtl').removeClass('asbolute').addClass('fixed');
		}	
	}	
	else{
		if($('body').hasClass('header-after')){
			$('body').removeClass('header-after').addClass('header-before');
			$('#header-rwtl').removeClass('fixed').addClass('absolute');
		}	
	}

}



function cycleMenu() {

	if ( $('menu').hasClass( 'open' ) ) {

		$('menu').removeClass( 'open' ).addClass('closed');
		$('body').removeClass( 'modal-open' ).addClass('modal-closed');
		$('#overlay').fadeOut( $('menu').css('transition-duration') );
		$('body').css({overflow: 'scroll'});

	} else {

		$('menu').removeClass( 'closed' ).addClass('open');
		$('body').removeClass( 'modal-closed' ).addClass('modal-open');		
		$('#overlay').fadeIn( $('menu').css('transition-duration') );
		$('body').css({overflow: 'hidden'});

	}
}

// function menuNavToggle(_link){
// 	var sibling = $(_link).next();
// 	if($(sibling).hasClass('closed')){
// 		$(sibling).removeClass('closed').addClass('open');
// 	  $( sibling ).animate({
// 	    height: '100%'
// 	  }, 500, function() {
// 	    // Animation complete.
// 	  });

// 	}
// 	else{
// 	  $( sibling ).animate({
// 	    height: '0'
// 	  }, 500, function() {
// 	    // Animation complete.
// 	  });

// 		$(sibling).removeClass('open').addClass('closed');
// 	}
// }


function menuNavToggle(_link){
	var sibling = $(_link).next();

	if($(sibling).hasClass('closed')){
		$(sibling).removeClass('closed').addClass('open');
	  	$( sibling ).slideDown();
	}
	else{
		$(sibling).removeClass('open').addClass('closed');
	  	$( sibling ).slideUp();		
	}
}

/** ----------- SORTING ACTIONS --------------------------------- */


function transitionIn( set ) {
	set.fadeIn( 350 );
}

function transitionOut( set ) {
	set.fadeOut( 350 );
}

function filter(key, set) {
	var inSet = set.filter( function( i, element ) {
		return $( this ).data('sort-value').indexOf( key.trim() ) !== -1;
	});

	var outSet = set.filter( function( i, element ) {
		return $( this ).data('sort-value').indexOf( key.trim() ) === -1;
	});

	if ( outSet.length ) {

		outSet.fadeOut( 175, function() {
			inSet.fadeIn( 175 );
		});

	} else if ( inSet.length ) {

		inSet.fadeIn( 175 );

	}
}

function activate( key ) {
	$('*[data-sort-key]').removeClass('active');
	$('*[data-sort-key="' + ( key.data('sort-key') ) + '"]').addClass('active');
	key.addClass('active');
}




