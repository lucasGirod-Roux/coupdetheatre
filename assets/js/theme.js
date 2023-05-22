/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap index.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports) {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000;
  var TRANSITION_END = 'transitionend'; // Shout-out Angus Croll (https://goo.gl/pxwQGp)

  var toType = function toType(object) {
    if (object === null || object === undefined) {
      return "".concat(object);
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  /**
   * Public Util API
   */

  var getUID = function getUID(prefix) {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  var getSelector = function getSelector(element) {
    var selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
      var hrefAttribute = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273

      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
        return null;
      } // Just in case some CMS puts out a full URL with the anchor appended

      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
        hrefAttribute = "#".concat(hrefAttribute.split('#')[1]);
      }
      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
    }
    return selector;
  };
  var getSelectorFromElement = function getSelectorFromElement(element) {
    var selector = getSelector(element);
    if (selector) {
      return document.querySelector(selector) ? selector : null;
    }
    return null;
  };
  var getElementFromSelector = function getElementFromSelector(element) {
    var selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
  };
  var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    } // Get transition-duration of the element

    var _window$getComputedSt = window.getComputedStyle(element),
      transitionDuration = _window$getComputedSt.transitionDuration,
      transitionDelay = _window$getComputedSt.transitionDelay;
    var floatTransitionDuration = Number.parseFloat(transitionDuration);
    var floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first

    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = function triggerTransitionEnd(element) {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement = function isElement(object) {
    if (!object || _typeof(object) !== 'object') {
      return false;
    }
    if (typeof object.jquery !== 'undefined') {
      object = object[0];
    }
    return typeof object.nodeType !== 'undefined';
  };
  var getElement = function getElement(object) {
    // it's a jQuery object or a node element
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === 'string' && object.length > 0) {
      return document.querySelector(object);
    }
    return null;
  };
  var isVisible = function isVisible(element) {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    var elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'; // Handle `details` element as its content may falsie appear visible when it is closed

    var closedDetails = element.closest('details:not([open])');
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      var summary = element.closest('summary');
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = function isDisabled(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains('disabled')) {
      return true;
    }
    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }
    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };
  var findShadowRoot = function findShadowRoot(element) {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document

    if (typeof element.getRootNode === 'function') {
      var root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root

    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  var noop = function noop() {};
  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */

  var reflow = function reflow(element) {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };

  var getjQuery = function getjQuery() {
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = function onDOMContentLoaded(callback) {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', function () {
          for (var _i = 0, _DOMContentLoadedCall = DOMContentLoadedCallbacks; _i < _DOMContentLoadedCall.length; _i++) {
            var _callback = _DOMContentLoadedCall[_i];
            _callback();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = function isRTL() {
    return document.documentElement.dir === 'rtl';
  };
  var defineJQueryPlugin = function defineJQueryPlugin(plugin) {
    onDOMContentLoaded(function () {
      var $ = getjQuery();
      /* istanbul ignore if */

      if ($) {
        var name = plugin.NAME;
        var JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = function () {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = function execute(callback) {
    if (typeof callback === 'function') {
      callback();
    }
  };
  var executeAfterTransition = function executeAfterTransition(callback, transitionElement) {
    var waitForTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    var durationPadding = 5;
    var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    var called = false;
    var handler = function handler(_ref) {
      var target = _ref.target;
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(function () {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */

  var getNextActiveElement = function getNextActiveElement(list, activeElement, shouldGetNext, isCycleAllowed) {
    var listLength = list.length;
    var index = list.indexOf(activeElement); // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed

    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };
  exports.defineJQueryPlugin = defineJQueryPlugin;
  exports.execute = execute;
  exports.executeAfterTransition = executeAfterTransition;
  exports.findShadowRoot = findShadowRoot;
  exports.getElement = getElement;
  exports.getElementFromSelector = getElementFromSelector;
  exports.getNextActiveElement = getNextActiveElement;
  exports.getSelectorFromElement = getSelectorFromElement;
  exports.getTransitionDurationFromElement = getTransitionDurationFromElement;
  exports.getUID = getUID;
  exports.getjQuery = getjQuery;
  exports.isDisabled = isDisabled;
  exports.isElement = isElement;
  exports.isRTL = isRTL;
  exports.isVisible = isVisible;
  exports.noop = noop;
  exports.onDOMContentLoaded = onDOMContentLoaded;
  exports.reflow = reflow;
  exports.toType = toType;
  exports.triggerTransitionEnd = triggerTransitionEnd;
  Object.defineProperties(exports, _defineProperty({
    __esModule: {
      value: true
    }
  }, Symbol.toStringTag, {
    value: 'Module'
  }));
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap event-handler.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (index) {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {}; // Events storage

  var uidEvent = 1;
  var customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
  /**
   * Private methods
   */

  function makeEventUid(element, uid) {
    return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    var uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      var domElements = element.querySelectorAll(selector);
      for (var target = event.target; target && target !== this; target = target.parentNode) {
        var _iterator = _createForOfIteratorHelper(domElements),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var domElement = _step.value;
            if (domElement !== target) {
              continue;
            }
            hydrateObj(event, {
              delegateTarget: target
            });
            if (handler.oneOff) {
              EventHandler.off(element, event.type, selector, fn);
            }
            return fn.apply(target, [event]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    };
  }
  function findHandler(events, callable) {
    var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Object.values(events).find(function (event) {
      return event.callable === callable && event.delegationSelector === delegationSelector;
    });
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    var isDelegated = typeof handler === 'string'; // todo: tooltip passes `false` instead of selector, so we need to check

    var callable = isDelegated ? delegationFunction : handler || delegationFunction;
    var typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    var _normalizeParameters = normalizeParameters(originalTypeEvent, handler, delegationFunction),
      _normalizeParameters2 = _slicedToArray(_normalizeParameters, 3),
      isDelegated = _normalizeParameters2[0],
      callable = _normalizeParameters2[1],
      typeEvent = _normalizeParameters2[2]; // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does

    if (originalTypeEvent in customEvents) {
      var wrapFunction = function wrapFunction(fn) {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    var events = getElementEvents(element);
    var handlers = events[typeEvent] || (events[typeEvent] = {});
    var previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    var uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
    var fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    var fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    var storeElementEvent = events[typeEvent] || {};
    for (var _i2 = 0, _Object$keys = Object.keys(storeElementEvent); _i2 < _Object$keys.length; _i2++) {
      var handlerKey = _Object$keys[_i2];
      if (handlerKey.includes(namespace)) {
        var event = storeElementEvent[handlerKey];
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }
  var EventHandler = {
    on: function on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one: function one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off: function off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }
      var _normalizeParameters3 = normalizeParameters(originalTypeEvent, handler, delegationFunction),
        _normalizeParameters4 = _slicedToArray(_normalizeParameters3, 3),
        isDelegated = _normalizeParameters4[0],
        callable = _normalizeParameters4[1],
        typeEvent = _normalizeParameters4[2];
      var inNamespace = typeEvent !== originalTypeEvent;
      var events = getElementEvents(element);
      var storeElementEvent = events[typeEvent] || {};
      var isNamespace = originalTypeEvent.startsWith('.');
      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (var _i3 = 0, _Object$keys2 = Object.keys(events); _i3 < _Object$keys2.length; _i3++) {
          var elementEvent = _Object$keys2[_i3];
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (var _i4 = 0, _Object$keys3 = Object.keys(storeElementEvent); _i4 < _Object$keys3.length; _i4++) {
        var keyHandlers = _Object$keys3[_i4];
        var handlerKey = keyHandlers.replace(stripUidRegex, '');
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          var event = storeElementEvent[keyHandlers];
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger: function trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }
      var $ = index.getjQuery();
      var typeEvent = getTypeEvent(event);
      var inNamespace = event !== typeEvent;
      var jQueryEvent = null;
      var bubbles = true;
      var nativeDispatch = true;
      var defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      var evt = new Event(event, {
        bubbles: bubbles,
        cancelable: true
      });
      evt = hydrateObj(evt, args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta) {
    var _loop = function _loop() {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i5], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get: function get() {
            return value;
          }
        });
      }
    };
    for (var _i5 = 0, _Object$entries = Object.entries(meta || {}); _i5 < _Object$entries.length; _i5++) {
      _loop();
    }
    return obj;
  }
  return EventHandler;
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap base-component.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(10), __webpack_require__(0), __webpack_require__(1), __webpack_require__(5)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(10), __webpack_require__(0), __webpack_require__(1), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (Data, index, EventHandler, Config) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var Data__default = /*#__PURE__*/_interopDefaultLegacy(Data);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Config__default = /*#__PURE__*/_interopDefaultLegacy(Config);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var VERSION = '5.2.3';
  /**
   * Class definition
   */
  var BaseComponent = /*#__PURE__*/function (_Config__default$defa) {
    _inherits(BaseComponent, _Config__default$defa);
    var _super = _createSuper(BaseComponent);
    function BaseComponent(element, config) {
      var _this;
      _classCallCheck(this, BaseComponent);
      _this = _super.call(this);
      element = index.getElement(element);
      if (!element) {
        return _possibleConstructorReturn(_this);
      }
      _this._element = element;
      _this._config = _this._getConfig(config);
      Data__default.default.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this));
      return _this;
    } // Public
    _createClass(BaseComponent, [{
      key: "dispose",
      value: function dispose() {
        Data__default.default.remove(this._element, this.constructor.DATA_KEY);
        EventHandler__default.default.off(this._element, this.constructor.EVENT_KEY);
        var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var propertyName = _step.value;
            this[propertyName] = null;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(callback, element) {
        var isAnimated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        index.executeAfterTransition(callback, element, isAnimated);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = this._mergeConfigObj(config, this._element);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
      } // Static
    }], [{
      key: "getInstance",
      value: function getInstance(element) {
        return Data__default.default.get(index.getElement(element), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(element) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(element) || new this(element, _typeof(config) === 'object' ? config : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }, {
      key: "eventName",
      value: function eventName(name) {
        return "".concat(name).concat(this.EVENT_KEY);
      }
    }]);
    return BaseComponent;
  }(Config__default.default);
  return BaseComponent;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (index) {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */
  var SelectorEngine = {
    find: function find(selector) {
      var _ref;
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
    },
    findOne: function findOne(selector) {
      var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(element, selector);
    },
    children: function children(element, selector) {
      var _ref2;
      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(element.children)).filter(function (child) {
        return child.matches(selector);
      });
    },
    parents: function parents(element, selector) {
      var parents = [];
      var ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev: function prev(element, selector) {
      var previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next: function next(element, selector) {
      var next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren: function focusableChildren(element) {
      var focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(function (selector) {
        return "".concat(selector, ":not([tabindex^=\"-\"])");
      }).join(',');
      return this.find(focusables, element).filter(function (el) {
        return !index.isDisabled(el) && index.isVisible(el);
      });
    }
  };
  return SelectorEngine;
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap config.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(0), __webpack_require__(6)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (index, Manipulator) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Class definition
   */
  var Config = /*#__PURE__*/function () {
    function Config() {
      _classCallCheck(this, Config);
    }
    _createClass(Config, [{
      key: "_getConfig",
      value: function _getConfig(config) {
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(config) {
        return config;
      }
    }, {
      key: "_mergeConfigObj",
      value: function _mergeConfigObj(config, element) {
        var jsonConfig = index.isElement(element) ? Manipulator__default.default.getDataAttribute(element, 'config') : {}; // try to parse

        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), _typeof(jsonConfig) === 'object' ? jsonConfig : {}), index.isElement(element) ? Manipulator__default.default.getDataAttributes(element) : {}), _typeof(config) === 'object' ? config : {});
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(config) {
        var configTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;
        for (var _i = 0, _Object$keys = Object.keys(configTypes); _i < _Object$keys.length; _i++) {
          var property = _Object$keys[_i];
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = index.isElement(value) ? 'element' : index.toType(value);
          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\"."));
          }
        }
      }
    }], [{
      key: "Default",
      get:
      // Getters
      function get() {
        return {};
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return {};
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }]);
    return Config;
  }();
  return Config;
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap manipulator.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function () {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  function normalizeData(value) {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === '' || value === 'null') {
      return null;
    }
    if (typeof value !== 'string') {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, function (chr) {
      return "-".concat(chr.toLowerCase());
    });
  }
  var Manipulator = {
    setDataAttribute: function setDataAttribute(element, key, value) {
      element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
    },
    removeDataAttribute: function removeDataAttribute(element, key) {
      element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
    },
    getDataAttributes: function getDataAttributes(element) {
      if (!element) {
        return {};
      }
      var attributes = {};
      var bsKeys = Object.keys(element.dataset).filter(function (key) {
        return key.startsWith('bs') && !key.startsWith('bsConfig');
      });
      var _iterator = _createForOfIteratorHelper(bsKeys),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          var pureKey = key.replace(/^bs/, '');
          pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
          attributes[pureKey] = normalizeData(element.dataset[key]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return attributes;
    },
    getDataAttribute: function getDataAttribute(element, key) {
      return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
    }
  };
  return Manipulator;
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "top", function() { return /* reexport */ enums_top; });
__webpack_require__.d(__webpack_exports__, "bottom", function() { return /* reexport */ bottom; });
__webpack_require__.d(__webpack_exports__, "right", function() { return /* reexport */ right; });
__webpack_require__.d(__webpack_exports__, "left", function() { return /* reexport */ left; });
__webpack_require__.d(__webpack_exports__, "auto", function() { return /* reexport */ auto; });
__webpack_require__.d(__webpack_exports__, "basePlacements", function() { return /* reexport */ basePlacements; });
__webpack_require__.d(__webpack_exports__, "start", function() { return /* reexport */ start; });
__webpack_require__.d(__webpack_exports__, "end", function() { return /* reexport */ end; });
__webpack_require__.d(__webpack_exports__, "clippingParents", function() { return /* reexport */ enums_clippingParents; });
__webpack_require__.d(__webpack_exports__, "viewport", function() { return /* reexport */ viewport; });
__webpack_require__.d(__webpack_exports__, "popper", function() { return /* reexport */ enums_popper; });
__webpack_require__.d(__webpack_exports__, "reference", function() { return /* reexport */ enums_reference; });
__webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return /* reexport */ variationPlacements; });
__webpack_require__.d(__webpack_exports__, "placements", function() { return /* reexport */ enums_placements; });
__webpack_require__.d(__webpack_exports__, "beforeRead", function() { return /* reexport */ beforeRead; });
__webpack_require__.d(__webpack_exports__, "read", function() { return /* reexport */ read; });
__webpack_require__.d(__webpack_exports__, "afterRead", function() { return /* reexport */ afterRead; });
__webpack_require__.d(__webpack_exports__, "beforeMain", function() { return /* reexport */ beforeMain; });
__webpack_require__.d(__webpack_exports__, "main", function() { return /* reexport */ main; });
__webpack_require__.d(__webpack_exports__, "afterMain", function() { return /* reexport */ afterMain; });
__webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return /* reexport */ beforeWrite; });
__webpack_require__.d(__webpack_exports__, "write", function() { return /* reexport */ write; });
__webpack_require__.d(__webpack_exports__, "afterWrite", function() { return /* reexport */ afterWrite; });
__webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return /* reexport */ modifierPhases; });
__webpack_require__.d(__webpack_exports__, "applyStyles", function() { return /* reexport */ modifiers_applyStyles; });
__webpack_require__.d(__webpack_exports__, "arrow", function() { return /* reexport */ modifiers_arrow; });
__webpack_require__.d(__webpack_exports__, "computeStyles", function() { return /* reexport */ modifiers_computeStyles; });
__webpack_require__.d(__webpack_exports__, "eventListeners", function() { return /* reexport */ eventListeners; });
__webpack_require__.d(__webpack_exports__, "flip", function() { return /* reexport */ modifiers_flip; });
__webpack_require__.d(__webpack_exports__, "hide", function() { return /* reexport */ modifiers_hide; });
__webpack_require__.d(__webpack_exports__, "offset", function() { return /* reexport */ modifiers_offset; });
__webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return /* reexport */ modifiers_popperOffsets; });
__webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return /* reexport */ modifiers_preventOverflow; });
__webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return /* reexport */ popperGenerator; });
__webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return /* reexport */ detectOverflow; });
__webpack_require__.d(__webpack_exports__, "createPopperBase", function() { return /* reexport */ createPopper_createPopper; });
__webpack_require__.d(__webpack_exports__, "createPopper", function() { return /* reexport */ popper_createPopper; });
__webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return /* reexport */ popper_lite_createPopper; });

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var enums_clippingParents = 'clippingParents';
var viewport = 'viewport';
var enums_popper = 'popper';
var enums_reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]

    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];
      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ var modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }
  return navigator.userAgent;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js




function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window,
    visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      } // $FlowFixMe[prop-missing]: need a better way to handle this...

      next = next.parentNode || next.host;
    } while (next);
  } // Give up, the result is false

  return false;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument :
  // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot ||
    // step into the shadow DOM of the parent of a slotted node
    element.parentNode || (
    // DOM Element detected
    isShadowRoot(element) ? element.host : null) ||
    // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback
  );
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js







function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) ||
  // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }
  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block

function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);
    if (elementCss.position === 'fixed') {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.

function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }
  return offsetParent || getContainingBlock(element) || window;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js









 // eslint-disable-next-line import/no-unused-modules

var arrow_toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state,
    name = _ref.name,
    options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';
  if (!arrowElement || !popperOffsets) {
    return;
  }
  var paddingObject = arrow_toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function arrow_effect(_ref2) {
  var state = _ref2.state,
    options = _ref2.options;
  var _options$element = options.element,
    arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
  if (arrowElement == null) {
    return;
  } // CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (false) {}
  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}
    return;
  }
  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ var modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
    y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper = _ref2.popper,
    popperRect = _ref2.popperRect,
    placement = _ref2.placement,
    variation = _ref2.variation,
    offsets = _ref2.offsets,
    position = _ref2.position,
    gpuAcceleration = _ref2.gpuAcceleration,
    adaptive = _ref2.adaptive,
    roundOffsets = _ref2.roundOffsets,
    isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
    x = _offsets$x === void 0 ? 0 : _offsets$x,
    _offsets$y = offsets.y,
    y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';
    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    offsetParent = offsetParent;
    if (placement === enums_top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height :
      // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width :
      // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, getWindow(popper)) : {
    x: x,
    y: y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state,
    options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
    gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
    _options$adaptive = options.adaptive,
    adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
    _options$roundOffsets = options.roundOffsets,
    roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (false) { var transitionProperty; }
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ var modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};
function eventListeners_effect(_ref) {
  var state = _ref.state,
    instance = _ref.instance,
    options = _ref.options;
  var _options$scroll = options.scroll,
    scroll = _options$scroll === void 0 ? true : _options$scroll,
    _options$resize = options.resize,
    resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }
  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }
  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }
    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ var eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: eventListeners_effect,
  data: {}
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js




