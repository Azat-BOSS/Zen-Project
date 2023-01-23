/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/contact/contact.js":
/*!***************************************!*\
  !*** ./src/blocks/contact/contact.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(config, formElement) {
    var _this = this;
    _classCallCheck(this, FormValidator);
    _defineProperty(this, "_checkInputValidity", function (input) {
      if (input.validity.patternMismatch) {
        input.setCustomValidity(input.dataset.errorMessage);
      } else {
        input.setCustomValidity("");
      }
      if (!input.validity.valid) {
        _this._showError(input, input.validationMessage);
      } else {
        _this._hideError(input);
      }
    });
    _defineProperty(this, "_hasInvalidInput", function () {
      return _this._inputList.some(function (input) {
        return !input.validity.valid;
      });
    });
    _defineProperty(this, "_toggleButtonState", function () {
      if (_this._hasInvalidInput()) {
        _this.disableButton();
      } else {
        _this._buttonElement.classList.remove(_this._inactiveButtonClass);
        _this._buttonElement.removeAttribute("disabled", "disabled");
      }
    });
    _defineProperty(this, "_setEventListener", function () {
      _this._inputList.forEach(function (input) {
        input.addEventListener("input", function () {
          _this._checkInputValidity(input);
          _this._toggleButtonState();
        });
      });
    });
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    this._inactiveButtonClass = this._config.inactiveButtonClass;
    this._inputErrorClass = this._config.inputErrorClass;
    this._errorClass = this._config.errorClass;
  }
  _createClass(FormValidator, [{
    key: "_showError",
    value: function _showError(input, errorMessage) {
      var errorElement = this._formElement.querySelector(".".concat(input.id, "-error"));
      input.classList.add(this._inputErrorClass);
      errorElement.classList.add(this._errorClass);
      errorElement.textContent = errorMessage;
    }
  }, {
    key: "_hideError",
    value: function _hideError(input) {
      var errorElement = this._formElement.querySelector(".".concat(input.id, "-error"));
      input.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = "";
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      this._setEventListener();
    }
  }, {
    key: "disableButton",
    value: function disableButton() {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", "disabled");
    }
  }, {
    key: "resetValidation",
    value: function resetValidation() {
      var _this2 = this;
      this._toggleButtonState();
      this._inputList.forEach(function (inputElement) {
        _this2._hideError(inputElement);
      });
    }
  }]);
  return FormValidator;
}();


/***/ }),

/***/ "./src/blocks/modal/modal.js":
/*!***********************************!*\
  !*** ./src/blocks/modal/modal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Modal = /*#__PURE__*/_createClass(function Modal(modal, effect, overlay) {
  var _this = this;
  _classCallCheck(this, Modal);
  _defineProperty(this, "closeByOverlay", function () {
    _this._overlay.addEventListener('mousedown', _this.removeStyle.bind(_this));
  });
  _defineProperty(this, "addStyle", function () {
    _this._body.classList.add("body_active");
    _this._modal.classList.add(_this._effect);
    document.addEventListener("keydown", _this._closeByEsc);
  });
  _defineProperty(this, "removeStyle", function () {
    _this._body.classList.remove("body_active");
    _this._modal.classList.remove(_this._effect);
    document.removeEventListener("keydown", _this._closeByEsc);
  });
  _defineProperty(this, "_closeByEsc", function (evt) {
    if (evt.key === "Escape") {
      _this.removeStyle();
    }
  });
  this._body = document.body;
  this._modal = modal;
  this._effect = effect;
  this._overlay = overlay;
  this._closeByEsc = this._closeByEsc.bind(this);
});


/***/ }),

/***/ "./src/js/import/animation.js":
/*!************************************!*\
  !*** ./src/js/import/animation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onEntry),
/* harmony export */   "elements": () => (/* binding */ elements),
/* harmony export */   "observer": () => (/* binding */ observer),
/* harmony export */   "options": () => (/* binding */ options)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function onEntry(entry) {
  entry.forEach(function (change) {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
var options = {
  threshold: [0.5]
};
var observer = new IntersectionObserver(onEntry, options);
var elements = document.querySelectorAll('.element-animation');
var _iterator = _createForOfIteratorHelper(elements),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var elm = _step.value;
    observer.observe(elm);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}


/***/ }),

