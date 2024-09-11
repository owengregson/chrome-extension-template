/* IMPORTANT: ADD YOUR UPDATE URL HERE. */

document.addEventListener("DOMContentLoaded", function () {
	const updateButton = document.querySelector(".update-button");
	updateButton.addEventListener("click", function () {
		chrome.tabs.create({ // Add update URL below:
			url: "https://github.com/owengregson/chrome-extension-template/",
		});
	});
});