function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === 'rtl') {
    x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
    overflow = _getComputedStyle.overflow,
    overflowX = _getComputedStyle.overflowX,
    overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList :
  // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js














function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`

function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents

function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = math_max(rect.top, accRect.top);
    accRect.right = math_min(rect.right, accRect.right);
    accRect.bottom = math_min(rect.bottom, accRect.bottom);
    accRect.left = math_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
    element = _ref.element,
    placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$placement = _options.placement,
    placement = _options$placement === void 0 ? state.placement : _options$placement,
    _options$strategy = _options.strategy,
    strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
    _options$boundary = _options.boundary,
    boundary = _options$boundary === void 0 ? enums_clippingParents : _options$boundary,
    _options$rootBoundary = _options.rootBoundary,
    rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
    _options$elementConte = _options.elementContext,
    elementContext = _options$elementConte === void 0 ? enums_popper : _options$elementConte,
    _options$altBoundary = _options.altBoundary,
    altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
    _options$padding = _options.padding,
    padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === enums_popper ? enums_reference : enums_popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === enums_popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === enums_popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }
  return overflowOffsets;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    placement = _options.placement,
    boundary = _options.boundary,
    rootBoundary = _options.rootBoundary,
    padding = _options.padding,
    flipVariations = _options.flipVariations,
    _options$allowedAutoP = _options.allowedAutoPlacements,
    allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;
    if (false) {}
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state,
    options = _ref.options,
    name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis,
    checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
    _options$altAxis = options.altAxis,
    checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
    specifiedFallbackPlacements = options.fallbackPlacements,
    padding = options.padding,
    boundary = options.boundary,
    rootBoundary = options.rootBoundary,
    altBoundary = options.altBoundary,
    _options$flipVariatio = options.flipVariations,
    flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
    allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];
  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);
        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ var modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js


function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state,
    name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ var modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
    skidding = _ref[0],
    distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset_offset(_ref2) {
  var state = _ref2.state,
    options = _ref2.options,
    name = _ref2.name;
  var _options$offset = options.offset,
    offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
    x = _data$state$placement.x,
    y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ var modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset_offset
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js

function popperOffsets_popperOffsets(_ref) {
  var state = _ref.state,
    name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ var modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets_popperOffsets,
  data: {}
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js











function preventOverflow(_ref) {
  var state = _ref.state,
    options = _ref.options,
    name = _ref.name;
  var _options$mainAxis = options.mainAxis,
    checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
    _options$altAxis = options.altAxis,
    checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
    boundary = options.boundary,
    rootBoundary = options.rootBoundary,
    altBoundary = options.altBoundary,
    padding = options.padding,
    _options$tether = options.tether,
    tether = _options$tether === void 0 ? true : _options$tether,
    _options$tetherOffset = options.tetherOffset,
    tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === 'x' ? enums_top : left;
    var _altSide = mainAxis === 'x' ? bottom : right;
    var _offset = popperOffsets[altAxis];
    var _len = altAxis === 'y' ? 'height' : 'width';
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [enums_top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ var modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/index.js









// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js








function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' ||
    // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }
    return pending;
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions,
    _generatorOptions$def = _generatorOptions.defaultModifiers,
    defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
    _generatorOptions$def2 = _generatorOptions.defaultOptions,
    defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements,
          reference = _state$elements.reference,
          popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}
          return;
        } // Store the reference and popper rects to be read by modifiers

        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index],
            fn = _state$orderedModifie.fn,
            _state$orderedModifie2 = _state$orderedModifie.options,
            _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
            name = _state$orderedModifie.name;
          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference, popper)) {
      if (false) {}
      return instance;
    }
    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
          _ref3$options = _ref3.options,
          options = _ref3$options === void 0 ? {} : _ref3$options,
          effect = _ref3.effect;
        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });
          var noopFn = function noopFn() {};
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper_createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules


// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js










var popper_defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: popper_defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper-lite.js





var popper_lite_defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles];
var popper_lite_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: popper_lite_defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules


// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/index.js

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(1), __webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports, EventHandler, index) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  var enableDismissTrigger = function enableDismissTrigger(component) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hide';
    var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
    var name = component.NAME;
    EventHandler__default.default.on(document, clickEvent, "[data-bs-dismiss=\"".concat(name, "\"]"), function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }
      if (index.isDisabled(this)) {
        return;
      }
      var target = index.getElementFromSelector(this) || this.closest(".".concat(name));
      var instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

      instance[method]();
    });
  };
  exports.enableDismissTrigger = enableDismissTrigger;
  Object.defineProperties(exports, _defineProperty({
    __esModule: {
      value: true
    }
  }, Symbol.toStringTag, {
    value: 'Module'
  }));
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap sanitizer.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports) {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  var allowedAttribute = function allowedAttribute(attribute, allowedAttributeList) {
    var attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    } // Check if a regular expression validates the attribute.

    return allowedAttributeList.filter(function (attributeRegex) {
      return attributeRegex instanceof RegExp;
    }).some(function (regex) {
      return regex.test(attributeName);
    });
  };
  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    var _ref;
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === 'function') {
      return sanitizeFunction(unsafeHtml);
    }
    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var elements = (_ref = []).concat.apply(_ref, _toConsumableArray(createdDocument.body.querySelectorAll('*')));
    var _iterator = _createForOfIteratorHelper(elements),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _ref2;
        var element = _step.value;
        var elementName = element.nodeName.toLowerCase();
        if (!Object.keys(allowList).includes(elementName)) {
          element.remove();
          continue;
        }
        var attributeList = (_ref2 = []).concat.apply(_ref2, _toConsumableArray(element.attributes));
        var allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
        var _iterator2 = _createForOfIteratorHelper(attributeList),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var attribute = _step2.value;
            if (!allowedAttribute(attribute, allowedAttributes)) {
              element.removeAttribute(attribute.nodeName);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return createdDocument.body.innerHTML;
  }
  exports.DefaultAllowlist = DefaultAllowlist;
  exports.sanitizeHtml = sanitizeHtml;
  Object.defineProperties(exports, _defineProperty({
    __esModule: {
      value: true
    }
  }, Symbol.toStringTag, {
    value: 'Module'
  }));
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap data.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function () {
  'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */
  var elementMap = new Map();
  var data = {
    set: function set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }
      var instanceMap = elementMap.get(element); // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used

      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
        return;
      }
      instanceMap.set(key, instance);
    },
    get: function get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove: function remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      var instanceMap = elementMap.get(element);
      instanceMap.delete(key); // free up element references if there are no instances left for an element

      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };
  return data;
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(3), __webpack_require__(6), __webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3), __webpack_require__(6), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (SelectorEngine, Manipulator, index) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  var PROPERTY_PADDING = 'padding-right';
  var PROPERTY_MARGIN = 'margin-right';
  /**
   * Class definition
   */
  var ScrollBarHelper = /*#__PURE__*/function () {
    function ScrollBarHelper() {
      _classCallCheck(this, ScrollBarHelper);
      this._element = document.body;
    } // Public
    _createClass(ScrollBarHelper, [{
      key: "getWidth",
      value: function getWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        var documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
      }
    }, {
      key: "hide",
      value: function hide() {
        var width = this.getWidth();
        this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width

        this._setElementAttributes(this._element, PROPERTY_PADDING, function (calculatedValue) {
          return calculatedValue + width;
        }); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth

        this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, function (calculatedValue) {
          return calculatedValue + width;
        });
        this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, function (calculatedValue) {
          return calculatedValue - width;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, 'overflow');
        this._resetElementAttributes(this._element, PROPERTY_PADDING);
        this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
        this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      } // Private
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, 'overflow');
        this._element.style.overflow = 'hidden';
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(selector, styleProperty, callback) {
        var _this = this;
        var scrollbarWidth = this.getWidth();
        var manipulationCallBack = function manipulationCallBack(element) {
          if (element !== _this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
            return;
          }
          _this._saveInitialAttribute(element, styleProperty);
          var calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
          element.style.setProperty(styleProperty, "".concat(callback(Number.parseFloat(calculatedValue)), "px"));
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(element, styleProperty) {
        var actualValue = element.style.getPropertyValue(styleProperty);
        if (actualValue) {
          Manipulator__default.default.setDataAttribute(element, styleProperty, actualValue);
        }
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(selector, styleProperty) {
        var manipulationCallBack = function manipulationCallBack(element) {
          var value = Manipulator__default.default.getDataAttribute(element, styleProperty); // We only want to remove the property if the value is `null`; the value can also be zero

          if (value === null) {
            element.style.removeProperty(styleProperty);
            return;
          }
          Manipulator__default.default.removeDataAttribute(element, styleProperty);
          element.style.setProperty(styleProperty, value);
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(selector, callBack) {
        if (index.isElement(selector)) {
          callBack(selector);
          return;
        }
        var _iterator = _createForOfIteratorHelper(SelectorEngine__default.default.find(selector, this._element)),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var sel = _step.value;
            callBack(sel);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }]);
    return ScrollBarHelper;
  }();
  return ScrollBarHelper;
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(1), __webpack_require__(0), __webpack_require__(5)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(0), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (EventHandler, index, Config) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Config__default = /*#__PURE__*/_interopDefaultLegacy(Config);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var NAME = 'backdrop';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  var EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME);
  var Default = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements
  };

  var DefaultType = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };
  /**
   * Class definition
   */
  var Backdrop = /*#__PURE__*/function (_Config__default$defa) {
    _inherits(Backdrop, _Config__default$defa);
    var _super = _createSuper(Backdrop);
    function Backdrop(config) {
      var _this;
      _classCallCheck(this, Backdrop);
      _this = _super.call(this);
      _this._config = _this._getConfig(config);
      _this._isAppended = false;
      _this._element = null;
      return _this;
    } // Getters
    _createClass(Backdrop, [{
      key: "show",
      value:
      // Public

      function show(callback) {
        if (!this._config.isVisible) {
          index.execute(callback);
          return;
        }
        this._append();
        var element = this._getElement();
        if (this._config.isAnimated) {
          index.reflow(element);
        }
        element.classList.add(CLASS_NAME_SHOW);
        this._emulateAnimation(function () {
          index.execute(callback);
        });
      }
    }, {
      key: "hide",
      value: function hide(callback) {
        var _this2 = this;
        if (!this._config.isVisible) {
          index.execute(callback);
          return;
        }
        this._getElement().classList.remove(CLASS_NAME_SHOW);
        this._emulateAnimation(function () {
          _this2.dispose();
          index.execute(callback);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (!this._isAppended) {
          return;
        }
        EventHandler__default.default.off(this._element, EVENT_MOUSEDOWN);
        this._element.remove();
        this._isAppended = false;
      } // Private
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var backdrop = document.createElement('div');
          backdrop.className = this._config.className;
          if (this._config.isAnimated) {
            backdrop.classList.add(CLASS_NAME_FADE);
          }
          this._element = backdrop;
        }
        return this._element;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(config) {
        // use getElement() with the default "body" to get a fresh Element on each instantiation
        config.rootElement = index.getElement(config.rootElement);
        return config;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this3 = this;
        if (this._isAppended) {
          return;
        }
        var element = this._getElement();
        this._config.rootElement.append(element);
        EventHandler__default.default.on(element, EVENT_MOUSEDOWN, function () {
          index.execute(_this3._config.clickCallback);
        });
        this._isAppended = true;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(callback) {
        index.executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }]);
    return Backdrop;
  }(Config__default.default);
  return Backdrop;
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(1), __webpack_require__(3), __webpack_require__(5)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(3), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (EventHandler, SelectorEngine, Config) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var Config__default = /*#__PURE__*/_interopDefaultLegacy(Config);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var NAME = 'focustrap';
  var DATA_KEY = 'bs.focustrap';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
  var EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY);
  var TAB_KEY = 'Tab';
  var TAB_NAV_FORWARD = 'forward';
  var TAB_NAV_BACKWARD = 'backward';
  var Default = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
  };

  var DefaultType = {
    autofocus: 'boolean',
    trapElement: 'element'
  };
  /**
   * Class definition
   */
  var FocusTrap = /*#__PURE__*/function (_Config__default$defa) {
    _inherits(FocusTrap, _Config__default$defa);
    var _super = _createSuper(FocusTrap);
    function FocusTrap(config) {
      var _this;
      _classCallCheck(this, FocusTrap);
      _this = _super.call(this);
      _this._config = _this._getConfig(config);
      _this._isActive = false;
      _this._lastTabNavDirection = null;
      return _this;
    } // Getters
    _createClass(FocusTrap, [{
      key: "activate",
      value:
      // Public

      function activate() {
        var _this2 = this;
        if (this._isActive) {
          return;
        }
        if (this._config.autofocus) {
          this._config.trapElement.focus();
        }
        EventHandler__default.default.off(document, EVENT_KEY); // guard against infinite focus loop

        EventHandler__default.default.on(document, EVENT_FOCUSIN, function (event) {
          return _this2._handleFocusin(event);
        });
        EventHandler__default.default.on(document, EVENT_KEYDOWN_TAB, function (event) {
          return _this2._handleKeydown(event);
        });
        this._isActive = true;
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        if (!this._isActive) {
          return;
        }
        this._isActive = false;
        EventHandler__default.default.off(document, EVENT_KEY);
      } // Private
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(event) {
        var trapElement = this._config.trapElement;
        if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
          return;
        }
        var elements = SelectorEngine__default.default.focusableChildren(trapElement);
        if (elements.length === 0) {
          trapElement.focus();
        } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
          elements[elements.length - 1].focus();
        } else {
          elements[0].focus();
        }
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(event) {
        if (event.key !== TAB_KEY) {
          return;
        }
        this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
      }
    }], [{
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }]);
    return FocusTrap;
  }(Config__default.default);
  return FocusTrap;
});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap tooltip.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(7), __webpack_require__(0), __webpack_require__(9), __webpack_require__(1), __webpack_require__(6), __webpack_require__(2), __webpack_require__(15)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(7), __webpack_require__(0), __webpack_require__(9), __webpack_require__(1), __webpack_require__(6), __webpack_require__(2), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (Popper, index, sanitizer, EventHandler, Manipulator, BaseComponent, TemplateFactory) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null, _defineProperty({}, Symbol.toStringTag, {
      value: 'Module'
    }));
    if (e) {
      var _loop = function _loop(k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function get() {
              return e[k];
            }
          });
        }
      };
      for (var k in e) {
        _loop(k);
      }
    }
    n.default = e;
    return Object.freeze(n);
  }
  var Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  var TemplateFactory__default = /*#__PURE__*/_interopDefaultLegacy(TemplateFactory);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): tooltip.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var NAME = 'tooltip';
  var DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_MODAL = 'modal';
  var CLASS_NAME_SHOW = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_MODAL = ".".concat(CLASS_NAME_MODAL);
  var EVENT_MODAL_HIDE = 'hide.bs.modal';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  var EVENT_HIDE = 'hide';
  var EVENT_HIDDEN = 'hidden';
  var EVENT_SHOW = 'show';
  var EVENT_SHOWN = 'shown';
  var EVENT_INSERTED = 'inserted';
  var EVENT_CLICK = 'click';
  var EVENT_FOCUSIN = 'focusin';
  var EVENT_FOCUSOUT = 'focusout';
  var EVENT_MOUSEENTER = 'mouseenter';
  var EVENT_MOUSELEAVE = 'mouseleave';
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: index.isRTL() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: index.isRTL() ? 'right' : 'left'
  };
  var Default = {
    allowList: sanitizer.DefaultAllowlist,
    animation: true,
    boundary: 'clippingParents',
    container: false,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: false,
    offset: [0, 0],
    placement: 'top',
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
    title: '',
    trigger: 'hover focus'
  };
  var DefaultType = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
  };
  /**
   * Class definition
   */
  var Tooltip = /*#__PURE__*/function (_BaseComponent__defau) {
    _inherits(Tooltip, _BaseComponent__defau);
    var _super = _createSuper(Tooltip);
    function Tooltip(element, config) {
      var _this;
      _classCallCheck(this, Tooltip);
      if (typeof Popper__namespace === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
      }
      _this = _super.call(this, element, config); // Private

      _this._isEnabled = true;
      _this._timeout = 0;
      _this._isHovered = null;
      _this._activeTrigger = {};
      _this._popper = null;
      _this._templateFactory = null;
      _this._newContent = null; // Protected

      _this.tip = null;
      _this._setListeners();
      if (!_this._config.selector) {
        _this._fixTitle();
      }
      return _this;
    } // Getters
    _createClass(Tooltip, [{
      key: "enable",
      value:
      // Public

      function enable() {
        this._isEnabled = true;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = false;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (!this._isEnabled) {
          return;
        }
        this._activeTrigger.click = !this._activeTrigger.click;
        if (this._isShown()) {
          this._leave();
          return;
        }
        this._enter();
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout);
        EventHandler__default.default.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
        if (this._element.getAttribute('data-bs-original-title')) {
          this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
        }
        this._disposePopper();
        _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this2 = this;
        if (this._element.style.display === 'none') {
          throw new Error('Please use show on visible elements');
        }
        if (!(this._isWithContent() && this._isEnabled)) {
          return;
        }
        var showEvent = EventHandler__default.default.trigger(this._element, this.constructor.eventName(EVENT_SHOW));
        var shadowRoot = index.findShadowRoot(this._element);
        var isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
        if (showEvent.defaultPrevented || !isInTheDom) {
          return;
        } // todo v6 remove this OR make it optional

        this._disposePopper();
        var tip = this._getTipElement();
        this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
        var container = this._config.container;
        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
          container.append(tip);
          EventHandler__default.default.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
        }
        this._popper = this._createPopper(tip);
        tip.classList.add(CLASS_NAME_SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          var _ref;
          var _iterator = _createForOfIteratorHelper((_ref = []).concat.apply(_ref, _toConsumableArray(document.body.children))),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var element = _step.value;
              EventHandler__default.default.on(element, 'mouseover', index.noop);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        var complete = function complete() {
          EventHandler__default.default.trigger(_this2._element, _this2.constructor.eventName(EVENT_SHOWN));
          if (_this2._isHovered === false) {
            _this2._leave();
          }
          _this2._isHovered = false;
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this3 = this;
        if (!this._isShown()) {
          return;
        }
        var hideEvent = EventHandler__default.default.trigger(this._element, this.constructor.eventName(EVENT_HIDE));
        if (hideEvent.defaultPrevented) {
          return;
        }
        var tip = this._getTipElement();
        tip.classList.remove(CLASS_NAME_SHOW); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        if ('ontouchstart' in document.documentElement) {
          var _ref2;
          var _iterator2 = _createForOfIteratorHelper((_ref2 = []).concat.apply(_ref2, _toConsumableArray(document.body.children))),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var element = _step2.value;
              EventHandler__default.default.off(element, 'mouseover', index.noop);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        this._activeTrigger[TRIGGER_CLICK] = false;
        this._activeTrigger[TRIGGER_FOCUS] = false;
        this._activeTrigger[TRIGGER_HOVER] = false;
        this._isHovered = null; // it is a trick to support manual triggering

        var complete = function complete() {
          if (_this3._isWithActiveTrigger()) {
            return;
          }
          if (!_this3._isHovered) {
            _this3._disposePopper();
          }
          _this3._element.removeAttribute('aria-describedby');
          EventHandler__default.default.trigger(_this3._element, _this3.constructor.eventName(EVENT_HIDDEN));
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
      }
    }, {
      key: "update",
      value: function update() {
        if (this._popper) {
          this._popper.update();
        }
      } // Protected
    }, {
      key: "_isWithContent",
      value: function _isWithContent() {
        return Boolean(this._getTitle());
      }
    }, {
      key: "_getTipElement",
      value: function _getTipElement() {
        if (!this.tip) {
          this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
        }
        return this.tip;
      }
    }, {
      key: "_createTipElement",
      value: function _createTipElement(content) {
        var tip = this._getTemplateFactory(content).toHtml(); // todo: remove this check on v6

        if (!tip) {
          return null;
        }
        tip.classList.remove(CLASS_NAME_FADE, CLASS_NAME_SHOW); // todo: on v6 the following can be achieved with CSS only

        tip.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
        var tipId = index.getUID(this.constructor.NAME).toString();
        tip.setAttribute('id', tipId);
        if (this._isAnimated()) {
          tip.classList.add(CLASS_NAME_FADE);
        }
        return tip;
      }
    }, {
      key: "setContent",
      value: function setContent(content) {
        this._newContent = content;
        if (this._isShown()) {
          this._disposePopper();
          this.show();
        }
      }
    }, {
      key: "_getTemplateFactory",
      value: function _getTemplateFactory(content) {
        if (this._templateFactory) {
          this._templateFactory.changeContent(content);
        } else {
          this._templateFactory = new TemplateFactory__default.default(_objectSpread(_objectSpread({}, this._config), {}, {
            // the `content` var has to be after `this._config`
            // to override config.content in case of popover
            content: content,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
          }));
        }
        return this._templateFactory;
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return _defineProperty({}, SELECTOR_TOOLTIP_INNER, this._getTitle());
      }
    }, {
      key: "_getTitle",
      value: function _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
      } // Private
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(event) {
        return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW);
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(tip) {
        var placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
        var attachment = AttachmentMap[placement.toUpperCase()];
        return Popper__namespace.createPopper(this._element, tip, this._getPopperConfig(attachment));
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this4 = this;
        var offset = this._config.offset;
        if (typeof offset === 'string') {
          return offset.split(',').map(function (value) {
            return Number.parseInt(value, 10);
          });
        }
        if (typeof offset === 'function') {
          return function (popperData) {
            return offset(popperData, _this4._element);
          };
        }
        return offset;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(arg) {
        return typeof arg === 'function' ? arg.call(this._element) : arg;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(attachment) {
        var _this5 = this;
        var defaultBsPopperConfig = {
          placement: attachment,
          modifiers: [{
            name: 'flip',
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }, {
            name: 'preventOverflow',
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: 'arrow',
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: 'preSetPlacement',
            enabled: true,
            phase: 'beforeMain',
            fn: function fn(data) {
              // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
              // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
              _this5._getTipElement().setAttribute('data-popper-placement', data.state.placement);
            }
          }]
        };
        return _objectSpread(_objectSpread({}, defaultBsPopperConfig), typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this6 = this;
        var triggers = this._config.trigger.split(' ');
        var _iterator3 = _createForOfIteratorHelper(triggers),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var trigger = _step3.value;
            if (trigger === 'click') {
              EventHandler__default.default.on(this._element, this.constructor.eventName(EVENT_CLICK), this._config.selector, function (event) {
                var context = _this6._initializeOnDelegatedTarget(event);
                context.toggle();
              });
            } else if (trigger !== TRIGGER_MANUAL) {
              var eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN);
              var eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT);
              EventHandler__default.default.on(this._element, eventIn, this._config.selector, function (event) {
                var context = _this6._initializeOnDelegatedTarget(event);
                context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                context._enter();
              });
              EventHandler__default.default.on(this._element, eventOut, this._config.selector, function (event) {
                var context = _this6._initializeOnDelegatedTarget(event);
                context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                context._leave();
              });
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this._hideModalHandler = function () {
          if (_this6._element) {
            _this6.hide();
          }
        };
        EventHandler__default.default.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var title = this._element.getAttribute('title');
        if (!title) {
          return;
        }
        if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
          this._element.setAttribute('aria-label', title);
        }
        this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility

        this._element.removeAttribute('title');
      }
    }, {
      key: "_enter",
      value: function _enter() {
        var _this7 = this;
        if (this._isShown() || this._isHovered) {
          this._isHovered = true;
          return;
        }
        this._isHovered = true;
        this._setTimeout(function () {
          if (_this7._isHovered) {
            _this7.show();
          }
        }, this._config.delay.show);
      }
    }, {
      key: "_leave",
      value: function _leave() {
        var _this8 = this;
        if (this._isWithActiveTrigger()) {
          return;
        }
        this._isHovered = false;
        this._setTimeout(function () {
          if (!_this8._isHovered) {
            _this8.hide();
          }
        }, this._config.delay.hide);
      }
    }, {
      key: "_setTimeout",
      value: function _setTimeout(handler, timeout) {
        clearTimeout(this._timeout);
        this._timeout = setTimeout(handler, timeout);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(true);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        var dataAttributes = Manipulator__default.default.getDataAttributes(this._element);
        for (var _i = 0, _Object$keys = Object.keys(dataAttributes); _i < _Object$keys.length; _i++) {
          var dataAttribute = _Object$keys[_i];
          if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
            delete dataAttributes[dataAttribute];
          }
        }
        config = _objectSpread(_objectSpread({}, dataAttributes), _typeof(config) === 'object' && config ? config : {});
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(config) {
        config.container = config.container === false ? document.body : index.getElement(config.container);
        if (typeof config.delay === 'number') {
          config.delay = {
            show: config.delay,
            hide: config.delay
          };
        }
        if (typeof config.title === 'number') {
          config.title = config.title.toString();
        }
        if (typeof config.content === 'number') {
          config.content = config.content.toString();
        }
        return config;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var config = {};
        for (var key in this._config) {
          if (this.constructor.Default[key] !== this._config[key]) {
            config[key] = this._config[key];
          }
        }
        config.selector = false;
        config.trigger = 'manual'; // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`

        return config;
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        if (this._popper) {
          this._popper.destroy();
          this._popper = null;
        }
        if (this.tip) {
          this.tip.remove();
          this.tip = null;
        }
      } // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Tooltip.getOrCreateInstance(this, config);
          if (typeof config !== 'string') {
            return;
          }
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config]();
        });
      }
    }]);
    return Tooltip;
  }(BaseComponent__default.default);
  /**
   * jQuery
   */
  index.defineJQueryPlugin(Tooltip);
  return Tooltip;
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap template-factory.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(9), __webpack_require__(0), __webpack_require__(3), __webpack_require__(5)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(9), __webpack_require__(0), __webpack_require__(3), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (sanitizer, index, SelectorEngine, Config) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var Config__default = /*#__PURE__*/_interopDefaultLegacy(Config);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/template-factory.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var NAME = 'TemplateFactory';
  var Default = {
    allowList: sanitizer.DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: '',
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: '<div></div>'
  };
  var DefaultType = {
    allowList: 'object',
    content: 'object',
    extraClass: '(string|function)',
    html: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    template: 'string'
  };
  var DefaultContentType = {
    entry: '(string|element|function|null)',
    selector: '(string|element)'
  };
  /**
   * Class definition
   */
  var TemplateFactory = /*#__PURE__*/function (_Config__default$defa) {
    _inherits(TemplateFactory, _Config__default$defa);
    var _super = _createSuper(TemplateFactory);
    function TemplateFactory(config) {
      var _this;
      _classCallCheck(this, TemplateFactory);
      _this = _super.call(this);
      _this._config = _this._getConfig(config);
      return _this;
    } // Getters
    _createClass(TemplateFactory, [{
      key: "getContent",
      value:
      // Public

      function getContent() {
        var _this2 = this;
        return Object.values(this._config.content).map(function (config) {
          return _this2._resolvePossibleFunction(config);
        }).filter(Boolean);
      }
    }, {
      key: "hasContent",
      value: function hasContent() {
        return this.getContent().length > 0;
      }
    }, {
      key: "changeContent",
      value: function changeContent(content) {
        this._checkContent(content);
        this._config.content = _objectSpread(_objectSpread({}, this._config.content), content);
        return this;
      }
    }, {
      key: "toHtml",
      value: function toHtml() {
        var templateWrapper = document.createElement('div');
        templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
        for (var _i = 0, _Object$entries = Object.entries(this._config.content); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            selector = _Object$entries$_i[0],
            text = _Object$entries$_i[1];
          this._setContent(templateWrapper, text, selector);
        }
        var template = templateWrapper.children[0];
        var extraClass = this._resolvePossibleFunction(this._config.extraClass);
        if (extraClass) {
          var _template$classList;
          (_template$classList = template.classList).add.apply(_template$classList, _toConsumableArray(extraClass.split(' ')));
        }
        return template;
      } // Private
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(config) {
        _get(_getPrototypeOf(TemplateFactory.prototype), "_typeCheckConfig", this).call(this, config);
        this._checkContent(config.content);
      }
    }, {
      key: "_checkContent",
      value: function _checkContent(arg) {
        for (var _i2 = 0, _Object$entries2 = Object.entries(arg); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            selector = _Object$entries2$_i[0],
            content = _Object$entries2$_i[1];
          _get(_getPrototypeOf(TemplateFactory.prototype), "_typeCheckConfig", this).call(this, {
            selector: selector,
            entry: content
          }, DefaultContentType);
        }
      }
    }, {
      key: "_setContent",
      value: function _setContent(template, content, selector) {
        var templateElement = SelectorEngine__default.default.findOne(selector, template);
        if (!templateElement) {
          return;
        }
        content = this._resolvePossibleFunction(content);
        if (!content) {
          templateElement.remove();
          return;
        }
        if (index.isElement(content)) {
          this._putElementInTemplate(index.getElement(content), templateElement);
          return;
        }
        if (this._config.html) {
          templateElement.innerHTML = this._maybeSanitize(content);
          return;
        }
        templateElement.textContent = content;
      }
    }, {
      key: "_maybeSanitize",
      value: function _maybeSanitize(arg) {
        return this._config.sanitize ? sanitizer.sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(arg) {
        return typeof arg === 'function' ? arg(this) : arg;
      }
    }, {
      key: "_putElementInTemplate",
      value: function _putElementInTemplate(element, templateElement) {
        if (this._config.html) {
          templateElement.innerHTML = '';
          templateElement.append(element);
          return;
        }
        templateElement.textContent = element.textContent;
      }
    }], [{
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }]);
    return TemplateFactory;
  }(Config__default.default);
  return TemplateFactory;
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
module.exports = __webpack_require__(26);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap alert.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(0), __webpack_require__(1), __webpack_require__(2), __webpack_require__(8)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1), __webpack_require__(2), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (index, EventHandler, BaseComponent, componentFunctions) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var NAME = 'alert';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var EVENT_CLOSE = "close".concat(EVENT_KEY);
  var EVENT_CLOSED = "closed".concat(EVENT_KEY);
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * Class definition
   */
  var Alert = /*#__PURE__*/function (_BaseComponent__defau) {
    _inherits(Alert, _BaseComponent__defau);
    var _super = _createSuper(Alert);
    function Alert() {
      _classCallCheck(this, Alert);
      return _super.apply(this, arguments);
    }
    _createClass(Alert, [{
      key: "close",
      value:
      // Public

      function close() {
        var _this = this;
        var closeEvent = EventHandler__default.default.trigger(this._element, EVENT_CLOSE);
        if (closeEvent.defaultPrevented) {
          return;
        }
        this._element.classList.remove(CLASS_NAME_SHOW);
        var isAnimated = this._element.classList.contains(CLASS_NAME_FADE);
        this._queueCallback(function () {
          return _this._destroyElement();
        }, this._element, isAnimated);
      } // Private
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove();
        EventHandler__default.default.trigger(this._element, EVENT_CLOSED);
        this.dispose();
      } // Static
    }], [{
      key: "NAME",
      get:
      // Getters
      function get() {
        return NAME;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Alert.getOrCreateInstance(this);
          if (typeof config !== 'string') {
            return;
          }
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config](this);
        });
      }
    }]);
    return Alert;
  }(BaseComponent__default.default);
  /**
   * Data API implementation
   */
  componentFunctions.enableDismissTrigger(Alert, 'close');
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Alert);
  return Alert;
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap button.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(0), __webpack_require__(1), __webpack_require__(2)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (index, EventHandler, BaseComponent) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var NAME = 'button';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var DATA_API_KEY = '.data-api';
  var CLASS_NAME_ACTIVE = 'active';
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="button"]';
  var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY).concat(DATA_API_KEY);
  /**
   * Class definition
   */
  var Button = /*#__PURE__*/function (_BaseComponent__defau) {
    _inherits(Button, _BaseComponent__defau);
    var _super = _createSuper(Button);
    function Button() {
      _classCallCheck(this, Button);
      return _super.apply(this, arguments);
    }
    _createClass(Button, [{
      key: "toggle",
      value:
      // Public

      function toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE));
      } // Static
    }], [{
      key: "NAME",
      get:
      // Getters
      function get() {
        return NAME;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Button.getOrCreateInstance(this);
          if (config === 'toggle') {
            data[config]();
          }
        });
      }
    }]);
    return Button;
  }(BaseComponent__default.default);
  /**
   * Data API implementation
   */
  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();
    var button = event.target.closest(SELECTOR_DATA_TOGGLE);
    var data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Button);
  return Button;
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap collapse.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(0), __webpack_require__(1), __webpack_require__(3), __webpack_require__(2)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1), __webpack_require__(3), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (index, EventHandler, SelectorEngine, BaseComponent) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): collapse.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var NAME = 'collapse';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var DATA_API_KEY = '.data-api';
  var EVENT_SHOW = "show".concat(EVENT_KEY);
  var EVENT_SHOWN = "shown".concat(EVENT_KEY);
  var EVENT_HIDE = "hide".concat(EVENT_KEY);
  var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
  var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY).concat(DATA_API_KEY);
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var CLASS_NAME_DEEPER_CHILDREN = ":scope .".concat(CLASS_NAME_COLLAPSE, " .").concat(CLASS_NAME_COLLAPSE);
  var CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
  var WIDTH = 'width';
  var HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
  var Default = {
    parent: null,
    toggle: true
  };
  var DefaultType = {
    parent: '(null|element)',
    toggle: 'boolean'
  };
  /**
   * Class definition
   */
  var Collapse = /*#__PURE__*/function (_BaseComponent__defau) {
    _inherits(Collapse, _BaseComponent__defau);
    var _super = _createSuper(Collapse);
    function Collapse(element, config) {
      var _this;
      _classCallCheck(this, Collapse);
      _this = _super.call(this, element, config);
      _this._isTransitioning = false;
      _this._triggerArray = [];
      var toggleList = SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE);
      var _iterator = _createForOfIteratorHelper(toggleList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var elem = _step.value;
          var selector = index.getSelectorFromElement(elem);
          var filterElement = SelectorEngine__default.default.find(selector).filter(function (foundElement) {
            return foundElement === _this._element;
          });
          if (selector !== null && filterElement.length) {
            _this._triggerArray.push(elem);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      _this._initializeChildren();
      if (!_this._config.parent) {
        _this._addAriaAndCollapsedClass(_this._triggerArray, _this._isShown());
      }
      if (_this._config.toggle) {
        _this.toggle();
      }
      return _this;
    } // Getters
    _createClass(Collapse, [{
      key: "toggle",
      value:
      // Public

      function toggle() {
        if (this._isShown()) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: "show",
      value: function show() {
        var _this2 = this;
        if (this._isTransitioning || this._isShown()) {
          return;
        }
        var activeChildren = []; // find active children

        if (this._config.parent) {
          activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(function (element) {
            return element !== _this2._element;
          }).map(function (element) {
            return Collapse.getOrCreateInstance(element, {
              toggle: false
            });
          });
        }
        if (activeChildren.length && activeChildren[0]._isTransitioning) {
          return;
        }
        var startEvent = EventHandler__default.default.trigger(this._element, EVENT_SHOW);
        if (startEvent.defaultPrevented) {
          return;
        }
        var _iterator2 = _createForOfIteratorHelper(activeChildren),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var activeInstance = _step2.value;
            activeInstance.hide();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var dimension = this._getDimension();
        this._element.classList.remove(CLASS_NAME_COLLAPSE);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.style[dimension] = 0;
        this._addAriaAndCollapsedClass(this._triggerArray, true);
        this._isTransitioning = true;
        var complete = function complete() {
          _this2._isTransitioning = false;
          _this2._element.classList.remove(CLASS_NAME_COLLAPSING);
          _this2._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
          _this2._element.style[dimension] = '';
          EventHandler__default.default.trigger(_this2._element, EVENT_SHOWN);
        };
        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = "scroll".concat(capitalizedDimension);
        this._queueCallback(complete, this._element, true);
        this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this3 = this;
        if (this._isTransitioning || !this._isShown()) {
          return;
        }
        var startEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE);
        if (startEvent.defaultPrevented) {
          return;
        }
        var dimension = this._getDimension();
        this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
        index.reflow(this._element);
        this._element.classList.add(CLASS_NAME_COLLAPSING);
        this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
        var _iterator3 = _createForOfIteratorHelper(this._triggerArray),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var trigger = _step3.value;
            var element = index.getElementFromSelector(trigger);
            if (element && !this._isShown(element)) {
              this._addAriaAndCollapsedClass([trigger], false);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this._isTransitioning = true;
        var complete = function complete() {
          _this3._isTransitioning = false;
          _this3._element.classList.remove(CLASS_NAME_COLLAPSING);
          _this3._element.classList.add(CLASS_NAME_COLLAPSE);
          EventHandler__default.default.trigger(_this3._element, EVENT_HIDDEN);
        };
        this._element.style[dimension] = '';
        this._queueCallback(complete, this._element, true);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return element.classList.contains(CLASS_NAME_SHOW);
      } // Private
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(config) {
        config.toggle = Boolean(config.toggle); // Coerce string values

        config.parent = index.getElement(config.parent);
        return config;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        if (!this._config.parent) {
          return;
        }
        var children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);
        var _iterator4 = _createForOfIteratorHelper(children),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var element = _step4.value;
            var selected = index.getElementFromSelector(element);
            if (selected) {
              this._addAriaAndCollapsedClass([element], this._isShown(selected));
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }, {
      key: "_getFirstLevelChildren",
      value: function _getFirstLevelChildren(selector) {
        var children = SelectorEngine__default.default.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent); // remove children if greater depth

        return SelectorEngine__default.default.find(selector, this._config.parent).filter(function (element) {
          return !children.includes(element);
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) {
          return;
        }
        var _iterator5 = _createForOfIteratorHelper(triggerArray),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var element = _step5.value;
            element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
            element.setAttribute('aria-expanded', isOpen);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      } // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        var _config = {};
        if (typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }
        return this.each(function () {
          var data = Collapse.getOrCreateInstance(this, _config);
          if (typeof config === 'string') {
            if (typeof data[config] === 'undefined') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }
            data[config]();
          }
        });
      }
    }]);
    return Collapse;
  }(BaseComponent__default.default);
  /**
   * Data API implementation
   */
  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
      event.preventDefault();
    }
    var selector = index.getSelectorFromElement(this);
    var selectorElements = SelectorEngine__default.default.find(selector);
    var _iterator6 = _createForOfIteratorHelper(selectorElements),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var element = _step6.value;
        Collapse.getOrCreateInstance(element, {
          toggle: false
        }).toggle();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Collapse);
  return Collapse;
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap dropdown.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(7), __webpack_require__(0), __webpack_require__(1), __webpack_require__(6), __webpack_require__(3), __webpack_require__(2)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(7), __webpack_require__(0), __webpack_require__(1), __webpack_require__(6), __webpack_require__(3), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (Popper, index, EventHandler, Manipulator, SelectorEngine, BaseComponent) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null, _defineProperty({}, Symbol.toStringTag, {
      value: 'Module'
    }));
    if (e) {
      var _loop = function _loop(k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function get() {
              return e[k];
            }
          });
        }
      };
      for (var k in e) {
        _loop(k);
      }
    }
    n.default = e;
    return Object.freeze(n);
  }
  var Popper__namespace = /*#__PURE__*/_interopNamespace(Popper);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): dropdown.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var NAME = 'dropdown';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var DATA_API_KEY = '.data-api';
  var ESCAPE_KEY = 'Escape';
  var TAB_KEY = 'Tab';
  var ARROW_UP_KEY = 'ArrowUp';
  var ARROW_DOWN_KEY = 'ArrowDown';
  var RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

  var EVENT_HIDE = "hide".concat(EVENT_KEY);
  var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
  var EVENT_SHOW = "show".concat(EVENT_KEY);
  var EVENT_SHOWN = "shown".concat(EVENT_KEY);
  var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY).concat(DATA_API_KEY);
  var EVENT_KEYDOWN_DATA_API = "keydown".concat(EVENT_KEY).concat(DATA_API_KEY);
  var EVENT_KEYUP_DATA_API = "keyup".concat(EVENT_KEY).concat(DATA_API_KEY);
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPEND = 'dropend';
  var CLASS_NAME_DROPSTART = 'dropstart';
  var CLASS_NAME_DROPUP_CENTER = 'dropup-center';
  var CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = "".concat(SELECTOR_DATA_TOGGLE, ".").concat(CLASS_NAME_SHOW);
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR = '.navbar';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = index.isRTL() ? 'top-end' : 'top-start';
  var PLACEMENT_TOPEND = index.isRTL() ? 'top-start' : 'top-end';
  var PLACEMENT_BOTTOM = index.isRTL() ? 'bottom-end' : 'bottom-start';
  var PLACEMENT_BOTTOMEND = index.isRTL() ? 'bottom-start' : 'bottom-end';
  var PLACEMENT_RIGHT = index.isRTL() ? 'left-start' : 'right-start';
  var PLACEMENT_LEFT = index.isRTL() ? 'right-start' : 'left-start';
  var PLACEMENT_TOPCENTER = 'top';
  var PLACEMENT_BOTTOMCENTER = 'bottom';
  var Default = {
    autoClose: true,
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
  };
  var DefaultType = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
  };
  /**
   * Class definition
   */
  var Dropdown = /*#__PURE__*/function (_BaseComponent__defau) {
    _inherits(Dropdown, _BaseComponent__defau);
    var _super = _createSuper(Dropdown);
    function Dropdown(element, config) {
      var _this;
      _classCallCheck(this, Dropdown);
      _this = _super.call(this, element, config);
      _this._popper = null;
      _this._parent = _this._element.parentNode; // dropdown wrapper
      // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/

      _this._menu = SelectorEngine__default.default.next(_this._element, SELECTOR_MENU)[0] || SelectorEngine__default.default.prev(_this._element, SELECTOR_MENU)[0] || SelectorEngine__default.default.findOne(SELECTOR_MENU, _this._parent);
      _this._inNavbar = _this._detectNavbar();
      return _this;
    } // Getters
    _createClass(Dropdown, [{
      key: "toggle",
      value:
      // Public

      function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (index.isDisabled(this._element) || this._isShown()) {
          return;
        }
        var relatedTarget = {
          relatedTarget: this._element
        };
        var showEvent = EventHandler__default.default.trigger(this._element, EVENT_SHOW, relatedTarget);
        if (showEvent.defaultPrevented) {
          return;
        }
        this._createPopper(); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
          var _ref;
          var _iterator = _createForOfIteratorHelper((_ref = []).concat.apply(_ref, _toConsumableArray(document.body.children))),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var element = _step.value;
              EventHandler__default.default.on(element, 'mouseover', index.noop);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        this._element.focus();
        this._element.setAttribute('aria-expanded', true);
        this._menu.classList.add(CLASS_NAME_SHOW);
        this._element.classList.add(CLASS_NAME_SHOW);
        EventHandler__default.default.trigger(this._element, EVENT_SHOWN, relatedTarget);
      }
    }, {
      key: "hide",
      value: function hide() {
        if (index.isDisabled(this._element) || !this._isShown()) {
          return;
        }
        var relatedTarget = {
          relatedTarget: this._element
        };
        this._completeHide(relatedTarget);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (this._popper) {
          this._popper.destroy();
        }
        _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar();
        if (this._popper) {
          this._popper.update();
        }
      } // Private
    }, {
      key: "_completeHide",
      value: function _completeHide(relatedTarget) {
        var hideEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE, relatedTarget);
        if (hideEvent.defaultPrevented) {
          return;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support

        if ('ontouchstart' in document.documentElement) {
          var _ref2;
          var _iterator2 = _createForOfIteratorHelper((_ref2 = []).concat.apply(_ref2, _toConsumableArray(document.body.children))),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var element = _step2.value;
              EventHandler__default.default.off(element, 'mouseover', index.noop);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        if (this._popper) {
          this._popper.destroy();
        }
        this._menu.classList.remove(CLASS_NAME_SHOW);
        this._element.classList.remove(CLASS_NAME_SHOW);
        this._element.setAttribute('aria-expanded', 'false');
        Manipulator__default.default.removeDataAttribute(this._menu, 'popper');
        EventHandler__default.default.trigger(this._element, EVENT_HIDDEN, relatedTarget);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(config) {
        config = _get(_getPrototypeOf(Dropdown.prototype), "_getConfig", this).call(this, config);
        if (_typeof(config.reference) === 'object' && !index.isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
          // Popper virtual elements require a getBoundingClientRect method
          throw new TypeError("".concat(NAME.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        }
        return config;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper() {
        if (typeof Popper__namespace === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
        }
        var referenceElement = this._element;
        if (this._config.reference === 'parent') {
          referenceElement = this._parent;
        } else if (index.isElement(this._config.reference)) {
          referenceElement = index.getElement(this._config.reference);
        } else if (_typeof(this._config.reference) === 'object') {
          referenceElement = this._config.reference;
        }
        var popperConfig = this._getPopperConfig();
        this._popper = Popper__namespace.createPopper(referenceElement, this._menu, popperConfig);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this._menu.classList.contains(CLASS_NAME_SHOW);
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var parentDropdown = this._parent;
        if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
          return PLACEMENT_RIGHT;
        }
        if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
          return PLACEMENT_LEFT;
        }
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
          return PLACEMENT_TOPCENTER;
        }
        if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
          return PLACEMENT_BOTTOMCENTER;
        } // We need to trim the value because custom properties can also include spaces

        var isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
        if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
          return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
        }
        return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return this._element.closest(SELECTOR_NAVBAR) !== null;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this2 = this;
        var offset = this._config.offset;
        if (typeof offset === 'string') {
          return offset.split(',').map(function (value) {
            return Number.parseInt(value, 10);
          });
        }
        if (typeof offset === 'function') {
          return function (popperData) {
            return offset(popperData, _this2._element);
          };
        }
        return offset;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var defaultBsPopperConfig = {
          placement: this._getPlacement(),
          modifiers: [{
            name: 'preventOverflow',
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: 'offset',
            options: {
              offset: this._getOffset()
            }
          }]
        }; // Disable Popper if we have a static display or Dropdown is in Navbar

        if (this._inNavbar || this._config.display === 'static') {
          Manipulator__default.default.setDataAttribute(this._menu, 'popper', 'static'); // todo:v6 remove

          defaultBsPopperConfig.modifiers = [{
            name: 'applyStyles',
            enabled: false
          }];
        }
        return _objectSpread(_objectSpread({}, defaultBsPopperConfig), typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref3) {
        var key = _ref3.key,
          target = _ref3.target;
        var items = SelectorEngine__default.default.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(function (element) {
          return index.isVisible(element);
        });
        if (!items.length) {
          return;
        } // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY

        index.getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
      } // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Dropdown.getOrCreateInstance(this, config);
          if (typeof config !== 'string') {
            return;
          }
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config]();
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(event) {
        if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY) {
          return;
        }
        var openToggles = SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE_SHOWN);
        var _iterator3 = _createForOfIteratorHelper(openToggles),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var toggle = _step3.value;
            var context = Dropdown.getInstance(toggle);
            if (!context || context._config.autoClose === false) {
              continue;
            }
            var composedPath = event.composedPath();
            var isMenuTarget = composedPath.includes(context._menu);
            if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
              continue;
            } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu

            if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
              continue;
            }
            var relatedTarget = {
              relatedTarget: context._element
            };
            if (event.type === 'click') {
              relatedTarget.clickEvent = event;
            }
            context._completeHide(relatedTarget);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(event) {
        // If not an UP | DOWN | ESCAPE key => not a dropdown command
        // If input/textarea && if key is other than ESCAPE => not a dropdown command
        var isInput = /input|textarea/i.test(event.target.tagName);
        var isEscapeEvent = event.key === ESCAPE_KEY;
        var isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key);
        if (!isUpOrDownEvent && !isEscapeEvent) {
          return;
        }
        if (isInput && !isEscapeEvent) {
          return;
        }
        event.preventDefault(); // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/

        var getToggleButton = this.matches(SELECTOR_DATA_TOGGLE) ? this : SelectorEngine__default.default.prev(this, SELECTOR_DATA_TOGGLE)[0] || SelectorEngine__default.default.next(this, SELECTOR_DATA_TOGGLE)[0] || SelectorEngine__default.default.findOne(SELECTOR_DATA_TOGGLE, event.delegateTarget.parentNode);
        var instance = Dropdown.getOrCreateInstance(getToggleButton);
        if (isUpOrDownEvent) {
          event.stopPropagation();
          instance.show();
          instance._selectMenuItem(event);
          return;
        }
        if (instance._isShown()) {
          // else is escape and we check if it is shown
          event.stopPropagation();
          instance.hide();
          getToggleButton.focus();
        }
      }
    }]);
    return Dropdown;
  }(BaseComponent__default.default);
  /**
   * Data API implementation
   */
  EventHandler__default.default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler);
  EventHandler__default.default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus);
  EventHandler__default.default.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Dropdown);
  return Dropdown;
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(0), __webpack_require__(1), __webpack_require__(3), __webpack_require__(11), __webpack_require__(2), __webpack_require__(12), __webpack_require__(13), __webpack_require__(8)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1), __webpack_require__(3), __webpack_require__(11), __webpack_require__(2), __webpack_require__(12), __webpack_require__(13), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (index, EventHandler, SelectorEngine, ScrollBarHelper, BaseComponent, Backdrop, FocusTrap, componentFunctions) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var ScrollBarHelper__default = /*#__PURE__*/_interopDefaultLegacy(ScrollBarHelper);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  var Backdrop__default = /*#__PURE__*/_interopDefaultLegacy(Backdrop);
  var FocusTrap__default = /*#__PURE__*/_interopDefaultLegacy(FocusTrap);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var NAME = 'modal';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var DATA_API_KEY = '.data-api';
  var ESCAPE_KEY = 'Escape';
  var EVENT_HIDE = "hide".concat(EVENT_KEY);
  var EVENT_HIDE_PREVENTED = "hidePrevented".concat(EVENT_KEY);
  var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
  var EVENT_SHOW = "show".concat(EVENT_KEY);
  var EVENT_SHOWN = "shown".concat(EVENT_KEY);
  var EVENT_RESIZE = "resize".concat(EVENT_KEY);
  var EVENT_CLICK_DISMISS = "click.dismiss".concat(EVENT_KEY);
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss".concat(EVENT_KEY);
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(EVENT_KEY);
  var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY).concat(DATA_API_KEY);
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var OPEN_SELECTOR = '.modal.show';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]';
  var Default = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  var DefaultType = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };
  /**
   * Class definition
   */
  var Modal = /*#__PURE__*/function (_BaseComponent__defau) {
    _inherits(Modal, _BaseComponent__defau);
    var _super = _createSuper(Modal);
    function Modal(element, config) {
      var _this;
      _classCallCheck(this, Modal);
      _this = _super.call(this, element, config);
      _this._dialog = SelectorEngine__default.default.findOne(SELECTOR_DIALOG, _this._element);
      _this._backdrop = _this._initializeBackDrop();
      _this._focustrap = _this._initializeFocusTrap();
      _this._isShown = false;
      _this._isTransitioning = false;
      _this._scrollBar = new ScrollBarHelper__default.default();
      _this._addEventListeners();
      return _this;
    } // Getters
    _createClass(Modal, [{
      key: "toggle",
      value:
      // Public

      function toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
      }
    }, {
      key: "show",
      value: function show(relatedTarget) {
        var _this2 = this;
        if (this._isShown || this._isTransitioning) {
          return;
        }
        var showEvent = EventHandler__default.default.trigger(this._element, EVENT_SHOW, {
          relatedTarget: relatedTarget
        });
        if (showEvent.defaultPrevented) {
          return;
        }
        this._isShown = true;
        this._isTransitioning = true;
        this._scrollBar.hide();
        document.body.classList.add(CLASS_NAME_OPEN);
        this._adjustDialog();
        this._backdrop.show(function () {
          return _this2._showElement(relatedTarget);
        });
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this3 = this;
        if (!this._isShown || this._isTransitioning) {
          return;
        }
        var hideEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE);
        if (hideEvent.defaultPrevented) {
          return;
        }
        this._isShown = false;
        this._isTransitioning = true;
        this._focustrap.deactivate();
        this._element.classList.remove(CLASS_NAME_SHOW);
        this._queueCallback(function () {
          return _this3._hideModal();
        }, this._element, this._isAnimated());
      }
    }, {
      key: "dispose",
      value: function dispose() {
        for (var _i = 0, _arr = [window, this._dialog]; _i < _arr.length; _i++) {
          var htmlElement = _arr[_i];
          EventHandler__default.default.off(htmlElement, EVENT_KEY);
        }
        this._backdrop.dispose();
        this._focustrap.deactivate();
        _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      } // Private
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new Backdrop__default.default({
          isVisible: Boolean(this._config.backdrop),
          // 'static' option will be translated to true, and booleans will keep their value,
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new FocusTrap__default.default({
          trapElement: this._element
        });
      }
    }, {
      key: "_showElement",
      value: function _showElement(relatedTarget) {
        var _this4 = this;
        // try to append dynamic modal
        if (!document.body.contains(this._element)) {
          document.body.append(this._element);
        }
        this._element.style.display = 'block';
        this._element.removeAttribute('aria-hidden');
        this._element.setAttribute('aria-modal', true);
        this._element.setAttribute('role', 'dialog');
        this._element.scrollTop = 0;
        var modalBody = SelectorEngine__default.default.findOne(SELECTOR_MODAL_BODY, this._dialog);
        if (modalBody) {
          modalBody.scrollTop = 0;
        }
        index.reflow(this._element);
        this._element.classList.add(CLASS_NAME_SHOW);
        var transitionComplete = function transitionComplete() {
          if (_this4._config.focus) {
            _this4._focustrap.activate();
          }
          _this4._isTransitioning = false;
          EventHandler__default.default.trigger(_this4._element, EVENT_SHOWN, {
            relatedTarget: relatedTarget
          });
        };
        this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;
        EventHandler__default.default.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
          if (event.key !== ESCAPE_KEY) {
            return;
          }
          if (_this5._config.keyboard) {
            event.preventDefault();
            _this5.hide();
            return;
          }
          _this5._triggerBackdropTransition();
        });
        EventHandler__default.default.on(window, EVENT_RESIZE, function () {
          if (_this5._isShown && !_this5._isTransitioning) {
            _this5._adjustDialog();
          }
        });
        EventHandler__default.default.on(this._element, EVENT_MOUSEDOWN_DISMISS, function (event) {
          // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
          EventHandler__default.default.one(_this5._element, EVENT_CLICK_DISMISS, function (event2) {
            if (_this5._element !== event.target || _this5._element !== event2.target) {
              return;
            }
            if (_this5._config.backdrop === 'static') {
              _this5._triggerBackdropTransition();
              return;
            }
            if (_this5._config.backdrop) {
              _this5.hide();
            }
          });
        });
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this6 = this;
        this._element.style.display = 'none';
        this._element.setAttribute('aria-hidden', true);
        this._element.removeAttribute('aria-modal');
        this._element.removeAttribute('role');
        this._isTransitioning = false;
        this._backdrop.hide(function () {
          document.body.classList.remove(CLASS_NAME_OPEN);
          _this6._resetAdjustments();
          _this6._scrollBar.reset();
          EventHandler__default.default.trigger(_this6._element, EVENT_HIDDEN);
        });
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_FADE);
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this7 = this;
        var hideEvent = EventHandler__default.default.trigger(this._element, EVENT_HIDE_PREVENTED);
        if (hideEvent.defaultPrevented) {
          return;
        }
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        var initialOverflowY = this._element.style.overflowY; // return if the following background transition hasn't yet completed

        if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
          return;
        }
        if (!isModalOverflowing) {
          this._element.style.overflowY = 'hidden';
        }
        this._element.classList.add(CLASS_NAME_STATIC);
        this._queueCallback(function () {
          _this7._element.classList.remove(CLASS_NAME_STATIC);
          _this7._queueCallback(function () {
            _this7._element.style.overflowY = initialOverflowY;
          }, _this7._dialog);
        }, this._dialog);
        this._element.focus();
      }
      /**
       * The following methods are used to handle overflowing modals
       */
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        var scrollbarWidth = this._scrollBar.getWidth();
        var isBodyOverflowing = scrollbarWidth > 0;
        if (isBodyOverflowing && !isModalOverflowing) {
          var property = index.isRTL() ? 'paddingLeft' : 'paddingRight';
          this._element.style[property] = "".concat(scrollbarWidth, "px");
        }
        if (!isBodyOverflowing && isModalOverflowing) {
          var _property = index.isRTL() ? 'paddingRight' : 'paddingLeft';
          this._element.style[_property] = "".concat(scrollbarWidth, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = '';
        this._element.style.paddingRight = '';
      } // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config, relatedTarget) {
        return this.each(function () {
          var data = Modal.getOrCreateInstance(this, config);
          if (typeof config !== 'string') {
            return;
          }
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config](relatedTarget);
        });
      }
    }]);
    return Modal;
  }(BaseComponent__default.default);
  /**
   * Data API implementation
   */
  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    var _this8 = this;
    var target = index.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler__default.default.one(target, EVENT_SHOW, function (showEvent) {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }
      EventHandler__default.default.one(target, EVENT_HIDDEN, function () {
        if (index.isVisible(_this8)) {
          _this8.focus();
        }
      });
    }); // avoid conflict when clicking modal toggler while another one is open

    var alreadyOpen = SelectorEngine__default.default.findOne(OPEN_SELECTOR);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    var data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  componentFunctions.enableDismissTrigger(Modal);
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Modal);
  return Modal;
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap popover.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(0), __webpack_require__(14)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (index, Tooltip) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var Tooltip__default = /*#__PURE__*/_interopDefaultLegacy(Tooltip);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): popover.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var NAME = 'popover';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Default = _objectSpread(_objectSpread({}, Tooltip__default.default.Default), {}, {
    content: '',
    offset: [0, 8],
    placement: 'right',
    template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
    trigger: 'click'
  });
  var DefaultType = _objectSpread(_objectSpread({}, Tooltip__default.default.DefaultType), {}, {
    content: '(null|string|element|function)'
  });
  /**
   * Class definition
   */
  var Popover = /*#__PURE__*/function (_Tooltip__default$def) {
    _inherits(Popover, _Tooltip__default$def);
    var _super = _createSuper(Popover);
    function Popover() {
      _classCallCheck(this, Popover);
      return _super.apply(this, arguments);
    }
    _createClass(Popover, [{
      key: "_isWithContent",
      value:
      // Overrides

      function _isWithContent() {
        return this._getTitle() || this._getContent();
      } // Private
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        var _ref;
        return _ref = {}, _defineProperty(_ref, SELECTOR_TITLE, this._getTitle()), _defineProperty(_ref, SELECTOR_CONTENT, this._getContent()), _ref;
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      } // Static
    }], [{
      key: "Default",
      get:
      // Getters
      function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Popover.getOrCreateInstance(this, config);
          if (typeof config !== 'string') {
            return;
          }
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config]();
        });
      }
    }]);
    return Popover;
  }(Tooltip__default.default);
  /**
   * jQuery
   */
  index.defineJQueryPlugin(Popover);
  return Popover;
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap tab.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(0), __webpack_require__(1), __webpack_require__(3), __webpack_require__(2)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1), __webpack_require__(3), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (index, EventHandler, SelectorEngine, BaseComponent) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var NAME = 'tab';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var EVENT_HIDE = "hide".concat(EVENT_KEY);
  var EVENT_HIDDEN = "hidden".concat(EVENT_KEY);
  var EVENT_SHOW = "show".concat(EVENT_KEY);
  var EVENT_SHOWN = "shown".concat(EVENT_KEY);
  var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY);
  var EVENT_KEYDOWN = "keydown".concat(EVENT_KEY);
  var EVENT_LOAD_DATA_API = "load".concat(EVENT_KEY);
  var ARROW_LEFT_KEY = 'ArrowLeft';
  var ARROW_RIGHT_KEY = 'ArrowRight';
  var ARROW_UP_KEY = 'ArrowUp';
  var ARROW_DOWN_KEY = 'ArrowDown';
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  var CLASS_DROPDOWN = 'dropdown';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
  var NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)';
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = '.nav-item, .list-group-item';
  var SELECTOR_INNER = ".nav-link".concat(NOT_SELECTOR_DROPDOWN_TOGGLE, ", .list-group-item").concat(NOT_SELECTOR_DROPDOWN_TOGGLE, ", [role=\"tab\"]").concat(NOT_SELECTOR_DROPDOWN_TOGGLE);
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // todo:v6: could be only `tab`

  var SELECTOR_INNER_ELEM = "".concat(SELECTOR_INNER, ", ").concat(SELECTOR_DATA_TOGGLE);
  var SELECTOR_DATA_TOGGLE_ACTIVE = ".".concat(CLASS_NAME_ACTIVE, "[data-bs-toggle=\"tab\"], .").concat(CLASS_NAME_ACTIVE, "[data-bs-toggle=\"pill\"], .").concat(CLASS_NAME_ACTIVE, "[data-bs-toggle=\"list\"]");
  /**
   * Class definition
   */
  var Tab = /*#__PURE__*/function (_BaseComponent__defau) {
    _inherits(Tab, _BaseComponent__defau);
    var _super = _createSuper(Tab);
    function Tab(element) {
      var _this;
      _classCallCheck(this, Tab);
      _this = _super.call(this, element);
      _this._parent = _this._element.closest(SELECTOR_TAB_PANEL);
      if (!_this._parent) {
        return _possibleConstructorReturn(_this); // todo: should Throw exception on v6
        // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
      } // Set up initial aria attributes

      _this._setInitialAttributes(_this._parent, _this._getChildren());
      EventHandler__default.default.on(_this._element, EVENT_KEYDOWN, function (event) {
        return _this._keydown(event);
      });
      return _this;
    } // Getters
    _createClass(Tab, [{
      key: "show",
      value:
      // Public

      function show() {
        // Shows this elem and deactivate the active sibling if exists
        var innerElem = this._element;
        if (this._elemIsActive(innerElem)) {
          return;
        } // Search for active tab on same parent to deactivate it

        var active = this._getActiveElem();
        var hideEvent = active ? EventHandler__default.default.trigger(active, EVENT_HIDE, {
          relatedTarget: innerElem
        }) : null;
        var showEvent = EventHandler__default.default.trigger(innerElem, EVENT_SHOW, {
          relatedTarget: active
        });
        if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
          return;
        }
        this._deactivate(active, innerElem);
        this._activate(innerElem, active);
      } // Private
    }, {
      key: "_activate",
      value: function _activate(element, relatedElem) {
        var _this2 = this;
        if (!element) {
          return;
        }
        element.classList.add(CLASS_NAME_ACTIVE);
        this._activate(index.getElementFromSelector(element)); // Search and activate/show the proper section

        var complete = function complete() {
          if (element.getAttribute('role') !== 'tab') {
            element.classList.add(CLASS_NAME_SHOW);
            return;
          }
          element.removeAttribute('tabindex');
          element.setAttribute('aria-selected', true);
          _this2._toggleDropDown(element, true);
          EventHandler__default.default.trigger(element, EVENT_SHOWN, {
            relatedTarget: relatedElem
          });
        };
        this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE));
      }
    }, {
      key: "_deactivate",
      value: function _deactivate(element, relatedElem) {
        var _this3 = this;
        if (!element) {
          return;
        }
        element.classList.remove(CLASS_NAME_ACTIVE);
        element.blur();
        this._deactivate(index.getElementFromSelector(element)); // Search and deactivate the shown section too

        var complete = function complete() {
          if (element.getAttribute('role') !== 'tab') {
            element.classList.remove(CLASS_NAME_SHOW);
            return;
          }
          element.setAttribute('aria-selected', false);
          element.setAttribute('tabindex', '-1');
          _this3._toggleDropDown(element, false);
          EventHandler__default.default.trigger(element, EVENT_HIDDEN, {
            relatedTarget: relatedElem
          });
        };
        this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE));
      }
    }, {
      key: "_keydown",
      value: function _keydown(event) {
        if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
          return;
        }
        event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page

        event.preventDefault();
        var isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
        var nextActiveElement = index.getNextActiveElement(this._getChildren().filter(function (element) {
          return !index.isDisabled(element);
        }), event.target, isNext, true);
        if (nextActiveElement) {
          nextActiveElement.focus({
            preventScroll: true
          });
          Tab.getOrCreateInstance(nextActiveElement).show();
        }
      }
    }, {
      key: "_getChildren",
      value: function _getChildren() {
        // collection of inner elements
        return SelectorEngine__default.default.find(SELECTOR_INNER_ELEM, this._parent);
      }
    }, {
      key: "_getActiveElem",
      value: function _getActiveElem() {
        var _this4 = this;
        return this._getChildren().find(function (child) {
          return _this4._elemIsActive(child);
        }) || null;
      }
    }, {
      key: "_setInitialAttributes",
      value: function _setInitialAttributes(parent, children) {
        this._setAttributeIfNotExists(parent, 'role', 'tablist');
        var _iterator = _createForOfIteratorHelper(children),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var child = _step.value;
            this._setInitialAttributesOnChild(child);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }, {
      key: "_setInitialAttributesOnChild",
      value: function _setInitialAttributesOnChild(child) {
        child = this._getInnerElement(child);
        var isActive = this._elemIsActive(child);
        var outerElem = this._getOuterElement(child);
        child.setAttribute('aria-selected', isActive);
        if (outerElem !== child) {
          this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
        }
        if (!isActive) {
          child.setAttribute('tabindex', '-1');
        }
        this._setAttributeIfNotExists(child, 'role', 'tab'); // set attributes to the related panel too

        this._setInitialAttributesOnTargetPanel(child);
      }
    }, {
      key: "_setInitialAttributesOnTargetPanel",
      value: function _setInitialAttributesOnTargetPanel(child) {
        var target = index.getElementFromSelector(child);
        if (!target) {
          return;
        }
        this._setAttributeIfNotExists(target, 'role', 'tabpanel');
        if (child.id) {
          this._setAttributeIfNotExists(target, 'aria-labelledby', "#".concat(child.id));
        }
      }
    }, {
      key: "_toggleDropDown",
      value: function _toggleDropDown(element, open) {
        var outerElem = this._getOuterElement(element);
        if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
          return;
        }
        var toggle = function toggle(selector, className) {
          var element = SelectorEngine__default.default.findOne(selector, outerElem);
          if (element) {
            element.classList.toggle(className, open);
          }
        };
        toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
        toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW);
        outerElem.setAttribute('aria-expanded', open);
      }
    }, {
      key: "_setAttributeIfNotExists",
      value: function _setAttributeIfNotExists(element, attribute, value) {
        if (!element.hasAttribute(attribute)) {
          element.setAttribute(attribute, value);
        }
      }
    }, {
      key: "_elemIsActive",
      value: function _elemIsActive(elem) {
        return elem.classList.contains(CLASS_NAME_ACTIVE);
      } // Try to get the inner element (usually the .nav-link)
    }, {
      key: "_getInnerElement",
      value: function _getInnerElement(elem) {
        return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine__default.default.findOne(SELECTOR_INNER_ELEM, elem);
      } // Try to get the outer element (usually the .nav-item)
    }, {
      key: "_getOuterElement",
      value: function _getOuterElement(elem) {
        return elem.closest(SELECTOR_OUTER) || elem;
      } // Static
    }], [{
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Tab.getOrCreateInstance(this);
          if (typeof config !== 'string') {
            return;
          }
          if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }
          data[config]();
        });
      }
    }]);
    return Tab;
  }(BaseComponent__default.default);
  /**
   * Data API implementation
   */
  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (index.isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  /**
   * Initialize on focus
   */

  EventHandler__default.default.on(window, EVENT_LOAD_DATA_API, function () {
    var _iterator2 = _createForOfIteratorHelper(SelectorEngine__default.default.find(SELECTOR_DATA_TOGGLE_ACTIVE)),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var element = _step2.value;
        Tab.getOrCreateInstance(element);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Tab);
  return Tab;
});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work?
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
(function ($) {
  var $event = $.event,
    $special,
    resizeTimeout;
  $special = $event.special.debouncedresize = {
    setup: function setup() {
      $(this).on("resize", $special.handler);
    },
    teardown: function teardown() {
      $(this).off("resize", $special.handler);
    },
    handler: function handler(event, execAsap) {
      // Save the context
      var context = this,
        args = arguments,
        dispatch = function dispatch() {
          // set correct event type
          event.type = "debouncedresize";
          $event.dispatch.apply(context, args);
        };
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
    },
    threshold: 150
  };
})(jQuery);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * jQuery Mobile Menu (customized on line 33)
 * Turn unordered list menu into dropdown select menu
 * version 1.1(27-JULY-2013)
 * 
 * Built on top of the jQuery library
 *   http://jquery.com
 * 
 * Documentation
 * 	 http://github.com/mambows/mobilemenu
 */
