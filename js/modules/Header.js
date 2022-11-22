export default function Header() {	
	const buttonBurgerMenu = document.querySelector('.header__burger-icon-container');
	const asideMenu = document.querySelector('.header__aside--hidden');
	const buttonCloseAsideMenu = document.querySelector('.button-close-aside');
		
	let burgerMenuVisible = false;
	
	buttonBurgerMenu.addEventListener('click', handleButtonBurgerMenuClick);
	buttonCloseAsideMenu.addEventListener('click', handleButtonCloseAsideMenuClick);

	function handleButtonBurgerMenuClick() {
		openAsideMenu();
		renderHtmlAsideMenu();
	}

	function handleButtonCloseAsideMenuClick() {
		closeAsideMenu();
		renderHtmlAsideMenu();
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