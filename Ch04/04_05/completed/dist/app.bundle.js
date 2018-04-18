webpackJsonp([0],{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _reactDom = __webpack_require__(10);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Display = function (_Component) {
	_inherits(Display, _Component);

	function Display() {
		_classCallCheck(this, Display);

		return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).apply(this, arguments));
	}

	_createClass(Display, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				'Important Announcement'
			);
		}
	}]);

	return Display;
}(_react.Component);

(0, _reactDom.render)(React.createElement(Display, null), document.getElementById('react-container'));

/***/ })

},[32]);