(function ($) {
  $.fn.mobileMenu = function (options) {
    var defaults = {
        defaultText: 'Navigate to...',
        className: 'select-menu',
        subMenuClass: 'sub-menu',
        subMenuDash: '&ndash;'
      },
      settings = $.extend(defaults, options),
      el = $(this);
    this.each(function () {
      var $el = $(this),
        $select_menu;

      // ad class to submenu list
      $el.find('ul').addClass(settings.subMenuClass);

      // Create base menu
      var $select_menu = $('<select />', {
        'class': settings.className /* + ' ' + el.get(0).className */
      }).insertAfter($el);

      // Create default option
      $('<option />', {
        "value": '#',
        "text": settings.defaultText
      }).appendTo($select_menu);

      // Create select option from menu
      $el.find('a').each(function () {
        var $this = $(this),
          optText = '&nbsp;' + $this.text(),
          optSub = $this.parents('.' + settings.subMenuClass),
          len = optSub.length,
          dash;

        // if menu has sub menu
        if ($this.parents('ul').hasClass(settings.subMenuClass)) {
          dash = Array(len + 1).join(settings.subMenuDash);
          optText = dash + optText;
        }

        // Now build menu and append it
        $('<option />', {
          "value": this.href,
          "html": optText,
          "selected": this.href == window.location.href
        }).appendTo($select_menu);
      }); // End el.find('a').each

      // Change event on select element
      $select_menu.change(function () {
        var locations = $(this).val();
        if (locations !== '#') {
          window.location.href = $(this).val();
        }
        ;
      });
    }); // End this.each

    return this;
  };
})(jQuery);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/bootstrap/js/dist/alert.js
var dist_alert = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/bootstrap/js/dist/button.js
var dist_button = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/bootstrap/js/dist/collapse.js
var collapse = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/bootstrap/js/dist/dropdown.js
var dropdown = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/bootstrap/js/dist/modal.js
var modal = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/bootstrap/js/dist/popover.js
var popover = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/bootstrap/js/dist/carousel.js
var carousel = __webpack_require__(32);

