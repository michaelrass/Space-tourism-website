export default function Header() {
	let burgerMenuVisible = false;
	
	const buttonHome = document.querySelector('.navigation__button-home');
	const buttonDestination = document.querySelector('.navigation__button-destination');
	const buttonCrew = document.querySelector('.navigation__button-crew');
	const buttonTechnology = document.querySelector('.navigation__button-technology');
	const buttonBurgerMenu = document.querySelector('.header__burger-icon-container');
	const asideMenu = document.querySelector('.header__aside--hidden');
	const buttonCloseAsideMenu = document.querySelector('.button-close-aside');
	const burgerNavHome = document.querySelector('.top-container__button-in-aside-home');
	const burgerNavDestination = document.querySelector('.top-container__button-in-aside-destination');
	const burgerNavCrew = document.querySelector('.top-container__button-in-aside-crew');
	const burgerNavTechnology = document.querySelector('.top-container__button-in-aside-technology');

	buttonHome.addEventListener('click', handleButtonHomeClick);
	buttonDestination.addEventListener('click', handleButtonDestinationClick);
	buttonCrew.addEventListener('click', handleButtonCrewClick);
	buttonTechnology.addEventListener('click', handleButtonTechnologyClick);
	buttonBurgerMenu.addEventListener('click', handleButtonBurgerMenuClick);
	buttonCloseAsideMenu.addEventListener('click', handleButtonCloseAsideMenuClick);

	if (asideMenu) {
		burgerNavHome.addEventListener('click', handleBurgerNavHomeClick);
		burgerNavDestination.addEventListener('click', handleBurgerNavDestinationClick);
		burgerNavCrew.addEventListener('click', handleBurgerNavCrewClick);
		burgerNavTechnology.addEventListener('click', handleBurgerNavTechnologyClick);
	}
	
	function handleButtonHomeClick() {
		goToHomeHtml();
	}

	function handleButtonDestinationClick() {
		goToDestinationHtml();
	}

	function handleButtonCrewClick() {
		goToCrewHtml();
	}

	function handleButtonTechnologyClick() {
		goToTechnologyHtml();
	}

	function handleButtonBurgerMenuClick() {
		openAsideMenu();
		renderHtmlAsideMenu();
	}

	function handleButtonCloseAsideMenuClick() {
		closeAsideMenu();
		renderHtmlAsideMenu();
	}

	function handleBurgerNavHomeClick() {
		goToHomeHtml();
	}

	function handleBurgerNavDestinationClick() {
		goToDestinationHtml();
	}

	function handleBurgerNavCrewClick() {
		goToCrewHtml();
	}

	function handleBurgerNavTechnologyClick() {
		goToTechnologyHtml();
	}

	function goToHomeHtml() {
		window.location.href = '../../home.html';
	}
	
	function goToDestinationHtml() {
		window.location.href = '../../destination.html';
	}
	
	function goToCrewHtml() {
		window.location.href = '../../crew.html';
	}
	
	function goToTechnologyHtml() {
		window.location.href = '../../technology.html';
	}

	function openAsideMenu() {
		burgerMenuVisible = true;
	}

	function closeAsideMenu() {
		burgerMenuVisible = false;
	}

	function renderHtmlAsideMenu() {
		if (burgerMenuVisible) {
			asideMenu.classList.add('header__aside--active')
		} else {
			asideMenu.classList.remove('header__aside--active');
			burgerMenuVisible = false;
		}
	}
}