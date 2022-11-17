export default function HomeButtonExplore() {
	const buttonExplore = document.querySelector('.main__explore-button');

	if (buttonExplore) {
		buttonExplore.addEventListener('click', handleButtonExploreClick);
	}

	function handleButtonExploreClick() {
		goToDestinationHtml();
	}

	function goToDestinationHtml() {
		window.location.href = '../../html/destination.html';
	}
}