// EXTERNAL MODULE: ./node_modules/bootstrap/js/dist/tab.js
var tab = __webpack_require__(23);

// EXTERNAL MODULE: ./js/lib/debouncedresize.js
var debouncedresize = __webpack_require__(24);

// EXTERNAL MODULE: ./js/components/mobile.js
var mobile = __webpack_require__(25);

// EXTERNAL MODULE: external "jQuery"
var external_jQuery_ = __webpack_require__(4);
var external_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_jQuery_);

// CONCATENATED MODULE: ./js/components/responsive.js

var current_width = window.innerWidth;
var min_width = 768;
var max_width_mobilexs = 576;
var responsive_mobile = current_width < min_width;
var mobilexs = current_width < max_width_mobilexs;
setConnection();
function swapChildren(obj1, obj2) {
  var temp = obj2.children().detach();
  obj2.empty().append(obj1.children().detach());
  obj1.append(temp);
}
function toggleMobileStyles() {
  if (responsive_mobile) {
    external_jQuery_default()("*[id^='_desktop_']").each(function (idx, el) {
      var target = external_jQuery_default()('#' + el.id.replace('_desktop_', '_mobile_'));
      if (target.length) {
        swapChildren(external_jQuery_default()(el), target);
      }
    });
    external_jQuery_default()('[data-collapse-hide-mobile]').collapse('hide');
  } else {
    external_jQuery_default()("*[id^='_mobile_']").each(function (idx, el) {
      var target = external_jQuery_default()('#' + el.id.replace('_mobile_', '_desktop_'));
      if (target.length) {
        swapChildren(external_jQuery_default()(el), target);
      }
    });
    external_jQuery_default()('[data-collapse-hide-mobile]').not('.show').collapse('show');
    external_jQuery_default()('[data-modal-hide-mobile].show').modal('hide');
  }
}

