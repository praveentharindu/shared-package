'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */

function isNil(value) {
  return value == null;
}

var isNil_1 = isNil;

/** Used for built-in method references. */

var objectProto$4 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

  return value === proto;
}

var _isPrototype = isPrototype$1;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$1;

var overArg = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg(Object.keys, Object);

var _nativeKeys = nativeKeys$1;

var isPrototype = _isPrototype,
    nativeKeys = _nativeKeys;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$7 = freeGlobal || freeSelf || Function('return this')();

var _root = root$7;

var root$6 = _root;

/** Built-in value references. */
var Symbol$2 = root$6.Symbol;

var _Symbol = Symbol$2;

var Symbol$1 = _Symbol;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$2.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$3(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$3;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$2;

var baseGetTag$2 = _baseGetTag,
    isObject$1 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$2(value) {
  if (!isObject$1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$2(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$2;

var root$5 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$5['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */

var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$2;

var isFunction$1 = isFunction_1,
    isMasked = _isMasked,
    isObject = isObject_1,
    toSource$1 = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$5(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$5;

var getNative$4 = _getNative,
    root$4 = _root;

/* Built-in method references that are verified to be native. */
var DataView$1 = getNative$4(root$4, 'DataView');

var _DataView = DataView$1;

var getNative$3 = _getNative,
    root$3 = _root;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative$3(root$3, 'Map');

var _Map = Map$1;

var getNative$2 = _getNative,
    root$2 = _root;

/* Built-in method references that are verified to be native. */
var Promise$2 = getNative$2(root$2, 'Promise');

var _Promise = Promise$2;

var getNative$1 = _getNative,
    root$1 = _root;

/* Built-in method references that are verified to be native. */
var Set$1 = getNative$1(root$1, 'Set');

var _Set = Set$1;

var getNative = _getNative,
    root = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative(root, 'WeakMap');

var _WeakMap = WeakMap$1;

var DataView = _DataView,
    Map = _Map,
    Promise$1 = _Promise,
    Set = _Set,
    WeakMap = _WeakMap,
    baseGetTag$1 = _baseGetTag,
    toSource = _toSource;

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$1 = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag$1;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag$1(new Map) != mapTag$1) ||
    (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag$1(new Set) != setTag$1) ||
    (WeakMap && getTag$1(new WeakMap) != weakMapTag)) {
  getTag$1 = function(value) {
    var result = baseGetTag$1(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag$1;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$1;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var _getTag = getTag$1;

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$1(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength$1;

var isFunction = isFunction_1,
    isLength = isLength_1;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$1(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

var isArrayLike_1 = isArrayLike$1;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray$1 = Array.isArray;

var isArray_1 = isArray$1;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$1(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$1;

var baseGetTag = _baseGetTag,
    isArray = isArray_1,
    isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString$1(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

var isString_1 = isString$1;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */

function baseProperty$1(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty$1;

var baseProperty = _baseProperty;

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize$1 = baseProperty('length');

var _asciiSize = asciiSize$1;

/** Used to compose unicode character classes. */

var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ$1 = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$1 + rsVarRange$1 + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode$1(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode$1;

/** Used to compose unicode character classes. */

var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize$1(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

var _unicodeSize = unicodeSize$1;

var asciiSize = _asciiSize,
    hasUnicode = _hasUnicode,
    unicodeSize = _unicodeSize;

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize$1(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

var _stringSize = stringSize$1;

var baseKeys = _baseKeys,
    getTag = _getTag,
    isArrayLike = isArrayLike_1,
    isString = isString_1,
    stringSize = _stringSize;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

var size_1 = size;

// Check if window object is available (browser environment)
if (typeof window !== 'undefined') {
    window.customDimensions = [];
}

if (!isNil_1(typeof window)) {
    window.customDimensions = [];
}
function setMatomoConfig(matomoConfig) {
    var _a;
    // Initialize Matomo tracker
    console.log('Initialize-matomoConfig', matomoConfig);
    var scriptId = 'matomo-script';
    if (!isNil_1(matomoConfig.matomoUrl) &&
        !isNil_1(matomoConfig.matomoSiteId) &&
        isNil_1(document.getElementById(scriptId))) {
        console.log('matomoConfig-set', matomoConfig.matomoUrl, matomoConfig.matomoSiteId);
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = "".concat(matomoConfig.matomoUrl, "matomo.js");
        document.body.appendChild(script);
        window._paq = window._paq || [];
        window._paq.push(['disableCookies', false]);
        window._paq.push(['enableCrossDomainLinking']);
        window._paq.push(['setDoNotTrack', true]);
        window._paq.push(['setTrackerUrl', "".concat(matomoConfig.matomoUrl, "matomo.php")]);
        window._paq.push(['setSiteId', matomoConfig.matomoSiteId]);
    }
    if (size_1(matomoConfig.customDimensions) > 0) {
        (_a = matomoConfig.customDimensions) === null || _a === void 0 ? void 0 : _a.forEach(function (customDimension) {
            window.customDimensions.push(customDimension);
        });
        console.log('customDimensions', matomoConfig.customDimensions, window.customDimensions);
    }
}
/**
 * set custom dimension
 * @param customDimensioncustomDimensions
 */
function setCustomDimension(customDimension) {
    if (!!window._paq) {
        window._paq.push(['setCustomDimension', customDimension.id, customDimension.value]);
    }
}
// /**
//  * track page view
//  * @param params
//  */
// function trackPageView(params?: any) {
//   console.log('start-page-track', params)
//   if (!!window._paq) {
//     console.log('customDimensions-local-2', window.customDimensions)
//     if (size(window.customDimensions) > 0) {
//       window.customDimensions?.forEach((customDimension: any) => {
//         setCustomDimension(customDimension)
//       })
//     }
//     if (params?.href) window._paq.push(['setCustomUrl', params.href])
//     if (params?.documentTitle) window._paq.push(['setDocumentTitle', params.documentTitle])
//     window._paq.push(['trackPageView'])
//     console.log('end-page-track')
//   }
// }
/**
 * track page view
 * @param params
 */
var trackPageView = function (params) {
    var _a;
    console.log('start-page-track', params);
    if (!!window._paq) {
        if (params === null || params === void 0 ? void 0 : params.href)
            window._paq.push(['setCustomUrl', params.href]);
        if (params === null || params === void 0 ? void 0 : params.documentTitle)
            window._paq.push(['setDocumentTitle', params.documentTitle]);
        if (size_1(window === null || window === void 0 ? void 0 : window.customDimensions) > 0) {
            console.log('customDimensions-page-track', window === null || window === void 0 ? void 0 : window.customDimensions);
            (_a = window === null || window === void 0 ? void 0 : window.customDimensions) === null || _a === void 0 ? void 0 : _a.forEach(function (customDimension) {
                setCustomDimension(customDimension);
            });
        }
        window._paq.push(['trackPageView']);
        console.log('end-page-track');
    }
};
/**
 * track event
 * @param params
 */
var trackEvent = function (params) {
    var _a;
    console.log('start-track-event', params);
    if (size_1(window === null || window === void 0 ? void 0 : window.customDimensions) > 0) {
        console.log('customDimensions-event-track', window === null || window === void 0 ? void 0 : window.customDimensions);
        (_a = window === null || window === void 0 ? void 0 : window.customDimensions) === null || _a === void 0 ? void 0 : _a.forEach(function (customDimension) {
            setCustomDimension(customDimension);
        });
    }
    if (params === null || params === void 0 ? void 0 : params.href)
        window._paq.push(['setCustomUrl', params.href]);
    if (params === null || params === void 0 ? void 0 : params.documentTitle)
        window._paq.push(['setDocumentTitle', params.documentTitle]);
    window._paq.push(['trackEvent', params === null || params === void 0 ? void 0 : params.category, params === null || params === void 0 ? void 0 : params.action, params === null || params === void 0 ? void 0 : params.value]);
    console.log('end-track-event', params);
};
/**
 * track site search
 * @param params
 */
var trackSiteSearch = function (params) {
    var _a;
    console.log('start-track-search', params);
    if (size_1(window === null || window === void 0 ? void 0 : window.customDimensions) > 0) {
        console.log('customDimensions-event-track', window === null || window === void 0 ? void 0 : window.customDimensions);
        (_a = window === null || window === void 0 ? void 0 : window.customDimensions) === null || _a === void 0 ? void 0 : _a.forEach(function (customDimension) {
            setCustomDimension(customDimension);
        });
    }
    if (params === null || params === void 0 ? void 0 : params.href)
        window._paq.push(['setCustomUrl', params.href]);
    if (params === null || params === void 0 ? void 0 : params.documentTitle)
        window._paq.push(['setDocumentTitle', params.documentTitle]);
    window._paq.push(['trackEvent', params === null || params === void 0 ? void 0 : params.keyword, params === null || params === void 0 ? void 0 : params.category, params === null || params === void 0 ? void 0 : params.resultsCount]);
    console.log('end-track-search', params);
};
/**
 * matomo track
 * @param matomoInfo
 */
function setMatomoTracking(matomoInfo) {
    console.log('track', matomoInfo);
    if (matomoInfo.type === 'track-page') {
        trackPageView(matomoInfo.info);
    }
    else if (matomoInfo.type === 'track-event') {
        trackEvent(matomoInfo.info);
    }
    else if (matomoInfo.type === 'track-search') {
        trackSiteSearch(matomoInfo.info);
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var MatomoContext = react.createContext({});
var useMatomo = function () { return react.useContext(MatomoContext); };
var MatomoProvider = function (_a) {
    var children = _a.children, matomoConfig = _a.matomoConfig;
    var _b = react.useState([]), customDimensions = _b[0], setCustomDimensions = _b[1];
    react.useEffect(function () {
        var scriptId = 'matomo-script';
        if (!isNil_1(matomoConfig.matomoUrl) &&
            !isNil_1(matomoConfig.matomoSiteId) &&
            isNil_1(document.getElementById(scriptId))) {
            console.log('matomoConfig-set', matomoConfig.matomoUrl, matomoConfig.matomoSiteId);
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = "".concat(matomoConfig.matomoUrl, "matomo.js");
            document.body.appendChild(script);
            window._paq = window._paq || [];
            window._paq.push(['disableCookies', false]);
            window._paq.push(['enableCrossDomainLinking']);
            window._paq.push(['setDoNotTrack', true]);
            window._paq.push(['setTrackerUrl', "".concat(matomoConfig.matomoUrl, "matomo.php")]);
            window._paq.push(['setSiteId', matomoConfig.matomoSiteId]);
        }
        if (size_1(matomoConfig.customDimensions) > 0) {
            setCustomDimensions(matomoConfig.customDimensions);
            console.log('customDimensions-set', matomoConfig.customDimensions);
        }
    }, [matomoConfig]);
    /**
     * set custom dimension
     * @param customDimensioncustomDimensions
     */
    var setCustomDimension = function (customDimension) {
        if (!!window._paq) {
            window._paq.push(['setCustomDimension', customDimension.id, customDimension.value]);
        }
    };
    /**
     * track page view
     * @param params
     */
    var trackPageView = function (params) {
        console.log('start-page-track', params);
        if (!!window._paq) {
            if (params === null || params === void 0 ? void 0 : params.href)
                window._paq.push(['setCustomUrl', params.href]);
            if (params === null || params === void 0 ? void 0 : params.documentTitle)
                window._paq.push(['setDocumentTitle', params.documentTitle]);
            if (size_1(customDimensions) > 0) {
                console.log('customDimensions-page-track', customDimensions);
                customDimensions === null || customDimensions === void 0 ? void 0 : customDimensions.forEach(function (customDimension) {
                    setCustomDimension(customDimension);
                });
            }
            window._paq.push(['trackPageView']);
            console.log('end-page-track');
        }
    };
    /**
     * track event
     * @param params
     */
    var trackEvent = function (params) {
        console.log('start-track-event', params);
        if (size_1(customDimensions) > 0) {
            console.log('customDimensions-event-track', customDimensions);
            customDimensions === null || customDimensions === void 0 ? void 0 : customDimensions.forEach(function (customDimension) {
                setCustomDimension(customDimension);
            });
        }
        if (params === null || params === void 0 ? void 0 : params.href)
            window._paq.push(['setCustomUrl', params.href]);
        if (params === null || params === void 0 ? void 0 : params.documentTitle)
            window._paq.push(['setDocumentTitle', params.documentTitle]);
        window._paq.push(['trackEvent', params === null || params === void 0 ? void 0 : params.category, params === null || params === void 0 ? void 0 : params.action, params === null || params === void 0 ? void 0 : params.value]);
        console.log('end-track-event', params);
    };
    /**
     * track site search
     * @param params
     */
    var trackSiteSearch = function (params) {
        console.log('start-track-search', params);
        if (size_1(customDimensions) > 0) {
            console.log('customDimensions-event-track', customDimensions);
            customDimensions === null || customDimensions === void 0 ? void 0 : customDimensions.forEach(function (customDimension) {
                setCustomDimension(customDimension);
            });
        }
        if (params === null || params === void 0 ? void 0 : params.href)
            window._paq.push(['setCustomUrl', params.href]);
        if (params === null || params === void 0 ? void 0 : params.documentTitle)
            window._paq.push(['setDocumentTitle', params.documentTitle]);
        window._paq.push(['trackEvent', params === null || params === void 0 ? void 0 : params.keyword, params === null || params === void 0 ? void 0 : params.category, params === null || params === void 0 ? void 0 : params.resultsCount]);
        console.log('end-track-search', params);
    };
    /**
     * matomo track
     * @param matomoInfo
     */
    var setMatomoTrack = function (matomoInfo) {
        console.log('track', matomoInfo);
        if (matomoInfo.type === 'track-page') {
            trackPageView(matomoInfo.info);
        }
        else if (matomoInfo.type === 'track-event') {
            trackEvent(matomoInfo.info);
        }
        else if (matomoInfo.type === 'track-search') {
            trackSiteSearch(matomoInfo.info);
        }
    };
    var matomo = {
        setMatomoTrack: setMatomoTrack,
    };
    return jsxRuntime.jsx(MatomoContext.Provider, __assign({ value: matomo }, { children: children }));
};

exports.MatomoProvider = MatomoProvider;
exports.setCustomDimension = setCustomDimension;
exports.setMatomoConfig = setMatomoConfig;
exports.setMatomoTracking = setMatomoTracking;
exports.trackEvent = trackEvent;
exports.trackPageView = trackPageView;
exports.trackSiteSearch = trackSiteSearch;
exports.useMatomo = useMatomo;
//# sourceMappingURL=index.js.map
