const header = document.getElementById("header");
const destinationSection = document.getElementById("destination-section");
const sticky = destinationSection.offsetTop;

function headerClassChangeScroll() {
	if (window.scrollY >= sticky) {
		header.classList.add("sticky");
	} else if (window.scrollY < sticky) {
		header.classList.remove("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

window.onscroll = () => {
	headerClassChangeScroll();
};
