// SMOOTH SCROLLING
let anchorlinks = document.querySelectorAll('a[href^="#"]');

for (let item of anchorlinks) {
	item.addEventListener('click', (e) => {
		let hashval = item.getAttribute('href');
		let target = document.querySelector(hashval);
		target.scrollIntoView({
			behavior: 'smooth',
		});
		history.pushState(null, null, hashval);
		e.preventDefault();
	});
}
// END SMOOTH SCROLLING

// ADD CLASS TO BODY
const body = document.querySelector('body');
if (window.location.href.indexOf('/thankyou') > -1) {
	body.setAttribute('id', 'thankyou');
}

if (window.location.href.indexOf('/privacy') > -1) {
	body.setAttribute('id', 'privacy');
}
