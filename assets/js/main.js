'use strict';

window.sr = ScrollReveal({ reset: true });

sr.reveal('.header .logo',{ 
	duration: 1000,
	reset: false
});

sr.reveal('.header h1',{ 
	duration: 1000,
	reset: false
});

sr.reveal('.animated-show',{ 
	duration: 1000,
	useDelay: 'always',
	delay: 200
});
sr.reveal('.brush-img',{ 
	duration: 1000,
	useDelay: 'always',
	delay: 200
});

sr.reveal('.media-show.delay300',{ 
	duration: 1000,
	useDelay: 'always',
	delay: 300
});


sr.reveal('.media-show.delay400',{ 
	duration: 1000,
	useDelay: 'always',
	delay: 400
});


sr.reveal('.media-show.delay500',{ 
	duration: 1000,
	useDelay: 'always',
	delay: 500
});

sr.reveal('.media-show.delay600',{ 
	duration: 1000,
	useDelay: 'always',
	delay: 600
});

sr.reveal('.media-show.delay700',{ 
	duration: 1000,
	useDelay: 'always',
	delay: 700
});

sr.reveal('.media-show.delay800',{ 
	duration: 1000,
	useDelay: 'always',
	delay: 800
});

$('.social-fire').on('click', function(e) {
	e.preventDefault();

	$(this).next('.social-btns').toggleClass('active');
});