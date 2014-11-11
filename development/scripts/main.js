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
	menu.before( buttonTemplate );

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
// Newsfeed Toggle
// - Adds conditional CSS class, all animations
//   are generated with CSS3 Transitions
// ==============================================

(function(){

	$('#newsFeedToggle').on( 'click', function () {

		$('body').toggleClass('newsfeed-active');

	});

	$('#siteMask').on( 'click', function () {

		$('body').removeClass('newsfeed-active');

	});

})();


// ==============================================
// Konami Code
// - (/scripts/plugins/konami-js/)
// ==============================================

(function(){

	var easterEgg = new Konami(function() {

		$(document.body).addClass('konami');

	});

})();


// ==============================================
// Last.fm Widget
// - (/scripts/plugins/lastfmnowplaying/)
// ==============================================

(function(){

	$('#lastFmWidget').lastfmNowPlaying({
		apiKey: 'd8abda572c7cfcb1522dfe167d6cd8fb',
		members: [
			'colouryum',
			'pshillier',
			'seengee',
			'silentdecay'
		]
	});

})();


// ==============================================
// Slack Feed
// ==============================================

(function(){

	// in Array function
	// - For checking of string is in an array

	function inArray ( array, query ) {
		return array.indexOf( query ) > -1;
	}

	// Parse data to template

	function addToTemplate( data ) {

		// Check if more posts exists than loaded initially

		if ( data.has_more ) {

			$('#newsFeedStream').attr( 'data-has_more', 'true' );
			$('#newsFeedStream').attr( 'data-last_ts', data.messages[ data.messages.length - 1].ts );

		} else {

			$('#newsFeedStream').attr( 'data-has_more', 'false' );

		}

		// Iterate through each message

		$( data.messages ).each( function() {

			// Save reference to each message
			var message = this;

			// Save reference to message keys
			var messageKeys = Object.keys( message );

			// Create blank attachment key array
			var attachmentKeys = [];

			// Create blank files key array
			var fileKeys = [];

			// If we have attachment keys, add them to the attachment key array (concat)
			if ( inArray ( messageKeys, 'attachments' ) ) {
				attachmentKeys = attachmentKeys.concat( Object.keys( message.attachments[0] ) );
			}

			// If we have file keys, add them to the file key array (concat)
			if ( inArray ( messageKeys, 'file' ) ) {
				fileKeys = fileKeys.concat( Object.keys( message.file ) );
			}

			// Prepare Data

			var text                 = '';
			var image                = '';
			var video                = '';
			var imageFile            = '';
			var timeStamp            = '<time class="newsfeed-post__date" datetime="' + new Date( parseInt( message.ts, 10 ) * 1000 ) + '" >' + moment( parseInt( message.ts, 10 ) * 1000 ).fromNow() + '</time>'; // Slack uses Unix time stamps (seconds), JavaScript time should be in milliseconds
			var groupPurpose         = '';
			var groupJoin            = '';
			var fileComment          = '';
			var postCategory         = '';
			var imageFileDescription = '';

			// Set variables if post is a notification of group purpose or a member joining a group

			if ( inArray ( messageKeys, 'subtype' ) ) {

				if ( message.subtype === 'group_purpose' ) {
					groupPurpose = true;
				} else if ( message.subtype === 'group_join' ) {
					groupJoin = true;
				} else if ( message.subtype === 'file_comment' ) {
					fileComment = true;
				}

			}

			// Filter messages
			
			if ( !inArray ( messageKeys, 'hidden' ) && message.username !== 'github' && !groupPurpose && !groupJoin && !fileComment ) {

				// Message text template (remove angled brackets added to hyperlinks by Slack)

				if ( inArray ( messageKeys, 'text' ) ) {

					// Create reference to the URL
					var linkUrl =  message.text.match(/[^<>]+(?=>)/g);

					text = '<p class="newsfeed-post__text">' + message.text.replace(/</g,'<a class="newsfeed-post__link" href="').replace(/>/g,'" target="_blank">' + linkUrl + '</a>').replace(/\\n/g, 'TEST') + '</p>';

					if ( linkUrl ) {
						postCategory = 'link';
					} else {
						postCategory = 'text';
					}

				}

				// Message Attachement Image

				if ( inArray ( attachmentKeys, 'image_url' ) ) {

					var externalUrl = message.attachments[0].from_url;
					var imageTitle  = message.attachments[0].title;

					image = '<a class="newsfeed-post__imagelink" href="' + externalUrl + '" target="_blank" title="' + imageTitle + '"><img class="newsfeed-post__image" src="' + message.attachments[0].image_url + '"/ alt="' + imageTitle + '" ></a>';
					postCategory = 'image';

				}

				// Message File - Image

				if ( inArray ( fileKeys, 'mimetype' ) ) {

					var mimeType = message.file.mimetype;

					if ( mimeType.match(/image/g) ) {

						imageFile = '<img src="' + message.file.thumb_360 + '" />';
						postCategory = 'image';

					}

					// If post has a comment

					if ( inArray ( fileKeys, 'initial_comment' ) ) {

						imageFileDescription = '<p class="newsfeed-post__text newsfeed-post__text--file-comment">' + message.file.initial_comment.comment + '</p>';

					}

					text = '';

				}

				// Message Attachement Video

				if ( inArray ( attachmentKeys, 'video_html' ) ) {
					image = message.attachments[0].video_html;
					postCategory = 'video';
				}

				// Remove hidden message timestamps

				if ( inArray ( messageKeys, 'hidden' ) ) {
					timeStamp = '';
					text      = '';
				}

				// Prepare Template

				var template =
					'<div class="newsfeed-post newsfeed-post--' + postCategory + '">' +
						'<header class="newsfeed-post__header">' +
							'<i class="newsfeed-post__category-icon newsfeed-post__category-icon--' + postCategory + '"></i>' +
							timeStamp +
						'</header>' +
						text +
						image +
						imageFile +
						imageFileDescription +
						video +
					'</div>'
				;

				// Append template to news feed

				$('#newsFeedStream').append( template );

			}

		});

	}

	// AJAX call
	// - Make a call to our Slack Messages API

	$.ajax({
		url: 'http://api.devteaminc.co/latest/',
		method: 'GET',
		dataType: 'jsonp',
		success: function ( data ) {

			addToTemplate( data );

			var currentPosition = $('#newsFeedStream').scrollTop() + $('#newsFeedStream').height();
			var contentHeight = $('#newsFeedStream')[0].scrollHeight - 50;

			if ( currentPosition >= contentHeight ) {
				
				var getLastTimeStamp = $('#newsFeedStream').attr('data-last_ts');

				$.ajax({
					url: 'http://api.devteaminc.co/latest/' + getLastTimeStamp ,
					method: 'GET',
					dataType: 'jsonp'
				}).done( function ( data ) {
					addToTemplate( data );
				});
				
			}

		}
	});

	var scrolledPast = false;

	$('#newsFeedStream').on( 'scroll', function () {

		var currentPosition = $('#newsFeedStream').scrollTop() + $('#newsFeedStream').height();
		var contentHeight = $('#newsFeedStream')[0].scrollHeight - 50;

		if ( currentPosition >= contentHeight && !scrolledPast ) {

			scrolledPast = true;
			
			var getLastTimeStamp = $('#newsFeedStream').attr('data-last_ts');

			$.ajax({
				url: 'http://api.devteaminc.co/latest/' + getLastTimeStamp ,
				method: 'GET',
				dataType: 'jsonp',
				beforeSend: function () {
					$('#newsFeedLoadingSpinner').addClass('active');
				}
			}).always( function () {

				$('#newsFeedLoadingSpinner').removeClass('active');

			}).done( function ( data ) {

				addToTemplate( data );
				scrolledPast = false;
				emojify.run();

			});

		}

	});


})();


// ==============================================
// Emojify Configuration
// - (/scripts/vendor/emojify/)
// ==============================================

(function(){

	emojify.setConfig({

		emoticons_enabled : true,
		people_enabled    : true,
		nature_enabled    : true,
		objects_enabled   : true,
		places_enabled    : true,
		symobols_enabled  : true

	});

	emojify.run();

})();