//test bandwidth
function setConnection() {
  var connection_support = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  var connection = "slow";
  //if browser not support connection api, we assume that connection is fast
  if (!connection_support || !/\slow-2g|2g|3g/.test(connection_support.effectiveType)) {
    connection = "fast";
  }
  var htmltag = document.getElementsByTagName('html')[0];
  htmltag.className += ' js-connection-' + connection;
}
external_jQuery_default()(window).on('debouncedresize', function () {
  var _cw = current_width;
  var _mw = min_width;
  var _w = window.innerWidth;
  var _toggle = _cw >= _mw && _w < _mw || _cw < _mw && _w >= _mw;
  current_width = _w;
  responsive_mobile = current_width < min_width;
  mobilexs = current_width < max_width_mobilexs;
  if (_toggle) {
    toggleMobileStyles();
  }
});
external_jQuery_default()(document).ready(function () {
  if (responsive_mobile) {
    toggleMobileStyles();
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap/js/src/util/index.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000;
var TRANSITION_END = 'transitionend';

// Shout-out Angus Croll (https://goo.gl/pxwQGp)
var toType = function toType(object) {
  if (object === null || object === undefined) {
    return "".concat(object);
  }
  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};

/**
 * Public Util API
 */

var getUID = function getUID(prefix) {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));
  return prefix;
};
var getSelector = function getSelector(element) {
  var selector = element.getAttribute('data-bs-target');
  if (!selector || selector === '#') {
    var hrefAttribute = element.getAttribute('href');

    // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273
    if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
      return null;
    }

    // Just in case some CMS puts out a full URL with the anchor appended
    if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
      hrefAttribute = "#".concat(hrefAttribute.split('#')[1]);
    }
    selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
  }
  return selector;
};
var getSelectorFromElement = function getSelectorFromElement(element) {
  var selector = getSelector(element);
  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }
  return null;
};
var getElementFromSelector = function getElementFromSelector(element) {
  var selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};
