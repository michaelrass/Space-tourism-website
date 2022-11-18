export default function Header() {
	let burgerMenuVisible = false;
	
	const buttonHome = document.querySelector('.navigation__button-home');
	const buttonDestination = document.querySelector('.navigation__button-destination');
	const buttonCrew = document.querySelector('.navigation__button-crew');
	const buttonTechnology = document.querySelector('.navigation__button-technology');
	const buttonBurgerMenu = document.querySelector('.header__burger-icon-container');
	const asideMenu = document.querySelector('.header__aside--hidden');
	const buttonCloseAsideMenu = document.querySelector('.button-close-aside');

	buttonHome.addEventListener('click', handleButtonHomeClick);
	buttonDestination.addEventListener('click', handleButtonDestinationClick);
	buttonCrew.addEventListener('click', handleButtonCrewClick);
	buttonTechnology.addEventListener('click', handleButtonTechnologyClick);
	buttonBurgerMenu.addEventListener('click', handleButtonBurgerMenuClick);
	buttonCloseAsideMenu.addEventListener('click', handleButtonCloseAsideMenuClick);

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

	function goToHomeHtml() {
		window.location.href = '../../html/home.html';
	}
	
	function goToDestinationHtml() {
		window.location.href = '../../html/destination.html';
	}
	
	function goToCrewHtml() {
		window.location.href = '../../html/crew.html';
	}
	
	function goToTechnologyHtml() {
		window.location.href = '../../html/technology.html';
	}

	function openAsideMenu() {
		burgerMenuVisible = !burgerMenuVisible;
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