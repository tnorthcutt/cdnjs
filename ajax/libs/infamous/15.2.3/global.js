(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["infamous"] = factory();
	else
		root["infamous"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(298);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(293);
	
	__webpack_require__(295);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(57);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(85);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(105);
	__webpack_require__(106);
	__webpack_require__(107);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(111);
	__webpack_require__(113);
	__webpack_require__(114);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(131);
	__webpack_require__(132);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(141);
	__webpack_require__(142);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(169);
	__webpack_require__(170);
	__webpack_require__(171);
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(181);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(189);
	__webpack_require__(190);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(198);
	__webpack_require__(199);
	__webpack_require__(201);
	__webpack_require__(202);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(211);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(224);
	__webpack_require__(225);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(244);
	__webpack_require__(245);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(251);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(263);
	__webpack_require__(264);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(269);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(291);
	__webpack_require__(292);
	module.exports = __webpack_require__(9);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , $export        = __webpack_require__(8)
	  , redefine       = __webpack_require__(18)
	  , META           = __webpack_require__(22).KEY
	  , $fails         = __webpack_require__(7)
	  , shared         = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(24)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(25)
	  , wksExt         = __webpack_require__(26)
	  , wksDefine      = __webpack_require__(27)
	  , keyOf          = __webpack_require__(29)
	  , enumKeys       = __webpack_require__(42)
	  , isArray        = __webpack_require__(45)
	  , anObject       = __webpack_require__(12)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , createDesc     = __webpack_require__(17)
	  , _create        = __webpack_require__(46)
	  , gOPNExt        = __webpack_require__(49)
	  , $GOPD          = __webpack_require__(51)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(30)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(44).f  = $propertyIsEnumerable;
	  __webpack_require__(43).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(28)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 4 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 5 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 6 */
[456, 7],
/* 7 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(9)
	  , hide      = __webpack_require__(10)
	  , redefine  = __webpack_require__(18)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
[457, 11, 17, 6],
/* 11 */
[458, 12, 14, 16, 6],
/* 12 */
[459, 13],
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 14 */
[460, 6, 7, 15],
/* 15 */
[461, 13, 4],
/* 16 */
[462, 13],
/* 17 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(10)
	  , has       = __webpack_require__(5)
	  , SRC       = __webpack_require__(19)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(9).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
[463, 21],
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(13)
	  , has      = __webpack_require__(5)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 23 */
[464, 4],
/* 24 */
[465, 11, 5, 25],
/* 25 */
[466, 23, 19, 4],
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(25);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(9)
	  , LIBRARY        = __webpack_require__(28)
	  , wksExt         = __webpack_require__(26)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 30 */
[467, 31, 41],
/* 31 */
[468, 5, 32, 36, 40],
/* 32 */
[469, 33, 35],
/* 33 */
[470, 34],
/* 34 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 36 */
[471, 32, 37, 39],
/* 37 */
[472, 38],
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
[473, 38],
/* 40 */
[474, 23, 19],
/* 41 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(30)
	  , gOPS    = __webpack_require__(43)
	  , pIE     = __webpack_require__(44);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(34);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 46 */
[475, 12, 47, 41, 40, 15, 48],
/* 47 */
[476, 11, 12, 30, 6],
/* 48 */
[477, 4],
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(32)
	  , gOPN      = __webpack_require__(50).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(31)
	  , hiddenKeys = __webpack_require__(41).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(44)
	  , createDesc     = __webpack_require__(17)
	  , toIObject      = __webpack_require__(32)
	  , toPrimitive    = __webpack_require__(16)
	  , has            = __webpack_require__(5)
	  , IE8_DOM_DEFINE = __webpack_require__(14)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(46)});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperties: __webpack_require__(47)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(32)
	  , $getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	__webpack_require__(56)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(8)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(58)
	  , $getPrototypeOf = __webpack_require__(59);
	
	__webpack_require__(56)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 58 */
[478, 35],
/* 59 */
[479, 5, 58, 40],
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58)
	  , $keys    = __webpack_require__(30);
	
	__webpack_require__(56)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(56)('getOwnPropertyNames', function(){
	  return __webpack_require__(49).f;
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(13)
	  , meta     = __webpack_require__(22).onFreeze;
	
	__webpack_require__(56)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(13);
	
	__webpack_require__(56)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(8);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(30)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(58)
	  , IObject  = __webpack_require__(33)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {is: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(8);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(73).set});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(13)
	  , anObject = __webpack_require__(12);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(20)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(75)
	  , test    = {};
	test[__webpack_require__(25)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(18)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 75 */
[480, 34, 25],
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Function', {bind: __webpack_require__(77)});

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(21)
	  , isObject   = __webpack_require__(13)
	  , invoke     = __webpack_require__(78)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(17)
	  , has        = __webpack_require__(5)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(6) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(13)
	  , getPrototypeOf = __webpack_require__(59)
	  , HAS_INSTANCE   = __webpack_require__(25)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(83).trim
	  , ws        = __webpack_require__(84)
	  , hex       = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , defined = __webpack_require__(35)
	  , fails   = __webpack_require__(7)
	  , spaces  = __webpack_require__(84)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(83).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(84) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(5)
	  , cof               = __webpack_require__(34)
	  , inheritIfRequired = __webpack_require__(88)
	  , toPrimitive       = __webpack_require__(16)
	  , fails             = __webpack_require__(7)
	  , gOPN              = __webpack_require__(50).f
	  , gOPD              = __webpack_require__(51).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(83).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(46)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(6) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(18)(global, NUMBER, $Number);
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(13)
	  , setPrototypeOf = __webpack_require__(73).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , toInteger    = __webpack_require__(38)
	  , aNumberValue = __webpack_require__(90)
	  , repeat       = __webpack_require__(91)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';
	
	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(34);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(35);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $fails       = __webpack_require__(7)
	  , aNumberValue = __webpack_require__(90)
	  , $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(8)
	  , _isFinite = __webpack_require__(4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(96)});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(13)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(8)
	  , isInteger = __webpack_require__(96)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(8)
	  , $parseFloat = __webpack_require__(86);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , $parseInt = __webpack_require__(82);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(8)
	  , log1p   = __webpack_require__(104)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 104 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(8)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(8)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(8)
	  , sign    = __webpack_require__(108);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 108 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(8)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(8)
	  , $expm1  = __webpack_require__(112);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 112 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(8)
	  , sign      = __webpack_require__(108)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(8)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(8)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(104)});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {sign: __webpack_require__(108)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(8)
	  , expm1   = __webpack_require__(112)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(8)
	  , toIndex        = __webpack_require__(39)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , toLength  = __webpack_require__(37);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(83)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 126 */
[481, 127, 128],
/* 127 */
[482, 38, 35],
/* 128 */
[483, 28, 8, 18, 10, 5, 129, 130, 24, 59, 25],
/* 129 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 130 */
[484, 46, 17, 24, 10, 25],
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(8)
	  , toLength  = __webpack_require__(37)
	  , context   = __webpack_require__(133)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(135)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(134)
	  , defined  = __webpack_require__(35);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(13)
	  , cof      = __webpack_require__(34)
	  , MATCH    = __webpack_require__(25)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(25)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(8)
	  , context  = __webpack_require__(133)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(135)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(91)
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(8)
	  , toLength    = __webpack_require__(37)
	  , context     = __webpack_require__(133)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(135)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(140)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , defined = __webpack_require__(35)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(140)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(140)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(140)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(140)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(140)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(140)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(140)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(140)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(140)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(140)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(140)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(140)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(8)
	  , toObject    = __webpack_require__(58)
	  , toPrimitive = __webpack_require__(16);
	
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(8)
	  , fails   = __webpack_require__(7)
	  , getTime = Date.prototype.getTime;
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(18)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(25)('toPrimitive')
	  , proto        = Date.prototype;
	
	if(!(TO_PRIMITIVE in proto))__webpack_require__(10)(proto, TO_PRIMITIVE, __webpack_require__(158));

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16)
	  , NUMBER      = 'number';
	
	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Array', {isArray: __webpack_require__(45)});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(20)
	  , $export        = __webpack_require__(8)
	  , toObject       = __webpack_require__(58)
	  , call           = __webpack_require__(161)
	  , isArrayIter    = __webpack_require__(162)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(163)
	  , getIterFn      = __webpack_require__(164);
	
	$export($export.S + $export.F * !__webpack_require__(165)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 161 */
[485, 12],
/* 162 */
[486, 129, 25],
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(17);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 164 */
[487, 75, 25, 129, 9],
/* 165 */
[488, 25],
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(8)
	  , createProperty = __webpack_require__(163);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(8)
	  , toIObject = __webpack_require__(32)
	  , arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(33) != Object || !__webpack_require__(168)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(7);
	
	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(8)
	  , html       = __webpack_require__(48)
	  , cof        = __webpack_require__(34)
	  , toIndex    = __webpack_require__(39)
	  , toLength   = __webpack_require__(37)
	  , arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , fails     = __webpack_require__(7)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(168)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(8)
	  , $forEach = __webpack_require__(172)(0)
	  , STRICT   = __webpack_require__(168)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(20)
	  , IObject  = __webpack_require__(33)
	  , toObject = __webpack_require__(58)
	  , toLength = __webpack_require__(37)
	  , asc      = __webpack_require__(173);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(174);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13)
	  , isArray  = __webpack_require__(45)
	  , SPECIES  = __webpack_require__(25)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $map    = __webpack_require__(172)(1);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $filter = __webpack_require__(172)(2);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $some   = __webpack_require__(172)(3);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $every  = __webpack_require__(172)(4);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(21)
	  , toObject  = __webpack_require__(58)
	  , IObject   = __webpack_require__(33)
	  , toLength  = __webpack_require__(37);
	
	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(8)
	  , $reduce = __webpack_require__(180);
	
	$export($export.P + $export.F * !__webpack_require__(168)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , $indexOf      = __webpack_require__(36)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(8)
	  , toIObject     = __webpack_require__(32)
	  , toInteger     = __webpack_require__(38)
	  , toLength      = __webpack_require__(37)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(168)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(185)});
	
	__webpack_require__(186)('copyWithin');

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(25)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(8);
	
	$export($export.P, 'Array', {fill: __webpack_require__(188)});
	
	__webpack_require__(186)('fill');

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(58)
	  , toIndex  = __webpack_require__(39)
	  , toLength = __webpack_require__(37);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(8)
	  , $find   = __webpack_require__(172)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(186)(KEY);

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(192)('Array');

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(6)
	  , SPECIES     = __webpack_require__(25)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 193 */
[489, 186, 194, 129, 32, 128],
/* 194 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(88)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(50).f
	  , isRegExp          = __webpack_require__(134)
	  , $flags            = __webpack_require__(196)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(6) && (!CORRECT_NEW || __webpack_require__(7)(function(){
	  re2[__webpack_require__(25)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(18)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(192)('RegExp');

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(12);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(198);
	var anObject    = __webpack_require__(12)
	  , $flags      = __webpack_require__(196)
	  , DESCRIPTORS = __webpack_require__(6)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];
	
	var define = function(fn){
	  __webpack_require__(18)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(6) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(196)
	});

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(200)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(10)
	  , redefine = __webpack_require__(18)
	  , fails    = __webpack_require__(7)
	  , defined  = __webpack_require__(35)
	  , wks      = __webpack_require__(25);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(200)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(200)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(200)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(134)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 204 */
[490, 28, 4, 20, 75, 8, 13, 21, 205, 206, 207, 208, 209, 25, 210, 24, 192, 9, 165],
/* 205 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 206 */
[491, 20, 161, 162, 12, 37, 164],
/* 207 */
[492, 12, 21, 25],
/* 208 */
[493, 20, 78, 48, 15, 4, 34],
/* 209 */
[494, 4, 208, 34],
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(18);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(213)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(46)
	  , redefineAll = __webpack_require__(210)
	  , ctx         = __webpack_require__(20)
	  , anInstance  = __webpack_require__(205)
	  , defined     = __webpack_require__(35)
	  , forOf       = __webpack_require__(206)
	  , $iterDefine = __webpack_require__(128)
	  , step        = __webpack_require__(194)
	  , setSpecies  = __webpack_require__(192)
	  , DESCRIPTORS = __webpack_require__(6)
	  , fastKey     = __webpack_require__(22).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(8)
	  , redefine          = __webpack_require__(18)
	  , redefineAll       = __webpack_require__(210)
	  , meta              = __webpack_require__(22)
	  , forOf             = __webpack_require__(206)
	  , anInstance        = __webpack_require__(205)
	  , isObject          = __webpack_require__(13)
	  , fails             = __webpack_require__(7)
	  , $iterDetect       = __webpack_require__(165)
	  , setToStringTag    = __webpack_require__(24)
	  , inheritIfRequired = __webpack_require__(88);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(212);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(213)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(172)(0)
	  , redefine     = __webpack_require__(18)
	  , meta         = __webpack_require__(22)
	  , assign       = __webpack_require__(69)
	  , weak         = __webpack_require__(216)
	  , isObject     = __webpack_require__(13)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(213)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(210)
	  , getWeak           = __webpack_require__(22).getWeak
	  , anObject          = __webpack_require__(12)
	  , isObject          = __webpack_require__(13)
	  , anInstance        = __webpack_require__(205)
	  , forOf             = __webpack_require__(206)
	  , createArrayMethod = __webpack_require__(172)
	  , $has              = __webpack_require__(5)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(216);
	
	// 23.4 WeakSet Objects
	__webpack_require__(213)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(8)
	  , $typed       = __webpack_require__(219)
	  , buffer       = __webpack_require__(220)
	  , anObject     = __webpack_require__(12)
	  , toIndex      = __webpack_require__(39)
	  , toLength     = __webpack_require__(37)
	  , isObject     = __webpack_require__(13)
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(207)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(192)(ARRAY_BUFFER);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(10)
	  , uid    = __webpack_require__(19)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(6)
	  , LIBRARY        = __webpack_require__(28)
	  , $typed         = __webpack_require__(219)
	  , hide           = __webpack_require__(10)
	  , redefineAll    = __webpack_require__(210)
	  , fails          = __webpack_require__(7)
	  , anInstance     = __webpack_require__(205)
	  , toInteger      = __webpack_require__(38)
	  , toLength       = __webpack_require__(37)
	  , gOPN           = __webpack_require__(50).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(188)
	  , setToStringTag = __webpack_require__(24)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8);
	$export($export.G + $export.W + $export.F * !__webpack_require__(219).ABV, {
	  DataView: __webpack_require__(220).DataView
	});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(6)){
	  var LIBRARY             = __webpack_require__(28)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(7)
	    , $export             = __webpack_require__(8)
	    , $typed              = __webpack_require__(219)
	    , $buffer             = __webpack_require__(220)
	    , ctx                 = __webpack_require__(20)
	    , anInstance          = __webpack_require__(205)
	    , propertyDesc        = __webpack_require__(17)
	    , hide                = __webpack_require__(10)
	    , redefineAll         = __webpack_require__(210)
	    , toInteger           = __webpack_require__(38)
	    , toLength            = __webpack_require__(37)
	    , toIndex             = __webpack_require__(39)
	    , toPrimitive         = __webpack_require__(16)
	    , has                 = __webpack_require__(5)
	    , same                = __webpack_require__(71)
	    , classof             = __webpack_require__(75)
	    , isObject            = __webpack_require__(13)
	    , toObject            = __webpack_require__(58)
	    , isArrayIter         = __webpack_require__(162)
	    , create              = __webpack_require__(46)
	    , getPrototypeOf      = __webpack_require__(59)
	    , gOPN                = __webpack_require__(50).f
	    , getIterFn           = __webpack_require__(164)
	    , uid                 = __webpack_require__(19)
	    , wks                 = __webpack_require__(25)
	    , createArrayMethod   = __webpack_require__(172)
	    , createArrayIncludes = __webpack_require__(36)
	    , speciesConstructor  = __webpack_require__(207)
	    , ArrayIterators      = __webpack_require__(193)
	    , Iterators           = __webpack_require__(129)
	    , $iterDetect         = __webpack_require__(165)
	    , setSpecies          = __webpack_require__(192)
	    , arrayFill           = __webpack_require__(188)
	    , arrayCopyWithin     = __webpack_require__(185)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(51)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(223)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(8)
	  , aFunction = __webpack_require__(21)
	  , anObject  = __webpack_require__(12)
	  , rApply    = (__webpack_require__(4).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(8)
	  , create     = __webpack_require__(46)
	  , aFunction  = __webpack_require__(21)
	  , anObject   = __webpack_require__(12)
	  , isObject   = __webpack_require__(13)
	  , fails      = __webpack_require__(7)
	  , bind       = __webpack_require__(77)
	  , rConstruct = (__webpack_require__(4).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(8)
	  , anObject    = __webpack_require__(12)
	  , toPrimitive = __webpack_require__(16);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(8)
	  , gOPD     = __webpack_require__(51).f
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(130)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , isObject       = __webpack_require__(13)
	  , anObject       = __webpack_require__(12);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(51)
	  , $export  = __webpack_require__(8)
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(8)
	  , getProto = __webpack_require__(59)
	  , anObject = __webpack_require__(12);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(8)
	  , anObject      = __webpack_require__(12)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(243)});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(50)
	  , gOPS     = __webpack_require__(43)
	  , anObject = __webpack_require__(12)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(8)
	  , anObject           = __webpack_require__(12)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(51)
	  , getPrototypeOf = __webpack_require__(59)
	  , has            = __webpack_require__(5)
	  , $export        = __webpack_require__(8)
	  , createDesc     = __webpack_require__(17)
	  , anObject       = __webpack_require__(12)
	  , isObject       = __webpack_require__(13);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(8)
	  , setProto = __webpack_require__(73);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(8)
	  , $includes = __webpack_require__(36)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(186)('includes');

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(8)
	  , $at     = __webpack_require__(127)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(37)
	  , repeat   = __webpack_require__(91)
	  , defined  = __webpack_require__(35);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(8)
	  , $pad    = __webpack_require__(250);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(83)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(8)
	  , defined     = __webpack_require__(35)
	  , toLength    = __webpack_require__(37)
	  , isRegExp    = __webpack_require__(134)
	  , getFlags    = __webpack_require__(196)
	  , RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(130)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(27)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(8)
	  , ownKeys        = __webpack_require__(243)
	  , toIObject      = __webpack_require__(32)
	  , gOPD           = __webpack_require__(51)
	  , createProperty = __webpack_require__(163);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(8)
	  , $values = __webpack_require__(259)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(30)
	  , toIObject = __webpack_require__(32)
	  , isEnum    = __webpack_require__(44).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(8)
	  , $entries = __webpack_require__(259)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(28)|| !__webpack_require__(7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(8)
	  , toObject        = __webpack_require__(58)
	  , aFunction       = __webpack_require__(21)
	  , $defineProperty = __webpack_require__(11);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(8)
	  , toObject                 = __webpack_require__(58)
	  , toPrimitive              = __webpack_require__(16)
	  , getPrototypeOf           = __webpack_require__(59)
	  , getOwnPropertyDescriptor = __webpack_require__(51).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(6) && $export($export.P + __webpack_require__(262), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(267)('Map')});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(75)
	  , from    = __webpack_require__(268);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(206);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(8);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(267)('Set')});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(8);
	
	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(8)
	  , cof     = __webpack_require__(34);
	
	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(8);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(211)
	  , $export = __webpack_require__(8)
	  , shared  = __webpack_require__(23)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(215)));
	
	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;
	
	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(214)
	  , from                    = __webpack_require__(268)
	  , metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , getPrototypeOf          = __webpack_require__(59)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(277)
	  , anObject                = __webpack_require__(12)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , getPrototypeOf         = __webpack_require__(59)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(277)
	  , anObject               = __webpack_require__(12)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(277)
	  , anObject                  = __webpack_require__(12)
	  , aFunction                 = __webpack_require__(21)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(8)
	  , microtask = __webpack_require__(209)()
	  , process   = __webpack_require__(4).process
	  , isNode    = __webpack_require__(34)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(8)
	  , global      = __webpack_require__(4)
	  , core        = __webpack_require__(9)
	  , microtask   = __webpack_require__(209)()
	  , OBSERVABLE  = __webpack_require__(25)('observable')
	  , aFunction   = __webpack_require__(21)
	  , anObject    = __webpack_require__(12)
	  , anInstance  = __webpack_require__(205)
	  , redefineAll = __webpack_require__(210)
	  , hide        = __webpack_require__(10)
	  , forOf       = __webpack_require__(206)
	  , RETURN      = forOf.RETURN;
	
	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});
	
	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function(){ return this; });
	
	$export($export.G, {Observable: $Observable});
	
	__webpack_require__(192)('Observable');

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(8)
	  , invoke     = __webpack_require__(78)
	  , partial    = __webpack_require__(289)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(290)
	  , invoke    = __webpack_require__(78)
	  , aFunction = __webpack_require__(21);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(8)
	  , $task   = __webpack_require__(208);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(193)
	  , redefine      = __webpack_require__(18)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(10)
	  , Iterators     = __webpack_require__(129)
	  , wks           = __webpack_require__(25)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(294)))

/***/ },
/* 294 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(296);
	module.exports = __webpack_require__(9).RegExp.escape;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(8)
	  , $re     = __webpack_require__(297)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 297 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.version = exports.motorHtml = exports.motor = exports.utils = exports.PushMenuLayout = exports.Plane = exports.Molecule = exports.Grid = exports.DoubleSidedPlane = exports.Cube = exports.Calendar = undefined;
	
	var _Calendar2 = __webpack_require__(299);
	
	var _Calendar3 = _interopRequireDefault(_Calendar2);
	
	var _Cube2 = __webpack_require__(326);
	
	var _Cube3 = _interopRequireDefault(_Cube2);
	
	var _DoubleSidedPlane2 = __webpack_require__(322);
	
	var _DoubleSidedPlane3 = _interopRequireDefault(_DoubleSidedPlane2);
	
	var _Grid2 = __webpack_require__(320);
	
	var _Grid3 = _interopRequireDefault(_Grid2);
	
	var _Molecule2 = __webpack_require__(306);
	
	var _Molecule3 = _interopRequireDefault(_Molecule2);
	
	var _Plane2 = __webpack_require__(323);
	
	var _Plane3 = _interopRequireDefault(_Plane2);
	
	var _PushMenuLayout2 = __webpack_require__(331);
	
	var _PushMenuLayout3 = _interopRequireDefault(_PushMenuLayout2);
	
	var _utils = __webpack_require__(314);
	
	var utils = _interopRequireWildcard(_utils);
	
	var _motor = __webpack_require__(361);
	
	var motor = _interopRequireWildcard(_motor);
	
	var _motorHtml = __webpack_require__(454);
	
	var motorHtml = _interopRequireWildcard(_motorHtml);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Calendar = _Calendar3.default;
	exports.Cube = _Cube3.default;
	exports.DoubleSidedPlane = _DoubleSidedPlane3.default;
	exports.Grid = _Grid3.default;
	exports.Molecule = _Molecule3.default;
	exports.Plane = _Plane3.default;
	exports.PushMenuLayout = _PushMenuLayout3.default;
	exports.utils = utils;
	exports.motor = motor;
	exports.motorHtml = motorHtml;
	var version = exports.version = '15.2.3';

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Calendar = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Transform = __webpack_require__(300);
	
	var _Transform2 = _interopRequireDefault(_Transform);
	
	var _Transitionable = __webpack_require__(301);
	
	var _Transitionable2 = _interopRequireDefault(_Transitionable);
	
	var _Easing = __webpack_require__(305);
	
	var _Easing2 = _interopRequireDefault(_Easing);
	
	var _Molecule2 = __webpack_require__(306);
	
	var _Molecule3 = _interopRequireDefault(_Molecule2);
	
	var _Grid = __webpack_require__(320);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	var _DoubleSidedPlane = __webpack_require__(322);
	
	var _DoubleSidedPlane2 = _interopRequireDefault(_DoubleSidedPlane);
	
	var _forLength = __webpack_require__(321);
	
	var _forLength2 = _interopRequireDefault(_forLength);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * A calendar widget for selecting a date (WIP).
	 *
	 * @class Calendar
	 * @extends Molecule
	 */
	var Calendar = exports.Calendar = function (_Molecule) {
	    _inherits(Calendar, _Molecule);
	
	    /**
	     * Create a new `Calendar` with the given Famo.us-style size array and
	     * transition. The transition is the type of animation used when switching
	     * between months.
	     *
	     * @constructor
	     * @param {Array} calendarSize A Famo.us-style width/height size array.
	     * @param {String} transition The name of the animation transition to use when switching months.
	     */
	    function Calendar(calendarSize, transition) {
	        _classCallCheck(this, Calendar);
	
	        var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, { size: calendarSize }));
	
	        _this.transition = transition;
	        _this.flipSide = 0; // 0 means the initial front faces are showing, 1 means the initial back faces are showing.
	        _this.columnsRows = [7, 6];
	        _this.planes = [];
	
	        _this._initializeTransitions();
	        _this._createGrid();
	
	        setTimeout(function () {
	            this.transitions[this.transition]();
	            setInterval(this.transitions[this.transition], 2000);
	        }.bind(_this), 800);
	        return _this;
	    }
	
	    /**
	     * Creates the grid used for the layout of the day cells.
	     *
	     * @private
	     */
	
	
	    _createClass(Calendar, [{
	        key: '_createGrid',
	        value: function _createGrid() {
	            var grid = new _Grid2.default(this.columnsRows[0], this.columnsRows[1], this.options.size);
	
	            (0, _forLength2.default)(this.columnsRows[0] * this.columnsRows[1], function (i) {
	                var plane = new _DoubleSidedPlane2.default({
	                    properties: {
	                        background: 'teal'
	                    }
	                });
	                this.planes.push(plane);
	            }.bind(this));
	
	            grid.setChildren(this.planes);
	            this.add(grid);
	        }
	
	        /**
	         * Set up `this.transitions`, containing the available month-to-month
	         * transitions.
	         *
	         * @private
	         */
	
	    }, {
	        key: '_initializeTransitions',
	        value: function _initializeTransitions() {
	            this.transitions = {
	                flipDiagonal: function () {
	                    this.flipSide = +!this.flipSide;
	                    // determine which dimension of the grid is shorter and which is longer.
	                    var shortest = 0;
	                    var longest = void 0;
	                    this.columnsRows.forEach(function (item, index) {
	                        if (item < this.columnsRows[shortest]) shortest = index;
	                    }.bind(this));
	                    longest = +!shortest;
	
	                    // for each diagonal of the grid, flip those cells.
	                    (0, _forLength2.default)(this.columnsRows[0] + this.columnsRows[1] - 1, function (column) {
	                        (0, _forLength2.default)(this.columnsRows[shortest], function (row) {
	                            if (column - row >= 0 && column - row < this.columnsRows[longest]) {
	                                var plane = this.planes[column - row + this.columnsRows[longest] * row];
	                                flipOne(plane, column);
	                            }
	                        }.bind(this));
	                    }.bind(this));
	
	                    function flipOne(item, column) {
	                        if (typeof item.__targetRotation == 'undefined') {
	                            item.__targetRotation = new _Transitionable2.default(0);
	                        }
	                        var rotation = new _Transitionable2.default(item.__targetRotation.get());
	                        item.__targetRotation.set(item.__targetRotation.get() + Math.PI);
	
	                        //item.get().transformFrom(function() {
	                        //return Transform.rotateY(rotation.get());
	                        //});
	                        item.children[0].get().transformFrom(function () {
	                            return _Transform2.default.rotateY(rotation.get());
	                        });
	                        item.children[1].get().transformFrom(function () {
	                            return _Transform2.default.rotateY(rotation.get() + Math.PI);
	                        });
	
	                        setTimeout(function () {
	                            rotation.set(item.__targetRotation.get(), { duration: 2000, curve: _Easing2.default.outExpo });
	                        }, 0 + 50 * column);
	                    }
	                }.bind(this)
	            };
	        }
	    }]);
	
	    return Calendar;
	}(_Molecule3.default);
	
	exports.default = Calendar;

/***/ },
/* 300 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	
	    /**
	     *  A high-performance static matrix math library used to calculate
	     *    affine transforms on surfaces and other renderables.
	     *    Famo.us uses 4x4 matrices corresponding directly to
	     *    WebKit matrices (column-major order).
	     *
	     *    The internal "type" of a Matrix is a 16-long float array in
	     *    row-major order, with:
	     *    elements [0],[1],[2],[4],[5],[6],[8],[9],[10] forming the 3x3
	     *          transformation matrix;
	     *    elements [12], [13], [14] corresponding to the t_x, t_y, t_z
	     *           translation;
	     *    elements [3], [7], [11] set to 0;
	     *    element [15] set to 1.
	     *    All methods are static.
	     *
	     * @static
	     *
	     * @class Transform
	     */
	    var Transform = {};
	
	    // WARNING: these matrices correspond to WebKit matrices, which are
	    //    transposed from their math counterparts
	    Transform.precision = 1e-6;
	    Transform.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	
	    /**
	     * Multiply two or more Transform matrix types to return a Transform matrix.
	     *
	     * @method multiply4x4
	     * @static
	     * @param {Transform} a left Transform
	     * @param {Transform} b right Transform
	     * @return {Transform}
	     */
	    Transform.multiply4x4 = function multiply4x4(a, b) {
	        return [
	            a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3],
	            a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3],
	            a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3],
	            a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3],
	            a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7],
	            a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7],
	            a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7],
	            a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7],
	            a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11],
	            a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11],
	            a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11],
	            a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11],
	            a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15],
	            a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15],
	            a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15],
	            a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]
	        ];
	    };
	
	    /**
	     * Fast-multiply two Transform matrix types to return a
	     *    Matrix, assuming bottom row on each is [0 0 0 1].
	     *
	     * @method multiply
	     * @static
	     * @param {Transform} a left Transform
	     * @param {Transform} b right Transform
	     * @return {Transform}
	     */
	    Transform.multiply = function multiply(a, b) {
	        return [
	            a[0] * b[0] + a[4] * b[1] + a[8] * b[2],
	            a[1] * b[0] + a[5] * b[1] + a[9] * b[2],
	            a[2] * b[0] + a[6] * b[1] + a[10] * b[2],
	            0,
	            a[0] * b[4] + a[4] * b[5] + a[8] * b[6],
	            a[1] * b[4] + a[5] * b[5] + a[9] * b[6],
	            a[2] * b[4] + a[6] * b[5] + a[10] * b[6],
	            0,
	            a[0] * b[8] + a[4] * b[9] + a[8] * b[10],
	            a[1] * b[8] + a[5] * b[9] + a[9] * b[10],
	            a[2] * b[8] + a[6] * b[9] + a[10] * b[10],
	            0,
	            a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12],
	            a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13],
	            a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14],
	            1
	        ];
	    };
	
	    /**
	     * Return a Transform translated by additional amounts in each
	     *    dimension. This is equivalent to the result of
	     *
	     *    Transform.multiply(Matrix.translate(t[0], t[1], t[2]), m).
	     *
	     * @method thenMove
	     * @static
	     * @param {Transform} m a Transform
	     * @param {Array.Number} t floats delta vector of length 2 or 3
	     * @return {Transform}
	     */
	    Transform.thenMove = function thenMove(m, t) {
	        if (!t[2]) t[2] = 0;
	        return [m[0], m[1], m[2], 0, m[4], m[5], m[6], 0, m[8], m[9], m[10], 0, m[12] + t[0], m[13] + t[1], m[14] + t[2], 1];
	    };
	
	    /**
	     * Return a Transform matrix which represents the result of a transform matrix
	     *    applied after a move. This is faster than the equivalent multiply.
	     *    This is equivalent to the result of:
	     *
	     *    Transform.multiply(m, Transform.translate(t[0], t[1], t[2])).
	     *
	     * @method moveThen
	     * @static
	     * @param {Array.Number} v vector representing initial movement
	     * @param {Transform} m matrix to apply afterwards
	     * @return {Transform} the resulting matrix
	     */
	    Transform.moveThen = function moveThen(v, m) {
	        if (!v[2]) v[2] = 0;
	        var t0 = v[0] * m[0] + v[1] * m[4] + v[2] * m[8];
	        var t1 = v[0] * m[1] + v[1] * m[5] + v[2] * m[9];
	        var t2 = v[0] * m[2] + v[1] * m[6] + v[2] * m[10];
	        return Transform.thenMove(m, [t0, t1, t2]);
	    };
	
	    /**
	     * Return a Transform which represents a translation by specified
	     *    amounts in each dimension.
	     *
	     * @method translate
	     * @static
	     * @param {Number} x x translation
	     * @param {Number} y y translation
	     * @param {Number} z z translation
	     * @return {Transform}
	     */
	    Transform.translate = function translate(x, y, z) {
	        if (z === undefined) z = 0;
	        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
	    };
	
	    /**
	     * Return a Transform scaled by a vector in each
	     *    dimension. This is a more performant equivalent to the result of
	     *
	     *    Transform.multiply(Transform.scale(s[0], s[1], s[2]), m).
	     *
	     * @method thenScale
	     * @static
	     * @param {Transform} m a matrix
	     * @param {Array.Number} s delta vector (array of floats &&
	     *    array.length == 3)
	     * @return {Transform}
	     */
	    Transform.thenScale = function thenScale(m, s) {
	        return [
	            s[0] * m[0], s[1] * m[1], s[2] * m[2], 0,
	            s[0] * m[4], s[1] * m[5], s[2] * m[6], 0,
	            s[0] * m[8], s[1] * m[9], s[2] * m[10], 0,
	            s[0] * m[12], s[1] * m[13], s[2] * m[14], 1
	        ];
	    };
	
	    /**
	     * Return a Transform which represents a scale by specified amounts
	     *    in each dimension.
	     *
	     * @method scale
	     * @static
	     * @param {Number} x x scale factor
	     * @param {Number} y y scale factor
	     * @param {Number} z z scale factor
	     * @return {Transform}
	     */
	    Transform.scale = function scale(x, y, z) {
	        if (z === undefined) z = 1;
	        if (y === undefined) y = x;
	        return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1];
	    };
	
	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the x axis.
	     *
	     * @method rotateX
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateX = function rotateX(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [1, 0, 0, 0, 0, cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1];
	    };
	
	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the y axis.
	     *
	     * @method rotateY
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateY = function rotateY(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [cosTheta, 0, -sinTheta, 0, 0, 1, 0, 0, sinTheta, 0, cosTheta, 0, 0, 0, 0, 1];
	    };
	
	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the z axis.
	     *
	     * @method rotateZ
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateZ = function rotateZ(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };
	
	    /**
	     * Return a Transform which represents composed clockwise
	     *    rotations along each of the axes. Equivalent to the result of
	     *    Matrix.multiply(rotateX(phi), rotateY(theta), rotateZ(psi)).
	     *
	     * @method rotate
	     * @static
	     * @param {Number} phi radians to rotate about the positive x axis
	     * @param {Number} theta radians to rotate about the positive y axis
	     * @param {Number} psi radians to rotate about the positive z axis
	     * @return {Transform}
	     */
	    Transform.rotate = function rotate(phi, theta, psi) {
	        var cosPhi = Math.cos(phi);
	        var sinPhi = Math.sin(phi);
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        var cosPsi = Math.cos(psi);
	        var sinPsi = Math.sin(psi);
	        var result = [
	            cosTheta * cosPsi,
	            cosPhi * sinPsi + sinPhi * sinTheta * cosPsi,
	            sinPhi * sinPsi - cosPhi * sinTheta * cosPsi,
	            0,
	            -cosTheta * sinPsi,
	            cosPhi * cosPsi - sinPhi * sinTheta * sinPsi,
	            sinPhi * cosPsi + cosPhi * sinTheta * sinPsi,
	            0,
	            sinTheta,
	            -sinPhi * cosTheta,
	            cosPhi * cosTheta,
	            0,
	            0, 0, 0, 1
	        ];
	        return result;
	    };
	
	    /**
	     * Return a Transform which represents an axis-angle rotation
	     *
	     * @method rotateAxis
	     * @static
	     * @param {Array.Number} v unit vector representing the axis to rotate about
	     * @param {Number} theta radians to rotate clockwise about the axis
	     * @return {Transform}
	     */
	    Transform.rotateAxis = function rotateAxis(v, theta) {
	        var sinTheta = Math.sin(theta);
	        var cosTheta = Math.cos(theta);
	        var verTheta = 1 - cosTheta; // versine of theta
	
	        var xxV = v[0] * v[0] * verTheta;
	        var xyV = v[0] * v[1] * verTheta;
	        var xzV = v[0] * v[2] * verTheta;
	        var yyV = v[1] * v[1] * verTheta;
	        var yzV = v[1] * v[2] * verTheta;
	        var zzV = v[2] * v[2] * verTheta;
	        var xs = v[0] * sinTheta;
	        var ys = v[1] * sinTheta;
	        var zs = v[2] * sinTheta;
	
	        var result = [
	            xxV + cosTheta, xyV + zs, xzV - ys, 0,
	            xyV - zs, yyV + cosTheta, yzV + xs, 0,
	            xzV + ys, yzV - xs, zzV + cosTheta, 0,
	            0, 0, 0, 1
	        ];
	        return result;
	    };
	
	    /**
	     * Return a Transform which represents a transform matrix applied about
	     * a separate origin point.
	     *
	     * @method aboutOrigin
	     * @static
	     * @param {Array.Number} v origin point to apply matrix
	     * @param {Transform} m matrix to apply
	     * @return {Transform}
	     */
	    Transform.aboutOrigin = function aboutOrigin(v, m) {
	        var t0 = v[0] - (v[0] * m[0] + v[1] * m[4] + v[2] * m[8]);
	        var t1 = v[1] - (v[0] * m[1] + v[1] * m[5] + v[2] * m[9]);
	        var t2 = v[2] - (v[0] * m[2] + v[1] * m[6] + v[2] * m[10]);
	        return Transform.thenMove(m, [t0, t1, t2]);
	    };
	
	    /**
	     * Return a Transform representation of a skew transformation
	     *
	     * @method skew
	     * @static
	     * @param {Number} phi scale factor skew in the x axis
	     * @param {Number} theta scale factor skew in the y axis
	     * @param {Number} psi scale factor skew in the z axis
	     * @return {Transform}
	     */
	    Transform.skew = function skew(phi, theta, psi) {
	        return [1, Math.tan(theta), 0, 0, Math.tan(psi), 1, 0, 0, 0, Math.tan(phi), 1, 0, 0, 0, 0, 1];
	    };
	
	    /**
	     * Return a Transform representation of a skew in the x-direction
	     *
	     * @method skewX
	     * @static
	     * @param {Number} angle the angle between the top and left sides
	     * @return {Transform}
	     */
	    Transform.skewX = function skewX(angle) {
	        return [1, 0, 0, 0, Math.tan(angle), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };
	
	    /**
	     * Return a Transform representation of a skew in the y-direction
	     *
	     * @method skewY
	     * @static
	     * @param {Number} angle the angle between the top and right sides
	     * @return {Transform}
	     */
	    Transform.skewY = function skewY(angle) {
	        return [1, Math.tan(angle), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };
	
	    /**
	     * Returns a perspective Transform matrix
	     *
	     * @method perspective
	     * @static
	     * @param {Number} focusZ z position of focal point
	     * @return {Transform}
	     */
	    Transform.perspective = function perspective(focusZ) {
	        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1 / focusZ, 0, 0, 0, 1];
	    };
	
	    /**
	     * Return translation vector component of given Transform
	     *
	     * @method getTranslate
	     * @static
	     * @param {Transform} m Transform
	     * @return {Array.Number} the translation vector [t_x, t_y, t_z]
	     */
	    Transform.getTranslate = function getTranslate(m) {
	        return [m[12], m[13], m[14]];
	    };
	
	    /**
	     * Return inverse affine transform for given Transform.
	     *   Note: This assumes m[3] = m[7] = m[11] = 0, and m[15] = 1.
	     *   Will provide incorrect results if not invertible or preconditions not met.
	     *
	     * @method inverse
	     * @static
	     * @param {Transform} m Transform
	     * @return {Transform}
	     */
	    Transform.inverse = function inverse(m) {
	        // only need to consider 3x3 section for affine
	        var c0 = m[5] * m[10] - m[6] * m[9];
	        var c1 = m[4] * m[10] - m[6] * m[8];
	        var c2 = m[4] * m[9] - m[5] * m[8];
	        var c4 = m[1] * m[10] - m[2] * m[9];
	        var c5 = m[0] * m[10] - m[2] * m[8];
	        var c6 = m[0] * m[9] - m[1] * m[8];
	        var c8 = m[1] * m[6] - m[2] * m[5];
	        var c9 = m[0] * m[6] - m[2] * m[4];
	        var c10 = m[0] * m[5] - m[1] * m[4];
	        var detM = m[0] * c0 - m[1] * c1 + m[2] * c2;
	        var invD = 1 / detM;
	        var result = [
	            invD * c0, -invD * c4, invD * c8, 0,
	            -invD * c1, invD * c5, -invD * c9, 0,
	            invD * c2, -invD * c6, invD * c10, 0,
	            0, 0, 0, 1
	        ];
	        result[12] = -m[12] * result[0] - m[13] * result[4] - m[14] * result[8];
	        result[13] = -m[12] * result[1] - m[13] * result[5] - m[14] * result[9];
	        result[14] = -m[12] * result[2] - m[13] * result[6] - m[14] * result[10];
	        return result;
	    };
	
	    /**
	     * Returns the transpose of a 4x4 matrix
	     *
	     * @method transpose
	     * @static
	     * @param {Transform} m matrix
	     * @return {Transform} the resulting transposed matrix
	     */
	    Transform.transpose = function transpose(m) {
	        return [m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]];
	    };
	
	    function _normSquared(v) {
	        return (v.length === 2) ? v[0] * v[0] + v[1] * v[1] : v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
	    }
	    function _norm(v) {
	        return Math.sqrt(_normSquared(v));
	    }
	    function _sign(n) {
	        return (n < 0) ? -1 : 1;
	    }
	
	    /**
	     * Decompose Transform into separate .translate, .rotate, .scale,
	     *    and .skew components.
	     *
	     * @method interpret
	     * @static
	     * @param {Transform} M transform matrix
	     * @return {Object} matrix spec object with component matrices .translate,
	     *    .rotate, .scale, .skew
	     */
	    Transform.interpret = function interpret(M) {
	
	        // QR decomposition via Householder reflections
	        //FIRST ITERATION
	
	        //default Q1 to the identity matrix;
	        var x = [M[0], M[1], M[2]];                // first column vector
	        var sgn = _sign(x[0]);                     // sign of first component of x (for stability)
	        var xNorm = _norm(x);                      // norm of first column vector
	        var v = [x[0] + sgn * xNorm, x[1], x[2]];  // v = x + sign(x[0])|x|e1
	        var mult = 2 / _normSquared(v);            // mult = 2/v'v
	
	        //bail out if our Matrix is singular
	        if (mult >= Infinity) {
	            return {translate: Transform.getTranslate(M), rotate: [0, 0, 0], scale: [0, 0, 0], skew: [0, 0, 0]};
	        }
	
	        //evaluate Q1 = I - 2vv'/v'v
	        var Q1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
	
	        //diagonals
	        Q1[0]  = 1 - mult * v[0] * v[0];    // 0,0 entry
	        Q1[5]  = 1 - mult * v[1] * v[1];    // 1,1 entry
	        Q1[10] = 1 - mult * v[2] * v[2];    // 2,2 entry
	
	        //upper diagonal
	        Q1[1] = -mult * v[0] * v[1];        // 0,1 entry
	        Q1[2] = -mult * v[0] * v[2];        // 0,2 entry
	        Q1[6] = -mult * v[1] * v[2];        // 1,2 entry
	
	        //lower diagonal
	        Q1[4] = Q1[1];                      // 1,0 entry
	        Q1[8] = Q1[2];                      // 2,0 entry
	        Q1[9] = Q1[6];                      // 2,1 entry
	
	        //reduce first column of M
	        var MQ1 = Transform.multiply(Q1, M);
	
	        //SECOND ITERATION on (1,1) minor
	        var x2 = [MQ1[5], MQ1[6]];
	        var sgn2 = _sign(x2[0]);                    // sign of first component of x (for stability)
	        var x2Norm = _norm(x2);                     // norm of first column vector
	        var v2 = [x2[0] + sgn2 * x2Norm, x2[1]];    // v = x + sign(x[0])|x|e1
	        var mult2 = 2 / _normSquared(v2);           // mult = 2/v'v
	
	        //evaluate Q2 = I - 2vv'/v'v
	        var Q2 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
	
	        //diagonal
	        Q2[5]  = 1 - mult2 * v2[0] * v2[0]; // 1,1 entry
	        Q2[10] = 1 - mult2 * v2[1] * v2[1]; // 2,2 entry
	
	        //off diagonals
	        Q2[6] = -mult2 * v2[0] * v2[1];     // 2,1 entry
	        Q2[9] = Q2[6];                      // 1,2 entry
	
	        //calc QR decomposition. Q = Q1*Q2, R = Q'*M
	        var Q = Transform.multiply(Q2, Q1);      //note: really Q transpose
	        var R = Transform.multiply(Q, M);
	
	        //remove negative scaling
	        var remover = Transform.scale(R[0] < 0 ? -1 : 1, R[5] < 0 ? -1 : 1, R[10] < 0 ? -1 : 1);
	        R = Transform.multiply(R, remover);
	        Q = Transform.multiply(remover, Q);
	
	        //decompose into rotate/scale/skew matrices
	        var result = {};
	        result.translate = Transform.getTranslate(M);
	        result.rotate = [Math.atan2(-Q[6], Q[10]), Math.asin(Q[2]), Math.atan2(-Q[1], Q[0])];
	        if (!result.rotate[0]) {
	            result.rotate[0] = 0;
	            result.rotate[2] = Math.atan2(Q[4], Q[5]);
	        }
	        result.scale = [R[0], R[5], R[10]];
	        result.skew = [Math.atan2(R[9], result.scale[2]), Math.atan2(R[8], result.scale[2]), Math.atan2(R[4], result.scale[0])];
	
	        //double rotation workaround
	        if (Math.abs(result.rotate[0]) + Math.abs(result.rotate[2]) > 1.5 * Math.PI) {
	            result.rotate[1] = Math.PI - result.rotate[1];
	            if (result.rotate[1] > Math.PI) result.rotate[1] -= 2 * Math.PI;
	            if (result.rotate[1] < -Math.PI) result.rotate[1] += 2 * Math.PI;
	            if (result.rotate[0] < 0) result.rotate[0] += Math.PI;
	            else result.rotate[0] -= Math.PI;
	            if (result.rotate[2] < 0) result.rotate[2] += Math.PI;
	            else result.rotate[2] -= Math.PI;
	        }
	
	        return result;
	    };
	
	    /**
	     * Weighted average between two matrices by averaging their
	     *     translation, rotation, scale, skew components.
	     *     f(M1,M2,t) = (1 - t) * M1 + t * M2
	     *
	     * @method average
	     * @static
	     * @param {Transform} M1 f(M1,M2,0) = M1
	     * @param {Transform} M2 f(M1,M2,1) = M2
	     * @param {Number} t
	     * @return {Transform}
	     */
	    Transform.average = function average(M1, M2, t) {
	        t = (t === undefined) ? 0.5 : t;
	        var specM1 = Transform.interpret(M1);
	        var specM2 = Transform.interpret(M2);
	
	        var specAvg = {
	            translate: [0, 0, 0],
	            rotate: [0, 0, 0],
	            scale: [0, 0, 0],
	            skew: [0, 0, 0]
	        };
	
	        for (var i = 0; i < 3; i++) {
	            specAvg.translate[i] = (1 - t) * specM1.translate[i] + t * specM2.translate[i];
	            specAvg.rotate[i] = (1 - t) * specM1.rotate[i] + t * specM2.rotate[i];
	            specAvg.scale[i] = (1 - t) * specM1.scale[i] + t * specM2.scale[i];
	            specAvg.skew[i] = (1 - t) * specM1.skew[i] + t * specM2.skew[i];
	        }
	        return Transform.build(specAvg);
	    };
	
	    /**
	     * Compose .translate, .rotate, .scale, .skew components into
	     * Transform matrix
	     *
	     * @method build
	     * @static
	     * @param {matrixSpec} spec object with component matrices .translate,
	     *    .rotate, .scale, .skew
	     * @return {Transform} composed transform
	     */
	    Transform.build = function build(spec) {
	        var scaleMatrix = Transform.scale(spec.scale[0], spec.scale[1], spec.scale[2]);
	        var skewMatrix = Transform.skew(spec.skew[0], spec.skew[1], spec.skew[2]);
	        var rotateMatrix = Transform.rotate(spec.rotate[0], spec.rotate[1], spec.rotate[2]);
	        return Transform.thenMove(Transform.multiply(Transform.multiply(rotateMatrix, skewMatrix), scaleMatrix), spec.translate);
	    };
	
	    /**
	     * Determine if two Transforms are component-wise equal
	     *   Warning: breaks on perspective Transforms
	     *
	     * @method equals
	     * @static
	     * @param {Transform} a matrix
	     * @param {Transform} b matrix
	     * @return {boolean}
	     */
	    Transform.equals = function equals(a, b) {
	        return !Transform.notEquals(a, b);
	    };
	
	    /**
	     * Determine if two Transforms are component-wise unequal
	     *   Warning: breaks on perspective Transforms
	     *
	     * @method notEquals
	     * @static
	     * @param {Transform} a matrix
	     * @param {Transform} b matrix
	     * @return {boolean}
	     */
	    Transform.notEquals = function notEquals(a, b) {
	        if (a === b) return false;
	
	        // shortci
	        return !(a && b) ||
	            a[12] !== b[12] || a[13] !== b[13] || a[14] !== b[14] ||
	            a[0] !== b[0] || a[1] !== b[1] || a[2] !== b[2] ||
	            a[4] !== b[4] || a[5] !== b[5] || a[6] !== b[6] ||
	            a[8] !== b[8] || a[9] !== b[9] || a[10] !== b[10];
	    };
	
	    /**
	     * Constrain angle-trio components to range of [-pi, pi).
	     *
	     * @method normalizeRotation
	     * @static
	     * @param {Array.Number} rotation phi, theta, psi (array of floats
	     *    && array.length == 3)
	     * @return {Array.Number} new phi, theta, psi triplet
	     *    (array of floats && array.length == 3)
	     */
	    Transform.normalizeRotation = function normalizeRotation(rotation) {
	        var result = rotation.slice(0);
	        if (result[0] === Math.PI * 0.5 || result[0] === -Math.PI * 0.5) {
	            result[0] = -result[0];
	            result[1] = Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        if (result[0] > Math.PI * 0.5) {
	            result[0] = result[0] - Math.PI;
	            result[1] = Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        if (result[0] < -Math.PI * 0.5) {
	            result[0] = result[0] + Math.PI;
	            result[1] = -Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        while (result[1] < -Math.PI) result[1] += 2 * Math.PI;
	        while (result[1] >= Math.PI) result[1] -= 2 * Math.PI;
	        while (result[2] < -Math.PI) result[2] += 2 * Math.PI;
	        while (result[2] >= Math.PI) result[2] -= 2 * Math.PI;
	        return result;
	    };
	
	    /**
	     * (Property) Array defining a translation forward in z by 1
	     *
	     * @property {array} inFront
	     * @static
	     * @final
	     */
	    Transform.inFront = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1e-3, 1];
	
	    /**
	     * (Property) Array defining a translation backwards in z by 1
	     *
	     * @property {array} behind
	     * @static
	     * @final
	     */
	    Transform.behind = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1e-3, 1];
	
	    module.exports = Transform;


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	/*eslint-disable new-cap */
	    var MultipleTransition = __webpack_require__(302);
	    var TweenTransition = __webpack_require__(304);
	
	    /**
	     * A state maintainer for a smooth transition between
	     *    numerically-specified states. Example numeric states include floats or
	     *    Transform objects.
	     *
	     * An initial state is set with the constructor or set(startState). A
	     *    corresponding end state and transition are set with set(endState,
	     *    transition). Subsequent calls to set(endState, transition) begin at
	     *    the last state. Calls to get(timestamp) provide the interpolated state
	     *    along the way.
	     *
	     * Note that there is no event loop here - calls to get() are the only way
	     *    to find state projected to the current (or provided) time and are
	     *    the only way to trigger callbacks. Usually this kind of object would
	     *    be part of the render() path of a visible component.
	     *
	     * @class Transitionable
	     * @constructor
	     * @param {number|Array.Number|Object.<number|string, number>} start
	     *    beginning state
	     */
	    function Transitionable(start) {
	        this.currentAction = null;
	        this.actionQueue = [];
	        this.callbackQueue = [];
	
	        this.state = 0;
	        this.velocity = undefined;
	        this._callback = undefined;
	        this._engineInstance = null;
	        this._currentMethod = null;
	
	        this.set(start);
	    }
	
	    var transitionMethods = {};
	
	    Transitionable.register = function register(methods) {
	        var success = true;
	        for (var method in methods) {
	            if (!Transitionable.registerMethod(method, methods[method]))
	                success = false;
	        }
	        return success;
	    };
	
	    Transitionable.registerMethod = function registerMethod(name, engineClass) {
	        if (!(name in transitionMethods)) {
	            transitionMethods[name] = engineClass;
	            return true;
	        }
	        else return false;
	    };
	
	    Transitionable.unregisterMethod = function unregisterMethod(name) {
	        if (name in transitionMethods) {
	            delete transitionMethods[name];
	            return true;
	        }
	        else return false;
	    };
	
	    function _loadNext() {
	        if (this._callback) {
	            var callback = this._callback;
	            this._callback = undefined;
	            callback();
	        }
	        if (this.actionQueue.length <= 0) {
	            this.set(this.get()); // no update required
	            return;
	        }
	        this.currentAction = this.actionQueue.shift();
	        this._callback = this.callbackQueue.shift();
	
	        var method = null;
	        var endValue = this.currentAction[0];
	        var transition = this.currentAction[1];
	        if (transition instanceof Object && transition.method) {
	            method = transition.method;
	            if (typeof method === 'string') method = transitionMethods[method];
	        }
	        else {
	            method = TweenTransition;
	        }
	
	        if (this._currentMethod !== method) {
	            if (!(endValue instanceof Object) || method.SUPPORTS_MULTIPLE === true || endValue.length <= method.SUPPORTS_MULTIPLE) {
	                this._engineInstance = new method();
	            }
	            else {
	                this._engineInstance = new MultipleTransition(method);
	            }
	            this._currentMethod = method;
	        }
	
	        this._engineInstance.reset(this.state, this.velocity);
	        if (this.velocity !== undefined) transition.velocity = this.velocity;
	        this._engineInstance.set(endValue, transition, _loadNext.bind(this));
	    }
	
	    /**
	     * Add transition to end state to the queue of pending transitions. Special
	     *    Use: calling without a transition resets the object to that state with
	     *    no pending actions
	     *
	     * @method set
	     *
	     * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endState
	     *    end state to which we interpolate
	     * @param {transition=} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {function()=} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    Transitionable.prototype.set = function set(endState, transition, callback) {
	        if (!transition) {
	            this.reset(endState);
	            if (callback) callback();
	            return this;
	        }
	
	        var action = [endState, transition];
	        this.actionQueue.push(action);
	        this.callbackQueue.push(callback);
	        if (!this.currentAction) _loadNext.call(this);
	        return this;
	    };
	
	    /**
	     * Cancel all transitions and reset to a stable state
	     *
	     * @method reset
	     *
	     * @param {number|Array.Number|Object.<number, number>} startState
	     *    stable state to set to
	     */
	    Transitionable.prototype.reset = function reset(startState, startVelocity) {
	        this._currentMethod = null;
	        this._engineInstance = null;
	        this._callback = undefined;
	        this.state = startState;
	        this.velocity = startVelocity;
	        this.currentAction = null;
	        this.actionQueue = [];
	        this.callbackQueue = [];
	    };
	
	    /**
	     * Add delay action to the pending action queue queue.
	     *
	     * @method delay
	     *
	     * @param {number} duration delay time (ms)
	     * @param {function} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    Transitionable.prototype.delay = function delay(duration, callback) {
	        var endValue;
	        if (this.actionQueue.length) endValue = this.actionQueue[this.actionQueue.length - 1][0];
	        else if (this.currentAction) endValue = this.currentAction[0];
	        else endValue = this.get();
	
	        return this.set(endValue, { duration: duration,
	            curve: function() {
	                return 0;
	            }},
	            callback
	        );
	    };
	
	    /**
	     * Get interpolated state of current action at provided time. If the last
	     *    action has completed, invoke its callback.
	     *
	     * @method get
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     * @return {number|Object.<number|string, number>} beginning state
	     *    interpolated to this point in time.
	     */
	    Transitionable.prototype.get = function get(timestamp) {
	        if (this._engineInstance) {
	            if (this._engineInstance.getVelocity)
	                this.velocity = this._engineInstance.getVelocity();
	            this.state = this._engineInstance.get(timestamp);
	        }
	        return this.state;
	    };
	
	    /**
	     * Is there at least one action pending completion?
	     *
	     * @method isActive
	     *
	     * @return {boolean}
	     */
	    Transitionable.prototype.isActive = function isActive() {
	        return !!this.currentAction;
	    };
	
	    /**
	     * Halt transition at current state and erase all pending actions.
	     *
	     * @method halt
	     */
	    Transitionable.prototype.halt = function halt() {
	        return this.set(this.get());
	    };
	
	    module.exports = Transitionable;


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	/*eslint-disable new-cap */
	    var Utility = __webpack_require__(303);
	
	    /**
	     * Transition meta-method to support transitioning multiple
	     *   values with scalar-only methods.
	     *
	     *
	     * @class MultipleTransition
	     * @constructor
	     *
	     * @param {Object} method Transionable class to multiplex
	     */
	    function MultipleTransition(method) {
	        this.method = method;
	        this._instances = [];
	        this.state = [];
	    }
	
	    MultipleTransition.SUPPORTS_MULTIPLE = true;
	
	    /**
	     * Get the state of each transition.
	     *
	     * @method get
	     *
	     * @return state {Number|Array} state array
	     */
	    MultipleTransition.prototype.get = function get() {
	        for (var i = 0; i < this._instances.length; i++) {
	            this.state[i] = this._instances[i].get();
	        }
	        return this.state;
	    };
	
	    /**
	     * Set the end states with a shared transition, with optional callback.
	     *
	     * @method set
	     *
	     * @param {Number|Array} endState Final State.  Use a multi-element argument for multiple transitions.
	     * @param {Object} transition Transition definition, shared among all instances
	     * @param {Function} callback called when all endStates have been reached.
	     */
	    MultipleTransition.prototype.set = function set(endState, transition, callback) {
	        var _allCallback = Utility.after(endState.length, callback);
	        for (var i = 0; i < endState.length; i++) {
	            if (!this._instances[i]) this._instances[i] = new (this.method)();
	            this._instances[i].set(endState[i], transition, _allCallback);
	        }
	    };
	
	    /**
	     * Reset all transitions to start state.
	     *
	     * @method reset
	     *
	     * @param  {Number|Array} startState Start state
	     */
	    MultipleTransition.prototype.reset = function reset(startState) {
	        for (var i = 0; i < startState.length; i++) {
	            if (!this._instances[i]) this._instances[i] = new (this.method)();
	            this._instances[i].reset(startState[i]);
	        }
	    };
	
	    module.exports = MultipleTransition;


/***/ },
/* 303 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    /**
	     * This namespace holds standalone functionality.
	     *  Currently includes name mapping for transition curves,
	     *  name mapping for origin pairs, and the after() function.
	     *
	     * @class Utility
	     * @static
	     */
	    var Utility = {};
	
	    /**
	     * Table of direction array positions
	     *
	     * @property {object} Direction
	     * @final
	     */
	    Utility.Direction = {
	        X: 0,
	        Y: 1,
	        Z: 2
	    };
	
	    /**
	     * Return wrapper around callback function. Once the wrapper is called N
	     *   times, invoke the callback function. Arguments and scope preserved.
	     *
	     * @method after
	     *
	     * @param {number} count number of calls before callback function invoked
	     * @param {Function} callback wrapped callback function
	     *
	     * @return {function} wrapped callback with coundown feature
	     */
	    Utility.after = function after(count, callback) {
	        var counter = count;
	        return function() {
	            counter--;
	            if (counter === 0) callback.apply(this, arguments);
	        };
	    };
	
	    /**
	     * Load a URL and return its contents in a callback
	     *
	     * @method loadURL
	     *
	     * @param {string} url URL of object
	     * @param {function} callback callback to dispatch with content
	     */
	    Utility.loadURL = function loadURL(url, callback) {
	        var xhr = new XMLHttpRequest();
	        xhr.onreadystatechange = function onreadystatechange() {
	            if (this.readyState === 4) {
	                if (callback) callback(this.responseText);
	            }
	        };
	        xhr.open('GET', url);
	        xhr.send();
	    };
	
	    /**
	     * Create a document fragment from a string of HTML
	     *
	     * @method createDocumentFragmentFromHTML
	     *
	     * @param {string} html HTML to convert to DocumentFragment
	     *
	     * @return {DocumentFragment} DocumentFragment representing input HTML
	     */
	    Utility.createDocumentFragmentFromHTML = function createDocumentFragmentFromHTML(html) {
	        var element = document.createElement('div');
	        element.innerHTML = html;
	        var result = document.createDocumentFragment();
	        while (element.hasChildNodes()) result.appendChild(element.firstChild);
	        return result;
	    };
	
	    /*
	     *  Deep clone an object.
	     *  @param b {Object} Object to clone
	     *  @return a {Object} Cloned object.
	     */
	    Utility.clone = function clone(b) {
	        var a;
	        if (typeof b === 'object') {
	            a = (b instanceof Array) ? [] : {};
	            for (var key in b) {
	                if (typeof b[key] === 'object' && b[key] !== null) {
	                    if (b[key] instanceof Array) {
	                        a[key] = new Array(b[key].length);
	                        for (var i = 0; i < b[key].length; i++) {
	                            a[key][i] = Utility.clone(b[key][i]);
	                        }
	                    }
	                    else {
	                      a[key] = Utility.clone(b[key]);
	                    }
	                }
	                else {
	                    a[key] = b[key];
	                }
	            }
	        }
	        else {
	            a = b;
	        }
	        return a;
	    };
	
	    module.exports = Utility;


/***/ },
/* 304 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	
	    /**
	     *
	     * A state maintainer for a smooth transition between
	     *    numerically-specified states.  Example numeric states include floats or
	     *    Transfornm objects.
	     *
	     *    An initial state is set with the constructor or set(startValue). A
	     *    corresponding end state and transition are set with set(endValue,
	     *    transition). Subsequent calls to set(endValue, transition) begin at
	     *    the last state. Calls to get(timestamp) provide the _interpolated state
	     *    along the way.
	     *
	     *   Note that there is no event loop here - calls to get() are the only way
	     *    to find out state projected to the current (or provided) time and are
	     *    the only way to trigger callbacks. Usually this kind of object would
	     *    be part of the render() path of a visible component.
	     *
	     * @class TweenTransition
	     * @constructor
	     *
	     * @param {Object} options TODO
	     *    beginning state
	     */
	    function TweenTransition(options) {
	        this.options = Object.create(TweenTransition.DEFAULT_OPTIONS);
	        if (options) this.setOptions(options);
	
	        this._startTime = 0;
	        this._startValue = 0;
	        this._updateTime = 0;
	        this._endValue = 0;
	        this._curve = undefined;
	        this._duration = 0;
	        this._active = false;
	        this._callback = undefined;
	        this.state = 0;
	        this.velocity = undefined;
	    }
	
	    /**
	     * Transition curves mapping independent variable t from domain [0,1] to a
	     *    range within [0,1]. Includes functions 'linear', 'easeIn', 'easeOut',
	     *    'easeInOut', 'easeOutBounce', 'spring'.
	     *
	     * @property {object} Curve
	     * @final
	     */
	    TweenTransition.Curves = {
	        linear: function(t) {
	            return t;
	        },
	        easeIn: function(t) {
	            return t*t;
	        },
	        easeOut: function(t) {
	            return t*(2-t);
	        },
	        easeInOut: function(t) {
	            if (t <= 0.5) return 2*t*t;
	            else return -2*t*t + 4*t - 1;
	        },
	        easeOutBounce: function(t) {
	            return t*(3 - 2*t);
	        },
	        spring: function(t) {
	            return (1 - t) * Math.sin(6 * Math.PI * t) + t;
	        }
	    };
	
	    TweenTransition.SUPPORTS_MULTIPLE = true;
	    TweenTransition.DEFAULT_OPTIONS = {
	        curve: TweenTransition.Curves.linear,
	        duration: 500,
	        speed: 0 /* considered only if positive */
	    };
	
	    var registeredCurves = {};
	
	    /**
	     * Add "unit" curve to internal dictionary of registered curves.
	     *
	     * @method registerCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @param {unitCurve} curve function of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     * @return {boolean} false if key is taken, else true
	     */
	    TweenTransition.registerCurve = function registerCurve(curveName, curve) {
	        if (!registeredCurves[curveName]) {
	            registeredCurves[curveName] = curve;
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	
	    /**
	     * Remove object with key "curveName" from internal dictionary of registered
	     *    curves.
	     *
	     * @method unregisterCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @return {boolean} false if key has no dictionary value
	     */
	    TweenTransition.unregisterCurve = function unregisterCurve(curveName) {
	        if (registeredCurves[curveName]) {
	            delete registeredCurves[curveName];
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	
	    /**
	     * Retrieve function with key "curveName" from internal dictionary of
	     *    registered curves. Default curves are defined in the
	     *    TweenTransition.Curves array, where the values represent
	     *    unitCurve functions.
	     *
	     * @method getCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @return {unitCurve} curve function of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     */
	    TweenTransition.getCurve = function getCurve(curveName) {
	        var curve = registeredCurves[curveName];
	        if (curve !== undefined) return curve;
	        else throw new Error('curve not registered');
	    };
	
	    /**
	     * Retrieve all available curves.
	     *
	     * @method getCurves
	     *
	     * @static
	     *
	     * @return {object} curve functions of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     */
	    TweenTransition.getCurves = function getCurves() {
	        return registeredCurves;
	    };
	
	     // Interpolate: If a linear function f(0) = a, f(1) = b, then return f(t)
	    function _interpolate(a, b, t) {
	        return ((1 - t) * a) + (t * b);
	    }
	
	    function _clone(obj) {
	        if (obj instanceof Object) {
	            if (obj instanceof Array) return obj.slice(0);
	            else return Object.create(obj);
	        }
	        else return obj;
	    }
	
	    // Fill in missing properties in "transition" with those in defaultTransition, and
	    //   convert internal named curve to function object, returning as new
	    //   object.
	    function _normalize(transition, defaultTransition) {
	        var result = {curve: defaultTransition.curve};
	        if (defaultTransition.duration) result.duration = defaultTransition.duration;
	        if (defaultTransition.speed) result.speed = defaultTransition.speed;
	        if (transition instanceof Object) {
	            if (transition.duration !== undefined) result.duration = transition.duration;
	            if (transition.curve) result.curve = transition.curve;
	            if (transition.speed) result.speed = transition.speed;
	        }
	        if (typeof result.curve === 'string') result.curve = TweenTransition.getCurve(result.curve);
	        return result;
	    }
	
	    /**
	     * Set internal options, overriding any default options.
	     *
	     * @method setOptions
	     *
	     *
	     * @param {Object} options options object
	     * @param {Object} [options.curve] function mapping [0,1] to [0,1] or identifier
	     * @param {Number} [options.duration] duration in ms
	     * @param {Number} [options.speed] speed in pixels per ms
	     */
	    TweenTransition.prototype.setOptions = function setOptions(options) {
	        if (options.curve !== undefined) this.options.curve = options.curve;
	        if (options.duration !== undefined) this.options.duration = options.duration;
	        if (options.speed !== undefined) this.options.speed = options.speed;
	    };
	
	    /**
	     * Add transition to end state to the queue of pending transitions. Special
	     *    Use: calling without a transition resets the object to that state with
	     *    no pending actions
	     *
	     * @method set
	     *
	     *
	     * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endValue
	     *    end state to which we _interpolate
	     * @param {transition=} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {function()=} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    TweenTransition.prototype.set = function set(endValue, transition, callback) {
	        if (!transition) {
	            this.reset(endValue);
	            if (callback) callback();
	            return;
	        }
	
	        this._startValue = _clone(this.get());
	        transition = _normalize(transition, this.options);
	        if (transition.speed) {
	            var startValue = this._startValue;
	            if (startValue instanceof Object) {
	                var variance = 0;
	                for (var i in startValue) variance += (endValue[i] - startValue[i]) * (endValue[i] - startValue[i]);
	                transition.duration = Math.sqrt(variance) / transition.speed;
	            }
	            else {
	                transition.duration = Math.abs(endValue - startValue) / transition.speed;
	            }
	        }
	
	        this._startTime = Date.now();
	        this._endValue = _clone(endValue);
	        this._startVelocity = _clone(transition.velocity);
	        this._duration = transition.duration;
	        this._curve = transition.curve;
	        this._active = true;
	        this._callback = callback;
	    };
	
	    /**
	     * Cancel all transitions and reset to a stable state
	     *
	     * @method reset
	     *
	     * @param {number|Array.Number|Object.<number, number>} startValue
	     *    starting state
	     * @param {number} startVelocity
	     *    starting velocity
	     */
	    TweenTransition.prototype.reset = function reset(startValue, startVelocity) {
	        if (this._callback) {
	            var callback = this._callback;
	            this._callback = undefined;
	            callback();
	        }
	        this.state = _clone(startValue);
	        this.velocity = _clone(startVelocity);
	        this._startTime = 0;
	        this._duration = 0;
	        this._updateTime = 0;
	        this._startValue = this.state;
	        this._startVelocity = this.velocity;
	        this._endValue = this.state;
	        this._active = false;
	    };
	
	    /**
	     * Get current velocity
	     *
	     * @method getVelocity
	     *
	     * @returns {Number} velocity
	     */
	    TweenTransition.prototype.getVelocity = function getVelocity() {
	        return this.velocity;
	    };
	
	    /**
	     * Get interpolated state of current action at provided time. If the last
	     *    action has completed, invoke its callback.
	     *
	     * @method get
	     *
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     * @return {number|Object.<number|string, number>} beginning state
	     *    _interpolated to this point in time.
	     */
	    TweenTransition.prototype.get = function get(timestamp) {
	        this.update(timestamp);
	        return this.state;
	    };
	
	    function _calculateVelocity(current, start, curve, duration, t) {
	        var velocity;
	        var eps = 1e-7;
	        var speed = (curve(t) - curve(t - eps)) / eps;
	        if (current instanceof Array) {
	            velocity = [];
	            for (var i = 0; i < current.length; i++){
	                if (typeof current[i] === 'number')
	                    velocity[i] = speed * (current[i] - start[i]) / duration;
	                else
	                    velocity[i] = 0;
	            }
	
	        }
	        else velocity = speed * (current - start) / duration;
	        return velocity;
	    }
	
	    function _calculateState(start, end, t) {
	        var state;
	        if (start instanceof Array) {
	            state = [];
	            for (var i = 0; i < start.length; i++) {
	                if (typeof start[i] === 'number')
	                    state[i] = _interpolate(start[i], end[i], t);
	                else
	                    state[i] = start[i];
	            }
	        }
	        else state = _interpolate(start, end, t);
	        return state;
	    }
	
	    /**
	     * Update internal state to the provided timestamp. This may invoke the last
	     *    callback and begin a new action.
	     *
	     * @method update
	     *
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     */
	    TweenTransition.prototype.update = function update(timestamp) {
	        if (!this._active) {
	            if (this._callback) {
	                var callback = this._callback;
	                this._callback = undefined;
	                callback();
	            }
	            return;
	        }
	
	        if (!timestamp) timestamp = Date.now();
	        if (this._updateTime >= timestamp) return;
	        this._updateTime = timestamp;
	
	        var timeSinceStart = timestamp - this._startTime;
	        if (timeSinceStart >= this._duration) {
	            this.state = this._endValue;
	            this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, 1);
	            this._active = false;
	        }
	        else if (timeSinceStart < 0) {
	            this.state = this._startValue;
	            this.velocity = this._startVelocity;
	        }
	        else {
	            var t = timeSinceStart / this._duration;
	            this.state = _calculateState(this._startValue, this._endValue, this._curve(t));
	            this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, t);
	        }
	    };
	
	    /**
	     * Is there at least one action pending completion?
	     *
	     * @method isActive
	     *
	     *
	     * @return {boolean}
	     */
	    TweenTransition.prototype.isActive = function isActive() {
	        return this._active;
	    };
	
	    /**
	     * Halt transition at current state and erase all pending actions.
	     *
	     * @method halt
	     *
	     */
	    TweenTransition.prototype.halt = function halt() {
	        this.reset(this.get());
	    };
	
	    // Register all the default curves
	    TweenTransition.registerCurve('linear', TweenTransition.Curves.linear);
	    TweenTransition.registerCurve('easeIn', TweenTransition.Curves.easeIn);
	    TweenTransition.registerCurve('easeOut', TweenTransition.Curves.easeOut);
	    TweenTransition.registerCurve('easeInOut', TweenTransition.Curves.easeInOut);
	    TweenTransition.registerCurve('easeOutBounce', TweenTransition.Curves.easeOutBounce);
	    TweenTransition.registerCurve('spring', TweenTransition.Curves.spring);
	
	    TweenTransition.customCurve = function customCurve(v1, v2) {
	        v1 = v1 || 0; v2 = v2 || 0;
	        return function(t) {
	            return v1*t + (-2*v1 - v2 + 3)*t*t + (v1 + v2 - 2)*t*t*t;
	        };
	    };
	
	    module.exports = TweenTransition;


/***/ },
/* 305 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	
	    /**
	     * A library of curves which map an animation explicitly as a function of time.
	     *
	     * @class Easing
	     */
	    var Easing = {
	
	        /**
	         * @property inQuad
	         * @static
	         */
	        inQuad: function(t) {
	            return t*t;
	        },
	
	        /**
	         * @property outQuad
	         * @static
	         */
	        outQuad: function(t) {
	            return -(t-=1)*t+1;
	        },
	
	        /**
	         * @property inOutQuad
	         * @static
	         */
	        inOutQuad: function(t) {
	            if ((t/=.5) < 1) return .5*t*t;
	            return -.5*((--t)*(t-2) - 1);
	        },
	
	        /**
	         * @property inCubic
	         * @static
	         */
	        inCubic: function(t) {
	            return t*t*t;
	        },
	
	        /**
	         * @property outCubic
	         * @static
	         */
	        outCubic: function(t) {
	            return ((--t)*t*t + 1);
	        },
	
	        /**
	         * @property inOutCubic
	         * @static
	         */
	        inOutCubic: function(t) {
	            if ((t/=.5) < 1) return .5*t*t*t;
	            return .5*((t-=2)*t*t + 2);
	        },
	
	        /**
	         * @property inQuart
	         * @static
	         */
	        inQuart: function(t) {
	            return t*t*t*t;
	        },
	
	        /**
	         * @property outQuart
	         * @static
	         */
	        outQuart: function(t) {
	            return -((--t)*t*t*t - 1);
	        },
	
	        /**
	         * @property inOutQuart
	         * @static
	         */
	        inOutQuart: function(t) {
	            if ((t/=.5) < 1) return .5*t*t*t*t;
	            return -.5 * ((t-=2)*t*t*t - 2);
	        },
	
	        /**
	         * @property inQuint
	         * @static
	         */
	        inQuint: function(t) {
	            return t*t*t*t*t;
	        },
	
	        /**
	         * @property outQuint
	         * @static
	         */
	        outQuint: function(t) {
	            return ((--t)*t*t*t*t + 1);
	        },
	
	        /**
	         * @property inOutQuint
	         * @static
	         */
	        inOutQuint: function(t) {
	            if ((t/=.5) < 1) return .5*t*t*t*t*t;
	            return .5*((t-=2)*t*t*t*t + 2);
	        },
	
	        /**
	         * @property inSine
	         * @static
	         */
	        inSine: function(t) {
	            return -1.0*Math.cos(t * (Math.PI/2)) + 1.0;
	        },
	
	        /**
	         * @property outSine
	         * @static
	         */
	        outSine: function(t) {
	            return Math.sin(t * (Math.PI/2));
	        },
	
	        /**
	         * @property inOutSine
	         * @static
	         */
	        inOutSine: function(t) {
	            return -.5*(Math.cos(Math.PI*t) - 1);
	        },
	
	        /**
	         * @property inExpo
	         * @static
	         */
	        inExpo: function(t) {
	            return (t===0) ? 0.0 : Math.pow(2, 10 * (t - 1));
	        },
	
	        /**
	         * @property outExpo
	         * @static
	         */
	        outExpo: function(t) {
	            return (t===1.0) ? 1.0 : (-Math.pow(2, -10 * t) + 1);
	        },
	
	        /**
	         * @property inOutExpo
	         * @static
	         */
	        inOutExpo: function(t) {
	            if (t===0) return 0.0;
	            if (t===1.0) return 1.0;
	            if ((t/=.5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
	            return .5 * (-Math.pow(2, -10 * --t) + 2);
	        },
	
	        /**
	         * @property inCirc
	         * @static
	         */
	        inCirc: function(t) {
	            return -(Math.sqrt(1 - t*t) - 1);
	        },
	
	        /**
	         * @property outCirc
	         * @static
	         */
	        outCirc: function(t) {
	            return Math.sqrt(1 - (--t)*t);
	        },
	
	        /**
	         * @property inOutCirc
	         * @static
	         */
	        inOutCirc: function(t) {
	            if ((t/=.5) < 1) return -.5 * (Math.sqrt(1 - t*t) - 1);
	            return .5 * (Math.sqrt(1 - (t-=2)*t) + 1);
	        },
	
	        /**
	         * @property inElastic
	         * @static
	         */
	        inElastic: function(t) {
	            var s=1.70158;var p=0;var a=1.0;
	            if (t===0) return 0.0;  if (t===1) return 1.0;  if (!p) p=.3;
	            s = p/(2*Math.PI) * Math.asin(1.0/a);
	            return -(a*Math.pow(2,10*(t-=1)) * Math.sin((t-s)*(2*Math.PI)/ p));
	        },
	
	        /**
	         * @property outElastic
	         * @static
	         */
	        outElastic: function(t) {
	            var s=1.70158;var p=0;var a=1.0;
	            if (t===0) return 0.0;  if (t===1) return 1.0;  if (!p) p=.3;
	            s = p/(2*Math.PI) * Math.asin(1.0/a);
	            return a*Math.pow(2,-10*t) * Math.sin((t-s)*(2*Math.PI)/p) + 1.0;
	        },
	
	        /**
	         * @property inOutElastic
	         * @static
	         */
	        inOutElastic: function(t) {
	            var s=1.70158;var p=0;var a=1.0;
	            if (t===0) return 0.0;  if ((t/=.5)===2) return 1.0;  if (!p) p=(.3*1.5);
	            s = p/(2*Math.PI) * Math.asin(1.0/a);
	            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin((t-s)*(2*Math.PI)/p));
	            return a*Math.pow(2,-10*(t-=1)) * Math.sin((t-s)*(2*Math.PI)/p)*.5 + 1.0;
	        },
	
	        /**
	         * @property inBack
	         * @static
	         */
	        inBack: function(t, s) {
	            if (s === undefined) s = 1.70158;
	            return t*t*((s+1)*t - s);
	        },
	
	        /**
	         * @property outBack
	         * @static
	         */
	        outBack: function(t, s) {
	            if (s === undefined) s = 1.70158;
	            return ((--t)*t*((s+1)*t + s) + 1);
	        },
	
	        /**
	         * @property inOutBack
	         * @static
	         */
	        inOutBack: function(t, s) {
	            if (s === undefined) s = 1.70158;
	            if ((t/=.5) < 1) return .5*(t*t*(((s*=(1.525))+1)*t - s));
	            return .5*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2);
	        },
	
	        /**
	         * @property inBounce
	         * @static
	         */
	        inBounce: function(t) {
	            return 1.0 - Easing.outBounce(1.0-t);
	        },
	
	        /**
	         * @property outBounce
	         * @static
	         */
	        outBounce: function(t) {
	            if (t < (1/2.75)) {
	                return (7.5625*t*t);
	            } else if (t < (2/2.75)) {
	                return (7.5625*(t-=(1.5/2.75))*t + .75);
	            } else if (t < (2.5/2.75)) {
	                return (7.5625*(t-=(2.25/2.75))*t + .9375);
	            } else {
	                return (7.5625*(t-=(2.625/2.75))*t + .984375);
	            }
	        },
	
	        /**
	         * @property inOutBounce
	         * @static
	         */
	        inOutBounce: function(t) {
	            if (t < .5) return Easing.inBounce(t*2) * .5;
	            return Easing.outBounce(t*2-1.0) * .5 + .5;
	        }
	    };
	
	    module.exports = Easing;


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Molecule = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Modifier = __webpack_require__(307);
	
	var _Modifier2 = _interopRequireDefault(_Modifier);
	
	var _RenderNode2 = __webpack_require__(309);
	
	var _RenderNode3 = _interopRequireDefault(_RenderNode2);
	
	var _TransitionableTransform = __webpack_require__(308);
	
	var _TransitionableTransform2 = _interopRequireDefault(_TransitionableTransform);
	
	var _EventHandler = __webpack_require__(312);
	
	var _EventHandler2 = _interopRequireDefault(_EventHandler);
	
	var _utils = __webpack_require__(314);
	
	__webpack_require__(319);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * Molecules are the basic building blocks of all UI components. Molecules
	 * extend [famous/src/core/RenderNode](#famous/src/core/RenderNode), so they can be
	 * added to any `RenderNode` of a famo.us render tree, and by default they will
	 * also accept anything that a normal Famo.us `RenderNode` can accept via the
	 * `add` method.  Classes that extend from `Molecule` might override
	 * `RenderNode.add` in order to accept things like arrays of renderables in
	 * stead of a single renderable.
	 *
	 * Molecules encapsulate the basic things you need for a component -- a
	 * [famous/src/transitions/TransitionableTransform](#famous/src/transitions/TransitionableTransform)
	 * for positioning things in space, and a [famous/src/core/EventHandler](#famous/src/core/EventHandler)
	 * for capturing user interaction -- exposing a unified API for working with these
	 * things. For now, [famous/src/core/Modifier](#famous/src/core/Modifier) is used as the interface
	 * for applying transforms and sizing, but this will change in Mixed Mode
	 * Famo.us.
	 *
	 * All components extend Molecule, but at the same time they can also use any
	 * number of Molecules internally to do nice things like create layouts and
	 * position multiple things in space.
	 *
	 * @class Molecule
	 * @extends {module: famous/src/core/RenderNode}
	 */
	var Molecule = exports.Molecule = function (_RenderNode) {
	    _inherits(Molecule, _RenderNode);
	
	    /**
	     * Creates a new `Molecule` and applies `initialOptions` to it's internal
	     * `famous/src/core/Modifier`. See [famous/src/core/Modifier](#famous/src/core/Modifier)
	     * for details on what options you can pass.
	     *
	     * Note: Mixed Mode Famo.us does away with Modifiers, so this API will
	     * change slightly, but the change will be in such a way that APIs of
	     * higher level classes won't change because of this. One of the biggest
	     * changes in Mixed Mode will be that `size` will be set only on a
	     * per-Surface basis as far as a render tree is concerned. So if you
	     * normally put multiple `Surface` instances into a `Modifier` that has a
	     * size, then instead you'll have to explicitly assign a `size` to each
	     * `Surface`. This is a good thing, and makes for a cleaner and easier to
	     * use render tree with a separation of concerns from classes that can
	     * handle boundaries and group sizing. `Molecule` might then be an example
	     * of such a class with it's own size API.
	     *
	     * @constructor
	     * @param {Object} initialOptions The options to initialize this Molecule's `Modifier` with.
	     */
	    function Molecule(initialOptions) {
	        _classCallCheck(this, Molecule);
	
	        // "private" stuff. Not really, but regard it like so. For example, if
	        // you see something like obj._.someVariable then you're accessing
	        // internal stuff that wasn't designed to be accessed directly, and any
	        // problem you enounter with that is your own problem. :)
	        //
	        // TODO: Use a WeakMap to store these at some point.
	        var _this = _possibleConstructorReturn(this, (Molecule.__proto__ || Object.getPrototypeOf(Molecule)).call(this));
	
	        _this._ = {
	            options: {}, // set and get with this.options
	            defaultOptions: {}
	        };
	
	        // Add default values for this Molecule
	        // TODO: Make default options static for the class.
	        (0, _utils.simpleExtend)(_this._.defaultOptions, {
	            align: [0.5, 0.5],
	            origin: [0.5, 0.5],
	            transform: new _TransitionableTransform2.default(),
	            handler: new _EventHandler2.default()
	        });
	
	        // set the user's initial options. This automatically creates
	        // this.modifier, and adds it to this (don't forget, *this* is a
	        // RenderNode, so a Molecule can add things to itself).
	        //
	        // NOTE: this.options is a setter property. This statement applies all
	        // relevant properties to this.modifier.
	        _this.options = initialOptions;
	        return _this;
	    }
	
	    /**
	     * @property {Object} options The Molecule's options, which get applied to
	     * `this.modifier`. This may change with Mixed Mode. Setting this property
	     * overrides existing options. To extend existing options with new options,
	     * use `setOptions` instead.  Unspecified options will be set to their default
	     * values.
	     *
	     * Note: Anytime `this.options` is assigned a new value, `this.modifier` is set
	     * to a new [famous/src/core/Modifier](#famous/src/core/Modifier).
	     */
	
	
	    _createClass(Molecule, [{
	        key: 'setOptions',
	
	
	        /**
	         * Compounds `newOptions` into the existing options, similar to extending an
	         * object and overriding only the desired properties. To override all
	         * options with a set of new options, set `this.options` directly.
	         *
	         * An example of setting just a single option without erasing other options:
	         *
	         * ```js
	         * const myMolecule = new Molecule()
	         * myMolecule.setOptions({
	         *   align: [0.2, 0.8]
	         * })
	         * ```
	         *
	         * @param {Object} newOptions An object containing the new options to apply to this `Molecule`.
	         */
	        value: function setOptions(newOptions) {
	            if (typeof newOptions == 'undefined' || newOptions.constructor.name != "Object") newOptions = {};
	
	            for (var prop in newOptions) {
	                // Subject to change when Famo.us API changes.
	                if (_Modifier2.default.prototype['' + prop + 'From']) {
	                    this.modifier['' + prop + 'From'](newOptions[prop]);
	                }
	
	                this._.options[prop] = newOptions[prop];
	            }
	        }
	
	        /**
	         * Sets all options back to their defaults.
	         *
	         * Note: Anytime this is called, `this.modifier` is set to a new
	         * [famous/src/core/Modifier](#famous/src/core/Modifier) having the default
	         * options.
	         */
	
	    }, {
	        key: 'resetOptions',
	        value: function resetOptions() {
	            this.modifier = new _Modifier2.default();
	            this.set(this.modifier);
	            this.setOptions(this._.defaultOptions);
	        }
	
	        /**
	         * Forwards events from this Molecule's [famous/src/core/EventHandler](#famous/src/core/EventHandler) to the given
	         * target, which can be another `EventHandler` or `Molecule`.
	         *
	         * This method is equivalent to [famous/src/core/EventHandler.pipe](#famous/src/core/EventHandler.pipe),
	         * acting upon `this.handler`.
	         *
	         * TODO v0.1.0: Let this method accept a `Molecule`, then stop doing `pipe(this._.handler)` in other places
	         */
	
	    }, {
	        key: 'pipe',
	        value: function pipe() {
	            var args = Array.prototype.splice.call(arguments, 0);
	            return this.options.handler.pipe.apply(this.options.handler, args);
	        }
	
	        /**
	         * Stops events from this Molecule's [famous/src/core/EventHandler](#famous/src/core/EventHandler)
	         * from being sent to the given target.
	         *
	         * This method is equivalent to [famous/src/core/EventHandler.unpipe](#famous/src/core/EventHandler.unpipe),
	         * acting upon `this.handler`.
	         *
	         * TODO v0.1.0: Let this method accept a `Molecule`, then stop doing `pipe(this.options.handler)` in other places
	         */
	
	    }, {
	        key: 'unpipe',
	        value: function unpipe() {
	            var args = Array.prototype.splice.call(arguments, 0);
	            return this.options.handler.unpipe.apply(this.options.handler, args);
	        }
	
	        /**
	         * Register an event handler for the specified event.
	         * See [famous/src/core/EventHandler.on](#famous/src/core/EventHandler.on).
	         */
	
	    }, {
	        key: 'on',
	        value: function on() {
	            var args = Array.prototype.splice.call(arguments, 0);
	            return this.options.handler.on.apply(this.options.handler, args);
	        }
	
	        /**
	         * Unregister an event handler for the specified event.
	         * See [famous/src/core/EventHandler.off](#famous/src/core/EventHandler.off).
	         */
	
	    }, {
	        key: 'off',
	        value: function off() {
	            var args = Array.prototype.splice.call(arguments, 0);
	            return this.options.handler.on.apply(this.options.handler, args);
	        }
	    }, {
	        key: 'options',
	        set: function set(newOptions) {
	            this.resetOptions();
	            this.setOptions(newOptions);
	        },
	        get: function get() {
	            return this._.options;
	        }
	
	        /**
	         * @property {module: famous/src/transitions/TransitionableTransform} transform
	         * The transform of this `Molecule`. The default is a
	         * [famous/src/transitions/TransitionableTransform](#famous/src/transitions/TransitionableTransform).
	         * Setting this property automatically puts the new transform into effect.
	         * See [famous/src/core/Modifier.transformFrom](#famous/src/core/Modifier.transformFrom).
	         */
	
	    }, {
	        key: 'transform',
	        set: function set(newTransform) {
	            this.setOptions({ transform: newTransform });
	        },
	        get: function get() {
	            return this.options.transform;
	        }
	    }]);
	
	    return Molecule;
	}(_RenderNode3.default);
	
	exports.default = Molecule;

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var Transform = __webpack_require__(300);
	
	    /* TODO: remove these dependencies when deprecation complete */
	    var Transitionable = __webpack_require__(301);
	    var TransitionableTransform = __webpack_require__(308);
	
	    /**
	     *
	     *  A collection of visual changes to be
	     *    applied to another renderable component. This collection includes a
	     *    transform matrix, an opacity constant, a size, an origin specifier.
	     *    Modifier objects can be added to any RenderNode or object
	     *    capable of displaying renderables.  The Modifier's children and descendants
	     *    are transformed by the amounts specified in the Modifier's properties.
	     *
	     * @class Modifier
	     * @constructor
	     * @param {Object} [options] overrides of default options
	     * @param {Transform} [options.transform] affine transformation matrix
	     * @param {Number} [options.opacity]
	     * @param {Array.Number} [options.origin] origin adjustment
	     * @param {Array.Number} [options.size] size to apply to descendants
	     */
	    function Modifier(options) {
	        this._transformGetter = null;
	        this._opacityGetter = null;
	        this._originGetter = null;
	        this._alignGetter = null;
	        this._sizeGetter = null;
	        this._proportionGetter = null;
	
	        /* TODO: remove this when deprecation complete */
	        this._legacyStates = {};
	
	        this._output = {
	            transform: Transform.identity,
	            opacity: 1,
	            origin: null,
	            align: null,
	            size: null,
	            proportions: null,
	            target: null
	        };
	
	        if (options) {
	            if (options.transform) this.transformFrom(options.transform);
	            if (options.opacity !== undefined) this.opacityFrom(options.opacity);
	            if (options.origin) this.originFrom(options.origin);
	            if (options.align) this.alignFrom(options.align);
	            if (options.size) this.sizeFrom(options.size);
	            if (options.proportions) this.proportionsFrom(options.proportions);
	        }
	    }
	
	    /**
	     * Function, object, or static transform matrix which provides the transform.
	     *   This is evaluated on every tick of the engine.
	     *
	     * @method transformFrom
	     *
	     * @param {Object} transform transform provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.transformFrom = function transformFrom(transform) {
	        if (transform instanceof Function) this._transformGetter = transform;
	        else if (transform instanceof Object && transform.get) this._transformGetter = transform.get.bind(transform);
	        else {
	            this._transformGetter = null;
	            this._output.transform = transform;
	        }
	        return this;
	    };
	
	    /**
	     * Set function, object, or number to provide opacity, in range [0,1].
	     *
	     * @method opacityFrom
	     *
	     * @param {Object} opacity provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.opacityFrom = function opacityFrom(opacity) {
	        if (opacity instanceof Function) this._opacityGetter = opacity;
	        else if (opacity instanceof Object && opacity.get) this._opacityGetter = opacity.get.bind(opacity);
	        else {
	            this._opacityGetter = null;
	            this._output.opacity = opacity;
	        }
	        return this;
	    };
	
	    /**
	     * Set function, object, or numerical array to provide origin, as [x,y],
	     *   where x and y are in the range [0,1].
	     *
	     * @method originFrom
	     *
	     * @param {Object} origin provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.originFrom = function originFrom(origin) {
	        if (origin instanceof Function) this._originGetter = origin;
	        else if (origin instanceof Object && origin.get) this._originGetter = origin.get.bind(origin);
	        else {
	            this._originGetter = null;
	            this._output.origin = origin;
	        }
	        return this;
	    };
	
	    /**
	     * Set function, object, or numerical array to provide align, as [x,y],
	     *   where x and y are in the range [0,1].
	     *
	     * @method alignFrom
	     *
	     * @param {Object} align provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.alignFrom = function alignFrom(align) {
	        if (align instanceof Function) this._alignGetter = align;
	        else if (align instanceof Object && align.get) this._alignGetter = align.get.bind(align);
	        else {
	            this._alignGetter = null;
	            this._output.align = align;
	        }
	        return this;
	    };
	
	    /**
	     * Set function, object, or numerical array to provide size, as [width, height].
	     *
	     * @method sizeFrom
	     *
	     * @param {Object} size provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.sizeFrom = function sizeFrom(size) {
	        if (size instanceof Function) this._sizeGetter = size;
	        else if (size instanceof Object && size.get) this._sizeGetter = size.get.bind(size);
	        else {
	            this._sizeGetter = null;
	            this._output.size = size;
	        }
	        return this;
	    };
	
	    /**
	     * Set function, object, or numerical array to provide proportions, as [percent of width, percent of height].
	     *
	     * @method proportionsFrom
	     *
	     * @param {Object} proportions provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.proportionsFrom = function proportionsFrom(proportions) {
	        if (proportions instanceof Function) this._proportionGetter = proportions;
	        else if (proportions instanceof Object && proportions.get) this._proportionGetter = proportions.get.bind(proportions);
	        else {
	            this._proportionGetter = null;
	            this._output.proportions = proportions;
	        }
	        return this;
	    };
	
	     /**
	     * Deprecated: Prefer transformFrom with static Transform, or use a TransitionableTransform.
	     * @deprecated
	     * @method setTransform
	     *
	     * @param {Transform} transform Transform to transition to
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setTransform = function setTransform(transform, transition, callback) {
	        if (transition || this._legacyStates.transform) {
	            if (!this._legacyStates.transform) {
	                this._legacyStates.transform = new TransitionableTransform(this._output.transform);
	            }
	            if (!this._transformGetter) this.transformFrom(this._legacyStates.transform);
	
	            this._legacyStates.transform.set(transform, transition, callback);
	            return this;
	        }
	        else return this.transformFrom(transform);
	    };
	
	    /**
	     * Deprecated: Prefer opacityFrom with static opacity array, or use a Transitionable with that opacity.
	     * @deprecated
	     * @method setOpacity
	     *
	     * @param {Number} opacity Opacity value to transition to.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setOpacity = function setOpacity(opacity, transition, callback) {
	        if (transition || this._legacyStates.opacity) {
	            if (!this._legacyStates.opacity) {
	                this._legacyStates.opacity = new Transitionable(this._output.opacity);
	            }
	            if (!this._opacityGetter) this.opacityFrom(this._legacyStates.opacity);
	
	            return this._legacyStates.opacity.set(opacity, transition, callback);
	        }
	        else return this.opacityFrom(opacity);
	    };
	
	    /**
	     * Deprecated: Prefer originFrom with static origin array, or use a Transitionable with that origin.
	     * @deprecated
	     * @method setOrigin
	     *
	     * @param {Array.Number} origin two element array with values between 0 and 1.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setOrigin = function setOrigin(origin, transition, callback) {
	        /* TODO: remove this if statement when deprecation complete */
	        if (transition || this._legacyStates.origin) {
	
	            if (!this._legacyStates.origin) {
	                this._legacyStates.origin = new Transitionable(this._output.origin || [0, 0]);
	            }
	            if (!this._originGetter) this.originFrom(this._legacyStates.origin);
	
	            this._legacyStates.origin.set(origin, transition, callback);
	            return this;
	        }
	        else return this.originFrom(origin);
	    };
	
	    /**
	     * Deprecated: Prefer alignFrom with static align array, or use a Transitionable with that align.
	     * @deprecated
	     * @method setAlign
	     *
	     * @param {Array.Number} align two element array with values between 0 and 1.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setAlign = function setAlign(align, transition, callback) {
	        /* TODO: remove this if statement when deprecation complete */
	        if (transition || this._legacyStates.align) {
	
	            if (!this._legacyStates.align) {
	                this._legacyStates.align = new Transitionable(this._output.align || [0, 0]);
	            }
	            if (!this._alignGetter) this.alignFrom(this._legacyStates.align);
	
	            this._legacyStates.align.set(align, transition, callback);
	            return this;
	        }
	        else return this.alignFrom(align);
	    };
	
	    /**
	     * Deprecated: Prefer sizeFrom with static origin array, or use a Transitionable with that size.
	     * @deprecated
	     * @method setSize
	     * @param {Array.Number} size two element array of [width, height]
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setSize = function setSize(size, transition, callback) {
	        if (size && (transition || this._legacyStates.size)) {
	            if (!this._legacyStates.size) {
	                this._legacyStates.size = new Transitionable(this._output.size || [0, 0]);
	            }
	            if (!this._sizeGetter) this.sizeFrom(this._legacyStates.size);
	
	            this._legacyStates.size.set(size, transition, callback);
	            return this;
	        }
	        else return this.sizeFrom(size);
	    };
	
	    /**
	     * Deprecated: Prefer proportionsFrom with static origin array, or use a Transitionable with those proportions.
	     * @deprecated
	     * @method setProportions
	     * @param {Array.Number} proportions two element array of [percent of width, percent of height]
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setProportions = function setProportions(proportions, transition, callback) {
	        if (proportions && (transition || this._legacyStates.proportions)) {
	            if (!this._legacyStates.proportions) {
	                this._legacyStates.proportions = new Transitionable(this._output.proportions || [0, 0]);
	            }
	            if (!this._proportionGetter) this.proportionsFrom(this._legacyStates.proportions);
	
	            this._legacyStates.proportions.set(proportions, transition, callback);
	            return this;
	        }
	        else return this.proportionsFrom(proportions);
	    };
	
	    /**
	     * Deprecated: Prefer to stop transform in your provider object.
	     * @deprecated
	     * @method halt
	     */
	    Modifier.prototype.halt = function halt() {
	        if (this._legacyStates.transform) this._legacyStates.transform.halt();
	        if (this._legacyStates.opacity) this._legacyStates.opacity.halt();
	        if (this._legacyStates.origin) this._legacyStates.origin.halt();
	        if (this._legacyStates.align) this._legacyStates.align.halt();
	        if (this._legacyStates.size) this._legacyStates.size.halt();
	        if (this._legacyStates.proportions) this._legacyStates.proportions.halt();
	        this._transformGetter = null;
	        this._opacityGetter = null;
	        this._originGetter = null;
	        this._alignGetter = null;
	        this._sizeGetter = null;
	        this._proportionGetter = null;
	    };
	
	    /**
	     * Deprecated: Prefer to use your provided transform or output of your transform provider.
	     * @deprecated
	     * @method getTransform
	     * @return {Object} transform provider object
	     */
	    Modifier.prototype.getTransform = function getTransform() {
	        return this._transformGetter();
	    };
	
	    /**
	     * Deprecated: Prefer to determine the end state of your transform from your transform provider
	     * @deprecated
	     * @method getFinalTransform
	     * @return {Transform} transform matrix
	     */
	    Modifier.prototype.getFinalTransform = function getFinalTransform() {
	        return this._legacyStates.transform ? this._legacyStates.transform.getFinal() : this._output.transform;
	    };
	
	    /**
	     * Deprecated: Prefer to use your provided opacity or output of your opacity provider.
	     * @deprecated
	     * @method getOpacity
	     * @return {Object} opacity provider object
	     */
	    Modifier.prototype.getOpacity = function getOpacity() {
	        return this._opacityGetter();
	    };
	
	    /**
	     * Deprecated: Prefer to use your provided origin or output of your origin provider.
	     * @deprecated
	     * @method getOrigin
	     * @return {Object} origin provider object
	     */
	    Modifier.prototype.getOrigin = function getOrigin() {
	        return this._originGetter();
	    };
	
	    /**
	     * Deprecated: Prefer to use your provided align or output of your align provider.
	     * @deprecated
	     * @method getAlign
	     * @return {Object} align provider object
	     */
	    Modifier.prototype.getAlign = function getAlign() {
	        return this._alignGetter();
	    };
	
	    /**
	     * Deprecated: Prefer to use your provided size or output of your size provider.
	     * @deprecated
	     * @method getSize
	     * @return {Object} size provider object
	     */
	    Modifier.prototype.getSize = function getSize() {
	        return this._sizeGetter ? this._sizeGetter() : this._output.size;
	    };
	
	    /**
	     * Deprecated: Prefer to use your provided proportions or output of your proportions provider.
	     * @deprecated
	     * @method getProportions
	     * @return {Object} proportions provider object
	     */
	    Modifier.prototype.getProportions = function getProportions() {
	        return this._proportionGetter ? this._proportionGetter() : this._output.proportions;
	    };
	
	    // call providers on tick to receive render spec elements to apply
	    function _update() {
	        if (this._transformGetter) this._output.transform = this._transformGetter();
	        if (this._opacityGetter) this._output.opacity = this._opacityGetter();
	        if (this._originGetter) this._output.origin = this._originGetter();
	        if (this._alignGetter) this._output.align = this._alignGetter();
	        if (this._sizeGetter) this._output.size = this._sizeGetter();
	        if (this._proportionGetter) this._output.proportions = this._proportionGetter();
	    }
	
	    /**
	     * Return render spec for this Modifier, applying to the provided
	     *    target component.  This is similar to render() for Surfaces.
	     *
	     * @private
	     * @method modify
	     *
	     * @param {Object} target (already rendered) render spec to
	     *    which to apply the transform.
	     * @return {Object} render spec for this Modifier, including the
	     *    provided target
	     */
	    Modifier.prototype.modify = function modify(target) {
	        _update.call(this);
	        this._output.target = target;
	        return this._output;
	    };
	
	    module.exports = Modifier;


/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var Transitionable = __webpack_require__(301);
	    var Transform = __webpack_require__(300);
	    var Utility = __webpack_require__(303);
	
	    /**
	     * A class for transitioning the state of a Transform by transitioning the
	     * X, Y, and Z axes of it's translate, scale, skew and rotate components
	     * independently.
	     *
	     * @class TransitionableTransform
	     * @constructor
	     *
	     * @param [transform=Transform.identity] {Transform} The initial transform state
	     */
	    function TransitionableTransform(transform) {
	        this._final = Transform.identity.slice();
	
	        this._finalTranslate = [0, 0, 0];
	        this._finalRotate = [0, 0, 0];
	        this._finalSkew = [0, 0, 0];
	        this._finalScale = [1, 1, 1];
	
	        this.translate = [];
	        this.rotate    = [];
	        this.skew      = [];
	        this.scale     = [];
	
	        for (var i=0; i<3; i+=1) {
	            this.translate[i] = new Transitionable(this._finalTranslate[i]);
	            this.rotate[i]    = new Transitionable(this._finalRotate[i]);
	            this.skew[i]      = new Transitionable(this._finalSkew[i]);
	            this.scale[i]     = new Transitionable(this._finalScale[i]);
	        }
	
	        if (transform) this.set(transform);
	    }
	
	    function _build() {
	        return Transform.build({
	            translate: [this.translate[0].get(), this.translate[1].get(), this.translate[2].get()],
	            rotate:    [this.rotate[0].get(),    this.rotate[1].get(),    this.rotate[2].get()],
	            skew:      [this.skew[0].get(),      this.skew[1].get(),      this.skew[2].get()],
	            scale:     [this.scale[0].get(),     this.scale[1].get(),     this.scale[2].get()]
	        });
	    }
	
	    function _buildFinal() {
	        return Transform.build({
	            translate: this._finalTranslate,
	            rotate: this._finalRotate,
	            skew: this._finalSkew,
	            scale: this._finalScale
	        });
	    }
	
	    function _countOfType(array, type) {
	        var count = 0;
	        for (var i=0; i<array.length; i+=1) {
	            if (typeof array[i] === type+'') {
	                count+=1;
	            }
	        }
	        return count;
	    }
	
	    /**
	     * An optimized way of setting only the translation component of a Transform. Axes who's values are null will not be affected.
	     *
	     * @method setTranslate
	     * @chainable
	     *
	     * @param translate {Array}     New translation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setTranslate = function setTranslate(translate, transition, callback) {
	        var numberOfAxes = _countOfType(translate, 'number');
	        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
	        for (var i=0; i<translate.length; i+=1) {
	            if (typeof translate[i] === 'number') {
	                this.translate[i].set(translate[i], transition, _callback);
	                this._finalTranslate[i] = translate[i];
	            }
	        }
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Translate only along the X axis of the translation component of a Transform.
	     *
	     * @method setTranslateX
	     * @chainable
	     *
	     * @param translate {Number}     New translation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setTranslateX = function setTranslateX(translate, transition, callback) {
	        this.translate[0].set(translate, transition, callback);
	        this._finalTranslate[0] = translate;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Translate only along the Y axis of the translation component of a Transform.
	     *
	     * @method setTranslateY
	     * @chainable
	     *
	     * @param translate {Number}     New translation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setTranslateY = function setTranslateY(translate, transition, callback) {
	        this.translate[1].set(translate, transition, callback);
	        this._finalTranslate[1] = translate;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Translate only along the Z axis of the translation component of a Transform.
	     *
	     * @method setTranslateZ
	     * @chainable
	     *
	     * @param translate {Number}     New translation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setTranslateZ = function setTranslateZ(translate, transition, callback) {
	        this.translate[2].set(translate, transition, callback);
	        this._finalTranslate[2] = translate;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * An optimized way of setting only the scale component of a Transform. Axes who's values are null will not be affected.
	     *
	     * @method setScale
	     * @chainable
	     *
	     * @param scale {Array}         New scale state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setScale = function setScale(scale, transition, callback) {
	        var numberOfAxes = _countOfType(scale, 'number');
	        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
	        for (var i=0; i<scale.length; i+=1) {
	            if (typeof scale[i] === 'number') {
	                this.scale[i].set(scale[i], transition, _callback);
	                this._finalScale[i] = scale[i];
	            }
	        }
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Scale only along the X axis of the scale component of a Transform.
	     *
	     * @method setScaleX
	     * @chainable
	     *
	     * @param scale {Number}     New scale state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setScaleX = function setScaleX(scale, transition, callback) {
	        this.scale[0].set(scale, transition, callback);
	        this._finalScale[0] = scale;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Scale only along the Y axis of the scale component of a Transform.
	     *
	     * @method setScaleY
	     * @chainable
	     *
	     * @param scale {Number}     New scale state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setScaleY = function setScaleY(scale, transition, callback) {
	        this.scale[1].set(scale, transition, callback);
	        this._finalScale[1] = scale;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Scale only along the Z axis of the scale component of a Transform.
	     *
	     * @method setScaleZ
	     * @chainable
	     *
	     * @param scale {Number}     New scale state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setScaleZ = function setScaleZ(scale, transition, callback) {
	        this.scale[2].set(scale, transition, callback);
	        this._finalScale[2] = scale;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * An optimized way of setting only the rotational component of a Transform. Axes who's values are null will not be affected.
	     *
	     * @method setRotate
	     * @chainable
	     *
	     * @param eulerAngles {Array}   Euler angles for new rotation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setRotate = function setRotate(eulerAngles, transition, callback) {
	        var numberOfAxes = _countOfType(eulerAngles, 'number');
	        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
	        for (var i=0; i<eulerAngles.length; i+=1) {
	            if (typeof eulerAngles[i] === 'number') {
	                this.rotate[i].set(eulerAngles[i], transition, _callback);
	                this._finalRotate[i] = eulerAngles[i];
	            }
	        }
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Rotate only about the X axis of the rotational component of a Transform.
	     *
	     * @method setScaleX
	     * @chainable
	     *
	     * @param eulerAngle {Number}     New rotational state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setRotateX = function setRotateX(eulerAngle, transition, callback) {
	        this.rotate[0].set(eulerAngle, transition, callback);
	        this._finalRotate[0] = eulerAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Rotate only about the Y axis of the rotational component of a Transform.
	     *
	     * @method setScaleY
	     * @chainable
	     *
	     * @param eulerAngle {Number}     New rotational state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setRotateY = function setRotateY(eulerAngle, transition, callback) {
	        this.rotate[1].set(eulerAngle, transition, callback);
	        this._finalRotate[1] = eulerAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Rotate only about the Z axis of the rotational component of a Transform.
	     *
	     * @method setScaleZ
	     * @chainable
	     *
	     * @param eulerAngle {Number}     New rotational state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setRotateZ = function setRotateZ(eulerAngle, transition, callback) {
	        this.rotate[2].set(eulerAngle, transition, callback);
	        this._finalRotate[2] = eulerAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * An optimized way of setting only the skew component of a Transform. Axes who's values are null will not be affected.
	     *
	     * @method setSkew
	     * @chainable
	     *
	     * @param skewAngles {Array}    New skew state. Axes who's values are null will not be affected.
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setSkew = function setSkew(skewAngles, transition, callback) {
	        var numberOfAxes = _countOfType(skewAngles, 'number');
	        var _callback = callback ? Utility.after(numberOfAxes, callback) : null;
	        for (var i=0; i<skewAngles.length; i+=1) {
	            if (typeof skewAngles[i] === 'number') {
	                this.skew[i].set(skewAngles[i], transition, _callback);
	                this._finalSkew[i] = skewAngles[i];
	            }
	        }
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Skew only about the X axis of the skew component of a Transform.
	     *
	     * @method setSkewX
	     * @chainable
	     *
	     * @param skewAngle {Number}     New skew state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setSkewX = function setSkewX(skewAngle, transition, callback) {
	        this.skew[0].set(skewAngle, transition, callback);
	        this._finalSkew[0] = skewAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Skew only about the Y axis of the skew component of a Transform.
	     *
	     * @method setSkewY
	     * @chainable
	     *
	     * @param skewAngle {Number}     New skew state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setSkewY = function setSkewY(skewAngle, transition, callback) {
	        this.skew[1].set(skewAngle, transition, callback);
	        this._finalSkew[1] = skewAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Skew only about the Z axis of the skew component of a Transform.
	     *
	     * @method setSkewZ
	     * @chainable
	     *
	     * @param skewAngle {Number}     New skew state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setSkewZ = function setSkewZ(skewAngle, transition, callback) {
	        this.skew[2].set(skewAngle, transition, callback);
	        this._finalSkew[2] = skewAngle;
	        this._final = _buildFinal.call(this);
	        return this;
	    };
	
	    /**
	     * Setter for a TransitionableTransform with optional parameters to transition
	     * between Transforms. Animates all axes of all components.
	     *
	     * @method set
	     * @chainable
	     *
	     * @param transform {Array}     New transform state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.set = function set(transform, transition, callback) {
	        var components = Transform.interpret(transform);
	
	        this._finalTranslate = components.translate;
	        this._finalRotate = components.rotate;
	        this._finalSkew = components.skew;
	        this._finalScale = components.scale;
	        this._final = transform;
	
	        var _callback = callback ? Utility.after(12, callback) : null;
	        for (var i=0; i<3; i+=1) {
	            this.translate[i].set(components.translate[i], transition, _callback);
	            this.rotate[i].set(components.rotate[i], transition, _callback);
	            this.skew[i].set(components.skew[i], transition, _callback);
	            this.scale[i].set(components.scale[i], transition, _callback);
	        }
	        return this;
	    };
	
	    /**
	     * Sets the default transition to use for transitioning betwen Transform states
	     *
	     * @method setDefaultTransition
	     *
	     * @param transition {Object} Transition definition
	     */
	    TransitionableTransform.prototype.setDefaultTransition = function setDefaultTransition(transition) {
	        for (var i=0; i<3; i+=1) {
	            this.translate[i].setDefault(transition);
	            this.rotate[i].setDefault(transition);
	            this.skew[i].setDefault(transition);
	            this.scale[i].setDefault(transition);
	        }
	    };
	
	    /**
	     * Getter. Returns the current state of the Transform
	     *
	     * @method get
	     *
	     * @return {Transform}
	     */
	    TransitionableTransform.prototype.get = function get() {
	        if (this.isActive()) {
	            return _build.call(this);
	        }
	        else return this._final;
	    };
	
	    /**
	     * Get the destination state of the Transform
	     *
	     * @method getFinal
	     *
	     * @return Transform {Transform}
	     */
	    TransitionableTransform.prototype.getFinal = function getFinal() {
	        return this._final;
	    };
	
	    /**
	     * Determine if the TransitionableTransform is currently transitioning
	     *
	     * @method isActive
	     *
	     * @return {Boolean}
	     */
	    TransitionableTransform.prototype.isActive = function isActive() {
	        var isActive = false;
	
	        for (var i=0; i<3; i+=1) {
	            if (
	                this.translate[i].isActive()
	                || this.rotate[i].isActive()
	                || this.skew[i].isActive()
	                || this.scale[i].isActive()
	            ) {
	                isActive = true; break;
	            }
	        }
	        return isActive;
	    };
	
	    /**
	     * Halts the transition
	     *
	     * @method halt
	     */
	    TransitionableTransform.prototype.halt = function halt() {
	        for (var i=0; i<3; i+=1) {
	            this.translate[i].halt();
	            this.rotate[i].halt();
	            this.skew[i].halt();
	            this.scale[i].halt();
	
	            this._finalTranslate[i] = this.translate[i].get();
	            this._finalRotate[i] = this.rotate[i].get();
	            this._finalSkew[i] = this.skew[i].get();
	            this._finalScale[i] = this.scale[i].get();
	        }
	
	        this._final = this.get();
	
	        return this;
	    };
	
	    module.exports = TransitionableTransform;


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var Entity = __webpack_require__(310);
	    var SpecParser = __webpack_require__(311);
	
	    /**
	     * A wrapper for inserting a renderable component (like a Modifer or
	     *   Surface) into the render tree.
	     *
	     * @class RenderNode
	     * @constructor
	     *
	     * @param {Object} object Target renderable component
	     */
	    function RenderNode(object) {
	        this._object = null;
	        this._child = null;
	        this._hasMultipleChildren = false;
	        this._isRenderable = false;
	        this._isModifier = false;
	
	        this._resultCache = {};
	        this._prevResults = {};
	
	        this._childResult = null;
	
	        if (object) this.set(object);
	    }
	
	    /**
	     * Append a renderable to the list of this node's children.
	     *   This produces a new RenderNode in the tree.
	     *   Note: Does not double-wrap if child is a RenderNode already.
	     *
	     * @method add
	     * @param {Object} child renderable object
	     * @return {RenderNode} new render node wrapping child
	     */
	    RenderNode.prototype.add = function add(child) {
	        var childNode = (child instanceof RenderNode) ? child : new RenderNode(child);
	        if (this._child instanceof Array) this._child.push(childNode);
	        else if (this._child) {
	            this._child = [this._child, childNode];
	            this._hasMultipleChildren = true;
	            this._childResult = []; // to be used later
	        }
	        else this._child = childNode;
	
	        return childNode;
	    };
	
	    /**
	     * Return the single wrapped object.  Returns null if this node has multiple child nodes.
	     *
	     * @method get
	     *
	     * @return {Ojbect} contained renderable object
	     */
	    RenderNode.prototype.get = function get() {
	        return this._object || (this._hasMultipleChildren ? null : (this._child ? this._child.get() : null));
	    };
	
	    /**
	     * Overwrite the list of children to contain the single provided object
	     *
	     * @method set
	     * @param {Object} child renderable object
	     * @return {RenderNode} this render node, or child if it is a RenderNode
	     */
	    RenderNode.prototype.set = function set(child) {
	        this._childResult = null;
	        this._hasMultipleChildren = false;
	        this._isRenderable = child.render ? true : false;
	        this._isModifier = child.modify ? true : false;
	        this._object = child;
	        this._child = null;
	        if (child instanceof RenderNode) return child;
	        else return this;
	    };
	
	    /**
	     * Get render size of contained object.
	     *
	     * @method getSize
	     * @return {Array.Number} size of this or size of single child.
	     */
	    RenderNode.prototype.getSize = function getSize() {
	        var result = null;
	        var target = this.get();
	        if (target && target.getSize) result = target.getSize();
	        if (!result && this._child && this._child.getSize) result = this._child.getSize();
	        return result;
	    };
	
	    // apply results of rendering this subtree to the document
	    function _applyCommit(spec, context, cacheStorage) {
	        var result = SpecParser.parse(spec, context);
	        var keys = Object.keys(result);
	        for (var i = 0; i < keys.length; i++) {
	            var id = keys[i];
	            var childNode = Entity.get(id);
	            var commitParams = result[id];
	            commitParams.allocator = context.allocator;
	            var commitResult = childNode.commit(commitParams);
	            if (commitResult) _applyCommit(commitResult, context, cacheStorage);
	            else cacheStorage[id] = commitParams;
	        }
	    }
	
	    /**
	     * Commit the content change from this node to the document.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context render context
	     */
	    RenderNode.prototype.commit = function commit(context) {
	        // free up some divs from the last loop
	        var prevKeys = Object.keys(this._prevResults);
	        for (var i = 0; i < prevKeys.length; i++) {
	            var id = prevKeys[i];
	            if (this._resultCache[id] === undefined) {
	                var object = Entity.get(id);
	                if (object.cleanup) object.cleanup(context.allocator);
	            }
	        }
	
	        this._prevResults = this._resultCache;
	        this._resultCache = {};
	        _applyCommit(this.render(), context, this._resultCache);
	    };
	
	    /**
	     * Generate a render spec from the contents of the wrapped component.
	     *
	     * @private
	     * @method render
	     *
	     * @return {Object} render specification for the component subtree
	     *    only under this node.
	     */
	    RenderNode.prototype.render = function render() {
	        if (this._isRenderable) return this._object.render();
	
	        var result = null;
	        if (this._hasMultipleChildren) {
	            result = this._childResult;
	            var children = this._child;
	            for (var i = 0; i < children.length; i++) {
	                result[i] = children[i].render();
	            }
	        }
	        else if (this._child) result = this._child.render();
	
	        return this._isModifier ? this._object.modify(result) : result;
	    };
	
	    module.exports = RenderNode;


/***/ },
/* 310 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    /**
	     * A singleton that maintains a global registry of Surfaces.
	     *   Private.
	     *
	     * @private
	     * @static
	     * @class Entity
	     */
	
	    var entities = [];
	
	    /**
	     * Get entity from global index.
	     *
	     * @private
	     * @method get
	     * @param {Number} id entity registration id
	     * @return {Surface} entity in the global index
	     */
	    function get(id) {
	        return entities[id];
	    }
	
	    /**
	     * Overwrite entity in the global index
	     *
	     * @private
	     * @method set
	     * @param {Number} id entity registration id
	     * @param {Surface} entity to add to the global index
	     */
	    function set(id, entity) {
	        entities[id] = entity;
	    }
	
	    /**
	     * Add entity to global index
	     *
	     * @private
	     * @method register
	     * @param {Surface} entity to add to global index
	     * @return {Number} new id
	     */
	    function register(entity) {
	        var id = entities.length;
	        set(id, entity);
	        return id;
	    }
	
	    /**
	     * Remove entity from global index
	     *
	     * @private
	     * @method unregister
	     * @param {Number} id entity registration id
	     */
	    function unregister(id) {
	        set(id, null);
	    }
	
	    module.exports = {
	        register: register,
	        unregister: unregister,
	        get: get,
	        set: set
	    };


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var Transform = __webpack_require__(300);
	
	    /**
	     *
	     * This object translates the rendering instructions ("render specs")
	     *   that renderable components generate into document update
	     *   instructions ("update specs").  Private.
	     *
	     * @private
	     * @class SpecParser
	     * @constructor
	     */
	    function SpecParser() {
	        this.result = {};
	    }
	    SpecParser._instance = new SpecParser();
	
	    /**
	     * Convert a render spec coming from the context's render chain to an
	     *    update spec for the update chain. This is the only major entry point
	     *    for a consumer of this class.
	     *
	     * @method parse
	     * @static
	     * @private
	     *
	     * @param {renderSpec} spec input render spec
	     * @param {Object} context context to do the parse in
	     * @return {Object} the resulting update spec (if no callback
	     *   specified, else none)
	     */
	    SpecParser.parse = function parse(spec, context) {
	        return SpecParser._instance.parse(spec, context);
	    };
	
	    /**
	     * Convert a renderSpec coming from the context's render chain to an update
	     *    spec for the update chain. This is the only major entrypoint for a
	     *    consumer of this class.
	     *
	     * @method parse
	     *
	     * @private
	     * @param {renderSpec} spec input render spec
	     * @param {Context} context
	     * @return {updateSpec} the resulting update spec
	     */
	    SpecParser.prototype.parse = function parse(spec, context) {
	        this.reset();
	        this._parseSpec(spec, context, Transform.identity);
	        return this.result;
	    };
	
	    /**
	     * Prepare SpecParser for re-use (or first use) by setting internal state
	     *  to blank.
	     *
	     * @private
	     * @method reset
	     */
	    SpecParser.prototype.reset = function reset() {
	        this.result = {};
	    };
	
	    // Multiply matrix M by vector v
	    function _vecInContext(v, m) {
	        return [
	            v[0] * m[0] + v[1] * m[4] + v[2] * m[8],
	            v[0] * m[1] + v[1] * m[5] + v[2] * m[9],
	            v[0] * m[2] + v[1] * m[6] + v[2] * m[10]
	        ];
	    }
	
	    var _zeroZero = [0, 0];
	
	    // From the provided renderSpec tree, recursively compose opacities,
	    //    origins, transforms, and sizes corresponding to each surface id from
	    //    the provided renderSpec tree structure. On completion, those
	    //    properties of 'this' object should be ready to use to build an
	    //    updateSpec.
	    SpecParser.prototype._parseSpec = function _parseSpec(spec, parentContext, sizeContext) {
	        var id;
	        var target;
	        var transform;
	        var opacity;
	        var origin;
	        var align;
	        var size;
	
	        if (typeof spec === 'number') {
	            id = spec;
	            transform = parentContext.transform;
	            align = parentContext.align || _zeroZero;
	            if (parentContext.size && align && (align[0] || align[1])) {
	                var alignAdjust = [align[0] * parentContext.size[0], align[1] * parentContext.size[1], 0];
	                transform = Transform.thenMove(transform, _vecInContext(alignAdjust, sizeContext));
	            }
	            this.result[id] = {
	                transform: transform,
	                opacity: parentContext.opacity,
	                origin: parentContext.origin || _zeroZero,
	                align: parentContext.align || _zeroZero,
	                size: parentContext.size
	            };
	        }
	        else if (!spec) { // placed here so 0 will be cached earlier
	            return;
	        }
	        else if (spec instanceof Array) {
	            for (var i = 0; i < spec.length; i++) {
	                this._parseSpec(spec[i], parentContext, sizeContext);
	            }
	        }
	        else {
	            target = spec.target;
	            transform = parentContext.transform;
	            opacity = parentContext.opacity;
	            origin = parentContext.origin;
	            align = parentContext.align;
	            size = parentContext.size;
	            var nextSizeContext = sizeContext;
	
	            if (spec.opacity !== undefined) opacity = parentContext.opacity * spec.opacity;
	            if (spec.transform) transform = Transform.multiply(parentContext.transform, spec.transform);
	            if (spec.origin) {
	                origin = spec.origin;
	                nextSizeContext = parentContext.transform;
	            }
	            if (spec.align) align = spec.align;
	
	            if (spec.size || spec.proportions) {
	                var parentSize = size;
	                size = [size[0], size[1]];
	
	                if (spec.size) {
	                    if (spec.size[0] !== undefined) size[0] = spec.size[0];
	                    if (spec.size[1] !== undefined) size[1] = spec.size[1];
	                }
	
	                if (spec.proportions) {
	                    if (spec.proportions[0] !== undefined) size[0] = size[0] * spec.proportions[0];
	                    if (spec.proportions[1] !== undefined) size[1] = size[1] * spec.proportions[1];
	                }
	
	                if (parentSize) {
	                    if (align && (align[0] || align[1])) transform = Transform.thenMove(transform, _vecInContext([align[0] * parentSize[0], align[1] * parentSize[1], 0], sizeContext));
	                    if (origin && (origin[0] || origin[1])) transform = Transform.moveThen([-origin[0] * size[0], -origin[1] * size[1], 0], transform);
	                }
	
	                nextSizeContext = parentContext.transform;
	                origin = null;
	                align = null;
	            }
	
	            this._parseSpec(target, {
	                transform: transform,
	                opacity: opacity,
	                origin: origin,
	                align: align,
	                size: size
	            }, nextSizeContext);
	        }
	    };
	
	    module.exports = SpecParser;


/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var EventEmitter = __webpack_require__(313);
	
	    /**
	     * EventHandler forwards received events to a set of provided callback functions.
	     * It allows events to be captured, processed, and optionally piped through to other event handlers.
	     *
	     * @class EventHandler
	     * @extends EventEmitter
	     * @constructor
	     */
	    function EventHandler() {
	        EventEmitter.apply(this, arguments);
	
	        this.downstream = []; // downstream event handlers
	        this.downstreamFn = []; // downstream functions
	
	        this.upstream = []; // upstream event handlers
	        this.upstreamListeners = {}; // upstream listeners
	    }
	    EventHandler.prototype = Object.create(EventEmitter.prototype);
	    EventHandler.prototype.constructor = EventHandler;
	
	    /**
	     * Assign an event handler to receive an object's input events.
	     *
	     * @method setInputHandler
	     * @static
	     *
	     * @param {Object} object object to mix trigger, subscribe, and unsubscribe functions into
	     * @param {EventHandler} handler assigned event handler
	     */
	    EventHandler.setInputHandler = function setInputHandler(object, handler) {
	        object.trigger = handler.trigger.bind(handler);
	        if (handler.subscribe && handler.unsubscribe) {
	            object.subscribe = handler.subscribe.bind(handler);
	            object.unsubscribe = handler.unsubscribe.bind(handler);
	        }
	    };
	
	    /**
	     * Assign an event handler to receive an object's output events.
	     *
	     * @method setOutputHandler
	     * @static
	     *
	     * @param {Object} object object to mix pipe, unpipe, on, addListener, and removeListener functions into
	     * @param {EventHandler} handler assigned event handler
	     */
	    EventHandler.setOutputHandler = function setOutputHandler(object, handler) {
	        if (handler instanceof EventHandler) handler.bindThis(object);
	        object.pipe = handler.pipe.bind(handler);
	        object.unpipe = handler.unpipe.bind(handler);
	        object.on = handler.on.bind(handler);
	        object.addListener = object.on;
	        object.removeListener = handler.removeListener.bind(handler);
	    };
	
	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.emit = function emit(type, event) {
	        EventEmitter.prototype.emit.apply(this, arguments);
	        var i = 0;
	        for (i = 0; i < this.downstream.length; i++) {
	            if (this.downstream[i].trigger) this.downstream[i].trigger(type, event);
	        }
	        for (i = 0; i < this.downstreamFn.length; i++) {
	            this.downstreamFn[i](type, event);
	        }
	        return this;
	    };
	
	    /**
	     * Alias for emit
	     * @method addListener
	     */
	    EventHandler.prototype.trigger = EventHandler.prototype.emit;
	
	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    EventHandler.prototype.pipe = function pipe(target) {
	        if (target.subscribe instanceof Function) return target.subscribe(this);
	
	        var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
	        var index = downstreamCtx.indexOf(target);
	        if (index < 0) downstreamCtx.push(target);
	
	        if (target instanceof Function) target('pipe', null);
	        else if (target.trigger) target.trigger('pipe', null);
	
	        return target;
	    };
	
	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    EventHandler.prototype.unpipe = function unpipe(target) {
	        if (target.unsubscribe instanceof Function) return target.unsubscribe(this);
	
	        var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
	        var index = downstreamCtx.indexOf(target);
	        if (index >= 0) {
	            downstreamCtx.splice(index, 1);
	            if (target instanceof Function) target('unpipe', null);
	            else if (target.trigger) target.trigger('unpipe', null);
	            return target;
	        }
	        else return false;
	    };
	
	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.on = function on(type, handler) {
	        EventEmitter.prototype.on.apply(this, arguments);
	        if (!(type in this.upstreamListeners)) {
	            var upstreamListener = this.trigger.bind(this, type);
	            this.upstreamListeners[type] = upstreamListener;
	            for (var i = 0; i < this.upstream.length; i++) {
	                this.upstream[i].on(type, upstreamListener);
	            }
	        }
	        return this;
	    };
	
	    /**
	     * Alias for "on"
	     * @method addListener
	     */
	    EventHandler.prototype.addListener = EventHandler.prototype.on;
	
	    /**
	     * Listen for events from an upstream event handler.
	     *
	     * @method subscribe
	     *
	     * @param {EventEmitter} source source emitter object
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.subscribe = function subscribe(source) {
	        var index = this.upstream.indexOf(source);
	        if (index < 0) {
	            this.upstream.push(source);
	            for (var type in this.upstreamListeners) {
	                source.on(type, this.upstreamListeners[type]);
	            }
	        }
	        return this;
	    };
	
	    /**
	     * Stop listening to events from an upstream event handler.
	     *
	     * @method unsubscribe
	     *
	     * @param {EventEmitter} source source emitter object
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.unsubscribe = function unsubscribe(source) {
	        var index = this.upstream.indexOf(source);
	        if (index >= 0) {
	            this.upstream.splice(index, 1);
	            for (var type in this.upstreamListeners) {
	                source.removeListener(type, this.upstreamListeners[type]);
	            }
	        }
	        return this;
	    };
	
	    module.exports = EventHandler;


/***/ },
/* 313 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    /**
	     * EventEmitter represents a channel for events.
	     *
	     * @class EventEmitter
	     * @constructor
	     */
	    function EventEmitter() {
	        this.listeners = {};
	        this._owner = this;
	    }
	
	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    EventEmitter.prototype.emit = function emit(type, event) {
	        var handlers = this.listeners[type];
	        if (handlers) {
	            for (var i = 0; i < handlers.length; i++) {
	                handlers[i].call(this._owner, event);
	            }
	        }
	        return this;
	    };
	
	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	   EventEmitter.prototype.on = function on(type, handler) {
	        if (!(type in this.listeners)) this.listeners[type] = [];
	        var index = this.listeners[type].indexOf(handler);
	        if (index < 0) this.listeners[type].push(handler);
	        return this;
	    };
	
	    /**
	     * Alias for "on".
	     * @method addListener
	     */
	    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	   /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventEmitter} this
	     */
	    EventEmitter.prototype.removeListener = function removeListener(type, handler) {
	        var listener = this.listeners[type];
	        if (listener !== undefined) {
	            var index = listener.indexOf(handler);
	            if (index >= 0) listener.splice(index, 1);
	        }
	        return this;
	    };
	
	    /**
	     * Call event handlers with this set to owner.
	     *
	     * @method bindThis
	     *
	     * @param {Object} owner object this EventEmitter belongs to
	     */
	    EventEmitter.prototype.bindThis = function bindThis(owner) {
	        this._owner = owner;
	    };
	
	    module.exports = EventEmitter;


/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.contextWithPerspective = contextWithPerspective;
	exports.simpleExtend = simpleExtend;
	
	var _Engine = __webpack_require__(315);
	
	var _Engine2 = _interopRequireDefault(_Engine);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates a [famous/src/core/Context](#famous/src/core/Context) having the specified 3D perspective.
	 *
	 * @param {Number} perspective The integer amount of perspective to apply to the `Context`.
	 * @returns {module: famous/src/core/Context} The `Context` with the applied perspective.
	 */
	function contextWithPerspective(perspective) {
	    var context = _Engine2.default.createContext();
	    context.setPerspective(perspective);
	    return context;
	} /*
	   * @overview Utility functions used by infamous.
	   *
	   * LICENSE
	   *
	   * This Source Code Form is subject to the terms of the Mozilla Public
	   * License, v. 2.0. If a copy of the MPL was not distributed with this
	   * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	   *
	   */
	
	function simpleExtend(object) {
	    for (var _len = arguments.length, others = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        others[_key - 1] = arguments[_key];
	    }
	
	    others.forEach(function (other) {
	        for (var prop in other) {
	            object[prop] = other[prop];
	        }
	    });
	}

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	
	    /**
	     * The singleton object initiated upon process
	     *   startup which manages all active Context instances, runs
	     *   the render dispatch loop, and acts as a listener and dispatcher
	     *   for events.  All methods are therefore static.
	     *
	     *   On static initialization, window.requestAnimationFrame is called with
	     *     the event loop function.
	     *
	     *   Note: Any window in which Engine runs will prevent default
	     *     scrolling behavior on the 'touchmove' event.
	     *
	     * @static
	     * @class Engine
	     */
	    var Context = __webpack_require__(316);
	    var EventHandler = __webpack_require__(312);
	    var OptionsManager = __webpack_require__(318);
	
	    var Engine = {};
	
	    var contexts = [];
	
	    var nextTickQueue = [];
	
	    var currentFrame = 0;
	    var nextTickFrame = 0;
	
	    var deferQueue = [];
	
	    var lastTime = Date.now();
	    var frameTime;
	    var frameTimeLimit;
	    var loopEnabled = true;
	    var eventForwarders = {};
	    var eventHandler = new EventHandler();
	
	    var options = {
	        containerType: 'div',
	        containerClass: 'famous-container',
	        fpsCap: undefined,
	        runLoop: true,
	        appMode: true
	    };
	    var optionsManager = new OptionsManager(options);
	
	    /** @const */
	    var MAX_DEFER_FRAME_TIME = 10;
	
	    /**
	     * Inside requestAnimationFrame loop, step() is called, which:
	     *   calculates current FPS (throttling loop if it is over limit set in setFPSCap),
	     *   emits dataless 'prerender' event on start of loop,
	     *   calls in order any one-shot functions registered by nextTick on last loop,
	     *   calls Context.update on all Context objects registered,
	     *   and emits dataless 'postrender' event on end of loop.
	     *
	     * @static
	     * @private
	     * @method step
	     */
	    Engine.step = function step() {
	        currentFrame++;
	        nextTickFrame = currentFrame;
	
	        var currentTime = Date.now();
	
	        // skip frame if we're over our framerate cap
	        if (frameTimeLimit && currentTime - lastTime < frameTimeLimit) return;
	
	        var i = 0;
	
	        frameTime = currentTime - lastTime;
	        lastTime = currentTime;
	
	        eventHandler.emit('prerender');
	
	        // empty the queue
	        var numFunctions = nextTickQueue.length;
	        while (numFunctions--) (nextTickQueue.shift())(currentFrame);
	
	        // limit total execution time for deferrable functions
	        while (deferQueue.length && (Date.now() - currentTime) < MAX_DEFER_FRAME_TIME) {
	            deferQueue.shift().call(this);
	        }
	
	        for (i = 0; i < contexts.length; i++) contexts[i].update();
	
	        eventHandler.emit('postrender');
	    };
	
	    // engage requestAnimationFrame
	    function loop() {
	        if (options.runLoop) {
	            Engine.step();
	            window.requestAnimationFrame(loop);
	        }
	        else loopEnabled = false;
	    }
	    window.requestAnimationFrame(loop);
	
	    //
	    // Upon main document window resize (unless on an "input" HTML element):
	    //   scroll to the top left corner of the window,
	    //   and for each managed Context: emit the 'resize' event and update its size.
	    // @param {Object=} event document event
	    //
	    function handleResize(event) {
	        for (var i = 0; i < contexts.length; i++) {
	            contexts[i].emit('resize');
	        }
	        eventHandler.emit('resize');
	    }
	    window.addEventListener('resize', handleResize, false);
	    handleResize();
	
	    /**
	     * Initialize famous for app mode
	     *
	     * @static
	     * @private
	     * @method initialize
	     */
	    function initialize() {
	        // prevent scrolling via browser
	        window.addEventListener('touchmove', function(event) {
	            event.preventDefault();
	        }, true);
	
	        addRootClasses();
	    }
	    var initialized = false;
	
	    function addRootClasses() {
	        if (!document.body) {
	            Engine.nextTick(addRootClasses);
	            return;
	        }
	
	        document.body.classList.add('famous-root');
	        document.documentElement.classList.add('famous-root');
	    }
	
	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    Engine.pipe = function pipe(target) {
	        if (target.subscribe instanceof Function) return target.subscribe(Engine);
	        else return eventHandler.pipe(target);
	    };
	
	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    Engine.unpipe = function unpipe(target) {
	        if (target.unsubscribe instanceof Function) return target.unsubscribe(Engine);
	        else return eventHandler.unpipe(target);
	    };
	
	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @static
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    Engine.on = function on(type, handler) {
	        if (!(type in eventForwarders)) {
	            eventForwarders[type] = eventHandler.emit.bind(eventHandler, type);
	
	            addEngineListener(type, eventForwarders[type]);
	        }
	        return eventHandler.on(type, handler);
	    };
	
	    function addEngineListener(type, forwarder) {
	        if (!document.body) {
	            Engine.nextTick(addEventListener.bind(this, type, forwarder));
	            return;
	        }
	
	        document.body.addEventListener(type, forwarder);
	    }
	
	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    Engine.emit = function emit(type, event) {
	        return eventHandler.emit(type, event);
	    };
	
	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @static
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    Engine.removeListener = function removeListener(type, handler) {
	        return eventHandler.removeListener(type, handler);
	    };
	
	    /**
	     * Return the current calculated frames per second of the Engine.
	     *
	     * @static
	     * @method getFPS
	     *
	     * @return {Number} calculated fps
	     */
	    Engine.getFPS = function getFPS() {
	        return 1000 / frameTime;
	    };
	
	    /**
	     * Set the maximum fps at which the system should run. If internal render
	     *    loop is called at a greater frequency than this FPSCap, Engine will
	     *    throttle render and update until this rate is achieved.
	     *
	     * @static
	     * @method setFPSCap
	     *
	     * @param {Number} fps maximum frames per second
	     */
	    Engine.setFPSCap = function setFPSCap(fps) {
	        frameTimeLimit = Math.floor(1000 / fps);
	    };
	
	    /**
	     * Return engine options.
	     *
	     * @static
	     * @method getOptions
	     * @param {string} key
	     * @return {Object} engine options
	     */
	    Engine.getOptions = function getOptions(key) {
	        return optionsManager.getOptions(key);
	    };
	
	    /**
	     * Set engine options
	     *
	     * @static
	     * @method setOptions
	     *
	     * @param {Object} [options] overrides of default options
	     * @param {Number} [options.fpsCap]  maximum fps at which the system should run
	     * @param {boolean} [options.runLoop=true] whether the run loop should continue
	     * @param {string} [options.containerType="div"] type of container element.  Defaults to 'div'.
	     * @param {string} [options.containerClass="famous-container"] type of container element.  Defaults to 'famous-container'.
	     */
	    Engine.setOptions = function setOptions(options) {
	        return optionsManager.setOptions.apply(optionsManager, arguments);
	    };
	
	    /**
	     * Creates a new Context for rendering and event handling with
	     *    provided document element as top of each tree. This will be tracked by the
	     *    process-wide Engine.
	     *
	     * @static
	     * @method createContext
	     *
	     * @param {Node} el will be top of Famo.us document element tree
	     * @return {Context} new Context within el
	     */
	    Engine.createContext = function createContext(el) {
	        if (!initialized && options.appMode) Engine.nextTick(initialize);
	
	        var needMountContainer = false;
	        if (!el) {
	            el = document.createElement(options.containerType);
	            el.classList.add(options.containerClass);
	            needMountContainer = true;
	        }
	
	        var context = new Context(el);
	        Engine.registerContext(context);
	
	        if (needMountContainer) mount(context, el);
	
	        return context;
	    };
	
	    function mount(context, el) {
	        if (!document.body) {
	            Engine.nextTick(mount.bind(this, context, el));
	            return;
	        }
	
	        document.body.appendChild(el);
	        context.emit('resize');
	    }
	
	    /**
	     * Registers an existing context to be updated within the run loop.
	     *
	     * @static
	     * @method registerContext
	     *
	     * @param {Context} context Context to register
	     * @return {FamousContext} provided context
	     */
	    Engine.registerContext = function registerContext(context) {
	        contexts.push(context);
	        return context;
	    };
	
	    /**
	     * Returns a list of all contexts.
	     *
	     * @static
	     * @method getContexts
	     * @return {Array} contexts that are updated on each tick
	     */
	    Engine.getContexts = function getContexts() {
	        return contexts;
	    };
	
	    /**
	     * Removes a context from the run loop. Note: this does not do any
	     *     cleanup.
	     *
	     * @static
	     * @method deregisterContext
	     *
	     * @param {Context} context Context to deregister
	     */
	    Engine.deregisterContext = function deregisterContext(context) {
	        var i = contexts.indexOf(context);
	        if (i >= 0) contexts.splice(i, 1);
	    };
	
	    /**
	     * Queue a function to be executed on the next tick of the
	     *    Engine.
	     *
	     * @static
	     * @method nextTick
	     *
	     * @param {function(Object)} fn function accepting window object
	     */
	    Engine.nextTick = function nextTick(fn) {
	        nextTickQueue.push(fn);
	    };
	
	    /**
	     * Queue a function to be executed sometime soon, at a time that is
	     *    unlikely to affect frame rate.
	     *
	     * @static
	     * @method defer
	     *
	     * @param {Function} fn
	     */
	    Engine.defer = function defer(fn) {
	        deferQueue.push(fn);
	    };
	
	    optionsManager.on('change', function(data) {
	        if (data.id === 'fpsCap') Engine.setFPSCap(data.value);
	        else if (data.id === 'runLoop') {
	            // kick off the loop only if it was stopped
	            if (!loopEnabled && data.value) {
	                loopEnabled = true;
	                window.requestAnimationFrame(loop);
	            }
	        }
	    });
	
	    module.exports = Engine;


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var RenderNode = __webpack_require__(309);
	    var EventHandler = __webpack_require__(312);
	    var ElementAllocator = __webpack_require__(317);
	    var Transform = __webpack_require__(300);
	    var Transitionable = __webpack_require__(301);
	
	    var _zeroZero = [0, 0];
	    var usePrefix = !('perspective' in document.documentElement.style);
	
	    function _getElementSize() {
	        var element = this.container;
	        return [element.clientWidth, element.clientHeight];
	    }
	
	    var _setPerspective = usePrefix ? function(element, perspective) {
	        element.style.webkitPerspective = perspective ? perspective.toFixed() + 'px' : '';
	    } : function(element, perspective) {
	        element.style.perspective = perspective ? perspective.toFixed() + 'px' : '';
	    };
	
	    /**
	     * The top-level container for a Famous-renderable piece of the document.
	     *   It is directly updated by the process-wide Engine object, and manages one
	     *   render tree root, which can contain other renderables.
	     *
	     * @class Context
	     * @constructor
	     * @private
	     * @param {Node} container Element in which content will be inserted
	     */
	    function Context(container) {
	        this.container = container;
	        this._allocator = new ElementAllocator(container);
	
	        this._node = new RenderNode();
	        this._eventOutput = new EventHandler();
	        this._size = _getElementSize.call(this);
	
	        this._perspectiveState = new Transitionable(0);
	        this._perspective = undefined;
	
	        this._nodeContext = {
	            allocator: this._allocator,
	            transform: Transform.identity,
	            opacity: 1,
	            origin: _zeroZero,
	            align: _zeroZero,
	            size: this._size
	        };
	
	        this._eventOutput.on('resize', function() {
	            this.setSize(_getElementSize.call(this));
	        }.bind(this));
	
	    }
	
	    // Note: Unused
	    Context.prototype.getAllocator = function getAllocator() {
	        return this._allocator;
	    };
	
	    /**
	     * Add renderables to this Context's render tree.
	     *
	     * @method add
	     *
	     * @param {Object} obj renderable object
	     * @return {RenderNode} RenderNode wrapping this object, if not already a RenderNode
	     */
	    Context.prototype.add = function add(obj) {
	        return this._node.add(obj);
	    };
	
	    /**
	     * Move this Context to another containing document element.
	     *
	     * @method migrate
	     *
	     * @param {Node} container Element to which content will be migrated
	     */
	    Context.prototype.migrate = function migrate(container) {
	        if (container === this.container) return;
	        this.container = container;
	        this._allocator.migrate(container);
	    };
	
	    /**
	     * Gets viewport size for Context.
	     *
	     * @method getSize
	     *
	     * @return {Array.Number} viewport size as [width, height]
	     */
	    Context.prototype.getSize = function getSize() {
	        return this._size;
	    };
	
	    /**
	     * Sets viewport size for Context.
	     *
	     * @method setSize
	     *
	     * @param {Array.Number} size [width, height].  If unspecified, use size of root document element.
	     */
	    Context.prototype.setSize = function setSize(size) {
	        if (!size) size = _getElementSize.call(this);
	        this._size[0] = size[0];
	        this._size[1] = size[1];
	    };
	
	    /**
	     * Commit this Context's content changes to the document.
	     *
	     * @private
	     * @method update
	     * @param {Object} contextParameters engine commit specification
	     */
	    Context.prototype.update = function update(contextParameters) {
	        if (contextParameters) {
	            if (contextParameters.transform) this._nodeContext.transform = contextParameters.transform;
	            if (contextParameters.opacity) this._nodeContext.opacity = contextParameters.opacity;
	            if (contextParameters.origin) this._nodeContext.origin = contextParameters.origin;
	            if (contextParameters.align) this._nodeContext.align = contextParameters.align;
	            if (contextParameters.size) this._nodeContext.size = contextParameters.size;
	        }
	        var perspective = this._perspectiveState.get();
	        if (perspective !== this._perspective) {
	            _setPerspective(this.container, perspective);
	            this._perspective = perspective;
	        }
	
	        this._node.commit(this._nodeContext);
	    };
	
	    /**
	     * Get current perspective of this context in pixels.
	     *
	     * @method getPerspective
	     * @return {Number} depth perspective in pixels
	     */
	    Context.prototype.getPerspective = function getPerspective() {
	        return this._perspectiveState.get();
	    };
	
	    /**
	     * Set current perspective of this context in pixels.
	     *
	     * @method setPerspective
	     * @param {Number} perspective in pixels
	     * @param {Object} [transition] Transitionable object for applying the change
	     * @param {function(Object)} callback function called on completion of transition
	     */
	    Context.prototype.setPerspective = function setPerspective(perspective, transition, callback) {
	        return this._perspectiveState.set(perspective, transition, callback);
	    };
	
	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    Context.prototype.emit = function emit(type, event) {
	        return this._eventOutput.emit(type, event);
	    };
	
	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    Context.prototype.on = function on(type, handler) {
	        return this._eventOutput.on(type, handler);
	    };
	
	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    Context.prototype.removeListener = function removeListener(type, handler) {
	        return this._eventOutput.removeListener(type, handler);
	    };
	
	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    Context.prototype.pipe = function pipe(target) {
	        return this._eventOutput.pipe(target);
	    };
	
	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    Context.prototype.unpipe = function unpipe(target) {
	        return this._eventOutput.unpipe(target);
	    };
	
	    module.exports = Context;


/***/ },
/* 317 */
/***/ function(module, exports) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	
	    /**
	     * Internal helper object to Context that handles the process of
	     *   creating and allocating DOM elements within a managed div.
	     *   Private.
	     *
	     * @class ElementAllocator
	     * @constructor
	     * @private
	     * @param {Node} container document element in which Famo.us content will be inserted
	     */
	    function ElementAllocator(container) {
	        if (!container) container = document.createDocumentFragment();
	        this.container = container;
	        this.detachedNodes = {};
	        this.nodeCount = 0;
	    }
	
	    /**
	     * Move the document elements from their original container to a new one.
	     *
	     * @private
	     * @method migrate
	     *
	     * @param {Node} container document element to which Famo.us content will be migrated
	     */
	    ElementAllocator.prototype.migrate = function migrate(container) {
	        var oldContainer = this.container;
	        if (container === oldContainer) return;
	
	        if (oldContainer instanceof DocumentFragment) {
	            container.appendChild(oldContainer);
	        }
	        else {
	            while (oldContainer.hasChildNodes()) {
	                container.appendChild(oldContainer.firstChild);
	            }
	        }
	
	        this.container = container;
	    };
	
	    /**
	     * Allocate an element of specified type from the pool.
	     *
	     * @private
	     * @method allocate
	     *
	     * @param {string} type type of element, e.g. 'div'
	     * @return {Node} allocated document element
	     */
	    ElementAllocator.prototype.allocate = function allocate(type) {
	        type = type.toLowerCase();
	        if (!(type in this.detachedNodes)) this.detachedNodes[type] = [];
	        var nodeStore = this.detachedNodes[type];
	        var result;
	        if (nodeStore.length > 0) {
	            result = nodeStore.pop();
	        }
	        else {
	            result = document.createElement(type);
	            this.container.appendChild(result);
	        }
	        this.nodeCount++;
	        return result;
	    };
	
	    /**
	     * De-allocate an element of specified type to the pool.
	     *
	     * @private
	     * @method deallocate
	     *
	     * @param {Node} element document element to deallocate
	     */
	    ElementAllocator.prototype.deallocate = function deallocate(element) {
	        var nodeType = element.nodeName.toLowerCase();
	        var nodeStore = this.detachedNodes[nodeType];
	        nodeStore.push(element);
	        this.nodeCount--;
	    };
	
	    /**
	     * Get count of total allocated nodes in the document.
	     *
	     * @private
	     * @method getNodeCount
	     *
	     * @return {Number} total node count
	     */
	    ElementAllocator.prototype.getNodeCount = function getNodeCount() {
	        return this.nodeCount;
	    };
	
	    module.exports = ElementAllocator;


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var EventHandler = __webpack_require__(312);
	
	    /**
	     *  A collection of methods for setting options which can be extended
	     *  onto other classes.
	     *
	     *
	     *  **** WARNING ****
	     *  You can only pass through objects that will compile into valid JSON.
	     *
	     *  Valid options:
	     *      Strings,
	     *      Arrays,
	     *      Objects,
	     *      Numbers,
	     *      Nested Objects,
	     *      Nested Arrays.
	     *
	     *    This excludes:
	     *        Document Fragments,
	     *        Functions
	     * @class OptionsManager
	     * @constructor
	     * @param {Object} value options dictionary
	     */
	    function OptionsManager(value) {
	        this._value = value;
	        this.eventOutput = null;
	    }
	
	    /**
	     * Create options manager from source dictionary with arguments overriden by patch dictionary.
	     *
	     * @static
	     * @method OptionsManager.patch
	     *
	     * @param {Object} source source arguments
	     * @param {...Object} data argument additions and overwrites
	     * @return {Object} source object
	     */
	    OptionsManager.patch = function patchObject(source, data) {
	        var manager = new OptionsManager(source);
	        for (var i = 1; i < arguments.length; i++) manager.patch(arguments[i]);
	        return source;
	    };
	
	    function _createEventOutput() {
	        this.eventOutput = new EventHandler();
	        this.eventOutput.bindThis(this);
	        EventHandler.setOutputHandler(this, this.eventOutput);
	    }
	
	    /**
	     * Create OptionsManager from source with arguments overriden by patches.
	     *   Triggers 'change' event on this object's event handler if the state of
	     *   the OptionsManager changes as a result.
	     *
	     * @method patch
	     *
	     * @param {...Object} arguments list of patch objects
	     * @return {OptionsManager} this
	     */
	    OptionsManager.prototype.patch = function patch() {
	        var myState = this._value;
	        for (var i = 0; i < arguments.length; i++) {
	            var data = arguments[i];
	            for (var k in data) {
	                if ((k in myState) && (data[k] && data[k].constructor === Object) && (myState[k] && myState[k].constructor === Object)) {
	                    if (!myState.hasOwnProperty(k)) myState[k] = Object.create(myState[k]);
	                    this.key(k).patch(data[k]);
	                    if (this.eventOutput) this.eventOutput.emit('change', {id: k, value: this.key(k).value()});
	                }
	                else this.set(k, data[k]);
	            }
	        }
	        return this;
	    };
	
	    /**
	     * Alias for patch
	     *
	     * @method setOptions
	     *
	     */
	    OptionsManager.prototype.setOptions = OptionsManager.prototype.patch;
	
	    /**
	     * Return OptionsManager based on sub-object retrieved by key
	     *
	     * @method key
	     *
	     * @param {string} identifier key
	     * @return {OptionsManager} new options manager with the value
	     */
	    OptionsManager.prototype.key = function key(identifier) {
	        var result = new OptionsManager(this._value[identifier]);
	        if (!(result._value instanceof Object) || result._value instanceof Array) result._value = {};
	        return result;
	    };
	
	    /**
	     * Look up value by key or get the full options hash
	     * @method get
	     *
	     * @param {string} key key
	     * @return {Object} associated object or full options hash
	     */
	    OptionsManager.prototype.get = function get(key) {
	        return key ? this._value[key] : this._value;
	    };
	
	    /**
	     * Alias for get
	     * @method getOptions
	     */
	    OptionsManager.prototype.getOptions = OptionsManager.prototype.get;
	
	    /**
	     * Set key to value.  Outputs 'change' event if a value is overwritten.
	     *
	     * @method set
	     *
	     * @param {string} key key string
	     * @param {Object} value value object
	     * @return {OptionsManager} new options manager based on the value object
	     */
	    OptionsManager.prototype.set = function set(key, value) {
	        var originalValue = this.get(key);
	        this._value[key] = value;
	        if (this.eventOutput && value !== originalValue) this.eventOutput.emit('change', {id: key, value: value});
	        return this;
	    };
	
	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'change')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    OptionsManager.prototype.on = function on() {
	        _createEventOutput.call(this);
	        return this.on.apply(this, arguments);
	    };
	
	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'change')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    OptionsManager.prototype.removeListener = function removeListener() {
	        _createEventOutput.call(this);
	        return this.removeListener.apply(this, arguments);
	    };
	
	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    OptionsManager.prototype.pipe = function pipe() {
	        _createEventOutput.call(this);
	        return this.pipe.apply(this, arguments);
	    };
	
	    /**
	     * Remove handler object from set of downstream handlers.
	     * Undoes work of "pipe"
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    OptionsManager.prototype.unpipe = function unpipe() {
	        _createEventOutput.call(this);
	        return this.unpipe.apply(this, arguments);
	    };
	
	    module.exports = OptionsManager;


/***/ },
/* 319 */
/***/ function(module, exports) {

	"use strict";
	
	// Polyfill for Function.name on browsers that do not support it (IE):
	// See: http://stackoverflow.com/questions/6903762/function-name-not-supported-in-ie
	if (!(function f() {}).name) {
	    Object.defineProperty(Function.prototype, "name", {
	        get: function () {
	            var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];
	
	            // For better performance only parse once, and then cache the
	            // result through a new accessor for repeated access.
	            Object.defineProperty(this, "name", { value: name });
	
	            return name;
	        }
	    });
	}
	//# sourceMappingURL=polyfill.Function.name.js.map

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Grid = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Modifier = __webpack_require__(307);
	
	var _Modifier2 = _interopRequireDefault(_Modifier);
	
	var _Transform = __webpack_require__(300);
	
	var _Transform2 = _interopRequireDefault(_Transform);
	
	var _Molecule2 = __webpack_require__(306);
	
	var _Molecule3 = _interopRequireDefault(_Molecule2);
	
	var _forLength = __webpack_require__(321);
	
	var _forLength2 = _interopRequireDefault(_forLength);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * A scenegraph tree with a variable number of leaf node Modifiers (the grid
	 * cells) that are arranged in a grid. Add any [famous/src/core/RenderNode](#famous/src/core/RenderNode)-compatible
	 * item to each leafnode of the grid.
	 *
	 * TODO: Use Molecule instead of Modifier for the grid cells.
	 * TODO: Add an options parameter, that the Molecule constructor will handle.
	 *
	 * @class Grid
	 * @extends Molecule
	 */
	var Grid = exports.Grid = function (_Molecule) {
	    _inherits(Grid, _Molecule);
	
	    /**
	     * Creates a new Grid having the specified number of columns, number of rows,
	     * and famo.us-style size.
	     *
	     * @constructor
	     * @param {Number} columns The integer number of columns.
	     * @param {Number} rows The integer number of rows.
	     * @param {Array} size A famo.us-style width/height size array.
	     */
	    function Grid(columns, rows, size) {
	        _classCallCheck(this, Grid);
	
	        var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, { size: size }));
	
	        _this.columns = columns;
	        _this.rows = rows;
	        _this.cellNodes = [];
	
	        if (typeof _this.options.size === 'undefined') {
	            _this.setOptions({ size: [undefined, undefined] });
	        }
	
	        (0, _forLength2.default)(_this.columns * _this.rows, _this._createGridCell.bind(_this));
	        return _this;
	    }
	
	    /**
	     * Creates a grid cell at the given index.
	     *
	     * @private
	     * @param {Number} index The integer index of the grid cell.
	     */
	
	
	    _createClass(Grid, [{
	        key: '_createGridCell',
	        value: function _createGridCell(index) {
	            var column = index % this.columns;
	            var row = Math.floor(index / this.columns);
	
	            var cellSize = null;
	            if (typeof this.options.size[0] != 'undefined' && typeof this.options.size[1] != 'undefined') {
	                cellSize = [];
	                cellSize[0] = this.options.size[0] / this.columns;
	                cellSize[1] = this.options.size[1] / this.rows;
	            }
	
	            var mod = new _Modifier2.default({
	                align: [0, 0],
	                origin: [0, 0],
	                size: cellSize ? [cellSize[0], cellSize[1]] : [undefined, undefined],
	                transform: _Transform2.default.translate(column * cellSize[0], row * cellSize[1], 0)
	            });
	            var mod2 = new _Modifier2.default({
	                //transform: Transform.rotateY(Math.PI/10),
	                align: [0.5, 0.5],
	                origin: [0.5, 0.5]
	            });
	            // FIXME: ^^^ Why do I need an extra Modifier to align stuff in the middle of the grid cells?????
	            this.cellNodes.push(this.add(mod).add(mod2));
	        }
	
	        /**
	         * Sets the items to be layed out in the grid.
	         *
	         * @param {Array} children An array of [famous/src/core/RenderNode](#famous/src/core/RenderNode)-compatible items.
	         */
	
	    }, {
	        key: 'setChildren',
	        value: function setChildren(children) {
	            (0, _forLength2.default)(this.columns * this.rows, function (index) {
	                //this.cellNodes[index].set(null); // TODO: how do we erase previous children?
	                this.cellNodes[index].add(children[index]);
	            }.bind(this));
	            return this;
	        }
	    }]);
	
	    return Grid;
	}(_Molecule3.default);
	
	exports.default = Grid;

/***/ },
/* 321 */
/***/ function(module, exports) {

	"use strict";
	
	// loop for a given length, performing action each loop iteration. action receives the index of the loop.
	exports.forLength = forLength;
	function forLength(length, action) {
	    for (var i = 0; i < length; i += 1) {
	        action(i);
	    }
	}
	exports["default"] = forLength;
	exports.__esModule = true;
	//# sourceMappingURL=forLength.js.map

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DoubleSidedPlane = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Transform = __webpack_require__(300);
	
	var _Transform2 = _interopRequireDefault(_Transform);
	
	var _Molecule2 = __webpack_require__(306);
	
	var _Molecule3 = _interopRequireDefault(_Molecule2);
	
	var _Plane = __webpack_require__(323);
	
	var _Plane2 = _interopRequireDefault(_Plane);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * A scenegraph tree who's two leaf nodes are [Plane](#Plane) instances facing
	 * opposite directions. For the purposes of these docs, in a brand new app with
	 * only a single `DoubleSidedPlane` added to the context, and having no
	 * rotation, "plane1" faces you and "plane2" faces away.
	 *
	 * @class DoubleSidedPlane
	 * @extends Molecule
	 */
	var DoubleSidedPlane = exports.DoubleSidedPlane = function (_Molecule) {
	  _inherits(DoubleSidedPlane, _Molecule);
	
	  /**
	   * Creates a new `DoubleSidedPlane` who's `initialOptions` get passed to
	   * both [Plane](#Plane) instances, as well as this DoubleSidedPlane's parent
	   * [Molecule](#Molecule) constructor.
	   *
	   * @constructor
	   * @param {Object} initialOptions The options to initiate the `DoubleSidedPlane` with.
	   */
	  function DoubleSidedPlane(initialOptions) {
	    _classCallCheck(this, DoubleSidedPlane);
	
	    var _this = _possibleConstructorReturn(this, (DoubleSidedPlane.__proto__ || Object.getPrototypeOf(DoubleSidedPlane)).call(this, initialOptions));
	
	    _this.children = [];
	    _this.plane1 = new _Plane2.default(_this.options);
	    _this.plane1.transform.set(_Transform2.default.rotate(0, 0, 0));
	    _this.setOptions({ properties: { background: 'orange' } });
	    _this.plane2 = new _Plane2.default(_this.options);
	    _this.plane2.transform.set(_Transform2.default.rotate(0, Math.PI, 0));
	
	    _this.children.push(_this.plane1);
	    _this.children.push(_this.plane2);
	    _this.add(_this.plane2);
	    _this.add(_this.plane1);
	    _this.plane1.pipe(_this.options.handler);
	    _this.plane2.pipe(_this.options.handler);
	
	    return _this;
	  }
	
	  /**
	   * Get the content of the [famous/src/core/Surface](#famous/src/core/Surface) of each [Plane](#Plane).
	   *
	   * @returns {Array} An array containing two items, the content of each
	   * `Plane`. The first item is from "plane1".
	   */
	
	
	  _createClass(DoubleSidedPlane, [{
	    key: 'getContent',
	    value: function getContent() {
	      return [this.plane1.getContent(), this.plane2.getContent()];
	    }
	
	    /**
	     * Set the content of both [Plane](#Plane) instances.
	     *
	     * @param {Array} content An array of content, one item per `Plane`. The
	     * first item is for "plane1".
	     */
	
	  }, {
	    key: 'setContent',
	    value: function setContent(content) {
	      this.plane1.setContent(content[0]);
	      this.plane2.setContent(content[1]);
	    }
	  }]);
	
	  return DoubleSidedPlane;
	}(_Molecule3.default);
	
	exports.default = DoubleSidedPlane;

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Plane = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Surface = __webpack_require__(324);
	
	var _Surface2 = _interopRequireDefault(_Surface);
	
	var _Molecule2 = __webpack_require__(306);
	
	var _Molecule3 = _interopRequireDefault(_Molecule2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * Planes have the properties of [Molecules](#Molecule), plus they contain a
	 * [famous/src/core/Surface](#famous/src/core/Surface) so that they ultimately render
	 * onto the screen. A Surface's events are automatically piped to it's
	 * [famous/src/core/EventHandler](#famous/src/core/EventHandler), inherited from
	 * `Molecule`.
	 *
	 * @class Plane
	 * @extends Molecule
	 */
	var Plane = exports.Plane = function (_Molecule) {
	  _inherits(Plane, _Molecule);
	
	  /**
	   * Creates a new `Plane`. Properties from the `initialOptions` parameter
	   * are applied to this Plane's [famous/src/core/Surface](#famous/src/core/Surface) as well as to
	   * to this Plane's [famous/src/core/Modifier](#famous/src/core/Modifier), hence the API of a Plane
	   * is currently the combination of the Famo.us `Modifier` and `Surface` APIs.
	   *
	   * @constructor
	   * @param {Object} initialOptions Options for the new Plane.
	   */
	  function Plane(initialOptions) {
	    _classCallCheck(this, Plane);
	
	    var _this = _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this, initialOptions));
	
	    _this.surface = new _Surface2.default(_this.options);
	    _this.add(_this.surface);
	    _this.surface.pipe(_this.options.handler);
	    return _this;
	  }
	
	  /**
	   * Get the content of this Plane's [famous/src/core/Surface](#famous/src/core/Surface).
	   * See [famous/src/core/Surface.getContent](#famous/src/core/Surface.getContent).
	   */
	
	
	  _createClass(Plane, [{
	    key: 'getContent',
	    value: function getContent() {
	      var args = Array.prototype.splice.call(arguments, 0);
	      return this.surface.getContent.apply(this.surface, args);
	    }
	
	    /**
	     * Set the content of this Plane's [famous/src/core/Surface](#famous/src/core/Surface).
	     * See [famous/src/core/Surface.setContent](#famous/src/core/Surface.setContent).
	     */
	
	  }, {
	    key: 'setContent',
	    value: function setContent() {
	      var args = Array.prototype.splice.call(arguments, 0);
	      return this.surface.setContent.apply(this.surface, args);
	    }
	  }]);
	
	  return Plane;
	}(_Molecule3.default);
	
	exports.default = Plane;

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var ElementOutput = __webpack_require__(325);
	
	    /**
	     * A base class for viewable content and event
	     *   targets inside a Famo.us application, containing a renderable document
	     *   fragment. Like an HTML div, it can accept internal markup,
	     *   properties, classes, and handle events.
	     *
	     * @class Surface
	     * @constructor
	     *
	     * @param {Object} [options] default option overrides
	     * @param {Array.Number} [options.size] [width, height] in pixels
	     * @param {Array.string} [options.classes] CSS classes to set on target div
	     * @param {Array} [options.properties] string dictionary of CSS properties to set on target div
	     * @param {Array} [options.attributes] string dictionary of HTML attributes to set on target div
	     * @param {string} [options.content] inner (HTML) content of surface
	     */
	    function Surface(options) {
	        ElementOutput.call(this);
	
	        this.options = {};
	
	        this.properties = {};
	        this.attributes = {};
	        this.content = '';
	        this.classList = [];
	        this.size = null;
	
	        this._classesDirty = true;
	        this._stylesDirty = true;
	        this._attributesDirty = true;
	        this._sizeDirty = true;
	        this._contentDirty = true;
	        this._trueSizeCheck = true;
	
	        this._dirtyClasses = [];
	
	        if (options) this.setOptions(options);
	
	        this._currentTarget = null;
	    }
	    Surface.prototype = Object.create(ElementOutput.prototype);
	    Surface.prototype.constructor = Surface;
	    Surface.prototype.elementType = 'div';
	    Surface.prototype.elementClass = 'famous-surface';
	
	    /**
	     * Set HTML attributes on this Surface. Note that this will cause
	     *    dirtying and thus re-rendering, even if values do not change.
	     *
	     * @method setAttributes
	    * @param {Object} attributes property dictionary of "key" => "value"
	     */
	    Surface.prototype.setAttributes = function setAttributes(attributes) {
	        for (var n in attributes) {
	            if (n === 'style') throw new Error('Cannot set styles via "setAttributes" as it will break Famo.us.  Use "setProperties" instead.');
	            this.attributes[n] = attributes[n];
	        }
	        this._attributesDirty = true;
	    };
	
	    /**
	     * Get HTML attributes on this Surface.
	     *
	     * @method getAttributes
	     *
	     * @return {Object} Dictionary of this Surface's attributes.
	     */
	    Surface.prototype.getAttributes = function getAttributes() {
	        return this.attributes;
	    };
	
	    /**
	     * Set CSS-style properties on this Surface. Note that this will cause
	     *    dirtying and thus re-rendering, even if values do not change.
	     *
	     * @method setProperties
	     * @chainable
	     * @param {Object} properties property dictionary of "key" => "value"
	     */
	    Surface.prototype.setProperties = function setProperties(properties) {
	        for (var n in properties) {
	            this.properties[n] = properties[n];
	        }
	        this._stylesDirty = true;
	        return this;
	    };
	
	    /**
	     * Get CSS-style properties on this Surface.
	     *
	     * @method getProperties
	     *
	     * @return {Object} Dictionary of this Surface's properties.
	     */
	    Surface.prototype.getProperties = function getProperties() {
	        return this.properties;
	    };
	
	    /**
	     * Add CSS-style class to the list of classes on this Surface. Note
	     *   this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method addClass
	     * @chainable
	     * @param {string} className name of class to add
	     */
	    Surface.prototype.addClass = function addClass(className) {
	        if (this.classList.indexOf(className) < 0) {
	            this.classList.push(className);
	            this._classesDirty = true;
	        }
	        return this;
	    };
	
	    /**
	     * Remove CSS-style class from the list of classes on this Surface.
	     *   Note this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method removeClass
	     * @chainable
	     * @param {string} className name of class to remove
	     */
	    Surface.prototype.removeClass = function removeClass(className) {
	        var i = this.classList.indexOf(className);
	        if (i >= 0) {
	            this._dirtyClasses.push(this.classList.splice(i, 1)[0]);
	            this._classesDirty = true;
	        }
	        return this;
	    };
	
	    /**
	     * Toggle CSS-style class from the list of classes on this Surface.
	     *   Note this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method toggleClass
	     * @param {string} className name of class to toggle
	     */
	    Surface.prototype.toggleClass = function toggleClass(className) {
	        var i = this.classList.indexOf(className);
	        if (i >= 0) {
	            this.removeClass(className);
	        } else {
	            this.addClass(className);
	        }
	        return this;
	    };
	
	    /**
	     * Reset class list to provided dictionary.
	     * @method setClasses
	     * @chainable
	     * @param {Array.string} classList
	     */
	    Surface.prototype.setClasses = function setClasses(classList) {
	        var i = 0;
	        var removal = [];
	        for (i = 0; i < this.classList.length; i++) {
	            if (classList.indexOf(this.classList[i]) < 0) removal.push(this.classList[i]);
	        }
	        for (i = 0; i < removal.length; i++) this.removeClass(removal[i]);
	        // duplicates are already checked by addClass()
	        for (i = 0; i < classList.length; i++) this.addClass(classList[i]);
	        return this;
	    };
	
	    /**
	     * Get array of CSS-style classes attached to this div.
	     *
	     * @method getClasslist
	     * @return {Array.string} array of class names
	     */
	    Surface.prototype.getClassList = function getClassList() {
	        return this.classList;
	    };
	
	    /**
	     * Set or overwrite inner (HTML) content of this surface. Note that this
	     *    causes a re-rendering if the content has changed.
	     *
	     * @method setContent
	     * @chainable
	     * @param {string|Document Fragment} content HTML content
	     */
	    Surface.prototype.setContent = function setContent(content) {
	        if (this.content !== content) {
	            this.content = content;
	            this._contentDirty = true;
	        }
	        return this;
	    };
	
	    /**
	     * Return inner (HTML) content of this surface.
	     *
	     * @method getContent
	     *
	     * @return {string} inner (HTML) content
	     */
	    Surface.prototype.getContent = function getContent() {
	        return this.content;
	    };
	
	    /**
	     * Set options for this surface
	     *
	     * @method setOptions
	     * @chainable
	     * @param {Object} [options] overrides for default options.  See constructor.
	     */
	    Surface.prototype.setOptions = function setOptions(options) {
	        if (options.size) this.setSize(options.size);
	        if (options.classes) this.setClasses(options.classes);
	        if (options.properties) this.setProperties(options.properties);
	        if (options.attributes) this.setAttributes(options.attributes);
	        if (options.content) this.setContent(options.content);
	        return this;
	    };
	
	    //  Apply to document all changes from removeClass() since last setup().
	    function _cleanupClasses(target) {
	        for (var i = 0; i < this._dirtyClasses.length; i++) target.classList.remove(this._dirtyClasses[i]);
	        this._dirtyClasses = [];
	    }
	
	    // Apply values of all Famous-managed styles to the document element.
	    //  These will be deployed to the document on call to #setup().
	    function _applyStyles(target) {
	        for (var n in this.properties) {
	            target.style[n] = this.properties[n];
	        }
	    }
	
	    // Clear all Famous-managed styles from the document element.
	    // These will be deployed to the document on call to #setup().
	    function _cleanupStyles(target) {
	        for (var n in this.properties) {
	            target.style[n] = '';
	        }
	    }
	
	    // Apply values of all Famous-managed attributes to the document element.
	    //  These will be deployed to the document on call to #setup().
	    function _applyAttributes(target) {
	        for (var n in this.attributes) {
	            target.setAttribute(n, this.attributes[n]);
	        }
	    }
	
	    // Clear all Famous-managed attributes from the document element.
	    // These will be deployed to the document on call to #setup().
	    function _cleanupAttributes(target) {
	        for (var n in this.attributes) {
	            target.removeAttribute(n);
	        }
	    }
	
	    function _xyNotEquals(a, b) {
	        return (a && b) ? (a[0] !== b[0] || a[1] !== b[1]) : a !== b;
	    }
	
	    /**
	     * One-time setup for an element to be ready for commits to document.
	     *
	     * @private
	     * @method setup
	     *
	     * @param {ElementAllocator} allocator document element pool for this context
	     */
	    Surface.prototype.setup = function setup(allocator) {
	        var target = allocator.allocate(this.elementType);
	        if (this.elementClass) {
	            if (this.elementClass instanceof Array) {
	                for (var i = 0; i < this.elementClass.length; i++) {
	                    target.classList.add(this.elementClass[i]);
	                }
	            }
	            else {
	                target.classList.add(this.elementClass);
	            }
	        }
	        target.style.display = '';
	        this.attach(target);
	        this._opacity = null;
	        this._currentTarget = target;
	        this._stylesDirty = true;
	        this._classesDirty = true;
	        this._attributesDirty = true;
	        this._sizeDirty = true;
	        this._contentDirty = true;
	        this._originDirty = true;
	        this._transformDirty = true;
	    };
	
	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    Surface.prototype.commit = function commit(context) {
	        if (!this._currentTarget) this.setup(context.allocator);
	        var target = this._currentTarget;
	        var size = context.size;
	
	        if (this._classesDirty) {
	            _cleanupClasses.call(this, target);
	            var classList = this.getClassList();
	            for (var i = 0; i < classList.length; i++) target.classList.add(classList[i]);
	            this._classesDirty = false;
	            this._trueSizeCheck = true;
	        }
	
	        if (this._stylesDirty) {
	            _applyStyles.call(this, target);
	            this._stylesDirty = false;
	            this._trueSizeCheck = true;
	        }
	
	        if (this._attributesDirty) {
	            _applyAttributes.call(this, target);
	            this._attributesDirty = false;
	            this._trueSizeCheck = true;
	        }
	
	        if (this.size) {
	            var origSize = context.size;
	            size = [this.size[0], this.size[1]];
	            if (size[0] === undefined) size[0] = origSize[0];
	            if (size[1] === undefined) size[1] = origSize[1];
	            if (size[0] === true || size[1] === true) {
	                if (size[0] === true){
	                    if (this._trueSizeCheck || (this._size[0] === 0)) {
	                        var width = target.offsetWidth;
	                        if (this._size && this._size[0] !== width) {
	                            this._size[0] = width;
	                            this._sizeDirty = true;
	                        }
	                        size[0] = width;
	                    } else {
	                        if (this._size) size[0] = this._size[0];
	                    }
	                }
	                if (size[1] === true){
	                    if (this._trueSizeCheck || (this._size[1] === 0)) {
	                        var height = target.offsetHeight;
	                        if (this._size && this._size[1] !== height) {
	                            this._size[1] = height;
	                            this._sizeDirty = true;
	                        }
	                        size[1] = height;
	                    } else {
	                        if (this._size) size[1] = this._size[1];
	                    }
	                }
	                this._trueSizeCheck = false;
	            }
	        }
	
	        if (_xyNotEquals(this._size, size)) {
	            if (!this._size) this._size = [0, 0];
	            this._size[0] = size[0];
	            this._size[1] = size[1];
	
	            this._sizeDirty = true;
	        }
	
	        if (this._sizeDirty) {
	            if (this._size) {
	                target.style.width = (this.size && this.size[0] === true) ? '' : this._size[0] + 'px';
	                target.style.height = (this.size && this.size[1] === true) ?  '' : this._size[1] + 'px';
	            }
	
	            this._eventOutput.emit('resize');
	        }
	
	        if (this._contentDirty) {
	            this.deploy(target);
	            this._eventOutput.emit('deploy');
	            this._contentDirty = false;
	            this._trueSizeCheck = true;
	        }
	
	        ElementOutput.prototype.commit.call(this, context);
	    };
	
	    /**
	     *  Remove all Famous-relevant attributes from a document element.
	     *    This is called by SurfaceManager's detach().
	     *    This is in some sense the reverse of .deploy().
	     *
	     * @private
	     * @method cleanup
	     * @param {ElementAllocator} allocator
	     */
	    Surface.prototype.cleanup = function cleanup(allocator) {
	        var i = 0;
	        var target = this._currentTarget;
	        this._eventOutput.emit('recall');
	        this.recall(target);
	        target.style.display = 'none';
	        target.style.opacity = '';
	        target.style.width = '';
	        target.style.height = '';
	        _cleanupStyles.call(this, target);
	        _cleanupAttributes.call(this, target);
	        var classList = this.getClassList();
	        _cleanupClasses.call(this, target);
	        for (i = 0; i < classList.length; i++) target.classList.remove(classList[i]);
	        if (this.elementClass) {
	            if (this.elementClass instanceof Array) {
	                for (i = 0; i < this.elementClass.length; i++) {
	                    target.classList.remove(this.elementClass[i]);
	                }
	            }
	            else {
	                target.classList.remove(this.elementClass);
	            }
	        }
	        this.detach(target);
	        this._currentTarget = null;
	        allocator.deallocate(target);
	    };
	
	    /**
	     * Place the document element that this component manages into the document.
	     *
	     * @private
	     * @method deploy
	     * @param {Node} target document parent of this container
	     */
	    Surface.prototype.deploy = function deploy(target) {
	        var content = this.getContent();
	        if (content instanceof Node) {
	            while (target.hasChildNodes()) target.removeChild(target.firstChild);
	            target.appendChild(content);
	        }
	        else target.innerHTML = content;
	    };
	
	    /**
	     * Remove any contained document content associated with this surface
	     *   from the actual document.
	     *
	     * @private
	     * @method recall
	     */
	    Surface.prototype.recall = function recall(target) {
	        var df = document.createDocumentFragment();
	        while (target.hasChildNodes()) df.appendChild(target.firstChild);
	        this.setContent(df);
	    };
	
	    /**
	     *  Get the x and y dimensions of the surface.
	     *
	     * @method getSize
	     * @return {Array.Number} [x,y] size of surface
	     */
	    Surface.prototype.getSize = function getSize() {
	        return this._size ? this._size : this.size;
	    };
	
	    /**
	     * Set x and y dimensions of the surface.
	     *
	     * @method setSize
	     * @chainable
	     * @param {Array.Number} size as [width, height]
	     */
	    Surface.prototype.setSize = function setSize(size) {
	        this.size = size ? [size[0], size[1]] : null;
	        this._sizeDirty = true;
	        return this;
	    };
	
	    module.exports = Surface;


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var Entity = __webpack_require__(310);
	    var EventHandler = __webpack_require__(312);
	    var Transform = __webpack_require__(300);
	
	    var usePrefix = !('transform' in document.documentElement.style);
	    var devicePixelRatio = window.devicePixelRatio || 1;
	
	    /**
	     * A base class for viewable content and event
	     *   targets inside a Famo.us application, containing a renderable document
	     *   fragment. Like an HTML div, it can accept internal markup,
	     *   properties, classes, and handle events.
	     *
	     * @class ElementOutput
	     * @constructor
	     *
	     * @param {Node} element document parent of this container
	     */
	    function ElementOutput(element) {
	        this._matrix = null;
	        this._opacity = 1;
	        this._origin = null;
	        this._size = null;
	
	        this._eventOutput = new EventHandler();
	        this._eventOutput.bindThis(this);
	
	        /** @ignore */
	        this.eventForwarder = function eventForwarder(event) {
	            this._eventOutput.emit(event.type, event);
	        }.bind(this);
	
	        this.id = Entity.register(this);
	        this._element = null;
	        this._sizeDirty = false;
	        this._originDirty = false;
	        this._transformDirty = false;
	
	        this._invisible = false;
	        if (element) this.attach(element);
	    }
	
	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} fn handler callback
	     * @return {EventHandler} this
	     */
	    ElementOutput.prototype.on = function on(type, fn) {
	        if (this._element) this._element.addEventListener(type, this.eventForwarder);
	        this._eventOutput.on(type, fn);
	    };
	
	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on"
	     *
	     * @method removeListener
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} fn handler
	     */
	    ElementOutput.prototype.removeListener = function removeListener(type, fn) {
	        this._eventOutput.removeListener(type, fn);
	    };
	
	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} [event] event data
	     * @return {EventHandler} this
	     */
	    ElementOutput.prototype.emit = function emit(type, event) {
	        if (event && !event.origin) event.origin = this;
	        var handled = this._eventOutput.emit(type, event);
	        if (handled && event && event.stopPropagation) event.stopPropagation();
	        return handled;
	    };
	
	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    ElementOutput.prototype.pipe = function pipe(target) {
	        return this._eventOutput.pipe(target);
	    };
	
	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe"
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    ElementOutput.prototype.unpipe = function unpipe(target) {
	        return this._eventOutput.unpipe(target);
	    };
	
	    /**
	     * Return spec for this surface. Note that for a base surface, this is
	     *    simply an id.
	     *
	     * @method render
	     * @private
	     * @return {Object} render spec for this surface (spec id)
	     */
	    ElementOutput.prototype.render = function render() {
	        return this.id;
	    };
	
	    //  Attach Famous event handling to document events emanating from target
	    //    document element.  This occurs just after attachment to the document.
	    //    Calling this enables methods like #on and #pipe.
	    function _addEventListeners(target) {
	        for (var i in this._eventOutput.listeners) {
	            target.addEventListener(i, this.eventForwarder);
	        }
	    }
	
	    //  Detach Famous event handling from document events emanating from target
	    //  document element.  This occurs just before detach from the document.
	    function _removeEventListeners(target) {
	        for (var i in this._eventOutput.listeners) {
	            target.removeEventListener(i, this.eventForwarder);
	        }
	    }
	
	    /**
	     * Return a Matrix's webkit css representation to be used with the
	     *    CSS3 -webkit-transform style.
	     *    Example: -webkit-transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,716,243,0,1)
	     *
	     * @method _formatCSSTransform
	     * @private
	     * @param {FamousMatrix} m matrix
	     * @return {string} matrix3d CSS style representation of the transform
	     */
	    function _formatCSSTransform(m) {
	        m[12] = Math.round(m[12] * devicePixelRatio) / devicePixelRatio;
	        m[13] = Math.round(m[13] * devicePixelRatio) / devicePixelRatio;
	
	        var result = 'matrix3d(';
	        for (var i = 0; i < 15; i++) {
	            result += (m[i] < 0.000001 && m[i] > -0.000001) ? '0,' : m[i] + ',';
	        }
	        result += m[15] + ')';
	        return result;
	    }
	
	    /**
	     * Directly apply given FamousMatrix to the document element as the
	     *   appropriate webkit CSS style.
	     *
	     * @method setMatrix
	     *
	     * @static
	     * @private
	     * @param {Element} element document element
	     * @param {FamousMatrix} matrix
	     */
	
	    var _setMatrix;
	    if (usePrefix) {
	        _setMatrix = function(element, matrix) {
	            element.style.webkitTransform = _formatCSSTransform(matrix);
	        };
	    }
	    else {
	        _setMatrix = function(element, matrix) {
	            element.style.transform = _formatCSSTransform(matrix);
	        };
	    }
	
	    // format origin as CSS percentage string
	    function _formatCSSOrigin(origin) {
	        return (100 * origin[0]) + '% ' + (100 * origin[1]) + '%';
	    }
	
	    // Directly apply given origin coordinates to the document element as the
	    // appropriate webkit CSS style.
	    var _setOrigin = usePrefix ? function(element, origin) {
	        element.style.webkitTransformOrigin = _formatCSSOrigin(origin);
	    } : function(element, origin) {
	        element.style.transformOrigin = _formatCSSOrigin(origin);
	    };
	
	    // Shrink given document element until it is effectively invisible.
	    var _setInvisible = usePrefix ? function(element) {
	        element.style.webkitTransform = 'scale3d(0.0001,0.0001,0.0001)';
	        element.style.opacity = 0;
	    } : function(element) {
	        element.style.transform = 'scale3d(0.0001,0.0001,0.0001)';
	        element.style.opacity = 0;
	    };
	
	    function _xyNotEquals(a, b) {
	        return (a && b) ? (a[0] !== b[0] || a[1] !== b[1]) : a !== b;
	    }
	
	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    ElementOutput.prototype.commit = function commit(context) {
	        var target = this._element;
	        if (!target) return;
	
	        var matrix = context.transform;
	        var opacity = context.opacity;
	        var origin = context.origin;
	        var size = context.size;
	
	        if (!matrix && this._matrix) {
	            this._matrix = null;
	            this._opacity = 0;
	            _setInvisible(target);
	            return;
	        }
	
	        if (_xyNotEquals(this._origin, origin)) this._originDirty = true;
	        if (Transform.notEquals(this._matrix, matrix)) this._transformDirty = true;
	
	        if (this._invisible) {
	            this._invisible = false;
	            this._element.style.display = '';
	        }
	
	        if (this._opacity !== opacity) {
	            this._opacity = opacity;
	            target.style.opacity = (opacity >= 1) ? '0.999999' : opacity;
	        }
	
	        if (this._transformDirty || this._originDirty || this._sizeDirty) {
	            if (this._sizeDirty) this._sizeDirty = false;
	
	            if (this._originDirty) {
	                if (origin) {
	                    if (!this._origin) this._origin = [0, 0];
	                    this._origin[0] = origin[0];
	                    this._origin[1] = origin[1];
	                }
	                else this._origin = null;
	                _setOrigin(target, this._origin);
	                this._originDirty = false;
	            }
	
	            if (!matrix) matrix = Transform.identity;
	            this._matrix = matrix;
	            var aaMatrix = this._size ? Transform.thenMove(matrix, [-this._size[0]*origin[0], -this._size[1]*origin[1], 0]) : matrix;
	            _setMatrix(target, aaMatrix);
	            this._transformDirty = false;
	        }
	    };
	
	    ElementOutput.prototype.cleanup = function cleanup() {
	        if (this._element) {
	            this._invisible = true;
	            this._element.style.display = 'none';
	        }
	    };
	
	    /**
	     * Place the document element that this component manages into the document.
	     *
	     * @private
	     * @method attach
	     * @param {Node} target document parent of this container
	     */
	    ElementOutput.prototype.attach = function attach(target) {
	        this._element = target;
	        _addEventListeners.call(this, target);
	    };
	
	    /**
	     * Remove any contained document content associated with this surface
	     *   from the actual document.
	     *
	     * @private
	     * @method detach
	     */
	    ElementOutput.prototype.detach = function detach() {
	        var target = this._element;
	        if (target) {
	            _removeEventListeners.call(this, target);
	            if (this._invisible) {
	                this._invisible = false;
	                this._element.style.display = '';
	            }
	        }
	        this._element = null;
	        return target;
	    };
	
	    module.exports = ElementOutput;


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Cube = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Transform = __webpack_require__(300);
	
	var _Transform2 = _interopRequireDefault(_Transform);
	
	var _MouseSync = __webpack_require__(327);
	
	var _MouseSync2 = _interopRequireDefault(_MouseSync);
	
	var _TouchSync = __webpack_require__(328);
	
	var _TouchSync2 = _interopRequireDefault(_TouchSync);
	
	var _GenericSync = __webpack_require__(330);
	
	var _GenericSync2 = _interopRequireDefault(_GenericSync);
	
	var _Molecule2 = __webpack_require__(306);
	
	var _Molecule3 = _interopRequireDefault(_Molecule2);
	
	var _Plane = __webpack_require__(323);
	
	var _Plane2 = _interopRequireDefault(_Plane);
	
	var _forLength = __webpack_require__(321);
	
	var _forLength2 = _interopRequireDefault(_forLength);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * A scenegraph tree that lays things out in a cube form. The leaf nodes of the
	 * scenegraph (the cube sides) are Molecules. Add anything to the leaf nodes
	 * that a [famous/src/core/RenderNode](#famous/src/core/RenderNode) would normally accept.
	 *
	 * @class Cube
	 * @extends Molecule
	 */
	var Cube = exports.Cube = function (_Molecule) {
	    _inherits(Cube, _Molecule);
	
	    /**
	     * Create a new Cube.
	     *
	     * @constructor
	     * @param {Number} cubeWidth The integer width of the cube.
	     */
	    function Cube(cubeWidth) {
	        _classCallCheck(this, Cube);
	
	        var _this = _possibleConstructorReturn(this, (Cube.__proto__ || Object.getPrototypeOf(Cube)).call(this, { size: cubeWidth }));
	
	        _GenericSync2.default.register({
	            mouse: _MouseSync2.default,
	            touch: _TouchSync2.default
	        });
	
	        _this.cubeWidth = cubeWidth;
	
	        _this.cubeSideNodes = [];
	        _this.cubeSides = [];
	
	        // TODO: v0.1.0: Put this in a function.
	        (0, _forLength2.default)(6, _this._createCubeSide.bind(_this));
	        return _this;
	    }
	
	    /**
	     * Creates the 6 sides of the cube (the leafnodes of the scenegraph).
	     *
	     * TODO v0.1.0: Rename to CubeLayout.
	     * TODO v0.1.0: Don't create Planes for each side, let the user specify their own content for each side using this.setChildren.
	     *
	     * @private
	     * @param {Number} index The index (a integer between 0 and 5) that specifies which side to create.
	     */
	
	
	    _createClass(Cube, [{
	        key: '_createCubeSide',
	        value: function _createCubeSide(index) {
	            var T = _Transform2.default;
	            var sideMol = new _Molecule3.default();
	            var side = new _Plane2.default({
	                size: [this.cubeWidth, this.cubeWidth],
	                properties: {
	                    background: 'pink',
	                    backfaceVisibility: 'visible'
	                }
	            });
	            var sync = new _GenericSync2.default(['mouse', 'touch']);
	
	            this.cubeSides.push(side);
	
	            side.pipe(sync);
	            sync.pipe(this.options.handler);
	
	            // rotate and place each side.
	            if (index < 4) {
	                // sides
	                sideMol.modifier.transformFrom(T.multiply(T.rotate(0, Math.PI / 2 * index, 0), T.translate(0, 0, this.cubeWidth / 2)));
	            } else {
	                // top/bottom
	                sideMol.modifier.transformFrom(T.multiply(T.rotate(Math.PI / 2 * (index % 2 ? -1 : 1), 0, 0), T.translate(0, 0, this.cubeWidth / 2)));
	            }
	
	            this.cubeSideNodes.push(this.add(sideMol));
	            sideMol.add(side);
	        }
	
	        /**
	         * Set the content for the sides of the cube.
	         *
	         * @param {Array} children An array containing anything that a
	         * [famous/src/core/RenderNode](#famous/src/core/RenderNode) would accept in it's `add` method. Only the
	         * first 6 items are used, the rest are ignored.
	         */
	
	    }, {
	        key: 'setChildren',
	        value: function setChildren(children) {
	            (0, _forLength2.default)(6, function (index) {
	                //this.cubeSideNodes[index].set(null); // TODO: how do we erase previous children?
	                this.cubeSideNodes[index].add(children[index]);
	            }.bind(this));
	            return this;
	        }
	    }]);
	
	    return Cube;
	}(_Molecule3.default);
	
	exports.default = Cube;

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	    var EventHandler = __webpack_require__(312);
	    var OptionsManager = __webpack_require__(318);
	
	    /**
	     * Handles piped in mouse drag events. Outputs an object with the position delta from last frame, position from start,
	     * current velocity averaged out over the velocitySampleLength (set via options), clientX, clientY, offsetX, and offsetY.
	     *
	     * Emits 'start', 'update' and 'end' events. Designed to be used either as a standalone MouseSync, or as part of a
	     * GenericSync.
	     *
	     * @class MouseSync
	     * @constructor
	     *
	     * @example
	     *   var Surface = require('../core/Surface');
	     *   var MouseSync = require('../inputs/MouseSync');
	     *
	     *   var surface = new Surface({ size: [100, 100] });
	     *   var mouseSync = new MouseSync();
	     *   surface.pipe(mouseSync);
	     *
	     *   mouseSync.on('start', function (e) { // react to start });
	     *   mouseSync.on('update', function (e) { // react to update });
	     *   mouseSync.on('end', function (e) { // react to end });
	     *
	     * @param [options] {Object}                An object of the following configurable options.
	     * @param [options.clickThreshold] {Number} Absolute distance from click origin that will still trigger a click.
	     * @param [options.direction] {Number}      Read from a particular axis. Valid options are: undefined, 0 or 1. 0 corresponds to x, and 1 to y. Default is undefined, which allows both x and y.
	     * @param [options.rails] {Boolean}         Read from axis with the greatest differential.
	     * @param [options.velocitySampleLength] {Number}  Number of previous frames to check velocity against.
	     * @param [options.propogate] {Boolean}     Add a listener to document on mouseleave. This allows drag events to continue across the entire page.
	     */
	    function MouseSync(options) {
	        this.options =  Object.create(MouseSync.DEFAULT_OPTIONS);
	        this._optionsManager = new OptionsManager(this.options);
	
	        if (options) this.setOptions(options);
	
	        this._eventInput = new EventHandler();
	        this._eventOutput = new EventHandler();
	
	        EventHandler.setInputHandler(this, this._eventInput);
	        EventHandler.setOutputHandler(this, this._eventOutput);
	
	        this._eventInput.on('mousedown', _handleStart.bind(this));
	        this._eventInput.on('mousemove', _handleMove.bind(this));
	        this._eventInput.on('mouseup', _handleEnd.bind(this));
	
	        if (this.options.propogate) this._eventInput.on('mouseleave', _handleLeave.bind(this));
	        else this._eventInput.on('mouseleave', _handleEnd.bind(this));
	
	        if (this.options.clickThreshold) {
	            window.addEventListener('click', function(event) {
	                if (Math.sqrt(Math.pow(this._displacement[0], 2) + Math.pow(this._displacement[1], 2)) > this.options.clickThreshold) {
	                    event.stopPropagation();
	                }
	            }.bind(this), true);
	        }
	
	        this._payload = {
	            delta    : null,
	            position : null,
	            velocity : null,
	            clientX  : 0,
	            clientY  : 0,
	            offsetX  : 0,
	            offsetY  : 0
	        };
	
	        this._positionHistory = [];
	        this._position = null;      // to be deprecated
	        this._prevCoord = undefined;
	        this._prevTime = undefined;
	        this._down = false;
	        this._moved = false;
	        this._displacement = [0,0];
	        this._documentActive = false;
	    }
	
	    MouseSync.DEFAULT_OPTIONS = {
	        clickThreshold: undefined,
	        direction: undefined,
	        rails: false,
	        scale: 1,
	        propogate: true,  // events piped to document on mouseleave
	        velocitySampleLength: 10,
	        preventDefault: true
	    };
	
	    MouseSync.DIRECTION_X = 0;
	    MouseSync.DIRECTION_Y = 1;
	
	    var MINIMUM_TICK_TIME = 8;
	
	    /**
	     *  Triggered by mousedown.
	     *
	     *  @method _handleStart
	     *  @private
	     */
	    function _handleStart(event) {
	        var delta;
	        var velocity;
	        if (this.options.preventDefault) event.preventDefault(); // prevent drag
	
	        var x = event.clientX;
	        var y = event.clientY;
	
	        this._prevCoord = [x, y];
	        this._prevTime = Date.now();
	        this._down = true;
	        this._move = false;
	
	        if (this.options.direction !== undefined) {
	            this._position = 0;
	            delta = 0;
	            velocity = 0;
	        }
	        else {
	            this._position = [0, 0];
	            delta = [0, 0];
	            velocity = [0, 0];
	        }
	
	        if (this.options.clickThreshold) {
	            this._displacement = [0,0];
	        }
	
	        var payload = this._payload;
	        payload.delta = delta;
	        payload.position = this._position;
	        payload.velocity = velocity;
	        payload.clientX = x;
	        payload.clientY = y;
	        payload.offsetX = event.offsetX;
	        payload.offsetY = event.offsetY;
	
	        this._positionHistory.push({
	            position: payload.position.slice ? payload.position.slice(0) : payload.position,
	            time: this._prevTime
	        });
	
	        this._eventOutput.emit('start', payload);
	        this._documentActive = false;
	    }
	
	    /**
	     *  Triggered by mousemove.
	     *
	     *  @method _handleMove
	     *  @private
	     */
	    function _handleMove(event) {
	        if (!this._prevCoord) return;
	
	        var prevCoord = this._prevCoord;
	        var prevTime = this._prevTime;
	
	        var x = event.clientX;
	        var y = event.clientY;
	
	        var currTime = Date.now();
	
	        var diffX = x - prevCoord[0];
	        var diffY = y - prevCoord[1];
	
	        if (this.options.rails) {
	            if (Math.abs(diffX) > Math.abs(diffY)) diffY = 0;
	            else diffX = 0;
	        }
	
	        var diffTime = Math.max(currTime - this._positionHistory[0].time, MINIMUM_TICK_TIME); // minimum tick time
	
	        var scale = this.options.scale;
	        var nextVel;
	        var nextDelta;
	
	        if (this.options.direction === MouseSync.DIRECTION_X) {
	            nextDelta = scale * diffX;
	            this._position += nextDelta;
	            nextVel = scale * (this._position - this._positionHistory[0].position) / diffTime;
	        }
	        else if (this.options.direction === MouseSync.DIRECTION_Y) {
	            nextDelta = scale * diffY;
	            this._position += nextDelta;
	            nextVel = scale * (this._position - this._positionHistory[0].position) / diffTime;
	        }
	        else {
	            nextDelta = [scale * diffX, scale * diffY];
	            nextVel = [
	                scale * (this._position[0] - this._positionHistory[0].position[0]) / diffTime,
	                scale * (this._position[1] - this._positionHistory[0].position[1]) / diffTime
	            ];
	            this._position[0] += nextDelta[0];
	            this._position[1] += nextDelta[1];
	        }
	
	        if (this.options.clickThreshold !== false) {
	            this._displacement[0] += diffX;
	            this._displacement[1] += diffY;
	        }
	
	        var payload = this._payload;
	        payload.delta    = nextDelta;
	        payload.position = this._position;
	        payload.velocity = nextVel;
	        payload.clientX  = x;
	        payload.clientY  = y;
	        payload.offsetX  = event.offsetX;
	        payload.offsetY  = event.offsetY;
	
	        if (this._positionHistory.length === this.options.velocitySampleLength) {
	          this._positionHistory.shift();
	        }
	
	        this._positionHistory.push({
	          position: payload.position.slice ? payload.position.slice(0) : payload.position,
	          time: currTime
	        });
	
	        this._eventOutput.emit('update', payload);
	
	        this._prevCoord = [x, y];
	        this._prevTime = currTime;
	        this._move = true;
	    }
	
	    /**
	     *  Triggered by mouseup on the element or document body if propagation is enabled, or
	     *  mouseleave if propagation is off.
	     *
	     *  @method _handleEnd
	     *  @private
	     */
	    function _handleEnd(event) {
	        if (!this._down) return;
	
	        this._eventOutput.emit('end', this._payload);
	        this._prevCoord = undefined;
	        this._prevTime = undefined;
	        this._down = false;
	        this._move = false;
	        this._positionHistory = [];
	    }
	
	    /**
	     *  Switches the mousemove listener to the document body, if propagation is enabled.
	     *  @method _handleLeave
	     *  @private
	     */
	    function _handleLeave(event) {
	        if (!this._down || !this._move) return;
	
	        if (!this._documentActive) {
	          var boundMove = _handleMove.bind(this);
	          var boundEnd = function(event) {
	              _handleEnd.call(this, event);
	              document.removeEventListener('mousemove', boundMove);
	              document.removeEventListener('mouseup', boundEnd);
	          }.bind(this, event);
	          document.addEventListener('mousemove', boundMove);
	          document.addEventListener('mouseup', boundEnd);
	          this._documentActive = true;
	        }
	    }
	
	    /**
	     * Return entire options dictionary, including defaults.
	     *
	     * @method getOptions
	     * @return {Object} configuration options
	     */
	    MouseSync.prototype.getOptions = function getOptions() {
	        return this.options;
	    };
	
	    /**
	     * Set internal options, overriding any default options
	     *
	     * @method setOptions
	     *
	     * @param [options] {Object}             default options overrides
	     * @param [options.direction] {Number}   read from a particular axis
	     * @param [options.rails] {Boolean}      read from axis with greatest differential
	     * @param [options.propogate] {Boolean}  add listened to document on mouseleave
	     */
	    MouseSync.prototype.setOptions = function setOptions(options) {
	        return this._optionsManager.setOptions(options);
	    };
	
	    module.exports = MouseSync;


/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	    var TouchTracker = __webpack_require__(329);
	    var EventHandler = __webpack_require__(312);
	    var OptionsManager = __webpack_require__(318);
	
	    /**
	     * Handles piped in touch events. Emits 'start', 'update', and 'events'
	     *   events with delta, position, velocity, acceleration, clientX, clientY, count, and touch id.
	     *   Useful for dealing with inputs on touch devices. Designed to be used either as standalone, or
	     *   included in a GenericSync.
	     *
	     * @class TouchSync
	     * @constructor
	     *
	     * @example
	     *   var Surface = require('../core/Surface');
	     *   var TouchSync = require('../inputs/TouchSync');
	     *
	     *   var surface = new Surface({ size: [100, 100] });
	     *   var touchSync = new TouchSync();
	     *   surface.pipe(touchSync);
	     *
	     *   touchSync.on('start', function (e) { // react to start });
	     *   touchSync.on('update', function (e) { // react to update });
	     *   touchSync.on('end', function (e) { // react to end });*
	     *
	     * @param [options] {Object}             default options overrides
	     * @param [options.direction] {Number}   read from a particular axis
	     * @param [options.rails] {Boolean}      read from axis with greatest differential
	     * @param [options.velocitySampleLength] {Number}  Number of previous frames to check velocity against.
	     * @param [options.scale] {Number}       constant factor to scale velocity output
	     * @param [options.touchLimit] {Number}  touchLimit upper bound for emitting events based on number of touches
	     */
	    function TouchSync(options) {
	        this.options =  Object.create(TouchSync.DEFAULT_OPTIONS);
	        this._optionsManager = new OptionsManager(this.options);
	        if (options) this.setOptions(options);
	
	        this._eventOutput = new EventHandler();
	        this._touchTracker = new TouchTracker({
	            touchLimit: this.options.touchLimit
	        });
	
	        EventHandler.setOutputHandler(this, this._eventOutput);
	        EventHandler.setInputHandler(this, this._touchTracker);
	
	        this._touchTracker.on('trackstart', _handleStart.bind(this));
	        this._touchTracker.on('trackmove', _handleMove.bind(this));
	        this._touchTracker.on('trackend', _handleEnd.bind(this));
	
	        this._payload = {
	            delta    : null,
	            position : null,
	            velocity : null,
	            clientX  : undefined,
	            clientY  : undefined,
	            count    : 0,
	            touch    : undefined
	        };
	
	        this._position = null; // to be deprecated
	    }
	
	    TouchSync.DEFAULT_OPTIONS = {
	        direction: undefined,
	        rails: false,
	        touchLimit: 1,
	        velocitySampleLength: 10,
	        scale: 1
	    };
	
	    TouchSync.DIRECTION_X = 0;
	    TouchSync.DIRECTION_Y = 1;
	
	    var MINIMUM_TICK_TIME = 8;
	
	    /**
	     *  Triggered by trackstart.
	     *  @method _handleStart
	     *  @private
	     */
	    function _handleStart(data) {
	        var velocity;
	        var delta;
	        if (this.options.direction !== undefined){
	            this._position = 0;
	            velocity = 0;
	            delta = 0;
	        }
	        else {
	            this._position = [0, 0];
	            velocity = [0, 0];
	            delta = [0, 0];
	        }
	
	        var payload = this._payload;
	        payload.delta = delta;
	        payload.position = this._position;
	        payload.velocity = velocity;
	        payload.clientX = data.x;
	        payload.clientY = data.y;
	        payload.count = data.count;
	        payload.touch = data.identifier;
	
	        this._eventOutput.emit('start', payload);
	    }
	
	    /**
	     *  Triggered by trackmove.
	     *  @method _handleMove
	     *  @private
	     */
	    function _handleMove(data) {
	        var history = data.history;
	
	        var currHistory = history[history.length - 1];
	        var prevHistory = history[history.length - 2];
	
	        var distantHistory = history[history.length - this.options.velocitySampleLength] ?
	          history[history.length - this.options.velocitySampleLength] :
	          history[history.length - 2];
	
	        var distantTime = distantHistory.timestamp;
	        var currTime = currHistory.timestamp;
	
	        var diffX = currHistory.x - prevHistory.x;
	        var diffY = currHistory.y - prevHistory.y;
	
	        var velDiffX = currHistory.x - distantHistory.x;
	        var velDiffY = currHistory.y - distantHistory.y;
	
	        if (this.options.rails) {
	            if (Math.abs(diffX) > Math.abs(diffY)) diffY = 0;
	            else diffX = 0;
	
	            if (Math.abs(velDiffX) > Math.abs(velDiffY)) velDiffY = 0;
	            else velDiffX = 0;
	        }
	
	        var diffTime = Math.max(currTime - distantTime, MINIMUM_TICK_TIME);
	
	        var velX = velDiffX / diffTime;
	        var velY = velDiffY / diffTime;
	
	        var scale = this.options.scale;
	        var nextVel;
	        var nextDelta;
	
	        if (this.options.direction === TouchSync.DIRECTION_X) {
	            nextDelta = scale * diffX;
	            nextVel = scale * velX;
	            this._position += nextDelta;
	        }
	        else if (this.options.direction === TouchSync.DIRECTION_Y) {
	            nextDelta = scale * diffY;
	            nextVel = scale * velY;
	            this._position += nextDelta;
	        }
	        else {
	            nextDelta = [scale * diffX, scale * diffY];
	            nextVel = [scale * velX, scale * velY];
	            this._position[0] += nextDelta[0];
	            this._position[1] += nextDelta[1];
	        }
	
	        var payload = this._payload;
	        payload.delta    = nextDelta;
	        payload.velocity = nextVel;
	        payload.position = this._position;
	        payload.clientX  = data.x;
	        payload.clientY  = data.y;
	        payload.count    = data.count;
	        payload.touch    = data.identifier;
	
	        this._eventOutput.emit('update', payload);
	    }
	
	    /**
	     *  Triggered by trackend.
	     *  @method _handleEnd
	     *  @private
	     */
	    function _handleEnd(data) {
	        this._payload.count = data.count;
	        this._eventOutput.emit('end', this._payload);
	    }
	
	    /**
	     * Set internal options, overriding any default options
	     *
	     * @method setOptions
	     *
	     * @param [options] {Object}             default options overrides
	     * @param [options.direction] {Number}   read from a particular axis
	     * @param [options.rails] {Boolean}      read from axis with greatest differential
	     * @param [options.scale] {Number}       constant factor to scale velocity output
	     */
	    TouchSync.prototype.setOptions = function setOptions(options) {
	        return this._optionsManager.setOptions(options);
	    };
	
	    /**
	     * Return entire options dictionary, including defaults.
	     *
	     * @method getOptions
	     * @return {Object} configuration options
	     */
	    TouchSync.prototype.getOptions = function getOptions() {
	        return this.options;
	    };
	
	    module.exports = TouchSync;


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	    var EventHandler = __webpack_require__(312);
	
	    var _now = Date.now;
	
	    function _timestampTouch(touch, event, history) {
	        return {
	            x: touch.clientX,
	            y: touch.clientY,
	            identifier : touch.identifier,
	            origin: event.origin,
	            timestamp: _now(),
	            count: event.touches.length,
	            history: history
	        };
	    }
	
	    function _handleStart(event) {
	        if (event.touches.length > this.touchLimit) return;
	        this.isTouched = true;
	
	        for (var i = 0; i < event.changedTouches.length; i++) {
	            var touch = event.changedTouches[i];
	            var data = _timestampTouch(touch, event, null);
	            this.eventOutput.emit('trackstart', data);
	            if (!this.selective && !this.touchHistory[touch.identifier]) this.track(data);
	        }
	    }
	
	    function _handleMove(event) {
	        if (event.touches.length > this.touchLimit) return;
	
	        for (var i = 0; i < event.changedTouches.length; i++) {
	            var touch = event.changedTouches[i];
	            var history = this.touchHistory[touch.identifier];
	            if (history) {
	                var data = _timestampTouch(touch, event, history);
	                this.touchHistory[touch.identifier].push(data);
	                this.eventOutput.emit('trackmove', data);
	            }
	        }
	    }
	
	    function _handleEnd(event) {
	        if (!this.isTouched) return;
	
	        for (var i = 0; i < event.changedTouches.length; i++) {
	            var touch = event.changedTouches[i];
	            var history = this.touchHistory[touch.identifier];
	            if (history) {
	                var data = _timestampTouch(touch, event, history);
	                this.eventOutput.emit('trackend', data);
	                delete this.touchHistory[touch.identifier];
	            }
	        }
	
	        this.isTouched = false;
	    }
	
	    function _handleUnpipe() {
	        for (var i in this.touchHistory) {
	            var history = this.touchHistory[i];
	            this.eventOutput.emit('trackend', {
	                touch: history[history.length - 1].touch,
	                timestamp: Date.now(),
	                count: 0,
	                history: history
	            });
	            delete this.touchHistory[i];
	        }
	    }
	
	    /**
	     * Helper to TouchSync – tracks piped in touch events, organizes touch
	     *   events by ID, and emits track events back to TouchSync.
	     *   Emits 'trackstart', 'trackmove', and 'trackend' events upstream.
	     *
	     * @class TouchTracker
	     * @constructor
	     * @param {Object} options default options overrides
	     * @param [options.selective] {Boolean} selective if false, saves state for each touch
	     * @param [options.touchLimit] {Number} touchLimit upper bound for emitting events based on number of touches
	     */
	    function TouchTracker(options) {
	        this.selective = options.selective;
	        this.touchLimit = options.touchLimit || 1;
	
	        this.touchHistory = {};
	
	        this.eventInput = new EventHandler();
	        this.eventOutput = new EventHandler();
	
	        EventHandler.setInputHandler(this, this.eventInput);
	        EventHandler.setOutputHandler(this, this.eventOutput);
	
	        this.eventInput.on('touchstart', _handleStart.bind(this));
	        this.eventInput.on('touchmove', _handleMove.bind(this));
	        this.eventInput.on('touchend', _handleEnd.bind(this));
	        this.eventInput.on('touchcancel', _handleEnd.bind(this));
	        this.eventInput.on('unpipe', _handleUnpipe.bind(this));
	
	        this.isTouched = false;
	    }
	
	    /**
	     * Record touch data, if selective is false.
	     * @private
	     * @method track
	     * @param {Object} data touch data
	     */
	    TouchTracker.prototype.track = function track(data) {
	        this.touchHistory[data.identifier] = [data];
	    };
	
	    module.exports = TouchTracker;


/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2015
	 */
	
	    var EventHandler = __webpack_require__(312);
	
	    /**
	     * Combines multiple types of sync classes (e.g. mouse, touch,
	     *  scrolling) into one standardized interface for inclusion in widgets.
	     *
	     *  Sync classes are first registered with a key, and then can be accessed
	     *  globally by key.
	     *
	     *  Emits 'start', 'update' and 'end' events as a union of the sync class
	     *  providers.
	     *
	     * @class GenericSync
	     * @constructor
	     * @param syncs {Object|Array} object with fields {sync key : sync options}
	     *    or an array of registered sync keys
	     * @param [options] {Object|Array} options object to set on all syncs
	     */
	    function GenericSync(syncs, options) {
	        this._eventInput = new EventHandler();
	        this._eventOutput = new EventHandler();
	
	        EventHandler.setInputHandler(this, this._eventInput);
	        EventHandler.setOutputHandler(this, this._eventOutput);
	
	        this._syncs = {};
	        if (syncs) this.addSync(syncs);
	        if (options) this.setOptions(options);
	    }
	
	    GenericSync.DIRECTION_X = 0;
	    GenericSync.DIRECTION_Y = 1;
	    GenericSync.DIRECTION_Z = 2;
	
	    // Global registry of sync classes. Append only.
	    var registry = {};
	
	    /**
	     * Register a global sync class with an identifying key
	     *
	     * @static
	     * @method register
	     *
	     * @param syncObject {Object} an object of {sync key : sync options} fields
	     */
	    GenericSync.register = function register(syncObject) {
	        for (var key in syncObject){
	            if (registry[key]){ // skip redundant registration
	                if (registry[key] !== syncObject[key]) // only if same registered class
	                    throw new Error('Conflicting sync classes for key: ' + key);
	            }
	            else registry[key] = syncObject[key];
	        }
	    };
	
	    /**
	     * Helper to set options on all sync instances
	     *
	     * @method setOptions
	     * @param options {Object} options object
	     */
	    GenericSync.prototype.setOptions = function(options) {
	        for (var key in this._syncs){
	            this._syncs[key].setOptions(options);
	        }
	    };
	
	    /**
	     * Pipe events to a sync class
	     *
	     * @method pipeSync
	     * @param key {String} identifier for sync class
	     */
	    GenericSync.prototype.pipeSync = function pipeToSync(key) {
	        var sync = this._syncs[key];
	        this._eventInput.pipe(sync);
	        sync.pipe(this._eventOutput);
	    };
	
	    /**
	     * Unpipe events from a sync class
	     *
	     * @method unpipeSync
	     * @param key {String} identifier for sync class
	     */
	    GenericSync.prototype.unpipeSync = function unpipeFromSync(key) {
	        var sync = this._syncs[key];
	        this._eventInput.unpipe(sync);
	        sync.unpipe(this._eventOutput);
	    };
	
	    function _addSingleSync(key, options) {
	        if (!registry[key]) return;
	        this._syncs[key] = new (registry[key])(options);
	        this.pipeSync(key);
	    }
	
	    /**
	     * Add a sync class to from the registered classes
	     *
	     * @method addSync
	     * @param syncs {Object|Array.String} an array of registered sync keys
	     *    or an object with fields {sync key : sync options}
	     */
	    GenericSync.prototype.addSync = function addSync(syncs) {
	        if (syncs instanceof Array)
	            for (var i = 0; i < syncs.length; i++)
	                _addSingleSync.call(this, syncs[i]);
	        else if (syncs instanceof Object)
	            for (var key in syncs)
	                _addSingleSync.call(this, key, syncs[key]);
	    };
	
	    module.exports = GenericSync;


/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PushMenuLayout = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _jss = __webpack_require__(332);
	
	var _jss2 = _interopRequireDefault(_jss);
	
	var _Surface = __webpack_require__(324);
	
	var _Surface2 = _interopRequireDefault(_Surface);
	
	var _Transitionable = __webpack_require__(301);
	
	var _Transitionable2 = _interopRequireDefault(_Transitionable);
	
	var _Easing = __webpack_require__(305);
	
	var _Easing2 = _interopRequireDefault(_Easing);
	
	var _TouchSync = __webpack_require__(328);
	
	var _TouchSync2 = _interopRequireDefault(_TouchSync);
	
	var _GenericSync = __webpack_require__(330);
	
	var _GenericSync2 = _interopRequireDefault(_GenericSync);
	
	var _Plane = __webpack_require__(323);
	
	var _Plane2 = _interopRequireDefault(_Plane);
	
	var _Molecule2 = __webpack_require__(306);
	
	var _Molecule3 = _interopRequireDefault(_Molecule2);
	
	var _utils = __webpack_require__(314);
	
	var _callAfter = __webpack_require__(360);
	
	var _callAfter2 = _interopRequireDefault(_callAfter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This Source Code Form is subject to the terms of the Mozilla Public
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License, v. 2.0. If a copy of the MPL was not distributed with this
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	/**
	 * A scenegraph with two Molecule leafnodes: the menu area and the content
	 * area. The menu area is hidden beyond the edge of the screen while the
	 * content area is visible. Swiping in from the edge of the screen reveals the
	 * menu, putting the content area out of focus. A mouse can also be used, and
	 * hovering near the edge of the screen also reveals the menu.
	 *
	 * Note: This layout is mostly useful if it exists at the root of a context so
	 * that the menu is clipped when it is closed (off to the side), otherwise the
	 * menu will be visible beyond the boundary of the container that contains the
	 * PushMenuLayout.
	 *
	 * Note: If you've called `openMenu` or `closeMenu` with a callback, the callback
	 * will be canceled if a drag or hover on the menu happens before the animation
	 * has completed. Please open an issue on GitHub if you have any opinion
	 * against this. :) Maybe we can add a boolean option for this behavior.
	 *
	 * TODO: Embed working example here.
	 *
	 * @class PushMenuLayout
	 * @extends Molecule
	 */
	var PushMenuLayout = exports.PushMenuLayout = function (_Molecule) {
	    _inherits(PushMenuLayout, _Molecule);
	
	    /**
	     * Creates a new PushMenuLayout.
	     *
	     * @constructor
	     * @param {Object} options The options to instantiate a `PushMenuLayout` with.
	     *
	     * TODO v0.1.0: Handle `PushMenuLayout`-specific user options. Currently they
	     * just get passed into super() for the Molecule constructor to handle.
	     */
	    function PushMenuLayout(initialOptions) {
	        _classCallCheck(this, PushMenuLayout);
	
	        // Add default values for this PushMenuLayout
	        // TODO: Make default options static for the class.
	        var _this = _possibleConstructorReturn(this, (PushMenuLayout.__proto__ || Object.getPrototypeOf(PushMenuLayout)).call(this, initialOptions));
	
	        (0, _utils.simpleExtend)(_this._.defaultOptions, {
	            menuSide: 'left', // left or right
	            menuWidth: 200,
	            menuHintSize: 10, // the amount of the menu that is visible before opening the menu.
	            pushAreaWidth: 40, // the area on the screen edge that the user can touch and drag to push out the menu.
	            animationDuration: 1000,
	            animationType: 'foldDown', // options: foldDown moveBack
	
	            // TODO: Background color for the whole layout should be the color that the fade fades to.
	            // TODO: Replace fade star/end colors with a fog color value and intensity.
	            fade: true, // when content recedes, it fades into the fog.
	            fadeStartColor: 'rgba(255,255,255,0)',
	            fadeEndColor: 'rgba(255,255,255,1)',
	
	            blur: false, // XXX: WIP, so false by default.
	            blurRadius: 5
	        });
	
	        // TODO: performance hit, this setter is invoked in the Molecule constructor, then here again.
	        _this.options = initialOptions;
	
	        // TODO v0.1.0: Mark these as private.
	        // TODO v0.1.0: this.contentWidth should be the width of whatever is containing
	        // the layout, but we're just using it as a whole-page app for now. Get
	        // size from a commit? UPDATE: See the new famous/src/views/SizeAwareView
	        _this.contentWidth = document.body.clientWidth - _this.options.menuHintSize;
	
	        // Changing these values outside of an instance of PushMenuLayout might
	        // cause the layout to break. They are designed to be modified
	        // internally only.
	        _this.isOpen = false;
	        _this.isOpening = false;
	        _this.isClosing = false;
	        _this.isAnimating = false; // keep track of whether the menu is opening or closing.
	        _this.isBeingDragged = false; // whether the user is dragging/pushing the menu or not.
	        _this.transitionCallback = undefined; // holds the callback to the current open or close menu animation.
	
	        // Set the touch sync for pulling/pushing the menu open/closed.
	        _GenericSync2.default.register({
	            touch: _TouchSync2.default
	        });
	
	        _this._createComponents();
	        _this._initializeEvents();
	        return _this;
	    }
	
	    /**
	     * See Molecule.setOptions
	     *
	     * @override
	     */
	
	
	    _createClass(PushMenuLayout, [{
	        key: 'setOptions',
	        value: function setOptions(newOptions) {
	            _get(PushMenuLayout.prototype.__proto__ || Object.getPrototypeOf(PushMenuLayout.prototype), 'setOptions', this).call(this, newOptions);
	        }
	
	        /**
	         * See Molecule.resetOptions
	         *
	         * @override
	         */
	
	    }, {
	        key: 'resetOptions',
	        value: function resetOptions() {
	            _get(PushMenuLayout.prototype.__proto__ || Object.getPrototypeOf(PushMenuLayout.prototype), 'resetOptions', this).call(this);
	        }
	
	        /**
	         * Creates the menu area, content area, `Plane` for the fade effect, etc.
	         *
	         * @private
	         */
	
	    }, {
	        key: '_createComponents',
	        value: function _createComponents() {
	            var layout = this;
	
	            this.touchSync = new _GenericSync2.default(['touch']);
	
	            this.alignment = this.options.menuSide == "left" ? 0 : 1;
	            this.animationTransition = new _Transitionable2.default(0);
	
	            this.mainMol = new _Molecule3.default();
	
	            this.menuMol = new _Molecule3.default({
	                size: [this.options.menuWidth, undefined]
	            });
	            this.menuMol.oldTransform = this.menuMol.transform;
	            this.menuMol.transform = function () {
	                // override
	                var currentPosition = layout.animationTransition.get();
	                switch (layout.options.animationType) {
	                    case "foldDown":
	                        // XXX: this is depending on my modifications for TransitionableTransform.
	                        this.oldTransform.setTranslateX(layout.options.menuSide == 'left' ? currentPosition * (layout.options.menuWidth - layout.options.menuHintSize) /*range*/ - (layout.options.menuWidth - layout.options.menuHintSize) /*offset*/ : currentPosition * -(layout.options.menuWidth - layout.options.menuHintSize) /*range*/ + (layout.options.menuWidth - layout.options.menuHintSize) /*offset*/
	                        );
	                        break;
	                    case "moveBack":
	                        // XXX: this is depending on my modifications for TransitionableTransform.
	                        this.oldTransform.setTranslateX(layout.options.menuSide == 'left' ? currentPosition * (layout.options.menuWidth - layout.options.menuHintSize) /*range*/ - (layout.options.menuWidth - layout.options.menuHintSize) /*offset*/ : currentPosition * -(layout.options.menuWidth - layout.options.menuHintSize) /*range*/ + (layout.options.menuWidth - layout.options.menuHintSize) /*offset*/
	                        );
	                        break;
	                }
	                return this.oldTransform.get();
	            }.bind(this.menuMol);
	
	            // contains the user's menu content.
	            this.menuContentMol = new _Molecule3.default();
	
	            this.contentMol = new _Molecule3.default({
	                size: [this.contentWidth, undefined]
	            });
	            this.contentMol.oldTransform = this.contentMol.transform;
	            this.contentMol.transform = function () {
	                // override
	                var currentPosition = layout.animationTransition.get();
	                switch (layout.options.animationType) {
	                    case "foldDown":
	                        // XXX: this is depending on my modifications for TransitionableTransform.
	                        this.oldTransform.setTranslateX(layout.options.menuSide == 'left' ? currentPosition * (layout.options.menuWidth - layout.options.menuHintSize) /*range*/ + layout.options.menuHintSize /*offset*/ : currentPosition * -(layout.options.menuWidth - layout.options.menuHintSize) /*range*/ - layout.options.menuHintSize /*offset*/
	                        );
	                        // XXX: this is depending on my modifications for TransitionableTransform.
	                        this.oldTransform.setRotateY(layout.options.menuSide == 'left' ? currentPosition * Math.PI / 8 : currentPosition * -Math.PI / 8);
	                        break;
	                    case "moveBack":
	                        var depth = 100;
	                        // XXX: this is depending on my modifications for TransitionableTransform.
	                        this.oldTransform.setTranslateX(layout.options.menuSide == 'left' ? layout.options.menuHintSize : -layout.options.menuHintSize);
	                        this.oldTransform.setTranslateZ(currentPosition * -depth);
	                        break;
	                }
	                return this.oldTransform.get();
	            }.bind(this.contentMol);
	
	            this.menuTouchPlane = new _Plane2.default({
	                size: [this.options.menuWidth + this.options.pushAreaWidth - this.options.menuHintSize, undefined],
	                properties: {
	                    zIndex: '-1000' // below everything
	                }
	            });
	
	            this.mainMol.setOptions({
	                origin: [this.alignment, 0.5],
	                align: [this.alignment, 0.5]
	            });
	            this.menuMol.setOptions({
	                origin: [this.alignment, 0.5],
	                align: [this.alignment, 0.5]
	            });
	            this.contentMol.setOptions({
	                origin: [this.alignment, 0.5],
	                align: [this.alignment, 0.5]
	            });
	
	            // FIXME: WHY THE EFF must I also set align and origin on menuTouchPlane
	            // when I've already set it on it's parent (this.menuMol)?????
	            this.menuTouchPlane.setOptions({
	                origin: [this.alignment, 0.5],
	                align: [this.alignment, 0.5]
	            });
	
	            // Bring the menu content molecule and touch plane forward just
	            // slightly so they're just above the content and content's fade plane,
	            // so touch and mouse interaction works. HTML, the bad parts. ;)
	            this.menuContentMol.transform.setTranslateZ(2);
	            this.menuTouchPlane.transform.setTranslateZ(2);
	
	            /*
	             * Styles for the fadePlane
	             */
	            // TODO: move this somewhere else . it's specific for each animation
	            this.updateStyles = function () {
	                var startColor;
	                var endColor;
	
	                switch (this.options.animationType) {
	                    case "foldDown":
	                        startColor = this.options.fadeStartColor;
	                        endColor = this.options.fadeEndColor;
	                        break;
	                    case "moveBack":
	                        startColor = endColor = this.options.fadeEndColor;
	                        break;
	                }
	
	                var styles = {
	                    '.infamous-fadeLeft': {
	                        background: [endColor, '-moz-linear-gradient(left, ' + endColor + ' 0%, ' + startColor + ' 100%)', '-webkit-gradient(left top, right top, color-stop(0%, ' + endColor + '), color-stop(100%, ' + startColor + '))', '-webkit-linear-gradient(left, ' + endColor + ' 0%, ' + startColor + ' 100%)', '-o-linear-gradient(left, ' + endColor + ' 0%, ' + startColor + ' 100%)', '-ms-linear-gradient(left, ' + endColor + ' 0%, ' + startColor + ' 100%)', 'linear-gradient(to right, ' + endColor + ' 0%, ' + startColor + ' 100%)'],
	                        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#cc000000\', endColorstr=\'#4d000000\', GradientType=1 )'
	                    },
	                    '.infamous-fadeRight': {
	                        background: [startColor, '-moz-linear-gradient(left, ' + startColor + ' 0%, ' + endColor + ' 100%)', '-webkit-gradient(left top, right top, color-stop(0%, ' + startColor + '), color-stop(100%, ' + endColor + '))', '-webkit-linear-gradient(left, ' + startColor + ' 0%, ' + endColor + ' 100%)', '-o-linear-gradient(left, ' + startColor + ' 0%, ' + endColor + ' 100%)', '-ms-linear-gradient(left, ' + startColor + ' 0%, ' + endColor + ' 100%)', 'linear-gradient(to right, ' + startColor + ' 0%, ' + endColor + ' 100%)'],
	                        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#4d000000\', endColorstr=\'#cc000000\', GradientType=1 )'
	                    }
	                };
	
	                if (this.fadeStylesheet) {
	                    this.fadeStylesheet.detach();
	                }
	                this.fadeStylesheet = _jss2.default.createStyleSheet(styles);
	                this.fadeStylesheet.attach();
	            };
	
	            if (this.options.fade) {
	                this.updateStyles();
	
	                this.fadePlane = new _Plane2.default({
	                    size: [undefined, undefined],
	                    classes: [
	                    // TODO: switch to jss namespace.
	                    this.options.menuSide == 'left' ? 'infamous-fadeRight' : 'infamous-fadeLeft'],
	                    properties: {
	                        zIndex: '1000',
	                        pointerEvents: 'none'
	                    }
	                });
	
	                // FIXME: Why the EFF must I also set align and origin on fadePlane when
	                // I've already set it on it's parent (this.contentMol)?????
	                this.fadePlane.setOptions({
	                    origin: [this.alignment, 0.5],
	                    align: [this.alignment, 0.5]
	                });
	
	                // move the fadePlane forward by 1px so it doesn't glitch out.
	                // Chrome will make the fadePlane and the surface in the content
	                // area (if any) blink randomly when the two surfaces are in the
	                // same exact position together.
	                this.fadePlane.transform.setTranslateZ(1);
	
	                this.fadePlane.setOptions({
	                    opacity: this.animationTransition
	                });
	
	                // TODO: Make fadePlane a sibling to menuMol and contentMol so that
	                // contentMol contains only the user;s content. This will affect
	                // the code in this.render().
	                this.contentMol.add(this.fadePlane);
	            }
	
	            this.add(this.mainMol);
	            this.mainMol.add(this.contentMol);
	            this.menuMol.add(this.menuTouchPlane);
	            this.menuMol.add(this.menuContentMol);
	            this.mainMol.add(this.menuMol);
	            // TODO: Also create and add a background plane for the menu area so it will catch events that might fall through the menu content.
	        }
	
	        /**
	         * Sets up the events for the touch and mouse interaction that opens and
	         * closes the menu.
	         *
	         * @private
	         */
	
	    }, {
	        key: '_initializeEvents',
	        value: function _initializeEvents() {
	
	            // move the menu, following the user's drag. Don't let the user drag the menu past the menu width.
	            this.options.handler.on('update', function (event) {
	                // update == drag
	                this.isBeingDragged = true;
	
	                // stop the current transitions if any, along with the current callback if any.
	                this._haltAnimation(true);
	
	                var currentPosition = this.animationTransition.get();
	
	                // TODO: handle the right-side menu.
	                switch (this.options.animationType) {
	                    case "foldDown":
	                        this.animationTransition.set(currentPosition + event.delta[0] / (this.options.menuWidth - this.options.menuHintSize));
	                        break;
	                    case "moveBack":
	                        this.animationTransition.set(currentPosition + event.delta[0] / (this.options.menuWidth - this.options.menuHintSize));
	                        break;
	                }
	
	                currentPosition = this.animationTransition.get();
	
	                if (currentPosition > 1) {
	                    this.animationTransition.set(1);
	                } else if (currentPosition < 0) {
	                    this.animationTransition.set(0);
	                }
	            }.bind(this));
	
	            this.options.handler.on('end', function (event) {
	                this.isBeingDragged = false;
	
	                var currentPosition = this.animationTransition.get();
	
	                if (currentPosition < 0.5) {
	                    this.closeMenu();
	                } else {
	                    this.openMenu();
	                }
	            }.bind(this));
	
	            // TODO v0.1.0: Use a SizeAwareView instead of relying on the body, since we
	            // might not be directly in the body.
	            window.addEventListener('resize', function (event) {
	                this.contentWidth = document.body.clientWidth - this.options.menuHintSize;
	                this.contentMol.setOptions({ size: [this.contentWidth, undefined] });
	            }.bind(this));
	
	            /*
	             * Wire up events
	             * TODO: consolidate dup code here and in setMenu
	             */
	            this.menuTouchPlane.pipe(this.touchSync);
	            this.menuTouchPlane.on('mouseenter', function () {
	                if (!this.isOpening) {
	                    this.openMenu();
	                }
	            }.bind(this));
	            this.menuTouchPlane.on('mouseleave', function () {
	                if (!this.isClosing) {
	                    this.closeMenu();
	                }
	            }.bind(this));
	            this.touchSync.pipe(this.options.handler);
	        }
	
	        /**
	         * Add a scenegraph to the content area of the PushMenuLayout. You can put
	         * anything you want into the content area (magical 3D things for example),
	         * just be careful not to let them cover the menu or you'll block the user
	         * from interacting with the menu.
	         *
	         * @param {module: famous/src/core/RenderNode} node A scenegraph, i.e. a
	         * RenderNode with stuff in it.
	         *
	         * TODO: Accept plain renderables, f.e. Surfaces, etc. This change requires
	         * also modifying the code in this.render() to account for renderables.
	         *
	         * TODO: Make a sibling method to reset the content area.
	         */
	
	    }, {
	        key: 'setContent',
	        value: function setContent(node) {
	            this.contentMol.add(node);
	        }
	
	        /**
	         * Add a scenegraph to the menu area of the PushMenuLayout. If the object
	         * that you pass into setMenu is an infamous component, or a famo.us
	         * Surface, then it's events will be piped to this PushMenuLayout's input
	         * sync so that the user can open and close the menu with touch or mouse.
	         * General advice here would be to keep whatever you put into the menu
	         * contained within the boundaries of the menu or you might have touch and
	         * mouse interaction outside of the menu.
	         *
	         * @param {module: famous/src/core/RenderNode} node A scenegraph, i.e. a
	         * RenderNode with stuff in it.
	         *
	         * TODO: Accept plain renderables, f.e. Surfaces, etc.
	         *
	         * TODO: Remove old content before adding new content.
	         */
	
	    }, {
	        key: 'setMenu',
	        value: function setMenu(node) {
	            this.menuContentMol.add(node);
	            if (node instanceof _Molecule3.default) {
	                node.pipe(this.touchSync);
	                node.on('mouseenter', function () {
	                    if (!this.isOpening) {
	                        this.openMenu();
	                    }
	                }.bind(this));
	                node.on('mouseleave', function () {
	                    if (!this.isClosing) {
	                        this.closeMenu();
	                    }
	                }.bind(this));
	            }
	        }
	
	        // TODO: replace menu easing with physics so the user can throw the menu,
	        // using initial velocity and drag to slow it down, and stop immediately
	        // when it hits the fully-open or fully-closed positions.
	
	        /**
	         * Opens the menu.
	         *
	         * @param {Function} callback The function to be called when the animation finishes.
	         * @param {boolean} [cancelPreviousCallback=false] This is optional. If
	         * true, then the callback of a previous open or close animation will be
	         * canceled if that animation was still inprogress when this method is
	         * called, otherwise the callback of the previous open or close animation
	         * will be fired immediately before the animation for this animation begins.
	         */
	
	    }, {
	        key: 'openMenu',
	        value: function openMenu(callback, cancelPreviousCallback) {
	            this._haltAnimation(cancelPreviousCallback);
	
	            this.isClosing = false;
	            this.isOpening = true;
	
	            this._animate('open', callback);
	        }
	
	        /**
	         * Closes the menu.
	         *
	         * @param {Function} callback The function to be called when the animation finishes.
	         * @param {boolean} [cancelPreviousCallback=false] This is optional. If
	         * true, then the callback of a previous open or close animation will be
	         * canceled if that animation was still inprogress when this method is
	         * called, otherwise the callback of the previous open or close animation
	         * will be fired immediately before the animation for this animation begins.
	         */
	
	    }, {
	        key: 'closeMenu',
	        value: function closeMenu(callback, cancelPreviousCallback) {
	            this._haltAnimation(cancelPreviousCallback);
	
	            this.isClosing = true;
	            this.isOpening = false;
	
	            this._animate('close', callback);
	        }
	
	        /**
	         * Toggles the menu open or closed. If the menu is open or is opening, then it will now start
	         * closing, and vice versa.
	         *
	         * @param {Function} callback The function to be called when the animation finishes.
	         * @param {boolean} [cancelPreviousCallback=false] This is optional. If
	         * true, then the callback of a previous open or close animation will be
	         * canceled if that animation was still inprogress when this method is
	         * called, otherwise the callback of the previous open or close animation
	         * will be fired immediately before the animation for this animation begins.
	         */
	
	    }, {
	        key: 'toggleMenu',
	        value: function toggleMenu(callback, cancelPreviousCallback) {
	            if (this.isOpen || this.isOpening) {
	                this.closeMenu(callback, cancelPreviousCallback);
	            } else if (!this.isOpen || this.isClosing) {
	                this.openMenu(callback, cancelPreviousCallback);
	            }
	        }
	
	        /**
	         * Animates the menu to it's target state.
	         *
	         * @private
	         * @param {String} targetState The name of the state to animate to.
	         * @param {Function} callback The function to call after the animation completes.
	         */
	
	    }, {
	        key: '_animate',
	        value: function _animate(targetState, callback) {
	            this.isAnimating = true;
	            this.transitionCallback = callback;
	            var _callback;
	
	            var self = this;
	            function setupCallback(numberOfTransitions) {
	                // Fire callback after numberOfTransitions calls, when the 4 transitions are complete.
	                _callback = (0, _callAfter2.default)(numberOfTransitions, function () {
	                    self.isAnimating = self.isOpening = self.isClosing = false;
	                    self.isOpen = targetState == 'open' ? true : false;
	                    if (typeof self.transitionCallback == 'function') {
	                        self.transitionCallback();
	                    }
	                    self.transitionCallback = undefined;
	                }.bind(self));
	            }
	
	            setupCallback(1);
	            if (targetState == 'open') {
	                this.animationTransition.set(1, { duration: this.options.animationDuration, curve: _Easing2.default.outExpo }, _callback);
	            } else if (targetState == 'close') {
	                this.animationTransition.set(0, { duration: this.options.animationDuration, curve: _Easing2.default.outExpo }, _callback);
	            }
	        }
	
	        /**
	         * Halts the current animation, if any.
	         *
	         * @private
	         * @param {boolean} [cancelCallback=false] Defaults to false. If true, the
	         * halted animation's callback won't fire, otherwise it will be fired.
	         */
	
	    }, {
	        key: '_haltAnimation',
	        value: function _haltAnimation(cancelCallback) {
	            if (this.isAnimating) {
	                if (!cancelCallback && typeof this.transitionCallback == 'function') {
	                    this.transitionCallback();
	                }
	                this.transitionCallback = undefined;
	                this.animationTransition.halt();
	            }
	        }
	
	        /**
	         * @override
	         */
	
	    }, {
	        key: 'render',
	        value: function render() {
	
	            // Blur the content if this.options.blur is true, and the animation is moveBack.
	            //
	            // TODO: Make the item to to be blur specifiable, perhaps with a method on
	            // this.
	            if (this.options.blur && this.options.fade && this.options.animationType == 'moveBack') {
	                var momentaryBlur = this.animationTransition.get() * this.options.blurRadius;
	                var filter = {
	                    "-webkit-filter": 'blur(' + momentaryBlur + 'px)',
	                    "-moz-filter": 'blur(' + momentaryBlur + 'px)',
	                    "-ms-filter": 'blur(' + momentaryBlur + 'px)',
	                    "-o-filter": 'blur(' + momentaryBlur + 'px)',
	                    filter: 'blur(' + momentaryBlur + 'px)'
	                };
	
	                // TODO TODO TODO v0.1.0: Make fadePlane a sibling with menu and
	                // content molecules or the following breaks if fade is false.
	                // Then remove the check for this.options.fade in the previous if
	                // statement above.
	                if (this.contentMol._child[1].get() instanceof _Surface2.default) {
	                    this.contentMol.get().setProperties(filter);
	                } else if (this.contentMol._child[1] instanceof _Plane2.default) {
	                    this.contentMol._child[1].surface.setProperties(filter);
	                }
	            }
	
	            return _get(PushMenuLayout.prototype.__proto__ || Object.getPrototypeOf(PushMenuLayout.prototype), 'render', this).call(this);
	        }
	    }]);
	
	    return PushMenuLayout;
	}(_Molecule3.default);
	
	exports.default = PushMenuLayout;

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jss = __webpack_require__(333);
	
	var _jss2 = _interopRequireDefault(_jss);
	
	var _jssNested = __webpack_require__(348);
	
	var _jssNested2 = _interopRequireDefault(_jssNested);
	
	var _jssExtend = __webpack_require__(349);
	
	var _jssExtend2 = _interopRequireDefault(_jssExtend);
	
	var _jssPx = __webpack_require__(350);
	
	var _jssPx2 = _interopRequireDefault(_jssPx);
	
	var _jssVendorPrefixer = __webpack_require__(351);
	
	var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);
	
	var _jssCamelCase = __webpack_require__(358);
	
	var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);
	
	var _jssPropsSort = __webpack_require__(359);
	
	var _jssPropsSort2 = _interopRequireDefault(_jssPropsSort);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var jss = _jss2.default.create();
	
	jss.use((0, _jssNested2.default)());
	jss.use((0, _jssExtend2.default)());
	jss.use((0, _jssPx2.default)());
	jss.use((0, _jssVendorPrefixer2.default)());
	jss.use((0, _jssCamelCase2.default)());
	jss.use((0, _jssPropsSort2.default)());
	
	exports.default = jss;

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Rule = exports.StyleSheet = exports.Jss = undefined;
	
	var _Jss = __webpack_require__(334);
	
	var _Jss2 = _interopRequireDefault(_Jss);
	
	var _StyleSheet = __webpack_require__(335);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	var _Rule = __webpack_require__(338);
	
	var _Rule2 = _interopRequireDefault(_Rule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var jss = new _Jss2.default();
	
	// Hotfix for babel 5 migration, will be removed in version 4.0.0
	/**
	 * StyleSheets written in javascript.
	 *
	 * @copyright Oleg Slobodskoi 2014-2016
	 * @website https://github.com/jsstyles/jss
	 * @license MIT
	 */
	module.exports = exports = jss;
	
	// For testing only.
	exports.Jss = _Jss2.default;
	exports.StyleSheet = _StyleSheet2.default;
	exports.Rule = _Rule2.default;
	exports.default = jss;

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _StyleSheet = __webpack_require__(335);
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	var _PluginsRegistry = __webpack_require__(346);
	
	var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);
	
	var _SheetsRegistry = __webpack_require__(347);
	
	var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);
	
	var _utils = __webpack_require__(336);
	
	var _createRule2 = __webpack_require__(337);
	
	var _createRule3 = _interopRequireDefault(_createRule2);
	
	var _findRenderer = __webpack_require__(343);
	
	var _findRenderer2 = _interopRequireDefault(_findRenderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Main Jss class.
	 *
	 * @api public
	 */
	
	var Jss = function () {
	  function Jss() {
	    _classCallCheck(this, Jss);
	
	    this.sheets = new _SheetsRegistry2.default();
	    this.plugins = new _PluginsRegistry2.default();
	    this.uid = _utils.uid;
	    this.version = '3.11.1';
	  }
	
	  /**
	   * Creates a new instance of Jss.
	   *
	   * @see Jss
	   * @api public
	   */
	
	
	  _createClass(Jss, [{
	    key: 'create',
	    value: function create() {
	      return new Jss();
	    }
	
	    /**
	     * Create a stylesheet.
	     *
	     * @see StyleSheet
	     * @api public
	     */
	
	  }, {
	    key: 'createStyleSheet',
	    value: function createStyleSheet(rules, options) {
	      var sheet = new _StyleSheet2.default(rules, _extends({}, options, { jss: this }));
	      this.sheets.add(sheet);
	      return sheet;
	    }
	
	    /**
	     * Create a rule.
	     *
	     * @see createRule
	     * @api public
	     */
	
	  }, {
	    key: 'createRule',
	    value: function createRule(selector, style, options) {
	      // Enable rule without selector.
	      if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') {
	        options = style;
	        style = selector;
	        selector = null;
	      }
	      var rule = (0, _createRule3.default)(selector, style, _extends({}, options, {
	        jss: this,
	        Renderer: (0, _findRenderer2.default)(options)
	      }));
	      this.plugins.run(rule);
	      return rule;
	    }
	
	    /**
	     * Register plugin. Passed function will be invoked with a rule instance.
	     *
	     * @param {Function} plugins
	     * @api public
	     */
	
	  }, {
	    key: 'use',
	    value: function use() {
	      var _this = this;
	
	      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
	        plugins[_key] = arguments[_key];
	      }
	
	      plugins.forEach(function (plugin) {
	        return _this.plugins.use(plugin);
	      });
	      return this;
	    }
	  }]);
	
	  return Jss;
	}();
	
	exports.default = Jss;

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(336);
	
	var _createRule2 = __webpack_require__(337);
	
	var _createRule3 = _interopRequireDefault(_createRule2);
	
	var _findRenderer = __webpack_require__(343);
	
	var _findRenderer2 = _interopRequireDefault(_findRenderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * StyleSheet model.
	 *
	 * Options:
	 *
	 * - `media` media query - attribute of style element.
	 * - `meta` meta information about this style - attribute of style element, for e.g. you could pass
	 * component name for easier debugging.
	 * - `named` true by default - keys are names, selectors will be generated, if false - keys are
	 * global selectors.
	 * - `link` link jss `Rule` instances with DOM `CSSRule` instances so that styles, can be modified
	 * dynamically, false by default because it has some performance cost.
	 * - `element` style element, will create one by default
	 *
	 * @param {Object} [rules] object with selectors and declarations
	 * @param {Object} [options]
	 * @api public
	 */
	
	var StyleSheet = function () {
	  function StyleSheet(rules, options) {
	    _classCallCheck(this, StyleSheet);
	
	    this.options = _extends({}, options);
	    if (this.options.named == null) this.options.named = true;
	    this.rules = Object.create(null);
	    this.classes = Object.create(null);
	    this.attached = false;
	    this.deployed = false;
	    this.linked = false;
	
	    var Renderer = (0, _findRenderer2.default)(this.options);
	    this.options.Renderer = Renderer;
	    this.renderer = new Renderer(this.options);
	
	    for (var name in rules) {
	      this.createRule(name, rules[name]);
	    }
	  }
	
	  /**
	   * Attach renderable to the render tree.
	   *
	   * @api public
	   * @return {StyleSheet}
	   */
	
	
	  _createClass(StyleSheet, [{
	    key: 'attach',
	    value: function attach() {
	      if (this.attached) return this;
	      if (!this.deployed) this.deploy();
	      this.renderer.attach();
	      if (!this.linked && this.options.link) this.link();
	      this.attached = true;
	      return this;
	    }
	
	    /**
	     * Remove renderable from render tree.
	     *
	     * @return {StyleSheet}
	     * @api public
	     */
	
	  }, {
	    key: 'detach',
	    value: function detach() {
	      if (!this.attached) return this;
	      this.renderer.detach();
	      this.attached = false;
	      return this;
	    }
	
	    /**
	     * Add a rule to the current stylesheet. Will insert a rule also after the stylesheet
	     * has been rendered first time.
	     *
	     * @param {Object} [name] can be selector or name if ´options.named is true
	     * @param {Object} style property/value hash
	     * @return {Rule}
	     * @api public
	     */
	
	  }, {
	    key: 'addRule',
	    value: function addRule(name, style) {
	      var rule = this.createRule(name, style);
	      // Don't insert rule directly if there is no stringified version yet.
	      // It will be inserted all together when .attach is called.
	      if (this.deployed) {
	        var renderable = this.renderer.insertRule(rule);
	        if (this.options.link) rule.renderable = renderable;
	      }
	      return rule;
	    }
	
	    /**
	     * Create rules, will render also after stylesheet was rendered the first time.
	     *
	     * @param {Object} rules name:style hash.
	     * @return {Array} array of added rules
	     * @api public
	     */
	
	  }, {
	    key: 'addRules',
	    value: function addRules(rules) {
	      var added = [];
	      for (var name in rules) {
	        added.push(this.addRule(name, rules[name]));
	      }
	      return added;
	    }
	
	    /**
	     * Get a rule.
	     *
	     * @param {String} name can be selector or name if `named` option is true.
	     * @return {Rule}
	     * @api public
	     */
	
	  }, {
	    key: 'getRule',
	    value: function getRule(name) {
	      return this.rules[name];
	    }
	
	    /**
	     * Convert rules to a CSS string.
	     *
	     * @param {Object} options
	     * @return {String}
	     * @api public
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      var rules = this.rules;
	
	      var stringified = Object.create(null);
	      var str = '';
	      for (var name in rules) {
	        var rule = rules[name];
	        // We have the same rule referenced twice if using named rules.
	        // By name and by selector.
	        if (stringified[rule.id]) {
	          continue;
	        }
	
	        if (rule.style && (0, _utils.isEmptyObject)(rule.style)) {
	          continue;
	        }
	
	        if (rule.rules && (0, _utils.isEmptyObject)(rule.rules)) {
	          continue;
	        }
	
	        if (str) str += '\n';
	
	        str += rule.toString(options);
	        stringified[rule.id] = true;
	      }
	      return str;
	    }
	
	    /**
	     * Create a rule, will not render after stylesheet was rendered the first time.
	     * Will link the rule in `this.rules`.
	     *
	     * @see createRule
	     * @api private
	     */
	
	  }, {
	    key: 'createRule',
	    value: function createRule(name, style, options) {
	      options = _extends({}, options, {
	        sheet: this,
	        jss: this.options.jss,
	        Renderer: this.options.Renderer
	      });
	      // Scope options overwrite instance options.
	      if (options.named == null) options.named = this.options.named;
	      var rule = (0, _createRule3.default)(name, style, options);
	      this.registerRule(rule);
	      options.jss.plugins.run(rule);
	      return rule;
	    }
	
	    /**
	     * Register a rule in `sheet.rules` and `sheet.classes` maps.
	     *
	     * @param {Rule} rule
	     * @api public
	     */
	
	  }, {
	    key: 'registerRule',
	    value: function registerRule(rule) {
	      // Children of container rules should not be registered.
	      if (rule.options.parent) {
	        // We need to register child rules of conditionals in classes, otherwise
	        // user can't access generated class name if it doesn't overrides
	        // a regular rule.
	        if (rule.name && rule.className) {
	          this.classes[rule.name] = rule.className;
	        }
	        return this;
	      }
	
	      if (rule.name) {
	        this.rules[rule.name] = rule;
	        if (rule.className) this.classes[rule.name] = rule.className;
	      }
	      if (rule.selector) {
	        this.rules[rule.selector] = rule;
	      }
	      return this;
	    }
	
	    /**
	     * Unregister a rule.
	     *
	     * @param {Rule} rule
	     * @api public
	     */
	
	  }, {
	    key: 'unregisterRule',
	    value: function unregisterRule(rule) {
	      // Children of a conditional rule are not registered.
	      if (!rule.options.parent) {
	        delete this.rules[rule.name];
	        delete this.rules[rule.selector];
	      }
	      delete this.classes[rule.name];
	      return this;
	    }
	
	    /**
	     * Deploy pure CSS string to a renderable.
	     *
	     * @return {StyleSheet}
	     * @api private
	     */
	
	  }, {
	    key: 'deploy',
	    value: function deploy() {
	      this.renderer.deploy(this);
	      this.deployed = true;
	      return this;
	    }
	
	    /**
	     * Link renderable CSS rules with their corresponding models.
	     *
	     * @return {StyleSheet}
	     * @api private
	     */
	
	  }, {
	    key: 'link',
	    value: function link() {
	      var renderables = this.renderer.getRules();
	      for (var selector in renderables) {
	        var rule = this.rules[selector];
	        if (rule) rule.renderable = renderables[selector];
	      }
	      this.linked = true;
	      return this;
	    }
	  }]);
	
	  return StyleSheet;
	}();
	
	exports.default = StyleSheet;

/***/ },
/* 336 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clone = clone;
	exports.isEmptyObject = isEmptyObject;
	exports.toCSS = toCSS;
	var stringify = JSON.stringify;
	var parse = JSON.parse;
	
	/**
	 * Deeply clone object using serialization.
	 * Expects object to be plain and without cyclic dependencies.
	 *
	 * http://jsperf.com/lodash-deepclone-vs-jquery-extend-deep/6
	 *
	 * @type {Object} obj
	 * @return {Object}
	 */
	function clone(obj) {
	  return parse(stringify(obj));
	}
	
	/**
	 * Determine whether an object is empty or not.
	 * More performant than a `Object.keys(obj).length > 0`
	 *
	 * @type {Object} obj
	 * @return {Boolean}
	 */
	function isEmptyObject(obj) {
	  for (var key in obj) {
	    return false;
	  } // eslint-disable-line no-unused-vars
	
	  return true;
	}
	
	/**
	 * Simple very fast UID generation based on a global counter.
	 */
	var uid = exports.uid = function () {
	  var globalReference = typeof window == 'undefined' ? global : window;
	  var namespace = '__JSS_VERSION_COUNTER__';
	  if (globalReference[namespace] == null) globalReference[namespace] = 0;
	
	  // In case we have more than one jss version.
	  var versionCounter = globalReference[namespace]++;
	  var ruleCounter = 0;
	
	  /**
	   * Returns a uid.
	   * Ensures uniqueness if more than 1 jss version is used.
	   *
	   * @api public
	   * @return {String}
	   */
	  function get() {
	    return 'jss-' + versionCounter + '-' + ruleCounter++;
	  }
	
	  /**
	   * Resets the counter.
	   *
	   * @api public
	   */
	  function reset() {
	    ruleCounter = 0;
	  }
	
	  return { get: get, reset: reset };
	}();
	
	/**
	 * Indent a string.
	 *
	 * http://jsperf.com/array-join-vs-for
	 *
	 * @param {Number} level
	 * @param {String} str
	 * @return {String}
	 */
	function indent(level, str) {
	  var indentStr = '';
	  for (var index = 0; index < level; index++) {
	    indentStr += '  ';
	  }return indentStr + str;
	}
	
	/**
	 * Converts a Rule to CSS string.
	 *
	 * Options:
	 * - `selector` use `false` to get a rule without selector
	 * - `indentationLevel` level of indentation
	 *
	 * @param {String} selector
	 * @param {Object} style
	 * @param {Object} options
	 * @return {String}
	 */
	function toCSS(selector, style) {
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  var indentationLevel = options.indentationLevel || 0;
	  var str = '';
	
	  if (options.selector !== false) {
	    str += indent(indentationLevel, selector + ' {');
	    indentationLevel++;
	  }
	
	  for (var prop in style) {
	    var value = style[prop];
	    // We want to generate multiple style with identical property names.
	    if (Array.isArray(value)) {
	      for (var index = 0; index < value.length; index++) {
	        str += '\n' + indent(indentationLevel, prop + ': ' + value[index] + ';');
	      }
	    } else str += '\n' + indent(indentationLevel, prop + ': ' + value + ';');
	  }
	
	  if (options.selector !== false) str += '\n' + indent(--indentationLevel, '}');
	
	  return str;
	}
	
	/**
	 * Get class names from a selector.
	 *
	 * @param {String} selector
	 * @return {String}
	 */
	var findClassNames = exports.findClassNames = function () {
	  var dotsRegExp = /[.]/g;
	  var classesRegExp = /[.][^ ,]+/g;
	
	  return function (selector) {
	    var classes = selector.match(classesRegExp);
	
	    if (!classes) return '';
	
	    return classes.join(' ').replace(dotsRegExp, '');
	  };
	}();
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createRule;
	
	var _Rule = __webpack_require__(338);
	
	var _Rule2 = _interopRequireDefault(_Rule);
	
	var _SimpleRule = __webpack_require__(339);
	
	var _SimpleRule2 = _interopRequireDefault(_SimpleRule);
	
	var _KeyframeRule = __webpack_require__(340);
	
	var _KeyframeRule2 = _interopRequireDefault(_KeyframeRule);
	
	var _ConditionalRule = __webpack_require__(341);
	
	var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);
	
	var _FontFaceRule = __webpack_require__(342);
	
	var _FontFaceRule2 = _interopRequireDefault(_FontFaceRule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Map of at rules to corresponding implementation class.
	 *
	 * @type {Object}
	 */
	var atRuleClassMap = {
	  '@charset': _SimpleRule2.default,
	  '@import': _SimpleRule2.default,
	  '@namespace': _SimpleRule2.default,
	  '@keyframes': _KeyframeRule2.default,
	  '@media': _ConditionalRule2.default,
	  '@supports': _ConditionalRule2.default,
	  '@font-face': _FontFaceRule2.default
	};
	
	var atRuleNameRegExp = /^@[^ ]+/;
	
	/**
	 * Create rule factory.
	 *
	 * @param {Object} [selector] if you don't pass selector - it will be generated
	 * @param {Object} [style] declarations block
	 * @param {Object} [options] rule options
	 * @return {Object} rule
	 * @api private
	 */
	function createRule(selector) {
	  var style = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	  // Is an at-rule.
	  if (selector && selector[0] === '@') {
	    var name = atRuleNameRegExp.exec(selector)[0];
	    var AtRule = atRuleClassMap[name];
	    return new AtRule(selector, style, options);
	  }
	
	  if (options.named == null) options.named = true;
	  return new _Rule2.default(selector, style, options);
	}

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(336);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Regular rules.
	 *
	 * @api public
	 */
	
	var Rule = function () {
	  function Rule(selector, style, options) {
	    _classCallCheck(this, Rule);
	
	    this.id = _utils.uid.get();
	    this.type = 'regular';
	    this.options = options;
	    this.selectorText = selector || '';
	    this.className = options.className || '';
	    this.originalStyle = style;
	    // We expect style to be plain object.
	    this.style = (0, _utils.clone)(style);
	    if (options.named) {
	      this.name = selector;
	      if (!this.className) {
	        this.className = this.name ? this.name + '--' + this.id : this.id;
	      }
	      this.selectorText = '.' + this.className;
	    }
	  }
	
	  /**
	   * Set selector string.
	   * Attenition: use this with caution. Most browser didn't implement selector
	   * text setter, so this will result in rerendering of entire style sheet.
	   *
	   * @param {String} selector
	   * @api public
	   */
	
	
	  _createClass(Rule, [{
	    key: 'prop',
	
	
	    /**
	     * Get or set a style property.
	     *
	     * @param {String} name
	     * @param {String|Number} [value]
	     * @return {Rule|String|Number}
	     * @api public
	     */
	    value: function prop(name, value) {
	      var style = this.options.Renderer.style;
	      // Its a setter.
	
	      if (value != null) {
	        this.style[name] = value;
	        // Only defined if option linked is true.
	        if (this.renderable) style(this.renderable, name, value);
	        return this;
	      }
	      // Its a getter, read the value from the DOM if its not cached.
	      if (this.renderable && this.style[name] == null) {
	        // Cache the value after we have got it from the DOM once.
	        this.style[name] = style(this.renderable, name);
	      }
	      return this.style[name];
	    }
	
	    /**
	     * Apply rule to an element inline.
	     *
	     * @param {Element} renderable
	     * @return {Rule}
	     * @api public
	     */
	
	  }, {
	    key: 'applyTo',
	    value: function applyTo(renderable) {
	      for (var prop in this.style) {
	        var value = this.style[prop];
	        var style = this.options.Renderer.style;
	
	        if (Array.isArray(value)) {
	          for (var index = 0; index < value.length; index++) {
	            style(renderable, prop, value[index]);
	          }
	        } else style(renderable, prop, value);
	      }
	      return this;
	    }
	
	    /**
	     * Returns JSON representation of the rule.
	     * Array of values is not supported.
	     *
	     * @return {Object}
	     * @api public
	     */
	
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var style = Object.create(null);
	      for (var prop in this.style) {
	        if (_typeof(this.style[prop]) != 'object') {
	          style[prop] = this.style[prop];
	        }
	      }
	      return style;
	    }
	
	    /**
	     * Generates a CSS string.
	     *
	     * @see toCSS
	     * @api public
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return (0, _utils.toCSS)(this.selector, this.style, options);
	    }
	  }, {
	    key: 'selector',
	    set: function set() {
	      var selector = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	      var _options = this.options;
	      var Renderer = _options.Renderer;
	      var sheet = _options.sheet;
	
	      // After we modify selector, ref by old selector needs to be removed.
	
	      if (sheet) sheet.unregisterRule(this);
	
	      this.selectorText = selector;
	      this.className = (0, _utils.findClassNames)(selector);
	
	      if (!this.renderable) {
	        // Register the rule with new selector.
	        if (sheet) sheet.registerRule(this);
	        return;
	      }
	
	      var changed = Renderer.setSelector(this.renderable, selector);
	
	      if (changed) {
	        sheet.registerRule(this);
	        return;
	      }
	
	      // If selector setter is not implemented, rerender the sheet.
	      // We need to delete renderable from the rule, because when sheet.deploy()
	      // calls rule.toString, it will get the old selector.
	      delete this.renderable;
	      sheet.registerRule(this).deploy().link();
	    }
	
	    /**
	     * Get selector string.
	     *
	     * @return {String}
	     * @api public
	     */
	    ,
	    get: function get() {
	      if (this.renderable) {
	        return this.options.Renderer.getSelector(this.renderable);
	      }
	
	      return this.selectorText;
	    }
	  }]);
	
	  return Rule;
	}();
	
	exports.default = Rule;

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(336);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Rule like @charset, @import, @namespace.
	 *
	 * @api public
	 */
	
	var SimpleRule = function () {
	  function SimpleRule(name, value, options) {
	    _classCallCheck(this, SimpleRule);
	
	    this.id = _utils.uid.get();
	    this.type = 'simple';
	    this.name = name;
	    this.value = value;
	    this.options = options;
	  }
	
	  /**
	   * Generates a CSS string.
	   *
	   * @return {String}
	   * @api public
	   */
	
	
	  _createClass(SimpleRule, [{
	    key: 'toString',
	    value: function toString() {
	      if (Array.isArray(this.value)) {
	        var str = '';
	        for (var index = 0; index < this.value.length; index++) {
	          str += this.name + ' ' + this.value[index] + ';';
	          if (this.value[index + 1]) str += '\n';
	        }
	        return str;
	      }
	
	      return this.name + ' ' + this.value + ';';
	    }
	  }]);
	
	  return SimpleRule;
	}();
	
	exports.default = SimpleRule;

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(336);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Keyframe rule.
	 *
	 * @api private
	 */
	
	var KeyframeRule = function () {
	  function KeyframeRule(selector, frames, options) {
	    _classCallCheck(this, KeyframeRule);
	
	    this.id = _utils.uid.get();
	    this.type = 'keyframe';
	    this.selector = selector;
	    this.options = options;
	    this.frames = this.formatFrames(frames);
	  }
	
	  /**
	   * Creates formatted frames where every frame value is a rule instance.
	   *
	   * @api private
	   */
	
	
	  _createClass(KeyframeRule, [{
	    key: 'formatFrames',
	    value: function formatFrames(frames) {
	      var newFrames = Object.create(null);
	      for (var name in frames) {
	        var options = _extends({}, this.options, { named: false, parent: this });
	        newFrames[name] = this.options.jss.createRule(name, frames[name], options);
	      }
	      return newFrames;
	    }
	
	    /**
	     * Generates a CSS string.
	     *
	     * @return {String}
	     * @api private
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var str = this.selector + ' {\n';
	      var options = { indentationLevel: 1 };
	      for (var name in this.frames) {
	        str += this.frames[name].toString(options) + '\n';
	      }
	      str += '}';
	      return str;
	    }
	  }]);
	
	  return KeyframeRule;
	}();
	
	exports.default = KeyframeRule;

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(336);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Conditional rule for @media, @supports
	 *
	 * @api public
	 */
	
	var ConditionalRule = function () {
	  function ConditionalRule(selector, styles, options) {
	    _classCallCheck(this, ConditionalRule);
	
	    this.id = _utils.uid.get();
	    this.type = 'conditional';
	    this.selector = selector;
	    this.options = options;
	    this.rules = Object.create(null);
	    for (var name in styles) {
	      this.createRule(name, styles[name]);
	    }
	  }
	
	  /**
	   * A conditional rule always contains child rules.
	   *
	   * @param {Object} styles
	   * @return {Array} rules
	   * @api public
	   */
	
	
	  _createClass(ConditionalRule, [{
	    key: 'createRule',
	    value: function createRule(name, style, options) {
	      var newOptions = _extends({}, this.options, { parent: this });
	      var _newOptions = newOptions;
	      var sheet = _newOptions.sheet;
	      var jss = _newOptions.jss;
	      // We have already a rule in the current style sheet with this name,
	      // This new rule is supposed to overwrite the first one, for this we need
	      // to ensure it will have the same className/selector.
	
	      var existingRule = sheet && sheet.getRule(name);
	      var className = existingRule ? existingRule.className : null;
	      if (className || options) {
	        newOptions = _extends({}, newOptions, { className: className }, options);
	      }
	      var rule = (sheet || jss).createRule(name, style, newOptions);
	      this.rules[name] = rule;
	      return rule;
	    }
	
	    /**
	     * Generates a CSS string.
	     *
	     * @return {String}
	     * @api public
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var str = this.selector + ' {\n';
	      for (var name in this.rules) {
	        var rule = this.rules[name];
	        if (rule.style && (0, _utils.isEmptyObject)(rule.style)) {
	          continue;
	        }
	        var ruleStr = rule.toString({ indentationLevel: 1 });
	        str += ruleStr + '\n';
	      }
	      str += '}';
	      return str;
	    }
	  }]);
	
	  return ConditionalRule;
	}();
	
	exports.default = ConditionalRule;

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(336);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Font-face rules.
	 *
	 * @api public
	 */
	
	var Rule = function () {
	  function Rule(selector, style, options) {
	    _classCallCheck(this, Rule);
	
	    this.id = _utils.uid.get();
	    this.type = 'font-face';
	    this.options = options;
	    this.selector = selector;
	    this.style = style;
	  }
	
	  /**
	   * Generates a CSS string.
	   *
	   * @see toCSS
	   * @api public
	   */
	
	
	  _createClass(Rule, [{
	    key: 'toString',
	    value: function toString(options) {
	      if (Array.isArray(this.style)) {
	        var str = '';
	        for (var index = 0; index < this.style.length; index++) {
	          str += (0, _utils.toCSS)(this.selector, this.style[index], options);
	          if (this.style[index + 1]) str += '\n';
	        }
	        return str;
	      }
	
	      return (0, _utils.toCSS)(this.selector, this.style, options);
	    }
	  }]);
	
	  return Rule;
	}();
	
	exports.default = Rule;

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = findRenderer;
	
	var _DomRenderer = __webpack_require__(344);
	
	var _DomRenderer2 = _interopRequireDefault(_DomRenderer);
	
	var _VirtualRenderer = __webpack_require__(345);
	
	var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Find proper renderer.
	 * Option `virtual` is used to force use of VirtualRenderer even if DOM is
	 * detected, used for testing only.
	 *
	 * @param {Object} options
	 * @return {Renderer}
	 * @api private
	 */
	function findRenderer() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  if (options.Renderer) return options.Renderer;
	  return options.virtual || typeof document == 'undefined' ? _VirtualRenderer2.default : _DomRenderer2.default;
	}

/***/ },
/* 344 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * DOM rendering backend for StyleSheet.
	 *
	 * @api private
	 */
	
	var DomRenderer = function () {
	  _createClass(DomRenderer, null, [{
	    key: 'style',
	    value: function style(element, name, value) {
	      try {
	        if (value == null) return element.style[name];
	        element.style[name] = value;
	      } catch (err) {
	        // IE8 may throw if property is unknown.
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'setSelector',
	    value: function setSelector(cssRule, selector) {
	      cssRule.selectorText = selector;
	
	      // Return false if setter was not successful.
	      // Currently works in chrome only.
	      return cssRule.selectorText === selector;
	    }
	  }, {
	    key: 'getSelector',
	    value: function getSelector(cssRule) {
	      return cssRule.selectorText;
	    }
	  }]);
	
	  function DomRenderer(options) {
	    _classCallCheck(this, DomRenderer);
	
	    this.head = document.head || document.getElementsByTagName('head')[0];
	    this.element = options.element || document.createElement('style');
	    // IE8 will not have `styleSheet` prop without `type and `styleSheet.cssText`
	    // is the only way to render on IE8.
	    this.element.type = 'text/css';
	    if (options.media) this.element.setAttribute('media', options.media);
	    if (options.meta) this.element.setAttribute('data-meta', options.meta);
	  }
	
	  /**
	   * Insert style element into render tree.
	   *
	   * @api private
	   */
	
	
	  _createClass(DomRenderer, [{
	    key: 'attach',
	    value: function attach() {
	      if (this.element.parendNode) return;
	      this.head.appendChild(this.element);
	    }
	
	    /**
	     * Remove style element from render tree.
	     *
	     * @api private
	     */
	
	  }, {
	    key: 'detach',
	    value: function detach() {
	      this.element.parentNode.removeChild(this.element);
	    }
	
	    /**
	     * Inject CSS string into element.
	     *
	     * @param {String} cssStr
	     * @api private
	     */
	
	  }, {
	    key: 'deploy',
	    value: function deploy(sheet) {
	      var css = '\n' + sheet.toString() + '\n';
	      if ('sheet' in this.element) this.element.innerHTML = css;
	      // On IE8 the only way to render is `styleSheet.cssText`.
	      else if ('styleSheet' in this.element) this.element.styleSheet.cssText = css;
	    }
	
	    /**
	     * Insert a rule into element.
	     *
	     * @param {Rule} rule
	     * @return {CSSStyleRule}
	     * @api private
	     */
	
	  }, {
	    key: 'insertRule',
	    value: function insertRule(rule) {
	      // IE8 has only `styleSheet` and `styleSheet.rules`
	      var sheet = this.element.sheet || this.element.styleSheet;
	      var cssRules = sheet.cssRules || sheet.rules;
	      var nextIndex = cssRules.length;
	      if (sheet.insertRule) sheet.insertRule(rule.toString(), nextIndex);else sheet.addRule(rule.selector, rule.toString({ selector: false }), nextIndex);
	      return cssRules[nextIndex];
	    }
	
	    /**
	     * Get all rules elements.
	     *
	     * @return {Object} rules map, where key is selector, CSSStyleRule is value.
	     * @api private
	     */
	
	  }, {
	    key: 'getRules',
	    value: function getRules() {
	      // IE8 has only `styleSheet` and `styleSheet.rules`
	      var sheet = this.element.sheet || this.element.styleSheet;
	      var cssRules = sheet.rules || sheet.cssRules;
	      var rules = Object.create(null);
	      for (var index = 0; index < cssRules.length; index++) {
	        var cssRule = cssRules[index];
	        rules[cssRule.selectorText] = cssRule;
	      }
	      return rules;
	    }
	  }]);
	
	  return DomRenderer;
	}();
	
	exports.default = DomRenderer;

/***/ },
/* 345 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Rendering backend to do nothing in nodejs.
	 */
	
	var VirtualRenderer = function () {
	  function VirtualRenderer() {
	    _classCallCheck(this, VirtualRenderer);
	  }
	
	  _createClass(VirtualRenderer, [{
	    key: "attach",
	    value: function attach() {}
	  }, {
	    key: "detach",
	    value: function detach() {}
	  }, {
	    key: "deploy",
	    value: function deploy() {}
	  }, {
	    key: "insertRule",
	    value: function insertRule() {}
	  }, {
	    key: "getRules",
	    value: function getRules() {
	      return {};
	    }
	  }], [{
	    key: "style",
	    value: function style() {}
	  }, {
	    key: "setSelector",
	    value: function setSelector() {}
	  }, {
	    key: "getSelector",
	    value: function getSelector() {}
	  }]);
	
	  return VirtualRenderer;
	}();
	
	exports.default = VirtualRenderer;

/***/ },
/* 346 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Register a plugin, run a plugin.
	 *
	 * @api public
	 */
	
	var PluginsRegistry = function () {
	  function PluginsRegistry() {
	    _classCallCheck(this, PluginsRegistry);
	
	    this.registry = [];
	  }
	
	  /**
	   * Register plugin. Passed function will be invoked with a rule instance.
	   *
	   * @param {Function} fn
	   * @api public
	   */
	
	
	  _createClass(PluginsRegistry, [{
	    key: "use",
	    value: function use(fn) {
	      this.registry.push(fn);
	    }
	
	    /**
	     * Execute all registered plugins.
	     *
	     * @param {Rule} rule
	     * @api private
	     */
	
	  }, {
	    key: "run",
	    value: function run(rule) {
	      for (var index = 0; index < this.registry.length; index++) {
	        this.registry[index](rule);
	      }
	    }
	  }]);
	
	  return PluginsRegistry;
	}();
	
	exports.default = PluginsRegistry;

/***/ },
/* 347 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Sheets registry to access them all at one place.
	 *
	 * @api public
	 */
	
	var SheetsRegistry = function () {
	  function SheetsRegistry() {
	    _classCallCheck(this, SheetsRegistry);
	
	    this.registry = [];
	  }
	
	  /**
	   * Register a style sheet.
	   *
	   * @param {StyleSheet} sheet
	   * @api public
	   */
	
	
	  _createClass(SheetsRegistry, [{
	    key: 'add',
	    value: function add(sheet) {
	      this.registry.push(sheet);
	    }
	
	    /**
	     * Returns CSS string with all Style Sheets.
	     *
	     * @param {StyleSheet} sheet
	     * @api public
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString(options) {
	      return this.registry.map(function (sheet) {
	        return sheet.toString(options);
	      }).join('\n');
	    }
	  }]);
	
	  return SheetsRegistry;
	}();
	
	exports.default = SheetsRegistry;

/***/ },
/* 348 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = jssNested;
	var regExp = /&/g;
	
	/**
	 * Convert nested rules to separate, remove them from original styles.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssNested() {
	  return function (rule) {
	    if (rule.type !== 'regular') return;
	    var _rule$options = rule.options;
	    var sheet = _rule$options.sheet;
	    var jss = _rule$options.jss;
	    var parent = _rule$options.parent;
	
	    var container = sheet || jss;
	    var options = void 0;
	
	    if (parent && parent.type === 'conditional') {
	      container = parent;
	    }
	
	    for (var prop in rule.style) {
	      if (prop[0] === '&') {
	        if (!options) options = _extends({}, rule.options, { named: false });
	        var name = prop.replace(regExp, rule.selector);
	        container.createRule(name, rule.style[prop], options);
	        delete rule.style[prop];
	      }
	    }
	  };
	}

/***/ },
/* 349 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = jssExtend;
	/**
	 * Handle `extend` property.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssExtend() {
	  function extend(rule, newStyle, style) {
	    if (typeof style.extend == 'string') {
	      if (rule.options && rule.options.sheet) {
	        var refRule = rule.options.sheet.getRule(style.extend);
	        if (refRule) extend(rule, newStyle, refRule.originalStyle);
	      }
	    } else if (Array.isArray(style.extend)) {
	      for (var index = 0; index < style.extend.length; index++) {
	        extend(rule, newStyle, style.extend[index]);
	      }
	    } else {
	      for (var prop in style.extend) {
	        if (prop === 'extend') extend(rule, newStyle, style.extend.extend);else newStyle[prop] = style.extend[prop];
	      }
	    }
	
	    // Copy base style.
	    for (var _prop in style) {
	      if (_prop !== 'extend') newStyle[_prop] = style[_prop];
	    }
	
	    return newStyle;
	  }
	
	  return function (rule) {
	    if (!rule.style || !rule.style.extend) return;
	    rule.style = extend(rule, {}, rule.style);
	  };
	}

/***/ },
/* 350 */
/***/ function(module, exports) {

	// Don't automatically add 'px' to these possibly-unitless properties.
	// Borrowed from jquery.
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = jssPx;
	var cssNumber = {
	  'animation-iteration-count': true,
	  'box-ordinal-group': true,
	  'column-count': true,
	  'fill-opacity': true,
	  'flex': true,
	  'flex-grow': true,
	  'flex-order': true,
	  'flex-shrink': true,
	  'font-weight': true,
	  'line-height': true,
	  'opacity': true,
	  'order': true,
	  'orphans': true,
	  'stop-opacity': true,
	  'tab-size': 1,
	  'widows': true,
	  'z-index': true,
	  'zoom': true
	};
	
	/**
	 * Add px to numeric values.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	
	function jssPx() {
	  return function (rule) {
	    var style = rule.style;
	
	    if (!style) return;
	    for (var prop in style) {
	      if (!cssNumber[prop] && typeof style[prop] == 'number') {
	        style[prop] += 'px';
	      }
	    }
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = jssVendorPrefixer;
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	var _cssVendor = __webpack_require__(352);
	
	var vendor = _interopRequireWildcard(_cssVendor);
	
	/**
	 * Add vendor prefix to a property name when needed.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	
	function jssVendorPrefixer() {
	  return function (rule) {
	    if (rule.type === 'keyframe') {
	      rule.selector = '@' + vendor.prefix.css + 'keyframes' + rule.selector.substr(10);
	      return;
	    }
	
	    if (rule.type !== 'regular') return;
	
	    for (var prop in rule.style) {
	      var value = rule.style[prop];
	
	      var changeProp = false;
	      var supportedProp = vendor.supportedProperty(prop);
	      if (supportedProp && supportedProp !== prop) changeProp = true;
	
	      var changeValue = false;
	      var supportedValue = vendor.supportedValue(supportedProp, value);
	      if (supportedValue && supportedValue !== value) changeValue = true;
	
	      if (changeProp || changeValue) {
	        if (changeProp) delete rule.style[prop];
	        rule.style[supportedProp || prop] = supportedValue || value;
	      }
	    }
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;
	
	var _prefix = __webpack_require__(353);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	var _supportedProperty = __webpack_require__(355);
	
	var _supportedProperty2 = _interopRequireDefault(_supportedProperty);
	
	var _supportedValue = __webpack_require__(357);
	
	var _supportedValue2 = _interopRequireDefault(_supportedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = {
	  prefix: _prefix2['default'],
	  supportedProperty: _supportedProperty2['default'],
	  supportedValue: _supportedValue2['default']
	}; /**
	    * CSS Vendor prefix detection and property feature testing.
	    *
	    * @copyright Oleg Slobodskoi 2015
	    * @website https://github.com/jsstyles/css-vendor
	    * @license MIT
	    */
	
	exports.prefix = _prefix2['default'];
	exports.supportedProperty = _supportedProperty2['default'];
	exports.supportedValue = _supportedValue2['default'];

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _isInBrowser = __webpack_require__(354);
	
	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var js = ''; /**
	              * Export javascript style and css style vendor prefixes.
	              * Based on "transform" support test.
	              */
	
	var css = '';
	
	// We should not do anything if required serverside.
	if (_isInBrowser2['default']) {
	  // Order matters. We need to check Webkit the last one because
	  // other vendors use to add Webkit prefixes to some properties
	  var jsCssMap = {
	    Moz: '-moz-',
	    // IE did it wrong again ...
	    ms: '-ms-',
	    O: '-o-',
	    Webkit: '-webkit-'
	  };
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      js = key;
	      css = jsCssMap[key];
	      break;
	    }
	  }
	}
	
	/**
	 * Vendor prefix string for the current browser.
	 *
	 * @type {{js: String, css: String}}
	 * @api public
	 */
	exports['default'] = { js: js, css: css };

/***/ },
/* 354 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var isBrowser = exports.isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;
	
	exports.default = isBrowser;

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = supportedProperty;
	
	var _isInBrowser = __webpack_require__(354);
	
	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);
	
	var _prefix = __webpack_require__(353);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	var _camelize = __webpack_require__(356);
	
	var _camelize2 = _interopRequireDefault(_camelize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var el = void 0;
	var cache = {};
	
	if (_isInBrowser2['default']) {
	  el = document.createElement('p');
	
	  /**
	   * We test every property on vendor prefix requirement.
	   * Once tested, result is cached. It gives us up to 70% perf boost.
	   * http://jsperf.com/element-style-object-access-vs-plain-object
	   *
	   * Prefill cache with known css properties to reduce amount of
	   * properties we need to feature test at runtime.
	   * http://davidwalsh.name/vendor-prefix
	   */
	  var computed = window.getComputedStyle(document.documentElement, '');
	  for (var key in computed) {
	    if (!isNaN(key)) cache[computed[key]] = computed[key];
	  }
	}
	
	/**
	 * Test if a property is supported, returns supported property with vendor
	 * prefix if required. Returns `false` if not supported.
	 *
	 * @param {String} prop dash separated
	 * @return {String|Boolean}
	 * @api public
	 */
	function supportedProperty(prop) {
	  // For server-side rendering.
	  if (!el) return prop;
	
	  // We have not tested this prop yet, lets do the test.
	  if (cache[prop] != null) return cache[prop];
	
	  // Camelization is required because we can't test using
	  // css syntax for e.g. in FF.
	  // Test if property is supported as it is.
	  if ((0, _camelize2['default'])(prop) in el.style) {
	    cache[prop] = prop;
	  }
	  // Test if property is supported with vendor prefix.
	  else if (_prefix2['default'].js + (0, _camelize2['default'])('-' + prop) in el.style) {
	      cache[prop] = _prefix2['default'].css + prop;
	    } else {
	      cache[prop] = false;
	    }
	
	  return cache[prop];
	}

/***/ },
/* 356 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = camelize;
	var regExp = /[-\s]+(.)?/g;
	
	/**
	 * Convert dash separated strings to camel cased.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	function camelize(str) {
	  return str.replace(regExp, toUpper);
	}
	
	function toUpper(match, c) {
	  return c ? c.toUpperCase() : '';
	}

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = supportedValue;
	
	var _isInBrowser = __webpack_require__(354);
	
	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);
	
	var _prefix = __webpack_require__(353);
	
	var _prefix2 = _interopRequireDefault(_prefix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var cache = {};
	var el = void 0;
	
	if (_isInBrowser2['default']) el = document.createElement('p');
	
	/**
	 * Returns prefixed value if needed. Returns `false` if value is not supported.
	 *
	 * @param {String} property
	 * @param {String} value
	 * @return {String|Boolean}
	 * @api public
	 */
	function supportedValue(property, value) {
	  // For server-side rendering.
	  if (!el) return value;
	
	  // It is a string or a number as a string like '1'.
	  // We want only prefixable values here.
	  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;
	
	  var cacheKey = property + value;
	
	  if (cache[cacheKey] != null) return cache[cacheKey];
	
	  // IE can even throw an error in some cases, for e.g. style.content = 'bar'
	  try {
	    // Test value as it is.
	    el.style[property] = value;
	  } catch (err) {
	    cache[cacheKey] = false;
	    return false;
	  }
	
	  // Value is supported as it is.
	  if (el.style[property] !== '') {
	    cache[cacheKey] = value;
	  } else {
	    // Test value with vendor prefix.
	    value = _prefix2['default'].css + value;
	
	    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
	    if (value === '-ms-flex') value = '-ms-flexbox';
	
	    el.style[property] = value;
	
	    // Value is supported with vendor prefix.
	    if (el.style[property] !== '') cache[cacheKey] = value;
	  }
	
	  if (!cache[cacheKey]) cache[cacheKey] = false;
	
	  // Reset style value.
	  el.style[property] = '';
	
	  return cache[cacheKey];
	}

/***/ },
/* 358 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var regExp = /([A-Z])/g;
	
	/**
	 * Replace a string passed from String#replace.
	 * @param {String} str
	 * @return {String}
	 */
	function replace(str) {
	  return '-' + str.toLowerCase();
	}
	
	/**
	 * Convert camel cased properties of a single style to dasherized.
	 *
	 * @param {Object} style
	 * @return {Object} convertedStyle
	 */
	function convertCase(style) {
	  var convertedStyle = {};
	  for (var prop in style) {
	    var value = style[prop];
	    prop = prop.replace(regExp, replace);
	    convertedStyle[prop] = value;
	  }
	  return convertedStyle;
	}
	
	/**
	 * Allow camel cased property names by converting them back to dasherized.
	 *
	 * @param {Rule} rule
	 */
	
	exports.default = function () {
	  return function jssCamelCase(rule) {
	    var style = rule.style;
	
	    if (!style) return;
	    if (Array.isArray(style)) {
	      // Handle rules like @font-face, which can have multiple styles in an array
	      for (var index = 0; index < style.length; index++) {
	        style[index] = convertCase(style[index]);
	      }
	    } else {
	      rule.style = convertCase(style);
	    }
	  };
	};

/***/ },
/* 359 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = jssPropsSort;
	/**
	 * Sort props by length.
	 *
	 * @param {Rule} rule
	 * @api public
	 */
	function jssPropsSort() {
	  function sort(prop0, prop1) {
	    return prop0.length > prop1.length;
	  }
	
	  return function (rule) {
	    var style = rule.style;
	    var type = rule.type;
	
	    if (!style || type !== 'regular') return;
	    var newStyle = {};
	    var props = Object.keys(style).sort(sort);
	    for (var prop in props) {
	      newStyle[props[prop]] = style[props[prop]];
	    }
	    rule.style = newStyle;
	  };
	}

/***/ },
/* 360 */
/***/ function(module, exports) {

	"use strict";
	
	exports.callAfter = callAfter;
	function callAfter(times, callback) {
	    var count = 0;
	    return function () {
	        if (++count == times) {
	            if (typeof callback == "function") {
	                callback.apply(this, arguments);
	            }
	        }
	    };
	}
	exports["default"] = callAfter;
	exports.__esModule = true;
	//# sourceMappingURL=callAfter.js.map

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Utility = exports.XYZValues = exports.TreeNode = exports.Transformable = exports.Sizeable = exports.Scene = exports.PushPaneLayout = exports.Node = exports.Motor = exports.ElementManager = exports.Curves = undefined;
	
	var _Curves2 = __webpack_require__(362);
	
	var _Curves3 = _interopRequireDefault(_Curves2);
	
	var _ElementManager2 = __webpack_require__(364);
	
	var _ElementManager3 = _interopRequireDefault(_ElementManager2);
	
	var _Motor2 = __webpack_require__(442);
	
	var _Motor3 = _interopRequireDefault(_Motor2);
	
	var _Node2 = __webpack_require__(365);
	
	var _Node3 = _interopRequireDefault(_Node2);
	
	var _PushPaneLayout2 = __webpack_require__(453);
	
	var _PushPaneLayout3 = _interopRequireDefault(_PushPaneLayout2);
	
	var _Scene2 = __webpack_require__(445);
	
	var _Scene3 = _interopRequireDefault(_Scene2);
	
	var _Sizeable2 = __webpack_require__(440);
	
	var _Sizeable3 = _interopRequireDefault(_Sizeable2);
	
	var _Transformable2 = __webpack_require__(367);
	
	var _Transformable3 = _interopRequireDefault(_Transformable2);
	
	var _TreeNode2 = __webpack_require__(441);
	
	var _TreeNode3 = _interopRequireDefault(_TreeNode2);
	
	var _XYZValues2 = __webpack_require__(368);
	
	var _XYZValues3 = _interopRequireDefault(_XYZValues2);
	
	var _Utility = __webpack_require__(369);
	
	var Utility = _interopRequireWildcard(_Utility);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Curves = _Curves3.default;
	exports.ElementManager = _ElementManager3.default;
	exports.Motor = _Motor3.default;
	exports.Node = _Node3.default;
	exports.PushPaneLayout = _PushPaneLayout3.default;
	exports.Scene = _Scene3.default;
	exports.Sizeable = _Sizeable3.default;
	exports.Transformable = _Transformable3.default;
	exports.TreeNode = _TreeNode3.default;
	exports.XYZValues = _XYZValues3.default;
	exports.Utility = Utility;

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _tween = __webpack_require__(363);
	
	var _tween2 = _interopRequireDefault(_tween);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	    // Linear
	    Linear: _tween2.default.Easing.Linear.None,
	
	    // Exponential
	    ExponentialIn: _tween2.default.Easing.Exponential.In,
	    ExponentialOut: _tween2.default.Easing.Exponential.InOut,
	    ExponentialInOut: _tween2.default.Easing.Exponential.InOut,
	
	    // Quadratic
	    QuadraticIn: _tween2.default.Easing.Quadratic.In,
	    QuadraticOut: _tween2.default.Easing.Quadratic.InOut,
	    QuadraticInOut: _tween2.default.Easing.Quadratic.InOut,
	
	    // Cubic
	    CubicIn: _tween2.default.Easing.Cubic.In,
	    CubicOut: _tween2.default.Easing.Cubic.InOut,
	    CubicInOut: _tween2.default.Easing.Cubic.InOut,
	
	    // Quartic
	    QuarticIn: _tween2.default.Easing.Quartic.In,
	    QuarticOut: _tween2.default.Easing.Quartic.InOut,
	    QuarticInOut: _tween2.default.Easing.Quartic.InOut,
	
	    // Quintic
	    QuinticIn: _tween2.default.Easing.Quintic.In,
	    QuinticOut: _tween2.default.Easing.Quintic.InOut,
	    QuinticInOut: _tween2.default.Easing.Quintic.InOut,
	
	    // Sinusoidal
	    SinusoidalIn: _tween2.default.Easing.Sinusoidal.In,
	    SinusoidalOut: _tween2.default.Easing.Sinusoidal.InOut,
	    SinusoidalInOut: _tween2.default.Easing.Sinusoidal.InOut,
	
	    // Circular
	    CircularIn: _tween2.default.Easing.Circular.In,
	    CircularOut: _tween2.default.Easing.Circular.InOut,
	    CircularInOut: _tween2.default.Easing.Circular.InOut,
	
	    // Elastic
	    ElasticIn: _tween2.default.Easing.Elastic.In,
	    ElasticOut: _tween2.default.Easing.Elastic.InOut,
	    ElasticInOut: _tween2.default.Easing.Elastic.InOut,
	
	    // Back
	    BackIn: _tween2.default.Easing.Back.In,
	    BackOut: _tween2.default.Easing.Back.InOut,
	    BackInOut: _tween2.default.Easing.Back.InOut,
	
	    // Bounce
	    BounceIn: _tween2.default.Easing.Bounce.In,
	    BounceOut: _tween2.default.Easing.Bounce.InOut,
	    BounceInOut: _tween2.default.Easing.Bounce.InOut
	};

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Tween.js - Licensed under the MIT license
	 * https://github.com/tweenjs/tween.js
	 * ----------------------------------------------
	 *
	 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
	 * Thank you all, you're awesome!
	 */
	
	var TWEEN = TWEEN || (function () {
	
		var _tweens = [];
	
		return {
	
			getAll: function () {
	
				return _tweens;
	
			},
	
			removeAll: function () {
	
				_tweens = [];
	
			},
	
			add: function (tween) {
	
				_tweens.push(tween);
	
			},
	
			remove: function (tween) {
	
				var i = _tweens.indexOf(tween);
	
				if (i !== -1) {
					_tweens.splice(i, 1);
				}
	
			},
	
			update: function (time, preserve) {
	
				if (_tweens.length === 0) {
					return false;
				}
	
				var i = 0;
	
				time = time !== undefined ? time : TWEEN.now();
	
				while (i < _tweens.length) {
	
					if (_tweens[i].update(time) || preserve) {
						i++;
					} else {
						_tweens.splice(i, 1);
					}
	
				}
	
				return true;
	
			}
		};
	
	})();
	
	
	// Include a performance.now polyfill.
	// In node.js, use process.hrtime.
	if (typeof (window) === 'undefined' && typeof (process) !== 'undefined') {
		TWEEN.now = function () {
			var time = process.hrtime();
	
			// Convert [seconds, nanoseconds] to milliseconds.
			return time[0] * 1000 + time[1] / 1000000;
		};
	}
	// In a browser, use window.performance.now if it is available.
	else if (typeof (window) !== 'undefined' &&
	         window.performance !== undefined &&
			 window.performance.now !== undefined) {
		// This must be bound, because directly assigning this function
		// leads to an invocation exception in Chrome.
		TWEEN.now = window.performance.now.bind(window.performance);
	}
	// Use Date.now if it is available.
	else if (Date.now !== undefined) {
		TWEEN.now = Date.now;
	}
	// Otherwise, use 'new Date().getTime()'.
	else {
		TWEEN.now = function () {
			return new Date().getTime();
		};
	}
	
	
	TWEEN.Tween = function (object) {
	
		var _object = object;
		var _valuesStart = {};
		var _valuesEnd = {};
		var _valuesStartRepeat = {};
		var _duration = 1000;
		var _repeat = 0;
		var _repeatDelayTime;
		var _yoyo = false;
		var _isPlaying = false;
		var _reversed = false;
		var _delayTime = 0;
		var _startTime = null;
		var _easingFunction = TWEEN.Easing.Linear.None;
		var _interpolationFunction = TWEEN.Interpolation.Linear;
		var _chainedTweens = [];
		var _onStartCallback = null;
		var _onStartCallbackFired = false;
		var _onUpdateCallback = null;
		var _onCompleteCallback = null;
		var _onStopCallback = null;
	
		this.to = function (properties, duration) {
	
			_valuesEnd = properties;
	
			if (duration !== undefined) {
				_duration = duration;
			}
	
			return this;
	
		};
	
		this.start = function (time) {
	
			TWEEN.add(this);
	
			_isPlaying = true;
	
			_onStartCallbackFired = false;
	
			_startTime = time !== undefined ? time : TWEEN.now();
			_startTime += _delayTime;
	
			for (var property in _valuesEnd) {
	
				// Check if an Array was provided as property value
				if (_valuesEnd[property] instanceof Array) {
	
					if (_valuesEnd[property].length === 0) {
						continue;
					}
	
					// Create a local copy of the Array with the start value at the front
					_valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);
	
				}
	
				// If `to()` specifies a property that doesn't exist in the source object,
				// we should not set that property in the object
				if (_object[property] === undefined) {
					continue;
				}
	
				// Save the starting value.
				_valuesStart[property] = _object[property];
	
				if ((_valuesStart[property] instanceof Array) === false) {
					_valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
				}
	
				_valuesStartRepeat[property] = _valuesStart[property] || 0;
	
			}
	
			return this;
	
		};
	
		this.stop = function () {
	
			if (!_isPlaying) {
				return this;
			}
	
			TWEEN.remove(this);
			_isPlaying = false;
	
			if (_onStopCallback !== null) {
				_onStopCallback.call(_object, _object);
			}
	
			this.stopChainedTweens();
			return this;
	
		};
	
		this.end = function () {
	
			this.update(_startTime + _duration);
			return this;
	
		};
	
		this.stopChainedTweens = function () {
	
			for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
				_chainedTweens[i].stop();
			}
	
		};
	
		this.delay = function (amount) {
	
			_delayTime = amount;
			return this;
	
		};
	
		this.repeat = function (times) {
	
			_repeat = times;
			return this;
	
		};
	
		this.repeatDelay = function (amount) {
	
			_repeatDelayTime = amount;
			return this;
	
		};
	
		this.yoyo = function (yoyo) {
	
			_yoyo = yoyo;
			return this;
	
		};
	
	
		this.easing = function (easing) {
	
			_easingFunction = easing;
			return this;
	
		};
	
		this.interpolation = function (interpolation) {
	
			_interpolationFunction = interpolation;
			return this;
	
		};
	
		this.chain = function () {
	
			_chainedTweens = arguments;
			return this;
	
		};
	
		this.onStart = function (callback) {
	
			_onStartCallback = callback;
			return this;
	
		};
	
		this.onUpdate = function (callback) {
	
			_onUpdateCallback = callback;
			return this;
	
		};
	
		this.onComplete = function (callback) {
	
			_onCompleteCallback = callback;
			return this;
	
		};
	
		this.onStop = function (callback) {
	
			_onStopCallback = callback;
			return this;
	
		};
	
		this.update = function (time) {
	
			var property;
			var elapsed;
			var value;
	
			if (time < _startTime) {
				return true;
			}
	
			if (_onStartCallbackFired === false) {
	
				if (_onStartCallback !== null) {
					_onStartCallback.call(_object, _object);
				}
	
				_onStartCallbackFired = true;
			}
	
			elapsed = (time - _startTime) / _duration;
			elapsed = elapsed > 1 ? 1 : elapsed;
	
			value = _easingFunction(elapsed);
	
			for (property in _valuesEnd) {
	
				// Don't update properties that do not exist in the source object
				if (_valuesStart[property] === undefined) {
					continue;
				}
	
				var start = _valuesStart[property] || 0;
				var end = _valuesEnd[property];
	
				if (end instanceof Array) {
	
					_object[property] = _interpolationFunction(end, value);
	
				} else {
	
					// Parses relative end values with start as base (e.g.: +10, -3)
					if (typeof (end) === 'string') {
	
						if (end.charAt(0) === '+' || end.charAt(0) === '-') {
							end = start + parseFloat(end);
						} else {
							end = parseFloat(end);
						}
					}
	
					// Protect against non numeric properties.
					if (typeof (end) === 'number') {
						_object[property] = start + (end - start) * value;
					}
	
				}
	
			}
	
			if (_onUpdateCallback !== null) {
				_onUpdateCallback.call(_object, value);
			}
	
			if (elapsed === 1) {
	
				if (_repeat > 0) {
	
					if (isFinite(_repeat)) {
						_repeat--;
					}
	
					// Reassign starting values, restart by making startTime = now
					for (property in _valuesStartRepeat) {
	
						if (typeof (_valuesEnd[property]) === 'string') {
							_valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property]);
						}
	
						if (_yoyo) {
							var tmp = _valuesStartRepeat[property];
	
							_valuesStartRepeat[property] = _valuesEnd[property];
							_valuesEnd[property] = tmp;
						}
	
						_valuesStart[property] = _valuesStartRepeat[property];
	
					}
	
					if (_yoyo) {
						_reversed = !_reversed;
					}
	
					if (_repeatDelayTime !== undefined) {
						_startTime = time + _repeatDelayTime;
					} else {
						_startTime = time + _delayTime;
					}
	
					return true;
	
				} else {
	
					if (_onCompleteCallback !== null) {
	
						_onCompleteCallback.call(_object, _object);
					}
	
					for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
						// Make the chained tweens start exactly at the time they should,
						// even if the `update()` method was called way past the duration of the tween
						_chainedTweens[i].start(_startTime + _duration);
					}
	
					return false;
	
				}
	
			}
	
			return true;
	
		};
	
	};
	
	
	TWEEN.Easing = {
	
		Linear: {
	
			None: function (k) {
	
				return k;
	
			}
	
		},
	
		Quadratic: {
	
			In: function (k) {
	
				return k * k;
	
			},
	
			Out: function (k) {
	
				return k * (2 - k);
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k;
				}
	
				return - 0.5 * (--k * (k - 2) - 1);
	
			}
	
		},
	
		Cubic: {
	
			In: function (k) {
	
				return k * k * k;
	
			},
	
			Out: function (k) {
	
				return --k * k * k + 1;
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k;
				}
	
				return 0.5 * ((k -= 2) * k * k + 2);
	
			}
	
		},
	
		Quartic: {
	
			In: function (k) {
	
				return k * k * k * k;
	
			},
	
			Out: function (k) {
	
				return 1 - (--k * k * k * k);
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k;
				}
	
				return - 0.5 * ((k -= 2) * k * k * k - 2);
	
			}
	
		},
	
		Quintic: {
	
			In: function (k) {
	
				return k * k * k * k * k;
	
			},
	
			Out: function (k) {
	
				return --k * k * k * k * k + 1;
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k * k;
				}
	
				return 0.5 * ((k -= 2) * k * k * k * k + 2);
	
			}
	
		},
	
		Sinusoidal: {
	
			In: function (k) {
	
				return 1 - Math.cos(k * Math.PI / 2);
	
			},
	
			Out: function (k) {
	
				return Math.sin(k * Math.PI / 2);
	
			},
	
			InOut: function (k) {
	
				return 0.5 * (1 - Math.cos(Math.PI * k));
	
			}
	
		},
	
		Exponential: {
	
			In: function (k) {
	
				return k === 0 ? 0 : Math.pow(1024, k - 1);
	
			},
	
			Out: function (k) {
	
				return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);
	
			},
	
			InOut: function (k) {
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				if ((k *= 2) < 1) {
					return 0.5 * Math.pow(1024, k - 1);
				}
	
				return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);
	
			}
	
		},
	
		Circular: {
	
			In: function (k) {
	
				return 1 - Math.sqrt(1 - k * k);
	
			},
	
			Out: function (k) {
	
				return Math.sqrt(1 - (--k * k));
	
			},
	
			InOut: function (k) {
	
				if ((k *= 2) < 1) {
					return - 0.5 * (Math.sqrt(1 - k * k) - 1);
				}
	
				return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
	
			}
	
		},
	
		Elastic: {
	
			In: function (k) {
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
	
			},
	
			Out: function (k) {
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
	
			},
	
			InOut: function (k) {
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				k *= 2;
	
				if (k < 1) {
					return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
				}
	
				return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
	
			}
	
		},
	
		Back: {
	
			In: function (k) {
	
				var s = 1.70158;
	
				return k * k * ((s + 1) * k - s);
	
			},
	
			Out: function (k) {
	
				var s = 1.70158;
	
				return --k * k * ((s + 1) * k + s) + 1;
	
			},
	
			InOut: function (k) {
	
				var s = 1.70158 * 1.525;
	
				if ((k *= 2) < 1) {
					return 0.5 * (k * k * ((s + 1) * k - s));
				}
	
				return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
	
			}
	
		},
	
		Bounce: {
	
			In: function (k) {
	
				return 1 - TWEEN.Easing.Bounce.Out(1 - k);
	
			},
	
			Out: function (k) {
	
				if (k < (1 / 2.75)) {
					return 7.5625 * k * k;
				} else if (k < (2 / 2.75)) {
					return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
				} else if (k < (2.5 / 2.75)) {
					return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
				} else {
					return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
				}
	
			},
	
			InOut: function (k) {
	
				if (k < 0.5) {
					return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
				}
	
				return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
	
			}
	
		}
	
	};
	
	TWEEN.Interpolation = {
	
		Linear: function (v, k) {
	
			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.Linear;
	
			if (k < 0) {
				return fn(v[0], v[1], f);
			}
	
			if (k > 1) {
				return fn(v[m], v[m - 1], m - f);
			}
	
			return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
	
		},
	
		Bezier: function (v, k) {
	
			var b = 0;
			var n = v.length - 1;
			var pw = Math.pow;
			var bn = TWEEN.Interpolation.Utils.Bernstein;
	
			for (var i = 0; i <= n; i++) {
				b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
			}
	
			return b;
	
		},
	
		CatmullRom: function (v, k) {
	
			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.CatmullRom;
	
			if (v[0] === v[m]) {
	
				if (k < 0) {
					i = Math.floor(f = m * (1 + k));
				}
	
				return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
	
			} else {
	
				if (k < 0) {
					return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
				}
	
				if (k > 1) {
					return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
				}
	
				return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
	
			}
	
		},
	
		Utils: {
	
			Linear: function (p0, p1, t) {
	
				return (p1 - p0) * t + p0;
	
			},
	
			Bernstein: function (n, i) {
	
				var fc = TWEEN.Interpolation.Utils.Factorial;
	
				return fc(n) / fc(i) / fc(n - i);
	
			},
	
			Factorial: (function () {
	
				var a = [1];
	
				return function (n) {
	
					var s = 1;
	
					if (a[n]) {
						return a[n];
					}
	
					for (var i = n; i > 1; i--) {
						s *= i;
					}
	
					a[n] = s;
					return s;
	
				};
	
			})(),
	
			CatmullRom: function (p0, p1, p2, p3, t) {
	
				var v0 = (p2 - p0) * 0.5;
				var v1 = (p3 - p1) * 0.5;
				var t2 = t * t;
				var t3 = t * t2;
	
				return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
	
			}
	
		}
	
	};
	
	// UMD (Universal Module Definition)
	(function (root) {
	
		if (true) {
	
			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return TWEEN;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
		} else if (typeof module !== 'undefined' && typeof exports === 'object') {
	
			// Node.js
			module.exports = TWEEN;
	
		} else if (root !== undefined) {
	
			// Global variable
			root.TWEEN = TWEEN;
	
		}
	
	})(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(294)))

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Node = __webpack_require__(365);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Motor = __webpack_require__(442);
	
	var _Motor2 = _interopRequireDefault(_Motor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Manages a DOM element. Exposes a set of recommended APIs for working with
	 * DOM efficiently. Currently doesn't do much yet...
	 */
	var ElementManager = function () {
	    function ElementManager(element) {
	        _classCallCheck(this, ElementManager);
	
	        this.element = element;
	    }
	
	    /**
	     * @param {Array.string} classes An array of class names to add to the
	     * managed element.
	     *
	     * Note: updating class names with `el.classList.add()` won't thrash the
	     * layout. See: http://www.html5rocks.com/en/tutorials/speed/animations
	     */
	
	
	    _createClass(ElementManager, [{
	        key: 'setClasses',
	        value: function setClasses() {
	            var _element$classList;
	
	            if (arguments.length) (_element$classList = this.element.classList).add.apply(_element$classList, arguments);
	            return this;
	        }
	
	        /**
	         * Apply a style property to the element.
	         *
	         * @private
	         * @param  {string} property The CSS property we will a apply.
	         * @param  {string} value    The value the CSS property wil have.
	         */
	
	    }, {
	        key: 'applyStyle',
	        value: function applyStyle(property, value) {
	            this.element.style[property] = value;
	        }
	    }, {
	        key: 'addChild',
	        value: function addChild(childElementManager) {
	            this.element.appendChild(childElementManager.element);
	        }
	    }, {
	        key: 'removeChild',
	        value: function removeChild(childElementManager) {
	            // This conditional check is needed incase the element was already
	            // removed from the HTML-API side.
	            if (childElementManager.element.parentNode === this.element) this.element.removeChild(childElementManager.element);
	        }
	    }, {
	        key: 'connectChildElement',
	        value: function connectChildElement(childImperativeNode) {
	            if (
	
	            // When using the imperative API, this statement is
	            // true, so the DOM elements need to be connected.
	            !childImperativeNode._elementManager.element.parentNode
	
	            // This condition is irrelevant when strictly using the
	            // imperative API. However, it is possible that when
	            // using the HTML API that the HTML-API node can be placed
	            // somewhere that isn't another HTML-API node, and the
	            // imperative Node can be gotten and used to add the
	            // node to another imperative Node. In this case, the
	            // HTML-API node will be added to the proper HTMLparent.
	            || childImperativeNode._elementManager.element.parentElement && childImperativeNode._elementManager.element.parentElement !== this.element
	
	            // When an HTML-API node is already child of the
	            // relevant parent, or it is child of a shadow root of
	            // the relevant parent, there there's nothing to do,
	            // everything is already as expected, so the following
	            // conditional body is skipped.
	            ) {
	                    this.addChild(childImperativeNode._elementManager);
	                }
	        }
	    }, {
	        key: 'disconnectChildElement',
	        value: function disconnectChildElement(childImperativeNode) {
	            // If DeclarativeBase#removeChild was called first, we don't need to
	            // call this again.
	            if (!childImperativeNode._elementManager.element.parentNode) return;
	
	            this.removeChild(childImperativeNode._elementManager);
	        }
	
	        /**
	         * Apply the DOMMatrix value to the style of this Node's element.
	         */
	
	    }, {
	        key: 'applyTransform',
	        value: function applyTransform(domMatrix) {
	            var cssMatrixString = 'matrix3d(\n            ' + domMatrix.m11 + ',\n            ' + domMatrix.m12 + ',\n            ' + domMatrix.m13 + ',\n            ' + domMatrix.m14 + ',\n            ' + domMatrix.m21 + ',\n            ' + domMatrix.m22 + ',\n            ' + domMatrix.m23 + ',\n            ' + domMatrix.m24 + ',\n            ' + domMatrix.m31 + ',\n            ' + domMatrix.m32 + ',\n            ' + domMatrix.m33 + ',\n            ' + domMatrix.m34 + ',\n            ' + domMatrix.m41 + ',\n            ' + domMatrix.m42 + ',\n            ' + domMatrix.m43 + ',\n            ' + domMatrix.m44 + '\n        )';
	
	            this.applyStyle('transform', cssMatrixString);
	        }
	
	        /**
	         * [applySize description]
	         */
	
	    }, {
	        key: 'applySize',
	        value: function applySize(size) {
	            var x = size.x,
	                y = size.y;
	
	
	            this.applyStyle('width', x + 'px');
	            this.applyStyle('height', y + 'px');
	
	            // NOTE: we ignore the Z axis on elements, since they are flat.
	        }
	    }, {
	        key: 'applyOpacity',
	        value: function applyOpacity(opacity) {
	            this.applyStyle('opacity', opacity);
	        }
	    }, {
	        key: 'applyImperativeNodeProperties',
	        value: function applyImperativeNodeProperties(node) {
	
	            // Only Node is Transformable
	            if (node instanceof _Node2.default) {
	                this.applyOpacity(node._properties.opacity);
	                this.applyTransform(node._properties.transform);
	            }
	
	            // But both Node and Scene are Sizeable
	            this.applySize(node._calculatedSize);
	        }
	    }, {
	        key: 'shouldRender',
	        value: function shouldRender() {
	            var _this = this;
	
	            var task = _Motor2.default.addRenderTask(function () {
	                _this.applyStyle('display', 'block');
	                _Motor2.default.removeRenderTask(task);
	            });
	        }
	    }, {
	        key: 'shouldNotRender',
	        value: function shouldNotRender() {
	            var _this2 = this;
	
	            var task = _Motor2.default.addRenderTask(function () {
	                _this2.applyStyle('display', 'none');
	                _Motor2.default.removeRenderTask(task);
	            });
	        }
	    }]);
	
	    return ElementManager;
	}();
	
	exports.default = ElementManager;

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	__webpack_require__(366);
	
	var _Transformable = __webpack_require__(367);
	
	var _Transformable2 = _interopRequireDefault(_Transformable);
	
	var _ImperativeBase = __webpack_require__(444);
	
	var _ImperativeBase2 = _interopRequireDefault(_ImperativeBase);
	
	var _node = __webpack_require__(451);
	
	var _node2 = _interopRequireDefault(_node);
	
	var _Scene = __webpack_require__(445);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	(0, _ImperativeBase.initImperativeBase)();
	
	var Node = function (_ImperativeBase$mixin) {
	    _inherits(Node, _ImperativeBase$mixin);
	
	    /**
	     * @constructor
	     *
	     * @param {Object} options Initial properties that the node will
	     * have. This can be used when creating a node, alternatively to using the
	     * setters/getters for position, rotation, etc.
	     *
	     * @example
	     * var node = new Node({
	     *   absoluteSize: {x:100, y:100, z:100},
	     *   rotation: {x:30, y:20, z:25}
	     * })
	     */
	    function Node() {
	        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        _classCallCheck(this, Node);
	
	        // This was when using my `multiple()` implementation, we could call
	        // specific constructors using specific arguments. But, we're using
	        // class-factory style mixins for now, so we don't have control over the
	        // specific arguments we can pass to the constructors, so we're just
	        // using a single `options` parameter in all the constructors.
	        //this.callSuperConstructor(Transformable, options)
	        //this.callSuperConstructor(TreeNode)
	        //this.callSuperConstructor(ImperativeBase)
	
	        var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this, options));
	
	        _this._scene = null; // stores a ref to this Node's root Scene.
	
	        // This is an internal promise that resolves when this Node is added to
	        // to a scene graph that has a root Scene TreeNode. The resolved value
	        // is the root Scene.
	        _this._scenePromise = null;
	        _this._resolveScenePromise = null;
	
	        /**
	         * @private
	         * This method is defined here in the consructor as an arrow function
	         * because parent Nodes pass it to Observable#on and Observable#off. If
	         * it were a prototype method, then it would need to be bound when
	         * passed to Observable#on, which would require keeping track of the
	         * bound function reference in order to be able to pass it to
	         * Observable#off later. See ImperativeBase#addChild and
	         * ImperativeBase#removeChild.
	         */
	        _this._onParentSizeChange = function () {
	
	            // We only need to recalculate sizing and matrices if this node has
	            // properties that depend on parent sizing (proportional size,
	            // align, and mountPoint). mountPoint isn't obvious: if this node
	            // is proportionally sized, then the mountPoint will depend on the
	            // size of this element which depends on the size of this element's
	            // parent.
	            if (_this._properties.sizeMode.x === "proportional" || _this._properties.sizeMode.y === "proportional" || _this._properties.sizeMode.z === "proportional" || _this._properties.align.x !== 0 || _this._properties.align.y !== 0 || _this._properties.align.z !== 0) {
	                _this._calcSize();
	                _this._needsToBeRendered();
	            }
	        };
	
	        _this._calcSize();
	        _this._needsToBeRendered();
	        return _this;
	    }
	
	    /**
	     * @private
	     */
	
	
	    _createClass(Node, [{
	        key: '_waitForMountThenResolveMountPromise',
	        value: function () {
	            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!this._awaitingScenePromise) {
	                                    _context.next = 2;
	                                    break;
	                                }
	
	                                return _context.abrupt('return');
	
	                            case 2:
	                                _context.prev = 2;
	
	                                this._awaitingScenePromise = true;
	                                _context.next = 6;
	                                return this._getScenePromise();
	
	                            case 6:
	                                _context.next = 8;
	                                return this._scene.mountPromise;
	
	                            case 8:
	                                _context.next = 17;
	                                break;
	
	                            case 10:
	                                _context.prev = 10;
	                                _context.t0 = _context['catch'](2);
	
	                                if (!(_context.t0 == 'mountcancel')) {
	                                    _context.next = 16;
	                                    break;
	                                }
	
	                                return _context.abrupt('return');
	
	                            case 16:
	                                throw _context.t0;
	
	                            case 17:
	                                _context.prev = 17;
	
	                                this._awaitingScenePromise = false;
	                                return _context.finish(17);
	
	                            case 20:
	
	                                this._mounted = true;
	                                this._resolveMountPromise();
	                                this._elementManager.shouldRender();
	
	                            case 23:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this, [[2, 10, 17, 20]]);
	            }));
	
	            function _waitForMountThenResolveMountPromise() {
	                return _ref.apply(this, arguments);
	            }
	
	            return _waitForMountThenResolveMountPromise;
	        }()
	
	        /**
	         * @override
	         */
	
	    }, {
	        key: '_makeElement',
	        value: function _makeElement() {
	            return new _node2.default();
	        }
	
	        /**
	         * @private
	         * Get a promise for the node's eventual scene.
	         */
	
	    }, {
	        key: '_getScenePromise',
	        value: function _getScenePromise() {
	            var _this2 = this;
	
	            if (!this._scenePromise) {
	                this._scenePromise = new Promise(function (a, b) {
	                    _this2._resolveScenePromise = a;
	                });
	            }
	
	            if (this._scene) this._resolveScenePromise();
	
	            return this._scenePromise;
	        }
	
	        /**
	         * Get the Scene that this Node is in, null if no Scene. This is recursive
	         * at first, then cached.
	         *
	         * This traverses up the scene graph tree starting at this Node and finds
	         * the root Scene, if any. It caches the value for performance. If this
	         * Node is removed from a parent node with parent.removeChild(), then the
	         * cache is invalidated so the traversal can happen again when this Node is
	         * eventually added to a new tree. This way, if the scene is cached on a
	         * parent Node that we're adding this Node to then we can get that cached
	         * value instead of traversing the tree.
	         *
	         * @readonly
	         */
	
	    }, {
	        key: '_giveSceneRefToChildren',
	
	
	        /**
	         * @private
	         * This method to be called only when this Node has this.scene.
	         * Resolves the _scenePromise for all children of the tree of this Node.
	         */
	        value: function _giveSceneRefToChildren() {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this._children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var childNode = _step.value;
	
	                    childNode._scene = this._scene;
	                    if (childNode._resolveScenePromise) childNode._resolveScenePromise(childNode._scene);
	                    childNode._giveSceneRefToChildren();
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: '_resetSceneRef',
	        value: function _resetSceneRef() {
	            this._scene = null;
	            this._scenePromise = null;
	            this._resolveScenePromise = null;
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = this._children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var childNode = _step2.value;
	
	                    childNode._resetSceneRef();
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        }
	    }, {
	        key: '_render',
	        value: function _render(timestamp) {
	            // applies the transform matrix to the element's style property.
	            this._properties.transform = this._calculateMatrix();
	            _get(Node.prototype.__proto__ || Object.getPrototypeOf(Node.prototype), '_render', this).call(this, timestamp);
	        }
	    }, {
	        key: 'scene',
	        get: function get() {
	            // NOTE: this._scene is initally null, created in the constructor.
	
	            // if already cached, return it. Or if no parent, return it (it'll be null).
	            if (this._scene || !this._parent) return this._scene;
	
	            // if the parent node already has a ref to the scene, use that.
	            if (this._parent._scene) {
	                this._scene = this._parent._scene;
	            } else if (this._parent instanceof _Scene2.default) {
	                this._scene = this._parent;
	            }
	            // otherwise call the scene getter on the parent, which triggers
	            // traversal up the scene graph in order to find the root scene (null
	            // if none).
	            else {
	                    this._scene = this._parent.scene;
	                }
	
	            return this._scene;
	        }
	    }]);
	
	    return Node;
	}(_ImperativeBase2.default.mixin(_Transformable2.default));
	
	exports.default = Node;

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["GeometryInterfaces"] = factory();
		else
			root["GeometryInterfaces"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(global) {'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		var _DOMMatrix = __webpack_require__(1);
		
		var _DOMMatrix2 = _interopRequireDefault(_DOMMatrix);
		
		var _DOMMatrixReadOnly = __webpack_require__(2);
		
		var _DOMMatrixReadOnly2 = _interopRequireDefault(_DOMMatrixReadOnly);
		
		var _global = null;
		
		// browser
		if (typeof window != 'undefined') {
		    _global = window;
		} else if (typeof global != 'undefined') {
		    _global = global;
		}
		
		if (_global) {
		    _global.DOMMatrix = _DOMMatrix2['default'];
		    _global.DOMMatrixReadOnly = _DOMMatrixReadOnly2['default'];
		}
		
		exports.DOMMatrix = _DOMMatrix2['default'];
		exports.DOMMatrixReadOnly = _DOMMatrixReadOnly2['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
		
		var _get = function get(_x14, _x15, _x16) { var _again = true; _function: while (_again) { var object = _x14, property = _x15, receiver = _x16; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x14 = parent; _x15 = property; _x16 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		
		var _DOMMatrixReadOnly2 = __webpack_require__(2);
		
		var _DOMMatrixReadOnly3 = _interopRequireDefault(_DOMMatrixReadOnly2);
		
		var _utilities = __webpack_require__(3);
		
		var DOMMatrix = (function (_DOMMatrixReadOnly) {
		    _inherits(DOMMatrix, _DOMMatrixReadOnly);
		
		    function DOMMatrix() {
		        _classCallCheck(this, DOMMatrix);
		
		        if (arguments.length === 0) {
		            var numberSequence = [1, 0, 0, 1, 0, 0];
		            _get(Object.getPrototypeOf(DOMMatrix.prototype), 'constructor', this).call(this, numberSequence);
		        } else if (arguments.length === 1) {
		            if (typeof arguments[0] == 'string') {
		                var transformList = arguments[0];
		                // TODO validate that syntax of transformList matches transform-list (http://www.w3.org/TR/css-transforms-1/#typedef-transform-list).
		                // TODO ...
		            } else if (arguments[0] instanceof _DOMMatrixReadOnly3['default']) {
		                    var other = arguments[0];
		                    _get(Object.getPrototypeOf(DOMMatrix.prototype), 'constructor', this).call(this, (0, _utilities.matrixToArray)(other));
		                } else if (arguments[0] instanceof Float32Array || arguments[0] instanceof Float64Array) {
		                    var typedArray = arguments[0];
		                    if (typedArray.length === 6 || typedArray.length === 16) {
		                        _get(Object.getPrototypeOf(DOMMatrix.prototype), 'constructor', this).call(this, Array.from(typedArray));
		                    } else {
		                        throw new TypeError('The typed array argument to the DOMMatrix constructor has an invalid length.');
		                    }
		                } else if (arguments[0] instanceof Array /* TODO && all items are numbers */) {
		                        var numberSequence = arguments[0];
		                        if (numberSequence.length === 6 || numberSequence.length === 16) {
		                            _get(Object.getPrototypeOf(DOMMatrix.prototype), 'constructor', this).call(this, numberSequence);
		                        } else {
		                            throw new TypeError('The array argument to the DOMMatrix constructor has an invalid length.');
		                        }
		                    }
		        } else {
		            throw new Error('Wrong number of arguments to DOMMatrix constructor.');
		        }
		    }
		
		    // Mutable transform methods
		
		    _createClass(DOMMatrix, [{
		        key: 'multiplySelf',
		        value: function multiplySelf(other) {
		            if (!other instanceof _DOMMatrixReadOnly3['default']) throw new Error('The argument to multiplySelf must be an instance of DOMMatrixReadOnly or DOMMatrix');
		
		            var resultArray = (0, _utilities.multiplyToArray)(this, other);
		            (0, _utilities.applyArrayValuesToDOMMatrix)(resultArray, this);
		
		            if (!other.is2D) this._is2D = false;
		
		            return this;
		        }
		    }, {
		        key: 'preMultiplySelf',
		        value: function preMultiplySelf(other) {
		            if (!other instanceof _DOMMatrixReadOnly3['default']) throw new Error('The argument to multiplySelf must be an instance of DOMMatrixReadOnly or DOMMatrix');
		
		            var resultArray = (0, _utilities.multiplyToArray)(other, this);
		            (0, _utilities.applyArrayValuesToDOMMatrix)(resultArray, this);
		
		            if (!other.is2D) this._is2D = false;
		
		            return this;
		        }
		    }, {
		        key: 'translateSelf',
		        value: function translateSelf(tx, ty) {
		            var tz = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            // TODO: check args are numbers
		
		            if (arguments.length === 1) throw new Error('The first two arguments (X and Y translation values) are required (the third, Z translation, is optional).');
		
		            // http://www.w3.org/TR/2012/WD-css3-transforms-20120911/#Translate3dDefined
		            var translationMatrix = new DOMMatrix([
		            // column-major:
		            1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1]);
		
		            this.multiplySelf(translationMatrix);
		
		            if (tz != 0) {
		                this._is2D = false;
		            }
		
		            return this;
		        }
		    }, {
		        key: 'scaleSelf',
		        value: function scaleSelf(scale) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            this.translateSelf(originX, originY);
		
		            this.multiplySelf(new DOMMatrix([
		            // 2D:
		            /*a*/scale, /*b*/0,
		            /*c*/0, /*d*/scale,
		            /*e*/0, /*f*/0]));
		
		            this.translateSelf(-originX, -originY);
		            return this;
		        }
		    }, {
		        key: 'scale3dSelf',
		        value: function scale3dSelf(scale) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		            var originZ = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
		
		            this.translateSelf(originX, originY, originZ);
		
		            this.multiplySelf(new DOMMatrix([
		            // 3D
		            scale, 0, 0, 0, 0, scale, 0, 0, 0, 0, scale, 0, 0, 0, 0, 1]));
		
		            this.translateSelf(-originX, -originY, -originZ);
		            return this;
		        }
		    }, {
		        key: 'scaleNonUniformSelf',
		        value: function scaleNonUniformSelf(scaleX) {
		            var scaleY = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
		            var scaleZ = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
		            var originX = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
		            var originY = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
		            var originZ = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
		
		            this.translateSelf(originX, originY, originZ);
		
		            this.multiplySelf(new DOMMatrix([
		            // 3D
		            scaleX, 0, 0, 0, 0, scaleY, 0, 0, 0, 0, scaleZ, 0, 0, 0, 0, 1]));
		
		            this.translateSelf(-originX, -originY, -originZ);
		
		            if (scaleZ !== 1 || originZ !== 0) this._is2D = false;
		
		            return this;
		        }
		    }, {
		        key: 'rotateSelf',
		        value: function rotateSelf(angle) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            this.translateSelf(originX, originY);
		
		            // axis of rotation
		            var x = 0;
		            var y = 0;
		            var z = 1;
		            // We're rotating around the Z axis.
		
		            this.rotateAxisAngleSelf(x, y, z, angle);
		
		            this.translateSelf(-originX, -originY);
		            return this;
		        }
		
		        // TODO
		    }, {
		        key: 'rotateFromVectorSelf',
		        value: function rotateFromVectorSelf(x, y) {
		            throw new Error('rotateFromVectorSelf is not implemented yet.');
		        }
		    }, {
		        key: 'rotateAxisAngleSelf',
		        value: function rotateAxisAngleSelf(x, y, z, angle) {
		            var rotationMatrix = new DOMMatrix((0, _utilities.rotateAxisAngleArray)(x, y, z, angle));
		            this.multiplySelf(rotationMatrix);
		            return this;
		        }
		    }, {
		        key: 'skewXSelf',
		        value: function skewXSelf(sx) {
		            throw new Error('skewXSelf is not implemented yet.');
		        }
		    }, {
		        key: 'skewYSelf',
		        value: function skewYSelf(sy) {
		            throw new Error('skewYSelf is not implemented yet.');
		        }
		    }, {
		        key: 'invertSelf',
		        value: function invertSelf() {
		            throw new Error('invertSelf is not implemented yet.');
		        }
		    }, {
		        key: 'setMatrixValue',
		        value: function setMatrixValue( /*DOMString*/transformList) {
		            throw new Error('setMatrixValue is not implemented yet.');
		        }
		    }, {
		        key: 'a',
		        get: function get() {
		            return this.m11;
		        },
		        set: function set(value) {
		            this.m11 = value;
		        }
		    }, {
		        key: 'b',
		        get: function get() {
		            return this.m12;
		        },
		        set: function set(value) {
		            this.m12 = value;
		        }
		    }, {
		        key: 'c',
		        get: function get() {
		            return this.m21;
		        },
		        set: function set(value) {
		            this.m21 = value;
		        }
		    }, {
		        key: 'd',
		        get: function get() {
		            return this.m22;
		        },
		        set: function set(value) {
		            this.m22 = value;
		        }
		    }, {
		        key: 'e',
		        get: function get() {
		            return this.m41;
		        },
		        set: function set(value) {
		            this.m41 = value;
		        }
		    }, {
		        key: 'f',
		        get: function get() {
		            return this.m42;
		        },
		        set: function set(value) {
		            this.m42 = value;
		        }
		    }, {
		        key: 'm11',
		        get: function get() {
		            return this._matrix[0];
		        },
		        set: function set(value) {
		            this._matrix[0] = value;
		        }
		    }, {
		        key: 'm12',
		        get: function get() {
		            return this._matrix[4];
		        },
		        set: function set(value) {
		            this._matrix[4] = value;
		        }
		    }, {
		        key: 'm13',
		        get: function get() {
		            return this._matrix[8];
		        },
		        set: function set(value) {
		            this._matrix[8] = value;
		        }
		    }, {
		        key: 'm14',
		        get: function get() {
		            return this._matrix[12];
		        },
		        set: function set(value) {
		            this._matrix[12] = value;
		        }
		    }, {
		        key: 'm21',
		        get: function get() {
		            return this._matrix[1];
		        },
		        set: function set(value) {
		            this._matrix[1] = value;
		        }
		    }, {
		        key: 'm22',
		        get: function get() {
		            return this._matrix[5];
		        },
		        set: function set(value) {
		            this._matrix[5] = value;
		        }
		    }, {
		        key: 'm23',
		        get: function get() {
		            return this._matrix[9];
		        },
		        set: function set(value) {
		            this._matrix[9] = value;
		        }
		    }, {
		        key: 'm24',
		        get: function get() {
		            return this._matrix[13];
		        },
		        set: function set(value) {
		            this._matrix[13] = value;
		        }
		    }, {
		        key: 'm31',
		        get: function get() {
		            return this._matrix[2];
		        },
		        set: function set(value) {
		            this._matrix[2] = value;
		        }
		    }, {
		        key: 'm32',
		        get: function get() {
		            return this._matrix[6];
		        },
		        set: function set(value) {
		            this._matrix[6] = value;
		        }
		    }, {
		        key: 'm33',
		        get: function get() {
		            return this._matrix[10];
		        },
		        set: function set(value) {
		            this._matrix[10] = value;
		        }
		    }, {
		        key: 'm34',
		        get: function get() {
		            return this._matrix[14];
		        },
		        set: function set(value) {
		            this._matrix[14] = value;
		        }
		    }, {
		        key: 'm41',
		        get: function get() {
		            return this._matrix[3];
		        },
		        set: function set(value) {
		            this._matrix[3] = value;
		        }
		    }, {
		        key: 'm42',
		        get: function get() {
		            return this._matrix[7];
		        },
		        set: function set(value) {
		            this._matrix[7] = value;
		        }
		    }, {
		        key: 'm43',
		        get: function get() {
		            return this._matrix[11];
		        },
		        set: function set(value) {
		            this._matrix[11] = value;
		        }
		    }, {
		        key: 'm44',
		        get: function get() {
		            return this._matrix[15];
		        },
		        set: function set(value) {
		            this._matrix[15] = value;
		        }
		    }]);
		
		    return DOMMatrix;
		})(_DOMMatrixReadOnly3['default']);
		
		exports['default'] = DOMMatrix;
		module.exports = exports['default'];
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, '__esModule', {
		    value: true
		});
		
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
		
		var _DOMMatrix = __webpack_require__(1);
		
		var _DOMMatrix2 = _interopRequireDefault(_DOMMatrix);
		
		var _utilities = __webpack_require__(3);
		
		var DOMMatrixReadOnly = (function () {
		
		    /**
		     * @param {Array.number} numberSequence An array of numbers. If the array
		     * has 6 items, then those items set the values of m11, m12, m21, m22, m41,
		     * m42 in that order (or the values a, b, c, d, e, f if you're using those
		     * aliases) and this.is2D is true. If the array has 16 items (in
		     * column-major order), then they set all the values of the underlying
		     * matrix (m11 to m44) and this.is2D is set false. Arrays of other lengths
		     * throw an error.
		     */
		
		    function DOMMatrixReadOnly(numberSequence) {
		        _classCallCheck(this, DOMMatrixReadOnly);
		
		        if (!(this instanceof _DOMMatrix2['default'])) throw new TypeError('DOMMatrixReadOnly can\'t be instantiated directly. Use DOMMatrix instead.');
		
		        // TODO, make these private: {{
		
		        // `this._matrix` defaults to the identity matrix.
		        // `this._matrix` is represented internally in row-major format so that
		        // it is easy to look at visually. In a pair of coordinates (as in
		        // "m23") the first number is the column and the second is the row (so
		        // "m23" means column 2 row 3).
		        this._matrix = new Float64Array([
		        /*m11*/1, /*m21*/0, /*m31*/0, /*m41*/0,
		        /*m12*/0, /*m22*/1, /*m32*/0, /*m42*/0,
		        /*m13*/0, /*m23*/0, /*m33*/1, /*m43*/0,
		        /*m14*/0, /*m24*/0, /*m34*/0, /*m44*/1]);
		        this._is2D = true;
		        this._isIdentity = true;
		
		        // }}
		
		        // TODO
		        //if (!Match.test(numberSequence, [Number]))
		        //throw new TypeError('DOMMatrixReadOnly constructor argument "numberSequence" must contain numbers.')
		
		        if (numberSequence.length === 6) {
		            (0, _utilities.applyArrayValuesToDOMMatrix)(numberSequence, this);
		        } else if (numberSequence.length === 16) {
		            (0, _utilities.applyArrayValuesToDOMMatrix)(numberSequence, this);
		            this._is2D = false;
		        } else {
		            throw new TypeError('DOMMatrixReadOnly constructor argument "numberSequence" must have length 6 or 16.');
		        }
		    }
		
		    // Immutable transform methods -------------------------------------------
		
		    _createClass(DOMMatrixReadOnly, [{
		        key: 'translate',
		        value: function translate(tx, ty) {
		            var tz = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            return new _DOMMatrix2['default'](this).translateSelf(tx, ty, tz);
		        }
		    }, {
		        key: 'scale',
		        value: function scale(_scale) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            return new _DOMMatrix2['default'](this).scaleSelf(_scale, originX, originY);
		        }
		    }, {
		        key: 'scale3d',
		        value: function scale3d(scale) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		            var originZ = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
		
		            return new _DOMMatrix2['default'](this).scale3dSelf(scale, originX, originY, originZ);
		        }
		    }, {
		        key: 'scaleNonUniform',
		        value: function scaleNonUniform(scaleX) {
		            var scaleY = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
		            var scaleZ = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
		            var originX = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
		            var originY = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
		            var originZ = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
		
		            return new _DOMMatrix2['default'](this).scaleNonUniformSelf(scaleX, scaleY, scaleZ, originX, originY, originZ);
		        }
		    }, {
		        key: 'rotate',
		        value: function rotate(angle) {
		            var originX = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		            var originY = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		            return new _DOMMatrix2['default'](this).rotateSelf(angle, originX, originY);
		        }
		
		        // TODO
		    }, {
		        key: 'rotateFromVector',
		        value: function rotateFromVector(x, y) {
		            throw new Error('rotateFromVector is not implemented yet.');
		        }
		    }, {
		        key: 'rotateAxisAngle',
		        value: function rotateAxisAngle(x, y, z, angle) {
		            return new _DOMMatrix2['default'](this).rotateAxisAngleSelf(x, y, z, angle);
		        }
		    }, {
		        key: 'skewX',
		        value: function skewX(sx) {
		            throw new Error('skewX is not implemented yet.');
		        }
		    }, {
		        key: 'skewY',
		        value: function skewY(sy) {
		            throw new Error('skewY is not implemented yet.');
		        }
		    }, {
		        key: 'multiply',
		        value: function multiply(other) {
		            return new _DOMMatrix2['default'](this).multiplySelf(other);
		        }
		    }, {
		        key: 'flipX',
		        value: function flipX() {
		            throw new Error('flipX is not implemented yet.');
		        }
		    }, {
		        key: 'flipY',
		        value: function flipY() {
		            throw new Error('flipY is not implemented yet.');
		        }
		    }, {
		        key: 'inverse',
		        value: function inverse() {
		            throw new Error('inverse is not implemented yet.');
		        }
		    }, {
		        key: 'transformPoint',
		        value: function transformPoint( /*optional DOMPointInit*/point) {
		            throw new Error('transformPoint is not implemented yet.');
		        }
		    }, {
		        key: 'toFloat32Array',
		        value: function toFloat32Array() {
		            throw new Error('toFloat32Array is not implemented yet.');
		        }
		    }, {
		        key: 'toFloat64Array',
		        value: function toFloat64Array() {
		            throw new Error('toFloat64Array is not implemented yet.');
		        }
		
		        //stringifier() {} // What's this?
		
		    }, {
		        key: 'is2D',
		        get: function get() {
		            return this._is2D;
		        }
		
		        /*
		         * TODO: make sure this matches the spec.
		         * TODO: Instead of calculating here, perhaps calculate and set
		         * this._isIdentity in other operations, and simply return the internal one
		         * here.
		         */
		    }, {
		        key: 'isIdentity',
		        get: function get() {
		            var identity = [
		            /*m11*/1, /*m21*/0, /*m31*/0, /*m41*/0,
		            /*m12*/0, /*m22*/1, /*m32*/0, /*m42*/0,
		            /*m13*/0, /*m23*/0, /*m33*/1, /*m43*/0,
		            /*m14*/0, /*m24*/0, /*m34*/0, /*m44*/1];
		
		            this._isIdentity = true;
		
		            for (var i = 0, len = this._matrix.length; i < len; i += 1) {
		                if (this._matrix[i] != identity[i]) this._isIdentity = false;
		            }
		
		            return this._isIdentity;
		        }
		    }, {
		        key: 'a',
		        get: function get() {
		            return this.m11;
		        }
		    }, {
		        key: 'b',
		        get: function get() {
		            return this.m12;
		        }
		    }, {
		        key: 'c',
		        get: function get() {
		            return this.m21;
		        }
		    }, {
		        key: 'd',
		        get: function get() {
		            return this.m22;
		        }
		    }, {
		        key: 'e',
		        get: function get() {
		            return this.m41;
		        }
		    }, {
		        key: 'f',
		        get: function get() {
		            return this.m42;
		        }
		    }, {
		        key: 'm11',
		        get: function get() {
		            return this._matrix[0];
		        }
		    }, {
		        key: 'm12',
		        get: function get() {
		            return this._matrix[4];
		        }
		    }, {
		        key: 'm13',
		        get: function get() {
		            return this._matrix[8];
		        }
		    }, {
		        key: 'm14',
		        get: function get() {
		            return this._matrix[12];
		        }
		    }, {
		        key: 'm21',
		        get: function get() {
		            return this._matrix[1];
		        }
		    }, {
		        key: 'm22',
		        get: function get() {
		            return this._matrix[5];
		        }
		    }, {
		        key: 'm23',
		        get: function get() {
		            return this._matrix[9];
		        }
		    }, {
		        key: 'm24',
		        get: function get() {
		            return this._matrix[13];
		        }
		    }, {
		        key: 'm31',
		        get: function get() {
		            return this._matrix[2];
		        }
		    }, {
		        key: 'm32',
		        get: function get() {
		            return this._matrix[6];
		        }
		    }, {
		        key: 'm33',
		        get: function get() {
		            return this._matrix[10];
		        }
		    }, {
		        key: 'm34',
		        get: function get() {
		            return this._matrix[14];
		        }
		    }, {
		        key: 'm41',
		        get: function get() {
		            return this._matrix[3];
		        }
		    }, {
		        key: 'm42',
		        get: function get() {
		            return this._matrix[7];
		        }
		    }, {
		        key: 'm43',
		        get: function get() {
		            return this._matrix[11];
		        }
		    }, {
		        key: 'm44',
		        get: function get() {
		            return this._matrix[15];
		        }
		    }]);
		
		    return DOMMatrixReadOnly;
		})();
		
		exports['default'] = DOMMatrixReadOnly;
		module.exports = exports['default'];
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.multiplyToArray = multiplyToArray;
		exports.applyArrayValuesToDOMMatrix = applyArrayValuesToDOMMatrix;
		exports.matrixToArray = matrixToArray;
		exports.rotateAxisAngleArray = rotateAxisAngleArray;
		
		function multiplyToArray(A, B) {
		
		    //XXX: Are the following calculations faster hard coded (current), or as a loop?
		
		    var m11 = A.m11 * B.m11 + A.m21 * B.m12 + A.m31 * B.m13 + A.m41 * B.m14;
		    var m21 = A.m11 * B.m21 + A.m21 * B.m22 + A.m31 * B.m23 + A.m41 * B.m24;
		    var m31 = A.m11 * B.m31 + A.m21 * B.m32 + A.m31 * B.m33 + A.m41 * B.m34;
		    var m41 = A.m11 * B.m41 + A.m21 * B.m42 + A.m31 * B.m43 + A.m41 * B.m44;
		
		    var m12 = A.m12 * B.m11 + A.m22 * B.m12 + A.m32 * B.m13 + A.m42 * B.m14;
		    var m22 = A.m12 * B.m21 + A.m22 * B.m22 + A.m32 * B.m23 + A.m42 * B.m24;
		    var m32 = A.m12 * B.m31 + A.m22 * B.m32 + A.m32 * B.m33 + A.m42 * B.m34;
		    var m42 = A.m12 * B.m41 + A.m22 * B.m42 + A.m32 * B.m43 + A.m42 * B.m44;
		
		    var m13 = A.m13 * B.m11 + A.m23 * B.m12 + A.m33 * B.m13 + A.m43 * B.m14;
		    var m23 = A.m13 * B.m21 + A.m23 * B.m22 + A.m33 * B.m23 + A.m43 * B.m24;
		    var m33 = A.m13 * B.m31 + A.m23 * B.m32 + A.m33 * B.m33 + A.m43 * B.m34;
		    var m43 = A.m13 * B.m41 + A.m23 * B.m42 + A.m33 * B.m43 + A.m43 * B.m44;
		
		    var m14 = A.m14 * B.m11 + A.m24 * B.m12 + A.m34 * B.m13 + A.m44 * B.m14;
		    var m24 = A.m14 * B.m21 + A.m24 * B.m22 + A.m34 * B.m23 + A.m44 * B.m24;
		    var m34 = A.m14 * B.m31 + A.m24 * B.m32 + A.m34 * B.m33 + A.m44 * B.m34;
		    var m44 = A.m14 * B.m41 + A.m24 * B.m42 + A.m34 * B.m43 + A.m44 * B.m44;
		
		    // in column-major order:
		    var resultArray = [m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44];
		
		    return resultArray;
		}
		
		function applyArrayValuesToDOMMatrix(array, matrix) {
		    var length = array.length;
		
		    if (length === 6) {
		        matrix.m11 = array[0];
		        matrix.m12 = array[1];
		        matrix.m21 = array[2];
		        matrix.m22 = array[3];
		        matrix.m41 = array[4];
		        matrix.m42 = array[5];
		    } else if (length === 16) {
		        matrix.m11 = array[0];
		        matrix.m12 = array[1];
		        matrix.m13 = array[2];
		        matrix.m14 = array[3];
		        matrix.m21 = array[4];
		        matrix.m22 = array[5];
		        matrix.m23 = array[6];
		        matrix.m24 = array[7];
		        matrix.m31 = array[8];
		        matrix.m32 = array[9];
		        matrix.m33 = array[10];
		        matrix.m34 = array[11];
		        matrix.m41 = array[12];
		        matrix.m42 = array[13];
		        matrix.m43 = array[14];
		        matrix.m44 = array[15];
		    }
		}
		
		function matrixToArray(matrix) {
		    var result = null;
		
		    if (matrix.is2D) {
		        result = [matrix.m11, matrix.m12, matrix.m21, matrix.m22, matrix.m41, matrix.m42];
		    } else {
		        result = [matrix.m11, matrix.m12, matrix.m13, matrix.m14, matrix.m21, matrix.m22, matrix.m23, matrix.m24, matrix.m31, matrix.m32, matrix.m33, matrix.m34, matrix.m41, matrix.m42, matrix.m43, matrix.m44];
		    }
		
		    return result;
		}
		
		function rotateAxisAngleArray(x, y, z, angle) {
		    var sin = Math.sin;
		    var cos = Math.cos;
		    var pow = Math.pow;
		
		    var halfAngle = degreesToRadians(angle / 2);
		
		    // TODO: should we provide a 6-item array here to signify 2D when the
		    // rotation is about the Z axis (for example when calling rotateSelf)?
		    // TODO: Performance can be improved by first detecting when x, y, or z of
		    // the axis are zero or 1, and using a pre-simplified version of the
		    // folowing math based on that condition.
		    // TODO: Performance can be improved by using different equations (use trig
		    // identities to find alternate formulas).
		    return [1 - 2 * (y * y + z * z) * pow(sin(halfAngle), 2), 2 * (x * y * pow(sin(halfAngle), 2) + z * sin(halfAngle) * cos(halfAngle)), 2 * (x * z * pow(sin(halfAngle), 2) - y * sin(halfAngle) * cos(halfAngle)), 0, 2 * (x * y * pow(sin(halfAngle), 2) - z * sin(halfAngle) * cos(halfAngle)), 1 - 2 * (x * x + z * z) * pow(sin(halfAngle), 2), 2 * (y * z * pow(sin(halfAngle), 2) + x * sin(halfAngle) * cos(halfAngle)), 0, 2 * (x * z * pow(sin(halfAngle), 2) + y * sin(halfAngle) * cos(halfAngle)), 2 * (y * z * pow(sin(halfAngle), 2) - x * sin(halfAngle) * cos(halfAngle)), 1 - 2 * (x * x + y * y) * pow(sin(halfAngle), 2), 0, 0, 0, 0, 1];
		}
		
		function degreesToRadians(degrees) {
		    return Math.PI / 180 * degrees;
		}
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=global.js.map

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _XYZValues = __webpack_require__(368);
	
	var _XYZValues2 = _interopRequireDefault(_XYZValues);
	
	var _Sizeable = __webpack_require__(440);
	
	var _Sizeable2 = _interopRequireDefault(_Sizeable);
	
	var _Utility = __webpack_require__(369);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var instanceofSymbol = Symbol('instanceofSymbol');
	
	var TransformableMixin = function TransformableMixin(base) {
	
	    // Transformable extends TreeNode (indirectly through Sizeable) because it
	    // needs to be aware of its _parent when calculating align adjustments.
	    var Transformable = function (_Sizeable$mixin) {
	        _inherits(Transformable, _Sizeable$mixin);
	
	        function Transformable() {
	            _classCallCheck(this, Transformable);
	
	            return _possibleConstructorReturn(this, (Transformable.__proto__ || Object.getPrototypeOf(Transformable)).apply(this, arguments));
	        }
	
	        _createClass(Transformable, [{
	            key: '_setDefaultProperties',
	            value: function _setDefaultProperties() {
	                _get(Transformable.prototype.__proto__ || Object.getPrototypeOf(Transformable.prototype), '_setDefaultProperties', this).call(this);
	
	                Object.assign(this._properties, {
	                    position: new _XYZValues2.default(0, 0, 0),
	                    rotation: new _XYZValues2.default(0, 0, 0),
	                    scale: new _XYZValues2.default(1, 1, 1),
	                    origin: new _XYZValues2.default(0.5, 0.5, 0.5),
	                    align: new _XYZValues2.default(0, 0, 0),
	                    mountPoint: new _XYZValues2.default(0, 0, 0),
	                    opacity: 1,
	                    transform: new window.DOMMatrix()
	                });
	            }
	        }, {
	            key: '_setPropertyObservers',
	            value: function _setPropertyObservers() {
	                var _this2 = this;
	
	                _get(Transformable.prototype.__proto__ || Object.getPrototypeOf(Transformable.prototype), '_setPropertyObservers', this).call(this);
	
	                this._properties.position.on('valuechanged', function () {
	                    return _this2.triggerEvent('propertychange', 'position');
	                });
	                this._properties.rotation.on('valuechanged', function () {
	                    return _this2.triggerEvent('propertychange', 'rotation');
	                });
	                this._properties.scale.on('valuechanged', function () {
	                    return _this2.triggerEvent('propertychange', 'scale');
	                });
	                this._properties.origin.on('valuechanged', function () {
	                    return _this2.triggerEvent('propertychange', 'origin');
	                });
	                this._properties.align.on('valuechanged', function () {
	                    return _this2.triggerEvent('propertychange', 'align');
	                });
	                this._properties.mountPoint.on('valuechanged', function () {
	                    return _this2.triggerEvent('propertychange', 'mountPoint');
	                });
	            }
	
	            /**
	             * Set the position of the Transformable.
	             *
	             * @param {Object} newValue
	             * @param {number} [newValue.x] The x-axis position to apply.
	             * @param {number} [newValue.y] The y-axis position to apply.
	             * @param {number} [newValue.z] The z-axis position to apply.
	             */
	
	        }, {
	            key: '_calculateMatrix',
	
	            // no need for a properties getter.
	
	            /**
	             * Takes all the current component values (position, rotation, etc) and
	             * calculates a transformation DOMMatrix from them. See "W3C Geometry
	             * Interfaces" to learn about DOMMatrix.
	             *
	             * @method
	             * @private
	             * @memberOf Node
	             */
	            value: function _calculateMatrix() {
	                var matrix = new window.DOMMatrix();
	                var properties = this._properties;
	
	                var alignAdjustment = [0, 0, 0];
	                if (this._parent) {
	                    // The root Scene doesn't have a parent, for example.
	                    var parentSize = this._parent._calculatedSize;
	                    var align = properties.align;
	
	                    alignAdjustment[0] = parentSize.x * align.x;
	                    alignAdjustment[1] = parentSize.y * align.y;
	                    alignAdjustment[2] = parentSize.z * align.z;
	                }
	
	                var mountPointAdjustment = [0, 0, 0];
	                var thisSize = this._calculatedSize;
	                var mountPoint = properties.mountPoint;
	
	                mountPointAdjustment[0] = thisSize.x * mountPoint.x;
	                mountPointAdjustment[1] = thisSize.y * mountPoint.y;
	                mountPointAdjustment[2] = thisSize.z * mountPoint.z;
	
	                var appliedPosition = [];
	                var position = properties.position;
	
	                appliedPosition[0] = position.x + alignAdjustment[0] - mountPointAdjustment[0];
	                appliedPosition[1] = position.y + alignAdjustment[1] - mountPointAdjustment[1];
	                appliedPosition[2] = position.z + alignAdjustment[2] - mountPointAdjustment[2];
	
	                matrix.translateSelf(appliedPosition[0], appliedPosition[1], appliedPosition[2]);
	
	                // origin calculation will go here:
	                // - move by negative origin before rotating.
	
	                // apply each axis rotation, in the x,y,z order.
	                var rotation = properties.rotation;
	
	                matrix.rotateAxisAngleSelf(1, 0, 0, rotation.x);
	                matrix.rotateAxisAngleSelf(0, 1, 0, rotation.y);
	                matrix.rotateAxisAngleSelf(0, 0, 1, rotation.z);
	
	                // origin calculation will go here:
	                // - move by positive origin after rotating.
	
	                return matrix;
	            }
	        }, {
	            key: 'position',
	            set: function set(newValue) {
	                this._setPropertyXYZ(Transformable, 'position', newValue);
	            },
	            get: function get() {
	                return this._properties.position;
	            }
	
	            /**
	             * @param {Object} newValue
	             * @param {number} [newValue.x] The x-axis rotation to apply.
	             * @param {number} [newValue.y] The y-axis rotation to apply.
	             * @param {number} [newValue.z] The z-axis rotation to apply.
	             */
	
	        }, {
	            key: 'rotation',
	            set: function set(newValue) {
	                this._setPropertyXYZ(Transformable, 'rotation', newValue);
	            },
	            get: function get() {
	                return this._properties.rotation;
	            }
	
	            /**
	             * @param {Object} newValue
	             * @param {number} [newValue.x] The x-axis scale to apply.
	             * @param {number} [newValue.y] The y-axis scale to apply.
	             * @param {number} [newValue.z] The z-axis scale to apply.
	             */
	
	        }, {
	            key: 'scale',
	            set: function set(newValue) {
	                this._setPropertyXYZ(Transformable, 'scale', newValue);
	            },
	            get: function get() {
	                return this._properties.scale;
	            }
	
	            /**
	             * Set this Node's opacity.
	             *
	             * @param {number} opacity A floating point number between 0 and 1
	             * (inclusive). 0 is fully transparent, 1 is fully opaque.
	             */
	
	        }, {
	            key: 'opacity',
	            set: function set(newValue) {
	                if (!isRealNumber(newValue)) newValue = undefined;
	                this._setPropertySingle(Transformable, 'opacity', newValue, 'number');
	            },
	            get: function get() {
	                return this._properties.opacity;
	            }
	
	            /**
	             * Set the alignment of the Node. This determines at which point in this
	             * Node's parent that this Node is mounted.
	             *
	             * @param {Object} newValue
	             * @param {number} [newValue.x] The x-axis align to apply.
	             * @param {number} [newValue.y] The y-axis align to apply.
	             * @param {number} [newValue.z] The z-axis align to apply.
	             */
	
	        }, {
	            key: 'align',
	            set: function set(newValue) {
	                this._setPropertyXYZ(Transformable, 'align', newValue);
	            },
	            get: function get() {
	                return this._properties.align;
	            }
	
	            /**
	             * Set the mount point of the Node.
	             *
	             * @param {Object} newValue
	             * @param {number} [newValue.x] The x-axis mountPoint to apply.
	             * @param {number} [newValue.y] The y-axis mountPoint to apply.
	             * @param {number} [newValue.z] The z-axis mountPoint to apply.
	             */
	
	        }, {
	            key: 'mountPoint',
	            set: function set(newValue) {
	                this._setPropertyXYZ(Transformable, 'mountPoint', newValue);
	            },
	            get: function get() {
	                return this._properties.mountPoint;
	            }
	
	            /**
	             * Set all properties of a Transformable in one method.
	             *
	             * @param {Object} properties Properties object - see example.
	             *
	             * @example
	             * node.properties = {
	             *   position: {x:200, y:300, z:100},
	             *   rotation: {z:35},
	             *   scale: {y:2},
	             *   opacity: .9,
	             * }
	             */
	
	        }, {
	            key: 'properties',
	            set: function set() {
	                var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	                _set(Transformable.prototype.__proto__ || Object.getPrototypeOf(Transformable.prototype), 'properties', properties, this);
	
	                if (properties.position) this.position = properties.position;
	
	                if (properties.rotation) this.rotation = properties.rotation;
	
	                if (properties.scale) this.scale = properties.scale;
	
	                if (properties.origin) this.origin = properties.origin;
	
	                if (properties.align) this.align = properties.align;
	
	                if (properties.mountPoint) this.mountPoint = properties.mountPoint;
	
	                if (properties.opacity) this.opacity = properties.opacity;
	            }
	        }]);
	
	        return Transformable;
	    }(_Sizeable2.default.mixin(base));
	
	    Object.defineProperty(Transformable, Symbol.hasInstance, {
	        value: function value(obj) {
	            if (this !== Transformable) return Object.getPrototypeOf(Transformable)[Symbol.hasInstance].call(this, obj);
	
	            var currentProto = obj;
	
	            while (currentProto) {
	                var desc = Object.getOwnPropertyDescriptor(currentProto, "constructor");
	
	                if (desc && desc.value && desc.value.hasOwnProperty(instanceofSymbol)) return true;
	
	                currentProto = Object.getPrototypeOf(currentProto);
	            }
	
	            return false;
	        }
	    });
	
	    Transformable[instanceofSymbol] = true;
	
	    // for use by MotorHTML, convenient since HTMLElement attributes are all
	    // converted to lowercase by default, so if we don't do this then we won't be
	    // able to map attributes to Node setters as easily.
	    (0, _Utility.makeLowercaseSetterAliases)(Transformable.prototype);
	
	    // So Tween.js can animate Transformable properties that are accessors.
	    // Note, this makes all accessors enumerable even though we don't need to
	    // animate them all, but it's not a big deal.
	    (0, _Utility.makeAccessorsEnumerable)(Transformable.prototype);
	
	    return Transformable;
	};
	
	function isRealNumber(num) {
	    if (typeof num != 'number' || Object.is(num, NaN) || Object.is(num, Infinity)) return false;
	    return true;
	}
	
	var Transformable = TransformableMixin(function () {
	    function _class() {
	        _classCallCheck(this, _class);
	    }
	
	    return _class;
	}());
	Transformable.mixin = TransformableMixin;
	
	exports.default = Transformable;

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Utility = __webpack_require__(369);
	
	var _Observable2 = __webpack_require__(439);
	
	var _Observable3 = _interopRequireDefault(_Observable2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Represents a set of values for the X, Y, and Z axes. For example, the
	 * position of an object can be described using a set of 3 numbers, one for each
	 * axis in 3D space: {x:10, y:10, z:10}.
	 *
	 * The value don't have to be numerical. For example,
	 * {x:'foo', y:'bar', z:'baz'}
	 */
	var XYZValues = function (_Observable) {
	    _inherits(XYZValues, _Observable);
	
	    function XYZValues() {
	        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	        _classCallCheck(this, XYZValues);
	
	        var _this = _possibleConstructorReturn(this, (XYZValues.__proto__ || Object.getPrototypeOf(XYZValues)).call(this));
	
	        _this._x = x;
	        _this._y = y;
	        _this._z = z;
	        return _this;
	    }
	
	    _createClass(XYZValues, [{
	        key: 'x',
	        set: function set(value) {
	            this._x = value;
	            this.triggerEvent('valuechanged', { x: value });
	        },
	        get: function get() {
	            return this._x;
	        }
	    }, {
	        key: 'y',
	        set: function set(value) {
	            this._y = value;
	            this.triggerEvent('valuechanged', { y: value });
	        },
	        get: function get() {
	            return this._y;
	        }
	    }, {
	        key: 'z',
	        set: function set(value) {
	            this._z = value;
	            this.triggerEvent('valuechanged', { z: value });
	        },
	        get: function get() {
	            return this._z;
	        }
	    }]);
	
	    return XYZValues;
	}(_Observable3.default);
	
	// So Tween.js can animate x, y, z
	
	
	(0, _Utility.makeAccessorsEnumerable)(XYZValues.prototype);
	
	exports.default = XYZValues;

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.traverse = exports.getAncestorShadowRoot = exports.hasShadowDomV1 = exports.hasShadowDomV0 = exports.getShadowRootVersion = exports.observeChildren = exports.makeAccessorsEnumerable = exports.makeLowercaseSetterAliases = exports.animationFrame = exports.getBodySize = exports.applyCSSLabel = exports.epsilon = undefined;
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	/**
	 * Get the dimensions of the body element.
	 * @async
	 * @return {Object} An object containing `width` and `height` properties.
	 */
	var getBodySize = function () {
	    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	        var body, width, height;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        _context.next = 2;
	                        return (0, _windowLoaded2.default)();
	
	                    case 2:
	                        body = document.body;
	                        width = window.parseInt(window.getComputedStyle(body).getPropertyValue('width'));
	                        height = window.parseInt(window.getComputedStyle(body).getPropertyValue('height'));
	                        return _context.abrupt('return', { width: width, height: height });
	
	                    case 6:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	
	    return function getBodySize() {
	        return _ref.apply(this, arguments);
	    };
	}();
	
	var _windowLoaded = __webpack_require__(370);
	
	var _windowLoaded2 = _interopRequireDefault(_windowLoaded);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function epsilon(value) {
	    return Math.abs(value) < 0.000001 ? 0 : value;
	}
	
	function applyCSSLabel(value, label) {
	    if (value === 0) {
	        return '0px';
	    } else if (label === '%') {
	        return value * 100 + '%';
	    } else if (label === 'px') {
	        return value + 'px';
	    }
	}
	
	function animationFrame() {
	    var resolve = null;
	    var promise = new Promise(function (r) {
	        return resolve = r;
	    });
	    window.requestAnimationFrame(resolve);
	    return promise;
	}
	
	// Create lowercase versions of each setter property.
	function makeLowercaseSetterAliases(object) {
	    var props = Object.getOwnPropertyNames(object);
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = props[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var prop = _step.value;
	
	            var lowercaseProp = prop.toLowerCase();
	            if (lowercaseProp != prop) {
	                var descriptor = Object.getOwnPropertyDescriptor(object, prop);
	                if (Object.getOwnPropertyNames(descriptor).indexOf('set') >= 0) {
	                    // we care only about the setters.
	                    Object.defineProperty(object, lowercaseProp, descriptor);
	                }
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	}
	
	function makeAccessorsEnumerable(object) {
	    var props = Object.getOwnPropertyNames(object);
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	        for (var _iterator2 = props[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var prop = _step2.value;
	
	            var descriptor = Object.getOwnPropertyDescriptor(object, prop);
	            if (descriptor && (descriptor.set || descriptor.get)) {
	                descriptor.enumerable = true;
	                Object.defineProperty(object, prop, descriptor);
	            }
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }
	}
	
	// NOTE: If a child is disconnected then connected to the same parent in the
	// same turn, then the onConnect and onDisconnect callbacks won't be called
	// because the DOM tree will be back in the exact state as before.
	var childObservationHandlers = null;
	var childObserver = null;
	function observeChildren(ctx, onConnect, onDisconnect) {
	    if (!childObservationHandlers) childObservationHandlers = new Map();
	    if (!childObserver) childObserver = createChildObserver();
	    childObservationHandlers.set(ctx, { onConnect: onConnect, onDisconnect: onDisconnect });
	    childObserver.observe(ctx, { childList: true });
	    return true;
	}
	function createChildObserver() {
	    var _this = this;
	
	    return new MutationObserver(function () {
	        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(changes) {
	            var weightsPerTarget, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, change, weights, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, addedNode, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, removedNode, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _step4$value, target, _weights, _childObservationHand, onConnect, onDisconnect, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _step7$value, node, weight;
	
	            return regeneratorRuntime.wrap(function _callee2$(_context2) {
	                while (1) {
	                    switch (_context2.prev = _context2.next) {
	                        case 0:
	                            weightsPerTarget = new Map();
	                            _iteratorNormalCompletion3 = true;
	                            _didIteratorError3 = false;
	                            _iteratorError3 = undefined;
	                            _context2.prev = 4;
	                            _iterator3 = changes[Symbol.iterator]();
	
	                        case 6:
	                            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
	                                _context2.next = 53;
	                                break;
	                            }
	
	                            change = _step3.value;
	
	                            if (!(change.type != 'childList')) {
	                                _context2.next = 10;
	                                break;
	                            }
	
	                            return _context2.abrupt('continue', 50);
	
	                        case 10:
	
	                            if (!weightsPerTarget.has(change.target)) weightsPerTarget.set(change.target, new Map());
	
	                            weights = weightsPerTarget.get(change.target);
	                            _iteratorNormalCompletion5 = true;
	                            _didIteratorError5 = false;
	                            _iteratorError5 = undefined;
	                            _context2.prev = 15;
	
	
	                            for (_iterator5 = change.addedNodes[Symbol.iterator](); !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                                addedNode = _step5.value;
	
	                                weights.set(addedNode, (weights.get(addedNode) || 0) + 1);
	                            }_context2.next = 23;
	                            break;
	
	                        case 19:
	                            _context2.prev = 19;
	                            _context2.t0 = _context2['catch'](15);
	                            _didIteratorError5 = true;
	                            _iteratorError5 = _context2.t0;
	
	                        case 23:
	                            _context2.prev = 23;
	                            _context2.prev = 24;
	
	                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                                _iterator5.return();
	                            }
	
	                        case 26:
	                            _context2.prev = 26;
	
	                            if (!_didIteratorError5) {
	                                _context2.next = 29;
	                                break;
	                            }
	
	                            throw _iteratorError5;
	
	                        case 29:
	                            return _context2.finish(26);
	
	                        case 30:
	                            return _context2.finish(23);
	
	                        case 31:
	                            _iteratorNormalCompletion6 = true;
	                            _didIteratorError6 = false;
	                            _iteratorError6 = undefined;
	                            _context2.prev = 34;
	                            for (_iterator6 = change.removedNodes[Symbol.iterator](); !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                                removedNode = _step6.value;
	
	                                weights.set(removedNode, (weights.get(removedNode) || 0) - 1);
	                            }_context2.next = 42;
	                            break;
	
	                        case 38:
	                            _context2.prev = 38;
	                            _context2.t1 = _context2['catch'](34);
	                            _didIteratorError6 = true;
	                            _iteratorError6 = _context2.t1;
	
	                        case 42:
	                            _context2.prev = 42;
	                            _context2.prev = 43;
	
	                            if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                                _iterator6.return();
	                            }
	
	                        case 45:
	                            _context2.prev = 45;
	
	                            if (!_didIteratorError6) {
	                                _context2.next = 48;
	                                break;
	                            }
	
	                            throw _iteratorError6;
	
	                        case 48:
	                            return _context2.finish(45);
	
	                        case 49:
	                            return _context2.finish(42);
	
	                        case 50:
	                            _iteratorNormalCompletion3 = true;
	                            _context2.next = 6;
	                            break;
	
	                        case 53:
	                            _context2.next = 59;
	                            break;
	
	                        case 55:
	                            _context2.prev = 55;
	                            _context2.t2 = _context2['catch'](4);
	                            _didIteratorError3 = true;
	                            _iteratorError3 = _context2.t2;
	
	                        case 59:
	                            _context2.prev = 59;
	                            _context2.prev = 60;
	
	                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                                _iterator3.return();
	                            }
	
	                        case 62:
	                            _context2.prev = 62;
	
	                            if (!_didIteratorError3) {
	                                _context2.next = 65;
	                                break;
	                            }
	
	                            throw _iteratorError3;
	
	                        case 65:
	                            return _context2.finish(62);
	
	                        case 66:
	                            return _context2.finish(59);
	
	                        case 67:
	                            _iteratorNormalCompletion4 = true;
	                            _didIteratorError4 = false;
	                            _iteratorError4 = undefined;
	                            _context2.prev = 70;
	                            _iterator4 = weightsPerTarget[Symbol.iterator]();
	
	                        case 72:
	                            if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
	                                _context2.next = 97;
	                                break;
	                            }
	
	                            _step4$value = _slicedToArray(_step4.value, 2), target = _step4$value[0], _weights = _step4$value[1];
	                            _childObservationHand = childObservationHandlers.get(target), onConnect = _childObservationHand.onConnect, onDisconnect = _childObservationHand.onDisconnect;
	                            _iteratorNormalCompletion7 = true;
	                            _didIteratorError7 = false;
	                            _iteratorError7 = undefined;
	                            _context2.prev = 78;
	
	
	                            for (_iterator7 = _weights[Symbol.iterator](); !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                                _step7$value = _slicedToArray(_step7.value, 2), node = _step7$value[0], weight = _step7$value[1];
	
	                                if (weight > 0 && typeof onConnect == 'function') onConnect.call(target, node);else if (weight < 0 && typeof onDisconnect == 'function') onDisconnect.call(target, node);
	                            }
	                            _context2.next = 86;
	                            break;
	
	                        case 82:
	                            _context2.prev = 82;
	                            _context2.t3 = _context2['catch'](78);
	                            _didIteratorError7 = true;
	                            _iteratorError7 = _context2.t3;
	
	                        case 86:
	                            _context2.prev = 86;
	                            _context2.prev = 87;
	
	                            if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                                _iterator7.return();
	                            }
	
	                        case 89:
	                            _context2.prev = 89;
	
	                            if (!_didIteratorError7) {
	                                _context2.next = 92;
	                                break;
	                            }
	
	                            throw _iteratorError7;
	
	                        case 92:
	                            return _context2.finish(89);
	
	                        case 93:
	                            return _context2.finish(86);
	
	                        case 94:
	                            _iteratorNormalCompletion4 = true;
	                            _context2.next = 72;
	                            break;
	
	                        case 97:
	                            _context2.next = 103;
	                            break;
	
	                        case 99:
	                            _context2.prev = 99;
	                            _context2.t4 = _context2['catch'](70);
	                            _didIteratorError4 = true;
	                            _iteratorError4 = _context2.t4;
	
	                        case 103:
	                            _context2.prev = 103;
	                            _context2.prev = 104;
	
	                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                                _iterator4.return();
	                            }
	
	                        case 106:
	                            _context2.prev = 106;
	
	                            if (!_didIteratorError4) {
	                                _context2.next = 109;
	                                break;
	                            }
	
	                            throw _iteratorError4;
	
	                        case 109:
	                            return _context2.finish(106);
	
	                        case 110:
	                            return _context2.finish(103);
	
	                        case 111:
	                        case 'end':
	                            return _context2.stop();
	                    }
	                }
	            }, _callee2, _this, [[4, 55, 59, 67], [15, 19, 23, 31], [24,, 26, 30], [34, 38, 42, 50], [43,, 45, 49], [60,, 62, 66], [70, 99, 103, 111], [78, 82, 86, 94], [87,, 89, 93], [104,, 106, 110]]);
	        }));
	
	        return function (_x) {
	            return _ref2.apply(this, arguments);
	        };
	    }());
	}
	
	var hasShadowDomV0 = typeof Element.prototype.createShadowRoot == 'function' && typeof HTMLContentElement == 'function' ? true : false;
	
	var hasShadowDomV1 = typeof Element.prototype.attachShadow == 'function' && typeof HTMLSlotElement == 'function' ? true : false;
	
	function getShadowRootVersion(shadowRoot) {
	    console.log('getShadowRootVersion');
	    if (!shadowRoot) return null;
	    var slot = document.createElement('slot');
	    shadowRoot.appendChild(slot);
	    slot.appendChild(document.createElement('div'));
	    var assignedNodes = slot.assignedNodes({ flatten: true });
	    slot.remove();
	    console.log('hmm', assignedNodes.length, assignedNodes.length > 0 ? 'v1' : 'v0');
	    return assignedNodes.length > 0 ? 'v1' : 'v0';
	}
	
	function getAncestorShadowRoot(node) {
	    var current = node;
	
	    while (current && !(current instanceof ShadowRoot)) {
	        current = current.parentNode;
	    }
	
	    return current;
	}
	
	// in the future, the user will be able to toggle the HTML API.
	var hasHtmlApi = true;
	
	// Traverses a tree while considering ShadowDOM disribution.
	function traverse(node, isShadowChild) {
	    console.log(isShadowChild ? 'distributedNode:' : 'node:', node);
	
	    var _iteratorNormalCompletion8 = true;
	    var _didIteratorError8 = false;
	    var _iteratorError8 = undefined;
	
	    try {
	        for (var _iterator8 = node.children[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	            var child = _step8.value;
	
	            // skip nodes that are possiblyDistributed, i.e. they have a parent
	            // that has a ShadowRoot.
	            if (!hasHtmlApi || !child._elementManager.element._isPossiblyDistributed) traverse(child);
	        }
	    } catch (err) {
	        _didIteratorError8 = true;
	        _iteratorError8 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion8 && _iterator8.return) {
	                _iterator8.return();
	            }
	        } finally {
	            if (_didIteratorError8) {
	                throw _iteratorError8;
	            }
	        }
	    }
	
	    if (hasHtmlApi && node._elementManager.element._shadowChildren) {
	        var _iteratorNormalCompletion9 = true;
	        var _didIteratorError9 = false;
	        var _iteratorError9 = undefined;
	
	        try {
	            for (var _iterator9 = node._elementManager.element._shadowChildren[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	                var shadowChild = _step9.value;
	
	                traverse(shadowChild.imperativeCounterpart, true);
	            }
	        } catch (err) {
	            _didIteratorError9 = true;
	            _iteratorError9 = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion9 && _iterator9.return) {
	                    _iterator9.return();
	                }
	            } finally {
	                if (_didIteratorError9) {
	                    throw _iteratorError9;
	                }
	            }
	        }
	    }
	}
	
	exports.epsilon = epsilon;
	exports.applyCSSLabel = applyCSSLabel;
	exports.getBodySize = getBodySize;
	exports.animationFrame = animationFrame;
	exports.makeLowercaseSetterAliases = makeLowercaseSetterAliases;
	exports.makeAccessorsEnumerable = makeAccessorsEnumerable;
	exports.observeChildren = observeChildren;
	exports.getShadowRootVersion = getShadowRootVersion;
	exports.hasShadowDomV0 = hasShadowDomV0;
	exports.hasShadowDomV1 = hasShadowDomV1;
	exports.getAncestorShadowRoot = getAncestorShadowRoot;
	exports.traverse = traverse;

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _regenerator = __webpack_require__(371);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _promise = __webpack_require__(373);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _asyncToGenerator2 = __webpack_require__(438);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Await for this to run code after the DOM's sub-resources have been loaded
	 * (images, scripts, etc).
	 *
	 * @example
	 * ```js
	 * async function main() {
	 *     await windowLoaded()
	 *     console.log('Window loaded!')
	 * }
	 * main()
	 * ```
	 */
	
	exports.default = function () {
	    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	        return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        if (!(document.readyState !== 'complete')) {
	                            _context.next = 3;
	                            break;
	                        }
	
	                        _context.next = 3;
	                        return new _promise2.default(function (resolve) {
	                            window.addEventListener('load', resolve);
	                        });
	
	                    case 3:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	
	    function windowLoaded() {
	        return _ref.apply(this, arguments);
	    }
	
	    return windowLoaded;
	}();
	//# sourceMappingURL=windowLoaded.js.map

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(372);


/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(293);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(374), __esModule: true };

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(375);
	__webpack_require__(376);
	__webpack_require__(420);
	__webpack_require__(424);
	module.exports = __webpack_require__(384).Promise;

/***/ },
/* 375 */
/***/ function(module, exports) {



/***/ },
/* 376 */
[481, 377, 380],
/* 377 */
[482, 378, 379],
/* 378 */
38,
/* 379 */
35,
/* 380 */
[483, 381, 382, 397, 387, 398, 399, 400, 416, 418, 417],
/* 381 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(383)
	  , core      = __webpack_require__(384)
	  , ctx       = __webpack_require__(385)
	  , hide      = __webpack_require__(387)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 383 */
4,
/* 384 */
9,
/* 385 */
[463, 386],
/* 386 */
21,
/* 387 */
[457, 388, 396, 392],
/* 388 */
[458, 389, 391, 395, 392],
/* 389 */
[459, 390],
/* 390 */
13,
/* 391 */
[460, 392, 393, 394],
/* 392 */
[456, 393],
/* 393 */
7,
/* 394 */
[461, 390, 383],
/* 395 */
[462, 390],
/* 396 */
17,
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(387);

/***/ },
/* 398 */
5,
/* 399 */
129,
/* 400 */
[484, 401, 396, 416, 387, 417],
/* 401 */
[475, 389, 402, 414, 411, 394, 415],
/* 402 */
[476, 388, 389, 403, 392],
/* 403 */
[467, 404, 414],
/* 404 */
[468, 398, 405, 408, 411],
/* 405 */
[469, 406, 379],
/* 406 */
[470, 407],
/* 407 */
34,
/* 408 */
[471, 405, 409, 410],
/* 409 */
[472, 378],
/* 410 */
[473, 378],
/* 411 */
[474, 412, 413],
/* 412 */
[464, 383],
/* 413 */
19,
/* 414 */
41,
/* 415 */
[477, 383],
/* 416 */
[465, 388, 398, 417],
/* 417 */
[466, 412, 413, 383],
/* 418 */
[479, 398, 419, 411],
/* 419 */
[478, 379],
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(421);
	var global        = __webpack_require__(383)
	  , hide          = __webpack_require__(387)
	  , Iterators     = __webpack_require__(399)
	  , TO_STRING_TAG = __webpack_require__(417)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 421 */
[489, 422, 423, 399, 405, 380],
/* 422 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 423 */
194,
/* 424 */
[490, 381, 383, 385, 425, 382, 390, 386, 426, 427, 431, 432, 434, 417, 435, 416, 436, 384, 437],
/* 425 */
[480, 407, 417],
/* 426 */
205,
/* 427 */
[491, 385, 428, 429, 389, 409, 430],
/* 428 */
[485, 389],
/* 429 */
[486, 399, 417],
/* 430 */
[487, 425, 417, 399, 384],
/* 431 */
[492, 389, 386, 417],
/* 432 */
[493, 385, 433, 415, 394, 383, 407],
/* 433 */
78,
/* 434 */
[494, 383, 432, 407],
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(387);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(383)
	  , core        = __webpack_require__(384)
	  , dP          = __webpack_require__(388)
	  , DESCRIPTORS = __webpack_require__(392)
	  , SPECIES     = __webpack_require__(417)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 437 */
[488, 417],
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _promise = __webpack_require__(373);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (fn) {
	  return function () {
	    var gen = fn.apply(this, arguments);
	    return new _promise2.default(function (resolve, reject) {
	      function step(key, arg) {
	        try {
	          var info = gen[key](arg);
	          var value = info.value;
	        } catch (error) {
	          reject(error);
	          return;
	        }
	
	        if (info.done) {
	          resolve(value);
	        } else {
	          return _promise2.default.resolve(value).then(function (value) {
	            step("next", value);
	          }, function (err) {
	            step("throw", err);
	          });
	        }
	      }
	
	      return step("next");
	    });
	  };
	};

/***/ },
/* 439 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var instanceofSymbol = Symbol('instanceofSymbol');
	
	var ObservableMixin = function ObservableMixin(base) {
	    var Observable = function (_base) {
	        _inherits(Observable, _base);
	
	        function Observable() {
	            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            _classCallCheck(this, Observable);
	
	            return _possibleConstructorReturn(this, (Observable.__proto__ || Object.getPrototypeOf(Observable)).call(this, options));
	        }
	
	        _createClass(Observable, [{
	            key: 'on',
	            value: function on(eventName, callback) {
	                if (!this._eventMap) this._eventMap = new Map();
	
	                if (!this._eventMap.has(eventName)) this._eventMap.set(eventName, []);
	
	                if (typeof callback == 'function') this._eventMap.get(eventName).push(callback);else throw new Error('Expected a function in callback argument of Observable#on.');
	            }
	        }, {
	            key: 'off',
	            value: function off(eventName, callback) {
	                if (!this._eventMap || !this._eventMap.has(eventName)) return;
	
	                var callbacks = this._eventMap.get(eventName);
	
	                if (callbacks.indexOf(callback) === -1) return;
	
	                callbacks.splice(callbacks.indexOf(callback), 1);
	
	                if (callbacks.length === 0) this._eventMap.delete(eventName);
	
	                if (this._eventMap.size === 0) this._eventMap = null;
	            }
	        }, {
	            key: 'triggerEvent',
	            value: function triggerEvent(eventName, data) {
	                if (!this._eventMap || !this._eventMap.has(eventName)) return;
	
	                var callbacks = this._eventMap.get(eventName);
	
	                for (var i = 0, len = callbacks.length; i < len; i += 1) {
	                    callbacks[i](data);
	                }
	            }
	        }]);
	
	        return Observable;
	    }(base);
	
	    Object.defineProperty(Observable, Symbol.hasInstance, {
	        value: function value(obj) {
	            if (this !== Observable) return Object.getPrototypeOf(Observable)[Symbol.hasInstance].call(this, obj);
	
	            var currentProto = obj;
	
	            while (currentProto) {
	                var desc = Object.getOwnPropertyDescriptor(currentProto, "constructor");
	
	                if (desc && desc.value && desc.value.hasOwnProperty(instanceofSymbol)) return true;
	
	                currentProto = Object.getPrototypeOf(currentProto);
	            }
	
	            return false;
	        }
	    });
	
	    Observable[instanceofSymbol] = true;
	
	    return Observable;
	};
	
	var Observable = ObservableMixin(function () {
	    function _class() {
	        _classCallCheck(this, _class);
	    }
	
	    return _class;
	}());
	Observable.mixin = ObservableMixin;
	
	exports.default = Observable;

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Utility = __webpack_require__(369);
	
	var _TreeNode = __webpack_require__(441);
	
	var _TreeNode2 = _interopRequireDefault(_TreeNode);
	
	var _XYZValues = __webpack_require__(368);
	
	var _XYZValues2 = _interopRequireDefault(_XYZValues);
	
	var _Observable = __webpack_require__(439);
	
	var _Observable2 = _interopRequireDefault(_Observable);
	
	var _Motor = __webpack_require__(442);
	
	var _Motor2 = _interopRequireDefault(_Motor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// fallback to experimental CSS transform if browser doesn't have it (fix for Safari 9)
	if (typeof document.createElement('div').style.transform == 'undefined') {
	    Object.defineProperty(CSSStyleDeclaration.prototype, 'transform', {
	        set: function set(value) {
	            this.webkitTransform = value;
	        },
	        get: function get() {
	            return this.webkitTransform;
	        },
	
	        enumerable: true
	    });
	}
	
	var instanceofSymbol = Symbol('instanceofSymbol');
	
	var SizeableMixin = function SizeableMixin(base) {
	
	    // Sizeable extends TreeNode because Sizeable knows about its _parent when
	    // calculating proportionalSize.
	    var Sizeable = function (_TreeNode$mixin) {
	        _inherits(Sizeable, _TreeNode$mixin);
	
	        function Sizeable() {
	            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            _classCallCheck(this, Sizeable);
	
	            var _this = _possibleConstructorReturn(this, (Sizeable.__proto__ || Object.getPrototypeOf(Sizeable)).call(this, options));
	
	            _this._propertyFunctions = null;
	            _this._calculatedSize = { x: 0, y: 0, z: 0 };
	            _this._properties = {};
	            _this._setDefaultProperties();
	            _this._setPropertyObservers();
	            _this.properties = options;
	            return _this;
	        }
	
	        _createClass(Sizeable, [{
	            key: '_setDefaultProperties',
	            value: function _setDefaultProperties() {
	                Object.assign(this._properties, {
	                    sizeMode: new _XYZValues2.default('absolute', 'absolute', 'absolute'),
	                    absoluteSize: new _XYZValues2.default(0, 0, 0),
	                    proportionalSize: new _XYZValues2.default(1, 1, 1)
	                });
	            }
	        }, {
	            key: '_setPropertyObservers',
	            value: function _setPropertyObservers() {
	                var _this2 = this;
	
	                this._properties.sizeMode.on('valuechanged', function () {
	                    return _this2.triggerEvent('propertychange', 'sizeMode');
	                });
	                this._properties.absoluteSize.on('valuechanged', function () {
	                    return _this2.triggerEvent('propertychange', 'absoluteSize');
	                });
	                this._properties.proportionalSize.on('valuechanged', function () {
	                    return _this2.triggerEvent('propertychange', 'proportionalSize');
	                });
	            }
	
	            /**
	             * Set the size mode for each axis. Possible size modes are "absolute" and "proportional".
	             *
	             * @param {Object} newValue
	             * @param {number} [newValue.x] The x-axis sizeMode to apply.
	             * @param {number} [newValue.y] The y-axis sizeMode to apply.
	             * @param {number} [newValue.z] The z-axis sizeMode to apply.
	             */
	
	        }, {
	            key: '_calcSize',
	            value: function _calcSize() {
	                var calculatedSize = this._calculatedSize;
	
	                var previousSize = _objectWithoutProperties(calculatedSize, []);
	
	                var props = this._properties;
	                var parentSize = this._getParentSize();
	
	                if (props.sizeMode._x == 'absolute') {
	                    calculatedSize.x = props.absoluteSize._x;
	                } else {
	                    // proportional
	                    calculatedSize.x = parentSize.x * props.proportionalSize._x;
	                }
	
	                if (props.sizeMode._y == 'absolute') {
	                    calculatedSize.y = props.absoluteSize._y;
	                } else {
	                    // proportional
	                    calculatedSize.y = parentSize.y * props.proportionalSize._y;
	                }
	
	                if (props.sizeMode._z == 'absolute') {
	                    calculatedSize.z = props.absoluteSize._z;
	                } else {
	                    // proportional
	                    calculatedSize.z = parentSize.z * props.proportionalSize._z;
	                }
	
	                if (previousSize.x !== calculatedSize.x || previousSize.y !== calculatedSize.y || previousSize.z !== calculatedSize.z) {
	                    this.triggerEvent('sizechange', Object.assign({}, calculatedSize));
	                }
	            }
	        }, {
	            key: '_getParentSize',
	            value: function _getParentSize() {
	                return this._parent ? this._parent._calculatedSize : { x: 0, y: 0, z: 0 };
	            }
	
	            /**
	             * @param {Object} newValue
	             * @param {number} [newValue.x] The x-axis absoluteSize to apply.
	             * @param {number} [newValue.y] The y-axis absoluteSize to apply.
	             * @param {number} [newValue.z] The z-axis absoluteSize to apply.
	             */
	
	        }, {
	            key: '_setPropertyXYZ',
	
	            // no need for a properties getter.
	
	            value: function _setPropertyXYZ(Class, name, newValue) {
	                var _this3 = this;
	
	                if (!(newValue instanceof Object || newValue instanceof Array || newValue instanceof Function)) {
	                    throw new TypeError('Invalid value for ' + Class.name + '#' + name + '.');
	                }
	
	                var change = false;
	
	                if (newValue instanceof Function) {
	                    // remove previous task if any.
	                    if (!this._propertyFunctions) this._propertyFunctions = new Map();
	
	                    if (this._propertyFunctions.has(name)) _Motor2.default.removeRenderTask(this._propertyFunctions.get(name));
	
	                    this._propertyFunctions.set(name, _Motor2.default.addRenderTask(function (time) {
	                        var result = newValue(_this3._properties[name]._x, _this3._properties[name]._y, _this3._properties[name]._z, time);
	
	                        if (result === false) {
	                            _this3._propertyFunctions.delete(name);
	                            return false;
	                        }
	
	                        _this3[name] = result;
	                    }));
	                } else if (newValue instanceof Array) {
	                    if (typeof newValue[0] != 'undefined') {
	                        this._properties[name]._x = newValue[0];change = true;
	                    }
	                    if (typeof newValue[1] != 'undefined') {
	                        this._properties[name]._y = newValue[1];change = true;
	                    }
	                    if (typeof newValue[2] != 'undefined') {
	                        this._properties[name]._z = newValue[2];change = true;
	                    }
	                } else {
	                    if (typeof newValue.x != 'undefined') {
	                        this._properties[name]._x = newValue.x;change = true;
	                    }
	                    if (typeof newValue.y != 'undefined') {
	                        this._properties[name]._y = newValue.y;change = true;
	                    }
	                    if (typeof newValue.z != 'undefined') {
	                        this._properties[name]._z = newValue.z;change = true;
	                    }
	                }
	
	                if (change) this.triggerEvent('propertychange', name);
	            }
	        }, {
	            key: '_setPropertySingle',
	            value: function _setPropertySingle(Class, name, newValue, type) {
	                var _this4 = this;
	
	                if (!((typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) == type || newValue instanceof Function)) throw new TypeError('Invalid value for ' + Class.name + '#' + name + '.');
	
	                if (newValue instanceof Function) {
	                    // remove previous task if any.
	                    _Motor2.default.addRenderTask(function (time) {
	                        var result = newValue(_this4._properties[name], time);
	
	                        if (result === false) return false;
	
	                        _this4[name] = result;
	                    });
	                } else {
	                    this._properties[name] = newValue;
	                    this.triggerEvent('propertychange', name);
	                }
	            }
	        }, {
	            key: 'sizeMode',
	            set: function set(newValue) {
	                this._setPropertyXYZ(Sizeable, 'sizeMode', newValue);
	            },
	            get: function get() {
	                return this._properties.sizeMode;
	            }
	        }, {
	            key: 'absoluteSize',
	            set: function set(newValue) {
	                this._setPropertyXYZ(Sizeable, 'absoluteSize', newValue);
	            },
	            get: function get() {
	                return this._properties.absoluteSize;
	            }
	
	            /**
	             * Get the actual size of the Node. This can be useful when size is
	             * proportional, as the actual size of the Node depends on the size of
	             * it's parent.
	             *
	             * @readonly
	             *
	             * @return {Array.number} An Oject with x, y, and z properties, each
	             * property representing the computed size of the x, y, and z axes
	             * respectively.
	             */
	
	        }, {
	            key: 'actualSize',
	            get: function get() {
	                var _calculatedSize = this._calculatedSize,
	                    x = _calculatedSize.x,
	                    y = _calculatedSize.y,
	                    z = _calculatedSize.z;
	
	                return { x: x, y: y, z: z };
	            }
	
	            /**
	             * Set the size of a Node proportional to the size of it's parent Node. The
	             * values are a real number between 0 and 1 inclusive where 0 means 0% of
	             * the parent size and 1 means 100% of the parent size.
	             *
	             * @param {Object} newValue
	             * @param {number} [newValue.x] The x-axis proportionalSize to apply.
	             * @param {number} [newValue.y] The y-axis proportionalSize to apply.
	             * @param {number} [newValue.z] The z-axis proportionalSize to apply.
	             */
	
	        }, {
	            key: 'proportionalSize',
	            set: function set(newValue) {
	                this._setPropertyXYZ(Sizeable, 'proportionalSize', newValue);
	            },
	            get: function get() {
	                return this._properties.proportionalSize;
	            }
	
	            /**
	             * Set all properties of a Sizeable in one method.
	             *
	             * @param {Object} properties Properties object - see example
	             *
	             * @example
	             * node.properties = {
	             *   sizeMode: {x:'absolute', y:'proportional', z:'absolute'},
	             *   absoluteSize: {x:300, y:100, z:200},
	             *   proportionalSize: {x:1, z:0.5}
	             * }
	             */
	
	        }, {
	            key: 'properties',
	            set: function set() {
	                var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	                if (properties.sizeMode) this.sizeMode = properties.sizeMode;
	
	                if (properties.absoluteSize) this.absoluteSize = properties.absoluteSize;
	
	                if (properties.proportionalSize) this.proportionalSize = properties.proportionalSize;
	            }
	        }]);
	
	        return Sizeable;
	    }(_TreeNode2.default.mixin(_Observable2.default.mixin(base)));
	
	    Object.defineProperty(Sizeable, Symbol.hasInstance, {
	        value: function value(obj) {
	            if (this !== Sizeable) return Object.getPrototypeOf(Sizeable)[Symbol.hasInstance].call(this, obj);
	
	            var currentProto = obj;
	
	            while (currentProto) {
	                var desc = Object.getOwnPropertyDescriptor(currentProto, "constructor");
	
	                if (desc && desc.value && desc.value.hasOwnProperty(instanceofSymbol)) return true;
	
	                currentProto = Object.getPrototypeOf(currentProto);
	            }
	
	            return false;
	        }
	    });
	
	    Sizeable[instanceofSymbol] = true;
	
	    // for use by MotorHTML, convenient since HTMLElement attributes are all
	    // converted to lowercase by default, so if we don't do this then we won't be
	    // able to map attributes to Node setters as easily.
	    (0, _Utility.makeLowercaseSetterAliases)(Sizeable.prototype);
	
	    (0, _Utility.makeAccessorsEnumerable)(Sizeable.prototype);
	
	    return Sizeable;
	};
	
	var Sizeable = SizeableMixin(function () {
	    function _class() {
	        _classCallCheck(this, _class);
	    }
	
	    return _class;
	}());
	Sizeable.mixin = SizeableMixin;
	
	exports.default = Sizeable;

/***/ },
/* 441 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var instanceofSymbol = Symbol('instanceofSymbol');
	
	var TreeNodeMixin = function TreeNodeMixin(base) {
	    var TreeNode = function (_base) {
	        _inherits(TreeNode, _base);
	
	        function TreeNode() {
	            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            _classCallCheck(this, TreeNode);
	
	            var _this = _possibleConstructorReturn(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, options));
	
	            _this._parent = null; // default to no parent.
	            _this._children = [];
	            return _this;
	        }
	
	        /**
	         * this._parent is protected (node's can access other node._parent).
	         * The user should use the addChild methods, which automatically handles
	         * setting a parent.
	         *
	         * @readonly
	         */
	
	
	        _createClass(TreeNode, [{
	            key: 'addChild',
	
	
	            /**
	             * Add a child node to this TreeNode.
	             *
	             * @param {TreeNode} childNode The child node to add.
	             */
	            value: function addChild(childNode) {
	
	                if (!(childNode instanceof TreeNode)) throw new TypeError('TreeNode.addChild expects the childNode argument to be a TreeNode instance.');
	
	                if (childNode._parent === this) throw new ReferenceError('childNode is already a child of this parent.');
	
	                if (childNode._parent) childNode._parent.removeChild(childNode);
	
	                childNode._parent = this;
	
	                this._children.push(childNode);
	
	                return this;
	            }
	
	            /**
	             * Add all the child nodes in the given array to this node.
	             *
	             * @param {Array.TreeNode} nodes The nodes to add.
	             */
	
	        }, {
	            key: 'addChildren',
	            value: function addChildren(nodes) {
	                var _this2 = this;
	
	                nodes.forEach(function (node) {
	                    return _this2.addChild(node);
	                });
	                return this;
	            }
	
	            /**
	             * Remove a child node from this node.
	             *
	             * @param {TreeNode} childNode The node to remove.
	             */
	
	        }, {
	            key: 'removeChild',
	            value: function removeChild(childNode) {
	                if (!(childNode instanceof TreeNode)) throw new Error('\n                    TreeNode.removeChild expects the childNode argument to be an\n                    instance of TreeNode. There should only be TreeNodes in the\n                    tree.\n                ');
	
	                if (childNode._parent !== this) throw new ReferenceError('childNode is not a child of this parent.');
	
	                childNode._parent = null;
	                this._children.splice(this._children.indexOf(childNode), 1);
	
	                return this;
	            }
	
	            /**
	             * Remove all the child nodes in the given array from this node.
	             *
	             * @param {Array.TreeNode} nodes The nodes to remove.
	             */
	
	        }, {
	            key: 'removeChildren',
	            value: function removeChildren(nodes) {
	                var _this3 = this;
	
	                nodes.forEach(function (node) {
	                    return _this3.removeChild(node);
	                });
	                return this;
	            }
	
	            /**
	             * Shortcut to remove all children.
	             */
	
	        }, {
	            key: 'removeAllChildren',
	            value: function removeAllChildren() {
	                this.removeChildren(this._children);
	                return this;
	            }
	
	            /**
	             * @readonly
	             * @return {number} How many children this TreeNode has.
	             */
	
	        }, {
	            key: 'parent',
	            get: function get() {
	                return this._parent;
	            }
	
	            /**
	             * @readonly
	             */
	
	        }, {
	            key: 'children',
	            get: function get() {
	                // return a new array, so that the user modifying it doesn't affect
	                // this node's actual children.
	                return [].concat(_toConsumableArray(this._children));
	            }
	        }, {
	            key: 'childCount',
	            get: function get() {
	                return this._children.length;
	            }
	        }]);
	
	        return TreeNode;
	    }(base);
	
	    Object.defineProperty(TreeNode, Symbol.hasInstance, {
	        value: function value(obj) {
	            if (this !== TreeNode) return Object.getPrototypeOf(TreeNode)[Symbol.hasInstance].call(this, obj);
	
	            var currentProto = obj;
	
	            while (currentProto) {
	                var desc = Object.getOwnPropertyDescriptor(currentProto, "constructor");
	
	                if (desc && desc.value && desc.value.hasOwnProperty(instanceofSymbol)) return true;
	
	                currentProto = Object.getPrototypeOf(currentProto);
	            }
	
	            return false;
	        }
	    });
	
	    TreeNode[instanceofSymbol] = true;
	
	    return TreeNode;
	};
	
	var TreeNode = TreeNodeMixin(function () {
	    function _class() {
	        _classCallCheck(this, _class);
	    }
	
	    return _class;
	}());
	TreeNode.mixin = TreeNodeMixin;
	
	exports.default = TreeNode;

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _documentReady = __webpack_require__(443);
	
	var _documentReady2 = _interopRequireDefault(_documentReady);
	
	__webpack_require__(369);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var documentIsReady = false;
	
	var Motor = function () {
	    function Motor() {
	        _classCallCheck(this, Motor);
	
	        this._inFrame = false; // true when inside a requested animation frame.
	        this._rAF = null; // the current animation frame, or null.
	        this._animationLoopStarted = false;
	        this._allRenderTasks = new Set();
	        this._nodesToBeRendered = new Set();
	    }
	
	    /**
	     * Starts an rAF loop and runs the render tasks in the _renderTasks stack.
	     * As long as there are tasks in the stack, the loop continues. When the
	     * stack becomes empty due to removal of tasks, the rAF stops and the app
	     * sits there doing nothing -- silence, crickets.
	     */
	
	
	    _createClass(Motor, [{
	        key: '_startAnimationLoop',
	        value: function () {
	            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	                var _this = this;
	
	                var motorLoop;
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!this._animationLoopStarted) {
	                                    _context.next = 2;
	                                    break;
	                                }
	
	                                return _context.abrupt('return');
	
	                            case 2:
	
	                                this._animationLoopStarted = true;
	
	                                if (documentIsReady) {
	                                    _context.next = 7;
	                                    break;
	                                }
	
	                                _context.next = 6;
	                                return (0, _documentReady2.default)();
	
	                            case 6:
	                                documentIsReady = true;
	
	                            case 7:
	
	                                // DIRECT ANIMATION LOOP ///////////////////////////////////
	                                // So now we can render after the scene is mounted.
	                                motorLoop = function motorLoop(timestamp) {
	                                    _this._inFrame = true;
	
	                                    _this._runRenderTasks(timestamp);
	                                    _this._renderNodes(timestamp);
	
	                                    // If any tasks are left to run, continue the animation loop.
	                                    if (_this._allRenderTasks.size) _this._rAF = requestAnimationFrame(motorLoop);else {
	                                        _this._rAF = null;
	                                        _this._animationLoopStarted = false;
	                                    }
	
	                                    _this._inFrame = false;
	                                };
	
	                                this._rAF = requestAnimationFrame(motorLoop);
	
	                                // ANIMATION LOOP USING WHILE AND AWAIT ///////////////////////////////////
	                                //this._rAF = true
	                                //let timestamp = null
	                                //while (this._rAF) {
	                                //timestamp = await animationFrame()
	                                //this._inFrame = true
	
	                                //this._runRenderTasks(timestamp)
	                                //this._renderNodes(timestamp)
	
	                                //// If any tasks are left to run, continue the animation loop.
	                                //if (!this._allRenderTasks.size) {
	                                //this._rAF = null
	                                //this._animationLoopStarted = false
	                                //}
	
	                                //this._inFrame = false
	                                //}
	
	                            case 9:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	
	            function _startAnimationLoop() {
	                return _ref.apply(this, arguments);
	            }
	
	            return _startAnimationLoop;
	        }()
	
	        /**
	         * When a render tasks is added a new rAF loop will be started if there
	         * isn't one currently.
	         *
	         * A render task is simply a function that will be called over and over
	         * again, in the Motor's animation loop. That's all, nothing special.
	         * However, if a Node setter is used inside of a render task, then the Node
	         * will tell Motor that it needs to be re-rendered, which will happen at
	         * the end of the current frame. If a Node setter is used outside of a
	         * render task (i.e. outside of the Motor's animation loop), then the Node
	         * tells Motor to re-render the Node on the next animation loop tick.
	         * Basically, regardless of where the Node's setters are used (inside or
	         * outside of the Motor's animation loop), rendering always happens inside
	         * the loop.
	         *
	         * @param {Function} fn The render task to add.
	         * @return {Function} A reference to the render task. Useful for saving to
	         * a variable so that it can later be passed to Motor.removeRenderTask().
	         */
	
	    }, {
	        key: 'addRenderTask',
	        value: function addRenderTask(fn) {
	            if (typeof fn != 'function') throw new Error('Render task must be a function.');
	
	            this._allRenderTasks.add(fn);
	
	            // If the render loop isn't started, start it.
	            if (!this._animationLoopStarted) this._startAnimationLoop();
	
	            return fn;
	        }
	    }, {
	        key: 'removeRenderTask',
	        value: function removeRenderTask(fn) {
	            this._allRenderTasks.delete(fn);
	        }
	    }, {
	        key: '_runRenderTasks',
	        value: function _runRenderTasks(timestamp) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this._allRenderTasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var task = _step.value;
	
	                    if (task(timestamp) === false) this.removeRenderTask(task);
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	    }, {
	        key: '_setNodeToBeRendered',
	        value: function _setNodeToBeRendered(node) {
	            if (!this._nodesToBeRendered.has(node)) this._nodesToBeRendered.add(node);
	
	            if (!this._inFrame) this._startAnimationLoop();
	        }
	    }, {
	        key: '_renderNodes',
	        value: function _renderNodes(timestamp) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = this._nodesToBeRendered[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var node = _step2.value;
	
	                    node._render(timestamp);
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            this._nodesToBeRendered.clear();
	        }
	    }]);
	
	    return Motor;
	}();
	
	// export a singleton instance rather than the class directly.
	
	
	exports.default = new Motor();

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _regenerator = __webpack_require__(371);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _promise = __webpack_require__(373);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _asyncToGenerator2 = __webpack_require__(438);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Await for this to run code after the DOM has been parsed and loaded (but not
	 * sub-resources like images, scripts, etc).
	 *
	 * @example
	 * ```js
	 * async function main() {
	 *     await documentReady()
	 *     console.log('Document ready!')
	 * }
	 * main()
	 * ```
	 */
	
	exports.default = function () {
	    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
	        return _regenerator2.default.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        if (!(document.readyState === 'loading')) {
	                            _context.next = 3;
	                            break;
	                        }
	
	                        _context.next = 3;
	                        return new _promise2.default(function (resolve) {
	                            document.addEventListener('DOMContentLoaded', resolve);
	                        });
	
	                    case 3:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, this);
	    }));
	
	    function documentReady() {
	        return _ref.apply(this, arguments);
	    }
	
	    return documentReady;
	}();
	//# sourceMappingURL=documentReady.js.map

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	exports.initImperativeBase = initImperativeBase;
	
	var _ElementManager = __webpack_require__(364);
	
	var _ElementManager2 = _interopRequireDefault(_ElementManager);
	
	var _Node = __webpack_require__(365);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Scene = __webpack_require__(445);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	var _Motor = __webpack_require__(442);
	
	var _Motor2 = _interopRequireDefault(_Motor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// We explicitly use `var` instead of `let` here because it is hoisted for the
	// Node and Scene modules. This, along with the following initImperativeBase
	// function, allows the circular dependency between this module and the Node and
	// Scene modules to work. For details on why, see
	// https://esdiscuss.org/topic/how-to-solve-this-basic-es6-module-circular-dependency-problem.
	var ImperativeBase;
	
	// Here we wrap the definition of the ImperativeBase class with this function in
	// order to solve the circular depdendency problem caused by the
	// Node<->ImperativeBase and Scene<->ImperativeBase circles. The Node and Scene
	// modules call initImperativeBase to ensure that the ImperativeBase declaration
	// happens first, and then those modules can use the live binding in their
	// declarations.
	initImperativeBase();
	function initImperativeBase() {
	    if (ImperativeBase) return;
	
	    var instanceofSymbol = Symbol('instanceofSymbol');
	
	    /**
	     * The ImperativeBase class is the base class for the Imperative version of the
	     * API, for people who chose to take the all-JavaScript approach and who will
	     * not use the HTML-based API (infamous/motor-html).
	     *
	     * In the future when there is an option to disable the HTML-DOM rendering (and
	     * render only WebGL, for example) then the imperative API will be the only API
	     * available since the HTML API will be turned off as a result of disabling
	     * HTML rendering. Disabling both WebGL and HTML won't make sense, as we'll need
	     * at least one of those to render with.
	     */
	    var ImperativeBaseMixin = function ImperativeBaseMixin(base) {
	        var ImperativeBase = function (_base) {
	            _inherits(ImperativeBase, _base);
	
	            function ImperativeBase() {
	                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	                _classCallCheck(this, ImperativeBase);
	
	                // The presence of a _motorHtmlCounterpart argument signifies that
	                // the HTML interface is being used, otherwise the imperative interface
	                // here is being used. For example, see MotorHTMLNode. This means the
	                // Node and MotorHTMLNode classes are coupled together, but it's in the
	                // name of the API that we're supporting.
	                var _motorHtmlCounterpart = options._motorHtmlCounterpart;
	
	                // Here we create the DOM HTMLElement associated with this
	                // Imperative-API Node.
	                var _this = _possibleConstructorReturn(this, (ImperativeBase.__proto__ || Object.getPrototypeOf(ImperativeBase)).call(this, options));
	
	                _this._elementManager = new _ElementManager2.default(_motorHtmlCounterpart || _this._makeElement());
	                _this._elementManager.element._associateImperativeNode(_this);
	
	                // For Nodes, true when this Node is added to a parent AND it
	                // has an anancestor Scene that is mounted into DOM. For
	                // Scenes, true when mounted into DOM.
	                _this._mounted = false;
	
	                // For Nodes, a promise that resolves when this Node is
	                // attached to a tree that has a root Scene TreeNode *and* when
	                // that root Scene has been mounted into the DOM. For Scenes,
	                // resolves when mounted into DOM.
	                _this._mountPromise = null;
	                _this._resolveMountPromise = null;
	                _this._rejectMountPromise = null;
	
	                _this._awaitingMountPromiseToRender = false;
	                _this._waitingForMountConditions = false;
	
	                // See Transformable/Sizeable propertychange event.
	                _this.on('propertychange', function (prop) {
	                    if (prop == 'sizeMode' || prop == 'absoluteSize' || prop == 'proportionalSize') {
	                        _this._calcSize();
	                    }
	
	                    _this._needsToBeRendered();
	                });
	                return _this;
	            }
	
	            /**
	             * Subclasses are required to override this. It should return the HTML-API
	             * counterpart for this Imperative-API instance. See Node or Scene classes
	             * for example.
	             *
	             * @private
	             */
	
	
	            _createClass(ImperativeBase, [{
	                key: '_makeElement',
	                value: function _makeElement() {
	                    throw new Error('Subclasses need to override ImperativeBase#_makeElement.');
	                }
	
	                /**
	                 * @readonly
	                 */
	
	            }, {
	                key: '_waitForMountThenResolveMountPromise',
	                value: function _waitForMountThenResolveMountPromise() {}
	                // extended in Node or Scene to await for anything that mount
	                // depends on.
	
	
	                /**
	                 * @readonly
	                 */
	
	            }, {
	                key: 'addChild',
	
	
	                /**
	                 * @override
	                 */
	                value: function addChild(childNode) {
	                    if (!(childNode instanceof ImperativeBase)) return;
	
	                    // We cannot add Scenes to Nodes, for now.
	                    if (childNode instanceof _Scene2.default) {
	                        throw new Error('\n                        A Scene cannot be added to another Node or Scene (at\n                        least for now). To place a Scene in a Node, just mount\n                        a new Scene onto a MotorHTMLNode with Scene.mount().\n                    ');
	                    }
	
	                    _get(ImperativeBase.prototype.__proto__ || Object.getPrototypeOf(ImperativeBase.prototype), 'addChild', this).call(this, childNode);
	
	                    // Pass this parent node's Scene reference (if any, checking this cache
	                    // first) to the new child and the child's children.
	                    if (childNode._scene || childNode.scene) {
	                        if (childNode._resolveScenePromise) childNode._resolveScenePromise(childNode._scene);
	                        childNode._giveSceneRefToChildren();
	                    }
	
	                    // Calculate sizing because proportional size might depend on
	                    // the new parent.
	                    childNode._calcSize();
	                    childNode._needsToBeRendered();
	
	                    // child should watch the parent for size changes.
	                    this.on('sizechange', childNode._onParentSizeChange);
	
	                    this._elementManager.connectChildElement(childNode);
	
	                    return this;
	                }
	            }, {
	                key: 'removeChild',
	                value: function removeChild(childNode) {
	                    if (!(childNode instanceof _Node2.default)) return;
	
	                    _get(ImperativeBase.prototype.__proto__ || Object.getPrototypeOf(ImperativeBase.prototype), 'removeChild', this).call(this, childNode);
	
	                    this.off('sizechange', childNode._onParentSizeChange);
	
	                    childNode._resetSceneRef();
	
	                    if (childNode._mountPromise) childNode._rejectMountPromise('mountcancel');
	                    if (childNode._mounted) childNode._elementManager.shouldNotRender();
	                    childNode._resetMountPromise();
	
	                    this._elementManager.disconnectChildElement(childNode);
	                }
	            }, {
	                key: '_resetMountPromise',
	                value: function _resetMountPromise() {
	                    this._mounted = false;
	                    this._mountPromise = null;
	                    this._resolveMountPromise = null;
	                    this._rejectMountPromise = null;
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;
	
	                    try {
	                        for (var _iterator = this._children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var childNode = _step.value;
	
	                            childNode._resetMountPromise();
	                        }
	                    } catch (err) {
	                        _didIteratorError = true;
	                        _iteratorError = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion && _iterator.return) {
	                                _iterator.return();
	                            }
	                        } finally {
	                            if (_didIteratorError) {
	                                throw _iteratorError;
	                            }
	                        }
	                    }
	                }
	
	                /**
	                 * Set all properties of an ImperativeBase instance in one method.
	                 *
	                 * @param {Object} properties Properties object - see example.
	                 *
	                 * @example
	                 * node.properties = {
	                 *   classes: ['open', 'big'],
	                 * }
	                 */
	
	            }, {
	                key: '_needsToBeRendered',
	                value: function () {
	                    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	                        return regeneratorRuntime.wrap(function _callee$(_context) {
	                            while (1) {
	                                switch (_context.prev = _context.next) {
	                                    case 0:
	                                        if (!this._awaitingMountPromiseToRender) {
	                                            _context.next = 2;
	                                            break;
	                                        }
	
	                                        return _context.abrupt('return');
	
	                                    case 2:
	                                        if (this._mounted) {
	                                            _context.next = 19;
	                                            break;
	                                        }
	
	                                        _context.prev = 3;
	
	                                        this._awaitingMountPromiseToRender = true;
	                                        _context.next = 7;
	                                        return this.mountPromise;
	
	                                    case 7:
	                                        _context.next = 16;
	                                        break;
	
	                                    case 9:
	                                        _context.prev = 9;
	                                        _context.t0 = _context['catch'](3);
	
	                                        if (!(_context.t0 == 'mountcancel')) {
	                                            _context.next = 15;
	                                            break;
	                                        }
	
	                                        return _context.abrupt('return');
	
	                                    case 15:
	                                        throw _context.t0;
	
	                                    case 16:
	                                        _context.prev = 16;
	
	                                        this._awaitingMountPromiseToRender = false;
	                                        return _context.finish(16);
	
	                                    case 19:
	
	                                        _Motor2.default._setNodeToBeRendered(this);
	
	                                    case 20:
	                                    case 'end':
	                                        return _context.stop();
	                                }
	                            }
	                        }, _callee, this, [[3, 9, 16, 19]]);
	                    }));
	
	                    function _needsToBeRendered() {
	                        return _ref.apply(this, arguments);
	                    }
	
	                    return _needsToBeRendered;
	                }()
	            }, {
	                key: '_render',
	                value: function _render(timestamp) {
	                    this._elementManager.applyImperativeNodeProperties(this);
	                }
	            }, {
	                key: 'mountPromise',
	                get: function get() {
	                    var _this2 = this;
	
	                    if (!this._mountPromise) {
	                        this._mountPromise = new Promise(function (resolve, reject) {
	                            _this2._resolveMountPromise = resolve;
	                            _this2._rejectMountPromise = reject;
	                        });
	                    }
	
	                    if (!this._mounted) this._waitForMountThenResolveMountPromise();else if (this._mounted) this._resolveMountPromise();
	
	                    return this._mountPromise;
	                }
	            }, {
	                key: 'element',
	                get: function get() {
	                    return this._elementManager.element;
	                }
	            }, {
	                key: 'properties',
	                set: function set() {
	                    var _elementManager;
	
	                    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	                    _set(ImperativeBase.prototype.__proto__ || Object.getPrototypeOf(ImperativeBase.prototype), 'properties', properties, this);
	
	                    if (properties.classes) (_elementManager = this._elementManager).setClasses.apply(_elementManager, _toConsumableArray(properties.classes));
	                }
	            }]);
	
	            return ImperativeBase;
	        }(base);
	
	        Object.defineProperty(ImperativeBase, Symbol.hasInstance, {
	            value: function value(obj) {
	                if (this !== ImperativeBase) return Object.getPrototypeOf(ImperativeBase)[Symbol.hasInstance].call(this, obj);
	
	                var currentProto = obj;
	
	                while (currentProto) {
	                    var desc = Object.getOwnPropertyDescriptor(currentProto, "constructor");
	
	                    if (desc && desc.value && desc.value.hasOwnProperty(instanceofSymbol)) return true;
	
	                    currentProto = Object.getPrototypeOf(currentProto);
	                }
	
	                return false;
	            }
	        });
	
	        ImperativeBase[instanceofSymbol] = true;
	
	        return ImperativeBase;
	    };
	
	    exports.default = ImperativeBase = ImperativeBaseMixin(function () {
	        function _class() {
	            _classCallCheck(this, _class);
	        }
	
	        return _class;
	    }());
	    ImperativeBase.mixin = ImperativeBaseMixin;
	}
	
	exports.default = ImperativeBase;

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _set = function set(object, property, value, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent !== null) { set(parent, property, value, receiver); } } else if ("value" in desc && desc.writable) { desc.value = value; } else { var setter = desc.set; if (setter !== undefined) { setter.call(receiver, value); } } return value; };
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Utility = __webpack_require__(369);
	
	var _Sizeable = __webpack_require__(440);
	
	var _Sizeable2 = _interopRequireDefault(_Sizeable);
	
	var _ImperativeBase = __webpack_require__(444);
	
	var _ImperativeBase2 = _interopRequireDefault(_ImperativeBase);
	
	var _XYZValues = __webpack_require__(368);
	
	var _XYZValues2 = _interopRequireDefault(_XYZValues);
	
	var _scene = __webpack_require__(446);
	
	var _scene2 = _interopRequireDefault(_scene);
	
	var _documentReady = __webpack_require__(443);
	
	var _documentReady2 = _interopRequireDefault(_documentReady);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	(0, _ImperativeBase.initImperativeBase)();
	
	// Scene is Sizeable, which is currently a subset of Transformable.
	
	var Scene = function (_ImperativeBase$mixin) {
	    _inherits(Scene, _ImperativeBase$mixin);
	
	    function Scene() {
	        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        _classCallCheck(this, Scene);
	
	        // NOTE: z size is always 0, since native DOM elements are always flat.
	        var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this, options));
	
	        _this._elementParentSize = { x: 0, y: 0, z: 0 };
	
	        _this._onElementParentSizeChange = function (newSize) {
	            _this._elementParentSize = newSize;
	            _this._calcSize();
	            _this._needsToBeRendered();
	        };
	
	        _this._calcSize();
	        _this._needsToBeRendered();
	        return _this;
	    }
	
	    _createClass(Scene, [{
	        key: '_setDefaultProperties',
	        value: function _setDefaultProperties() {
	            _get(Scene.prototype.__proto__ || Object.getPrototypeOf(Scene.prototype), '_setDefaultProperties', this).call(this);
	
	            Object.assign(this._properties, {
	                sizeMode: new _XYZValues2.default('proportional', 'proportional', 'absolute')
	            });
	        }
	
	        // When we set the scene's size mode, we should start polling if it has
	        // proportional sizing.
	
	    }, {
	        key: '_startOrStopSizePolling',
	        value: function _startOrStopSizePolling() {
	            if (this._mounted && (this._properties.sizeMode.x == 'proportional' || this._properties.sizeMode.y == 'proportional' || this._properties.sizeMode.z == 'proportional')) {
	                this._startSizePolling();
	            } else {
	                this._stopSizePolling();
	            }
	        }
	
	        // observe size changes on the scene element.
	
	    }, {
	        key: '_startSizePolling',
	        value: function _startSizePolling() {
	            if (!this._elementManager) return;
	            this._elementManager.element._startSizePolling();
	            this._elementManager.element.on('parentsizechange', this._onElementParentSizeChange);
	        }
	
	        // Don't observe size changes on the scene element.
	
	    }, {
	        key: '_stopSizePolling',
	        value: function _stopSizePolling() {
	            if (!this._elementManager) return;
	            this._elementManager.element.off('parentsizechange', this._onElementParentSizeChange);
	            this._elementManager.element._stopSizePolling();
	        }
	
	        /** @override */
	
	    }, {
	        key: '_getParentSize',
	        value: function _getParentSize() {
	            return this._mounted ? this._elementParentSize : { x: 0, y: 0, z: 0 };
	        }
	
	        /**
	         * @override
	         */
	
	    }, {
	        key: '_makeElement',
	        value: function _makeElement() {
	            return new _scene2.default();
	        }
	
	        /**
	         * Mount the scene into the given target.
	         * Resolves the Scene's mountPromise, which can be use to do something once
	         * the scene is mounted.
	         *
	         * @param {string|HTMLElement} [mountPoint=document.body] If a string selector is provided,
	         * the mount point will be selected from the DOM. If an HTMLElement is
	         * provided, that will be the mount point. If no mount point is provided,
	         * the scene will be mounted into document.body.
	         */
	
	    }, {
	        key: 'mount',
	        value: function () {
	            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(mountPoint) {
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                if (!(document.readyState == 'loading')) {
	                                    _context.next = 3;
	                                    break;
	                                }
	
	                                _context.next = 3;
	                                return (0, _documentReady2.default)();
	
	                            case 3:
	
	                                // if no mountPoint was provided, just mount onto the <body> element.
	                                if (mountPoint === undefined) mountPoint = document.body;
	
	                                // if the user supplied a selector, mount there.
	                                else if (typeof mountPoint === 'string') mountPoint = document.querySelector(mountPoint);
	
	                                // if we have an actual mount point (the user may have supplied one)
	
	                                if (mountPoint instanceof window.HTMLElement) {
	                                    _context.next = 6;
	                                    break;
	                                }
	
	                                throw new Error('Invalid mount point specified in Scene.mount() call. Specify a selector, or pass an actual HTMLElement.');
	
	                            case 6:
	
	                                if (this._mounted) this.unmount();
	
	                                if (mountPoint !== this._elementManager.element.parentNode) mountPoint.appendChild(this._elementManager.element);
	
	                                this._mounted = true;
	
	                                if (this._mountPromise) this._resolveMountPromise();
	
	                                this._elementManager.shouldRender();
	                                this._startOrStopSizePolling();
	
	                            case 12:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	
	            function mount(_x2) {
	                return _ref.apply(this, arguments);
	            }
	
	            return mount;
	        }()
	
	        /**
	         * Unmount the scene from it's mount point. Resets the Scene's
	         * mountPromise.
	         */
	
	    }, {
	        key: 'unmount',
	        value: function unmount() {
	            if (!this._mounted) return;
	
	            this._elementManager.shouldNotRender();
	            this._stopSizePolling();
	
	            if (this._elementManager.element.parentNode) this._elementManager.element.parentNode.removeChild(this._elementManager.element);
	
	            if (this._mountPromise) this._rejectMountPromise('mountcancel');
	            this._resetMountPromise();
	        }
	    }, {
	        key: 'sizeMode',
	        set: function set(newValue) {
	            _set(Scene.prototype.__proto__ || Object.getPrototypeOf(Scene.prototype), 'sizeMode', newValue, this);
	            this._startOrStopSizePolling();
	        },
	        get: function get() {
	            return _get(Scene.prototype.__proto__ || Object.getPrototypeOf(Scene.prototype), 'sizeMode', this);
	        }
	    }]);
	
	    return Scene;
	}(_ImperativeBase2.default.mixin(_Sizeable2.default));
	
	(0, _Utility.makeAccessorsEnumerable)(Scene.prototype);
	
	exports.default = Scene;

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _sceneStyle = __webpack_require__(447);
	
	var _sceneStyle2 = _interopRequireDefault(_sceneStyle);
	
	var _Motor = __webpack_require__(442);
	
	var _Motor2 = _interopRequireDefault(_Motor);
	
	var _Scene = __webpack_require__(445);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	var _Observable = __webpack_require__(439);
	
	var _Observable2 = _interopRequireDefault(_Observable);
	
	var _Sizeable = __webpack_require__(440);
	
	var _Sizeable2 = _interopRequireDefault(_Sizeable);
	
	var _base = __webpack_require__(449);
	
	var _base2 = _interopRequireDefault(_base);
	
	__webpack_require__(452);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	(0, _base.initMotorHTMLBase)();
	
	var privates = new WeakMap();
	var _ = function _(instance) {
	    if (!privates.get(instance)) privates.set(instance, {});
	    return privates.get(instance);
	};
	
	var MotorHTMLScene = function (_Observable$mixin) {
	    _inherits(MotorHTMLScene, _Observable$mixin);
	
	    function MotorHTMLScene() {
	        _classCallCheck(this, MotorHTMLScene);
	
	        return _possibleConstructorReturn(this, (MotorHTMLScene.__proto__ || Object.getPrototypeOf(MotorHTMLScene)).apply(this, arguments));
	    }
	
	    _createClass(MotorHTMLScene, [{
	        key: 'createdCallback',
	        value: function createdCallback() {
	            var _this2 = this;
	
	            _get(MotorHTMLScene.prototype.__proto__ || Object.getPrototypeOf(MotorHTMLScene.prototype), 'createdCallback', this).call(this);
	
	            this._sizePollTask = null;
	            this._parentSize = { x: 0, y: 0, z: 0 };
	
	            // After the imperativeCounterpart is available it needs to register
	            // mount into DOM. This is only for MotorHTMLScenes because their
	            // imperativeCounterparts are not added to a parent Node.
	            // MotorHTMLNodes get their parent connection from their parent in
	            // childConnectedCallback.
	            this._imperativeCounterpartPromise.then(function () {
	
	                // return if
	                if (_this2.imperativeCounterpart._mounted) return;
	
	                if (_this2.parentNode) _this2.imperativeCounterpart.mount(_this2.parentNode);
	            });
	        }
	    }, {
	        key: '_startSizePolling',
	        value: function _startSizePolling() {
	            // NOTE Polling is currently required because there's no other way to do this
	            // reliably, not even with MutationObserver. ResizeObserver hasn't
	            // landed in browsers yet.
	            if (!this._sizePollTask) this._sizePollTask = _Motor2.default.addRenderTask(this._checkSize.bind(this));
	        }
	
	        // NOTE, the Z dimension of a scene doesn't matter, it's a flat plane, so
	        // we haven't taken that into consideration here.
	
	    }, {
	        key: '_checkSize',
	        value: function _checkSize() {
	
	            // The scene has a parent by the time this is called (see
	            // src/motor/Scene#mount where _startSizePolling is called)
	            var parent = this.parentNode;
	            var parentSize = this._parentSize;
	            var style = getComputedStyle(parent);
	            var width = parseFloat(style.width);
	            var height = parseFloat(style.height);
	
	            // if we have a size change, trigger parentsizechange
	            if (parentSize.x != width || parentSize.y != height) {
	                parentSize.x = width;
	                parentSize.y = height;
	
	                this.triggerEvent('parentsizechange', Object.assign({}, parentSize));
	            }
	        }
	    }, {
	        key: '_makeImperativeCounterpart',
	        value: function _makeImperativeCounterpart() {
	            return new _Scene2.default({
	                _motorHtmlCounterpart: this
	            });
	        }
	
	        /** @override */
	
	    }, {
	        key: 'getStyles',
	        value: function getStyles() {
	            return _sceneStyle2.default;
	        }
	    }, {
	        key: 'deinit',
	        value: function deinit() {
	            _get(MotorHTMLScene.prototype.__proto__ || Object.getPrototypeOf(MotorHTMLScene.prototype), 'deinit', this).call(this);
	
	            this.imperativeCounterpart.unmount();
	        }
	    }, {
	        key: '_stopSizePolling',
	        value: function _stopSizePolling() {
	            _Motor2.default.removeRenderTask(this._sizePollTask);
	            this._sizePollTask = null;
	        }
	    }]);
	
	    return MotorHTMLScene;
	}(_Observable2.default.mixin(_base2.default));
	
	// This associates the Transformable getters/setters with the HTML-API classes,
	// so that the same getters/setters can be called from HTML side of the API.
	
	
	(0, _base.proxyGettersSetters)(_Sizeable2.default, MotorHTMLScene);
	
	exports.default = MotorHTMLScene = document.registerElement('motor-scene', MotorHTMLScene);
	
	exports.default = MotorHTMLScene;

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _nodeStyle = __webpack_require__(448);
	
	var _nodeStyle2 = _interopRequireDefault(_nodeStyle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = Object.assign({}, _nodeStyle2.default, {
	    position: 'relative',
	    overflow: 'hidden',
	    width: '100%',
	    height: '100%',
	
	    // Constant perspective for now.
	    perspective: 1000
	});

/***/ },
/* 448 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	
	    // all items of the scene graph are hidden until they are mounted in a
	    // scene (this changes to `display:block`).
	    display: 'none',
	
	    boxSizing: 'border-box',
	    position: 'absolute',
	    top: 0,
	    left: 0,
	
	    // Defaults to [0.5,0.5,0.5] (the Z axis doesn't apply for DOM elements,
	    // but will for 3D objects in WebGL.)
	    transformOrigin: '50% 50% 0', // default
	
	    transformStyle: 'preserve-3d'
	};

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	exports.initMotorHTMLBase = initMotorHTMLBase;
	exports.proxyGettersSetters = proxyGettersSetters;
	
	var _webComponent = __webpack_require__(450);
	
	var _webComponent2 = _interopRequireDefault(_webComponent);
	
	var _node = __webpack_require__(451);
	
	var _node2 = _interopRequireDefault(_node);
	
	var _Utility = __webpack_require__(369);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global HTMLSlotElement */
	
	var DeclarativeBase;
	
	// Override HTMLElement.prototype.attachShadow in v1, and
	// HTMLElement.prototype.createShadowRoot in v0, so that we can make a Map of
	// motor- elements to their shadow roots, so we can always get a reference to
	// the element's shadow root even if it is closed.
	var observers = new WeakMap();
	function hijack(original) {
	    return function () {
	        // In v0, shadow roots can be replaced, but in v1 calling attachShadow
	        // on an element that already has a root throws. So, we can set this to
	        // true, and if the try-catch passes then we know we have a v0 root and
	        // that the root was just replaced.
	        var oldRoot = this.shadowRoot;
	        var root = null;
	        try {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }
	
	            root = original.call.apply(original, [this].concat(args));
	        } catch (e) {
	            throw e;
	        }
	        if (this instanceof DeclarativeBase) {
	            this._hasShadowRoot = true;
	            if (oldRoot) {
	                onV0ShadowRootReplaced.call(this, oldRoot);
	            }
	            var observer = (0, _Utility.observeChildren)(root, shadowRootChildAdded.bind(this), shadowRootChildRemoved.bind(this));
	            observers.set(root, observer);
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = this.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var child = _step.value;
	
	                    if (!(child instanceof DeclarativeBase)) continue;
	                    child._isPossiblyDistributed = true;
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        }
	        return root;
	    };
	}
	function shadowRootChildAdded(child) {
	
	    // NOTE Logic here is similar to childConnectedCallback
	
	    if (child instanceof DeclarativeBase) {
	        this.imperativeCounterpart.addChild(child.imperativeCounterpart);
	    } else if (_Utility.hasShadowDomV0 && child instanceof HTMLContentElement) {
	        // observe <content> elements.
	    } else if (_Utility.hasShadowDomV1 && child instanceof HTMLSlotElement) {
	        child.addEventListener('slotchange', this);
	        this._handleDistributedChildren(child);
	    }
	}
	function shadowRootChildRemoved(child) {
	
	    // NOTE Logic here is similar to childDisconnectedCallback
	
	    if (child instanceof DeclarativeBase) {
	        this.imperativeCounterpart.removeChild(child.imperativeCounterpart);
	    } else if (_Utility.hasShadowDomV0 && child instanceof HTMLContentElement) {
	        // unobserve <content> element
	    } else if (_Utility.hasShadowDomV1 && child instanceof HTMLSlotElement) {
	        child.removeEventListener('slotchange', this);
	        this._handleDistributedChildren(child);
	        this._slotElementsAssignedNodes.delete(child);
	    }
	}
	function onV0ShadowRootReplaced(oldRoot) {
	    observers.get(oldRoot).disconnect();
	    observers.delete(oldRoot);
	    var i = 0;
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	        for (var _iterator2 = oldRoot.childNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var child = _step2.value;
	
	            if (!(child instanceof DeclarativeBase)) {
	                i += 1;continue;
	            }
	
	            // We should disconnect the imperative connection (f.e. so it is
	            // not rendered in WebGL)...
	            this.imperativeCounterpart.removeChild(child.imperativeCounterpart);
	
	            // ...but we should place the element back where it was so there's
	            // no surprises to the HTML-API user who might go looking for the
	            // element. Due to the fact that the observer on the oldRoot was
	            // removed, adding the element back to the oldRoot won't cause it
	            // to be reconnected on the imperative side.
	            oldRoot.insertBefore(child, oldRoot.childNodes[i]);
	
	            i += 1;
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }
	}
	if (HTMLElement.prototype.createShadowRoot instanceof Function) HTMLElement.prototype.createShadowRoot = hijack(HTMLElement.prototype.createShadowRoot);
	if (HTMLElement.prototype.attachShadow instanceof Function) HTMLElement.prototype.attachShadow = hijack(HTMLElement.prototype.attachShadow);
	
	initMotorHTMLBase();
	function initMotorHTMLBase() {
	    if (DeclarativeBase) return;
	
	    /**
	     * @implements {EventListener}
	     */
	    exports.default = DeclarativeBase = function (_WebComponent) {
	        _inherits(DeclarativeBase, _WebComponent);
	
	        function DeclarativeBase() {
	            _classCallCheck(this, DeclarativeBase);
	
	            return _possibleConstructorReturn(this, (DeclarativeBase.__proto__ || Object.getPrototypeOf(DeclarativeBase)).apply(this, arguments));
	        }
	
	        _createClass(DeclarativeBase, [{
	            key: 'createdCallback',
	            value: function createdCallback() {
	                var _this2 = this;
	
	                _get(DeclarativeBase.prototype.__proto__ || Object.getPrototypeOf(DeclarativeBase.prototype), 'createdCallback', this).call(this);
	
	                this.imperativeCounterpart = null; // to hold the imperative API Node instance.
	
	                // true if this node has a shadow root (even if it is "closed", see
	                // hijack function above). Once true always true because shadow
	                // roots cannot be removed.
	                this._hasShadowRoot = false;
	
	                // True when this node has a parent that has a shadow root. When
	                // using the HTML API, Imperative API can look at this to determine
	                // whether to render this node or not, in the case of WebGL.
	                this._isPossiblyDistributed = false;
	
	                // A map of the slot elements that are children of this node and
	                // their last-known assigned nodes. When a slotchange happens while
	                // this node is in a shadow root and has a slot child, we can
	                // detect what the difference is between the last known and the new
	                // assignments, and notate the new distribution of child nodes. See
	                // issue #40 for background on why we do this.
	                this._slotElementsAssignedNodes = new WeakMap();
	
	                // If this node is distributed into a shadow tree, this will
	                // reference the parent of the <slot> or <content> element.
	                // Basically, this node will render as a child of that parent node
	                // in the flat tree.
	                this._shadowParent = null;
	
	                // If this element has a child <slot> or <content> element while in
	                // a shadow root, then this will be a Set of the nodes distributed
	                // into the <slot> or <content>, and those nodes render relatively
	                // to this node in the flat tree. We instantiate this later, only
	                // when/if needed.
	                this._shadowChildren = null;
	
	                // We use Promise.resolve here to defer to the next microtask.
	                // While we support Custom Elements v0, this is necessary because
	                // the imperative Node counterpart will have already called the
	                // `_associateImperativeNode` method on this element, causing the
	                // next microtask's call to be a no-op. When this MotorHTML element
	                // API is used instead of the Imperative counterpart, then the next
	                // microtask's `_associateImperativeNode` call will not be a no-op.
	                // When we drop support for v0 Custom Elements at some point, we
	                // can rely on passing a constructor argument similarly to how we
	                // do with motor/Node in order to detect that the constructor is
	                // being called from the reciprocal API. See the constructor in
	                // motor/Node.js to get see the idea.
	                // TODO: renewable promise after unmount.
	                this._imperativeCounterpartPromise = Promise.resolve().then(function () {
	                    return _this2._associateImperativeNode();
	                });
	                this.mountPromise = this._imperativeCounterpartPromise.then(function () {
	                    return _this2.imperativeCounterpart.mountPromise;
	                });
	            }
	
	            /**
	             * This method creates the association between this MotorHTMLNode instance
	             * and the imperative Node instance.
	             *
	             * This method may get called by this.init, but can also be called by
	             * the Node class if Node is used imperatively. See Node#constructor.
	             *
	             * @private
	             *
	             * @param {Object} imperativeCounterpart The imperative counterpart to
	             * associate with this MotorHTML element. This parameter is only used in the
	             * imperative API constructors, and this happens when using the imperative
	             * form of infamous instead of the HTML interface to infamous. When the HTML
	             * interface is used, this gets called first without an
	             * imperativeCounterpart argument and the call to this in an imperative
	             * constructor will be a noop. Basically, either this gets called first by a
	             * MotorHTML element, or first by an imperative instance, depending on which
	             * API is used first.
	             */
	
	        }, {
	            key: '_associateImperativeNode',
	            value: function _associateImperativeNode(imperativeCounterpart) {
	                // if the association is made already, noop
	                if (this.imperativeCounterpart) return;
	
	                // if called from an imperative-side class' constructor, associate
	                // the passed instance.
	                if (imperativeCounterpart) this.imperativeCounterpart = imperativeCounterpart;
	
	                // otherwise if called from a MotorHTML class without an argument
	                else this.imperativeCounterpart = this._makeImperativeCounterpart();
	            }
	
	            /**
	             * This method should be overriden by child classes. It should return the
	             * imperative-side instance that the HTML-side class (this) corresponds to.
	             * @abstract
	             */
	
	        }, {
	            key: '_makeImperativeCounterpart',
	            value: function _makeImperativeCounterpart() {
	                throw new TypeError('This method should be implemented by classes extending DeclarativeBase.');
	            }
	        }, {
	            key: 'childConnectedCallback',
	            value: function childConnectedCallback(child) {
	
	                // mirror the DOM connections in the imperative API's virtual scene graph.
	                if (child instanceof _node2.default) {
	                    if (this._hasShadowRoot) child._isPossiblyDistributed = true;
	
	                    // If ImperativeBase#addChild was called first, child's
	                    // _parent will already be set, so prevent recursion.
	                    if (child.imperativeCounterpart._parent) return;
	
	                    this.imperativeCounterpart.addChild(child.imperativeCounterpart);
	                } else if (_Utility.hasShadowDomV0 && child instanceof HTMLContentElement &&
	                //getShadowRootVersion(
	                (0, _Utility.getAncestorShadowRoot)(this)
	                //) == 'v0'
	                ) {
	                        // observe <content> elements.
	                    } else if (_Utility.hasShadowDomV1 && child instanceof HTMLSlotElement &&
	                //getShadowRootVersion(
	                (0, _Utility.getAncestorShadowRoot)(this)
	                //) == 'v1'
	                ) {
	                        child.addEventListener('slotchange', this);
	                        this._handleDistributedChildren(child);
	                    }
	            }
	
	            // This method is part of the EventListener interface.
	
	        }, {
	            key: 'handleEvent',
	            value: function handleEvent(event) {
	                if (event.type == 'slotchange') {
	                    var slot = event.target;
	                    this._handleDistributedChildren(slot);
	                }
	            }
	        }, {
	            key: '_handleDistributedChildren',
	            value: function _handleDistributedChildren(slot) {
	                var diff = this._getDistributedChildDifference(slot);
	
	                var _iteratorNormalCompletion3 = true;
	                var _didIteratorError3 = false;
	                var _iteratorError3 = undefined;
	
	                try {
	                    for (var _iterator3 = diff.added[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                        var addedNode = _step3.value;
	
	                        if (!(addedNode instanceof DeclarativeBase)) continue;
	
	                        // We do this because if the given slot is assigned to another
	                        // slot, then this logic will run again for the next slot on
	                        // that next slot's slotchange, so we remove the distributed
	                        // node from the previous shadowParent and add it to the next
	                        // one. If we don't do this, then the distributed node will
	                        // exist in multiple shadowChildren lists when there is a
	                        // chain of assigned slots. For more info, see
	                        // https://github.com/w3c/webcomponents/issues/611
	                        if (addedNode._shadowParent && addedNode._shadowParent._shadowChildren) {
	                            addedNode._shadowParent._shadowChildren.delete(addedNode);
	                            if (!addedNode._shadowParent._shadowChildren.size) addedNode._shadowParent._shadowChildren = null;
	                        }
	
	                        addedNode._shadowParent = this;
	                        if (!this._shadowChildren) this._shadowChildren = new Set();
	                        this._shadowChildren.add(addedNode);
	                    }
	                } catch (err) {
	                    _didIteratorError3 = true;
	                    _iteratorError3 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                            _iterator3.return();
	                        }
	                    } finally {
	                        if (_didIteratorError3) {
	                            throw _iteratorError3;
	                        }
	                    }
	                }
	
	                var _iteratorNormalCompletion4 = true;
	                var _didIteratorError4 = false;
	                var _iteratorError4 = undefined;
	
	                try {
	                    for (var _iterator4 = diff.removed[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                        var removedNode = _step4.value;
	
	                        if (!(removedNode instanceof DeclarativeBase)) continue;
	                        removedNode._shadowParent = null;
	                        this._shadowChildren.delete(removedNode);
	                        if (!this._shadowChildren.size) this._shadowChildren = null;
	                    }
	                } catch (err) {
	                    _didIteratorError4 = true;
	                    _iteratorError4 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                            _iterator4.return();
	                        }
	                    } finally {
	                        if (_didIteratorError4) {
	                            throw _iteratorError4;
	                        }
	                    }
	                }
	            }
	        }, {
	            key: '_getDistributedChildDifference',
	            value: function _getDistributedChildDifference(slot) {
	                var previousNodes = void 0;
	
	                if (this._slotElementsAssignedNodes.has(slot)) previousNodes = this._slotElementsAssignedNodes.get(slot);else previousNodes = [];
	
	                var newNodes = slot.assignedNodes({ flatten: true });
	
	                // save the newNodes to be used as the previousNodes for next time.
	                this._slotElementsAssignedNodes.set(slot, newNodes);
	
	                var diff = {
	                    removed: []
	                };
	
	                for (var i = 0, l = previousNodes.length; i < l; i += 1) {
	                    var oldNode = previousNodes[i];
	                    var newIndex = newNodes.indexOf(oldNode);
	
	                    // if it exists in the previousNodes but not the newNodes, then
	                    // the node was removed.
	                    if (!(newIndex >= 0)) {
	                        diff.removed.push(oldNode);
	                    }
	
	                    // otherwise the node wasn't added or removed.
	                    else {
	                            newNodes.splice(i, 1);
	                        }
	                }
	
	                // Remaining nodes in newNodes must have been added.
	                diff.added = newNodes;
	
	                return diff;
	            }
	        }, {
	            key: 'childDisconnectedCallback',
	            value: function childDisconnectedCallback(child) {
	                // mirror the connection in the imperative API's virtual scene graph.
	                if (child instanceof _node2.default) {
	                    child._isPossiblyDistributed = false;
	
	                    // If ImperativeBase#removeChild was called first, child's
	                    // _parent will already be null, so prevent recursion.
	                    if (!child.imperativeCounterpart._parent) return;
	
	                    this.imperativeCounterpart.removeChild(child.imperativeCounterpart);
	                } else if (_Utility.hasShadowDomV0 && child instanceof HTMLContentElement &&
	                //getShadowRootVersion(
	                (0, _Utility.getAncestorShadowRoot)(this)
	                //) == 'v0'
	                ) {
	                        // unobserve <content> element
	                    } else if (_Utility.hasShadowDomV1 && child instanceof HTMLSlotElement &&
	                //getShadowRootVersion(
	                (0, _Utility.getAncestorShadowRoot)(this)
	                //) == 'v1'
	                ) {
	                        child.removeEventListener('slotchange', this);
	                        this._handleDistributedChildren(child);
	                        this._slotElementsAssignedNodes.delete(child);
	                    }
	            }
	        }]);
	
	        return DeclarativeBase;
	    }((0, _webComponent2.default)(window.HTMLElement));
	}
	
	// Creates setters/getters on the TargetClass which proxy to the
	// setters/getters on SourceClass.
	function proxyGettersSetters(SourceClass, TargetClass) {
	
	    // Node methods not to proxy (private underscored methods are also detected and
	    // ignored).
	    var methodProxyBlacklist = ['constructor', 'parent', 'children', // proxying this one would really break stuff (f.e. React)
	    'element', 'scene', 'addChild', 'addChildren', 'removeChild', 'removeChildren'];
	
	    var props = Object.getOwnPropertyNames(SourceClass.prototype);
	
	    var _iteratorNormalCompletion5 = true;
	    var _didIteratorError5 = false;
	    var _iteratorError5 = undefined;
	
	    try {
	        var _loop = function _loop() {
	            var prop = _step5.value;
	
	            if (
	            // skip the blacklisted properties
	            methodProxyBlacklist.indexOf(prop) >= 0
	
	            // skip the private underscored properties
	            || prop.indexOf('_') == 0
	
	            // skip properties that are already defined.
	            || TargetClass.prototype.hasOwnProperty(prop)) return 'continue';
	
	            var targetDescriptor = {};
	            var sourceDescriptor = Object.getOwnPropertyDescriptor(SourceClass.prototype, prop);
	
	            // if the property has a setter
	            if (sourceDescriptor.set) {
	                Object.assign(targetDescriptor, {
	                    set: function set(value) {
	                        this.imperativeCounterpart[prop] = value;
	                    }
	                });
	            }
	
	            // if the property has a getter
	            if (sourceDescriptor.get) {
	                Object.assign(targetDescriptor, {
	                    get: function get() {
	                        return this.imperativeCounterpart[prop];
	                    }
	                });
	            }
	
	            Object.defineProperty(TargetClass.prototype, prop, targetDescriptor);
	        };
	
	        for (var _iterator5 = props[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	            var _ret = _loop();
	
	            if (_ret === 'continue') continue;
	        }
	    } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                _iterator5.return();
	            }
	        } finally {
	            if (_didIteratorError5) {
	                throw _iteratorError5;
	            }
	        }
	    }
	}
	
	exports.default = DeclarativeBase;

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	exports.default = WebComponentMixin;
	
	var _Utility = __webpack_require__(369);
	
	var _jss = __webpack_require__(332);
	
	var _jss2 = _interopRequireDefault(_jss);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global customElements */
	
	// Very very stupid hack needed for Safari in order for us to be able to extend
	// the HTMLElement class. See:
	// https://github.com/google/traceur-compiler/issues/1709
	if (typeof window.HTMLElement != 'function') {
	    var _HTMLElement = function HTMLElement() {};
	    _HTMLElement.prototype = window.HTMLElement.prototype;
	    window.HTMLElement = _HTMLElement;
	}
	
	var classCache = new Map();
	
	function classExtendsHTMLElement(constructor) {
	    if (!constructor) return false;
	    if (constructor === HTMLElement) return true;else return classExtendsHTMLElement(constructor.prototype.__proto__ ? constructor.prototype.__proto__.constructor : null);
	}
	
	/**
	 * Creates a WebComponent base class dynamically, depending on which
	 * HTMLElement class you want it to extend from. Extend from WebComponent when
	 * making a new Custom Element class.
	 *
	 * @example
	 * const WebComponent = WebComponentMixin(HTMLButtonElement)
	 * class AwesomeButton extends WebComponent { ... }
	 *
	 * @param {Function} elementClass The class that the generated WebComponent
	 * base class will extend from.
	 */
	function WebComponentMixin(elementClass) {
	    if (!elementClass) elementClass = HTMLElement;
	
	    if (!classExtendsHTMLElement(elementClass)) {
	        throw new TypeError('The argument to WebComponentMixin must be a constructor that extends from or is HTMLElement.');
	    }
	
	    // if a base class that extends the given `elementClass` has already been
	    // created, return it.
	    if (classCache.has(elementClass)) return classCache.get(elementClass);
	
	    // otherwise, create it.
	
	    var WebComponent = function (_elementClass) {
	        _inherits(WebComponent, _elementClass);
	
	        // constructor() is used in v1 Custom Elements instead of
	        // createdCallback() as in v0.
	        function WebComponent() {
	            _classCallCheck(this, WebComponent);
	
	            // If the following is true, then we know the user should be using
	            // `document.registerElement()` to define an element from this class.
	            // `document.registerElement()` creates a new constructor, so if the
	            // constructor here is being called then that means the user is not
	            // instantiating a DOM HTMLElement as expected because it is required
	            // that the constructor returned from `document.registerElement` be used
	            // instead (this is a flaw of Custom Elements v0 which is fixed in v1
	            // where class constructors can be used directly).
	            var _this = _possibleConstructorReturn(this, (WebComponent.__proto__ || Object.getPrototypeOf(WebComponent)).call(this));
	
	            if ('registerElement' in document && !('customElements' in window)) {
	                throw new Error('\n                    You cannot instantiate this class directly without first registering it\n                    with `document.registerElement(...)`. See an example at http://....\n                ');
	            }
	
	            // Throw an error if no Custom Elements API exists.
	            if (!('registerElement' in document) && !('customElements' in window)) {
	                throw new Error('\n                    Your browser does not support the Custom Elements API. You\'ll\n                    need to install a polyfill. See how at http://....\n                ');
	            }
	
	            // otherwise the V1 API exists, so call the createdCallback, which
	            // is what Custom Elements v0 would call by default. Subclasses of
	            // WebComponent should put instantiation logic in createdCallback
	            // instead of in a custom constructor if backwards compatibility is
	            // to be maintained.
	            _this.createdCallback();
	            return _this;
	        }
	
	        _createClass(WebComponent, [{
	            key: 'createdCallback',
	            value: function createdCallback() {
	                this._attached = false;
	                this._initialized = false;
	                this._initialAttributeChange = false;
	                this._childObserver = null;
	                this._style = null;
	            }
	
	            // Subclasses can implement these.
	
	        }, {
	            key: 'childConnectedCallback',
	            value: function childConnectedCallback(child) {}
	        }, {
	            key: 'childDisconnectedCallback',
	            value: function childDisconnectedCallback(child) {}
	        }, {
	            key: 'connectedCallback',
	            value: function connectedCallback() {
	                if (_get(WebComponent.prototype.__proto__ || Object.getPrototypeOf(WebComponent.prototype), 'connectedCallback', this)) _get(WebComponent.prototype.__proto__ || Object.getPrototypeOf(WebComponent.prototype), 'connectedCallback', this).call(this);
	                this._attached = true;
	
	                if (!this._initialized) {
	                    this.init();
	                    this._initialized = true;
	                }
	            }
	        }, {
	            key: 'attachedCallback',
	            value: function attachedCallback() {
	                this.connectedCallback();
	            } // back-compat
	
	        }, {
	            key: '_createStyles',
	            value: function _createStyles() {
	                var rule = _jss2.default.createRule(this.getStyles());
	
	                rule.applyTo(this);
	
	                return rule;
	            }
	        }, {
	            key: 'disconnectedCallback',
	            value: function () {
	                var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	                    return regeneratorRuntime.wrap(function _callee$(_context) {
	                        while (1) {
	                            switch (_context.prev = _context.next) {
	                                case 0:
	                                    if (_get(WebComponent.prototype.__proto__ || Object.getPrototypeOf(WebComponent.prototype), 'disconnectedCallback', this)) _get(WebComponent.prototype.__proto__ || Object.getPrototypeOf(WebComponent.prototype), 'disconnectedCallback', this).call(this);
	                                    this._attached = false;
	
	                                    // Deferr to the next tick before cleaning up in case the
	                                    // element is actually being re-attached somewhere else within this
	                                    // same tick (detaching and attaching is synchronous, so by
	                                    // deferring to the next tick we'll be able to know if the element
	                                    // was re-attached or not in order to clean up or not). Note that
	                                    // appendChild can be used to move an element to another parent
	                                    // element, in which case connectedCallback and disconnectedCallback
	                                    // both get called, and in which case we don't necessarily want to
	                                    // clean up. If the element gets re-attached before the next tick
	                                    // (for example, gets moved), then we want to preserve the
	                                    // stuff that would be cleaned up by an extending class' deinit
	                                    // method by not running the following this.deinit() call.
	                                    _context.next = 4;
	                                    return Promise.resolve();
	
	                                case 4:
	                                    // deferr to the next tick.
	
	                                    // As mentioned in the previous comment, if the element was not
	                                    // re-attached in the last tick (for example, it was moved to
	                                    // another element), then clean up.
	                                    if (!this._attached && this._initialized) {
	                                        this.deinit();
	                                    }
	
	                                case 5:
	                                case 'end':
	                                    return _context.stop();
	                            }
	                        }
	                    }, _callee, this);
	                }));
	
	                function disconnectedCallback() {
	                    return _ref.apply(this, arguments);
	                }
	
	                return disconnectedCallback;
	            }()
	        }, {
	            key: 'detachedCallback',
	            value: function detachedCallback() {
	                this.disconnectedCallback();
	            } // back-compat
	
	            /**
	             * This method can be overridden by extending classes, it should return
	             * JSS-compatible styling. See http://github.com/cssinjs/jss for
	             * documentation.
	             * @abstract
	             */
	
	        }, {
	            key: 'getStyles',
	            value: function getStyles() {
	                return {};
	            }
	
	            /**
	             * Init is called exactly once, the first time this element is connected
	             * into the DOM. When an element is disconnected then connected right
	             * away within the same tick, init() is not fired again. However, if an
	             * element is disconnected and then some time passes and the current
	             * tick completes, then deinit() will be called, and the next time that
	             * the element is connected back into DOM init() will be called again.
	             *
	             * Subclasses should extend this to add such logic.
	             */
	
	        }, {
	            key: 'init',
	            value: function init() {
	                var _this2 = this;
	
	                if (!this._style) this._style = this._createStyles();
	
	                // Handle any nodes that may have been connected before `this` node
	                // was created (f.e. child nodes that were connected before the
	                // custom elements were registered and which would therefore not be
	                // detected by the following MutationObserver).
	                if (!this._childObserver) {
	                    if (this.childNodes.length) {
	
	                        // Timeout needed in case the Custom Element classes are
	                        // registered after the elements are already defined in the
	                        // DOM but not yet upgraded. This means that the `node` arg
	                        // might be a `<motor-node>` but if it isn't upgraded then
	                        // its API won't be available to the logic inside the
	                        // childConnectedCallback. The reason this happens is
	                        // because parents are upgraded first and their
	                        // connectedCallbacks fired before their children are
	                        // upgraded.
	                        setTimeout(function () {
	                            var _iteratorNormalCompletion = true;
	                            var _didIteratorError = false;
	                            var _iteratorError = undefined;
	
	                            try {
	                                for (var _iterator = _this2.childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                    var node = _step.value;
	
	                                    _this2.childConnectedCallback(node);
	                                }
	                            } catch (err) {
	                                _didIteratorError = true;
	                                _iteratorError = err;
	                            } finally {
	                                try {
	                                    if (!_iteratorNormalCompletion && _iterator.return) {
	                                        _iterator.return();
	                                    }
	                                } finally {
	                                    if (_didIteratorError) {
	                                        throw _iteratorError;
	                                    }
	                                }
	                            }
	                        }, 5);
	                    }
	
	                    this._childObserver = (0, _Utility.observeChildren)(this, this.childConnectedCallback, this.childDisconnectedCallback);
	                }
	
	                // fire this.attributeChangedCallback in case some attributes have
	                // existed before the custom element was upgraded.
	                if (!this._initialAttributeChange && this.hasAttributes()) {
	
	                    // HTMLElement#attributes is a NamedNodeMap which is not an
	                    // iterable, so we use Array.from. See:
	                    // https://github.com/zloirock/core-js/issues/234
	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;
	
	                    try {
	                        for (var _iterator2 = Array.from(this.attributes)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var attr = _step2.value;
	
	                            this.attributeChangedCallback(attr.name, null, attr.value);
	                        }
	                    } catch (err) {
	                        _didIteratorError2 = true;
	                        _iteratorError2 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                _iterator2.return();
	                            }
	                        } finally {
	                            if (_didIteratorError2) {
	                                throw _iteratorError2;
	                            }
	                        }
	                    }
	                }
	            }
	        }, {
	            key: 'attributeChangedCallback',
	            value: function attributeChangedCallback() {
	                if (_get(WebComponent.prototype.__proto__ || Object.getPrototypeOf(WebComponent.prototype), 'attributeChangedCallback', this)) _get(WebComponent.prototype.__proto__ || Object.getPrototypeOf(WebComponent.prototype), 'attributeChangedCallback', this).call(this);
	                this._initialAttributeChange = true;
	            }
	
	            /**
	             * This is the reciprocal of init(). It will be called when an element
	             * has been disconnected but not re-connected within the same tick.
	             *
	             * The reason that init() and deinit() exist is so that if an element is
	             * moved from one place to another within the same synchronous tick,
	             * that deinit and init logic will not fire unnecessarily. If logic is
	             * needed in that case, then connectedCallback and disconnectedCallback
	             * can be used directly instead.
	             */
	
	        }, {
	            key: 'deinit',
	            value: function deinit() {
	                // Nothing much at the moment, but extending classes can extend
	                // this to add deintialization logic.
	
	                this._initialized = false;
	            }
	        }]);
	
	        return WebComponent;
	    }(elementClass);
	
	    classCache.set(elementClass, WebComponent);
	    return WebComponent;
	}

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _nodeStyle = __webpack_require__(448);
	
	var _nodeStyle2 = _interopRequireDefault(_nodeStyle);
	
	var _Node = __webpack_require__(365);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Transformable = __webpack_require__(367);
	
	var _Transformable2 = _interopRequireDefault(_Transformable);
	
	var _Sizeable = __webpack_require__(440);
	
	var _Sizeable2 = _interopRequireDefault(_Sizeable);
	
	var _base = __webpack_require__(449);
	
	var _base2 = _interopRequireDefault(_base);
	
	__webpack_require__(452);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	(0, _base.initMotorHTMLBase)();
	
	var MotorHTMLNode = function (_MotorHTMLBase) {
	    _inherits(MotorHTMLNode, _MotorHTMLBase);
	
	    function MotorHTMLNode() {
	        _classCallCheck(this, MotorHTMLNode);
	
	        return _possibleConstructorReturn(this, (MotorHTMLNode.__proto__ || Object.getPrototypeOf(MotorHTMLNode)).apply(this, arguments));
	    }
	
	    _createClass(MotorHTMLNode, [{
	        key: 'getStyles',
	        value: function getStyles() {
	            return _nodeStyle2.default;
	        }
	
	        // this is called by DeclarativeBase#init, which is called by
	        // WebComponent#connectedCallback, at which point this element has a
	        // parentNode.
	        // @override
	
	    }, {
	        key: '_makeImperativeCounterpart',
	        value: function _makeImperativeCounterpart() {
	            return new _Node2.default({
	                _motorHtmlCounterpart: this
	            });
	        }
	    }, {
	        key: 'attributeChangedCallback',
	        value: function () {
	            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	                var _get2;
	
	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                    args[_key] = arguments[_key];
	                }
	
	                return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                (_get2 = _get(MotorHTMLNode.prototype.__proto__ || Object.getPrototypeOf(MotorHTMLNode.prototype), 'attributeChangedCallback', this)).call.apply(_get2, [this].concat(args));
	                                _context.next = 3;
	                                return this._imperativeCounterpartPromise;
	
	                            case 3:
	                                this._updateNodeProperty.apply(this, args);
	
	                            case 4:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	
	            function attributeChangedCallback() {
	                return _ref.apply(this, arguments);
	            }
	
	            return attributeChangedCallback;
	        }()
	    }, {
	        key: '_updateNodeProperty',
	        value: function _updateNodeProperty(attribute, oldValue, newValue) {
	            // attributes on our HTML elements are the same name as those on
	            // the Node class (the setters).
	            if (newValue !== oldValue) {
	                if (attribute.match(/opacity/i)) this.imperativeCounterpart[attribute] = window.parseFloat(newValue);else if (attribute.match(/sizeMode/i)) this.imperativeCounterpart[attribute] = parseStringArray(newValue);else if (attribute.match(/rotation/i) || attribute.match(/scale/i) || attribute.match(/position/i) || attribute.match(/absoluteSize/i) || attribute.match(/proportionalSize/i) || attribute.match(/align/i) || attribute.match(/mountPoint/i) || attribute.match(/origin/i) || attribute.match(/skew/i)) {
	                    this.imperativeCounterpart[attribute] = parseNumberArray(newValue);
	                } else {
	                    /* nothing, ignore other attributes */
	                }
	            }
	        }
	    }]);
	
	    return MotorHTMLNode;
	}(_base2.default);
	
	// This associates the Transformable getters/setters with the HTML-API classes,
	// so that the same getters/setters can be called from HTML side of the API.
	
	
	(0, _base.proxyGettersSetters)(_Transformable2.default, MotorHTMLNode);
	(0, _base.proxyGettersSetters)(_Sizeable2.default, MotorHTMLNode);
	
	function parseNumberArray(str) {
	    checkIsNumberArrayString(str);
	    var numbers = str.trim().split(/(?:\s*,\s*)|(?:\s+)/g);
	    var length = numbers.length;
	    if (length > 0) numbers[0] = window.parseFloat(numbers[0]);
	    if (length > 1) numbers[1] = window.parseFloat(numbers[1]);
	    if (length > 2) numbers[2] = window.parseFloat(numbers[2]);
	    return numbers;
	}
	
	function parseStringArray(str) {
	    checkIsSizeArrayString(str);
	    var strings = str.trim().toLowerCase().split(/(?:\s*,\s*)|(?:\s+)/g);
	    var length = strings.length;
	    if (length > 0) strings[0] = window.parseFloat(strings[0]);
	    if (length > 1) strings[1] = window.parseFloat(strings[1]);
	    if (length > 2) strings[2] = window.parseFloat(strings[2]);
	    return strings;
	}
	
	function checkIsNumberArrayString(str) {
	    if (!str.match(/^\s*(((\s*(-|\+)?((\.\d+)|(\d+\.\d+)|(\d+))\s*,){0,2}(\s*(-|\+)?((\.\d+)|(\d+\.\d+)|(\d+))))|((\s*(-|\+)?((\.\d+)|(\d+\.\d+)|(\d+))\s){0,2}(\s*(-|\+)?((\.\d+)|(\d+\.\d+)|(\d+)))))\s*$/g)) throw new Error('Attribute must be a comma- or space-separated sequence of up to three numbers, for example "1 2.5 3". Yours was "' + str + '".');
	}
	
	function checkIsSizeArrayString(str) {
	    if (!str.match(/^\s*(((\s*([a-zA-Z]+)\s*,){0,2}(\s*([a-zA-Z]+)))|((\s*([a-zA-Z]+)\s*){1,3}))\s*$/g)) throw new Error('Attribute must be a comma- or space-separated sequence of up to three strings, for example "absolute absolute". Yours was "' + str + '".');
	}
	
	exports.default = MotorHTMLNode = document.registerElement('motor-node', MotorHTMLNode);
	
	exports.default = MotorHTMLNode;

/***/ },
/* 452 */
/***/ function(module, exports) {

	/*! (C) WebReflection Mit Style License */
	(function(e,t,n,r){"use strict";function ot(e,t){for(var n=0,r=e.length;n<r;n++)yt(e[n],t)}function ut(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],st(r,b[ft(r)])}function at(e){return function(t){j(t)&&(yt(t,e),ot(t.querySelectorAll(w),e))}}function ft(e){var t=R.call(e,"is"),n=e.nodeName.toUpperCase(),r=S.call(y,t?v+t.toUpperCase():d+n);return t&&-1<r&&!lt(n,t)?-1:r}function lt(e,t){return-1<w.indexOf(e+'[is="'+t+'"]')}function ct(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target;Z&&(!i||i===t)&&t.attributeChangedCallback&&r!=="style"&&e.prevValue!==e.newValue&&t.attributeChangedCallback(r,n===e[a]?null:e.prevValue,n===e[l]?null:e.newValue)}function ht(e){var t=at(e);return function(e){J.push(t,e.target)}}function pt(e){Y&&(Y=!1,e.currentTarget.removeEventListener(h,pt)),ot((e.target||t).querySelectorAll(w),e.detail===o?o:s),B&&mt()}function dt(e,t){var n=this;W.call(n,e,t),et.call(n,{target:n})}function vt(e,t){D(e,t),rt?rt.observe(e,V):(G&&(e.setAttribute=dt,e[i]=nt(e),e.addEventListener(p,et)),e.addEventListener(c,ct)),e.createdCallback&&Z&&(e.created=!0,e.createdCallback(),e.created=!1)}function mt(){for(var e,t=0,n=F.length;t<n;t++)e=F[t],E.contains(e)||(n--,F.splice(t--,1),yt(e,o))}function gt(e){throw new Error("A "+e+" type is already registered")}function yt(e,t){var n,r=ft(e);-1<r&&(it(e,b[r]),r=0,t===s&&!e[s]?(e[o]=!1,e[s]=!0,r=1,B&&S.call(F,e)<0&&F.push(e)):t===o&&!e[o]&&(e[s]=!1,e[o]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var i="__"+r+(Math.random()*1e5>>0),s="attached",o="detached",u="extends",a="ADDITION",f="MODIFICATION",l="REMOVAL",c="DOMAttrModified",h="DOMContentLoaded",p="DOMSubtreeModified",d="<",v="=",m=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,g=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],y=[],b=[],w="",E=t.documentElement,S=y.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},x=n.prototype,T=x.hasOwnProperty,N=x.isPrototypeOf,C=n.defineProperty,k=n.getOwnPropertyDescriptor,L=n.getOwnPropertyNames,A=n.getPrototypeOf,O=n.setPrototypeOf,M=!!n.__proto__,_=n.create||function bt(e){return e?(bt.prototype=e,new bt):this},D=O||(M?function(e,t){return e.__proto__=t,e}:L&&k?function(){function e(e,t){for(var n,r=L(t),i=0,s=r.length;i<s;i++)n=r[i],T.call(e,n)||C(e,n,k(t,n))}return function(t,n){do e(t,n);while((n=A(n))&&!N.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),P=e.MutationObserver||e.WebKitMutationObserver,H=(e.HTMLElement||e.Element||e.Node).prototype,B=!N.call(H,E),j=B?function(e){return e.nodeType===1}:function(e){return N.call(H,e)},F=B&&[],I=H.cloneNode,q=H.dispatchEvent,R=H.getAttribute,U=H.hasAttribute,z=H.removeAttribute,W=H.setAttribute,X=t.createElement,V=P&&{attributes:!0,characterData:!0,attributeOldValue:!0},$=P||function(e){G=!1,E.removeEventListener(c,$)},J,K=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,10)},Q=!1,G=!0,Y=!0,Z=!0,et,tt,nt,rt,it,st;O||M?(it=function(e,t){N.call(t,e)||vt(e,t)},st=vt):(it=function(e,t){e[i]||(e[i]=n(!0),vt(e,t))},st=it),B?(G=!1,function(){var e=k(H,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(c,{bubbles:!0});t.attrName=e,t.prevValue=R.call(this,e),t.newValue=null,t[l]=t.attrChange=2,z.call(this,e),q.call(this,t)},r=function(e,t){var n=U.call(this,e),r=n&&R.call(this,e),i=new CustomEvent(c,{bubbles:!0});W.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[f]=i.attrChange=1:i[a]=i.attrChange=0,q.call(this,i)},s=function(e){var t=e.currentTarget,n=t[i],r=e.propertyName,s;n.hasOwnProperty(r)&&(n=n[r],s=new CustomEvent(c,{bubbles:!0}),s.attrName=n.name,s.prevValue=n.value||null,s.newValue=n.value=t[r]||null,s.prevValue==null?s[a]=s.attrChange=0:s[f]=s.attrChange=1,q.call(t,s))};e.value=function(e,o,u){e===c&&this.attributeChangedCallback&&this.setAttribute!==r&&(this[i]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",s)),t.call(this,e,o,u)},C(H,"addEventListener",e)}()):P||(E.addEventListener(c,$),E.setAttribute(i,1),E.removeAttribute(i),G&&(et=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=nt(t);for(s in r){if(!(s in n))return tt(0,t,s,n[s],r[s],a);if(r[s]!==n[s])return tt(1,t,s,n[s],r[s],f)}for(s in n)if(!(s in r))return tt(2,t,s,n[s],r[s],l)}},tt=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,ct(o)},nt=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(n,r){c=n.toUpperCase(),Q||(Q=!0,P?(rt=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new P(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,Z&&s.attributeChangedCallback&&i.attributeName!=="style"&&(o=R.call(s,i.attributeName),o!==i.oldValue&&s.attributeChangedCallback(i.attributeName,i.oldValue,o)))})}(at(s),at(o)),rt.observe(t,{childList:!0,subtree:!0})):(J=[],K(function E(){while(J.length)J.shift().call(null,J.shift());K(E)}),t.addEventListener("DOMNodeInserted",ht(s)),t.addEventListener("DOMNodeRemoved",ht(o))),t.addEventListener(h,pt),t.addEventListener("readystatechange",pt),t.createElement=function(e,n){var r=typeof n=="string"?n:"",i=r?X.call(t,e,r):X.call(t,e),s=""+e,o=S.call(y,(r?v:d)+(r||s).toUpperCase()),u=-1<o;return r&&(i.setAttribute("is",r=r.toLowerCase()),u&&(u=lt(s.toUpperCase(),r))),Z=!t.createElement.innerHTMLHelper,u&&st(i,b[o]),i},H.cloneNode=function(e){var t=I.call(this,!!e),n=ft(t);return-1<n&&st(t,b[n]),e&&ut(t.querySelectorAll(w)),t}),-2<S.call(y,v+c)+S.call(y,d+c)&&gt(n);if(!m.test(c)||-1<S.call(g,c))throw new Error("The type "+n+" is invalid");var i=function(){return f?t.createElement(l,c):t.createElement(l)},a=r||x,f=T.call(a,u),l=f?r[u].toUpperCase():c,c,p;return f&&-1<S.call(y,d+l)&&gt(l),p=y.push((f?v:d)+c)-1,w=w.concat(w.length?",":"",f?l+'[is="'+n.toLowerCase()+'"]':l),i.prototype=b[p]=T.call(a,"prototype")?a.prototype:_(H),ot(t.querySelectorAll(w),s),i}})(window,document,Object,"registerElement");

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Node2 = __webpack_require__(365);
	
	var _Node3 = _interopRequireDefault(_Node2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PushPaneLayout = function (_Node) {
	    _inherits(PushPaneLayout, _Node);
	
	    function PushPaneLayout() {
	        var _ref;
	
	        _classCallCheck(this, PushPaneLayout);
	
	        console.log(' -- PushPaneLayout created');
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _possibleConstructorReturn(this, (_ref = PushPaneLayout.__proto__ || Object.getPrototypeOf(PushPaneLayout)).call.apply(_ref, [this].concat(args)));
	    }
	
	    return PushPaneLayout;
	}(_Node3.default);
	
	exports.default = PushPaneLayout;

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WebComponent = exports.MotorHTMLScene = exports.MotorHTMLPushPaneLayout = exports.MotorHTMLNode = exports.MotorHTMLBase = undefined;
	
	var _base = __webpack_require__(449);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _node = __webpack_require__(451);
	
	var _node2 = _interopRequireDefault(_node);
	
	var _pushPaneLayout = __webpack_require__(455);
	
	var _pushPaneLayout2 = _interopRequireDefault(_pushPaneLayout);
	
	var _scene = __webpack_require__(446);
	
	var _scene2 = _interopRequireDefault(_scene);
	
	var _webComponent = __webpack_require__(450);
	
	var _webComponent2 = _interopRequireDefault(_webComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.MotorHTMLBase = _base2.default;
	exports.MotorHTMLNode = _node2.default;
	exports.MotorHTMLPushPaneLayout = _pushPaneLayout2.default;
	exports.MotorHTMLScene = _scene2.default;
	exports.WebComponent = _webComponent2.default;

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _node = __webpack_require__(451);
	
	var _node2 = _interopRequireDefault(_node);
	
	var _PushPaneLayout = __webpack_require__(453);
	
	var _PushPaneLayout2 = _interopRequireDefault(_PushPaneLayout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MotorHTMLPushPaneLayout = function (_MotorHTMLNode) {
	    _inherits(MotorHTMLPushPaneLayout, _MotorHTMLNode);
	
	    function MotorHTMLPushPaneLayout() {
	        _classCallCheck(this, MotorHTMLPushPaneLayout);
	
	        return _possibleConstructorReturn(this, (MotorHTMLPushPaneLayout.__proto__ || Object.getPrototypeOf(MotorHTMLPushPaneLayout)).apply(this, arguments));
	    }
	
	    _createClass(MotorHTMLPushPaneLayout, [{
	        key: 'createdCallback',
	        value: function createdCallback() {
	            console.log(' -- MotorHTMLPushPaneLayout created');
	            _get(MotorHTMLPushPaneLayout.prototype.__proto__ || Object.getPrototypeOf(MotorHTMLPushPaneLayout.prototype), 'createdCallback', this).call(this);
	        }
	
	        // @override
	
	    }, {
	        key: '_makeImperativeCounterpart',
	        value: function _makeImperativeCounterpart() {
	            return new _PushPaneLayout2.default({}, this);
	        }
	    }]);
	
	    return MotorHTMLPushPaneLayout;
	}(_node2.default);
	
	exports.default = MotorHTMLPushPaneLayout;

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(__webpack_module_template_argument_0__)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	var dP         = __webpack_require__(__webpack_module_template_argument_0__)
	  , createDesc = __webpack_require__(__webpack_module_template_argument_1__);
	module.exports = __webpack_require__(__webpack_module_template_argument_2__) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__) {

	var anObject       = __webpack_require__(__webpack_module_template_argument_0__)
	  , IE8_DOM_DEFINE = __webpack_require__(__webpack_module_template_argument_1__)
	  , toPrimitive    = __webpack_require__(__webpack_module_template_argument_2__)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(__webpack_module_template_argument_3__) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var isObject = __webpack_require__(__webpack_module_template_argument_0__);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	module.exports = !__webpack_require__(__webpack_module_template_argument_0__) && !__webpack_require__(__webpack_module_template_argument_1__)(function(){
	  return Object.defineProperty(__webpack_require__(__webpack_module_template_argument_2__)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var isObject = __webpack_require__(__webpack_module_template_argument_0__)
	  , document = __webpack_require__(__webpack_module_template_argument_1__).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(__webpack_module_template_argument_0__);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(__webpack_module_template_argument_0__);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var global = __webpack_require__(__webpack_module_template_argument_0__)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	var def = __webpack_require__(__webpack_module_template_argument_0__).f
	  , has = __webpack_require__(__webpack_module_template_argument_1__)
	  , TAG = __webpack_require__(__webpack_module_template_argument_2__)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	var store      = __webpack_require__(__webpack_module_template_argument_0__)('wks')
	  , uid        = __webpack_require__(__webpack_module_template_argument_1__)
	  , Symbol     = __webpack_require__(__webpack_module_template_argument_2__).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(__webpack_module_template_argument_0__)
	  , enumBugKeys = __webpack_require__(__webpack_module_template_argument_1__);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__) {

	var has          = __webpack_require__(__webpack_module_template_argument_0__)
	  , toIObject    = __webpack_require__(__webpack_module_template_argument_1__)
	  , arrayIndexOf = __webpack_require__(__webpack_module_template_argument_2__)(false)
	  , IE_PROTO     = __webpack_require__(__webpack_module_template_argument_3__)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(__webpack_module_template_argument_0__)
	  , defined = __webpack_require__(__webpack_module_template_argument_1__);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(__webpack_module_template_argument_0__);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(__webpack_module_template_argument_0__)
	  , toLength  = __webpack_require__(__webpack_module_template_argument_1__)
	  , toIndex   = __webpack_require__(__webpack_module_template_argument_2__);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(__webpack_module_template_argument_0__)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var toInteger = __webpack_require__(__webpack_module_template_argument_0__)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var shared = __webpack_require__(__webpack_module_template_argument_0__)('keys')
	  , uid    = __webpack_require__(__webpack_module_template_argument_1__);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(__webpack_module_template_argument_0__)
	  , dPs         = __webpack_require__(__webpack_module_template_argument_1__)
	  , enumBugKeys = __webpack_require__(__webpack_module_template_argument_2__)
	  , IE_PROTO    = __webpack_require__(__webpack_module_template_argument_3__)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(__webpack_module_template_argument_4__)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(__webpack_module_template_argument_5__).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__) {

	var dP       = __webpack_require__(__webpack_module_template_argument_0__)
	  , anObject = __webpack_require__(__webpack_module_template_argument_1__)
	  , getKeys  = __webpack_require__(__webpack_module_template_argument_2__);
	
	module.exports = __webpack_require__(__webpack_module_template_argument_3__) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	module.exports = __webpack_require__(__webpack_module_template_argument_0__).document && document.documentElement;

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(__webpack_module_template_argument_0__);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(__webpack_module_template_argument_0__)
	  , toObject    = __webpack_require__(__webpack_module_template_argument_1__)
	  , IE_PROTO    = __webpack_require__(__webpack_module_template_argument_2__)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(__webpack_module_template_argument_0__)
	  , TAG = __webpack_require__(__webpack_module_template_argument_1__)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	'use strict';
	var $at  = __webpack_require__(__webpack_module_template_argument_0__)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(__webpack_module_template_argument_1__)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	var toInteger = __webpack_require__(__webpack_module_template_argument_0__)
	  , defined   = __webpack_require__(__webpack_module_template_argument_1__);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__, __webpack_module_template_argument_6__, __webpack_module_template_argument_7__, __webpack_module_template_argument_8__, __webpack_module_template_argument_9__) {

	'use strict';
	var LIBRARY        = __webpack_require__(__webpack_module_template_argument_0__)
	  , $export        = __webpack_require__(__webpack_module_template_argument_1__)
	  , redefine       = __webpack_require__(__webpack_module_template_argument_2__)
	  , hide           = __webpack_require__(__webpack_module_template_argument_3__)
	  , has            = __webpack_require__(__webpack_module_template_argument_4__)
	  , Iterators      = __webpack_require__(__webpack_module_template_argument_5__)
	  , $iterCreate    = __webpack_require__(__webpack_module_template_argument_6__)
	  , setToStringTag = __webpack_require__(__webpack_module_template_argument_7__)
	  , getPrototypeOf = __webpack_require__(__webpack_module_template_argument_8__)
	  , ITERATOR       = __webpack_require__(__webpack_module_template_argument_9__)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__) {

	'use strict';
	var create         = __webpack_require__(__webpack_module_template_argument_0__)
	  , descriptor     = __webpack_require__(__webpack_module_template_argument_1__)
	  , setToStringTag = __webpack_require__(__webpack_module_template_argument_2__)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(__webpack_module_template_argument_3__)(IteratorPrototype, __webpack_require__(__webpack_module_template_argument_4__)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(__webpack_module_template_argument_0__);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(__webpack_module_template_argument_0__)
	  , ITERATOR   = __webpack_require__(__webpack_module_template_argument_1__)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__) {

	var classof   = __webpack_require__(__webpack_module_template_argument_0__)
	  , ITERATOR  = __webpack_require__(__webpack_module_template_argument_1__)('iterator')
	  , Iterators = __webpack_require__(__webpack_module_template_argument_2__);
	module.exports = __webpack_require__(__webpack_module_template_argument_3__).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	var ITERATOR     = __webpack_require__(__webpack_module_template_argument_0__)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__) {

	'use strict';
	var addToUnscopables = __webpack_require__(__webpack_module_template_argument_0__)
	  , step             = __webpack_require__(__webpack_module_template_argument_1__)
	  , Iterators        = __webpack_require__(__webpack_module_template_argument_2__)
	  , toIObject        = __webpack_require__(__webpack_module_template_argument_3__);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(__webpack_module_template_argument_4__)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__, __webpack_module_template_argument_6__, __webpack_module_template_argument_7__, __webpack_module_template_argument_8__, __webpack_module_template_argument_9__, __webpack_module_template_argument_10__, __webpack_module_template_argument_11__, __webpack_module_template_argument_12__, __webpack_module_template_argument_13__, __webpack_module_template_argument_14__, __webpack_module_template_argument_15__, __webpack_module_template_argument_16__, __webpack_module_template_argument_17__) {

	'use strict';
	var LIBRARY            = __webpack_require__(__webpack_module_template_argument_0__)
	  , global             = __webpack_require__(__webpack_module_template_argument_1__)
	  , ctx                = __webpack_require__(__webpack_module_template_argument_2__)
	  , classof            = __webpack_require__(__webpack_module_template_argument_3__)
	  , $export            = __webpack_require__(__webpack_module_template_argument_4__)
	  , isObject           = __webpack_require__(__webpack_module_template_argument_5__)
	  , aFunction          = __webpack_require__(__webpack_module_template_argument_6__)
	  , anInstance         = __webpack_require__(__webpack_module_template_argument_7__)
	  , forOf              = __webpack_require__(__webpack_module_template_argument_8__)
	  , speciesConstructor = __webpack_require__(__webpack_module_template_argument_9__)
	  , task               = __webpack_require__(__webpack_module_template_argument_10__).set
	  , microtask          = __webpack_require__(__webpack_module_template_argument_11__)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(__webpack_module_template_argument_12__)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(__webpack_module_template_argument_13__)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(__webpack_module_template_argument_14__)($Promise, PROMISE);
	__webpack_require__(__webpack_module_template_argument_15__)(PROMISE);
	Wrapper = __webpack_require__(__webpack_module_template_argument_16__)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(__webpack_module_template_argument_17__)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__) {

	var ctx         = __webpack_require__(__webpack_module_template_argument_0__)
	  , call        = __webpack_require__(__webpack_module_template_argument_1__)
	  , isArrayIter = __webpack_require__(__webpack_module_template_argument_2__)
	  , anObject    = __webpack_require__(__webpack_module_template_argument_3__)
	  , toLength    = __webpack_require__(__webpack_module_template_argument_4__)
	  , getIterFn   = __webpack_require__(__webpack_module_template_argument_5__)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(__webpack_module_template_argument_0__)
	  , aFunction = __webpack_require__(__webpack_module_template_argument_1__)
	  , SPECIES   = __webpack_require__(__webpack_module_template_argument_2__)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__, __webpack_module_template_argument_3__, __webpack_module_template_argument_4__, __webpack_module_template_argument_5__) {

	var ctx                = __webpack_require__(__webpack_module_template_argument_0__)
	  , invoke             = __webpack_require__(__webpack_module_template_argument_1__)
	  , html               = __webpack_require__(__webpack_module_template_argument_2__)
	  , cel                = __webpack_require__(__webpack_module_template_argument_3__)
	  , global             = __webpack_require__(__webpack_module_template_argument_4__)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(__webpack_module_template_argument_5__)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__, __webpack_module_template_argument_1__, __webpack_module_template_argument_2__) {

	var global    = __webpack_require__(__webpack_module_template_argument_0__)
	  , macrotask = __webpack_require__(__webpack_module_template_argument_1__).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(__webpack_module_template_argument_2__)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ }
/******/ ])))
});
;
//# sourceMappingURL=global.js.map