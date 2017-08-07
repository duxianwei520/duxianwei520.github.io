webpackJsonp([3],{

/***/ 843:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\react-du\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\react-du\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(31);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(28);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(6);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(5);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _dec, _class; /*
	                   * @Author: dupi
	                   * @Date: 2017-06-29 15:34:19
	                   * @Last Modified by: dupi
	                   * @Last Modified time: 2017-06-29 15:39:44
	                   */
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(50);
	
	var _sub = __webpack_require__(844);
	
	var _sub2 = _interopRequireDefault(_sub);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var popCheck = (_dec = (0, _reactRedux.connect)(function (state, props) {
	  return {
	    config: state.config
	  };
	}), _dec(_class = function (_Component) {
	  (0, _inherits3.default)(popCheck, _Component);
	
	  function popCheck(props) {
	    (0, _classCallCheck3.default)(this, popCheck);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (popCheck.__proto__ || (0, _getPrototypeOf2.default)(popCheck)).call(this, props));
	
	    _this.state = {
	      show: true
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(popCheck, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log(this.props);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'page' },
	        '\u6D4B\u8BD5',
	        _react2.default.createElement(
	          'span',
	          null,
	          'weorwe'
	        ),
	        _react2.default.createElement('img', { src: '../../images/default.png' }),
	        _react2.default.createElement(_sub2.default, null)
	      );
	    }
	  }]);
	  return popCheck;
	}(_react.Component)) || _class);
	exports.default = popCheck;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\react-du\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 844:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\react-du\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\react-du\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _getPrototypeOf = __webpack_require__(31);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(28);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(6);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(5);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _dec, _class;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(50);
	
	var _third = __webpack_require__(845);
	
	var _third2 = _interopRequireDefault(_third);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sub = (_dec = (0, _reactRedux.connect)(function (state, props) {
	  return {
	    config: state.config
	  };
	}), _dec(_class = function (_Component) {
	  (0, _inherits3.default)(sub, _Component);
	
	  function sub(props) {
	    (0, _classCallCheck3.default)(this, sub);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (sub.__proto__ || (0, _getPrototypeOf2.default)(sub)).call(this, props));
	
	    _this.state = {};
	    return _this;
	  }
	
	  (0, _createClass3.default)(sub, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'page' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          '\u6211\u662F\u4E8C\u7EA7\u9875\u9762'
	        ),
	        _react2.default.createElement(_third2.default, null)
	      );
	    }
	  }]);
	  return sub;
	}(_react.Component)) || _class);
	exports.default = sub;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\react-du\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "sub.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 845:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("D:\\react-du\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("D:\\react-du\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _button = __webpack_require__(62);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _getPrototypeOf = __webpack_require__(31);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(3);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(28);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(6);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(5);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _dec, _class;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(21);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(50);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var popCheck = (_dec = (0, _reactRedux.connect)(function (state, props) {
	  return {
	    config: state.config
	  };
	}), _dec(_class = function (_Component) {
	  (0, _inherits3.default)(popCheck, _Component);
	
	  function popCheck(props) {
	    (0, _classCallCheck3.default)(this, popCheck);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (popCheck.__proto__ || (0, _getPrototypeOf2.default)(popCheck)).call(this, props));
	
	    _this.state = {};
	    return _this;
	  }
	
	  (0, _createClass3.default)(popCheck, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { 'class': 'page' },
	        _react2.default.createElement(
	          _button2.default,
	          { onClick: this.handleClick.bind(this) },
	          '\u70B9\u51FB\u6309\u94AE'
	        )
	      );
	    }
	  }]);
	  return popCheck;
	}(_react.Component)) || _class);
	exports.default = popCheck;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("D:\\react-du\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "third.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});
//# sourceMappingURL=test.js.map