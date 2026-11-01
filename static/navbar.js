function setupNavbarBurgers() {
	// Get all "navbar-burger" elements
	const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

	// Check if there are any navbar burgers
	if (navbarBurgers.length > 0) {
		// Add a click event on each of them
		navbarBurgers.forEach(el => {
			el.addEventListener("click", () => {
				// Get the target from the "data-target" attribute
				const targetId = el.dataset.target;
				const target = document.getElementById(targetId);

				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle("is-active");
				target.classList.toggle("is-active");
			});
		});
	}
}

// navbar.js loads async, so DOMContentLoaded may already have fired
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", setupNavbarBurgers);
} else {
	setupNavbarBurgers();
}
