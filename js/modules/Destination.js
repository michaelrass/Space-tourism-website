export default function Destination() {	
	const mainDestination = document.querySelector('.main-destination');
	const navButtons = document.querySelectorAll('.navigation__button-planet');
	const navButtonsUnderline = document.querySelectorAll('.navigation__button-planet__button--underline');
	const destinationTitle = document.querySelectorAll('.information__title-destination--hidden');
	const destinationParagraph = document.querySelectorAll('.information__paragraph--hidden');
	const destinationDistance = document.querySelectorAll('.distance-container__value--hidden');
	const destinationTravelTime = document.querySelectorAll('.travel-time-container__value--hidden');
	const slides = document.querySelectorAll('.planet-image-container__image');
	const slideshowContainer = document.querySelector('.main__planet-image-container');

	let currentIndex = 0;

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

	function togglePlanetsWithLeftRightArrows(event) {
		if (event.key === 'ArrowLeft') {
			currentIndex -= 1; 
			if (currentIndex < 0) {
				currentIndex = slides.length - 1;
			}
		}

		if (event.key === 'ArrowRight') {
			currentIndex += 1;
			if (currentIndex > slides.length - 1) {
				currentIndex = 0;
			}
		}
	}

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
	
			slides.forEach(slide => {
				slide.classList.remove('planet-image-container__image--active');
			})
	
			navButtonsUnderline.forEach(button => {
				button.classList.remove('navigation__button-planet--active');
			}) 
			
			destinationTitle[currentIndex].classList.add('information__title-destination--active');
			destinationParagraph[currentIndex].classList.add('information__paragraph--active');
			destinationDistance[currentIndex].classList.add('distance-container__value--active');
			destinationTravelTime[currentIndex].classList.add('travel-time-container__value--active');
			slides[currentIndex].classList.add('planet-image-container__image--active');
			navButtonsUnderline[currentIndex].classList.add('navigation__button-planet--active');
			slideshowContainer.scrollLeft = currentIndex * slideshowContainer.offsetWidth;
		}
			
	}

	renderHtmlDestination();
}