/***/ "./src/js/import/commonSlider.js":
/*!***************************************!*\
  !*** ./src/js/import/commonSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var Slider = /*#__PURE__*/_createClass(function Slider(elem) {
  var _this = this;
  _classCallCheck(this, Slider);
  _defineProperty(this, "addSlider", function (x) {
    if (x.matches) {
      var emblaNode = document.querySelector(_this._elem);
      var option = {
        loop: false
      };
      var embla = EmblaCarousel(emblaNode, option);
    }
  });
  this._elem = elem;
});


/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./src/js/import/variables.js");
/* harmony import */ var _blocks_modal_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/modal/modal.js */ "./src/blocks/modal/modal.js");
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation.js */ "./src/js/import/animation.js");
/* harmony import */ var _commonSlider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commonSlider.js */ "./src/js/import/commonSlider.js");
/* harmony import */ var _blocks_contact_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/contact/contact.js */ "./src/blocks/contact/contact.js");
/* harmony import */ var _mask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mask.js */ "./src/js/import/mask.js");
/* harmony import */ var _scrollClick_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scrollClick.js */ "./src/js/import/scrollClick.js");








var project = new _commonSlider_js__WEBPACK_IMPORTED_MODULE_3__["default"](".project-slider");
var zone = new _commonSlider_js__WEBPACK_IMPORTED_MODULE_3__["default"](".zone-slider");
project.addSlider(_variables_js__WEBPACK_IMPORTED_MODULE_0__.sliderMedia);
zone.addSlider(_variables_js__WEBPACK_IMPORTED_MODULE_0__.zoneMedia);
_variables_js__WEBPACK_IMPORTED_MODULE_0__.sliderMedia.addEventListener("change", project.addSlider);
_variables_js__WEBPACK_IMPORTED_MODULE_0__.zoneMedia.addEventListener("change", zone.addSlider);
var modal = new _blocks_modal_modal_js__WEBPACK_IMPORTED_MODULE_1__["default"](_variables_js__WEBPACK_IMPORTED_MODULE_0__.brgModal, "brg-modal_active");
_variables_js__WEBPACK_IMPORTED_MODULE_0__.brgButton.addEventListener("click", modal.addStyle);
_variables_js__WEBPACK_IMPORTED_MODULE_0__.brgModalClose.addEventListener("click", modal.removeStyle);
var modalPopupPrivacy = new _blocks_modal_modal_js__WEBPACK_IMPORTED_MODULE_1__["default"](_variables_js__WEBPACK_IMPORTED_MODULE_0__.modalPrivacy, "modal-privacy_active");
_variables_js__WEBPACK_IMPORTED_MODULE_0__.formContactLink.addEventListener("click", modalPopupPrivacy.addStyle);
_variables_js__WEBPACK_IMPORTED_MODULE_0__.modalPrivacyClose.addEventListener("click", modalPopupPrivacy.removeStyle);
var modalPopupUrl = new _blocks_modal_modal_js__WEBPACK_IMPORTED_MODULE_1__["default"](_variables_js__WEBPACK_IMPORTED_MODULE_0__.modalUrl, "modal-url_active");
_variables_js__WEBPACK_IMPORTED_MODULE_0__.contactButton.addEventListener("click", modalPopupUrl.addStyle);
_variables_js__WEBPACK_IMPORTED_MODULE_0__.contactButton.addEventListener("click", function () {
  _variables_js__WEBPACK_IMPORTED_MODULE_0__.contactInputs.forEach(function (item) {
    item.value = "";
  });
});
_variables_js__WEBPACK_IMPORTED_MODULE_0__.modalUrlClose.addEventListener("click", modalPopupUrl.removeStyle);
var formContactValidation = new _blocks_contact_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"](_variables_js__WEBPACK_IMPORTED_MODULE_0__.config, _variables_js__WEBPACK_IMPORTED_MODULE_0__.contactForm);
formContactValidation.resetValidation();
_variables_js__WEBPACK_IMPORTED_MODULE_0__.formContactButton.addEventListener("submit", formContactValidation.enableValidation());
var projectSliderLink = document.querySelectorAll(".project-slider__link");
var headerScroll = new _scrollClick_js__WEBPACK_IMPORTED_MODULE_6__["default"](".header__button", ".contact");
var stagesScroll = new _scrollClick_js__WEBPACK_IMPORTED_MODULE_6__["default"](".stages__button", ".contact");
var projectScroll = new _scrollClick_js__WEBPACK_IMPORTED_MODULE_6__["default"](".project-slider__link", ".contact", ".project-slider__link");
var headerContact = new _scrollClick_js__WEBPACK_IMPORTED_MODULE_6__["default"](".header__link_contact", "footer");
var headerOrder = new _scrollClick_js__WEBPACK_IMPORTED_MODULE_6__["default"](".header__link_order", ".contact");

