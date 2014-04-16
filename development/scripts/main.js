'use strict';

$(window).on('scroll', function(){

	var currentPosition = $(window).scrollTop();

	// ==============================================
	// Intro Logo - Parallax Effect
	// ==============================================

	(function(){

		var introPanel = $('.intro');
		var introHeight = introPanel.height();

		if ( currentPosition <= introHeight  && !$('html').hasClass('touch') ) {

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
		var scrollToTopButton = $('#scrollToTop');
		var mainHeader = $('.main-header');
		var mainLogo = $('.main-header__logo');

		if ( currentPosition > 400 ) {

			scrollToTopButton.addClass('visible');
			mainHeader.addClass('visible');
			mainLogo.addClass('visible');

		} else {

			scrollToTopButton.removeClass('visible');
			mainHeader.removeClass('visible');
			mainLogo.removeClass('visible');

		}

	})();

});

// ==============================================
// Responsive Menu
// ==============================================

(function(){

	// Cache our variables
	var menu = $('.main-navigation__list');
	var menuLink = $('.main-navigation__list');
	var buttonTemplate = '<a class="main-navigation__toggle-button" id="toggleNavMenu" tabindex="1"></a>';

	// Insert our toggle button
	menu.after( buttonTemplate );

	// On click or keypress
	$(document).on( 'click keypress', '#toggleNavMenu', function ( event ) {

		// Prevent default action
		event.preventDefault();

		// If enter key, spacebar or click
		if ( ( event.which == 13 || 32 ) || event.type === 'click' ) {

			// Toggle menu as visible
			menu.toggleClass('main-navigation__list--visible');

			// Toggle button as active
			$(this).toggleClass('main-navigation__toggle-button--active');

		}

	});

})();

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


// ==============================================
// Konami Code
// ==============================================


var Konami = function (callback) {
	var konami = {
		addEvent: function (obj, type, fn, ref_obj) {
			if (obj.addEventListener)
				obj.addEventListener(type, fn, false);
			else if (obj.attachEvent) {
				// IE
				obj["e" + type + fn] = fn;
				obj[type + fn] = function () {
					obj["e" + type + fn](window.event, ref_obj);
				}
				obj.attachEvent("on" + type, obj[type + fn]);
			}
		},
		input: "",
		pattern: "38384040373937396665",
		load: function (link) {
			this.addEvent(document, "keydown", function (e, ref_obj) {
				if (ref_obj) konami = ref_obj; // IE
				konami.input += e ? e.keyCode : event.keyCode;
				if (konami.input.length > konami.pattern.length)
					konami.input = konami.input.substr((konami.input.length - konami.pattern.length));
				if (konami.input == konami.pattern) {
					konami.code(link);
					konami.input = "";
					e.preventDefault();
					return false;
				}
			}, this);
			this.iphone.load(link);
		},
		code: function (link) {
			window.location = link
		},
		iphone: {
			start_x: 0,
			start_y: 0,
			stop_x: 0,
			stop_y: 0,
			tap: false,
			capture: false,
			orig_keys: "",
			keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
			code: function (link) {
				konami.code(link);
			},
			load: function (link) {
				this.orig_keys = this.keys;
				konami.addEvent(document, "touchmove", function (e) {
					if (e.touches.length == 1 && konami.iphone.capture == true) {
						var touch = e.touches[0];
						konami.iphone.stop_x = touch.pageX;
						konami.iphone.stop_y = touch.pageY;
						konami.iphone.tap = false;
						konami.iphone.capture = false;
						konami.iphone.check_direction();
					}
				});
				konami.addEvent(document, "touchend", function (evt) {
					if (konami.iphone.tap == true) konami.iphone.check_direction(link);
				}, false);
				konami.addEvent(document, "touchstart", function (evt) {
					konami.iphone.start_x = evt.changedTouches[0].pageX;
					konami.iphone.start_y = evt.changedTouches[0].pageY;
					konami.iphone.tap = true;
					konami.iphone.capture = true;
				});
			},
			check_direction: function (link) {
				x_magnitude = Math.abs(this.start_x - this.stop_x);
				y_magnitude = Math.abs(this.start_y - this.stop_y);
				x = ((this.start_x - this.stop_x) < 0) ? "RIGHT" : "LEFT";
				y = ((this.start_y - this.stop_y) < 0) ? "DOWN" : "UP";
				result = (x_magnitude > y_magnitude) ? x : y;
				result = (this.tap == true) ? "TAP" : result;

				if (result == this.keys[0]) this.keys = this.keys.slice(1, this.keys.length);
				if (this.keys.length == 0) {
					this.keys = this.orig_keys;
					this.code(link);
				}
			}
		}
	}

	typeof callback === "string" && konami.load(callback);
	if (typeof callback === "function") {
		konami.code = callback;
		konami.load();
	}

	return konami;
};

var easterEgg = new Konami(function() {

    $(document.body).addClass('konami');

});