var getTransitionDurationFromElement = function getTransitionDurationFromElement(element) {
  if (!element) {
    return 0;
  }

  // Get transition-duration of the element
  var _window$getComputedSt = window.getComputedStyle(element),
    transitionDuration = _window$getComputedSt.transitionDuration,
    transitionDelay = _window$getComputedSt.transitionDelay;
  var floatTransitionDuration = Number.parseFloat(transitionDuration);
  var floatTransitionDelay = Number.parseFloat(transitionDelay);

  // Return 0 if element or transition duration is not found
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }

  // If multiple durations are defined, take the first
  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
var triggerTransitionEnd = function triggerTransitionEnd(element) {
  element.dispatchEvent(new Event(TRANSITION_END));
};
var isElement = function isElement(object) {
  if (!object || _typeof(object) !== 'object') {
    return false;
  }
  if (typeof object.jquery !== 'undefined') {
    object = object[0];
  }
  return typeof object.nodeType !== 'undefined';
};
var getElement = function getElement(object) {
  // it's a jQuery object or a node element
  if (isElement(object)) {
    return object.jquery ? object[0] : object;
  }
  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(object);
  }
  return null;
};
var util_isVisible = function isVisible(element) {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false;
  }
  var elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
  // Handle `details` element as its content may falsie appear visible when it is closed
  var closedDetails = element.closest('details:not([open])');
  if (!closedDetails) {
    return elementIsVisible;
  }
  if (closedDetails !== element) {
    var summary = element.closest('summary');
    if (summary && summary.parentNode !== closedDetails) {
      return false;
    }
    if (summary === null) {
      return false;
    }
  }
  return elementIsVisible;
};
var isDisabled = function isDisabled(element) {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }
  if (element.classList.contains('disabled')) {
    return true;
  }
  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }
  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};
var findShadowRoot = function findShadowRoot(element) {
  if (!document.documentElement.attachShadow) {
    return null;
  }

  // Can find the shadow root otherwise it'll return the document
  if (typeof element.getRootNode === 'function') {
    var root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }
  if (element instanceof ShadowRoot) {
    return element;
  }

  // when we don't find a shadow root
  if (!element.parentNode) {
    return null;
  }
  return findShadowRoot(element.parentNode);
};
var noop = function noop() {};

/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */
var reflow = function reflow(element) {
  element.offsetHeight; // eslint-disable-line no-unused-expressions
};

var getjQuery = function getjQuery() {
  if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return window.jQuery;
  }
  return null;
};
var DOMContentLoadedCallbacks = [];
var onDOMContentLoaded = function onDOMContentLoaded(callback) {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', function () {
        for (var _i = 0, _DOMContentLoadedCall = DOMContentLoadedCallbacks; _i < _DOMContentLoadedCall.length; _i++) {
          var _callback = _DOMContentLoadedCall[_i];
          _callback();
        }
      });
    }
    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};
var isRTL = function isRTL() {
  return document.documentElement.dir === 'rtl';
};
var defineJQueryPlugin = function defineJQueryPlugin(plugin) {
  onDOMContentLoaded(function () {
    var $ = getjQuery();
    /* istanbul ignore if */
    if ($) {
      var name = plugin.NAME;
      var JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;
      $.fn[name].noConflict = function () {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};
var execute = function execute(callback) {
  if (typeof callback === 'function') {
    callback();
  }
};
var executeAfterTransition = function executeAfterTransition(callback, transitionElement) {
  var waitForTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (!waitForTransition) {
    execute(callback);
    return;
  }
  var durationPadding = 5;
  var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  var called = false;
  var handler = function handler(_ref) {
    var target = _ref.target;
    if (target !== transitionElement) {
      return;
    }
    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };
  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(function () {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};

/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */
var getNextActiveElement = function getNextActiveElement(list, activeElement, shouldGetNext, isCycleAllowed) {
  var listLength = list.length;
  var index = list.indexOf(activeElement);

  // if the element does not exist in the list return an element
  // depending on the direction and if cycle is allowed
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
  }
  index += shouldGetNext ? 1 : -1;
  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }
  return list[Math.max(0, Math.min(index, listLength - 1))];
};

// CONCATENATED MODULE: ./node_modules/bootstrap/js/src/dom/selector-engine.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */



/**
 * Constants
 */

var SelectorEngine = {
  find: function find(selector) {
    var _ref;
    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return (_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(element, selector)));
  },
  findOne: function findOne(selector) {
    var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return Element.prototype.querySelector.call(element, selector);
  },
  children: function children(element, selector) {
    var _ref2;
    return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(element.children)).filter(function (child) {
      return child.matches(selector);
    });
  },
  parents: function parents(element, selector) {
    var parents = [];
    var ancestor = element.parentNode.closest(selector);
    while (ancestor) {
      parents.push(ancestor);
      ancestor = ancestor.parentNode.closest(selector);
    }
    return parents;
  },
  prev: function prev(element, selector) {
    var previous = element.previousElementSibling;
    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }
      previous = previous.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next: function next(element, selector) {
    var next = element.nextElementSibling;
    while (next) {
      if (next.matches(selector)) {
        return [next];
      }
      next = next.nextElementSibling;
    }
    return [];
  },
  focusableChildren: function focusableChildren(element) {
    var focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(function (selector) {
      return "".concat(selector, ":not([tabindex^=\"-\"])");
    }).join(',');
    return this.find(focusables, element).filter(function (el) {
      return !isDisabled(el) && util_isVisible(el);
    });
  }
};
/* harmony default export */ var selector_engine = (SelectorEngine);
// CONCATENATED MODULE: ./node_modules/bootstrap/js/src/dom/manipulator.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = manipulator_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function manipulator_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return manipulator_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return manipulator_arrayLikeToArray(o, minLen); }
function manipulator_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(value) {
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  if (value === Number(value).toString()) {
    return Number(value);
  }
  if (value === '' || value === 'null') {
    return null;
  }
  if (typeof value !== 'string') {
    return value;
  }
  try {
    return JSON.parse(decodeURIComponent(value));
  } catch (_unused) {
    return value;
  }
}
function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, function (chr) {
    return "-".concat(chr.toLowerCase());
  });
}
var Manipulator = {
  setDataAttribute: function setDataAttribute(element, key, value) {
    element.setAttribute("data-bs-".concat(normalizeDataKey(key)), value);
  },
  removeDataAttribute: function removeDataAttribute(element, key) {
    element.removeAttribute("data-bs-".concat(normalizeDataKey(key)));
  },
  getDataAttributes: function getDataAttributes(element) {
    if (!element) {
      return {};
    }
    var attributes = {};
    var bsKeys = Object.keys(element.dataset).filter(function (key) {
      return key.startsWith('bs') && !key.startsWith('bsConfig');
    });
    var _iterator = _createForOfIteratorHelper(bsKeys),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        var pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return attributes;
  },
  getDataAttribute: function getDataAttribute(element, key) {
    return normalizeData(element.getAttribute("data-bs-".concat(normalizeDataKey(key))));
  }
};
/* harmony default export */ var manipulator = (Manipulator);
// CONCATENATED MODULE: ./node_modules/bootstrap/js/src/util/scrollbar.js
function scrollbar_typeof(obj) { "@babel/helpers - typeof"; return scrollbar_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, scrollbar_typeof(obj); }
function scrollbar_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = scrollbar_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function scrollbar_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return scrollbar_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return scrollbar_arrayLikeToArray(o, minLen); }
function scrollbar_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return scrollbar_typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (scrollbar_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (scrollbar_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */





/**
 * Constants
 */

var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
var SELECTOR_STICKY_CONTENT = '.sticky-top';
var PROPERTY_PADDING = 'padding-right';
var PROPERTY_MARGIN = 'margin-right';

/**
 * Class definition
 */
var scrollbar_ScrollBarHelper = /*#__PURE__*/function () {
  function ScrollBarHelper() {
    _classCallCheck(this, ScrollBarHelper);
    this._element = document.body;
  }

  // Public
  _createClass(ScrollBarHelper, [{
    key: "getWidth",
    value: function getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      var documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
  }, {
    key: "hide",
    value: function hide() {
      var width = this.getWidth();
      this._disableOverFlow();
      // give padding to element to balance the hidden scrollbar width
      this._setElementAttributes(this._element, PROPERTY_PADDING, function (calculatedValue) {
        return calculatedValue + width;
      });
      // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, function (calculatedValue) {
        return calculatedValue + width;
      });
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, function (calculatedValue) {
        return calculatedValue - width;
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this._resetElementAttributes(this._element, 'overflow');
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
  }, {
    key: "isOverflowing",
    value: function isOverflowing() {
      return this.getWidth() > 0;
    }

    // Private
  }, {
    key: "_disableOverFlow",
    value: function _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');
      this._element.style.overflow = 'hidden';
    }
  }, {
    key: "_setElementAttributes",
    value: function _setElementAttributes(selector, styleProperty, callback) {
      var _this = this;
      var scrollbarWidth = this.getWidth();
      var manipulationCallBack = function manipulationCallBack(element) {
        if (element !== _this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        _this._saveInitialAttribute(element, styleProperty);
        var calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, "".concat(callback(Number.parseFloat(calculatedValue)), "px"));
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
  }, {
    key: "_saveInitialAttribute",
    value: function _saveInitialAttribute(element, styleProperty) {
      var actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
  }, {
    key: "_resetElementAttributes",
    value: function _resetElementAttributes(selector, styleProperty) {
      var manipulationCallBack = function manipulationCallBack(element) {
        var value = manipulator.getDataAttribute(element, styleProperty);
        // We only want to remove the property if the value is `null`; the value can also be zero
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
  }, {
    key: "_applyManipulationCallback",
    value: function _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
        return;
      }
      var _iterator = scrollbar_createForOfIteratorHelper(selector_engine.find(selector, this._element)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var sel = _step.value;
          callBack(sel);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
  return ScrollBarHelper;
}();
/* harmony default export */ var scrollbar = (scrollbar_ScrollBarHelper);
// CONCATENATED MODULE: ./node_modules/bootstrap/js/src/dom/event-handler.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || event_handler_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function event_handler_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = event_handler_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function event_handler_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return event_handler_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return event_handler_arrayLikeToArray(o, minLen); }
function event_handler_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */



/**
 * Constants
 */

var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
var stripNameRegex = /\..*/;
var stripUidRegex = /::\d+$/;
var eventRegistry = {}; // Events storage
var uidEvent = 1;
var customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
var nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

/**
 * Private methods
 */

function makeEventUid(element, uid) {
  return uid && "".concat(uid, "::").concat(uidEvent++) || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
  var uid = makeEventUid(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}
function bootstrapHandler(element, fn) {
  return function handler(event) {
    hydrateObj(event, {
      delegateTarget: element
    });
    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }
    return fn.apply(element, [event]);
  };
}
function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    var domElements = element.querySelectorAll(selector);
    for (var target = event.target; target && target !== this; target = target.parentNode) {
      var _iterator = event_handler_createForOfIteratorHelper(domElements),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var domElement = _step.value;
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  };
}
function findHandler(events, callable) {
  var delegationSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return Object.values(events).find(function (event) {
    return event.callable === callable && event.delegationSelector === delegationSelector;
  });
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  var isDelegated = typeof handler === 'string';
  // todo: tooltip passes `false` instead of selector, so we need to check
  var callable = isDelegated ? delegationFunction : handler || delegationFunction;
  var typeEvent = getTypeEvent(originalTypeEvent);
  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent;
  }
  return [isDelegated, callable, typeEvent];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }
  var _normalizeParameters = normalizeParameters(originalTypeEvent, handler, delegationFunction),
    _normalizeParameters2 = _slicedToArray(_normalizeParameters, 3),
    isDelegated = _normalizeParameters2[0],
    callable = _normalizeParameters2[1],
    typeEvent = _normalizeParameters2[2];

  // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does
  if (originalTypeEvent in customEvents) {
    var wrapFunction = function wrapFunction(fn) {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };
    callable = wrapFunction(callable);
  }
  var events = getElementEvents(element);
  var handlers = events[typeEvent] || (events[typeEvent] = {});
  var previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff;
    return;
  }
  var uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
  var fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
  fn.delegationSelector = isDelegated ? handler : null;
  fn.callable = callable;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  var fn = findHandler(events[typeEvent], handler, delegationSelector);
  if (!fn) {
    return;
  }
  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  var storeElementEvent = events[typeEvent] || {};
  for (var _i2 = 0, _Object$keys = Object.keys(storeElementEvent); _i2 < _Object$keys.length; _i2++) {
    var handlerKey = _Object$keys[_i2];
    if (handlerKey.includes(namespace)) {
      var event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
  }
}
function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '');
  return customEvents[event] || event;
}
var EventHandler = {
  on: function on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false);
  },
  one: function one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true);
  },
  off: function off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    var _normalizeParameters3 = normalizeParameters(originalTypeEvent, handler, delegationFunction),
      _normalizeParameters4 = _slicedToArray(_normalizeParameters3, 3),
      isDelegated = _normalizeParameters4[0],
      callable = _normalizeParameters4[1],
      typeEvent = _normalizeParameters4[2];
    var inNamespace = typeEvent !== originalTypeEvent;
    var events = getElementEvents(element);
    var storeElementEvent = events[typeEvent] || {};
    var isNamespace = originalTypeEvent.startsWith('.');
    if (typeof callable !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!Object.keys(storeElementEvent).length) {
        return;
      }
      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
      return;
    }
    if (isNamespace) {
      for (var _i3 = 0, _Object$keys2 = Object.keys(events); _i3 < _Object$keys2.length; _i3++) {
        var elementEvent = _Object$keys2[_i3];
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      }
    }
    for (var _i4 = 0, _Object$keys3 = Object.keys(storeElementEvent); _i4 < _Object$keys3.length; _i4++) {
      var keyHandlers = _Object$keys3[_i4];
      var handlerKey = keyHandlers.replace(stripUidRegex, '');
      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        var event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  },
  trigger: function trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }
    var $ = getjQuery();
    var typeEvent = getTypeEvent(event);
    var inNamespace = event !== typeEvent;
    var jQueryEvent = null;
    var bubbles = true;
    var nativeDispatch = true;
    var defaultPrevented = false;
    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }
    var evt = new Event(event, {
      bubbles: bubbles,
      cancelable: true
    });
    evt = hydrateObj(evt, args);
    if (defaultPrevented) {
      evt.preventDefault();
    }
    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }
    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault();
    }
    return evt;
  }
};
function hydrateObj(obj, meta) {
  var _loop = function _loop() {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i5], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    try {
      obj[key] = value;
    } catch (_unused) {
      Object.defineProperty(obj, key, {
        configurable: true,
        get: function get() {
          return value;
        }
      });
    }
  };
  for (var _i5 = 0, _Object$entries = Object.entries(meta || {}); _i5 < _Object$entries.length; _i5++) {
    _loop();
  }
  return obj;
}
/* harmony default export */ var event_handler = (EventHandler);
// CONCATENATED MODULE: ./node_modules/bootstrap/js/src/dom/data.js
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

