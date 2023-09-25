/**
 * navbar functionality for responsive
 * @param {*} elem 
 * @param {*} type 
 * @param {*} callback 
 */

// Inelegance machine for workable elem
const addEventOnElement = function (elem, type, callback) {
	if (elem.length > 1) {
		for (let i = 0; i < elem.length; i++) {
			elem[i].addEventListener(type, callback);
		}
	} else {
		elem.addEventListener(type, callback);
	}
};

// getting DOM Objects
const navBtn = document.querySelector(".nav-btn");
const navBar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const closeBtn = document.querySelector(".close-btn");

// click to toggle class
const clickToAdd = function () {
	navBar.classList.toggle("active");
}
addEventOnElement(navBtn, "click", clickToAdd);


// click to remove active
const clickToRedirect = function () {
	navBar.classList.remove("active");
}
addEventOnElement(navLinks, "click", clickToRedirect);
addEventOnElement(closeBtn, "click", clickToRedirect);



