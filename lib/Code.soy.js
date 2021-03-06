'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.Code = undefined;

var _metalComponent = require('metal-component');

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = require('metal-soy');

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from Code.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Code.
   * @public
   */

  goog.module('Code.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'code-tabs');
    ie_open('div', null, null, 'class', 'code-tabs-header');
    var tabList12 = opt_data.tabs;
    var tabListLen12 = tabList12.length;
    for (var tabIndex12 = 0; tabIndex12 < tabListLen12; tabIndex12++) {
      var tabData12 = tabList12[tabIndex12];
      var selected__soy4 = tabIndex12 == 0;
      ie_open('button', null, null, 'class', 'code-tab' + (selected__soy4 ? ' selected' : ''), 'data-index', tabIndex12, 'type', 'button');
      var dyn0 = tabData12;
      if (typeof dyn0 == 'function') dyn0();else if (dyn0 != null) itext(dyn0);
      ie_close('button');
    }
    ie_close('div');
    ie_open('div', null, null, 'class', 'content');
    var dyn1 = opt_data.content;
    if (typeof dyn1 == 'function') dyn1();else if (dyn1 != null) itext(dyn1);
    ie_close('div');
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'Code.render';
  }

  exports.render.params = ["content", "tabs"];
  exports.render.types = { "content": "any", "tabs": "any" };
  exports.templates = templates = exports;
  return exports;
});

var Code = function (_Component) {
  _inherits(Code, _Component);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
  }

  return Code;
}(_metalComponent2.default);

_metalSoy2.default.register(Code, templates);
exports.Code = Code;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */