/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about_page":
/*!************************!*\
  !*** ./src/about_page ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAboutPage": () => (/* binding */ renderAboutPage)
/* harmony export */ });
const renderAboutPage = () => {
    const main = document.getElementById("main");
    while (main.firstChild){
        main.removeChild(main.firstChild);
    }

    main.innerHTML = `\n            <div id="about">\n            <div id="location">\n                <h2>\n                    Trek out to our physical location:\n                </h2><h2>\n                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d381.48322381446303!2d138.13336505695443!3d36.93272444760099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sjp!4v1670316561830!5m2!1sen!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\n            </h2></div>\n            <div id="contact">\n                <h2>Or contact us</h2>\n                <div>Email: <a href="https://github.com/Roibeirt">https://github.com/Roibeirt</a> <br> Phone: <a href="https://github.com/Roibeirt">https://github.com/Roibeirt</a> </div>\n            </div>\n            <div id="about-us">\n                <h2>About Us</h2>\n                <p>This is just a silly little project to practice webkit. <br> While Myoko is a beautiful area to go hiking, don't expect a coffee when you get there.</p>\n            </div>\n        </div>\n        `

}



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about_page */ "./src/about_page");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_page */ "./src/menu_page");
/* harmony import */ var _top_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top_page */ "./src/top_page.js");




const renderHeader = () => {
// content container
const contentContainer = document.getElementById("content");

// header
const header = document.createElement("div");
header.id = "header";

const title = document.createElement("h1");
title.textContent = "Forest Coffee";
header.appendChild(title);

const menuBar = document.createElement("div");
menuBar.id = "menu-bar";
const topButton = document.createElement("button");
topButton.textContent = "Top";
const menuButton = document.createElement("button");
menuButton.textContent = "Menu";
const aboutButton = document.createElement("button");
aboutButton.textContent = "About";
menuBar.appendChild(topButton);
menuBar.appendChild(menuButton);
menuBar.appendChild(aboutButton);

topButton.addEventListener("click", () => (0,_top_page__WEBPACK_IMPORTED_MODULE_2__.renderTopPage)());
menuButton.addEventListener("click", () => (0,_menu_page__WEBPACK_IMPORTED_MODULE_1__.renderMenuPage)());
aboutButton.addEventListener("click", () => (0,_about_page__WEBPACK_IMPORTED_MODULE_0__.renderAboutPage)());

header.appendChild(menuBar);

contentContainer.appendChild(header);

(0,_top_page__WEBPACK_IMPORTED_MODULE_2__.firstRender)();

}



/***/ }),

/***/ "./src/menu_page":
/*!***********************!*\
  !*** ./src/menu_page ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMenuPage": () => (/* binding */ renderMenuPage)
/* harmony export */ });
const renderMenuPage = () => {
    const main = document.getElementById("main");
    while (main.firstChild){
        main.removeChild(main.firstChild);
    }

    //menu page - just a learning project, so gonna get real lazy here...
    main.innerHTML = '\n            <div id="menu">\n            <div class="menu-item">\n                <img id="long-black" src="../src/longblack.png" alt="Picture of a cup of coffee">\n                <div class="description">Long Black 400円</div>\n            </div>\n            <div class="menu-item">\n                <img id="latte" src="../src/latte.png" alt="Picture of a foamy latte">\n                <div class="description">Oats Milk Latte 500円 </div>\n            </div>\n            </div>\n        ';
    const longBlackPicture = document.getElementbyId("long-black");
    longBlackPicture.src = "longblack.png";
    const latte = document.getElementbyId("latte");
    latte.src = "latte.png";
    

}



/***/ }),

/***/ "./src/top_page.js":
/*!*************************!*\
  !*** ./src/top_page.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstRender": () => (/* binding */ firstRender),