var elementMap = new Map();
/* harmony default export */ var dom_data = ({
  set: function set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }
    var instanceMap = elementMap.get(element);

    // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used
    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(instanceMap.keys())[0], "."));
      return;
    }
    instanceMap.set(key, instance);
  },
  get: function get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }
    return null;
  },
  remove: function remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }
    var instanceMap = elementMap.get(element);
    instanceMap.delete(key);

    // free up element references if there are no instances left for an element
    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap/js/src/util/config.js
function config_typeof(obj) { "@babel/helpers - typeof"; return config_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, config_typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = config_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function config_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function config_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, config_toPropertyKey(descriptor.key), descriptor); } }
function config_createClass(Constructor, protoProps, staticProps) { if (protoProps) config_defineProperties(Constructor.prototype, protoProps); if (staticProps) config_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function config_toPropertyKey(arg) { var key = config_toPrimitive(arg, "string"); return config_typeof(key) === "symbol" ? key : String(key); }
function config_toPrimitive(input, hint) { if (config_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (config_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */




/**
 * Class definition
 */
var config_Config = /*#__PURE__*/function () {
  function Config() {
    config_classCallCheck(this, Config);
  }
  config_createClass(Config, [{
    key: "_getConfig",
    value: function _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
  }, {
    key: "_configAfterMerge",
    value: function _configAfterMerge(config) {
      return config;
    }
  }, {
    key: "_mergeConfigObj",
    value: function _mergeConfigObj(config, element) {
      var jsonConfig = isElement(element) ? manipulator.getDataAttribute(element, 'config') : {}; // try to parse

      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), config_typeof(jsonConfig) === 'object' ? jsonConfig : {}), isElement(element) ? manipulator.getDataAttributes(element) : {}), config_typeof(config) === 'object' ? config : {});
    }
  }, {
    key: "_typeCheckConfig",
    value: function _typeCheckConfig(config) {
      var configTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;
      for (var _i = 0, _Object$keys = Object.keys(configTypes); _i < _Object$keys.length; _i++) {
        var property = _Object$keys[_i];
        var expectedTypes = configTypes[property];
        var value = config[property];
        var valueType = isElement(value) ? 'element' : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(property, "\" provided type \"").concat(valueType, "\" but expected type \"").concat(expectedTypes, "\"."));
        }
      }
    }
  }], [{
    key: "Default",
    get:
    // Getters
    function get() {
      return {};
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return {};
    }
  }, {
    key: "NAME",
    get: function get() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
  }]);
  return Config;
}();
/* harmony default export */ var util_config = (config_Config);
// CONCATENATED MODULE: ./node_modules/bootstrap/js/src/base-component.js
function base_component_typeof(obj) { "@babel/helpers - typeof"; return base_component_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, base_component_typeof(obj); }
function base_component_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = base_component_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function base_component_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return base_component_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return base_component_arrayLikeToArray(o, minLen); }
function base_component_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function base_component_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function base_component_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, base_component_toPropertyKey(descriptor.key), descriptor); } }
function base_component_createClass(Constructor, protoProps, staticProps) { if (protoProps) base_component_defineProperties(Constructor.prototype, protoProps); if (staticProps) base_component_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function base_component_toPropertyKey(arg) { var key = base_component_toPrimitive(arg, "string"); return base_component_typeof(key) === "symbol" ? key : String(key); }
function base_component_toPrimitive(input, hint) { if (base_component_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (base_component_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (base_component_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */






/**
 * Constants
 */

var VERSION = '5.2.3';

/**
 * Class definition
 */
var base_component_BaseComponent = /*#__PURE__*/function (_Config) {
  _inherits(BaseComponent, _Config);
  var _super = _createSuper(BaseComponent);
  function BaseComponent(element, config) {
    var _this;
    base_component_classCallCheck(this, BaseComponent);
    _this = _super.call(this);
    element = getElement(element);
    if (!element) {
      return _possibleConstructorReturn(_this);
    }
    _this._element = element;
    _this._config = _this._getConfig(config);
    dom_data.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this));
    return _this;
  }

  // Public
  base_component_createClass(BaseComponent, [{
    key: "dispose",
    value: function dispose() {
      dom_data.remove(this._element, this.constructor.DATA_KEY);
      event_handler.off(this._element, this.constructor.EVENT_KEY);
      var _iterator = base_component_createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var propertyName = _step.value;
          this[propertyName] = null;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "_queueCallback",
    value: function _queueCallback(callback, element) {
      var isAnimated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      executeAfterTransition(callback, element, isAnimated);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }

    // Static
  }], [{
    key: "getInstance",
    value: function getInstance(element) {
      return dom_data.get(getElement(element), this.DATA_KEY);
    }
  }, {
    key: "getOrCreateInstance",
    value: function getOrCreateInstance(element) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.getInstance(element) || new this(element, base_component_typeof(config) === 'object' ? config : null);
    }
  }, {
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return "bs.".concat(this.NAME);
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return ".".concat(this.DATA_KEY);
    }
  }, {
    key: "eventName",
    value: function eventName(name) {
      return "".concat(name).concat(this.EVENT_KEY);
    }
  }]);
  return BaseComponent;
}(util_config);
/* harmony default export */ var base_component = (base_component_BaseComponent);
// CONCATENATED MODULE: ./node_modules/bootstrap/js/src/util/backdrop.js
function backdrop_typeof(obj) { "@babel/helpers - typeof"; return backdrop_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, backdrop_typeof(obj); }
function backdrop_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function backdrop_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, backdrop_toPropertyKey(descriptor.key), descriptor); } }
function backdrop_createClass(Constructor, protoProps, staticProps) { if (protoProps) backdrop_defineProperties(Constructor.prototype, protoProps); if (staticProps) backdrop_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function backdrop_toPropertyKey(arg) { var key = backdrop_toPrimitive(arg, "string"); return backdrop_typeof(key) === "symbol" ? key : String(key); }
function backdrop_toPrimitive(input, hint) { if (backdrop_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (backdrop_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function backdrop_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) backdrop_setPrototypeOf(subClass, superClass); }
function backdrop_setPrototypeOf(o, p) { backdrop_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return backdrop_setPrototypeOf(o, p); }
function backdrop_createSuper(Derived) { var hasNativeReflectConstruct = backdrop_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = backdrop_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = backdrop_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return backdrop_possibleConstructorReturn(this, result); }; }
function backdrop_possibleConstructorReturn(self, call) { if (call && (backdrop_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return backdrop_assertThisInitialized(self); }
function backdrop_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function backdrop_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function backdrop_getPrototypeOf(o) { backdrop_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return backdrop_getPrototypeOf(o); }
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */





/**
 * Constants
 */

var NAME = 'backdrop';
var CLASS_NAME_FADE = 'fade';
var CLASS_NAME_SHOW = 'show';
var EVENT_MOUSEDOWN = "mousedown.bs.".concat(NAME);
var Default = {
  className: 'modal-backdrop',
  clickCallback: null,
  isAnimated: false,
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: 'body' // give the choice to place backdrop under different elements
};

var DefaultType = {
  className: 'string',
  clickCallback: '(function|null)',
  isAnimated: 'boolean',
  isVisible: 'boolean',
  rootElement: '(element|string)'
};

/**
 * Class definition
 */
var backdrop_Backdrop = /*#__PURE__*/function (_Config) {
  backdrop_inherits(Backdrop, _Config);
  var _super = backdrop_createSuper(Backdrop);
  function Backdrop(config) {
    var _this;
    backdrop_classCallCheck(this, Backdrop);
    _this = _super.call(this);
    _this._config = _this._getConfig(config);
    _this._isAppended = false;
    _this._element = null;
    return _this;
  }

  // Getters
  backdrop_createClass(Backdrop, [{
    key: "show",
    value:
    // Public
    function show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      var element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW);
      this._emulateAnimation(function () {
        execute(callback);
      });
    }
  }, {
    key: "hide",
    value: function hide(callback) {
      var _this2 = this;
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW);
      this._emulateAnimation(function () {
        _this2.dispose();
        execute(callback);
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      if (!this._isAppended) {
        return;
      }
      event_handler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }

    // Private
  }, {
    key: "_getElement",
    value: function _getElement() {
      if (!this._element) {
        var backdrop = document.createElement('div');
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE);
        }
        this._element = backdrop;
      }
      return this._element;
    }
  }, {
    key: "_configAfterMerge",
    value: function _configAfterMerge(config) {
      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = getElement(config.rootElement);
      return config;
    }
  }, {
    key: "_append",
    value: function _append() {
      var _this3 = this;
      if (this._isAppended) {
        return;
      }
      var element = this._getElement();
      this._config.rootElement.append(element);
      event_handler.on(element, EVENT_MOUSEDOWN, function () {
        execute(_this3._config.clickCallback);
      });
      this._isAppended = true;
    }
  }, {
    key: "_emulateAnimation",
    value: function _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  }], [{
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME;
    }
  }]);
  return Backdrop;
}(util_config);
/* harmony default export */ var backdrop = (backdrop_Backdrop);
// CONCATENATED MODULE: ./node_modules/bootstrap/js/src/util/focustrap.js
function focustrap_typeof(obj) { "@babel/helpers - typeof"; return focustrap_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, focustrap_typeof(obj); }
function focustrap_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function focustrap_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, focustrap_toPropertyKey(descriptor.key), descriptor); } }
function focustrap_createClass(Constructor, protoProps, staticProps) { if (protoProps) focustrap_defineProperties(Constructor.prototype, protoProps); if (staticProps) focustrap_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function focustrap_toPropertyKey(arg) { var key = focustrap_toPrimitive(arg, "string"); return focustrap_typeof(key) === "symbol" ? key : String(key); }
function focustrap_toPrimitive(input, hint) { if (focustrap_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (focustrap_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function focustrap_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) focustrap_setPrototypeOf(subClass, superClass); }
function focustrap_setPrototypeOf(o, p) { focustrap_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return focustrap_setPrototypeOf(o, p); }
function focustrap_createSuper(Derived) { var hasNativeReflectConstruct = focustrap_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = focustrap_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = focustrap_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return focustrap_possibleConstructorReturn(this, result); }; }
function focustrap_possibleConstructorReturn(self, call) { if (call && (focustrap_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return focustrap_assertThisInitialized(self); }
function focustrap_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function focustrap_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function focustrap_getPrototypeOf(o) { focustrap_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return focustrap_getPrototypeOf(o); }
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */





/**
 * Constants
 */

var focustrap_NAME = 'focustrap';
var DATA_KEY = 'bs.focustrap';
var EVENT_KEY = ".".concat(DATA_KEY);
var EVENT_FOCUSIN = "focusin".concat(EVENT_KEY);
var EVENT_KEYDOWN_TAB = "keydown.tab".concat(EVENT_KEY);
var TAB_KEY = 'Tab';
var TAB_NAV_FORWARD = 'forward';
var TAB_NAV_BACKWARD = 'backward';
var focustrap_Default = {
  autofocus: true,
  trapElement: null // The element to trap focus inside of
};

var focustrap_DefaultType = {
  autofocus: 'boolean',
  trapElement: 'element'
};

/**
 * Class definition
 */
var focustrap_FocusTrap = /*#__PURE__*/function (_Config) {
  focustrap_inherits(FocusTrap, _Config);
  var _super = focustrap_createSuper(FocusTrap);
  function FocusTrap(config) {
    var _this;
    focustrap_classCallCheck(this, FocusTrap);
    _this = _super.call(this);
    _this._config = _this._getConfig(config);
    _this._isActive = false;
    _this._lastTabNavDirection = null;
    return _this;
  }

  // Getters
  focustrap_createClass(FocusTrap, [{
    key: "activate",
    value:
    // Public
    function activate() {
      var _this2 = this;
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      event_handler.off(document, EVENT_KEY); // guard against infinite focus loop
      event_handler.on(document, EVENT_FOCUSIN, function (event) {
        return _this2._handleFocusin(event);
      });
      event_handler.on(document, EVENT_KEYDOWN_TAB, function (event) {
        return _this2._handleKeydown(event);
      });
      this._isActive = true;
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      event_handler.off(document, EVENT_KEY);
    }

    // Private
  }, {
    key: "_handleFocusin",
    value: function _handleFocusin(event) {
      var trapElement = this._config.trapElement;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      var elements = selector_engine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  }], [{
    key: "Default",
    get: function get() {
      return focustrap_Default;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return focustrap_DefaultType;
    }
  }, {
    key: "NAME",
    get: function get() {
      return focustrap_NAME;
    }
  }]);
  return FocusTrap;
}(util_config);
/* harmony default export */ var focustrap = (focustrap_FocusTrap);
// CONCATENATED MODULE: ./node_modules/bootstrap/js/src/util/component-functions.js
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */



var component_functions_enableDismissTrigger = function enableDismissTrigger(component) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hide';
  var clickEvent = "click.dismiss".concat(component.EVENT_KEY);
  var name = component.NAME;
  event_handler.on(document, clickEvent, "[data-bs-dismiss=\"".concat(name, "\"]"), function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    var target = getElementFromSelector(this) || this.closest(".".concat(name));
    var instance = component.getOrCreateInstance(target);

    // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
    instance[method]();
  });
};

// CONCATENATED MODULE: ./node_modules/bootstrap/js/src/offcanvas.js
function offcanvas_typeof(obj) { "@babel/helpers - typeof"; return offcanvas_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, offcanvas_typeof(obj); }
function offcanvas_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = offcanvas_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function offcanvas_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return offcanvas_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return offcanvas_arrayLikeToArray(o, minLen); }
function offcanvas_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function offcanvas_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function offcanvas_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, offcanvas_toPropertyKey(descriptor.key), descriptor); } }
function offcanvas_createClass(Constructor, protoProps, staticProps) { if (protoProps) offcanvas_defineProperties(Constructor.prototype, protoProps); if (staticProps) offcanvas_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function offcanvas_toPropertyKey(arg) { var key = offcanvas_toPrimitive(arg, "string"); return offcanvas_typeof(key) === "symbol" ? key : String(key); }
function offcanvas_toPrimitive(input, hint) { if (offcanvas_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (offcanvas_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = offcanvas_getPrototypeOf(object); if (object === null) break; } return object; }
function offcanvas_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) offcanvas_setPrototypeOf(subClass, superClass); }
function offcanvas_setPrototypeOf(o, p) { offcanvas_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return offcanvas_setPrototypeOf(o, p); }
function offcanvas_createSuper(Derived) { var hasNativeReflectConstruct = offcanvas_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = offcanvas_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = offcanvas_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return offcanvas_possibleConstructorReturn(this, result); }; }
function offcanvas_possibleConstructorReturn(self, call) { if (call && (offcanvas_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return offcanvas_assertThisInitialized(self); }
function offcanvas_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function offcanvas_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function offcanvas_getPrototypeOf(o) { offcanvas_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return offcanvas_getPrototypeOf(o); }
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */










/**
 * Constants
 */

var offcanvas_NAME = 'offcanvas';
var offcanvas_DATA_KEY = 'bs.offcanvas';
var offcanvas_EVENT_KEY = ".".concat(offcanvas_DATA_KEY);
var DATA_API_KEY = '.data-api';
var EVENT_LOAD_DATA_API = "load".concat(offcanvas_EVENT_KEY).concat(DATA_API_KEY);
var ESCAPE_KEY = 'Escape';
var offcanvas_CLASS_NAME_SHOW = 'show';
var CLASS_NAME_SHOWING = 'showing';
var CLASS_NAME_HIDING = 'hiding';
var CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
var OPEN_SELECTOR = '.offcanvas.show';
var EVENT_SHOW = "show".concat(offcanvas_EVENT_KEY);
var EVENT_SHOWN = "shown".concat(offcanvas_EVENT_KEY);
var EVENT_HIDE = "hide".concat(offcanvas_EVENT_KEY);
var EVENT_HIDE_PREVENTED = "hidePrevented".concat(offcanvas_EVENT_KEY);
var EVENT_HIDDEN = "hidden".concat(offcanvas_EVENT_KEY);
var EVENT_RESIZE = "resize".concat(offcanvas_EVENT_KEY);
var EVENT_CLICK_DATA_API = "click".concat(offcanvas_EVENT_KEY).concat(DATA_API_KEY);
var EVENT_KEYDOWN_DISMISS = "keydown.dismiss".concat(offcanvas_EVENT_KEY);
var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="offcanvas"]';
var offcanvas_Default = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
var offcanvas_DefaultType = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  scroll: 'boolean'
};

/**
 * Class definition
 */
