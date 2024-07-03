const testimoniesContainer = document.getElementById("testimonies-container");
const testimony = document.querySelectorAll(".testimony");

const tesConRect = testimoniesContainer.getBoundingClientRect();

function setWidthBasedChildNodes() {
	const totalWidth = 700 * testimony.length;

	testimoniesContainer.style.width = totalWidth + "px";
}

function slideTestimonyToLeft() {
	let j = 0;

	setInterval(() => {
		testimoniesContainer.style.transform = "translateX(-" + 700 * j + "px)";

		j += 1;

		if (j == testimony.length) {
			j = 0;
		}
	}, 5000);
}

setWidthBasedChildNodes();
slideTestimonyToLeft();
