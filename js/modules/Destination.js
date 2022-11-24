export default function Destination() {	
	const mainDestination = document.querySelector('.main-destination');
	const navButtons = document.querySelectorAll('.navigation__button-planet');
	const navButtonsUnderline = document.querySelectorAll('.navigation__button-planet__button--underline');
	const destinationTitle = document.querySelectorAll('.information__title-destination--hidden');
	const destinationParagraph = document.querySelectorAll('.information__paragraph--hidden');
	const destinationDistance = document.querySelectorAll('.distance-container__value--hidden');
	const destinationTravelTime = document.querySelectorAll('.travel-time-container__value--hidden');
	const slideshow = document.querySelectorAll('.planet-image-container__image');

	let currentIndex = 0;

	// If the window is on Main-destination, the buttondots beneath the image gets an event listener.
	if (mainDestination) {
		window.addEventListener('keyup', handleWindowKeyup);
		
		for (let index = 0; index < navButtons.length; index += 1) {
			navButtons[index].addEventListener('click', event => {
				handleNavButtonClick(event, index);
			})
		}
	}
	

	function handleWindowKeyup(event) {
		togglePlanetsWithLeftRightArrows(event);
		renderHtmlDestination();
	}
	
	function handleNavButtonClick(event, index) {
		currentIndex = index;
		renderHtmlDestination();
	}

	// The left and right arrows increase or decrease the currentIndex Var.
	function togglePlanetsWithLeftRightArrows(event) {
		if (event.key === 'ArrowLeft') {
			currentIndex -= 1; 
			if (currentIndex < 0) {
				currentIndex = slideshow.length - 1;
			}
		}

		if (event.key === 'ArrowRight') {
			currentIndex += 1;
			if (currentIndex > slideshow.length - 1) {
				currentIndex = 0;
			}
		}
	}

	
	// RenderhtmlDestination first loops through and removes active classlists, 
	// then uses currentIndex to add the active class back.
	function renderHtmlDestination() {		
		if (mainDestination) {
			destinationTitle.forEach(title => {
				title.classList.remove('information__title-destination--active');
			})
	
			destinationParagraph.forEach(paragraph => {
				paragraph.classList.remove('information__paragraph--active');
			})
	
			destinationDistance.forEach(distance => {
				distance.classList.remove('distance-container__value--active');
			})
	
			destinationTravelTime.forEach(time => {
				time.classList.remove('travel-time-container__value--active');
			})
	
			slideshow.forEach(slide => {
				slide.classList.remove('planet-image-container__image--active');
			})
	
			navButtonsUnderline.forEach(button => {
				button.classList.remove('navigation__button-planet--active');
			}) 
			
			destinationTitle[currentIndex].classList.add('information__title-destination--active');
			destinationParagraph[currentIndex].classList.add('information__paragraph--active');
			destinationDistance[currentIndex].classList.add('distance-container__value--active');
			destinationTravelTime[currentIndex].classList.add('travel-time-container__value--active');
			slideshow[currentIndex].classList.add('planet-image-container__image--active');
			navButtonsUnderline[currentIndex].classList.add('navigation__button-planet--active');
		}
			
	}

	renderHtmlDestination();
}