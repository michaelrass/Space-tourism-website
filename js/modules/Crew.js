export default function Crew() {
	const crewTitle = document.querySelectorAll('.information-container__title-small');
	const crewName = document.querySelectorAll('.information-container__title-large');
	const crewInfo = document.querySelectorAll('.information-container__paragraph-crew');
	const crewSlideshow = document.querySelectorAll('.image-container__crew-image');
	const navButtonDots = document.querySelectorAll('.button-navigation__button-dot');
	
	let currentIndex = 0;
	
	window.addEventListener('keyup', handleWindowKeyup);
	
	for (let index = 0; index < navButtonDots.length; index += 1) {
		navButtonDots[index].addEventListener('click', event => {
			handleNavButtonDotClick(event, index);
		})
	}
	
	renderHtml();
	
	function handleWindowKeyup(event) {
		toggleCrewMembersWithLeftRightArrows(event);
		renderHtml();
	}
	
	function handleNavButtonDotClick(event, index) {
		navigateCrewMembersWithButtonDots(event, index);
		renderHtml();
	}

	function navigateCrewMembersWithButtonDots(event, index) {
		currentIndex = index;
	}

	function toggleCrewMembersWithLeftRightArrows(event) {
		if (event.key === 'ArrowLeft') {
			currentIndex -= 1;
				if (currentIndex < 0) {
					currentIndex = crewSlideshow.length - 1;
				}
		}

		if (event.key === 'ArrowRight') {
			currentIndex += 1;
				if (currentIndex > crewSlideshow.length - 1) {
					currentIndex = 0;
				}
		}
	}

	function renderHtml() {
		crewTitle.forEach(title => {
			title.classList.remove('information-container__title-small--active');
		})

		crewName.forEach(name => {
			name.classList.remove('information-container__title-large--active');
		})

		crewInfo.forEach(info => {
			info.classList.remove('information-container__paragraph-crew--active');
		})

		crewSlideshow.forEach(slide => {
			slide.classList.remove('image-container__crew-image--active');
		})

		navButtonDots.forEach(dot => {
			dot.classList.remove('button-navigation__button-dot--active');
		})

		crewTitle[currentIndex].classList.add('information-container__title-small--active');
		crewName[currentIndex].classList.add('information-container__title-large--active');
		crewInfo[currentIndex].classList.add('information-container__paragraph-crew--active');
		crewSlideshow[currentIndex].classList.add('image-container__crew-image--active');
		navButtonDots[currentIndex].classList.add('button-navigation__button-dot--active');
	}

}