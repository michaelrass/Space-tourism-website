export default function Header() {

	const buttonHome = document.querySelector('.navigation__button-home');
	const buttonDestination = document.querySelector('.navigation__button-destination');
	const buttonCrew = document.querySelector('.navigation__button-crew');
	const buttonTechnology = document.querySelector('.navigation__button-technology');

	buttonHome.addEventListener('click', handleButtonHomeClick);
	buttonDestination.addEventListener('click', handleButtonDestinationClick);
	buttonCrew.addEventListener('click', handleButtonCrewClick);
	buttonTechnology.addEventListener('click', handleButtonTechnologyClick);

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
}