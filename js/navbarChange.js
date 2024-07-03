const heroSection = document.getElementById("hero-section");
const navbarElm = document.getElementById("navbar");
const verticalScrollPosition = window.scrollY;

if (verticalScrollPosition > heroSection) {
	navbarElm.classList.add("white-nav");
} else {
	navbarElm.classList.remove("white-nav");
}
