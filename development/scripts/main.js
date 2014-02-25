'use strict';

$(window).on('scroll', function(){

	var currentPosition = $(window).scrollTop();

	// ==============================================
	// Intro Logo - Parallax Effect
	// ==============================================

	(function(){

		var introPanel = $('.intro');
		var introHeight = introPanel.height();

		if ( currentPosition <= introHeight ) {

			var offset = Math.round( currentPosition / 3 );

			$('.section__title--intro').css({
				'-webkit-transform': 'translate3d(0,' + offset + 'px,0)',
				'-moz-transform': 'translate3d(0,' + offset + 'px,0)',
				'-ms-transform': 'translate3d(0,' + offset + 'px,0)',
				'transform': 'translate3d(0,' + offset + 'px,0)'
			});

		}

	})();

	// ==============================================
	// Header Animation
	// ==============================================

	(function(){

		var headerVisible = false;

		if ( currentPosition > 400 ) {

			$('#scrollToTop').addClass('visible');
			$('.main-header').addClass('visible');
			$('.main-header__logo').addClass('visible');

		} else {

			$('#scrollToTop').removeClass('visible');
			$('.main-header').removeClass('visible');
			$('.main-header__logo').removeClass('visible');

		}

	})();

});

// ==============================================
// Persistent Contact Information
// ==============================================

(function(){

	var contactIconLink = $('.contact-icons__list-item a');

	// Set our first link as active
	contactIconLink.first().addClass('active');

	// On mouse-over
	contactIconLink.on( 'mouseover focus', function () {

		// Remove all active classes
		contactIconLink.removeClass('active');
		// Set our hovered/focused link as active
		$( this ).toggleClass('active');

	});

})();

// ==============================================
// Section Transition
// ==============================================

(function() {

	// Target links with a hash followed by an ID
	$('a[href*=#]:not([href=#])').on( 'click', function (event) {

		// prevent our default action
		event.preventDefault();

		// If link hostname is the same as our location hostname
		if ( location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname ) {

			// Get the target
			var target = $(this.hash);

			// Clean it up
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			// If we have a target
			if ( target.length ) {

				// Animate to that target
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 400);

			}

		}

	});

})();

// ==============================================
// Google Maps
// ==============================================

(function(){

	function initialize() {
		var myLatlng = new google.maps.LatLng(51.45420,-2.59229);
		var mapOptions = {
			zoom: 16,
			zoomControl: false,
			disableDoubleClickZoom: true,
			mapTypeControl: false,
			scaleControl: false,
			scrollwheel: false,
			streetViewControl: false,
			draggable : true,
			overviewMapControl: false,
			panControl: false,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: [
				{
					featureType: 'road',
					elementType: 'labels',
					stylers: [ { visibility: 'simplified' }, { lightness: 20 } ]
				},
				{
					featureType: 'administrative.land_parcel',
					elementType: 'all',
					stylers: [ { visibility: 'off' } ]
				},
				{
					featureType: 'landscape.man_made',
					elementType: 'all',
					stylers: [ { visibility: 'off' } ]
				},
				{
					featureType: 'transit',
					elementType: 'all',
					stylers: [ { visibility: 'off' } ]
				},
				{
					featureType: 'road.local',
					elementType: 'labels',
					stylers: [ { visibility: 'simplified' } ]
				},
				{
					featureType: 'road.local',
					elementType: 'geometry',
					stylers: [ { visibility: 'simplified' } ]
				},
				{
					featureType: 'road.highway',
					elementType: 'labels',
					stylers: [ { visibility: 'simplified' } ]
				},
				{
					featureType: 'poi',
					elementType: 'labels',
					stylers: [ { visibility: 'off' } ]
				},
				{
					featureType: 'road.arterial',
					elementType: 'labels',
					stylers: [ { visibility: 'off' } ]
				},
				{
					featureType: 'water',
					elementType: 'all',
					stylers: [ { hue: '#a1cdfc' },{ saturation: 30 },{ lightness: 49 } ]
				},
				{
					featureType: 'road.highway',
					elementType: 'geometry',
					stylers: [ { hue: '#f49935' } ]
				},
				{
					featureType: 'road.arterial',
					elementType: 'geometry',
					stylers: [ { hue: '#fad959' } ]
				}
			]
		};
	 
		var map = new google.maps.Map( document.getElementById('map-canvas'), mapOptions );

		var marker = new google.maps.Marker({
			icon: '/images/google-maps-marker.png',
			position: myLatlng,
			map: map,
		});

		google.maps.event.addListener( map, 'click', function (event) {
			this.setOptions({ scrollwheel: true });
		});

	}

	google.maps.event.addDomListener(window, 'load', initialize);

})();