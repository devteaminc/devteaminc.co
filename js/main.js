$('.burger-icon').on('click', function( event ){
	// Prevent the default action
	event.preventDefault();

	// Toggle class name on element
	$(this).toggleClass('js-burger-icon');

	// Add Class to body
	$('body').toggleClass('menu-visible');
});

$('.feed-move-icon').on('click', function( event ){
  // Prevent the default action
  event.preventDefault();

  // Toggle class name on element
  $(this).toggleClass('js-slide-icon');

  // Add Class to body
  $('body').toggleClass('slide-visible');
});

$('.burger-ico').on('click', function( event ){
	// Prevent the default action
	event.preventDefault();

	// Toggle class name on element
	$(this).toggleClass('js-burger-icon');
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

var fixed = false;

$(document).scroll(function() {
    if( $(this).scrollTop() > 400 ) {
        if( !fixed ) {
            fixed = true;
            $('.scroll-up ').addClass('visible');
            $('.nav-bg ').addClass('bg-vis');
        }
    } else {
        if( fixed ) {
            fixed = false;
            $('.scroll-up ').removeClass('visible');
            $('.nav-bg ').removeClass('bg-vis');
        }
    }
});

// HEADER PARALAX

/**
 * Parallax Scrolling Tutorial
 * For Smashing Magazine
 * July 2011
 *   
 * Author: Richard Shepherd
 *       www.richardshepherd.com
 *       @richardshepherd   
 */

// On your marks, get set...
$(document).ready(function(){
            
  // Cache the Window object
  $window = $(window);
  
  // Cache the Y offset and the speed of each sprite
  $('[data-type]').each(function() {  
    $(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
    $(this).data('Xposition', $(this).attr('data-Xposition'));
    $(this).data('speed', $(this).attr('data-speed'));
  });
  
  // For each element that has a data-type attribute
  $('section[data-type="background"]').each(function(){
  
  
    // Store some variables based on where we are
    var $self = $(this),
      offsetCoords = $self.offset(),
      topOffset = offsetCoords.top;
    
    // When the window is scrolled...
      $(window).scroll(function() {
  
      // If this section is in view
      if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
         ( (topOffset + $self.height()) > $window.scrollTop() ) ) {
  
        // Scroll the background at var speed
        // the yPos is a negative value because we're scrolling it UP!                
        var yPos = -($window.scrollTop() / $self.data('speed')); 
        
        // If this element has a Y offset then add it on
        if ($self.data('offsetY')) {
          yPos += $self.data('offsetY');
        }
        
        // Put together our final background position
        var coords = '50% '+ yPos + 'px';

        // Move the background
        $self.css({ backgroundPosition: coords });
        
        // Check for other sprites in this section  
        $('[data-type="sprite"]', $self).each(function() {
          
          // Cache the sprite
          var $sprite = $(this);
          
          // Use the same calculation to work out how far to scroll the sprite
          var yPos = -($window.scrollTop() / $sprite.data('speed'));          
          var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';
          
          $sprite.css({ backgroundPosition: coords });                          
          
        }); // sprites
      
        // Check for any Videos that need scrolling
        $('[data-type="video"]', $self).each(function() {
          
          // Cache the video
          var $video = $(this);
          
          // There's some repetition going on here, so 
          // feel free to tidy this section up. 
          var yPos = -($window.scrollTop() / $video.data('speed'));         
          var coords = (yPos + $video.data('offsetY')) + 'px';
  
          $video.css({ top: coords });                          
          
        }); // video  
      
      }; // in view
  
    }); // window scroll
      
  }); // each data-type

}); // document ready


// GOOGLE MAP

function initialize() {
  var myLatlng = new google.maps.LatLng(51.45420,-2.59229);
  var mapOptions = {
    zoom: 16,
    zoomControl: false,
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    scaleControl: false,
    scrollwheel: true,
    streetViewControl: false,
    draggable : true,
    overviewMapControl: false,
    panControl: false,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [   
  {
    featureType: "road",
    elementType: "labels",
    stylers: [ { visibility: "simplified" }, { lightness: 20 } ]
  },{
    featureType: "administrative.land_parcel",
    elementType: "all",
    stylers: [ { visibility: "off" } ]
  },{
    featureType: "landscape.man_made",
    elementType: "all",
    stylers: [ { visibility: "off" } ]
  },{
    featureType: "transit",
    elementType: "all",
    stylers: [ { visibility: "off" } ]
  },{
    featureType: "road.local",
    elementType: "labels",
    stylers: [ { visibility: "simplified" } ]
  },{
    featureType: "road.local",
    elementType: "geometry",
    stylers: [ { visibility: "simplified" } ]
  },{
    featureType: "road.highway",
    elementType: "labels",
    stylers: [ { visibility: "simplified" } ]
  },{
    featureType: "poi",
    elementType: "labels",
    stylers: [ { visibility: "off" } ]
    },{
    featureType: "road.arterial",
    elementType: "labels",
    stylers: [ { visibility: "off" } ]
  },{
    featureType: "water",
    elementType: "all",
    stylers: [ { hue: "#a1cdfc" },{ saturation: 30 },{ lightness: 49 } ]
  },{
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [ { hue: "#f49935" } ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [ { hue: "#fad959" } ]
  }
],
    
    }
 
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      icon: '../img/steven_marker.png',
      position: myLatlng,
      map: map,
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


// Init SmartPlaceholders.js

$( '.js-float-label-wrapper' ).FloatLabel();

// ===============
// Demo JavaScript
// ===============

// Show Modal on Submit

$('#demoForm').on('submit',function( event ){

  var modal = '<div class="modal"><h3>Your Product has been Saved</h3></div>',
    blackout='<div class="blackout"></div>';

  $('.wrapper').prepend( blackout ).hide().fadeIn().append( modal );
  event.preventDefault();

});

// Destroy Modal when Clicked

$('body').on( 'click', '.blackout, .modal', function(){
  $('.blackout').fadeOut(function(){
    $(".modal").fadeOut();
  });
});