/* harmony export */   "renderTopPage": () => (/* binding */ renderTopPage)
/* harmony export */ });
const firstRender = () => {
    const contentContainer = document.getElementById("content");
    // main container
    const main = document.createElement("div");
    main.id = "main";

    contentContainer.appendChild(main);
    renderTopPage();

}
const renderTopPage = () => {

    const main = document.getElementById("main");

    while (main.firstChild){
        main.removeChild(main.firstChild);
    }

    // top page
    const blurb = document.createElement("div");
    blurb.id = "blurb";
    const blurbHeader = document.createElement("h2");
    blurbHeader.textContent = "Coffee From the Trees"
    blurb.appendChild(blurbHeader);
    const blurbParagraph = document.createElement("p");
    blurbParagraph.innerHTML = "Freshly roasted, freshly brewed. <br> Visit us in person or order online!";
    blurb.appendChild(blurbParagraph);

    main.appendChild(blurb);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _top_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top_page */ "./src/top_page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu_page */ "./src/menu_page");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about_page */ "./src/about_page");





(0,_header__WEBPACK_IMPORTED_MODULE_0__.renderHeader)();





// // content container
// const contentContainer = document.getElementById("content");

// // header
// const header = document.createElement("div");
// header.id = "header";

// const title = document.createElement("h1");
// title.textContent = "Forest Coffee";
// header.appendChild(title);

// const menuBar = document.createElement("div");
// menuBar.id = "menu-bar";
// const topButton = document.createElement("button");
// topButton.textContent = "Top";
// const menuButton = document.createElement("button");
// menuButton.textContent = "Menu";
// const aboutButton = document.createElement("button");
// aboutButton.textContent = "about";
// menuBar.appendChild(topButton);
// menuBar.appendChild(menuButton);
// menuBar.appendChild(aboutButton);

// // main container
// const main = document.createElement("div");
// main.id = "main";

// // top page
// const blurb = document.createElement("div");
// blurb.id = "blurb";
// const blurbHeader = document.createElement("h2");
// blurbHeader.textContent = "Coffee From the Trees"
// blurb.appendChild("blurbHeader");
// const blurbParagraph = document.createElement("p");
// blurbParagraph.innerHTML = "Freshly roasted, freshly brewed. <br> Visit us in person or order online!";
// blurb.appendChild(blurbParagraph);

// //menu page - just a learning project, so gonna get real lazy here...
// main.innerHTML = '\n            <div id="menu">\n            <div class="menu-item">\n                <img id="long-black" src="../src/longblack.png" alt="Picture of a cup of coffee">\n                <div class="description">Long Black 400円</div>\n            </div>\n            <div class="menu-item">\n                <img id="latte" src="../src/latte.png" alt="Picture of a foamy latte">\n                <div class="description">Oats Milk Latte 500円 </div>\n            </div>\n            </div>\n        ';
// const longBlackPicture = document.getElementById("long-black");
// longBlackPicture.src = "longblack.png";
// const latte = document.getElementbyID("latte");
// latte.src = "latte.png";

// //about page - gonna be lazy too
// main.innerHTML = `\n            <div id="about">\n            <div id="location">\n                <h2>\n                    Trek out to our physical location:\n                </h2><h2>\n                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d381.48322381446303!2d138.13336505695443!3d36.93272444760099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sjp!4v1670316561830!5m2!1sen!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>\n            </h2></div>\n            <div id="contact">\n                <h2>Or contact us</h2>\n                <div>Email: <a href="https://github.com/Roibeirt">https://github.com/Roibeirt</a> <br> Phone: <a href="https://github.com/Roibeirt">https://github.com/Roibeirt</a> </div>\n            </div>\n            <div id="about-us">\n                <h2>About Us</h2>\n                <p>This is just a silly little project to practice webkit. <br> While Myoko is a beautiful area to go hiking, don't expect a coffee when you get there.</p>\n            </div>\n        </div>\n        `



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaWRBQWlkOztBQUVqZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1IrQztBQUNGO0FBQ1c7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLHdEQUFhO0FBQ3ZELDJDQUEyQywwREFBYztBQUN6RCw0Q0FBNEMsNERBQWU7O0FBRTNEOztBQUVBOztBQUVBLHNEQUFXOztBQUVYOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztVQzdCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ1E7QUFDSDtBQUNFOztBQUUvQyxxREFBWTs7Ozs7O0FBTVo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnZEFBZ2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXRfcGFnZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51X3BhZ2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RvcF9wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZW5kZXJBYm91dFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICB3aGlsZSAobWFpbi5maXJzdENoaWxkKXtcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIG1haW4uaW5uZXJIVE1MID0gYFxcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhYm91dFwiPlxcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2NhdGlvblwiPlxcbiAgICAgICAgICAgICAgICA8aDI+XFxuICAgICAgICAgICAgICAgICAgICBUcmVrIG91dCB0byBvdXIgcGh5c2ljYWwgbG9jYXRpb246XFxuICAgICAgICAgICAgICAgIDwvaDI+PGgyPlxcbiAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTEyITFtMyExZDM4MS40ODMyMjM4MTQ0NjMwMyEyZDEzOC4xMzMzNjUwNTY5NTQ0MyEzZDM2LjkzMjcyNDQ0NzYwMDk5ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSE1ZTEhM20yITFzZW4hMnNqcCE0djE2NzAzMTY1NjE4MzAhNW0yITFzZW4hMnNqcFwiIHdpZHRoPVwiNjAwXCIgaGVpZ2h0PVwiNDUwXCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT5cXG4gICAgICAgICAgICA8L2gyPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWN0XCI+XFxuICAgICAgICAgICAgICAgIDxoMj5PciBjb250YWN0IHVzPC9oMj5cXG4gICAgICAgICAgICAgICAgPGRpdj5FbWFpbDogPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Sb2liZWlydFwiPmh0dHBzOi8vZ2l0aHViLmNvbS9Sb2liZWlydDwvYT4gPGJyPiBQaG9uZTogPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Sb2liZWlydFwiPmh0dHBzOi8vZ2l0aHViLmNvbS9Sb2liZWlydDwvYT4gPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBpZD1cImFib3V0LXVzXCI+XFxuICAgICAgICAgICAgICAgIDxoMj5BYm91dCBVczwvaDI+XFxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMganVzdCBhIHNpbGx5IGxpdHRsZSBwcm9qZWN0IHRvIHByYWN0aWNlIHdlYmtpdC4gPGJyPiBXaGlsZSBNeW9rbyBpcyBhIGJlYXV0aWZ1bCBhcmVhIHRvIGdvIGhpa2luZywgZG9uJ3QgZXhwZWN0IGEgY29mZmVlIHdoZW4geW91IGdldCB0aGVyZS48L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIGBcblxufVxuXG5leHBvcnQge3JlbmRlckFib3V0UGFnZX07IiwiaW1wb3J0IHsgcmVuZGVyQWJvdXRQYWdlIH0gZnJvbSBcIi4vYWJvdXRfcGFnZVwiO1xuaW1wb3J0IHsgcmVuZGVyTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51X3BhZ2VcIjtcbmltcG9ydCB7IGZpcnN0UmVuZGVyLCByZW5kZXJUb3BQYWdlIH0gZnJvbSBcIi4vdG9wX3BhZ2VcIjtcblxuY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuLy8gY29udGVudCBjb250YWluZXJcbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbi8vIGhlYWRlclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xudGl0bGUudGV4dENvbnRlbnQgPSBcIkZvcmVzdCBDb2ZmZWVcIjtcbmhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbmNvbnN0IG1lbnVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubWVudUJhci5pZCA9IFwibWVudS1iYXJcIjtcbmNvbnN0IHRvcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG50b3BCdXR0b24udGV4dENvbnRlbnQgPSBcIlRvcFwiO1xuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5tZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5jb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5hYm91dEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbm1lbnVCYXIuYXBwZW5kQ2hpbGQodG9wQnV0dG9uKTtcbm1lbnVCYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5tZW51QmFyLmFwcGVuZENoaWxkKGFib3V0QnV0dG9uKTtcblxudG9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiByZW5kZXJUb3BQYWdlKCkpO1xubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmVuZGVyTWVudVBhZ2UoKSk7XG5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcmVuZGVyQWJvdXRQYWdlKCkpO1xuXG5oZWFkZXIuYXBwZW5kQ2hpbGQobWVudUJhcik7XG5cbmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuZmlyc3RSZW5kZXIoKTtcblxufVxuXG5leHBvcnR7cmVuZGVySGVhZGVyfTsiLCJjb25zdCByZW5kZXJNZW51UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpe1xuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy9tZW51IHBhZ2UgLSBqdXN0IGEgbGVhcm5pbmcgcHJvamVjdCwgc28gZ29ubmEgZ2V0IHJlYWwgbGF6eSBoZXJlLi4uXG4gICAgbWFpbi5pbm5lckhUTUwgPSAnXFxuICAgICAgICAgICAgPGRpdiBpZD1cIm1lbnVcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCI+XFxuICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJsb25nLWJsYWNrXCIgc3JjPVwiLi4vc3JjL2xvbmdibGFjay5wbmdcIiBhbHQ9XCJQaWN0dXJlIG9mIGEgY3VwIG9mIGNvZmZlZVwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj5Mb25nIEJsYWNrIDQwMOWGhjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cXG4gICAgICAgICAgICAgICAgPGltZyBpZD1cImxhdHRlXCIgc3JjPVwiLi4vc3JjL2xhdHRlLnBuZ1wiIGFsdD1cIlBpY3R1cmUgb2YgYSBmb2FteSBsYXR0ZVwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj5PYXRzIE1pbGsgTGF0dGUgNTAw5YaGIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgJztcbiAgICBjb25zdCBsb25nQmxhY2tQaWN0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudGJ5SWQoXCJsb25nLWJsYWNrXCIpO1xuICAgIGxvbmdCbGFja1BpY3R1cmUuc3JjID0gXCJsb25nYmxhY2sucG5nXCI7XG4gICAgY29uc3QgbGF0dGUgPSBkb2N1bWVudC5nZXRFbGVtZW50YnlJZChcImxhdHRlXCIpO1xuICAgIGxhdHRlLnNyYyA9IFwibGF0dGUucG5nXCI7XG4gICAgXG5cbn1cblxuZXhwb3J0IHtyZW5kZXJNZW51UGFnZX07IiwiY29uc3QgZmlyc3RSZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICAvLyBtYWluIGNvbnRhaW5lclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uaWQgPSBcIm1haW5cIjtcblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgcmVuZGVyVG9wUGFnZSgpO1xuXG59XG5jb25zdCByZW5kZXJUb3BQYWdlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpe1xuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy8gdG9wIHBhZ2VcbiAgICBjb25zdCBibHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmx1cmIuaWQgPSBcImJsdXJiXCI7XG4gICAgY29uc3QgYmx1cmJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgYmx1cmJIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvZmZlZSBGcm9tIHRoZSBUcmVlc1wiXG4gICAgYmx1cmIuYXBwZW5kQ2hpbGQoYmx1cmJIZWFkZXIpO1xuICAgIGNvbnN0IGJsdXJiUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmx1cmJQYXJhZ3JhcGguaW5uZXJIVE1MID0gXCJGcmVzaGx5IHJvYXN0ZWQsIGZyZXNobHkgYnJld2VkLiA8YnI+IFZpc2l0IHVzIGluIHBlcnNvbiBvciBvcmRlciBvbmxpbmUhXCI7XG4gICAgYmx1cmIuYXBwZW5kQ2hpbGQoYmx1cmJQYXJhZ3JhcGgpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChibHVyYik7XG59XG5cbmV4cG9ydCB7Zmlyc3RSZW5kZXIsIHJlbmRlclRvcFBhZ2V9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgeyBmaXJzdHJlbmRlclRvcFBhZ2UgfSBmcm9tIFwiLi90b3BfcGFnZVwiO1xuaW1wb3J0IHsgcmVuZGVyTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51X3BhZ2VcIjtcbmltcG9ydCB7IHJlbmRlckFib3V0UGFnZSB9IGZyb20gXCIuL2Fib3V0X3BhZ2VcIjtcblxucmVuZGVySGVhZGVyKCk7XG5cblxuXG5cblxuLy8gLy8gY29udGVudCBjb250YWluZXJcbi8vIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbi8vIC8vIGhlYWRlclxuLy8gY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG5cbi8vIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuLy8gdGl0bGUudGV4dENvbnRlbnQgPSBcIkZvcmVzdCBDb2ZmZWVcIjtcbi8vIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbi8vIGNvbnN0IG1lbnVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gbWVudUJhci5pZCA9IFwibWVudS1iYXJcIjtcbi8vIGNvbnN0IHRvcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyB0b3BCdXR0b24udGV4dENvbnRlbnQgPSBcIlRvcFwiO1xuLy8gY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4vLyBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyBhYm91dEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiYWJvdXRcIjtcbi8vIG1lbnVCYXIuYXBwZW5kQ2hpbGQodG9wQnV0dG9uKTtcbi8vIG1lbnVCYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4vLyBtZW51QmFyLmFwcGVuZENoaWxkKGFib3V0QnV0dG9uKTtcblxuLy8gLy8gbWFpbiBjb250YWluZXJcbi8vIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gbWFpbi5pZCA9IFwibWFpblwiO1xuXG4vLyAvLyB0b3AgcGFnZVxuLy8gY29uc3QgYmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gYmx1cmIuaWQgPSBcImJsdXJiXCI7XG4vLyBjb25zdCBibHVyYkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbi8vIGJsdXJiSGVhZGVyLnRleHRDb250ZW50ID0gXCJDb2ZmZWUgRnJvbSB0aGUgVHJlZXNcIlxuLy8gYmx1cmIuYXBwZW5kQ2hpbGQoXCJibHVyYkhlYWRlclwiKTtcbi8vIGNvbnN0IGJsdXJiUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4vLyBibHVyYlBhcmFncmFwaC5pbm5lckhUTUwgPSBcIkZyZXNobHkgcm9hc3RlZCwgZnJlc2hseSBicmV3ZWQuIDxicj4gVmlzaXQgdXMgaW4gcGVyc29uIG9yIG9yZGVyIG9ubGluZSFcIjtcbi8vIGJsdXJiLmFwcGVuZENoaWxkKGJsdXJiUGFyYWdyYXBoKTtcblxuLy8gLy9tZW51IHBhZ2UgLSBqdXN0IGEgbGVhcm5pbmcgcHJvamVjdCwgc28gZ29ubmEgZ2V0IHJlYWwgbGF6eSBoZXJlLi4uXG4vLyBtYWluLmlubmVySFRNTCA9ICdcXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWVudVwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIj5cXG4gICAgICAgICAgICAgICAgPGltZyBpZD1cImxvbmctYmxhY2tcIiBzcmM9XCIuLi9zcmMvbG9uZ2JsYWNrLnBuZ1wiIGFsdD1cIlBpY3R1cmUgb2YgYSBjdXAgb2YgY29mZmVlXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPkxvbmcgQmxhY2sgNDAw5YaGPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIGlkPVwibGF0dGVcIiBzcmM9XCIuLi9zcmMvbGF0dGUucG5nXCIgYWx0PVwiUGljdHVyZSBvZiBhIGZvYW15IGxhdHRlXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPk9hdHMgTWlsayBMYXR0ZSA1MDDlhoYgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAnO1xuLy8gY29uc3QgbG9uZ0JsYWNrUGljdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9uZy1ibGFja1wiKTtcbi8vIGxvbmdCbGFja1BpY3R1cmUuc3JjID0gXCJsb25nYmxhY2sucG5nXCI7XG4vLyBjb25zdCBsYXR0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRieUlEKFwibGF0dGVcIik7XG4vLyBsYXR0ZS5zcmMgPSBcImxhdHRlLnBuZ1wiO1xuXG4vLyAvL2Fib3V0IHBhZ2UgLSBnb25uYSBiZSBsYXp5IHRvb1xuLy8gbWFpbi5pbm5lckhUTUwgPSBgXFxuICAgICAgICAgICAgPGRpdiBpZD1cImFib3V0XCI+XFxuICAgICAgICAgICAgPGRpdiBpZD1cImxvY2F0aW9uXCI+XFxuICAgICAgICAgICAgICAgIDxoMj5cXG4gICAgICAgICAgICAgICAgICAgIFRyZWsgb3V0IHRvIG91ciBwaHlzaWNhbCBsb2NhdGlvbjpcXG4gICAgICAgICAgICAgICAgPC9oMj48aDI+XFxuICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE0ITFtMTIhMW0zITFkMzgxLjQ4MzIyMzgxNDQ2MzAzITJkMTM4LjEzMzM2NTA1Njk1NDQzITNkMzYuOTMyNzI0NDQ3NjAwOTkhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITVlMSEzbTIhMXNlbiEyc2pwITR2MTY3MDMxNjU2MTgzMCE1bTIhMXNlbiEyc2pwXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPlxcbiAgICAgICAgICAgIDwvaDI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRhY3RcIj5cXG4gICAgICAgICAgICAgICAgPGgyPk9yIGNvbnRhY3QgdXM8L2gyPlxcbiAgICAgICAgICAgICAgICA8ZGl2PkVtYWlsOiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1JvaWJlaXJ0XCI+aHR0cHM6Ly9naXRodWIuY29tL1JvaWJlaXJ0PC9hPiA8YnI+IFBob25lOiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1JvaWJlaXJ0XCI+aHR0cHM6Ly9naXRodWIuY29tL1JvaWJlaXJ0PC9hPiA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWJvdXQtdXNcIj5cXG4gICAgICAgICAgICAgICAgPGgyPkFib3V0IFVzPC9oMj5cXG4gICAgICAgICAgICAgICAgPHA+VGhpcyBpcyBqdXN0IGEgc2lsbHkgbGl0dGxlIHByb2plY3QgdG8gcHJhY3RpY2Ugd2Via2l0LiA8YnI+IFdoaWxlIE15b2tvIGlzIGEgYmVhdXRpZnVsIGFyZWEgdG8gZ28gaGlraW5nLCBkb24ndCBleHBlY3QgYSBjb2ZmZWUgd2hlbiB5b3UgZ2V0IHRoZXJlLjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgYFxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==