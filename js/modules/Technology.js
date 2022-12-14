export default function Technology() {
	const mainTechnology = document.querySelector('.main-technology');
	const navButtons = document.querySelectorAll('.navigation-technology__button');
	const technologyType = document.querySelectorAll('.information-container__title-technology-large');
	const technologyInformation = document.querySelectorAll('.information-container__paragraph-technology');
	const technologySlideshow = document.querySelectorAll('.image-container__technology-image');
	const technologySlideshowTablet = document.querySelectorAll('.image-container__technology-image-tablet');

	let currentIndex = 0;

	// If the window is on Main-technology, the buttondots beneath the image gets an event listener.
	if (mainTechnology) {
		for (let index = 0; index < technologySlideshow.length; index += 1) {
			navButtons[index].addEventListener('click', event => {
				handleNavButtonClick(event, index);
			})
		}

		window.addEventListener('keyup', handleWindowKeyup);
	}

	renderHtmlTechnology();
	
	function handleNavButtonClick(event, index) {
		navigateBetweenTechnology(event, index);
		renderHtmlTechnology();
	}

	function handleWindowKeyup(event) {
		navigateWithUpAndDownArros(event);
		renderHtmlTechnology();
	}

	function navigateBetweenTechnology(event, index) {
		currentIndex = index;
	}

	// The left and right arrows increase or decrease the currentIndex Var.
	function navigateWithUpAndDownArros(event) {
		if (event.key === 'ArrowLeft') {
			currentIndex -= 1;
				if (currentIndex < 0) {
					currentIndex = technologySlideshow.length - 1;
				}
		}
		if (event.key === 'ArrowRight') {
			currentIndex += 1;
				if (currentIndex > technologySlideshow.length - 1) {
					currentIndex = 0;
				}
		}
		if (event.key === 'ArrowDown') {
			currentIndex += 1;
				if (currentIndex > technologySlideshow.length - 1) {
					currentIndex = 0;
				}
		}

		if (event.key === 'ArrowUp') {
			currentIndex -= 1;
				if (currentIndex < 0) {
					currentIndex = technologySlideshow.length - 1;
				}
		}
	}

	// RenderhtmlTechnology first loops through and removes active classlists, 
	// then uses currentIndex to add the active class back.
	function renderHtmlTechnology() {
		if (mainTechnology) {
			navButtons.forEach(button => {
				button.classList.remove('navigation-technology__button--active');
			})
	
			technologyType.forEach(type => {
				type.classList.remove('information-container__title-technology-large--active');
			})
	
			technologyInformation.forEach(information => {
				information.classList.remove('information-container__paragraph-technology--active');
			}) 
	
			technologySlideshow.forEach(slide => {
				slide.classList.remove('image-container__technology-image--active');
			})

			technologySlideshowTablet.forEach(slideTablet => {
				slideTablet.classList.remove('image-container__technology-image-tablet--active');
			})
	
			navButtons[currentIndex].classList.add('navigation-technology__button--active');
			technologyType[currentIndex].classList.add('information-container__title-technology-large--active');
			technologyInformation[currentIndex].classList.add('information-container__paragraph-technology--active');
			technologySlideshow[currentIndex].classList.add('image-container__technology-image--active');
			technologySlideshowTablet[currentIndex].classList.add('image-container__technology-image-tablet--active');
		}
	}
}