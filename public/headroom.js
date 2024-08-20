// HEADROOM
import Headroom from 'headroom.js';
var myElement = document.querySelector('#header');
var headroom = new Headroom(myElement);
headroom.init();

(function () {
	var header = document.querySelector('#header');
	if (window.location.hash) {
		header.classList.add('headroom--unpinned');
	}
	var headroom = new Headroom(header, {
		tolerance: {
			down: 0,
			up: 0,
		},
		offset: 50,
	});

	headroom.init();
})();

// HEADROOM.JS MOBILE SLIDE UP ON SCROLL
// (function () {
// 	var logoMobile = document.querySelector('.moveUp');
// 	if (window.location.hash) {
// 		logoMobile.classList.add('headroom--unpinned');
// 	}
// 	var headroomMobile = new Headroom(logoMobile, {
// 		tolerance: {
// 			down: 0,
// 			up: 0,
// 		},
// 		offset: 200,
// 	});

// 	headroomMobile.init();
// })();

// HEADROOM.JS IMG SLIDE UP ON SCROLL
/*! foreach.js v1.1.0 | (c) 2014 @toddmotto | https://github.com/toddmotto/foreach */
var forEach = function (collection, callback, scope) {
	if (Object.prototype.toString.call(collection) === '[object Object]') {
		for (var prop in collection) {
			if (Object.prototype.hasOwnProperty.call(collection, prop)) {
				callback.call(scope, collection[prop], prop, collection);
			}
		}
	} else {
		for (var i = 0, len = collection.length; i < len; i++) {
			callback.call(scope, collection[i], i, collection);
		}
	}
};

// Get element's distance from the top of the page
var getElemDistance = function (elem) {
	var location = 0;
	if (elem.offsetParent) {
		do {
			location += elem.offsetTop;
			elem = elem.offsetParent;
		} while (elem);
	}
	return location >= 0 ? location : 0;
};

var elems = document.querySelectorAll('.reveal');
var Offset = 40;

forEach(elems, function (element) {
	if (getElemDistance(element) > window.innerHeight) {
		// calculate the offset
		var ElemPos = getElemDistance(element) - window.innerHeight + Offset;
	} else {
		// if already in view port, set to -1 to reveal straight away
		var ElemPos = -1;
	}

	var hr = new Headroom(element, {
		offset: ElemPos,
		tolerance: 5,
		classes: {
			initial: 'revealer',
			pinned: 'revealer--pinned',
			unpinned: 'revealer--unpinned',
			top: 'revealer--hide',
			notTop: 'revealer--show',
		},
	});

	hr.init();
});