/***/ }),

/***/ "./src/js/import/mask.js":
/*!*******************************!*\
  !*** ./src/js/import/mask.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mask": () => (/* binding */ mask)
/* harmony export */ });
var contactInputPhone = document.getElementById("input-phone");
var maskOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: true
};
var mask = IMask(contactInputPhone, maskOptions);

/***/ }),

/***/ "./src/js/import/scrollClick.js":
/*!**************************************!*\
  !*** ./src/js/import/scrollClick.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scroll)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Scroll = /*#__PURE__*/function () {
  function Scroll(button, element, buttons) {
    _classCallCheck(this, Scroll);
    this._button = button;
    this._element = element;
    this._buttons = buttons;
    this._scrollToBlockBtns();
    this._scrollToBlock();
  }
  _createClass(Scroll, [{
    key: "_scrollToBlock",
    value: function _scrollToBlock() {
      var btn = document.querySelector(this._button);
      var elm = document.querySelector(this._element);
      btn.addEventListener("click", function () {
        elm.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      });
    }
  }, {
    key: "_scrollToBlockBtns",
    value: function _scrollToBlockBtns() {
      var btns = document.querySelectorAll(this._buttons);
      var elm = document.querySelector(this._element);
      btns.forEach(function (item) {
        item.addEventListener("click", function () {
          elm.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          });
        });
      });
    }
  }]);
  return Scroll;
}();


/***/ }),

/***/ "./src/js/import/variables.js":
/*!************************************!*\
  !*** ./src/js/import/variables.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "brgButton": () => (/* binding */ brgButton),
/* harmony export */   "brgModal": () => (/* binding */ brgModal),
/* harmony export */   "brgModalClose": () => (/* binding */ brgModalClose),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "contactButton": () => (/* binding */ contactButton),
/* harmony export */   "contactForm": () => (/* binding */ contactForm),
/* harmony export */   "contactInputs": () => (/* binding */ contactInputs),
/* harmony export */   "formContactButton": () => (/* binding */ formContactButton),
/* harmony export */   "formContactLink": () => (/* binding */ formContactLink),
/* harmony export */   "modalPrivacy": () => (/* binding */ modalPrivacy),
/* harmony export */   "modalPrivacyClose": () => (/* binding */ modalPrivacyClose),
/* harmony export */   "modalUrl": () => (/* binding */ modalUrl),
/* harmony export */   "modalUrlClose": () => (/* binding */ modalUrlClose),
/* harmony export */   "sliderMedia": () => (/* binding */ sliderMedia),
/* harmony export */   "zoneMedia": () => (/* binding */ zoneMedia)
/* harmony export */ });
var brgButton = document.querySelector(".header__burger");
var brgModal = document.querySelector(".brg-modal");
var brgModalClose = brgModal.querySelector(".brg-modal__close-icon");
var sliderMedia = window.matchMedia("(max-width: 1024px)");
var zoneMedia = window.matchMedia("(max-width: 1370px)");
var contactForm = document.querySelector(".contact__form");
var formContactButton = contactForm.querySelector(".contact__button");
var formContactLink = contactForm.querySelector(".contact__link");
var modalPrivacy = document.querySelector(".modal-privacy");
var modalPrivacyClose = modalPrivacy.querySelector(".modal-privacy__close-icon");
var modalUrl = document.querySelector(".modal-url");
var modalUrlClose = modalUrl.querySelector(".modal-url__close-icon");
var contactButton = document.querySelector(".contact__button");
var contactInputs = document.querySelectorAll(".contact__input");
var config = {
  inputSelector: ".contact__input",
  submitButtonSelector: ".contact__button",
  inactiveButtonClass: "contact__button_inactive",
  inputErrorClass: "contuct__input_type_error",
  errorClass: "contact__block-input-error"
};


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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map