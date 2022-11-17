export default function Technology() {
	const mainTechnology = document.querySelector('.main-technology');
	const navButtons = document.querySelectorAll('.navigation-technology__button');
	const technologyType = document.querySelectorAll('.information-container__title-technology-large');
	const technologyInformation = document.querySelectorAll('.information-container__paragraph-technology');
	const technologySlideshow = document.querySelectorAll('.image-container__technology-image');

	let currentIndex = 0;
	
	if (mainTechnology) {
		for (let index = 0; index < technologySlideshow.length; index += 1) {
			navButtons[index].addEventListener('click', event => {
				handleNavButtonClick(event, index);
			})
		}

		// window.addEventListener('keyup', handleWindowKeyup);
	}

	renderHtmlTechnology();
	
	function handleNavButtonClick(event, index) {
		navigateBetweenTechnology(event, index);
		renderHtmlTechnology();
	}

	function navigateBetweenTechnology(event, index) {
		currentIndex = index;
	}

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
	
			navButtons[currentIndex].classList.add('navigation-technology__button--active');
			technologyType[currentIndex].classList.add('information-container__title-technology-large--active');
			technologyInformation[currentIndex].classList.add('information-container__paragraph-technology--active');
			technologySlideshow[currentIndex].classList.add('image-container__technology-image--active');
		}
	}
}