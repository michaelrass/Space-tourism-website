export default function HomeButtonExplore() {
	const buttonExplore = document.querySelector('.main__explore-button');

	buttonExplore.addEventListener('click', handleButtonExploreClick);

	function handleButtonExploreClick() {
		goToDestinationHtml();
		console.log('hei');
	}

	function goToDestinationHtml() {
		window.location.href = '../../html/destination.html';
	}
}