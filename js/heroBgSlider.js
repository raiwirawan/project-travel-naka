const overlayImages = document.querySelectorAll(".overlay-image");

let i = 0;

setInterval(() => {
	i += 1;

	if (i == overlayImages.length + 1) {
		i = 1;
	}

	overlayImages.forEach((image) => {
		image.classList.remove("show");
		if (image.getAttribute("name") == i) {
			image.classList.add("show");
		}
	});
}, 10000);