var offcanvas_Offcanvas = /*#__PURE__*/function (_BaseComponent) {
  offcanvas_inherits(Offcanvas, _BaseComponent);
  var _super = offcanvas_createSuper(Offcanvas);
  function Offcanvas(element, config) {
    var _this;
    offcanvas_classCallCheck(this, Offcanvas);
    _this = _super.call(this, element, config);
    _this._isShown = false;
    _this._backdrop = _this._initializeBackDrop();
    _this._focustrap = _this._initializeFocusTrap();
    _this._addEventListeners();
    return _this;
  }

  // Getters
  offcanvas_createClass(Offcanvas, [{
    key: "toggle",
    value:
    // Public
    function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
  }, {
    key: "show",
    value: function show(relatedTarget) {
      var _this2 = this;
      if (this._isShown) {
        return;
      }
      var showEvent = event_handler.trigger(this._element, EVENT_SHOW, {
        relatedTarget: relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new scrollbar().hide();
      }
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.classList.add(CLASS_NAME_SHOWING);
      var completeCallBack = function completeCallBack() {
        if (!_this2._config.scroll || _this2._config.backdrop) {
          _this2._focustrap.activate();
        }
        _this2._element.classList.add(offcanvas_CLASS_NAME_SHOW);
        _this2._element.classList.remove(CLASS_NAME_SHOWING);
        event_handler.trigger(_this2._element, EVENT_SHOWN, {
          relatedTarget: relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;
      if (!this._isShown) {
        return;
      }
      var hideEvent = event_handler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      var completeCallback = function completeCallback() {
        _this3._element.classList.remove(offcanvas_CLASS_NAME_SHOW, CLASS_NAME_HIDING);
        _this3._element.removeAttribute('aria-modal');
        _this3._element.removeAttribute('role');
        if (!_this3._config.scroll) {
          new scrollbar().reset();
        }
        event_handler.trigger(_this3._element, EVENT_HIDDEN);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      _get(offcanvas_getPrototypeOf(Offcanvas.prototype), "dispose", this).call(this);
    }

    // Private
  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      var _this4 = this;
      var clickCallback = function clickCallback() {
        if (_this4._config.backdrop === 'static') {
          event_handler.trigger(_this4._element, EVENT_HIDE_PREVENTED);
          return;
        }
        _this4.hide();
      };

      // 'static' option will be translated to true, and booleans will keep their value
      var isVisible = Boolean(this._config.backdrop);
      return new backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible ? clickCallback : null
      });
    }
  }, {
    key: "_initializeFocusTrap",
    value: function _initializeFocusTrap() {
      return new focustrap({
        trapElement: this._element
      });
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this5 = this;
      event_handler.on(this._element, EVENT_KEYDOWN_DISMISS, function (event) {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (!_this5._config.keyboard) {
          event_handler.trigger(_this5._element, EVENT_HIDE_PREVENTED);
          return;
        }
        _this5.hide();
      });
    }

    // Static
  }], [{
    key: "Default",
    get: function get() {
      return offcanvas_Default;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return offcanvas_DefaultType;
    }
  }, {
    key: "NAME",
    get: function get() {
      return offcanvas_NAME;
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(config) {
      return this.each(function () {
        var data = Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError("No method named \"".concat(config, "\""));
        }
        data[config](this);
      });
    }
  }]);
  return Offcanvas;
}(base_component);
/**
 * Data API implementation
 */
event_handler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  var _this6 = this;
  var target = getElementFromSelector(this);
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  event_handler.one(target, EVENT_HIDDEN, function () {
    // focus on trigger when it is closed
    if (util_isVisible(_this6)) {
      _this6.focus();
    }
  });

  // avoid conflict when clicking a toggler of an offcanvas, while another is open
  var alreadyOpen = selector_engine.findOne(OPEN_SELECTOR);
  if (alreadyOpen && alreadyOpen !== target) {
    offcanvas_Offcanvas.getInstance(alreadyOpen).hide();
  }
  var data = offcanvas_Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
event_handler.on(window, EVENT_LOAD_DATA_API, function () {
  var _iterator = offcanvas_createForOfIteratorHelper(selector_engine.find(OPEN_SELECTOR)),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var selector = _step.value;
      offcanvas_Offcanvas.getOrCreateInstance(selector).show();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
event_handler.on(window, EVENT_RESIZE, function () {
  var _iterator2 = offcanvas_createForOfIteratorHelper(selector_engine.find('[aria-modal][class*=show][class*=offcanvas-]')),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var element = _step2.value;
      if (getComputedStyle(element).position !== 'fixed') {
        offcanvas_Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});
component_functions_enableDismissTrigger(offcanvas_Offcanvas);

/**
 * jQuery
 */

defineJQueryPlugin(offcanvas_Offcanvas);
/* harmony default export */ var offcanvas = (offcanvas_Offcanvas);
// CONCATENATED MODULE: ./js/theme.js
//Dependencies











//Components




/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap swipe.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(5), __webpack_require__(1), __webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5), __webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (Config, EventHandler, index) {
  'use strict';

  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var Config__default = /*#__PURE__*/_interopDefaultLegacy(Config);
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): util/swipe.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var NAME = 'swipe';
  var EVENT_KEY = '.bs.swipe';
  var EVENT_TOUCHSTART = "touchstart".concat(EVENT_KEY);
  var EVENT_TOUCHMOVE = "touchmove".concat(EVENT_KEY);
  var EVENT_TOUCHEND = "touchend".concat(EVENT_KEY);
  var EVENT_POINTERDOWN = "pointerdown".concat(EVENT_KEY);
  var EVENT_POINTERUP = "pointerup".concat(EVENT_KEY);
  var POINTER_TYPE_TOUCH = 'touch';
  var POINTER_TYPE_PEN = 'pen';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SWIPE_THRESHOLD = 40;
  var Default = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType = {
    endCallback: '(function|null)',
    leftCallback: '(function|null)',
    rightCallback: '(function|null)'
  };
  /**
   * Class definition
   */
  var Swipe = /*#__PURE__*/function (_Config__default$defa) {
    _inherits(Swipe, _Config__default$defa);
    var _super = _createSuper(Swipe);
    function Swipe(element, config) {
      var _this;
      _classCallCheck(this, Swipe);
      _this = _super.call(this);
      _this._element = element;
      if (!element || !Swipe.isSupported()) {
        return _possibleConstructorReturn(_this);
      }
      _this._config = _this._getConfig(config);
      _this._deltaX = 0;
      _this._supportPointerEvents = Boolean(window.PointerEvent);
      _this._initEvents();
      return _this;
    } // Getters
    _createClass(Swipe, [{
      key: "dispose",
      value:
      // Public

      function dispose() {
        EventHandler__default.default.off(this._element, EVENT_KEY);
      } // Private
    }, {
      key: "_start",
      value: function _start(event) {
        if (!this._supportPointerEvents) {
          this._deltaX = event.touches[0].clientX;
          return;
        }
        if (this._eventIsPointerPenTouch(event)) {
          this._deltaX = event.clientX;
        }
      }
    }, {
      key: "_end",
      value: function _end(event) {
        if (this._eventIsPointerPenTouch(event)) {
          this._deltaX = event.clientX - this._deltaX;
        }
        this._handleSwipe();
        index.execute(this._config.endCallback);
      }
    }, {
      key: "_move",
      value: function _move(event) {
        this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var absDeltaX = Math.abs(this._deltaX);
        if (absDeltaX <= SWIPE_THRESHOLD) {
          return;
        }
        var direction = absDeltaX / this._deltaX;
        this._deltaX = 0;
        if (!direction) {
          return;
        }
        index.execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this2 = this;
        if (this._supportPointerEvents) {
          EventHandler__default.default.on(this._element, EVENT_POINTERDOWN, function (event) {
            return _this2._start(event);
          });
          EventHandler__default.default.on(this._element, EVENT_POINTERUP, function (event) {
            return _this2._end(event);
          });
          this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
          EventHandler__default.default.on(this._element, EVENT_TOUCHSTART, function (event) {
            return _this2._start(event);
          });
          EventHandler__default.default.on(this._element, EVENT_TOUCHMOVE, function (event) {
            return _this2._move(event);
          });
          EventHandler__default.default.on(this._element, EVENT_TOUCHEND, function (event) {
            return _this2._end(event);
          });
        }
      }
    }, {
      key: "_eventIsPointerPenTouch",
      value: function _eventIsPointerPenTouch(event) {
        return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
      } // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "isSupported",
      value: function isSupported() {
        return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }]);
    return Swipe;
  }(Config__default.default);
  return Swipe;
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap carousel.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(0), __webpack_require__(1), __webpack_require__(6), __webpack_require__(3), __webpack_require__(31), __webpack_require__(2)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1), __webpack_require__(6), __webpack_require__(3), __webpack_require__(31), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (index, EventHandler, Manipulator, SelectorEngine, Swipe, BaseComponent) {
  'use strict';

  var _KEY_TO_DIRECTION;
  var _interopDefaultLegacy = function _interopDefaultLegacy(e) {
    return e && _typeof(e) === 'object' && 'default' in e ? e : {
      default: e
    };
  };
  var EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  var Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);
  var SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);
  var Swipe__default = /*#__PURE__*/_interopDefaultLegacy(Swipe);
  var BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v5.2.3): carousel.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  var NAME = 'carousel';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = ".".concat(DATA_KEY);
  var DATA_API_KEY = '.data-api';
  var ARROW_LEFT_KEY = 'ArrowLeft';
  var ARROW_RIGHT_KEY = 'ArrowRight';
  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var ORDER_NEXT = 'next';
  var ORDER_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide".concat(EVENT_KEY);
  var EVENT_SLID = "slid".concat(EVENT_KEY);
  var EVENT_KEYDOWN = "keydown".concat(EVENT_KEY);
  var EVENT_MOUSEENTER = "mouseenter".concat(EVENT_KEY);
  var EVENT_MOUSELEAVE = "mouseleave".concat(EVENT_KEY);
  var EVENT_DRAG_START = "dragstart".concat(EVENT_KEY);
  var EVENT_LOAD_DATA_API = "load".concat(EVENT_KEY).concat(DATA_API_KEY);
  var EVENT_CLICK_DATA_API = "click".concat(EVENT_KEY).concat(DATA_API_KEY);
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_END = 'carousel-item-end';
  var CLASS_NAME_START = 'carousel-item-start';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = (_KEY_TO_DIRECTION = {}, _defineProperty(_KEY_TO_DIRECTION, ARROW_LEFT_KEY, DIRECTION_RIGHT), _defineProperty(_KEY_TO_DIRECTION, ARROW_RIGHT_KEY, DIRECTION_LEFT), _KEY_TO_DIRECTION);
  var Default = {
    interval: 5000,
    keyboard: true,
    pause: 'hover',
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    // TODO:v6 remove boolean support
    keyboard: 'boolean',
    pause: '(string|boolean)',
    ride: '(boolean|string)',
    touch: 'boolean',
    wrap: 'boolean'
  };
  /**
   * Class definition
   */
  var Carousel = /*#__PURE__*/function (_BaseComponent__defau) {
    _inherits(Carousel, _BaseComponent__defau);
    var _super = _createSuper(Carousel);
    function Carousel(element, config) {
      var _this;
      _classCallCheck(this, Carousel);
      _this = _super.call(this, element, config);
      _this._interval = null;
      _this._activeElement = null;
      _this._isSliding = false;
      _this.touchTimeout = null;
      _this._swipeHelper = null;
      _this._indicatorsElement = SelectorEngine__default.default.findOne(SELECTOR_INDICATORS, _this._element);
      _this._addEventListeners();
      if (_this._config.ride === CLASS_NAME_CAROUSEL) {
        _this.cycle();
      }
      return _this;
    } // Getters
    _createClass(Carousel, [{
      key: "next",
      value:
      // Public

      function next() {
        this._slide(ORDER_NEXT);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        // FIXME TODO use `document.visibilityState`
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && index.isVisible(this._element)) {
          this.next();
        }
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(ORDER_PREV);
      }
    }, {
      key: "pause",
      value: function pause() {
        if (this._isSliding) {
          index.triggerTransitionEnd(this._element);
        }
        this._clearInterval();
      }
    }, {
      key: "cycle",
      value: function cycle() {
        var _this2 = this;
        this._clearInterval();
        this._updateInterval();
        this._interval = setInterval(function () {
          return _this2.nextWhenVisible();
        }, this._config.interval);
      }
    }, {
      key: "_maybeEnableCycle",
      value: function _maybeEnableCycle() {
        var _this3 = this;
        if (!this._config.ride) {
          return;
        }
        if (this._isSliding) {
          EventHandler__default.default.one(this._element, EVENT_SLID, function () {
            return _this3.cycle();
          });
          return;
        }
        this.cycle();
      }
    }, {
      key: "to",
      value: function to(index) {
        var _this4 = this;
        var items = this._getItems();
        if (index > items.length - 1 || index < 0) {
          return;
        }
        if (this._isSliding) {
          EventHandler__default.default.one(this._element, EVENT_SLID, function () {
            return _this4.to(index);
          });
          return;
        }
        var activeIndex = this._getItemIndex(this._getActive());
        if (activeIndex === index) {
          return;
        }
        var order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
        this._slide(order, items[index]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        if (this._swipeHelper) {
          this._swipeHelper.dispose();
        }
        _get(_getPrototypeOf(Carousel.prototype), "dispose", this).call(this);
      } // Private
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(config) {
        config.defaultInterval = config.interval;
        return config;
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;
        if (this._config.keyboard) {
          EventHandler__default.default.on(this._element, EVENT_KEYDOWN, function (event) {
            return _this5._keydown(event);
          });
        }
        if (this._config.pause === 'hover') {
          EventHandler__default.default.on(this._element, EVENT_MOUSEENTER, function () {
            return _this5.pause();
          });
          EventHandler__default.default.on(this._element, EVENT_MOUSELEAVE, function () {
            return _this5._maybeEnableCycle();
          });
        }
        if (this._config.touch && Swipe__default.default.isSupported()) {
          this._addTouchEventListeners();
        }
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;
        var _iterator = _createForOfIteratorHelper(SelectorEngine__default.default.find(SELECTOR_ITEM_IMG, this._element)),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var img = _step.value;
            EventHandler__default.default.on(img, EVENT_DRAG_START, function (event) {
              return event.preventDefault();
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var endCallBack = function endCallBack() {
          if (_this6._config.pause !== 'hover') {
            return;
          } // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling

          _this6.pause();
          if (_this6.touchTimeout) {
            clearTimeout(_this6.touchTimeout);
          }
          _this6.touchTimeout = setTimeout(function () {
            return _this6._maybeEnableCycle();
          }, TOUCHEVENT_COMPAT_WAIT + _this6._config.interval);
        };
        var swipeConfig = {
          leftCallback: function leftCallback() {
            return _this6._slide(_this6._directionToOrder(DIRECTION_LEFT));
          },
          rightCallback: function rightCallback() {
            return _this6._slide(_this6._directionToOrder(DIRECTION_RIGHT));
          },
          endCallback: endCallBack
        };
        this._swipeHelper = new Swipe__default.default(this._element, swipeConfig);
      }
    }, {
      key: "_keydown",
      value: function _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) {
          return;
        }
        var direction = KEY_TO_DIRECTION[event.key];
        if (direction) {
          event.preventDefault();
          this._slide(this._directionToOrder(direction));
        }
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(element) {
        return this._getItems().indexOf(element);
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(index) {
        if (!this._indicatorsElement) {
          return;
        }
        var activeIndicator = SelectorEngine__default.default.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
        activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
        activeIndicator.removeAttribute('aria-current');
        var newActiveIndicator = SelectorEngine__default.default.findOne("[data-bs-slide-to=\"".concat(index, "\"]"), this._indicatorsElement);
        if (newActiveIndicator) {
          newActiveIndicator.classList.add(CLASS_NAME_ACTIVE);
          newActiveIndicator.setAttribute('aria-current', 'true');
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var element = this._activeElement || this._getActive();
        if (!element) {
          return;
        }
        var elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
        this._config.interval = elementInterval || this._config.defaultInterval;
      }
    }, {
      key: "_slide",
      value: function _slide(order) {
        var _this7 = this;
        var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (this._isSliding) {
          return;
        }
        var activeElement = this._getActive();
        var isNext = order === ORDER_NEXT;
        var nextElement = element || index.getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
        if (nextElement === activeElement) {
          return;
        }
        var nextElementIndex = this._getItemIndex(nextElement);
        var triggerEvent = function triggerEvent(eventName) {
          return EventHandler__default.default.trigger(_this7._element, eventName, {
            relatedTarget: nextElement,
            direction: _this7._orderToDirection(order),
            from: _this7._getItemIndex(activeElement),
            to: nextElementIndex
          });
        };
        var slideEvent = triggerEvent(EVENT_SLIDE);
        if (slideEvent.defaultPrevented) {
          return;
        }
        if (!activeElement || !nextElement) {
          // Some weirdness is happening, so we bail
          // todo: change tests that use empty divs to avoid this check
          return;
        }
        var isCycling = Boolean(this._interval);
        this.pause();
        this._isSliding = true;
        this._setActiveIndicatorElement(nextElementIndex);
        this._activeElement = nextElement;
        var directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        var orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
        nextElement.classList.add(orderClassName);
        index.reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);
        var completeCallBack = function completeCallBack() {
          nextElement.classList.remove(directionalClassName, orderClassName);
          nextElement.classList.add(CLASS_NAME_ACTIVE);
          activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
          _this7._isSliding = false;
          triggerEvent(EVENT_SLID);
        };
        this._queueCallback(completeCallBack, activeElement, this._isAnimated());
        if (isCycling) {
          this.cycle();
        }
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains(CLASS_NAME_SLIDE);
      }
    }, {
      key: "_getActive",
      value: function _getActive() {
        return SelectorEngine__default.default.findOne(SELECTOR_ACTIVE_ITEM, this._element);
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return SelectorEngine__default.default.find(SELECTOR_ITEM, this._element);
      }
    }, {
      key: "_clearInterval",
      value: function _clearInterval() {
        if (this._interval) {
          clearInterval(this._interval);
          this._interval = null;
        }
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(direction) {
        if (index.isRTL()) {
          return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        }
        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(order) {
        if (index.isRTL()) {
          return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        }
        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
      } // Static
    }], [{
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(config) {
        return this.each(function () {
          var data = Carousel.getOrCreateInstance(this, config);
          if (typeof config === 'number') {
            data.to(config);
            return;
          }
          if (typeof config === 'string') {
            if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
              throw new TypeError("No method named \"".concat(config, "\""));
            }
            data[config]();
          }
        });
      }
    }]);
    return Carousel;
  }(BaseComponent__default.default);
  /**
   * Data API implementation
   */
  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, function (event) {
    var target = index.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    var carousel = Carousel.getOrCreateInstance(target);
    var slideIndex = this.getAttribute('data-bs-slide-to');
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (Manipulator__default.default.getDataAttribute(this, 'slide') === 'next') {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  EventHandler__default.default.on(window, EVENT_LOAD_DATA_API, function () {
    var carousels = SelectorEngine__default.default.find(SELECTOR_DATA_RIDE);
    var _iterator2 = _createForOfIteratorHelper(carousels),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var carousel = _step2.value;
        Carousel.getOrCreateInstance(carousel);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Carousel);
  return Carousel;
});

/***/ })
/******/ ]);