// node_modules/excalibur/build/esm/excalibur.js
var __webpack_require__ = function(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  var module = __webpack_module_cache__[moduleId] = {
    id: moduleId,
    exports: {}
  };
  __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  return module.exports;
};
/*!
 * excalibur - 0.29.0-alpha.835+11dfe50 - 2024-1-14
 * https://github.com/excaliburjs/Excalibur
 * Copyright (c) 2024 Excalibur.js <https://github.com/excaliburjs/Excalibur/graphs/contributors>
 * Licensed BSD-2-Clause
 * @preserve
 */
var __webpack_modules__ = {
  7835: (module, __webpack_exports__, __webpack_require__2) => {
    __webpack_require__2.d(__webpack_exports__, {
      Z: () => __WEBPACK_DEFAULT_EXPORT__
    });
    var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(272);
    var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
    var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(2609);
    var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
    var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
    ___CSS_LOADER_EXPORT___.push([module.id, `/* Buttons styles start */

button#excalibur-play {
  display: inline-block;
  position: relative;
  z-index: 999;
  border-radius: 6px;
  border: none;
  /*border: 3px solid;
    border-color: white;
    box-shadow: 0 0 10px #ccc;*/
  padding: 1rem 1.5rem 1rem 4rem;
  margin: 0;
  text-decoration: none;
  background: #00b233;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 2rem;
  white-space: nowrap;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  -webkit-animation: excalibur-button-fadein 200ms; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: excalibur-button-fadein 200ms; /* Firefox < 16 */
  -ms-animation: excalibur-button-fadein 200ms; /* Internet Explorer */
  -o-animation: excalibur-button-fadein 200ms; /* Opera < 12.1 */
  animation: excalibur-button-fadein 200ms;
}

/*
button#excalibur-play {
  display: none;
}*/

button#excalibur-play:after {
  position: absolute;
  content: '';
  border: 8px solid;
  border-color: transparent transparent transparent white;
  left: 35px;
  top: 24px;
  width: 0;
  height: 0;
}

button#excalibur-play:before {
  position: absolute;
  content: '';
  border: 3px solid;
  left: 19px;
  top: 14px;
  border-radius: 20px;
  width: 30px;
  height: 30px;
}

button#excalibur-play:hover,
button#excalibur-play:focus {
  background: #00982c;
}

button#excalibur-play:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}

button#excalibur-play:active {
  transform: scale(0.99);
}

@keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes excalibur-button-fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`, "", { version: 3, sources: ["webpack://./Director/Loader.css"], names: [], mappings: "AAAA,yBAAyB;;AAEzB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ;;+BAE6B;EAC7B,8BAA8B;EAC9B,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,8DAA8D;EAC9D,wBAAwB;EACxB,qBAAqB;;EAErB,gDAAgD,EAAE,oCAAoC;EACtF,6CAA6C,EAAE,iBAAiB;EAChE,4CAA4C,EAAE,sBAAsB;EACpE,2CAA2C,EAAE,iBAAiB;EAC9D,wCAAwC;AAC1C;;AAEA;;;EAGE;;AAEF;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,uDAAuD;EACvD,UAAU;EACV,SAAS;EACT,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,iBAAiB;AACjB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,oCAAoC;AACpC;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,sBAAsB;AACtB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA,iBAAiB;AACjB;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF", sourcesContent: ["/* Buttons styles start */\n\nbutton#excalibur-play {\n  display: inline-block;\n  position: relative;\n  z-index: 999;\n  border-radius: 6px;\n  border: none;\n  /*border: 3px solid;\n    border-color: white;\n    box-shadow: 0 0 10px #ccc;*/\n  padding: 1rem 1.5rem 1rem 4rem;\n  margin: 0;\n  text-decoration: none;\n  background: #00b233;\n  color: #ffffff;\n  font-family: sans-serif;\n  font-size: 2rem;\n  white-space: nowrap;\n  line-height: 1;\n  cursor: pointer;\n  text-align: center;\n  transition: background 250ms ease-in-out, transform 150ms ease;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n\n  -webkit-animation: excalibur-button-fadein 200ms; /* Safari, Chrome and Opera > 12.1 */\n  -moz-animation: excalibur-button-fadein 200ms; /* Firefox < 16 */\n  -ms-animation: excalibur-button-fadein 200ms; /* Internet Explorer */\n  -o-animation: excalibur-button-fadein 200ms; /* Opera < 12.1 */\n  animation: excalibur-button-fadein 200ms;\n}\n\n/*\nbutton#excalibur-play {\n  display: none;\n}*/\n\nbutton#excalibur-play:after {\n  position: absolute;\n  content: '';\n  border: 8px solid;\n  border-color: transparent transparent transparent white;\n  left: 35px;\n  top: 24px;\n  width: 0;\n  height: 0;\n}\n\nbutton#excalibur-play:before {\n  position: absolute;\n  content: '';\n  border: 3px solid;\n  left: 19px;\n  top: 14px;\n  border-radius: 20px;\n  width: 30px;\n  height: 30px;\n}\n\nbutton#excalibur-play:hover,\nbutton#excalibur-play:focus {\n  background: #00982c;\n}\n\nbutton#excalibur-play:focus {\n  outline: 1px solid #fff;\n  outline-offset: -4px;\n}\n\nbutton#excalibur-play:active {\n  transform: scale(0.99);\n}\n\n@keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Firefox < 16 */\n@-moz-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Internet Explorer */\n@-ms-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* Opera < 12.1 */\n@-o-keyframes excalibur-button-fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n"], sourceRoot: "" }]);
    const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
  },
  7379: (module, __webpack_exports__, __webpack_require__2) => {
    __webpack_require__2.d(__webpack_exports__, {
      Z: () => __WEBPACK_DEFAULT_EXPORT__
    });
    var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__2(272);
    var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
    var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__2(2609);
    var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__2.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
    var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
    ___CSS_LOADER_EXPORT___.push([module.id, `
#ex-toast-container {
  position: absolute;
  height: 0;
  min-width: 50%;
  left: 50%;
  top: 0;
}

.ex-toast-message {
  left: -50%;
  position: relative;
  display: flex;
  justify-content: space-between;


  padding: 10px;
  margin-top: 5px;
  font-size: 18px;
  font-family: sans-serif;
  border-radius: 6px;
  border: 3px solid #b7b779;
  background-color: rgb(253, 253, 192);
}


.ex-toast-message button {
  align-self: flex-start;
}`, "", { version: 3, sources: ["webpack://./Util/Toaster.css"], names: [], mappings: ";AACA;EACE,kBAAkB;EAClB,SAAS;EACT,cAAc;EACd,SAAS;EACT,MAAM;AACR;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,8BAA8B;;;EAG9B,aAAa;EACb,eAAe;EACf,eAAe;EACf,uBAAuB;EACvB,kBAAkB;EAClB,yBAAyB;EACzB,oCAAoC;AACtC;;;AAGA;EACE,sBAAsB;AACxB", sourcesContent: ["\n#ex-toast-container {\n  position: absolute;\n  height: 0;\n  min-width: 50%;\n  left: 50%;\n  top: 0;\n}\n\n.ex-toast-message {\n  left: -50%;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n\n\n  padding: 10px;\n  margin-top: 5px;\n  font-size: 18px;\n  font-family: sans-serif;\n  border-radius: 6px;\n  border: 3px solid #b7b779;\n  background-color: rgb(253, 253, 192);\n}\n\n\n.ex-toast-message button {\n  align-self: flex-start;\n}"], sourceRoot: "" }]);
    const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
  },
  2609: (module) => {
    module.exports = function(cssWithMappingToString) {
      var list = [];
      list.toString = function toString() {
        return this.map(function(item) {
          var content = "";
          var needLayer = typeof item[5] !== "undefined";
          if (item[4]) {
            content += "@supports (".concat(item[4], ") {");
          }
          if (item[2]) {
            content += "@media ".concat(item[2], " {");
          }
          if (needLayer) {
            content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
          }
          content += cssWithMappingToString(item);
          if (needLayer) {
            content += "}";
          }
          if (item[2]) {
            content += "}";
          }
          if (item[4]) {
            content += "}";
          }
          return content;
        }).join("");
      };
      list.i = function i(modules, media, dedupe, supports, layer) {
        if (typeof modules === "string") {
          modules = [[null, modules, undefined]];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
          for (var k = 0;k < this.length; k++) {
            var id = this[k][0];
            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }
        for (var _k = 0;_k < modules.length; _k++) {
          var item = [].concat(modules[_k]);
          if (dedupe && alreadyImportedModules[item[0]]) {
            continue;
          }
          if (typeof layer !== "undefined") {
            if (typeof item[5] === "undefined") {
              item[5] = layer;
            } else {
              item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
              item[5] = layer;
            }
          }
          if (media) {
            if (!item[2]) {
              item[2] = media;
            } else {
              item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
              item[2] = media;
            }
          }
          if (supports) {
            if (!item[4]) {
              item[4] = "".concat(supports);
            } else {
              item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
              item[4] = supports;
            }
          }
          list.push(item);
        }
      };
      return list;
    };
  },
  272: (module) => {
    module.exports = function(item) {
      var content = item[1];
      var cssMapping = item[3];
      if (!cssMapping) {
        return content;
      }
      if (typeof btoa === "function") {
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
        var sourceMapping = "/*# ".concat(data, " */");
        return [content].concat([sourceMapping]).join("\n");
      }
      return [content].join("\n");
    };
  },
  1324: (module, __unused_webpack_exports, __webpack_require__2) => {
    __webpack_require__2(7206);
    var entryUnbind = __webpack_require__2(8193);
    module.exports = entryUnbind("Array", "sort");
  },
  3571: (module, __unused_webpack_exports, __webpack_require__2) => {
    __webpack_require__2(9867);
    var path = __webpack_require__2(8588);
    module.exports = path.Object.keys;
  },
  1052: (module, __unused_webpack_exports, __webpack_require__2) => {
    var isCallable = __webpack_require__2(688);
    var tryToString = __webpack_require__2(3397);
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  },
  9175: (module, __unused_webpack_exports, __webpack_require__2) => {
    var isObject = __webpack_require__2(5309);
    var $String = String;
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isObject(argument))
        return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  },
  1138: (module, __unused_webpack_exports, __webpack_require__2) => {
    var toIndexedObject = __webpack_require__2(6854);
    var toAbsoluteIndex = __webpack_require__2(7352);
    var lengthOfArrayLike = __webpack_require__2(8344);
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el)
          while (length > index) {
            value = O[index++];
            if (value !== value)
              return true;
          }
        else
          for (;length > index; index++) {
            if ((IS_INCLUDES || (index in O)) && O[index] === el)
              return IS_INCLUDES || index || 0;
          }
        return !IS_INCLUDES && -1;
      };
    };
    module.exports = {
      includes: createMethod(true),
      indexOf: createMethod(false)
    };
  },
  567: (module, __unused_webpack_exports, __webpack_require__2) => {
    var fails = __webpack_require__2(4694);
    module.exports = function(METHOD_NAME, argument) {
      var method = [][METHOD_NAME];
      return !!method && fails(function() {
        method.call(null, argument || function() {
          return 1;
        }, 1);
      });
    };
  },
  6403: (module, __unused_webpack_exports, __webpack_require__2) => {
    var toAbsoluteIndex = __webpack_require__2(7352);
    var lengthOfArrayLike = __webpack_require__2(8344);
    var createProperty = __webpack_require__2(3182);
    var $Array = Array;
    var max = Math.max;
    module.exports = function(O, start, end) {
      var length = lengthOfArrayLike(O);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      var result = $Array(max(fin - k, 0));
      var n = 0;
      for (;k < fin; k++, n++)
        createProperty(result, n, O[k]);
      result.length = n;
      return result;
    };
  },
  3097: (module, __unused_webpack_exports, __webpack_require__2) => {
    var arraySlice = __webpack_require__2(6403);
    var floor = Math.floor;
    var mergeSort = function(array, comparefn) {
      var length = array.length;
      var middle = floor(length / 2);
      return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySlice(array, 0, middle), comparefn), mergeSort(arraySlice(array, middle), comparefn), comparefn);
    };
    var insertionSort = function(array, comparefn) {
      var length = array.length;
      var i = 1;
      var element, j;
      while (i < length) {
        j = i;
        element = array[i];
        while (j && comparefn(array[j - 1], element) > 0) {
          array[j] = array[--j];
        }
        if (j !== i++)
          array[j] = element;
      }
      return array;
    };
    var merge = function(array, left, right, comparefn) {
      var llength = left.length;
      var rlength = right.length;
      var lindex = 0;
      var rindex = 0;
      while (lindex < llength || rindex < rlength) {
        array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
      }
      return array;
    };
    module.exports = mergeSort;
  },
  2177: (module, __unused_webpack_exports, __webpack_require__2) => {
    var uncurryThis = __webpack_require__2(9668);
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  },
  1566: (module, __unused_webpack_exports, __webpack_require__2) => {
    var TO_STRING_TAG_SUPPORT = __webpack_require__2(2522);
    var isCallable = __webpack_require__2(688);
    var classofRaw = __webpack_require__2(2177);
    var wellKnownSymbol = __webpack_require__2(2032);
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(function() {
      return arguments;
    }()) === "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  },
  3891: (module, __unused_webpack_exports, __webpack_require__2) => {
    var hasOwn = __webpack_require__2(4678);
    var ownKeys = __webpack_require__2(990);
    var getOwnPropertyDescriptorModule = __webpack_require__2(7537);
    var definePropertyModule = __webpack_require__2(2131);
    module.exports = function(target, source, exceptions) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0;i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  },
  2385: (module, __unused_webpack_exports, __webpack_require__2) => {
    var DESCRIPTORS = __webpack_require__2(9924);
    var definePropertyModule = __webpack_require__2(2131);
    var createPropertyDescriptor = __webpack_require__2(7781);
    module.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  },
  7781: (module) => {
    module.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  },
  3182: (module, __unused_webpack_exports, __webpack_require__2) => {
    var toPropertyKey = __webpack_require__2(2358);
    var definePropertyModule = __webpack_require__2(2131);
    var createPropertyDescriptor = __webpack_require__2(7781);
    module.exports = function(object, key, value) {
      var propertyKey = toPropertyKey(key);
      if (propertyKey in object)
        definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
      else
        object[propertyKey] = value;
    };
  },
  2470: (module, __unused_webpack_exports, __webpack_require__2) => {
    var isCallable = __webpack_require__2(688);
    var definePropertyModule = __webpack_require__2(2131);
    var makeBuiltIn = __webpack_require__2(1135);
    var defineGlobalProperty = __webpack_require__2(1604);
    module.exports = function(O, key, value, options) {
      if (!options)
        options = {};
      var simple = options.enumerable;
      var name = options.name !== undefined ? options.name : key;
      if (isCallable(value))
        makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple)
          O[key] = value;
        else
          defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe)
            delete O[key];
          else if (O[key])
            simple = true;
        } catch (error) {
        }
        if (simple)
          O[key] = value;
        else
          definePropertyModule.f(O, key, {
            value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          });
      }
      return O;
    };
  },
  1604: (module, __unused_webpack_exports, __webpack_require__2) => {
    var global = __webpack_require__2(2150);
    var defineProperty = Object.defineProperty;
    module.exports = function(key, value) {
      try {
        defineProperty(global, key, { value, configurable: true, writable: true });
      } catch (error) {
        global[key] = value;
      }
      return value;
    };
  },
  955: (module, __unused_webpack_exports, __webpack_require__2) => {
    var tryToString = __webpack_require__2(3397);
    var $TypeError = TypeError;
    module.exports = function(O, P) {
      if (!delete O[P])
        throw new $TypeError("Cannot delete property " + tryToString(P) + " of " + tryToString(O));
    };
  },
  9924: (module, __unused_webpack_exports, __webpack_require__2) => {
    var fails = __webpack_require__2(4694);
    module.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  },
  1811: (module) => {
    var documentAll = typeof document == "object" && document.all;
    var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
    module.exports = {
      all: documentAll,
      IS_HTMLDDA
    };
  },
  1442: (module, __unused_webpack_exports, __webpack_require__2) => {
    var global = __webpack_require__2(2150);
    var isObject = __webpack_require__2(5309);
    var document2 = global.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  },
  9016: (module, __unused_webpack_exports, __webpack_require__2) => {
    var userAgent = __webpack_require__2(1370);
    var firefox = userAgent.match(/firefox\/(\d+)/i);
    module.exports = !!firefox && +firefox[1];
  },
  821: (module, __unused_webpack_exports, __webpack_require__2) => {
    var UA = __webpack_require__2(1370);
    module.exports = /MSIE|Trident/.test(UA);
  },
  1370: (module) => {
    module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  },
  7067: (module, __unused_webpack_exports, __webpack_require__2) => {
    var global = __webpack_require__2(2150);
    var userAgent = __webpack_require__2(1370);
    var process = global.process;
    var Deno = global.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match, version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match)
          version = +match[1];
      }
    }
    module.exports = version;
  },
  4389: (module, __unused_webpack_exports, __webpack_require__2) => {
    var userAgent = __webpack_require__2(1370);
    var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
    module.exports = !!webkit && +webkit[1];
  },
  8193: (module, __unused_webpack_exports, __webpack_require__2) => {
    var global = __webpack_require__2(2150);
    var uncurryThis = __webpack_require__2(9668);
    module.exports = function(CONSTRUCTOR, METHOD) {
      return uncurryThis(global[CONSTRUCTOR].prototype[METHOD]);
    };
  },
  2367: (module) => {
    module.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  },
  5532: (module, __unused_webpack_exports, __webpack_require__2) => {
    var global = __webpack_require__2(2150);
    var getOwnPropertyDescriptor = __webpack_require__2(7537).f;
    var createNonEnumerableProperty = __webpack_require__2(2385);
    var defineBuiltIn = __webpack_require__2(2470);
    var defineGlobalProperty = __webpack_require__2(1604);
    var copyConstructorProperties = __webpack_require__2(3891);
    var isForced = __webpack_require__2(1633);
    module.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = global;
      } else if (STATIC) {
        target = global[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = (global[TARGET] || {}).prototype;
      }
      if (target)
        for (key in source) {
          sourceProperty = source[key];
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else
            targetProperty = target[key];
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, "sham", true);
          }
          defineBuiltIn(target, key, sourceProperty, options);
        }
    };
  },
  4694: (module) => {
    module.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  },
  6398: (module, __unused_webpack_exports, __webpack_require__2) => {
    var fails = __webpack_require__2(4694);
    module.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  },
  8724: (module, __unused_webpack_exports, __webpack_require__2) => {
    var NATIVE_BIND = __webpack_require__2(6398);
    var call = Function.prototype.call;
    module.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  },
  453: (module, __unused_webpack_exports, __webpack_require__2) => {
    var DESCRIPTORS = __webpack_require__2(9924);
    var hasOwn = __webpack_require__2(4678);
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  },
  9668: (module, __unused_webpack_exports, __webpack_require__2) => {
    var NATIVE_BIND = __webpack_require__2(6398);
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  },
  2160: (module, __unused_webpack_exports, __webpack_require__2) => {
    var global = __webpack_require__2(2150);
    var isCallable = __webpack_require__2(688);
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : undefined;
    };
    module.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
    };
  },
  5383: (module, __unused_webpack_exports, __webpack_require__2) => {
    var aCallable = __webpack_require__2(1052);
    var isNullOrUndefined = __webpack_require__2(5268);
    module.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? undefined : aCallable(func);
    };
  },
  2150: function(module, __unused_webpack_exports, __webpack_require__2) {
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof __webpack_require__2.g == "object" && __webpack_require__2.g) || check(typeof this == "object" && this) || function() {
      return this;
    }() || Function("return this")();
  },
  4678: (module, __unused_webpack_exports, __webpack_require__2) => {
    var uncurryThis = __webpack_require__2(9668);
    var toObject = __webpack_require__2(298);
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  },
  7390: (module) => {
    module.exports = {};
  },
  7913: (module, __unused_webpack_exports, __webpack_require__2) => {
    var DESCRIPTORS = __webpack_require__2(9924);
    var fails = __webpack_require__2(4694);
    var createElement = __webpack_require__2(1442);
    module.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  },
  4347: (module, __unused_webpack_exports, __webpack_require__2) => {
    var uncurryThis = __webpack_require__2(9668);
    var fails = __webpack_require__2(4694);
    var classof = __webpack_require__2(2177);
    var $Object = Object;
    var split = uncurryThis("".split);
    module.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  },
  1881: (module, __unused_webpack_exports, __webpack_require__2) => {
    var uncurryThis = __webpack_require__2(9668);
    var isCallable = __webpack_require__2(688);
    var store = __webpack_require__2(6762);
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module.exports = store.inspectSource;
  },
  7804: (module, __unused_webpack_exports, __webpack_require__2) => {
    var NATIVE_WEAK_MAP = __webpack_require__2(4724);
    var global = __webpack_require__2(2150);
    var isObject = __webpack_require__2(5309);
    var createNonEnumerableProperty = __webpack_require__2(2385);
    var hasOwn = __webpack_require__2(4678);
    var shared = __webpack_require__2(6762);
    var sharedKey = __webpack_require__2(1962);
    var hiddenKeys = __webpack_require__2(7390);
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = global.TypeError;
    var WeakMap2 = global.WeakMap;
    var set, get, has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      var store = shared.state || (shared.state = new WeakMap2);
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function(it, metadata) {
        if (store.has(it))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get = function(it) {
        return store.get(it) || {};
      };
      has = function(it) {
        return store.has(it);
      };
    } else {
      var STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn(it, STATE))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn(it, STATE);
      };
    }
    module.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
  },
  688: (module, __unused_webpack_exports, __webpack_require__2) => {
    var $documentAll = __webpack_require__2(1811);
    var documentAll = $documentAll.all;
    module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  },
  1633: (module, __unused_webpack_exports, __webpack_require__2) => {
    var fails = __webpack_require__2(4694);
    var isCallable = __webpack_require__2(688);
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module.exports = isForced;
  },
  5268: (module) => {
    module.exports = function(it) {
      return it === null || it === undefined;
    };
  },
  5309: (module, __unused_webpack_exports, __webpack_require__2) => {
    var isCallable = __webpack_require__2(688);
    var $documentAll = __webpack_require__2(1811);
    var documentAll = $documentAll.all;
    module.exports = $documentAll.IS_HTMLDDA ? function(it) {
      return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
    } : function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  },
  6555: (module) => {
    module.exports = false;
  },
  7935: (module, __unused_webpack_exports, __webpack_require__2) => {
    var getBuiltIn = __webpack_require__2(2160);
    var isCallable = __webpack_require__2(688);
    var isPrototypeOf = __webpack_require__2(6148);
    var USE_SYMBOL_AS_UID = __webpack_require__2(4866);
    var $Object = Object;
    module.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  },
  8344: (module, __unused_webpack_exports, __webpack_require__2) => {
    var toLength = __webpack_require__2(7331);
    module.exports = function(obj) {
      return toLength(obj.length);
    };
  },
  1135: (module, __unused_webpack_exports, __webpack_require__2) => {
    var uncurryThis = __webpack_require__2(9668);
    var fails = __webpack_require__2(4694);
    var isCallable = __webpack_require__2(688);
    var hasOwn = __webpack_require__2(4678);
    var DESCRIPTORS = __webpack_require__2(9924);
    var CONFIGURABLE_FUNCTION_NAME = __webpack_require__2(453).CONFIGURABLE;
    var inspectSource = __webpack_require__2(1881);
    var InternalStateModule = __webpack_require__2(7804);
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var $String = String;
    var defineProperty = Object.defineProperty;
    var stringSlice = uncurryThis("".slice);
    var replace = uncurryThis("".replace);
    var join = uncurryThis([].join);
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", { value: 8 }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module.exports = function(value, name, options) {
      if (stringSlice($String(name), 0, 7) === "Symbol(") {
        name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
      }
      if (options && options.getter)
        name = "get " + name;
      if (options && options.setter)
        name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS)
          defineProperty(value, "name", { value: name, configurable: true });
        else
          value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS)
            defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype)
          value.prototype = undefined;
      } catch (error) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = join(TEMPLATE, typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  },
  1787: (module) => {
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  },
  2131: (__unused_webpack_module, exports, __webpack_require__2) => {
    var DESCRIPTORS = __webpack_require__2(9924);
    var IE8_DOM_DEFINE = __webpack_require__2(7913);
    var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__2(2666);
    var anObject = __webpack_require__2(9175);
    var toPropertyKey = __webpack_require__2(2358);
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && ("value" in Attributes) && (WRITABLE in Attributes) && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if (("get" in Attributes) || ("set" in Attributes))
        throw new $TypeError("Accessors not supported");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  },
  7537: (__unused_webpack_module, exports, __webpack_require__2) => {
    var DESCRIPTORS = __webpack_require__2(9924);
    var call = __webpack_require__2(8724);
    var propertyIsEnumerableModule = __webpack_require__2(8208);
    var createPropertyDescriptor = __webpack_require__2(7781);
    var toIndexedObject = __webpack_require__2(6854);
    var toPropertyKey = __webpack_require__2(2358);
    var hasOwn = __webpack_require__2(4678);
    var IE8_DOM_DEFINE = __webpack_require__2(7913);
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  },
  6217: (__unused_webpack_module, exports, __webpack_require__2) => {
    var internalObjectKeys = __webpack_require__2(1528);
    var enumBugKeys = __webpack_require__2(2367);
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  },
  5168: (__unused_webpack_module, exports) => {
    exports.f = Object.getOwnPropertySymbols;
  },
  6148: (module, __unused_webpack_exports, __webpack_require__2) => {
    var uncurryThis = __webpack_require__2(9668);
    module.exports = uncurryThis({}.isPrototypeOf);
  },
  1528: (module, __unused_webpack_exports, __webpack_require__2) => {
    var uncurryThis = __webpack_require__2(9668);
    var hasOwn = __webpack_require__2(4678);
    var toIndexedObject = __webpack_require__2(6854);
    var indexOf = __webpack_require__2(1138).indexOf;
    var hiddenKeys = __webpack_require__2(7390);
    var push = uncurryThis([].push);
    module.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O)
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i)
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
      return result;
    };
  },
  1728: (module, __unused_webpack_exports, __webpack_require__2) => {
    var internalObjectKeys = __webpack_require__2(1528);
    var enumBugKeys = __webpack_require__2(2367);
    module.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  },
  8208: (__unused_webpack_module, exports) => {
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  },
  110: (module, __unused_webpack_exports, __webpack_require__2) => {
    var call = __webpack_require__2(8724);
    var isCallable = __webpack_require__2(688);
    var isObject = __webpack_require__2(5309);
    var $TypeError = TypeError;
    module.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
        return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  },
  990: (module, __unused_webpack_exports, __webpack_require__2) => {
    var getBuiltIn = __webpack_require__2(2160);
    var uncurryThis = __webpack_require__2(9668);
    var getOwnPropertyNamesModule = __webpack_require__2(6217);
    var getOwnPropertySymbolsModule = __webpack_require__2(5168);
    var anObject = __webpack_require__2(9175);
    var concat = uncurryThis([].concat);
    module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  },
  8588: (module, __unused_webpack_exports, __webpack_require__2) => {
    var global = __webpack_require__2(2150);
    module.exports = global;
  },
  1166: (module, __unused_webpack_exports, __webpack_require__2) => {
    var isNullOrUndefined = __webpack_require__2(5268);
    var $TypeError = TypeError;
    module.exports = function(it) {
      if (isNullOrUndefined(it))
        throw new $TypeError("Can't call method on " + it);
      return it;
    };
  },
  1962: (module, __unused_webpack_exports, __webpack_require__2) => {
    var shared = __webpack_require__2(2645);
    var uid = __webpack_require__2(5736);
    var keys = shared("keys");
    module.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  },
  6762: (module, __unused_webpack_exports, __webpack_require__2) => {
    var global = __webpack_require__2(2150);
    var defineGlobalProperty = __webpack_require__2(1604);
    var SHARED = "__core-js_shared__";
    var store = global[SHARED] || defineGlobalProperty(SHARED, {});
    module.exports = store;
  },
  2645: (module, __unused_webpack_exports, __webpack_require__2) => {
    var IS_PURE = __webpack_require__2(6555);
    var store = __webpack_require__2(6762);
    (module.exports = function(key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })("versions", []).push({
      version: "3.33.3",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2014-2023 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.33.3/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  },
  4112: (module, __unused_webpack_exports, __webpack_require__2) => {
    var V8_VERSION = __webpack_require__2(7067);
    var fails = __webpack_require__2(4694);
    var global = __webpack_require__2(2150);
    var $String = global.String;
    module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  },
  7352: (module, __unused_webpack_exports, __webpack_require__2) => {
    var toIntegerOrInfinity = __webpack_require__2(1680);
    var max = Math.max;
    var min = Math.min;
    module.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  },
  6854: (module, __unused_webpack_exports, __webpack_require__2) => {
    var IndexedObject = __webpack_require__2(4347);
    var requireObjectCoercible = __webpack_require__2(1166);
    module.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  },
  1680: (module, __unused_webpack_exports, __webpack_require__2) => {
    var trunc = __webpack_require__2(1787);
    module.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  },
  7331: (module, __unused_webpack_exports, __webpack_require__2) => {
    var toIntegerOrInfinity = __webpack_require__2(1680);
    var min = Math.min;
    module.exports = function(argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
  },
  298: (module, __unused_webpack_exports, __webpack_require__2) => {
    var requireObjectCoercible = __webpack_require__2(1166);
    var $Object = Object;
    module.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  },
  1272: (module, __unused_webpack_exports, __webpack_require__2) => {
    var call = __webpack_require__2(8724);
    var isObject = __webpack_require__2(5309);
    var isSymbol = __webpack_require__2(7935);
    var getMethod = __webpack_require__2(5383);
    var ordinaryToPrimitive = __webpack_require__2(110);
    var wellKnownSymbol = __webpack_require__2(2032);
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === undefined)
          pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result))
          return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === undefined)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  },
  2358: (module, __unused_webpack_exports, __webpack_require__2) => {
    var toPrimitive = __webpack_require__2(1272);
    var isSymbol = __webpack_require__2(7935);
    module.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  },
  2522: (module, __unused_webpack_exports, __webpack_require__2) => {
    var wellKnownSymbol = __webpack_require__2(2032);
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module.exports = String(test) === "[object z]";
  },
  599: (module, __unused_webpack_exports, __webpack_require__2) => {
    var classof = __webpack_require__2(1566);
    var $String = String;
    module.exports = function(argument) {
      if (classof(argument) === "Symbol")
        throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  },
  3397: (module) => {
    var $String = String;
    module.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  },
  5736: (module, __unused_webpack_exports, __webpack_require__2) => {
    var uncurryThis = __webpack_require__2(9668);
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1 .toString);
    module.exports = function(key) {
      return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  },
  4866: (module, __unused_webpack_exports, __webpack_require__2) => {
    var NATIVE_SYMBOL = __webpack_require__2(4112);
    module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  },
  2666: (module, __unused_webpack_exports, __webpack_require__2) => {
    var DESCRIPTORS = __webpack_require__2(9924);
    var fails = __webpack_require__2(4694);
    module.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  },
  4724: (module, __unused_webpack_exports, __webpack_require__2) => {
    var global = __webpack_require__2(2150);
    var isCallable = __webpack_require__2(688);
    var WeakMap2 = global.WeakMap;
    module.exports = isCallable(WeakMap2) && /native code/.test(String(WeakMap2));
  },
  2032: (module, __unused_webpack_exports, __webpack_require__2) => {
    var global = __webpack_require__2(2150);
    var shared = __webpack_require__2(2645);
    var hasOwn = __webpack_require__2(4678);
    var uid = __webpack_require__2(5736);
    var NATIVE_SYMBOL = __webpack_require__2(4112);
    var USE_SYMBOL_AS_UID = __webpack_require__2(4866);
    var Symbol2 = global.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  },
  7206: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) => {
    var $ = __webpack_require__2(5532);
    var uncurryThis = __webpack_require__2(9668);
    var aCallable = __webpack_require__2(1052);
    var toObject = __webpack_require__2(298);
    var lengthOfArrayLike = __webpack_require__2(8344);
    var deletePropertyOrThrow = __webpack_require__2(955);
    var toString = __webpack_require__2(599);
    var fails = __webpack_require__2(4694);
    var internalSort = __webpack_require__2(3097);
    var arrayMethodIsStrict = __webpack_require__2(567);
    var FF = __webpack_require__2(9016);
    var IE_OR_EDGE = __webpack_require__2(821);
    var V8 = __webpack_require__2(7067);
    var WEBKIT = __webpack_require__2(4389);
    var test = [];
    var nativeSort = uncurryThis(test.sort);
    var push = uncurryThis(test.push);
    var FAILS_ON_UNDEFINED = fails(function() {
      test.sort(undefined);
    });
    var FAILS_ON_NULL = fails(function() {
      test.sort(null);
    });
    var STRICT_METHOD = arrayMethodIsStrict("sort");
    var STABLE_SORT = !fails(function() {
      if (V8)
        return V8 < 70;
      if (FF && FF > 3)
        return;
      if (IE_OR_EDGE)
        return true;
      if (WEBKIT)
        return WEBKIT < 603;
      var result = "";
      var code, chr, value, index;
      for (code = 65;code < 76; code++) {
        chr = String.fromCharCode(code);
        switch (code) {
          case 66:
          case 69:
          case 70:
          case 72:
            value = 3;
            break;
          case 68:
          case 71:
            value = 4;
            break;
          default:
            value = 2;
        }
        for (index = 0;index < 47; index++) {
          test.push({ k: chr + index, v: value });
        }
      }
      test.sort(function(a, b) {
        return b.v - a.v;
      });
      for (index = 0;index < test.length; index++) {
        chr = test[index].k.charAt(0);
        if (result.charAt(result.length - 1) !== chr)
          result += chr;
      }
      return result !== "DGBEFHACIJK";
    });
    var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
    var getSortCompare = function(comparefn) {
      return function(x, y) {
        if (y === undefined)
          return -1;
        if (x === undefined)
          return 1;
        if (comparefn !== undefined)
          return +comparefn(x, y) || 0;
        return toString(x) > toString(y) ? 1 : -1;
      };
    };
    $({ target: "Array", proto: true, forced: FORCED }, {
      sort: function sort(comparefn) {
        if (comparefn !== undefined)
          aCallable(comparefn);
        var array = toObject(this);
        if (STABLE_SORT)
          return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);
        var items = [];
        var arrayLength = lengthOfArrayLike(array);
        var itemsLength, index;
        for (index = 0;index < arrayLength; index++) {
          if (index in array)
            push(items, array[index]);
        }
        internalSort(items, getSortCompare(comparefn));
        itemsLength = lengthOfArrayLike(items);
        index = 0;
        while (index < itemsLength)
          array[index] = items[index++];
        while (index < arrayLength)
          deletePropertyOrThrow(array, index++);
        return array;
      }
    });
  },
  9867: (__unused_webpack_module, __unused_webpack_exports, __webpack_require__2) => {
    var $ = __webpack_require__2(5532);
    var toObject = __webpack_require__2(298);
    var nativeKeys = __webpack_require__2(1728);
    var fails = __webpack_require__2(4694);
    var FAILS_ON_PRIMITIVES = fails(function() {
      nativeKeys(1);
    });
    $({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES }, {
      keys: function keys(it) {
        return nativeKeys(toObject(it));
      }
    });
  }
};
var __webpack_module_cache__ = {};
(() => {
  __webpack_require__.n = (module) => {
    var getter = module && module.__esModule ? () => module["default"] : () => module;
    __webpack_require__.d(getter, { a: getter });
    return getter;
  };
})();
(() => {
  __webpack_require__.d = (exports, definition) => {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
      }
    }
  };
})();
(() => {
  __webpack_require__.g = function() {
    if (typeof globalThis === "object")
      return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if (typeof window === "object")
        return window;
    }
  }();
})();
(() => {
  __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
})();
(() => {
  __webpack_require__.r = (exports) => {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    }
    Object.defineProperty(exports, "__esModule", { value: true });
  };
})();
var __webpack_exports__ = {};
(() => {
  __webpack_require__.d(__webpack_exports__, {
    y1j: () => ActionCompleteEvent,
    fWn: () => ActionContext,
    Ia8: () => ActionQueue,
    rqv: () => ActionSequence,
    zH6: () => ActionStartEvent,
    hLI: () => ActionsComponent,
    yyv: () => ActionsSystem,
    tX5: () => ActivateEvent,
    vtX: () => Actor,
    r7K: () => AddedComponent,
    lCh: () => AddedEntity,
    cE4: () => AffineMatrix,
    fwF: () => Animation,
    sce: () => AnimationDirection,
    AQ6: () => AnimationEvents,
    _c7: () => AnimationStrategy,
    KUs: () => ArcadeSolver,
    Ajp: () => AudioContextFactory,
    dkO: () => Axes,
    RDh: () => Axis,
    _H9: () => BaseAlign,
    mxs: () => Blink,
    OmD: () => BodyComponent,
    kBf: () => BoundingBox,
    C4F: () => BroadphaseStrategy,
    NQt: () => BrowserComponent,
    JjN: () => BrowserEvents,
    EK_: () => Buttons,
    V1s: () => Camera,
    xHm: () => CameraEvents,
    Xz7: () => Canvas,
    Cdc: () => Circle,
    FKn: () => CircleCollider,
    SUY: () => Clock,
    ab2: () => ClosestLine,
    GfZ: () => ClosestLineJumpTable,
    YMS: () => Collider,
    oyv: () => ColliderComponent,
    aUb: () => CollisionContact,
    SdD: () => CollisionEndEvent,
    JUv: () => CollisionGroup,
    jEj: () => CollisionGroupManager,
    TFq: () => CollisionJumpTable,
    HDU: () => CollisionPostSolveEvent,
    R_y: () => CollisionPreSolveEvent,
    ydN: () => CollisionResolutionStrategy,
    t50: () => CollisionStartEvent,
    s$$: () => CollisionSystem,
    v2G: () => CollisionType,
    Ilk: () => Color,
    s9i: () => ColorBlindFlags,
    dxL: () => ColorBlindnessMode,
    LLX: () => ColorBlindnessPostProcessor,
    wA2: () => Component,
    R_p: () => CompositeCollider,
    IQ$: () => Configurable,
    I5F: () => ConsoleAppender,
    X8$: () => ContactConstraintPoint,
    FR6: () => ContactEndEvent,
    U8o: () => ContactStartEvent,
    kbG: () => CoordPlane,
    FEv: () => CrossFade,
    iS_: () => DeactivateEvent,
    cGG: () => Debug,
    RPN: () => DebugGraphicsComponent,
    skb: () => DebugSystem,
    SLU: () => DebugText,
    xK2: () => DefaultLoader,
    RdJ: () => DegreeOfFreedom,
    cNu: () => Delay,
    gU7: () => Detector,
    LSk: () => Die,
    Nmp: () => Direction,
    twX: () => Director,
    UND: () => DirectorEvents,
    d1Y: () => DisplayMode,
    xrL: () => DynamicTree,
    sRW: () => DynamicTreeCollisionProcessor,
    cmV: () => EX_VERSION,
    qWz: () => EaseBy,
    N0Q: () => EaseTo,
    q8b: () => EasingFunctions,
    ynB: () => EdgeCollider,
    jT9: () => ElasticToActorStrategy,
    wAz: () => EmitterType,
    D4V: () => Engine,
    NLr: () => EngineEvents,
    N6H: () => EnterTriggerEvent,
    W1A: () => EnterViewPortEvent,
    JHW: () => Entity,
    ZZ$: () => EntityEvents,
    v2K: () => EntityManager,
    pBf: () => EventDispatcher,
    vpe: () => EventEmitter,
    GMl: () => EventTypes,
    zW2: () => Events_namespaceObject,
    B0K: () => ExResponse,
    Nv7: () => ExcaliburGraphicsContext2DCanvas,
    C_p: () => ExcaliburGraphicsContextWebGL,
    MUA: () => ExitTriggerEvent,
    xqU: () => ExitViewPortEvent,
    pTp: () => Fade,
    trb: () => FadeInOut,
    vUK: () => Flags,
    j9l: () => Follow,
    Zxw: () => Font,
    v51: () => FontCache,
    Hdx: () => FontStyle,
    Z$d: () => FontUnit,
    iqV: () => FpsSampler,
    o$7: () => FrameStats,
    olM: () => Future,
    Zm$: () => GameEvent,
    $QH: () => GameStartEvent,
    i78: () => GameStopEvent,
    nJg: () => Gamepad,
    h6u: () => GamepadAxisEvent,
    hts: () => GamepadButtonEvent,
    j88: () => GamepadConnectEvent,
    VME: () => GamepadDisconnectEvent,
    fy2: () => Gamepads,
    nt: () => Gif,
    Ukr: () => GlobalCoordinates,
    zsu: () => Graphic,
    oA6: () => GraphicsComponent,
    TVh: () => GraphicsGroup,
    TwZ: () => GraphicsLayer,
    GTT: () => GraphicsLayers,
    xxj: () => GraphicsSystem,
    XdK: () => HiddenEvent,
    Jmb: () => ImageFiltering,
    cXo: () => ImageSource,
    Dm5: () => InitializeEvent,
    IIB: () => Input_Index_namespaceObject,
    ebW: () => InputMapper,
    zI0: () => Integrator,
    LYD: () => IsometricEntityComponent,
    cEG: () => IsometricEntitySystem,
    SEl: () => IsometricMap,
    t9V: () => IsometricTile,
    ez5: () => KeyEvent,
    N1d: () => Keyboard,
    R8U: () => Keys,
    SKZ: () => KillEvent,
    __J: () => Label,
    RI$: () => LimitCameraBoundsStrategy,
    x12: () => Line,
    ccz: () => LineSegment,
    aNw: () => Loader,
    XrL: () => LoaderEvents,
    xwn: () => LockCameraToActorAxisStrategy,
    dNK: () => LockCameraToActorStrategy,
    ini: () => LogLevel,
    YdH: () => Logger,
    F5T: () => Material,
    y3G: () => Matrix,
    l57: () => MatrixLocations,
    xn0: () => MediaEvent,
    t2V: () => Meet,
    uxB: () => MotionComponent,
    cpd: () => MotionSystem,
    fiy: () => MoveBy,
    $XZ: () => MoveTo,
    UG6: () => NativePointerButton,
    uqK: () => NativeSoundEvent,
    STE: () => NativeSoundProcessedEvent,
    y$z: () => Observable,
    mAD: () => OffscreenSystem,
    sOq: () => Pair,
    hUw: () => ParallaxComponent,
    _0G: () => ParallelActions,
    Sqs: () => ParseGif,
    hpZ: () => Particle,
    Vol: () => ParticleEmitter,
    vYX: () => ParticleTransform,
    wIZ: () => Physics,
    cBi: () => PhysicsStats,
    c30: () => PhysicsWorld,
    MPV: () => PointerButton,
    RFv: () => PointerComponent,
    Ux6: () => PointerEvent,
    rxy: () => PointerEventReceiver,
    I$c: () => PointerScope,
    kfC: () => PointerSystem,
    VjY: () => PointerType,
    mgq: () => Polygon,
    YVA: () => PolygonCollider,
    Kgp: () => Pool,
    HH$: () => PostCollisionEvent,
    M_d: () => PostDebugDrawEvent,
    rgh: () => PostDrawEvent,
    Ra6: () => PostFrameEvent,
    KhR: () => PostKillEvent,
    gvQ: () => PostTransformDrawEvent,
    BS5: () => PostUpdateEvent,
    xhz: () => PreCollisionEvent,
    xOq: () => PreDebugDrawEvent,
    a9j: () => PreDrawEvent,
    bHk: () => PreFrameEvent,
    CgK: () => PreKillEvent,
    A0M: () => PreLoadEvent,
    cEd: () => PreTransformDrawEvent,
    cuY: () => PreUpdateEvent,
    kvE: () => Projection,
    SBu: () => QuadIndexBuffer,
    PsT: () => QuadTree,
    AE_: () => Query,
    ctO: () => QueryManager,
    OLH: () => RadiusAroundActorStrategy,
    kky: () => Random,
    nSF: () => Raster,
    zHn: () => Ray,
    zwx: () => RealisticSolver,
    AeJ: () => Rectangle,
    hLz: () => RemovedComponent,
    D9g: () => RemovedEntity,
    wA: () => Repeat,
    jhr: () => RepeatForever,
    GVs: () => Resolution,
    _zO: () => Resource,
    LXZ: () => ResourceEvents,
    w6$: () => RotateBy,
    mhV: () => RotateTo,
    MOD: () => RotationType,
    kwd: () => ScaleBy,
    Lmr: () => ScaleTo,
    xsS: () => Scene,
    K5l: () => SceneEvents,
    lLr: () => Screen,
    Z$r: () => ScreenAppender,
    IXb: () => ScreenElement,
    Xsu: () => ScreenEvents,
    SGH: () => ScreenShader,
    SMj: () => ScrollPreventionMode,
    L34: () => Semaphore,
    exe: () => Shader,
    bnF: () => Shape,
    MFA: () => Side,
    $uU: () => Sound,
    Sap: () => SoundEvents,
    jyi: () => Sprite,
    E03: () => SpriteFont,
    V6q: () => SpriteSheet,
    rg2: () => StandardClock,
    DVW: () => StateMachine,
    nVo: () => StrategyContainer,
    F6N: () => Stream,
    xP7: () => System,
    Odq: () => SystemManager,
    Zif: () => SystemType,
    ZGJ: () => TagComponent,
    MJk: () => TestClock,
    xvT: () => Text,
    PHM: () => TextAlign,
    dpR: () => TextureLoader,
    n9L: () => Tile,
    KwO: () => TileMap,
    SxM: () => TileMapEvents,
    B7y: () => Timer,
    x7r: () => Toaster,
    wx7: () => transform_Transform,
    Uvn: () => TransformComponent,
    uTP: () => Transition,
    OFT: () => TreeNode,
    xzN: () => Trigger,
    CcZ: () => TriggerEvents,
    M5Z: () => TwoPI,
    ZrN: () => Util_Index_namespaceObject,
    OWs: () => Vector,
    dF9: () => VectorView,
    oZy: () => VertexBuffer,
    rD2: () => VertexLayout,
    VHo: () => VisibleEvent,
    ohE: () => WebAudio,
    R$E: () => WebAudioInstance,
    xQN: () => WheelDeltaMode,
    AdJ: () => WheelEvent,
    q3I: () => World,
    Pab: () => canonicalizeAngle,
    uZ5: () => clamp,
    McK: () => createId,
    F9c: () => frac,
    k0b: () => hasGraphicsTick,
    hnT: () => hasOnInitialize,
    RSJ: () => hasOnPostUpdate,
    Mku: () => hasOnPreUpdate,
    h90: () => hasPostDraw,
    rms: () => hasPreDraw,
    ErP: () => has_initialize,
    aVg: () => has_postupdate,
    lPc: () => has_preupdate,
    Z8E: () => isAddedComponent,
    _N2: () => isAddedSystemEntity,
    YsU: () => isLoaderConstructor,
    yFn: () => isRemoveSystemEntity,
    lNv: () => isRemovedComponent,
    Xyg: () => isSceneConstructor,
    cu9: () => isScreenElement,
    MZQ: () => maxMessages,
    FUM: () => obsolete,
    BxR: () => pixelSnapEpsilon,
    vdf: () => randomInRange,
    iaL: () => randomIntInRange,
    w6H: () => range,
    Q4c: () => resetObsoleteCounter,
    Xxe: () => sign,
    Uxb: () => toDegrees,
    Yr5: () => toRadians,
    Bhw: () => vec,
    yOA: () => webgl_util_namespaceObject
  });
  var webgl_util_namespaceObject = {};
  __webpack_require__.r(webgl_util_namespaceObject);
  __webpack_require__.d(webgl_util_namespaceObject, {
    getAttributeComponentSize: () => getAttributeComponentSize,
    getAttributePointerType: () => getAttributePointerType,
    getGlTypeSizeBytes: () => getGlTypeSizeBytes
  });
  var Events_namespaceObject = {};
  __webpack_require__.r(Events_namespaceObject);
  __webpack_require__.d(Events_namespaceObject, {
    ActionCompleteEvent: () => ActionCompleteEvent,
    ActionStartEvent: () => ActionStartEvent,
    ActivateEvent: () => ActivateEvent,
    CollisionEndEvent: () => CollisionEndEvent,
    CollisionPostSolveEvent: () => CollisionPostSolveEvent,
    CollisionPreSolveEvent: () => CollisionPreSolveEvent,
    CollisionStartEvent: () => CollisionStartEvent,
    ContactEndEvent: () => ContactEndEvent,
    ContactStartEvent: () => ContactStartEvent,
    DeactivateEvent: () => DeactivateEvent,
    EnterTriggerEvent: () => EnterTriggerEvent,
    EnterViewPortEvent: () => EnterViewPortEvent,
    EventTypes: () => EventTypes,
    ExitTriggerEvent: () => ExitTriggerEvent,
    ExitViewPortEvent: () => ExitViewPortEvent,
    GameEvent: () => GameEvent,
    GameStartEvent: () => GameStartEvent,
    GameStopEvent: () => GameStopEvent,
    GamepadAxisEvent: () => GamepadAxisEvent,
    GamepadButtonEvent: () => GamepadButtonEvent,
    GamepadConnectEvent: () => GamepadConnectEvent,
    GamepadDisconnectEvent: () => GamepadDisconnectEvent,
    HiddenEvent: () => HiddenEvent,
    InitializeEvent: () => InitializeEvent,
    KillEvent: () => KillEvent,
    PostCollisionEvent: () => PostCollisionEvent,
    PostDebugDrawEvent: () => PostDebugDrawEvent,
    PostDrawEvent: () => PostDrawEvent,
    PostFrameEvent: () => PostFrameEvent,
    PostKillEvent: () => PostKillEvent,
    PostTransformDrawEvent: () => PostTransformDrawEvent,
    PostUpdateEvent: () => PostUpdateEvent,
    PreCollisionEvent: () => PreCollisionEvent,
    PreDebugDrawEvent: () => PreDebugDrawEvent,
    PreDrawEvent: () => PreDrawEvent,
    PreFrameEvent: () => PreFrameEvent,
    PreKillEvent: () => PreKillEvent,
    PreTransformDrawEvent: () => PreTransformDrawEvent,
    PreUpdateEvent: () => PreUpdateEvent,
    VisibleEvent: () => VisibleEvent
  });
  var DrawUtil_namespaceObject = {};
  __webpack_require__.r(DrawUtil_namespaceObject);
  __webpack_require__.d(DrawUtil_namespaceObject, {
    circle: () => circle,
    line: () => line,
    point: () => point,
    roundRect: () => roundRect,
    vector: () => vector
  });
  var Input_Index_namespaceObject = {};
  __webpack_require__.r(Input_Index_namespaceObject);
  __webpack_require__.d(Input_Index_namespaceObject, {
    Axes: () => Axes,
    Buttons: () => Buttons,
    Gamepad: () => Gamepad,
    Gamepads: () => Gamepads,
    KeyEvent: () => KeyEvent,
    Keyboard: () => Keyboard,
    Keys: () => Keys,
    NativePointerButton: () => NativePointerButton,
    PointerButton: () => PointerButton,
    PointerComponent: () => PointerComponent,
    PointerEvent: () => PointerEvent,
    PointerEventReceiver: () => PointerEventReceiver,
    PointerScope: () => PointerScope,
    PointerSystem: () => PointerSystem,
    PointerType: () => PointerType,
    WheelDeltaMode: () => WheelDeltaMode,
    WheelEvent: () => WheelEvent
  });
  var Util_Index_namespaceObject = {};
  __webpack_require__.r(Util_Index_namespaceObject);
  __webpack_require__.d(Util_Index_namespaceObject, {
    ConsoleAppender: () => ConsoleAppender,
    DrawUtil: () => DrawUtil_namespaceObject,
    EasingFunctions: () => EasingFunctions,
    LogLevel: () => LogLevel,
    Logger: () => Logger,
    Observable: () => Observable,
    ScreenAppender: () => ScreenAppender,
    addItemToArray: () => addItemToArray,
    contains: () => contains,
    delay: () => delay,
    fail: () => fail,
    getPosition: () => getPosition,
    omit: () => omit,
    removeItemFromArray: () => removeItemFromArray
  });
  var sort = __webpack_require__(1324);
  var keys = __webpack_require__(3571);
  function polyfill() {
    if (typeof window === "undefined") {
      window = {
        audioContext: function() {
          return;
        }
      };
    }
    if (typeof window !== "undefined" && !window.requestAnimationFrame) {
      window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
        window.setInterval(callback, 1000 / 60);
      };
    }
    if (typeof window !== "undefined" && !window.cancelAnimationFrame) {
      window.cancelAnimationFrame = window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function() {
        return;
      };
    }
    if (typeof window !== "undefined" && !window.AudioContext) {
      if (window.webkitAudioContext) {
        const ctx = window.webkitAudioContext;
        const replaceMe = ctx.prototype.decodeAudioData;
        window.webkitAudioContext.prototype.decodeAudioData = function(arrayBuffer) {
          return new Promise((resolve, reject) => {
            replaceMe.call(this, arrayBuffer, resolve, reject);
          });
        };
      }
      window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext || window.oAudioContext;
    }
    if (typeof window !== "undefined" && !window.devicePixelRatio) {
      window.devicePixelRatio = window.devicePixelRatio || 1;
    }
  }

  class Flags {
    static useCanvasGraphicsContext() {
      Flags.enable("use-canvas-context");
    }
    static freeze() {
      Flags._FROZEN = true;
    }
    static _reset() {
      Flags._FROZEN = false;
      Flags._FLAGS = {};
    }
    static enable(flagName) {
      if (this._FROZEN) {
        throw Error("Feature flags can only be enabled before Engine constructor time");
      }
      Flags._FLAGS[flagName] = true;
    }
    static disable(flagName) {
      if (this._FROZEN) {
        throw Error("Feature flags can only be disabled before Engine constructor time");
      }
      Flags._FLAGS[flagName] = false;
    }
    static isEnabled(flagName) {
      return !!Flags._FLAGS[flagName];
    }
    static show() {
      return Object.keys(Flags._FLAGS);
    }
  }
  Flags._FROZEN = false;
  Flags._FLAGS = {};
  function createId(type, value) {
    return { type, value };
  }
  var LogLevel;
  (function(LogLevel2) {
    LogLevel2[LogLevel2["Debug"] = 0] = "Debug";
    LogLevel2[LogLevel2["Info"] = 1] = "Info";
    LogLevel2[LogLevel2["Warn"] = 2] = "Warn";
    LogLevel2[LogLevel2["Error"] = 3] = "Error";
    LogLevel2[LogLevel2["Fatal"] = 4] = "Fatal";
  })(LogLevel || (LogLevel = {}));

  class Logger {
    constructor() {
      this._appenders = [];
      this.defaultLevel = LogLevel.Info;
      if (Logger._INSTANCE) {
        throw new Error("Logger is a singleton");
      }
      Logger._INSTANCE = this;
      Logger._INSTANCE.addAppender(new ConsoleAppender);
      return Logger._INSTANCE;
    }
    static getInstance() {
      if (Logger._INSTANCE == null) {
        Logger._INSTANCE = new Logger;
      }
      return Logger._INSTANCE;
    }
    addAppender(appender) {
      this._appenders.push(appender);
    }
    clearAppenders() {
      this._appenders.length = 0;
    }
    _log(level, args) {
      if (level == null) {
        level = this.defaultLevel;
      }
      const len = this._appenders.length;
      for (let i = 0;i < len; i++) {
        if (level >= this.defaultLevel) {
          this._appenders[i].log(level, args);
        }
      }
    }
    debug(...args) {
      this._log(LogLevel.Debug, args);
    }
    info(...args) {
      this._log(LogLevel.Info, args);
    }
    warn(...args) {
      this._log(LogLevel.Warn, args);
    }
    error(...args) {
      this._log(LogLevel.Error, args);
    }
    fatal(...args) {
      this._log(LogLevel.Fatal, args);
    }
  }
  Logger._INSTANCE = null;

  class ConsoleAppender {
    log(level, args) {
      if (!console && !console.log && console.warn && console.error) {
        return;
      }
      const consoleArgs = [];
      consoleArgs.unshift.apply(consoleArgs, args);
      consoleArgs.unshift("[" + LogLevel[level] + "] : ");
      if (level < LogLevel.Warn) {
        if (console.log.apply) {
          console.log.apply(console, consoleArgs);
        } else {
          console.log(consoleArgs.join(" "));
        }
      } else if (level < LogLevel.Error) {
        if (console.warn.apply) {
          console.warn.apply(console, consoleArgs);
        } else {
          console.warn(consoleArgs.join(" "));
        }
      } else {
        if (console.error.apply) {
          console.error.apply(console, consoleArgs);
        } else {
          console.error(consoleArgs.join(" "));
        }
      }
    }
  }

  class ScreenAppender {
    constructor(width, height) {
      this._messages = [];
      this._canvas = document.createElement("canvas");
      this._canvas.width = width || window.innerWidth;
      this._canvas.height = height || window.innerHeight;
      this._canvas.style.position = "absolute";
      this._ctx = this._canvas.getContext("2d");
      document.body.appendChild(this._canvas);
    }
    log(level, args) {
      const message = args.join(",");
      this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
      this._messages.unshift("[" + LogLevel[level] + "] : " + message);
      let pos = 10;
      let opacity = 1;
      for (let i = 0;i < this._messages.length; i++) {
        this._ctx.fillStyle = "rgba(255,255,255," + opacity.toFixed(2) + ")";
        this._ctx.fillText(this._messages[i], 200, pos);
        pos += 10;
        opacity = opacity > 0 ? opacity - 0.05 : 0;
      }
    }
  }
  const maxMessages = 5;
  const obsoleteMessage = {};
  const resetObsoleteCounter = () => {
    for (const message in obsoleteMessage) {
      obsoleteMessage[message] = 0;
    }
  };
  const logMessage = (message, options) => {
    const suppressObsoleteMessages = Flags.isEnabled("suppress-obsolete-message");
    if (obsoleteMessage[message] < maxMessages && !suppressObsoleteMessages) {
      Logger.getInstance().warn(message);
      if (console.trace && options.showStackTrace) {
        console.trace();
      }
    }
    obsoleteMessage[message]++;
  };
  function obsolete(options) {
    options = {
      message: "This feature will be removed in future versions of Excalibur.",
      alternateMethod: null,
      showStackTrace: false,
      ...options
    };
    return function(target, property, descriptor) {
      if (descriptor && !(typeof descriptor.value === "function" || typeof descriptor.get === "function" || typeof descriptor.set === "function")) {
        throw new SyntaxError("Only classes/functions/getters/setters can be marked as obsolete");
      }
      const methodSignature = `${target.name || ""}${target.name && property ? "." : ""}${property ? property : ""}`;
      const message = `${methodSignature} is marked obsolete: ${options.message}` + (options.alternateMethod ? ` Use ${options.alternateMethod} instead` : "");
      if (!obsoleteMessage[message]) {
        obsoleteMessage[message] = 0;
      }
      const method = descriptor ? { ...descriptor } : target;
      if (!descriptor) {

        class DecoratedClass extends method {
          constructor(...args) {
            logMessage(message, options);
            super(...args);
          }
        }
        return DecoratedClass;
      }
      if (descriptor && descriptor.value) {
        method.value = function() {
          logMessage(message, options);
          return descriptor.value.apply(this, arguments);
        };
        return method;
      }
      if (descriptor && descriptor.get) {
        method.get = function() {
          logMessage(message, options);
          return descriptor.get.apply(this, arguments);
        };
      }
      if (descriptor && descriptor.set) {
        method.set = function() {
          logMessage(message, options);
          return descriptor.set.apply(this, arguments);
        };
      }
      return method;
    };
  }

  class Future {
    constructor() {
      this._isCompleted = false;
      this.promise = new Promise((resolve, reject) => {
        this._resolver = resolve;
        this._rejecter = reject;
      });
    }
    get isCompleted() {
      return this._isCompleted;
    }
    resolve(value) {
      if (this._isCompleted) {
        return;
      }
      this._isCompleted = true;
      this._resolver(value);
    }
    reject(error) {
      if (this._isCompleted) {
        return;
      }
      this._isCompleted = true;
      this._rejecter(error);
    }
  }

  class EventEmitter {
    constructor() {
      this._paused = false;
      this._listeners = {};
      this._listenersOnce = {};
      this._pipes = [];
    }
    clear() {
      this._listeners = {};
      this._listenersOnce = {};
      this._pipes.length = 0;
    }
    on(eventName, handler) {
      var _a;
      this._listeners[eventName] = (_a = this._listeners[eventName]) !== null && _a !== undefined ? _a : [];
      this._listeners[eventName].push(handler);
      return {
        close: () => this.off(eventName, handler)
      };
    }
    once(eventName, handler) {
      var _a;
      this._listenersOnce[eventName] = (_a = this._listenersOnce[eventName]) !== null && _a !== undefined ? _a : [];
      this._listenersOnce[eventName].push(handler);
      return {
        close: () => this.off(eventName, handler)
      };
    }
    off(eventName, handler) {
      var _a, _b;
      if (handler) {
        const newListeners = (_a = this._listeners[eventName]) === null || _a === undefined ? undefined : _a.filter((h) => h !== handler);
        this._listeners[eventName] = newListeners;
        const newOnceListeners = (_b = this._listenersOnce[eventName]) === null || _b === undefined ? undefined : _b.filter((h) => h !== handler);
        this._listenersOnce[eventName] = newOnceListeners;
      } else {
        delete this._listeners[eventName];
      }
    }
    emit(eventName, event) {
      var _a;
      if (this._paused) {
        return;
      }
      (_a = this._listeners[eventName]) === null || _a === undefined || _a.forEach((fn) => fn(event));
      const onces = this._listenersOnce[eventName];
      this._listenersOnce[eventName] = [];
      if (onces) {
        onces.forEach((fn) => fn(event));
      }
      this._pipes.forEach((pipe) => {
        pipe.emit(eventName, event);
      });
    }
    pipe(emitter) {
      if (this === emitter) {
        throw Error("Cannot pipe to self");
      }
      this._pipes.push(emitter);
      return {
        close: () => {
          const i = this._pipes.indexOf(emitter);
          if (i > -1) {
            this._pipes.splice(i, 1);
          }
        }
      };
    }
    unpipe(emitter) {
      const i = this._pipes.indexOf(emitter);
      if (i > -1) {
        this._pipes.splice(i, 1);
      }
    }
    pause() {
      this._paused = true;
    }
    unpause() {
      this._paused = false;
    }
  }
  var PointerScope;
  (function(PointerScope2) {
    PointerScope2["Canvas"] = "Canvas";
    PointerScope2["Document"] = "Document";
  })(PointerScope || (PointerScope = {}));
  const BITMASK32 = 4294967295;

  class Random {
    constructor(seed) {
      this.seed = seed;
      this._lowerMask = 2147483647;
      this._upperMask = 2147483648;
      this._w = 32;
      this._n = 624;
      this._m = 397;
      this._a = 2567483615;
      this._u = 11;
      this._s = 7;
      this._b = 2636928640;
      this._t = 15;
      this._c = 4022730752;
      this._l = 18;
      this._f = 1812433253;
      this._mt = new Array(this._n);
      this._mt[0] = (seed || Date.now()) >>> 0;
      for (let i = 1;i < this._n; i++) {
        const s = this._mt[i - 1] ^ this._mt[i - 1] >>> this._w - 2;
        this._mt[i] = (this._f * ((s & 4294901760) >>> 16) << 16) + this._f * (s & 65535) + i >>> 0;
      }
      this._index = this._n;
    }
    _twist() {
      const mag01 = [0, this._a];
      let y = 0, i = 0;
      for (;i < this._n - this._m; i++) {
        y = this._mt[i] & this._upperMask | this._mt[i + 1] & this._lowerMask;
        this._mt[i] = this._mt[i + this._m] ^ y >>> 1 ^ mag01[y & 1] & BITMASK32;
      }
      for (;i < this._n - 1; i++) {
        y = this._mt[i] & this._upperMask | this._mt[i + 1] & this._lowerMask;
        this._mt[i] = this._mt[i + (this._m - this._n)] ^ y >>> 1 ^ mag01[y & 1] & BITMASK32;
      }
      y = this._mt[this._n - 1] & this._upperMask | this._mt[0] & this._lowerMask;
      this._mt[this._n - 1] = this._mt[this._m - 1] ^ y >>> 1 ^ mag01[y & 1] & BITMASK32;
      this._index = 0;
    }
    nextInt() {
      if (this._index >= this._n) {
        this._twist();
      }
      let y = this._mt[this._index++];
      y ^= y >>> this._u;
      y ^= y << this._s & this._b;
      y ^= y << this._t & this._c;
      y ^= y >>> this._l;
      return y >>> 0;
    }
    next() {
      return this.nextInt() * (1 / 4294967296);
    }
    floating(min, max) {
      return (max - min) * this.next() + min;
    }
    integer(min, max) {
      return Math.floor((max - min + 1) * this.next() + min);
    }
    bool(likelihood = 0.5) {
      return this.next() <= likelihood;
    }
    pickOne(array) {
      return array[this.integer(0, array.length - 1)];
    }
    pickSet(array, numPicks, allowDuplicates = false) {
      if (allowDuplicates) {
        return this._pickSetWithDuplicates(array, numPicks);
      } else {
        return this._pickSetWithoutDuplicates(array, numPicks);
      }
    }
    _pickSetWithoutDuplicates(array, numPicks) {
      if (numPicks > array.length || numPicks < 0) {
        throw new Error("Invalid number of elements to pick, must pick a value 0 < n <= length");
      }
      if (numPicks === array.length) {
        return array;
      }
      const result = new Array(numPicks);
      let currentPick = 0;
      const tempArray = array.slice(0);
      while (currentPick < numPicks) {
        const index = this.integer(0, tempArray.length - 1);
        result[currentPick++] = tempArray[index];
        tempArray.splice(index, 1);
      }
      return result;
    }
    _pickSetWithDuplicates(array, numPicks) {
      if (numPicks < 0) {
        throw new Error("Invalid number of elements to pick, must pick a value 0 <= n < MAX_INT");
      }
      const result = new Array(numPicks);
      for (let i = 0;i < numPicks; i++) {
        result[i] = this.pickOne(array);
      }
      return result;
    }
    shuffle(array) {
      const tempArray = array.slice(0);
      let swap = null;
      for (let i = 0;i < tempArray.length - 2; i++) {
        const randomIndex = this.integer(i, tempArray.length - 1);
        swap = tempArray[i];
        tempArray[i] = tempArray[randomIndex];
        tempArray[randomIndex] = swap;
      }
      return tempArray;
    }
    range(length, min, max) {
      const result = new Array(length);
      for (let i = 0;i < length; i++) {
        result[i] = this.integer(min, max);
      }
      return result;
    }
    d4() {
      return this.integer(1, 4);
    }
    d6() {
      return this.integer(1, 6);
    }
    d8() {
      return this.integer(1, 8);
    }
    d10() {
      return this.integer(1, 10);
    }
    d12() {
      return this.integer(1, 12);
    }
    d20() {
      return this.integer(1, 20);
    }
  }
  const TwoPI = Math.PI * 2;
  function frac(x) {
    if (x >= 0) {
      return x - Math.floor(x);
    } else {
      return x - Math.ceil(x);
    }
  }
  function sign(val) {
    if (val === 0) {
      return 0;
    }
    return val < 0 ? -1 : 1;
  }
  function clamp(val, min, max) {
    return Math.min(Math.max(min, val), max);
  }
  function canonicalizeAngle(angle) {
    let tmpAngle = angle;
    if (angle > TwoPI) {
      while (tmpAngle > TwoPI) {
        tmpAngle -= TwoPI;
      }
    }
    if (angle < 0) {
      while (tmpAngle < 0) {
        tmpAngle += TwoPI;
      }
    }
    return tmpAngle;
  }
  function toDegrees(radians) {
    return 180 / Math.PI * radians;
  }
  function toRadians(degrees) {
    return degrees / 180 * Math.PI;
  }
  const range = (from, to) => Array.from(new Array(to - from + 1), (_x, i) => i + from);
  function randomInRange(min, max, random = new Random) {
    return random ? random.floating(min, max) : min + Math.random() * (max - min);
  }
  function randomIntInRange(min, max, random = new Random) {
    return random ? random.integer(min, max) : Math.round(randomInRange(min, max));
  }

  class Vector {
    static get Zero() {
      return new Vector(0, 0);
    }
    static get One() {
      return new Vector(1, 1);
    }
    static get Half() {
      return new Vector(0.5, 0.5);
    }
    static get Up() {
      return new Vector(0, -1);
    }
    static get Down() {
      return new Vector(0, 1);
    }
    static get Left() {
      return new Vector(-1, 0);
    }
    static get Right() {
      return new Vector(1, 0);
    }
    static fromAngle(angle) {
      return new Vector(Math.cos(angle), Math.sin(angle));
    }
    static isValid(vec2) {
      if (vec2 === null || vec2 === undefined) {
        return false;
      }
      if (isNaN(vec2.x) || isNaN(vec2.y)) {
        return false;
      }
      if (vec2.x === Infinity || vec2.y === Infinity || vec2.x === (-Infinity) || vec2.y === (-Infinity)) {
        return false;
      }
      return true;
    }
    static distance(vec1, vec2) {
      return Math.sqrt(Math.pow(vec1.x - vec2.x, 2) + Math.pow(vec1.y - vec2.y, 2));
    }
    static min(vec1, vec2) {
      return new Vector(Math.min(vec1.x, vec2.x), Math.min(vec1.y, vec2.y));
    }
    static max(vec1, vec2) {
      return new Vector(Math.max(vec1.x, vec2.x), Math.max(vec1.y, vec2.y));
    }
    constructor(x, y) {
      this._x = 0;
      this._y = 0;
      this._x = x;
      this._y = y;
    }
    get x() {
      return this._x;
    }
    set x(val) {
      this._x = val;
    }
    get y() {
      return this._y;
    }
    set y(val) {
      this._y = val;
    }
    setTo(x, y) {
      this.x = x;
      this.y = y;
    }
    equals(vector2, tolerance = 0.001) {
      return Math.abs(this.x - vector2.x) <= tolerance && Math.abs(this.y - vector2.y) <= tolerance;
    }
    distance(v) {
      if (!v) {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }
      const deltaX = this.x - v.x;
      const deltaY = this.y - v.y;
      return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }
    squareDistance(v) {
      if (!v) {
        v = Vector.Zero;
      }
      const deltaX = this.x - v.x;
      const deltaY = this.y - v.y;
      return deltaX * deltaX + deltaY * deltaY;
    }
    clampMagnitude(magnitude) {
      const size = this.size;
      const newSize = clamp(size, 0, magnitude);
      this.size = newSize;
      return this;
    }
    get size() {
      return this.distance();
    }
    set size(newLength) {
      const v = this.normalize().scale(newLength);
      this.setTo(v.x, v.y);
    }
    normalize() {
      const d = this.distance();
      if (d > 0) {
        return new Vector(this.x / d, this.y / d);
      } else {
        return new Vector(0, 1);
      }
    }
    average(vec2) {
      return this.add(vec2).scale(0.5);
    }
    scale(sizeOrScale, dest) {
      const result = dest || new Vector(0, 0);
      if (sizeOrScale instanceof Vector) {
        result.x = this.x * sizeOrScale.x;
        result.y = this.y * sizeOrScale.y;
      } else {
        result.x = this.x * sizeOrScale;
        result.y = this.y * sizeOrScale;
      }
      return result;
    }
    add(v, dest) {
      if (dest) {
        dest.x = this.x + v.x;
        dest.y = this.y + v.y;
        return dest;
      }
      return new Vector(this.x + v.x, this.y + v.y);
    }
    sub(v) {
      return new Vector(this.x - v.x, this.y - v.y);
    }
    addEqual(v) {
      this.setTo(this.x + v.x, this.y + v.y);
      return this;
    }
    subEqual(v) {
      this.setTo(this.x - v.x, this.y - v.y);
      return this;
    }
    scaleEqual(size) {
      this.setTo(this.x * size, this.y * size);
      return this;
    }
    dot(v) {
      return this.x * v.x + this.y * v.y;
    }
    cross(v) {
      if (v instanceof Vector) {
        return this.x * v.y - this.y * v.x;
      } else if (typeof v === "number") {
        return new Vector(v * this.y, -v * this.x);
      }
    }
    static cross(num, vec2) {
      return new Vector(-num * vec2.y, num * vec2.x);
    }
    perpendicular() {
      return new Vector(this.y, -this.x);
    }
    normal() {
      return this.perpendicular().normalize();
    }
    negate() {
      return this.scale(-1);
    }
    toAngle() {
      return Math.atan2(this.y, this.x);
    }
    rotate(angle, anchor) {
      if (!anchor) {
        anchor = new Vector(0, 0);
      }
      const sinAngle = Math.sin(angle);
      const cosAngle = Math.cos(angle);
      const x = cosAngle * (this.x - anchor.x) - sinAngle * (this.y - anchor.y) + anchor.x;
      const y = sinAngle * (this.x - anchor.x) + cosAngle * (this.y - anchor.y) + anchor.y;
      return new Vector(x, y);
    }
    clone(dest) {
      const v = dest !== null && dest !== undefined ? dest : new Vector(0, 0);
      v.x = this.x;
      v.y = this.y;
      return v;
    }
    toString(fixed) {
      if (fixed) {
        return `(${this.x.toFixed(fixed)}, ${this.y.toFixed(fixed)})`;
      }
      return `(${this.x}, ${this.y})`;
    }
  }
  function vec(x, y) {
    return new Vector(x, y);
  }

  class Color {
    constructor(r, g, b, a) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a != null ? a : 1;
    }
    static fromRGB(r, g, b, a) {
      return new Color(r, g, b, a);
    }
    static fromRGBString(string) {
      const rgbaRegEx = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/i;
      let match = null;
      if (match = string.match(rgbaRegEx)) {
        const r = parseInt(match[1], 10);
        const g = parseInt(match[2], 10);
        const b = parseInt(match[3], 10);
        let a = 1;
        if (match[4]) {
          a = parseFloat(match[4]);
        }
        return new Color(r, g, b, a);
      } else {
        throw new Error("Invalid rgb/a string: " + string);
      }
    }
    static fromHex(hex) {
      const hexRegEx = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i;
      let match = null;
      if (match = hex.match(hexRegEx)) {
        const r = parseInt(match[1], 16);
        const g = parseInt(match[2], 16);
        const b = parseInt(match[3], 16);
        let a = 1;
        if (match[4]) {
          a = parseInt(match[4], 16) / 255;
        }
        return new Color(r, g, b, a);
      } else {
        throw new Error("Invalid hex string: " + hex);
      }
    }
    static fromHSL(h, s, l, a = 1) {
      const temp = new HSLColor(h, s, l, a);
      return temp.toRGBA();
    }
    lighten(factor = 0.1) {
      const temp = HSLColor.fromRGBA(this.r, this.g, this.b, this.a);
      temp.l += (1 - temp.l) * factor;
      return temp.toRGBA();
    }
    darken(factor = 0.1) {
      const temp = HSLColor.fromRGBA(this.r, this.g, this.b, this.a);
      temp.l -= temp.l * factor;
      return temp.toRGBA();
    }
    saturate(factor = 0.1) {
      const temp = HSLColor.fromRGBA(this.r, this.g, this.b, this.a);
      temp.s += temp.s * factor;
      return temp.toRGBA();
    }
    desaturate(factor = 0.1) {
      const temp = HSLColor.fromRGBA(this.r, this.g, this.b, this.a);
      temp.s -= temp.s * factor;
      return temp.toRGBA();
    }
    multiply(color) {
      const newR = color.r / 255 * this.r / 255 * 255;
      const newG = color.g / 255 * this.g / 255 * 255;
      const newB = color.b / 255 * this.b / 255 * 255;
      const newA = color.a * this.a;
      return new Color(newR, newG, newB, newA);
    }
    screen(color) {
      const color1 = color.invert();
      const color2 = color.invert();
      return color1.multiply(color2).invert();
    }
    invert() {
      return new Color(255 - this.r, 255 - this.g, 255 - this.b, 1 - this.a);
    }
    average(color) {
      const newR = (color.r + this.r) / 2;
      const newG = (color.g + this.g) / 2;
      const newB = (color.b + this.b) / 2;
      const newA = (color.a + this.a) / 2;
      return new Color(newR, newG, newB, newA);
    }
    equal(color) {
      return this.toString() === color.toString();
    }
    toString(format = "rgb") {
      switch (format) {
        case "rgb":
          return this.toRGBA();
        case "hsl":
          return this.toHSLA();
        case "hex":
          return this.toHex();
        default:
          throw new Error("Invalid Color format");
      }
    }
    _componentToHex(c) {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }
    toHex() {
      return "#" + this._componentToHex(this.r) + this._componentToHex(this.g) + this._componentToHex(this.b);
    }
    toRGBA() {
      const result = String(this.r.toFixed(0)) + ", " + String(this.g.toFixed(0)) + ", " + String(this.b.toFixed(0));
      if (this.a !== undefined || this.a !== null) {
        return "rgba(" + result + ", " + String(this.a) + ")";
      }
      return "rgb(" + result + ")";
    }
    toHSLA() {
      return HSLColor.fromRGBA(this.r, this.g, this.b, this.a).toString();
    }
    fillStyle() {
      return this.toString();
    }
    clone() {
      return new Color(this.r, this.g, this.b, this.a);
    }
    static get Black() {
      return Color.fromHex("#000000");
    }
    static get White() {
      return Color.fromHex("#FFFFFF");
    }
    static get Gray() {
      return Color.fromHex("#808080");
    }
    static get LightGray() {
      return Color.fromHex("#D3D3D3");
    }
    static get DarkGray() {
      return Color.fromHex("#A9A9A9");
    }
    static get Yellow() {
      return Color.fromHex("#FFFF00");
    }
    static get Orange() {
      return Color.fromHex("#FFA500");
    }
    static get Red() {
      return Color.fromHex("#FF0000");
    }
    static get Vermilion() {
      return Color.fromHex("#FF5B31");
    }
    static get Rose() {
      return Color.fromHex("#FF007F");
    }
    static get Magenta() {
      return Color.fromHex("#FF00FF");
    }
    static get Violet() {
      return Color.fromHex("#7F00FF");
    }
    static get Blue() {
      return Color.fromHex("#0000FF");
    }
    static get Azure() {
      return Color.fromHex("#007FFF");
    }
    static get Cyan() {
      return Color.fromHex("#00FFFF");
    }
    static get Viridian() {
      return Color.fromHex("#59978F");
    }
    static get Green() {
      return Color.fromHex("#00FF00");
    }
    static get Chartreuse() {
      return Color.fromHex("#7FFF00");
    }
    static get Transparent() {
      return Color.fromHex("#FFFFFF00");
    }
    static get ExcaliburBlue() {
      return Color.fromHex("#176BAA");
    }
  }

  class HSLColor {
    constructor(h, s, l, a) {
      this.h = h;
      this.s = s;
      this.l = l;
      this.a = a;
    }
    static hue2rgb(p, q, t) {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
      }
      if (t < 1 / 2) {
        return q;
      }
      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }
      return p;
    }
    static fromRGBA(r, g, b, a) {
      r /= 255;
      g /= 255;
      b /= 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s;
      const l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return new HSLColor(h, s, l, a);
    }
    toRGBA() {
      let r, g, b;
      if (this.s === 0) {
        r = g = b = this.l;
      } else {
        const q = this.l < 0.5 ? this.l * (1 + this.s) : this.l + this.s - this.l * this.s;
        const p = 2 * this.l - q;
        r = HSLColor.hue2rgb(p, q, this.h + 1 / 3);
        g = HSLColor.hue2rgb(p, q, this.h);
        b = HSLColor.hue2rgb(p, q, this.h - 1 / 3);
      }
      return new Color(r * 255, g * 255, b * 255, this.a);
    }
    toString() {
      const h = this.h.toFixed(0), s = this.s.toFixed(0), l = this.l.toFixed(0), a = this.a.toFixed(0);
      return `hsla(${h}, ${s}, ${l}, ${a})`;
    }
  }
  var Side;
  (function(Side2) {
    Side2["None"] = "None";
    Side2["Top"] = "Top";
    Side2["Bottom"] = "Bottom";
    Side2["Left"] = "Left";
    Side2["Right"] = "Right";
  })(Side || (Side = {}));
  (function(Side2) {
    function getOpposite(side) {
      if (side === Side2.Top) {
        return Side2.Bottom;
      }
      if (side === Side2.Bottom) {
        return Side2.Top;
      }
      if (side === Side2.Left) {
        return Side2.Right;
      }
      if (side === Side2.Right) {
        return Side2.Left;
      }
      return Side2.None;
    }
    Side2.getOpposite = getOpposite;
    function fromDirection(direction) {
      const directions = [Vector.Left, Vector.Right, Vector.Up, Vector.Down];
      const directionEnum = [Side2.Left, Side2.Right, Side2.Top, Side2.Bottom];
      let max = -Number.MAX_VALUE;
      let maxIndex = -1;
      for (let i = 0;i < directions.length; i++) {
        if (directions[i].dot(direction) > max) {
          max = directions[i].dot(direction);
          maxIndex = i;
        }
      }
      return directionEnum[maxIndex];
    }
    Side2.fromDirection = fromDirection;
  })(Side || (Side = {}));

  class BoundingBox {
    constructor(leftOrOptions = 0, top = 0, right = 0, bottom = 0) {
      if (typeof leftOrOptions === "object") {
        this.left = leftOrOptions.left;
        this.top = leftOrOptions.top;
        this.right = leftOrOptions.right;
        this.bottom = leftOrOptions.bottom;
      } else if (typeof leftOrOptions === "number") {
        this.left = leftOrOptions;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
      }
    }
    clone() {
      return new BoundingBox(this.left, this.top, this.right, this.bottom);
    }
    static getSideFromIntersection(intersection) {
      if (!intersection) {
        return Side.None;
      }
      if (intersection) {
        if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
          if (intersection.x < 0) {
            return Side.Right;
          }
          return Side.Left;
        } else {
          if (intersection.y < 0) {
            return Side.Bottom;
          }
          return Side.Top;
        }
      }
      return Side.None;
    }
    static fromPoints(points) {
      let minX = Infinity;
      let minY = Infinity;
      let maxX = (-Infinity);
      let maxY = (-Infinity);
      for (let i = 0;i < points.length; i++) {
        if (points[i].x < minX) {
          minX = points[i].x;
        }
        if (points[i].x > maxX) {
          maxX = points[i].x;
        }
        if (points[i].y < minY) {
          minY = points[i].y;
        }
        if (points[i].y > maxY) {
          maxY = points[i].y;
        }
      }
      return new BoundingBox(minX, minY, maxX, maxY);
    }
    static fromDimension(width, height, anchor = Vector.Half, pos = Vector.Zero) {
      return new BoundingBox(-width * anchor.x + pos.x, -height * anchor.y + pos.y, width - width * anchor.x + pos.x, height - height * anchor.y + pos.y);
    }
    get width() {
      return this.right - this.left;
    }
    get height() {
      return this.bottom - this.top;
    }
    hasZeroDimensions() {
      return this.width === 0 || this.height === 0;
    }
    get center() {
      return new Vector((this.left + this.right) / 2, (this.top + this.bottom) / 2);
    }
    translate(pos) {
      return new BoundingBox(this.left + pos.x, this.top + pos.y, this.right + pos.x, this.bottom + pos.y);
    }
    rotate(angle, point2 = Vector.Zero) {
      const points = this.getPoints().map((p) => p.rotate(angle, point2));
      return BoundingBox.fromPoints(points);
    }
    scale(scale, point2 = Vector.Zero) {
      const shifted = this.translate(point2);
      return new BoundingBox(shifted.left * scale.x, shifted.top * scale.y, shifted.right * scale.x, shifted.bottom * scale.y);
    }
    transform(matrix) {
      const xa1 = matrix.data[0] * this.left;
      const xa2 = matrix.data[1] * this.left;
      const xb1 = matrix.data[0] * this.right;
      const xb2 = matrix.data[1] * this.right;
      const ya1 = matrix.data[2] * this.top;
      const ya2 = matrix.data[3] * this.top;
      const yb1 = matrix.data[2] * this.bottom;
      const yb2 = matrix.data[3] * this.bottom;
      const matrixPos = matrix.getPosition();
      const left = Math.min(xa1, xb1) + Math.min(ya1, yb1) + matrixPos.x;
      const top = Math.min(xa2, xb2) + Math.min(ya2, yb2) + matrixPos.y;
      const right = Math.max(xa1, xb1) + Math.max(ya1, yb1) + matrixPos.x;
      const bottom = Math.max(xa2, xb2) + Math.max(ya2, yb2) + matrixPos.y;
      return new BoundingBox({
        left,
        top,
        right,
        bottom
      });
    }
    getPerimeter() {
      const wx = this.width;
      const wy = this.height;
      return 2 * (wx + wy);
    }
    getPoints() {
      const results = [];
      results.push(new Vector(this.left, this.top));
      results.push(new Vector(this.right, this.top));
      results.push(new Vector(this.right, this.bottom));
      results.push(new Vector(this.left, this.bottom));
      return results;
    }
    rayCast(ray, farClipDistance = Infinity) {
      let tmin = (-Infinity);
      let tmax = Infinity;
      const xinv = ray.dir.x === 0 ? Number.MAX_VALUE : 1 / ray.dir.x;
      const yinv = ray.dir.y === 0 ? Number.MAX_VALUE : 1 / ray.dir.y;
      const tx1 = (this.left - ray.pos.x) * xinv;
      const tx2 = (this.right - ray.pos.x) * xinv;
      tmin = Math.min(tx1, tx2);
      tmax = Math.max(tx1, tx2);
      const ty1 = (this.top - ray.pos.y) * yinv;
      const ty2 = (this.bottom - ray.pos.y) * yinv;
      tmin = Math.max(tmin, Math.min(ty1, ty2));
      tmax = Math.min(tmax, Math.max(ty1, ty2));
      return tmax >= Math.max(0, tmin) && tmin < farClipDistance;
    }
    rayCastTime(ray, farClipDistance = Infinity) {
      let tmin = (-Infinity);
      let tmax = Infinity;
      const xinv = ray.dir.x === 0 ? Number.MAX_VALUE : 1 / ray.dir.x;
      const yinv = ray.dir.y === 0 ? Number.MAX_VALUE : 1 / ray.dir.y;
      const tx1 = (this.left - ray.pos.x) * xinv;
      const tx2 = (this.right - ray.pos.x) * xinv;
      tmin = Math.min(tx1, tx2);
      tmax = Math.max(tx1, tx2);
      const ty1 = (this.top - ray.pos.y) * yinv;
      const ty2 = (this.bottom - ray.pos.y) * yinv;
      tmin = Math.max(tmin, Math.min(ty1, ty2));
      tmax = Math.min(tmax, Math.max(ty1, ty2));
      if (tmax >= Math.max(0, tmin) && tmin < farClipDistance) {
        return tmin;
      }
      return -1;
    }
    contains(val) {
      if (val instanceof Vector) {
        return this.left <= val.x && this.top <= val.y && this.bottom >= val.y && this.right >= val.x;
      } else if (val instanceof BoundingBox) {
        if (this.left <= val.left && this.top <= val.top && val.bottom <= this.bottom && val.right <= this.right) {
          return true;
        }
        return false;
      }
      return false;
    }
    combine(other) {
      const compositeBB = new BoundingBox(Math.min(this.left, other.left), Math.min(this.top, other.top), Math.max(this.right, other.right), Math.max(this.bottom, other.bottom));
      return compositeBB;
    }
    get dimensions() {
      return new Vector(this.width, this.height);
    }
    overlaps(other, epsilon) {
      const e = epsilon || 0;
      if (other.hasZeroDimensions()) {
        return this.contains(other);
      }
      if (this.hasZeroDimensions()) {
        return other.contains(this);
      }
      const totalBoundingBox = this.combine(other);
      return totalBoundingBox.width + e < other.width + this.width && totalBoundingBox.height + e < other.height + this.height;
    }
    intersect(other) {
      const totalBoundingBox = this.combine(other);
      if (totalBoundingBox.width < other.width + this.width && totalBoundingBox.height < other.height + this.height && !totalBoundingBox.dimensions.equals(other.dimensions) && !totalBoundingBox.dimensions.equals(this.dimensions)) {
        let overlapX = 0;
        if (this.right >= other.left && this.right <= other.right) {
          overlapX = other.left - this.right;
        } else {
          overlapX = other.right - this.left;
        }
        let overlapY = 0;
        if (this.top <= other.bottom && this.top >= other.top) {
          overlapY = other.bottom - this.top;
        } else {
          overlapY = other.top - this.bottom;
        }
        if (Math.abs(overlapX) < Math.abs(overlapY)) {
          return new Vector(overlapX, 0);
        } else {
          return new Vector(0, overlapY);
        }
      } else if (totalBoundingBox.dimensions.equals(other.dimensions) || totalBoundingBox.dimensions.equals(this.dimensions)) {
        let overlapX = 0;
        if (this.width - other.width >= 0) {
          if (this.right - other.right <= other.left - this.left) {
            overlapX = other.left - this.right;
          } else {
            overlapX = other.right - this.left;
          }
        } else {
          if (other.right - this.right <= this.left - other.left) {
            overlapX = this.left - other.right;
          } else {
            overlapX = this.right - other.left;
          }
        }
        let overlapY = 0;
        if (this.height - other.height >= 0) {
          if (this.bottom - other.bottom <= other.top - this.top) {
            overlapY = other.top - this.bottom;
          } else {
            overlapY = other.bottom - this.top;
          }
        } else {
          if (other.bottom - this.bottom <= this.top - other.top) {
            overlapY = this.top - other.bottom;
          } else {
            overlapY = this.bottom - other.top;
          }
        }
        if (Math.abs(overlapX) < Math.abs(overlapY)) {
          return new Vector(overlapX, 0);
        } else {
          return new Vector(0, overlapY);
        }
      } else {
        return null;
      }
    }
    intersectWithSide(bb) {
      const intersect = this.intersect(bb);
      return BoundingBox.getSideFromIntersection(intersect);
    }
    draw(ex, color = Color.Yellow) {
      ex.debug.drawRect(this.left, this.top, this.width, this.height, { color });
    }
  }
  function getPosition(el) {
    let oLeft = 0, oTop = 0;
    const calcOffsetLeft = (parent) => {
      oLeft += parent.offsetLeft;
      if (parent.offsetParent) {
        calcOffsetLeft(parent.offsetParent);
      }
    };
    const calcOffsetTop = (parent) => {
      oTop += parent.offsetTop;
      if (parent.offsetParent) {
        calcOffsetTop(parent.offsetParent);
      }
    };
    calcOffsetLeft(el);
    calcOffsetTop(el);
    return new Vector(oLeft, oTop);
  }
  function addItemToArray(item, array) {
    if (array.indexOf(item) === -1) {
      array.push(item);
      return true;
    }
    return false;
  }
  function removeItemFromArray(item, array) {
    let index = -1;
    if ((index = array.indexOf(item)) > -1) {
      array.splice(index, 1);
      return true;
    }
    return false;
  }
  function contains(array, obj) {
    for (let i = 0;i < array.length; i++) {
      if (array[i] === obj) {
        return true;
      }
    }
    return false;
  }
  function fail(message) {
    throw new Error(message);
  }
  function delay(milliseconds, clock) {
    var _a;
    const future = new Future;
    const schedule = (_a = clock === null || clock === undefined ? undefined : clock.schedule.bind(clock)) !== null && _a !== undefined ? _a : setTimeout;
    schedule(() => {
      future.resolve();
    }, milliseconds);
    return future.promise;
  }
  function omit(object, keys2) {
    const newObj = {};
    for (const key in object) {
      if (!keys2.includes(key)) {
        newObj[key] = object[key];
      }
    }
    return newObj;
  }
  var MatrixLocations;
  (function(MatrixLocations2) {
    MatrixLocations2[MatrixLocations2["X"] = 12] = "X";
    MatrixLocations2[MatrixLocations2["Y"] = 13] = "Y";
  })(MatrixLocations || (MatrixLocations = {}));

  class Matrix {
    constructor() {
      this.data = new Float32Array(16);
      this._scaleX = 1;
      this._scaleSignX = 1;
      this._scaleY = 1;
      this._scaleSignY = 1;
    }
    static ortho(left, right, bottom, top, near, far) {
      const mat = new Matrix;
      mat.data[0] = 2 / (right - left);
      mat.data[1] = 0;
      mat.data[2] = 0;
      mat.data[3] = 0;
      mat.data[4] = 0;
      mat.data[5] = 2 / (top - bottom);
      mat.data[6] = 0;
      mat.data[7] = 0;
      mat.data[8] = 0;
      mat.data[9] = 0;
      mat.data[10] = -2 / (far - near);
      mat.data[11] = 0;
      mat.data[12] = -(right + left) / (right - left);
      mat.data[13] = -(top + bottom) / (top - bottom);
      mat.data[14] = -(far + near) / (far - near);
      mat.data[15] = 1;
      return mat;
    }
    clone(dest) {
      const mat = dest || new Matrix;
      mat.data[0] = this.data[0];
      mat.data[1] = this.data[1];
      mat.data[2] = this.data[2];
      mat.data[3] = this.data[3];
      mat.data[4] = this.data[4];
      mat.data[5] = this.data[5];
      mat.data[6] = this.data[6];
      mat.data[7] = this.data[7];
      mat.data[8] = this.data[8];
      mat.data[9] = this.data[9];
      mat.data[10] = this.data[10];
      mat.data[11] = this.data[11];
      mat.data[12] = this.data[12];
      mat.data[13] = this.data[13];
      mat.data[14] = this.data[14];
      mat.data[15] = this.data[15];
      return mat;
    }
    toDOMMatrix() {
      return new DOMMatrix([...this.data]);
    }
    static fromFloat32Array(data) {
      const matrix = new Matrix;
      matrix.data = data;
      return matrix;
    }
    static identity() {
      const mat = new Matrix;
      mat.data[0] = 1;
      mat.data[1] = 0;
      mat.data[2] = 0;
      mat.data[3] = 0;
      mat.data[4] = 0;
      mat.data[5] = 1;
      mat.data[6] = 0;
      mat.data[7] = 0;
      mat.data[8] = 0;
      mat.data[9] = 0;
      mat.data[10] = 1;
      mat.data[11] = 0;
      mat.data[12] = 0;
      mat.data[13] = 0;
      mat.data[14] = 0;
      mat.data[15] = 1;
      return mat;
    }
    reset() {
      const mat = this;
      mat.data[0] = 1;
      mat.data[1] = 0;
      mat.data[2] = 0;
      mat.data[3] = 0;
      mat.data[4] = 0;
      mat.data[5] = 1;
      mat.data[6] = 0;
      mat.data[7] = 0;
      mat.data[8] = 0;
      mat.data[9] = 0;
      mat.data[10] = 1;
      mat.data[11] = 0;
      mat.data[12] = 0;
      mat.data[13] = 0;
      mat.data[14] = 0;
      mat.data[15] = 1;
      return mat;
    }
    static translation(x, y) {
      const mat = Matrix.identity();
      mat.data[12] = x;
      mat.data[13] = y;
      return mat;
    }
    static scale(sx, sy) {
      const mat = Matrix.identity();
      mat.data[0] = sx;
      mat.data[5] = sy;
      mat.data[10] = 1;
      mat.data[15] = 1;
      return mat;
    }
    static rotation(angleRadians) {
      const mat = Matrix.identity();
      mat.data[0] = Math.cos(angleRadians);
      mat.data[4] = -Math.sin(angleRadians);
      mat.data[1] = Math.sin(angleRadians);
      mat.data[5] = Math.cos(angleRadians);
      return mat;
    }
    multiply(vectorOrMatrix, dest) {
      if (vectorOrMatrix instanceof Vector) {
        const result = dest || new Vector(0, 0);
        const vector2 = vectorOrMatrix;
        const resultX = vector2.x * this.data[0] + vector2.y * this.data[4] + this.data[12];
        const resultY = vector2.x * this.data[1] + vector2.y * this.data[5] + this.data[13];
        result.x = resultX;
        result.y = resultY;
        return result;
      } else {
        const result = dest || new Matrix;
        const other = vectorOrMatrix;
        const a11 = this.data[0];
        const a21 = this.data[1];
        const a31 = this.data[2];
        const a41 = this.data[3];
        const a12 = this.data[4];
        const a22 = this.data[5];
        const a32 = this.data[6];
        const a42 = this.data[7];
        const a13 = this.data[8];
        const a23 = this.data[9];
        const a33 = this.data[10];
        const a43 = this.data[11];
        const a14 = this.data[12];
        const a24 = this.data[13];
        const a34 = this.data[14];
        const a44 = this.data[15];
        const b11 = other.data[0];
        const b21 = other.data[1];
        const b31 = other.data[2];
        const b41 = other.data[3];
        const b12 = other.data[4];
        const b22 = other.data[5];
        const b32 = other.data[6];
        const b42 = other.data[7];
        const b13 = other.data[8];
        const b23 = other.data[9];
        const b33 = other.data[10];
        const b43 = other.data[11];
        const b14 = other.data[12];
        const b24 = other.data[13];
        const b34 = other.data[14];
        const b44 = other.data[15];
        result.data[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
        result.data[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
        result.data[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
        result.data[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
        result.data[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
        result.data[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
        result.data[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
        result.data[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
        result.data[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
        result.data[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
        result.data[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
        result.data[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
        result.data[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
        result.data[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
        result.data[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
        result.data[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
        const s = this.getScale();
        result._scaleSignX = sign(s.x) * sign(result._scaleSignX);
        result._scaleSignY = sign(s.y) * sign(result._scaleSignY);
        return result;
      }
    }
    translate(x, y) {
      const a11 = this.data[0];
      const a21 = this.data[1];
      const a31 = this.data[2];
      const a41 = this.data[3];
      const a12 = this.data[4];
      const a22 = this.data[5];
      const a32 = this.data[6];
      const a42 = this.data[7];
      const a13 = this.data[8];
      const a23 = this.data[9];
      const a33 = this.data[10];
      const a43 = this.data[11];
      const a14 = this.data[12];
      const a24 = this.data[13];
      const a34 = this.data[14];
      const a44 = this.data[15];
      const z = 0;
      const w = 1;
      this.data[12] = a11 * x + a12 * y + a13 * z + a14 * w;
      this.data[13] = a21 * x + a22 * y + a23 * z + a24 * w;
      this.data[14] = a31 * x + a32 * y + a33 * z + a34 * w;
      this.data[15] = a41 * x + a42 * y + a43 * z + a44 * w;
      return this;
    }
    setPosition(x, y) {
      this.data[12] = x;
      this.data[13] = y;
    }
    getPosition() {
      return vec(this.data[12], this.data[13]);
    }
    rotate(angle) {
      const a11 = this.data[0];
      const a21 = this.data[1];
      const a31 = this.data[2];
      const a41 = this.data[3];
      const a12 = this.data[4];
      const a22 = this.data[5];
      const a32 = this.data[6];
      const a42 = this.data[7];
      const sine = Math.sin(angle);
      const cosine = Math.cos(angle);
      this.data[0] = cosine * a11 + sine * a12;
      this.data[1] = cosine * a21 + sine * a22;
      this.data[2] = cosine * a31 + sine * a32;
      this.data[3] = cosine * a41 + sine * a42;
      this.data[4] = cosine * a12 - sine * a11;
      this.data[5] = cosine * a22 - sine * a21;
      this.data[6] = cosine * a32 - sine * a31;
      this.data[7] = cosine * a42 - sine * a41;
      return this;
    }
    scale(x, y) {
      const a11 = this.data[0];
      const a21 = this.data[1];
      const a31 = this.data[2];
      const a41 = this.data[3];
      const a12 = this.data[4];
      const a22 = this.data[5];
      const a32 = this.data[6];
      const a42 = this.data[7];
      this.data[0] = a11 * x;
      this.data[1] = a21 * x;
      this.data[2] = a31 * x;
      this.data[3] = a41 * x;
      this.data[4] = a12 * y;
      this.data[5] = a22 * y;
      this.data[6] = a32 * y;
      this.data[7] = a42 * y;
      return this;
    }
    setRotation(angle) {
      const currentScale = this.getScale();
      const sine = Math.sin(angle);
      const cosine = Math.cos(angle);
      this.data[0] = cosine * currentScale.x;
      this.data[1] = sine * currentScale.y;
      this.data[4] = -sine * currentScale.x;
      this.data[5] = cosine * currentScale.y;
    }
    getRotation() {
      const angle = Math.atan2(this.data[1] / this.getScaleY(), this.data[0] / this.getScaleX());
      return canonicalizeAngle(angle);
    }
    getScaleX() {
      const xscale = vec(this.data[0], this.data[4]).size;
      return this._scaleSignX * xscale;
    }
    getScaleY() {
      const yscale = vec(this.data[1], this.data[5]).size;
      return this._scaleSignY * yscale;
    }
    getScale() {
      return vec(this.getScaleX(), this.getScaleY());
    }
    setScaleX(val) {
      if (this._scaleX === val) {
        return;
      }
      this._scaleSignX = sign(val);
      const xscale = vec(this.data[0] * this._scaleSignX, this.data[4] * this._scaleSignX).normalize();
      this.data[0] = xscale.x * val;
      this.data[4] = xscale.y * val;
      this._scaleX = val;
    }
    setScaleY(val) {
      if (this._scaleY === val) {
        return;
      }
      this._scaleSignY = sign(val);
      const yscale = vec(this.data[1] * this._scaleSignY, this.data[5] * this._scaleSignY).normalize();
      this.data[1] = yscale.x * val;
      this.data[5] = yscale.y * val;
      this._scaleY = val;
    }
    setScale(scale) {
      this.setScaleX(scale.x);
      this.setScaleY(scale.y);
    }
    getBasisDeterminant() {
      return this.data[0] * this.data[5] - this.data[1] * this.data[4];
    }
    getAffineInverse(target) {
      const det = this.getBasisDeterminant();
      const inverseDet = 1 / det;
      const a = this.data[0];
      const b = this.data[4];
      const c = this.data[1];
      const d = this.data[5];
      const m = target || Matrix.identity();
      m.data[0] = d * inverseDet;
      m.data[1] = -c * inverseDet;
      m.data[4] = -b * inverseDet;
      m.data[5] = a * inverseDet;
      const tx = this.data[12];
      const ty = this.data[13];
      m.data[12] = -(tx * m.data[0] + ty * m.data[4]);
      m.data[13] = -(tx * m.data[1] + ty * m.data[5]);
      return m;
    }
    isIdentity() {
      return this.data[0] === 1 && this.data[1] === 0 && this.data[2] === 0 && this.data[3] === 0 && this.data[4] === 0 && this.data[5] === 1 && this.data[6] === 0 && this.data[7] === 0 && this.data[8] === 0 && this.data[9] === 0 && this.data[10] === 1 && this.data[11] === 0 && this.data[12] === 0 && this.data[13] === 0 && this.data[14] === 0 && this.data[15] === 1;
    }
    toString() {
      return `
[${this.data[0]} ${this.data[4]} ${this.data[8]} ${this.data[12]}]
[${this.data[1]} ${this.data[5]} ${this.data[9]} ${this.data[13]}]
[${this.data[2]} ${this.data[6]} ${this.data[10]} ${this.data[14]}]
[${this.data[3]} ${this.data[7]} ${this.data[11]} ${this.data[15]}]
`;
    }
  }

  class AffineMatrix {
    constructor() {
      this.data = new Float64Array(6);
      this._scale = new Float64Array([1, 1]);
      this._scaleSignX = 1;
      this._scaleSignY = 1;
    }
    toDOMMatrix() {
      return new DOMMatrix([...this.data]);
    }
    static identity() {
      const mat = new AffineMatrix;
      mat.data[0] = 1;
      mat.data[1] = 0;
      mat.data[2] = 0;
      mat.data[3] = 1;
      mat.data[4] = 0;
      mat.data[5] = 0;
      return mat;
    }
    static translation(x, y) {
      const mat = AffineMatrix.identity();
      mat.data[4] = x;
      mat.data[5] = y;
      return mat;
    }
    static scale(sx, sy) {
      const mat = AffineMatrix.identity();
      mat.data[0] = sx;
      mat.data[3] = sy;
      mat._scale[0] = sx;
      mat._scale[1] = sy;
      return mat;
    }
    static rotation(angleRadians) {
      const mat = AffineMatrix.identity();
      mat.data[0] = Math.cos(angleRadians);
      mat.data[1] = Math.sin(angleRadians);
      mat.data[2] = -Math.sin(angleRadians);
      mat.data[3] = Math.cos(angleRadians);
      return mat;
    }
    setPosition(x, y) {
      this.data[4] = x;
      this.data[5] = y;
    }
    getPosition() {
      return vec(this.data[4], this.data[5]);
    }
    rotate(angle) {
      const a11 = this.data[0];
      const a21 = this.data[1];
      const a12 = this.data[2];
      const a22 = this.data[3];
      const sine = Math.sin(angle);
      const cosine = Math.cos(angle);
      this.data[0] = cosine * a11 + sine * a12;
      this.data[1] = cosine * a21 + sine * a22;
      this.data[2] = cosine * a12 - sine * a11;
      this.data[3] = cosine * a22 - sine * a21;
      return this;
    }
    translate(x, y) {
      const a11 = this.data[0];
      const a21 = this.data[1];
      const a12 = this.data[2];
      const a22 = this.data[3];
      const a13 = this.data[4];
      const a23 = this.data[5];
      this.data[4] = a11 * x + a12 * y + a13;
      this.data[5] = a21 * x + a22 * y + a23;
      return this;
    }
    scale(x, y) {
      const a11 = this.data[0];
      const a21 = this.data[1];
      const a12 = this.data[2];
      const a22 = this.data[3];
      this.data[0] = a11 * x;
      this.data[1] = a21 * x;
      this.data[2] = a12 * y;
      this.data[3] = a22 * y;
      this._scale[0] = x;
      this._scale[1] = y;
      return this;
    }
    determinant() {
      return this.data[0] * this.data[3] - this.data[1] * this.data[2];
    }
    inverse(target) {
      const det = this.determinant();
      const inverseDet = 1 / det;
      const a = this.data[0];
      const b = this.data[2];
      const c = this.data[1];
      const d = this.data[3];
      const m = target || AffineMatrix.identity();
      m.data[0] = d * inverseDet;
      m.data[1] = -c * inverseDet;
      m.data[2] = -b * inverseDet;
      m.data[3] = a * inverseDet;
      const tx = this.data[4];
      const ty = this.data[5];
      m.data[4] = -(tx * m.data[0] + ty * m.data[2]);
      m.data[5] = -(tx * m.data[1] + ty * m.data[3]);
      return m;
    }
    multiply(vectorOrMatrix, dest) {
      if (vectorOrMatrix instanceof Vector) {
        const result = dest || new Vector(0, 0);
        const vector2 = vectorOrMatrix;
        const resultX = vector2.x * this.data[0] + vector2.y * this.data[2] + this.data[4];
        const resultY = vector2.x * this.data[1] + vector2.y * this.data[3] + this.data[5];
        result.x = resultX;
        result.y = resultY;
        return result;
      } else {
        const result = dest || new AffineMatrix;
        const other = vectorOrMatrix;
        const a11 = this.data[0];
        const a21 = this.data[1];
        const a12 = this.data[2];
        const a22 = this.data[3];
        const a13 = this.data[4];
        const a23 = this.data[5];
        const b11 = other.data[0];
        const b21 = other.data[1];
        const b12 = other.data[2];
        const b22 = other.data[3];
        const b13 = other.data[4];
        const b23 = other.data[5];
        result.data[0] = a11 * b11 + a12 * b21;
        result.data[1] = a21 * b11 + a22 * b21;
        result.data[2] = a11 * b12 + a12 * b22;
        result.data[3] = a21 * b12 + a22 * b22;
        result.data[4] = a11 * b13 + a12 * b23 + a13;
        result.data[5] = a21 * b13 + a22 * b23 + a23;
        const s = this.getScale();
        result._scaleSignX = sign(s.x) * sign(result._scaleSignX);
        result._scaleSignY = sign(s.y) * sign(result._scaleSignY);
        return result;
      }
    }
    to4x4() {
      const mat = new Matrix;
      mat.data[0] = this.data[0];
      mat.data[1] = this.data[1];
      mat.data[2] = 0;
      mat.data[3] = 0;
      mat.data[4] = this.data[2];
      mat.data[5] = this.data[3];
      mat.data[6] = 0;
      mat.data[7] = 0;
      mat.data[8] = 0;
      mat.data[9] = 0;
      mat.data[10] = 1;
      mat.data[11] = 0;
      mat.data[12] = this.data[4];
      mat.data[13] = this.data[5];
      mat.data[14] = 0;
      mat.data[15] = 1;
      return mat;
    }
    setRotation(angle) {
      const currentScale = this.getScale();
      const sine = Math.sin(angle);
      const cosine = Math.cos(angle);
      this.data[0] = cosine * currentScale.x;
      this.data[1] = sine * currentScale.y;
      this.data[2] = -sine * currentScale.x;
      this.data[3] = cosine * currentScale.y;
    }
    getRotation() {
      const angle = Math.atan2(this.data[1] / this.getScaleY(), this.data[0] / this.getScaleX());
      return canonicalizeAngle(angle);
    }
    getScaleX() {
      const xscale = vec(this.data[0], this.data[2]).distance();
      return this._scaleSignX * xscale;
    }
    getScaleY() {
      const yscale = vec(this.data[1], this.data[3]).distance();
      return this._scaleSignY * yscale;
    }
    getScale() {
      return vec(this.getScaleX(), this.getScaleY());
    }
    setScaleX(val) {
      if (val === this._scale[0]) {
        return;
      }
      this._scaleSignX = sign(val);
      const xscale = vec(this.data[0] * this._scaleSignX, this.data[2] * this._scaleSignX).normalize();
      this.data[0] = xscale.x * val;
      this.data[2] = xscale.y * val;
      this._scale[0] = val;
    }
    setScaleY(val) {
      if (val === this._scale[1]) {
        return;
      }
      this._scaleSignY = sign(val);
      const yscale = vec(this.data[1] * this._scaleSignY, this.data[3] * this._scaleSignY).normalize();
      this.data[1] = yscale.x * val;
      this.data[3] = yscale.y * val;
      this._scale[1] = val;
    }
    setScale(scale) {
      this.setScaleX(scale.x);
      this.setScaleY(scale.y);
    }
    isIdentity() {
      return this.data[0] === 1 && this.data[1] === 0 && this.data[2] === 0 && this.data[3] === 1 && this.data[4] === 0 && this.data[5] === 0;
    }
    reset() {
      const mat = this;
      mat.data[0] = 1;
      mat.data[1] = 0;
      mat.data[2] = 0;
      mat.data[3] = 1;
      mat.data[4] = 0;
      mat.data[5] = 0;
      return mat;
    }
    clone(dest) {
      const mat = dest || new AffineMatrix;
      mat.data[0] = this.data[0];
      mat.data[1] = this.data[1];
      mat.data[2] = this.data[2];
      mat.data[3] = this.data[3];
      mat.data[4] = this.data[4];
      mat.data[5] = this.data[5];
      return mat;
    }
    toString() {
      return `
[${this.data[0]} ${this.data[2]} ${this.data[4]}]
[${this.data[1]} ${this.data[3]} ${this.data[5]}]
[0 0 1]
`;
    }
  }

  class TransformStack {
    constructor() {
      this._transforms = [];
      this._currentTransform = AffineMatrix.identity();
    }
    save() {
      this._transforms.push(this._currentTransform);
      this._currentTransform = this._currentTransform.clone();
    }
    restore() {
      this._currentTransform = this._transforms.pop();
    }
    translate(x, y) {
      return this._currentTransform.translate(x, y);
    }
    rotate(angle) {
      return this._currentTransform.rotate(angle);
    }
    scale(x, y) {
      return this._currentTransform.scale(x, y);
    }
    set current(matrix) {
      this._currentTransform = matrix;
    }
    get current() {
      return this._currentTransform;
    }
  }

  class StateStack {
    constructor() {
      this._states = [];
      this._currentState = this._getDefaultState();
    }
    _getDefaultState() {
      return {
        opacity: 1,
        z: 0,
        tint: Color.White,
        material: null
      };
    }
    _cloneState() {
      return {
        opacity: this._currentState.opacity,
        z: this._currentState.z,
        tint: this._currentState.tint.clone(),
        material: this._currentState.material
      };
    }
    save() {
      this._states.push(this._currentState);
      this._currentState = this._cloneState();
    }
    restore() {
      this._currentState = this._states.pop();
    }
    get current() {
      return this._currentState;
    }
    set current(val) {
      this._currentState = val;
    }
  }
  const ResourceEvents = {
    Complete: "complete",
    Load: "load",
    LoadStart: "loadstart",
    Progress: "progress",
    Error: "error"
  };

  class Resource {
    constructor(path, responseType, bustCache = false) {
      this.path = path;
      this.responseType = responseType;
      this.bustCache = bustCache;
      this.data = null;
      this.logger = Logger.getInstance();
      this.events = new EventEmitter;
    }
    isLoaded() {
      return this.data !== null;
    }
    _cacheBust(uri) {
      const query = /\?\w*=\w*/;
      if (query.test(uri)) {
        uri += "&__=" + Date.now();
      } else {
        uri += "?__=" + Date.now();
      }
      return uri;
    }
    load() {
      return new Promise((resolve, reject) => {
        if (this.data !== null) {
          this.logger.debug("Already have data for resource", this.path);
          this.events.emit("complete", this.data);
          resolve(this.data);
          return;
        }
        const request = new XMLHttpRequest;
        request.open("GET", this.bustCache ? this._cacheBust(this.path) : this.path, true);
        request.responseType = this.responseType;
        request.addEventListener("loadstart", (e) => this.events.emit("loadstart", e));
        request.addEventListener("progress", (e) => this.events.emit("progress", e));
        request.addEventListener("error", (e) => this.events.emit("error", e));
        request.addEventListener("load", (e) => this.events.emit("load", e));
        request.addEventListener("load", () => {
          if (request.status !== 0 && request.status !== 200) {
            this.logger.error("Failed to load resource ", this.path, " server responded with error code", request.status);
            this.events.emit("error", request.response);
            reject(new Error(request.statusText));
            return;
          }
          this.data = request.response;
          this.events.emit("complete", this.data);
          this.logger.debug("Completed loading resource", this.path);
          resolve(this.data);
        });
        request.send();
      });
    }
  }
  function watch(type, change) {
    if (!type) {
      return type;
    }
    if (type.__isProxy === undefined) {
      return new Proxy(type, {
        set: (obj, prop, value) => {
          if (obj[prop] !== value) {
            obj[prop] = value;
            if (typeof prop === "string") {
              if (prop[0] !== "_") {
                change(obj);
              }
            }
          }
          return true;
        },
        get: (obj, prop) => {
          if (prop !== "__isProxy") {
            return obj[prop];
          }
          return true;
        }
      });
    }
    return type;
  }
  function watchAny(type, change) {
    if (!type) {
      return type;
    }
    if (type.__isProxy === undefined) {
      return new Proxy(type, {
        set: (obj, prop, value) => {
          obj[prop] = value;
          if (typeof prop === "string") {
            if (prop[0] !== "_") {
              change(obj);
            }
          }
          return true;
        },
        get: (obj, prop) => {
          if (prop !== "__isProxy") {
            return obj[prop];
          }
          return true;
        }
      });
    }
    return type;
  }

  class Graphic {
    isStale() {
      return this._transformStale;
    }
    get flipHorizontal() {
      return this._flipHorizontal;
    }
    set flipHorizontal(value) {
      this._flipHorizontal = value;
      this._transformStale = true;
    }
    get flipVertical() {
      return this._flipVertical;
    }
    set flipVertical(value) {
      this._flipVertical = value;
      this._transformStale = true;
    }
    get rotation() {
      return this._rotation;
    }
    set rotation(value) {
      this._rotation = value;
      this._transformStale = true;
    }
    get scale() {
      return this._scale;
    }
    set scale(value) {
      this._scale = watch(value, () => {
        this._transformStale = true;
      });
      this._transformStale = true;
    }
    get origin() {
      return this._origin;
    }
    set origin(value) {
      this._origin = watch(value, () => {
        this._transformStale = true;
      });
      this._transformStale = true;
    }
    constructor(options) {
      var _a, _b, _c, _d, _e, _f, _g;
      this.id = Graphic._ID++;
      this.transform = AffineMatrix.identity();
      this.tint = null;
      this._transformStale = true;
      this.showDebug = false;
      this._flipHorizontal = false;
      this._flipVertical = false;
      this._rotation = 0;
      this.opacity = 1;
      this._scale = Vector.One;
      this._origin = null;
      this._width = 0;
      this._height = 0;
      if (options) {
        this.origin = (_a = options.origin) !== null && _a !== undefined ? _a : this.origin;
        this.flipHorizontal = (_b = options.flipHorizontal) !== null && _b !== undefined ? _b : this.flipHorizontal;
        this.flipVertical = (_c = options.flipVertical) !== null && _c !== undefined ? _c : this.flipVertical;
        this.rotation = (_d = options.rotation) !== null && _d !== undefined ? _d : this.rotation;
        this.opacity = (_e = options.opacity) !== null && _e !== undefined ? _e : this.opacity;
        this.scale = (_f = options.scale) !== null && _f !== undefined ? _f : this.scale;
        this.tint = (_g = options.tint) !== null && _g !== undefined ? _g : this.tint;
      }
    }
    cloneGraphicOptions() {
      return {
        width: this.width / this.scale.x,
        height: this.height / this.scale.y,
        origin: this.origin ? this.origin.clone() : null,
        flipHorizontal: this.flipHorizontal,
        flipVertical: this.flipVertical,
        rotation: this.rotation,
        opacity: this.opacity,
        scale: this.scale ? this.scale.clone() : null,
        tint: this.tint ? this.tint.clone() : null
      };
    }
    get width() {
      return Math.abs(this._width * this.scale.x);
    }
    get height() {
      return Math.abs(this._height * this.scale.y);
    }
    set width(value) {
      this._width = value;
      this._transformStale = true;
    }
    set height(value) {
      this._height = value;
      this._transformStale = true;
    }
    get localBounds() {
      return BoundingBox.fromDimension(this.width, this.height, Vector.Zero);
    }
    draw(ex, x, y) {
      this._preDraw(ex, x, y);
      this._drawImage(ex, 0, 0);
      this._postDraw(ex);
    }
    _preDraw(ex, x, y) {
      ex.save();
      ex.translate(x, y);
      if (this._transformStale) {
        this.transform.reset();
        this.transform.scale(Math.abs(this.scale.x), Math.abs(this.scale.y));
        this._rotate(this.transform);
        this._flip(this.transform);
        this._transformStale = false;
      }
      ex.multiply(this.transform);
      ex.opacity = ex.opacity * this.opacity;
      if (this.tint) {
        ex.tint = this.tint;
      }
    }
    _rotate(ex) {
      var _a;
      const scaleDirX = this.scale.x > 0 ? 1 : -1;
      const scaleDirY = this.scale.y > 0 ? 1 : -1;
      const origin = (_a = this.origin) !== null && _a !== undefined ? _a : vec(this.width / 2, this.height / 2);
      ex.translate(origin.x, origin.y);
      ex.rotate(this.rotation);
      ex.scale(scaleDirX, scaleDirY);
      ex.translate(-origin.x, -origin.y);
    }
    _flip(ex) {
      if (this.flipHorizontal) {
        ex.translate(this.width / this.scale.x, 0);
        ex.scale(-1, 1);
      }
      if (this.flipVertical) {
        ex.translate(0, this.height / this.scale.y);
        ex.scale(1, -1);
      }
    }
    _postDraw(ex) {
      if (this.showDebug) {
        ex.debug.drawRect(0, 0, this.width, this.height);
      }
      ex.restore();
    }
  }
  Graphic._ID = 0;

  class Sprite extends Graphic {
    static from(image) {
      return new Sprite({
        image
      });
    }
    constructor(options) {
      var _a, _b;
      super(options);
      this._logger = Logger.getInstance();
      this._dirty = true;
      this._logNotLoadedWarning = false;
      this.image = options.image;
      const { width, height } = options;
      this.sourceView = (_a = options.sourceView) !== null && _a !== undefined ? _a : { x: 0, y: 0, width: width !== null && width !== undefined ? width : 0, height: height !== null && height !== undefined ? height : 0 };
      this.destSize = (_b = options.destSize) !== null && _b !== undefined ? _b : { width: width !== null && width !== undefined ? width : 0, height: height !== null && height !== undefined ? height : 0 };
      this._updateSpriteDimensions();
      this.image.ready.then(() => {
        this._updateSpriteDimensions();
      });
    }
    get width() {
      return Math.abs(this.destSize.width * this.scale.x);
    }
    get height() {
      return Math.abs(this.destSize.height * this.scale.y);
    }
    set width(newWidth) {
      newWidth /= Math.abs(this.scale.x);
      this.destSize.width = newWidth;
      super.width = Math.ceil(this.destSize.width);
    }
    set height(newHeight) {
      newHeight /= Math.abs(this.scale.y);
      this.destSize.height = newHeight;
      super.height = Math.ceil(this.destSize.height);
    }
    _updateSpriteDimensions() {
      var _a, _b, _c, _d, _e, _f;
      const { width: nativeWidth, height: nativeHeight } = this.image;
      this.sourceView.width = ((_a = this.sourceView) === null || _a === undefined ? undefined : _a.width) || nativeWidth;
      this.sourceView.height = ((_b = this.sourceView) === null || _b === undefined ? undefined : _b.height) || nativeHeight;
      this.destSize.width = ((_c = this.destSize) === null || _c === undefined ? undefined : _c.width) || ((_d = this.sourceView) === null || _d === undefined ? undefined : _d.width) || nativeWidth;
      this.destSize.height = ((_e = this.destSize) === null || _e === undefined ? undefined : _e.height) || ((_f = this.sourceView) === null || _f === undefined ? undefined : _f.height) || nativeHeight;
      this.width = Math.ceil(this.destSize.width) * this.scale.x;
      this.height = Math.ceil(this.destSize.height) * this.scale.y;
    }
    _preDraw(ex, x, y) {
      if (this.image.isLoaded() && this._dirty) {
        this._dirty = false;
        this._updateSpriteDimensions();
      }
      super._preDraw(ex, x, y);
    }
    _drawImage(ex, x, y) {
      if (this.image.isLoaded()) {
        ex.drawImage(this.image.image, this.sourceView.x, this.sourceView.y, this.sourceView.width, this.sourceView.height, x, y, this.destSize.width, this.destSize.height);
      } else {
        if (!this._logNotLoadedWarning) {
          this._logger.warn(`ImageSource ${this.image.path}` + ` is not yet loaded and won't be drawn. Please call .load() or include in a Loader.\n\nRead https://excaliburjs.com/docs/imagesource for more information.`);
        }
        this._logNotLoadedWarning = true;
      }
    }
    clone() {
      return new Sprite({
        image: this.image,
        sourceView: { ...this.sourceView },
        destSize: { ...this.destSize },
        ...this.cloneGraphicOptions()
      });
    }
  }
  var ImageFiltering;
  (function(ImageFiltering2) {
    ImageFiltering2["Pixel"] = "Pixel";
    ImageFiltering2["Blended"] = "Blended";
  })(ImageFiltering || (ImageFiltering = {}));

  class TextureLoader {
    constructor(gl) {
      this._textureMap = new Map;
      this._gl = gl;
      TextureLoader._MAX_TEXTURE_SIZE = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    }
    get(image) {
      return this._textureMap.get(image);
    }
    has(image) {
      return this._textureMap.has(image);
    }
    load(image, filtering, forceUpdate = false) {
      const gl = this._gl;
      if (!gl) {
        return null;
      }
      let tex = null;
      if (this.has(image)) {
        tex = this.get(image);
      }
      if (tex) {
        if (forceUpdate) {
          gl.bindTexture(gl.TEXTURE_2D, tex);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        }
        return tex;
      }
      tex = gl.createTexture();
      TextureLoader.checkImageSizeSupportedAndLog(image);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      const filterMode = filtering !== null && filtering !== undefined ? filtering : TextureLoader.filtering;
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filterMode === ImageFiltering.Pixel ? gl.NEAREST : gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filterMode === ImageFiltering.Pixel ? gl.NEAREST : gl.LINEAR);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      this._textureMap.set(image, tex);
      return tex;
    }
    delete(image) {
      const gl = this._gl;
      if (!gl) {
        return null;
      }
      let tex = null;
      if (this.has(image)) {
        tex = this.get(image);
        gl.deleteTexture(tex);
      }
    }
    static checkImageSizeSupportedAndLog(image) {
      var _a;
      const originalSrc = (_a = image.dataset.originalSrc) !== null && _a !== undefined ? _a : "internal canvas bitmap";
      if (image.width > TextureLoader._MAX_TEXTURE_SIZE || image.height > TextureLoader._MAX_TEXTURE_SIZE) {
        TextureLoader._LOGGER.error(`The image [${originalSrc}] provided to Excalibur is too large for the device's maximum texture size of ` + `(${TextureLoader._MAX_TEXTURE_SIZE}x${TextureLoader._MAX_TEXTURE_SIZE}) please resize to an image ` + `for excalibur to render properly.\n\nImages will likely render as black rectangles.\n\nRead more here: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#understand_system_limits`);
        return false;
      } else if (image.width > 4096 || image.height > 4096) {
        TextureLoader._LOGGER.warn(`The image [${originalSrc}] provided to excalibur is too large may not work on all mobile devices, ` + `it is recommended you resize images to a maximum (4096x4096).\n\nImages will likely render as black rectangles on some mobile platforms.\n\nRead more here: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#understand_system_limits`);
      }
      return true;
    }
  }
  TextureLoader._LOGGER = Logger.getInstance();
  TextureLoader.filtering = ImageFiltering.Blended;
  TextureLoader._MAX_TEXTURE_SIZE = 4096;

  class ImageSource {
    get width() {
      return this.image.naturalWidth;
    }
    get height() {
      return this.image.naturalHeight;
    }
    isLoaded() {
      if (!this._src) {
        this._src = this.data.src;
      }
      return !!this._src;
    }
    get image() {
      return this.data;
    }
    constructor(path, bustCache = false, filtering) {
      this.path = path;
      this._logger = Logger.getInstance();
      this.data = new Image;
      this._readyFuture = new Future;
      this.ready = this._readyFuture.promise;
      this._resource = new Resource(path, "blob", bustCache);
      this.filtering = filtering;
      if (path.endsWith(".svg") || path.endsWith(".gif")) {
        this._logger.warn(`Image type is not fully supported, you may have mixed results ${path}. Fully supported: jpg, bmp, and png`);
      }
    }
    static fromHtmlImageElement(image, options) {
      const imageSource = new ImageSource("");
      imageSource._src = "image-element";
      imageSource.data = image;
      imageSource.data.setAttribute("data-original-src", "image-element");
      if (options === null || options === undefined ? undefined : options.filtering) {
        imageSource.data.setAttribute("filtering", options === null || options === undefined ? undefined : options.filtering);
      } else {
        imageSource.data.setAttribute("filtering", ImageFiltering.Blended);
      }
      TextureLoader.checkImageSizeSupportedAndLog(image);
      imageSource._readyFuture.resolve(image);
      return imageSource;
    }
    get bustCache() {
      return this._resource.bustCache;
    }
    set bustCache(val) {
      this._resource.bustCache = val;
    }
    async load() {
      if (this.isLoaded()) {
        return this.data;
      }
      try {
        let url;
        if (!this.path.includes("data:image/")) {
          const blob = await this._resource.load();
          url = URL.createObjectURL(blob);
        } else {
          url = this.path;
        }
        const image = new Image;
        const loadedFuture = new Future;
        image.onload = () => loadedFuture.resolve();
        image.src = url;
        image.setAttribute("data-original-src", this.path);
        await loadedFuture.promise;
        this.data = image;
        TextureLoader.checkImageSizeSupportedAndLog(this.data);
      } catch (error) {
        throw `Error loading ImageSource from path '${this.path}' with error [${error.message}]`;
      }
      this.data.setAttribute("filtering", this.filtering);
      this._readyFuture.resolve(this.data);
      return this.data;
    }
    toSprite() {
      return Sprite.from(this);
    }
    unload() {
      this.data = new Image;
    }
  }

  class SpriteFont extends Graphic {
    constructor(options) {
      super(options);
      this._text = "";
      this.alphabet = "";
      this.shadow = null;
      this.caseInsensitive = false;
      this.spacing = 0;
      this._logger = Logger.getInstance();
      this._alreadyWarnedAlphabet = false;
      this._alreadyWarnedSpriteSheet = false;
      const { alphabet, spriteSheet, caseInsensitive, spacing, shadow } = options;
      this.alphabet = alphabet;
      this.spriteSheet = spriteSheet;
      this.caseInsensitive = caseInsensitive !== null && caseInsensitive !== undefined ? caseInsensitive : this.caseInsensitive;
      this.spacing = spacing !== null && spacing !== undefined ? spacing : this.spacing;
      this.shadow = shadow !== null && shadow !== undefined ? shadow : this.shadow;
    }
    _getCharacterSprites(text) {
      const results = [];
      const textToRender = this.caseInsensitive ? text.toLocaleLowerCase() : text;
      const alphabet = this.caseInsensitive ? this.alphabet.toLocaleLowerCase() : this.alphabet;
      for (let letterIndex = 0;letterIndex < textToRender.length; letterIndex++) {
        const letter = textToRender[letterIndex];
        let spriteIndex = alphabet.indexOf(letter);
        if (spriteIndex === -1) {
          spriteIndex = 0;
          if (!this._alreadyWarnedAlphabet) {
            this._logger.warn(`SpriteFont - Cannot find letter '${letter}' in configured alphabet '${alphabet}'.`);
            this._logger.warn("There maybe be more issues in the SpriteFont configuration. No additional warnings will be logged.");
            this._alreadyWarnedAlphabet = true;
          }
        }
        const letterSprite = this.spriteSheet.sprites[spriteIndex];
        if (letterSprite) {
          results.push(letterSprite);
        } else {
          if (!this._alreadyWarnedSpriteSheet) {
            this._logger.warn(`SpriteFont - Cannot find sprite for '${letter}' at index '${spriteIndex}' in configured SpriteSheet`);
            this._logger.warn("There maybe be more issues in the SpriteFont configuration. No additional warnings will be logged.");
            this._alreadyWarnedSpriteSheet = true;
          }
        }
      }
      return results;
    }
    measureText(text, maxWidth) {
      const lines = this._getLinesFromText(text, maxWidth);
      const maxWidthLine = lines.reduce((a, b) => {
        return a.length > b.length ? a : b;
      });
      const sprites = this._getCharacterSprites(maxWidthLine);
      let width = 0;
      let height = 0;
      for (const sprite of sprites) {
        width += sprite.width + this.spacing;
        height = Math.max(height, sprite.height);
      }
      return BoundingBox.fromDimension(width, height * lines.length, Vector.Zero);
    }
    _drawImage(ex, x, y, maxWidth) {
      let xCursor = 0;
      let yCursor = 0;
      let height = 0;
      const lines = this._getLinesFromText(this._text, maxWidth);
      for (const line2 of lines) {
        for (const sprite of this._getCharacterSprites(line2)) {
          sprite.draw(ex, x + xCursor, y + yCursor);
          xCursor += sprite.width + this.spacing;
          height = Math.max(height, sprite.height);
        }
        xCursor = 0;
        yCursor += height;
      }
    }
    render(ex, text, _color, x, y, maxWidth) {
      this._text = text;
      const bounds = this.measureText(text, maxWidth);
      this.width = bounds.width;
      this.height = bounds.height;
      if (this.shadow) {
        ex.save();
        ex.translate(this.shadow.offset.x, this.shadow.offset.y);
        this._preDraw(ex, x, y);
        this._drawImage(ex, 0, 0, maxWidth);
        this._postDraw(ex);
        ex.restore();
      }
      this._preDraw(ex, x, y);
      this._drawImage(ex, 0, 0, maxWidth);
      this._postDraw(ex);
    }
    clone() {
      return new SpriteFont({
        alphabet: this.alphabet,
        spriteSheet: this.spriteSheet,
        spacing: this.spacing
      });
    }
    _getLinesFromText(text, maxWidth) {
      if (this._cachedText === text && this._cachedRenderWidth === maxWidth) {
        return this._cachedLines;
      }
      const lines = text.split("\n");
      if (maxWidth == null) {
        return lines;
      }
      for (let i = 0;i < lines.length; i++) {
        let line2 = lines[i];
        let newLine = "";
        if (this.measureText(line2).width > maxWidth) {
          while (this.measureText(line2).width > maxWidth) {
            newLine = line2[line2.length - 1] + newLine;
            line2 = line2.slice(0, -1);
          }
          lines[i] = line2;
          lines[i + 1] = newLine;
        }
      }
      this._cachedText = text;
      this._cachedLines = lines;
      this._cachedRenderWidth = maxWidth;
      return lines;
    }
  }

  class SpriteSheet {
    constructor(options) {
      this._logger = Logger.getInstance();
      this.sprites = [];
      const { sprites, rows, columns } = options;
      this.sprites = sprites;
      this.rows = rows !== null && rows !== undefined ? rows : 1;
      this.columns = columns !== null && columns !== undefined ? columns : this.sprites.length;
    }
    getSprite(x, y) {
      if (x >= this.columns || x < 0) {
        this._logger.warn(`No sprite exists in the SpriteSheet at (${x}, ${y}), x: ${x} should be between 0 and ${this.columns - 1}`);
        return null;
      }
      if (y >= this.rows || y < 0) {
        this._logger.warn(`No sprite exists in the SpriteSheet at (${x}, ${y}), y: ${y} should be between 0 and ${this.rows - 1}`);
        return null;
      }
      const spriteIndex = x + y * this.columns;
      return this.sprites[spriteIndex];
    }
    static fromImageSourceWithSourceViews(options) {
      const sprites = options.sourceViews.map((sourceView) => {
        return new Sprite({
          image: options.image,
          sourceView
        });
      });
      return new SpriteSheet({ sprites });
    }
    static fromImageSource(options) {
      var _a;
      const sprites = [];
      options.spacing = (_a = options.spacing) !== null && _a !== undefined ? _a : {};
      const { image, grid: { rows, columns: cols, spriteWidth, spriteHeight }, spacing: { originOffset, margin } } = options;
      const offsetDefaults = { x: 0, y: 0, ...originOffset };
      const marginDefaults = { x: 0, y: 0, ...margin };
      for (let x = 0;x < cols; x++) {
        for (let y = 0;y < rows; y++) {
          sprites[x + y * cols] = new Sprite({
            image,
            sourceView: {
              x: x * spriteWidth + marginDefaults.x * x + offsetDefaults.x,
              y: y * spriteHeight + marginDefaults.y * y + offsetDefaults.y,
              width: spriteWidth,
              height: spriteHeight
            },
            destSize: { height: spriteHeight, width: spriteWidth }
          });
        }
      }
      return new SpriteSheet({
        sprites,
        rows,
        columns: cols
      });
    }
    clone() {
      return new SpriteSheet({
        sprites: this.sprites.map((sprite) => sprite.clone()),
        rows: this.rows,
        columns: this.columns
      });
    }
  }
  const debug_font = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABACAYAAAD1Xam+AAAAAXNSR0IArs4c6QAABlFJREFUeJztndmy4yoMRcWt/v9fdr8EWoDAaDD4JntVpeqcxBrMIGQDNhEAAAAAAAAAAAAAAOCrSbMfr+u6yoEpTY+906GV57YtPkjyXj9WZZ+wHWHfo2N3/bU6Tte9Rv6ptruqRyMvKvvIX/zY3I/vjLeqsg6l/CWdp0KHKO/1Y1H2EdsR9j06Ntdfp+N03SvkH2u7i3pu5XkQ+DNTkgNJSok+/183xpcdWZHjgUzpQ2pGD67vaf//KRAGAq3tdhCy2tcMQKPyXyz7iPqrdBjbX5h9g7xbtvWf4ZJvM4D/BKG24Sd+IkQ0TC9aW5NM5FbO2HgrPVzW2vmN50DZNv/QWtl5bfPy85SBtdy9dFmjsf2F2SehTBVE+u+tkE5+lAGcJlFwGuodwRRU2Qe3rx0FhPNflc3HWC7BEh8EDGVR5IMCiLnDONtPp87qhxVH/S/LvzUAuDs/kyGimA5oSONKR1w8vsLpv+v+S9vhmS71JRiX1xB5CWZNw7m6rMrllMag/RJyWb67BEgpDVMWSydc+K47pr35w05kWd7ReEq6116KaG4CsbJ7OmV9PdZLEKkONiC1/7ZONVgDsajLIJPYp2OUAXRpnPcGmnIE6eSK4nv5YQqqSYO52JqnYfYj/PdQXQIY7XszuMofMgZRT/1LdeC5h2I5/0EdWDMY2Yb05WDE1RodVdpSA5r85slArAVnSf+89iP896St0f5bZKVA7Gk/3ja8q+152/+wrLqBWZTem3IBADbRBoDuHgAA4HdAAADgh0EAAOCHQQAA4IdBAADgh0EAAOCHuVsKbJ3P9M7jjuxHzGfv8j9iDt47Dx7hP8cjq5F/o/0T62Aer//ZOgDrajBp6aNlOWTEajKLjgj/Pcs/vfZD/a++3Pc8hNfZ966EVeh5vP75luDRJUAl0KzJfnopaqbaTuzZiulc2BS5lltFXntu3dcQsXadl59Wn1H+dfYNtrt2d6D/LDF9HkCQw6eXFbr8P9X5W/un5Ol8gz1t39p5pWOPn0vLynbgdnfe8maEQw+UIPJdfxdOd/4oTtVD0IYg8wDywGas0I04T5O3P8/qf2UWwPpkn1PbOT1bN2tFe59EM7TvKf+TRFw+erZ2ey4hpS3hp9qBkqq/tjsSU1OYqucBWB1yynt5QxC42Mdk30pAEIio//zRG3feBzLUX+TTjCKwlH83aI/KbpQBVEHgUGF0j/SitcLofHem8q6AyH0wBhFv4WszuOjy0yK2vc/oRWQoP2X9ve78jfaLnpncbBqQSC6s0HnIRT0a2yNZjfxT8+ir8t+yDsDTWaS6X70GP33+d77stp+I5HtBdwEAAPBl8ECApcAA/DBvfSowAGAB7/05ZAAA/DAIAADMMU3fOuS2ggAAwBjrorKoxWiPBxHMAgAg490Ts0VeePdA+ZfJDKcCh7sBqY88mmjklZeOt9iXPrvx2I2QPRnN2/qzyJ84h4gNcbtfasq5mM1rZr+bBWh2A+bIIX13Z9wqL+nQvFno7v3oq4tJItCed7isUT6C/I7BUn9KP95wDicYBYpcjncrO2c/dmW4tBtw4RiRld1IDxDyYsoXMHxF1w3dyz0Nne8033AOFsT6VgRCafl89fenTZUfbm8CGhrgdDcS7anAsvnkkP0IeCfQ+JzYunky6jhNYj5bl7++4fJvN9WDSKS/292A0wyANyKDI91bfkm3kcH7ckaP/SKW/VHKRZAcI14pP3beu0fPyn/DuZQbWMogNnsc16sziE96f7H/iai7uTf0/3N8lwFz/e13T00Djt4OrInCnkeChXT+qOcKOLA21tJpsv/G8/COnGnw97J9QwbTvd6djYSv7fxEVTuV/LzNhj7nOawv6bfbAGCYEpQ6HxFtuxs6sq9tzOYHobQ6Nje+6vo5BwFrPZ4OgMayS4PPt1NlzdLfbRCYBoBc+NaO4JWPwLEf33oN3unY3InKPQBW6Z7nEZzEmrl4iZjC804lqgePPEOguQcwWghUphxm343wyt/pWpWR0OrR+jvyxavHajfb9pTjbt9bH07Z5/expM4TLWfwb7QQqMoC+UDWXZo/4RgA38LOgUvLJAAQ1Td9y9//0ylxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+g79apuVUsS5ZmwAAAABJRU5ErkJggg==";

  class DebugText {
    constructor() {
      this.fontSheet = debug_font;
      this.size = 16;
      this.load();
    }
    load() {
      this._imageSource = new ImageSource(this.fontSheet);
      return this._imageSource.load().then(() => {
        this._spriteSheet = SpriteSheet.fromImageSource({
          image: this._imageSource,
          grid: {
            rows: 4,
            columns: 16,
            spriteWidth: 16,
            spriteHeight: 16
          }
        });
        this._spriteFont = new SpriteFont({
          alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ,!\'&."?-()+# ',
          caseInsensitive: true,
          spriteSheet: this._spriteSheet,
          spacing: -6
        });
      });
    }
    write(ctx, text, pos) {
      if (this._imageSource.isLoaded()) {
        this._spriteFont.render(ctx, text, null, pos.x, pos.y);
      }
    }
  }

  class RenderSource {
    constructor(_gl, _texture) {
      this._gl = _gl;
      this._texture = _texture;
    }
    use() {
      const gl = this._gl;
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, this._texture);
    }
    disable() {
      const gl = this._gl;
      gl.bindTexture(gl.TEXTURE_2D, null);
    }
  }

  class RenderTarget {
    constructor(options) {
      this.width = options.width;
      this.height = options.height;
      this._gl = options.gl;
      this._setupFramebuffer();
    }
    setResolution(width, height) {
      const gl = this._gl;
      this.width = width;
      this.height = height;
      gl.bindTexture(gl.TEXTURE_2D, this._frameTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    }
    get frameBuffer() {
      return this._frameBuffer;
    }
    get frameTexture() {
      return this._frameTexture;
    }
    _setupFramebuffer() {
      const gl = this._gl;
      this._frameTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this._frameTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      const attachmentPoint = gl.COLOR_ATTACHMENT0;
      this._frameBuffer = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, this._frameBuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, attachmentPoint, gl.TEXTURE_2D, this._frameTexture, 0);
      this.disable();
    }
    toRenderSource() {
      const source = new RenderSource(this._gl, this._frameTexture);
      return source;
    }
    use() {
      const gl = this._gl;
      gl.bindFramebuffer(gl.FRAMEBUFFER, this._frameBuffer);
      gl.viewport(0, 0, this.width, this.height);
    }
    disable() {
      const gl = this._gl;
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.bindTexture(gl.TEXTURE_2D, null);
    }
  }
  const line_vertex = "#version 300 es\nin vec2 a_position;\nin vec4 a_color;\n\nout lowp vec4 v_color;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n   // Set the vertex position using the ortho transform matrix\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\n\n   // Passthrough the color\n   v_color = a_color;\n}";
  const line_fragment = "#version 300 es\nprecision mediump float;\n\n// Color\nin lowp vec4 v_color;\n\nout vec4 fragColor;\n\nvoid main() {\n  fragColor = v_color;\n}";
  function getGlTypeSizeBytes(gl, type) {
    switch (type) {
      case gl.FLOAT:
        return 4;
      case gl.SHORT:
        return 2;
      case gl.UNSIGNED_SHORT:
        return 2;
      case gl.BYTE:
        return 1;
      case gl.UNSIGNED_BYTE:
        return 1;
      default:
        return 1;
    }
  }
  function getAttributeComponentSize(gl, type) {
    switch (type) {
      case gl.LOW_FLOAT:
      case gl.HIGH_FLOAT:
      case gl.FLOAT:
        return 1;
      case gl.FLOAT_VEC2:
        return 2;
      case gl.FLOAT_VEC3:
        return 3;
      case gl.FLOAT_VEC4:
        return 4;
      case gl.BYTE:
        return 1;
      case gl.UNSIGNED_BYTE:
        return 1;
      case gl.UNSIGNED_SHORT:
      case gl.SHORT:
        return 1;
      default:
        return 1;
    }
  }
  function getAttributePointerType(gl, type) {
    switch (type) {
      case gl.LOW_FLOAT:
      case gl.HIGH_FLOAT:
      case gl.FLOAT:
      case gl.FLOAT_VEC2:
      case gl.FLOAT_VEC3:
      case gl.FLOAT_VEC4:
        return gl.FLOAT;
      case gl.BYTE:
        return gl.BYTE;
      case gl.UNSIGNED_BYTE:
        return gl.UNSIGNED_BYTE;
      case gl.SHORT:
        return gl.SHORT;
      case gl.UNSIGNED_SHORT:
        return gl.UNSIGNED_SHORT;
      default:
        return gl.FLOAT;
    }
  }

  class Shader {
    get compiled() {
      return this._compiled;
    }
    constructor(options) {
      this._logger = Logger.getInstance();
      this.uniforms = {};
      this.attributes = {};
      this._compiled = false;
      const { gl, vertexSource, fragmentSource } = options;
      this._gl = gl;
      this.vertexSource = vertexSource;
      this.fragmentSource = fragmentSource;
    }
    use() {
      const gl = this._gl;
      gl.useProgram(this.program);
      Shader._ACTIVE_SHADER_INSTANCE = this;
    }
    isCurrentlyBound() {
      return Shader._ACTIVE_SHADER_INSTANCE === this;
    }
    compile() {
      const gl = this._gl;
      const vertexShader = this._compileShader(gl, this.vertexSource, gl.VERTEX_SHADER);
      const fragmentShader = this._compileShader(gl, this.fragmentSource, gl.FRAGMENT_SHADER);
      this.program = this._createProgram(gl, vertexShader, fragmentShader);
      const attributes = this.getAttributes();
      for (const attribute of attributes) {
        this.attributes[attribute.name] = attribute;
      }
      const uniforms = this.getUniforms();
      for (const uniform of uniforms) {
        this.uniforms[uniform.name] = uniform;
      }
      this._compiled = true;
      return this.program;
    }
    getUniforms() {
      const gl = this._gl;
      const uniformCount = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
      const uniforms = [];
      for (let i = 0;i < uniformCount; i++) {
        const uniform = gl.getActiveUniform(this.program, i);
        const uniformLocation = gl.getUniformLocation(this.program, uniform.name);
        uniforms.push({
          name: uniform.name,
          glType: uniform.type,
          location: uniformLocation
        });
      }
      return uniforms;
    }
    getAttributes() {
      const gl = this._gl;
      const attributeCount = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);
      const attributes = [];
      for (let i = 0;i < attributeCount; i++) {
        const attribute = gl.getActiveAttrib(this.program, i);
        const attributeLocation = gl.getAttribLocation(this.program, attribute.name);
        attributes.push({
          name: attribute.name,
          glType: getAttributePointerType(gl, attribute.type),
          size: getAttributeComponentSize(gl, attribute.type),
          location: attributeLocation,
          normalized: false
        });
      }
      return attributes;
    }
    setTexture(slotNumber, texture) {
      const gl = this._gl;
      gl.activeTexture(gl.TEXTURE0 + slotNumber);
      gl.bindTexture(gl.TEXTURE_2D, texture);
    }
    setUniformInt(name, value) {
      this.setUniform("uniform1i", name, ~~value);
    }
    trySetUniformInt(name, value) {
      return this.trySetUniform("uniform1i", name, ~~value);
    }
    setUniformIntArray(name, value) {
      this.setUniform("uniform1iv", name, value);
    }
    trySetUniformIntArray(name, value) {
      return this.trySetUniform("uniform1iv", name, value);
    }
    setUniformBoolean(name, value) {
      this.setUniform("uniform1i", name, value ? 1 : 0);
    }
    trySetUniformBoolean(name, value) {
      return this.trySetUniform("uniform1i", name, value ? 1 : 0);
    }
    setUniformFloat(name, value) {
      this.setUniform("uniform1f", name, value);
    }
    trySetUniformFloat(name, value) {
      return this.trySetUniform("uniform1f", name, value);
    }
    setUniformFloatArray(name, value) {
      this.setUniform("uniform1fv", name, value);
    }
    trySetUniformFloatArray(name, value) {
      return this.trySetUniform("uniform1fv", name, value);
    }
    setUniformFloatVector(name, value) {
      this.setUniform("uniform2f", name, value.x, value.y);
    }
    trySetUniformFloatVector(name, value) {
      return this.trySetUniform("uniform2f", name, value.x, value.y);
    }
    setUniformFloatColor(name, value) {
      this.setUniform("uniform4f", name, value.r / 255, value.g / 255, value.b / 255, value.a);
    }
    trySetUniformFloatColor(name, value) {
      return this.trySetUniform("uniform4f", name, value.r / 255, value.g / 255, value.b / 255, value.a);
    }
    setUniformMatrix(name, value) {
      this.setUniform("uniformMatrix4fv", name, false, value.data);
    }
    trySetUniformMatrix(name, value) {
      return this.trySetUniform("uniformMatrix4fv", name, false, value.data);
    }
    setUniform(uniformType, name, ...value) {
      if (!this._compiled) {
        throw Error(`Must compile shader before setting a uniform ${uniformType}:${name}`);
      }
      if (!this.isCurrentlyBound()) {
        throw Error("Currently accessed shader instance is not the current active shader in WebGL, must call `shader.use()` before setting uniforms");
      }
      const gl = this._gl;
      const location = gl.getUniformLocation(this.program, name);
      if (location) {
        const args = [location, ...value];
        this._gl[uniformType].apply(this._gl, args);
      } else {
        throw Error(`Uniform ${uniformType}:${name} doesn\'t exist or is not used in the shader source code,` + " unused uniforms are optimized away by most browsers");
      }
    }
    trySetUniform(uniformType, name, ...value) {
      if (!this._compiled) {
        this._logger.warn(`Must compile shader before setting a uniform ${uniformType}:${name}`);
        return false;
      }
      if (!this.isCurrentlyBound()) {
        this._logger.warn("Currently accessed shader instance is not the current active shader in WebGL, must call `shader.use()` before setting uniforms");
        return false;
      }
      const gl = this._gl;
      const location = gl.getUniformLocation(this.program, name);
      if (location) {
        const args = [location, ...value];
        this._gl[uniformType].apply(this._gl, args);
      } else {
        return false;
      }
      return true;
    }
    _createProgram(gl, vertexShader, fragmentShader) {
      const program = gl.createProgram();
      if (program === null) {
        throw Error("Could not create graphics shader program");
      }
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      const success = gl.getProgramParameter(program, gl.LINK_STATUS);
      if (!success) {
        throw Error(`Could not link the program: [${gl.getProgramInfoLog(program)}]`);
      }
      return program;
    }
    _compileShader(gl, source, type) {
      const typeName = gl.VERTEX_SHADER === type ? "vertex" : "fragment";
      const shader = gl.createShader(type);
      if (shader === null) {
        throw Error(`Could not build shader: [${source}]`);
      }
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
      if (!success) {
        const errorInfo = gl.getShaderInfoLog(shader);
        throw Error(`Could not compile ${typeName} shader:\n\n${errorInfo}${this._processSourceForError(source, errorInfo)}`);
      }
      return shader;
    }
    _processSourceForError(source, errorInfo) {
      if (!source) {
        return errorInfo;
      }
      const lines = source.split("\n");
      const errorLineStart = errorInfo.search(/\d:\d/);
      const errorLineEnd = errorInfo.indexOf(" ", errorLineStart);
      const [_, error2] = errorInfo.slice(errorLineStart, errorLineEnd).split(":").map((v) => Number(v));
      for (let i = 0;i < lines.length; i++) {
        lines[i] = `${i + 1}: ${lines[i]}${error2 === i + 1 ? " <----- ERROR!" : ""}`;
      }
      return "\n\nSource:\n" + lines.join("\n");
    }
  }
  Shader._ACTIVE_SHADER_INSTANCE = null;

  class VertexBuffer {
    constructor(options) {
      this.type = "dynamic";
      const { gl, size, type, data } = options;
      this._gl = gl;
      this.buffer = this._gl.createBuffer();
      if (!data && !size) {
        throw Error("Must either provide data or a size to the VertexBuffer");
      }
      if (!data) {
        this.bufferData = new Float32Array(size);
      } else {
        this.bufferData = data;
      }
      this.type = type !== null && type !== undefined ? type : this.type;
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, this.bufferData, this.type === "static" ? gl.STATIC_DRAW : gl.DYNAMIC_DRAW);
    }
    bind() {
      const gl = this._gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    }
    upload(count) {
      const gl = this._gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      if (count) {
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.bufferData, 0, count);
      } else {
        gl.bufferData(gl.ARRAY_BUFFER, this.bufferData, this.type === "static" ? gl.STATIC_DRAW : gl.DYNAMIC_DRAW);
      }
    }
  }

  class VertexLayout {
    get vertexBuffer() {
      return this._vertexBuffer;
    }
    get attributes() {
      return this._attributes;
    }
    constructor(options) {
      this._logger = Logger.getInstance();
      this._layout = [];
      this._attributes = [];
      this._vertexTotalSizeBytes = 0;
      const { gl, shader, vertexBuffer, attributes } = options;
      this._gl = gl;
      this._vertexBuffer = vertexBuffer;
      this._attributes = attributes;
      this._shader = shader;
      if (shader) {
        this.initialize();
      }
    }
    get totalVertexSizeBytes() {
      return this._vertexTotalSizeBytes;
    }
    set shader(shader) {
      if (shader && this._shader !== shader) {
        this._shader = shader;
        this.initialize();
      }
    }
    get shader() {
      return this._shader;
    }
    initialize() {
      if (!this._shader) {
        return;
      }
      if (!this._shader.compiled) {
        throw Error("Shader not compiled, shader must be compiled before defining a vertex layout");
      }
      this._vertexTotalSizeBytes = 0;
      this._layout.length = 0;
      const shaderAttributes = this._shader.attributes;
      for (const attribute of this._attributes) {
        const attrib = shaderAttributes[attribute[0]];
        if (!attrib) {
          throw Error(`The attribute named: ${attribute[0]} size ${attribute[1]}` + ` not found in the shader source code:\n ${this._shader.vertexSource}`);
        }
        if (attrib.size !== attribute[1]) {
          throw Error(`VertexLayout size definition for attribute: [${attribute[0]}, ${attribute[1]}],` + ` doesnt match shader source size ${attrib.size}:\n ${this._shader.vertexSource}`);
        }
        this._layout.push(attrib);
      }
      let componentsPerVertex = 0;
      for (const vertAttribute of this._layout) {
        const typeSize = getGlTypeSizeBytes(this._gl, vertAttribute.glType);
        this._vertexTotalSizeBytes += typeSize * vertAttribute.size;
        componentsPerVertex += vertAttribute.size;
      }
      if (this._vertexBuffer.bufferData.length % componentsPerVertex !== 0) {
        this._logger.warn(`The vertex component size (${componentsPerVertex})  does divide evenly into the specified vertex buffer` + ` (${this._vertexBuffer.bufferData.length})`);
      }
    }
    use(uploadBuffer = false, count) {
      if (!this._shader) {
        throw Error("No shader is associated with this vertex layout, a shader must be set");
      }
      const gl = this._gl;
      if (!this._shader.isCurrentlyBound()) {
        throw Error("Shader associated with this vertex layout is not active! Call shader.use() before layout.use()");
      }
      this._vertexBuffer.bind();
      if (uploadBuffer) {
        this._vertexBuffer.upload(count);
      }
      let offset = 0;
      for (const vert of this._layout) {
        gl.vertexAttribPointer(vert.location, vert.size, vert.glType, vert.normalized, this.totalVertexSizeBytes, offset);
        gl.enableVertexAttribArray(vert.location);
        offset += getGlTypeSizeBytes(gl, vert.glType) * vert.size;
      }
    }
  }

  class GraphicsDiagnostics {
    static clear() {
      GraphicsDiagnostics.DrawCallCount = 0;
      GraphicsDiagnostics.DrawnImagesCount = 0;
    }
  }
  GraphicsDiagnostics.DrawCallCount = 0;
  GraphicsDiagnostics.DrawnImagesCount = 0;

  class LineRenderer {
    constructor() {
      this.type = "ex.line";
      this.priority = 0;
      this._maxLines = 10922;
      this._vertexIndex = 0;
      this._lineCount = 0;
    }
    initialize(gl, context) {
      this._gl = gl;
      this._context = context;
      this._shader = new Shader({
        gl,
        vertexSource: line_vertex,
        fragmentSource: line_fragment
      });
      this._shader.compile();
      this._shader.use();
      this._shader.setUniformMatrix("u_matrix", this._context.ortho);
      this._vertexBuffer = new VertexBuffer({
        gl,
        size: 6 * 2 * this._maxLines,
        type: "dynamic"
      });
      this._layout = new VertexLayout({
        gl,
        vertexBuffer: this._vertexBuffer,
        shader: this._shader,
        attributes: [
          ["a_position", 2],
          ["a_color", 4]
        ]
      });
    }
    draw(start, end, color) {
      if (this._isFull()) {
        this.flush();
      }
      this._lineCount++;
      const transform = this._context.getTransform();
      const finalStart = transform.multiply(start);
      const finalEnd = transform.multiply(end);
      const vertexBuffer = this._vertexBuffer.bufferData;
      vertexBuffer[this._vertexIndex++] = finalStart.x;
      vertexBuffer[this._vertexIndex++] = finalStart.y;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a;
      vertexBuffer[this._vertexIndex++] = finalEnd.x;
      vertexBuffer[this._vertexIndex++] = finalEnd.y;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a;
    }
    _isFull() {
      if (this._lineCount >= this._maxLines) {
        return true;
      }
      return false;
    }
    hasPendingDraws() {
      return this._lineCount !== 0;
    }
    flush() {
      if (this._lineCount === 0) {
        return;
      }
      const gl = this._gl;
      this._shader.use();
      this._layout.use(true);
      this._shader.setUniformMatrix("u_matrix", this._context.ortho);
      gl.drawArrays(gl.LINES, 0, this._lineCount * 2);
      GraphicsDiagnostics.DrawnImagesCount += this._lineCount;
      GraphicsDiagnostics.DrawCallCount++;
      this._vertexIndex = 0;
      this._lineCount = 0;
    }
  }
  const point_vertex = "#version 300 es\nin vec2 a_position;\nin vec4 a_color;\nin float a_size;\nout lowp vec4 v_color;\nuniform mat4 u_matrix;\n\nvoid main() {\n  gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\n  gl_PointSize = a_size * 2.0;\n  v_color = a_color;\n}";
  const point_fragment = "#version 300 es\n\nprecision mediump float;\nin lowp vec4 v_color;\n\nout vec4 fragColor;\n\nvoid main() {\n  float r = 0.0, delta = 0.0, alpha = 1.0;\n  vec2 cxy = 2.0 * gl_PointCoord - 1.0;\n  r = dot(cxy, cxy);\n\n  delta = fwidth(r);\n  alpha = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r);\n  // \"premultiply\" the color by alpha\n  vec4 color = v_color;\n  color.a = color.a * alpha;\n  color.rgb = color.rgb * color.a;\n  fragColor = color;\n}";

  class PointRenderer {
    constructor() {
      this.type = "ex.point";
      this.priority = 0;
      this._maxPoints = 10922;
      this._pointCount = 0;
      this._vertexIndex = 0;
    }
    initialize(gl, context) {
      this._gl = gl;
      this._context = context;
      this._shader = new Shader({
        gl,
        vertexSource: point_vertex,
        fragmentSource: point_fragment
      });
      this._shader.compile();
      this._shader.use();
      this._shader.setUniformMatrix("u_matrix", this._context.ortho);
      this._buffer = new VertexBuffer({
        gl,
        size: 7 * this._maxPoints,
        type: "dynamic"
      });
      this._layout = new VertexLayout({
        gl,
        shader: this._shader,
        vertexBuffer: this._buffer,
        attributes: [
          ["a_position", 2],
          ["a_color", 4],
          ["a_size", 1]
        ]
      });
    }
    draw(point2, color, size) {
      if (this._isFull()) {
        this.flush();
      }
      this._pointCount++;
      const transform = this._context.getTransform();
      const opacity = this._context.opacity;
      const snapToPixel = this._context.snapToPixel;
      const finalPoint = transform.multiply(point2);
      if (snapToPixel) {
        finalPoint.x = ~~(finalPoint.x + pixelSnapEpsilon);
        finalPoint.y = ~~(finalPoint.y + pixelSnapEpsilon);
      }
      const vertexBuffer = this._buffer.bufferData;
      vertexBuffer[this._vertexIndex++] = finalPoint.x;
      vertexBuffer[this._vertexIndex++] = finalPoint.y;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a * opacity;
      vertexBuffer[this._vertexIndex++] = size * Math.max(transform.getScaleX(), transform.getScaleY());
    }
    _isFull() {
      if (this._pointCount >= this._maxPoints) {
        return true;
      }
      return false;
    }
    hasPendingDraws() {
      return this._pointCount !== 0;
    }
    flush() {
      if (this._pointCount === 0) {
        return;
      }
      const gl = this._gl;
      this._shader.use();
      this._layout.use(true);
      this._shader.setUniformMatrix("u_matrix", this._context.ortho);
      gl.drawArrays(gl.POINTS, 0, this._pointCount);
      GraphicsDiagnostics.DrawnImagesCount += this._pointCount;
      GraphicsDiagnostics.DrawCallCount++;
      this._pointCount = 0;
      this._vertexIndex = 0;
    }
  }
  const screen_vertex = "#version 300 es\nin vec2 a_position;\n\nin vec2 a_texcoord;\nout vec2 v_texcoord;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n\n  // Pass the texcoord to the fragment shader.\n  v_texcoord = a_texcoord;\n}";
  const screen_fragment = "#version 300 es\nprecision mediump float;\n\n// Passed in from the vertex shader.\nin vec2 v_texcoord;\n\n// The texture.\nuniform sampler2D u_texture;\n\nout vec4 fragColor;\n\nvoid main() {\n   fragColor = texture(u_texture, v_texcoord);\n}";

  class ScreenPassPainter {
    constructor(gl) {
      this._gl = gl;
      this._shader = new Shader({
        gl,
        vertexSource: screen_vertex,
        fragmentSource: screen_fragment
      });
      this._shader.compile();
      this._buffer = new VertexBuffer({
        gl,
        type: "static",
        data: new Float32Array([
          -1,
          -1,
          0,
          0,
          -1,
          1,
          0,
          1,
          1,
          -1,
          1,
          0,
          1,
          -1,
          1,
          0,
          -1,
          1,
          0,
          1,
          1,
          1,
          1,
          1
        ])
      });
      this._layout = new VertexLayout({
        gl,
        shader: this._shader,
        vertexBuffer: this._buffer,
        attributes: [
          ["a_position", 2],
          ["a_texcoord", 2]
        ]
      });
      this._buffer.upload();
    }
    renderWithPostProcessor(postprocessor) {
      const gl = this._gl;
      postprocessor.getShader().use();
      postprocessor.getLayout().use();
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
    renderToScreen() {
      const gl = this._gl;
      this._shader.use();
      this._layout.use();
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
  }

  class QuadIndexBuffer {
    constructor(gl, numberOfQuads, useUint16) {
      this._logger = Logger.getInstance();
      this._gl = gl;
      this.buffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffer);
      const totalVertices = numberOfQuads * 6;
      if (!useUint16) {
        this.bufferData = new Uint32Array(totalVertices);
      } else {
        const maxUint16 = 65535;
        const maxUint16Index = Math.floor((maxUint16 - 1) / 4);
        this.bufferGlType = gl.UNSIGNED_SHORT;
        this.bufferData = new Uint16Array(totalVertices);
        if (numberOfQuads > maxUint16Index) {
          this._logger.warn(`Total quads exceeds hardware index buffer limit (uint16), max(${maxUint16Index}) requested quads(${numberOfQuads})`);
        }
      }
      let currentQuad = 0;
      for (let i = 0;i < totalVertices; i += 6) {
        this.bufferData[i + 0] = currentQuad + 0;
        this.bufferData[i + 1] = currentQuad + 1;
        this.bufferData[i + 2] = currentQuad + 2;
        this.bufferData[i + 3] = currentQuad + 2;
        this.bufferData[i + 4] = currentQuad + 1;
        this.bufferData[i + 5] = currentQuad + 3;
        currentQuad += 4;
      }
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.bufferData, gl.STATIC_DRAW);
    }
    get size() {
      return this.bufferData.length;
    }
    upload() {
      const gl = this._gl;
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.bufferData, gl.STATIC_DRAW);
    }
    bind() {
      const gl = this._gl;
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffer);
    }
  }
  const image_renderer_frag = "#version 300 es\nprecision mediump float;\n\n// UV coord\nin vec2 v_texcoord;\n\n// Texture index\nin lowp float v_textureIndex;\n\n// Textures in the current draw\nuniform sampler2D u_textures[%%count%%];\n\n// Opacity\nin float v_opacity;\n\nin vec4 v_tint;\n\nout vec4 fragColor;\n\nvoid main() {\n   // In order to support the most efficient sprite batching, we have multiple\n   // textures loaded into the gpu (usually 8) this picker logic skips over textures\n   // that do not apply to a particular sprite.\n\n   vec4 color = vec4(1.0, 0, 0, 1.0);\n\n   // GLSL is templated out to pick the right texture and set the vec4 color\n   %%texture_picker%%\n\n   color.rgb = color.rgb * v_opacity;\n   color.a = color.a * v_opacity;\n   fragColor = color * v_tint;\n}";
  const image_renderer_vert = "#version 300 es\nin vec2 a_position;\n\n// Opacity \nin float a_opacity;\nout float v_opacity;\n\n// UV coordinate\nin vec2 a_texcoord;\nout vec2 v_texcoord;\n\n// Texture number\nin lowp float a_textureIndex;\nout lowp float v_textureIndex;\n\nin vec4 a_tint;\nout vec4 v_tint;\n\nuniform mat4 u_matrix;\n\nvoid main() {\n   // Set the vertex position using the ortho transform matrix\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\n\n   // Pass through the Opacity to the fragment shader\n   v_opacity = a_opacity;\n   // Pass through the UV coord to the fragment shader\n   v_texcoord = a_texcoord;\n   // Pass through the texture number to the fragment shader\n   v_textureIndex = a_textureIndex;\n   // Pass through the tint\n   v_tint = a_tint;\n}";

  class ImageRenderer {
    constructor() {
      this.type = "ex.image";
      this.priority = 0;
      this._maxImages = 10922;
      this._maxTextures = 0;
      this._imageCount = 0;
      this._textures = [];
      this._vertexIndex = 0;
    }
    initialize(gl, context) {
      this._gl = gl;
      this._context = context;
      this._maxTextures = Math.min(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), 125);
      const transformedFrag = this._transformFragmentSource(image_renderer_frag, this._maxTextures);
      this._shader = new Shader({
        gl,
        fragmentSource: transformedFrag,
        vertexSource: image_renderer_vert
      });
      this._shader.compile();
      this._shader.use();
      this._shader.setUniformMatrix("u_matrix", context.ortho);
      this._shader.setUniformIntArray("u_textures", [...Array(this._maxTextures)].map((_, i) => i));
      this._buffer = new VertexBuffer({
        gl,
        size: 10 * 4 * this._maxImages,
        type: "dynamic"
      });
      this._layout = new VertexLayout({
        gl,
        shader: this._shader,
        vertexBuffer: this._buffer,
        attributes: [
          ["a_position", 2],
          ["a_opacity", 1],
          ["a_texcoord", 2],
          ["a_textureIndex", 1],
          ["a_tint", 4]
        ]
      });
      this._quads = new QuadIndexBuffer(gl, this._maxImages, true);
    }
    _transformFragmentSource(source, maxTextures) {
      let newSource = source.replace("%%count%%", maxTextures.toString());
      let texturePickerBuilder = "";
      for (let i = 0;i < maxTextures; i++) {
        if (i === 0) {
          texturePickerBuilder += `if (v_textureIndex <= ${i}.5) {\n`;
        } else {
          texturePickerBuilder += `   else if (v_textureIndex <= ${i}.5) {\n`;
        }
        texturePickerBuilder += `      color = texture(u_textures[${i}], v_texcoord);\n`;
        texturePickerBuilder += `   }\n`;
      }
      newSource = newSource.replace("%%texture_picker%%", texturePickerBuilder);
      return newSource;
    }
    _addImageAsTexture(image) {
      const maybeFiltering = image.getAttribute("filtering");
      let filtering = null;
      if (maybeFiltering === ImageFiltering.Blended || maybeFiltering === ImageFiltering.Pixel) {
        filtering = maybeFiltering;
      }
      const force = image.getAttribute("forceUpload") === "true" ? true : false;
      const texture = this._context.textureLoader.load(image, filtering, force);
      image.removeAttribute("forceUpload");
      if (this._textures.indexOf(texture) === -1) {
        this._textures.push(texture);
      }
    }
    _bindTextures(gl) {
      for (let i = 0;i < this._maxTextures; i++) {
        gl.activeTexture(gl.TEXTURE0 + i);
        gl.bindTexture(gl.TEXTURE_2D, this._textures[i] || this._textures[0]);
      }
    }
    _getTextureIdForImage(image) {
      if (image) {
        const maybeTexture = this._context.textureLoader.get(image);
        return this._textures.indexOf(maybeTexture);
      }
      return -1;
    }
    _isFull() {
      if (this._imageCount >= this._maxImages) {
        return true;
      }
      if (this._textures.length >= this._maxTextures) {
        return true;
      }
      return false;
    }
    draw(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight) {
      var _a, _b, _c, _d;
      if (this._isFull()) {
        this.flush();
      }
      this._imageCount++;
      this._addImageAsTexture(image);
      let width = (image === null || image === undefined ? undefined : image.width) || swidth || 0;
      let height = (image === null || image === undefined ? undefined : image.height) || sheight || 0;
      let view = [0, 0, (_a = swidth !== null && swidth !== undefined ? swidth : image === null || image === undefined ? undefined : image.width) !== null && _a !== undefined ? _a : 0, (_b = sheight !== null && sheight !== undefined ? sheight : image === null || image === undefined ? undefined : image.height) !== null && _b !== undefined ? _b : 0];
      let dest = [sx !== null && sx !== undefined ? sx : 1, sy !== null && sy !== undefined ? sy : 1];
      if (dx !== undefined && dy !== undefined && dwidth !== undefined && dheight !== undefined) {
        view = [sx !== null && sx !== undefined ? sx : 1, sy !== null && sy !== undefined ? sy : 1, (_c = swidth !== null && swidth !== undefined ? swidth : image === null || image === undefined ? undefined : image.width) !== null && _c !== undefined ? _c : 0, (_d = sheight !== null && sheight !== undefined ? sheight : image === null || image === undefined ? undefined : image.height) !== null && _d !== undefined ? _d : 0];
        dest = [dx, dy];
        width = dwidth;
        height = dheight;
      }
      sx = view[0];
      sy = view[1];
      const sw = view[2];
      const sh = view[3];
      const transform = this._context.getTransform();
      const opacity = this._context.opacity;
      const snapToPixel = this._context.snapToPixel;
      let topLeft = vec(dest[0], dest[1]);
      let topRight = vec(dest[0] + width, dest[1]);
      let bottomLeft = vec(dest[0], dest[1] + height);
      let bottomRight = vec(dest[0] + width, dest[1] + height);
      topLeft = transform.multiply(topLeft);
      topRight = transform.multiply(topRight);
      bottomLeft = transform.multiply(bottomLeft);
      bottomRight = transform.multiply(bottomRight);
      if (snapToPixel) {
        topLeft.x = ~~(topLeft.x + pixelSnapEpsilon);
        topLeft.y = ~~(topLeft.y + pixelSnapEpsilon);
        topRight.x = ~~(topRight.x + pixelSnapEpsilon);
        topRight.y = ~~(topRight.y + pixelSnapEpsilon);
        bottomLeft.x = ~~(bottomLeft.x + pixelSnapEpsilon);
        bottomLeft.y = ~~(bottomLeft.y + pixelSnapEpsilon);
        bottomRight.x = ~~(bottomRight.x + pixelSnapEpsilon);
        bottomRight.y = ~~(bottomRight.y + pixelSnapEpsilon);
      }
      const tint = this._context.tint;
      const textureId = this._getTextureIdForImage(image);
      const imageWidth = image.width || width;
      const imageHeight = image.height || height;
      const uvx0 = sx / imageWidth;
      const uvy0 = sy / imageHeight;
      const uvx1 = (sx + sw - 0.01) / imageWidth;
      const uvy1 = (sy + sh - 0.01) / imageHeight;
      const vertexBuffer = this._layout.vertexBuffer.bufferData;
      vertexBuffer[this._vertexIndex++] = topLeft.x;
      vertexBuffer[this._vertexIndex++] = topLeft.y;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = uvx0;
      vertexBuffer[this._vertexIndex++] = uvy0;
      vertexBuffer[this._vertexIndex++] = textureId;
      vertexBuffer[this._vertexIndex++] = tint.r / 255;
      vertexBuffer[this._vertexIndex++] = tint.g / 255;
      vertexBuffer[this._vertexIndex++] = tint.b / 255;
      vertexBuffer[this._vertexIndex++] = tint.a;
      vertexBuffer[this._vertexIndex++] = bottomLeft.x;
      vertexBuffer[this._vertexIndex++] = bottomLeft.y;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = uvx0;
      vertexBuffer[this._vertexIndex++] = uvy1;
      vertexBuffer[this._vertexIndex++] = textureId;
      vertexBuffer[this._vertexIndex++] = tint.r / 255;
      vertexBuffer[this._vertexIndex++] = tint.g / 255;
      vertexBuffer[this._vertexIndex++] = tint.b / 255;
      vertexBuffer[this._vertexIndex++] = tint.a;
      vertexBuffer[this._vertexIndex++] = topRight.x;
      vertexBuffer[this._vertexIndex++] = topRight.y;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = uvx1;
      vertexBuffer[this._vertexIndex++] = uvy0;
      vertexBuffer[this._vertexIndex++] = textureId;
      vertexBuffer[this._vertexIndex++] = tint.r / 255;
      vertexBuffer[this._vertexIndex++] = tint.g / 255;
      vertexBuffer[this._vertexIndex++] = tint.b / 255;
      vertexBuffer[this._vertexIndex++] = tint.a;
      vertexBuffer[this._vertexIndex++] = bottomRight.x;
      vertexBuffer[this._vertexIndex++] = bottomRight.y;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = uvx1;
      vertexBuffer[this._vertexIndex++] = uvy1;
      vertexBuffer[this._vertexIndex++] = textureId;
      vertexBuffer[this._vertexIndex++] = tint.r / 255;
      vertexBuffer[this._vertexIndex++] = tint.g / 255;
      vertexBuffer[this._vertexIndex++] = tint.b / 255;
      vertexBuffer[this._vertexIndex++] = tint.a;
    }
    hasPendingDraws() {
      return this._imageCount !== 0;
    }
    flush() {
      if (this._imageCount === 0) {
        return;
      }
      const gl = this._gl;
      this._shader.use();
      this._layout.use(true, 4 * 10 * this._imageCount);
      this._shader.setUniformMatrix("u_matrix", this._context.ortho);
      this._bindTextures(gl);
      this._quads.bind();
      gl.drawElements(gl.TRIANGLES, this._imageCount * 6, this._quads.bufferGlType, 0);
      GraphicsDiagnostics.DrawnImagesCount += this._imageCount;
      GraphicsDiagnostics.DrawCallCount++;
      this._imageCount = 0;
      this._vertexIndex = 0;
      this._textures.length = 0;
    }
  }
  const rectangle_renderer_frag = "#version 300 es\n\nprecision mediump float;\n\n// UV coord\nin vec2 v_uv;\n\nin vec2 v_size; // in pixels\n\n// Color coord to blend with image\nin lowp vec4 v_color;\n\n// Stroke color if used\nin lowp vec4 v_strokeColor;\n\n// Stroke thickness if used\nin lowp float v_strokeThickness; // in pixels\n\n// Opacity\nin float v_opacity;\n\nout vec4 fragColor;\n\nvoid main() {\n    // modified from https://stackoverflow.com/questions/59197671/glsl-rounded-rectangle-with-variable-border\n    vec2 uv = v_uv;\n    vec2 fragCoord = uv * v_size;\n    float maxX = v_size.x - v_strokeThickness;\n    float minX = v_strokeThickness;\n    float maxY = v_size.y - v_strokeThickness;\n    float minY = v_strokeThickness;\n\n    if (fragCoord.x < maxX && fragCoord.x > minX &&\n        fragCoord.y < maxY && fragCoord.y > minY) {\n      fragColor = v_color;\n    } else {\n      fragColor = v_strokeColor;\n    }\n    fragColor.a *= v_opacity;\n    fragColor.rgb *= fragColor.a;\n\n    // vec2 v2CenteredPos     = abs(fragCoord - v_size.xy / 2.0);\n    // vec2 v2HalfShapeSizePx = v_size.xy/2.0 - v_strokeThickness/2.0;\n\n    // float fHalfBorderDist      = 0.0;\n    // float fHalfBorderThickness = 0.0;\n\n    // if (fragCoord.x > max(v_radius, v_strokeThickness) && \n    //     fragCoord.x < v_size.x - max(v_radius, v_strokeThickness))\n    // {\n    //     fHalfBorderDist      = v2CenteredPos.y - v2HalfShapeSizePx.y;\n    //     fHalfBorderThickness = v_strokeThickness / 2.0;\n    // }\n    // else if (fragCoord.y > max(v_radius, v_strokeThickness) && \n    //          fragCoord.y < v_size.y - max(v_radius, v_strokeThickness))\n    // {\n    //     fHalfBorderDist      = v2CenteredPos.x - v2HalfShapeSizePx.x;\n    //     fHalfBorderThickness = v_strokeThickness / 2.0;\n    // }\n    // else\n    // {\n    //     vec2 edgeVec = max(vec2(0.0), v_radius - vec2(\n    //         uv.x > 0.5 ? v_size.x - fragCoord.x : fragCoord.x,\n    //         uv.y > 0.5 ? v_size.y - fragCoord.y : fragCoord.y));\n        \n    //     float ellipse_ab    = v_radius-v_strokeThickness;\n    //     vec2 ellipse_isect = (v_strokeThickness > v_radius || v_strokeThickness > v_radius) ? vec2(0.0) :\n    //                             edgeVec.xy * ellipse_ab*ellipse_ab / length(ellipse_ab*edgeVec.yx); \n            \n    //     fHalfBorderThickness = (v_radius - length(ellipse_isect)) / 2.0;\n    //     fHalfBorderDist      = length(edgeVec) - (v_radius - fHalfBorderThickness);\n    // }\n\n    // vec4 v4FromColor = v_strokeColor;\n    // v4FromColor.rgb *= v4FromColor.a;\n    // vec4 v4ToColor   = vec4(0.0); // background color is transparent\n    // if (fHalfBorderDist < 0.0) {\n    //     v4ToColor = v_color;\n    //     v4ToColor.rgb *= v4ToColor.a;\n    // }\n\n    // float mixPct = abs(fHalfBorderDist) - fHalfBorderThickness;\n\n    // vec4 finalColor = mix(v4FromColor, v4ToColor, mixPct);\n    // gl_FragColor = finalColor;\n}";
  const rectangle_renderer_vert = "#version 300 es\nin vec2 a_position;\n\n// UV coordinate\nin vec2 a_uv;\nout vec2 v_uv;\n\nin vec2 a_size;\nout vec2 v_size;\n\n// Opacity \nin float a_opacity;\nout float v_opacity;\n\nin vec4 a_color;\nout vec4 v_color;\n\nin vec4 a_strokeColor;\nout vec4 v_strokeColor;\n\nin float a_strokeThickness;\nout float v_strokeThickness;\n\nuniform mat4 u_matrix;\n\n\nvoid main() {\n   // Set the vertex position using the ortho transform matrix\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\n\n   // Pass through UV coords\n   v_uv = a_uv;\n   // Pass through size\n   v_size = a_size;\n   // Pass through the Opacity to the fragment shader\n   v_opacity = a_opacity;\n   // Pass through the color to the fragment shader\n   v_color = a_color;\n   // Pass through the stroke color to the fragment shader\n   v_strokeColor = a_strokeColor;\n   // Pass through the stroke thickenss to the fragment shader\n   v_strokeThickness = a_strokeThickness;\n}";

  class RectangleRenderer {
    constructor() {
      this.type = "ex.rectangle";
      this.priority = 0;
      this._maxRectangles = 10922;
      this._rectangleCount = 0;
      this._vertexIndex = 0;
    }
    initialize(gl, context) {
      this._gl = gl;
      this._context = context;
      this._shader = new Shader({
        gl,
        fragmentSource: rectangle_renderer_frag,
        vertexSource: rectangle_renderer_vert
      });
      this._shader.compile();
      this._shader.use();
      this._shader.setUniformMatrix("u_matrix", context.ortho);
      this._buffer = new VertexBuffer({
        gl,
        size: 16 * 4 * this._maxRectangles,
        type: "dynamic"
      });
      this._layout = new VertexLayout({
        gl,
        shader: this._shader,
        vertexBuffer: this._buffer,
        attributes: [
          ["a_position", 2],
          ["a_uv", 2],
          ["a_size", 2],
          ["a_opacity", 1],
          ["a_color", 4],
          ["a_strokeColor", 4],
          ["a_strokeThickness", 1]
        ]
      });
      this._quads = new QuadIndexBuffer(gl, this._maxRectangles, true);
    }
    _isFull() {
      if (this._rectangleCount >= this._maxRectangles) {
        return true;
      }
      return false;
    }
    draw(...args) {
      if (args[0] instanceof Vector && args[1] instanceof Vector) {
        this.drawLine.apply(this, args);
      } else {
        this.drawRectangle.apply(this, args);
      }
    }
    drawLine(start, end, color, thickness = 1) {
      if (this._isFull()) {
        this.flush();
      }
      this._rectangleCount++;
      const transform = this._context.getTransform();
      const opacity = this._context.opacity;
      const snapToPixel = this._context.snapToPixel;
      const dir = end.sub(start);
      const length = dir.size;
      const normal = dir.normalize().perpendicular();
      const halfThick = thickness / 2;
      const startTop = transform.multiply(normal.scale(halfThick).add(start));
      const startBottom = transform.multiply(normal.scale(-halfThick).add(start));
      const endTop = transform.multiply(normal.scale(halfThick).add(end));
      const endBottom = transform.multiply(normal.scale(-halfThick).add(end));
      if (snapToPixel) {
        startTop.x = ~~(startTop.x + pixelSnapEpsilon);
        startTop.y = ~~(startTop.y + pixelSnapEpsilon);
        endTop.x = ~~(endTop.x + pixelSnapEpsilon);
        endTop.y = ~~(endTop.y + pixelSnapEpsilon);
        startBottom.x = ~~(startBottom.x + pixelSnapEpsilon);
        startBottom.y = ~~(startBottom.y + pixelSnapEpsilon);
        endBottom.x = ~~(endBottom.x + pixelSnapEpsilon);
        endBottom.y = ~~(endBottom.y + pixelSnapEpsilon);
      }
      const uvx0 = 0;
      const uvy0 = 0;
      const uvx1 = 1;
      const uvy1 = 1;
      const stroke = Color.Transparent;
      const strokeThickness = 0;
      const width = 1;
      const vertexBuffer = this._layout.vertexBuffer.bufferData;
      vertexBuffer[this._vertexIndex++] = startTop.x;
      vertexBuffer[this._vertexIndex++] = startTop.y;
      vertexBuffer[this._vertexIndex++] = uvx0;
      vertexBuffer[this._vertexIndex++] = uvy0;
      vertexBuffer[this._vertexIndex++] = length;
      vertexBuffer[this._vertexIndex++] = thickness;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a;
      vertexBuffer[this._vertexIndex++] = stroke.r / 255;
      vertexBuffer[this._vertexIndex++] = stroke.g / 255;
      vertexBuffer[this._vertexIndex++] = stroke.b / 255;
      vertexBuffer[this._vertexIndex++] = stroke.a;
      vertexBuffer[this._vertexIndex++] = strokeThickness / width;
      vertexBuffer[this._vertexIndex++] = startBottom.x;
      vertexBuffer[this._vertexIndex++] = startBottom.y;
      vertexBuffer[this._vertexIndex++] = uvx0;
      vertexBuffer[this._vertexIndex++] = uvy1;
      vertexBuffer[this._vertexIndex++] = length;
      vertexBuffer[this._vertexIndex++] = thickness;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a;
      vertexBuffer[this._vertexIndex++] = stroke.r / 255;
      vertexBuffer[this._vertexIndex++] = stroke.g / 255;
      vertexBuffer[this._vertexIndex++] = stroke.b / 255;
      vertexBuffer[this._vertexIndex++] = stroke.a;
      vertexBuffer[this._vertexIndex++] = strokeThickness / width;
      vertexBuffer[this._vertexIndex++] = endTop.x;
      vertexBuffer[this._vertexIndex++] = endTop.y;
      vertexBuffer[this._vertexIndex++] = uvx1;
      vertexBuffer[this._vertexIndex++] = uvy0;
      vertexBuffer[this._vertexIndex++] = length;
      vertexBuffer[this._vertexIndex++] = thickness;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a;
      vertexBuffer[this._vertexIndex++] = stroke.r / 255;
      vertexBuffer[this._vertexIndex++] = stroke.g / 255;
      vertexBuffer[this._vertexIndex++] = stroke.b / 255;
      vertexBuffer[this._vertexIndex++] = stroke.a;
      vertexBuffer[this._vertexIndex++] = strokeThickness / width;
      vertexBuffer[this._vertexIndex++] = endBottom.x;
      vertexBuffer[this._vertexIndex++] = endBottom.y;
      vertexBuffer[this._vertexIndex++] = uvx1;
      vertexBuffer[this._vertexIndex++] = uvy1;
      vertexBuffer[this._vertexIndex++] = length;
      vertexBuffer[this._vertexIndex++] = thickness;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a;
      vertexBuffer[this._vertexIndex++] = stroke.r / 255;
      vertexBuffer[this._vertexIndex++] = stroke.g / 255;
      vertexBuffer[this._vertexIndex++] = stroke.b / 255;
      vertexBuffer[this._vertexIndex++] = stroke.a;
      vertexBuffer[this._vertexIndex++] = strokeThickness / width;
    }
    drawRectangle(pos, width, height, color, stroke = Color.Transparent, strokeThickness = 0) {
      if (this._isFull()) {
        this.flush();
      }
      this._rectangleCount++;
      const transform = this._context.getTransform();
      const opacity = this._context.opacity;
      const snapToPixel = this._context.snapToPixel;
      const topLeft = transform.multiply(pos.add(vec(0, 0)));
      const topRight = transform.multiply(pos.add(vec(width, 0)));
      const bottomRight = transform.multiply(pos.add(vec(width, height)));
      const bottomLeft = transform.multiply(pos.add(vec(0, height)));
      if (snapToPixel) {
        topLeft.x = ~~(topLeft.x + pixelSnapEpsilon);
        topLeft.y = ~~(topLeft.y + pixelSnapEpsilon);
        topRight.x = ~~(topRight.x + pixelSnapEpsilon);
        topRight.y = ~~(topRight.y + pixelSnapEpsilon);
        bottomLeft.x = ~~(bottomLeft.x + pixelSnapEpsilon);
        bottomLeft.y = ~~(bottomLeft.y + pixelSnapEpsilon);
        bottomRight.x = ~~(bottomRight.x + pixelSnapEpsilon);
        bottomRight.y = ~~(bottomRight.y + pixelSnapEpsilon);
      }
      const uvx0 = 0;
      const uvy0 = 0;
      const uvx1 = 1;
      const uvy1 = 1;
      const vertexBuffer = this._layout.vertexBuffer.bufferData;
      vertexBuffer[this._vertexIndex++] = topLeft.x;
      vertexBuffer[this._vertexIndex++] = topLeft.y;
      vertexBuffer[this._vertexIndex++] = uvx0;
      vertexBuffer[this._vertexIndex++] = uvy0;
      vertexBuffer[this._vertexIndex++] = width;
      vertexBuffer[this._vertexIndex++] = height;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a;
      vertexBuffer[this._vertexIndex++] = stroke.r / 255;
      vertexBuffer[this._vertexIndex++] = stroke.g / 255;
      vertexBuffer[this._vertexIndex++] = stroke.b / 255;
      vertexBuffer[this._vertexIndex++] = stroke.a;
      vertexBuffer[this._vertexIndex++] = strokeThickness;
      vertexBuffer[this._vertexIndex++] = bottomLeft.x;
      vertexBuffer[this._vertexIndex++] = bottomLeft.y;
      vertexBuffer[this._vertexIndex++] = uvx0;
      vertexBuffer[this._vertexIndex++] = uvy1;
      vertexBuffer[this._vertexIndex++] = width;
      vertexBuffer[this._vertexIndex++] = height;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a;
      vertexBuffer[this._vertexIndex++] = stroke.r / 255;
      vertexBuffer[this._vertexIndex++] = stroke.g / 255;
      vertexBuffer[this._vertexIndex++] = stroke.b / 255;
      vertexBuffer[this._vertexIndex++] = stroke.a;
      vertexBuffer[this._vertexIndex++] = strokeThickness;
      vertexBuffer[this._vertexIndex++] = topRight.x;
      vertexBuffer[this._vertexIndex++] = topRight.y;
      vertexBuffer[this._vertexIndex++] = uvx1;
      vertexBuffer[this._vertexIndex++] = uvy0;
      vertexBuffer[this._vertexIndex++] = width;
      vertexBuffer[this._vertexIndex++] = height;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a;
      vertexBuffer[this._vertexIndex++] = stroke.r / 255;
      vertexBuffer[this._vertexIndex++] = stroke.g / 255;
      vertexBuffer[this._vertexIndex++] = stroke.b / 255;
      vertexBuffer[this._vertexIndex++] = stroke.a;
      vertexBuffer[this._vertexIndex++] = strokeThickness;
      vertexBuffer[this._vertexIndex++] = bottomRight.x;
      vertexBuffer[this._vertexIndex++] = bottomRight.y;
      vertexBuffer[this._vertexIndex++] = uvx1;
      vertexBuffer[this._vertexIndex++] = uvy1;
      vertexBuffer[this._vertexIndex++] = width;
      vertexBuffer[this._vertexIndex++] = height;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a;
      vertexBuffer[this._vertexIndex++] = stroke.r / 255;
      vertexBuffer[this._vertexIndex++] = stroke.g / 255;
      vertexBuffer[this._vertexIndex++] = stroke.b / 255;
      vertexBuffer[this._vertexIndex++] = stroke.a;
      vertexBuffer[this._vertexIndex++] = strokeThickness;
    }
    hasPendingDraws() {
      return this._rectangleCount !== 0;
    }
    flush() {
      if (this._rectangleCount === 0) {
        return;
      }
      const gl = this._gl;
      this._shader.use();
      this._layout.use(true);
      this._shader.setUniformMatrix("u_matrix", this._context.ortho);
      this._quads.bind();
      gl.drawElements(gl.TRIANGLES, this._rectangleCount * 6, this._quads.bufferGlType, 0);
      GraphicsDiagnostics.DrawnImagesCount += this._rectangleCount;
      GraphicsDiagnostics.DrawCallCount++;
      this._rectangleCount = 0;
      this._vertexIndex = 0;
    }
  }
  const circle_renderer_frag = "#version 300 es\nprecision highp float;\n\n// UV coord\nin vec2 v_uv;\n\n// Color coord to blend with image\nin lowp vec4 v_color;\n\n// Stroke color if used\nin lowp vec4 v_strokeColor;\n\n// Stroke thickness if used\nin lowp float v_strokeThickness;\n\n// Opacity\nin float v_opacity;\n\nout vec4 fragColor;\n\nvoid main() {\n  // make (0, 0) the center the uv \n  vec2 uv = v_uv * 2.0 - 1.0;\n\n  vec4 color = v_color;\n  vec4 strokeColor = v_strokeColor;\n\n  // circle border is at radius 1.0 \n  // dist is > 0 when inside the circle \n  float d = length(uv);\n  float dist = 1.0 - length(uv);\n\n  // Fade based on fwidth\n  float fade = fwidth(dot(uv, uv));\n\n  // if dist is greater than 0 step to 1;\n  // when we cross this 0 threshold add a smooth fade\n  float fill = smoothstep(-fade/2.0, fade/2.0, dist);\n\n  // if dist is greater than the stroke thickness step to 1\n  float stroke = 1.0 - smoothstep(v_strokeThickness, v_strokeThickness + fade, dist);\n\n  strokeColor.a *= fill * stroke;\n  strokeColor.rgb *= strokeColor.a;\n\n  color.a *= fill * (1.0 - stroke);\n  color.rgb *= color.a;\n\n  vec4 finalColor = mix(vec4(0.0), (color + strokeColor), fill);\n  finalColor.rgb = finalColor.rgb * v_opacity;\n  finalColor.a = finalColor.a * v_opacity;\n  fragColor = finalColor;\n}";
  const circle_renderer_vert = "#version 300 es\nin vec2 a_position;\n\n// UV coordinate\nin vec2 a_uv;\nout vec2 v_uv;\n\n// Opacity \nin float a_opacity;\nout float v_opacity;\n\nin vec4 a_color;\nout vec4 v_color;\n\nin vec4 a_strokeColor;\nout vec4 v_strokeColor;\n\nin float a_strokeThickness;\nout float v_strokeThickness;\n\nuniform mat4 u_matrix;\n\n\nvoid main() {\n   // Set the vertex position using the ortho transform matrix\n   gl_Position = u_matrix * vec4(a_position, 0.0, 1.0);\n\n   // Pass through UV coords\n   v_uv = a_uv;\n   // Pass through the Opacity to the fragment shader\n   v_opacity = a_opacity;\n   // Pass through the color to the fragment shader\n   v_color = a_color;\n   // Pass through the stroke color to the fragment shader\n   v_strokeColor = a_strokeColor;\n   // Pass through the stroke thickenss to the fragment shader\n   v_strokeThickness = a_strokeThickness;\n}";

  class CircleRenderer {
    constructor() {
      this.type = "ex.circle";
      this.priority = 0;
      this._maxCircles = 10922;
      this._circleCount = 0;
      this._vertexIndex = 0;
    }
    initialize(gl, context) {
      this._gl = gl;
      this._context = context;
      this._shader = new Shader({
        gl,
        fragmentSource: circle_renderer_frag,
        vertexSource: circle_renderer_vert
      });
      this._shader.compile();
      this._shader.use();
      this._shader.setUniformMatrix("u_matrix", context.ortho);
      this._buffer = new VertexBuffer({
        gl,
        size: 14 * 4 * this._maxCircles,
        type: "dynamic"
      });
      this._layout = new VertexLayout({
        gl,
        shader: this._shader,
        vertexBuffer: this._buffer,
        attributes: [
          ["a_position", 2],
          ["a_uv", 2],
          ["a_opacity", 1],
          ["a_color", 4],
          ["a_strokeColor", 4],
          ["a_strokeThickness", 1]
        ]
      });
      this._quads = new QuadIndexBuffer(gl, this._maxCircles, true);
    }
    _isFull() {
      if (this._circleCount >= this._maxCircles) {
        return true;
      }
      return false;
    }
    draw(pos, radius, color, stroke = Color.Transparent, strokeThickness = 0) {
      if (this._isFull()) {
        this.flush();
      }
      this._circleCount++;
      const transform = this._context.getTransform();
      const opacity = this._context.opacity;
      const snapToPixel = this._context.snapToPixel;
      const topLeft = transform.multiply(pos.add(vec(-radius, -radius)));
      const topRight = transform.multiply(pos.add(vec(radius, -radius)));
      const bottomRight = transform.multiply(pos.add(vec(radius, radius)));
      const bottomLeft = transform.multiply(pos.add(vec(-radius, radius)));
      if (snapToPixel) {
        topLeft.x = ~~(topLeft.x + pixelSnapEpsilon);
        topLeft.y = ~~(topLeft.y + pixelSnapEpsilon);
        topRight.x = ~~(topRight.x + pixelSnapEpsilon);
        topRight.y = ~~(topRight.y + pixelSnapEpsilon);
        bottomLeft.x = ~~(bottomLeft.x + pixelSnapEpsilon);
        bottomLeft.y = ~~(bottomLeft.y + pixelSnapEpsilon);
        bottomRight.x = ~~(bottomRight.x + pixelSnapEpsilon);
        bottomRight.y = ~~(bottomRight.y + pixelSnapEpsilon);
      }
      const uvx0 = 0;
      const uvy0 = 0;
      const uvx1 = 1;
      const uvy1 = 1;
      const vertexBuffer = this._layout.vertexBuffer.bufferData;
      vertexBuffer[this._vertexIndex++] = topLeft.x;
      vertexBuffer[this._vertexIndex++] = topLeft.y;
      vertexBuffer[this._vertexIndex++] = uvx0;
      vertexBuffer[this._vertexIndex++] = uvy0;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a;
      vertexBuffer[this._vertexIndex++] = stroke.r / 255;
      vertexBuffer[this._vertexIndex++] = stroke.g / 255;
      vertexBuffer[this._vertexIndex++] = stroke.b / 255;
      vertexBuffer[this._vertexIndex++] = stroke.a;
      vertexBuffer[this._vertexIndex++] = strokeThickness / radius;
      vertexBuffer[this._vertexIndex++] = bottomLeft.x;
      vertexBuffer[this._vertexIndex++] = bottomLeft.y;
      vertexBuffer[this._vertexIndex++] = uvx0;
      vertexBuffer[this._vertexIndex++] = uvy1;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a;
      vertexBuffer[this._vertexIndex++] = stroke.r / 255;
      vertexBuffer[this._vertexIndex++] = stroke.g / 255;
      vertexBuffer[this._vertexIndex++] = stroke.b / 255;
      vertexBuffer[this._vertexIndex++] = stroke.a;
      vertexBuffer[this._vertexIndex++] = strokeThickness / radius;
      vertexBuffer[this._vertexIndex++] = topRight.x;
      vertexBuffer[this._vertexIndex++] = topRight.y;
      vertexBuffer[this._vertexIndex++] = uvx1;
      vertexBuffer[this._vertexIndex++] = uvy0;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a;
      vertexBuffer[this._vertexIndex++] = stroke.r / 255;
      vertexBuffer[this._vertexIndex++] = stroke.g / 255;
      vertexBuffer[this._vertexIndex++] = stroke.b / 255;
      vertexBuffer[this._vertexIndex++] = stroke.a;
      vertexBuffer[this._vertexIndex++] = strokeThickness / radius;
      vertexBuffer[this._vertexIndex++] = bottomRight.x;
      vertexBuffer[this._vertexIndex++] = bottomRight.y;
      vertexBuffer[this._vertexIndex++] = uvx1;
      vertexBuffer[this._vertexIndex++] = uvy1;
      vertexBuffer[this._vertexIndex++] = opacity;
      vertexBuffer[this._vertexIndex++] = color.r / 255;
      vertexBuffer[this._vertexIndex++] = color.g / 255;
      vertexBuffer[this._vertexIndex++] = color.b / 255;
      vertexBuffer[this._vertexIndex++] = color.a;
      vertexBuffer[this._vertexIndex++] = stroke.r / 255;
      vertexBuffer[this._vertexIndex++] = stroke.g / 255;
      vertexBuffer[this._vertexIndex++] = stroke.b / 255;
      vertexBuffer[this._vertexIndex++] = stroke.a;
      vertexBuffer[this._vertexIndex++] = strokeThickness / radius;
    }
    hasPendingDraws() {
      return this._circleCount !== 0;
    }
    flush() {
      if (this._circleCount === 0) {
        return;
      }
      const gl = this._gl;
      this._shader.use();
      this._layout.use(true);
      this._shader.setUniformMatrix("u_matrix", this._context.ortho);
      this._quads.bind();
      gl.drawElements(gl.TRIANGLES, this._circleCount * 6, this._quads.bufferGlType, 0);
      GraphicsDiagnostics.DrawnImagesCount += this._circleCount;
      GraphicsDiagnostics.DrawCallCount++;
      this._circleCount = 0;
      this._vertexIndex = 0;
    }
  }

  class Pool {
    constructor(builder, recycler, maxObjects = 100) {
      this.builder = builder;
      this.recycler = recycler;
      this.maxObjects = maxObjects;
      this.totalAllocations = 0;
      this.index = 0;
      this.objects = [];
      this.disableWarnings = false;
      this._logger = Logger.getInstance();
    }
    preallocate() {
      for (let i = 0;i < this.maxObjects; i++) {
        this.objects[i] = this.builder();
      }
    }
    using(context) {
      const result = context(this);
      if (result) {
        return this.done(...result);
      }
      return this.done();
    }
    borrow(context) {
      const object = this.get();
      context(object);
      this.index--;
    }
    get(...args) {
      if (this.index === this.maxObjects) {
        if (!this.disableWarnings) {
          this._logger.warn("Max pooled objects reached, possible memory leak? Doubling");
        }
        this.maxObjects = this.maxObjects * 2;
      }
      if (this.objects[this.index]) {
        return this.recycler(this.objects[this.index++], ...args);
      } else {
        this.totalAllocations++;
        const object = this.objects[this.index++] = this.builder(...args);
        return object;
      }
    }
    done(...objects) {
      this.index = 0;
      for (const object of objects) {
        const poolIndex = this.objects.indexOf(object);
        this.objects[poolIndex] = this.builder();
        this.totalAllocations++;
      }
      return objects;
    }
  }

  class DrawCall {
    constructor() {
      this.z = 0;
      this.priority = 0;
      this.transform = AffineMatrix.identity();
      this.state = {
        z: 0,
        opacity: 1,
        tint: Color.White,
        material: null
      };
    }
  }
  const defaultVertexSource = `#version 300 es
in vec2 a_position;

in vec2 a_uv;
out vec2 v_uv;

in vec2 a_screenuv;
out vec2 v_screenuv;

uniform mat4 u_matrix;
uniform mat4 u_transform;

void main() {
  // Set the vertex position using the ortho & transform matrix
  gl_Position = u_matrix * u_transform * vec4(a_position, 0.0, 1.0);

  // Pass through the UV coord to the fragment shader
  v_uv = a_uv;
  v_screenuv = a_screenuv;
}
`;

  class Material {
    constructor(options) {
      this._color = Color.Transparent;
      this._initialized = false;
      const { color, name, vertexSource, fragmentSource } = options;
      this._name = name;
      this._vertexSource = vertexSource !== null && vertexSource !== undefined ? vertexSource : defaultVertexSource;
      this._fragmentSource = fragmentSource;
      this._color = color !== null && color !== undefined ? color : this._color;
    }
    initialize(_gl, _context) {
      if (this._initialized) {
        return;
      }
      this._shader = _context.createShader({
        vertexSource: this._vertexSource,
        fragmentSource: this._fragmentSource
      });
      this._shader.compile();
      this._initialized = true;
    }
    get name() {
      var _a;
      return (_a = this._name) !== null && _a !== undefined ? _a : "anonymous material";
    }
    get isUsingScreenTexture() {
      return this._fragmentSource.includes("u_screen_texture");
    }
    update(callback) {
      if (this._shader) {
        this._shader.use();
        callback(this._shader);
      }
    }
    getShader() {
      return this._shader;
    }
    use() {
      if (this._initialized) {
        this._shader.use();
        this._shader.trySetUniformFloatColor("u_color", this._color);
      } else {
        throw Error(`Material ${this.name} not yet initialized, use the ExcaliburGraphicsContext.createMaterial() to work around this.`);
      }
    }
  }

  class MaterialRenderer {
    constructor() {
      this.type = "ex.material";
      this.priority = 0;
      this._textures = [];
    }
    initialize(gl, context) {
      this._gl = gl;
      this._context = context;
      this._buffer = new VertexBuffer({
        gl,
        size: 6 * 4,
        type: "dynamic"
      });
      this._layout = new VertexLayout({
        gl,
        vertexBuffer: this._buffer,
        attributes: [
          ["a_position", 2],
          ["a_uv", 2],
          ["a_screenuv", 2]
        ]
      });
      this._quads = new QuadIndexBuffer(gl, 1, true);
    }
    draw(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight) {
      var _a, _b, _c, _d;
      const gl = this._gl;
      const material = this._context.material;
      material.initialize(gl, this._context);
      const transform = this._context.getTransform();
      const opacity = this._context.opacity;
      const shader = material.getShader();
      const vertexBuffer = this._layout.vertexBuffer.bufferData;
      let vertexIndex = 0;
      let width = (image === null || image === undefined ? undefined : image.width) || swidth || 0;
      let height = (image === null || image === undefined ? undefined : image.height) || sheight || 0;
      let view = [0, 0, (_a = swidth !== null && swidth !== undefined ? swidth : image === null || image === undefined ? undefined : image.width) !== null && _a !== undefined ? _a : 0, (_b = sheight !== null && sheight !== undefined ? sheight : image === null || image === undefined ? undefined : image.height) !== null && _b !== undefined ? _b : 0];
      let dest = [sx !== null && sx !== undefined ? sx : 1, sy !== null && sy !== undefined ? sy : 1];
      if (dx !== undefined && dy !== undefined && dwidth !== undefined && dheight !== undefined) {
        view = [sx !== null && sx !== undefined ? sx : 1, sy !== null && sy !== undefined ? sy : 1, (_c = swidth !== null && swidth !== undefined ? swidth : image === null || image === undefined ? undefined : image.width) !== null && _c !== undefined ? _c : 0, (_d = sheight !== null && sheight !== undefined ? sheight : image === null || image === undefined ? undefined : image.height) !== null && _d !== undefined ? _d : 0];
        dest = [dx, dy];
        width = dwidth;
        height = dheight;
      }
      sx = view[0];
      sy = view[1];
      const sw = view[2];
      const sh = view[3];
      const topLeft = vec(dest[0], dest[1]);
      const topRight = vec(dest[0] + width, dest[1]);
      const bottomLeft = vec(dest[0], dest[1] + height);
      const bottomRight = vec(dest[0] + width, dest[1] + height);
      const imageWidth = image.width || width;
      const imageHeight = image.height || height;
      const uvx0 = sx / imageWidth;
      const uvy0 = sy / imageHeight;
      const uvx1 = (sx + sw - 0.01) / imageWidth;
      const uvy1 = (sy + sh - 0.01) / imageHeight;
      const topLeftScreen = transform.getPosition();
      const bottomRightScreen = topLeftScreen.add(bottomRight);
      const screenUVX0 = topLeftScreen.x / this._context.width;
      const screenUVY0 = topLeftScreen.y / this._context.height;
      const screenUVX1 = bottomRightScreen.x / this._context.width;
      const screenUVY1 = bottomRightScreen.y / this._context.height;
      vertexBuffer[vertexIndex++] = topLeft.x;
      vertexBuffer[vertexIndex++] = topLeft.y;
      vertexBuffer[vertexIndex++] = uvx0;
      vertexBuffer[vertexIndex++] = uvy0;
      vertexBuffer[vertexIndex++] = screenUVX0;
      vertexBuffer[vertexIndex++] = screenUVY0;
      vertexBuffer[vertexIndex++] = bottomLeft.x;
      vertexBuffer[vertexIndex++] = bottomLeft.y;
      vertexBuffer[vertexIndex++] = uvx0;
      vertexBuffer[vertexIndex++] = uvy1;
      vertexBuffer[vertexIndex++] = screenUVX0;
      vertexBuffer[vertexIndex++] = screenUVY1;
      vertexBuffer[vertexIndex++] = topRight.x;
      vertexBuffer[vertexIndex++] = topRight.y;
      vertexBuffer[vertexIndex++] = uvx1;
      vertexBuffer[vertexIndex++] = uvy0;
      vertexBuffer[vertexIndex++] = screenUVX1;
      vertexBuffer[vertexIndex++] = screenUVY0;
      vertexBuffer[vertexIndex++] = bottomRight.x;
      vertexBuffer[vertexIndex++] = bottomRight.y;
      vertexBuffer[vertexIndex++] = uvx1;
      vertexBuffer[vertexIndex++] = uvy1;
      vertexBuffer[vertexIndex++] = screenUVX1;
      vertexBuffer[vertexIndex++] = screenUVY1;
      const texture = this._addImageAsTexture(image);
      material.use();
      this._layout.shader = shader;
      this._layout.use(true);
      shader.trySetUniformFloat("u_time_ms", performance.now());
      shader.trySetUniformFloat("u_opacity", opacity);
      shader.trySetUniformFloatVector("u_resolution", vec(this._context.width, this._context.height));
      shader.trySetUniformFloatVector("u_graphic_resolution", vec(imageWidth, imageHeight));
      shader.trySetUniformFloatVector("u_size", vec(sw, sh));
      shader.trySetUniformMatrix("u_matrix", this._context.ortho);
      shader.trySetUniformMatrix("u_transform", transform.to4x4());
      gl.activeTexture(gl.TEXTURE0 + 0);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      shader.trySetUniformInt("u_graphic", 0);
      gl.activeTexture(gl.TEXTURE0 + 1);
      gl.bindTexture(gl.TEXTURE_2D, this._context.materialScreenTexture);
      shader.trySetUniformInt("u_screen_texture", 1);
      this._quads.bind();
      gl.drawElements(gl.TRIANGLES, 6, this._quads.bufferGlType, 0);
      GraphicsDiagnostics.DrawnImagesCount++;
      GraphicsDiagnostics.DrawCallCount++;
    }
    _addImageAsTexture(image) {
      const maybeFiltering = image.getAttribute("filtering");
      let filtering = null;
      if (maybeFiltering === ImageFiltering.Blended || maybeFiltering === ImageFiltering.Pixel) {
        filtering = maybeFiltering;
      }
      const force = image.getAttribute("forceUpload") === "true" ? true : false;
      const texture = this._context.textureLoader.load(image, filtering, force);
      image.removeAttribute("forceUpload");
      if (this._textures.indexOf(texture) === -1) {
        this._textures.push(texture);
      }
      return texture;
    }
    hasPendingDraws() {
      return false;
    }
    flush() {
    }
  }
  const pixelSnapEpsilon = 0.0001;

  class ExcaliburGraphicsContextWebGLDebug {
    constructor(_webglCtx) {
      this._webglCtx = _webglCtx;
      this._debugText = new DebugText;
    }
    drawRect(x, y, width, height, rectOptions = { color: Color.Black }) {
      this.drawLine(vec(x, y), vec(x + width, y), { ...rectOptions });
      this.drawLine(vec(x + width, y), vec(x + width, y + height), { ...rectOptions });
      this.drawLine(vec(x + width, y + height), vec(x, y + height), { ...rectOptions });
      this.drawLine(vec(x, y + height), vec(x, y), { ...rectOptions });
    }
    drawLine(start, end, lineOptions = { color: Color.Black }) {
      this._webglCtx.draw("ex.line", start, end, lineOptions.color);
    }
    drawPoint(point2, pointOptions = { color: Color.Black, size: 5 }) {
      this._webglCtx.draw("ex.point", point2, pointOptions.color, pointOptions.size);
    }
    drawText(text, pos) {
      this._debugText.write(this._webglCtx, text, pos);
    }
  }

  class ExcaliburGraphicsContextWebGL {
    get z() {
      return this._state.current.z;
    }
    set z(value) {
      this._state.current.z = value;
    }
    get opacity() {
      return this._state.current.opacity;
    }
    set opacity(value) {
      this._state.current.opacity = value;
    }
    get tint() {
      return this._state.current.tint;
    }
    set tint(color) {
      this._state.current.tint = color;
    }
    get width() {
      return this.__gl.canvas.width;
    }
    get height() {
      return this.__gl.canvas.height;
    }
    get ortho() {
      return this._ortho;
    }
    checkIfResolutionSupported(dim) {
      let supported = true;
      if (dim.width > 4096 || dim.height > 4096) {
        supported = false;
      }
      return supported;
    }
    constructor(options) {
      this._logger = Logger.getInstance();
      this._renderers = new Map;
      this._isDrawLifecycle = false;
      this.useDrawSorting = true;
      this._drawCallPool = new Pool(() => new DrawCall, (instance) => {
        instance.priority = 0;
        instance.z = 0;
        instance.renderer = undefined;
        instance.args = undefined;
        return instance;
      }, 4000);
      this._drawCalls = [];
      this._postProcessTargets = [];
      this._postprocessors = [];
      this._transform = new TransformStack;
      this._state = new StateStack;
      this.snapToPixel = false;
      this.smoothing = false;
      this.backgroundColor = Color.ExcaliburBlue;
      this._alreadyWarnedDrawLifecycle = false;
      this.debug = new ExcaliburGraphicsContextWebGLDebug(this);
      this._totalPostProcessorTime = 0;
      const { canvasElement, enableTransparency, smoothing, snapToPixel, backgroundColor, useDrawSorting } = options;
      this.__gl = canvasElement.getContext("webgl2", {
        antialias: smoothing !== null && smoothing !== undefined ? smoothing : this.smoothing,
        premultipliedAlpha: false,
        alpha: enableTransparency !== null && enableTransparency !== undefined ? enableTransparency : true,
        depth: true,
        powerPreference: "high-performance"
      });
      if (!this.__gl) {
        throw Error("Failed to retrieve webgl context from browser");
      }
      this.textureLoader = new TextureLoader(this.__gl);
      this.snapToPixel = snapToPixel !== null && snapToPixel !== undefined ? snapToPixel : this.snapToPixel;
      this.smoothing = smoothing !== null && smoothing !== undefined ? smoothing : this.smoothing;
      this.backgroundColor = backgroundColor !== null && backgroundColor !== undefined ? backgroundColor : this.backgroundColor;
      this.useDrawSorting = useDrawSorting !== null && useDrawSorting !== undefined ? useDrawSorting : this.useDrawSorting;
      this._drawCallPool.disableWarnings = true;
      this._drawCallPool.preallocate();
      this._init();
    }
    _init() {
      const gl = this.__gl;
      this._ortho = Matrix.ortho(0, gl.canvas.width, gl.canvas.height, 0, 400, -400);
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.clearColor(this.backgroundColor.r / 255, this.backgroundColor.g / 255, this.backgroundColor.b / 255, this.backgroundColor.a);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendEquation(gl.FUNC_ADD);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
      gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      this.register(new ImageRenderer);
      this.register(new MaterialRenderer);
      this.register(new RectangleRenderer);
      this.register(new CircleRenderer);
      this.register(new PointRenderer);
      this.register(new LineRenderer);
      this.materialScreenTexture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this.materialScreenTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
      gl.bindTexture(gl.TEXTURE_2D, null);
      this._screenRenderer = new ScreenPassPainter(gl);
      this._renderTarget = new RenderTarget({
        gl,
        width: gl.canvas.width,
        height: gl.canvas.height
      });
      this._postProcessTargets = [
        new RenderTarget({
          gl,
          width: gl.canvas.width,
          height: gl.canvas.height
        }),
        new RenderTarget({
          gl,
          width: gl.canvas.width,
          height: gl.canvas.height
        })
      ];
    }
    register(renderer) {
      this._renderers.set(renderer.type, renderer);
      renderer.initialize(this.__gl, this);
    }
    get(rendererName) {
      return this._renderers.get(rendererName);
    }
    _isCurrentRenderer(renderer) {
      if (!this._currentRenderer || this._currentRenderer === renderer) {
        return true;
      }
      return false;
    }
    beginDrawLifecycle() {
      this._isDrawLifecycle = true;
    }
    endDrawLifecycle() {
      this._isDrawLifecycle = false;
    }
    draw(rendererName, ...args) {
      if (!this._isDrawLifecycle && !this._alreadyWarnedDrawLifecycle) {
        this._logger.warn(`Attempting to draw outside the the drawing lifecycle (preDraw/postDraw) is not supported and is a source of bugs/errors.\nIf you want to do custom drawing, use Actor.graphics, or any onPreDraw or onPostDraw handler.`);
        this._alreadyWarnedDrawLifecycle = true;
      }
      const renderer = this._renderers.get(rendererName);
      if (renderer) {
        if (this.useDrawSorting) {
          const drawCall = this._drawCallPool.get();
          drawCall.z = this._state.current.z;
          drawCall.priority = renderer.priority;
          drawCall.renderer = rendererName;
          this.getTransform().clone(drawCall.transform);
          drawCall.state.z = this._state.current.z;
          drawCall.state.opacity = this._state.current.opacity;
          drawCall.state.tint = this._state.current.tint;
          drawCall.state.material = this._state.current.material;
          drawCall.args = args;
          this._drawCalls.push(drawCall);
        } else {
          if (!this._currentRenderer) {
            this._currentRenderer = renderer;
          }
          if (!this._isCurrentRenderer(renderer)) {
            this._currentRenderer.flush();
          }
          renderer.draw(...args);
          this._currentRenderer = renderer;
        }
      } else {
        throw Error(`No renderer with name ${rendererName} has been registered`);
      }
    }
    resetTransform() {
      this._transform.current = AffineMatrix.identity();
    }
    updateViewport(resolution) {
      const gl = this.__gl;
      this._ortho = this._ortho = Matrix.ortho(0, resolution.width, resolution.height, 0, 400, -400);
      this._renderTarget.setResolution(gl.canvas.width, gl.canvas.height);
      this._postProcessTargets[0].setResolution(gl.canvas.width, gl.canvas.height);
      this._postProcessTargets[1].setResolution(gl.canvas.width, gl.canvas.height);
    }
    drawImage(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight) {
      if (swidth === 0 || sheight === 0) {
        return;
      } else if (dwidth === 0 || dheight === 0) {
        return;
      } else if (image.width === 0 || image.height === 0) {
        return;
      }
      if (!image) {
        Logger.getInstance().warn("Cannot draw a null or undefined image");
        if (console.trace) {
          console.trace();
        }
        return;
      }
      if (this._state.current.material) {
        this.draw("ex.material", image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight);
      } else {
        this.draw("ex.image", image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight);
      }
    }
    drawLine(start, end, color, thickness = 1) {
      this.draw("ex.rectangle", start, end, color, thickness);
    }
    drawRectangle(pos, width, height, color, stroke, strokeThickness) {
      this.draw("ex.rectangle", pos, width, height, color, stroke, strokeThickness);
    }
    drawCircle(pos, radius, color, stroke, thickness) {
      this.draw("ex.circle", pos, radius, color, stroke, thickness);
    }
    save() {
      this._transform.save();
      this._state.save();
    }
    restore() {
      this._transform.restore();
      this._state.restore();
    }
    translate(x, y) {
      this._transform.translate(this.snapToPixel ? ~~(x + pixelSnapEpsilon) : x, this.snapToPixel ? ~~(y + pixelSnapEpsilon) : y);
    }
    rotate(angle) {
      this._transform.rotate(angle);
    }
    scale(x, y) {
      this._transform.scale(x, y);
    }
    transform(matrix) {
      this._transform.current = matrix;
    }
    getTransform() {
      return this._transform.current;
    }
    multiply(m) {
      this._transform.current.multiply(m, this._transform.current);
    }
    addPostProcessor(postprocessor) {
      this._postprocessors.push(postprocessor);
      postprocessor.initialize(this.__gl);
    }
    removePostProcessor(postprocessor) {
      const index = this._postprocessors.indexOf(postprocessor);
      if (index !== -1) {
        this._postprocessors.splice(index, 1);
      }
    }
    clearPostProcessors() {
      this._postprocessors.length = 0;
    }
    updatePostProcessors(delta) {
      for (const postprocessor of this._postprocessors) {
        const shader = postprocessor.getShader();
        shader.use();
        const uniforms = shader.getUniforms();
        this._totalPostProcessorTime += delta;
        if (uniforms.find((u) => u.name === "u_time_ms")) {
          shader.setUniformFloat("u_time_ms", this._totalPostProcessorTime);
        }
        if (uniforms.find((u) => u.name === "u_elapsed_ms")) {
          shader.setUniformFloat("u_elapsed_ms", delta);
        }
        if (uniforms.find((u) => u.name === "u_resolution")) {
          shader.setUniformFloatVector("u_resolution", vec(this.width, this.height));
        }
        if (postprocessor.onUpdate) {
          postprocessor.onUpdate(delta);
        }
      }
    }
    set material(material) {
      this._state.current.material = material;
    }
    get material() {
      return this._state.current.material;
    }
    createMaterial(options) {
      const material = new Material(options);
      material.initialize(this.__gl, this);
      return material;
    }
    createShader(options) {
      const gl = this.__gl;
      const { vertexSource, fragmentSource } = options;
      const shader = new Shader({
        gl,
        vertexSource,
        fragmentSource
      });
      shader.compile();
      return shader;
    }
    clear() {
      const gl = this.__gl;
      this._renderTarget.use();
      gl.clearColor(this.backgroundColor.r / 255, this.backgroundColor.g / 255, this.backgroundColor.b / 255, this.backgroundColor.a);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
    flush() {
      const gl = this.__gl;
      this._renderTarget.use();
      if (this.useDrawSorting) {
        const originalSort = new Map;
        for (const [name] of this._renderers) {
          const firstIndex = this._drawCalls.findIndex((dc) => dc.renderer === name);
          originalSort.set(name, firstIndex);
        }
        this._drawCalls.sort((a, b) => {
          const zIndex = a.z - b.z;
          const originalSortOrder = originalSort.get(a.renderer) - originalSort.get(b.renderer);
          const priority = a.priority - b.priority;
          if (zIndex === 0) {
            if (priority === 0) {
              return originalSortOrder;
            }
            return priority;
          }
          return zIndex;
        });
        const oldTransform = this._transform.current;
        const oldState = this._state.current;
        if (this._drawCalls.length) {
          let currentRendererName = this._drawCalls[0].renderer;
          let currentRenderer = this._renderers.get(currentRendererName);
          for (let i = 0;i < this._drawCalls.length; i++) {
            this._transform.current = this._drawCalls[i].transform;
            this._state.current = this._drawCalls[i].state;
            if (this._drawCalls[i].renderer !== currentRendererName) {
              currentRenderer.flush();
              currentRendererName = this._drawCalls[i].renderer;
              currentRenderer = this._renderers.get(currentRendererName);
            }
            if (currentRenderer instanceof MaterialRenderer && this.material.isUsingScreenTexture) {
              const gl2 = this.__gl;
              gl2.bindTexture(gl2.TEXTURE_2D, this.materialScreenTexture);
              gl2.copyTexImage2D(gl2.TEXTURE_2D, 0, gl2.RGBA, 0, 0, this.width, this.height, 0);
              this._renderTarget.use();
            }
            currentRenderer.draw(...this._drawCalls[i].args);
          }
          if (currentRenderer.hasPendingDraws()) {
            currentRenderer.flush();
          }
        }
        this._transform.current = oldTransform;
        this._state.current = oldState;
        this._drawCallPool.done();
        this._drawCalls.length = 0;
      } else {
        for (const renderer of this._renderers.values()) {
          if (renderer.hasPendingDraws()) {
            renderer.flush();
          }
        }
      }
      this._renderTarget.disable();
      const source = this._renderTarget.toRenderSource();
      source.use();
      for (let i = 0;i < this._postprocessors.length; i++) {
        this._postProcessTargets[i % 2].use();
        this._screenRenderer.renderWithPostProcessor(this._postprocessors[i]);
        this._postProcessTargets[i % 2].toRenderSource().use();
      }
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      this._screenRenderer.renderToScreen();
    }
  }
  const ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon = 0.0001;

  class ExcaliburGraphicsContext2DCanvasDebug {
    constructor(_ex) {
      this._ex = _ex;
      this._debugText = new DebugText;
    }
    drawRect(x, y, width, height) {
      this._ex.__ctx.save();
      this._ex.__ctx.strokeStyle = "red";
      this._ex.__ctx.strokeRect(this._ex.snapToPixel ? ~~(x + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : x, this._ex.snapToPixel ? ~~(y + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : y, this._ex.snapToPixel ? ~~(width + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : width, this._ex.snapToPixel ? ~~(height + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : height);
      this._ex.__ctx.restore();
    }
    drawLine(start, end, lineOptions = { color: Color.Black }) {
      this._ex.__ctx.save();
      this._ex.__ctx.beginPath();
      this._ex.__ctx.strokeStyle = lineOptions.color.toString();
      this._ex.__ctx.moveTo(this._ex.snapToPixel ? ~~(start.x + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : start.x, this._ex.snapToPixel ? ~~(start.y + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : start.y);
      this._ex.__ctx.lineTo(this._ex.snapToPixel ? ~~(end.x + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : end.x, this._ex.snapToPixel ? ~~(end.y + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : end.y);
      this._ex.__ctx.lineWidth = 2;
      this._ex.__ctx.stroke();
      this._ex.__ctx.closePath();
      this._ex.__ctx.restore();
    }
    drawPoint(point2, pointOptions = { color: Color.Black, size: 5 }) {
      this._ex.__ctx.save();
      this._ex.__ctx.beginPath();
      this._ex.__ctx.fillStyle = pointOptions.color.toString();
      this._ex.__ctx.arc(this._ex.snapToPixel ? ~~(point2.x + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : point2.x, this._ex.snapToPixel ? ~~(point2.y + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : point2.y, pointOptions.size, 0, Math.PI * 2);
      this._ex.__ctx.fill();
      this._ex.__ctx.closePath();
      this._ex.__ctx.restore();
    }
    drawText(text, pos) {
      this._debugText.write(this._ex, text, pos);
    }
  }

  class ExcaliburGraphicsContext2DCanvas {
    get width() {
      return this.__ctx.canvas.width;
    }
    get height() {
      return this.__ctx.canvas.height;
    }
    get opacity() {
      return this._state.current.opacity;
    }
    set opacity(value) {
      this._state.current.opacity = value;
    }
    get tint() {
      return this._state.current.tint;
    }
    set tint(color) {
      this._state.current.tint = color;
    }
    get smoothing() {
      return this.__ctx.imageSmoothingEnabled;
    }
    set smoothing(value) {
      this.__ctx.imageSmoothingEnabled = value;
    }
    constructor(options) {
      this.useDrawSorting = false;
      this.z = 0;
      this.backgroundColor = Color.ExcaliburBlue;
      this._state = new StateStack;
      this.snapToPixel = false;
      this.debug = new ExcaliburGraphicsContext2DCanvasDebug(this);
      const { canvasElement, enableTransparency, snapToPixel, smoothing, backgroundColor } = options;
      this.__ctx = canvasElement.getContext("2d", {
        alpha: enableTransparency !== null && enableTransparency !== undefined ? enableTransparency : true
      });
      this.backgroundColor = backgroundColor !== null && backgroundColor !== undefined ? backgroundColor : this.backgroundColor;
      this.snapToPixel = snapToPixel !== null && snapToPixel !== undefined ? snapToPixel : this.snapToPixel;
      this.smoothing = smoothing !== null && smoothing !== undefined ? smoothing : this.smoothing;
    }
    resetTransform() {
      this.__ctx.resetTransform();
    }
    updateViewport(_resolution) {
    }
    drawImage(image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight) {
      if (swidth === 0 || sheight === 0) {
        return;
      } else if (dwidth === 0 || dheight === 0) {
        return;
      } else if (image.width === 0 || image.height === 0) {
        return;
      }
      this.__ctx.globalAlpha = this.opacity;
      const args = [image, sx, sy, swidth, sheight, dx, dy, dwidth, dheight].filter((a) => a !== undefined).map((a) => typeof a === "number" && this.snapToPixel ? ~~a : a);
      this.__ctx.drawImage.apply(this.__ctx, args);
      GraphicsDiagnostics.DrawCallCount++;
      GraphicsDiagnostics.DrawnImagesCount = 1;
    }
    drawLine(start, end, color, thickness = 1) {
      this.__ctx.save();
      this.__ctx.beginPath();
      this.__ctx.strokeStyle = color.toString();
      this.__ctx.moveTo(this.snapToPixel ? ~~(start.x + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : start.x, this.snapToPixel ? ~~(start.y + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : start.y);
      this.__ctx.lineTo(this.snapToPixel ? ~~(end.x + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : end.x, this.snapToPixel ? ~~(end.y + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : end.y);
      this.__ctx.lineWidth = thickness;
      this.__ctx.stroke();
      this.__ctx.closePath();
      this.__ctx.restore();
    }
    drawRectangle(pos, width, height, color) {
      this.__ctx.save();
      this.__ctx.fillStyle = color.toString();
      this.__ctx.fillRect(this.snapToPixel ? ~~(pos.x + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : pos.x, this.snapToPixel ? ~~(pos.y + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : pos.y, this.snapToPixel ? ~~(width + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : width, this.snapToPixel ? ~~(height + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : height);
      this.__ctx.restore();
    }
    drawCircle(pos, radius, color, stroke, thickness) {
      this.__ctx.save();
      this.__ctx.beginPath();
      if (stroke) {
        this.__ctx.strokeStyle = stroke.toString();
      }
      if (thickness) {
        this.__ctx.lineWidth = thickness;
      }
      this.__ctx.fillStyle = color.toString();
      this.__ctx.arc(this.snapToPixel ? ~~(pos.x + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : pos.x, this.snapToPixel ? ~~(pos.y + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : pos.y, radius, 0, Math.PI * 2);
      this.__ctx.fill();
      if (stroke) {
        this.__ctx.stroke();
      }
      this.__ctx.closePath();
      this.__ctx.restore();
    }
    save() {
      this.__ctx.save();
      this._state.save();
    }
    restore() {
      this.__ctx.restore();
      this._state.restore();
    }
    translate(x, y) {
      this.__ctx.translate(this.snapToPixel ? ~~(x + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : x, this.snapToPixel ? ~~(y + ExcaliburGraphicsContext2DCanvas_pixelSnapEpsilon) : y);
    }
    rotate(angle) {
      this.__ctx.rotate(angle);
    }
    scale(x, y) {
      this.__ctx.scale(x, y);
    }
    getTransform() {
      throw new Error("Not implemented");
    }
    multiply(_m) {
      this.__ctx.setTransform(this.__ctx.getTransform().multiply(_m.toDOMMatrix()));
    }
    addPostProcessor(_postprocessor) {
    }
    removePostProcessor(_postprocessor) {
    }
    clearPostProcessors() {
    }
    updatePostProcessors(delta) {
    }
    beginDrawLifecycle() {
    }
    endDrawLifecycle() {
    }
    set material(material) {
      this._state.current.material = material;
    }
    get material() {
      return this._state.current.material;
    }
    createMaterial(_options) {
      return null;
    }
    clear() {
      this.__ctx.clearRect(0, 0, this.width, this.height);
      this.__ctx.fillStyle = this.backgroundColor.toString();
      this.__ctx.fillRect(0, 0, this.width, this.height);
      GraphicsDiagnostics.clear();
    }
    flush() {
    }
  }
  var DisplayMode;
  (function(DisplayMode2) {
    DisplayMode2["Fixed"] = "Fixed";
    DisplayMode2["FitContainerAndFill"] = "FitContainerAndFill";
    DisplayMode2["FitScreenAndFill"] = "FitScreenAndFill";
    DisplayMode2["FitContainerAndZoom"] = "FitContainerAndZoom";
    DisplayMode2["FitScreenAndZoom"] = "FitScreenAndZoom";
    DisplayMode2["FitScreen"] = "FitScreen";
    DisplayMode2["FillScreen"] = "FillScreen";
    DisplayMode2["FitContainer"] = "FitContainer";
    DisplayMode2["FillContainer"] = "FillContainer";
  })(DisplayMode || (DisplayMode = {}));

  class Resolution {
    static get SVGA() {
      return { width: 800, height: 600 };
    }
    static get Standard() {
      return { width: 1920, height: 1080 };
    }
    static get Atari2600() {
      return { width: 160, height: 192 };
    }
    static get GameBoy() {
      return { width: 160, height: 144 };
    }
    static get GameBoyAdvance() {
      return { width: 240, height: 160 };
    }
    static get NintendoDS() {
      return { width: 256, height: 192 };
    }
    static get NES() {
      return { width: 256, height: 224 };
    }
    static get SNES() {
      return { width: 256, height: 244 };
    }
  }
  const ScreenEvents = {
    ScreenResize: "resize",
    PixelRatioChange: "pixelratio",
    FullScreenChange: "fullscreen"
  };

  class Screen {
    constructor(options) {
      var _a, _b, _c;
      this.events = new EventEmitter;
      this._antialiasing = true;
      this._resolutionStack = [];
      this._viewportStack = [];
      this._pixelRatioOverride = null;
      this._isFullScreen = false;
      this._isDisposed = false;
      this._logger = Logger.getInstance();
      this._fullscreenChangeHandler = () => {
        this._isFullScreen = !this._isFullScreen;
        this._logger.debug("Fullscreen Change", this._isFullScreen);
        this.events.emit("fullscreen", {
          fullscreen: this.isFullScreen
        });
      };
      this._pixelRatioChangeHandler = () => {
        this._logger.debug("Pixel Ratio Change", window.devicePixelRatio);
        this._listenForPixelRatio();
        this._devicePixelRatio = this._calculateDevicePixelRatio();
        this.applyResolutionAndViewport();
        this.events.emit("pixelratio", {
          pixelRatio: this.pixelRatio
        });
      };
      this._resizeHandler = () => {
        const parent = this.parent;
        this._logger.debug("View port resized");
        this._setResolutionAndViewportByDisplayMode(parent);
        this.applyResolutionAndViewport();
        this.events.emit("resize", {
          resolution: this.resolution,
          viewport: this.viewport
        });
      };
      this._devicePixelRatio = this._calculateDevicePixelRatio();
      this._alreadyWarned = false;
      this._contentArea = new BoundingBox;
      this.viewport = options.viewport;
      this.resolution = (_a = options.resolution) !== null && _a !== undefined ? _a : { ...this.viewport };
      this._contentResolution = this.resolution;
      this._displayMode = (_b = options.displayMode) !== null && _b !== undefined ? _b : DisplayMode.Fixed;
      this._canvas = options.canvas;
      this.graphicsContext = options.context;
      this._antialiasing = (_c = options.antialiasing) !== null && _c !== undefined ? _c : this._antialiasing;
      this._browser = options.browser;
      this._pixelRatioOverride = options.pixelRatio;
      this._applyDisplayMode();
      this._listenForPixelRatio();
      this._canvas.addEventListener("fullscreenchange", this._fullscreenChangeHandler);
      this.applyResolutionAndViewport();
    }
    _listenForPixelRatio() {
      if (this._mediaQueryList && !this._mediaQueryList.addEventListener) {
        this._mediaQueryList.removeListener(this._pixelRatioChangeHandler);
      }
      this._mediaQueryList = this._browser.window.nativeComponent.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
      if (this._mediaQueryList.addEventListener) {
        this._mediaQueryList.addEventListener("change", this._pixelRatioChangeHandler, { once: true });
      } else {
        this._mediaQueryList.addListener(this._pixelRatioChangeHandler);
      }
    }
    dispose() {
      if (!this._isDisposed) {
        this._isDisposed = true;
        this._browser.window.off("resize", this._resizeHandler);
        if (this._resizeObserver) {
          this._resizeObserver.disconnect();
        }
        this.parent.removeEventListener("resize", this._resizeHandler);
        if (this._mediaQueryList.removeEventListener) {
          this._mediaQueryList.removeEventListener("change", this._pixelRatioChangeHandler);
        } else {
          this._mediaQueryList.removeListener(this._pixelRatioChangeHandler);
        }
        this._canvas.removeEventListener("fullscreenchange", this._fullscreenChangeHandler);
      }
    }
    _calculateDevicePixelRatio() {
      if (window.devicePixelRatio < 1) {
        return 1;
      }
      const devicePixelRatio = window.devicePixelRatio || 1;
      return devicePixelRatio;
    }
    get pixelRatio() {
      if (this._pixelRatioOverride) {
        return this._pixelRatioOverride;
      }
      return this._devicePixelRatio;
    }
    get isHiDpi() {
      return this.pixelRatio !== 1;
    }
    get displayMode() {
      return this._displayMode;
    }
    get canvas() {
      return this._canvas;
    }
    get parent() {
      switch (this.displayMode) {
        case DisplayMode.FillContainer:
        case DisplayMode.FitContainer:
        case DisplayMode.FitContainerAndFill:
        case DisplayMode.FitContainerAndZoom:
          return this.canvas.parentElement || document.body;
        default:
          return window;
      }
    }
    get resolution() {
      return this._resolution;
    }
    set resolution(resolution) {
      this._resolution = resolution;
    }
    get viewport() {
      if (this._viewport) {
        return this._viewport;
      }
      return this._resolution;
    }
    set viewport(viewport) {
      this._viewport = viewport;
    }
    get aspectRatio() {
      return this._resolution.width / this._resolution.height;
    }
    get scaledWidth() {
      return this._resolution.width * this.pixelRatio;
    }
    get scaledHeight() {
      return this._resolution.height * this.pixelRatio;
    }
    setCurrentCamera(camera) {
      this._camera = camera;
    }
    pushResolutionAndViewport() {
      this._resolutionStack.push(this.resolution);
      this._viewportStack.push(this.viewport);
      this.resolution = { ...this.resolution };
      this.viewport = { ...this.viewport };
    }
    peekViewport() {
      return this._viewportStack[this._viewportStack.length - 1];
    }
    peekResolution() {
      return this._resolutionStack[this._resolutionStack.length - 1];
    }
    popResolutionAndViewport() {
      if (this._resolutionStack.length && this._viewportStack.length) {
        this.resolution = this._resolutionStack.pop();
        this.viewport = this._viewportStack.pop();
      }
    }
    applyResolutionAndViewport() {
      this._canvas.width = this.scaledWidth;
      this._canvas.height = this.scaledHeight;
      if (this.graphicsContext instanceof ExcaliburGraphicsContextWebGL) {
        const supported = this.graphicsContext.checkIfResolutionSupported({
          width: this.scaledWidth,
          height: this.scaledHeight
        });
        if (!supported && !this._alreadyWarned) {
          this._alreadyWarned = true;
          this._logger.warn(`The currently configured resolution (${this.resolution.width}x${this.resolution.height}) and pixel ratio (${this.pixelRatio})` + " are too large for the platform WebGL implementation, this may work but cause WebGL rendering to behave oddly. Try reducing the resolution or disabling Hi DPI scaling to avoid this (read more here https://excaliburjs.com/docs/screens#understanding-viewport--resolution).");
        }
      }
      if (this._antialiasing) {
        this._canvas.style.imageRendering = "auto";
      } else {
        this._canvas.style.imageRendering = "pixelated";
        if (this._canvas.style.imageRendering === "") {
          this._canvas.style.imageRendering = "crisp-edges";
        }
      }
      this._canvas.style.width = this.viewport.width + "px";
      this._canvas.style.height = this.viewport.height + "px";
      this.graphicsContext.updateViewport(this.resolution);
      this.graphicsContext.resetTransform();
      this.graphicsContext.smoothing = this._antialiasing;
      if (this.graphicsContext instanceof ExcaliburGraphicsContext2DCanvas) {
        this.graphicsContext.scale(this.pixelRatio, this.pixelRatio);
      }
    }
    get antialiasing() {
      return this._antialiasing;
    }
    set antialiasing(isSmooth) {
      this._antialiasing = isSmooth;
      this.graphicsContext.smoothing = this._antialiasing;
    }
    get isFullScreen() {
      return this._isFullScreen;
    }
    goFullScreen(elementId) {
      if (elementId) {
        const maybeElement = document.getElementById(elementId);
        if (maybeElement) {
          if (!maybeElement.getAttribute("ex-fullscreen-listener")) {
            maybeElement.setAttribute("ex-fullscreen-listener", "true");
            maybeElement.addEventListener("fullscreenchange", this._fullscreenChangeHandler);
          }
          const fullscreenPromise = maybeElement.requestFullscreen();
          return fullscreenPromise;
        }
      }
      return this._canvas.requestFullscreen();
    }
    exitFullScreen() {
      return document.exitFullscreen();
    }
    pageToScreenCoordinates(point2) {
      let newX = point2.x;
      let newY = point2.y;
      if (!this._isFullScreen) {
        newX -= getPosition(this._canvas).x;
        newY -= getPosition(this._canvas).y;
      }
      if (this._isFullScreen) {
        if (window.innerWidth / this.aspectRatio < window.innerHeight) {
          const screenHeight = window.innerWidth / this.aspectRatio;
          const screenMarginY = (window.innerHeight - screenHeight) / 2;
          newY = (newY - screenMarginY) / screenHeight * this.viewport.height;
          newX = newX / window.innerWidth * this.viewport.width;
        } else {
          const screenWidth = window.innerHeight * this.aspectRatio;
          const screenMarginX = (window.innerWidth - screenWidth) / 2;
          newX = (newX - screenMarginX) / screenWidth * this.viewport.width;
          newY = newY / window.innerHeight * this.viewport.height;
        }
      }
      newX = newX / this.viewport.width * this.resolution.width;
      newY = newY / this.viewport.height * this.resolution.height;
      return new Vector(newX, newY);
    }
    screenToPageCoordinates(point2) {
      let newX = point2.x;
      let newY = point2.y;
      newX = newX / this.resolution.width * this.viewport.width;
      newY = newY / this.resolution.height * this.viewport.height;
      if (this._isFullScreen) {
        if (window.innerWidth / this.aspectRatio < window.innerHeight) {
          const screenHeight = window.innerWidth / this.aspectRatio;
          const screenMarginY = (window.innerHeight - screenHeight) / 2;
          newY = newY / this.viewport.height * screenHeight + screenMarginY;
          newX = newX / this.viewport.width * window.innerWidth;
        } else {
          const screenWidth = window.innerHeight * this.aspectRatio;
          const screenMarginX = (window.innerWidth - screenWidth) / 2;
          newX = newX / this.viewport.width * screenWidth + screenMarginX;
          newY = newY / this.viewport.height * window.innerHeight;
        }
      }
      if (!this._isFullScreen) {
        newX += getPosition(this._canvas).x;
        newY += getPosition(this._canvas).y;
      }
      return new Vector(newX, newY);
    }
    screenToWorldCoordinates(point2) {
      if (this._camera) {
        return this._camera.inverse.multiply(point2);
      }
      return point2.sub(vec(this.resolution.width / 2, this.resolution.height / 2));
    }
    worldToScreenCoordinates(point2) {
      if (this._camera) {
        return this._camera.transform.multiply(point2);
      }
      return point2.add(vec(this.resolution.width / 2, this.resolution.height / 2));
    }
    pageToWorldCoordinates(point2) {
      const screen = this.pageToScreenCoordinates(point2);
      return this.screenToWorldCoordinates(screen);
    }
    worldToPageCoordinates(point2) {
      const screen = this.worldToScreenCoordinates(point2);
      return this.screenToPageCoordinates(screen);
    }
    getWorldBounds() {
      const bounds = BoundingBox.fromDimension(this.resolution.width, this.resolution.height, Vector.Half).scale(vec(1 / this._camera.zoom, 1 / this._camera.zoom)).rotate(this._camera.rotation).translate(this._camera.pos);
      return bounds;
    }
    getScreenBounds() {
      const bounds = BoundingBox.fromDimension(this.resolution.width, this.resolution.height, Vector.Zero, Vector.Zero);
      return bounds;
    }
    get canvasWidth() {
      return this.canvas.width;
    }
    get halfCanvasWidth() {
      return this.canvas.width / 2;
    }
    get canvasHeight() {
      return this.canvas.height;
    }
    get halfCanvasHeight() {
      return this.canvas.height / 2;
    }
    get drawWidth() {
      if (this._camera) {
        return this.resolution.width / this._camera.zoom;
      }
      return this.resolution.width;
    }
    get halfDrawWidth() {
      return this.drawWidth / 2;
    }
    get drawHeight() {
      if (this._camera) {
        return this.resolution.height / this._camera.zoom;
      }
      return this.resolution.height;
    }
    get halfDrawHeight() {
      return this.drawHeight / 2;
    }
    get center() {
      return vec(this.halfDrawWidth, this.halfDrawHeight);
    }
    get contentArea() {
      return this._contentArea;
    }
    _computeFit() {
      document.body.style.margin = "0px";
      document.body.style.overflow = "hidden";
      const aspect = this.aspectRatio;
      let adjustedWidth = 0;
      let adjustedHeight = 0;
      if (window.innerWidth / aspect < window.innerHeight) {
        adjustedWidth = window.innerWidth;
        adjustedHeight = window.innerWidth / aspect;
      } else {
        adjustedWidth = window.innerHeight * aspect;
        adjustedHeight = window.innerHeight;
      }
      this.viewport = {
        width: adjustedWidth,
        height: adjustedHeight
      };
      this._contentArea = BoundingBox.fromDimension(this.resolution.width, this.resolution.height, Vector.Zero);
    }
    _computeFitScreenAndFill() {
      document.body.style.margin = "0px";
      document.body.style.overflow = "hidden";
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      this._computeFitAndFill(vw, vh);
    }
    _computeFitContainerAndFill() {
      document.body.style.margin = "0px";
      document.body.style.overflow = "hidden";
      const parent = this.canvas.parentElement;
      const vw = parent.clientWidth;
      const vh = parent.clientHeight;
      this._computeFitAndFill(vw, vh);
    }
    _computeFitAndFill(vw, vh) {
      this.viewport = {
        width: vw,
        height: vh
      };
      if (vw / vh <= this._contentResolution.width / this._contentResolution.height) {
        this.resolution = {
          width: vw * this._contentResolution.width / vw,
          height: vw * this._contentResolution.width / vw * vh / vw
        };
        const clip = (this.resolution.height - this._contentResolution.height) / 2;
        this._contentArea = new BoundingBox({
          top: clip,
          left: 0,
          right: this._contentResolution.width,
          bottom: this.resolution.height - clip
        });
      } else {
        this.resolution = {
          width: vh * this._contentResolution.height / vh * vw / vh,
          height: vh * this._contentResolution.height / vh
        };
        const clip = (this.resolution.width - this._contentResolution.width) / 2;
        this._contentArea = new BoundingBox({
          top: 0,
          left: clip,
          right: this.resolution.width - clip,
          bottom: this._contentResolution.height
        });
      }
    }
    _computeFitScreenAndZoom() {
      document.body.style.margin = "0px";
      document.body.style.overflow = "hidden";
      this.canvas.style.position = "absolute";
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      this._computeFitAndZoom(vw, vh);
    }
    _computeFitContainerAndZoom() {
      document.body.style.margin = "0px";
      document.body.style.overflow = "hidden";
      this.canvas.style.position = "absolute";
      const parent = this.canvas.parentElement;
      parent.style.position = "relative";
      parent.style.overflow = "hidden";
      const vw = parent.clientWidth;
      const vh = parent.clientHeight;
      this._computeFitAndZoom(vw, vh);
    }
    _computeFitAndZoom(vw, vh) {
      const aspect = this.aspectRatio;
      let adjustedWidth = 0;
      let adjustedHeight = 0;
      if (vw / aspect < vh) {
        adjustedWidth = vw;
        adjustedHeight = vw / aspect;
      } else {
        adjustedWidth = vh * aspect;
        adjustedHeight = vh;
      }
      const scaleX = vw / adjustedWidth;
      const scaleY = vh / adjustedHeight;
      const maxScaleFactor = Math.max(scaleX, scaleY);
      const zoomedWidth = adjustedWidth * maxScaleFactor;
      const zoomedHeight = adjustedHeight * maxScaleFactor;
      if (zoomedWidth > vw) {
        this.canvas.style.left = -(zoomedWidth - vw) / 2 + "px";
      } else {
        this.canvas.style.left = "";
      }
      if (zoomedHeight > vh) {
        this.canvas.style.top = -(zoomedHeight - vh) / 2 + "px";
      } else {
        this.canvas.style.top = "";
      }
      this.viewport = {
        width: zoomedWidth,
        height: zoomedHeight
      };
      const bounds = BoundingBox.fromDimension(this.viewport.width, this.viewport.height, Vector.Zero);
      if (this.viewport.width > vw) {
        const clip = (this.viewport.width - vw) / this.viewport.width * this.resolution.width;
        bounds.top = 0;
        bounds.left = clip / 2;
        bounds.right = this.resolution.width - clip / 2;
        bounds.bottom = this.resolution.height;
      }
      if (this.viewport.height > vh) {
        const clip = (this.viewport.height - vh) / this.viewport.height * this.resolution.height;
        bounds.top = clip / 2;
        bounds.left = 0;
        bounds.bottom = this.resolution.height - clip / 2;
        bounds.right = this.resolution.width;
      }
      this._contentArea = bounds;
    }
    _computeFitContainer() {
      const aspect = this.aspectRatio;
      let adjustedWidth = 0;
      let adjustedHeight = 0;
      const parent = this.canvas.parentElement;
      if (parent.clientWidth / aspect < parent.clientHeight) {
        adjustedWidth = parent.clientWidth;
        adjustedHeight = parent.clientWidth / aspect;
      } else {
        adjustedWidth = parent.clientHeight * aspect;
        adjustedHeight = parent.clientHeight;
      }
      this.viewport = {
        width: adjustedWidth,
        height: adjustedHeight
      };
      this._contentArea = BoundingBox.fromDimension(this.resolution.width, this.resolution.height, Vector.Zero);
    }
    _applyDisplayMode() {
      this._setResolutionAndViewportByDisplayMode(this.parent);
      if (this.parent instanceof Window) {
        this._browser.window.on("resize", this._resizeHandler);
      } else {
        this._resizeObserver = new ResizeObserver(() => {
          this._resizeHandler();
        });
        this._resizeObserver.observe(this.parent);
      }
      this.parent.addEventListener("resize", this._resizeHandler);
    }
    _setResolutionAndViewportByDisplayMode(parent) {
      if (this.displayMode === DisplayMode.FillContainer) {
        this.resolution = {
          width: parent.clientWidth,
          height: parent.clientHeight
        };
        this.viewport = this.resolution;
      }
      if (this.displayMode === DisplayMode.FillScreen) {
        document.body.style.margin = "0px";
        document.body.style.overflow = "hidden";
        this.resolution = {
          width: parent.innerWidth,
          height: parent.innerHeight
        };
        this.viewport = this.resolution;
      }
      this._contentArea = BoundingBox.fromDimension(this.resolution.width, this.resolution.height, Vector.Zero);
      if (this.displayMode === DisplayMode.FitScreen) {
        this._computeFit();
      }
      if (this.displayMode === DisplayMode.FitContainer) {
        this._computeFitContainer();
      }
      if (this.displayMode === DisplayMode.FitScreenAndFill) {
        this._computeFitScreenAndFill();
      }
      if (this.displayMode === DisplayMode.FitContainerAndFill) {
        this._computeFitContainerAndFill();
      }
      if (this.displayMode === DisplayMode.FitScreenAndZoom) {
        this._computeFitScreenAndZoom();
      }
      if (this.displayMode === DisplayMode.FitContainerAndZoom) {
        this._computeFitContainerAndZoom();
      }
    }
  }

  class AudioContextFactory {
    static create() {
      if (!this._INSTANCE) {
        if (window.AudioContext || window.webkitAudioContext) {
          this._INSTANCE = new AudioContext;
        }
      }
      return this._INSTANCE;
    }
  }
  AudioContextFactory._INSTANCE = null;
  function isLegacyWebAudioSource(source) {
    return !!source.playbackState;
  }

  class WebAudio {
    static unlock() {
      const promise = new Promise((resolve, reject) => {
        if (WebAudio._UNLOCKED || !AudioContextFactory.create()) {
          return resolve(true);
        }
        const unlockTimeoutTimer = setTimeout(() => {
          Logger.getInstance().warn("Excalibur was unable to unlock the audio context, audio probably will not play in this browser.");
          resolve(false);
        }, 200);
        const audioContext = AudioContextFactory.create();
        audioContext.resume().then(() => {
          const buffer = audioContext.createBuffer(1, 1, 22050);
          const source = audioContext.createBufferSource();
          let ended = false;
          source.buffer = buffer;
          source.connect(audioContext.destination);
          source.onended = () => ended = true;
          source.start(0);
          setTimeout(() => {
            if (isLegacyWebAudioSource(source)) {
              if (source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE) {
                WebAudio._UNLOCKED = true;
              }
            } else {
              if (audioContext.currentTime > 0 || ended) {
                WebAudio._UNLOCKED = true;
              }
            }
          }, 0);
          clearTimeout(unlockTimeoutTimer);
          resolve(true);
        }, () => {
          reject();
        });
      });
      return promise;
    }
    static isUnlocked() {
      return this._UNLOCKED;
    }
  }
  WebAudio._UNLOCKED = false;

  class Raster extends Graphic {
    constructor(options) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
      super(omit(options, ["width", "height"]));
      this.filtering = null;
      this.lineCap = "butt";
      this.quality = 1;
      this._dirty = true;
      this._smoothing = false;
      this._color = watch(Color.Black, () => this.flagDirty());
      this._lineWidth = 1;
      this._lineDash = [];
      this._padding = 0;
      if (options) {
        this.quality = (_a = options.quality) !== null && _a !== undefined ? _a : this.quality;
        this.color = (_b = options.color) !== null && _b !== undefined ? _b : Color.Black;
        this.strokeColor = options === null || options === undefined ? undefined : options.strokeColor;
        this.smoothing = (_c = options.smoothing) !== null && _c !== undefined ? _c : this.smoothing;
        this.lineWidth = (_d = options.lineWidth) !== null && _d !== undefined ? _d : this.lineWidth;
        this.lineDash = (_e = options.lineDash) !== null && _e !== undefined ? _e : this.lineDash;
        this.lineCap = (_f = options.lineCap) !== null && _f !== undefined ? _f : this.lineCap;
        this.padding = (_g = options.padding) !== null && _g !== undefined ? _g : this.padding;
        this.filtering = (_h = options.filtering) !== null && _h !== undefined ? _h : this.filtering;
      }
      this._bitmap = document.createElement("canvas");
      const bitmapWidth = (_j = options === null || options === undefined ? undefined : options.width) !== null && _j !== undefined ? _j : this._bitmap.width;
      const bitmapHeight = (_k = options === null || options === undefined ? undefined : options.height) !== null && _k !== undefined ? _k : this._bitmap.height;
      this.width = bitmapWidth;
      this.height = bitmapHeight;
      const maybeCtx = this._bitmap.getContext("2d");
      if (!maybeCtx) {
        throw new Error("Browser does not support 2d canvas drawing, cannot create Raster graphic");
      } else {
        this._ctx = maybeCtx;
      }
    }
    cloneRasterOptions() {
      return {
        color: this.color ? this.color.clone() : null,
        strokeColor: this.strokeColor ? this.strokeColor.clone() : null,
        smoothing: this.smoothing,
        lineWidth: this.lineWidth,
        lineDash: this.lineDash,
        lineCap: this.lineCap,
        quality: this.quality,
        padding: this.padding
      };
    }
    get dirty() {
      return this._dirty;
    }
    flagDirty() {
      this._dirty = true;
    }
    get width() {
      return Math.abs(this._getTotalWidth() * this.scale.x);
    }
    set width(value) {
      value /= Math.abs(this.scale.x);
      this._bitmap.width = value;
      this._originalWidth = value;
      this.flagDirty();
    }
    get height() {
      return Math.abs(this._getTotalHeight() * this.scale.y);
    }
    set height(value) {
      value /= Math.abs(this.scale.y);
      this._bitmap.height = value;
      this._originalHeight = value;
      this.flagDirty();
    }
    _getTotalWidth() {
      var _a;
      return (((_a = this._originalWidth) !== null && _a !== undefined ? _a : this._bitmap.width) + this.padding * 2) * 1;
    }
    _getTotalHeight() {
      var _a;
      return (((_a = this._originalHeight) !== null && _a !== undefined ? _a : this._bitmap.height) + this.padding * 2) * 1;
    }
    get localBounds() {
      return BoundingBox.fromDimension(this._getTotalWidth() * this.scale.x, this._getTotalHeight() * this.scale.y, Vector.Zero);
    }
    get smoothing() {
      return this._smoothing;
    }
    set smoothing(value) {
      this._smoothing = value;
      this.flagDirty();
    }
    get color() {
      return this._color;
    }
    set color(value) {
      this.flagDirty();
      this._color = watch(value, () => this.flagDirty());
    }
    get strokeColor() {
      return this._strokeColor;
    }
    set strokeColor(value) {
      this.flagDirty();
      this._strokeColor = watch(value, () => this.flagDirty());
    }
    get lineWidth() {
      return this._lineWidth;
    }
    set lineWidth(value) {
      this._lineWidth = value;
      this.flagDirty();
    }
    get lineDash() {
      return this._lineDash;
    }
    set lineDash(value) {
      this._lineDash = value;
      this.flagDirty();
    }
    get padding() {
      return this._padding;
    }
    set padding(value) {
      this._padding = value;
      this.flagDirty();
    }
    rasterize() {
      this._dirty = false;
      this._ctx.clearRect(0, 0, this._getTotalWidth(), this._getTotalHeight());
      this._ctx.save();
      this._applyRasterProperties(this._ctx);
      this.execute(this._ctx);
      this._ctx.restore();
    }
    _applyRasterProperties(ctx) {
      var _a, _b, _c;
      this._bitmap.width = this._getTotalWidth() * this.quality;
      this._bitmap.height = this._getTotalHeight() * this.quality;
      this._bitmap.setAttribute("filtering", this.filtering);
      this._bitmap.setAttribute("forceUpload", "true");
      ctx.scale(this.quality, this.quality);
      ctx.translate(this.padding, this.padding);
      ctx.imageSmoothingEnabled = this.smoothing;
      ctx.lineWidth = this.lineWidth;
      ctx.setLineDash((_a = this.lineDash) !== null && _a !== undefined ? _a : ctx.getLineDash());
      ctx.lineCap = this.lineCap;
      ctx.strokeStyle = (_b = this.strokeColor) === null || _b === undefined ? undefined : _b.toString();
      ctx.fillStyle = (_c = this.color) === null || _c === undefined ? undefined : _c.toString();
    }
    _drawImage(ex, x, y) {
      if (this._dirty) {
        this.rasterize();
      }
      ex.scale(1 / this.quality, 1 / this.quality);
      ex.drawImage(this._bitmap, x, y);
    }
  }

  class Canvas extends Raster {
    get ctx() {
      return this._ctx;
    }
    constructor(_options) {
      super(_options);
      this._options = _options;
    }
    clone() {
      return new Canvas({
        ...this._options,
        ...this.cloneGraphicOptions(),
        ...this.cloneRasterOptions()
      });
    }
    execute(ctx) {
      var _a, _b;
      if ((_a = this._options) === null || _a === undefined ? undefined : _a.draw) {
        (_b = this._options) === null || _b === undefined || _b.draw(ctx);
      }
      if (!this._options.cache) {
        this.flagDirty();
      }
    }
  }

  class ExResponse {
  }
  ExResponse.type = {
    any: "",
    blob: "blob",
    json: "json",
    text: "text",
    document: "document",
    arraybuffer: "arraybuffer"
  };

  class StateMachine {
    constructor() {
      this.states = new Map;
    }
    get currentState() {
      return this._currentState;
    }
    set currentState(state) {
      this._currentState = state;
    }
    static create(machineDescription, data) {
      const machine = new StateMachine;
      machine.data = data;
      for (const stateName in machineDescription.states) {
        machine.states.set(stateName, {
          name: stateName,
          ...machineDescription.states[stateName]
        });
      }
      for (const state of machine.states.values()) {
        for (const transitionState of state.transitions) {
          if (transitionState === "*") {
            continue;
          }
          if (!machine.states.has(transitionState)) {
            throw Error(`Invalid state machine, state [${state.name}] has a transition to another state that doesn't exist [${transitionState}]`);
          }
        }
      }
      machine.currentState = machine.startState = machine.states.get(machineDescription.start);
      return machine;
    }
    in(state) {
      return this.currentState.name === state;
    }
    go(stateName, eventData) {
      var _a, _b;
      if (this.currentState.transitions.includes(stateName) || this.currentState.transitions.includes("*")) {
        const potentialNewState = this.states.get(stateName);
        if (this.currentState.onExit) {
          const canExit = (_a = this.currentState) === null || _a === undefined ? undefined : _a.onExit({ to: potentialNewState.name, data: this.data });
          if (canExit === false) {
            return false;
          }
        }
        if (potentialNewState === null || potentialNewState === undefined ? undefined : potentialNewState.onEnter) {
          const canEnter = potentialNewState === null || potentialNewState === undefined ? undefined : potentialNewState.onEnter({ from: this.currentState.name, eventData, data: this.data });
          if (canEnter === false) {
            return false;
          }
        }
        this.currentState = potentialNewState;
        if ((_b = this.currentState) === null || _b === undefined ? undefined : _b.onState) {
          this.currentState.onState();
        }
        return true;
      }
      return false;
    }
    update(elapsedMs) {
      if (this.currentState.onUpdate) {
        this.currentState.onUpdate(this.data, elapsedMs);
      }
    }
    save(saveKey) {
      localStorage.setItem(saveKey, JSON.stringify({
        currentState: this.currentState.name,
        data: this.data
      }));
    }
    restore(saveKey) {
      const state = JSON.parse(localStorage.getItem(saveKey));
      this.currentState = this.states.get(state.currentState);
      this.data = state.data;
    }
  }

  class WebAudioInstance {
    _createNewBufferSource() {
      this._instance = this._audioContext.createBufferSource();
      this._instance.buffer = this._src;
      this._instance.loop = this.loop;
      this._instance.playbackRate.value = this._playbackRate;
      this._instance.connect(this._volumeNode);
      this._volumeNode.connect(this._audioContext.destination);
    }
    _handleEnd() {
      if (!this.loop) {
        this._instance.onended = () => {
          this._playingFuture.resolve(true);
        };
      }
    }
    set loop(value) {
      this._loop = value;
      if (this._instance) {
        this._instance.loop = value;
        if (!this.loop) {
          this._instance.onended = () => {
            this._playingFuture.resolve(true);
          };
        }
      }
    }
    get loop() {
      return this._loop;
    }
    set volume(value) {
      value = clamp(value, 0, 1);
      this._volume = value;
      if (this._stateMachine.in("PLAYING") && this._volumeNode.gain.setTargetAtTime) {
        this._volumeNode.gain.setTargetAtTime(value, this._audioContext.currentTime, 0.1);
      } else {
        this._volumeNode.gain.value = value;
      }
    }
    get volume() {
      return this._volume;
    }
    get duration() {
      var _a;
      return (_a = this._duration) !== null && _a !== undefined ? _a : this.getTotalPlaybackDuration();
    }
    set duration(duration) {
      this._duration = duration;
    }
    constructor(_src) {
      this._src = _src;
      this._audioContext = AudioContextFactory.create();
      this._volumeNode = this._audioContext.createGain();
      this._playingFuture = new Future;
      this._stateMachine = StateMachine.create({
        start: "STOPPED",
        states: {
          PLAYING: {
            onEnter: ({ data }) => {
              this._createNewBufferSource();
              this._handleEnd();
              if (this.loop) {
                this._instance.start(0, data.pausedAt * this._playbackRate);
              } else {
                this._instance.start(0, data.pausedAt * this._playbackRate, this.duration);
              }
              data.startedAt = this._audioContext.currentTime - data.pausedAt;
              data.pausedAt = 0;
            },
            onState: () => this._playStarted(),
            onExit: ({ to }) => {
              if (to === "STOPPED") {
                this._playingFuture.resolve(true);
              }
              this._instance.onended = null;
              this._instance.disconnect();
              this._instance.stop(0);
              this._instance = null;
            },
            transitions: ["STOPPED", "PAUSED", "SEEK"]
          },
          SEEK: {
            onEnter: ({ eventData: position, data }) => {
              data.pausedAt = (position !== null && position !== undefined ? position : 0) / this._playbackRate;
              data.startedAt = 0;
            },
            transitions: ["*"]
          },
          STOPPED: {
            onEnter: ({ data }) => {
              data.pausedAt = 0;
              data.startedAt = 0;
              this._playingFuture.resolve(true);
            },
            transitions: ["PLAYING", "PAUSED", "SEEK"]
          },
          PAUSED: {
            onEnter: ({ data }) => {
              data.pausedAt = this._audioContext.currentTime - data.startedAt;
            },
            transitions: ["PLAYING", "STOPPED", "SEEK"]
          }
        }
      }, {
        startedAt: 0,
        pausedAt: 0
      });
      this._volume = 1;
      this._loop = false;
      this._playStarted = () => {
      };
      this._playbackRate = 1;
      this._createNewBufferSource();
    }
    isPlaying() {
      return this._stateMachine.in("PLAYING");
    }
    isPaused() {
      return this._stateMachine.in("PAUSED") || this._stateMachine.in("SEEK");
    }
    isStopped() {
      return this._stateMachine.in("STOPPED");
    }
    play(playStarted = () => {
    }) {
      this._playStarted = playStarted;
      this._stateMachine.go("PLAYING");
      return this._playingFuture.promise;
    }
    pause() {
      this._stateMachine.go("PAUSED");
    }
    stop() {
      this._stateMachine.go("STOPPED");
    }
    seek(position) {
      this._stateMachine.go("PAUSED");
      this._stateMachine.go("SEEK", position);
    }
    getTotalPlaybackDuration() {
      return this._src.duration;
    }
    getPlaybackPosition() {
      const { pausedAt, startedAt } = this._stateMachine.data;
      if (pausedAt) {
        return pausedAt * this._playbackRate;
      }
      if (startedAt) {
        return (this._audioContext.currentTime - startedAt) * this._playbackRate;
      }
      return 0;
    }
    set playbackRate(playbackRate) {
      this._instance.playbackRate.value = this._playbackRate = playbackRate;
    }
    get playbackRate() {
      return this._instance.playbackRate.value;
    }
  }
  var EventTypes;
  (function(EventTypes2) {
    EventTypes2["Kill"] = "kill";
    EventTypes2["PreKill"] = "prekill";
    EventTypes2["PostKill"] = "postkill";
    EventTypes2["PreDraw"] = "predraw";
    EventTypes2["PostDraw"] = "postdraw";
    EventTypes2["PreDebugDraw"] = "predebugdraw";
    EventTypes2["PostDebugDraw"] = "postdebugdraw";
    EventTypes2["PreUpdate"] = "preupdate";
    EventTypes2["PostUpdate"] = "postupdate";
    EventTypes2["PreFrame"] = "preframe";
    EventTypes2["PostFrame"] = "postframe";
    EventTypes2["PreCollision"] = "precollision";
    EventTypes2["CollisionStart"] = "collisionstart";
    EventTypes2["CollisionEnd"] = "collisionend";
    EventTypes2["PostCollision"] = "postcollision";
    EventTypes2["Initialize"] = "initialize";
    EventTypes2["Activate"] = "activate";
    EventTypes2["Deactivate"] = "deactivate";
    EventTypes2["ExitViewport"] = "exitviewport";
    EventTypes2["EnterViewport"] = "enterviewport";
    EventTypes2["ExitTrigger"] = "exit";
    EventTypes2["EnterTrigger"] = "enter";
    EventTypes2["Connect"] = "connect";
    EventTypes2["Disconnect"] = "disconnect";
    EventTypes2["Button"] = "button";
    EventTypes2["Axis"] = "axis";
    EventTypes2["Visible"] = "visible";
    EventTypes2["Hidden"] = "hidden";
    EventTypes2["Start"] = "start";
    EventTypes2["Stop"] = "stop";
    EventTypes2["PointerUp"] = "pointerup";
    EventTypes2["PointerDown"] = "pointerdown";
    EventTypes2["PointerMove"] = "pointermove";
    EventTypes2["PointerEnter"] = "pointerenter";
    EventTypes2["PointerLeave"] = "pointerleave";
    EventTypes2["PointerCancel"] = "pointercancel";
    EventTypes2["PointerWheel"] = "pointerwheel";
    EventTypes2["Up"] = "up";
    EventTypes2["Down"] = "down";
    EventTypes2["Move"] = "move";
    EventTypes2["Enter"] = "enter";
    EventTypes2["Leave"] = "leave";
    EventTypes2["Cancel"] = "cancel";
    EventTypes2["Wheel"] = "wheel";
    EventTypes2["Press"] = "press";
    EventTypes2["Release"] = "release";
    EventTypes2["Hold"] = "hold";
    EventTypes2["PointerDragStart"] = "pointerdragstart";
    EventTypes2["PointerDragEnd"] = "pointerdragend";
    EventTypes2["PointerDragEnter"] = "pointerdragenter";
    EventTypes2["PointerDragLeave"] = "pointerdragleave";
    EventTypes2["PointerDragMove"] = "pointerdragmove";
    EventTypes2["ActionStart"] = "actionstart";
    EventTypes2["ActionComplete"] = "actioncomplete";
  })(EventTypes || (EventTypes = {}));

  class GameEvent {
    constructor() {
      this._bubbles = true;
    }
    get bubbles() {
      return this._bubbles;
    }
    set bubbles(value) {
      this._bubbles = value;
    }
    stopPropagation() {
      this.bubbles = false;
    }
  }

  class KillEvent extends GameEvent {
    constructor(target) {
      super();
      this.target = target;
    }
  }

  class PreKillEvent extends GameEvent {
    constructor(target) {
      super();
      this.target = target;
    }
  }

  class PostKillEvent extends GameEvent {
    constructor(target) {
      super();
      this.target = target;
    }
  }

  class GameStartEvent extends GameEvent {
    constructor(target) {
      super();
      this.target = target;
    }
  }

  class GameStopEvent extends GameEvent {
    constructor(target) {
      super();
      this.target = target;
    }
  }

  class PreDrawEvent extends GameEvent {
    constructor(ctx, delta, target) {
      super();
      this.ctx = ctx;
      this.delta = delta;
      this.target = target;
    }
  }

  class PostDrawEvent extends GameEvent {
    constructor(ctx, delta, target) {
      super();
      this.ctx = ctx;
      this.delta = delta;
      this.target = target;
    }
  }

  class PreTransformDrawEvent extends GameEvent {
    constructor(ctx, delta, target) {
      super();
      this.ctx = ctx;
      this.delta = delta;
      this.target = target;
    }
  }

  class PostTransformDrawEvent extends GameEvent {
    constructor(ctx, delta, target) {
      super();
      this.ctx = ctx;
      this.delta = delta;
      this.target = target;
    }
  }

  class PreDebugDrawEvent extends GameEvent {
    constructor(ctx, target) {
      super();
      this.ctx = ctx;
      this.target = target;
    }
  }

  class PostDebugDrawEvent extends GameEvent {
    constructor(ctx, target) {
      super();
      this.ctx = ctx;
      this.target = target;
    }
  }

  class PreUpdateEvent extends GameEvent {
    constructor(engine, delta, target) {
      super();
      this.engine = engine;
      this.delta = delta;
      this.target = target;
    }
  }

  class PostUpdateEvent extends GameEvent {
    constructor(engine, delta, target) {
      super();
      this.engine = engine;
      this.delta = delta;
      this.target = target;
    }
  }

  class PreFrameEvent extends GameEvent {
    constructor(engine, prevStats) {
      super();
      this.engine = engine;
      this.prevStats = prevStats;
      this.target = engine;
    }
  }

  class PostFrameEvent extends GameEvent {
    constructor(engine, stats) {
      super();
      this.engine = engine;
      this.stats = stats;
      this.target = engine;
    }
  }

  class GamepadConnectEvent extends GameEvent {
    constructor(index, gamepad) {
      super();
      this.index = index;
      this.gamepad = gamepad;
      this.target = gamepad;
    }
  }

  class GamepadDisconnectEvent extends GameEvent {
    constructor(index, gamepad) {
      super();
      this.index = index;
      this.gamepad = gamepad;
      this.target = gamepad;
    }
  }

  class GamepadButtonEvent extends GameEvent {
    constructor(button, value, target) {
      super();
      this.button = button;
      this.value = value;
      this.target = target;
    }
  }

  class GamepadAxisEvent extends GameEvent {
    constructor(axis, value, target) {
      super();
      this.axis = axis;
      this.value = value;
      this.target = target;
    }
  }

  class VisibleEvent extends GameEvent {
    constructor(target) {
      super();
      this.target = target;
    }
  }

  class HiddenEvent extends GameEvent {
    constructor(target) {
      super();
      this.target = target;
    }
  }

  class PreCollisionEvent extends GameEvent {
    constructor(actor, other, side, intersection, contact) {
      super();
      this.other = other;
      this.side = side;
      this.intersection = intersection;
      this.contact = contact;
      this.target = actor;
    }
  }

  class PostCollisionEvent extends GameEvent {
    constructor(actor, other, side, intersection, contact) {
      super();
      this.other = other;
      this.side = side;
      this.intersection = intersection;
      this.contact = contact;
      this.target = actor;
    }
    get actor() {
      return this.target;
    }
    set actor(actor) {
      this.target = actor;
    }
  }

  class ContactStartEvent {
    constructor(target, other, side, contact) {
      this.target = target;
      this.other = other;
      this.side = side;
      this.contact = contact;
    }
  }

  class ContactEndEvent {
    constructor(target, other) {
      this.target = target;
      this.other = other;
    }
  }

  class CollisionPreSolveEvent {
    constructor(target, other, side, intersection, contact) {
      this.target = target;
      this.other = other;
      this.side = side;
      this.intersection = intersection;
      this.contact = contact;
    }
  }

  class CollisionPostSolveEvent {
    constructor(target, other, side, intersection, contact) {
      this.target = target;
      this.other = other;
      this.side = side;
      this.intersection = intersection;
      this.contact = contact;
    }
  }

  class CollisionStartEvent extends GameEvent {
    constructor(actor, other, side, contact) {
      super();
      this.other = other;
      this.side = side;
      this.contact = contact;
      this.target = actor;
    }
    get actor() {
      return this.target;
    }
    set actor(actor) {
      this.target = actor;
    }
  }

  class CollisionEndEvent extends GameEvent {
    constructor(actor, other) {
      super();
      this.other = other;
      this.target = actor;
    }
    get actor() {
      return this.target;
    }
    set actor(actor) {
      this.target = actor;
    }
  }

  class InitializeEvent extends GameEvent {
    constructor(engine, target) {
      super();
      this.engine = engine;
      this.target = target;
    }
  }

  class ActivateEvent extends GameEvent {
    constructor(context, target) {
      super();
      this.context = context;
      this.target = target;
    }
  }

  class DeactivateEvent extends GameEvent {
    constructor(context, target) {
      super();
      this.context = context;
      this.target = target;
    }
  }

  class ExitViewPortEvent extends GameEvent {
    constructor(target) {
      super();
      this.target = target;
    }
  }

  class EnterViewPortEvent extends GameEvent {
    constructor(target) {
      super();
      this.target = target;
    }
  }

  class EnterTriggerEvent extends GameEvent {
    constructor(target, actor) {
      super();
      this.target = target;
      this.actor = actor;
    }
  }

  class ExitTriggerEvent extends GameEvent {
    constructor(target, actor) {
      super();
      this.target = target;
      this.actor = actor;
    }
  }

  class ActionStartEvent extends GameEvent {
    constructor(action, target) {
      super();
      this.action = action;
      this.target = target;
    }
  }

  class ActionCompleteEvent extends GameEvent {
    constructor(action, target) {
      super();
      this.action = action;
      this.target = target;
    }
  }

  class MediaEvent extends GameEvent {
    set bubbles(_value) {
    }
    get bubbles() {
      return false;
    }
    get _path() {
      return null;
    }
    set _path(_val) {
    }
    constructor(target, _name = "MediaEvent") {
      super();
      this.target = target;
      this._name = _name;
    }
    stopPropagation() {
    }
    action() {
    }
    propagate() {
    }
    layPath(_actor) {
    }
  }

  class NativeSoundEvent extends MediaEvent {
    constructor(target, track) {
      super(target, "NativeSoundEvent");
      this.track = track;
    }
  }

  class NativeSoundProcessedEvent extends MediaEvent {
    constructor(target, _processedData) {
      super(target, "NativeSoundProcessedEvent");
      this._processedData = _processedData;
      this.data = this._processedData;
    }
  }
  function canPlayFile(file) {
    try {
      const a = new Audio;
      const filetype = /.*\.([A-Za-z0-9]+)(?:(?:\?|\#).*)*$/;
      const type = file.match(filetype)[1];
      if (a.canPlayType("audio/" + type)) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      Logger.getInstance().warn("Cannot determine audio support, assuming no support for the Audio Tag", e);
      return false;
    }
  }
  const SoundEvents = {
    VolumeChange: "volumechange",
    Processed: "processed",
    Pause: "pause",
    Stop: "stop",
    PlaybackEnd: "playbackend",
    Resume: "resume",
    PlaybackStart: "playbackstart"
  };

  class Sound {
    set loop(value) {
      this._loop = value;
      for (const track of this._tracks) {
        track.loop = this._loop;
      }
      this.logger.debug("Set loop for all instances of sound", this.path, "to", this._loop);
    }
    get loop() {
      return this._loop;
    }
    set volume(value) {
      this._volume = value;
      for (const track of this._tracks) {
        track.volume = this._volume;
      }
      this.events.emit("volumechange", new NativeSoundEvent(this));
      this.logger.debug("Set loop for all instances of sound", this.path, "to", this._volume);
    }
    get volume() {
      return this._volume;
    }
    get duration() {
      return this._duration;
    }
    set duration(duration) {
      this._duration = duration;
    }
    get instances() {
      return this._tracks;
    }
    get path() {
      return this._resource.path;
    }
    set path(val) {
      this._resource.path = val;
    }
    get bustCache() {
      return this._resource.bustCache;
    }
    set bustCache(val) {
      this._resource.bustCache = val;
    }
    constructor(...paths) {
      this.events = new EventEmitter;
      this.logger = Logger.getInstance();
      this._loop = false;
      this._volume = 1;
      this._isStopped = false;
      this._tracks = [];
      this._wasPlayingOnHidden = false;
      this._playbackRate = 1;
      this._audioContext = AudioContextFactory.create();
      this._resource = new Resource("", ExResponse.type.arraybuffer);
      for (const path of paths) {
        if (canPlayFile(path)) {
          this.path = path;
          break;
        }
      }
      if (!this.path) {
        this.logger.warn("This browser does not support any of the audio files specified:", paths.join(", "));
        this.logger.warn("Attempting to use", paths[0]);
        this.path = paths[0];
      }
    }
    isLoaded() {
      return !!this.data;
    }
    async load() {
      var _a, _b;
      if (this.data) {
        return this.data;
      }
      const arraybuffer = await this._resource.load();
      const audiobuffer = await this.decodeAudio(arraybuffer.slice(0));
      this._duration = (_b = (_a = this._duration) !== null && _a !== undefined ? _a : audiobuffer === null || audiobuffer === undefined ? undefined : audiobuffer.duration) !== null && _b !== undefined ? _b : undefined;
      this.events.emit("processed", new NativeSoundProcessedEvent(this, audiobuffer));
      return this.data = audiobuffer;
    }
    async decodeAudio(data) {
      try {
        return await this._audioContext.decodeAudioData(data.slice(0));
      } catch (e) {
        this.logger.error("Unable to decode  this browser may not fully support this format, or the file may be corrupt, if this is an mp3 try removing id3 tags and album art from the file.");
        return await Promise.reject();
      }
    }
    wireEngine(engine) {
      if (engine) {
        this._engine = engine;
        this._engine.on("hidden", () => {
          if (engine.pauseAudioWhenHidden && this.isPlaying()) {
            this._wasPlayingOnHidden = true;
            this.pause();
          }
        });
        this._engine.on("visible", () => {
          if (engine.pauseAudioWhenHidden && this._wasPlayingOnHidden) {
            this.play();
            this._wasPlayingOnHidden = false;
          }
        });
        this._engine.on("start", () => {
          this._isStopped = false;
        });
        this._engine.on("stop", () => {
          this.stop();
          this._isStopped = true;
        });
      }
    }
    instanceCount() {
      return this._tracks.length;
    }
    isPlaying() {
      return this._tracks.some((t) => t.isPlaying());
    }
    isPaused() {
      return this._tracks.some((t) => t.isPaused());
    }
    isStopped() {
      return this._tracks.some((t) => t.isStopped());
    }
    play(volume) {
      if (!this.isLoaded()) {
        this.logger.warn("Cannot start playing. Resource", this.path, "is not loaded yet");
        return Promise.resolve(true);
      }
      if (this._isStopped) {
        this.logger.warn("Cannot start playing. Engine is in a stopped state.");
        return Promise.resolve(false);
      }
      this.volume = volume || this.volume;
      if (this.isPaused()) {
        return this._resumePlayback();
      } else {
        return this._startPlayback();
      }
    }
    pause() {
      if (!this.isPlaying()) {
        return;
      }
      for (const track of this._tracks) {
        track.pause();
      }
      this.events.emit("pause", new NativeSoundEvent(this));
      this.logger.debug("Paused all instances of sound", this.path);
    }
    stop() {
      for (const track of this._tracks) {
        track.stop();
      }
      this.events.emit("stop", new NativeSoundEvent(this));
      this._tracks.length = 0;
      this.logger.debug("Stopped all instances of sound", this.path);
    }
    get playbackRate() {
      return this._playbackRate;
    }
    set playbackRate(playbackRate) {
      this._playbackRate = playbackRate;
      this._tracks.forEach((t) => {
        t.playbackRate = this._playbackRate;
      });
    }
    seek(position, trackId = 0) {
      if (this._tracks.length === 0) {
        this._getTrackInstance(this.data);
      }
      this._tracks[trackId].seek(position);
    }
    getTotalPlaybackDuration() {
      return this.data.duration;
    }
    getPlaybackPosition(trackId = 0) {
      if (this._tracks.length) {
        return this._tracks[trackId].getPlaybackPosition();
      }
      return 0;
    }
    getTrackId(track) {
      return this._tracks.indexOf(track);
    }
    async _resumePlayback() {
      if (this.isPaused) {
        const resumed = [];
        for (const track of this._tracks) {
          resumed.push(track.play().then(() => {
            this.events.emit("playbackend", new NativeSoundEvent(this, track));
            this._tracks.splice(this.getTrackId(track), 1);
            return true;
          }));
        }
        this.events.emit("resume", new NativeSoundEvent(this));
        this.logger.debug("Resuming paused instances for sound", this.path, this._tracks);
        await Promise.all(resumed);
      }
      return true;
    }
    async _startPlayback() {
      const track = this._getTrackInstance(this.data);
      const complete = await track.play(() => {
        this.events.emit("playbackstart", new NativeSoundEvent(this, track));
        this.logger.debug("Playing new instance for sound", this.path);
      });
      this.events.emit("playbackend", new NativeSoundEvent(this, track));
      const trackId = this.getTrackId(track);
      if (trackId !== -1) {
        this._tracks.splice(trackId, 1);
      }
      return complete;
    }
    _getTrackInstance(data) {
      const newTrack = new WebAudioInstance(data);
      newTrack.loop = this.loop;
      newTrack.volume = this.volume;
      newTrack.duration = this.duration;
      newTrack.playbackRate = this._playbackRate;
      this._tracks.push(newTrack);
      return newTrack;
    }
    emit(eventName, event) {
      this.events.emit(eventName, event);
    }
    on(eventName, handler) {
      return this.events.on(eventName, handler);
    }
    once(eventName, handler) {
      return this.events.once(eventName, handler);
    }
    off(eventName, handler) {
      this.events.off(eventName, handler);
    }
  }
  const LoaderEvents = {
    BeforeLoad: "beforeload",
    AfterLoad: "afterload",
    UserAction: "useraction",
    LoadResourceStart: "loadresourcestart",
    LoadResourceEnd: "loadresourceend"
  };
  function isLoaderConstructor(x) {
    var _a, _b;
    return !!(x === null || x === undefined ? undefined : x.prototype) && !!((_b = (_a = x === null || x === undefined ? undefined : x.prototype) === null || _a === undefined ? undefined : _a.constructor) === null || _b === undefined ? undefined : _b.name);
  }

  class DefaultLoader {
    get resources() {
      return this._resources;
    }
    constructor(options) {
      var _a;
      this.events = new EventEmitter;
      this.canvas = new Canvas({
        filtering: ImageFiltering.Blended,
        smoothing: true,
        cache: false,
        draw: this.onDraw.bind(this)
      });
      this._resources = [];
      this._numLoaded = 0;
      this._totalTimeMs = 0;
      this._loadingFuture = new Future;
      if (options && ((_a = options.loadables) === null || _a === undefined ? undefined : _a.length)) {
        this.addResources(options.loadables);
      }
    }
    onInitialize(engine) {
      this.engine = engine;
      this.canvas.width = this.engine.screen.canvasWidth;
      this.canvas.height = this.engine.screen.canvasHeight;
    }
    async onUserAction() {
      return await Promise.resolve();
    }
    async onBeforeLoad() {
    }
    async onAfterLoad() {
      await delay(500, this.engine.clock);
    }
    addResource(loadable) {
      this._resources.push(loadable);
    }
    addResources(loadables) {
      let i = 0;
      const len = loadables.length;
      for (i;i < len; i++) {
        this.addResource(loadables[i]);
      }
    }
    markResourceComplete() {
      this._numLoaded++;
    }
    get progress() {
      const total = this._resources.length;
      return total > 0 ? clamp(this._numLoaded, 0, total) / total : 1;
    }
    isLoaded() {
      return this._numLoaded === this._resources.length;
    }
    onUpdate(engine, elapsedMilliseconds) {
      this._totalTimeMs += elapsedMilliseconds;
    }
    onDraw(ctx) {
      const seconds = this._totalTimeMs / 1000;
      ctx.fillStyle = Color.Black.toRGBA();
      ctx.fillRect(0, 0, this.engine.screen.drawWidth, this.engine.screen.drawHeight);
      ctx.save();
      ctx.translate(this.engine.screen.center.x, this.engine.screen.center.y);
      const speed = seconds * 10;
      ctx.strokeStyle = "white";
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.arc(0, 0, 40, speed, speed + Math.PI * 3 / 2);
      ctx.stroke();
      ctx.fillStyle = "white";
      ctx.font = "16px sans-serif";
      const text = (this.progress * 100).toFixed(0) + "%";
      const textbox = ctx.measureText(text);
      const width = Math.abs(textbox.actualBoundingBoxLeft) + Math.abs(textbox.actualBoundingBoxRight);
      const height = Math.abs(textbox.actualBoundingBoxAscent) + Math.abs(textbox.actualBoundingBoxDescent);
      ctx.fillText(text, -width / 2, height / 2);
      ctx.restore();
    }
    areResourcesLoaded() {
      return this._loadingFuture.promise;
    }
    async load() {
      await this.onBeforeLoad();
      this.events.emit("beforeload");
      this.canvas.flagDirty();
      await Promise.all(this._resources.map(async (r) => {
        this.events.emit("loadresourcestart", r);
        await r.load().finally(() => {
          this._numLoaded++;
          this.canvas.flagDirty();
          this.events.emit("loadresourceend", r);
        });
      }));
      for (const resource of this._resources) {
        if (resource instanceof Sound) {
          resource.wireEngine(this.engine);
        }
      }
      this._loadingFuture.resolve();
      this.canvas.flagDirty();
      await this.onUserAction();
      this.events.emit("useraction");
      await WebAudio.unlock();
      await this.onAfterLoad();
      this.events.emit("afterload");
      return this.data = this._resources;
    }
    emit(eventName, event) {
      this.events.emit(eventName, event);
    }
    on(eventName, handler) {
      return this.events.on(eventName, handler);
    }
    once(eventName, handler) {
      return this.events.once(eventName, handler);
    }
    off(eventName, handler) {
      this.events.off(eventName, handler);
    }
  }
  function line(ctx, color = Color.Red, x1, y1, x2, y2, thickness = 1, cap = "butt") {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = thickness;
    ctx.lineCap = cap;
    ctx.strokeStyle = color.toString();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
  function point(ctx, color = Color.Red, point2) {
    ctx.beginPath();
    ctx.strokeStyle = color.toString();
    ctx.arc(point2.x, point2.y, 5, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
  }
  function vector(ctx, color, origin, vector2, scale = 1) {
    const c = color ? color.toString() : "blue";
    const v = vector2.scale(scale);
    ctx.beginPath();
    ctx.strokeStyle = c;
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(origin.x + v.x, origin.y + v.y);
    ctx.closePath();
    ctx.stroke();
  }
  function roundRect(ctx, x, y, width, height, radius = 5, stroke = Color.White, fill = null) {
    let br;
    if (typeof radius === "number") {
      br = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
      const defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
      for (const prop in defaultRadius) {
        if (defaultRadius.hasOwnProperty(prop)) {
          const side = prop;
          br[side] = radius[side] || defaultRadius[side];
        }
      }
    }
    ctx.beginPath();
    ctx.moveTo(x + br.tl, y);
    ctx.lineTo(x + width - br.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + br.tr);
    ctx.lineTo(x + width, y + height - br.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - br.br, y + height);
    ctx.lineTo(x + br.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - br.bl);
    ctx.lineTo(x, y + br.tl);
    ctx.quadraticCurveTo(x, y, x + br.tl, y);
    ctx.closePath();
    if (fill) {
      ctx.fillStyle = fill.toString();
      ctx.fill();
    }
    if (stroke) {
      ctx.strokeStyle = stroke.toString();
      ctx.stroke();
    }
  }
  function circle(ctx, x, y, radius, stroke = Color.White, fill = null) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    if (fill) {
      ctx.fillStyle = fill.toString();
      ctx.fill();
    }
    if (stroke) {
      ctx.strokeStyle = stroke.toString();
      ctx.stroke();
    }
  }
  const Loader_logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdQAAAB2CAYAAABxhGI9AAAACXBIWXMAAAsSAAALEgHS3X78AAAKnUlEQVR42u3dP2wjSx0H8N8hJIonIRmJjsq0SBR+BQ1dcqKhe0lD77SvSwpKkJKGPulpktfRIMUdEqKIqV57rpAokM4dbSiyq7ONPTP7x39ifz7SFbnEnp3xer47O7uzH15fXwMA6OYHmgAABCoACFQAEKgAgEAFAIEKAAIVAAQqACBQAUCgAoBABQCBCgAIVAAQqAAgUAFAoAIAAhUABCoACFQAEKgAgECFLbmOiNeFf2PbAyz68Pr6qhUgbRwR92v+/zwiJrYHMEKFMmcN///UtgcQqFBk1PD/97U9Qx8VCFSgu4EmAIEKAAIVAAQqACBQ4Z25jojP8eX+0WtNAgIVaOY+Im5j+eKh24h41jQgUIEyZ7F5NaPU7wCBCiwYd/w9cOB+qAlgJ3KLLow0EV198803RWvJfvfddx+0lhEqHKu5JgAjVCBvlhmFzjQRXUekHz9+TP79y8uLRjNChXfvoePvAYEKxNtj1e42/O5JoIJABcrdRMRVLM+X3kTEpaaB988cKuzWg9EobTWdMx0Oly8uN4dqhAoARqgnaN3arHfqu7OyH8ItKLVB/P+CEfMTHyGPY3npx1m8zWGDEeoBfUk/xdti57dr/r1Wv2+6EPow3tZ5rRdS72s1neuF97xvWd+XTH0/V+UMttDWqbI/r2nrxfp+jv2uSjSO7S+OXy/A/3lN+9xX5T5HxEUPZZ0tfB71+w57eJ/HFu+z+jkv1u92YX9fbI/HhX3JA9rp5MPr66tWaG9UfUGbrHIzi7cLUyYFf/tpTady03EEeL8mUJ6i7MKYNvWNqr4Pe2jradXO60LrvPAz2PQ5RPX684ah8dxD+2zantnCgVipSVV+m/tgB9W2DDq2Sx/vM95wcHhZhWVJm8yrv58cSgfTdc70+++/X/r522+/tUKSEepBqo+om4ZLPerMjUwuNnQCtx1GWJtee1FwdD5uWd86xLs8UaVt2aNEO1/saZ/Z5rYMW4zq6v34rGV9Bg3q2eZ9SkeNm9qwyUh30OPIHYFKx5FG03C7znSOqYBq+qW/zpQ3anH037TNHluG6f0WPsPhHvab4QFty7ogOeuxDYcNy2/zu2214WNYWxmBurNO8bGn97pNBOO8xy/9uCorZZ4I2r4C7aJgO7ZV9iE49Dm6NvOWx+pWE9CUq3zbdTp9doz38TbXtzqH9RT5CyWe422OaZoZGeZCabrhPQY9HjwsjpTvCg4YtlE2+Ta/j2bzn8fqrDqgm+6yUHOmAvWUjAtGhbNYvsBknDnqH1Qhc7VmxHgeb/NbudA5j/UXlYwif2p6luhAc9teu1npiHKnDs8if6tCm7JLX3NKpgttXe9ruc9mHMd7a83iwdxF5vt8tutARaCeklRnNK9C8WnNF7geJQ4T4XG3JhSnVdilQrG+yOnrlVHfsEGYzhNBn7Lu6tS7+HJafJQ4EMiNlNqWXZ9WPvVgnVYHG5M1ByDXkT6leX2EgTqJtyt45yv7S2qO3sEZjZhDLXeR+YKdJ0Zdk8QocvH9N732KrNtq+FZ/zzIHABcJrYpd+Xv14lOd5ap76SgrduW/VTQ1qcQpqnbgu4ifZvUMNpd9XuoZmvCtPaQ2Y/BCHVLgbrJTeRPDdVf6pfMKDU2fOkHmVFFfXr3MsouLsnNvV5kRoe5+s431PeuoKPqWnaurY/ZPBEeqwceN4l96iwO6H7Mjq4y7VGPVNe10VaZMzVCPVWpI/Z6FZbcv5fMqGCU+dLfFGzj58jP8+bCdJCo7yzKTwdOF0bu9Ug7V4c+yz7FJfYeGoysUss0HssIdVZwYLDujMqlESoCdTtGsZtbHnJBeNdDSJSs0jTKdMJN1HNX54Wv7bvsU9NkVJVa13dX+/wuArV0X/l5RHyo/lnfF4G6p6DrS0kHdtXhy35TGErDPYZUn2WfWqDOo/lVqdMD2O/hKJhD7S/odukymq9s02QN4EEPR/zbaOumZc+r15zK1Zqznl9jsfiemTM1QmV3HUuTkedlg9HIQzRbUD93dfC+2tpj2fIHEH2+RqCCQH13gZq7hWXTNpVu19OB1fc9nQ0AKOKUb5lU0P1kDyOneoWk0lOZ9cIP0x7qu8+2BhCoR2wYu1+e7DmaXzBSsu5vaX1ne2zrpmUPTmxf7PM1Dm4y/vC7ny7Nif7+z/9ZmtM0Z3panPLtPmra9f16bcK0Dpbnwk43Vd/RHtu6zfNQTy1QBy3aqG2g9nVmxml+BOoJyT3NpWmn9xhfFnu4bvDa+44BXhqqfdf3uUF9+yz77AT31Yue2mjecYQ62NLfgkA9ghHqLNEhNem4H1c6vdyDxhf/bpz5m4coW/c39wi6VH2bPtHlcaV9cvXts+zxCe6rTeqc2ndL7uGd93QwM9bFcAzMoZZ7SgTBbWx+asui61h/iq1+RmjqdbnQXQ3T1DNQ63V/U9ucqm/pMzPb1rePsk/1iTOjgvatR4W3Lc8ULB78pELyrnAfeTcj1NU509/86mfJ33/8+Mf00a05UyPUEw7UVCeWG/WNEiExyHRMt5ltW30izUPk18ytt7lNfc8i//DvtvXto+ySA5BjljsLUF8lPkqMPEtW1JomDsiGBZ9Byb4NAvUITSN9GuwsIj6t6UTOqk7jJREkmzqli8xIs96udSO20sX0H1vW92IL9e1a9rgqVyf91gbPsTy9UD9n9lOkT8k+RfkFR5PMNqxOcdSf32PBvg3vilO+zdxE+okx9Wm0ph36XYsRZCpMF993GOk5qvqB3Dct6jvssb67KvuUNJ3frw92bhr8/STSF0JdRPMLpUCgnsgo9S76PZ246ZFk1wWvK5m3vVoYvW1Sz7nN91jfXbQ1ZQc7TW6HeaoOalypG/8/p/rP1aNAc6ZHzSnfdqPUPhdy2PQw6Nz9gSVhuhiqueUHR3uu7y7K3rdDX4u46ZrPbUa0IFBZ0seKQ3XQTRt2vm3W/a2DbNKys++rvm3ep6+y1x2UdP3bWU9lzra47U1GmlctX/sQ23t+aOlByLTh/4NAPaCRxtcdO5HLSJ/6vNtCwGx67VPmPbvWd1q9frKHtp4kAqRJ2HR9j762JfX3bZ//elPtj13PPDx1+D5tqk/Xi6NO8SHz7MmH19dXrdBNfVFP6T2PT1UHNit87/t4m5+aRH+nQBdvqyhZDKJLfZs8h7XPsqdV2ZOV+tanKB8aln0dyxdAXbV4j4gvt4oMOrbP6vbU73NW7TMlbdTnPrWpfqXfh9HKZ9vke7KuTeZRNtXRSe6+1FV//ce/ln5eXfsXgcqXzr6+9261M3moOoa7E6nvTZTfy7iNsmfb7kjfgXGsvxe0vihsEts9HTquPpt1q1vtahu2TqAiUAEEKj0zhwoARqgAu/OnX/442WH+9xc/Wvr58re/Tr7f41/+ZsRqhAoACFQAEKgAcHjMoQJskJsz/eqrr5Z+vvr7v5fmQFevAl5lztQIFQAQqAAgUAHgIJlDBdhgdQ41N2eKESoAIFABQKACwFEwhwoARqgAIFABQKACAAIVAAQqAAhUABCoAIBABQCBCgACFQAEKgAgUAFAoAKAQAUAgQoACFQAEKgAIFABQKACAAIVAAQqAAhUABCoAIBABQCBCgACFQAQqAAgUAFAoAKAQAUAlvwPcFDns1DsH4sAAAAASUVORK5CYII=";
  var Director_Loader = __webpack_require__(7835);

  class Loader extends DefaultLoader {
    get _image() {
      if (!this._imageElement) {
        this._imageElement = new Image;
        this._imageElement.src = this.logo;
      }
      return this._imageElement;
    }
    get playButtonRootElement() {
      return this._playButtonRootElement;
    }
    get playButtonElement() {
      return this._playButtonElement;
    }
    get _playButton() {
      const existingRoot = document.getElementById("excalibur-play-root");
      if (existingRoot) {
        this._playButtonRootElement = existingRoot;
      }
      if (!this._playButtonRootElement) {
        this._playButtonRootElement = document.createElement("div");
        this._playButtonRootElement.id = "excalibur-play-root";
        this._playButtonRootElement.style.position = "absolute";
        document.body.appendChild(this._playButtonRootElement);
      }
      if (!this._styleBlock) {
        this._styleBlock = document.createElement("style");
        this._styleBlock.textContent = this._playButtonStyles;
        document.head.appendChild(this._styleBlock);
      }
      if (!this._playButtonElement) {
        this._playButtonElement = this.startButtonFactory();
        this._playButtonRootElement.appendChild(this._playButtonElement);
      }
      return this._playButtonElement;
    }
    constructor(loadables) {
      super({ loadables });
      this.events = new EventEmitter;
      this._playButtonShown = false;
      this.logo = Loader_logo;
      this.logoWidth = 468;
      this.logoHeight = 118;
      this.loadingBarColor = Color.White;
      this.backgroundColor = "#176BAA";
      this.suppressPlayButton = false;
      this._playButtonStyles = Director_Loader.Z.toString();
      this.playButtonText = "Play game";
      this.startButtonFactory = () => {
        let buttonElement = document.getElementById("excalibur-play");
        if (!buttonElement) {
          buttonElement = document.createElement("button");
        }
        buttonElement.id = "excalibur-play";
        buttonElement.textContent = this.playButtonText;
        buttonElement.style.display = "none";
        return buttonElement;
      };
    }
    onInitialize(engine) {
      this.engine = engine;
      this.screen = engine.screen;
      this.canvas.width = this.engine.canvas.width;
      this.canvas.height = this.engine.canvas.height;
    }
    async showPlayButton() {
      var _a, _b;
      if (this.suppressPlayButton) {
        this.hidePlayButton();
        await delay(500, (_a = this.engine) === null || _a === undefined ? undefined : _a.clock);
      } else {
        const resizeHandler = () => {
          this._positionPlayButton();
        };
        if ((_b = this.engine) === null || _b === undefined ? undefined : _b.browser) {
          this.engine.browser.window.on("resize", resizeHandler);
        }
        this._playButtonShown = true;
        this._playButton.style.display = "block";
        document.body.addEventListener("keyup", (evt) => {
          if (evt.key === "Enter") {
            this._playButton.click();
          }
        });
        this._positionPlayButton();
        const playButtonClicked = new Promise((resolve) => {
          const startButtonHandler = (e) => {
            var _a2;
            e.stopPropagation();
            this.hidePlayButton();
            if ((_a2 = this.engine) === null || _a2 === undefined ? undefined : _a2.browser) {
              this.engine.browser.window.off("resize", resizeHandler);
            }
            resolve();
          };
          this._playButton.addEventListener("click", startButtonHandler);
          this._playButton.addEventListener("touchend", startButtonHandler);
          this._playButton.addEventListener("pointerup", startButtonHandler);
        });
        return await playButtonClicked;
      }
    }
    hidePlayButton() {
      this._playButtonShown = false;
      this._playButton.style.display = "none";
    }
    dispose() {
      if (this._playButtonRootElement.parentElement) {
        this._playButtonRootElement.removeChild(this._playButtonElement);
        document.body.removeChild(this._playButtonRootElement);
        document.head.removeChild(this._styleBlock);
        this._playButtonRootElement = null;
        this._playButtonElement = null;
        this._styleBlock = null;
      }
    }
    async onUserAction() {
      var _a;
      await delay(200, (_a = this.engine) === null || _a === undefined ? undefined : _a.clock);
      this.canvas.flagDirty();
      await this.showPlayButton();
    }
    async onBeforeLoad() {
      var _a;
      this.screen.pushResolutionAndViewport();
      this.screen.resolution = this.screen.viewport;
      this.screen.applyResolutionAndViewport();
      this.canvas.width = this.engine.canvas.width;
      this.canvas.height = this.engine.canvas.height;
      await ((_a = this._image) === null || _a === undefined ? undefined : _a.decode());
    }
    async onAfterLoad() {
      this.screen.popResolutionAndViewport();
      this.screen.applyResolutionAndViewport();
      this.dispose();
    }
    _positionPlayButton() {
      if (this.engine) {
        const screenHeight = this.engine.screen.viewport.height;
        const screenWidth = this.engine.screen.viewport.width;
        if (this._playButtonRootElement) {
          const left = this.engine.canvas.offsetLeft;
          const top = this.engine.canvas.offsetTop;
          const buttonWidth = this._playButton.clientWidth;
          const buttonHeight = this._playButton.clientHeight;
          if (this.playButtonPosition) {
            this._playButtonRootElement.style.left = `${this.playButtonPosition.x}px`;
            this._playButtonRootElement.style.top = `${this.playButtonPosition.y}px`;
          } else {
            this._playButtonRootElement.style.left = `${left + screenWidth / 2 - buttonWidth / 2}px`;
            this._playButtonRootElement.style.top = `${top + screenHeight / 2 - buttonHeight / 2 + 100}px`;
          }
        }
      }
    }
    onDraw(ctx) {
      const canvasHeight = this.engine.canvasHeight / this.engine.pixelRatio;
      const canvasWidth = this.engine.canvasWidth / this.engine.pixelRatio;
      this._positionPlayButton();
      ctx.fillStyle = this.backgroundColor;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      let logoY = canvasHeight / 2;
      const width = Math.min(this.logoWidth, canvasWidth * 0.75);
      let logoX = canvasWidth / 2 - width / 2;
      if (this.logoPosition) {
        logoX = this.logoPosition.x;
        logoY = this.logoPosition.y;
      }
      const imageHeight = Math.floor(width * (this.logoHeight / this.logoWidth));
      const oldAntialias = this.engine.getAntialiasing();
      this.engine.setAntialiasing(true);
      if (!this.logoPosition) {
        ctx.drawImage(this._image, 0, 0, this.logoWidth, this.logoHeight, logoX, logoY - imageHeight - 20, width, imageHeight);
      } else {
        ctx.drawImage(this._image, 0, 0, this.logoWidth, this.logoHeight, logoX, logoY, width, imageHeight);
      }
      if (!this.suppressPlayButton && this._playButtonShown) {
        this.engine.setAntialiasing(oldAntialias);
        return;
      }
      let loadingX = logoX;
      let loadingY = logoY;
      if (this.loadingBarPosition) {
        loadingX = this.loadingBarPosition.x;
        loadingY = this.loadingBarPosition.y;
      }
      ctx.lineWidth = 2;
      roundRect(ctx, loadingX, loadingY, width, 20, 10, this.loadingBarColor);
      const progress = width * this.progress;
      const margin = 5;
      const progressWidth = progress - margin * 2;
      const height = 20 - margin * 2;
      roundRect(ctx, loadingX + margin, loadingY + margin, progressWidth > 10 ? progressWidth : 10, height, 5, null, this.loadingBarColor);
      this.engine.setAntialiasing(oldAntialias);
    }
  }
  const REPORTED_FEATURES = {
    webgl: "WebGL",
    webaudio: "WebAudio",
    gamepadapi: "Gamepad API"
  };

  class Detector {
    constructor() {
      this._features = null;
      this.failedTests = [];
      this._criticalTests = {
        canvasSupport: function() {
          const elem = document.createElement("canvas");
          return !!(elem.getContext && elem.getContext("2d"));
        },
        arrayBufferSupport: function() {
          const xhr = new XMLHttpRequest;
          xhr.open("GET", "/");
          try {
            xhr.responseType = "arraybuffer";
          } catch (e) {
            return false;
          }
          return xhr.responseType === "arraybuffer";
        },
        dataUrlSupport: function() {
          const canvas = document.createElement("canvas");
          return canvas.toDataURL("image/png").indexOf("data:image/png") === 0;
        },
        objectUrlSupport: function() {
          return ("URL" in window) && ("revokeObjectURL" in URL) && ("createObjectURL" in URL);
        },
        rgbaSupport: function() {
          const style = document.createElement("a").style;
          style.cssText = "background-color:rgba(150,255,150,.5)";
          return ("" + style.backgroundColor).indexOf("rgba") > -1;
        }
      };
      this._warningTest = {
        webAudioSupport: function() {
          return !!(window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext || window.oAudioContext);
        },
        webglSupport: function() {
          const elem = document.createElement("canvas");
          return !!(elem.getContext && elem.getContext("webgl"));
        }
      };
      this._features = this._loadBrowserFeatures();
    }
    getBrowserFeatures() {
      if (this._features === null) {
        this._features = this._loadBrowserFeatures();
      }
      return this._features;
    }
    logBrowserFeatures() {
      let msg = "%cSUPPORTED BROWSER FEATURES\n==========================%c\n";
      const args = ["font-weight: bold; color: navy", "font-weight: normal; color: inherit"];
      const supported = this.getBrowserFeatures();
      for (const feature of Object.keys(REPORTED_FEATURES)) {
        if (supported[feature]) {
          msg += "(%c\u2713%c)";
          args.push("font-weight: bold; color: green");
          args.push("font-weight: normal; color: inherit");
        } else {
          msg += "(%c\u2717%c)";
          args.push("font-weight: bold; color: red");
          args.push("font-weight: normal; color: inherit");
        }
        msg += " " + REPORTED_FEATURES[feature] + "\n";
      }
      args.unshift(msg);
      console.log.apply(console, args);
    }
    _loadBrowserFeatures() {
      return {
        canvas: (() => {
          return this._criticalTests.canvasSupport();
        })(),
        arraybuffer: (() => {
          return this._criticalTests.arrayBufferSupport();
        })(),
        dataurl: (() => {
          return this._criticalTests.dataUrlSupport();
        })(),
        objecturl: (() => {
          return this._criticalTests.objectUrlSupport();
        })(),
        rgba: (() => {
          return this._criticalTests.rgbaSupport();
        })(),
        webaudio: (() => {
          return this._warningTest.webAudioSupport();
        })(),
        webgl: (() => {
          return this._warningTest.webglSupport();
        })(),
        gamepadapi: (() => {
          return !!navigator.getGamepads;
        })()
      };
    }
    test() {
      let failedCritical = false;
      for (const test in this._criticalTests) {
        if (!this._criticalTests[test].call(this)) {
          this.failedTests.push(test);
          Logger.getInstance().error("Critical browser feature missing, Excalibur requires:", test);
          failedCritical = true;
        }
      }
      if (failedCritical) {
        return false;
      }
      for (const warning in this._warningTest) {
        if (!this._warningTest[warning]()) {
          Logger.getInstance().warn("Warning browser feature missing, Excalibur will have reduced performance:", warning);
        }
      }
      return true;
    }
  }
  var CollisionType;
  (function(CollisionType2) {
    CollisionType2["PreventCollision"] = "PreventCollision";
    CollisionType2["Passive"] = "Passive";
    CollisionType2["Active"] = "Active";
    CollisionType2["Fixed"] = "Fixed";
  })(CollisionType || (CollisionType = {}));
  var CollisionResolutionStrategy;
  (function(CollisionResolutionStrategy2) {
    CollisionResolutionStrategy2["Arcade"] = "arcade";
    CollisionResolutionStrategy2["Realistic"] = "realistic";
  })(CollisionResolutionStrategy || (CollisionResolutionStrategy = {}));
  var BroadphaseStrategy;
  (function(BroadphaseStrategy2) {
    BroadphaseStrategy2[BroadphaseStrategy2["DynamicAABBTree"] = 0] = "DynamicAABBTree";
  })(BroadphaseStrategy || (BroadphaseStrategy = {}));
  var Integrator;
  (function(Integrator2) {
    Integrator2[Integrator2["Euler"] = 0] = "Euler";
  })(Integrator || (Integrator = {}));

  class Physics {
    static get gravity() {
      return Physics.acc;
    }
    static set gravity(v) {
      Physics.acc = v;
    }
    static useArcadePhysics() {
      Physics.collisionResolutionStrategy = CollisionResolutionStrategy.Arcade;
    }
    static useRealisticPhysics() {
      Physics.collisionResolutionStrategy = CollisionResolutionStrategy.Realistic;
    }
  }
  Physics.acc = new Vector(0, 0);
  Physics.enabled = true;
  Physics.broadphaseStrategy = BroadphaseStrategy.DynamicAABBTree;
  Physics.collisionResolutionStrategy = CollisionResolutionStrategy.Arcade;
  Physics.defaultMass = 10;
  Physics.integrator = Integrator.Euler;
  Physics.dynamicTreeVelocityMultiplier = 2;
  Physics.boundsPadding = 5;
  Physics.positionIterations = 3;
  Physics.velocityIterations = 8;
  Physics.slop = 1;
  Physics.steeringFactor = 0.2;
  Physics.warmStart = true;
  Physics.bodiesCanSleepByDefault = false;
  Physics.surfaceEpsilon = 0.1;
  Physics.sleepEpsilon = 0.07;
  Physics.wakeThreshold = Physics.sleepEpsilon * 3;
  Physics.sleepBias = 0.9;
  Physics.checkForFastBodies = true;
  Physics.disableMinimumSpeedForFastBody = false;
  var CoordPlane;
  (function(CoordPlane2) {
    CoordPlane2["World"] = "world";
    CoordPlane2["Screen"] = "screen";
  })(CoordPlane || (CoordPlane = {}));

  class VectorView extends Vector {
    constructor(options) {
      super(0, 0);
      this._getX = options.getX;
      this._getY = options.getY;
      this._setX = options.setX;
      this._setY = options.setY;
    }
    get x() {
      return this._x = this._getX();
    }
    set x(val) {
      this._setX(val);
      this._x = val;
    }
    get y() {
      return this._y = this._getY();
    }
    set y(val) {
      this._setY(val);
      this._y = val;
    }
  }

  class WatchVector extends Vector {
    constructor(original, change) {
      super(original.x, original.y);
      this.original = original;
      this.change = change;
    }
    get x() {
      return this._x = this.original.x;
    }
    set x(newX) {
      this.change(newX, this._y);
      this._x = this.original.x = newX;
    }
    get y() {
      return this._y = this.original.y;
    }
    set y(newY) {
      this.change(this._x, newY);
      this._y = this.original.y = newY;
    }
  }

  class transform_Transform {
    constructor() {
      this._parent = null;
      this._children = [];
      this._pos = vec(0, 0);
      this._rotation = 0;
      this._scale = vec(1, 1);
      this._isDirty = false;
      this._isInverseDirty = false;
      this._matrix = AffineMatrix.identity();
      this._inverse = AffineMatrix.identity();
    }
    get parent() {
      return this._parent;
    }
    set parent(transform) {
      if (this._parent) {
        const index = this._parent._children.indexOf(this);
        if (index > -1) {
          this._parent._children.splice(index, 1);
        }
      }
      this._parent = transform;
      if (this._parent) {
        this._parent._children.push(this);
      }
      this.flagDirty();
    }
    get children() {
      return this._children;
    }
    set pos(v) {
      if (!v.equals(this._pos)) {
        this._pos.x = v.x;
        this._pos.y = v.y;
        this.flagDirty();
      }
    }
    get pos() {
      return new WatchVector(this._pos, (x, y) => {
        if (x !== this._pos.x || y !== this._pos.y) {
          this.flagDirty();
        }
      });
    }
    set globalPos(v) {
      let localPos = v.clone();
      if (this.parent) {
        localPos = this.parent.inverse.multiply(v);
      }
      if (!localPos.equals(this._pos)) {
        this._pos = localPos;
        this.flagDirty();
      }
    }
    get globalPos() {
      return new VectorView({
        getX: () => this.matrix.data[4],
        getY: () => this.matrix.data[5],
        setX: (x) => {
          if (this.parent) {
            const { x: newX } = this.parent.inverse.multiply(vec(x, this.pos.y));
            this.pos.x = newX;
          } else {
            this.pos.x = x;
          }
          if (x !== this.matrix.data[4]) {
            this.flagDirty();
          }
        },
        setY: (y) => {
          if (this.parent) {
            const { y: newY } = this.parent.inverse.multiply(vec(this.pos.x, y));
            this.pos.y = newY;
          } else {
            this.pos.y = y;
          }
          if (y !== this.matrix.data[5]) {
            this.flagDirty();
          }
        }
      });
    }
    set rotation(rotation) {
      const canonRotation = canonicalizeAngle(rotation);
      if (canonRotation !== this._rotation) {
        this.flagDirty();
      }
      this._rotation = canonRotation;
    }
    get rotation() {
      return this._rotation;
    }
    set globalRotation(rotation) {
      let inverseRotation = 0;
      if (this.parent) {
        inverseRotation = this.parent.globalRotation;
      }
      const canonRotation = canonicalizeAngle(rotation + inverseRotation);
      if (canonRotation !== this._rotation) {
        this.flagDirty();
      }
      this._rotation = canonRotation;
    }
    get globalRotation() {
      if (this.parent) {
        return this.matrix.getRotation();
      }
      return this.rotation;
    }
    set scale(v) {
      if (!v.equals(this._scale)) {
        this._scale.x = v.x;
        this._scale.y = v.y;
        this.flagDirty();
      }
    }
    get scale() {
      return new WatchVector(this._scale, (x, y) => {
        if (x !== this._scale.x || y !== this._scale.y) {
          this.flagDirty();
        }
      });
    }
    set globalScale(v) {
      let inverseScale = vec(1, 1);
      if (this.parent) {
        inverseScale = this.parent.globalScale;
      }
      this.scale = v.scale(vec(1 / inverseScale.x, 1 / inverseScale.y));
    }
    get globalScale() {
      return new VectorView({
        getX: () => this.parent ? this.matrix.getScaleX() : this.scale.x,
        getY: () => this.parent ? this.matrix.getScaleY() : this.scale.y,
        setX: (x) => {
          if (this.parent) {
            const globalScaleX = this.parent.globalScale.x;
            this.scale.x = x / globalScaleX;
          } else {
            this.scale.x = x;
          }
        },
        setY: (y) => {
          if (this.parent) {
            const globalScaleY = this.parent.globalScale.y;
            this.scale.y = y / globalScaleY;
          } else {
            this.scale.y = y;
          }
        }
      });
    }
    get matrix() {
      if (this._isDirty) {
        if (this.parent === null) {
          this._matrix = this._calculateMatrix();
        } else {
          this._matrix = this.parent.matrix.multiply(this._calculateMatrix());
        }
        this._isDirty = false;
      }
      return this._matrix;
    }
    get inverse() {
      if (this._isInverseDirty) {
        this._inverse = this.matrix.inverse();
        this._isInverseDirty = false;
      }
      return this._inverse;
    }
    _calculateMatrix() {
      const matrix = AffineMatrix.identity().translate(this.pos.x, this.pos.y).rotate(this.rotation).scale(this.scale.x, this.scale.y);
      return matrix;
    }
    flagDirty() {
      this._isDirty = true;
      this._isInverseDirty = true;
      for (let i = 0;i < this._children.length; i++) {
        this._children[i].flagDirty();
      }
    }
    apply(point2) {
      return this.matrix.multiply(point2);
    }
    applyInverse(point2) {
      return this.inverse.multiply(point2);
    }
    setTransform(pos, rotation, scale) {
      this._pos.x = pos.x;
      this._pos.y = pos.y;
      this._rotation = canonicalizeAngle(rotation);
      this._scale.x = scale.x;
      this._scale.y = scale.y;
      this.flagDirty();
    }
    clone(dest) {
      const target = dest !== null && dest !== undefined ? dest : new transform_Transform;
      this._pos.clone(target._pos);
      target._rotation = this._rotation;
      this._scale.clone(target._scale);
      target.flagDirty();
      return target;
    }
  }
  function hasClone(x) {
    return !!(x === null || x === undefined ? undefined : x.clone);
  }

  class Component {
    constructor() {
      this.owner = null;
    }
    clone() {
      const newComponent = new this.constructor;
      for (const prop in this) {
        if (this.hasOwnProperty(prop)) {
          const val = this[prop];
          if (hasClone(val) && prop !== "owner" && prop !== "clone") {
            newComponent[prop] = val.clone();
          } else {
            newComponent[prop] = val;
          }
        }
      }
      return newComponent;
    }
  }

  class TagComponent extends Component {
    constructor(type, value) {
      super();
      this.type = type;
      this.value = value;
    }
  }

  class Observable {
    constructor() {
      this.observers = [];
      this.subscriptions = [];
    }
    register(observer) {
      this.observers.push(observer);
    }
    subscribe(func) {
      this.subscriptions.push(func);
    }
    unregister(observer) {
      const i = this.observers.indexOf(observer);
      if (i !== -1) {
        this.observers.splice(i, 1);
      }
    }
    unsubscribe(func) {
      const i = this.subscriptions.indexOf(func);
      if (i !== -1) {
        this.subscriptions.splice(i, 1);
      }
    }
    notifyAll(message) {
      const observersLength = this.observers.length;
      for (let i = 0;i < observersLength; i++) {
        this.observers[i].notify(message);
      }
      const subscriptionsLength = this.subscriptions.length;
      for (let i = 0;i < subscriptionsLength; i++) {
        this.subscriptions[i](message);
      }
    }
    clear() {
      this.observers.length = 0;
      this.subscriptions.length = 0;
    }
  }

  class TransformComponent extends Component {
    constructor() {
      super(...arguments);
      this.type = "ex.transform";
      this._transform = new transform_Transform;
      this._addChildTransform = (child) => {
        const childTxComponent = child.get(TransformComponent);
        if (childTxComponent) {
          childTxComponent._transform.parent = this._transform;
        }
      };
      this.zIndexChanged$ = new Observable;
      this._z = 0;
      this.coordPlane = CoordPlane.World;
    }
    get() {
      return this._transform;
    }
    onAdd(owner) {
      for (const child of owner.children) {
        this._addChildTransform(child);
      }
      owner.childrenAdded$.subscribe((child) => this._addChildTransform(child));
      owner.childrenRemoved$.subscribe((child) => {
        const childTxComponent = child.get(TransformComponent);
        if (childTxComponent) {
          childTxComponent._transform.parent = null;
        }
      });
    }
    onRemove(_previousOwner) {
      this._transform.parent = null;
    }
    get z() {
      return this._z;
    }
    set z(val) {
      const oldz = this._z;
      this._z = val;
      if (oldz !== val) {
        this.zIndexChanged$.notifyAll(val);
      }
    }
    get pos() {
      return this._transform.pos;
    }
    set pos(v) {
      this._transform.pos = v;
    }
    get globalPos() {
      return this._transform.globalPos;
    }
    set globalPos(v) {
      this._transform.globalPos = v;
    }
    get rotation() {
      return this._transform.rotation;
    }
    set rotation(rotation) {
      this._transform.rotation = rotation;
    }
    get globalRotation() {
      return this._transform.globalRotation;
    }
    set globalRotation(rotation) {
      this._transform.globalRotation = rotation;
    }
    get scale() {
      return this._transform.scale;
    }
    set scale(v) {
      this._transform.scale = v;
    }
    get globalScale() {
      return this._transform.globalScale;
    }
    set globalScale(v) {
      this._transform.globalScale = v;
    }
    applyInverse(v) {
      return this._transform.applyInverse(v);
    }
    apply(v) {
      return this._transform.apply(v);
    }
    clone() {
      const component = new TransformComponent;
      component._transform = this._transform.clone();
      component._z = this._z;
      return component;
    }
  }

  class MotionComponent extends Component {
    constructor() {
      super(...arguments);
      this.type = "ex.motion";
      this.vel = Vector.Zero;
      this.acc = Vector.Zero;
      this.scaleFactor = Vector.Zero;
      this.angularVelocity = 0;
      this.torque = 0;
      this.inertia = 1;
    }
  }

  class CollisionGroupManager {
    static create(name, mask) {
      if (this._CURRENT_GROUP > this._MAX_GROUPS) {
        throw new Error(`Cannot have more than ${this._MAX_GROUPS} collision groups`);
      }
      if (this._GROUPS.get(name)) {
        const existingGroup = this._GROUPS.get(name);
        if (existingGroup.mask === mask) {
          return existingGroup;
        }
        throw new Error(`Collision group ${name} already exists with a different mask!`);
      }
      const group = new CollisionGroup(name, this._CURRENT_BIT, mask !== undefined ? mask : ~this._CURRENT_BIT);
      this._CURRENT_BIT = this._CURRENT_BIT << 1 | 0;
      this._CURRENT_GROUP++;
      this._GROUPS.set(name, group);
      return group;
    }
    static get groups() {
      return Array.from(this._GROUPS.values());
    }
    static groupByName(name) {
      return this._GROUPS.get(name);
    }
    static reset() {
      this._GROUPS = new Map;
      this._CURRENT_BIT = this._STARTING_BIT;
      this._CURRENT_GROUP = 1;
    }
  }
  CollisionGroupManager._STARTING_BIT = 1 | 0;
  CollisionGroupManager._MAX_GROUPS = 32;
  CollisionGroupManager._CURRENT_GROUP = 1;
  CollisionGroupManager._CURRENT_BIT = CollisionGroupManager._STARTING_BIT;
  CollisionGroupManager._GROUPS = new Map;

  class CollisionGroup {
    constructor(name, category, mask) {
      this._name = name;
      this._category = category;
      this._mask = mask;
    }
    get name() {
      return this._name;
    }
    get category() {
      return this._category;
    }
    get mask() {
      return this._mask;
    }
    canCollide(other) {
      const overlap1 = this.category & other.mask;
      const overlap2 = this.mask & other.category;
      return overlap1 !== 0 && overlap2 !== 0;
    }
    invert() {
      const group = CollisionGroupManager.create("~(" + this.name + ")", ~this.mask | 0);
      group._category = ~this.category;
      return group;
    }
    static combine(collisionGroups) {
      const combinedName = collisionGroups.map((c) => c.name).join("+");
      const combinedCategory = collisionGroups.reduce((current, g) => g.category | current, 0);
      const combinedMask = ~combinedCategory;
      return CollisionGroupManager.create(combinedName, combinedMask);
    }
    static collidesWith(collisionGroups) {
      const combinedName = `collidesWith(${collisionGroups.map((c) => c.name).join("+")})`;
      const combinedMask = collisionGroups.reduce((current, g) => g.category | current, 0);
      return CollisionGroupManager.create(combinedName, combinedMask);
    }
    toString() {
      return `
category: ${this.category.toString(2).padStart(32, "0")}
mask:     ${(this.mask >>> 0).toString(2).padStart(32, "0")}
    `;
    }
  }
  CollisionGroup.All = new CollisionGroup("Collide with all groups", -1, -1);

  class Pair {
    constructor(colliderA, colliderB) {
      this.colliderA = colliderA;
      this.colliderB = colliderB;
      this.id = null;
      this.id = Pair.calculatePairHash(colliderA.id, colliderB.id);
    }
    static canCollide(colliderA, colliderB) {
      var _a, _b;
      const bodyA = (_a = colliderA === null || colliderA === undefined ? undefined : colliderA.owner) === null || _a === undefined ? undefined : _a.get(BodyComponent);
      const bodyB = (_b = colliderB === null || colliderB === undefined ? undefined : colliderB.owner) === null || _b === undefined ? undefined : _b.get(BodyComponent);
      if (colliderA.id === colliderB.id) {
        return false;
      }
      if (colliderA.owner && colliderB.owner && colliderA.owner.id === colliderB.owner.id) {
        return false;
      }
      if (colliderA.localBounds.hasZeroDimensions() || colliderB.localBounds.hasZeroDimensions()) {
        return false;
      }
      if (!bodyA || !bodyB) {
        return false;
      }
      if (!bodyA.group.canCollide(bodyB.group)) {
        return false;
      }
      if (bodyA.collisionType === CollisionType.Fixed && bodyB.collisionType === CollisionType.Fixed) {
        return false;
      }
      if (bodyB.collisionType === CollisionType.PreventCollision || bodyA.collisionType === CollisionType.PreventCollision) {
        return false;
      }
      if (!bodyA.active || !bodyB.active) {
        return false;
      }
      return true;
    }
    get canCollide() {
      const colliderA = this.colliderA;
      const colliderB = this.colliderB;
      return Pair.canCollide(colliderA, colliderB);
    }
    collide() {
      return this.colliderA.collide(this.colliderB);
    }
    hasCollider(collider) {
      return collider === this.colliderA || collider === this.colliderB;
    }
    static calculatePairHash(idA, idB) {
      if (idA.value < idB.value) {
        return `#${idA.value}+${idB.value}`;
      } else {
        return `#${idB.value}+${idA.value}`;
      }
    }
  }

  class Projection {
    constructor(min, max) {
      this.min = min;
      this.max = max;
    }
    overlaps(projection) {
      return this.max > projection.min && projection.max > this.min;
    }
    getOverlap(projection) {
      if (this.overlaps(projection)) {
        if (this.max > projection.max) {
          return projection.max - this.min;
        } else {
          return this.max - projection.min;
        }
      }
      return 0;
    }
  }

  class TreeNode {
    constructor(parent) {
      this.parent = parent;
      this.parent = parent || null;
      this.data = null;
      this.bounds = new BoundingBox;
      this.left = null;
      this.right = null;
      this.height = 0;
    }
    isLeaf() {
      return !this.left && !this.right;
    }
  }

  class DynamicTree {
    constructor(worldBounds = new BoundingBox(-Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)) {
      this.worldBounds = worldBounds;
      this.root = null;
      this.nodes = {};
    }
    _insert(leaf) {
      if (this.root === null) {
        this.root = leaf;
        this.root.parent = null;
        return;
      }
      const leafAABB = leaf.bounds;
      let currentRoot = this.root;
      while (!currentRoot.isLeaf()) {
        const left = currentRoot.left;
        const right = currentRoot.right;
        const area = currentRoot.bounds.getPerimeter();
        const combinedAABB = currentRoot.bounds.combine(leafAABB);
        const combinedArea = combinedAABB.getPerimeter();
        const cost = 2 * combinedArea;
        const inheritanceCost = 2 * (combinedArea - area);
        let leftCost = 0;
        const leftCombined = leafAABB.combine(left.bounds);
        let newArea;
        let oldArea;
        if (left.isLeaf()) {
          leftCost = leftCombined.getPerimeter() + inheritanceCost;
        } else {
          oldArea = left.bounds.getPerimeter();
          newArea = leftCombined.getPerimeter();
          leftCost = newArea - oldArea + inheritanceCost;
        }
        let rightCost = 0;
        const rightCombined = leafAABB.combine(right.bounds);
        if (right.isLeaf()) {
          rightCost = rightCombined.getPerimeter() + inheritanceCost;
        } else {
          oldArea = right.bounds.getPerimeter();
          newArea = rightCombined.getPerimeter();
          rightCost = newArea - oldArea + inheritanceCost;
        }
        if (cost < leftCost && cost < rightCost) {
          break;
        }
        if (leftCost < rightCost) {
          currentRoot = left;
        } else {
          currentRoot = right;
        }
      }
      const oldParent = currentRoot.parent;
      const newParent = new TreeNode(oldParent);
      newParent.bounds = leafAABB.combine(currentRoot.bounds);
      newParent.height = currentRoot.height + 1;
      if (oldParent !== null) {
        if (oldParent.left === currentRoot) {
          oldParent.left = newParent;
        } else {
          oldParent.right = newParent;
        }
        newParent.left = currentRoot;
        newParent.right = leaf;
        currentRoot.parent = newParent;
        leaf.parent = newParent;
      } else {
        newParent.left = currentRoot;
        newParent.right = leaf;
        currentRoot.parent = newParent;
        leaf.parent = newParent;
        this.root = newParent;
      }
      let currentNode = leaf.parent;
      while (currentNode) {
        currentNode = this._balance(currentNode);
        if (!currentNode.left) {
          throw new Error("Parent of current leaf cannot have a null left child" + currentNode);
        }
        if (!currentNode.right) {
          throw new Error("Parent of current leaf cannot have a null right child" + currentNode);
        }
        currentNode.height = 1 + Math.max(currentNode.left.height, currentNode.right.height);
        currentNode.bounds = currentNode.left.bounds.combine(currentNode.right.bounds);
        currentNode = currentNode.parent;
      }
    }
    _remove(leaf) {
      if (leaf === this.root) {
        this.root = null;
        return;
      }
      const parent = leaf.parent;
      const grandParent = parent.parent;
      let sibling;
      if (parent.left === leaf) {
        sibling = parent.right;
      } else {
        sibling = parent.left;
      }
      if (grandParent) {
        if (grandParent.left === parent) {
          grandParent.left = sibling;
        } else {
          grandParent.right = sibling;
        }
        sibling.parent = grandParent;
        let currentNode = grandParent;
        while (currentNode) {
          currentNode = this._balance(currentNode);
          currentNode.bounds = currentNode.left.bounds.combine(currentNode.right.bounds);
          currentNode.height = 1 + Math.max(currentNode.left.height, currentNode.right.height);
          currentNode = currentNode.parent;
        }
      } else {
        this.root = sibling;
        sibling.parent = null;
      }
    }
    trackCollider(collider) {
      const node = new TreeNode;
      node.data = collider;
      node.bounds = collider.bounds;
      node.bounds.left -= 2;
      node.bounds.top -= 2;
      node.bounds.right += 2;
      node.bounds.bottom += 2;
      this.nodes[collider.id.value] = node;
      this._insert(node);
    }
    updateCollider(collider) {
      var _a;
      const node = this.nodes[collider.id.value];
      if (!node) {
        return false;
      }
      const b = collider.bounds;
      if (!this.worldBounds.contains(b)) {
        Logger.getInstance().warn("Collider with id " + collider.id.value + " is outside the world bounds and will no longer be tracked for physics");
        this.untrackCollider(collider);
        return false;
      }
      if (node.bounds.contains(b)) {
        return false;
      }
      this._remove(node);
      b.left -= Physics.boundsPadding;
      b.top -= Physics.boundsPadding;
      b.right += Physics.boundsPadding;
      b.bottom += Physics.boundsPadding;
      if (collider.owner) {
        const body = (_a = collider.owner) === null || _a === undefined ? undefined : _a.get(BodyComponent);
        if (body) {
          const multdx = body.vel.x * 32 / 1000 * Physics.dynamicTreeVelocityMultiplier;
          const multdy = body.vel.y * 32 / 1000 * Physics.dynamicTreeVelocityMultiplier;
          if (multdx < 0) {
            b.left += multdx;
          } else {
            b.right += multdx;
          }
          if (multdy < 0) {
            b.top += multdy;
          } else {
            b.bottom += multdy;
          }
        }
      }
      node.bounds = b;
      this._insert(node);
      return true;
    }
    untrackCollider(collider) {
      const node = this.nodes[collider.id.value];
      if (!node) {
        return;
      }
      this._remove(node);
      this.nodes[collider.id.value] = null;
      delete this.nodes[collider.id.value];
    }
    _balance(node) {
      if (node === null) {
        throw new Error("Cannot balance at null node");
      }
      if (node.isLeaf() || node.height < 2) {
        return node;
      }
      const left = node.left;
      const right = node.right;
      const a = node;
      const b = left;
      const c = right;
      const d = left.left;
      const e = left.right;
      const f = right.left;
      const g = right.right;
      const balance = c.height - b.height;
      if (balance > 1) {
        c.left = a;
        c.parent = a.parent;
        a.parent = c;
        if (c.parent) {
          if (c.parent.left === a) {
            c.parent.left = c;
          } else {
            c.parent.right = c;
          }
        } else {
          this.root = c;
        }
        if (f.height > g.height) {
          c.right = f;
          a.right = g;
          g.parent = a;
          a.bounds = b.bounds.combine(g.bounds);
          c.bounds = a.bounds.combine(f.bounds);
          a.height = 1 + Math.max(b.height, g.height);
          c.height = 1 + Math.max(a.height, f.height);
        } else {
          c.right = g;
          a.right = f;
          f.parent = a;
          a.bounds = b.bounds.combine(f.bounds);
          c.bounds = a.bounds.combine(g.bounds);
          a.height = 1 + Math.max(b.height, f.height);
          c.height = 1 + Math.max(a.height, g.height);
        }
        return c;
      }
      if (balance < -1) {
        b.left = a;
        b.parent = a.parent;
        a.parent = b;
        if (b.parent) {
          if (b.parent.left === a) {
            b.parent.left = b;
          } else {
            if (b.parent.right !== a) {
              throw "Error rotating Dynamic Tree";
            }
            b.parent.right = b;
          }
        } else {
          this.root = b;
        }
        if (d.height > e.height) {
          b.right = d;
          a.left = e;
          e.parent = a;
          a.bounds = c.bounds.combine(e.bounds);
          b.bounds = a.bounds.combine(d.bounds);
          a.height = 1 + Math.max(c.height, e.height);
          b.height = 1 + Math.max(a.height, d.height);
        } else {
          b.right = e;
          a.left = d;
          d.parent = a;
          a.bounds = c.bounds.combine(d.bounds);
          b.bounds = a.bounds.combine(e.bounds);
          a.height = 1 + Math.max(c.height, d.height);
          b.height = 1 + Math.max(a.height, e.height);
        }
        return b;
      }
      return node;
    }
    getHeight() {
      if (this.root === null) {
        return 0;
      }
      return this.root.height;
    }
    query(collider, callback) {
      const bounds = collider.bounds;
      const helper = (currentNode) => {
        if (currentNode && currentNode.bounds.overlaps(bounds)) {
          if (currentNode.isLeaf() && currentNode.data !== collider) {
            if (callback.call(collider, currentNode.data)) {
              return true;
            }
          } else {
            return helper(currentNode.left) || helper(currentNode.right);
          }
        }
        return false;
      };
      helper(this.root);
    }
    rayCastQuery(ray, max = Infinity, callback) {
      const helper = (currentNode) => {
        if (currentNode && currentNode.bounds.rayCast(ray, max)) {
          if (currentNode.isLeaf()) {
            if (callback.call(ray, currentNode.data)) {
              return true;
            }
          } else {
            return helper(currentNode.left) || helper(currentNode.right);
          }
        }
        return false;
      };
      helper(this.root);
    }
    getNodes() {
      const helper = (currentNode) => {
        if (currentNode) {
          return [currentNode].concat(helper(currentNode.left), helper(currentNode.right));
        } else {
          return [];
        }
      };
      return helper(this.root);
    }
    debug(ex) {
      const helper = (currentNode) => {
        if (currentNode) {
          if (currentNode.isLeaf()) {
            currentNode.bounds.draw(ex, Color.Green);
          } else {
            currentNode.bounds.draw(ex, Color.White);
          }
          if (currentNode.left) {
            helper(currentNode.left);
          }
          if (currentNode.right) {
            helper(currentNode.right);
          }
        }
      };
      helper(this.root);
    }
  }

  class Ray {
    constructor(pos, dir) {
      this.pos = pos;
      this.dir = dir.normalize();
    }
    intersect(line2) {
      const numerator = line2.begin.sub(this.pos);
      if (this.dir.cross(line2.getSlope()) === 0 && numerator.cross(this.dir) !== 0) {
        return -1;
      }
      const divisor = this.dir.cross(line2.getSlope());
      if (divisor === 0) {
        return -1;
      }
      const t = numerator.cross(line2.getSlope()) / divisor;
      if (t >= 0) {
        const u = numerator.cross(this.dir) / divisor / line2.getLength();
        if (u >= 0 && u <= 1) {
          return t;
        }
      }
      return -1;
    }
    intersectPoint(line2) {
      const time = this.intersect(line2);
      if (time < 0) {
        return null;
      }
      return this.getPoint(time);
    }
    getPoint(time) {
      return this.pos.add(this.dir.scale(time));
    }
  }

  class DynamicTreeCollisionProcessor {
    constructor() {
      this._dynamicCollisionTree = new DynamicTree;
      this._pairs = new Set;
      this._collisionPairCache = [];
      this._colliders = [];
    }
    getColliders() {
      return this._colliders;
    }
    rayCast(ray, options) {
      var _a, _b, _c;
      const results = [];
      const maxDistance = (_a = options === null || options === undefined ? undefined : options.maxDistance) !== null && _a !== undefined ? _a : Infinity;
      const collisionGroup = options === null || options === undefined ? undefined : options.collisionGroup;
      const collisionMask = !collisionGroup ? (_b = options === null || options === undefined ? undefined : options.collisionMask) !== null && _b !== undefined ? _b : CollisionGroup.All.category : collisionGroup.category;
      const searchAllColliders = (_c = options === null || options === undefined ? undefined : options.searchAllColliders) !== null && _c !== undefined ? _c : false;
      this._dynamicCollisionTree.rayCastQuery(ray, maxDistance, (collider) => {
        const owner = collider.owner;
        const maybeBody = owner.get(BodyComponent);
        const canCollide = (collisionMask & maybeBody.group.category) !== 0;
        if ((maybeBody === null || maybeBody === undefined ? undefined : maybeBody.group) && !canCollide) {
          return false;
        }
        const hit = collider.rayCast(ray, maxDistance);
        if (hit) {
          results.push({
            distance: hit.sub(ray.pos).distance(),
            point: hit,
            collider,
            body: maybeBody
          });
          if (!searchAllColliders) {
            return true;
          }
        }
        return false;
      });
      return results;
    }
    track(target) {
      if (!target) {
        Logger.getInstance().warn("Cannot track null collider");
        return;
      }
      if (target instanceof CompositeCollider) {
        const colliders = target.getColliders();
        for (const c of colliders) {
          c.owner = target.owner;
          this._colliders.push(c);
          this._dynamicCollisionTree.trackCollider(c);
        }
      } else {
        this._colliders.push(target);
        this._dynamicCollisionTree.trackCollider(target);
      }
    }
    untrack(target) {
      if (!target) {
        Logger.getInstance().warn("Cannot untrack a null collider");
        return;
      }
      if (target instanceof CompositeCollider) {
        const colliders = target.getColliders();
        for (const c of colliders) {
          const index = this._colliders.indexOf(c);
          if (index !== -1) {
            this._colliders.splice(index, 1);
          }
          this._dynamicCollisionTree.untrackCollider(c);
        }
      } else {
        const index = this._colliders.indexOf(target);
        if (index !== -1) {
          this._colliders.splice(index, 1);
        }
        this._dynamicCollisionTree.untrackCollider(target);
      }
    }
    _pairExists(colliderA, colliderB) {
      const hash = Pair.calculatePairHash(colliderA.id, colliderB.id);
      return this._pairs.has(hash);
    }
    broadphase(targets, delta, stats) {
      const seconds = delta / 1000;
      const potentialColliders = targets.filter((other) => {
        var _a, _b;
        const body = (_a = other.owner) === null || _a === undefined ? undefined : _a.get(BodyComponent);
        return ((_b = other.owner) === null || _b === undefined ? undefined : _b.active) && body.collisionType !== CollisionType.PreventCollision;
      });
      this._collisionPairCache = [];
      this._pairs.clear();
      let collider;
      for (let j = 0, l = potentialColliders.length;j < l; j++) {
        collider = potentialColliders[j];
        this._dynamicCollisionTree.query(collider, (other) => {
          if (!this._pairExists(collider, other) && Pair.canCollide(collider, other)) {
            const pair = new Pair(collider, other);
            this._pairs.add(pair.id);
            this._collisionPairCache.push(pair);
          }
          return false;
        });
      }
      if (stats) {
        stats.physics.pairs = this._collisionPairCache.length;
      }
      if (Physics.checkForFastBodies) {
        for (const collider2 of potentialColliders) {
          const body = collider2.owner.get(BodyComponent);
          if (body.collisionType !== CollisionType.Active) {
            continue;
          }
          const updateDistance = body.vel.size * seconds + body.acc.size * 0.5 * seconds * seconds;
          const minDimension = Math.min(collider2.bounds.height, collider2.bounds.width);
          if (Physics.disableMinimumSpeedForFastBody || updateDistance > minDimension / 2) {
            if (stats) {
              stats.physics.fastBodies++;
            }
            const updateVec = body.globalPos.sub(body.oldPos);
            const centerPoint = collider2.center;
            const furthestPoint = collider2.getFurthestPoint(body.vel);
            const origin = furthestPoint.sub(updateVec);
            const ray = new Ray(origin, body.vel);
            ray.pos = ray.pos.add(ray.dir.scale(-2 * Physics.surfaceEpsilon));
            let minCollider;
            let minTranslate = new Vector(Infinity, Infinity);
            this._dynamicCollisionTree.rayCastQuery(ray, updateDistance + Physics.surfaceEpsilon * 2, (other) => {
              if (!this._pairExists(collider2, other) && Pair.canCollide(collider2, other)) {
                const hitPoint = other.rayCast(ray, updateDistance + Physics.surfaceEpsilon * 10);
                if (hitPoint) {
                  const translate = hitPoint.sub(origin);
                  if (translate.size < minTranslate.size) {
                    minTranslate = translate;
                    minCollider = other;
                  }
                }
              }
              return false;
            });
            if (minCollider && Vector.isValid(minTranslate)) {
              const pair = new Pair(collider2, minCollider);
              if (!this._pairs.has(pair.id)) {
                this._pairs.add(pair.id);
                this._collisionPairCache.push(pair);
              }
              const shift = centerPoint.sub(furthestPoint);
              body.globalPos = origin.add(shift).add(minTranslate).add(ray.dir.scale(10 * Physics.surfaceEpsilon));
              collider2.update(body.transform.get());
              if (stats) {
                stats.physics.fastBodyCollisions++;
              }
            }
          }
        }
      }
      return this._collisionPairCache;
    }
    narrowphase(pairs, stats) {
      let contacts = [];
      for (let i = 0;i < pairs.length; i++) {
        const newContacts = pairs[i].collide();
        contacts = contacts.concat(newContacts);
        if (stats && newContacts.length > 0) {
          for (const c of newContacts) {
            stats.physics.contacts.set(c.id, c);
          }
        }
      }
      if (stats) {
        stats.physics.collisions += contacts.length;
      }
      return contacts;
    }
    update(targets) {
      let updated = 0;
      const len = targets.length;
      for (let i = 0;i < len; i++) {
        if (this._dynamicCollisionTree.updateCollider(targets[i])) {
          updated++;
        }
      }
      return updated;
    }
    debug(ex) {
      this._dynamicCollisionTree.debug(ex);
    }
  }

  class Collider {
    constructor() {
      this.id = createId("collider", Collider._ID++);
      this.__compositeColliderId = null;
      this.events = new EventEmitter;
      this.offset = Vector.Zero;
    }
    touching(other) {
      const contact = this.collide(other);
      if (contact) {
        return true;
      }
      return false;
    }
  }
  Collider._ID = 0;

  class CompositeCollider extends Collider {
    constructor(colliders) {
      super();
      this._collisionProcessor = new DynamicTreeCollisionProcessor;
      this._dynamicAABBTree = new DynamicTree;
      this._colliders = [];
      for (const c of colliders) {
        this.addCollider(c);
      }
    }
    clearColliders() {
      this._colliders = [];
    }
    addCollider(collider) {
      let colliders;
      if (collider instanceof CompositeCollider) {
        colliders = collider.getColliders();
        colliders.forEach((c) => c.offset.addEqual(collider.offset));
      } else {
        colliders = [collider];
      }
      for (const c of colliders) {
        c.events.pipe(this.events);
        c.__compositeColliderId = this.id;
        this._colliders.push(c);
        this._collisionProcessor.track(c);
        this._dynamicAABBTree.trackCollider(c);
      }
    }
    removeCollider(collider) {
      collider.events.pipe(this.events);
      collider.__compositeColliderId = null;
      removeItemFromArray(collider, this._colliders);
      this._collisionProcessor.untrack(collider);
      this._dynamicAABBTree.untrackCollider(collider);
    }
    getColliders() {
      return this._colliders;
    }
    get worldPos() {
      var _a, _b;
      return ((_b = (_a = this._transform) === null || _a === undefined ? undefined : _a.pos) !== null && _b !== undefined ? _b : Vector.Zero).add(this.offset);
    }
    get center() {
      var _a, _b;
      return ((_b = (_a = this._transform) === null || _a === undefined ? undefined : _a.pos) !== null && _b !== undefined ? _b : Vector.Zero).add(this.offset);
    }
    get bounds() {
      var _a, _b;
      const colliders = this.getColliders();
      const results = colliders.reduce((acc, collider) => acc.combine(collider.bounds), (_b = (_a = colliders[0]) === null || _a === undefined ? undefined : _a.bounds) !== null && _b !== undefined ? _b : new BoundingBox().translate(this.worldPos));
      return results.translate(this.offset);
    }
    get localBounds() {
      var _a, _b;
      const colliders = this.getColliders();
      const results = colliders.reduce((acc, collider) => acc.combine(collider.localBounds), (_b = (_a = colliders[0]) === null || _a === undefined ? undefined : _a.localBounds) !== null && _b !== undefined ? _b : new BoundingBox);
      return results;
    }
    get axes() {
      const colliders = this.getColliders();
      let axes = [];
      for (const collider of colliders) {
        axes = axes.concat(collider.axes);
      }
      return axes;
    }
    getFurthestPoint(direction) {
      const colliders = this.getColliders();
      const furthestPoints = [];
      for (const collider of colliders) {
        furthestPoints.push(collider.getFurthestPoint(direction));
      }
      let bestPoint = furthestPoints[0];
      let maxDistance = -Number.MAX_VALUE;
      for (const point2 of furthestPoints) {
        const distance = point2.dot(direction);
        if (distance > maxDistance) {
          bestPoint = point2;
          maxDistance = distance;
        }
      }
      return bestPoint;
    }
    getInertia(mass) {
      const colliders = this.getColliders();
      let totalInertia = 0;
      for (const collider of colliders) {
        totalInertia += collider.getInertia(mass);
      }
      return totalInertia;
    }
    collide(other) {
      let otherColliders = [other];
      if (other instanceof CompositeCollider) {
        otherColliders = other.getColliders();
      }
      const pairs = [];
      for (const c of otherColliders) {
        this._dynamicAABBTree.query(c, (potentialCollider) => {
          pairs.push(new Pair(c, potentialCollider));
          return false;
        });
      }
      let contacts = [];
      for (const p of pairs) {
        contacts = contacts.concat(p.collide());
      }
      return contacts;
    }
    getClosestLineBetween(other) {
      const colliders = this.getColliders();
      const lines = [];
      if (other instanceof CompositeCollider) {
        const otherColliders = other.getColliders();
        for (const colliderA of colliders) {
          for (const colliderB of otherColliders) {
            const maybeLine = colliderA.getClosestLineBetween(colliderB);
            if (maybeLine) {
              lines.push(maybeLine);
            }
          }
        }
      } else {
        for (const collider of colliders) {
          const maybeLine = other.getClosestLineBetween(collider);
          if (maybeLine) {
            lines.push(maybeLine);
          }
        }
      }
      if (lines.length) {
        let minLength = lines[0].getLength();
        let minLine = lines[0];
        for (const line2 of lines) {
          const length = line2.getLength();
          if (length < minLength) {
            minLength = length;
            minLine = line2;
          }
        }
        return minLine;
      }
      return null;
    }
    contains(point2) {
      const colliders = this.getColliders();
      for (const collider of colliders) {
        if (collider.contains(point2)) {
          return true;
        }
      }
      return false;
    }
    rayCast(ray, max) {
      const colliders = this.getColliders();
      const points = [];
      for (const collider of colliders) {
        const vec2 = collider.rayCast(ray, max);
        if (vec2) {
          points.push(vec2);
        }
      }
      if (points.length) {
        let minPoint = points[0];
        let minDistance = minPoint.dot(ray.dir);
        for (const point2 of points) {
          const distance = ray.dir.dot(point2);
          if (distance < minDistance) {
            minPoint = point2;
            minDistance = distance;
          }
        }
        return minPoint;
      }
      return null;
    }
    project(axis) {
      const colliders = this.getColliders();
      const projs = [];
      for (const collider of colliders) {
        const proj = collider.project(axis);
        if (proj) {
          projs.push(proj);
        }
      }
      if (projs.length) {
        const newProjection = new Projection(projs[0].min, projs[0].max);
        for (const proj of projs) {
          newProjection.min = Math.min(proj.min, newProjection.min);
          newProjection.max = Math.max(proj.max, newProjection.max);
        }
        return newProjection;
      }
      return null;
    }
    update(transform) {
      if (transform) {
        const colliders = this.getColliders();
        for (const collider of colliders) {
          collider.owner = this.owner;
          collider.update(transform);
        }
      }
    }
    debug(ex, color, options) {
      const colliders = this.getColliders();
      ex.save();
      ex.translate(this.offset.x, this.offset.y);
      for (const collider of colliders) {
        collider.debug(ex, color, options);
      }
      ex.restore();
    }
    clone() {
      const result = new CompositeCollider(this._colliders.map((c) => c.clone()));
      result.offset = this.offset.clone();
      return result;
    }
  }

  class LineSegment {
    constructor(begin, end) {
      this.begin = begin;
      this.end = end;
    }
    get slope() {
      return (this.end.y - this.begin.y) / (this.end.x - this.begin.x);
    }
    get intercept() {
      return this.begin.y - this.slope * this.begin.x;
    }
    normal() {
      if (this._normal) {
        return this._normal;
      }
      return this._normal = this.end.sub(this.begin).normal();
    }
    dir() {
      if (this._dir) {
        return this._dir;
      }
      return this._dir = this.end.sub(this.begin);
    }
    getPoints() {
      return [this.begin, this.end];
    }
    getSlope() {
      if (this._slope) {
        return this._slope;
      }
      const begin = this.begin;
      const end = this.end;
      const distance = begin.distance(end);
      return this._slope = end.sub(begin).scale(1 / distance);
    }
    getEdge() {
      const begin = this.begin;
      const end = this.end;
      return end.sub(begin);
    }
    getLength() {
      if (this._length) {
        return this._length;
      }
      const begin = this.begin;
      const end = this.end;
      const distance = begin.distance(end);
      return this._length = distance;
    }
    get midpoint() {
      return this.begin.add(this.end).scale(0.5);
    }
    flip() {
      return new LineSegment(this.end, this.begin);
    }
    below(point2) {
      const above2 = (this.end.x - this.begin.x) * (point2.y - this.begin.y) - (this.end.y - this.begin.y) * (point2.x - this.begin.x);
      return above2 >= 0;
    }
    clip(sideVector, length) {
      let dir = sideVector;
      dir = dir.normalize();
      const near = dir.dot(this.begin) - length;
      const far = dir.dot(this.end) - length;
      const results = [];
      if (near <= 0) {
        results.push(this.begin);
      }
      if (far <= 0) {
        results.push(this.end);
      }
      if (near * far < 0) {
        const clipTime = near / (near - far);
        results.push(this.begin.add(this.end.sub(this.begin).scale(clipTime)));
      }
      if (results.length !== 2) {
        return null;
      }
      return new LineSegment(results[0], results[1]);
    }
    distanceToPoint(point2, signed = false) {
      const x0 = point2.x;
      const y0 = point2.y;
      const l = this.getLength();
      const dy = this.end.y - this.begin.y;
      const dx = this.end.x - this.begin.x;
      const distance = (dy * x0 - dx * y0 + this.end.x * this.begin.y - this.end.y * this.begin.x) / l;
      return signed ? distance : Math.abs(distance);
    }
    findVectorToPoint(point2) {
      const aMinusP = this.begin.sub(point2);
      const n = this.getSlope();
      return aMinusP.sub(n.scale(aMinusP.dot(n)));
    }
    findPoint(x = null, y = null) {
      const m = this.slope;
      const b = this.intercept;
      if (x !== null) {
        return new Vector(x, m * x + b);
      } else if (y !== null) {
        return new Vector((y - b) / m, y);
      } else {
        throw new Error("You must provide an X or a Y value");
      }
    }
    hasPoint() {
      let currPoint;
      let threshold = 0;
      if (typeof arguments[0] === "number" && typeof arguments[1] === "number") {
        currPoint = new Vector(arguments[0], arguments[1]);
        threshold = arguments[2] || 0;
      } else if (arguments[0] instanceof Vector) {
        currPoint = arguments[0];
        threshold = arguments[1] || 0;
      } else {
        throw "Could not determine the arguments for Vector.hasPoint";
      }
      const dxc = currPoint.x - this.begin.x;
      const dyc = currPoint.y - this.begin.y;
      const dx1 = this.end.x - this.begin.x;
      const dy1 = this.end.y - this.begin.y;
      const cross = dxc * dy1 - dyc * dx1;
      if (Math.abs(cross) > threshold) {
        return false;
      }
      if (Math.abs(dx1) >= Math.abs(dy1)) {
        return dx1 > 0 ? this.begin.x <= currPoint.x && currPoint.x <= this.end.x : this.end.x <= currPoint.x && currPoint.x <= this.begin.x;
      } else {
        return dy1 > 0 ? this.begin.y <= currPoint.y && currPoint.y <= this.end.y : this.end.y <= currPoint.y && currPoint.y <= this.begin.y;
      }
    }
  }
  function ClosestLine(p0, u, q0, v) {
    const w0 = p0.sub(q0);
    const a = u.dot(u);
    const b = u.dot(v);
    const c = v.dot(v);
    const d = u.dot(w0);
    const e = v.dot(w0);
    const denom = a * c - b * b;
    let sDenom = denom;
    let tDenom = denom;
    if (denom === 0 || denom <= 0.01) {
      const tClosestParallel = d / b;
      return new LineSegment(p0, q0.add(v.scale(tClosestParallel)));
    }
    let sClosest = b * e - c * d;
    let tClosest = a * e - b * d;
    if (sClosest < 0) {
      sClosest = 0;
      tClosest = e;
      tDenom = c;
    } else if (sClosest > sDenom) {
      sClosest = sDenom;
      tClosest = e + b;
      tDenom = c;
    }
    if (tClosest < 0) {
      tClosest = 0;
      if (-d < 0) {
        sClosest = 0;
      } else if (-d > a) {
        sClosest = sDenom;
      } else {
        sClosest = -d;
        sDenom = a;
      }
    } else if (tClosest > tDenom) {
      tClosest = tDenom;
      if (-d + b < 0) {
        sClosest = 0;
      } else if (-d + b > a) {
        sClosest = sDenom;
      } else {
        sClosest = -d + b;
        sDenom = a;
      }
    }
    sClosest = Math.abs(sClosest) < 0.001 ? 0 : sClosest / sDenom;
    tClosest = Math.abs(tClosest) < 0.001 ? 0 : tClosest / tDenom;
    return new LineSegment(p0.add(u.scale(sClosest)), q0.add(v.scale(tClosest)));
  }
  const ClosestLineJumpTable = {
    PolygonPolygonClosestLine(polygonA, polygonB) {
      const otherWorldPos = polygonB.worldPos;
      const otherDirection = otherWorldPos.sub(polygonA.worldPos);
      const thisDirection = otherDirection.negate();
      const rayTowardsOther = new Ray(polygonA.worldPos, otherDirection);
      const rayTowardsThis = new Ray(otherWorldPos, thisDirection);
      const thisPoint = polygonA.rayCast(rayTowardsOther).add(rayTowardsOther.dir.scale(0.1));
      const otherPoint = polygonB.rayCast(rayTowardsThis).add(rayTowardsThis.dir.scale(0.1));
      const thisFace = polygonA.getClosestFace(thisPoint);
      const otherFace = polygonB.getClosestFace(otherPoint);
      const p0 = thisFace.face.begin;
      const u = thisFace.face.getEdge();
      const q0 = otherFace.face.begin;
      const v = otherFace.face.getEdge();
      return ClosestLine(p0, u, q0, v);
    },
    PolygonEdgeClosestLine(polygon, edge) {
      const otherWorldPos = edge.worldPos;
      const otherDirection = otherWorldPos.sub(polygon.worldPos);
      const rayTowardsOther = new Ray(polygon.worldPos, otherDirection);
      const thisPoint = polygon.rayCast(rayTowardsOther).add(rayTowardsOther.dir.scale(0.1));
      const thisFace = polygon.getClosestFace(thisPoint);
      const p0 = thisFace.face.begin;
      const u = thisFace.face.getEdge();
      const edgeLine = edge.asLine();
      const edgeStart = edgeLine.begin;
      const edgeVector = edgeLine.getEdge();
      const q0 = edgeStart;
      const v = edgeVector;
      return ClosestLine(p0, u, q0, v);
    },
    PolygonCircleClosestLine(polygon, circle2) {
      const otherWorldPos = circle2.worldPos;
      const otherDirection = otherWorldPos.sub(polygon.worldPos);
      const rayTowardsOther = new Ray(polygon.worldPos, otherDirection.normalize());
      const thisPoint = polygon.rayCast(rayTowardsOther).add(rayTowardsOther.dir.scale(0.1));
      const thisFace = polygon.getClosestFace(thisPoint);
      const p0 = thisFace.face.begin;
      const u = thisFace.face.getEdge();
      let t = (u.x * (otherWorldPos.x - p0.x) + u.y * (otherWorldPos.y - p0.y)) / (u.x * u.x + u.y * u.y);
      if (t > 1) {
        t = 1;
      } else if (t < 0) {
        t = 0;
      }
      const d = Math.sqrt(Math.pow(p0.x + u.x * t - otherWorldPos.x, 2) + Math.pow(p0.y + u.y * t - otherWorldPos.y, 2)) - circle2.radius;
      const circlex = (p0.x + u.x * t - otherWorldPos.x) * circle2.radius / (circle2.radius + d);
      const circley = (p0.y + u.y * t - otherWorldPos.y) * circle2.radius / (circle2.radius + d);
      return new LineSegment(u.scale(t).add(p0), new Vector(otherWorldPos.x + circlex, otherWorldPos.y + circley));
    },
    CircleCircleClosestLine(circleA, circleB) {
      const otherWorldPos = circleB.worldPos;
      const otherDirection = otherWorldPos.sub(circleA.worldPos);
      const thisWorldPos = circleA.worldPos;
      const thisDirection = thisWorldPos.sub(circleB.worldPos);
      const rayTowardsOther = new Ray(circleA.worldPos, otherDirection);
      const rayTowardsThis = new Ray(circleB.worldPos, thisDirection);
      const thisPoint = circleA.rayCast(rayTowardsOther);
      const otherPoint = circleB.rayCast(rayTowardsThis);
      return new LineSegment(thisPoint, otherPoint);
    },
    CircleEdgeClosestLine(circle2, edge) {
      const circleWorlPos = circle2.worldPos;
      const edgeLine = edge.asLine();
      const edgeStart = edgeLine.begin;
      const edgeVector = edgeLine.getEdge();
      const p0 = edgeStart;
      const u = edgeVector;
      let t = (u.x * (circleWorlPos.x - p0.x) + u.y * (circleWorlPos.y - p0.y)) / (u.x * u.x + u.y * u.y);
      if (t > 1) {
        t = 1;
      } else if (t < 0) {
        t = 0;
      }
      const d = Math.sqrt(Math.pow(p0.x + u.x * t - circleWorlPos.x, 2) + Math.pow(p0.y + u.y * t - circleWorlPos.y, 2)) - circle2.radius;
      const circlex = (p0.x + u.x * t - circleWorlPos.x) * circle2.radius / (circle2.radius + d);
      const circley = (p0.y + u.y * t - circleWorlPos.y) * circle2.radius / (circle2.radius + d);
      return new LineSegment(u.scale(t).add(p0), new Vector(circleWorlPos.x + circlex, circleWorlPos.y + circley));
    },
    EdgeEdgeClosestLine(edgeA, edgeB) {
      const edgeLineA = edgeA.asLine();
      const edgeStartA = edgeLineA.begin;
      const edgeVectorA = edgeLineA.getEdge();
      const p0 = edgeStartA;
      const u = edgeVectorA;
      const edgeLineB = edgeB.asLine();
      const edgeStartB = edgeLineB.begin;
      const edgeVectorB = edgeLineB.getEdge();
      const q0 = edgeStartB;
      const v = edgeVectorB;
      return ClosestLine(p0, u, q0, v);
    }
  };

  class CircleCollider extends Collider {
    get worldPos() {
      return this._globalMatrix.getPosition();
    }
    get radius() {
      var _a;
      const tx = this._transform;
      const scale = (_a = tx === null || tx === undefined ? undefined : tx.globalScale) !== null && _a !== undefined ? _a : Vector.One;
      return this._naturalRadius * Math.min(scale.x, scale.y);
    }
    set radius(val) {
      var _a;
      const tx = this._transform;
      const scale = (_a = tx === null || tx === undefined ? undefined : tx.globalScale) !== null && _a !== undefined ? _a : Vector.One;
      this._naturalRadius = val / Math.min(scale.x, scale.y);
    }
    constructor(options) {
      super();
      this.offset = Vector.Zero;
      this._globalMatrix = AffineMatrix.identity();
      this.offset = options.offset || Vector.Zero;
      this.radius = options.radius || 0;
      this._globalMatrix.translate(this.offset.x, this.offset.y);
    }
    clone() {
      return new CircleCollider({
        offset: this.offset.clone(),
        radius: this.radius
      });
    }
    get center() {
      return this._globalMatrix.getPosition();
    }
    contains(point2) {
      var _a, _b;
      const pos = (_b = (_a = this._transform) === null || _a === undefined ? undefined : _a.pos) !== null && _b !== undefined ? _b : this.offset;
      const distance = pos.distance(point2);
      if (distance <= this.radius) {
        return true;
      }
      return false;
    }
    rayCast(ray, max = Infinity) {
      const c = this.center;
      const dir = ray.dir;
      const orig = ray.pos;
      const discriminant = Math.sqrt(Math.pow(dir.dot(orig.sub(c)), 2) - Math.pow(orig.sub(c).distance(), 2) + Math.pow(this.radius, 2));
      if (discriminant < 0) {
        return null;
      } else {
        let toi = 0;
        if (discriminant === 0) {
          toi = -dir.dot(orig.sub(c));
          if (toi > 0 && toi < max) {
            return ray.getPoint(toi);
          }
          return null;
        } else {
          const toi1 = -dir.dot(orig.sub(c)) + discriminant;
          const toi2 = -dir.dot(orig.sub(c)) - discriminant;
          const positiveToi = [];
          if (toi1 >= 0) {
            positiveToi.push(toi1);
          }
          if (toi2 >= 0) {
            positiveToi.push(toi2);
          }
          const mintoi = Math.min(...positiveToi);
          if (mintoi <= max) {
            return ray.getPoint(mintoi);
          }
          return null;
        }
      }
    }
    getClosestLineBetween(shape) {
      if (shape instanceof CircleCollider) {
        return ClosestLineJumpTable.CircleCircleClosestLine(this, shape);
      } else if (shape instanceof PolygonCollider) {
        return ClosestLineJumpTable.PolygonCircleClosestLine(shape, this).flip();
      } else if (shape instanceof EdgeCollider) {
        return ClosestLineJumpTable.CircleEdgeClosestLine(this, shape).flip();
      } else {
        throw new Error(`Polygon could not collide with unknown CollisionShape ${typeof shape}`);
      }
    }
    collide(collider) {
      if (collider instanceof CircleCollider) {
        return CollisionJumpTable.CollideCircleCircle(this, collider);
      } else if (collider instanceof PolygonCollider) {
        return CollisionJumpTable.CollideCirclePolygon(this, collider);
      } else if (collider instanceof EdgeCollider) {
        return CollisionJumpTable.CollideCircleEdge(this, collider);
      } else {
        throw new Error(`Circle could not collide with unknown CollisionShape ${typeof collider}`);
      }
    }
    getFurthestPoint(direction) {
      return this.center.add(direction.normalize().scale(this.radius));
    }
    getFurthestLocalPoint(direction) {
      const dir = direction.normalize();
      return dir.scale(this.radius);
    }
    get bounds() {
      var _a, _b, _c;
      const tx = this._transform;
      const scale = (_a = tx === null || tx === undefined ? undefined : tx.globalScale) !== null && _a !== undefined ? _a : Vector.One;
      const rotation = (_b = tx === null || tx === undefined ? undefined : tx.globalRotation) !== null && _b !== undefined ? _b : 0;
      const pos = (_c = tx === null || tx === undefined ? undefined : tx.globalPos) !== null && _c !== undefined ? _c : Vector.Zero;
      return new BoundingBox(this.offset.x - this._naturalRadius, this.offset.y - this._naturalRadius, this.offset.x + this._naturalRadius, this.offset.y + this._naturalRadius).rotate(rotation).scale(scale).translate(pos);
    }
    get localBounds() {
      return new BoundingBox(this.offset.x - this._naturalRadius, this.offset.y - this._naturalRadius, this.offset.x + this._naturalRadius, this.offset.y + this._naturalRadius);
    }
    get axes() {
      return [];
    }
    getInertia(mass) {
      return mass * this.radius * this.radius / 2;
    }
    update(transform) {
      var _a;
      this._transform = transform;
      const globalMat = (_a = transform.matrix) !== null && _a !== undefined ? _a : this._globalMatrix;
      globalMat.clone(this._globalMatrix);
      this._globalMatrix.translate(this.offset.x, this.offset.y);
    }
    project(axis) {
      const scalars = [];
      const point2 = this.center;
      const dotProduct = point2.dot(axis);
      scalars.push(dotProduct);
      scalars.push(dotProduct + this.radius);
      scalars.push(dotProduct - this.radius);
      return new Projection(Math.min.apply(Math, scalars), Math.max.apply(Math, scalars));
    }
    debug(ex, color, options) {
      var _a, _b, _c, _d;
      const { lineWidth } = { ...{ lineWidth: 1 }, ...options };
      const tx = this._transform;
      const scale = (_a = tx === null || tx === undefined ? undefined : tx.globalScale) !== null && _a !== undefined ? _a : Vector.One;
      const rotation = (_b = tx === null || tx === undefined ? undefined : tx.globalRotation) !== null && _b !== undefined ? _b : 0;
      const pos = (_c = tx === null || tx === undefined ? undefined : tx.globalPos) !== null && _c !== undefined ? _c : Vector.Zero;
      ex.save();
      ex.translate(pos.x, pos.y);
      ex.rotate(rotation);
      ex.scale(scale.x, scale.y);
      ex.drawCircle((_d = this.offset) !== null && _d !== undefined ? _d : Vector.Zero, this._naturalRadius, Color.Transparent, color, lineWidth);
      ex.restore();
    }
  }

  class CollisionContact {
    constructor(colliderA, colliderB, mtv, normal, tangent, points, localPoints, info) {
      var _a, _b;
      this._canceled = false;
      this.colliderA = colliderA;
      this.colliderB = colliderB;
      this.mtv = mtv;
      this.normal = normal;
      this.tangent = tangent;
      this.points = points;
      this.localPoints = localPoints;
      this.info = info;
      this.id = Pair.calculatePairHash(colliderA.id, colliderB.id);
      if (colliderA.__compositeColliderId || colliderB.__compositeColliderId) {
        this.id += "|" + Pair.calculatePairHash((_a = colliderA.__compositeColliderId) !== null && _a !== undefined ? _a : colliderA.id, (_b = colliderB.__compositeColliderId) !== null && _b !== undefined ? _b : colliderB.id);
      }
    }
    matchAwake() {
      const bodyA = this.colliderA.owner.get(BodyComponent);
      const bodyB = this.colliderB.owner.get(BodyComponent);
      if (bodyA && bodyB) {
        if (bodyA.sleeping !== bodyB.sleeping) {
          if (bodyA.sleeping && bodyA.collisionType !== CollisionType.Fixed && bodyB.sleepMotion >= Physics.wakeThreshold) {
            bodyA.setSleeping(false);
          }
          if (bodyB.sleeping && bodyB.collisionType !== CollisionType.Fixed && bodyA.sleepMotion >= Physics.wakeThreshold) {
            bodyB.setSleeping(false);
          }
        }
      }
    }
    isCanceled() {
      return this._canceled;
    }
    cancel() {
      this._canceled = true;
    }
  }

  class SeparatingAxis {
    static findPolygonPolygonSeparation(polyA, polyB) {
      let bestSeparation = -Number.MAX_VALUE;
      let bestSide = null;
      let bestAxis = null;
      let bestSideIndex = -1;
      let bestOtherPoint = null;
      const sides = polyA.getSides();
      const localSides = polyA.getLocalSides();
      for (let i = 0;i < sides.length; i++) {
        const side = sides[i];
        const axis = side.normal();
        const vertB = polyB.getFurthestPoint(axis.negate());
        const vertSeparation = side.distanceToPoint(vertB, true);
        if (vertSeparation > bestSeparation) {
          bestSeparation = vertSeparation;
          bestSide = side;
          bestAxis = axis;
          bestSideIndex = i;
          bestOtherPoint = vertB;
        }
      }
      return {
        collider: polyA,
        separation: bestAxis ? bestSeparation : 99,
        axis: bestAxis,
        side: bestSide,
        localSide: localSides[bestSideIndex],
        sideId: bestSideIndex,
        point: bestOtherPoint,
        localPoint: bestAxis ? polyB.getFurthestLocalPoint(bestAxis.negate()) : null
      };
    }
    static findCirclePolygonSeparation(circle2, polygon) {
      const axes = polygon.axes;
      const pc = polygon.center;
      const polyDir = pc.sub(circle2.worldPos);
      const closestPointOnPoly = polygon.getFurthestPoint(polyDir.negate());
      axes.push(closestPointOnPoly.sub(circle2.worldPos).normalize());
      let minOverlap = Number.MAX_VALUE;
      let minAxis = null;
      let minIndex = -1;
      for (let i = 0;i < axes.length; i++) {
        const proj1 = polygon.project(axes[i]);
        const proj2 = circle2.project(axes[i]);
        const overlap = proj1.getOverlap(proj2);
        if (overlap <= 0) {
          return null;
        } else {
          if (overlap < minOverlap) {
            minOverlap = overlap;
            minAxis = axes[i];
            minIndex = i;
          }
        }
      }
      if (minIndex < 0) {
        return null;
      }
      return minAxis.normalize().scale(minOverlap);
    }
  }
  const CollisionJumpTable = {
    CollideCircleCircle(circleA, circleB) {
      const circleAPos = circleA.worldPos;
      const circleBPos = circleB.worldPos;
      const combinedRadius = circleA.radius + circleB.radius;
      const distance = circleAPos.distance(circleBPos);
      if (distance > combinedRadius) {
        return [];
      }
      const separation = combinedRadius - distance;
      const normal = circleBPos.sub(circleAPos).normalize();
      const tangent = normal.perpendicular();
      const mvt = normal.scale(separation);
      const point2 = circleA.getFurthestPoint(normal);
      const local = circleA.getFurthestLocalPoint(normal);
      const info = {
        collider: circleA,
        separation,
        axis: normal,
        point: point2
      };
      return [new CollisionContact(circleA, circleB, mvt, normal, tangent, [point2], [local], info)];
    },
    CollideCirclePolygon(circle2, polygon) {
      var _a, _b;
      let minAxis = SeparatingAxis.findCirclePolygonSeparation(circle2, polygon);
      if (!minAxis) {
        return [];
      }
      const samedir = minAxis.dot(polygon.center.sub(circle2.center));
      minAxis = samedir < 0 ? minAxis.negate() : minAxis;
      const point2 = circle2.getFurthestPoint(minAxis);
      const xf = (_b = (_a = circle2.owner) === null || _a === undefined ? undefined : _a.get(TransformComponent)) !== null && _b !== undefined ? _b : new TransformComponent;
      const local = xf.applyInverse(point2);
      const normal = minAxis.normalize();
      const info = {
        collider: circle2,
        separation: -minAxis.size,
        axis: normal,
        point: point2,
        localPoint: local,
        side: polygon.findSide(normal.negate()),
        localSide: polygon.findLocalSide(normal.negate())
      };
      return [new CollisionContact(circle2, polygon, minAxis, normal, normal.perpendicular(), [point2], [local], info)];
    },
    CollideCircleEdge(circle2, edge) {
      const cc = circle2.center;
      const edgeWorld = edge.asLine();
      const e = edgeWorld.end.sub(edgeWorld.begin);
      const u = e.dot(edgeWorld.end.sub(cc));
      const v = e.dot(cc.sub(edgeWorld.begin));
      const side = edge.asLine();
      const localSide = edge.asLocalLine();
      if (v <= 0) {
        const da = edgeWorld.begin.sub(cc);
        const dda = da.dot(da);
        if (dda > circle2.radius * circle2.radius) {
          return [];
        }
        const normal2 = da.normalize();
        const separation2 = circle2.radius - Math.sqrt(dda);
        const info2 = {
          collider: circle2,
          separation: separation2,
          axis: normal2,
          point: side.begin,
          side,
          localSide
        };
        return [
          new CollisionContact(circle2, edge, normal2.scale(separation2), normal2, normal2.perpendicular(), [side.begin], [localSide.begin], info2)
        ];
      }
      if (u <= 0) {
        const db = edgeWorld.end.sub(cc);
        const ddb = db.dot(db);
        if (ddb > circle2.radius * circle2.radius) {
          return [];
        }
        const normal2 = db.normalize();
        const separation2 = circle2.radius - Math.sqrt(ddb);
        const info2 = {
          collider: circle2,
          separation: separation2,
          axis: normal2,
          point: side.end,
          side,
          localSide
        };
        return [
          new CollisionContact(circle2, edge, normal2.scale(separation2), normal2, normal2.perpendicular(), [side.end], [localSide.end], info2)
        ];
      }
      const den = e.dot(e);
      const pointOnEdge = edgeWorld.begin.scale(u).add(edgeWorld.end.scale(v)).scale(1 / den);
      const d = cc.sub(pointOnEdge);
      const dd = d.dot(d);
      if (dd > circle2.radius * circle2.radius) {
        return [];
      }
      let normal = e.perpendicular();
      if (normal.dot(cc.sub(edgeWorld.begin)) < 0) {
        normal.x = -normal.x;
        normal.y = -normal.y;
      }
      normal = normal.normalize();
      const separation = circle2.radius - Math.sqrt(dd);
      const mvt = normal.scale(separation);
      const info = {
        collider: circle2,
        separation,
        axis: normal,
        point: pointOnEdge,
        side,
        localSide
      };
      return [
        new CollisionContact(circle2, edge, mvt, normal.negate(), normal.negate().perpendicular(), [pointOnEdge], [pointOnEdge.sub(edge.worldPos)], info)
      ];
    },
    CollideEdgeEdge() {
      return [];
    },
    CollidePolygonEdge(polygon, edge) {
      var _a;
      const pc = polygon.center;
      const ec = edge.center;
      const dir = ec.sub(pc).normalize();
      const linePoly = new PolygonCollider({
        points: [edge.begin, edge.end, edge.end.add(dir.scale(100)), edge.begin.add(dir.scale(100))],
        offset: edge.offset
      });
      linePoly.owner = edge.owner;
      const tx = (_a = edge.owner) === null || _a === undefined ? undefined : _a.get(TransformComponent);
      if (tx) {
        linePoly.update(edge.owner.get(TransformComponent).get());
      }
      const contact = this.CollidePolygonPolygon(polygon, linePoly);
      if (contact.length) {
        contact[0].colliderB = edge;
        contact[0].id = Pair.calculatePairHash(polygon.id, edge.id);
      }
      return contact;
    },
    CollidePolygonPolygon(polyA, polyB) {
      var _a, _b, _c, _d;
      const separationA = SeparatingAxis.findPolygonPolygonSeparation(polyA, polyB);
      if (separationA.separation > 0) {
        return [];
      }
      const separationB = SeparatingAxis.findPolygonPolygonSeparation(polyB, polyA);
      if (separationB.separation > 0) {
        return [];
      }
      const separation = separationA.separation > separationB.separation ? separationA : separationB;
      const other = separation.collider === polyA ? polyB : polyA;
      const incident = other.findSide(separation.axis.negate());
      const reference = separation.side;
      const refDir = reference.dir().normalize();
      const clipRight = incident.clip(refDir.negate(), -refDir.dot(reference.begin));
      let clipLeft = null;
      if (clipRight) {
        clipLeft = clipRight.clip(refDir, refDir.dot(reference.end));
      }
      if (clipLeft) {
        const points = clipLeft.getPoints().filter((p) => {
          return reference.below(p);
        });
        let normal = separation.axis;
        let tangent = normal.perpendicular();
        if (polyB.center.sub(polyA.center).dot(normal) < 0) {
          normal = normal.negate();
          tangent = normal.perpendicular();
        }
        let localPoints = [];
        if (separation.collider === polyA) {
          const xf = (_b = (_a = polyB.owner) === null || _a === undefined ? undefined : _a.get(TransformComponent)) !== null && _b !== undefined ? _b : new TransformComponent;
          localPoints = points.map((p) => xf.applyInverse(p));
        } else {
          const xf = (_d = (_c = polyA.owner) === null || _c === undefined ? undefined : _c.get(TransformComponent)) !== null && _d !== undefined ? _d : new TransformComponent;
          localPoints = points.map((p) => xf.applyInverse(p));
        }
        return [new CollisionContact(polyA, polyB, normal.scale(-separation.separation), normal, tangent, points, localPoints, separation)];
      }
      return [];
    },
    FindContactSeparation(contact, localPoint) {
      var _a, _b, _c, _d;
      const shapeA = contact.colliderA;
      const txA = (_b = (_a = contact.colliderA.owner) === null || _a === undefined ? undefined : _a.get(TransformComponent)) !== null && _b !== undefined ? _b : new TransformComponent;
      const shapeB = contact.colliderB;
      const txB = (_d = (_c = contact.colliderB.owner) === null || _c === undefined ? undefined : _c.get(TransformComponent)) !== null && _d !== undefined ? _d : new TransformComponent;
      if (shapeA instanceof CircleCollider && shapeB instanceof CircleCollider) {
        const combinedRadius = shapeA.radius + shapeB.radius;
        const distance = txA.pos.distance(txB.pos);
        const separation = combinedRadius - distance;
        return -separation;
      }
      if (shapeA instanceof PolygonCollider && shapeB instanceof PolygonCollider) {
        if (contact.info.localSide) {
          let side;
          let worldPoint;
          if (contact.info.collider === shapeA) {
            side = new LineSegment(txA.apply(contact.info.localSide.begin), txA.apply(contact.info.localSide.end));
            worldPoint = txB.apply(localPoint);
          } else {
            side = new LineSegment(txB.apply(contact.info.localSide.begin), txB.apply(contact.info.localSide.end));
            worldPoint = txA.apply(localPoint);
          }
          return side.distanceToPoint(worldPoint, true);
        }
      }
      if (shapeA instanceof PolygonCollider && shapeB instanceof CircleCollider || shapeB instanceof PolygonCollider && shapeA instanceof CircleCollider) {
        const worldPoint = txA.apply(localPoint);
        if (contact.info.side) {
          return contact.info.side.distanceToPoint(worldPoint, true);
        }
      }
      if (shapeA instanceof EdgeCollider && shapeB instanceof PolygonCollider || shapeB instanceof EdgeCollider && shapeA instanceof PolygonCollider) {
        let worldPoint;
        if (contact.info.collider === shapeA) {
          worldPoint = txB.apply(localPoint);
        } else {
          worldPoint = txA.apply(localPoint);
        }
        if (contact.info.side) {
          return contact.info.side.distanceToPoint(worldPoint, true);
        }
      }
      if (shapeA instanceof CircleCollider && shapeB instanceof EdgeCollider || shapeB instanceof CircleCollider && shapeA instanceof EdgeCollider) {
        const worldPoint = txB.apply(localPoint);
        let circlePoint;
        if (shapeA instanceof CircleCollider) {
          circlePoint = shapeA.getFurthestPoint(contact.normal);
        }
        const dist = worldPoint.distance(circlePoint);
        if (contact.info.side) {
          return dist > 0 ? -dist : 0;
        }
      }
      return 0;
    }
  };

  class EdgeCollider extends Collider {
    constructor(options) {
      var _a;
      super();
      this._globalMatrix = AffineMatrix.identity();
      this.begin = options.begin || Vector.Zero;
      this.end = options.end || Vector.Zero;
      this.offset = (_a = options.offset) !== null && _a !== undefined ? _a : Vector.Zero;
    }
    clone() {
      return new EdgeCollider({
        begin: this.begin.clone(),
        end: this.end.clone()
      });
    }
    get worldPos() {
      var _a;
      const tx = this._transform;
      return (_a = tx === null || tx === undefined ? undefined : tx.globalPos.add(this.offset)) !== null && _a !== undefined ? _a : this.offset;
    }
    get center() {
      const begin = this._getTransformedBegin();
      const end = this._getTransformedEnd();
      const pos = begin.average(end);
      return pos;
    }
    _getTransformedBegin() {
      return this._globalMatrix.multiply(this.begin);
    }
    _getTransformedEnd() {
      return this._globalMatrix.multiply(this.end);
    }
    getSlope() {
      const begin = this._getTransformedBegin();
      const end = this._getTransformedEnd();
      const distance = begin.distance(end);
      return end.sub(begin).scale(1 / distance);
    }
    getLength() {
      const begin = this._getTransformedBegin();
      const end = this._getTransformedEnd();
      const distance = begin.distance(end);
      return distance;
    }
    contains() {
      return false;
    }
    rayCast(ray, max = Infinity) {
      const numerator = this._getTransformedBegin().sub(ray.pos);
      if (ray.dir.cross(this.getSlope()) === 0 && numerator.cross(ray.dir) !== 0) {
        return null;
      }
      const divisor = ray.dir.cross(this.getSlope());
      if (divisor === 0) {
        return null;
      }
      const t = numerator.cross(this.getSlope()) / divisor;
      if (t >= 0 && t <= max) {
        const u = numerator.cross(ray.dir) / divisor / this.getLength();
        if (u >= 0 && u <= 1) {
          return ray.getPoint(t);
        }
      }
      return null;
    }
    getClosestLineBetween(shape) {
      if (shape instanceof CircleCollider) {
        return ClosestLineJumpTable.CircleEdgeClosestLine(shape, this);
      } else if (shape instanceof PolygonCollider) {
        return ClosestLineJumpTable.PolygonEdgeClosestLine(shape, this).flip();
      } else if (shape instanceof EdgeCollider) {
        return ClosestLineJumpTable.EdgeEdgeClosestLine(this, shape);
      } else {
        throw new Error(`Polygon could not collide with unknown CollisionShape ${typeof shape}`);
      }
    }
    collide(shape) {
      if (shape instanceof CircleCollider) {
        return CollisionJumpTable.CollideCircleEdge(shape, this);
      } else if (shape instanceof PolygonCollider) {
        return CollisionJumpTable.CollidePolygonEdge(shape, this);
      } else if (shape instanceof EdgeCollider) {
        return CollisionJumpTable.CollideEdgeEdge();
      } else {
        throw new Error(`Edge could not collide with unknown CollisionShape ${typeof shape}`);
      }
    }
    getFurthestPoint(direction) {
      const transformedBegin = this._getTransformedBegin();
      const transformedEnd = this._getTransformedEnd();
      if (direction.dot(transformedBegin) > 0) {
        return transformedBegin;
      } else {
        return transformedEnd;
      }
    }
    _boundsFromBeginEnd(begin, end, padding = 10) {
      return new BoundingBox(Math.min(begin.x, end.x) - padding, Math.min(begin.y, end.y) - padding, Math.max(begin.x, end.x) + padding, Math.max(begin.y, end.y) + padding);
    }
    get bounds() {
      const transformedBegin = this._getTransformedBegin();
      const transformedEnd = this._getTransformedEnd();
      return this._boundsFromBeginEnd(transformedBegin, transformedEnd);
    }
    get localBounds() {
      return this._boundsFromBeginEnd(this.begin, this.end);
    }
    asLine() {
      return new LineSegment(this._getTransformedBegin(), this._getTransformedEnd());
    }
    asLocalLine() {
      return new LineSegment(this.begin, this.end);
    }
    get axes() {
      const e = this._getTransformedEnd().sub(this._getTransformedBegin());
      const edgeNormal = e.normal();
      const axes = [];
      axes.push(edgeNormal);
      axes.push(edgeNormal.negate());
      axes.push(edgeNormal.normal());
      axes.push(edgeNormal.normal().negate());
      return axes;
    }
    getInertia(mass) {
      const length = this.end.sub(this.begin).distance() / 2;
      return mass * length * length;
    }
    update(transform) {
      var _a;
      this._transform = transform;
      const globalMat = (_a = transform.matrix) !== null && _a !== undefined ? _a : this._globalMatrix;
      globalMat.clone(this._globalMatrix);
      this._globalMatrix.translate(this.offset.x, this.offset.y);
    }
    project(axis) {
      const scalars = [];
      const points = [this._getTransformedBegin(), this._getTransformedEnd()];
      const len = points.length;
      for (let i = 0;i < len; i++) {
        scalars.push(points[i].dot(axis));
      }
      return new Projection(Math.min.apply(Math, scalars), Math.max.apply(Math, scalars));
    }
    debug(ex, color) {
      const begin = this._getTransformedBegin();
      const end = this._getTransformedEnd();
      ex.drawLine(begin, end, color, 2);
      ex.drawCircle(begin, 2, color);
      ex.drawCircle(end, 2, color);
    }
  }

  class PolygonCollider extends Collider {
    set points(points) {
      this._localBoundsDirty = true;
      this._localSidesDirty = true;
      this._sidesDirty = true;
      this._points = points;
    }
    get points() {
      return this._points;
    }
    constructor(options) {
      var _a, _b;
      super();
      this._logger = Logger.getInstance();
      this._transformedPoints = [];
      this._sides = [];
      this._localSides = [];
      this._globalMatrix = AffineMatrix.identity();
      this._transformedPointsDirty = true;
      this._sidesDirty = true;
      this._localSidesDirty = true;
      this._localBoundsDirty = true;
      this.offset = (_a = options.offset) !== null && _a !== undefined ? _a : Vector.Zero;
      this._globalMatrix.translate(this.offset.x, this.offset.y);
      this.points = (_b = options.points) !== null && _b !== undefined ? _b : [];
      const counterClockwise = this._isCounterClockwiseWinding(this.points);
      if (!counterClockwise) {
        this.points.reverse();
      }
      if (!this.isConvex()) {
        if (!options.suppressConvexWarning) {
          this._logger.warn("Excalibur only supports convex polygon colliders and will not behave properly.Call PolygonCollider.triangulate() to build a new collider composed of smaller convex triangles");
        }
      }
      this._calculateTransformation();
    }
    _isCounterClockwiseWinding(points) {
      let sum = 0;
      for (let i = 0;i < points.length; i++) {
        sum += (points[(i + 1) % points.length].x - points[i].x) * (points[(i + 1) % points.length].y + points[i].y);
      }
      return sum < 0;
    }
    isConvex() {
      if (this.points.length < 3) {
        return false;
      }
      let oldPoint = this.points[this.points.length - 2];
      let newPoint = this.points[this.points.length - 1];
      let direction = Math.atan2(newPoint.y - oldPoint.y, newPoint.x - oldPoint.x);
      let oldDirection = 0;
      let orientation = 0;
      let angleSum = 0;
      for (const [i, point2] of this.points.entries()) {
        oldPoint = newPoint;
        oldDirection = direction;
        newPoint = point2;
        direction = Math.atan2(newPoint.y - oldPoint.y, newPoint.x - oldPoint.x);
        if (oldPoint.equals(newPoint)) {
          return false;
        }
        let angle = direction - oldDirection;
        if (angle <= -Math.PI) {
          angle += Math.PI * 2;
        } else if (angle > Math.PI) {
          angle -= Math.PI * 2;
        }
        if (i === 0) {
          if (angle === 0) {
            return false;
          }
          orientation = angle > 0 ? 1 : -1;
        } else {
          if (orientation * angle <= 0) {
            return false;
          }
        }
        angleSum += angle;
      }
      return Math.abs(Math.round(angleSum / (Math.PI * 2))) === 1;
    }
    tessellate() {
      const polygons = [];
      for (let i = 1;i < this.points.length - 2; i++) {
        polygons.push([this.points[0], this.points[i + 1], this.points[i + 2]]);
      }
      polygons.push([this.points[0], this.points[1], this.points[2]]);
      return new CompositeCollider(polygons.map((points) => Shape.Polygon(points)));
    }
    triangulate() {
      if (this.points.length < 3) {
        throw Error("Invalid polygon");
      }
      const triangles = [];
      const vertices = [...this.points].reverse();
      let vertexCount = vertices.length;
      function getPrevIndex(index) {
        return index === 0 ? vertexCount - 1 : index - 1;
      }
      function getNextIndex(index) {
        return index === vertexCount - 1 ? 0 : index + 1;
      }
      function isConvex(index) {
        const prev = getPrevIndex(index);
        const next = getNextIndex(index);
        const va = vertices[prev];
        const vb = vertices[index];
        const vc = vertices[next];
        const leftArm = va.sub(vb);
        const rightArm = vc.sub(vb);
        if (leftArm.cross(rightArm) < 0) {
          return false;
        }
        return true;
      }
      const convexVertices = vertices.map((_, i) => isConvex(i));
      function isPointInTriangle(point2, a, b, c) {
        const ab = b.sub(a);
        const bc = c.sub(b);
        const ca = a.sub(c);
        const ap = point2.sub(a);
        const bp = point2.sub(b);
        const cp = point2.sub(c);
        const cross1 = ab.cross(ap);
        const cross2 = bc.cross(bp);
        const cross3 = ca.cross(cp);
        if (cross1 > 0 || cross2 > 0 || cross3 > 0) {
          return false;
        }
        return true;
      }
      function findEarTip() {
        for (let i = 0;i < vertexCount; i++) {
          if (convexVertices[i]) {
            const prev = getPrevIndex(i);
            const next = getNextIndex(i);
            const va = vertices[prev];
            const vb = vertices[i];
            const vc = vertices[next];
            let isEar = true;
            for (let j = 0;j < vertexCount; j++) {
              if (j === i || j === prev || j === next) {
                continue;
              }
              const point2 = vertices[j];
              if (isPointInTriangle(point2, va, vb, vc)) {
                isEar = false;
                break;
              }
            }
            if (isEar) {
              return i;
            }
          }
        }
        for (let i = 0;i < vertexCount; i++) {
          if (convexVertices[i]) {
            return i;
          }
        }
        return 0;
      }
      function cutEarTip(index) {
        const prev = getPrevIndex(index);
        const next = getNextIndex(index);
        const va = vertices[prev];
        const vb = vertices[index];
        const vc = vertices[next];
        triangles.push([va, vb, vc]);
        vertices.splice(index, 1);
        convexVertices.splice(index, 1);
        vertexCount--;
      }
      while (vertexCount > 3) {
        const earIndex = findEarTip();
        cutEarTip(earIndex);
        for (let i = 0;i < vertexCount; i++) {
          convexVertices[i] = isConvex(i);
        }
      }
      triangles.push([vertices[0], vertices[1], vertices[2]]);
      return new CompositeCollider(triangles.map((points) => Shape.Polygon(points, Vector.Zero, true)));
    }
    clone() {
      return new PolygonCollider({
        offset: this.offset.clone(),
        points: this.points.map((p) => p.clone())
      });
    }
    get worldPos() {
      if (this._transform) {
        return this._transform.pos.add(this.offset);
      }
      return this.offset;
    }
    get center() {
      return this.bounds.center;
    }
    _calculateTransformation() {
      const points = this.points;
      const len = points.length;
      this._transformedPoints.length = 0;
      for (let i = 0;i < len; i++) {
        this._transformedPoints[i] = this._globalMatrix.multiply(points[i].clone());
      }
    }
    getTransformedPoints() {
      if (this._transformedPointsDirty) {
        this._calculateTransformation();
        this._transformedPointsDirty = false;
      }
      return this._transformedPoints;
    }
    getSides() {
      if (this._sidesDirty) {
        const lines = [];
        const points = this.getTransformedPoints();
        const len = points.length;
        for (let i = 0;i < len; i++) {
          lines.push(new LineSegment(points[i], points[(i + 1) % len]));
        }
        this._sides = lines;
        this._sidesDirty = false;
      }
      return this._sides;
    }
    getLocalSides() {
      if (this._localSidesDirty) {
        const lines = [];
        const points = this.points;
        const len = points.length;
        for (let i = 0;i < len; i++) {
          lines.push(new LineSegment(points[i], points[(i + 1) % len]));
        }
        this._localSides = lines;
        this._localSidesDirty = false;
      }
      return this._localSides;
    }
    findSide(direction) {
      const sides = this.getSides();
      let bestSide = sides[0];
      let maxDistance = -Number.MAX_VALUE;
      for (let side = 0;side < sides.length; side++) {
        const currentSide = sides[side];
        const sideNormal = currentSide.normal();
        const mostDirection = sideNormal.dot(direction);
        if (mostDirection > maxDistance) {
          bestSide = currentSide;
          maxDistance = mostDirection;
        }
      }
      return bestSide;
    }
    findLocalSide(direction) {
      const sides = this.getLocalSides();
      let bestSide = sides[0];
      let maxDistance = -Number.MAX_VALUE;
      for (let side = 0;side < sides.length; side++) {
        const currentSide = sides[side];
        const sideNormal = currentSide.normal();
        const mostDirection = sideNormal.dot(direction);
        if (mostDirection > maxDistance) {
          bestSide = currentSide;
          maxDistance = mostDirection;
        }
      }
      return bestSide;
    }
    get axes() {
      const axes = [];
      const sides = this.getSides();
      for (let i = 0;i < sides.length; i++) {
        axes.push(sides[i].normal());
      }
      return axes;
    }
    update(transform) {
      var _a;
      if (transform) {
        this._transform = transform;
        this._transformedPointsDirty = true;
        this._sidesDirty = true;
        const globalMat = (_a = transform.matrix) !== null && _a !== undefined ? _a : this._globalMatrix;
        globalMat.clone(this._globalMatrix);
        this._globalMatrix.translate(this.offset.x, this.offset.y);
      }
    }
    contains(point2) {
      const testRay = new Ray(point2, new Vector(1, 0));
      const intersectCount = this.getSides().reduce(function(accum, side) {
        if (testRay.intersect(side) >= 0) {
          return accum + 1;
        }
        return accum;
      }, 0);
      if (intersectCount % 2 === 0) {
        return false;
      }
      return true;
    }
    getClosestLineBetween(collider) {
      if (collider instanceof CircleCollider) {
        return ClosestLineJumpTable.PolygonCircleClosestLine(this, collider);
      } else if (collider instanceof PolygonCollider) {
        return ClosestLineJumpTable.PolygonPolygonClosestLine(this, collider);
      } else if (collider instanceof EdgeCollider) {
        return ClosestLineJumpTable.PolygonEdgeClosestLine(this, collider);
      } else {
        throw new Error(`Polygon could not collide with unknown CollisionShape ${typeof collider}`);
      }
    }
    collide(collider) {
      if (collider instanceof CircleCollider) {
        return CollisionJumpTable.CollideCirclePolygon(collider, this);
      } else if (collider instanceof PolygonCollider) {
        return CollisionJumpTable.CollidePolygonPolygon(this, collider);
      } else if (collider instanceof EdgeCollider) {
        return CollisionJumpTable.CollidePolygonEdge(this, collider);
      } else {
        throw new Error(`Polygon could not collide with unknown CollisionShape ${typeof collider}`);
      }
    }
    getFurthestPoint(direction) {
      const pts = this.getTransformedPoints();
      let furthestPoint = null;
      let maxDistance = -Number.MAX_VALUE;
      for (let i = 0;i < pts.length; i++) {
        const distance = direction.dot(pts[i]);
        if (distance > maxDistance) {
          maxDistance = distance;
          furthestPoint = pts[i];
        }
      }
      return furthestPoint;
    }
    getFurthestLocalPoint(direction) {
      const pts = this.points;
      let furthestPoint = pts[0];
      let maxDistance = -Number.MAX_VALUE;
      for (let i = 0;i < pts.length; i++) {
        const distance = direction.dot(pts[i]);
        if (distance > maxDistance) {
          maxDistance = distance;
          furthestPoint = pts[i];
        }
      }
      return furthestPoint;
    }
    getClosestFace(point2) {
      const sides = this.getSides();
      let min = Number.POSITIVE_INFINITY;
      let faceIndex = -1;
      let distance = -1;
      for (let i = 0;i < sides.length; i++) {
        const dist = sides[i].distanceToPoint(point2);
        if (dist < min) {
          min = dist;
          faceIndex = i;
          distance = dist;
        }
      }
      if (faceIndex !== -1) {
        return {
          distance: sides[faceIndex].normal().scale(distance),
          face: sides[faceIndex]
        };
      }
      return null;
    }
    get bounds() {
      return this.localBounds.transform(this._globalMatrix);
    }
    get localBounds() {
      if (this._localBoundsDirty) {
        this._localBounds = BoundingBox.fromPoints(this.points);
        this._localBoundsDirty = false;
      }
      return this._localBounds;
    }
    getInertia(mass) {
      if (this._cachedMass === mass && this._cachedInertia) {
        return this._cachedInertia;
      }
      let numerator = 0;
      let denominator = 0;
      const points = this.points;
      for (let i = 0;i < points.length; i++) {
        const iplusone = (i + 1) % points.length;
        const crossTerm = points[iplusone].cross(points[i]);
        numerator += crossTerm * (points[i].dot(points[i]) + points[i].dot(points[iplusone]) + points[iplusone].dot(points[iplusone]));
        denominator += crossTerm;
      }
      this._cachedMass = mass;
      return this._cachedInertia = mass / 6 * (numerator / denominator);
    }
    rayCast(ray, max = Infinity) {
      const sides = this.getSides();
      const len = sides.length;
      let minContactTime = Number.MAX_VALUE;
      let contactIndex = -1;
      for (let i = 0;i < len; i++) {
        const contactTime = ray.intersect(sides[i]);
        if (contactTime >= 0 && contactTime < minContactTime && contactTime <= max) {
          minContactTime = contactTime;
          contactIndex = i;
        }
      }
      if (contactIndex >= 0) {
        return ray.getPoint(minContactTime);
      }
      return null;
    }
    project(axis) {
      const points = this.getTransformedPoints();
      const len = points.length;
      let min = Number.MAX_VALUE;
      let max = -Number.MAX_VALUE;
      for (let i = 0;i < len; i++) {
        const scalar = points[i].dot(axis);
        min = Math.min(min, scalar);
        max = Math.max(max, scalar);
      }
      return new Projection(min, max);
    }
    debug(ex, color, options) {
      const firstPoint = this.getTransformedPoints()[0];
      const points = [firstPoint, ...this.getTransformedPoints(), firstPoint];
      const { lineWidth, pointSize } = { ...{ lineWidth: 1, pointSize: 1 }, ...options };
      for (let i = 0;i < points.length - 1; i++) {
        ex.drawLine(points[i], points[i + 1], color, lineWidth);
        ex.drawCircle(points[i], pointSize, color);
        ex.drawCircle(points[i + 1], pointSize, color);
      }
    }
  }

  class Shape {
    static Box(width, height, anchor = Vector.Half, offset = Vector.Zero) {
      return new PolygonCollider({
        points: new BoundingBox(-width * anchor.x, -height * anchor.y, width - width * anchor.x, height - height * anchor.y).getPoints(),
        offset
      });
    }
    static Polygon(points, offset = Vector.Zero, suppressConvexWarning = false) {
      return new PolygonCollider({
        points,
        offset,
        suppressConvexWarning
      });
    }
    static Circle(radius, offset = Vector.Zero) {
      return new CircleCollider({
        radius,
        offset
      });
    }
    static Edge(begin, end) {
      return new EdgeCollider({
        begin,
        end
      });
    }
    static Capsule(width, height, offset = Vector.Zero) {
      const logger = Logger.getInstance();
      if (width === height) {
        logger.warn("A capsule collider with equal width and height is a circle, consider using a ex.Shape.Circle or ex.CircleCollider");
      }
      const vertical = height >= width;
      if (vertical) {
        const capsule = new CompositeCollider([
          Shape.Circle(width / 2, vec(0, -height / 2 + width / 2).add(offset)),
          Shape.Box(width, height - width, Vector.Half, offset),
          Shape.Circle(width / 2, vec(0, height / 2 - width / 2).add(offset))
        ]);
        return capsule;
      } else {
        const capsule = new CompositeCollider([
          Shape.Circle(height / 2, vec(-width / 2 + height / 2, 0).add(offset)),
          Shape.Box(width - height, height, Vector.Half, offset),
          Shape.Circle(height / 2, vec(width / 2 - height / 2, 0).add(offset))
        ]);
        return capsule;
      }
    }
  }

  class ColliderComponent extends Component {
    constructor(collider) {
      super();
      this.type = "ex.collider";
      this.events = new EventEmitter;
      this.$colliderAdded = new Observable;
      this.$colliderRemoved = new Observable;
      this.set(collider);
    }
    get() {
      return this._collider;
    }
    set(collider) {
      this.clear();
      if (collider) {
        this._collider = collider;
        this._collider.owner = this.owner;
        collider.events.pipe(this.events);
        this.$colliderAdded.notifyAll(collider);
        this.update();
      }
      return collider;
    }
    clear() {
      if (this._collider) {
        this._collider.events.unpipe(this.events);
        this.$colliderRemoved.notifyAll(this._collider);
        this._collider.owner = null;
        this._collider = null;
      }
    }
    clone() {
      const clone = new ColliderComponent(this._collider.clone());
      return clone;
    }
    get bounds() {
      var _a, _b;
      return (_b = (_a = this._collider) === null || _a === undefined ? undefined : _a.bounds) !== null && _b !== undefined ? _b : new BoundingBox;
    }
    get localBounds() {
      var _a, _b;
      return (_b = (_a = this._collider) === null || _a === undefined ? undefined : _a.localBounds) !== null && _b !== undefined ? _b : new BoundingBox;
    }
    update() {
      var _a;
      const tx = (_a = this.owner) === null || _a === undefined ? undefined : _a.get(TransformComponent);
      if (this._collider) {
        this._collider.owner = this.owner;
        if (tx) {
          this._collider.update(tx.get());
        }
      }
    }
    collide(other) {
      let colliderA = this._collider;
      let colliderB = other._collider;
      if (!colliderA || !colliderB) {
        return [];
      }
      let flipped = false;
      if (colliderB instanceof CompositeCollider) {
        colliderA = colliderB;
        colliderB = this._collider;
        flipped = true;
      }
      if (this._collider) {
        const contacts = colliderA.collide(colliderB);
        if (contacts) {
          if (flipped) {
            contacts.forEach((contact) => {
              contact.mtv = contact.mtv.negate();
              contact.normal = contact.normal.negate();
              contact.tangent = contact.normal.perpendicular();
              contact.colliderA = this._collider;
              contact.colliderB = other._collider;
            });
          }
          return contacts;
        }
        return [];
      }
      return [];
    }
    onAdd(entity) {
      if (this._collider) {
        this.update();
      }
      this.events.on("precollision", (evt) => {
        const precollision = evt;
        entity.events.emit("precollision", new PreCollisionEvent(precollision.target.owner, precollision.other.owner, precollision.side, precollision.intersection, precollision.contact));
        if (entity instanceof Actor) {
          entity.onPreCollisionResolve(precollision.target, precollision.other, precollision.side, precollision.contact);
        }
      });
      this.events.on("postcollision", (evt) => {
        const postcollision = evt;
        entity.events.emit("postcollision", new PostCollisionEvent(postcollision.target.owner, postcollision.other.owner, postcollision.side, postcollision.intersection, postcollision.contact));
        if (entity instanceof Actor) {
          entity.onPostCollisionResolve(postcollision.target, postcollision.other, postcollision.side, postcollision.contact);
        }
      });
      this.events.on("collisionstart", (evt) => {
        const start = evt;
        entity.events.emit("collisionstart", new CollisionStartEvent(start.target.owner, start.other.owner, start.side, start.contact));
        if (entity instanceof Actor) {
          entity.onCollisionStart(start.target, start.other, start.side, start.contact);
        }
      });
      this.events.on("collisionend", (evt) => {
        const end = evt;
        entity.events.emit("collisionend", new CollisionEndEvent(end.target.owner, end.other.owner));
        if (entity instanceof Actor) {
          entity.onCollisionEnd(end.target, end.other);
        }
      });
    }
    onRemove() {
      this.events.clear();
      this.$colliderRemoved.notifyAll(this._collider);
    }
    useBoxCollider(width, height, anchor = Vector.Half, center = Vector.Zero) {
      const collider = Shape.Box(width, height, anchor, center);
      return this.set(collider);
    }
    usePolygonCollider(points, center = Vector.Zero) {
      const poly = Shape.Polygon(points, center);
      return this.set(poly);
    }
    useCircleCollider(radius, center = Vector.Zero) {
      const collider = Shape.Circle(radius, center);
      return this.set(collider);
    }
    useEdgeCollider(begin, end) {
      const collider = Shape.Edge(begin, end);
      return this.set(collider);
    }
    useCompositeCollider(colliders) {
      return this.set(new CompositeCollider(colliders));
    }
  }
  var DegreeOfFreedom;
  (function(DegreeOfFreedom2) {
    DegreeOfFreedom2["Rotation"] = "rotation";
    DegreeOfFreedom2["X"] = "x";
    DegreeOfFreedom2["Y"] = "y";
  })(DegreeOfFreedom || (DegreeOfFreedom = {}));

  class BodyComponent extends Component {
    constructor(options) {
      var _a, _b, _c;
      super();
      this.type = "ex.body";
      this.dependencies = [TransformComponent, MotionComponent];
      this.id = createId("body", BodyComponent._ID++);
      this.events = new EventEmitter;
      this.oldTransform = new transform_Transform;
      this.__oldTransformCaptured = false;
      this.enableFixedUpdateInterpolate = true;
      this.collisionType = CollisionType.PreventCollision;
      this.group = CollisionGroup.All;
      this._mass = Physics.defaultMass;
      this.sleepMotion = Physics.sleepEpsilon * 5;
      this.canSleep = Physics.bodiesCanSleepByDefault;
      this._sleeping = false;
      this.bounciness = 0.2;
      this.friction = 0.99;
      this.useGravity = true;
      this.limitDegreeOfFreedom = [];
      this.oldVel = new Vector(0, 0);
      this.oldAcc = Vector.Zero;
      if (options) {
        this.collisionType = (_a = options.type) !== null && _a !== undefined ? _a : this.collisionType;
        this.group = (_b = options.group) !== null && _b !== undefined ? _b : this.group;
        this.useGravity = (_c = options.useGravity) !== null && _c !== undefined ? _c : this.useGravity;
      }
    }
    get matrix() {
      return this.transform.get().matrix;
    }
    get mass() {
      return this._mass;
    }
    set mass(newMass) {
      this._mass = newMass;
      this._cachedInertia = undefined;
      this._cachedInverseInertia = undefined;
    }
    get inverseMass() {
      return this.collisionType === CollisionType.Fixed ? 0 : 1 / this.mass;
    }
    get sleeping() {
      return this._sleeping;
    }
    setSleeping(sleeping) {
      this._sleeping = sleeping;
      if (!sleeping) {
        this.sleepMotion = Physics.sleepEpsilon * 5;
      } else {
        this.vel = Vector.Zero;
        this.acc = Vector.Zero;
        this.angularVelocity = 0;
        this.sleepMotion = 0;
      }
    }
    updateMotion() {
      if (this._sleeping) {
        this.setSleeping(true);
      }
      const currentMotion = this.vel.size * this.vel.size + Math.abs(this.angularVelocity * this.angularVelocity);
      const bias = Physics.sleepBias;
      this.sleepMotion = bias * this.sleepMotion + (1 - bias) * currentMotion;
      this.sleepMotion = clamp(this.sleepMotion, 0, 10 * Physics.sleepEpsilon);
      if (this.canSleep && this.sleepMotion < Physics.sleepEpsilon) {
        this.setSleeping(true);
      }
    }
    get inertia() {
      if (this._cachedInertia) {
        return this._cachedInertia;
      }
      const collider = this.owner.get(ColliderComponent);
      if (collider) {
        collider.$colliderAdded.subscribe(() => {
          this._cachedInertia = null;
        });
        collider.$colliderRemoved.subscribe(() => {
          this._cachedInertia = null;
        });
        const maybeCollider = collider.get();
        if (maybeCollider) {
          return this._cachedInertia = maybeCollider.getInertia(this.mass);
        }
      }
      return 0;
    }
    get inverseInertia() {
      if (this._cachedInverseInertia) {
        return this._cachedInverseInertia;
      }
      return this._cachedInverseInertia = this.collisionType === CollisionType.Fixed ? 0 : 1 / this.inertia;
    }
    get active() {
      var _a;
      return !!((_a = this.owner) === null || _a === undefined ? undefined : _a.active);
    }
    get center() {
      return this.globalPos;
    }
    get transform() {
      var _a;
      return (_a = this.owner) === null || _a === undefined ? undefined : _a.get(TransformComponent);
    }
    get motion() {
      var _a;
      return (_a = this.owner) === null || _a === undefined ? undefined : _a.get(MotionComponent);
    }
    get pos() {
      return this.transform.pos;
    }
    set pos(val) {
      this.transform.pos = val;
    }
    get globalPos() {
      return this.transform.globalPos;
    }
    set globalPos(val) {
      this.transform.globalPos = val;
    }
    get oldPos() {
      return this.oldTransform.pos;
    }
    get vel() {
      return this.motion.vel;
    }
    set vel(val) {
      this.motion.vel = val;
    }
    get acc() {
      return this.motion.acc;
    }
    set acc(val) {
      this.motion.acc = val;
    }
    get torque() {
      return this.motion.torque;
    }
    set torque(val) {
      this.motion.torque = val;
    }
    get oldRotation() {
      return this.oldTransform.rotation;
    }
    get rotation() {
      return this.transform.globalRotation;
    }
    set rotation(val) {
      this.transform.globalRotation = val;
    }
    get scale() {
      return this.transform.globalScale;
    }
    set scale(val) {
      this.transform.globalScale = val;
    }
    get oldScale() {
      return this.oldTransform.scale;
    }
    get scaleFactor() {
      return this.motion.scaleFactor;
    }
    set scaleFactor(scaleFactor) {
      this.motion.scaleFactor = scaleFactor;
    }
    get angularVelocity() {
      return this.motion.angularVelocity;
    }
    set angularVelocity(value) {
      this.motion.angularVelocity = value;
    }
    applyImpulse(point2, impulse) {
      if (this.collisionType !== CollisionType.Active) {
        return;
      }
      const finalImpulse = impulse.scale(this.inverseMass);
      if (this.limitDegreeOfFreedom.includes(DegreeOfFreedom.X)) {
        finalImpulse.x = 0;
      }
      if (this.limitDegreeOfFreedom.includes(DegreeOfFreedom.Y)) {
        finalImpulse.y = 0;
      }
      this.vel.addEqual(finalImpulse);
      if (!this.limitDegreeOfFreedom.includes(DegreeOfFreedom.Rotation)) {
        const distanceFromCenter = point2.sub(this.globalPos);
        this.angularVelocity += this.inverseInertia * distanceFromCenter.cross(impulse);
      }
    }
    applyLinearImpulse(impulse) {
      if (this.collisionType !== CollisionType.Active) {
        return;
      }
      const finalImpulse = impulse.scale(this.inverseMass);
      if (this.limitDegreeOfFreedom.includes(DegreeOfFreedom.X)) {
        finalImpulse.x = 0;
      }
      if (this.limitDegreeOfFreedom.includes(DegreeOfFreedom.Y)) {
        finalImpulse.y = 0;
      }
      this.vel = this.vel.add(finalImpulse);
    }
    applyAngularImpulse(point2, impulse) {
      if (this.collisionType !== CollisionType.Active) {
        return;
      }
      if (!this.limitDegreeOfFreedom.includes(DegreeOfFreedom.Rotation)) {
        const distanceFromCenter = point2.sub(this.globalPos);
        this.angularVelocity += this.inverseInertia * distanceFromCenter.cross(impulse);
      }
    }
    captureOldTransform() {
      this.__oldTransformCaptured = true;
      const tx = this.transform.get();
      tx.clone(this.oldTransform);
      this.oldTransform.parent = tx.parent;
      this.oldVel.setTo(this.vel.x, this.vel.y);
      this.oldAcc.setTo(this.acc.x, this.acc.y);
    }
    clone() {
      const component = super.clone();
      return component;
    }
  }
  BodyComponent._ID = 0;

  class AddedComponent {
    constructor(data) {
      this.data = data;
      this.type = "Component Added";
    }
  }
  function isAddedComponent(x) {
    return !!x && x.type === "Component Added";
  }

  class RemovedComponent {
    constructor(data) {
      this.data = data;
      this.type = "Component Removed";
    }
  }
  function isRemovedComponent(x) {
    return !!x && x.type === "Component Removed";
  }
  const EntityEvents = {
    Initialize: "initialize",
    PreUpdate: "preupdate",
    PostUpdate: "postupdate",
    Kill: "kill"
  };

  class Entity {
    constructor(components, name) {
      this.events = new EventEmitter;
      this.id = Entity._ID++;
      this.scene = null;
      this._name = "anonymous";
      this.active = true;
      this._componentsToRemove = [];
      this._componentTypeToInstance = new Map;
      this._componentStringToInstance = new Map;
      this._tagsMemo = [];
      this._typesMemo = [];
      this.componentAdded$ = new Observable;
      this.componentRemoved$ = new Observable;
      this._parent = null;
      this.childrenAdded$ = new Observable;
      this.childrenRemoved$ = new Observable;
      this._children = [];
      this._isInitialized = false;
      this._setName(name);
      if (components) {
        for (const component of components) {
          this.addComponent(component);
        }
      }
    }
    _setName(name) {
      if (name) {
        this._name = name;
      } else {
        this._name = `Entity#${this.id}`;
      }
    }
    get name() {
      return this._name;
    }
    set name(name) {
      this._setName(name);
    }
    kill() {
      if (this.active) {
        this.active = false;
        this.unparent();
      }
      this.emit("kill", new KillEvent(this));
    }
    isKilled() {
      return !this.active;
    }
    get tags() {
      return this._tagsMemo;
    }
    hasTag(tag) {
      return this.tags.includes(tag);
    }
    addTag(tag) {
      return this.addComponent(new TagComponent(tag));
    }
    removeTag(tag, force = false) {
      return this.removeComponent(tag, force);
    }
    get types() {
      return this._typesMemo;
    }
    _rebuildMemos() {
      this._tagsMemo = Array.from(this._componentStringToInstance.values()).filter((c) => c instanceof TagComponent).map((c) => c.type);
      this._typesMemo = Array.from(this._componentStringToInstance.keys());
    }
    getComponents() {
      return Array.from(this._componentStringToInstance.values());
    }
    _notifyAddComponent(component) {
      this._rebuildMemos();
      const added = new AddedComponent({
        component,
        entity: this
      });
      this.componentAdded$.notifyAll(added);
    }
    _notifyRemoveComponent(component) {
      const removed = new RemovedComponent({
        component,
        entity: this
      });
      this.componentRemoved$.notifyAll(removed);
      this._rebuildMemos();
    }
    get parent() {
      return this._parent;
    }
    get children() {
      return this._children;
    }
    unparent() {
      if (this._parent) {
        this._parent.removeChild(this);
        this._parent = null;
      }
    }
    addChild(entity) {
      if (entity.parent === null) {
        if (this.getAncestors().includes(entity)) {
          throw new Error("Cycle detected, cannot add entity");
        }
        this._children.push(entity);
        entity._parent = this;
        this.childrenAdded$.notifyAll(entity);
      } else {
        throw new Error("Entity already has a parent, cannot add without unparenting");
      }
      return this;
    }
    removeChild(entity) {
      if (entity.parent === this) {
        removeItemFromArray(entity, this._children);
        entity._parent = null;
        this.childrenRemoved$.notifyAll(entity);
      }
      return this;
    }
    removeAllChildren() {
      for (let i = this.children.length - 1;i >= 0; i--) {
        this.removeChild(this.children[i]);
      }
      return this;
    }
    getAncestors() {
      const result = [this];
      let current = this.parent;
      while (current) {
        result.push(current);
        current = current.parent;
      }
      return result.reverse();
    }
    getDescendants() {
      let result = [this];
      let queue = [this];
      while (queue.length > 0) {
        const curr = queue.pop();
        queue = queue.concat(curr.children);
        result = result.concat(curr.children);
      }
      return result;
    }
    clone() {
      const newEntity = new Entity;
      for (const c of this.types) {
        newEntity.addComponent(this.get(c).clone());
      }
      for (const child of this.children) {
        newEntity.addChild(child.clone());
      }
      return newEntity;
    }
    addTemplate(templateEntity, force = false) {
      for (const c of templateEntity.getComponents()) {
        this.addComponent(c.clone(), force);
      }
      for (const child of templateEntity.children) {
        this.addChild(child.clone().addTemplate(child));
      }
      return this;
    }
    addComponent(component, force = false) {
      if (this.has(component.type)) {
        if (force) {
          this.removeComponent(component, true);
        } else {
          return this;
        }
      }
      if (component.dependencies && component.dependencies.length) {
        for (const ctor of component.dependencies) {
          this.addComponent(new ctor);
        }
      }
      component.owner = this;
      const constuctorType = component.constructor;
      this._componentTypeToInstance.set(constuctorType, component);
      this._componentStringToInstance.set(component.type, component);
      if (component.onAdd) {
        component.onAdd(this);
      }
      this._notifyAddComponent(component);
      return this;
    }
    removeComponent(componentOrType, force = false) {
      if (force) {
        if (typeof componentOrType === "string") {
          this._removeComponentByType(componentOrType);
        } else if (componentOrType instanceof Component) {
          this._removeComponentByType(componentOrType.type);
        }
      } else {
        this._componentsToRemove.push(componentOrType);
      }
      return this;
    }
    clearComponents() {
      const components = this.getComponents();
      for (const c of components) {
        this.removeComponent(c);
      }
    }
    _removeComponentByType(type) {
      if (this.has(type)) {
        const component = this.get(type);
        component.owner = null;
        if (component.onRemove) {
          component.onRemove(this);
        }
        const ctor = component.constructor;
        this._componentTypeToInstance.delete(ctor);
        this._componentStringToInstance.delete(component.type);
        this._notifyRemoveComponent(component);
      }
    }
    processComponentRemoval() {
      for (const componentOrType of this._componentsToRemove) {
        const type = typeof componentOrType === "string" ? componentOrType : componentOrType.type;
        this._removeComponentByType(type);
      }
      this._componentsToRemove.length = 0;
    }
    has(type) {
      if (typeof type === "string") {
        return this._componentStringToInstance.has(type);
      } else {
        return this._componentTypeToInstance.has(type);
      }
    }
    get(type) {
      if (typeof type === "string") {
        return this._componentStringToInstance.get(type);
      } else {
        return this._componentTypeToInstance.get(type);
      }
    }
    get isInitialized() {
      return this._isInitialized;
    }
    _initialize(engine) {
      if (!this.isInitialized) {
        this.onInitialize(engine);
        this.events.emit("initialize", new InitializeEvent(engine, this));
        this._isInitialized = true;
      }
    }
    _preupdate(engine, delta) {
      this.events.emit("preupdate", new PreUpdateEvent(engine, delta, this));
      this.onPreUpdate(engine, delta);
    }
    _postupdate(engine, delta) {
      this.events.emit("postupdate", new PostUpdateEvent(engine, delta, this));
      this.onPostUpdate(engine, delta);
    }
    onInitialize(engine) {
    }
    onPreUpdate(engine, delta) {
    }
    onPostUpdate(engine, delta) {
    }
    update(engine, delta) {
      this._initialize(engine);
      this._preupdate(engine, delta);
      for (const child of this.children) {
        child.update(engine, delta);
      }
      this._postupdate(engine, delta);
    }
    emit(eventName, event) {
      this.events.emit(eventName, event);
    }
    on(eventName, handler) {
      return this.events.on(eventName, handler);
    }
    once(eventName, handler) {
      return this.events.once(eventName, handler);
    }
    off(eventName, handler) {
      this.events.off(eventName, handler);
    }
  }
  Entity._ID = 0;
  function hasGraphicsTick(graphic) {
    return !!graphic.tick;
  }

  class GraphicsLayer {
    constructor(_options, _graphics) {
      this._options = _options;
      this._graphics = _graphics;
      this.graphics = [];
    }
    get name() {
      return this._options.name;
    }
    hide(nameOrGraphic) {
      if (!nameOrGraphic) {
        this.graphics.length = 0;
      } else {
        let gfx = null;
        if (nameOrGraphic instanceof Graphic) {
          gfx = nameOrGraphic;
        } else {
          gfx = this._graphics.getGraphic(nameOrGraphic);
        }
        this.graphics = this.graphics.filter((g) => g.graphic !== gfx);
        this._graphics.recalculateBounds();
      }
    }
    show(nameOrGraphic, options) {
      options = { ...options };
      let gfx;
      if (nameOrGraphic instanceof Graphic) {
        gfx = this._graphics.copyGraphics ? nameOrGraphic.clone() : nameOrGraphic;
      } else {
        gfx = this._graphics.getGraphic(nameOrGraphic);
        if (!gfx) {
          Logger.getInstance().error(`No such graphic added to component named ${nameOrGraphic}. These named graphics are available: `, this._graphics.getNames());
        }
      }
      if (gfx) {
        this.graphics.push({ graphic: gfx, options });
        this._graphics.recalculateBounds();
        return gfx;
      } else {
        return null;
      }
    }
    use(nameOrGraphic, options) {
      options = { ...options };
      this.hide();
      return this.show(nameOrGraphic, options);
    }
    get order() {
      return this._options.order;
    }
    set order(order) {
      this._options.order = order;
    }
    get offset() {
      var _a;
      return (_a = this._options.offset) !== null && _a !== undefined ? _a : Vector.Zero;
    }
    set offset(value) {
      this._options.offset = value;
    }
    get currentKeys() {
      var _a;
      return (_a = this.name) !== null && _a !== undefined ? _a : "anonymous";
    }
    clone(graphicsComponent) {
      const layer = new GraphicsLayer({ ...this._options }, graphicsComponent);
      layer.graphics = [...this.graphics.map((g) => ({ graphic: g.graphic.clone(), options: { ...g.options } }))];
      return layer;
    }
  }

  class GraphicsLayers {
    constructor(_component) {
      this._component = _component;
      this._layers = [];
      this._layerMap = {};
      this.default = new GraphicsLayer({ name: "default", order: 0 }, _component);
      this._maybeAddLayer(this.default);
    }
    create(options) {
      const layer = new GraphicsLayer(options, this._component);
      return this._maybeAddLayer(layer);
    }
    get(name) {
      if (name) {
        return this._getLayer(name);
      }
      return this._layers;
    }
    currentKeys() {
      const graphicsLayerKeys = [];
      for (const layer of this._layers) {
        graphicsLayerKeys.push(layer.currentKeys);
      }
      return graphicsLayerKeys;
    }
    has(name) {
      return name in this._layerMap;
    }
    _maybeAddLayer(layer) {
      if (this._layerMap[layer.name]) {
        return this._layerMap[layer.name];
      }
      this._layerMap[layer.name] = layer;
      this._layers.push(layer);
      this._layers.sort((a, b) => a.order - b.order);
      return layer;
    }
    _getLayer(name) {
      return this._layerMap[name];
    }
    clone(graphicsComponent) {
      const layers = new GraphicsLayers(graphicsComponent);
      layers._layerMap = {};
      layers._layers = [];
      layers.default = this.default.clone(graphicsComponent);
      layers._maybeAddLayer(layers.default);
      const clonedLayers = this._layers.filter((l) => l.name !== "default").map((l) => l.clone(graphicsComponent));
      clonedLayers.forEach((layer) => layers._maybeAddLayer(layer));
      return layers;
    }
  }

  class GraphicsComponent extends Component {
    getGraphic(name) {
      return this._graphics[name];
    }
    getNames() {
      return Object.keys(this._graphics);
    }
    constructor(options) {
      super();
      this.type = "ex.graphics";
      this._graphics = {};
      this.material = null;
      this.visible = true;
      this.opacity = 1;
      this.offset = Vector.Zero;
      this.anchor = Vector.Half;
      this.flipHorizontal = false;
      this.flipVertical = false;
      this.copyGraphics = false;
      this._localBounds = null;
      options = {
        visible: this.visible,
        ...options
      };
      const { current, anchor, opacity, visible, graphics, offset, copyGraphics, onPreDraw, onPostDraw } = options;
      this._graphics = graphics || {};
      this.offset = offset !== null && offset !== undefined ? offset : this.offset;
      this.opacity = opacity !== null && opacity !== undefined ? opacity : this.opacity;
      this.anchor = anchor !== null && anchor !== undefined ? anchor : this.anchor;
      this.copyGraphics = copyGraphics !== null && copyGraphics !== undefined ? copyGraphics : this.copyGraphics;
      this.onPreDraw = onPreDraw !== null && onPreDraw !== undefined ? onPreDraw : this.onPreDraw;
      this.onPostDraw = onPostDraw !== null && onPostDraw !== undefined ? onPostDraw : this.onPostDraw;
      this.visible = !!visible;
      this.layers = new GraphicsLayers(this);
      if (current && this._graphics[current]) {
        this.show(this._graphics[current]);
      }
    }
    get current() {
      return this.layers.default.graphics;
    }
    get graphics() {
      return this._graphics;
    }
    add(nameOrGraphic, graphic) {
      let name = "default";
      let graphicToSet = null;
      if (typeof nameOrGraphic === "string") {
        name = nameOrGraphic;
        graphicToSet = graphic;
      } else {
        graphicToSet = nameOrGraphic;
      }
      this._graphics[name] = this.copyGraphics ? graphicToSet.clone() : graphicToSet;
      if (name === "default") {
        this.show("default");
      }
      return graphicToSet;
    }
    show(nameOrGraphic, options) {
      const result = this.layers.default.show(nameOrGraphic, options);
      this.recalculateBounds();
      return result;
    }
    use(nameOrGraphic, options) {
      const result = this.layers.default.use(nameOrGraphic, options);
      this.recalculateBounds();
      return result;
    }
    hide(nameOrGraphic) {
      this.layers.default.hide(nameOrGraphic);
    }
    set localBounds(bounds) {
      this._localBounds = bounds;
    }
    recalculateBounds() {
      let bb = new BoundingBox;
      for (const layer of this.layers.get()) {
        for (const { graphic, options } of layer.graphics) {
          let anchor = this.anchor;
          let offset = this.offset;
          if (options === null || options === undefined ? undefined : options.anchor) {
            anchor = options.anchor;
          }
          if (options === null || options === undefined ? undefined : options.offset) {
            offset = options.offset;
          }
          const bounds = graphic.localBounds;
          const offsetX = -bounds.width * anchor.x + offset.x;
          const offsetY = -bounds.height * anchor.y + offset.y;
          bb = graphic === null || graphic === undefined ? undefined : graphic.localBounds.translate(vec(offsetX + layer.offset.x, offsetY + layer.offset.y)).combine(bb);
        }
      }
      this._localBounds = bb;
    }
    get localBounds() {
      if (!this._localBounds || this._localBounds.hasZeroDimensions()) {
        this.recalculateBounds();
      }
      return this._localBounds;
    }
    update(elapsed, idempotencyToken = 0) {
      for (const layer of this.layers.get()) {
        for (const { graphic } of layer.graphics) {
          if (hasGraphicsTick(graphic)) {
            graphic === null || graphic === undefined || graphic.tick(elapsed, idempotencyToken);
          }
        }
      }
    }
    clone() {
      const graphics = new GraphicsComponent;
      graphics._graphics = { ...this._graphics };
      graphics.offset = this.offset.clone();
      graphics.opacity = this.opacity;
      graphics.anchor = this.anchor.clone();
      graphics.copyGraphics = this.copyGraphics;
      graphics.onPreDraw = this.onPreDraw;
      graphics.onPostDraw = this.onPostDraw;
      graphics.visible = this.visible;
      graphics.layers = this.layers.clone(graphics);
      return graphics;
    }
  }

  class Rectangle extends Raster {
    constructor(options) {
      super(options);
      this.width = options.width;
      this.height = options.height;
      this.rasterize();
    }
    clone() {
      return new Rectangle({
        width: this.width,
        height: this.height,
        ...this.cloneGraphicOptions(),
        ...this.cloneRasterOptions()
      });
    }
    execute(ctx) {
      if (this.color) {
        ctx.fillRect(0, 0, this.width, this.height);
      }
      if (this.strokeColor) {
        ctx.strokeRect(0, 0, this.width, this.height);
      }
    }
  }

  class Circle extends Raster {
    get radius() {
      return this._radius;
    }
    set radius(value) {
      this._radius = value;
      this.width = this._radius * 2;
      this.height = this._radius * 2;
      this.flagDirty();
    }
    constructor(options) {
      var _a, _b, _c;
      super(options);
      this._radius = 0;
      const lineWidth = (_a = options.lineWidth) !== null && _a !== undefined ? _a : options.strokeColor ? 1 : 0;
      this.padding = (_b = options.padding) !== null && _b !== undefined ? _b : 2 + lineWidth / 2;
      this.radius = options.radius;
      this.filtering = (_c = options.filtering) !== null && _c !== undefined ? _c : ImageFiltering.Blended;
      this.rasterize();
    }
    clone() {
      return new Circle({
        radius: this.radius,
        ...this.cloneGraphicOptions(),
        ...this.cloneRasterOptions()
      });
    }
    execute(ctx) {
      if (this.radius > 0) {
        ctx.beginPath();
        ctx.arc(this.radius, this.radius, this.radius, 0, Math.PI * 2);
        if (this.color) {
          ctx.fill();
        }
        if (this.strokeColor) {
          ctx.stroke();
        }
      }
    }
  }

  class PointerComponent extends Component {
    constructor() {
      super(...arguments);
      this.type = "ex.pointer";
      this.useColliderShape = true;
      this.useGraphicsBounds = false;
    }
  }

  class EasingFunctions {
    static CreateReversibleEasingFunction(easing) {
      return (time, start, end, duration) => {
        if (end < start) {
          return start - (easing(time, end, start, duration) - end);
        } else {
          return easing(time, start, end, duration);
        }
      };
    }
    static CreateVectorEasingFunction(easing) {
      return (time, start, end, duration) => {
        return new Vector(easing(time, start.x, end.x, duration), easing(time, start.y, end.y, duration));
      };
    }
  }
  EasingFunctions.Linear = EasingFunctions.CreateReversibleEasingFunction((currentTime, startValue, endValue, duration) => {
    endValue = endValue - startValue;
    return endValue * currentTime / duration + startValue;
  });
  EasingFunctions.EaseInQuad = EasingFunctions.CreateReversibleEasingFunction((currentTime, startValue, endValue, duration) => {
    endValue = endValue - startValue;
    currentTime /= duration;
    return endValue * currentTime * currentTime + startValue;
  });
  EasingFunctions.EaseOutQuad = EasingFunctions.CreateReversibleEasingFunction((currentTime, startValue, endValue, duration) => {
    endValue = endValue - startValue;
    currentTime /= duration;
    return -endValue * currentTime * (currentTime - 2) + startValue;
  });
  EasingFunctions.EaseInOutQuad = EasingFunctions.CreateReversibleEasingFunction((currentTime, startValue, endValue, duration) => {
    endValue = endValue - startValue;
    currentTime /= duration / 2;
    if (currentTime < 1) {
      return endValue / 2 * currentTime * currentTime + startValue;
    }
    currentTime--;
    return -endValue / 2 * (currentTime * (currentTime - 2) - 1) + startValue;
  });
  EasingFunctions.EaseInCubic = EasingFunctions.CreateReversibleEasingFunction((currentTime, startValue, endValue, duration) => {
    endValue = endValue - startValue;
    currentTime /= duration;
    return endValue * currentTime * currentTime * currentTime + startValue;
  });
  EasingFunctions.EaseOutCubic = EasingFunctions.CreateReversibleEasingFunction((currentTime, startValue, endValue, duration) => {
    endValue = endValue - startValue;
    currentTime /= duration;
    currentTime--;
    return endValue * (currentTime * currentTime * currentTime + 1) + startValue;
  });
  EasingFunctions.EaseInOutCubic = EasingFunctions.CreateReversibleEasingFunction((currentTime, startValue, endValue, duration) => {
    endValue = endValue - startValue;
    currentTime /= duration / 2;
    if (currentTime < 1) {
      return endValue / 2 * currentTime * currentTime * currentTime + startValue;
    }
    currentTime -= 2;
    return endValue / 2 * (currentTime * currentTime * currentTime + 2) + startValue;
  });

  class ActionQueue {
    constructor(entity) {
      this._actions = [];
      this._completedActions = [];
      this._entity = entity;
    }
    add(action) {
      this._actions.push(action);
    }
    remove(action) {
      const index = this._actions.indexOf(action);
      this._actions.splice(index, 1);
    }
    clearActions() {
      this._actions.length = 0;
      this._completedActions.length = 0;
      if (this._currentAction) {
        this._currentAction.stop();
      }
    }
    getActions() {
      return this._actions.concat(this._completedActions);
    }
    hasNext() {
      return this._actions.length > 0;
    }
    isComplete() {
      return this._actions.length === 0;
    }
    reset() {
      this._actions = this.getActions();
      const len = this._actions.length;
      for (let i = 0;i < len; i++) {
        this._actions[i].reset();
      }
      this._completedActions = [];
    }
    update(elapsedMs) {
      if (this._actions.length > 0) {
        if (this._currentAction !== this._actions[0]) {
          this._currentAction = this._actions[0];
          this._entity.emit("actionstart", new ActionStartEvent(this._currentAction, this._entity));
        }
        this._currentAction.update(elapsedMs);
        if (this._currentAction.isComplete(this._entity)) {
          this._entity.emit("actioncomplete", new ActionCompleteEvent(this._currentAction, this._entity));
          this._completedActions.push(this._actions.shift());
        }
      }
    }
  }

  class Repeat {
    constructor(entity, repeatBuilder, repeat) {
      this._stopped = false;
      this._repeatBuilder = repeatBuilder;
      this._repeatContext = new ActionContext(entity);
      this._actionQueue = this._repeatContext.getQueue();
      this._repeat = repeat;
      this._originalRepeat = repeat;
      this._repeatBuilder(this._repeatContext);
      this._repeat--;
    }
    update(delta) {
      if (this._actionQueue.isComplete()) {
        this._actionQueue.clearActions();
        this._repeatBuilder(this._repeatContext);
        this._repeat--;
      }
      this._actionQueue.update(delta);
    }
    isComplete() {
      return this._stopped || this._repeat <= 0 && this._actionQueue.isComplete();
    }
    stop() {
      this._stopped = true;
    }
    reset() {
      this._repeat = this._originalRepeat;
    }
  }

  class RepeatForever {
    constructor(entity, repeatBuilder) {
      this._stopped = false;
      this._repeatBuilder = repeatBuilder;
      this._repeatContext = new ActionContext(entity);
      this._actionQueue = this._repeatContext.getQueue();
      this._repeatBuilder(this._repeatContext);
    }
    update(delta) {
      if (this._stopped) {
        return;
      }
      if (this._actionQueue.isComplete()) {
        this._actionQueue.clearActions();
        this._repeatBuilder(this._repeatContext);
      }
      this._actionQueue.update(delta);
    }
    isComplete() {
      return this._stopped;
    }
    stop() {
      this._stopped = true;
      this._actionQueue.clearActions();
    }
    reset() {
      return;
    }
  }

  class MoveBy {
    constructor(entity, offsetX, offsetY, speed) {
      this._started = false;
      this._stopped = false;
      this._entity = entity;
      this._tx = entity.get(TransformComponent);
      this._motion = entity.get(MotionComponent);
      this._speed = speed;
      this._offset = new Vector(offsetX, offsetY);
      if (speed <= 0) {
        Logger.getInstance().error("Attempted to moveBy with speed less than or equal to zero : " + speed);
        throw new Error("Speed must be greater than 0 pixels per second");
      }
    }
    update(_delta) {
      if (!this._started) {
        this._started = true;
        this._start = new Vector(this._tx.pos.x, this._tx.pos.y);
        this._end = this._start.add(this._offset);
        this._distance = this._offset.size;
        this._dir = this._end.sub(this._start).normalize();
      }
      if (this.isComplete(this._entity)) {
        this._tx.pos = vec(this._end.x, this._end.y);
        this._motion.vel = vec(0, 0);
      } else {
        this._motion.vel = this._dir.scale(this._speed);
      }
    }
    isComplete(entity) {
      const tx = entity.get(TransformComponent);
      return this._stopped || tx.pos.distance(this._start) >= this._distance;
    }
    stop() {
      this._motion.vel = vec(0, 0);
      this._stopped = true;
    }
    reset() {
      this._started = false;
      this._stopped = false;
    }
  }

  class MoveTo {
    constructor(entity, destx, desty, speed) {
      this.entity = entity;
      this._started = false;
      this._stopped = false;
      this._tx = entity.get(TransformComponent);
      this._motion = entity.get(MotionComponent);
      this._end = new Vector(destx, desty);
      this._speed = speed;
    }
    update(_delta) {
      if (!this._started) {
        this._started = true;
        this._start = new Vector(this._tx.pos.x, this._tx.pos.y);
        this._distance = this._start.distance(this._end);
        this._dir = this._end.sub(this._start).normalize();
      }
      const m = this._dir.scale(this._speed);
      this._motion.vel = vec(m.x, m.y);
      if (this.isComplete(this.entity)) {
        this._tx.pos = vec(this._end.x, this._end.y);
        this._motion.vel = vec(0, 0);
      }
    }
    isComplete(entity) {
      const tx = entity.get(TransformComponent);
      return this._stopped || new Vector(tx.pos.x, tx.pos.y).distance(this._start) >= this._distance;
    }
    stop() {
      this._motion.vel = vec(0, 0);
      this._stopped = true;
    }
    reset() {
      this._started = false;
      this._stopped = false;
    }
  }
  var RotationType;
  (function(RotationType2) {
    RotationType2[RotationType2["ShortestPath"] = 0] = "ShortestPath";
    RotationType2[RotationType2["LongestPath"] = 1] = "LongestPath";
    RotationType2[RotationType2["Clockwise"] = 2] = "Clockwise";
    RotationType2[RotationType2["CounterClockwise"] = 3] = "CounterClockwise";
  })(RotationType || (RotationType = {}));

  class RotateTo {
    constructor(entity, angleRadians, speed, rotationType) {
      this._started = false;
      this._stopped = false;
      this._tx = entity.get(TransformComponent);
      this._motion = entity.get(MotionComponent);
      this._end = angleRadians;
      this._speed = speed;
      this._rotationType = rotationType || RotationType.ShortestPath;
    }
    update(_delta) {
      if (!this._started) {
        this._started = true;
        this._start = this._tx.rotation;
        this._currentNonCannonAngle = this._tx.rotation;
        const distance1 = Math.abs(this._end - this._start);
        const distance2 = TwoPI - distance1;
        if (distance1 > distance2) {
          this._shortDistance = distance2;
          this._longDistance = distance1;
        } else {
          this._shortDistance = distance1;
          this._longDistance = distance2;
        }
        this._shortestPathIsPositive = (this._start - this._end + TwoPI) % TwoPI >= Math.PI;
        switch (this._rotationType) {
          case RotationType.ShortestPath:
            this._distance = this._shortDistance;
            if (this._shortestPathIsPositive) {
              this._direction = 1;
            } else {
              this._direction = -1;
            }
            break;
          case RotationType.LongestPath:
            this._distance = this._longDistance;
            if (this._shortestPathIsPositive) {
              this._direction = -1;
            } else {
              this._direction = 1;
            }
            break;
          case RotationType.Clockwise:
            this._direction = 1;
            if (this._shortestPathIsPositive) {
              this._distance = this._shortDistance;
            } else {
              this._distance = this._longDistance;
            }
            break;
          case RotationType.CounterClockwise:
            this._direction = -1;
            if (!this._shortestPathIsPositive) {
              this._distance = this._shortDistance;
            } else {
              this._distance = this._longDistance;
            }
            break;
        }
      }
      this._motion.angularVelocity = this._direction * this._speed;
      this._currentNonCannonAngle += this._direction * this._speed * (_delta / 1000);
      if (this.isComplete()) {
        this._tx.rotation = this._end;
        this._motion.angularVelocity = 0;
        this._stopped = true;
      }
    }
    isComplete() {
      const distanceTraveled = Math.abs(this._currentNonCannonAngle - this._start);
      return this._stopped || distanceTraveled >= Math.abs(this._distance);
    }
    stop() {
      this._motion.angularVelocity = 0;
      this._stopped = true;
    }
    reset() {
      this._started = false;
      this._stopped = false;
    }
  }

  class RotateBy {
    constructor(entity, angleRadiansOffset, speed, rotationType) {
      this._started = false;
      this._stopped = false;
      this._tx = entity.get(TransformComponent);
      this._motion = entity.get(MotionComponent);
      this._speed = speed;
      this._offset = angleRadiansOffset;
      this._rotationType = rotationType || RotationType.ShortestPath;
    }
    update(_delta) {
      if (!this._started) {
        this._started = true;
        this._start = this._tx.rotation;
        this._currentNonCannonAngle = this._tx.rotation;
        this._end = this._start + this._offset;
        const distance1 = Math.abs(this._end - this._start);
        const distance2 = TwoPI - distance1;
        if (distance1 > distance2) {
          this._shortDistance = distance2;
          this._longDistance = distance1;
        } else {
          this._shortDistance = distance1;
          this._longDistance = distance2;
        }
        this._shortestPathIsPositive = (this._start - this._end + TwoPI) % TwoPI >= Math.PI;
        switch (this._rotationType) {
          case RotationType.ShortestPath:
            this._distance = this._shortDistance;
            if (this._shortestPathIsPositive) {
              this._direction = 1;
            } else {
              this._direction = -1;
            }
            break;
          case RotationType.LongestPath:
            this._distance = this._longDistance;
            if (this._shortestPathIsPositive) {
              this._direction = -1;
            } else {
              this._direction = 1;
            }
            break;
          case RotationType.Clockwise:
            this._direction = 1;
            if (this._shortDistance >= 0) {
              this._distance = this._shortDistance;
            } else {
              this._distance = this._longDistance;
            }
            break;
          case RotationType.CounterClockwise:
            this._direction = -1;
            if (this._shortDistance <= 0) {
              this._distance = this._shortDistance;
            } else {
              this._distance = this._longDistance;
            }
            break;
        }
      }
      this._motion.angularVelocity = this._direction * this._speed;
      this._currentNonCannonAngle += this._direction * this._speed * (_delta / 1000);
      if (this.isComplete()) {
        this._tx.rotation = this._end;
        this._motion.angularVelocity = 0;
        this._stopped = true;
      }
    }
    isComplete() {
      const distanceTraveled = Math.abs(this._currentNonCannonAngle - this._start);
      return this._stopped || distanceTraveled >= Math.abs(this._distance);
    }
    stop() {
      this._motion.angularVelocity = 0;
      this._stopped = true;
    }
    reset() {
      this._started = false;
      this._stopped = false;
      this._start = undefined;
      this._currentNonCannonAngle = undefined;
      this._distance = undefined;
    }
  }

  class ScaleTo {
    constructor(entity, scaleX, scaleY, speedX, speedY) {
      this._started = false;
      this._stopped = false;
      this._tx = entity.get(TransformComponent);
      this._motion = entity.get(MotionComponent);
      this._endX = scaleX;
      this._endY = scaleY;
      this._speedX = speedX;
      this._speedY = speedY;
    }
    update(_delta) {
      if (!this._started) {
        this._started = true;
        this._startX = this._tx.scale.x;
        this._startY = this._tx.scale.y;
        this._distanceX = Math.abs(this._endX - this._startX);
        this._distanceY = Math.abs(this._endY - this._startY);
      }
      if (!(Math.abs(this._tx.scale.x - this._startX) >= this._distanceX)) {
        const directionX = this._endY < this._startY ? -1 : 1;
        this._motion.scaleFactor.x = this._speedX * directionX;
      } else {
        this._motion.scaleFactor.x = 0;
      }
      if (!(Math.abs(this._tx.scale.y - this._startY) >= this._distanceY)) {
        const directionY = this._endY < this._startY ? -1 : 1;
        this._motion.scaleFactor.y = this._speedY * directionY;
      } else {
        this._motion.scaleFactor.y = 0;
      }
      if (this.isComplete()) {
        this._tx.scale = vec(this._endX, this._endY);
        this._motion.scaleFactor.x = 0;
        this._motion.scaleFactor.y = 0;
      }
    }
    isComplete() {
      return this._stopped || Math.abs(this._tx.scale.x - this._startX) >= this._distanceX - 0.01 && Math.abs(this._tx.scale.y - this._startY) >= this._distanceY - 0.01;
    }
    stop() {
      this._motion.scaleFactor.x = 0;
      this._motion.scaleFactor.y = 0;
      this._stopped = true;
    }
    reset() {
      this._started = false;
      this._stopped = false;
    }
  }

  class ScaleBy {
    constructor(entity, scaleOffsetX, scaleOffsetY, speed) {
      this._started = false;
      this._stopped = false;
      this._tx = entity.get(TransformComponent);
      this._motion = entity.get(MotionComponent);
      this._offset = new Vector(scaleOffsetX, scaleOffsetY);
      this._speedX = this._speedY = speed;
    }
    update(_delta) {
      if (!this._started) {
        this._started = true;
        this._startScale = this._tx.scale.clone();
        this._endScale = this._startScale.add(this._offset);
        this._distanceX = Math.abs(this._endScale.x - this._startScale.x);
        this._distanceY = Math.abs(this._endScale.y - this._startScale.y);
        this._directionX = this._endScale.x < this._startScale.x ? -1 : 1;
        this._directionY = this._endScale.y < this._startScale.y ? -1 : 1;
      }
      this._motion.scaleFactor.x = this._speedX * this._directionX;
      this._motion.scaleFactor.y = this._speedY * this._directionY;
      if (this.isComplete()) {
        this._tx.scale = this._endScale;
        this._motion.scaleFactor.x = 0;
        this._motion.scaleFactor.y = 0;
      }
    }
    isComplete() {
      return this._stopped || Math.abs(this._tx.scale.x - this._startScale.x) >= this._distanceX - 0.01 && Math.abs(this._tx.scale.y - this._startScale.y) >= this._distanceY - 0.01;
    }
    stop() {
      this._motion.scaleFactor.x = 0;
      this._motion.scaleFactor.y = 0;
      this._stopped = true;
    }
    reset() {
      this._started = false;
      this._stopped = false;
    }
  }

  class CallMethod {
    constructor(method) {
      this._method = null;
      this._hasBeenCalled = false;
      this._method = method;
    }
    update(_delta) {
      this._method();
      this._hasBeenCalled = true;
    }
    isComplete() {
      return this._hasBeenCalled;
    }
    reset() {
      this._hasBeenCalled = false;
    }
    stop() {
      this._hasBeenCalled = true;
    }
  }

  class EaseTo {
    constructor(entity, x, y, duration, easingFcn) {
      this.easingFcn = easingFcn;
      this._currentLerpTime = 0;
      this._lerpDuration = 1 * 1000;
      this._lerpStart = new Vector(0, 0);
      this._lerpEnd = new Vector(0, 0);
      this._initialized = false;
      this._stopped = false;
      this._tx = entity.get(TransformComponent);
      this._motion = entity.get(MotionComponent);
      this._lerpDuration = duration;
      this._lerpEnd = new Vector(x, y);
    }
    _initialize() {
      this._lerpStart = new Vector(this._tx.pos.x, this._tx.pos.y);
      this._currentLerpTime = 0;
    }
    update(delta) {
      if (!this._initialized) {
        this._initialize();
        this._initialized = true;
      }
      this._currentLerpTime += delta;
      let newX = this._tx.pos.x;
      let newY = this._tx.pos.y;
      if (this._currentLerpTime < this._lerpDuration) {
        if (this._lerpEnd.x < this._lerpStart.x) {
          newX = this._lerpStart.x - (this.easingFcn(this._currentLerpTime, this._lerpEnd.x, this._lerpStart.x, this._lerpDuration) - this._lerpEnd.x);
        } else {
          newX = this.easingFcn(this._currentLerpTime, this._lerpStart.x, this._lerpEnd.x, this._lerpDuration);
        }
        if (this._lerpEnd.y < this._lerpStart.y) {
          newY = this._lerpStart.y - (this.easingFcn(this._currentLerpTime, this._lerpEnd.y, this._lerpStart.y, this._lerpDuration) - this._lerpEnd.y);
        } else {
          newY = this.easingFcn(this._currentLerpTime, this._lerpStart.y, this._lerpEnd.y, this._lerpDuration);
        }
        this._motion.vel = vec((newX - this._tx.pos.x) / (delta / 1000), (newY - this._tx.pos.y) / (delta / 1000));
      } else {
        this._tx.pos = vec(this._lerpEnd.x, this._lerpEnd.y);
        this._motion.vel = Vector.Zero;
      }
    }
    isComplete() {
      return this._stopped || this._currentLerpTime >= this._lerpDuration;
    }
    reset() {
      this._initialized = false;
      this._stopped = false;
      this._currentLerpTime = 0;
    }
    stop() {
      this._motion.vel = vec(0, 0);
      this._stopped = true;
    }
  }

  class EaseBy {
    constructor(entity, offsetX, offsetY, duration, easingFcn) {
      this.easingFcn = easingFcn;
      this._currentLerpTime = 0;
      this._lerpDuration = 1 * 1000;
      this._lerpStart = new Vector(0, 0);
      this._lerpEnd = new Vector(0, 0);
      this._initialized = false;
      this._stopped = false;
      this._tx = entity.get(TransformComponent);
      this._motion = entity.get(MotionComponent);
      this._lerpDuration = duration;
      this._offset = new Vector(offsetX, offsetY);
    }
    _initialize() {
      this._lerpStart = new Vector(this._tx.pos.x, this._tx.pos.y);
      this._currentLerpTime = 0;
      this._lerpEnd = this._lerpStart.add(this._offset);
    }
    update(delta) {
      if (!this._initialized) {
        this._initialize();
        this._initialized = true;
      }
      this._currentLerpTime += delta;
      let newX = this._tx.pos.x;
      let newY = this._tx.pos.y;
      if (this._currentLerpTime < this._lerpDuration) {
        if (this._lerpEnd.x < this._lerpStart.x) {
          newX = this._lerpStart.x - (this.easingFcn(this._currentLerpTime, this._lerpEnd.x, this._lerpStart.x, this._lerpDuration) - this._lerpEnd.x);
        } else {
          newX = this.easingFcn(this._currentLerpTime, this._lerpStart.x, this._lerpEnd.x, this._lerpDuration);
        }
        if (this._lerpEnd.y < this._lerpStart.y) {
          newY = this._lerpStart.y - (this.easingFcn(this._currentLerpTime, this._lerpEnd.y, this._lerpStart.y, this._lerpDuration) - this._lerpEnd.y);
        } else {
          newY = this.easingFcn(this._currentLerpTime, this._lerpStart.y, this._lerpEnd.y, this._lerpDuration);
        }
        this._motion.vel = vec((newX - this._tx.pos.x) / (delta / 1000), (newY - this._tx.pos.y) / (delta / 1000));
      } else {
        this._tx.pos = vec(this._lerpEnd.x, this._lerpEnd.y);
        this._motion.vel = Vector.Zero;
      }
    }
    isComplete() {
      return this._stopped || this._currentLerpTime >= this._lerpDuration;
    }
    reset() {
      this._initialized = false;
      this._stopped = false;
      this._currentLerpTime = 0;
    }
    stop() {
      this._motion.vel = vec(0, 0);
      this._stopped = true;
    }
  }

  class Blink {
    constructor(entity, timeVisible, timeNotVisible, numBlinks = 1) {
      this._timeVisible = 0;
      this._timeNotVisible = 0;
      this._elapsedTime = 0;
      this._totalTime = 0;
      this._stopped = false;
      this._started = false;
      this._graphics = entity.get(GraphicsComponent);
      this._timeVisible = timeVisible;
      this._timeNotVisible = timeNotVisible;
      this._duration = (timeVisible + timeNotVisible) * numBlinks;
    }
    update(delta) {
      if (!this._started) {
        this._started = true;
        this._elapsedTime = 0;
        this._totalTime = 0;
      }
      if (!this._graphics) {
        return;
      }
      this._elapsedTime += delta;
      this._totalTime += delta;
      if (this._graphics.visible && this._elapsedTime >= this._timeVisible) {
        this._graphics.visible = false;
        this._elapsedTime = 0;
      }
      if (!this._graphics.visible && this._elapsedTime >= this._timeNotVisible) {
        this._graphics.visible = true;
        this._elapsedTime = 0;
      }
      if (this.isComplete()) {
        this._graphics.visible = true;
      }
    }
    isComplete() {
      return this._stopped || this._totalTime >= this._duration;
    }
    stop() {
      if (this._graphics) {
        this._graphics.visible = true;
      }
      this._stopped = true;
    }
    reset() {
      this._started = false;
      this._stopped = false;
      this._elapsedTime = 0;
      this._totalTime = 0;
    }
  }

  class Fade {
    constructor(entity, endOpacity, speed) {
      this._multiplier = 1;
      this._started = false;
      this._stopped = false;
      this._graphics = entity.get(GraphicsComponent);
      this._endOpacity = endOpacity;
      this._speed = this._ogspeed = speed;
    }
    update(delta) {
      if (!this._graphics) {
        return;
      }
      if (!this._started) {
        this._started = true;
        this._speed = this._ogspeed;
        if (this._endOpacity < this._graphics.opacity) {
          this._multiplier = -1;
        } else {
          this._multiplier = 1;
        }
      }
      if (this._speed > 0) {
        this._graphics.opacity += this._multiplier * (Math.abs(this._graphics.opacity - this._endOpacity) * delta) / this._speed;
      }
      this._speed -= delta;
      if (this.isComplete()) {
        this._graphics.opacity = this._endOpacity;
      }
      Logger.getInstance().debug("[Action fade] Actor opacity:", this._graphics.opacity);
    }
    isComplete() {
      return this._stopped || Math.abs(this._graphics.opacity - this._endOpacity) < 0.05;
    }
    stop() {
      this._stopped = true;
    }
    reset() {
      this._started = false;
      this._stopped = false;
    }
  }

  class Delay {
    constructor(delay2) {
      this._elapsedTime = 0;
      this._started = false;
      this._stopped = false;
      this._delay = delay2;
    }
    update(delta) {
      if (!this._started) {
        this._started = true;
      }
      this._elapsedTime += delta;
    }
    isComplete() {
      return this._stopped || this._elapsedTime >= this._delay;
    }
    stop() {
      this._stopped = true;
    }
    reset() {
      this._elapsedTime = 0;
      this._started = false;
      this._stopped = false;
    }
  }

  class Die {
    constructor(entity) {
      this._stopped = false;
      this._entity = entity;
    }
    update(_delta) {
      this._entity.get(ActionsComponent).clearActions();
      this._entity.kill();
      this._stopped = true;
    }
    isComplete() {
      return this._stopped;
    }
    stop() {
      return;
    }
    reset() {
      return;
    }
  }

  class Follow {
    constructor(entity, entityToFollow, followDistance) {
      this._started = false;
      this._stopped = false;
      this._tx = entity.get(TransformComponent);
      this._motion = entity.get(MotionComponent);
      this._followTx = entityToFollow.get(TransformComponent);
      this._followMotion = entityToFollow.get(MotionComponent);
      this._current = new Vector(this._tx.pos.x, this._tx.pos.y);
      this._end = new Vector(this._followTx.pos.x, this._followTx.pos.y);
      this._maximumDistance = followDistance !== undefined ? followDistance : this._current.distance(this._end);
      this._speed = 0;
    }
    update(_delta) {
      if (!this._started) {
        this._started = true;
        this._distanceBetween = this._current.distance(this._end);
        this._dir = this._end.sub(this._current).normalize();
      }
      const actorToFollowSpeed = Math.sqrt(Math.pow(this._followMotion.vel.x, 2) + Math.pow(this._followMotion.vel.y, 2));
      if (actorToFollowSpeed !== 0) {
        this._speed = actorToFollowSpeed;
      }
      this._current = vec(this._tx.pos.x, this._tx.pos.y);
      this._end = vec(this._followTx.pos.x, this._followTx.pos.y);
      this._distanceBetween = this._current.distance(this._end);
      this._dir = this._end.sub(this._current).normalize();
      if (this._distanceBetween >= this._maximumDistance) {
        const m = this._dir.scale(this._speed);
        this._motion.vel = vec(m.x, m.y);
      } else {
        this._motion.vel = vec(0, 0);
      }
      if (this.isComplete()) {
        this._tx.pos = vec(this._end.x, this._end.y);
        this._motion.vel = vec(0, 0);
      }
    }
    stop() {
      this._motion.vel = vec(0, 0);
      this._stopped = true;
    }
    isComplete() {
      return this._stopped;
    }
    reset() {
      this._started = false;
      this._stopped = false;
    }
  }

  class Meet {
    constructor(actor, actorToMeet, speed) {
      this._started = false;
      this._stopped = false;
      this._speedWasSpecified = false;
      this._tx = actor.get(TransformComponent);
      this._motion = actor.get(MotionComponent);
      this._meetTx = actorToMeet.get(TransformComponent);
      this._meetMotion = actorToMeet.get(MotionComponent);
      this._current = new Vector(this._tx.pos.x, this._tx.pos.y);
      this._end = new Vector(this._meetTx.pos.x, this._meetTx.pos.y);
      this._speed = speed || 0;
      if (speed !== undefined) {
        this._speedWasSpecified = true;
      }
    }
    update(_delta) {
      if (!this._started) {
        this._started = true;
        this._distanceBetween = this._current.distance(this._end);
        this._dir = this._end.sub(this._current).normalize();
      }
      const actorToMeetSpeed = Math.sqrt(Math.pow(this._meetMotion.vel.x, 2) + Math.pow(this._meetMotion.vel.y, 2));
      if (actorToMeetSpeed !== 0 && !this._speedWasSpecified) {
        this._speed = actorToMeetSpeed;
      }
      this._current = vec(this._tx.pos.x, this._tx.pos.y);
      this._end = vec(this._meetTx.pos.x, this._meetTx.pos.y);
      this._distanceBetween = this._current.distance(this._end);
      this._dir = this._end.sub(this._current).normalize();
      const m = this._dir.scale(this._speed);
      this._motion.vel = vec(m.x, m.y);
      if (this.isComplete()) {
        this._tx.pos = vec(this._end.x, this._end.y);
        this._motion.vel = vec(0, 0);
      }
    }
    isComplete() {
      return this._stopped || this._distanceBetween <= 1;
    }
    stop() {
      this._motion.vel = vec(0, 0);
      this._stopped = true;
    }
    reset() {
      this._started = false;
      this._stopped = false;
      this._distanceBetween = undefined;
    }
  }

  class ActionContext {
    constructor(entity) {
      this._entity = entity;
      this._queue = new ActionQueue(entity);
    }
    getQueue() {
      return this._queue;
    }
    update(elapsedMs) {
      this._queue.update(elapsedMs);
    }
    clearActions() {
      this._queue.clearActions();
    }
    runAction(action) {
      action.reset();
      this._queue.add(action);
      return this;
    }
    easeTo(...args) {
      var _a, _b;
      let x = 0;
      let y = 0;
      let duration = 0;
      let easingFcn = EasingFunctions.Linear;
      if (args[0] instanceof Vector) {
        x = args[0].x;
        y = args[0].y;
        duration = args[1];
        easingFcn = (_a = args[2]) !== null && _a !== undefined ? _a : easingFcn;
      } else {
        x = args[0];
        y = args[1];
        duration = args[2];
        easingFcn = (_b = args[3]) !== null && _b !== undefined ? _b : easingFcn;
      }
      this._queue.add(new EaseTo(this._entity, x, y, duration, easingFcn));
      return this;
    }
    easeBy(...args) {
      var _a, _b;
      let offsetX = 0;
      let offsetY = 0;
      let duration = 0;
      let easingFcn = EasingFunctions.Linear;
      if (args[0] instanceof Vector) {
        offsetX = args[0].x;
        offsetY = args[0].y;
        duration = args[1];
        easingFcn = (_a = args[2]) !== null && _a !== undefined ? _a : easingFcn;
      } else {
        offsetX = args[0];
        offsetY = args[1];
        duration = args[2];
        easingFcn = (_b = args[3]) !== null && _b !== undefined ? _b : easingFcn;
      }
      this._queue.add(new EaseBy(this._entity, offsetX, offsetY, duration, easingFcn));
      return this;
    }
    moveTo(xOrPos, yOrSpeed, speedOrUndefined) {
      let x = 0;
      let y = 0;
      let speed = 0;
      if (xOrPos instanceof Vector) {
        x = xOrPos.x;
        y = xOrPos.y;
        speed = yOrSpeed;
      } else {
        x = xOrPos;
        y = yOrSpeed;
        speed = speedOrUndefined;
      }
      this._queue.add(new MoveTo(this._entity, x, y, speed));
      return this;
    }
    moveBy(xOffsetOrVector, yOffsetOrSpeed, speedOrUndefined) {
      let xOffset = 0;
      let yOffset = 0;
      let speed = 0;
      if (xOffsetOrVector instanceof Vector) {
        xOffset = xOffsetOrVector.x;
        yOffset = xOffsetOrVector.y;
        speed = yOffsetOrSpeed;
      } else {
        xOffset = xOffsetOrVector;
        yOffset = yOffsetOrSpeed;
        speed = speedOrUndefined;
      }
      this._queue.add(new MoveBy(this._entity, xOffset, yOffset, speed));
      return this;
    }
    rotateTo(angleRadians, speed, rotationType) {
      this._queue.add(new RotateTo(this._entity, angleRadians, speed, rotationType));
      return this;
    }
    rotateBy(angleRadiansOffset, speed, rotationType) {
      this._queue.add(new RotateBy(this._entity, angleRadiansOffset, speed, rotationType));
      return this;
    }
    scaleTo(sizeXOrVector, sizeYOrSpeed, speedXOrUndefined, speedYOrUndefined) {
      let sizeX = 1;
      let sizeY = 1;
      let speedX = 0;
      let speedY = 0;
      if (sizeXOrVector instanceof Vector && sizeYOrSpeed instanceof Vector) {
        sizeX = sizeXOrVector.x;
        sizeY = sizeXOrVector.y;
        speedX = sizeYOrSpeed.x;
        speedY = sizeYOrSpeed.y;
      }
      if (typeof sizeXOrVector === "number" && typeof sizeYOrSpeed === "number") {
        sizeX = sizeXOrVector;
        sizeY = sizeYOrSpeed;
        speedX = speedXOrUndefined;
        speedY = speedYOrUndefined;
      }
      this._queue.add(new ScaleTo(this._entity, sizeX, sizeY, speedX, speedY));
      return this;
    }
    scaleBy(sizeOffsetXOrVector, sizeOffsetYOrSpeed, speed) {
      let sizeOffsetX = 1;
      let sizeOffsetY = 1;
      if (sizeOffsetXOrVector instanceof Vector) {
        sizeOffsetX = sizeOffsetXOrVector.x;
        sizeOffsetY = sizeOffsetXOrVector.y;
        speed = sizeOffsetYOrSpeed;
      }
      if (typeof sizeOffsetXOrVector === "number" && typeof sizeOffsetYOrSpeed === "number") {
        sizeOffsetX = sizeOffsetXOrVector;
        sizeOffsetY = sizeOffsetYOrSpeed;
      }
      this._queue.add(new ScaleBy(this._entity, sizeOffsetX, sizeOffsetY, speed));
      return this;
    }
    blink(timeVisible, timeNotVisible, numBlinks = 1) {
      this._queue.add(new Blink(this._entity, timeVisible, timeNotVisible, numBlinks));
      return this;
    }
    fade(opacity, time) {
      this._queue.add(new Fade(this._entity, opacity, time));
      return this;
    }
    delay(time) {
      this._queue.add(new Delay(time));
      return this;
    }
    die() {
      this._queue.add(new Die(this._entity));
      return this;
    }
    callMethod(method) {
      this._queue.add(new CallMethod(method));
      return this;
    }
    repeat(repeatBuilder, times) {
      if (!times) {
        this.repeatForever(repeatBuilder);
        return this;
      }
      this._queue.add(new Repeat(this._entity, repeatBuilder, times));
      return this;
    }
    repeatForever(repeatBuilder) {
      this._queue.add(new RepeatForever(this._entity, repeatBuilder));
      return this;
    }
    follow(entity, followDistance) {
      if (followDistance === undefined) {
        this._queue.add(new Follow(this._entity, entity));
      } else {
        this._queue.add(new Follow(this._entity, entity, followDistance));
      }
      return this;
    }
    meet(entity, speed) {
      if (speed === undefined) {
        this._queue.add(new Meet(this._entity, entity));
      } else {
        this._queue.add(new Meet(this._entity, entity, speed));
      }
      return this;
    }
    toPromise() {
      const temp = new Promise((resolve) => {
        this._queue.add(new CallMethod(() => {
          resolve();
        }));
      });
      return temp;
    }
  }

  class ActionsComponent extends Component {
    constructor() {
      super(...arguments);
      this.type = "ex.actions";
      this.dependencies = [TransformComponent, MotionComponent];
    }
    onAdd(entity) {
      this._ctx = new ActionContext(entity);
    }
    onRemove() {
      this._ctx = null;
    }
    getQueue() {
      var _a;
      return (_a = this._ctx) === null || _a === undefined ? undefined : _a.getQueue();
    }
    runAction(action) {
      var _a;
      return (_a = this._ctx) === null || _a === undefined ? undefined : _a.runAction(action);
    }
    update(elapsedMs) {
      var _a;
      return (_a = this._ctx) === null || _a === undefined ? undefined : _a.update(elapsedMs);
    }
    clearActions() {
      var _a;
      (_a = this._ctx) === null || _a === undefined || _a.clearActions();
    }
    easeTo(...args) {
      return this._ctx.easeTo.apply(this._ctx, args);
    }
    easeBy(...args) {
      return this._ctx.easeBy.apply(this._ctx, args);
    }
    moveTo(xOrPos, yOrSpeed, speedOrUndefined) {
      return this._ctx.moveTo.apply(this._ctx, [xOrPos, yOrSpeed, speedOrUndefined]);
    }
    moveBy(xOffsetOrVector, yOffsetOrSpeed, speedOrUndefined) {
      return this._ctx.moveBy.apply(this._ctx, [xOffsetOrVector, yOffsetOrSpeed, speedOrUndefined]);
    }
    rotateTo(angleRadians, speed, rotationType) {
      return this._ctx.rotateTo(angleRadians, speed, rotationType);
    }
    rotateBy(angleRadiansOffset, speed, rotationType) {
      return this._ctx.rotateBy(angleRadiansOffset, speed, rotationType);
    }
    scaleTo(sizeXOrVector, sizeYOrSpeed, speedXOrUndefined, speedYOrUndefined) {
      return this._ctx.scaleTo.apply(this._ctx, [sizeXOrVector, sizeYOrSpeed, speedXOrUndefined, speedYOrUndefined]);
    }
    scaleBy(sizeOffsetXOrVector, sizeOffsetYOrSpeed, speed) {
      return this._ctx.scaleBy.apply(this._ctx, [sizeOffsetXOrVector, sizeOffsetYOrSpeed, speed]);
    }
    blink(timeVisible, timeNotVisible, numBlinks) {
      return this._ctx.blink(timeVisible, timeNotVisible, numBlinks);
    }
    fade(opacity, time) {
      return this._ctx.fade(opacity, time);
    }
    delay(time) {
      return this._ctx.delay(time);
    }
    die() {
      return this._ctx.die();
    }
    callMethod(method) {
      return this._ctx.callMethod(method);
    }
    repeat(repeatBuilder, times) {
      return this._ctx.repeat(repeatBuilder, times);
    }
    repeatForever(repeatBuilder) {
      return this._ctx.repeatForever(repeatBuilder);
    }
    follow(entity, followDistance) {
      return this._ctx.follow(entity, followDistance);
    }
    meet(entity, speed) {
      return this._ctx.meet(entity, speed);
    }
    toPromise() {
      return this._ctx.toPromise();
    }
  }
  var FontUnit;
  (function(FontUnit2) {
    FontUnit2["Em"] = "em";
    FontUnit2["Rem"] = "rem";
    FontUnit2["Px"] = "px";
    FontUnit2["Pt"] = "pt";
    FontUnit2["Percent"] = "%";
  })(FontUnit || (FontUnit = {}));
  var TextAlign;
  (function(TextAlign2) {
    TextAlign2["Left"] = "left";
    TextAlign2["Right"] = "right";
    TextAlign2["Center"] = "center";
    TextAlign2["Start"] = "start";
    TextAlign2["End"] = "end";
  })(TextAlign || (TextAlign = {}));
  var BaseAlign;
  (function(BaseAlign2) {
    BaseAlign2["Top"] = "top";
    BaseAlign2["Hanging"] = "hanging";
    BaseAlign2["Middle"] = "middle";
    BaseAlign2["Alphabetic"] = "alphabetic";
    BaseAlign2["Ideographic"] = "ideographic";
    BaseAlign2["Bottom"] = "bottom";
  })(BaseAlign || (BaseAlign = {}));
  var FontStyle;
  (function(FontStyle2) {
    FontStyle2["Normal"] = "normal";
    FontStyle2["Italic"] = "italic";
    FontStyle2["Oblique"] = "oblique";
  })(FontStyle || (FontStyle = {}));
  var Direction;
  (function(Direction2) {
    Direction2["LeftToRight"] = "ltr";
    Direction2["RightToLeft"] = "rtl";
  })(Direction || (Direction = {}));

  class FontTextInstance {
    constructor(font, text, color, maxWidth) {
      this.font = font;
      this.text = text;
      this.color = color;
      this.maxWidth = maxWidth;
      this._textFragments = [];
      this.disposed = false;
      this._dirty = true;
      this.canvas = document.createElement("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.dimensions = this.measureText(text);
      this._setDimension(this.dimensions, this.ctx);
      this._lastHashCode = this.getHashCode();
    }
    measureText(text, maxWidth) {
      if (this.disposed) {
        throw Error("Accessing disposed text instance! " + this.text);
      }
      let lines = null;
      if (maxWidth != null) {
        lines = this._getLinesFromText(text, maxWidth);
      } else {
        lines = text.split("\n");
      }
      const maxWidthLine = lines.reduce((a, b) => {
        return a.length > b.length ? a : b;
      });
      this._applyFont(this.ctx);
      const metrics = this.ctx.measureText(maxWidthLine);
      let textHeight = Math.abs(metrics.actualBoundingBoxAscent) + Math.abs(metrics.actualBoundingBoxDescent);
      const lineAdjustedHeight = textHeight * lines.length;
      textHeight = lineAdjustedHeight;
      const bottomBounds = lineAdjustedHeight - Math.abs(metrics.actualBoundingBoxAscent);
      const x = 0;
      const y = 0;
      const measurement = new BoundingBox({
        left: x - Math.abs(metrics.actualBoundingBoxLeft) - this.font.padding,
        top: y - Math.abs(metrics.actualBoundingBoxAscent) - this.font.padding,
        bottom: y + bottomBounds + this.font.padding,
        right: x + Math.abs(metrics.actualBoundingBoxRight) + this.font.padding
      });
      return measurement;
    }
    _setDimension(textBounds, bitmap) {
      bitmap.canvas.width = (textBounds.width + this.font.padding * 2) * 2 * this.font.quality;
      bitmap.canvas.height = (textBounds.height + this.font.padding * 2) * 2 * this.font.quality;
    }
    static getHashCode(font, text, color) {
      var _a;
      const hash = text + "__hashcode__" + font.fontString + font.showDebug + font.textAlign + font.baseAlign + font.direction + JSON.stringify(font.shadow) + (font.padding.toString() + font.smoothing.toString() + font.lineWidth.toString() + font.lineDash.toString() + ((_a = font.strokeColor) === null || _a === undefined ? undefined : _a.toString()) + (color ? color.toString() : font.color.toString()));
      return hash;
    }
    getHashCode(includeColor = true) {
      return FontTextInstance.getHashCode(this.font, this.text, includeColor ? this.color : undefined);
    }
    _applyRasterProperties(ctx) {
      var _a, _b;
      ctx.translate(this.font.padding, this.font.padding);
      ctx.imageSmoothingEnabled = this.font.smoothing;
      ctx.lineWidth = this.font.lineWidth;
      ctx.setLineDash((_a = this.font.lineDash) !== null && _a !== undefined ? _a : ctx.getLineDash());
      ctx.strokeStyle = (_b = this.font.strokeColor) === null || _b === undefined ? undefined : _b.toString();
      ctx.fillStyle = this.color.toString();
    }
    _applyFont(ctx) {
      ctx.resetTransform();
      ctx.translate(this.font.padding + ctx.canvas.width / 2, this.font.padding + ctx.canvas.height / 2);
      ctx.scale(this.font.quality, this.font.quality);
      ctx.textAlign = this.font.textAlign;
      ctx.textBaseline = this.font.baseAlign;
      ctx.font = this.font.fontString;
      ctx.direction = this.font.direction;
      if (this.font.shadow) {
        ctx.shadowColor = this.font.shadow.color.toString();
        ctx.shadowBlur = this.font.shadow.blur;
        ctx.shadowOffsetX = this.font.shadow.offset.x;
        ctx.shadowOffsetY = this.font.shadow.offset.y;
      }
    }
    _drawText(ctx, lines, lineHeight) {
      this._applyRasterProperties(ctx);
      this._applyFont(ctx);
      for (let i = 0;i < lines.length; i++) {
        const line2 = lines[i];
        if (this.color) {
          ctx.fillText(line2, 0, i * lineHeight);
        }
        if (this.font.strokeColor) {
          ctx.strokeText(line2, 0, i * lineHeight);
        }
      }
      if (this.font.showDebug) {
        line(ctx, Color.Green, -ctx.canvas.width / 2, 0, ctx.canvas.width / 2, 0, 2);
        line(ctx, Color.Red, 0, -ctx.canvas.height / 2, 0, ctx.canvas.height / 2, 2);
      }
    }
    _splitTextBitmap(bitmap) {
      const textImages = [];
      let currentX = 0;
      let currentY = 0;
      const width = Math.min(4096, bitmap.canvas.width);
      const height = Math.min(4096, bitmap.canvas.height);
      while (currentX < bitmap.canvas.width) {
        while (currentY < bitmap.canvas.height) {
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(bitmap.canvas, currentX, currentY, width, height, 0, 0, width, height);
          textImages.push({ x: currentX, y: currentY, canvas });
          currentY += height;
        }
        currentX += width;
        currentY = 0;
      }
      return textImages;
    }
    flagDirty() {
      this._dirty = true;
    }
    render(ex, x, y, maxWidth) {
      if (this.disposed) {
        throw Error("Accessing disposed text instance! " + this.text);
      }
      this._ex = ex;
      const hashCode = this.getHashCode();
      if (this._lastHashCode !== hashCode) {
        this._dirty = true;
      }
      if (this._dirty) {
        this.dimensions = this.measureText(this.text, maxWidth);
        this._setDimension(this.dimensions, this.ctx);
        const lines = this._getLinesFromText(this.text, maxWidth);
        const lineHeight = this.dimensions.height / lines.length;
        this._drawText(this.ctx, lines, lineHeight);
        if (ex instanceof ExcaliburGraphicsContextWebGL) {
          for (const frag of this._textFragments) {
            ex.textureLoader.delete(frag.canvas);
          }
        }
        this._textFragments = this._splitTextBitmap(this.ctx);
        if (ex instanceof ExcaliburGraphicsContextWebGL) {
          for (const frag of this._textFragments) {
            ex.textureLoader.load(frag.canvas, this.font.filtering, true);
          }
        }
        this._lastHashCode = hashCode;
        this._dirty = false;
      }
      for (const frag of this._textFragments) {
        ex.drawImage(frag.canvas, 0, 0, frag.canvas.width, frag.canvas.height, frag.x / this.font.quality + x - this.ctx.canvas.width / this.font.quality / 2, frag.y / this.font.quality + y - this.ctx.canvas.height / this.font.quality / 2, frag.canvas.width / this.font.quality, frag.canvas.height / this.font.quality);
      }
    }
    dispose() {
      this.disposed = true;
      this.dimensions = undefined;
      this.canvas = undefined;
      this.ctx = undefined;
      if (this._ex instanceof ExcaliburGraphicsContextWebGL) {
        for (const frag of this._textFragments) {
          this._ex.textureLoader.delete(frag.canvas);
        }
      }
      this._textFragments.length = 0;
    }
    _getLinesFromText(text, maxWidth) {
      if (this._chachedText === text && this._cachedRenderWidth === maxWidth) {
        return this._chachedLines;
      }
      const lines = text.split("\n");
      if (maxWidth == null) {
        return lines;
      }
      for (let i = 0;i < lines.length; i++) {
        let line2 = lines[i];
        let newLine = "";
        if (this.measureText(line2).width > maxWidth) {
          while (this.measureText(line2).width > maxWidth) {
            newLine = line2[line2.length - 1] + newLine;
            line2 = line2.slice(0, -1);
          }
          lines[i] = line2;
          lines[i + 1] = newLine;
        }
      }
      this._chachedText = text;
      this._chachedLines = lines;
      this._cachedRenderWidth = maxWidth;
      return lines;
    }
  }

  class FontCache {
    static measureText(text, font, maxWidth) {
      const hash = FontTextInstance.getHashCode(font, text);
      if (FontCache._MEASURE_CACHE.has(hash)) {
        return FontCache._MEASURE_CACHE.get(hash);
      }
      FontCache._LOGGER.debug("Font text measurement cache miss");
      const measurement = font.measureTextWithoutCache(text, maxWidth);
      FontCache._MEASURE_CACHE.set(hash, measurement);
      return measurement;
    }
    static getTextInstance(text, font, color) {
      const hash = FontTextInstance.getHashCode(font, text, color);
      let textInstance = FontCache._TEXT_CACHE.get(hash);
      if (!textInstance) {
        textInstance = new FontTextInstance(font, text, color);
        FontCache._TEXT_CACHE.set(hash, textInstance);
        FontCache._LOGGER.debug("Font text instance cache miss");
      }
      FontCache._TEXT_USAGE.set(textInstance, performance.now());
      return textInstance;
    }
    static checkAndClearCache() {
      const deferred = [];
      const currentHashCodes = new Set;
      for (const [textInstance, time] of FontCache._TEXT_USAGE.entries()) {
        if (time + FontCache.FONT_TIMEOUT < performance.now()) {
          FontCache._LOGGER.debug(`Text cache entry timed out ${textInstance.text}`);
          deferred.push(textInstance);
          textInstance.dispose();
        } else {
          const hash = textInstance.getHashCode(false);
          currentHashCodes.add(hash);
        }
      }
      deferred.forEach((t) => {
        FontCache._TEXT_USAGE.delete(t);
      });
      this._TEXT_CACHE.clear();
      for (const [textInstance] of this._TEXT_USAGE.entries()) {
        this._TEXT_CACHE.set(textInstance.getHashCode(), textInstance);
      }
      const newTextMeasurementCache = new Map;
      for (const current of currentHashCodes) {
        if (FontCache._MEASURE_CACHE.has(current)) {
          newTextMeasurementCache.set(current, FontCache._MEASURE_CACHE.get(current));
        }
      }
      this._MEASURE_CACHE.clear();
      this._MEASURE_CACHE = newTextMeasurementCache;
    }
    static get cacheSize() {
      return FontCache._TEXT_USAGE.size;
    }
    static clearCache() {
      for (const [textInstance] of FontCache._TEXT_USAGE.entries()) {
        textInstance.dispose();
      }
      FontCache._TEXT_USAGE.clear();
      FontCache._TEXT_CACHE.clear();
      FontCache._MEASURE_CACHE.clear();
    }
  }
  FontCache.FONT_TIMEOUT = 500;
  FontCache._LOGGER = Logger.getInstance();
  FontCache._TEXT_USAGE = new Map;
  FontCache._TEXT_CACHE = new Map;
  FontCache._MEASURE_CACHE = new Map;

  class Font extends Graphic {
    constructor(options = {}) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
      super(options);
      this.filtering = ImageFiltering.Blended;
      this.quality = 2;
      this.padding = 2;
      this.smoothing = false;
      this.lineWidth = 1;
      this.lineDash = [];
      this.color = Color.Black;
      this.family = "sans-serif";
      this.style = FontStyle.Normal;
      this.bold = false;
      this.unit = FontUnit.Px;
      this.textAlign = TextAlign.Left;
      this.baseAlign = BaseAlign.Alphabetic;
      this.direction = Direction.LeftToRight;
      this.size = 10;
      this.shadow = null;
      this._textBounds = new BoundingBox;
      this._textMeasurement = new FontTextInstance(this, "", Color.Black);
      this.smoothing = (_a = options === null || options === undefined ? undefined : options.smoothing) !== null && _a !== undefined ? _a : this.smoothing;
      this.padding = (_b = options === null || options === undefined ? undefined : options.padding) !== null && _b !== undefined ? _b : this.padding;
      this.color = (_c = options === null || options === undefined ? undefined : options.color) !== null && _c !== undefined ? _c : this.color;
      this.strokeColor = (_d = options === null || options === undefined ? undefined : options.strokeColor) !== null && _d !== undefined ? _d : this.strokeColor;
      this.lineDash = (_e = options === null || options === undefined ? undefined : options.lineDash) !== null && _e !== undefined ? _e : this.lineDash;
      this.lineWidth = (_f = options === null || options === undefined ? undefined : options.lineWidth) !== null && _f !== undefined ? _f : this.lineWidth;
      this.filtering = (_g = options === null || options === undefined ? undefined : options.filtering) !== null && _g !== undefined ? _g : this.filtering;
      this.family = (_h = options === null || options === undefined ? undefined : options.family) !== null && _h !== undefined ? _h : this.family;
      this.style = (_j = options === null || options === undefined ? undefined : options.style) !== null && _j !== undefined ? _j : this.style;
      this.bold = (_k = options === null || options === undefined ? undefined : options.bold) !== null && _k !== undefined ? _k : this.bold;
      this.size = (_l = options === null || options === undefined ? undefined : options.size) !== null && _l !== undefined ? _l : this.size;
      this.unit = (_m = options === null || options === undefined ? undefined : options.unit) !== null && _m !== undefined ? _m : this.unit;
      this.textAlign = (_o = options === null || options === undefined ? undefined : options.textAlign) !== null && _o !== undefined ? _o : this.textAlign;
      this.baseAlign = (_p = options === null || options === undefined ? undefined : options.baseAlign) !== null && _p !== undefined ? _p : this.baseAlign;
      this.direction = (_q = options === null || options === undefined ? undefined : options.direction) !== null && _q !== undefined ? _q : this.direction;
      this.quality = (_r = options === null || options === undefined ? undefined : options.quality) !== null && _r !== undefined ? _r : this.quality;
      if (options === null || options === undefined ? undefined : options.shadow) {
        this.shadow = {};
        this.shadow.blur = (_s = options.shadow.blur) !== null && _s !== undefined ? _s : this.shadow.blur;
        this.shadow.offset = (_t = options.shadow.offset) !== null && _t !== undefined ? _t : this.shadow.offset;
        this.shadow.color = (_u = options.shadow.color) !== null && _u !== undefined ? _u : this.shadow.color;
      }
    }
    clone() {
      return new Font({
        ...this.cloneGraphicOptions(),
        size: this.size,
        unit: this.unit,
        family: this.family,
        style: this.style,
        bold: this.bold,
        textAlign: this.textAlign,
        baseAlign: this.baseAlign,
        direction: this.direction,
        shadow: this.shadow ? {
          blur: this.shadow.blur,
          offset: this.shadow.offset,
          color: this.shadow.color
        } : null
      });
    }
    get fontString() {
      return `${this.style} ${this.bold ? "bold" : ""} ${this.size}${this.unit} ${this.family}`;
    }
    get localBounds() {
      return this._textBounds;
    }
    _drawImage(_ex, _x, _y) {
    }
    _rotate(ex) {
      var _a;
      const origin = (_a = this.origin) !== null && _a !== undefined ? _a : this._textBounds.center;
      ex.translate(origin.x, origin.y);
      ex.rotate(this.rotation);
      ex.translate(-origin.x, -origin.y);
    }
    _flip(ex) {
      if (this.flipHorizontal) {
        ex.translate(this._textBounds.width / this.scale.x, 0);
        ex.scale(-1, 1);
      }
      if (this.flipVertical) {
        ex.translate(0, -this._textBounds.height / 2 / this.scale.y);
        ex.scale(1, -1);
      }
    }
    measureTextWithoutCache(text, maxWidth) {
      return this._textMeasurement.measureText(text, maxWidth);
    }
    measureText(text, maxWidth) {
      return FontCache.measureText(text, this, maxWidth);
    }
    _postDraw(ex) {
      ex.restore();
    }
    render(ex, text, colorOverride, x, y, maxWidth) {
      const textInstance = FontCache.getTextInstance(text, this, colorOverride);
      this._textBounds = textInstance.dimensions;
      this._preDraw(ex, x, y);
      textInstance.render(ex, x, y, maxWidth);
      this._postDraw(ex);
    }
  }

  class Text extends Graphic {
    constructor(options) {
      var _a, _b;
      super(options);
      this._text = "";
      this._textWidth = 0;
      this._textHeight = 0;
      this.font = (_a = options.font) !== null && _a !== undefined ? _a : new Font;
      this.color = (_b = options.color) !== null && _b !== undefined ? _b : this.color;
      this.text = options.text;
      this.maxWidth = options.maxWidth;
    }
    clone() {
      var _a, _b;
      return new Text({
        text: this.text.slice(),
        color: (_b = (_a = this.color) === null || _a === undefined ? undefined : _a.clone()) !== null && _b !== undefined ? _b : Color.Black,
        font: this.font.clone(),
        maxWidth: this.maxWidth
      });
    }
    get text() {
      return this._text;
    }
    set text(value) {
      this._text = value;
      this._calculateDimension();
    }
    get font() {
      return this._font;
    }
    set font(font) {
      this._font = font;
    }
    get width() {
      if (this._textWidth === 0) {
        this._calculateDimension();
      }
      return this._textWidth * this.scale.x;
    }
    get height() {
      if (this._textHeight === 0) {
        this._calculateDimension();
      }
      return this._textHeight * this.scale.y;
    }
    _calculateDimension() {
      const { width, height } = this.font.measureText(this._text, this.maxWidth);
      this._textWidth = width;
      this._textHeight = height;
    }
    get localBounds() {
      return this.font.measureText(this._text, this.maxWidth).scale(this.scale);
    }
    _rotate(_ex) {
    }
    _flip(_ex) {
    }
    _preDraw(ex, x, y) {
      if (this.isStale() || this.font.isStale()) {
        this.font.flipHorizontal = this.flipHorizontal;
        this.font.flipVertical = this.flipVertical;
        this.font.rotation = this.rotation;
        this.font.origin = this.origin;
        this.font.opacity = this.opacity;
      }
      this.font.tint = this.tint;
      super._preDraw(ex, x, y);
    }
    _drawImage(ex, x, y) {
      var _a;
      let color = Color.Black;
      if (this.font instanceof Font) {
        color = (_a = this.color) !== null && _a !== undefined ? _a : this.font.color;
      }
      const { width, height } = this.font.measureText(this._text, this.maxWidth);
      this._textWidth = width;
      this._textHeight = height;
      this.font.render(ex, this._text, color, x, y, this.maxWidth);
      if (this.font.showDebug) {
        ex.debug.drawRect(x - width, y - height, width * 2, height * 2);
        if (this.maxWidth != null) {
          ex.debug.drawRect(x, y, this.maxWidth, this.height, {
            color: Color.Yellow
          });
        }
      }
    }
  }
  function isActor(x) {
    return x instanceof Actor;
  }
  const ActorEvents = {
    CollisionStart: "collisionstart",
    CollisionEnd: "collisionend",
    PreCollision: "precollision",
    PostCollision: "postcollision",
    Kill: "kill",
    PreKill: "prekill",
    PostKill: "postkill",
    PreDraw: "predraw",
    PostDraw: "postdraw",
    PreTransformDraw: "pretransformdraw",
    PostTransformDraw: "posttransformdraw",
    PreDebugDraw: "predebugdraw",
    PostDebugDraw: "postdebugdraw",
    PointerUp: "pointerup",
    PointerDown: "pointerdown",
    PointerEnter: "pointerenter",
    PointerLeave: "pointerleave",
    PointerMove: "pointermove",
    PointerCancel: "pointercancel",
    Wheel: "pointerwheel",
    PointerDrag: "pointerdragstart",
    PointerDragEnd: "pointerdragend",
    PointerDragEnter: "pointerdragenter",
    PointerDragLeave: "pointerdragleave",
    PointerDragMove: "pointerdragmove",
    EnterViewPort: "enterviewport",
    ExitViewPort: "exitviewport",
    ActionStart: "actionstart",
    ActionComplete: "actioncomplete"
  };

  class Actor extends Entity {
    get body() {
      return this.get(BodyComponent);
    }
    get transform() {
      return this.get(TransformComponent);
    }
    get motion() {
      return this.get(MotionComponent);
    }
    get graphics() {
      return this.get(GraphicsComponent);
    }
    get collider() {
      return this.get(ColliderComponent);
    }
    get pointer() {
      return this.get(PointerComponent);
    }
    get actions() {
      return this.get(ActionsComponent);
    }
    get pos() {
      return this.transform.pos;
    }
    set pos(thePos) {
      this.transform.pos = thePos.clone();
    }
    get oldPos() {
      return this.body.oldPos;
    }
    set oldPos(thePos) {
      this.body.oldPos.setTo(thePos.x, thePos.y);
    }
    get vel() {
      return this.motion.vel;
    }
    set vel(theVel) {
      this.motion.vel = theVel.clone();
    }
    get oldVel() {
      return this.body.oldVel;
    }
    set oldVel(theVel) {
      this.body.oldVel.setTo(theVel.x, theVel.y);
    }
    get acc() {
      return this.motion.acc;
    }
    set acc(theAcc) {
      this.motion.acc = theAcc.clone();
    }
    set oldAcc(theAcc) {
      this.body.oldAcc.setTo(theAcc.x, theAcc.y);
    }
    get oldAcc() {
      return this.body.oldAcc;
    }
    get rotation() {
      return this.transform.rotation;
    }
    set rotation(theAngle) {
      this.transform.rotation = theAngle;
    }
    get angularVelocity() {
      return this.motion.angularVelocity;
    }
    set angularVelocity(angularVelocity) {
      this.motion.angularVelocity = angularVelocity;
    }
    get scale() {
      return this.get(TransformComponent).scale;
    }
    set scale(scale) {
      this.get(TransformComponent).scale = scale;
    }
    get anchor() {
      return this._anchor;
    }
    set anchor(vec2) {
      this._anchor = watch(vec2, (v) => this._handleAnchorChange(v));
      this._handleAnchorChange(vec2);
    }
    _handleAnchorChange(v) {
      if (this.graphics) {
        this.graphics.anchor = v;
      }
    }
    get isOffScreen() {
      return this.hasTag("ex.offscreen");
    }
    get draggable() {
      return this._draggable;
    }
    set draggable(isDraggable) {
      if (isDraggable) {
        if (isDraggable && !this._draggable) {
          this.events.on("pointerdragstart", this._pointerDragStartHandler);
          this.events.on("pointerdragend", this._pointerDragEndHandler);
          this.events.on("pointerdragmove", this._pointerDragMoveHandler);
          this.events.on("pointerdragleave", this._pointerDragLeaveHandler);
        } else if (!isDraggable && this._draggable) {
          this.events.off("pointerdragstart", this._pointerDragStartHandler);
          this.events.off("pointerdragend", this._pointerDragEndHandler);
          this.events.off("pointerdragmove", this._pointerDragMoveHandler);
          this.events.off("pointerdragleave", this._pointerDragLeaveHandler);
        }
        this._draggable = isDraggable;
      }
    }
    get color() {
      return this._color;
    }
    set color(v) {
      var _a;
      this._color = v.clone();
      const defaultLayer = this.graphics.layers.default;
      const currentGraphic = (_a = defaultLayer.graphics[0]) === null || _a === undefined ? undefined : _a.graphic;
      if (currentGraphic instanceof Raster || currentGraphic instanceof Text) {
        currentGraphic.color = this._color;
      }
    }
    constructor(config) {
      super();
      this.events = new EventEmitter;
      this._anchor = watch(Vector.Half, (v) => this._handleAnchorChange(v));
      this.logger = Logger.getInstance();
      this._draggable = false;
      this._dragging = false;
      this._pointerDragStartHandler = () => {
        this._dragging = true;
      };
      this._pointerDragEndHandler = () => {
        this._dragging = false;
      };
      this._pointerDragMoveHandler = (pe) => {
        if (this._dragging) {
          this.pos = pe.worldPos;
        }
      };
      this._pointerDragLeaveHandler = (pe) => {
        if (this._dragging) {
          this.pos = pe.worldPos;
        }
      };
      const { name, x, y, pos, coordPlane, scale, width, height, radius, collider, vel, acc, rotation, angularVelocity, z, color, visible, anchor, collisionType, collisionGroup } = {
        ...config
      };
      this._setName(name);
      this.anchor = anchor !== null && anchor !== undefined ? anchor : Actor.defaults.anchor.clone();
      const tx = new TransformComponent;
      this.addComponent(tx);
      this.pos = pos !== null && pos !== undefined ? pos : vec(x !== null && x !== undefined ? x : 0, y !== null && y !== undefined ? y : 0);
      this.rotation = rotation !== null && rotation !== undefined ? rotation : 0;
      this.scale = scale !== null && scale !== undefined ? scale : vec(1, 1);
      this.z = z !== null && z !== undefined ? z : 0;
      tx.coordPlane = coordPlane !== null && coordPlane !== undefined ? coordPlane : CoordPlane.World;
      this.addComponent(new PointerComponent);
      this.addComponent(new GraphicsComponent({
        anchor: this.anchor
      }));
      this.addComponent(new MotionComponent);
      this.vel = vel !== null && vel !== undefined ? vel : Vector.Zero;
      this.acc = acc !== null && acc !== undefined ? acc : Vector.Zero;
      this.angularVelocity = angularVelocity !== null && angularVelocity !== undefined ? angularVelocity : 0;
      this.addComponent(new ActionsComponent);
      this.addComponent(new BodyComponent);
      this.body.collisionType = collisionType !== null && collisionType !== undefined ? collisionType : CollisionType.Passive;
      if (collisionGroup) {
        this.body.group = collisionGroup;
      }
      if (collider) {
        this.addComponent(new ColliderComponent(collider));
      } else if (radius) {
        this.addComponent(new ColliderComponent(Shape.Circle(radius)));
      } else {
        if (width > 0 && height > 0) {
          this.addComponent(new ColliderComponent(Shape.Box(width, height, this.anchor)));
        } else {
          this.addComponent(new ColliderComponent);
        }
      }
      this.graphics.visible = visible !== null && visible !== undefined ? visible : true;
      if (color) {
        this.color = color;
        if (width && height) {
          this.graphics.add(new Rectangle({
            color,
            width,
            height
          }));
        } else if (radius) {
          this.graphics.add(new Circle({
            color,
            radius
          }));
        }
      }
    }
    clone() {
      const clone = new Actor({
        color: this.color.clone(),
        anchor: this.anchor.clone()
      });
      clone.clearComponents();
      clone.processComponentRemoval();
      const components = this.getComponents();
      for (const c of components) {
        clone.addComponent(c.clone(), true);
      }
      return clone;
    }
    onInitialize(engine) {
    }
    _initialize(engine) {
      super._initialize(engine);
      for (const child of this.children) {
        child._initialize(engine);
      }
    }
    emit(eventName, event) {
      this.events.emit(eventName, event);
    }
    on(eventName, handler) {
      return this.events.on(eventName, handler);
    }
    once(eventName, handler) {
      return this.events.once(eventName, handler);
    }
    off(eventName, handler) {
      this.events.off(eventName, handler);
    }
    _prekill(scene) {
      this.events.emit("prekill", new PreKillEvent(this));
      this.onPreKill(scene);
    }
    onPreKill(scene) {
    }
    _postkill(scene) {
      this.events.emit("postkill", new PostKillEvent(this));
      this.onPostKill(scene);
    }
    onPostKill(scene) {
    }
    kill() {
      if (this.scene) {
        this._prekill(this.scene);
        this.events.emit("kill", new KillEvent(this));
        super.kill();
        this._postkill(this.scene);
      } else {
        this.logger.warn(`Cannot kill actor named "${this.name}", it was never added to the Scene`);
      }
    }
    unkill() {
      this.active = true;
    }
    isKilled() {
      return !this.active;
    }
    get z() {
      return this.get(TransformComponent).z;
    }
    set z(newZ) {
      this.get(TransformComponent).z = newZ;
    }
    get center() {
      const globalPos = this.getGlobalPos();
      return new Vector(globalPos.x + this.width / 2 - this.anchor.x * this.width, globalPos.y + this.height / 2 - this.anchor.y * this.height);
    }
    get localCenter() {
      return new Vector(this.pos.x + this.width / 2 - this.anchor.x * this.width, this.pos.y + this.height / 2 - this.anchor.y * this.height);
    }
    get width() {
      return this.collider.localBounds.width * this.getGlobalScale().x;
    }
    get height() {
      return this.collider.localBounds.height * this.getGlobalScale().y;
    }
    getGlobalRotation() {
      return this.get(TransformComponent).globalRotation;
    }
    getGlobalPos() {
      return this.get(TransformComponent).globalPos;
    }
    getGlobalScale() {
      return this.get(TransformComponent).globalScale;
    }
    contains(x, y, recurse = false) {
      const point2 = vec(x, y);
      const collider = this.get(ColliderComponent);
      collider.update();
      const geom = collider.get();
      if (!geom) {
        return false;
      }
      const containment = geom.contains(point2);
      if (recurse) {
        return containment || this.children.some((child) => {
          return child.contains(x, y, true);
        });
      }
      return containment;
    }
    within(actor, distance) {
      const collider = this.get(ColliderComponent);
      const otherCollider = actor.get(ColliderComponent);
      const me = collider.get();
      const other = otherCollider.get();
      if (me && other) {
        return me.getClosestLineBetween(other).getLength() <= distance;
      }
      return false;
    }
    update(engine, delta) {
      this._initialize(engine);
      this._preupdate(engine, delta);
      this._postupdate(engine, delta);
    }
    onPreUpdate(engine, delta) {
    }
    onPostUpdate(engine, delta) {
    }
    onPreCollisionResolve(self2, other, side, contact) {
    }
    onPostCollisionResolve(self2, other, side, contact) {
    }
    onCollisionStart(self2, other, side, contact) {
    }
    onCollisionEnd(self2, other) {
    }
    _preupdate(engine, delta) {
      this.events.emit("preupdate", new PreUpdateEvent(engine, delta, this));
      this.onPreUpdate(engine, delta);
    }
    _postupdate(engine, delta) {
      this.events.emit("postupdate", new PostUpdateEvent(engine, delta, this));
      this.onPostUpdate(engine, delta);
    }
  }
  Actor.defaults = {
    anchor: Vector.Half
  };
  function isScreenElement(actor) {
    return actor instanceof ScreenElement;
  }

  class ScreenElement extends Actor {
    constructor(config) {
      var _a, _b;
      super({ ...config });
      this.get(TransformComponent).coordPlane = CoordPlane.Screen;
      this.anchor = (_a = config === null || config === undefined ? undefined : config.anchor) !== null && _a !== undefined ? _a : vec(0, 0);
      this.body.collisionType = (_b = config === null || config === undefined ? undefined : config.collisionType) !== null && _b !== undefined ? _b : CollisionType.PreventCollision;
      this.pointer.useGraphicsBounds = true;
      this.pointer.useColliderShape = false;
      if (!(config === null || config === undefined ? undefined : config.collider) && (config === null || config === undefined ? undefined : config.width) > 0 && (config === null || config === undefined ? undefined : config.height) > 0) {
        this.collider.useBoxCollider(this.width, this.height, this.anchor);
      }
    }
    _initialize(engine) {
      this._engine = engine;
      super._initialize(engine);
    }
    contains(x, y, useWorld = true) {
      if (useWorld) {
        return super.contains(x, y);
      }
      const coords = this._engine.worldToScreenCoordinates(new Vector(x, y));
      return super.contains(coords.x, coords.y);
    }
  }

  class Timer {
    get complete() {
      return this._complete;
    }
    constructor(fcn, interval, repeats, numberOfRepeats, randomRange, random) {
      this._logger = Logger.getInstance();
      this.id = 0;
      this._elapsedTime = 0;
      this._totalTimeAlive = 0;
      this._running = false;
      this._numberOfTicks = 0;
      this.interval = 10;
      this.repeats = false;
      this.maxNumberOfRepeats = -1;
      this.randomRange = [0, 0];
      this._baseInterval = 10;
      this._generateRandomInterval = () => {
        return this._baseInterval + this.random.integer(this.randomRange[0], this.randomRange[1]);
      };
      this._complete = false;
      this.scene = null;
      if (typeof fcn !== "function") {
        const options = fcn;
        fcn = options.fcn;
        interval = options.interval;
        repeats = options.repeats;
        numberOfRepeats = options.numberOfRepeats;
        randomRange = options.randomRange;
        random = options.random;
      }
      if (!!numberOfRepeats && numberOfRepeats >= 0) {
        this.maxNumberOfRepeats = numberOfRepeats;
        if (!repeats) {
          throw new Error("repeats must be set to true if numberOfRepeats is set");
        }
      }
      this.id = Timer._MAX_ID++;
      this._callbacks = [];
      this._baseInterval = this.interval = interval;
      if (!!randomRange) {
        if (randomRange[0] > randomRange[1]) {
          throw new Error("min value must be lower than max value for range");
        }
        this.random = random !== null && random !== undefined ? random : new Random;
        this.randomRange = randomRange;
        this.interval = this._generateRandomInterval();
        this.on(() => {
          this.interval = this._generateRandomInterval();
        });
      }
      this.repeats = repeats || this.repeats;
      if (fcn) {
        this.on(fcn);
      }
    }
    on(fcn) {
      this._callbacks.push(fcn);
    }
    off(fcn) {
      const index = this._callbacks.indexOf(fcn);
      this._callbacks.splice(index, 1);
    }
    update(delta) {
      if (this._running) {
        this._totalTimeAlive += delta;
        this._elapsedTime += delta;
        if (this.maxNumberOfRepeats > -1 && this._numberOfTicks >= this.maxNumberOfRepeats) {
          this._complete = true;
          this._running = false;
          this._elapsedTime = 0;
        }
        if (!this.complete && this._elapsedTime >= this.interval) {
          this._callbacks.forEach((c) => {
            c.call(this);
          });
          this._numberOfTicks++;
          if (this.repeats) {
            this._elapsedTime = 0;
          } else {
            this._complete = true;
            this._running = false;
            this._elapsedTime = 0;
          }
        }
      }
    }
    reset(newInterval, newNumberOfRepeats) {
      if (!!newInterval && newInterval >= 0) {
        this._baseInterval = this.interval = newInterval;
      }
      if (!!this.maxNumberOfRepeats && this.maxNumberOfRepeats >= 0) {
        this.maxNumberOfRepeats = newNumberOfRepeats;
        if (!this.repeats) {
          throw new Error("repeats must be set to true if numberOfRepeats is set");
        }
      }
      this._complete = false;
      this._elapsedTime = 0;
      this._numberOfTicks = 0;
    }
    get timesRepeated() {
      return this._numberOfTicks;
    }
    getTimeRunning() {
      return this._totalTimeAlive;
    }
    get timeToNextAction() {
      if (this.complete) {
        return 0;
      }
      return this.interval - this._elapsedTime;
    }
    get timeElapsedTowardNextAction() {
      return this._elapsedTime;
    }
    get isRunning() {
      return this._running;
    }
    pause() {
      this._running = false;
      return this;
    }
    resume() {
      this._running = true;
      return this;
    }
    start() {
      if (!this.scene) {
        this._logger.warn("Cannot start a timer not part of a scene, timer wont start until added");
      }
      this._running = true;
      if (this.complete) {
        this._complete = false;
        this._elapsedTime = 0;
        this._numberOfTicks = 0;
      }
      return this;
    }
    stop() {
      this._running = false;
      this._elapsedTime = 0;
      this._numberOfTicks = 0;
      return this;
    }
    cancel() {
      this.pause();
      if (this.scene) {
        this.scene.cancelTimer(this);
      }
    }
  }
  Timer._MAX_ID = 0;

  class ParallaxComponent extends Component {
    constructor(parallaxFactor) {
      super();
      this.type = "ex.parallax";
      this.parallaxFactor = vec(1, 1);
      this.parallaxFactor = parallaxFactor !== null && parallaxFactor !== undefined ? parallaxFactor : this.parallaxFactor;
    }
  }

  class DebugGraphicsComponent extends Component {
    constructor(draw, useTransform = true) {
      super();
      this.draw = draw;
      this.useTransform = useTransform;
      this.type = "ex.debuggraphics";
    }
  }

  class QuadTree {
    constructor(bounds, options) {
      this.bounds = bounds;
      this.options = options;
      this._defaultOptions = {
        maxDepth: 10,
        capacity: 10,
        level: 0
      };
      this.items = [];
      this._isDivided = false;
      this.topLeft = null;
      this.topRight = null;
      this.bottomLeft = null;
      this.bottomRight = null;
      this.options = { ...this._defaultOptions, ...options };
      this.halfWidth = bounds.width / 2;
      this.halfHeight = bounds.height / 2;
    }
    _split() {
      this._isDivided = true;
      const newLevelOptions = {
        maxDepth: this.options.maxDepth,
        capacity: this.options.capacity,
        level: this.options.level + 1
      };
      this.topLeft = new QuadTree(new BoundingBox({
        left: this.bounds.left,
        top: this.bounds.top,
        right: this.bounds.left + this.halfWidth,
        bottom: this.bounds.top + this.halfHeight
      }), newLevelOptions);
      this.topRight = new QuadTree(new BoundingBox({
        left: this.bounds.left + this.halfWidth,
        top: this.bounds.top,
        right: this.bounds.right,
        bottom: this.bounds.top + this.halfHeight
      }), newLevelOptions);
      this.bottomLeft = new QuadTree(new BoundingBox({
        left: this.bounds.left,
        top: this.bounds.top + this.halfHeight,
        right: this.bounds.left + this.halfWidth,
        bottom: this.bounds.bottom
      }), newLevelOptions);
      this.bottomRight = new QuadTree(new BoundingBox({
        left: this.bounds.left + this.halfWidth,
        top: this.bounds.top + this.halfHeight,
        right: this.bounds.right,
        bottom: this.bounds.bottom
      }), newLevelOptions);
    }
    _insertIntoSubNodes(item) {
      var _a, _b, _c, _d;
      if ((_a = this.topLeft) === null || _a === undefined ? undefined : _a.bounds.overlaps(item.bounds)) {
        this.topLeft.insert(item);
      }
      if ((_b = this.topRight) === null || _b === undefined ? undefined : _b.bounds.overlaps(item.bounds)) {
        this.topRight.insert(item);
      }
      if ((_c = this.bottomLeft) === null || _c === undefined ? undefined : _c.bounds.overlaps(item.bounds)) {
        this.bottomLeft.insert(item);
      }
      if ((_d = this.bottomRight) === null || _d === undefined ? undefined : _d.bounds.overlaps(item.bounds)) {
        this.bottomRight.insert(item);
      }
    }
    insert(item) {
      if (this._isDivided) {
        this._insertIntoSubNodes(item);
        return;
      }
      this.items.push(item);
      if (this.items.length > this.options.capacity && this.options.level < this.options.maxDepth) {
        if (!this._isDivided) {
          this._split();
        }
        for (const item2 of this.items) {
          this._insertIntoSubNodes(item2);
        }
        this.items.length = 0;
      }
    }
    remove(item) {
      var _a, _b, _c, _d;
      if (!this.bounds.overlaps(item.bounds)) {
        return;
      }
      if (!this._isDivided) {
        const index = this.items.indexOf(item);
        if (index > -1) {
          this.items.splice(index, 1);
        }
        return;
      }
      if ((_a = this.topLeft) === null || _a === undefined ? undefined : _a.bounds.overlaps(item.bounds)) {
        this.topLeft.remove(item);
      }
      if ((_b = this.topRight) === null || _b === undefined ? undefined : _b.bounds.overlaps(item.bounds)) {
        this.topRight.remove(item);
      }
      if ((_c = this.bottomLeft) === null || _c === undefined ? undefined : _c.bounds.overlaps(item.bounds)) {
        this.bottomLeft.remove(item);
      }
      if ((_d = this.bottomRight) === null || _d === undefined ? undefined : _d.bounds.overlaps(item.bounds)) {
        this.bottomRight.remove(item);
      }
    }
    query(boundingBox) {
      let results = this.items;
      if (this._isDivided) {
        if (this.topLeft.bounds.overlaps(boundingBox)) {
          results = results.concat(this.topLeft.query(boundingBox));
        }
        if (this.topRight.bounds.overlaps(boundingBox)) {
          results = results.concat(this.topRight.query(boundingBox));
        }
        if (this.bottomLeft.bounds.overlaps(boundingBox)) {
          results = results.concat(this.bottomLeft.query(boundingBox));
        }
        if (this.bottomRight.bounds.overlaps(boundingBox)) {
          results = results.concat(this.bottomRight.query(boundingBox));
        }
      }
      results = results.filter((item, index) => {
        return results.indexOf(item) >= index;
      });
      return results;
    }
    clear() {
      this.items = [];
      this._isDivided = false;
      this.topLeft = null;
      this.topRight = null;
      this.bottomLeft = null;
      this.bottomRight = null;
    }
    getAllItems() {
      let results = this.items;
      if (this._isDivided) {
        results = results.concat(this.topLeft.getAllItems());
        results = results.concat(this.topRight.getAllItems());
        results = results.concat(this.bottomLeft.getAllItems());
        results = results.concat(this.bottomRight.getAllItems());
      }
      results = results.filter((item, index) => {
        return results.indexOf(item) >= index;
      });
      return results;
    }
    getTreeDepth() {
      if (!this._isDivided) {
        return 0;
      }
      return 1 + Math.max(this.topLeft.getTreeDepth(), this.topRight.getTreeDepth(), this.bottomLeft.getTreeDepth(), this.bottomRight.getTreeDepth());
    }
    debug(ctx) {
      this.bounds.draw(ctx, Color.Yellow);
      if (this._isDivided) {
        this.topLeft.bounds.draw(ctx, Color.Yellow);
        this.topRight.bounds.draw(ctx, Color.Yellow);
        this.bottomLeft.bounds.draw(ctx, Color.Yellow);
        this.bottomRight.bounds.draw(ctx, Color.Yellow);
      }
    }
  }
  const TileMapEvents = {
    PreUpdate: "preupdate",
    PostUpdate: "postupdate",
    PreDraw: "predraw",
    PostDraw: "postdraw"
  };

  class TileMap extends Entity {
    flagCollidersDirty() {
      this._collidersDirty = true;
    }
    flagTilesDirty() {
      for (let i = 0;i < this.tiles.length; i++) {
        if (this.tiles[i]) {
          this.tiles[i].flagDirty();
        }
      }
    }
    get x() {
      var _a;
      return (_a = this._transform.pos.x) !== null && _a !== undefined ? _a : 0;
    }
    set x(val) {
      var _a;
      if ((_a = this._transform) === null || _a === undefined ? undefined : _a.pos) {
        this.get(TransformComponent).pos = vec(val, this.y);
      }
    }
    get y() {
      var _a, _b;
      return (_b = (_a = this._transform) === null || _a === undefined ? undefined : _a.pos.y) !== null && _b !== undefined ? _b : 0;
    }
    set y(val) {
      var _a;
      if ((_a = this._transform) === null || _a === undefined ? undefined : _a.pos) {
        this._transform.pos = vec(this.x, val);
      }
    }
    get z() {
      var _a;
      return (_a = this._transform.z) !== null && _a !== undefined ? _a : 0;
    }
    set z(val) {
      if (this._transform) {
        this._transform.z = val;
      }
    }
    get rotation() {
      var _a, _b;
      return (_b = (_a = this._transform) === null || _a === undefined ? undefined : _a.rotation) !== null && _b !== undefined ? _b : 0;
    }
    set rotation(val) {
      if (this._transform) {
        this._transform.rotation = val;
      }
    }
    get scale() {
      var _a, _b;
      return (_b = (_a = this._transform) === null || _a === undefined ? undefined : _a.scale) !== null && _b !== undefined ? _b : Vector.One;
    }
    set scale(val) {
      var _a;
      if ((_a = this._transform) === null || _a === undefined ? undefined : _a.scale) {
        this._transform.scale = val;
      }
    }
    get pos() {
      return this._transform.pos;
    }
    set pos(val) {
      this._transform.pos = val;
    }
    get vel() {
      return this._motion.vel;
    }
    set vel(val) {
      this._motion.vel = val;
    }
    emit(eventName, event) {
      this.events.emit(eventName, event);
    }
    on(eventName, handler) {
      return this.events.on(eventName, handler);
    }
    once(eventName, handler) {
      return this.events.once(eventName, handler);
    }
    off(eventName, handler) {
      this.events.off(eventName, handler);
    }
    constructor(options) {
      var _a, _b;
      super(null, options.name);
      this.events = new EventEmitter;
      this._token = 0;
      this.logger = Logger.getInstance();
      this.tiles = [];
      this._rows = [];
      this._cols = [];
      this.renderFromTopOfGraphic = false;
      this._collidersDirty = true;
      this._originalOffsets = new WeakMap;
      this.addComponent(new TransformComponent);
      this.addComponent(new MotionComponent);
      this.addComponent(new BodyComponent({
        type: CollisionType.Fixed
      }));
      this.addComponent(new GraphicsComponent({
        onPostDraw: (ctx, delta) => this.draw(ctx, delta)
      }));
      this.addComponent(new DebugGraphicsComponent((ctx, debugFlags) => this.debug(ctx, debugFlags), false));
      this.addComponent(new ColliderComponent);
      this._graphics = this.get(GraphicsComponent);
      this._transform = this.get(TransformComponent);
      this._motion = this.get(MotionComponent);
      this._collider = this.get(ColliderComponent);
      this._composite = this._collider.useCompositeCollider([]);
      this._transform.pos = (_a = options.pos) !== null && _a !== undefined ? _a : Vector.Zero;
      this._oldPos = this._transform.pos.clone();
      this._oldScale = this._transform.scale.clone();
      this.renderFromTopOfGraphic = (_b = options.renderFromTopOfGraphic) !== null && _b !== undefined ? _b : this.renderFromTopOfGraphic;
      this.tileWidth = options.tileWidth;
      this.tileHeight = options.tileHeight;
      this.rows = options.rows;
      this.columns = options.columns;
      this._quadTree = new QuadTree(BoundingBox.fromDimension(this.columns * this.tileWidth, this.rows * this.tileHeight, Vector.Zero, this.pos));
      this.tiles = new Array(this.rows * this.columns);
      this._rows = new Array(this.rows);
      this._cols = new Array(this.columns);
      let currentCol = [];
      for (let i = 0;i < this.columns; i++) {
        for (let j = 0;j < this.rows; j++) {
          const tile = new Tile({
            x: i,
            y: j,
            map: this
          });
          tile.map = this;
          this._quadTree.insert(tile);
          this.tiles[i + j * this.columns] = tile;
          currentCol.push(tile);
          if (!this._rows[j]) {
            this._rows[j] = [];
          }
          this._rows[j].push(tile);
        }
        this._cols[i] = currentCol;
        currentCol = [];
      }
      this._graphics.localBounds = new BoundingBox({
        left: 0,
        top: 0,
        right: this.columns * this.tileWidth * this.scale.x,
        bottom: this.rows * this.tileHeight * this.scale.y
      });
    }
    _initialize(engine) {
      super._initialize(engine);
      this._engine = engine;
    }
    _getOrSetColliderOriginalOffset(collider) {
      if (!this._originalOffsets.has(collider)) {
        const originalOffset = collider.offset;
        this._originalOffsets.set(collider, originalOffset);
        return originalOffset;
      } else {
        return this._originalOffsets.get(collider);
      }
    }
    _updateQuadTree() {
      this._quadTree = new QuadTree(BoundingBox.fromDimension(this.columns * this.tileWidth, this.rows * this.tileHeight, Vector.Zero, Vector.Zero).scale(this.scale).translate(this.pos).rotate(this.rotation, this.pos));
      for (let i = 0;i < this.tiles.length; i++) {
        this._quadTree.insert(this.tiles[i]);
      }
    }
    _updateColliders() {
      this._collider.$colliderRemoved.notifyAll(this._composite);
      this._composite.clearColliders();
      const colliders = [];
      this._composite = this._collider.useCompositeCollider([]);
      let current;
      const shareEdges = (prev, next) => {
        if (prev && next) {
          return prev.top === next.top && prev.bottom === next.bottom && prev.right === next.left;
        }
        return false;
      };
      const checkAndCombine = (current2, colliders2, maxLookBack = 10) => {
        if (!current2) {
          return false;
        }
        for (let i = colliders2.length - 1;i >= 0; i--) {
          if (maxLookBack-- < 0) {
            return false;
          }
          const prev = colliders2[i];
          if (shareEdges(prev, current2)) {
            colliders2[i] = prev.combine(current2);
            return true;
          }
        }
        return false;
      };
      for (let i = 0;i < this.columns; i++) {
        for (let j = 0;j < this.rows; j++) {
          const tile = this.tiles[i + j * this.columns];
          if (tile.solid) {
            if (tile.getColliders().length > 0) {
              for (const collider of tile.getColliders()) {
                const originalOffset = this._getOrSetColliderOriginalOffset(collider);
                collider.offset = vec(tile.x * this.tileWidth * this.scale.x, tile.y * this.tileHeight * this.scale.y).add(originalOffset);
                collider.owner = this;
                this._composite.addCollider(collider);
              }
              if (current && !checkAndCombine(current, colliders)) {
                colliders.push(current);
              }
              current = null;
            } else {
              if (!current) {
                current = tile.defaultGeometry;
              } else {
                current = current.combine(tile.defaultGeometry);
              }
            }
          } else {
            if (current && !checkAndCombine(current, colliders)) {
              colliders.push(current);
            }
            current = null;
          }
        }
        if (current && !checkAndCombine(current, colliders)) {
          colliders.push(current);
        }
        current = null;
      }
      for (const c of colliders) {
        const collider = Shape.Box(c.width, c.height, Vector.Zero, vec(c.left - this.pos.x, c.top - this.pos.y));
        collider.owner = this;
        this._composite.addCollider(collider);
      }
      this._collider.update();
      this._collider.$colliderAdded.notifyAll(this._composite);
    }
    getTileByIndex(index) {
      return this.tiles[index];
    }
    getTile(x, y) {
      if (x < 0 || y < 0 || x >= this.columns || y >= this.rows) {
        return null;
      }
      return this.tiles[x + y * this.columns];
    }
    getTileByPoint(point2) {
      const x = Math.floor((point2.x - this.pos.x) / (this.tileWidth * this.scale.x));
      const y = Math.floor((point2.y - this.pos.y) / (this.tileHeight * this.scale.y));
      const tile = this.getTile(x, y);
      if (x >= 0 && y >= 0 && x < this.columns && y < this.rows && tile) {
        return tile;
      }
      return null;
    }
    getRows() {
      return this._rows;
    }
    getColumns() {
      return this._cols;
    }
    update(engine, delta) {
      this.onPreUpdate(engine, delta);
      this.emit("preupdate", new PreUpdateEvent(engine, delta, this));
      if (!this._oldPos.equals(this.pos) || this._oldRotation !== this.rotation || !this._oldScale.equals(this.scale)) {
        this.flagCollidersDirty();
        this.flagTilesDirty();
      }
      if (this._collidersDirty) {
        this._collidersDirty = false;
        this._updateColliders();
        this._updateQuadTree();
      }
      this._token++;
      this.pos.clone(this._oldPos);
      this._oldRotation = this.rotation;
      this.scale.clone(this._oldScale);
      this._transform.pos = this.pos;
      this.onPostUpdate(engine, delta);
      this.emit("postupdate", new PostUpdateEvent(engine, delta, this));
    }
    draw(ctx, delta) {
      this.emit("predraw", new PreDrawEvent(ctx, delta, this));
      let worldBounds = this._engine.screen.getWorldBounds();
      const screenBounds = this._engine.screen.getScreenBounds();
      let graphics, graphicsIndex, graphicsLen;
      const isScreenCoords = this._transform.coordPlane === CoordPlane.Screen;
      const maybeParallax = this.get(ParallaxComponent);
      if (maybeParallax) {
        let pos = this.pos;
        const oneMinusFactor = Vector.One.sub(maybeParallax.parallaxFactor);
        const parallaxOffset = this._engine.currentScene.camera.pos.scale(oneMinusFactor);
        pos = pos.sub(parallaxOffset);
        worldBounds = worldBounds.translate(pos);
      }
      const tiles = this._quadTree.query(isScreenCoords ? screenBounds : worldBounds);
      for (let i = 0;i < tiles.length; i++) {
        const tile = tiles[i];
        const offsets = tile.getGraphicsOffsets();
        graphics = tile.getGraphics();
        for (graphicsIndex = 0, graphicsLen = graphics.length;graphicsIndex < graphicsLen; graphicsIndex++) {
          const graphic = graphics[graphicsIndex];
          const offset = offsets[graphicsIndex];
          if (graphic) {
            if (hasGraphicsTick(graphic)) {
              graphic === null || graphic === undefined || graphic.tick(delta, this._token);
            }
            const offsetY = this.renderFromTopOfGraphic ? 0 : graphic.height - this.tileHeight;
            graphic.draw(ctx, tile.x * this.tileWidth + offset.x, tile.y * this.tileHeight - offsetY + offset.y);
          }
        }
      }
      this.emit("postdraw", new PostDrawEvent(ctx, delta, this));
    }
    debug(gfx, debugFlags) {
      const { showAll, showGrid, gridColor, gridWidth, showSolidBounds: showColliderBounds, solidBoundsColor: colliderBoundsColor, showColliderGeometry, showQuadTree } = debugFlags.tilemap;
      const { geometryColor, geometryLineWidth, geometryPointSize } = debugFlags.collider;
      const width = this.tileWidth * this.columns * this.scale.x;
      const height = this.tileHeight * this.rows * this.scale.y;
      const pos = this.pos;
      if (showGrid || showAll) {
        for (let r = 0;r < this.rows + 1; r++) {
          const yOffset = vec(0, r * this.tileHeight * this.scale.y);
          gfx.drawLine(pos.add(yOffset), pos.add(vec(width, yOffset.y)), gridColor, gridWidth);
        }
        for (let c = 0;c < this.columns + 1; c++) {
          const xOffset = vec(c * this.tileWidth * this.scale.x, 0);
          gfx.drawLine(pos.add(xOffset), pos.add(vec(xOffset.x, height)), gridColor, gridWidth);
        }
      }
      if (showAll || showColliderBounds || showColliderGeometry) {
        const colliders = this._composite.getColliders();
        gfx.save();
        gfx.translate(this.pos.x, this.pos.y);
        gfx.scale(this.scale.x, this.scale.y);
        for (const collider of colliders) {
          const bounds = collider.localBounds;
          const pos2 = collider.worldPos.sub(this.pos);
          if (showColliderBounds) {
            gfx.drawRectangle(pos2, bounds.width, bounds.height, colliderBoundsColor);
          }
        }
        gfx.restore();
        if (showColliderGeometry) {
          for (const collider of colliders) {
            collider.debug(gfx, geometryColor, { lineWidth: geometryLineWidth, pointSize: geometryPointSize });
          }
        }
      }
      if (showAll || showQuadTree || showColliderBounds) {
        gfx.save();
        gfx.z = 999;
        if (showQuadTree) {
          this._quadTree.debug(gfx);
        }
        if (showColliderBounds) {
          for (let i = 0;i < this.tiles.length; i++) {
            this.tiles[i].bounds.draw(gfx);
          }
        }
        gfx.restore();
      }
    }
  }

  class Tile extends Entity {
    get pos() {
      if (this._posDirty) {
        this._recalculate();
        this._posDirty = false;
      }
      return this._pos;
    }
    get width() {
      return this._width;
    }
    get height() {
      return this._height;
    }
    get solid() {
      return this._solid;
    }
    set solid(val) {
      var _a;
      (_a = this.map) === null || _a === undefined || _a.flagCollidersDirty();
      this._solid = val;
    }
    getGraphics() {
      return this._graphics;
    }
    getGraphicsOffsets() {
      return this._offsets;
    }
    addGraphic(graphic, options) {
      this._graphics.push(graphic);
      if (options === null || options === undefined ? undefined : options.offset) {
        this._offsets.push(options.offset);
      } else {
        this._offsets.push(Vector.Zero);
      }
    }
    removeGraphic(graphic) {
      const index = this._graphics.indexOf(graphic);
      if (index > -1) {
        this._graphics.splice(index, 1);
        this._offsets.splice(index, 1);
      }
    }
    clearGraphics() {
      this._graphics.length = 0;
      this._offsets.length = 0;
    }
    getColliders() {
      return this._colliders;
    }
    addCollider(collider) {
      this._colliders.push(collider);
      this.map.flagCollidersDirty();
    }
    removeCollider(collider) {
      const index = this._colliders.indexOf(collider);
      if (index > -1) {
        this._colliders.splice(index, 1);
      }
      this.map.flagCollidersDirty();
    }
    clearColliders() {
      this._colliders.length = 0;
      this.map.flagCollidersDirty();
    }
    constructor(options) {
      var _a, _b;
      super();
      this._posDirty = false;
      this._solid = false;
      this._graphics = [];
      this._offsets = [];
      this._colliders = [];
      this.data = new Map;
      this.x = options.x;
      this.y = options.y;
      this.map = options.map;
      this._width = options.map.tileWidth * this.map.scale.x;
      this._height = options.map.tileHeight * this.map.scale.y;
      this.solid = (_a = options.solid) !== null && _a !== undefined ? _a : this.solid;
      this._graphics = (_b = options.graphics) !== null && _b !== undefined ? _b : [];
      this._recalculate();
    }
    flagDirty() {
      return this._posDirty = true;
    }
    _recalculate() {
      const geometryPos = this.map.pos.add(vec(this.x * this.map.tileWidth, this.y * this.map.tileHeight));
      this._geometry = new BoundingBox(geometryPos.x, geometryPos.y, geometryPos.x + this.map.tileWidth, geometryPos.y + this.map.tileHeight);
      this._width = this.map.tileWidth * this.map.scale.x;
      this._height = this.map.tileHeight * this.map.scale.y;
      this._pos = this.map.pos.add(vec(this.x * this._width, this.y * this._height));
      this._bounds = new BoundingBox(this._pos.x, this._pos.y, this._pos.x + this._width, this._pos.y + this._height);
      if (this.map.rotation) {
        this._bounds = this._bounds.rotate(this.map.rotation, this.map.pos);
      }
      this._posDirty = false;
    }
    get bounds() {
      if (this._posDirty) {
        this._recalculate();
      }
      return this._bounds;
    }
    get defaultGeometry() {
      return this._geometry;
    }
    get center() {
      if (this._posDirty) {
        this._recalculate();
      }
      return new Vector(this._pos.x + this._width / 2, this._pos.y + this._height / 2);
    }
  }

  class StrategyContainer {
    constructor(camera) {
      this.camera = camera;
    }
    lockToActor(actor) {
      this.camera.addStrategy(new LockCameraToActorStrategy(actor));
    }
    lockToActorAxis(actor, axis) {
      this.camera.addStrategy(new LockCameraToActorAxisStrategy(actor, axis));
    }
    elasticToActor(actor, cameraElasticity, cameraFriction) {
      this.camera.addStrategy(new ElasticToActorStrategy(actor, cameraElasticity, cameraFriction));
    }
    radiusAroundActor(actor, radius) {
      this.camera.addStrategy(new RadiusAroundActorStrategy(actor, radius));
    }
    limitCameraBounds(box) {
      this.camera.addStrategy(new LimitCameraBoundsStrategy(box));
    }
  }
  var Axis;
  (function(Axis2) {
    Axis2[Axis2["X"] = 0] = "X";
    Axis2[Axis2["Y"] = 1] = "Y";
  })(Axis || (Axis = {}));

  class LockCameraToActorStrategy {
    constructor(target) {
      this.target = target;
      this.action = (target2, camera, engine, delta) => {
        const center = target2.center;
        return center;
      };
    }
  }

  class LockCameraToActorAxisStrategy {
    constructor(target, axis) {
      this.target = target;
      this.axis = axis;
      this.action = (target2, cam, _eng, _delta) => {
        const center = target2.center;
        const currentFocus = cam.getFocus();
        if (this.axis === Axis.X) {
          return new Vector(center.x, currentFocus.y);
        } else {
          return new Vector(currentFocus.x, center.y);
        }
      };
    }
  }

  class ElasticToActorStrategy {
    constructor(target, cameraElasticity, cameraFriction) {
      this.target = target;
      this.cameraElasticity = cameraElasticity;
      this.cameraFriction = cameraFriction;
      this.action = (target2, cam, _eng, _delta) => {
        const position = target2.center;
        let focus = cam.getFocus();
        let cameraVel = cam.vel.clone();
        const stretch = position.sub(focus).scale(this.cameraElasticity);
        cameraVel = cameraVel.add(stretch);
        const friction = cameraVel.scale(-1).scale(this.cameraFriction);
        cameraVel = cameraVel.add(friction);
        focus = focus.add(cameraVel);
        return focus;
      };
    }
  }

  class RadiusAroundActorStrategy {
    constructor(target, radius) {
      this.target = target;
      this.radius = radius;
      this.action = (target2, cam, _eng, _delta) => {
        const position = target2.center;
        const focus = cam.getFocus();
        const direction = position.sub(focus);
        const distance = direction.size;
        if (distance >= this.radius) {
          const offset = distance - this.radius;
          return focus.add(direction.normalize().scale(offset));
        }
        return focus;
      };
    }
  }

  class LimitCameraBoundsStrategy {
    constructor(target) {
      this.target = target;
      this.boundSizeChecked = false;
      this.action = (target2, cam, _eng, _delta) => {
        const focus = cam.getFocus();
        if (!this.boundSizeChecked) {
          if (target2.bottom - target2.top < _eng.drawHeight || target2.right - target2.left < _eng.drawWidth) {
            Logger.getInstance().warn("Camera bounds should not be smaller than the engine viewport");
          }
          this.boundSizeChecked = true;
        }
        let focusX = focus.x;
        let focusY = focus.y;
        if (focus.x < target2.left + _eng.halfDrawWidth) {
          focusX = target2.left + _eng.halfDrawWidth;
        } else if (focus.x > target2.right - _eng.halfDrawWidth) {
          focusX = target2.right - _eng.halfDrawWidth;
        }
        if (focus.y < target2.top + _eng.halfDrawHeight) {
          focusY = target2.top + _eng.halfDrawHeight;
        } else if (focus.y > target2.bottom - _eng.halfDrawHeight) {
          focusY = target2.bottom - _eng.halfDrawHeight;
        }
        return vec(focusX, focusY);
      };
    }
  }
  const CameraEvents = {
    Initialize: "initialize",
    PreUpdate: "preupdate",
    PostUpdate: "postupdate"
  };

  class Camera {
    constructor() {
      this.events = new EventEmitter;
      this.transform = AffineMatrix.identity();
      this.inverse = AffineMatrix.identity();
      this._cameraStrategies = [];
      this.strategy = new StrategyContainer(this);
      this._z = 1;
      this.dz = 0;
      this.az = 0;
      this.rotation = 0;
      this._angularVelocity = 0;
      this._posChanged = false;
      this._pos = watchAny(Vector.Zero, () => this._posChanged = true);
      this.drawPos = this.pos.clone();
      this._oldPos = this.pos.clone();
      this.vel = Vector.Zero;
      this.acc = Vector.Zero;
      this._cameraMoving = false;
      this._currentLerpTime = 0;
      this._lerpDuration = 1000;
      this._lerpStart = null;
      this._lerpEnd = null;
      this._isShaking = false;
      this._shakeMagnitudeX = 0;
      this._shakeMagnitudeY = 0;
      this._shakeDuration = 0;
      this._elapsedShakeTime = 0;
      this._xShake = 0;
      this._yShake = 0;
      this._isZooming = false;
      this._zoomStart = 1;
      this._zoomEnd = 1;
      this._currentZoomTime = 0;
      this._zoomDuration = 0;
      this._zoomEasing = EasingFunctions.EaseInOutCubic;
      this._easing = EasingFunctions.EaseInOutCubic;
      this._halfWidth = 0;
      this._halfHeight = 0;
      this._viewport = null;
      this._isInitialized = false;
    }
    get zoom() {
      return this._z;
    }
    set zoom(val) {
      this._z = val;
      if (this._engine) {
        this._halfWidth = this._engine.halfDrawWidth;
        this._halfHeight = this._engine.halfDrawHeight;
      }
    }
    get angularVelocity() {
      return this._angularVelocity;
    }
    set angularVelocity(value) {
      this._angularVelocity = value;
    }
    get pos() {
      return this._pos;
    }
    set pos(vec2) {
      this._pos = watchAny(vec2, () => this._posChanged = true);
      this._posChanged = true;
    }
    get x() {
      return this.pos.x;
    }
    set x(value) {
      if (!this._follow && !this._cameraMoving) {
        this.pos = vec(value, this.pos.y);
      }
    }
    get y() {
      return this.pos.y;
    }
    set y(value) {
      if (!this._follow && !this._cameraMoving) {
        this.pos = vec(this.pos.x, value);
      }
    }
    get dx() {
      return this.vel.x;
    }
    set dx(value) {
      this.vel = vec(value, this.vel.y);
    }
    get dy() {
      return this.vel.y;
    }
    set dy(value) {
      this.vel = vec(this.vel.x, value);
    }
    get ax() {
      return this.acc.x;
    }
    set ax(value) {
      this.acc = vec(value, this.acc.y);
    }
    get ay() {
      return this.acc.y;
    }
    set ay(value) {
      this.acc = vec(this.acc.x, value);
    }
    getFocus() {
      return this.pos;
    }
    move(pos, duration, easingFn = EasingFunctions.EaseInOutCubic) {
      if (typeof easingFn !== "function") {
        throw "Please specify an EasingFunction";
      }
      if (this._follow) {
        return Promise.reject(pos);
      }
      if (this._lerpPromise && this._lerpResolve) {
        this._lerpResolve(pos);
      }
      this._lerpPromise = new Promise((resolve) => {
        this._lerpResolve = resolve;
      });
      this._lerpStart = this.getFocus().clone();
      this._lerpDuration = duration;
      this._lerpEnd = pos;
      this._currentLerpTime = 0;
      this._cameraMoving = true;
      this._easing = easingFn;
      return this._lerpPromise;
    }
    shake(magnitudeX, magnitudeY, duration) {
      this._isShaking = true;
      this._shakeMagnitudeX = magnitudeX;
      this._shakeMagnitudeY = magnitudeY;
      this._shakeDuration = duration;
    }
    zoomOverTime(scale, duration = 0, easingFn = EasingFunctions.EaseInOutCubic) {
      this._zoomPromise = new Promise((resolve) => {
        this._zoomResolve = resolve;
      });
      if (duration) {
        this._isZooming = true;
        this._zoomEasing = easingFn;
        this._currentZoomTime = 0;
        this._zoomDuration = duration;
        this._zoomStart = this.zoom;
        this._zoomEnd = scale;
      } else {
        this._isZooming = false;
        this.zoom = scale;
        return Promise.resolve(true);
      }
      return this._zoomPromise;
    }
    get viewport() {
      if (this._viewport) {
        return this._viewport;
      }
      return new BoundingBox(0, 0, 0, 0);
    }
    addStrategy(cameraStrategy) {
      this._cameraStrategies.push(cameraStrategy);
    }
    removeStrategy(cameraStrategy) {
      removeItemFromArray(cameraStrategy, this._cameraStrategies);
    }
    clearAllStrategies() {
      this._cameraStrategies.length = 0;
    }
    _preupdate(engine, delta) {
      this.events.emit("preupdate", new PreUpdateEvent(engine, delta, this));
      this.onPreUpdate(engine, delta);
    }
    onPreUpdate(engine, delta) {
    }
    _postupdate(engine, delta) {
      this.events.emit("postupdate", new PostUpdateEvent(engine, delta, this));
      this.onPostUpdate(engine, delta);
    }
    onPostUpdate(engine, delta) {
    }
    get isInitialized() {
      return this._isInitialized;
    }
    _initialize(engine) {
      if (!this.isInitialized) {
        this._engine = engine;
        this._screen = engine.screen;
        const currentRes = this._screen.contentArea;
        let center = vec(currentRes.width / 2, currentRes.height / 2);
        if (!this._engine.loadingComplete) {
          const res = this._screen.peekResolution();
          if (res) {
            center = vec(res.width / 2, res.height / 2);
          }
        }
        this._halfWidth = center.x;
        this._halfHeight = center.y;
        if (!this._posChanged) {
          this.pos = center;
        }
        this.pos.clone(this.drawPos);
        this.updateTransform(this.pos);
        this.runStrategies(engine, engine.clock.elapsed());
        this.updateViewport();
        this.updateTransform(this.pos);
        this.pos.clone(this._oldPos);
        this.onInitialize(engine);
        this.events.emit("initialize", new InitializeEvent(engine, this));
        this._isInitialized = true;
      }
    }
    onInitialize(engine) {
    }
    emit(eventName, event) {
      this.events.emit(eventName, event);
    }
    on(eventName, handler) {
      return this.events.on(eventName, handler);
    }
    once(eventName, handler) {
      return this.events.once(eventName, handler);
    }
    off(eventName, handler) {
      this.events.off(eventName, handler);
    }
    runStrategies(engine, delta) {
      for (const s of this._cameraStrategies) {
        this.pos = s.action.call(s, s.target, this, engine, delta);
      }
    }
    updateViewport() {
      this._viewport = new BoundingBox(this.x - this._halfWidth, this.y - this._halfHeight, this.x + this._halfWidth, this.y + this._halfHeight);
    }
    update(engine, delta) {
      this._initialize(engine);
      this._preupdate(engine, delta);
      this.pos.clone(this._oldPos);
      this.pos = this.pos.add(this.vel.scale(delta / 1000));
      this.zoom += this.dz * delta / 1000;
      this.vel = this.vel.add(this.acc.scale(delta / 1000));
      this.dz += this.az * delta / 1000;
      this.rotation += this.angularVelocity * delta / 1000;
      if (this._isZooming) {
        if (this._currentZoomTime < this._zoomDuration) {
          const zoomEasing = this._zoomEasing;
          const newZoom = zoomEasing(this._currentZoomTime, this._zoomStart, this._zoomEnd, this._zoomDuration);
          this.zoom = newZoom;
          this._currentZoomTime += delta;
        } else {
          this._isZooming = false;
          this.zoom = this._zoomEnd;
          this._currentZoomTime = 0;
          this._zoomResolve(true);
        }
      }
      if (this._cameraMoving) {
        if (this._currentLerpTime < this._lerpDuration) {
          const moveEasing = EasingFunctions.CreateVectorEasingFunction(this._easing);
          const lerpPoint = moveEasing(this._currentLerpTime, this._lerpStart, this._lerpEnd, this._lerpDuration);
          this.pos = lerpPoint;
          this._currentLerpTime += delta;
        } else {
          this.pos = this._lerpEnd;
          const end = this._lerpEnd.clone();
          this._lerpStart = null;
          this._lerpEnd = null;
          this._currentLerpTime = 0;
          this._cameraMoving = false;
          this._lerpResolve(end);
        }
      }
      if (this._isDoneShaking()) {
        this._isShaking = false;
        this._elapsedShakeTime = 0;
        this._shakeMagnitudeX = 0;
        this._shakeMagnitudeY = 0;
        this._shakeDuration = 0;
        this._xShake = 0;
        this._yShake = 0;
      } else {
        this._elapsedShakeTime += delta;
        this._xShake = (Math.random() * this._shakeMagnitudeX | 0) + 1;
        this._yShake = (Math.random() * this._shakeMagnitudeY | 0) + 1;
      }
      this.runStrategies(engine, delta);
      this.updateViewport();
      this.updateTransform(this.pos);
      this._postupdate(engine, delta);
    }
    draw(ctx) {
      this.pos.clone(this.drawPos);
      if (this._engine.fixedUpdateFps) {
        const blend = this._engine.currentFrameLagMs / (1000 / this._engine.fixedUpdateFps);
        const interpolatedPos = this.pos.scale(blend).add(this._oldPos.scale(1 - blend));
        interpolatedPos.clone(this.drawPos);
        this.updateTransform(interpolatedPos);
      }
      ctx.multiply(this.transform);
    }
    updateTransform(pos) {
      const newCanvasWidth = this._screen.resolution.width / this.zoom;
      const newCanvasHeight = this._screen.resolution.height / this.zoom;
      const cameraPos = vec(-pos.x + newCanvasWidth / 2 + this._xShake, -pos.y + newCanvasHeight / 2 + this._yShake);
      this.transform.reset();
      this.transform.scale(this.zoom, this.zoom);
      this.transform.translate(newCanvasWidth / 2, newCanvasHeight / 2);
      this.transform.rotate(this.rotation);
      this.transform.translate(-newCanvasWidth / 2, -newCanvasHeight / 2);
      this.transform.translate(cameraPos.x, cameraPos.y);
      this.transform.inverse(this.inverse);
    }
    _isDoneShaking() {
      return !this._isShaking || this._elapsedShakeTime >= this._shakeDuration;
    }
  }
  const TriggerEvents = {
    ExitTrigger: "exit",
    EnterTrigger: "enter"
  };
  const triggerDefaults = {
    pos: Vector.Zero,
    width: 10,
    height: 10,
    visible: false,
    action: () => {
      return;
    },
    filter: () => true,
    repeat: -1
  };

  class Trigger extends Actor {
    constructor(opts) {
      super({ x: opts.pos.x, y: opts.pos.y, width: opts.width, height: opts.height });
      this.events = new EventEmitter;
      this.action = () => {
        return;
      };
      this.filter = () => true;
      this.repeat = -1;
      opts = {
        ...triggerDefaults,
        ...opts
      };
      this.filter = opts.filter || this.filter;
      this.repeat = opts.repeat || this.repeat;
      this.action = opts.action || this.action;
      if (opts.target) {
        this.target = opts.target;
      }
      this.graphics.visible = opts.visible;
      this.body.collisionType = CollisionType.Passive;
      this.events.on("collisionstart", (evt) => {
        if (this.filter(evt.other)) {
          this.events.emit("enter", new EnterTriggerEvent(this, evt.other));
          this._dispatchAction();
          if (this.repeat === 0) {
            this.kill();
          }
        }
      });
      this.events.on("collisionend", (evt) => {
        if (this.filter(evt.other)) {
          this.events.emit("exit", new ExitTriggerEvent(this, evt.other));
        }
      });
    }
    set target(target) {
      this._target = target;
      this.filter = (actor) => actor === target;
    }
    get target() {
      return this._target;
    }
    _initialize(engine) {
      super._initialize(engine);
    }
    _dispatchAction() {
      if (this.repeat !== 0) {
        this.action.call(this);
        this.repeat--;
      }
    }
  }
  var SystemType;
  (function(SystemType2) {
    SystemType2["Update"] = "update";
    SystemType2["Draw"] = "draw";
  })(SystemType || (SystemType = {}));

  class System {
    constructor() {
      this.priority = 0;
    }
    notify(_entityAddedOrRemoved) {
    }
  }

  class AddedEntity {
    constructor(data) {
      this.data = data;
      this.type = "Entity Added";
    }
  }
  function isAddedSystemEntity(x) {
    return !!x && x.type === "Entity Added";
  }

  class RemovedEntity {
    constructor(data) {
      this.data = data;
      this.type = "Entity Removed";
    }
  }
  function isRemoveSystemEntity(x) {
    return !!x && x.type === "Entity Removed";
  }

  class EntityManager {
    constructor(_world) {
      this._world = _world;
      this.entities = [];
      this._entityIndex = {};
      this._entitiesToRemove = [];
    }
    updateEntities(_context, elapsed) {
      for (const entity of this.entities) {
        entity.update(_context.engine, elapsed);
        if (!entity.active) {
          this.removeEntity(entity);
        }
      }
    }
    findEntitiesForRemoval() {
      for (const entity of this.entities) {
        if (!entity.active) {
          this.removeEntity(entity);
        }
      }
    }
    notify(message) {
      if (isAddedComponent(message)) {
        this._world.queryManager.addEntity(message.data.entity);
      }
      if (isRemovedComponent(message)) {
        this._world.queryManager.removeComponent(message.data.entity, message.data.component);
      }
    }
    addEntity(entity) {
      entity.active = true;
      entity.scene = this._world.context;
      if (entity && !this._entityIndex[entity.id]) {
        this._entityIndex[entity.id] = entity;
        this.entities.push(entity);
        this._world.queryManager.addEntity(entity);
        entity.componentAdded$.register(this);
        entity.componentRemoved$.register(this);
        entity.children.forEach((c) => {
          c.scene = entity.scene;
          this.addEntity(c);
        });
        entity.childrenAdded$.register({
          notify: (e) => {
            this.addEntity(e);
          }
        });
        entity.childrenRemoved$.register({
          notify: (e) => {
            this.removeEntity(e, false);
          }
        });
      }
    }
    removeEntity(idOrEntity, deferred = true) {
      var _a;
      let id = 0;
      if (idOrEntity instanceof Entity) {
        id = idOrEntity.id;
      } else {
        id = idOrEntity;
      }
      const entity = this._entityIndex[id];
      if (entity && entity.active) {
        entity.active = false;
      }
      if (entity && deferred) {
        this._entitiesToRemove.push(entity);
        return;
      }
      delete this._entityIndex[id];
      if (entity) {
        entity.scene = null;
        removeItemFromArray(entity, this.entities);
        this._world.queryManager.removeEntity(entity);
        entity.componentAdded$.unregister(this);
        entity.componentRemoved$.unregister(this);
        entity.children.forEach((c) => {
          c.scene = null;
          this.removeEntity(c, deferred);
        });
        entity.childrenAdded$.clear();
        entity.childrenRemoved$.clear();
        if ((_a = this._world.context) === null || _a === undefined ? undefined : _a.engine) {
          this._world.context.engine.stats.currFrame.actors.killed++;
        }
      }
    }
    processEntityRemovals() {
      for (const entity of this._entitiesToRemove) {
        if (entity.active) {
          continue;
        }
        this.removeEntity(entity, false);
      }
      this._entitiesToRemove.length = 0;
    }
    processComponentRemovals() {
      for (const entity of this.entities) {
        entity.processComponentRemoval();
      }
    }
    getById(id) {
      return this._entityIndex[id];
    }
    getByName(name) {
      return this.entities.filter((e) => e.name === name);
    }
    clear() {
      for (let i = this.entities.length - 1;i >= 0; i--) {
        this.removeEntity(this.entities[i]);
      }
    }
  }
  const buildTypeKey = (types) => {
    const key = [...types].sort((a, b) => a.localeCompare(b)).join("+");
    return key;
  };

  class Query extends Observable {
    get key() {
      if (this._key) {
        return this._key;
      }
      return this._key = buildTypeKey(this.types);
    }
    constructor(types) {
      super();
      this._entities = [];
      if (types[0] instanceof Function) {
        this.types = types.map((T) => new T().type);
      } else {
        this.types = types;
      }
    }
    getEntities(sort2) {
      if (sort2) {
        this._entities.sort(sort2);
      }
      return this._entities;
    }
    addEntity(entity) {
      if (!contains(this._entities, entity) && this.matches(entity)) {
        this._entities.push(entity);
        this.notifyAll(new AddedEntity(entity));
      }
    }
    removeEntity(entity) {
      if (removeItemFromArray(entity, this._entities)) {
        this.notifyAll(new RemovedEntity(entity));
      }
    }
    clear() {
      this._entities.length = 0;
      for (let i = this.observers.length - 1;i >= 0; i--) {
        this.unregister(this.observers[i]);
      }
    }
    matches(typesOrEntity) {
      let types = [];
      if (typesOrEntity instanceof Entity) {
        types = typesOrEntity.types;
      } else {
        types = typesOrEntity;
      }
      let matches = true;
      for (const type of this.types) {
        matches = matches && types.indexOf(type) > -1;
        if (!matches) {
          return false;
        }
      }
      return matches;
    }
    contain(type) {
      return this.types.indexOf(type) > -1;
    }
  }

  class QueryManager {
    constructor(_world) {
      this._world = _world;
      this._queries = {};
    }
    _addQuery(query) {
      this._queries[buildTypeKey(query.types)] = query;
      for (const entity of this._world.entityManager.entities) {
        query.addEntity(entity);
      }
    }
    maybeRemoveQuery(query) {
      if (query.observers.length === 0) {
        query.clear();
        delete this._queries[buildTypeKey(query.types)];
      }
    }
    addEntity(entity) {
      for (const queryType in this._queries) {
        if (this._queries[queryType]) {
          this._queries[queryType].addEntity(entity);
        }
      }
    }
    removeComponent(entity, component) {
      for (const queryType in this._queries) {
        if (this._queries[queryType].contain(component.type)) {
          this._queries[queryType].removeEntity(entity);
        }
      }
    }
    removeEntity(entity) {
      for (const queryType in this._queries) {
        this._queries[queryType].removeEntity(entity);
      }
    }
    createQuery(types) {
      const maybeExistingQuery = this.getQuery(types);
      if (maybeExistingQuery) {
        return maybeExistingQuery;
      }
      const query = new Query(types);
      this._addQuery(query);
      return query;
    }
    getQuery(types) {
      const key = buildTypeKey(types);
      if (this._queries[key]) {
        return this._queries[key];
      }
      return null;
    }
  }

  class SystemManager {
    constructor(_world) {
      this._world = _world;
      this.systems = [];
      this.initialized = false;
    }
    get(systemType) {
      return this.systems.find((s) => s instanceof systemType);
    }
    addSystem(system) {
      if (!system.types || system.types.length === 0) {
        throw new Error(`Attempted to add a System without any types`);
      }
      const query = this._world.queryManager.createQuery(system.types);
      this.systems.push(system);
      this.systems.sort((a, b) => a.priority - b.priority);
      query.register(system);
      if (this.initialized && system.initialize) {
        system.initialize(this._world.context);
      }
    }
    removeSystem(system) {
      removeItemFromArray(system, this.systems);
      const query = this._world.queryManager.getQuery(system.types);
      if (query) {
        query.unregister(system);
        this._world.queryManager.maybeRemoveQuery(query);
      }
    }
    initialize() {
      if (!this.initialized) {
        this.initialized = true;
        for (const s of this.systems) {
          if (s.initialize) {
            s.initialize(this._world.context);
          }
        }
      }
    }
    updateSystems(type, context, delta) {
      const systems = this.systems.filter((s) => s.systemType === type);
      for (const s of systems) {
        if (s.preupdate) {
          s.preupdate(context, delta);
        }
      }
      for (const s of systems) {
        const entities = this._world.queryManager.getQuery(s.types).getEntities(s.sort);
        if (context instanceof Scene) {
          for (const entity of entities) {
            entity._initialize(context === null || context === undefined ? undefined : context.engine);
          }
        }
        s.update(entities, delta);
      }
      for (const s of systems) {
        if (s.postupdate) {
          s.postupdate(context, delta);
        }
      }
    }
    clear() {
      for (let i = this.systems.length - 1;i >= 0; i--) {
        this.removeSystem(this.systems[i]);
      }
    }
  }

  class World {
    constructor(context) {
      this.context = context;
      this.queryManager = new QueryManager(this);
      this.entityManager = new EntityManager(this);
      this.systemManager = new SystemManager(this);
    }
    update(type, delta) {
      if (type === SystemType.Update) {
        this.entityManager.updateEntities(this.context, delta);
      }
      this.systemManager.updateSystems(type, this.context, delta);
      this.entityManager.findEntitiesForRemoval();
      this.entityManager.processComponentRemovals();
      this.entityManager.processEntityRemovals();
    }
    add(entityOrSystem) {
      if (entityOrSystem instanceof Entity) {
        this.entityManager.addEntity(entityOrSystem);
      }
      if (entityOrSystem instanceof System) {
        this.systemManager.addSystem(entityOrSystem);
      }
    }
    remove(entityOrSystem, deferred = true) {
      if (entityOrSystem instanceof Entity) {
        this.entityManager.removeEntity(entityOrSystem, deferred);
      }
      if (entityOrSystem instanceof System) {
        this.systemManager.removeSystem(entityOrSystem);
      }
    }
    clearEntities() {
      this.entityManager.clear();
    }
    clearSystems() {
      this.systemManager.clear();
    }
  }

  class EulerIntegrator {
    static integrate(transform, motion, totalAcc, elapsedMs) {
      const seconds = elapsedMs / 1000;
      motion.vel.addEqual(totalAcc.scale(seconds, EulerIntegrator._ACC));
      transform.pos.add(motion.vel.scale(seconds, EulerIntegrator._VEL), EulerIntegrator._POS).addEqual(totalAcc.scale(0.5 * seconds * seconds, EulerIntegrator._VEL_ACC));
      motion.angularVelocity += motion.torque * (1 / motion.inertia) * seconds;
      const rotation = transform.rotation + motion.angularVelocity * seconds;
      transform.scale.add(motion.scaleFactor.scale(seconds, this._SCALE_FACTOR), EulerIntegrator._SCALE);
      const tx = transform.get();
      tx.setTransform(EulerIntegrator._POS, rotation, EulerIntegrator._SCALE);
    }
  }
  EulerIntegrator._POS = new Vector(0, 0);
  EulerIntegrator._SCALE = new Vector(1, 1);
  EulerIntegrator._ACC = new Vector(0, 0);
  EulerIntegrator._VEL = new Vector(0, 0);
  EulerIntegrator._VEL_ACC = new Vector(0, 0);
  EulerIntegrator._SCALE_FACTOR = new Vector(0, 0);

  class MotionSystem extends System {
    constructor() {
      super(...arguments);
      this.types = ["ex.transform", "ex.motion"];
      this.systemType = SystemType.Update;
      this.priority = -1;
    }
    update(entities, elapsedMs) {
      let transform;
      let motion;
      for (let i = 0;i < entities.length; i++) {
        transform = entities[i].get(TransformComponent);
        motion = entities[i].get(MotionComponent);
        const optionalBody = entities[i].get(BodyComponent);
        if (optionalBody === null || optionalBody === undefined ? undefined : optionalBody.sleeping) {
          continue;
        }
        const totalAcc = motion.acc.clone();
        if ((optionalBody === null || optionalBody === undefined ? undefined : optionalBody.collisionType) === CollisionType.Active && (optionalBody === null || optionalBody === undefined ? undefined : optionalBody.useGravity)) {
          totalAcc.addEqual(Physics.gravity);
        }
        optionalBody === null || optionalBody === undefined || optionalBody.captureOldTransform();
        EulerIntegrator.integrate(transform, motion, totalAcc, elapsedMs);
      }
    }
  }

  class ArcadeSolver {
    constructor() {
      this.directionMap = new Map;
      this.distanceMap = new Map;
    }
    solve(contacts) {
      this.preSolve(contacts);
      contacts = contacts.filter((c) => !c.isCanceled());
      contacts.sort((a, b) => {
        const aDist = this.distanceMap.get(a.id);
        const bDist = this.distanceMap.get(b.id);
        return aDist - bDist;
      });
      for (const contact of contacts) {
        this.solvePosition(contact);
        this.solveVelocity(contact);
      }
      this.postSolve(contacts);
      return contacts;
    }
    preSolve(contacts) {
      const epsilon = 0.0001;
      for (const contact of contacts) {
        if (Math.abs(contact.mtv.x) < epsilon && Math.abs(contact.mtv.y) < epsilon) {
          contact.cancel();
          continue;
        }
        const side = Side.fromDirection(contact.mtv);
        const mtv = contact.mtv.negate();
        const distance = contact.colliderA.worldPos.squareDistance(contact.colliderB.worldPos);
        this.distanceMap.set(contact.id, distance);
        contact.colliderA.events.emit("precollision", new PreCollisionEvent(contact.colliderA, contact.colliderB, side, mtv, contact));
        contact.colliderB.events.emit("precollision", new PreCollisionEvent(contact.colliderB, contact.colliderA, Side.getOpposite(side), mtv.negate(), contact));
      }
    }
    postSolve(contacts) {
      var _a, _b;
      for (const contact of contacts) {
        if (contact.isCanceled()) {
          continue;
        }
        const colliderA = contact.colliderA;
        const colliderB = contact.colliderB;
        const bodyA = (_a = colliderA.owner) === null || _a === undefined ? undefined : _a.get(BodyComponent);
        const bodyB = (_b = colliderB.owner) === null || _b === undefined ? undefined : _b.get(BodyComponent);
        if (bodyA && bodyB) {
          if (bodyA.collisionType === CollisionType.Passive || bodyB.collisionType === CollisionType.Passive) {
            continue;
          }
        }
        const side = Side.fromDirection(contact.mtv);
        const mtv = contact.mtv.negate();
        contact.colliderA.events.emit("postcollision", new PostCollisionEvent(contact.colliderA, contact.colliderB, side, mtv, contact));
        contact.colliderB.events.emit("postcollision", new PostCollisionEvent(contact.colliderB, contact.colliderA, Side.getOpposite(side), mtv.negate(), contact));
      }
    }
    solvePosition(contact) {
      var _a, _b;
      const epsilon = 0.0001;
      if (!contact.colliderA.bounds.overlaps(contact.colliderB.bounds, epsilon)) {
        contact.cancel();
        return;
      }
      if (Math.abs(contact.mtv.x) < epsilon && Math.abs(contact.mtv.y) < epsilon) {
        contact.cancel();
        return;
      }
      let mtv = contact.mtv;
      const colliderA = contact.colliderA;
      const colliderB = contact.colliderB;
      const bodyA = (_a = colliderA.owner) === null || _a === undefined ? undefined : _a.get(BodyComponent);
      const bodyB = (_b = colliderB.owner) === null || _b === undefined ? undefined : _b.get(BodyComponent);
      if (bodyA && bodyB) {
        if (bodyA.collisionType === CollisionType.Passive || bodyB.collisionType === CollisionType.Passive) {
          return;
        }
        if (bodyA.collisionType === CollisionType.Active && bodyB.collisionType === CollisionType.Active) {
          mtv = mtv.scale(0.5);
        }
        if (bodyA.collisionType === CollisionType.Active) {
          bodyA.globalPos.x -= mtv.x;
          bodyA.globalPos.y -= mtv.y;
          colliderA.update(bodyA.transform.get());
        }
        if (bodyB.collisionType === CollisionType.Active) {
          bodyB.globalPos.x += mtv.x;
          bodyB.globalPos.y += mtv.y;
          colliderB.update(bodyB.transform.get());
        }
      }
    }
    solveVelocity(contact) {
      var _a, _b;
      if (contact.isCanceled()) {
        return;
      }
      const colliderA = contact.colliderA;
      const colliderB = contact.colliderB;
      const bodyA = (_a = colliderA.owner) === null || _a === undefined ? undefined : _a.get(BodyComponent);
      const bodyB = (_b = colliderB.owner) === null || _b === undefined ? undefined : _b.get(BodyComponent);
      if (bodyA && bodyB) {
        if (bodyA.collisionType === CollisionType.Passive || bodyB.collisionType === CollisionType.Passive) {
          return;
        }
        const normal = contact.normal;
        const opposite = normal.negate();
        if (bodyA.collisionType === CollisionType.Active) {
          if (bodyA.vel.normalize().dot(opposite) < 0) {
            const velAdj = normal.scale(normal.dot(bodyA.vel.negate()));
            bodyA.vel = bodyA.vel.add(velAdj);
          }
        }
        if (bodyB.collisionType === CollisionType.Active) {
          if (bodyB.vel.normalize().dot(normal) < 0) {
            const velAdj = opposite.scale(opposite.dot(bodyB.vel.negate()));
            bodyB.vel = bodyB.vel.add(velAdj);
          }
        }
      }
    }
  }

  class ContactConstraintPoint {
    constructor(point2, local, contact) {
      this.point = point2;
      this.local = local;
      this.contact = contact;
      this.normalImpulse = 0;
      this.tangentImpulse = 0;
      this.normalMass = 0;
      this.tangentMass = 0;
      this.aToContact = new Vector(0, 0);
      this.bToContact = new Vector(0, 0);
      this.originalVelocityAndRestitution = 0;
      this.update();
    }
    update() {
      var _a, _b;
      const bodyA = (_a = this.contact.colliderA.owner) === null || _a === undefined ? undefined : _a.get(BodyComponent);
      const bodyB = (_b = this.contact.colliderB.owner) === null || _b === undefined ? undefined : _b.get(BodyComponent);
      if (bodyA && bodyB) {
        const normal = this.contact.normal;
        const tangent = this.contact.tangent;
        this.aToContact = this.point.sub(bodyA.globalPos);
        this.bToContact = this.point.sub(bodyB.globalPos);
        const aToContactNormal = this.aToContact.cross(normal);
        const bToContactNormal = this.bToContact.cross(normal);
        this.normalMass = bodyA.inverseMass + bodyB.inverseMass + bodyA.inverseInertia * aToContactNormal * aToContactNormal + bodyB.inverseInertia * bToContactNormal * bToContactNormal;
        const aToContactTangent = this.aToContact.cross(tangent);
        const bToContactTangent = this.bToContact.cross(tangent);
        this.tangentMass = bodyA.inverseMass + bodyB.inverseMass + bodyA.inverseInertia * aToContactTangent * aToContactTangent + bodyB.inverseInertia * bToContactTangent * bToContactTangent;
      }
      return this;
    }
    getRelativeVelocity() {
      var _a, _b;
      const bodyA = (_a = this.contact.colliderA.owner) === null || _a === undefined ? undefined : _a.get(BodyComponent);
      const bodyB = (_b = this.contact.colliderB.owner) === null || _b === undefined ? undefined : _b.get(BodyComponent);
      if (bodyA && bodyB) {
        const velA = bodyA.vel.add(Vector.cross(bodyA.angularVelocity, this.aToContact));
        const velB = bodyB.vel.add(Vector.cross(bodyB.angularVelocity, this.bToContact));
        return velB.sub(velA);
      }
      return Vector.Zero;
    }
  }

  class RealisticSolver {
    constructor() {
      this.lastFrameContacts = new Map;
      this.idToContactConstraint = new Map;
    }
    getContactConstraints(id) {
      var _a;
      return (_a = this.idToContactConstraint.get(id)) !== null && _a !== undefined ? _a : [];
    }
    solve(contacts) {
      this.preSolve(contacts);
      contacts = contacts.filter((c) => !c.isCanceled());
      this.solveVelocity(contacts);
      this.solvePosition(contacts);
      this.postSolve(contacts);
      return contacts;
    }
    preSolve(contacts) {
      var _a, _b, _c;
      const epsilon = 0.0001;
      for (const contact of contacts) {
        if (Math.abs(contact.mtv.x) < epsilon && Math.abs(contact.mtv.y) < epsilon) {
          contact.cancel();
          continue;
        }
        const side = Side.fromDirection(contact.mtv);
        contact.colliderA.events.emit("precollision", new PreCollisionEvent(contact.colliderA, contact.colliderB, side, contact.mtv, contact));
        contact.colliderA.events.emit("beforecollisionresolve", new CollisionPreSolveEvent(contact.colliderA, contact.colliderB, side, contact.mtv, contact));
        contact.colliderB.events.emit("precollision", new PreCollisionEvent(contact.colliderB, contact.colliderA, Side.getOpposite(side), contact.mtv.negate(), contact));
        contact.colliderB.events.emit("beforecollisionresolve", new CollisionPreSolveEvent(contact.colliderB, contact.colliderA, Side.getOpposite(side), contact.mtv.negate(), contact));
        contact.matchAwake();
      }
      const finishedContactIds = Array.from(this.idToContactConstraint.keys());
      for (const contact of contacts) {
        const index = finishedContactIds.indexOf(contact.id);
        if (index > -1) {
          finishedContactIds.splice(index, 1);
        }
        const contactPoints = (_a = this.idToContactConstraint.get(contact.id)) !== null && _a !== undefined ? _a : [];
        let pointIndex = 0;
        const bodyA = contact.colliderA.owner.get(BodyComponent);
        const bodyB = contact.colliderB.owner.get(BodyComponent);
        if (bodyA && bodyB) {
          for (const point2 of contact.points) {
            const normal = contact.normal;
            const tangent = contact.tangent;
            const aToContact = point2.sub(bodyA.globalPos);
            const bToContact = point2.sub(bodyB.globalPos);
            const aToContactNormal = aToContact.cross(normal);
            const bToContactNormal = bToContact.cross(normal);
            const normalMass = bodyA.inverseMass + bodyB.inverseMass + bodyA.inverseInertia * aToContactNormal * aToContactNormal + bodyB.inverseInertia * bToContactNormal * bToContactNormal;
            const aToContactTangent = aToContact.cross(tangent);
            const bToContactTangent = bToContact.cross(tangent);
            const tangentMass = bodyA.inverseMass + bodyB.inverseMass + bodyA.inverseInertia * aToContactTangent * aToContactTangent + bodyB.inverseInertia * bToContactTangent * bToContactTangent;
            if (contactPoints[pointIndex] && ((_c = (_b = contactPoints[pointIndex]) === null || _b === undefined ? undefined : _b.point) === null || _c === undefined ? undefined : _c.squareDistance(point2)) < 4) {
              contactPoints[pointIndex].point = point2;
              contactPoints[pointIndex].local = contact.localPoints[pointIndex];
            } else {
              contactPoints[pointIndex] = new ContactConstraintPoint(point2, contact.localPoints[pointIndex], contact);
            }
            contactPoints[pointIndex].aToContact = aToContact;
            contactPoints[pointIndex].bToContact = bToContact;
            contactPoints[pointIndex].normalMass = 1 / normalMass;
            contactPoints[pointIndex].tangentMass = 1 / tangentMass;
            const restitution = bodyA.bounciness > bodyB.bounciness ? bodyA.bounciness : bodyB.bounciness;
            const relativeVelocity = contact.normal.dot(contactPoints[pointIndex].getRelativeVelocity());
            contactPoints[pointIndex].originalVelocityAndRestitution = 0;
            if (relativeVelocity < -0.1) {
              contactPoints[pointIndex].originalVelocityAndRestitution = -restitution * relativeVelocity;
            }
            pointIndex++;
          }
        }
        this.idToContactConstraint.set(contact.id, contactPoints);
      }
      for (const id of finishedContactIds) {
        this.idToContactConstraint.delete(id);
      }
      if (Physics.warmStart) {
        this.warmStart(contacts);
      } else {
        for (const contact of contacts) {
          const contactPoints = this.getContactConstraints(contact.id);
          for (const point2 of contactPoints) {
            point2.normalImpulse = 0;
            point2.tangentImpulse = 0;
          }
        }
      }
    }
    postSolve(contacts) {
      for (const contact of contacts) {
        const bodyA = contact.colliderA.owner.get(BodyComponent);
        const bodyB = contact.colliderB.owner.get(BodyComponent);
        if (bodyA && bodyB) {
          if (bodyA.collisionType === CollisionType.Passive || bodyB.collisionType === CollisionType.Passive) {
            continue;
          }
          bodyA.updateMotion();
          bodyB.updateMotion();
        }
        const side = Side.fromDirection(contact.mtv);
        contact.colliderA.events.emit("postcollision", new PostCollisionEvent(contact.colliderA, contact.colliderB, side, contact.mtv, contact));
        contact.colliderA.events.emit("aftercollisionresolve", new CollisionPostSolveEvent(contact.colliderA, contact.colliderB, side, contact.mtv, contact));
        contact.colliderB.events.emit("postcollision", new PostCollisionEvent(contact.colliderB, contact.colliderA, Side.getOpposite(side), contact.mtv.negate(), contact));
        contact.colliderB.events.emit("aftercollisionresolve", new CollisionPostSolveEvent(contact.colliderB, contact.colliderA, Side.getOpposite(side), contact.mtv.negate(), contact));
      }
      this.lastFrameContacts.clear();
      for (const c of contacts) {
        this.lastFrameContacts.set(c.id, c);
      }
    }
    warmStart(contacts) {
      var _a, _b, _c;
      for (const contact of contacts) {
        const bodyA = (_a = contact.colliderA.owner) === null || _a === undefined ? undefined : _a.get(BodyComponent);
        const bodyB = (_b = contact.colliderB.owner) === null || _b === undefined ? undefined : _b.get(BodyComponent);
        if (bodyA && bodyB) {
          const contactPoints = (_c = this.idToContactConstraint.get(contact.id)) !== null && _c !== undefined ? _c : [];
          for (const point2 of contactPoints) {
            if (Physics.warmStart) {
              const normalImpulse = contact.normal.scale(point2.normalImpulse);
              const tangentImpulse = contact.tangent.scale(point2.tangentImpulse);
              const impulse = normalImpulse.add(tangentImpulse);
              bodyA.applyImpulse(point2.point, impulse.negate());
              bodyB.applyImpulse(point2.point, impulse);
            } else {
              point2.normalImpulse = 0;
              point2.tangentImpulse = 0;
            }
          }
        }
      }
    }
    solvePosition(contacts) {
      var _a, _b, _c;
      for (let i = 0;i < Physics.positionIterations; i++) {
        for (const contact of contacts) {
          const bodyA = (_a = contact.colliderA.owner) === null || _a === undefined ? undefined : _a.get(BodyComponent);
          const bodyB = (_b = contact.colliderB.owner) === null || _b === undefined ? undefined : _b.get(BodyComponent);
          if (bodyA && bodyB) {
            if (bodyA.collisionType === CollisionType.Passive || bodyB.collisionType === CollisionType.Passive) {
              continue;
            }
            const constraints = (_c = this.idToContactConstraint.get(contact.id)) !== null && _c !== undefined ? _c : [];
            for (const point2 of constraints) {
              const normal = contact.normal;
              const separation = CollisionJumpTable.FindContactSeparation(contact, point2.local);
              const steeringConstant = Physics.steeringFactor;
              const maxCorrection = -5;
              const slop = Physics.slop;
              const steeringForce = clamp(steeringConstant * (separation + slop), maxCorrection, 0);
              const impulse = normal.scale(-steeringForce * point2.normalMass);
              if (bodyA.collisionType === CollisionType.Active) {
                const impulseForce = impulse.negate().scale(bodyA.inverseMass);
                if (bodyA.limitDegreeOfFreedom.includes(DegreeOfFreedom.X)) {
                  impulseForce.x = 0;
                }
                if (bodyA.limitDegreeOfFreedom.includes(DegreeOfFreedom.Y)) {
                  impulseForce.y = 0;
                }
                bodyA.globalPos = bodyA.globalPos.add(impulseForce);
                if (!bodyA.limitDegreeOfFreedom.includes(DegreeOfFreedom.Rotation)) {
                  bodyA.rotation -= point2.aToContact.cross(impulse) * bodyA.inverseInertia;
                }
              }
              if (bodyB.collisionType === CollisionType.Active) {
                const impulseForce = impulse.scale(bodyB.inverseMass);
                if (bodyB.limitDegreeOfFreedom.includes(DegreeOfFreedom.X)) {
                  impulseForce.x = 0;
                }
                if (bodyB.limitDegreeOfFreedom.includes(DegreeOfFreedom.Y)) {
                  impulseForce.y = 0;
                }
                bodyB.globalPos = bodyB.globalPos.add(impulseForce);
                if (!bodyB.limitDegreeOfFreedom.includes(DegreeOfFreedom.Rotation)) {
                  bodyB.rotation += point2.bToContact.cross(impulse) * bodyB.inverseInertia;
                }
              }
            }
          }
        }
      }
    }
    solveVelocity(contacts) {
      var _a, _b, _c;
      for (let i = 0;i < Physics.velocityIterations; i++) {
        for (const contact of contacts) {
          const bodyA = (_a = contact.colliderA.owner) === null || _a === undefined ? undefined : _a.get(BodyComponent);
          const bodyB = (_b = contact.colliderB.owner) === null || _b === undefined ? undefined : _b.get(BodyComponent);
          if (bodyA && bodyB) {
            if (bodyA.collisionType === CollisionType.Passive || bodyB.collisionType === CollisionType.Passive) {
              continue;
            }
            const friction = Math.min(bodyA.friction, bodyB.friction);
            const constraints = (_c = this.idToContactConstraint.get(contact.id)) !== null && _c !== undefined ? _c : [];
            for (const point2 of constraints) {
              const relativeVelocity = point2.getRelativeVelocity();
              const tangentVelocity = -relativeVelocity.dot(contact.tangent);
              let impulseDelta = tangentVelocity * point2.tangentMass;
              const maxFriction = friction * point2.normalImpulse;
              const newImpulse = clamp(point2.tangentImpulse + impulseDelta, -maxFriction, maxFriction);
              impulseDelta = newImpulse - point2.tangentImpulse;
              point2.tangentImpulse = newImpulse;
              const impulse = contact.tangent.scale(impulseDelta);
              bodyA.applyImpulse(point2.point, impulse.negate());
              bodyB.applyImpulse(point2.point, impulse);
            }
            for (const point2 of constraints) {
              const relativeVelocity = point2.getRelativeVelocity();
              const normalVelocity = relativeVelocity.dot(contact.normal);
              let impulseDelta = -point2.normalMass * (normalVelocity - point2.originalVelocityAndRestitution);
              const newImpulse = Math.max(point2.normalImpulse + impulseDelta, 0);
              impulseDelta = newImpulse - point2.normalImpulse;
              point2.normalImpulse = newImpulse;
              const impulse = contact.normal.scale(impulseDelta);
              bodyA.applyImpulse(point2.point, impulse.negate());
              bodyB.applyImpulse(point2.point, impulse);
            }
          }
        }
      }
    }
  }

  class CollisionSystem extends System {
    constructor(physics) {
      super();
      this.types = ["ex.transform", "ex.motion", "ex.collider"];
      this.systemType = SystemType.Update;
      this.priority = -1;
      this._realisticSolver = new RealisticSolver;
      this._arcadeSolver = new ArcadeSolver;
      this._lastFrameContacts = new Map;
      this._currentFrameContacts = new Map;
      this._processor = physics.collisionProcessor;
      this._trackCollider = (c) => this._processor.track(c);
      this._untrackCollider = (c) => this._processor.untrack(c);
    }
    notify(message) {
      if (isAddedSystemEntity(message)) {
        const colliderComponent = message.data.get(ColliderComponent);
        colliderComponent.$colliderAdded.subscribe(this._trackCollider);
        colliderComponent.$colliderRemoved.subscribe(this._untrackCollider);
        const collider = colliderComponent.get();
        if (collider) {
          this._processor.track(collider);
        }
      } else {
        const colliderComponent = message.data.get(ColliderComponent);
        const collider = colliderComponent.get();
        if (colliderComponent && collider) {
          this._processor.untrack(collider);
        }
      }
    }
    initialize(scene) {
      this._engine = scene.engine;
    }
    update(entities, elapsedMs) {
      var _a, _b, _c, _d;
      if (!Physics.enabled) {
        return;
      }
      let colliders = [];
      for (const entity of entities) {
        const colliderComp = entity.get(ColliderComponent);
        const collider = colliderComp === null || colliderComp === undefined ? undefined : colliderComp.get();
        if (colliderComp && ((_a = colliderComp.owner) === null || _a === undefined ? undefined : _a.active) && collider) {
          colliderComp.update();
          if (collider instanceof CompositeCollider) {
            const compositeColliders = collider.getColliders();
            colliders = colliders.concat(compositeColliders);
          } else {
            colliders.push(collider);
          }
        }
      }
      this._processor.update(colliders);
      const pairs = this._processor.broadphase(colliders, elapsedMs);
      this._currentFrameContacts.clear();
      let contacts = this._processor.narrowphase(pairs, (_d = (_c = (_b = this._engine) === null || _b === undefined ? undefined : _b.debug) === null || _c === undefined ? undefined : _c.stats) === null || _d === undefined ? undefined : _d.currFrame);
      const solver = this.getSolver();
      contacts = solver.solve(contacts);
      for (const contact of contacts) {
        const index = contact.id.indexOf("|");
        if (index > 0) {
          const compositeId = contact.id.substring(index + 1);
          this._currentFrameContacts.set(compositeId, contact);
        } else {
          this._currentFrameContacts.set(contact.id, contact);
        }
      }
      this.runContactStartEnd();
      this._lastFrameContacts.clear();
      this._lastFrameContacts = new Map(this._currentFrameContacts);
    }
    getSolver() {
      return Physics.collisionResolutionStrategy === CollisionResolutionStrategy.Realistic ? this._realisticSolver : this._arcadeSolver;
    }
    debug(ex) {
      this._processor.debug(ex);
    }
    runContactStartEnd() {
      for (const [id, c] of this._currentFrameContacts) {
        if (!this._lastFrameContacts.has(id)) {
          const colliderA = c.colliderA;
          const colliderB = c.colliderB;
          const side = Side.fromDirection(c.mtv);
          const opposite = Side.getOpposite(side);
          colliderA.events.emit("collisionstart", new CollisionStartEvent(colliderA, colliderB, side, c));
          colliderA.events.emit("contactstart", new ContactStartEvent(colliderA, colliderB, side, c));
          colliderB.events.emit("collisionstart", new CollisionStartEvent(colliderB, colliderA, opposite, c));
          colliderB.events.emit("contactstart", new ContactStartEvent(colliderB, colliderA, opposite, c));
        }
      }
      for (const [id, c] of this._lastFrameContacts) {
        if (!this._currentFrameContacts.has(id)) {
          const colliderA = c.colliderA;
          const colliderB = c.colliderB;
          colliderA.events.emit("collisionend", new CollisionEndEvent(colliderA, colliderB));
          colliderA.events.emit("contactend", new ContactEndEvent(colliderA, colliderB));
          colliderB.events.emit("collisionend", new CollisionEndEvent(colliderB, colliderA));
          colliderB.events.emit("contactend", new ContactEndEvent(colliderB, colliderA));
        }
      }
    }
  }
  var AnimationDirection;
  (function(AnimationDirection2) {
    AnimationDirection2["Forward"] = "forward";
    AnimationDirection2["Backward"] = "backward";
  })(AnimationDirection || (AnimationDirection = {}));
  var AnimationStrategy;
  (function(AnimationStrategy2) {
    AnimationStrategy2["End"] = "end";
    AnimationStrategy2["Loop"] = "loop";
    AnimationStrategy2["PingPong"] = "pingpong";
    AnimationStrategy2["Freeze"] = "freeze";
  })(AnimationStrategy || (AnimationStrategy = {}));
  const AnimationEvents = {
    Frame: "frame",
    Loop: "loop",
    End: "end"
  };

  class Animation extends Graphic {
    constructor(options) {
      var _a, _b, _c;
      super(options);
      this.events = new EventEmitter;
      this.frames = [];
      this.strategy = AnimationStrategy.Loop;
      this.frameDuration = 100;
      this._idempotencyToken = -1;
      this._firstTick = true;
      this._currentFrame = 0;
      this._timeLeftInFrame = 0;
      this._pingPongDirection = 1;
      this._done = false;
      this._playing = true;
      this._speed = 1;
      this._reversed = false;
      this.frames = options.frames;
      this.speed = (_a = options.speed) !== null && _a !== undefined ? _a : this.speed;
      this.strategy = (_b = options.strategy) !== null && _b !== undefined ? _b : this.strategy;
      this.frameDuration = options.totalDuration ? options.totalDuration / this.frames.length : (_c = options.frameDuration) !== null && _c !== undefined ? _c : this.frameDuration;
      if (options.reverse) {
        this.reverse();
      }
      this.goToFrame(0);
    }
    clone() {
      return new Animation({
        frames: this.frames.map((f) => ({ ...f })),
        frameDuration: this.frameDuration,
        speed: this.speed,
        reverse: this._reversed,
        strategy: this.strategy,
        ...this.cloneGraphicOptions()
      });
    }
    get width() {
      const maybeFrame = this.currentFrame;
      if (maybeFrame) {
        return Math.abs(maybeFrame.graphic.width * this.scale.x);
      }
      return 0;
    }
    get height() {
      const maybeFrame = this.currentFrame;
      if (maybeFrame) {
        return Math.abs(maybeFrame.graphic.height * this.scale.y);
      }
      return 0;
    }
    static fromSpriteSheet(spriteSheet, frameIndices, durationPerFrameMs, strategy = AnimationStrategy.Loop) {
      const maxIndex = spriteSheet.sprites.length - 1;
      const invalidIndices = frameIndices.filter((index) => index < 0 || index > maxIndex);
      if (invalidIndices.length) {
        Animation._LOGGER.warn(`Indices into SpriteSheet were provided that don\'t exist: ${invalidIndices.join(",")} no frame will be shown`);
      }
      return new Animation({
        frames: spriteSheet.sprites.filter((_, index) => frameIndices.indexOf(index) > -1).map((f) => ({
          graphic: f,
          duration: durationPerFrameMs
        })),
        strategy
      });
    }
    static fromSpriteSheetCoordinates(options) {
      const { spriteSheet, frameCoordinates, durationPerFrameMs, speed, strategy, reverse } = options;
      const defaultDuration = durationPerFrameMs !== null && durationPerFrameMs !== undefined ? durationPerFrameMs : 100;
      const frames = [];
      for (const coord of frameCoordinates) {
        const { x, y, duration } = coord;
        const sprite = spriteSheet.getSprite(x, y);
        if (sprite) {
          frames.push({
            graphic: sprite,
            duration: duration !== null && duration !== undefined ? duration : defaultDuration
          });
        } else {
          Animation._LOGGER.warn(`Skipping frame! SpriteSheet does not have coordinate (${x}, ${y}), please check your SpriteSheet to confirm that sprite exists`);
        }
      }
      return new Animation({
        frames,
        strategy,
        speed,
        reverse
      });
    }
    get speed() {
      return this._speed;
    }
    set speed(val) {
      this._speed = clamp(Math.abs(val), 0, Infinity);
    }
    get currentFrame() {
      if (this._currentFrame >= 0 && this._currentFrame < this.frames.length) {
        return this.frames[this._currentFrame];
      }
      return null;
    }
    get currentFrameIndex() {
      return this._currentFrame;
    }
    get currentFrameTimeLeft() {
      return this._timeLeftInFrame;
    }
    get isPlaying() {
      return this._playing;
    }
    reverse() {
      this.frames = this.frames.slice().reverse();
      this._reversed = !this._reversed;
    }
    get direction() {
      const reversed = this._reversed && this._pingPongDirection === 1 ? true : false;
      return reversed ? AnimationDirection.Backward : AnimationDirection.Forward;
    }
    play() {
      this._playing = true;
    }
    pause() {
      this._playing = false;
      this._firstTick = true;
    }
    reset() {
      this._done = false;
      this._firstTick = true;
      this._currentFrame = 0;
      this._timeLeftInFrame = this.frameDuration;
      const maybeFrame = this.frames[this._currentFrame];
      if (maybeFrame) {
        this._timeLeftInFrame = (maybeFrame === null || maybeFrame === undefined ? undefined : maybeFrame.duration) || this.frameDuration;
      }
    }
    get canFinish() {
      switch (this.strategy) {
        case AnimationStrategy.End:
        case AnimationStrategy.Freeze: {
          return true;
        }
        default: {
          return false;
        }
      }
    }
    get done() {
      return this._done;
    }
    goToFrame(frameNumber, duration) {
      this._currentFrame = frameNumber;
      this._timeLeftInFrame = duration !== null && duration !== undefined ? duration : this.frameDuration;
      const maybeFrame = this.frames[this._currentFrame];
      if (maybeFrame && !this._done) {
        this._timeLeftInFrame = duration !== null && duration !== undefined ? duration : (maybeFrame === null || maybeFrame === undefined ? undefined : maybeFrame.duration) || this.frameDuration;
        this.events.emit("frame", { ...maybeFrame, frameIndex: this.currentFrameIndex });
      }
    }
    _nextFrame() {
      const currentFrame = this._currentFrame;
      if (this._done) {
        return currentFrame;
      }
      let next = -1;
      switch (this.strategy) {
        case AnimationStrategy.Loop: {
          next = (currentFrame + 1) % this.frames.length;
          if (next === 0) {
            this.events.emit("loop", this);
          }
          break;
        }
        case AnimationStrategy.End: {
          next = currentFrame + 1;
          if (next >= this.frames.length) {
            this._done = true;
            this._currentFrame = this.frames.length;
            this.events.emit("end", this);
          }
          break;
        }
        case AnimationStrategy.Freeze: {
          next = clamp(currentFrame + 1, 0, this.frames.length - 1);
          if (next >= this.frames.length - 1) {
            this._done = true;
            this.events.emit("end", this);
          }
          break;
        }
        case AnimationStrategy.PingPong: {
          if (currentFrame + this._pingPongDirection >= this.frames.length) {
            this._pingPongDirection = -1;
            this.events.emit("loop", this);
          }
          if (currentFrame + this._pingPongDirection < 0) {
            this._pingPongDirection = 1;
            this.events.emit("loop", this);
          }
          next = currentFrame + this._pingPongDirection % this.frames.length;
          break;
        }
      }
      return next;
    }
    tick(elapsedMilliseconds, idempotencyToken = 0) {
      if (this._idempotencyToken === idempotencyToken) {
        return;
      }
      this._idempotencyToken = idempotencyToken;
      if (!this._playing) {
        return;
      }
      if (this._firstTick) {
        this._firstTick = false;
        this.events.emit("frame", { ...this.currentFrame, frameIndex: this.currentFrameIndex });
      }
      this._timeLeftInFrame -= elapsedMilliseconds * this._speed;
      if (this._timeLeftInFrame <= 0) {
        this.goToFrame(this._nextFrame());
      }
    }
    _drawImage(ctx, x, y) {
      if (this.currentFrame) {
        this.currentFrame.graphic.draw(ctx, x, y);
      }
    }
  }
  Animation._LOGGER = Logger.getInstance();

  class GraphicsGroup extends Graphic {
    constructor(options) {
      super(options);
      this.members = [];
      this.members = options.members;
      this._updateDimensions();
    }
    clone() {
      return new GraphicsGroup({
        members: [...this.members],
        ...this.cloneGraphicOptions()
      });
    }
    _updateDimensions() {
      let bb = new BoundingBox;
      for (const { graphic, pos } of this.members) {
        bb = graphic.localBounds.translate(pos).combine(bb);
      }
      this.width = bb.width;
      this.height = bb.height;
      return bb;
    }
    get localBounds() {
      let bb = new BoundingBox;
      for (const { graphic, pos } of this.members) {
        bb = graphic.localBounds.translate(pos).combine(bb);
      }
      return bb;
    }
    _isAnimationOrGroup(graphic) {
      return graphic instanceof Animation || graphic instanceof GraphicsGroup;
    }
    tick(elapsedMilliseconds, idempotencyToken) {
      for (const member of this.members) {
        const maybeAnimation = member.graphic;
        if (this._isAnimationOrGroup(maybeAnimation)) {
          maybeAnimation.tick(elapsedMilliseconds, idempotencyToken);
        }
      }
    }
    reset() {
      for (const member of this.members) {
        const maybeAnimation = member.graphic;
        if (this._isAnimationOrGroup(maybeAnimation)) {
          maybeAnimation.reset();
        }
      }
    }
    _preDraw(ex, x, y) {
      this._updateDimensions();
      super._preDraw(ex, x, y);
    }
    _drawImage(ex, x, y) {
      for (const member of this.members) {
        ex.save();
        ex.translate(x, y);
        member.graphic.draw(ex, member.pos.x, member.pos.y);
        if (this.showDebug) {
          ex.debug.drawRect(0, 0, this.width, this.height);
        }
        ex.restore();
      }
    }
  }
  function Configurable(base) {
    return class extends base {
      assign(props) {
        for (const k in props) {
          if (typeof this[k] !== "function") {
            this[k] = props[k];
          }
        }
      }
      constructor(...args) {
        super(...args);
        const size = args.filter(function(value) {
          return value !== undefined;
        }).length;
        if (size === 1 && args[0] && typeof args[0] === "object" && !(args[0] instanceof Array)) {
          this.assign(args[0]);
        }
      }
    };
  }
  var EmitterType;
  (function(EmitterType2) {
    EmitterType2[EmitterType2["Circle"] = 0] = "Circle";
    EmitterType2[EmitterType2["Rectangle"] = 1] = "Rectangle";
  })(EmitterType || (EmitterType = {}));

  class ParticleImpl extends Entity {
    constructor(emitterOrConfig, life, opacity, beginColor, endColor, position, velocity, acceleration, startSize, endSize) {
      super();
      this.position = new Vector(0, 0);
      this.velocity = new Vector(0, 0);
      this.acceleration = new Vector(0, 0);
      this.particleRotationalVelocity = 0;
      this.currentRotation = 0;
      this.focus = null;
      this.focusAccel = 0;
      this.opacity = 1;
      this.beginColor = Color.White;
      this.endColor = Color.White;
      this.life = 300;
      this.fadeFlag = false;
      this._rRate = 1;
      this._gRate = 1;
      this._bRate = 1;
      this._aRate = 0;
      this._currentColor = Color.White;
      this.emitter = null;
      this.particleSize = 5;
      this.particleSprite = null;
      this.sizeRate = 0;
      this.elapsedMultiplier = 0;
      this.visible = true;
      this.isOffscreen = false;
      let emitter = emitterOrConfig;
      if (emitter && !(emitterOrConfig instanceof ParticleEmitter)) {
        const config = emitterOrConfig;
        emitter = config.emitter;
        life = config.life;
        opacity = config.opacity;
        endColor = config.endColor;
        beginColor = config.beginColor;
        position = config.position;
        velocity = config.velocity;
        acceleration = config.acceleration;
        startSize = config.startSize;
        endSize = config.endSize;
      }
      this.emitter = emitter;
      this.life = life || this.life;
      this.opacity = opacity || this.opacity;
      this.endColor = endColor || this.endColor.clone();
      this.beginColor = beginColor || this.beginColor.clone();
      this._currentColor = this.beginColor.clone();
      if (this.emitter.particleTransform === ParticleTransform.Global) {
        const globalPos = this.emitter.transform.globalPos;
        this.position = (position || this.position).add(globalPos);
        this.velocity = (velocity || this.velocity).rotate(this.emitter.transform.globalRotation);
      } else {
        this.velocity = velocity || this.velocity;
        this.position = position || this.position;
      }
      this.acceleration = acceleration || this.acceleration;
      this._rRate = (this.endColor.r - this.beginColor.r) / this.life;
      this._gRate = (this.endColor.g - this.beginColor.g) / this.life;
      this._bRate = (this.endColor.b - this.beginColor.b) / this.life;
      this._aRate = this.opacity / this.life;
      this.startSize = startSize || 0;
      this.endSize = endSize || 0;
      if (this.endSize > 0 && this.startSize > 0) {
        this.sizeRate = (this.endSize - this.startSize) / this.life;
        this.particleSize = this.startSize;
      }
      this.addComponent(this.transform = new TransformComponent);
      this.addComponent(this.graphics = new GraphicsComponent);
      this.transform.pos = this.position;
      this.transform.rotation = this.currentRotation;
      this.transform.scale = vec(1, 1);
      if (this.particleSprite) {
        this.graphics.opacity = this.opacity;
        this.graphics.use(this.particleSprite);
      } else {
        this.graphics.localBounds = BoundingBox.fromDimension(this.particleSize, this.particleSize, Vector.Half);
        this.graphics.onPostDraw = (ctx) => {
          ctx.save();
          this.graphics.opacity = this.opacity;
          const tmpColor = this._currentColor.clone();
          tmpColor.a = 1;
          ctx.debug.drawPoint(vec(0, 0), { color: tmpColor, size: this.particleSize });
          ctx.restore();
        };
      }
    }
    kill() {
      this.emitter.removeParticle(this);
    }
    update(engine, delta) {
      this.life = this.life - delta;
      this.elapsedMultiplier = this.elapsedMultiplier + delta;
      if (this.life < 0) {
        this.kill();
      }
      if (this.fadeFlag) {
        this.opacity = clamp(this._aRate * this.life, 0.0001, 1);
      }
      if (this.startSize > 0 && this.endSize > 0) {
        this.particleSize = clamp(this.sizeRate * delta + this.particleSize, Math.min(this.startSize, this.endSize), Math.max(this.startSize, this.endSize));
      }
      this._currentColor.r = clamp(this._currentColor.r + this._rRate * delta, 0, 255);
      this._currentColor.g = clamp(this._currentColor.g + this._gRate * delta, 0, 255);
      this._currentColor.b = clamp(this._currentColor.b + this._bRate * delta, 0, 255);
      this._currentColor.a = clamp(this.opacity, 0.0001, 1);
      if (this.focus) {
        const accel = this.focus.sub(this.position).normalize().scale(this.focusAccel).scale(delta / 1000);
        this.velocity = this.velocity.add(accel);
      } else {
        this.velocity = this.velocity.add(this.acceleration.scale(delta / 1000));
      }
      this.position = this.position.add(this.velocity.scale(delta / 1000));
      if (this.particleRotationalVelocity) {
        this.currentRotation = (this.currentRotation + this.particleRotationalVelocity * delta / 1000) % (2 * Math.PI);
      }
      this.transform.pos = this.position;
      this.transform.rotation = this.currentRotation;
      this.transform.scale = vec(1, 1);
      this.graphics.opacity = this.opacity;
    }
  }

  class Particle extends Configurable(ParticleImpl) {
    constructor(emitterOrConfig, life, opacity, beginColor, endColor, position, velocity, acceleration, startSize, endSize) {
      super(emitterOrConfig, life, opacity, beginColor, endColor, position, velocity, acceleration, startSize, endSize);
    }
  }
  var ParticleTransform;
  (function(ParticleTransform2) {
    ParticleTransform2["Global"] = "global";
    ParticleTransform2["Local"] = "local";
  })(ParticleTransform || (ParticleTransform = {}));

  class ParticleEmitter extends Actor {
    get opacity() {
      return super.graphics.opacity;
    }
    set opacity(opacity) {
      super.graphics.opacity = opacity;
    }
    get particleSprite() {
      return this._sprite;
    }
    set particleSprite(val) {
      if (val) {
        this._sprite = val;
      }
    }
    constructor(config) {
      var _a, _b;
      super({ width: (_a = config.width) !== null && _a !== undefined ? _a : 0, height: (_b = config.height) !== null && _b !== undefined ? _b : 0 });
      this._particlesToEmit = 0;
      this.numParticles = 0;
      this.isEmitting = true;
      this.particles = [];
      this.deadParticles = [];
      this.minVel = 0;
      this.maxVel = 0;
      this.acceleration = new Vector(0, 0);
      this.minAngle = 0;
      this.maxAngle = 0;
      this.emitRate = 1;
      this.particleLife = 2000;
      this.fadeFlag = false;
      this.focus = null;
      this.focusAccel = null;
      this.startSize = null;
      this.endSize = null;
      this.minSize = 5;
      this.maxSize = 5;
      this.beginColor = Color.White;
      this.endColor = Color.White;
      this._sprite = null;
      this.emitterType = EmitterType.Rectangle;
      this.radius = 0;
      this.particleRotationalVelocity = 0;
      this.randomRotation = false;
      this.particleTransform = ParticleTransform.Global;
      const { x, y, pos, isEmitting, minVel, maxVel, acceleration, minAngle, maxAngle, emitRate, particleLife, opacity, fadeFlag, focus, focusAccel, startSize, endSize, minSize, maxSize, beginColor, endColor, particleSprite, emitterType, radius, particleRotationalVelocity, particleTransform, randomRotation, random } = { ...config };
      this.pos = pos !== null && pos !== undefined ? pos : vec(x !== null && x !== undefined ? x : 0, y !== null && y !== undefined ? y : 0);
      this.isEmitting = isEmitting !== null && isEmitting !== undefined ? isEmitting : this.isEmitting;
      this.minVel = minVel !== null && minVel !== undefined ? minVel : this.minVel;
      this.maxVel = maxVel !== null && maxVel !== undefined ? maxVel : this.maxVel;
      this.acceleration = acceleration !== null && acceleration !== undefined ? acceleration : this.acceleration;
      this.minAngle = minAngle !== null && minAngle !== undefined ? minAngle : this.minAngle;
      this.maxAngle = maxAngle !== null && maxAngle !== undefined ? maxAngle : this.maxAngle;
      this.emitRate = emitRate !== null && emitRate !== undefined ? emitRate : this.emitRate;
      this.particleLife = particleLife !== null && particleLife !== undefined ? particleLife : this.particleLife;
      this.opacity = opacity !== null && opacity !== undefined ? opacity : this.opacity;
      this.fadeFlag = fadeFlag !== null && fadeFlag !== undefined ? fadeFlag : this.fadeFlag;
      this.focus = focus !== null && focus !== undefined ? focus : this.focus;
      this.focusAccel = focusAccel !== null && focusAccel !== undefined ? focusAccel : this.focusAccel;
      this.startSize = startSize !== null && startSize !== undefined ? startSize : this.startSize;
      this.endSize = endSize !== null && endSize !== undefined ? endSize : this.endSize;
      this.minSize = minSize !== null && minSize !== undefined ? minSize : this.minSize;
      this.maxSize = maxSize !== null && maxSize !== undefined ? maxSize : this.maxSize;
      this.beginColor = beginColor !== null && beginColor !== undefined ? beginColor : this.beginColor;
      this.endColor = endColor !== null && endColor !== undefined ? endColor : this.endColor;
      this.particleSprite = particleSprite !== null && particleSprite !== undefined ? particleSprite : this.particleSprite;
      this.emitterType = emitterType !== null && emitterType !== undefined ? emitterType : this.emitterType;
      this.radius = radius !== null && radius !== undefined ? radius : this.radius;
      this.particleRotationalVelocity = particleRotationalVelocity !== null && particleRotationalVelocity !== undefined ? particleRotationalVelocity : this.particleRotationalVelocity;
      this.randomRotation = randomRotation !== null && randomRotation !== undefined ? randomRotation : this.randomRotation;
      this.particleTransform = particleTransform !== null && particleTransform !== undefined ? particleTransform : this.particleTransform;
      this.body.collisionType = CollisionType.PreventCollision;
      this.random = random !== null && random !== undefined ? random : new Random;
    }
    removeParticle(particle) {
      this.deadParticles.push(particle);
    }
    emitParticles(particleCount) {
      var _a;
      for (let i = 0;i < particleCount; i++) {
        const p = this._createParticle();
        this.particles.push(p);
        if ((_a = this === null || this === undefined ? undefined : this.scene) === null || _a === undefined ? undefined : _a.world) {
          if (this.particleTransform === ParticleTransform.Global) {
            this.scene.world.add(p);
          } else {
            this.addChild(p);
          }
        }
      }
    }
    clearParticles() {
      this.particles.length = 0;
    }
    _createParticle() {
      let ranX = 0;
      let ranY = 0;
      const angle = randomInRange(this.minAngle, this.maxAngle, this.random);
      const vel = randomInRange(this.minVel, this.maxVel, this.random);
      const size = this.startSize || randomInRange(this.minSize, this.maxSize, this.random);
      const dx = vel * Math.cos(angle);
      const dy = vel * Math.sin(angle);
      if (this.emitterType === EmitterType.Rectangle) {
        ranX = randomInRange(0, this.width, this.random);
        ranY = randomInRange(0, this.height, this.random);
      } else if (this.emitterType === EmitterType.Circle) {
        const radius = randomInRange(0, this.radius, this.random);
        ranX = radius * Math.cos(angle);
        ranY = radius * Math.sin(angle);
      }
      const p = new Particle(this, this.particleLife, this.opacity, this.beginColor, this.endColor, new Vector(ranX, ranY), new Vector(dx, dy), this.acceleration, this.startSize, this.endSize);
      p.fadeFlag = this.fadeFlag;
      p.particleSize = size;
      if (this.particleSprite) {
        p.particleSprite = this.particleSprite;
        p.graphics.opacity = this.opacity;
        p.graphics.use(this._sprite);
      }
      p.particleRotationalVelocity = this.particleRotationalVelocity;
      if (this.randomRotation) {
        p.currentRotation = randomInRange(0, Math.PI * 2, this.random);
      }
      if (this.focus) {
        p.focus = this.focus.add(new Vector(this.pos.x, this.pos.y));
        p.focusAccel = this.focusAccel;
      }
      return p;
    }
    update(engine, delta) {
      var _a;
      super.update(engine, delta);
      if (this.isEmitting) {
        this._particlesToEmit += this.emitRate * (delta / 1000);
        if (this._particlesToEmit > 1) {
          this.emitParticles(Math.floor(this._particlesToEmit));
          this._particlesToEmit = this._particlesToEmit - Math.floor(this._particlesToEmit);
        }
      }
      for (let i = 0;i < this.deadParticles.length; i++) {
        removeItemFromArray(this.deadParticles[i], this.particles);
        if ((_a = this === null || this === undefined ? undefined : this.scene) === null || _a === undefined ? undefined : _a.world) {
          this.scene.world.remove(this.deadParticles[i], false);
        }
      }
      this.deadParticles.length = 0;
    }
  }
  function blendTransform(oldTx, newTx, blend, target) {
    if (oldTx.parent !== newTx.parent) {
      const oldTxWithNewParent = oldTx.clone();
      const oldGlobalPos = oldTx.globalPos.clone();
      const oldGlobalScale = oldTx.globalScale.clone();
      const oldGlobalRotation = oldTx.globalRotation;
      oldTxWithNewParent.parent = newTx.parent;
      oldTxWithNewParent.globalPos = oldGlobalPos;
      oldTxWithNewParent.globalScale = oldGlobalScale;
      oldTxWithNewParent.globalRotation = oldGlobalRotation;
      oldTx = oldTxWithNewParent;
    }
    let interpolatedPos = newTx.pos;
    let interpolatedScale = newTx.scale;
    let interpolatedRotation = newTx.rotation;
    interpolatedPos = newTx.pos.scale(blend).add(oldTx.pos.scale(1 - blend));
    interpolatedScale = newTx.scale.scale(blend).add(oldTx.scale.scale(1 - blend));
    const cosine = (1 - blend) * Math.cos(oldTx.rotation) + blend * Math.cos(newTx.rotation);
    const sine = (1 - blend) * Math.sin(oldTx.rotation) + blend * Math.sin(newTx.rotation);
    interpolatedRotation = Math.atan2(sine, cosine);
    const tx = target !== null && target !== undefined ? target : new transform_Transform;
    tx.setTransform(interpolatedPos, interpolatedRotation, interpolatedScale);
    return tx;
  }
  function blendGlobalTransform(oldTx, newTx, blend, target) {
    let interpolatedPos = newTx.globalPos;
    let interpolatedScale = newTx.globalScale;
    let interpolatedRotation = newTx.globalRotation;
    interpolatedPos = newTx.globalPos.scale(blend).add(oldTx.globalPos.scale(1 - blend));
    interpolatedScale = newTx.globalScale.scale(blend).add(oldTx.globalScale.scale(1 - blend));
    const cosine = (1 - blend) * Math.cos(oldTx.globalRotation) + blend * Math.cos(newTx.globalRotation);
    const sine = (1 - blend) * Math.sin(oldTx.globalRotation) + blend * Math.sin(newTx.globalRotation);
    interpolatedRotation = Math.atan2(sine, cosine);
    const tx = target !== null && target !== undefined ? target : new Transform;
    tx.setTransform(interpolatedPos, interpolatedRotation, interpolatedScale);
    return tx;
  }

  class GraphicsSystem extends System {
    constructor() {
      super(...arguments);
      this.types = ["ex.transform", "ex.graphics"];
      this.systemType = SystemType.Draw;
      this.priority = 0;
      this._token = 0;
      this._sortedTransforms = [];
      this._zHasChanged = false;
      this._zIndexUpdate = () => {
        this._zHasChanged = true;
      };
      this._targetInterpolationTransform = new transform_Transform;
    }
    get sortedTransforms() {
      return this._sortedTransforms;
    }
    initialize(scene) {
      this._camera = scene.camera;
      this._engine = scene.engine;
    }
    preupdate() {
      this._graphicsContext = this._engine.graphicsContext;
      if (this._zHasChanged) {
        this._sortedTransforms.sort((a, b) => {
          return a.z - b.z;
        });
        this._zHasChanged = false;
      }
    }
    notify(entityAddedOrRemoved) {
      if (isAddedSystemEntity(entityAddedOrRemoved)) {
        const tx = entityAddedOrRemoved.data.get(TransformComponent);
        this._sortedTransforms.push(tx);
        tx.zIndexChanged$.subscribe(this._zIndexUpdate);
        this._zHasChanged = true;
      } else {
        const tx = entityAddedOrRemoved.data.get(TransformComponent);
        tx.zIndexChanged$.unsubscribe(this._zIndexUpdate);
        const index = this._sortedTransforms.indexOf(tx);
        if (index > -1) {
          this._sortedTransforms.splice(index, 1);
        }
      }
    }
    update(_entities, delta) {
      this._token++;
      let graphics;
      FontCache.checkAndClearCache();
      this._graphicsContext.save();
      if (this._camera) {
        this._camera.draw(this._graphicsContext);
      }
      for (const transform of this._sortedTransforms) {
        const entity = transform.owner;
        if (entity.hasTag("ex.offscreen")) {
          continue;
        }
        graphics = entity.get(GraphicsComponent);
        if (!graphics.visible) {
          continue;
        }
        if (graphics.onPreTransformDraw) {
          graphics.onPreTransformDraw(this._graphicsContext, delta);
        }
        entity.events.emit("pretransformdraw", new PreTransformDrawEvent(this._graphicsContext, delta, entity));
        if (transform.coordPlane === CoordPlane.Screen) {
          this._graphicsContext.restore();
        }
        this._graphicsContext.save();
        if (transform.coordPlane === CoordPlane.Screen) {
          this._graphicsContext.translate(this._engine.screen.contentArea.left, this._engine.screen.contentArea.top);
        }
        graphics.update(delta, this._token);
        const parallax = entity.get(ParallaxComponent);
        if (parallax) {
          const oneMinusFactor = Vector.One.sub(parallax.parallaxFactor);
          const parallaxOffset = this._camera.drawPos.scale(oneMinusFactor);
          this._graphicsContext.translate(parallaxOffset.x, parallaxOffset.y);
        }
        this._applyTransform(entity);
        if (graphics.material) {
          this._graphicsContext.material = graphics.material;
        }
        if (graphics.onPreDraw) {
          graphics.onPreDraw(this._graphicsContext, delta);
        }
        entity.events.emit("predraw", new PreDrawEvent(this._graphicsContext, delta, entity));
        const particleOpacity = entity instanceof Particle ? entity.opacity : 1;
        this._graphicsContext.opacity *= graphics.opacity * particleOpacity;
        this._drawGraphicsComponent(graphics);
        if (graphics.onPostDraw) {
          graphics.onPostDraw(this._graphicsContext, delta);
        }
        entity.events.emit("postdraw", new PostDrawEvent(this._graphicsContext, delta, entity));
        this._graphicsContext.restore();
        if (transform.coordPlane === CoordPlane.Screen) {
          this._graphicsContext.save();
          if (this._camera) {
            this._camera.draw(this._graphicsContext);
          }
        }
        if (graphics.onPostTransformDraw) {
          graphics.onPostTransformDraw(this._graphicsContext, delta);
        }
        entity.events.emit("posttransformdraw", new PostTransformDrawEvent(this._graphicsContext, delta, entity));
      }
      this._graphicsContext.restore();
    }
    _drawGraphicsComponent(graphicsComponent) {
      var _a, _b;
      if (graphicsComponent.visible) {
        const flipHorizontal = graphicsComponent.flipHorizontal;
        const flipVertical = graphicsComponent.flipVertical;
        for (const layer of graphicsComponent.layers.get()) {
          for (const { graphic, options } of layer.graphics) {
            let anchor = graphicsComponent.anchor;
            let offset = graphicsComponent.offset;
            if (options === null || options === undefined ? undefined : options.anchor) {
              anchor = options.anchor;
            }
            if (options === null || options === undefined ? undefined : options.offset) {
              offset = options.offset;
            }
            const offsetX = -graphic.width * anchor.x + offset.x;
            const offsetY = -graphic.height * anchor.y + offset.y;
            const oldFlipHorizontal = graphic.flipHorizontal;
            const oldFlipVertical = graphic.flipVertical;
            if (flipHorizontal || flipVertical) {
              graphic.flipHorizontal = flipHorizontal ? !oldFlipHorizontal : oldFlipHorizontal;
              graphic.flipVertical = flipVertical ? !oldFlipVertical : oldFlipVertical;
            }
            graphic === null || graphic === undefined || graphic.draw(this._graphicsContext, offsetX + layer.offset.x, offsetY + layer.offset.y);
            if (flipHorizontal || flipVertical) {
              graphic.flipHorizontal = oldFlipHorizontal;
              graphic.flipVertical = oldFlipVertical;
            }
            if (((_a = this._engine) === null || _a === undefined ? undefined : _a.isDebug) && this._engine.debug.graphics.showBounds) {
              const offset2 = vec(offsetX + layer.offset.x, offsetY + layer.offset.y);
              if (graphic instanceof GraphicsGroup) {
                for (const g of graphic.members) {
                  (_b = g.graphic) === null || _b === undefined || _b.localBounds.translate(offset2.add(g.pos)).draw(this._graphicsContext, this._engine.debug.graphics.boundsColor);
                }
              } else {
                graphic === null || graphic === undefined || graphic.localBounds.translate(offset2).draw(this._graphicsContext, this._engine.debug.graphics.boundsColor);
              }
            }
          }
        }
      }
    }
    _applyTransform(entity) {
      const ancestors = entity.getAncestors();
      for (const ancestor of ancestors) {
        const transform = ancestor === null || ancestor === undefined ? undefined : ancestor.get(TransformComponent);
        const optionalBody = ancestor === null || ancestor === undefined ? undefined : ancestor.get(BodyComponent);
        let tx = transform.get();
        if (optionalBody) {
          if (this._engine.fixedUpdateFps && optionalBody.__oldTransformCaptured && optionalBody.enableFixedUpdateInterpolate) {
            const blend = this._engine.currentFrameLagMs / (1000 / this._engine.fixedUpdateFps);
            tx = blendTransform(optionalBody.oldTransform, transform.get(), blend, this._targetInterpolationTransform);
          }
        }
        if (transform) {
          this._graphicsContext.z = transform.z;
          this._graphicsContext.translate(tx.pos.x, tx.pos.y);
          this._graphicsContext.scale(tx.scale.x, tx.scale.y);
          this._graphicsContext.rotate(tx.rotation);
        }
      }
    }
  }

  class DebugSystem extends System {
    constructor() {
      super(...arguments);
      this.types = ["ex.transform"];
      this.systemType = SystemType.Draw;
      this.priority = 999;
    }
    initialize(scene) {
      this._graphicsContext = scene.engine.graphicsContext;
      this._camera = scene.camera;
      this._engine = scene.engine;
      this._collisionSystem = scene.world.systemManager.get(CollisionSystem);
    }
    update(entities, _delta) {
      var _a;
      if (!this._engine.isDebug) {
        return;
      }
      const filterSettings = this._engine.debug.filter;
      let id;
      let name;
      const entitySettings = this._engine.debug.entity;
      let tx;
      const txSettings = this._engine.debug.transform;
      let motion;
      const motionSettings = this._engine.debug.motion;
      let colliderComp;
      const colliderSettings = this._engine.debug.collider;
      const physicsSettings = this._engine.debug.physics;
      let graphics;
      const graphicsSettings = this._engine.debug.graphics;
      let debugDraw;
      let body;
      const bodySettings = this._engine.debug.body;
      const cameraSettings = this._engine.debug.camera;
      for (const entity of entities) {
        if (entity.hasTag("offscreen")) {
          continue;
        }
        if (entity instanceof Particle) {
          continue;
        }
        if (filterSettings.useFilter) {
          const allIds = filterSettings.ids.length === 0;
          const idMatch = allIds || filterSettings.ids.includes(entity.id);
          if (!idMatch) {
            continue;
          }
          const allNames = filterSettings.nameQuery === "";
          const nameMatch = allNames || entity.name.includes(filterSettings.nameQuery);
          if (!nameMatch) {
            continue;
          }
        }
        let cursor = Vector.Zero;
        const lineHeight = vec(0, 16);
        id = entity.id;
        name = entity.name;
        tx = entity.get(TransformComponent);
        this._pushCameraTransform(tx);
        this._graphicsContext.save();
        this._graphicsContext.z = txSettings.debugZIndex;
        this._applyTransform(entity);
        if (tx) {
          if (txSettings.showAll || txSettings.showPosition) {
            this._graphicsContext.debug.drawPoint(Vector.Zero, { size: 4, color: txSettings.positionColor });
          }
          if (txSettings.showAll || txSettings.showPositionLabel) {
            this._graphicsContext.debug.drawText(`pos${tx.pos.toString(2)}`, cursor);
            cursor = cursor.add(lineHeight);
          }
          if (txSettings.showAll || txSettings.showZIndex) {
            this._graphicsContext.debug.drawText(`z(${tx.z.toFixed(1)})`, cursor);
            cursor = cursor.add(lineHeight);
          }
          if (entitySettings.showAll || entitySettings.showId) {
            this._graphicsContext.debug.drawText(`id(${id}) ${entity.parent ? "child of id(" + ((_a = entity.parent) === null || _a === undefined ? undefined : _a.id) + ")" : ""}`, cursor);
            cursor = cursor.add(lineHeight);
          }
          if (entitySettings.showAll || entitySettings.showName) {
            this._graphicsContext.debug.drawText(`name(${name})`, cursor);
            cursor = cursor.add(lineHeight);
          }
          if (txSettings.showAll || txSettings.showRotation) {
            this._graphicsContext.drawLine(Vector.Zero, Vector.fromAngle(tx.rotation).scale(50).add(Vector.Zero), txSettings.rotationColor, 2);
            this._graphicsContext.debug.drawText(`rot deg(${toDegrees(tx.rotation).toFixed(2)})`, cursor);
            cursor = cursor.add(lineHeight);
          }
          if (txSettings.showAll || txSettings.showScale) {
            this._graphicsContext.drawLine(Vector.Zero, tx.scale.add(Vector.Zero), txSettings.scaleColor, 2);
          }
        }
        graphics = entity.get(GraphicsComponent);
        if (graphics) {
          if (graphicsSettings.showAll || graphicsSettings.showBounds) {
            const bounds = graphics.localBounds;
            bounds.draw(this._graphicsContext, graphicsSettings.boundsColor);
          }
        }
        debugDraw = entity.get(DebugGraphicsComponent);
        if (debugDraw) {
          if (!debugDraw.useTransform) {
            this._graphicsContext.restore();
          }
          debugDraw.draw(this._graphicsContext, this._engine.debug);
          if (!debugDraw.useTransform) {
            this._graphicsContext.save();
            this._applyTransform(entity);
          }
        }
        body = entity.get(BodyComponent);
        if (body) {
          if (bodySettings.showAll || bodySettings.showCollisionGroup) {
            this._graphicsContext.debug.drawText(`collision group(${body.group.name})`, cursor);
            cursor = cursor.add(lineHeight);
          }
          if (bodySettings.showAll || bodySettings.showCollisionType) {
            this._graphicsContext.debug.drawText(`collision type(${body.collisionType})`, cursor);
            cursor = cursor.add(lineHeight);
          }
          if (bodySettings.showAll || bodySettings.showMass) {
            this._graphicsContext.debug.drawText(`mass(${body.mass})`, cursor);
            cursor = cursor.add(lineHeight);
          }
          if (bodySettings.showAll || bodySettings.showMotion) {
            this._graphicsContext.debug.drawText(`motion(${body.sleepMotion})`, cursor);
            cursor = cursor.add(lineHeight);
          }
          if (bodySettings.showAll || bodySettings.showSleeping) {
            this._graphicsContext.debug.drawText(`sleeping(${body.canSleep ? body.sleeping : "cant sleep"})`, cursor);
            cursor = cursor.add(lineHeight);
          }
        }
        this._graphicsContext.restore();
        this._graphicsContext.save();
        this._graphicsContext.z = txSettings.debugZIndex;
        motion = entity.get(MotionComponent);
        if (motion) {
          if (motionSettings.showAll || motionSettings.showVelocity) {
            this._graphicsContext.debug.drawText(`vel${motion.vel.toString(2)}`, cursor.add(tx.globalPos));
            this._graphicsContext.drawLine(tx.globalPos, tx.globalPos.add(motion.vel), motionSettings.velocityColor, 2);
            cursor = cursor.add(lineHeight);
          }
          if (motionSettings.showAll || motionSettings.showAcceleration) {
            this._graphicsContext.drawLine(tx.globalPos, tx.globalPos.add(motion.acc), motionSettings.accelerationColor, 2);
          }
        }
        colliderComp = entity.get(ColliderComponent);
        if (colliderComp) {
          const collider = colliderComp.get();
          if ((colliderSettings.showAll || colliderSettings.showGeometry) && collider) {
            collider.debug(this._graphicsContext, colliderSettings.geometryColor, {
              lineWidth: colliderSettings.geometryLineWidth,
              pointSize: colliderSettings.geometryPointSize
            });
          }
          if (colliderSettings.showAll || colliderSettings.showBounds) {
            if (collider instanceof CompositeCollider) {
              const colliders = collider.getColliders();
              for (const collider2 of colliders) {
                const bounds = collider2.bounds;
                const pos = vec(bounds.left, bounds.top);
                this._graphicsContext.debug.drawRect(pos.x, pos.y, bounds.width, bounds.height, { color: colliderSettings.boundsColor });
                if (colliderSettings.showAll || colliderSettings.showOwner) {
                  this._graphicsContext.debug.drawText(`owner id(${collider2.owner.id})`, pos);
                }
              }
              colliderComp.bounds.draw(this._graphicsContext, colliderSettings.boundsColor);
            } else if (collider) {
              const bounds = colliderComp.bounds;
              const pos = vec(bounds.left, bounds.top);
              this._graphicsContext.debug.drawRect(pos.x, pos.y, bounds.width, bounds.height, { color: colliderSettings.boundsColor });
              if (colliderSettings.showAll || colliderSettings.showOwner) {
                this._graphicsContext.debug.drawText(`owner id(${colliderComp.owner.id})`, pos);
              }
            }
          }
        }
        this._graphicsContext.restore();
        this._popCameraTransform(tx);
      }
      this._graphicsContext.save();
      this._camera.draw(this._graphicsContext);
      if (physicsSettings.showAll || physicsSettings.showBroadphaseSpacePartitionDebug) {
        this._collisionSystem.debug(this._graphicsContext);
      }
      if (physicsSettings.showAll || physicsSettings.showCollisionContacts || physicsSettings.showCollisionNormals) {
        for (const [_, contact] of this._engine.debug.stats.currFrame.physics.contacts) {
          if (physicsSettings.showAll || physicsSettings.showCollisionContacts) {
            for (const point2 of contact.points) {
              this._graphicsContext.debug.drawPoint(point2, { size: 5, color: physicsSettings.collisionContactColor });
            }
          }
          if (physicsSettings.showAll || physicsSettings.showCollisionNormals) {
            for (const point2 of contact.points) {
              this._graphicsContext.debug.drawLine(point2, contact.normal.scale(30).add(point2), {
                color: physicsSettings.collisionNormalColor
              });
            }
          }
        }
      }
      this._graphicsContext.restore();
      if (cameraSettings) {
        this._graphicsContext.save();
        this._camera.draw(this._graphicsContext);
        if (cameraSettings.showAll || cameraSettings.showFocus) {
          this._graphicsContext.drawCircle(this._camera.pos, 4, cameraSettings.focusColor);
        }
        if (cameraSettings.showAll || cameraSettings.showZoom) {
          this._graphicsContext.debug.drawText(`zoom(${this._camera.zoom})`, this._camera.pos);
        }
        this._graphicsContext.restore();
      }
      this._graphicsContext.flush();
    }
    _applyTransform(entity) {
      const ancestors = entity.getAncestors();
      for (const ancestor of ancestors) {
        const transform = ancestor === null || ancestor === undefined ? undefined : ancestor.get(TransformComponent);
        if (transform) {
          this._graphicsContext.translate(transform.pos.x, transform.pos.y);
          this._graphicsContext.scale(transform.scale.x, transform.scale.y);
          this._graphicsContext.rotate(transform.rotation);
        }
      }
    }
    _pushCameraTransform(transform) {
      if (transform.coordPlane === CoordPlane.World) {
        this._graphicsContext.save();
        if (this._camera) {
          this._camera.draw(this._graphicsContext);
        }
      }
    }
    _popCameraTransform(transform) {
      if (transform.coordPlane === CoordPlane.World) {
        this._graphicsContext.restore();
      }
    }
  }

  class PointerSystem extends System {
    constructor() {
      super(...arguments);
      this.types = ["ex.transform", "ex.pointer"];
      this.systemType = SystemType.Update;
      this.priority = -1;
      this.overrideUseColliderShape = false;
      this.overrideUseGraphicsBounds = false;
      this.lastFrameEntityToPointers = new Map;
      this.currentFrameEntityToPointers = new Map;
      this._sortedTransforms = [];
      this._sortedEntities = [];
      this._zHasChanged = false;
      this._zIndexUpdate = () => {
        this._zHasChanged = true;
      };
    }
    initialize(scene) {
      this._engine = scene.engine;
    }
    preupdate() {
      this._receiver = this._engine.input.pointers;
      if (this._zHasChanged) {
        this._sortedTransforms.sort((a, b) => {
          return b.z - a.z;
        });
        this._sortedEntities = this._sortedTransforms.map((t) => t.owner);
        this._zHasChanged = false;
      }
    }
    notify(entityAddedOrRemoved) {
      if (isAddedSystemEntity(entityAddedOrRemoved)) {
        const tx = entityAddedOrRemoved.data.get(TransformComponent);
        this._sortedTransforms.push(tx);
        this._sortedEntities.push(tx.owner);
        tx.zIndexChanged$.subscribe(this._zIndexUpdate);
        this._zHasChanged = true;
      } else {
        const tx = entityAddedOrRemoved.data.get(TransformComponent);
        tx.zIndexChanged$.unsubscribe(this._zIndexUpdate);
        const index = this._sortedTransforms.indexOf(tx);
        if (index > -1) {
          this._sortedTransforms.splice(index, 1);
          this._sortedEntities.splice(index, 1);
        }
      }
    }
    entityCurrentlyUnderPointer(entity, pointerId) {
      return this.currentFrameEntityToPointers.has(entity.id) && this.currentFrameEntityToPointers.get(entity.id).includes(pointerId);
    }
    entityWasUnderPointer(entity, pointerId) {
      return this.lastFrameEntityToPointers.has(entity.id) && this.lastFrameEntityToPointers.get(entity.id).includes(pointerId);
    }
    entered(entity, pointerId) {
      return this.entityCurrentlyUnderPointer(entity, pointerId) && !this.lastFrameEntityToPointers.has(entity.id);
    }
    left(entity, pointerId) {
      return !this.currentFrameEntityToPointers.has(entity.id) && this.entityWasUnderPointer(entity, pointerId);
    }
    addPointerToEntity(entity, pointerId) {
      if (!this.currentFrameEntityToPointers.has(entity.id)) {
        this.currentFrameEntityToPointers.set(entity.id, [pointerId]);
        return;
      }
      const pointers = this.currentFrameEntityToPointers.get(entity.id);
      this.currentFrameEntityToPointers.set(entity.id, pointers.concat(pointerId));
    }
    update(_entities) {
      this._processPointerToEntity(this._sortedEntities);
      this._dispatchEvents(this._sortedEntities);
      this._receiver.update();
      this.lastFrameEntityToPointers.clear();
      this.lastFrameEntityToPointers = new Map(this.currentFrameEntityToPointers);
      this.currentFrameEntityToPointers.clear();
      this._receiver.clear();
    }
    _processPointerToEntity(entities) {
      var _a;
      let transform;
      let collider;
      let graphics;
      let pointer;
      for (const entity of entities) {
        transform = entity.get(TransformComponent);
        pointer = (_a = entity.get(PointerComponent)) !== null && _a !== undefined ? _a : new PointerComponent;
        collider = entity.get(ColliderComponent);
        if (collider && (pointer.useColliderShape || this.overrideUseColliderShape)) {
          collider.update();
          const geom = collider.get();
          if (geom) {
            for (const [pointerId, pos] of this._receiver.currentFramePointerCoords.entries()) {
              if (geom.contains(transform.coordPlane === CoordPlane.World ? pos.worldPos : pos.screenPos)) {
                this.addPointerToEntity(entity, pointerId);
              }
            }
          }
        }
        graphics = entity.get(GraphicsComponent);
        if (graphics && (pointer.useGraphicsBounds || this.overrideUseGraphicsBounds)) {
          const graphicBounds = graphics.localBounds.transform(transform.get().matrix);
          for (const [pointerId, pos] of this._receiver.currentFramePointerCoords.entries()) {
            if (graphicBounds.contains(transform.coordPlane === CoordPlane.World ? pos.worldPos : pos.screenPos)) {
              this.addPointerToEntity(entity, pointerId);
            }
          }
        }
      }
    }
    _processDownAndEmit(entity) {
      const lastDownPerPointer = new Map;
      for (const event of this._receiver.currentFrameDown) {
        if (event.active && entity.active && this.entityCurrentlyUnderPointer(entity, event.pointerId)) {
          entity.events.emit("pointerdown", event);
          if (this._receiver.isDragStart(event.pointerId)) {
            entity.events.emit("pointerdragstart", event);
          }
        }
        lastDownPerPointer.set(event.pointerId, event);
      }
      return lastDownPerPointer;
    }
    _processUpAndEmit(entity) {
      const lastUpPerPointer = new Map;
      for (const event of this._receiver.currentFrameUp) {
        if (event.active && entity.active && this.entityCurrentlyUnderPointer(entity, event.pointerId)) {
          entity.events.emit("pointerup", event);
          if (this._receiver.isDragEnd(event.pointerId)) {
            entity.events.emit("pointerdragend", event);
          }
        }
        lastUpPerPointer.set(event.pointerId, event);
      }
      return lastUpPerPointer;
    }
    _processMoveAndEmit(entity) {
      const lastMovePerPointer = new Map;
      for (const event of this._receiver.currentFrameMove) {
        if (event.active && entity.active && this.entityCurrentlyUnderPointer(entity, event.pointerId)) {
          entity.events.emit("pointermove", event);
          if (this._receiver.isDragging(event.pointerId)) {
            entity.events.emit("pointerdragmove", event);
          }
        }
        lastMovePerPointer.set(event.pointerId, event);
      }
      return lastMovePerPointer;
    }
    _processEnterLeaveAndEmit(entity, lastUpDownMoveEvents) {
      for (const event of lastUpDownMoveEvents) {
        if (event.active && entity.active && this.entered(entity, event.pointerId)) {
          entity.events.emit("pointerenter", event);
          if (this._receiver.isDragging(event.pointerId)) {
            entity.events.emit("pointerdragenter", event);
          }
          break;
        }
        if (event.active && entity.active && (this.left(entity, event.pointerId) || this.entityCurrentlyUnderPointer(entity, event.pointerId) && event.type === "up")) {
          entity.events.emit("pointerleave", event);
          if (this._receiver.isDragging(event.pointerId)) {
            entity.events.emit("pointerdragleave", event);
          }
          break;
        }
      }
    }
    _processCancelAndEmit(entity) {
      for (const event of this._receiver.currentFrameCancel) {
        if (event.active && entity.active && this.entityCurrentlyUnderPointer(entity, event.pointerId)) {
          entity.events.emit("pointercancel", event);
        }
      }
    }
    _processWheelAndEmit(entity) {
      for (const event of this._receiver.currentFrameWheel) {
        if (event.active && entity.active && this.entityCurrentlyUnderPointer(entity, 0)) {
          entity.events.emit("pointerwheel", event);
        }
      }
    }
    _dispatchEvents(entities) {
      const lastFrameEntities = new Set(this.lastFrameEntityToPointers.keys());
      const currentFrameEntities = new Set(this.currentFrameEntityToPointers.keys());
      const entitiesWithEvents = entities.filter((e) => lastFrameEntities.has(e.id) || currentFrameEntities.has(e.id));
      let lastMovePerPointer;
      let lastUpPerPointer;
      let lastDownPerPointer;
      for (const entity of entitiesWithEvents) {
        lastDownPerPointer = this._processDownAndEmit(entity);
        lastUpPerPointer = this._processUpAndEmit(entity);
        lastMovePerPointer = this._processMoveAndEmit(entity);
        const lastUpDownMoveEvents = [
          ...lastMovePerPointer.values(),
          ...lastDownPerPointer.values(),
          ...lastUpPerPointer.values()
        ];
        this._processEnterLeaveAndEmit(entity, lastUpDownMoveEvents);
        this._processCancelAndEmit(entity);
        this._processWheelAndEmit(entity);
      }
    }
  }

  class ActionsSystem extends System {
    constructor() {
      super(...arguments);
      this.types = ["ex.actions"];
      this.systemType = SystemType.Update;
      this.priority = -1;
      this._actions = [];
    }
    notify(entityAddedOrRemoved) {
      if (isAddedSystemEntity(entityAddedOrRemoved)) {
        const action = entityAddedOrRemoved.data.get(ActionsComponent);
        this._actions.push(action);
      } else {
        const action = entityAddedOrRemoved.data.get(ActionsComponent);
        const index = this._actions.indexOf(action);
        if (index > -1) {
          this._actions.splice(index, 1);
        }
      }
    }
    update(_entities, delta) {
      for (const actions of this._actions) {
        actions.update(delta);
      }
    }
  }

  class IsometricEntityComponent extends Component {
    constructor(mapOrOptions) {
      super();
      this.type = "ex.isometricentity";
      this.elevation = 0;
      this.columns = mapOrOptions.columns;
      this.rows = mapOrOptions.rows;
      this.tileWidth = mapOrOptions.tileWidth;
      this.tileHeight = mapOrOptions.tileHeight;
    }
  }

  class IsometricEntitySystem extends System {
    constructor() {
      super(...arguments);
      this.types = ["ex.transform", "ex.isometricentity"];
      this.systemType = SystemType.Update;
      this.priority = 99;
    }
    update(entities, _delta) {
      let transform;
      let iso;
      for (const entity of entities) {
        transform = entity.get(TransformComponent);
        iso = entity.get(IsometricEntityComponent);
        const maxZindexPerElevation = Math.max(iso.columns * iso.tileWidth, iso.rows * iso.tileHeight);
        const newZ = maxZindexPerElevation * iso.elevation + transform.pos.y;
        transform.z = newZ;
      }
    }
  }

  class OffscreenSystem extends System {
    constructor() {
      super(...arguments);
      this.types = ["ex.transform", "ex.graphics"];
      this.systemType = SystemType.Draw;
      this.priority = -1;
    }
    initialize(scene) {
      this._camera = scene.camera;
      this._screen = scene.engine.screen;
    }
    update(entities) {
      this._worldBounds = this._screen.getWorldBounds();
      let transform;
      let graphics;
      let maybeParallax;
      for (const entity of entities) {
        graphics = entity.get(GraphicsComponent);
        transform = entity.get(TransformComponent);
        maybeParallax = entity.get(ParallaxComponent);
        let parallaxOffset;
        if (maybeParallax) {
          const oneMinusFactor = Vector.One.sub(maybeParallax.parallaxFactor);
          parallaxOffset = this._camera.pos.scale(oneMinusFactor);
        }
        const entityOffscreen = this._isOffscreen(transform, graphics, parallaxOffset);
        if (entityOffscreen && !entity.hasTag("ex.offscreen")) {
          entity.events.emit("exitviewport", new ExitViewPortEvent(entity));
          entity.addTag("ex.offscreen");
        }
        if (!entityOffscreen && entity.hasTag("ex.offscreen")) {
          entity.events.emit("enterviewport", new EnterViewPortEvent(entity));
          entity.removeTag("ex.offscreen");
        }
      }
    }
    _isOffscreen(transform, graphics, parallaxOffset) {
      if (transform.coordPlane === CoordPlane.World) {
        let bounds = graphics.localBounds;
        if (parallaxOffset) {
          bounds = bounds.translate(parallaxOffset);
        }
        const transformedBounds = bounds.transform(transform.get().matrix);
        const graphicsOffscreen = !this._worldBounds.overlaps(transformedBounds);
        return graphicsOffscreen;
      } else {
        return false;
      }
    }
  }

  class PhysicsWorld {
    constructor() {
      this.collisionProcessor = new DynamicTreeCollisionProcessor;
    }
    rayCast(ray, options) {
      return this.collisionProcessor.rayCast(ray, options);
    }
  }

  class PreLoadEvent {
  }
  const SceneEvents = {
    Initialize: "initialize",
    Activate: "activate",
    Deactivate: "deactivate",
    PreUpdate: "preupdate",
    PostUpdate: "postupdate",
    PreDraw: "predraw",
    PostDraw: "postdraw",
    PreDebugDraw: "predebugdraw",
    PostDebugDraw: "postdebugdraw",
    PreLoad: "preload"
  };
  function isSceneConstructor(x) {
    var _a, _b;
    return !!(x === null || x === undefined ? undefined : x.prototype) && !!((_b = (_a = x === null || x === undefined ? undefined : x.prototype) === null || _a === undefined ? undefined : _a.constructor) === null || _b === undefined ? undefined : _b.name);
  }

  class Scene {
    get actors() {
      return this.world.entityManager.entities.filter((e) => {
        return e instanceof Actor;
      });
    }
    get entities() {
      return this.world.entityManager.entities;
    }
    get triggers() {
      return this.world.entityManager.entities.filter((e) => {
        return e instanceof Trigger;
      });
    }
    get tileMaps() {
      return this.world.entityManager.entities.filter((e) => {
        return e instanceof TileMap;
      });
    }
    get timers() {
      return this._timers;
    }
    constructor() {
      this._logger = Logger.getInstance();
      this.events = new EventEmitter;
      this.camera = new Camera;
      this.world = new World(this);
      this.physics = new PhysicsWorld;
      this._isInitialized = false;
      this._timers = [];
      this._cancelQueue = [];
      this.world.add(new ActionsSystem);
      this.world.add(new MotionSystem);
      this.world.add(new CollisionSystem(this.physics));
      this.world.add(new PointerSystem);
      this.world.add(new IsometricEntitySystem);
      this.world.add(new OffscreenSystem);
      this.world.add(new GraphicsSystem);
      this.world.add(new DebugSystem);
    }
    emit(eventName, event) {
      this.events.emit(eventName, event);
    }
    on(eventName, handler) {
      return this.events.on(eventName, handler);
    }
    once(eventName, handler) {
      return this.events.once(eventName, handler);
    }
    off(eventName, handler) {
      this.events.off(eventName, handler);
    }
    onPreLoad(loader) {
    }
    onTransition(direction) {
      return;
    }
    onInitialize(engine) {
    }
    onActivate(context) {
    }
    onDeactivate(context) {
    }
    onPreUpdate(engine, delta) {
    }
    onPostUpdate(engine, delta) {
    }
    onPreDraw(ctx, delta) {
    }
    onPostDraw(ctx, delta) {
    }
    _initializeChildren() {
      for (const child of this.entities) {
        child._initialize(this.engine);
      }
    }
    get isInitialized() {
      return this._isInitialized;
    }
    async _initialize(engine) {
      if (!this.isInitialized) {
        this.engine = engine;
        this.camera._initialize(engine);
        this.world.systemManager.initialize();
        await this.onInitialize(engine);
        this._initializeChildren();
        this._logger.debug("Scene.onInitialize", this, engine);
        this.events.emit("initialize", new InitializeEvent(engine, this));
        this._isInitialized = true;
      }
    }
    async _activate(context) {
      this._logger.debug("Scene.onActivate", this);
      await this.onActivate(context);
    }
    async _deactivate(context) {
      this._logger.debug("Scene.onDeactivate", this);
      await this.onDeactivate(context);
    }
    _preupdate(engine, delta) {
      this.emit("preupdate", new PreUpdateEvent(engine, delta, this));
      this.onPreUpdate(engine, delta);
    }
    _postupdate(engine, delta) {
      this.emit("postupdate", new PostUpdateEvent(engine, delta, this));
      this.onPostUpdate(engine, delta);
    }
    _predraw(ctx, delta) {
      this.emit("predraw", new PreDrawEvent(ctx, delta, this));
      this.onPreDraw(ctx, delta);
    }
    _postdraw(ctx, delta) {
      this.emit("postdraw", new PostDrawEvent(ctx, delta, this));
      this.onPostDraw(ctx, delta);
    }
    update(engine, delta) {
      if (!this.isInitialized) {
        throw new Error("Scene update called before it was initialized!");
      }
      this._preupdate(engine, delta);
      let i, len;
      for (i = 0, len = this._cancelQueue.length;i < len; i++) {
        this.removeTimer(this._cancelQueue[i]);
      }
      this._cancelQueue.length = 0;
      for (const timer of this._timers) {
        timer.update(delta);
      }
      this.world.update(SystemType.Update, delta);
      if (this.camera) {
        this.camera.update(engine, delta);
      }
      this._collectActorStats(engine);
      this._postupdate(engine, delta);
    }
    draw(ctx, delta) {
      var _a;
      this._predraw(ctx, delta);
      this.world.update(SystemType.Draw, delta);
      if ((_a = this.engine) === null || _a === undefined ? undefined : _a.isDebug) {
        this.debugDraw(ctx);
      }
      this._postdraw(ctx, delta);
    }
    debugDraw(ctx) {
      this.emit("predebugdraw", new PreDebugDrawEvent(ctx, this));
      this.emit("postdebugdraw", new PostDebugDrawEvent(ctx, this));
    }
    contains(actor) {
      return this.actors.indexOf(actor) > -1;
    }
    add(entity) {
      this.emit("entityadded", { target: entity });
      this.world.add(entity);
      entity.scene = this;
      if (entity instanceof Timer) {
        if (!contains(this._timers, entity)) {
          this.addTimer(entity);
        }
        return;
      }
    }
    transfer(entity) {
      let scene;
      if (entity instanceof Entity && entity.scene && entity.scene !== this) {
        scene = entity.scene;
        entity.scene.world.remove(entity, false);
      }
      if (entity instanceof Timer && entity.scene) {
        scene = entity.scene;
        entity.scene.removeTimer(entity);
      }
      scene === null || scene === undefined || scene.emit("entityremoved", { target: entity });
      this.add(entity);
    }
    remove(entity) {
      if (entity instanceof Entity) {
        this.emit("entityremoved", { target: entity });
        if (entity.active) {
          entity.kill();
        }
        this.world.remove(entity);
      }
      if (entity instanceof Timer) {
        this.removeTimer(entity);
      }
    }
    clear(deferred = true) {
      for (let i = this.entities.length - 1;i >= 0; i--) {
        this.world.remove(this.entities[i], deferred);
      }
      for (let i = this.timers.length - 1;i >= 0; i--) {
        this.removeTimer(this.timers[i]);
      }
    }
    addTimer(timer) {
      this._timers.push(timer);
      timer.scene = this;
      return timer;
    }
    removeTimer(timer) {
      const i = this._timers.indexOf(timer);
      if (i !== -1) {
        this._timers.splice(i, 1);
      }
      return timer;
    }
    cancelTimer(timer) {
      this._cancelQueue.push(timer);
      return timer;
    }
    isTimerActive(timer) {
      return this._timers.indexOf(timer) > -1 && !timer.complete;
    }
    isCurrentScene() {
      if (this.engine) {
        return this.engine.currentScene === this;
      }
      return false;
    }
    _collectActorStats(engine) {
      const screenElements = this.actors.filter((a) => a instanceof ScreenElement);
      for (const _ui of screenElements) {
        engine.stats.currFrame.actors.ui++;
      }
      for (const actor of this.actors) {
        engine.stats.currFrame.actors.alive++;
        for (const child of actor.children) {
          if (isScreenElement(child)) {
            engine.stats.currFrame.actors.ui++;
          } else {
            engine.stats.currFrame.actors.alive++;
          }
        }
      }
    }
  }
  var ColorBlindnessMode;
  (function(ColorBlindnessMode2) {
    ColorBlindnessMode2["Protanope"] = "Protanope";
    ColorBlindnessMode2["Deuteranope"] = "Deuteranope";
    ColorBlindnessMode2["Tritanope"] = "Tritanope";
  })(ColorBlindnessMode || (ColorBlindnessMode = {}));
  const color_blind_fragment = "#version 300 es\nprecision mediump float;\n// our texture\nuniform sampler2D u_image;\n// the texCoords passed in from the vertex shader.\nin vec2 v_texcoord;\n\n// color blind type\nuniform int u_type;\n\n// simulation?\nuniform bool u_simulate;\n\nout vec4 fragColor;\n\nvoid main() {\n  vec4 o =  texture(u_image, v_texcoord);\n  // RGB to LMS matrix conversion\n  float L = (17.8824 * o.r) + (43.5161 * o.g) + (4.11935 * o.b);\n  float M = (3.45565 * o.r) + (27.1554 * o.g) + (3.86714 * o.b);\n  float S = (0.0299566 * o.r) + (0.184309 * o.g) + (1.46709 * o.b);\n  // Simulate color blindness\n  float l;\n  float m;\n  float s;\n  //MODE CODE//\n  if (u_type == 0) {\n    // Protanope\n    l = 0.0 * L + 2.02344 * M + -2.52581 * S;\n    m = 0.0 * L + 1.0 * M + 0.0 * S;\n    s = 0.0 * L + 0.0 * M + 1.0 * S;;\n  } else if (u_type == 1) {\n    // Deuteranope\n    l = 1.0 * L + 0.0 * M + 0.0 * S;\n    m = 0.494207 * L + 0.0 * M + 1.24827 * S;\n    s = 0.0 * L + 0.0 * M + 1.0 * S;\n  } else if (u_type == 2) {\n    // Tritanope\n    l = 1.0 * L + 0.0 * M + 0.0 * S;\n    m = 0.0 * L + 1.0 * M + 0.0 * S;\n    s = -0.395913 * L + 0.801109 * M + 0.0 * S;\n  }\n\n  // LMS to RGB matrix conversion\n  vec4 error; // simulate the colors\n  error.r = (0.0809444479 * l) + (-0.130504409 * m) + (0.116721066 * s);\n  error.g = (-0.0102485335 * l) + (0.0540193266 * m) + (-0.113614708 * s);\n  error.b = (-0.000365296938 * l) + (-0.00412161469 * m) + (0.693511405 * s);\n  error.a = 1.0;\n  vec4 diff = o - error;\n  vec4 correction; // correct the colors\n  correction.r = 0.0;\n  correction.g =  (diff.r * 0.7) + (diff.g * 1.0);\n  correction.b =  (diff.r * 0.7) + (diff.b * 1.0);\n  correction = o + correction;\n  correction.a = o.a;\n  //SIMULATE//\n\n  // sim \n  if (u_simulate) {\n    fragColor = error.rgba;\n  } else {\n    fragColor = correction.rgba;\n  }\n}";

  class ScreenShader {
    constructor(gl, fragmentSource) {
      this._shader = new Shader({
        gl,
        vertexSource: `#version 300 es
      in vec2 a_position;
      in vec2 a_texcoord;
      out vec2 v_texcoord;

      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
        // Pass the texcoord to the fragment shader.
        v_texcoord = a_texcoord;
      }`,
        fragmentSource
      });
      this._shader.compile();
      this._buffer = new VertexBuffer({
        gl,
        type: "static",
        data: new Float32Array([
          -1,
          -1,
          0,
          0,
          -1,
          1,
          0,
          1,
          1,
          -1,
          1,
          0,
          1,
          -1,
          1,
          0,
          -1,
          1,
          0,
          1,
          1,
          1,
          1,
          1
        ])
      });
      this._layout = new VertexLayout({
        gl,
        shader: this._shader,
        vertexBuffer: this._buffer,
        attributes: [
          ["a_position", 2],
          ["a_texcoord", 2]
        ]
      });
      this._buffer.upload();
    }
    getShader() {
      return this._shader;
    }
    getLayout() {
      return this._layout;
    }
  }

  class ColorBlindnessPostProcessor {
    constructor(_colorBlindnessMode, simulate = false) {
      this._colorBlindnessMode = _colorBlindnessMode;
      this._simulate = false;
      this._simulate = simulate;
    }
    initialize(gl) {
      this._shader = new ScreenShader(gl, color_blind_fragment);
      this.simulate = this._simulate;
      this.colorBlindnessMode = this._colorBlindnessMode;
    }
    getShader() {
      return this._shader.getShader();
    }
    getLayout() {
      return this._shader.getLayout();
    }
    set colorBlindnessMode(colorBlindMode) {
      this._colorBlindnessMode = colorBlindMode;
      if (this._shader) {
        const shader = this._shader.getShader();
        shader.use();
        if (this._colorBlindnessMode === ColorBlindnessMode.Protanope) {
          shader.setUniformInt("u_type", 0);
        } else if (this._colorBlindnessMode === ColorBlindnessMode.Deuteranope) {
          shader.setUniformInt("u_type", 1);
        } else if (this._colorBlindnessMode === ColorBlindnessMode.Tritanope) {
          shader.setUniformInt("u_type", 2);
        }
      }
    }
    get colorBlindnessMode() {
      return this._colorBlindnessMode;
    }
    set simulate(value) {
      this._simulate = value;
      if (this._shader) {
        const shader = this._shader.getShader();
        shader.use();
        shader.setUniformBoolean("u_simulate", value);
      }
    }
    get simulate() {
      return this._simulate;
    }
  }

  class ColorBlindFlags {
    constructor(engine) {
      this._engine = engine;
      this._colorBlindPostProcessor = new ColorBlindnessPostProcessor(ColorBlindnessMode.Protanope);
    }
    correct(colorBlindness) {
      if (this._engine.graphicsContext instanceof ExcaliburGraphicsContextWebGL) {
        this.clear();
        this._colorBlindPostProcessor.colorBlindnessMode = colorBlindness;
        this._colorBlindPostProcessor.simulate = false;
        this._engine.graphicsContext.addPostProcessor(this._colorBlindPostProcessor);
      }
    }
    simulate(colorBlindness) {
      if (this._engine.graphicsContext instanceof ExcaliburGraphicsContextWebGL) {
        this.clear();
        this._colorBlindPostProcessor.colorBlindnessMode = colorBlindness;
        this._colorBlindPostProcessor.simulate = true;
        this._engine.graphicsContext.addPostProcessor(this._colorBlindPostProcessor);
      }
    }
    clear() {
      this._engine.graphicsContext.removePostProcessor(this._colorBlindPostProcessor);
    }
  }

  class Debug {
    constructor(engine) {
      this.stats = {
        currFrame: new FrameStats,
        prevFrame: new FrameStats
      };
      this.filter = {
        useFilter: false,
        nameQuery: "",
        ids: []
      };
      this.entity = {
        showAll: false,
        showId: false,
        showName: false
      };
      this.transform = {
        showAll: false,
        debugZIndex: 1e7,
        showPosition: false,
        showPositionLabel: false,
        positionColor: Color.Yellow,
        showZIndex: false,
        showScale: false,
        scaleColor: Color.Green,
        showRotation: false,
        rotationColor: Color.Blue
      };
      this.graphics = {
        showAll: false,
        showBounds: false,
        boundsColor: Color.Yellow
      };
      this.collider = {
        showAll: false,
        showBounds: false,
        boundsColor: Color.Blue,
        showOwner: false,
        showGeometry: true,
        geometryColor: Color.Green,
        geometryLineWidth: 1,
        geometryPointSize: 0.5
      };
      this.physics = {
        showAll: false,
        showBroadphaseSpacePartitionDebug: false,
        showCollisionNormals: false,
        collisionNormalColor: Color.Cyan,
        showCollisionContacts: true,
        collisionContactColor: Color.Red
      };
      this.motion = {
        showAll: false,
        showVelocity: false,
        velocityColor: Color.Yellow,
        showAcceleration: false,
        accelerationColor: Color.Red
      };
      this.body = {
        showAll: false,
        showCollisionGroup: false,
        showCollisionType: false,
        showSleeping: false,
        showMotion: false,
        showMass: false
      };
      this.camera = {
        showAll: false,
        showFocus: false,
        focusColor: Color.Red,
        showZoom: false
      };
      this.tilemap = {
        showAll: false,
        showGrid: false,
        gridColor: Color.Red,
        gridWidth: 0.5,
        showSolidBounds: false,
        solidBoundsColor: Color.fromHex("#8080807F"),
        showColliderGeometry: true,
        showQuadTree: false
      };
      this.isometric = {
        showAll: false,
        showPosition: false,
        positionColor: Color.Yellow,
        positionSize: 1,
        showGrid: false,
        gridColor: Color.Red,
        gridWidth: 1,
        showColliderGeometry: true
      };
      this._engine = engine;
      this.colorBlindMode = new ColorBlindFlags(this._engine);
    }
    useTestClock() {
      const clock = this._engine.clock;
      const wasRunning = clock.isRunning();
      clock.stop();
      const testClock = clock.toTestClock();
      if (wasRunning) {
        testClock.start();
      }
      this._engine.clock = testClock;
      return testClock;
    }
    useStandardClock() {
      const currentClock = this._engine.clock;
      const wasRunning = currentClock.isRunning();
      currentClock.stop();
      const standardClock = currentClock.toStandardClock();
      if (wasRunning) {
        standardClock.start();
      }
      this._engine.clock = standardClock;
      return standardClock;
    }
  }

  class FrameStats {
    constructor() {
      this._id = 0;
      this._delta = 0;
      this._fps = 0;
      this._actorStats = {
        alive: 0,
        killed: 0,
        ui: 0,
        get remaining() {
          return this.alive - this.killed;
        },
        get total() {
          return this.remaining + this.ui;
        }
      };
      this._durationStats = {
        update: 0,
        draw: 0,
        get total() {
          return this.update + this.draw;
        }
      };
      this._physicsStats = new PhysicsStats;
      this._graphicsStats = {
        drawCalls: 0,
        drawnImages: 0
      };
    }
    reset(otherStats) {
      if (otherStats) {
        this.id = otherStats.id;
        this.delta = otherStats.delta;
        this.fps = otherStats.fps;
        this.actors.alive = otherStats.actors.alive;
        this.actors.killed = otherStats.actors.killed;
        this.actors.ui = otherStats.actors.ui;
        this.duration.update = otherStats.duration.update;
        this.duration.draw = otherStats.duration.draw;
        this._physicsStats.reset(otherStats.physics);
        this.graphics.drawCalls = otherStats.graphics.drawCalls;
        this.graphics.drawnImages = otherStats.graphics.drawnImages;
      } else {
        this.id = this.delta = this.fps = 0;
        this.actors.alive = this.actors.killed = this.actors.ui = 0;
        this.duration.update = this.duration.draw = 0;
        this._physicsStats.reset();
        this.graphics.drawnImages = this.graphics.drawCalls = 0;
      }
    }
    clone() {
      const fs = new FrameStats;
      fs.reset(this);
      return fs;
    }
    get id() {
      return this._id;
    }
    set id(value) {
      this._id = value;
    }
    get delta() {
      return this._delta;
    }
    set delta(value) {
      this._delta = value;
    }
    get fps() {
      return this._fps;
    }
    set fps(value) {
      this._fps = value;
    }
    get actors() {
      return this._actorStats;
    }
    get duration() {
      return this._durationStats;
    }
    get physics() {
      return this._physicsStats;
    }
    get graphics() {
      return this._graphicsStats;
    }
  }

  class PhysicsStats {
    constructor() {
      this._pairs = 0;
      this._collisions = 0;
      this._contacts = new Map;
      this._fastBodies = 0;
      this._fastBodyCollisions = 0;
      this._broadphase = 0;
      this._narrowphase = 0;
    }
    reset(otherStats) {
      if (otherStats) {
        this.pairs = otherStats.pairs;
        this.collisions = otherStats.collisions;
        this.contacts = otherStats.contacts;
        this.fastBodies = otherStats.fastBodies;
        this.fastBodyCollisions = otherStats.fastBodyCollisions;
        this.broadphase = otherStats.broadphase;
        this.narrowphase = otherStats.narrowphase;
      } else {
        this.pairs = this.collisions = this.fastBodies = 0;
        this.fastBodyCollisions = this.broadphase = this.narrowphase = 0;
        this.contacts.clear();
      }
    }
    clone() {
      const ps = new PhysicsStats;
      ps.reset(this);
      return ps;
    }
    get pairs() {
      return this._pairs;
    }
    set pairs(value) {
      this._pairs = value;
    }
    get collisions() {
      return this._collisions;
    }
    set collisions(value) {
      this._collisions = value;
    }
    get contacts() {
      return this._contacts;
    }
    set contacts(contacts) {
      this._contacts = contacts;
    }
    get fastBodies() {
      return this._fastBodies;
    }
    set fastBodies(value) {
      this._fastBodies = value;
    }
    get fastBodyCollisions() {
      return this._fastBodyCollisions;
    }
    set fastBodyCollisions(value) {
      this._fastBodyCollisions = value;
    }
    get broadphase() {
      return this._broadphase;
    }
    set broadphase(value) {
      this._broadphase = value;
    }
    get narrowphase() {
      return this._narrowphase;
    }
    set narrowphase(value) {
      this._narrowphase = value;
    }
  }

  class BrowserComponent {
    on(eventName, handler) {
      if (this._nativeHandlers[eventName]) {
        this.off(eventName, this._nativeHandlers[eventName]);
      }
      this._nativeHandlers[eventName] = this._decorate(handler);
      this.nativeComponent.addEventListener(eventName, this._nativeHandlers[eventName]);
    }
    off(eventName, handler) {
      if (!handler) {
        handler = this._nativeHandlers[eventName];
      }
      this.nativeComponent.removeEventListener(eventName, handler);
      this._nativeHandlers[eventName] = null;
    }
    _decorate(handler) {
      return (evt) => {
        if (!this._paused) {
          handler(evt);
        }
      };
    }
    pause() {
      this._paused = true;
    }
    resume() {
      this._paused = false;
    }
    clear() {
      for (const event in this._nativeHandlers) {
        this.off(event);
      }
    }
    constructor(nativeComponent) {
      this.nativeComponent = nativeComponent;
      this._paused = false;
      this._nativeHandlers = {};
    }
  }

  class BrowserEvents {
    constructor(_windowGlobal, _documentGlobal) {
      this._windowGlobal = _windowGlobal;
      this._documentGlobal = _documentGlobal;
      this._windowComponent = new BrowserComponent(this._windowGlobal);
      this._documentComponent = new BrowserComponent(this._documentGlobal);
    }
    get window() {
      return this._windowComponent;
    }
    get document() {
      return this._documentComponent;
    }
    pause() {
      this.window.pause();
      this.document.pause();
    }
    resume() {
      this.window.resume();
      this.document.resume();
    }
    clear() {
      this.window.clear();
      this.document.clear();
    }
  }

  class FpsSampler {
    constructor(options) {
      var _a;
      this._samplePeriod = 100;
      this._currentFrameTime = 0;
      this._frames = 0;
      this._previousSampleTime = 0;
      this._beginFrameTime = 0;
      this._fps = options.initialFps;
      this._samplePeriod = (_a = options.samplePeriod) !== null && _a !== undefined ? _a : this._samplePeriod;
      this._currentFrameTime = 1000 / options.initialFps;
      this._nowFn = options.nowFn;
      this._previousSampleTime = this._nowFn();
    }
    start() {
      this._beginFrameTime = this._nowFn();
    }
    end() {
      this._frames++;
      const time = this._nowFn();
      this._currentFrameTime = time - this._beginFrameTime;
      if (time >= this._previousSampleTime + this._samplePeriod) {
        this._fps = this._frames * 1000 / (time - this._previousSampleTime);
        this._previousSampleTime = time;
        this._frames = 0;
      }
    }
    get fps() {
      return this._fps;
    }
    get instant() {
      return 1000 / this._currentFrameTime;
    }
  }

  class Clock {
    constructor(options) {
      var _a, _b, _c;
      this._onFatalException = () => {
      };
      this._maxFps = Infinity;
      this._lastTime = 0;
      this._elapsed = 1;
      this._scheduledCbs = [];
      this._totalElapsed = 0;
      this._options = options;
      this.tick = options.tick;
      this._lastTime = (_a = this.now()) !== null && _a !== undefined ? _a : 0;
      this._maxFps = (_b = options.maxFps) !== null && _b !== undefined ? _b : this._maxFps;
      this._onFatalException = (_c = options.onFatalException) !== null && _c !== undefined ? _c : this._onFatalException;
      this.fpsSampler = new FpsSampler({
        initialFps: 60,
        nowFn: () => this.now()
      });
    }
    elapsed() {
      return this._elapsed;
    }
    now() {
      return performance.now();
    }
    toTestClock() {
      const testClock = new TestClock({
        ...this._options,
        defaultUpdateMs: 16.6
      });
      return testClock;
    }
    toStandardClock() {
      const clock = new StandardClock({
        ...this._options
      });
      return clock;
    }
    setFatalExceptionHandler(handler) {
      this._onFatalException = handler;
    }
    schedule(cb, timeoutMs = 0) {
      const scheduledTime = this._totalElapsed + timeoutMs;
      this._scheduledCbs.push([cb, scheduledTime]);
    }
    _runScheduledCbs() {
      for (let i = this._scheduledCbs.length - 1;i > -1; i--) {
        if (this._scheduledCbs[i][1] <= this._totalElapsed) {
          this._scheduledCbs[i][0]();
          this._scheduledCbs.splice(i, 1);
        }
      }
    }
    update(overrideUpdateMs) {
      try {
        this.fpsSampler.start();
        const now = this.now();
        let elapsed = now - this._lastTime || 1;
        const fpsInterval = 1000 / this._maxFps;
        if (elapsed >= fpsInterval) {
          let leftover = 0;
          if (fpsInterval !== 0) {
            leftover = elapsed % fpsInterval;
            elapsed = elapsed - leftover;
          }
          if (elapsed > 200) {
            elapsed = 1;
          }
          this._elapsed = overrideUpdateMs || elapsed;
          this._totalElapsed += this._elapsed;
          this._runScheduledCbs();
          this.tick(overrideUpdateMs || elapsed);
          if (fpsInterval !== 0) {
            this._lastTime = now - leftover;
          } else {
            this._lastTime = now;
          }
          this.fpsSampler.end();
        }
      } catch (e) {
        this._onFatalException(e);
        this.stop();
      }
    }
  }

  class StandardClock extends Clock {
    constructor(options) {
      super(options);
      this._running = false;
    }
    isRunning() {
      return this._running;
    }
    start() {
      if (this._running) {
        return;
      }
      this._running = true;
      const mainloop = () => {
        if (!this._running) {
          return;
        }
        try {
          this._requestId = window.requestAnimationFrame(mainloop);
          this.update();
        } catch (e) {
          window.cancelAnimationFrame(this._requestId);
          throw e;
        }
      };
      mainloop();
    }
    stop() {
      this._running = false;
    }
  }

  class TestClock extends Clock {
    constructor(options) {
      super({
        ...options
      });
      this._logger = Logger.getInstance();
      this._running = false;
      this._currentTime = 0;
      this._updateMs = options.defaultUpdateMs;
    }
    now() {
      var _a;
      return (_a = this._currentTime) !== null && _a !== undefined ? _a : 0;
    }
    isRunning() {
      return this._running;
    }
    start() {
      this._running = true;
    }
    stop() {
      this._running = false;
    }
    step(overrideUpdateMs) {
      const time = overrideUpdateMs !== null && overrideUpdateMs !== undefined ? overrideUpdateMs : this._updateMs;
      if (this._running) {
        this.update(time);
        this._currentTime += time;
      } else {
        this._logger.warn("The clock is not running, no step will be performed");
      }
    }
    run(numberOfSteps, overrideUpdateMs) {
      for (let i = 0;i < numberOfSteps; i++) {
        this.step(overrideUpdateMs !== null && overrideUpdateMs !== undefined ? overrideUpdateMs : this._updateMs);
      }
    }
  }
  var Util_Toaster = __webpack_require__(7379);

  class Toaster {
    constructor() {
      this._toasterCss = Util_Toaster.Z.toString();
      this._isInitialized = false;
    }
    _initialize() {
      if (!this._isInitialized) {
        this._container = document.createElement("div");
        this._container.id = "ex-toast-container";
        document.body.appendChild(this._container);
        this._isInitialized = true;
        this._styleBlock = document.createElement("style");
        this._styleBlock.textContent = this._toasterCss;
        document.head.appendChild(this._styleBlock);
      }
    }
    dispose() {
      this._container.parentElement.removeChild(this._container);
      this._styleBlock.parentElement.removeChild(this._styleBlock);
      this._isInitialized = false;
    }
    _createFragment(message) {
      const toastMessage = document.createElement("span");
      toastMessage.innerText = message;
      return toastMessage;
    }
    toast(message, linkTarget, linkName) {
      this._initialize();
      const toast = document.createElement("div");
      toast.className = "ex-toast-message";
      const messageFragments = message.split("[LINK]").map((message2) => this._createFragment(message2));
      if (linkTarget) {
        const link = document.createElement("a");
        link.href = linkTarget;
        if (linkName) {
          link.innerText = linkName;
        } else {
          link.innerText = linkTarget;
        }
        messageFragments.splice(1, 0, link);
      }
      const finalMessage = document.createElement("div");
      messageFragments.forEach((message2) => {
        finalMessage.appendChild(message2);
      });
      toast.appendChild(finalMessage);
      const dismissBtn = document.createElement("button");
      dismissBtn.innerText = "x";
      dismissBtn.addEventListener("click", () => {
        this._container.removeChild(toast);
      });
      toast.appendChild(dismissBtn);
      const keydownHandler = (evt) => {
        if (evt.key === "Escape") {
          try {
            this._container.removeChild(toast);
          } catch (_a) {
          }
        }
        document.removeEventListener("keydown", keydownHandler);
      };
      document.addEventListener("keydown", keydownHandler);
      const first = this._container.firstChild;
      this._container.insertBefore(toast, first);
    }
  }
  const DirectorEvents = {
    NavigationStart: "navigationstart",
    Navigation: "navigation",
    NavigationEnd: "navigationend"
  };

  class Director {
    get isTransitioning() {
      return this._isTransitioning;
    }
    constructor(_engine, scenes) {
      this._engine = _engine;
      this.events = new EventEmitter;
      this._logger = Logger.getInstance();
      this._initialized = false;
      this.scenes = {};
      this._sceneToInstance = new Map;
      this._sceneToLoader = new Map;
      this._sceneToTransition = new Map;
      this._loadedScenes = new Set;
      this._isTransitioning = false;
      this.rootScene = this.currentScene = new Scene;
      this.add("root", this.rootScene);
      this.currentScene = this.rootScene;
      this.currentSceneName = "root";
      for (const sceneKey in scenes) {
        const sceneOrOptions = scenes[sceneKey];
        this.add(sceneKey, sceneOrOptions);
      }
    }
    async onInitialize() {
      if (!this._initialized) {
        this._initialized = true;
        if (this._deferredGoto) {
          const deferredScene = this._deferredGoto;
          this._deferredGoto = null;
          await this.swapScene(deferredScene);
        } else {
          await this.swapScene("root");
        }
      }
    }
    get isInitialized() {
      return this._initialized;
    }
    configureStart(startScene, options) {
      const maybeLoaderOrCtor = options === null || options === undefined ? undefined : options.loader;
      if (maybeLoaderOrCtor instanceof DefaultLoader) {
        this.mainLoader = maybeLoaderOrCtor;
      } else if (isLoaderConstructor(maybeLoaderOrCtor)) {
        this.mainLoader = new maybeLoaderOrCtor;
      } else {
        this.mainLoader = new Loader;
      }
      let maybeStartTransition;
      if (options) {
        const { inTransition } = options;
        maybeStartTransition = inTransition;
      }
      this.startScene = startScene;
      if (maybeStartTransition) {
        this.swapScene(this.startScene);
        this.playTransition(maybeStartTransition);
      } else {
        this.swapScene(this.startScene);
      }
      this.currentSceneName = this.startScene;
    }
    _getLoader(sceneName) {
      return this._sceneToLoader.get(sceneName);
    }
    _getInTransition(sceneName) {
      var _a;
      const sceneOrRoute = this.scenes[sceneName];
      if (sceneOrRoute instanceof Scene || isSceneConstructor(sceneOrRoute)) {
        return null;
      }
      return (_a = sceneOrRoute === null || sceneOrRoute === undefined ? undefined : sceneOrRoute.transitions) === null || _a === undefined ? undefined : _a.in;
    }
    _getOutTransition(sceneName) {
      var _a;
      const sceneOrRoute = this.scenes[sceneName];
      if (sceneOrRoute instanceof Scene || isSceneConstructor(sceneOrRoute)) {
        return null;
      }
      return (_a = sceneOrRoute === null || sceneOrRoute === undefined ? undefined : sceneOrRoute.transitions) === null || _a === undefined ? undefined : _a.out;
    }
    getDeferredScene() {
      const maybeDeferred = this.getSceneDefinition(this._deferredGoto);
      if (this._deferredGoto && maybeDeferred) {
        return maybeDeferred;
      }
      return null;
    }
    getSceneDefinition(name) {
      const maybeScene = this.scenes[name];
      if (maybeScene instanceof Scene || isSceneConstructor(maybeScene)) {
        return maybeScene;
      } else if (maybeScene) {
        return maybeScene.scene;
      }
      return;
    }
    assertAdded(name) {
      return this;
    }
    assertRemoved(name) {
      return this;
    }
    add(name, sceneOrRoute) {
      if (!(sceneOrRoute instanceof Scene) && !isSceneConstructor(sceneOrRoute)) {
        const { loader, transitions } = sceneOrRoute;
        const { in: inTransition, out: outTransition } = transitions !== null && transitions !== undefined ? transitions : {};
        this._sceneToTransition.set(name, { in: inTransition, out: outTransition });
        if (isLoaderConstructor(loader)) {
          this._sceneToLoader.set(name, new loader);
        } else {
          this._sceneToLoader.set(name, loader);
        }
      }
      if (this.scenes[name]) {
        this._logger.warn("Scene", name, "already exists overwriting");
      }
      this.scenes[name] = sceneOrRoute;
      return this.assertAdded(name);
    }
    remove(nameOrScene) {
      if (nameOrScene instanceof Scene || isSceneConstructor(nameOrScene)) {
        const sceneOrCtor = nameOrScene;
        for (const key in this.scenes) {
          if (this.scenes.hasOwnProperty(key)) {
            const potentialSceneOrOptions = this.scenes[key];
            let scene;
            if (potentialSceneOrOptions instanceof Scene || isSceneConstructor(potentialSceneOrOptions)) {
              scene = potentialSceneOrOptions;
            } else {
              scene = potentialSceneOrOptions.scene;
            }
            if (scene === sceneOrCtor) {
              if (key === this.currentSceneName) {
                throw new Error(`Cannot remove a currently active scene: ${key}`);
              }
              this._sceneToTransition.delete(key);
              this._sceneToLoader.delete(key);
              delete this.scenes[key];
            }
          }
        }
      }
      if (typeof nameOrScene === "string") {
        if (nameOrScene === this.currentSceneName) {
          throw new Error(`Cannot remove a currently active scene: ${nameOrScene}`);
        }
        this._sceneToTransition.delete(nameOrScene);
        this._sceneToLoader.delete(nameOrScene);
        delete this.scenes[nameOrScene];
      }
    }
    async goto(destinationScene, options) {
      var _a, _b, _c;
      if (destinationScene === this.currentSceneName) {
        return;
      }
      const maybeDest = this.getSceneInstance(destinationScene);
      if (!maybeDest) {
        this._logger.warn(`Scene ${destinationScene} does not exist! Check the name, are you sure you added it?`);
        return;
      }
      if (this._isTransitioning) {
        this._logger.warn("Cannot transition while a transition is in progress");
        return;
      }
      const sourceScene = this.currentSceneName;
      this._isTransitioning = true;
      const maybeSourceOut = (_a = this.getSceneInstance(sourceScene)) === null || _a === undefined ? undefined : _a.onTransition("out");
      const maybeDestinationIn = maybeDest === null || maybeDest === undefined ? undefined : maybeDest.onTransition("in");
      options = {
        ...{ sourceOut: (_b = this._getOutTransition(this.currentSceneName)) !== null && _b !== undefined ? _b : maybeSourceOut },
        ...{ destinationIn: (_c = this._getInTransition(destinationScene)) !== null && _c !== undefined ? _c : maybeDestinationIn },
        ...options
      };
      const { sourceOut, destinationIn, sceneActivationData } = options;
      const outTransition = sourceOut !== null && sourceOut !== undefined ? sourceOut : this._getOutTransition(this.currentSceneName);
      const inTransition = destinationIn !== null && destinationIn !== undefined ? destinationIn : this._getInTransition(destinationScene);
      const hideLoader = (outTransition === null || outTransition === undefined ? undefined : outTransition.hideLoader) || (inTransition === null || inTransition === undefined ? undefined : inTransition.hideLoader);
      if (hideLoader) {
        this.maybeLoadScene(destinationScene, hideLoader);
      }
      this._emitEvent("navigationstart", sourceScene, destinationScene);
      await this.playTransition(outTransition);
      await this.maybeLoadScene(destinationScene, hideLoader);
      await (inTransition === null || inTransition === undefined ? undefined : inTransition.onPreviousSceneDeactivate(this.currentScene));
      await this.swapScene(destinationScene, sceneActivationData);
      this._emitEvent("navigation", sourceScene, destinationScene);
      await this.playTransition(inTransition);
      this._emitEvent("navigationend", sourceScene, destinationScene);
      this._engine.toggleInputEnabled(true);
      this._isTransitioning = false;
    }
    getSceneInstance(scene) {
      const sceneDefinition = this.getSceneDefinition(scene);
      if (!sceneDefinition) {
        return;
      }
      if (this._sceneToInstance.has(scene)) {
        return this._sceneToInstance.get(scene);
      }
      if (sceneDefinition instanceof Scene) {
        this._sceneToInstance.set(scene, sceneDefinition);
        return sceneDefinition;
      }
      const newScene = new sceneDefinition;
      this._sceneToInstance.set(scene, newScene);
      return newScene;
    }
    async maybeLoadScene(scene, hideLoader = false) {
      var _a;
      const loader = (_a = this._getLoader(scene)) !== null && _a !== undefined ? _a : new DefaultLoader;
      const sceneToLoad = this.getSceneDefinition(scene);
      const sceneToLoadInstance = this.getSceneInstance(scene);
      if (sceneToLoad && sceneToLoadInstance && !this._loadedScenes.has(sceneToLoadInstance)) {
        sceneToLoadInstance.onPreLoad(loader);
        sceneToLoadInstance.events.emit("preload", { loader });
        if (hideLoader) {
          this._engine.load(loader, hideLoader);
        } else {
          await this._engine.load(loader);
        }
        this._loadedScenes.add(sceneToLoadInstance);
      }
    }
    async playTransition(transition) {
      var _a, _b;
      if (transition) {
        this.currentTransition = transition;
        this._engine.toggleInputEnabled(!transition.blockInput);
        this._engine.add(this.currentTransition);
        await this.currentTransition.done;
      }
      (_a = this.currentTransition) === null || _a === undefined || _a.kill();
      (_b = this.currentTransition) === null || _b === undefined || _b.reset();
      this.currentTransition = null;
    }
    async swapScene(destinationScene, data) {
      const engine = this._engine;
      if (!this.isInitialized) {
        this._deferredGoto = destinationScene;
        return;
      }
      const maybeDest = this.getSceneInstance(destinationScene);
      if (maybeDest) {
        const previousScene = this.currentScene;
        const nextScene = maybeDest;
        this._logger.debug("Going to scene:", destinationScene);
        if (this.currentScene.isInitialized) {
          const context2 = { engine, previousScene, nextScene };
          await this.currentScene._deactivate(context2);
          this.currentScene.events.emit("deactivate", new DeactivateEvent(context2, this.currentScene));
        }
        const destLoader = this._sceneToLoader.get(destinationScene);
        await (destLoader === null || destLoader === undefined ? undefined : destLoader.areResourcesLoaded());
        this.currentScene = nextScene;
        this.currentSceneName = destinationScene;
        engine.screen.setCurrentCamera(nextScene.camera);
        await this.currentScene._initialize(engine);
        const context = { engine, previousScene, nextScene, data };
        await this.currentScene._activate(context);
        this.currentScene.events.emit("activate", new ActivateEvent(context, this.currentScene));
      } else {
        this._logger.error("Scene", destinationScene, "does not exist!");
      }
    }
    _emitEvent(eventName, sourceScene, destinationScene) {
      const source = this.getSceneDefinition(sourceScene);
      const dest = this.getSceneDefinition(destinationScene);
      this.events.emit(eventName, {
        sourceScene: source,
        sourceName: sourceScene,
        destinationScene: dest,
        destinationName: destinationScene
      });
    }
    update() {
      if (this.currentTransition) {
        this.currentTransition.execute();
      }
    }
  }
  const GamepadEvents = {
    GamepadConnect: "connect",
    GamepadDisconnect: "disconnect",
    GamepadButton: "button",
    GamepadAxis: "axis"
  };

  class Gamepads {
    constructor() {
      this.events = new EventEmitter;
      this.enabled = false;
      this.supported = !!navigator.getGamepads;
      this._gamePadTimeStamps = [0, 0, 0, 0];
      this._oldPads = [];
      this._pads = [];
      this._initSuccess = false;
      this._navigator = navigator;
      this._minimumConfiguration = null;
      this._enabled = true;
    }
    init() {
      if (!this.supported) {
        return;
      }
      if (this._initSuccess) {
        return;
      }
      this._oldPads = this._clonePads(this._navigator.getGamepads());
      if (this._oldPads.length && this._oldPads[0]) {
        this._initSuccess = true;
      }
    }
    toggleEnabled(enabled) {
      this._enabled = enabled;
    }
    setMinimumGamepadConfiguration(config) {
      this._enableAndUpdate();
      this._minimumConfiguration = config;
    }
    _enableAndUpdate() {
      if (!this.enabled) {
        this.enabled = true;
        this.update();
      }
    }
    _isGamepadValid(pad) {
      if (!this._minimumConfiguration) {
        return true;
      }
      if (!pad) {
        return false;
      }
      const axesLength = pad.axes.filter((value) => {
        return typeof value !== undefined;
      }).length;
      const buttonLength = pad.buttons.filter((value) => {
        return typeof value !== undefined;
      }).length;
      return axesLength >= this._minimumConfiguration.axis && buttonLength >= this._minimumConfiguration.buttons && pad.connected;
    }
    emit(eventName, event) {
      this.events.emit(eventName, event);
    }
    on(eventName, handler) {
      this._enableAndUpdate();
      return this.events.on(eventName, handler);
    }
    once(eventName, handler) {
      return this.events.once(eventName, handler);
    }
    off(eventName, handler) {
      this._enableAndUpdate();
      this.events.off(eventName, handler);
    }
    update() {
      if (!this.enabled || !this.supported) {
        return;
      }
      if (!this._enabled) {
        return;
      }
      this.init();
      const gamepads = this._navigator.getGamepads();
      for (let i = 0;i < gamepads.length; i++) {
        if (!gamepads[i]) {
          const gamepad = this.at(i);
          if (gamepad.connected) {
            this.events.emit("disconnect", new GamepadDisconnectEvent(i, gamepad));
          }
          gamepad.connected = false;
          continue;
        } else {
          if (!this.at(i).connected && this._isGamepadValid(gamepads[i])) {
            this.events.emit("connect", new GamepadConnectEvent(i, this.at(i)));
          }
          this.at(i).connected = true;
        }
        this.at(i).update();
        if (gamepads[i].timestamp && gamepads[i].timestamp === this._gamePadTimeStamps[i]) {
          continue;
        }
        this._gamePadTimeStamps[i] = gamepads[i].timestamp;
        this.at(i).navigatorGamepad = gamepads[i];
        let b, bi, a, ai, value;
        for (b in Buttons) {
          bi = Buttons[b];
          if (typeof bi === "number") {
            if (gamepads[i].buttons[bi]) {
              value = gamepads[i].buttons[bi].value;
              if (value !== this._oldPads[i].getButton(bi)) {
                if (gamepads[i].buttons[bi].pressed) {
                  this.at(i).updateButton(bi, value);
                  this.at(i).events.emit("button", new GamepadButtonEvent(bi, value, this.at(i)));
                } else {
                  this.at(i).updateButton(bi, 0);
                }
              }
            }
          }
        }
        for (a in Axes) {
          ai = Axes[a];
          if (typeof ai === "number") {
            value = gamepads[i].axes[ai];
            if (value !== this._oldPads[i].getAxes(ai)) {
              this.at(i).updateAxes(ai, value);
              this.at(i).events.emit("axis", new GamepadAxisEvent(ai, value, this.at(i)));
            }
          }
        }
        this._oldPads[i] = this._clonePad(gamepads[i]);
      }
    }
    at(index) {
      this._enableAndUpdate();
      if (index >= this._pads.length) {
        for (let i = this._pads.length - 1, max = index;i < max; i++) {
          this._pads.push(new Gamepad);
          this._oldPads.push(new Gamepad);
        }
      }
      return this._pads[index];
    }
    getValidGamepads() {
      this._enableAndUpdate();
      const result = [];
      for (let i = 0;i < this._pads.length; i++) {
        if (this._isGamepadValid(this.at(i).navigatorGamepad) && this.at(i).connected) {
          result.push(this.at(i));
        }
      }
      return result;
    }
    count() {
      return this._pads.filter((p) => p.connected).length;
    }
    _clonePads(pads) {
      const arr = [];
      for (let i = 0, len = pads.length;i < len; i++) {
        arr.push(this._clonePad(pads[i]));
      }
      return arr;
    }
    _clonePad(pad) {
      let i, len;
      const clonedPad = new Gamepad;
      if (!pad) {
        return clonedPad;
      }
      for (i = 0, len = pad.buttons.length;i < len; i++) {
        if (pad.buttons[i]) {
          clonedPad.updateButton(i, pad.buttons[i].value);
        }
      }
      for (i = 0, len = pad.axes.length;i < len; i++) {
        clonedPad.updateAxes(i, pad.axes[i]);
      }
      return clonedPad;
    }
  }
  Gamepads.MinAxisMoveThreshold = 0.05;

  class Gamepad {
    constructor() {
      this.events = new EventEmitter;
      this.connected = false;
      this._axes = new Array(4);
      this._buttons = new Array(16);
      this._buttonsUp = new Array(16);
      this._buttonsDown = new Array(16);
      for (let i = 0;i < this._buttons.length; i++) {
        this._buttons[i] = 0;
      }
      for (let i = 0;i < this._axes.length; i++) {
        this._axes[i] = 0;
      }
    }
    update() {
      this._buttonsDown = new Array(16);
      this._buttonsUp = new Array(16);
    }
    isButtonPressed(button, threshold = 1) {
      return this._buttons[button] >= threshold;
    }
    isButtonHeld(button, threshold = 1) {
      return this._buttons[button] >= threshold;
    }
    wasButtonPressed(button, threshold = 1) {
      return this._buttonsDown[button] >= threshold;
    }
    wasButtonReleased(button) {
      return Boolean(this._buttonsUp[button]);
    }
    getButton(button) {
      return this._buttons[button];
    }
    getAxes(axes) {
      const value = this._axes[axes];
      if (Math.abs(value) < Gamepads.MinAxisMoveThreshold) {
        return 0;
      } else {
        return value;
      }
    }
    updateButton(buttonIndex, value) {
      if (value === 0 && this._buttons[buttonIndex]) {
        this._buttonsUp[buttonIndex] = 1;
      } else {
        this._buttonsDown[buttonIndex] = value;
      }
      this._buttons[buttonIndex] = value;
    }
    updateAxes(axesIndex, value) {
      this._axes[axesIndex] = value;
    }
    emit(eventName, event) {
      this.events.emit(eventName, event);
    }
    on(eventName, handler) {
      return this.events.on(eventName, handler);
    }
    once(eventName, handler) {
      return this.events.once(eventName, handler);
    }
    off(eventName, handler) {
      this.events.off(eventName, handler);
    }
  }
  var Buttons;
  (function(Buttons2) {
    Buttons2[Buttons2["Face1"] = 0] = "Face1";
    Buttons2[Buttons2["Face2"] = 1] = "Face2";
    Buttons2[Buttons2["Face3"] = 2] = "Face3";
    Buttons2[Buttons2["Face4"] = 3] = "Face4";
    Buttons2[Buttons2["LeftBumper"] = 4] = "LeftBumper";
    Buttons2[Buttons2["RightBumper"] = 5] = "RightBumper";
    Buttons2[Buttons2["LeftTrigger"] = 6] = "LeftTrigger";
    Buttons2[Buttons2["RightTrigger"] = 7] = "RightTrigger";
    Buttons2[Buttons2["Select"] = 8] = "Select";
    Buttons2[Buttons2["Start"] = 9] = "Start";
    Buttons2[Buttons2["LeftStick"] = 10] = "LeftStick";
    Buttons2[Buttons2["RightStick"] = 11] = "RightStick";
    Buttons2[Buttons2["DpadUp"] = 12] = "DpadUp";
    Buttons2[Buttons2["DpadDown"] = 13] = "DpadDown";
    Buttons2[Buttons2["DpadLeft"] = 14] = "DpadLeft";
    Buttons2[Buttons2["DpadRight"] = 15] = "DpadRight";
  })(Buttons || (Buttons = {}));
  var Axes;
  (function(Axes2) {
    Axes2[Axes2["LeftStickX"] = 0] = "LeftStickX";
    Axes2[Axes2["LeftStickY"] = 1] = "LeftStickY";
    Axes2[Axes2["RightStickX"] = 2] = "RightStickX";
    Axes2[Axes2["RightStickY"] = 3] = "RightStickY";
  })(Axes || (Axes = {}));

  class InputMapper {
    constructor(inputs) {
      this.inputs = inputs;
      this._handlers = new Map;
    }
    execute() {
      for (const [input, command] of this._handlers.entries()) {
        const results = input(this.inputs);
        if (results) {
          command(results);
        }
      }
    }
    on(inputHandler, commandHandler) {
      this._handlers.set(inputHandler, commandHandler);
    }
  }
  function isCrossOriginIframe() {
    try {
      const noop = () => {
        return;
      };
      window.top.addEventListener("blur", noop);
      window.top.removeEventListener("blur", noop);
    } catch (_a) {
      return true;
    }
    return false;
  }
  var Keys;
  (function(Keys2) {
    Keys2["Num0"] = "Numpad0";
    Keys2["Num1"] = "Numpad1";
    Keys2["Num2"] = "Numpad2";
    Keys2["Num3"] = "Numpad3";
    Keys2["Num4"] = "Numpad4";
    Keys2["Num5"] = "Numpad5";
    Keys2["Num6"] = "Numpad6";
    Keys2["Num7"] = "Numpad7";
    Keys2["Num8"] = "Numpad8";
    Keys2["Num9"] = "Numpad9";
    Keys2["NumAdd"] = "NumpadAdd";
    Keys2["NumSubtract"] = "NumpadSubtract";
    Keys2["NumMultiply"] = "NumpadMultiply";
    Keys2["NumDivide"] = "NumpadDivide";
    Keys2["NumDecimal"] = "NumpadDecimal";
    Keys2["Numpad0"] = "Numpad0";
    Keys2["Numpad1"] = "Numpad1";
    Keys2["Numpad2"] = "Numpad2";
    Keys2["Numpad3"] = "Numpad3";
    Keys2["Numpad4"] = "Numpad4";
    Keys2["Numpad5"] = "Numpad5";
    Keys2["Numpad6"] = "Numpad6";
    Keys2["Numpad7"] = "Numpad7";
    Keys2["Numpad8"] = "Numpad8";
    Keys2["Numpad9"] = "Numpad9";
    Keys2["NumpadAdd"] = "NumpadAdd";
    Keys2["NumpadSubtract"] = "NumpadSubtract";
    Keys2["NumpadMultiply"] = "NumpadMultiply";
    Keys2["NumpadDivide"] = "NumpadDivide";
    Keys2["NumpadDecimal"] = "NumpadDecimal";
    Keys2["NumLock"] = "NumLock";
    Keys2["ShiftLeft"] = "ShiftLeft";
    Keys2["ShiftRight"] = "ShiftRight";
    Keys2["AltLeft"] = "AltLeft";
    Keys2["AltRight"] = "AltRight";
    Keys2["ControlLeft"] = "ControlLeft";
    Keys2["ControlRight"] = "ControlRight";
    Keys2["MetaLeft"] = "MetaLeft";
    Keys2["MetaRight"] = "MetaRight";
    Keys2["Key0"] = "Digit0";
    Keys2["Key1"] = "Digit1";
    Keys2["Key2"] = "Digit2";
    Keys2["Key3"] = "Digit3";
    Keys2["Key4"] = "Digit4";
    Keys2["Key5"] = "Digit5";
    Keys2["Key6"] = "Digit6";
    Keys2["Key7"] = "Digit7";
    Keys2["Key8"] = "Digit8";
    Keys2["Key9"] = "Digit9";
    Keys2["Digit0"] = "Digit0";
    Keys2["Digit1"] = "Digit1";
    Keys2["Digit2"] = "Digit2";
    Keys2["Digit3"] = "Digit3";
    Keys2["Digit4"] = "Digit4";
    Keys2["Digit5"] = "Digit5";
    Keys2["Digit6"] = "Digit6";
    Keys2["Digit7"] = "Digit7";
    Keys2["Digit8"] = "Digit8";
    Keys2["Digit9"] = "Digit9";
    Keys2["F1"] = "F1";
    Keys2["F2"] = "F2";
    Keys2["F3"] = "F3";
    Keys2["F4"] = "F4";
    Keys2["F5"] = "F5";
    Keys2["F6"] = "F6";
    Keys2["F7"] = "F7";
    Keys2["F8"] = "F8";
    Keys2["F9"] = "F9";
    Keys2["F10"] = "F10";
    Keys2["F11"] = "F11";
    Keys2["F12"] = "F12";
    Keys2["A"] = "KeyA";
    Keys2["B"] = "KeyB";
    Keys2["C"] = "KeyC";
    Keys2["D"] = "KeyD";
    Keys2["E"] = "KeyE";
    Keys2["F"] = "KeyF";
    Keys2["G"] = "KeyG";
    Keys2["H"] = "KeyH";
    Keys2["I"] = "KeyI";
    Keys2["J"] = "KeyJ";
    Keys2["K"] = "KeyK";
    Keys2["L"] = "KeyL";
    Keys2["M"] = "KeyM";
    Keys2["N"] = "KeyN";
    Keys2["O"] = "KeyO";
    Keys2["P"] = "KeyP";
    Keys2["Q"] = "KeyQ";
    Keys2["R"] = "KeyR";
    Keys2["S"] = "KeyS";
    Keys2["T"] = "KeyT";
    Keys2["U"] = "KeyU";
    Keys2["V"] = "KeyV";
    Keys2["W"] = "KeyW";
    Keys2["X"] = "KeyX";
    Keys2["Y"] = "KeyY";
    Keys2["Z"] = "KeyZ";
    Keys2["KeyA"] = "KeyA";
    Keys2["KeyB"] = "KeyB";
    Keys2["KeyC"] = "KeyC";
    Keys2["KeyD"] = "KeyD";
    Keys2["KeyE"] = "KeyE";
    Keys2["KeyF"] = "KeyF";
    Keys2["KeyG"] = "KeyG";
    Keys2["KeyH"] = "KeyH";
    Keys2["KeyI"] = "KeyI";
    Keys2["KeyJ"] = "KeyJ";
    Keys2["KeyK"] = "KeyK";
    Keys2["KeyL"] = "KeyL";
    Keys2["KeyM"] = "KeyM";
    Keys2["KeyN"] = "KeyN";
    Keys2["KeyO"] = "KeyO";
    Keys2["KeyP"] = "KeyP";
    Keys2["KeyQ"] = "KeyQ";
    Keys2["KeyR"] = "KeyR";
    Keys2["KeyS"] = "KeyS";
    Keys2["KeyT"] = "KeyT";
    Keys2["KeyU"] = "KeyU";
    Keys2["KeyV"] = "KeyV";
    Keys2["KeyW"] = "KeyW";
    Keys2["KeyX"] = "KeyX";
    Keys2["KeyY"] = "KeyY";
    Keys2["KeyZ"] = "KeyZ";
    Keys2["Semicolon"] = "Semicolon";
    Keys2["Quote"] = "Quote";
    Keys2["Comma"] = "Comma";
    Keys2["Minus"] = "Minus";
    Keys2["Period"] = "Period";
    Keys2["Slash"] = "Slash";
    Keys2["Equal"] = "Equal";
    Keys2["BracketLeft"] = "BracketLeft";
    Keys2["Backslash"] = "Backslash";
    Keys2["BracketRight"] = "BracketRight";
    Keys2["Backquote"] = "Backquote";
    Keys2["Up"] = "ArrowUp";
    Keys2["Down"] = "ArrowDown";
    Keys2["Left"] = "ArrowLeft";
    Keys2["Right"] = "ArrowRight";
    Keys2["ArrowUp"] = "ArrowUp";
    Keys2["ArrowDown"] = "ArrowDown";
    Keys2["ArrowLeft"] = "ArrowLeft";
    Keys2["ArrowRight"] = "ArrowRight";
    Keys2["Space"] = "Space";
    Keys2["Backspace"] = "Backspace";
    Keys2["Delete"] = "Delete";
    Keys2["Esc"] = "Escape";
    Keys2["Escape"] = "Escape";
    Keys2["Enter"] = "Enter";
    Keys2["NumpadEnter"] = "NumpadEnter";
    Keys2["ContextMenu"] = "ContextMenu";
  })(Keys || (Keys = {}));

  class KeyEvent extends GameEvent {
    constructor(key, value, originalEvent) {
      super();
      this.key = key;
      this.value = value;
      this.originalEvent = originalEvent;
    }
  }
  const KeyEvents = {
    Press: "press",
    Hold: "hold",
    Release: "release"
  };

  class Keyboard {
    constructor() {
      this.events = new EventEmitter;
      this._enabled = true;
      this._keys = [];
      this._keysUp = [];
      this._keysDown = [];
      this._releaseAllKeys = (ev) => {
        for (const code of this._keys) {
          const keyEvent = new KeyEvent(code, ev.key, ev);
          this.events.emit("up", keyEvent);
          this.events.emit("release", keyEvent);
        }
        this._keysUp = Array.from(new Set(this._keys.concat(this._keysUp)));
        this._keys.length = 0;
      };
      this._handleKeyDown = (ev) => {
        if (!this._enabled) {
          return;
        }
        if (!ev.metaKey && (this._keys.includes(Keys.MetaLeft) || this._keys.includes(Keys.MetaRight))) {
          this._releaseAllKeys(ev);
        }
        const code = ev.code;
        if (this._keys.indexOf(code) === -1) {
          this._keys.push(code);
          this._keysDown.push(code);
          const keyEvent = new KeyEvent(code, ev.key, ev);
          this.events.emit("down", keyEvent);
          this.events.emit("press", keyEvent);
        }
      };
      this._handleKeyUp = (ev) => {
        if (!this._enabled) {
          return;
        }
        const code = ev.code;
        const key = this._keys.indexOf(code);
        this._keys.splice(key, 1);
        this._keysUp.push(code);
        const keyEvent = new KeyEvent(code, ev.key, ev);
        this.events.emit("up", keyEvent);
        this.events.emit("release", keyEvent);
        if (ev.key === "Meta") {
          this._releaseAllKeys(ev);
        }
      };
    }
    emit(eventName, event) {
      this.events.emit(eventName, event);
    }
    on(eventName, handler) {
      return this.events.on(eventName, handler);
    }
    once(eventName, handler) {
      return this.events.once(eventName, handler);
    }
    off(eventName, handler) {
      this.events.off(eventName, handler);
    }
    init(keyboardOptions) {
      let { global } = keyboardOptions;
      const { grabWindowFocus } = keyboardOptions;
      if (!global) {
        if (isCrossOriginIframe()) {
          global = window;
          if (grabWindowFocus) {
            window.focus();
          }
          Logger.getInstance().warn("Excalibur might be in a cross-origin iframe, in order to receive keyboard events it must be in focus");
        } else {
          global = window.top;
        }
      }
      global.addEventListener("blur", () => {
        this._keys.length = 0;
      });
      global.addEventListener("keyup", this._handleKeyUp);
      global.addEventListener("keydown", this._handleKeyDown);
    }
    toggleEnabled(enabled) {
      this._enabled = enabled;
    }
    update() {
      this._keysDown.length = 0;
      this._keysUp.length = 0;
      for (let i = 0;i < this._keys.length; i++) {
        this.events.emit("hold", new KeyEvent(this._keys[i]));
      }
    }
    getKeys() {
      return this._keys;
    }
    wasPressed(key) {
      return this._keysDown.indexOf(key) > -1;
    }
    isHeld(key) {
      return this._keys.indexOf(key) > -1;
    }
    wasReleased(key) {
      return this._keysUp.indexOf(key) > -1;
    }
    triggerEvent(type, key, character) {
      if (type === "down") {
        this._handleKeyDown(new KeyboardEvent("keydown", {
          code: key,
          key: character !== null && character !== undefined ? character : null
        }));
      }
      if (type === "up") {
        this._handleKeyUp(new KeyboardEvent("keyup", {
          code: key,
          key: character !== null && character !== undefined ? character : null
        }));
      }
    }
  }

  class GlobalCoordinates {
    static fromPagePosition(xOrPos, yOrEngine, engineOrUndefined) {
      let pageX;
      let pageY;
      let pagePos;
      let engine;
      if (arguments.length === 3) {
        pageX = xOrPos;
        pageY = yOrEngine;
        pagePos = new Vector(pageX, pageY);
        engine = engineOrUndefined;
      } else {
        pagePos = xOrPos;
        pageX = pagePos.x;
        pageY = pagePos.y;
        engine = yOrEngine;
      }
      const screenPos = engine.screen.pageToScreenCoordinates(pagePos);
      const worldPos = engine.screen.screenToWorldCoordinates(screenPos);
      return new GlobalCoordinates(worldPos, pagePos, screenPos);
    }
    constructor(worldPos, pagePos, screenPos) {
      this.worldPos = worldPos;
      this.pagePos = pagePos;
      this.screenPos = screenPos;
    }
  }

  class PointerEvent {
    cancel() {
      this.active = false;
    }
    get pagePos() {
      return this.coordinates.pagePos;
    }
    get screenPos() {
      return this.coordinates.screenPos;
    }
    get worldPos() {
      return this.coordinates.worldPos;
    }
    constructor(type, pointerId, button, pointerType, coordinates, nativeEvent) {
      this.type = type;
      this.pointerId = pointerId;
      this.button = button;
      this.pointerType = pointerType;
      this.coordinates = coordinates;
      this.nativeEvent = nativeEvent;
      this.active = true;
    }
  }

  class WheelEvent {
    cancel() {
      this.active = false;
    }
    constructor(x, y, pageX, pageY, screenX, screenY, index, deltaX, deltaY, deltaZ, deltaMode, ev) {
      this.x = x;
      this.y = y;
      this.pageX = pageX;
      this.pageY = pageY;
      this.screenX = screenX;
      this.screenY = screenY;
      this.index = index;
      this.deltaX = deltaX;
      this.deltaY = deltaY;
      this.deltaZ = deltaZ;
      this.deltaMode = deltaMode;
      this.ev = ev;
      this.active = true;
    }
  }

  class PointerAbstraction {
    constructor() {
      this.events = new EventEmitter;
      this.lastPagePos = Vector.Zero;
      this.lastScreenPos = Vector.Zero;
      this.lastWorldPos = Vector.Zero;
      this._onPointerMove = (ev) => {
        this.lastPagePos = new Vector(ev.pagePos.x, ev.pagePos.y);
        this.lastScreenPos = new Vector(ev.screenPos.x, ev.screenPos.y);
        this.lastWorldPos = new Vector(ev.worldPos.x, ev.worldPos.y);
      };
      this._onPointerDown = (ev) => {
        this.lastPagePos = new Vector(ev.pagePos.x, ev.pagePos.y);
        this.lastScreenPos = new Vector(ev.screenPos.x, ev.screenPos.y);
        this.lastWorldPos = new Vector(ev.worldPos.x, ev.worldPos.y);
      };
      this.on("move", this._onPointerMove);
      this.on("down", this._onPointerDown);
    }
    emit(eventName, event) {
      this.events.emit(eventName, event);
    }
    on(eventName, handler) {
      return this.events.on(eventName, handler);
    }
    once(eventName, handler) {
      return this.events.once(eventName, handler);
    }
    off(eventName, handler) {
      this.events.off(eventName, handler);
    }
  }
  var WheelDeltaMode;
  (function(WheelDeltaMode2) {
    WheelDeltaMode2["Pixel"] = "Pixel";
    WheelDeltaMode2["Line"] = "Line";
    WheelDeltaMode2["Page"] = "Page";
  })(WheelDeltaMode || (WheelDeltaMode = {}));
  var NativePointerButton;
  (function(NativePointerButton2) {
    NativePointerButton2[NativePointerButton2["NoButton"] = -1] = "NoButton";
    NativePointerButton2[NativePointerButton2["Left"] = 0] = "Left";
    NativePointerButton2[NativePointerButton2["Middle"] = 1] = "Middle";
    NativePointerButton2[NativePointerButton2["Right"] = 2] = "Right";
    NativePointerButton2[NativePointerButton2["Unknown"] = 3] = "Unknown";
  })(NativePointerButton || (NativePointerButton = {}));
  var PointerButton;
  (function(PointerButton2) {
    PointerButton2["Left"] = "Left";
    PointerButton2["Middle"] = "Middle";
    PointerButton2["Right"] = "Right";
    PointerButton2["Unknown"] = "Unknown";
    PointerButton2["NoButton"] = "NoButton";
  })(PointerButton || (PointerButton = {}));
  var PointerType;
  (function(PointerType2) {
    PointerType2["Touch"] = "Touch";
    PointerType2["Mouse"] = "Mouse";
    PointerType2["Pen"] = "Pen";
    PointerType2["Unknown"] = "Unknown";
  })(PointerType || (PointerType = {}));
  const PointerEvents = {
    Move: "move",
    Down: "down",
    Up: "up",
    Wheel: "wheel"
  };
  function isTouchEvent(value) {
    return globalThis.TouchEvent && value instanceof globalThis.TouchEvent;
  }
  function isPointerEvent(value) {
    return globalThis.PointerEvent && value instanceof globalThis.PointerEvent;
  }

  class PointerEventReceiver {
    constructor(target, engine) {
      this.target = target;
      this.engine = engine;
      this.events = new EventEmitter;
      this.primary = new PointerAbstraction;
      this._activeNativePointerIdsToNormalized = new Map;
      this.lastFramePointerCoords = new Map;
      this.currentFramePointerCoords = new Map;
      this.currentFramePointerDown = new Map;
      this.lastFramePointerDown = new Map;
      this.currentFrameDown = [];
      this.currentFrameUp = [];
      this.currentFrameMove = [];
      this.currentFrameCancel = [];
      this.currentFrameWheel = [];
      this._enabled = true;
      this._pointers = [this.primary];
      this._boundHandle = this._handle.bind(this);
      this._boundWheel = this._handleWheel.bind(this);
    }
    toggleEnabled(enabled) {
      this._enabled = enabled;
    }
    recreate(target, engine) {
      const eventReceiver = new PointerEventReceiver(target, engine);
      eventReceiver.primary = this.primary;
      eventReceiver._pointers = this._pointers;
      return eventReceiver;
    }
    at(index) {
      if (index >= this._pointers.length) {
        for (let i = this._pointers.length - 1, max = index;i < max; i++) {
          this._pointers.push(new PointerAbstraction);
        }
      }
      return this._pointers[index];
    }
    count() {
      return this._pointers.length;
    }
    isDown(pointerId) {
      var _a;
      return (_a = this.currentFramePointerDown.get(pointerId)) !== null && _a !== undefined ? _a : false;
    }
    wasDown(pointerId) {
      var _a;
      return (_a = this.lastFramePointerDown.get(pointerId)) !== null && _a !== undefined ? _a : false;
    }
    isDragging(pointerId) {
      return this.isDown(pointerId);
    }
    isDragStart(pointerId) {
      return this.isDown(pointerId) && !this.wasDown(pointerId);
    }
    isDragEnd(pointerId) {
      return !this.isDown(pointerId) && this.wasDown(pointerId);
    }
    emit(eventName, event) {
      this.events.emit(eventName, event);
    }
    on(eventName, handler) {
      return this.events.on(eventName, handler);
    }
    once(eventName, handler) {
      return this.events.once(eventName, handler);
    }
    off(eventName, handler) {
      this.events.off(eventName, handler);
    }
    update() {
      this.lastFramePointerDown = new Map(this.currentFramePointerDown);
      this.lastFramePointerCoords = new Map(this.currentFramePointerCoords);
      for (const event of this.currentFrameDown) {
        this.emit("down", event);
        const pointer = this.at(event.pointerId);
        pointer.emit("down", event);
        this.primary.emit("pointerdown", event);
      }
      for (const event of this.currentFrameUp) {
        this.emit("up", event);
        const pointer = this.at(event.pointerId);
        pointer.emit("up", event);
      }
      for (const event of this.currentFrameMove) {
        this.emit("move", event);
        const pointer = this.at(event.pointerId);
        pointer.emit("move", event);
      }
      for (const event of this.currentFrameCancel) {
        this.emit("cancel", event);
        const pointer = this.at(event.pointerId);
        pointer.emit("cancel", event);
      }
      for (const event of this.currentFrameWheel) {
        this.emit("wheel", event);
        this.primary.emit("pointerwheel", event);
        this.primary.emit("wheel", event);
      }
    }
    clear() {
      for (const event of this.currentFrameUp) {
        this.currentFramePointerCoords.delete(event.pointerId);
        const ids = this._activeNativePointerIdsToNormalized.entries();
        for (const [native, normalized] of ids) {
          if (normalized === event.pointerId) {
            this._activeNativePointerIdsToNormalized.delete(native);
          }
        }
      }
      this.currentFrameDown.length = 0;
      this.currentFrameUp.length = 0;
      this.currentFrameMove.length = 0;
      this.currentFrameCancel.length = 0;
      this.currentFrameWheel.length = 0;
    }
    init(options) {
      var _a;
      if (this.target === this.engine.canvas) {
        this.engine.canvas.style.touchAction = "none";
      } else {
        document.body.style.touchAction = "none";
      }
      if (window.PointerEvent) {
        this.target.addEventListener("pointerdown", this._boundHandle);
        this.target.addEventListener("pointerup", this._boundHandle);
        this.target.addEventListener("pointermove", this._boundHandle);
        this.target.addEventListener("pointercancel", this._boundHandle);
      } else {
        this.target.addEventListener("touchstart", this._boundHandle);
        this.target.addEventListener("touchend", this._boundHandle);
        this.target.addEventListener("touchmove", this._boundHandle);
        this.target.addEventListener("touchcancel", this._boundHandle);
        this.target.addEventListener("mousedown", this._boundHandle);
        this.target.addEventListener("mouseup", this._boundHandle);
        this.target.addEventListener("mousemove", this._boundHandle);
      }
      const wheelOptions = {
        passive: !(this.engine.pageScrollPreventionMode === ScrollPreventionMode.All || this.engine.pageScrollPreventionMode === ScrollPreventionMode.Canvas)
      };
      if ("onwheel" in document.createElement("div")) {
        this.target.addEventListener("wheel", this._boundWheel, wheelOptions);
      } else if (document.onmousewheel !== undefined) {
        this.target.addEventListener("mousewheel", this._boundWheel, wheelOptions);
      } else {
        this.target.addEventListener("MozMousePixelScroll", this._boundWheel, wheelOptions);
      }
      const grabWindowFocus = (_a = options === null || options === undefined ? undefined : options.grabWindowFocus) !== null && _a !== undefined ? _a : true;
      if (grabWindowFocus && isCrossOriginIframe()) {
        const grabFocus = () => {
          window.focus();
        };
        if (window.PointerEvent) {
          this.target.addEventListener("pointerdown", grabFocus);
        } else {
          this.target.addEventListener("touchstart", grabFocus);
          this.target.addEventListener("mousedown", grabFocus);
        }
      }
    }
    detach() {
      if (window.PointerEvent) {
        this.target.removeEventListener("pointerdown", this._boundHandle);
        this.target.removeEventListener("pointerup", this._boundHandle);
        this.target.removeEventListener("pointermove", this._boundHandle);
        this.target.removeEventListener("pointercancel", this._boundHandle);
      } else {
        this.target.removeEventListener("touchstart", this._boundHandle);
        this.target.removeEventListener("touchend", this._boundHandle);
        this.target.removeEventListener("touchmove", this._boundHandle);
        this.target.removeEventListener("touchcancel", this._boundHandle);
        this.target.removeEventListener("mousedown", this._boundHandle);
        this.target.removeEventListener("mouseup", this._boundHandle);
        this.target.removeEventListener("mousemove", this._boundHandle);
      }
      if ("onwheel" in document.createElement("div")) {
        this.target.removeEventListener("wheel", this._boundWheel);
      } else if (document.onmousewheel !== undefined) {
        this.target.addEventListener("mousewheel", this._boundWheel);
      } else {
        this.target.addEventListener("MozMousePixelScroll", this._boundWheel);
      }
    }
    _normalizePointerId(nativePointerId) {
      this._activeNativePointerIdsToNormalized.set(nativePointerId, -1);
      const currentPointerIds = Array.from(this._activeNativePointerIdsToNormalized.keys()).sort((a, b) => a - b);
      const id = currentPointerIds.findIndex((p) => p === nativePointerId);
      this._activeNativePointerIdsToNormalized.set(nativePointerId, id);
      return id;
    }
    _handle(ev) {
      if (!this._enabled) {
        return;
      }
      ev.preventDefault();
      const eventCoords = new Map;
      let button;
      let pointerType;
      if (isTouchEvent(ev)) {
        button = PointerButton.Unknown;
        pointerType = PointerType.Touch;
        for (let i = 0;i < ev.changedTouches.length; i++) {
          const touch = ev.changedTouches[i];
          const coordinates = GlobalCoordinates.fromPagePosition(touch.pageX, touch.pageY, this.engine);
          const nativePointerId = i + 1;
          const pointerId = this._normalizePointerId(nativePointerId);
          this.currentFramePointerCoords.set(pointerId, coordinates);
          eventCoords.set(pointerId, coordinates);
        }
      } else {
        button = this._nativeButtonToPointerButton(ev.button);
        pointerType = PointerType.Mouse;
        const coordinates = GlobalCoordinates.fromPagePosition(ev.pageX, ev.pageY, this.engine);
        let nativePointerId = 1;
        if (isPointerEvent(ev)) {
          nativePointerId = ev.pointerId;
          pointerType = this._stringToPointerType(ev.pointerType);
        }
        const pointerId = this._normalizePointerId(nativePointerId);
        this.currentFramePointerCoords.set(pointerId, coordinates);
        eventCoords.set(pointerId, coordinates);
      }
      for (const [pointerId, coord] of eventCoords.entries()) {
        switch (ev.type) {
          case "mousedown":
          case "pointerdown":
          case "touchstart":
            this.currentFrameDown.push(new PointerEvent("down", pointerId, button, pointerType, coord, ev));
            this.currentFramePointerDown.set(pointerId, true);
            break;
          case "mouseup":
          case "pointerup":
          case "touchend":
            this.currentFrameUp.push(new PointerEvent("up", pointerId, button, pointerType, coord, ev));
            this.currentFramePointerDown.set(pointerId, false);
            break;
          case "mousemove":
          case "pointermove":
          case "touchmove":
            this.currentFrameMove.push(new PointerEvent("move", pointerId, button, pointerType, coord, ev));
            break;
          case "touchcancel":
          case "pointercancel":
            this.currentFrameCancel.push(new PointerEvent("cancel", pointerId, button, pointerType, coord, ev));
            break;
        }
      }
    }
    _handleWheel(ev) {
      if (!this._enabled) {
        return;
      }
      if (this.engine.pageScrollPreventionMode === ScrollPreventionMode.All || this.engine.pageScrollPreventionMode === ScrollPreventionMode.Canvas && ev.target === this.engine.canvas) {
        ev.preventDefault();
      }
      const screen = this.engine.screen.pageToScreenCoordinates(vec(ev.pageX, ev.pageY));
      const world = this.engine.screen.screenToWorldCoordinates(screen);
      const ScrollWheelNormalizationFactor = -1 / 40;
      const deltaX = ev.deltaX || ev.wheelDeltaX * ScrollWheelNormalizationFactor || 0;
      const deltaY = ev.deltaY || ev.wheelDeltaY * ScrollWheelNormalizationFactor || ev.wheelDelta * ScrollWheelNormalizationFactor || ev.detail || 0;
      const deltaZ = ev.deltaZ || 0;
      let deltaMode = WheelDeltaMode.Pixel;
      if (ev.deltaMode) {
        if (ev.deltaMode === 1) {
          deltaMode = WheelDeltaMode.Line;
        } else if (ev.deltaMode === 2) {
          deltaMode = WheelDeltaMode.Page;
        }
      }
      const we = new WheelEvent(world.x, world.y, ev.pageX, ev.pageY, screen.x, screen.y, 0, deltaX, deltaY, deltaZ, deltaMode, ev);
      this.currentFrameWheel.push(we);
    }
    triggerEvent(type, pos) {
      const page = this.engine.screen.worldToPageCoordinates(pos);
      if (window.PointerEvent) {
        this._handle(new window.PointerEvent("pointer" + type, {
          pointerId: 0,
          clientX: page.x,
          clientY: page.y
        }));
      } else {
        this._handle(new window.MouseEvent("mouse" + type, {
          clientX: page.x,
          clientY: page.y
        }));
      }
      const pointerSystem = this.engine.currentScene.world.systemManager.get(PointerSystem);
      const transformEntities = this.engine.currentScene.world.queryManager.createQuery(pointerSystem.types);
      pointerSystem.preupdate();
      pointerSystem.update(transformEntities.getEntities());
    }
    _nativeButtonToPointerButton(s) {
      switch (s) {
        case NativePointerButton.NoButton:
          return PointerButton.NoButton;
        case NativePointerButton.Left:
          return PointerButton.Left;
        case NativePointerButton.Middle:
          return PointerButton.Middle;
        case NativePointerButton.Right:
          return PointerButton.Right;
        case NativePointerButton.Unknown:
          return PointerButton.Unknown;
        default:
          return fail(s);
      }
    }
    _stringToPointerType(s) {
      switch (s) {
        case "touch":
          return PointerType.Touch;
        case "mouse":
          return PointerType.Mouse;
        case "pen":
          return PointerType.Pen;
        default:
          return PointerType.Unknown;
      }
    }
  }

  class InputHost {
    constructor(options) {
      this._enabled = true;
      const { pointerTarget, grabWindowFocus, engine } = options;
      this.keyboard = new Keyboard;
      this.pointers = new PointerEventReceiver(pointerTarget, engine);
      this.gamepads = new Gamepads;
      this.keyboard.init({ grabWindowFocus });
      this.pointers.init({ grabWindowFocus });
      this.gamepads.init();
      this.inputMapper = new InputMapper({
        keyboard: this.keyboard,
        pointers: this.pointers,
        gamepads: this.gamepads
      });
    }
    toggleEnabled(enabled) {
      this._enabled = enabled;
      this.keyboard.toggleEnabled(this._enabled);
      this.pointers.toggleEnabled(this._enabled);
      this.gamepads.toggleEnabled(this._enabled);
    }
    update() {
      if (this._enabled) {
        this.inputMapper.execute();
        this.keyboard.update();
        this.gamepads.update();
      }
    }
  }
  var __decorate = function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1;i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  polyfill();
  const EngineEvents = {
    FallbackGraphicsContext: "fallbackgraphicscontext",
    Initialize: "initialize",
    Visible: "visible",
    Hidden: "hidden",
    Start: "start",
    Stop: "stop",
    PreUpdate: "preupdate",
    PostUpdate: "postupdate",
    PreFrame: "preframe",
    PostFrame: "postframe",
    PreDraw: "predraw",
    PostDraw: "postdraw"
  };
  var ScrollPreventionMode;
  (function(ScrollPreventionMode2) {
    ScrollPreventionMode2[ScrollPreventionMode2["None"] = 0] = "None";
    ScrollPreventionMode2[ScrollPreventionMode2["Canvas"] = 1] = "Canvas";
    ScrollPreventionMode2[ScrollPreventionMode2["All"] = 2] = "All";
  })(ScrollPreventionMode || (ScrollPreventionMode = {}));

  class Engine {
    get canvasWidth() {
      return this.screen.canvasWidth;
    }
    get halfCanvasWidth() {
      return this.screen.halfCanvasWidth;
    }
    get canvasHeight() {
      return this.screen.canvasHeight;
    }
    get halfCanvasHeight() {
      return this.screen.halfCanvasHeight;
    }
    get drawWidth() {
      return this.screen.drawWidth;
    }
    get halfDrawWidth() {
      return this.screen.halfDrawWidth;
    }
    get drawHeight() {
      return this.screen.drawHeight;
    }
    get halfDrawHeight() {
      return this.screen.halfDrawHeight;
    }
    get isHiDpi() {
      return this.screen.isHiDpi;
    }
    get stats() {
      return this.debug.stats;
    }
    get currentScene() {
      return this.director.currentScene;
    }
    get rootScene() {
      return this.director.rootScene;
    }
    get scenes() {
      return this.director.scenes;
    }
    get isFullscreen() {
      return this.screen.isFullScreen;
    }
    get displayMode() {
      return this.screen.displayMode;
    }
    get pixelRatio() {
      return this.screen.pixelRatio;
    }
    get isDebug() {
      return this._isDebug;
    }
    get snapToPixel() {
      return this.graphicsContext.snapToPixel;
    }
    set snapToPixel(shouldSnapToPixel) {
      this.graphicsContext.snapToPixel = shouldSnapToPixel;
    }
    emit(eventName, event) {
      this.events.emit(eventName, event);
    }
    on(eventName, handler) {
      return this.events.on(eventName, handler);
    }
    once(eventName, handler) {
      return this.events.once(eventName, handler);
    }
    off(eventName, handler) {
      this.events.off(eventName, handler);
    }
    constructor(options) {
      var _a, _b, _c, _d, _e, _f;
      this.version = EX_VERSION;
      this.events = new EventEmitter;
      this.maxFps = Number.POSITIVE_INFINITY;
      this._inputEnabled = true;
      this._suppressPlayButton = false;
      this.pauseAudioWhenHidden = true;
      this._isDebug = false;
      this.enableCanvasTransparency = true;
      this.onFatalException = (e) => {
        Logger.getInstance().fatal(e, e.stack);
      };
      this._toaster = new Toaster;
      this._timescale = 1;
      this._isInitialized = false;
      this._originalOptions = {};
      this._performanceThresholdTriggered = false;
      this._fpsSamples = [];
      this._isLoading = false;
      this._hideLoader = false;
      this._isReadyFuture = new Future;
      this.currentFrameElapsedMs = 0;
      this.currentFrameLagMs = 0;
      this._lagMs = 0;
      this._screenShotRequests = [];
      options = { ...Engine._DEFAULT_ENGINE_OPTIONS, ...options };
      this._originalOptions = options;
      Flags.freeze();
      this.browser = new BrowserEvents(window, document);
      const detector = new Detector;
      if (!options.suppressMinimumBrowserFeatureDetection && !(this._compatible = detector.test())) {
        const message = document.createElement("div");
        message.innerText = "Sorry, your browser does not support all the features needed for Excalibur";
        document.body.appendChild(message);
        detector.failedTests.forEach(function(test) {
          const testMessage = document.createElement("div");
          testMessage.innerText = "Browser feature missing " + test;
          document.body.appendChild(testMessage);
        });
        if (options.canvasElementId) {
          const canvas = document.getElementById(options.canvasElementId);
          if (canvas) {
            canvas.parentElement.removeChild(canvas);
          }
        }
        return;
      } else {
        this._compatible = true;
      }
      if (console.log && !options.suppressConsoleBootMessage) {
        console.log(`%cPowered by Excalibur.js (v${EX_VERSION})`, "background: #176BAA; color: white; border-radius: 5px; padding: 15px; font-size: 1.5em; line-height: 80px;");
        console.log(`
      /| ________________
O|===|* >________________>
      \\|`);
        console.log("Visit", "http://excaliburjs.com", "for more information");
      }
      if (options.suppressPlayButton) {
        this._suppressPlayButton = true;
      }
      this._logger = Logger.getInstance();
      if (this._logger.defaultLevel === LogLevel.Debug) {
        detector.logBrowserFeatures();
      }
      this._logger.debug("Building engine...");
      this.canvasElementId = options.canvasElementId;
      if (options.canvasElementId) {
        this._logger.debug("Using Canvas element specified: " + options.canvasElementId);
        this.canvas = document.getElementById(options.canvasElementId);
      } else if (options.canvasElement) {
        this._logger.debug("Using Canvas element specified:", options.canvasElement);
        this.canvas = options.canvasElement;
      } else {
        this._logger.debug("Using generated canvas element");
        this.canvas = document.createElement("canvas");
      }
      let displayMode = (_a = options.displayMode) !== null && _a !== undefined ? _a : DisplayMode.Fixed;
      if (options.width && options.height || options.viewport) {
        if (options.displayMode === undefined) {
          displayMode = DisplayMode.Fixed;
        }
        this._logger.debug("Engine viewport is size " + options.width + " x " + options.height);
      } else if (!options.displayMode) {
        this._logger.debug("Engine viewport is fit");
        displayMode = DisplayMode.FitScreen;
      }
      this._originalDisplayMode = displayMode;
      let useCanvasGraphicsContext = Flags.isEnabled("use-canvas-context");
      if (!useCanvasGraphicsContext) {
        try {
          this.graphicsContext = new ExcaliburGraphicsContextWebGL({
            canvasElement: this.canvas,
            enableTransparency: this.enableCanvasTransparency,
            smoothing: options.antialiasing,
            backgroundColor: options.backgroundColor,
            snapToPixel: options.snapToPixel,
            useDrawSorting: options.useDrawSorting
          });
        } catch (e) {
          this._logger.warn(`Excalibur could not load webgl for some reason (${e.message}) and loaded a Canvas 2D fallback. ` + `Some features of Excalibur will not work in this mode. \n\nRead more about this issue at https://excaliburjs.com/docs/webgl`);
          useCanvasGraphicsContext = true;
        }
      }
      if (useCanvasGraphicsContext) {
        this.graphicsContext = new ExcaliburGraphicsContext2DCanvas({
          canvasElement: this.canvas,
          enableTransparency: this.enableCanvasTransparency,
          smoothing: options.antialiasing,
          backgroundColor: options.backgroundColor,
          snapToPixel: options.snapToPixel,
          useDrawSorting: options.useDrawSorting
        });
      }
      this.screen = new Screen({
        canvas: this.canvas,
        context: this.graphicsContext,
        antialiasing: (_b = options.antialiasing) !== null && _b !== undefined ? _b : true,
        browser: this.browser,
        viewport: (_c = options.viewport) !== null && _c !== undefined ? _c : options.width && options.height ? { width: options.width, height: options.height } : Resolution.SVGA,
        resolution: options.resolution,
        displayMode,
        pixelRatio: options.suppressHiDPIScaling ? 1 : (_d = options.pixelRatio) !== null && _d !== undefined ? _d : null
      });
      TextureLoader.filtering = options.antialiasing ? ImageFiltering.Blended : ImageFiltering.Pixel;
      if (options.backgroundColor) {
        this.backgroundColor = options.backgroundColor.clone();
      }
      this.maxFps = (_e = options.maxFps) !== null && _e !== undefined ? _e : this.maxFps;
      this.fixedUpdateFps = (_f = options.fixedUpdateFps) !== null && _f !== undefined ? _f : this.fixedUpdateFps;
      this.clock = new StandardClock({
        maxFps: this.maxFps,
        tick: this._mainloop.bind(this),
        onFatalException: (e) => this.onFatalException(e)
      });
      this.enableCanvasTransparency = options.enableCanvasTransparency;
      this.debug = new Debug(this);
      this.director = new Director(this, options.scenes);
      this._initialize(options);
      window.___EXCALIBUR_DEVTOOL = this;
    }
    _monitorPerformanceThresholdAndTriggerFallback() {
      const { allow } = this._originalOptions.configurePerformanceCanvas2DFallback;
      let { threshold, showPlayerMessage } = this._originalOptions.configurePerformanceCanvas2DFallback;
      if (threshold === undefined) {
        threshold = Engine._DEFAULT_ENGINE_OPTIONS.configurePerformanceCanvas2DFallback.threshold;
      }
      if (showPlayerMessage === undefined) {
        showPlayerMessage = Engine._DEFAULT_ENGINE_OPTIONS.configurePerformanceCanvas2DFallback.showPlayerMessage;
      }
      if (!Flags.isEnabled("use-canvas-context") && allow && this.ready && !this._performanceThresholdTriggered) {
        if (this._fpsSamples.length === threshold.numberOfFrames) {
          this._fpsSamples.splice(0, 1);
        }
        this._fpsSamples.push(this.clock.fpsSampler.fps);
        let total = 0;
        for (let i = 0;i < this._fpsSamples.length; i++) {
          total += this._fpsSamples[i];
        }
        const average = total / this._fpsSamples.length;
        if (this._fpsSamples.length === threshold.numberOfFrames) {
          if (average <= threshold.fps) {
            this._performanceThresholdTriggered = true;
            this._logger.warn(`Switching to browser 2D Canvas fallback due to performance. Some features of Excalibur will not work in this mode.\nthis might mean your browser doesn\'t have webgl enabled or hardware acceleration is unavailable.\n\nIf in Chrome:\n  * Visit Settings > Advanced > System, and ensure "Use Hardware Acceleration" is checked.\n  * Visit chrome://flags/#ignore-gpu-blocklist and ensure "Override software rendering list" is "enabled"\nIf in Firefox, visit about:config\n  * Ensure webgl.disabled = false\n  * Ensure webgl.force-enabled = true\n  * Ensure layers.acceleration.force-enabled = true\n\nRead more about this issue at https://excaliburjs.com/docs/performance`);
            if (showPlayerMessage) {
              this._toaster.toast("Excalibur is encountering performance issues. It\'s possible that your browser doesn\'t have hardware acceleration enabled. Visit [LINK] for more information and potential solutions.", "https://excaliburjs.com/docs/performance");
            }
            this.useCanvas2DFallback();
            this.emit("fallbackgraphicscontext", this.graphicsContext);
          }
        }
      }
    }
    useCanvas2DFallback() {
      var _a, _b, _c;
      const newCanvas = this.canvas.cloneNode(false);
      this.canvas.parentNode.replaceChild(newCanvas, this.canvas);
      this.canvas = newCanvas;
      const options = { ...this._originalOptions, antialiasing: this.getAntialiasing() };
      const displayMode = this._originalDisplayMode;
      this.graphicsContext = new ExcaliburGraphicsContext2DCanvas({
        canvasElement: this.canvas,
        enableTransparency: this.enableCanvasTransparency,
        smoothing: options.antialiasing,
        backgroundColor: options.backgroundColor,
        snapToPixel: options.snapToPixel,
        useDrawSorting: options.useDrawSorting
      });
      if (this.screen) {
        this.screen.dispose();
      }
      this.screen = new Screen({
        canvas: this.canvas,
        context: this.graphicsContext,
        antialiasing: (_a = options.antialiasing) !== null && _a !== undefined ? _a : true,
        browser: this.browser,
        viewport: (_b = options.viewport) !== null && _b !== undefined ? _b : options.width && options.height ? { width: options.width, height: options.height } : Resolution.SVGA,
        resolution: options.resolution,
        displayMode,
        pixelRatio: options.suppressHiDPIScaling ? 1 : (_c = options.pixelRatio) !== null && _c !== undefined ? _c : null
      });
      this.screen.setCurrentCamera(this.currentScene.camera);
      this.input.pointers.detach();
      const pointerTarget = options && options.pointerScope === PointerScope.Document ? document : this.canvas;
      this.input.pointers = this.input.pointers.recreate(pointerTarget, this);
      this.input.pointers.init();
    }
    getWorldBounds() {
      return this.screen.getWorldBounds();
    }
    get timescale() {
      return this._timescale;
    }
    set timescale(value) {
      if (value <= 0) {
        Logger.getInstance().error("Cannot set engine.timescale to a value of 0 or less than 0.");
        return;
      }
      this._timescale = value;
    }
    addTimer(timer) {
      return this.currentScene.addTimer(timer);
    }
    removeTimer(timer) {
      return this.currentScene.removeTimer(timer);
    }
    addScene(key, scene) {
      this.director.add(key, scene);
      return this;
    }
    removeScene(entity) {
      this.director.remove(entity);
    }
    add(entity) {
      if (arguments.length === 2) {
        this.director.add(arguments[0], arguments[1]);
        return;
      }
      const maybeDeferred = this.director.getDeferredScene();
      if (maybeDeferred instanceof Scene) {
        maybeDeferred.add(entity);
      } else {
        this.currentScene.add(entity);
      }
    }
    remove(entity) {
      if (entity instanceof Entity) {
        this.currentScene.remove(entity);
      }
      if (entity instanceof Scene || isSceneConstructor(entity)) {
        this.removeScene(entity);
      }
      if (typeof entity === "string") {
        this.removeScene(entity);
      }
    }
    async goto(destinationScene, options) {
      await this.director.goto(destinationScene, options);
    }
    async goToScene(key, data) {
      await this.director.swapScene(key, data);
    }
    screenToWorldCoordinates(point2) {
      return this.screen.screenToWorldCoordinates(point2);
    }
    worldToScreenCoordinates(point2) {
      return this.screen.worldToScreenCoordinates(point2);
    }
    _initialize(options) {
      var _a, _b;
      this.pageScrollPreventionMode = options.scrollPreventionMode;
      const pointerTarget = options && options.pointerScope === PointerScope.Document ? document : this.canvas;
      const grabWindowFocus = (_b = (_a = this._originalOptions) === null || _a === undefined ? undefined : _a.grabWindowFocus) !== null && _b !== undefined ? _b : true;
      this.input = new InputHost({
        pointerTarget,
        grabWindowFocus,
        engine: this
      });
      this.inputMapper = this.input.inputMapper;
      this.browser.document.on("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          this.events.emit("hidden", new HiddenEvent(this));
          this._logger.debug("Window hidden");
        } else if (document.visibilityState === "visible") {
          this.events.emit("visible", new VisibleEvent(this));
          this._logger.debug("Window visible");
        }
      });
      if (!this.canvasElementId && !options.canvasElement) {
        document.body.appendChild(this.canvas);
      }
    }
    toggleInputEnabled(enabled) {
      this._inputEnabled = enabled;
      this.input.toggleEnabled(this._inputEnabled);
    }
    onInitialize(engine) {
    }
    setAntialiasing(isSmooth) {
      this.screen.antialiasing = isSmooth;
    }
    getAntialiasing() {
      return this.screen.antialiasing;
    }
    get isInitialized() {
      return this._isInitialized;
    }
    async _overrideInitialize(engine) {
      if (!this.isInitialized) {
        await this.director.onInitialize();
        await this.onInitialize(engine);
        this.events.emit("initialize", new InitializeEvent(engine, this));
        this._isInitialized = true;
      }
    }
    _update(delta) {
      var _a;
      this.director.update();
      if (this._isLoading) {
        (_a = this._loader) === null || _a === undefined || _a.onUpdate(this, delta);
        this.input.update();
        return;
      }
      this._preupdate(delta);
      this.currentScene.update(this, delta);
      this.graphicsContext.updatePostProcessors(delta);
      this._postupdate(delta);
      this.input.update();
    }
    _preupdate(delta) {
      this.emit("preupdate", new PreUpdateEvent(this, delta, this));
      this.onPreUpdate(this, delta);
    }
    onPreUpdate(engine, delta) {
    }
    _postupdate(delta) {
      this.emit("postupdate", new PostUpdateEvent(this, delta, this));
      this.onPostUpdate(this, delta);
    }
    onPostUpdate(engine, delta) {
    }
    _draw(delta) {
      var _a, _b;
      this.graphicsContext.beginDrawLifecycle();
      this.graphicsContext.clear();
      this._predraw(this.graphicsContext, delta);
      if (this._isLoading) {
        if (!this._hideLoader) {
          (_a = this._loader) === null || _a === undefined || _a.canvas.draw(this.graphicsContext, 0, 0);
          this.graphicsContext.flush();
          this.graphicsContext.endDrawLifecycle();
        }
        return;
      }
      this.graphicsContext.backgroundColor = (_b = this.currentScene.backgroundColor) !== null && _b !== undefined ? _b : this.backgroundColor;
      this.currentScene.draw(this.graphicsContext, delta);
      this._postdraw(this.graphicsContext, delta);
      this.graphicsContext.flush();
      this.graphicsContext.endDrawLifecycle();
      this._checkForScreenShots();
    }
    _predraw(ctx, delta) {
      this.emit("predraw", new PreDrawEvent(ctx, delta, this));
      this.onPreDraw(ctx, delta);
    }
    onPreDraw(ctx, delta) {
    }
    _postdraw(ctx, delta) {
      this.emit("postdraw", new PostDrawEvent(ctx, delta, this));
      this.onPostDraw(ctx, delta);
    }
    onPostDraw(ctx, delta) {
    }
    showDebug(toggle) {
      this._isDebug = toggle;
    }
    toggleDebug() {
      this._isDebug = !this._isDebug;
      return this._isDebug;
    }
    get loadingComplete() {
      return !this._isLoading;
    }
    get ready() {
      return this._isReadyFuture.isCompleted;
    }
    isReady() {
      return this._isReadyFuture.promise;
    }
    async start(sceneNameOrLoader, options) {
      if (!this._compatible) {
        throw new Error("Excalibur is incompatible with your browser");
      }
      this._isLoading = true;
      let loader;
      if (sceneNameOrLoader instanceof DefaultLoader) {
        loader = sceneNameOrLoader;
      } else if (typeof sceneNameOrLoader === "string") {
        this.director.configureStart(sceneNameOrLoader, options);
        loader = this.director.mainLoader;
      }
      this._logger.debug("Starting game clock...");
      this.browser.resume();
      this.clock.start();
      this._logger.debug("Game clock started");
      await this.load(loader !== null && loader !== undefined ? loader : new Loader);
      await this._overrideInitialize(this);
      this._isReadyFuture.resolve();
      this.emit("start", new GameStartEvent(this));
      return this._isReadyFuture.promise;
    }
    _mainloop(elapsed) {
      this.emit("preframe", new PreFrameEvent(this, this.stats.prevFrame));
      const delta = elapsed * this.timescale;
      this.currentFrameElapsedMs = delta;
      const frameId = this.stats.prevFrame.id + 1;
      this.stats.currFrame.reset();
      this.stats.currFrame.id = frameId;
      this.stats.currFrame.delta = delta;
      this.stats.currFrame.fps = this.clock.fpsSampler.fps;
      GraphicsDiagnostics.clear();
      const beforeUpdate = this.clock.now();
      const fixedTimestepMs = 1000 / this.fixedUpdateFps;
      if (this.fixedUpdateFps) {
        this._lagMs += delta;
        while (this._lagMs >= fixedTimestepMs) {
          this._update(fixedTimestepMs);
          this._lagMs -= fixedTimestepMs;
        }
      } else {
        this._update(delta);
      }
      const afterUpdate = this.clock.now();
      this.currentFrameLagMs = this._lagMs;
      this._draw(delta);
      const afterDraw = this.clock.now();
      this.stats.currFrame.duration.update = afterUpdate - beforeUpdate;
      this.stats.currFrame.duration.draw = afterDraw - afterUpdate;
      this.stats.currFrame.graphics.drawnImages = GraphicsDiagnostics.DrawnImagesCount;
      this.stats.currFrame.graphics.drawCalls = GraphicsDiagnostics.DrawCallCount;
      this.emit("postframe", new PostFrameEvent(this, this.stats.currFrame));
      this.stats.prevFrame.reset(this.stats.currFrame);
      this._monitorPerformanceThresholdAndTriggerFallback();
    }
    stop() {
      if (this.clock.isRunning()) {
        this.emit("stop", new GameStopEvent(this));
        this.browser.pause();
        this.clock.stop();
        this._logger.debug("Game stopped");
      }
    }
    isRunning() {
      return this.clock.isRunning();
    }
    screenshot(preserveHiDPIResolution = false) {
      const screenShotPromise = new Promise((resolve) => {
        this._screenShotRequests.push({ preserveHiDPIResolution, resolve });
      });
      return screenShotPromise;
    }
    _checkForScreenShots() {
      for (const request of this._screenShotRequests) {
        const finalWidth = request.preserveHiDPIResolution ? this.canvas.width : this.screen.resolution.width;
        const finalHeight = request.preserveHiDPIResolution ? this.canvas.height : this.screen.resolution.height;
        const screenshot = document.createElement("canvas");
        screenshot.width = finalWidth;
        screenshot.height = finalHeight;
        const ctx = screenshot.getContext("2d");
        ctx.imageSmoothingEnabled = this.screen.antialiasing;
        ctx.drawImage(this.canvas, 0, 0, finalWidth, finalHeight);
        const result = new Image;
        const raw = screenshot.toDataURL("image/png");
        result.src = raw;
        request.resolve(result);
      }
      this._screenShotRequests.length = 0;
    }
    async load(loader, hideLoader = false) {
      try {
        if (loader.isLoaded()) {
          return;
        }
        this._loader = loader;
        this._isLoading = true;
        this._hideLoader = hideLoader;
        if (loader instanceof Loader) {
          loader.suppressPlayButton = this._suppressPlayButton;
        }
        this._loader.onInitialize(this);
        await loader.load();
      } catch (e) {
        this._logger.error("Error loading resources, things may not behave properly", e);
        await Promise.resolve();
      } finally {
        this._isLoading = false;
        this._hideLoader = false;
        this._loader = null;
      }
    }
  }
  Engine._DEFAULT_ENGINE_OPTIONS = {
    width: 0,
    height: 0,
    enableCanvasTransparency: true,
    useDrawSorting: true,
    configurePerformanceCanvas2DFallback: {
      allow: false,
      showPlayerMessage: false,
      threshold: { fps: 20, numberOfFrames: 100 }
    },
    canvasElementId: "",
    canvasElement: undefined,
    snapToPixel: false,
    pointerScope: PointerScope.Canvas,
    suppressConsoleBootMessage: null,
    suppressMinimumBrowserFeatureDetection: null,
    suppressHiDPIScaling: null,
    suppressPlayButton: null,
    grabWindowFocus: true,
    scrollPreventionMode: ScrollPreventionMode.Canvas,
    backgroundColor: Color.fromHex("#2185d0")
  };
  __decorate([
    obsolete({ message: "Engine.goToScene is deprecated, will be removed in v1", alternateMethod: "Engine.goto" })
  ], Engine.prototype, "goToScene", null);

  class EventDispatcher {
    constructor() {
      this._handlers = {};
      this._wiredEventDispatchers = [];
      this._deferedHandlerRemovals = [];
    }
    clear() {
      this._handlers = {};
      this._wiredEventDispatchers = [];
    }
    _processDeferredHandlerRemovals() {
      for (const eventHandler of this._deferedHandlerRemovals) {
        this._removeHandler(eventHandler.name, eventHandler.handler);
      }
      this._deferedHandlerRemovals.length = 0;
    }
    emit(eventName, event) {
      this._processDeferredHandlerRemovals();
      if (!eventName) {
        return;
      }
      eventName = eventName.toLowerCase();
      if (typeof event === "undefined" || event === null) {
        event = new GameEvent;
      }
      let i, len;
      if (this._handlers[eventName]) {
        i = 0;
        len = this._handlers[eventName].length;
        for (i;i < len; i++) {
          this._handlers[eventName][i](event);
        }
      }
      i = 0;
      len = this._wiredEventDispatchers.length;
      for (i;i < len; i++) {
        this._wiredEventDispatchers[i].emit(eventName, event);
      }
    }
    on(eventName, handler) {
      this._processDeferredHandlerRemovals();
      eventName = eventName.toLowerCase();
      if (!this._handlers[eventName]) {
        this._handlers[eventName] = [];
      }
      this._handlers[eventName].push(handler);
    }
    off(eventName, handler) {
      this._deferedHandlerRemovals.push({ name: eventName, handler });
    }
    _removeHandler(eventName, handler) {
      eventName = eventName.toLowerCase();
      const eventHandlers = this._handlers[eventName];
      if (eventHandlers) {
        if (!handler) {
          this._handlers[eventName].length = 0;
        } else {
          const index = eventHandlers.indexOf(handler);
          if (index > -1) {
            this._handlers[eventName].splice(index, 1);
          }
        }
      }
    }
    once(eventName, handler) {
      this._processDeferredHandlerRemovals();
      const metaHandler = (event) => {
        const ev = event || new GameEvent;
        this.off(eventName, metaHandler);
        handler(ev);
      };
      this.on(eventName, metaHandler);
    }
    wire(eventDispatcher) {
      eventDispatcher._wiredEventDispatchers.push(this);
    }
    unwire(eventDispatcher) {
      const index = eventDispatcher._wiredEventDispatchers.indexOf(this);
      if (index > -1) {
        eventDispatcher._wiredEventDispatchers.splice(index, 1);
      }
    }
  }

  class Label extends Actor {
    get font() {
      return this._font;
    }
    set font(newFont) {
      this._font = newFont;
      this._text.font = newFont;
    }
    get text() {
      return this._text.text;
    }
    set text(text) {
      this._text.text = text;
    }
    get color() {
      return this._text.color;
    }
    set color(color) {
      if (this._text) {
        this._text.color = color;
      }
    }
    get opacity() {
      return this._text.opacity;
    }
    set opacity(opacity) {
      this._text.opacity = opacity;
    }
    get spriteFont() {
      return this._spriteFont;
    }
    set spriteFont(sf) {
      if (sf) {
        this._spriteFont = sf;
        this._text.font = this._spriteFont;
      }
    }
    constructor(options) {
      super(options);
      this._font = new Font;
      this._text = new Text({ text: "", font: this._font });
      const { text, pos, x, y, spriteFont, font, color } = options;
      this.pos = pos !== null && pos !== undefined ? pos : x && y ? vec(x, y) : this.pos;
      this.text = text !== null && text !== undefined ? text : this.text;
      this.font = font !== null && font !== undefined ? font : this.font;
      this.spriteFont = spriteFont !== null && spriteFont !== undefined ? spriteFont : this.spriteFont;
      this._text.color = color !== null && color !== undefined ? color : this.color;
      const gfx = this.get(GraphicsComponent);
      gfx.anchor = Vector.Zero;
      gfx.use(this._text);
    }
    _initialize(engine) {
      super._initialize(engine);
    }
    getTextWidth() {
      return this._text.width;
    }
  }

  class IsometricTile extends Entity {
    getGraphics() {
      return this._graphics;
    }
    addGraphic(graphic, options) {
      this._graphics.push(graphic);
      this._gfx.visible = this.map.visible;
      this._gfx.opacity = this.map.opacity;
      if (options === null || options === undefined ? undefined : options.offset) {
        this._gfx.offset = options.offset;
      }
      this._gfx.localBounds = this._recalculateBounds();
    }
    _recalculateBounds() {
      let bounds = this._tileBounds.clone();
      for (const graphic of this._graphics) {
        const offset = vec(this.map.graphicsOffset.x - this.map.tileWidth / 2, this.map.graphicsOffset.y - (this.map.renderFromTopOfGraphic ? 0 : graphic.height - this.map.tileHeight));
        bounds = bounds.combine(graphic.localBounds.translate(offset));
      }
      return bounds;
    }
    removeGraphic(graphic) {
      const index = this._graphics.indexOf(graphic);
      if (index > -1) {
        this._graphics.splice(index, 1);
      }
      this._gfx.localBounds = this._recalculateBounds();
    }
    clearGraphics() {
      this._graphics.length = 0;
      this._gfx.visible = false;
      this._gfx.localBounds = this._recalculateBounds();
    }
    getColliders() {
      return this._colliders;
    }
    addCollider(collider) {
      this._colliders.push(collider);
      this.map.flagCollidersDirty();
    }
    removeCollider(collider) {
      const index = this._colliders.indexOf(collider);
      if (index > -1) {
        this._colliders.splice(index, 1);
      }
      this.map.flagCollidersDirty();
    }
    clearColliders() {
      this._colliders.length = 0;
      this.map.flagCollidersDirty();
    }
    get pos() {
      return this.map.tileToWorld(vec(this.x, this.y));
    }
    get center() {
      return this.pos.add(vec(0, this.map.tileHeight / 2));
    }
    constructor(x, y, graphicsOffset, map) {
      super([
        new TransformComponent,
        new GraphicsComponent({
          offset: graphicsOffset !== null && graphicsOffset !== undefined ? graphicsOffset : Vector.Zero,
          onPostDraw: (gfx, elapsed) => this.draw(gfx, elapsed)
        }),
        new IsometricEntityComponent(map)
      ]);
      this.solid = false;
      this._tileBounds = new BoundingBox;
      this._graphics = [];
      this._colliders = [];
      this.data = new Map;
      this.x = x;
      this.y = y;
      this.map = map;
      this._transform = this.get(TransformComponent);
      this._isometricEntityComponent = this.get(IsometricEntityComponent);
      const halfTileWidth = this.map.tileWidth / 2;
      const halfTileHeight = this.map.tileHeight / 2;
      const xPos = (this.x - this.y) * halfTileWidth;
      const yPos = (this.x + this.y) * halfTileHeight;
      this._transform.pos = vec(xPos, yPos);
      this._isometricEntityComponent.elevation = map.elevation;
      this._gfx = this.get(GraphicsComponent);
      this._gfx.visible = false;
      const totalWidth = this.map.tileWidth;
      const totalHeight = this.map.tileHeight;
      const offset = vec(0, this.map.renderFromTopOfGraphic ? totalHeight : 0);
      this._gfx.localBounds = this._tileBounds = new BoundingBox({
        left: -totalWidth / 2,
        top: -totalHeight,
        right: totalWidth / 2,
        bottom: totalHeight
      }).translate(offset);
    }
    draw(gfx, _elapsed) {
      const halfTileWidth = this.map.tileWidth / 2;
      gfx.save();
      gfx.translate(-halfTileWidth, 0);
      for (const graphic of this._graphics) {
        graphic.draw(gfx, this.map.graphicsOffset.x, this.map.graphicsOffset.y - (this.map.renderFromTopOfGraphic ? 0 : graphic.height - this.map.tileHeight));
      }
      gfx.restore();
    }
  }

  class IsometricMap extends Entity {
    constructor(options) {
      super([
        new TransformComponent,
        new BodyComponent({
          type: CollisionType.Fixed
        }),
        new ColliderComponent,
        new DebugGraphicsComponent((ctx, debugFlags) => this.debug(ctx, debugFlags), false)
      ], options.name);
      this.elevation = 0;
      this.visible = true;
      this.opacity = 1;
      this.renderFromTopOfGraphic = false;
      this.graphicsOffset = vec(0, 0);
      this._collidersDirty = false;
      this._originalOffsets = new WeakMap;
      const { pos, tileWidth, tileHeight, columns: width, rows: height, renderFromTopOfGraphic, graphicsOffset, elevation } = options;
      this.transform = this.get(TransformComponent);
      if (pos) {
        this.transform.pos = pos;
      }
      this.collider = this.get(ColliderComponent);
      if (this.collider) {
        this.collider.set(this._composite = new CompositeCollider([]));
      }
      this.renderFromTopOfGraphic = renderFromTopOfGraphic !== null && renderFromTopOfGraphic !== undefined ? renderFromTopOfGraphic : this.renderFromTopOfGraphic;
      this.graphicsOffset = graphicsOffset !== null && graphicsOffset !== undefined ? graphicsOffset : this.graphicsOffset;
      this.elevation = elevation !== null && elevation !== undefined ? elevation : this.elevation;
      this.tileWidth = tileWidth;
      this.tileHeight = tileHeight;
      this.columns = width;
      this.rows = height;
      this.tiles = new Array(width * height);
      for (let y = 0;y < height; y++) {
        for (let x = 0;x < width; x++) {
          const tile = new IsometricTile(x, y, this.graphicsOffset, this);
          this.tiles[x + y * width] = tile;
          this.addChild(tile);
        }
      }
    }
    update() {
      if (this._collidersDirty) {
        this.updateColliders();
        this._collidersDirty = false;
      }
    }
    flagCollidersDirty() {
      this._collidersDirty = true;
    }
    _getOrSetColliderOriginalOffset(collider) {
      if (!this._originalOffsets.has(collider)) {
        const originalOffset = collider.offset;
        this._originalOffsets.set(collider, originalOffset);
        return originalOffset;
      } else {
        return this._originalOffsets.get(collider);
      }
    }
    updateColliders() {
      this._composite.clearColliders();
      const pos = this.get(TransformComponent).pos;
      for (const tile of this.tiles) {
        if (tile.solid) {
          for (const collider of tile.getColliders()) {
            const originalOffset = this._getOrSetColliderOriginalOffset(collider);
            collider.offset = this.tileToWorld(vec(tile.x, tile.y)).sub(pos).add(originalOffset).sub(vec(this.tileWidth / 2, this.tileHeight));
            collider.owner = this;
            this._composite.addCollider(collider);
          }
        }
      }
      this.collider.update();
    }
    worldToTile(worldCoordinate) {
      worldCoordinate = worldCoordinate.sub(this.transform.globalPos);
      const halfTileWidth = this.tileWidth / 2;
      const halfTileHeight = this.tileHeight / 2;
      return vec(~~((worldCoordinate.x / halfTileWidth + worldCoordinate.y / halfTileHeight) / 2), ~~((worldCoordinate.y / halfTileHeight - worldCoordinate.x / halfTileWidth) / 2));
    }
    tileToWorld(tileCoordinate) {
      const halfTileWidth = this.tileWidth / 2;
      const halfTileHeight = this.tileHeight / 2;
      const xPos = (tileCoordinate.x - tileCoordinate.y) * halfTileWidth;
      const yPos = (tileCoordinate.x + tileCoordinate.y) * halfTileHeight;
      return vec(xPos, yPos).add(this.transform.pos);
    }
    getTile(x, y) {
      if (x < 0 || y < 0 || x >= this.columns || y >= this.rows) {
        return null;
      }
      return this.tiles[x + y * this.columns];
    }
    getTileByPoint(point2) {
      const tileCoord = this.worldToTile(point2);
      const tile = this.getTile(tileCoord.x, tileCoord.y);
      return tile;
    }
    _getMaxZIndex() {
      let maxZ = Number.NEGATIVE_INFINITY;
      for (const tile of this.tiles) {
        const currentZ = tile.get(TransformComponent).z;
        if (currentZ > maxZ) {
          maxZ = currentZ;
        }
      }
      return maxZ;
    }
    debug(gfx, debugFlags) {
      const { showAll, showPosition, positionColor, positionSize, showGrid, gridColor, gridWidth, showColliderGeometry } = debugFlags.isometric;
      const { geometryColor, geometryLineWidth, geometryPointSize } = debugFlags.collider;
      gfx.save();
      gfx.z = this._getMaxZIndex() + 0.5;
      if (showAll || showGrid) {
        for (let y = 0;y < this.rows + 1; y++) {
          const left = this.tileToWorld(vec(0, y));
          const right = this.tileToWorld(vec(this.columns, y));
          gfx.drawLine(left, right, gridColor, gridWidth);
        }
        for (let x = 0;x < this.columns + 1; x++) {
          const top = this.tileToWorld(vec(x, 0));
          const bottom = this.tileToWorld(vec(x, this.rows));
          gfx.drawLine(top, bottom, gridColor, gridWidth);
        }
      }
      if (showAll || showPosition) {
        for (const tile of this.tiles) {
          gfx.drawCircle(this.tileToWorld(vec(tile.x, tile.y)), positionSize, positionColor);
        }
      }
      if (showAll || showColliderGeometry) {
        for (const tile of this.tiles) {
          if (tile.solid) {
            for (const collider of tile.getColliders()) {
              collider.debug(gfx, geometryColor, { lineWidth: geometryLineWidth, pointSize: geometryPointSize });
            }
          }
        }
      }
      gfx.restore();
    }
  }

  class ActionSequence {
    constructor(entity, actionBuilder) {
      this._stopped = false;
      this._sequenceBuilder = actionBuilder;
      this._sequenceContext = new ActionContext(entity);
      this._actionQueue = this._sequenceContext.getQueue();
      this._sequenceBuilder(this._sequenceContext);
    }
    update(delta) {
      this._actionQueue.update(delta);
    }
    isComplete() {
      return this._stopped || this._actionQueue.isComplete();
    }
    stop() {
      this._stopped = true;
    }
    reset() {
      this._stopped = false;
      this._actionQueue.reset();
    }
    clone(entity) {
      return new ActionSequence(entity, this._sequenceBuilder);
    }
  }

  class ParallelActions {
    constructor(parallelActions) {
      this._actions = parallelActions;
    }
    update(delta) {
      for (let i = 0;i < this._actions.length; i++) {
        this._actions[i].update(delta);
      }
    }
    isComplete(entity) {
      return this._actions.every((a) => a.isComplete(entity));
    }
    reset() {
      this._actions.forEach((a) => a.reset());
    }
    stop() {
      this._actions.forEach((a) => a.stop());
    }
  }
  function has_initialize(a) {
    return !!a._initialize;
  }
  function hasOnInitialize(a) {
    return !!a.onInitialize;
  }
  function has_preupdate(a) {
    return !!a._preupdate;
  }
  function hasOnPreUpdate(a) {
    return !!a.onPreUpdate;
  }
  function has_postupdate(a) {
    return !!a.onPostUpdate;
  }
  function hasOnPostUpdate(a) {
    return !!a.onPostUpdate;
  }
  function hasPreDraw(a) {
    return !!a.onPreDraw;
  }
  function hasPostDraw(a) {
    return !!a.onPostDraw;
  }

  class Gif {
    constructor(path, color = Color.Magenta, bustCache = false) {
      this.path = path;
      this.color = color;
      this._stream = null;
      this._gif = null;
      this._textures = [];
      this._animation = null;
      this._transparentColor = null;
      this._resource = new Resource(path, "arraybuffer", bustCache);
      this._transparentColor = color;
    }
    get bustCache() {
      return this._resource.bustCache;
    }
    set bustCache(val) {
      this._resource.bustCache = val;
    }
    async load() {
      const arraybuffer = await this._resource.load();
      this._stream = new Stream(arraybuffer);
      this._gif = new ParseGif(this._stream, this._transparentColor);
      const images = this._gif.images.map((i) => new ImageSource(i.src, false));
      await Promise.all(images.map((t) => t.load()));
      return this.data = this._textures = images;
    }
    isLoaded() {
      return !!this.data;
    }
    toSprite(id = 0) {
      const sprite = this._textures[id].toSprite();
      return sprite;
    }
    toSpriteSheet() {
      const sprites = this._textures.map((image) => {
        return image.toSprite();
      });
      return new SpriteSheet({ sprites });
    }
    toAnimation(durationPerFrameMs) {
      const spriteSheet = this.toSpriteSheet();
      const length = spriteSheet.sprites.length;
      this._animation = Animation.fromSpriteSheet(spriteSheet, range(0, length), durationPerFrameMs);
      return this._animation;
    }
    get readCheckBytes() {
      return this._gif.checkBytes;
    }
  }
  const bitsToNum = (ba) => {
    return ba.reduce(function(s, n) {
      return s * 2 + n;
    }, 0);
  };
  const byteToBitArr = (bite) => {
    const a = [];
    for (let i = 7;i >= 0; i--) {
      a.push(!!(bite & 1 << i));
    }
    return a;
  };

  class Stream {
    constructor(dataArray) {
      this.data = null;
      this.len = 0;
      this.position = 0;
      this.readByte = () => {
        if (this.position >= this.data.byteLength) {
          throw new Error("Attempted to read past end of stream.");
        }
        return this.data[this.position++];
      };
      this.readBytes = (n) => {
        const bytes = [];
        for (let i = 0;i < n; i++) {
          bytes.push(this.readByte());
        }
        return bytes;
      };
      this.read = (n) => {
        let s = "";
        for (let i = 0;i < n; i++) {
          s += String.fromCharCode(this.readByte());
        }
        return s;
      };
      this.readUnsigned = () => {
        const a = this.readBytes(2);
        return (a[1] << 8) + a[0];
      };
      this.data = new Uint8Array(dataArray);
      this.len = this.data.byteLength;
      if (this.len === 0) {
        throw new Error("No data loaded from file");
      }
    }
  }
  const lzwDecode = function(minCodeSize, data) {
    let pos = 0;
    const readCode = function(size) {
      let code2 = 0;
      for (let i = 0;i < size; i++) {
        if (data.charCodeAt(pos >> 3) & 1 << (pos & 7)) {
          code2 |= 1 << i;
        }
        pos++;
      }
      return code2;
    };
    const output = [];
    const clearCode = 1 << minCodeSize;
    const eoiCode = clearCode + 1;
    let codeSize = minCodeSize + 1;
    let dict = [];
    const clear = function() {
      dict = [];
      codeSize = minCodeSize + 1;
      for (let i = 0;i < clearCode; i++) {
        dict[i] = [i];
      }
      dict[clearCode] = [];
      dict[eoiCode] = null;
    };
    let code;
    let last;
    while (true) {
      last = code;
      code = readCode(codeSize);
      if (code === clearCode) {
        clear();
        continue;
      }
      if (code === eoiCode) {
        break;
      }
      if (code < dict.length) {
        if (last !== clearCode) {
          dict.push(dict[last].concat(dict[code][0]));
        }
      } else {
        if (code !== dict.length) {
          throw new Error("Invalid LZW code.");
        }
        dict.push(dict[last].concat(dict[last][0]));
      }
      output.push.apply(output, dict[code]);
      if (dict.length === 1 << codeSize && codeSize < 12) {
        codeSize++;
      }
    }
    return output;
  };

  class ParseGif {
    constructor(stream, color = Color.Magenta) {
      this._st = null;
      this._handler = {};
      this._transparentColor = null;
      this.frames = [];
      this.images = [];
      this.globalColorTable = [];
      this.checkBytes = [];
      this.parseColorTable = (entries) => {
        const ct = [];
        for (let i = 0;i < entries; i++) {
          const rgb = this._st.readBytes(3);
          const rgba = "#" + rgb.map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          }).join("");
          ct.push(rgba);
        }
        return ct;
      };
      this.readSubBlocks = () => {
        let size, data;
        data = "";
        do {
          size = this._st.readByte();
          data += this._st.read(size);
        } while (size !== 0);
        return data;
      };
      this.parseHeader = () => {
        const hdr = {
          sig: null,
          ver: null,
          width: null,
          height: null,
          colorRes: null,
          globalColorTableSize: null,
          gctFlag: null,
          sorted: null,
          globalColorTable: [],
          bgColor: null,
          pixelAspectRatio: null
        };
        hdr.sig = this._st.read(3);
        hdr.ver = this._st.read(3);
        if (hdr.sig !== "GIF") {
          throw new Error("Not a GIF file.");
        }
        hdr.width = this._st.readUnsigned();
        hdr.height = this._st.readUnsigned();
        const bits = byteToBitArr(this._st.readByte());
        hdr.gctFlag = bits.shift();
        hdr.colorRes = bitsToNum(bits.splice(0, 3));
        hdr.sorted = bits.shift();
        hdr.globalColorTableSize = bitsToNum(bits.splice(0, 3));
        hdr.bgColor = this._st.readByte();
        hdr.pixelAspectRatio = this._st.readByte();
        if (hdr.gctFlag) {
          hdr.globalColorTable = this.parseColorTable(1 << hdr.globalColorTableSize + 1);
          this.globalColorTable = hdr.globalColorTable;
        }
        if (this._handler.hdr && this._handler.hdr(hdr)) {
          this.checkBytes.push(this._handler.hdr);
        }
      };
      this.parseExt = (block) => {
        const parseGCExt = (block2) => {
          this.checkBytes.push(this._st.readByte());
          const bits = byteToBitArr(this._st.readByte());
          block2.reserved = bits.splice(0, 3);
          block2.disposalMethod = bitsToNum(bits.splice(0, 3));
          block2.userInput = bits.shift();
          block2.transparencyGiven = bits.shift();
          block2.delayTime = this._st.readUnsigned();
          block2.transparencyIndex = this._st.readByte();
          block2.terminator = this._st.readByte();
          if (this._handler.gce && this._handler.gce(block2)) {
            this.checkBytes.push(this._handler.gce);
          }
        };
        const parseComExt = (block2) => {
          block2.comment = this.readSubBlocks();
          if (this._handler.com && this._handler.com(block2)) {
            this.checkBytes.push(this._handler.com);
          }
        };
        const parsePTExt = (block2) => {
          this.checkBytes.push(this._st.readByte());
          block2.ptHeader = this._st.readBytes(12);
          block2.ptData = this.readSubBlocks();
          if (this._handler.pte && this._handler.pte(block2)) {
            this.checkBytes.push(this._handler.pte);
          }
        };
        const parseAppExt = (block2) => {
          const parseNetscapeExt = (block3) => {
            this.checkBytes.push(this._st.readByte());
            block3.unknown = this._st.readByte();
            block3.iterations = this._st.readUnsigned();
            block3.terminator = this._st.readByte();
            if (this._handler.app && this._handler.app.NETSCAPE && this._handler.app.NETSCAPE(block3)) {
              this.checkBytes.push(this._handler.app);
            }
          };
          const parseUnknownAppExt = (block3) => {
            block3.appData = this.readSubBlocks();
            if (this._handler.app && this._handler.app[block3.identifier] && this._handler.app[block3.identifier](block3)) {
              this.checkBytes.push(this._handler.app[block3.identifier]);
            }
          };
          this.checkBytes.push(this._st.readByte());
          block2.identifier = this._st.read(8);
          block2.authCode = this._st.read(3);
          switch (block2.identifier) {
            case "NETSCAPE":
              parseNetscapeExt(block2);
              break;
            default:
              parseUnknownAppExt(block2);
              break;
          }
        };
        const parseUnknownExt = (block2) => {
          block2.data = this.readSubBlocks();
          if (this._handler.unknown && this._handler.unknown(block2)) {
            this.checkBytes.push(this._handler.unknown);
          }
        };
        block.label = this._st.readByte();
        switch (block.label) {
          case 249:
            block.extType = "gce";
            parseGCExt(block);
            break;
          case 254:
            block.extType = "com";
            parseComExt(block);
            break;
          case 1:
            block.extType = "pte";
            parsePTExt(block);
            break;
          case 255:
            block.extType = "app";
            parseAppExt(block);
            break;
          default:
            block.extType = "unknown";
            parseUnknownExt(block);
            break;
        }
      };
      this.parseImg = (img) => {
        const deinterlace = (pixels, width) => {
          const newPixels = new Array(pixels.length);
          const rows = pixels.length / width;
          const cpRow = (toRow, fromRow2) => {
            const fromPixels = pixels.slice(fromRow2 * width, (fromRow2 + 1) * width);
            newPixels.splice.apply(newPixels, [toRow * width, width].concat(fromPixels));
          };
          const offsets = [0, 4, 2, 1];
          const steps = [8, 8, 4, 2];
          let fromRow = 0;
          for (let pass = 0;pass < 4; pass++) {
            for (let toRow = offsets[pass];toRow < rows; toRow += steps[pass]) {
              cpRow(toRow, fromRow);
              fromRow++;
            }
          }
          return newPixels;
        };
        img.leftPos = this._st.readUnsigned();
        img.topPos = this._st.readUnsigned();
        img.width = this._st.readUnsigned();
        img.height = this._st.readUnsigned();
        const bits = byteToBitArr(this._st.readByte());
        img.lctFlag = bits.shift();
        img.interlaced = bits.shift();
        img.sorted = bits.shift();
        img.reserved = bits.splice(0, 2);
        img.lctSize = bitsToNum(bits.splice(0, 3));
        if (img.lctFlag) {
          img.lct = this.parseColorTable(1 << img.lctSize + 1);
        }
        img.lzwMinCodeSize = this._st.readByte();
        const lzwData = this.readSubBlocks();
        img.pixels = lzwDecode(img.lzwMinCodeSize, lzwData);
        if (img.interlaced) {
          img.pixels = deinterlace(img.pixels, img.width);
        }
        this.frames.push(img);
        this.arrayToImage(img);
        if (this._handler.img && this._handler.img(img)) {
          this.checkBytes.push(this._handler);
        }
      };
      this.parseBlock = () => {
        const block = {
          sentinel: this._st.readByte(),
          type: ""
        };
        const blockChar = String.fromCharCode(block.sentinel);
        switch (blockChar) {
          case "!":
            block.type = "ext";
            this.parseExt(block);
            break;
          case ",":
            block.type = "img";
            this.parseImg(block);
            break;
          case ";":
            block.type = "eof";
            if (this._handler.eof && this._handler.eof(block)) {
              this.checkBytes.push(this._handler.eof);
            }
            break;
          default:
            throw new Error("Unknown block: 0x" + block.sentinel.toString(16));
        }
        if (block.type !== "eof") {
          this.parseBlock();
        }
      };
      this.arrayToImage = (frame) => {
        let count = 0;
        const c = document.createElement("canvas");
        c.id = count.toString();
        c.width = frame.width;
        c.height = frame.height;
        count++;
        const context = c.getContext("2d");
        const pixSize = 1;
        let y = 0;
        let x = 0;
        for (let i = 0;i < frame.pixels.length; i++) {
          if (x % frame.width === 0) {
            y++;
            x = 0;
          }
          if (this.globalColorTable[frame.pixels[i]] === this._transparentColor.toHex()) {
            context.fillStyle = `rgba(0, 0, 0, 0)`;
          } else {
            context.fillStyle = this.globalColorTable[frame.pixels[i]];
          }
          context.fillRect(x, y, pixSize, pixSize);
          x++;
        }
        const img = new Image;
        img.src = c.toDataURL();
        this.images.push(img);
      };
      this._st = stream;
      this._handler = {};
      this._transparentColor = color;
      this.parseHeader();
      this.parseBlock();
    }
  }

  class Transition extends Entity {
    get progress() {
      return this._currentProgress;
    }
    get complete() {
      if (this.direction === "out") {
        return this.progress >= 1;
      } else {
        return this.progress <= 0;
      }
    }
    constructor(options) {
      var _a, _b, _c, _d;
      super();
      this.transform = new TransformComponent;
      this.graphics = new GraphicsComponent;
      this._completeFuture = new Future;
      this.started = false;
      this._currentDistance = 0;
      this._currentProgress = 0;
      this.done = this._completeFuture.promise;
      this.name = `Transition#${this.id}`;
      this.duration = options.duration;
      this.easing = (_a = options.easing) !== null && _a !== undefined ? _a : EasingFunctions.Linear;
      this.direction = (_b = options.direction) !== null && _b !== undefined ? _b : "out";
      this.hideLoader = (_c = options.hideLoader) !== null && _c !== undefined ? _c : false;
      this.blockInput = (_d = options.blockInput) !== null && _d !== undefined ? _d : false;
      this.transform.coordPlane = CoordPlane.Screen;
      this.transform.pos = Vector.Zero;
      this.transform.z = Infinity;
      this.graphics.anchor = Vector.Zero;
      this.addComponent(this.transform);
      this.addComponent(this.graphics);
      if (this.direction === "out") {
        this._currentProgress = 0;
      } else {
        this._currentProgress = 1;
      }
    }
    onPreUpdate(engine, delta) {
      if (this.complete) {
        return;
      }
      this._currentDistance += clamp(delta / this.duration, 0, 1);
      if (this._currentDistance >= 1) {
        this._currentDistance = 1;
      }
      if (this.direction === "out") {
        this._currentProgress = clamp(this.easing(this._currentDistance, 0, 1, 1), 0, 1);
      } else {
        this._currentProgress = clamp(this.easing(this._currentDistance, 1, 0, 1), 0, 1);
      }
    }
    async onPreviousSceneDeactivate(scene) {
    }
    onStart(progress) {
    }
    onUpdate(progress) {
    }
    onEnd(progress) {
    }
    onReset() {
    }
    reset() {
      this.started = false;
      this._completeFuture = new Future;
      this.done = this._completeFuture.promise;
      this._currentDistance = 0;
      if (this.direction === "out") {
        this._currentProgress = 0;
      } else {
        this._currentProgress = 1;
      }
      this.onReset();
    }
    execute() {
      if (!this.isInitialized) {
        return;
      }
      if (!this.started) {
        this.started = true;
        this.onStart(this.progress);
      }
      this.onUpdate(this.progress);
      if (this.complete && !this._completeFuture.isCompleted) {
        this.onEnd(this.progress);
        this._completeFuture.resolve();
      }
    }
  }

  class FadeInOut extends Transition {
    constructor(options) {
      var _a, _b;
      super({
        ...options,
        duration: (_a = options.duration) !== null && _a !== undefined ? _a : 2000
      });
      this.name = `FadeInOut#${this.id}`;
      this.color = (_b = options.color) !== null && _b !== undefined ? _b : Color.Black;
    }
    onInitialize(engine) {
      const bounds = engine.screen.getWorldBounds();
      this.transform.pos = vec(bounds.left, bounds.top);
      this.screenCover = new Rectangle({
        width: bounds.width,
        height: bounds.height,
        color: this.color
      });
      this.graphics.add(this.screenCover);
      this.graphics.opacity = this.progress;
    }
    onReset() {
      this.graphics.opacity = this.progress;
    }
    onStart(progress) {
      this.graphics.opacity = progress;
    }
    onEnd(progress) {
      this.graphics.opacity = progress;
    }
    onUpdate(progress) {
      this.graphics.opacity = progress;
    }
  }

  class CrossFade extends Transition {
    constructor(options) {
      super(options);
      this.name = `CrossFade#${this.id}`;
    }
    async onPreviousSceneDeactivate(scene) {
      this.image = await scene.engine.screenshot(true);
    }
    onInitialize(engine) {
      this.engine = engine;
      const bounds = engine.screen.getWorldBounds();
      this.transform.pos = vec(bounds.left, bounds.top);
      this.screenCover = ImageSource.fromHtmlImageElement(this.image).toSprite();
      this.graphics.add(this.screenCover);
      this.transform.scale = vec(1 / engine.screen.pixelRatio, 1 / engine.screen.pixelRatio);
      this.graphics.opacity = this.progress;
    }
    onStart(_progress) {
      this.graphics.opacity = this.progress;
    }
    onReset() {
      this.graphics.opacity = this.progress;
    }
    onEnd(progress) {
      this.graphics.opacity = progress;
    }
    onUpdate(progress) {
      this.graphics.opacity = progress;
    }
  }

  class Line extends Graphic {
    constructor(options) {
      super();
      this.color = Color.Black;
      this.thickness = 1;
      const { start, end, color, thickness } = options;
      this.start = start;
      this.end = end;
      this.color = color !== null && color !== undefined ? color : this.color;
      this.thickness = thickness !== null && thickness !== undefined ? thickness : this.thickness;
      this._localBounds = this._calculateBounds();
      const { width, height } = this._localBounds;
      this.width = width;
      this.height = height;
    }
    get localBounds() {
      return this._localBounds;
    }
    _calculateBounds() {
      const lineNormal = this.end.sub(this.start).normal();
      const halfThickness = this.thickness / 2;
      const points = [
        this.start.add(lineNormal.scale(halfThickness)),
        this.end.add(lineNormal.scale(halfThickness)),
        this.end.add(lineNormal.scale(-halfThickness)),
        this.start.add(lineNormal.scale(-halfThickness))
      ];
      return BoundingBox.fromPoints(points);
    }
    _drawImage(ctx, _x, _y) {
      ctx.drawLine(this.start, this.end, this.color, this.thickness);
    }
    clone() {
      return new Line({
        start: this.start,
        end: this.end,
        color: this.color,
        thickness: this.thickness
      });
    }
  }

  class Polygon extends Raster {
    get points() {
      return this._points;
    }
    set points(points) {
      this._points = points;
      const min = this.minPoint;
      this.width = this._points.reduce((max, p) => Math.max(p.x, max), 0) - min.x;
      this.height = this._points.reduce((max, p) => Math.max(p.y, max), 0) - min.y;
      this.flagDirty();
    }
    get minPoint() {
      const minX = this._points.reduce((min, p) => Math.min(p.x, min), Infinity);
      const minY = this._points.reduce((min, p) => Math.min(p.y, min), Infinity);
      return vec(minX, minY);
    }
    constructor(options) {
      super(options);
      this.points = options.points;
      this.filtering = ImageFiltering.Blended;
      this.rasterize();
    }
    clone() {
      return new Polygon({
        points: this.points.map((p) => p.clone()),
        ...this.cloneGraphicOptions(),
        ...this.cloneRasterOptions()
      });
    }
    execute(ctx) {
      if (this.points && this.points.length) {
        ctx.beginPath();
        const min = this.minPoint.negate();
        const firstPoint = this.points[0].add(min);
        ctx.moveTo(firstPoint.x, firstPoint.y);
        this.points.forEach((point2) => {
          ctx.lineTo(point2.x + min.x, point2.y + min.y);
        });
        ctx.lineTo(firstPoint.x, firstPoint.y);
        ctx.closePath();
        if (this.color) {
          ctx.fill();
        }
        if (this.strokeColor) {
          ctx.stroke();
        }
      }
    }
  }

  class AsyncWaitQueue {
    constructor() {
      this._queue = [];
    }
    get length() {
      return this._queue.length;
    }
    enqueue() {
      const future = new Future;
      this._queue.push(future);
      return future.promise;
    }
    dequeue(value) {
      const future = this._queue.shift();
      future.resolve(value);
    }
  }

  class Semaphore {
    constructor(_count) {
      this._count = _count;
      this._waitQueue = new AsyncWaitQueue;
    }
    get count() {
      return this._count;
    }
    get waiting() {
      return this._waitQueue.length;
    }
    async enter() {
      if (this._count !== 0) {
        this._count--;
        return Promise.resolve();
      }
      return this._waitQueue.enqueue();
    }
    exit(count = 1) {
      if (count === 0) {
        return;
      }
      while (count !== 0 && this._waitQueue.length !== 0) {
        this._waitQueue.dequeue(null);
        count--;
      }
      this._count += count;
    }
  }
  const EX_VERSION = "0.29.0-alpha.835+11dfe50";
  polyfill();
})();
var __webpack_exports__ActionCompleteEvent = __webpack_exports__.y1j;
var __webpack_exports__ActionContext = __webpack_exports__.fWn;
var __webpack_exports__ActionQueue = __webpack_exports__.Ia8;
var __webpack_exports__ActionSequence = __webpack_exports__.rqv;
var __webpack_exports__ActionStartEvent = __webpack_exports__.zH6;
var __webpack_exports__ActionsComponent = __webpack_exports__.hLI;
var __webpack_exports__ActionsSystem = __webpack_exports__.yyv;
var __webpack_exports__ActivateEvent = __webpack_exports__.tX5;
var __webpack_exports__Actor = __webpack_exports__.vtX;
var __webpack_exports__AddedComponent = __webpack_exports__.r7K;
var __webpack_exports__AddedEntity = __webpack_exports__.lCh;
var __webpack_exports__AffineMatrix = __webpack_exports__.cE4;
var __webpack_exports__Animation = __webpack_exports__.fwF;
var __webpack_exports__AnimationDirection = __webpack_exports__.sce;
var __webpack_exports__AnimationEvents = __webpack_exports__.AQ6;
var __webpack_exports__AnimationStrategy = __webpack_exports__._c7;
var __webpack_exports__ArcadeSolver = __webpack_exports__.KUs;
var __webpack_exports__AudioContextFactory = __webpack_exports__.Ajp;
var __webpack_exports__Axes = __webpack_exports__.dkO;
var __webpack_exports__Axis = __webpack_exports__.RDh;
var __webpack_exports__BaseAlign = __webpack_exports__._H9;
var __webpack_exports__Blink = __webpack_exports__.mxs;
var __webpack_exports__BodyComponent = __webpack_exports__.OmD;
var __webpack_exports__BoundingBox = __webpack_exports__.kBf;
var __webpack_exports__BroadphaseStrategy = __webpack_exports__.C4F;
var __webpack_exports__BrowserComponent = __webpack_exports__.NQt;
var __webpack_exports__BrowserEvents = __webpack_exports__.JjN;
var __webpack_exports__Buttons = __webpack_exports__.EK_;
var __webpack_exports__Camera = __webpack_exports__.V1s;
var __webpack_exports__CameraEvents = __webpack_exports__.xHm;
var __webpack_exports__Canvas = __webpack_exports__.Xz7;
var __webpack_exports__Circle = __webpack_exports__.Cdc;
var __webpack_exports__CircleCollider = __webpack_exports__.FKn;
var __webpack_exports__Clock = __webpack_exports__.SUY;
var __webpack_exports__ClosestLine = __webpack_exports__.ab2;
var __webpack_exports__ClosestLineJumpTable = __webpack_exports__.GfZ;
var __webpack_exports__Collider = __webpack_exports__.YMS;
var __webpack_exports__ColliderComponent = __webpack_exports__.oyv;
var __webpack_exports__CollisionContact = __webpack_exports__.aUb;
var __webpack_exports__CollisionEndEvent = __webpack_exports__.SdD;
var __webpack_exports__CollisionGroup = __webpack_exports__.JUv;
var __webpack_exports__CollisionGroupManager = __webpack_exports__.jEj;
var __webpack_exports__CollisionJumpTable = __webpack_exports__.TFq;
var __webpack_exports__CollisionPostSolveEvent = __webpack_exports__.HDU;
var __webpack_exports__CollisionPreSolveEvent = __webpack_exports__.R_y;
var __webpack_exports__CollisionResolutionStrategy = __webpack_exports__.ydN;
var __webpack_exports__CollisionStartEvent = __webpack_exports__.t50;
var __webpack_exports__CollisionSystem = __webpack_exports__.s$$;
var __webpack_exports__CollisionType = __webpack_exports__.v2G;
var __webpack_exports__Color = __webpack_exports__.Ilk;
var __webpack_exports__ColorBlindFlags = __webpack_exports__.s9i;
var __webpack_exports__ColorBlindnessMode = __webpack_exports__.dxL;
var __webpack_exports__ColorBlindnessPostProcessor = __webpack_exports__.LLX;
var __webpack_exports__Component = __webpack_exports__.wA2;
var __webpack_exports__CompositeCollider = __webpack_exports__.R_p;
var __webpack_exports__Configurable = __webpack_exports__.IQ$;
var __webpack_exports__ConsoleAppender = __webpack_exports__.I5F;
var __webpack_exports__ContactConstraintPoint = __webpack_exports__.X8$;
var __webpack_exports__ContactEndEvent = __webpack_exports__.FR6;
var __webpack_exports__ContactStartEvent = __webpack_exports__.U8o;
var __webpack_exports__CoordPlane = __webpack_exports__.kbG;
var __webpack_exports__CrossFade = __webpack_exports__.FEv;
var __webpack_exports__DeactivateEvent = __webpack_exports__.iS_;
var __webpack_exports__Debug = __webpack_exports__.cGG;
var __webpack_exports__DebugGraphicsComponent = __webpack_exports__.RPN;
var __webpack_exports__DebugSystem = __webpack_exports__.skb;
var __webpack_exports__DebugText = __webpack_exports__.SLU;
var __webpack_exports__DefaultLoader = __webpack_exports__.xK2;
var __webpack_exports__DegreeOfFreedom = __webpack_exports__.RdJ;
var __webpack_exports__Delay = __webpack_exports__.cNu;
var __webpack_exports__Detector = __webpack_exports__.gU7;
var __webpack_exports__Die = __webpack_exports__.LSk;
var __webpack_exports__Direction = __webpack_exports__.Nmp;
var __webpack_exports__Director = __webpack_exports__.twX;
var __webpack_exports__DirectorEvents = __webpack_exports__.UND;
var __webpack_exports__DisplayMode = __webpack_exports__.d1Y;
var __webpack_exports__DynamicTree = __webpack_exports__.xrL;
var __webpack_exports__DynamicTreeCollisionProcessor = __webpack_exports__.sRW;
var __webpack_exports__EX_VERSION = __webpack_exports__.cmV;
var __webpack_exports__EaseBy = __webpack_exports__.qWz;
var __webpack_exports__EaseTo = __webpack_exports__.N0Q;
var __webpack_exports__EasingFunctions = __webpack_exports__.q8b;
var __webpack_exports__EdgeCollider = __webpack_exports__.ynB;
var __webpack_exports__ElasticToActorStrategy = __webpack_exports__.jT9;
var __webpack_exports__EmitterType = __webpack_exports__.wAz;
var __webpack_exports__Engine = __webpack_exports__.D4V;
var __webpack_exports__EngineEvents = __webpack_exports__.NLr;
var __webpack_exports__EnterTriggerEvent = __webpack_exports__.N6H;
var __webpack_exports__EnterViewPortEvent = __webpack_exports__.W1A;
var __webpack_exports__Entity = __webpack_exports__.JHW;
var __webpack_exports__EntityEvents = __webpack_exports__.ZZ$;
var __webpack_exports__EntityManager = __webpack_exports__.v2K;
var __webpack_exports__EventDispatcher = __webpack_exports__.pBf;
var __webpack_exports__EventEmitter = __webpack_exports__.vpe;
var __webpack_exports__EventTypes = __webpack_exports__.GMl;
var __webpack_exports__Events = __webpack_exports__.zW2;
var __webpack_exports__ExResponse = __webpack_exports__.B0K;
var __webpack_exports__ExcaliburGraphicsContext2DCanvas = __webpack_exports__.Nv7;
var __webpack_exports__ExcaliburGraphicsContextWebGL = __webpack_exports__.C_p;
var __webpack_exports__ExitTriggerEvent = __webpack_exports__.MUA;
var __webpack_exports__ExitViewPortEvent = __webpack_exports__.xqU;
var __webpack_exports__Fade = __webpack_exports__.pTp;
var __webpack_exports__FadeInOut = __webpack_exports__.trb;
var __webpack_exports__Flags = __webpack_exports__.vUK;
var __webpack_exports__Follow = __webpack_exports__.j9l;
var __webpack_exports__Font = __webpack_exports__.Zxw;
var __webpack_exports__FontCache = __webpack_exports__.v51;
var __webpack_exports__FontStyle = __webpack_exports__.Hdx;
var __webpack_exports__FontUnit = __webpack_exports__.Z$d;
var __webpack_exports__FpsSampler = __webpack_exports__.iqV;
var __webpack_exports__FrameStats = __webpack_exports__.o$7;
var __webpack_exports__Future = __webpack_exports__.olM;
var __webpack_exports__GameEvent = __webpack_exports__.Zm$;
var __webpack_exports__GameStartEvent = __webpack_exports__.$QH;
var __webpack_exports__GameStopEvent = __webpack_exports__.i78;
var __webpack_exports__Gamepad = __webpack_exports__.nJg;
var __webpack_exports__GamepadAxisEvent = __webpack_exports__.h6u;
var __webpack_exports__GamepadButtonEvent = __webpack_exports__.hts;
var __webpack_exports__GamepadConnectEvent = __webpack_exports__.j88;
var __webpack_exports__GamepadDisconnectEvent = __webpack_exports__.VME;
var __webpack_exports__Gamepads = __webpack_exports__.fy2;
var __webpack_exports__Gif = __webpack_exports__.nt;
var __webpack_exports__GlobalCoordinates = __webpack_exports__.Ukr;
var __webpack_exports__Graphic = __webpack_exports__.zsu;
var __webpack_exports__GraphicsComponent = __webpack_exports__.oA6;
var __webpack_exports__GraphicsGroup = __webpack_exports__.TVh;
var __webpack_exports__GraphicsLayer = __webpack_exports__.TwZ;
var __webpack_exports__GraphicsLayers = __webpack_exports__.GTT;
var __webpack_exports__GraphicsSystem = __webpack_exports__.xxj;
var __webpack_exports__HiddenEvent = __webpack_exports__.XdK;
var __webpack_exports__ImageFiltering = __webpack_exports__.Jmb;
var __webpack_exports__ImageSource = __webpack_exports__.cXo;
var __webpack_exports__InitializeEvent = __webpack_exports__.Dm5;
var __webpack_exports__Input = __webpack_exports__.IIB;
var __webpack_exports__InputMapper = __webpack_exports__.ebW;
var __webpack_exports__Integrator = __webpack_exports__.zI0;
var __webpack_exports__IsometricEntityComponent = __webpack_exports__.LYD;
var __webpack_exports__IsometricEntitySystem = __webpack_exports__.cEG;
var __webpack_exports__IsometricMap = __webpack_exports__.SEl;
var __webpack_exports__IsometricTile = __webpack_exports__.t9V;
var __webpack_exports__KeyEvent = __webpack_exports__.ez5;
var __webpack_exports__Keyboard = __webpack_exports__.N1d;
var __webpack_exports__Keys = __webpack_exports__.R8U;
var __webpack_exports__KillEvent = __webpack_exports__.SKZ;
var __webpack_exports__Label = __webpack_exports__.__J;
var __webpack_exports__LimitCameraBoundsStrategy = __webpack_exports__.RI$;
var __webpack_exports__Line = __webpack_exports__.x12;
var __webpack_exports__LineSegment = __webpack_exports__.ccz;
var __webpack_exports__Loader = __webpack_exports__.aNw;
var __webpack_exports__LoaderEvents = __webpack_exports__.XrL;
var __webpack_exports__LockCameraToActorAxisStrategy = __webpack_exports__.xwn;
var __webpack_exports__LockCameraToActorStrategy = __webpack_exports__.dNK;
var __webpack_exports__LogLevel = __webpack_exports__.ini;
var __webpack_exports__Logger = __webpack_exports__.YdH;
var __webpack_exports__Material = __webpack_exports__.F5T;
var __webpack_exports__Matrix = __webpack_exports__.y3G;
var __webpack_exports__MatrixLocations = __webpack_exports__.l57;
var __webpack_exports__MediaEvent = __webpack_exports__.xn0;
var __webpack_exports__Meet = __webpack_exports__.t2V;
var __webpack_exports__MotionComponent = __webpack_exports__.uxB;
var __webpack_exports__MotionSystem = __webpack_exports__.cpd;
var __webpack_exports__MoveBy = __webpack_exports__.fiy;
var __webpack_exports__MoveTo = __webpack_exports__.$XZ;
var __webpack_exports__NativePointerButton = __webpack_exports__.UG6;
var __webpack_exports__NativeSoundEvent = __webpack_exports__.uqK;
var __webpack_exports__NativeSoundProcessedEvent = __webpack_exports__.STE;
var __webpack_exports__Observable = __webpack_exports__.y$z;
var __webpack_exports__OffscreenSystem = __webpack_exports__.mAD;
var __webpack_exports__Pair = __webpack_exports__.sOq;
var __webpack_exports__ParallaxComponent = __webpack_exports__.hUw;
var __webpack_exports__ParallelActions = __webpack_exports__._0G;
var __webpack_exports__ParseGif = __webpack_exports__.Sqs;
var __webpack_exports__Particle = __webpack_exports__.hpZ;
var __webpack_exports__ParticleEmitter = __webpack_exports__.Vol;
var __webpack_exports__ParticleTransform = __webpack_exports__.vYX;
var __webpack_exports__Physics = __webpack_exports__.wIZ;
var __webpack_exports__PhysicsStats = __webpack_exports__.cBi;
var __webpack_exports__PhysicsWorld = __webpack_exports__.c30;
var __webpack_exports__PointerButton = __webpack_exports__.MPV;
var __webpack_exports__PointerComponent = __webpack_exports__.RFv;
var __webpack_exports__PointerEvent = __webpack_exports__.Ux6;
var __webpack_exports__PointerEventReceiver = __webpack_exports__.rxy;
var __webpack_exports__PointerScope = __webpack_exports__.I$c;
var __webpack_exports__PointerSystem = __webpack_exports__.kfC;
var __webpack_exports__PointerType = __webpack_exports__.VjY;
var __webpack_exports__Polygon = __webpack_exports__.mgq;
var __webpack_exports__PolygonCollider = __webpack_exports__.YVA;
var __webpack_exports__Pool = __webpack_exports__.Kgp;
var __webpack_exports__PostCollisionEvent = __webpack_exports__.HH$;
var __webpack_exports__PostDebugDrawEvent = __webpack_exports__.M_d;
var __webpack_exports__PostDrawEvent = __webpack_exports__.rgh;
var __webpack_exports__PostFrameEvent = __webpack_exports__.Ra6;
var __webpack_exports__PostKillEvent = __webpack_exports__.KhR;
var __webpack_exports__PostTransformDrawEvent = __webpack_exports__.gvQ;
var __webpack_exports__PostUpdateEvent = __webpack_exports__.BS5;
var __webpack_exports__PreCollisionEvent = __webpack_exports__.xhz;
var __webpack_exports__PreDebugDrawEvent = __webpack_exports__.xOq;
var __webpack_exports__PreDrawEvent = __webpack_exports__.a9j;
var __webpack_exports__PreFrameEvent = __webpack_exports__.bHk;
var __webpack_exports__PreKillEvent = __webpack_exports__.CgK;
var __webpack_exports__PreLoadEvent = __webpack_exports__.A0M;
var __webpack_exports__PreTransformDrawEvent = __webpack_exports__.cEd;
var __webpack_exports__PreUpdateEvent = __webpack_exports__.cuY;
var __webpack_exports__Projection = __webpack_exports__.kvE;
var __webpack_exports__QuadIndexBuffer = __webpack_exports__.SBu;
var __webpack_exports__QuadTree = __webpack_exports__.PsT;
var __webpack_exports__Query = __webpack_exports__.AE_;
var __webpack_exports__QueryManager = __webpack_exports__.ctO;
var __webpack_exports__RadiusAroundActorStrategy = __webpack_exports__.OLH;
var __webpack_exports__Random = __webpack_exports__.kky;
var __webpack_exports__Raster = __webpack_exports__.nSF;
var __webpack_exports__Ray = __webpack_exports__.zHn;
var __webpack_exports__RealisticSolver = __webpack_exports__.zwx;
var __webpack_exports__Rectangle = __webpack_exports__.AeJ;
var __webpack_exports__RemovedComponent = __webpack_exports__.hLz;
var __webpack_exports__RemovedEntity = __webpack_exports__.D9g;
var __webpack_exports__Repeat = __webpack_exports__.wA;
var __webpack_exports__RepeatForever = __webpack_exports__.jhr;
var __webpack_exports__Resolution = __webpack_exports__.GVs;
var __webpack_exports__Resource = __webpack_exports__._zO;
var __webpack_exports__ResourceEvents = __webpack_exports__.LXZ;
var __webpack_exports__RotateBy = __webpack_exports__.w6$;
var __webpack_exports__RotateTo = __webpack_exports__.mhV;
var __webpack_exports__RotationType = __webpack_exports__.MOD;
var __webpack_exports__ScaleBy = __webpack_exports__.kwd;
var __webpack_exports__ScaleTo = __webpack_exports__.Lmr;
var __webpack_exports__Scene = __webpack_exports__.xsS;
var __webpack_exports__SceneEvents = __webpack_exports__.K5l;
var __webpack_exports__Screen = __webpack_exports__.lLr;
var __webpack_exports__ScreenAppender = __webpack_exports__.Z$r;
var __webpack_exports__ScreenElement = __webpack_exports__.IXb;
var __webpack_exports__ScreenEvents = __webpack_exports__.Xsu;
var __webpack_exports__ScreenShader = __webpack_exports__.SGH;
var __webpack_exports__ScrollPreventionMode = __webpack_exports__.SMj;
var __webpack_exports__Semaphore = __webpack_exports__.L34;
var __webpack_exports__Shader = __webpack_exports__.exe;
var __webpack_exports__Shape = __webpack_exports__.bnF;
var __webpack_exports__Side = __webpack_exports__.MFA;
var __webpack_exports__Sound = __webpack_exports__.$uU;
var __webpack_exports__SoundEvents = __webpack_exports__.Sap;
var __webpack_exports__Sprite = __webpack_exports__.jyi;
var __webpack_exports__SpriteFont = __webpack_exports__.E03;
var __webpack_exports__SpriteSheet = __webpack_exports__.V6q;
var __webpack_exports__StandardClock = __webpack_exports__.rg2;
var __webpack_exports__StateMachine = __webpack_exports__.DVW;
var __webpack_exports__StrategyContainer = __webpack_exports__.nVo;
var __webpack_exports__Stream = __webpack_exports__.F6N;
var __webpack_exports__System = __webpack_exports__.xP7;
var __webpack_exports__SystemManager = __webpack_exports__.Odq;
var __webpack_exports__SystemType = __webpack_exports__.Zif;
var __webpack_exports__TagComponent = __webpack_exports__.ZGJ;
var __webpack_exports__TestClock = __webpack_exports__.MJk;
var __webpack_exports__Text = __webpack_exports__.xvT;
var __webpack_exports__TextAlign = __webpack_exports__.PHM;
var __webpack_exports__TextureLoader = __webpack_exports__.dpR;
var __webpack_exports__Tile = __webpack_exports__.n9L;
var __webpack_exports__TileMap = __webpack_exports__.KwO;
var __webpack_exports__TileMapEvents = __webpack_exports__.SxM;
var __webpack_exports__Timer = __webpack_exports__.B7y;
var __webpack_exports__Toaster = __webpack_exports__.x7r;
var __webpack_exports__Transform = __webpack_exports__.wx7;
var __webpack_exports__TransformComponent = __webpack_exports__.Uvn;
var __webpack_exports__Transition = __webpack_exports__.uTP;
var __webpack_exports__TreeNode = __webpack_exports__.OFT;
var __webpack_exports__Trigger = __webpack_exports__.xzN;
var __webpack_exports__TriggerEvents = __webpack_exports__.CcZ;
var __webpack_exports__TwoPI = __webpack_exports__.M5Z;
var __webpack_exports__Util = __webpack_exports__.ZrN;
var __webpack_exports__Vector = __webpack_exports__.OWs;
var __webpack_exports__VectorView = __webpack_exports__.dF9;
var __webpack_exports__VertexBuffer = __webpack_exports__.oZy;
var __webpack_exports__VertexLayout = __webpack_exports__.rD2;
var __webpack_exports__VisibleEvent = __webpack_exports__.VHo;
var __webpack_exports__WebAudio = __webpack_exports__.ohE;
var __webpack_exports__WebAudioInstance = __webpack_exports__.R$E;
var __webpack_exports__WheelDeltaMode = __webpack_exports__.xQN;
var __webpack_exports__WheelEvent = __webpack_exports__.AdJ;
var __webpack_exports__World = __webpack_exports__.q3I;
var __webpack_exports__canonicalizeAngle = __webpack_exports__.Pab;
var __webpack_exports__clamp = __webpack_exports__.uZ5;
var __webpack_exports__createId = __webpack_exports__.McK;
var __webpack_exports__frac = __webpack_exports__.F9c;
var __webpack_exports__hasGraphicsTick = __webpack_exports__.k0b;
var __webpack_exports__hasOnInitialize = __webpack_exports__.hnT;
var __webpack_exports__hasOnPostUpdate = __webpack_exports__.RSJ;
var __webpack_exports__hasOnPreUpdate = __webpack_exports__.Mku;
var __webpack_exports__hasPostDraw = __webpack_exports__.h90;
var __webpack_exports__hasPreDraw = __webpack_exports__.rms;
var __webpack_exports__has_initialize = __webpack_exports__.ErP;
var __webpack_exports__has_postupdate = __webpack_exports__.aVg;
var __webpack_exports__has_preupdate = __webpack_exports__.lPc;
var __webpack_exports__isAddedComponent = __webpack_exports__.Z8E;
var __webpack_exports__isAddedSystemEntity = __webpack_exports__._N2;
var __webpack_exports__isLoaderConstructor = __webpack_exports__.YsU;
var __webpack_exports__isRemoveSystemEntity = __webpack_exports__.yFn;
var __webpack_exports__isRemovedComponent = __webpack_exports__.lNv;
var __webpack_exports__isSceneConstructor = __webpack_exports__.Xyg;
var __webpack_exports__isScreenElement = __webpack_exports__.cu9;
var __webpack_exports__maxMessages = __webpack_exports__.MZQ;
var __webpack_exports__obsolete = __webpack_exports__.FUM;
var __webpack_exports__pixelSnapEpsilon = __webpack_exports__.BxR;
var __webpack_exports__randomInRange = __webpack_exports__.vdf;
var __webpack_exports__randomIntInRange = __webpack_exports__.iaL;
var __webpack_exports__range = __webpack_exports__.w6H;
var __webpack_exports__resetObsoleteCounter = __webpack_exports__.Q4c;
var __webpack_exports__sign = __webpack_exports__.Xxe;
var __webpack_exports__toDegrees = __webpack_exports__.Uxb;
var __webpack_exports__toRadians = __webpack_exports__.Yr5;
var __webpack_exports__vec = __webpack_exports__.Bhw;
var __webpack_exports__webgl = __webpack_exports__.yOA;

// client/src/resources.ts
var images = {
  playerImage: new __webpack_exports__ImageSource("./assets/sprites/characters/player.png"),
  objectsImage: new __webpack_exports__ImageSource("./assets/sprites/objects/objects.png"),
  grassImage: new __webpack_exports__ImageSource("./assets/sprites/tilesets/grass.png"),
  slimeImage: new __webpack_exports__ImageSource("./assets/sprites/characters/slime.png")
};
var loader = new __webpack_exports__Loader;
loader.logoWidth = 0;
loader.logoHeight = 0;
var allResources = { ...images };
for (const [k, res] of Object.entries(allResources)) {
  loader.addResource(res);
}

// client/src/actors/items/item.ts
class Item extends __webpack_exports__Actor {
  constructor(x, y) {
    super({
      x,
      y,
      width: 30,
      height: 30,
      collisionType: __webpack_exports__CollisionType.Fixed
    });
  }
  onInitialize(engine) {
    const stone = new __webpack_exports__Sprite({
      image: images.objectsImage,
      sourceView: {
        x: 0,
        y: 17,
        width: 15,
        height: 15
      },
      destSize: {
        width: 30,
        height: 30
      }
    });
    this.graphics.add("stone", stone);
    this.graphics.use("stone");
  }
}

// client/src/scenes/world-sprites.ts
var tileSprite = new __webpack_exports__Sprite({
  image: images.objectsImage,
  sourceView: {
    x: 81,
    y: 3,
    width: 14,
    height: 14
  },
  destSize: {
    width: 42,
    height: 42
  }
});
var tileSprite2 = new __webpack_exports__Sprite({
  image: images.grassImage,
  sourceView: {
    x: 0,
    y: 0,
    width: 16,
    height: 16
  },
  destSize: {
    width: 48,
    height: 48
  }
});

// client/src/scenes/world.ts
class WorldScene extends __webpack_exports__Scene {
  wsManager;
  constructor(wsManager) {
    super();
    this.wsManager = wsManager;
  }
  onInitialize(_engine) {
    this.add(new Item(100, 100));
    this.add(new Item(400, 300));
    const isoMap = new __webpack_exports__IsometricMap({
      columns: 3,
      rows: 1,
      tileWidth: 48,
      tileHeight: 24
    });
    for (let tile of isoMap.tiles) {
      tile.addGraphic(tileSprite2);
    }
  }
}

// client/src/websockets.ts
class WSManager {
  socket;
  handlers = new Map;
  constructor() {
    this.socket = new WebSocket("ws://localhost:3000");
    this.socket.onopen = () => {
      console.log("Connected");
    };
    this.socket.onmessage = (message) => {
      const { event, data } = JSON.parse(String(message.data));
      const handler = this.handlers.get(event) ?? (() => {
      });
      handler(data);
    };
  }
  async waitForConnection() {
    return new Promise((resolve, reject) => {
      this.socket.onopen = () => {
        resolve();
      };
    });
  }
  send(event, data) {
    this.socket.send(JSON.stringify({ event, data }));
  }
  registerHandler(event, handler) {
    this.handlers.set(event, handler);
  }
}

// client/src/actors/entities/player/player-sprites.ts
var PLAYER_SIZE = 5;
var PLAYER_ANIMATION_SPEED = 200;
var ATTACK_SPEED = 100;
var sprite = new __webpack_exports__Sprite({
  image: images.playerImage,
  sourceView: {
    x: 18,
    y: 22,
    width: 13,
    height: 21
  },
  destSize: {
    width: 18 * PLAYER_SIZE,
    height: 22 * PLAYER_SIZE
  }
});
var spriteSheet = __webpack_exports__SpriteSheet.fromImageSource({
  image: images.playerImage,
  grid: {
    rows: 10,
    columns: 6,
    spriteWidth: 15,
    spriteHeight: 23
  },
  spacing: {
    originOffset: { x: 17, y: 20 },
    margin: { x: 33, y: 25 }
  }
});
for (let sprite2 of spriteSheet.sprites) {
  sprite2.destSize = { height: 23 * PLAYER_SIZE, width: 15 * PLAYER_SIZE };
}
var sparseSpriteSheet = __webpack_exports__SpriteSheet.fromImageSourceWithSourceViews({
  image: images.playerImage,
  sourceViews: [
    { x: 15, y: 311, width: 16, height: 20 },
    { x: 65, y: 310, width: 20, height: 26 },
    { x: 114, y: 311, width: 19, height: 21 },
    { x: 162, y: 312, width: 13, height: 19 },
    { x: 19, y: 359, width: 16, height: 20 },
    { x: 56, y: 358, width: 34, height: 23 },
    { x: 107, y: 358, width: 20, height: 21 },
    { x: 161, y: 360, width: 15, height: 19 },
    { x: 18, y: 407, width: 17, height: 20 },
    { x: 59, y: 406, width: 22, height: 21 },
    { x: 108, y: 407, width: 19, height: 20 },
    { x: 162, y: 408, width: 13, height: 19 }
  ]
});
for (let sprite2 of sparseSpriteSheet.sprites) {
  sprite2.destSize = { height: sprite2.height * PLAYER_SIZE, width: sprite2.width * PLAYER_SIZE };
}
var animations = {
  idleDownAnim: __webpack_exports__Animation.fromSpriteSheet(spriteSheet, __webpack_exports__range(0, 5), PLAYER_ANIMATION_SPEED, __webpack_exports__AnimationStrategy.Loop),
  idleUpAnim: __webpack_exports__Animation.fromSpriteSheet(spriteSheet, __webpack_exports__range(12, 17), PLAYER_ANIMATION_SPEED, __webpack_exports__AnimationStrategy.Loop),
  idleRightAnim: __webpack_exports__Animation.fromSpriteSheet(spriteSheet, __webpack_exports__range(6, 11), PLAYER_ANIMATION_SPEED, __webpack_exports__AnimationStrategy.Loop),
  idleLeftAnim: __webpack_exports__Animation.fromSpriteSheet(spriteSheet, __webpack_exports__range(6, 11), PLAYER_ANIMATION_SPEED, __webpack_exports__AnimationStrategy.Loop),
  runDownAnim: __webpack_exports__Animation.fromSpriteSheet(spriteSheet, __webpack_exports__range(18, 23), PLAYER_ANIMATION_SPEED, __webpack_exports__AnimationStrategy.Loop),
  runUpAnim: __webpack_exports__Animation.fromSpriteSheet(spriteSheet, __webpack_exports__range(30, 35), PLAYER_ANIMATION_SPEED, __webpack_exports__AnimationStrategy.Loop),
  runRightAnim: __webpack_exports__Animation.fromSpriteSheet(spriteSheet, __webpack_exports__range(24, 29), PLAYER_ANIMATION_SPEED, __webpack_exports__AnimationStrategy.Loop),
  runLeftAnim: __webpack_exports__Animation.fromSpriteSheet(spriteSheet, __webpack_exports__range(24, 29), PLAYER_ANIMATION_SPEED, __webpack_exports__AnimationStrategy.Loop),
  attackDownAnim: __webpack_exports__Animation.fromSpriteSheet(sparseSpriteSheet, __webpack_exports__range(0, 3), ATTACK_SPEED, __webpack_exports__AnimationStrategy.Loop),
  attackRightAnim: __webpack_exports__Animation.fromSpriteSheet(sparseSpriteSheet, __webpack_exports__range(4, 7), ATTACK_SPEED, __webpack_exports__AnimationStrategy.Loop),
  attackLeftAnim: __webpack_exports__Animation.fromSpriteSheet(sparseSpriteSheet, __webpack_exports__range(4, 7), ATTACK_SPEED, __webpack_exports__AnimationStrategy.Loop),
  attackUpAnim: __webpack_exports__Animation.fromSpriteSheet(sparseSpriteSheet, __webpack_exports__range(8, 11), ATTACK_SPEED, __webpack_exports__AnimationStrategy.Loop),
  deathAnim: __webpack_exports__Animation.fromSpriteSheet(spriteSheet, __webpack_exports__range(54, 56), PLAYER_ANIMATION_SPEED, __webpack_exports__AnimationStrategy.Freeze)
};
animations.idleLeftAnim.flipHorizontal = true;
animations.runLeftAnim.flipHorizontal = true;
animations.attackLeftAnim.flipHorizontal = true;

// client/src/actors/entities/entity.ts
var EntityType;
(function(EntityType2) {
  EntityType2["PLAYER"] = "player";
  EntityType2["SLIME"] = "slime";
  EntityType2["ATTACK"] = "attack";
})(EntityType || (EntityType = {}));

class CustomEntity extends __webpack_exports__Actor {
  static entityCollisionGroup = __webpack_exports__CollisionGroupManager.create("entities");
  netId;
  spawned = false;
  constructor(id, config = {}) {
    if (!config.collisionGroup)
      config.collisionGroup = CustomEntity.entityCollisionGroup;
    super(config);
    this.netId = id;
  }
  move(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }
  moveGradually(x, y, speed) {
    this.actions.moveTo(x, y, speed);
  }
  despawn() {
    this.kill();
  }
  spawn(x, y) {
    this.pos.x = x;
    this.pos.y = y;
    this.spawned = true;
  }
}

// client/src/actors/entities/player/player.ts
class Player extends CustomEntity {
  static MS_PER_ATTACK = 400;
  isRunning;
  facing;
  msSinceLastAttack;
  get isAttacking() {
    return this.msSinceLastAttack < Player.MS_PER_ATTACK;
  }
  constructor(netId) {
    super(netId, {
      width: 15 * PLAYER_SIZE,
      height: 23 * PLAYER_SIZE,
      collisionType: __webpack_exports__CollisionType.Active,
      collider: __webpack_exports__Shape.Box(10 * PLAYER_SIZE, 3 * PLAYER_SIZE, __webpack_exports__vec(0.5, 0.5), __webpack_exports__vec(0, 8 * PLAYER_SIZE))
    });
    this.isRunning = false;
    this.facing = "down";
    this.msSinceLastAttack = Player.MS_PER_ATTACK;
  }
  onInitialize(engine) {
    this.graphics.add("idle-down", animations.idleDownAnim);
    this.graphics.add("idle-up", animations.idleUpAnim);
    this.graphics.add("idle-right", animations.idleRightAnim);
    this.graphics.add("idle-left", animations.idleLeftAnim);
    this.graphics.add("run-down", animations.runDownAnim);
    this.graphics.add("run-up", animations.runUpAnim);
    this.graphics.add("run-right", animations.runRightAnim);
    this.graphics.add("run-left", animations.runLeftAnim);
    this.graphics.add("attack-down", animations.attackDownAnim);
    this.graphics.add("attack-up", animations.attackUpAnim);
    this.graphics.add("attack-right", animations.attackRightAnim);
    this.graphics.add("attack-left", animations.attackLeftAnim);
    this.graphics.add("death", animations.deathAnim);
    this.graphics.use("idle-down");
    this.z = 100;
  }
  onPreUpdate(engine, _delta) {
  }
  update(engine, delta) {
    super.update(engine, delta);
    if (this.isAttacking)
      this.graphics.use(`attack-${this.facing}`);
    else if (this.isRunning)
      this.graphics.use(`run-${this.facing}`);
    else
      this.graphics.use(`idle-${this.facing}`);
  }
  onPostUpdate(engine, delta) {
    super.onPostUpdate(engine, delta);
    this.msSinceLastAttack += delta;
  }
  attack() {
    if (this.isAttacking)
      return;
    this.msSinceLastAttack = 0;
  }
}

// client/src/actors/entities/player/attack.ts
class Attack extends CustomEntity {
  static attackColisionGroup = __webpack_exports__CollisionGroupManager.create("attacks");
  constructor(x, y) {
    super("attack", {
      x,
      y,
      width: 16,
      height: 16,
      collider: new __webpack_exports__CircleCollider({ radius: 40 }),
      collisionType: __webpack_exports__CollisionType.Passive,
      collisionGroup: Attack.attackColisionGroup
    });
  }
}

// client/src/actors/entities/player/player-own.ts
class PlayerOwn extends Player {
  lastXY;
  lastState;
  attackEntity;
  gameManager;
  wsManager;
  constructor(netId, gameManager, wsManager) {
    super(netId);
    this.lastState = { facing: "down", isRunning: false, isAttacking: false };
    this.attackEntity = null;
    this.gameManager = gameManager;
    this.wsManager = wsManager;
  }
  onInitialize(engine) {
    super.onInitialize(engine);
  }
  spawn(x, y) {
    super.spawn(x, y);
    this.lastXY = { x, y };
  }
  onPreUpdate(engine, _delta) {
    super.onPreUpdate(engine, _delta);
    const MAX_SPEED = 400;
    const key = engine.input.keyboard;
    if (key.wasPressed(__webpack_exports__Keys.Space)) {
      this.doAttack();
    }
    let targetVel = __webpack_exports__Vector.Zero;
    if (key.isHeld(__webpack_exports__Keys.A) || key.isHeld(__webpack_exports__Keys.D) || key.isHeld(__webpack_exports__Keys.W) || key.isHeld(__webpack_exports__Keys.S)) {
      this.isRunning = true;
      if (key.isHeld(__webpack_exports__Keys.W)) {
        this.facing = "up";
        targetVel = targetVel.add(__webpack_exports__Vector.Up);
      }
      if (key.isHeld(__webpack_exports__Keys.S)) {
        this.facing = "down";
        targetVel = targetVel.add(__webpack_exports__Vector.Down);
      }
      if (key.isHeld(__webpack_exports__Keys.A)) {
        this.facing = "left";
        targetVel = targetVel.add(__webpack_exports__Vector.Left);
      }
      if (key.isHeld(__webpack_exports__Keys.D)) {
        this.facing = "right";
        targetVel = targetVel.add(__webpack_exports__Vector.Right);
      }
    } else {
      this.isRunning = false;
    }
    targetVel.size = targetVel.size > 0 ? MAX_SPEED : 0;
    this.vel = targetVel;
  }
  update(engine, delta) {
    super.update(engine, delta);
    if (this.pos.x != this.lastXY.x || this.pos.y != this.lastXY.y) {
      this.wsManager.send("move", {
        id: this.netId,
        x: this.pos.x,
        y: this.pos.y
      });
    }
    if (this.facing != this.lastState.facing || this.isRunning != this.lastState.isRunning || this.isAttacking != this.lastState.isAttacking) {
      this.wsManager.send("update", {
        id: this.netId,
        facing: this.facing,
        isRunning: this.isRunning,
        isAttacking: this.isAttacking
      });
    }
    this.lastXY = { x: this.pos.x, y: this.pos.y };
    this.lastState = { facing: this.facing, isRunning: this.isRunning, isAttacking: this.isAttacking };
  }
  onPostUpdate(engine, delta) {
    super.onPostUpdate(engine, delta);
    if (this.attackEntity && this.msSinceLastAttack > Player.MS_PER_ATTACK / 2) {
      this.gameManager.removeEntity(this.attackEntity);
      this.attackEntity.kill();
      this.attackEntity = null;
    }
  }
  doAttack() {
    if (this.isAttacking)
      return;
    this.attack();
    this.attackEntity = new Attack(this.pos.x, this.pos.y);
    this.gameManager.addEntity(this.attackEntity);
    const collider = this.attackEntity.collider.get();
    collider.events.on("collisionstart", (e) => {
      if (!e.other.owner || !(e.other.owner instanceof CustomEntity))
        return;
      const target = e.other.owner;
      if (target.netId === this.netId)
        return;
      this.wsManager.send("attack", { id: this.netId, targetId: target.netId });
    });
  }
}

// client/src/actors/entities/slime/slime-sprites.ts
var SLIME_SIZE = 3;
var SLIME_ANIMATION_SPEED = 200;
var spriteSheet2 = __webpack_exports__SpriteSheet.fromImageSource({
  image: images.slimeImage,
  grid: {
    rows: 1,
    columns: 4,
    spriteWidth: 16,
    spriteHeight: 12
  },
  spacing: {
    originOffset: { x: 8, y: 12 },
    margin: { x: 16, y: 0 }
  }
});
for (let sprite2 of spriteSheet2.sprites) {
  sprite2.destSize = { height: 12 * SLIME_SIZE, width: 16 * SLIME_SIZE };
}
var animations2 = {
  idleAnim: __webpack_exports__Animation.fromSpriteSheet(spriteSheet2, __webpack_exports__range(0, 3), SLIME_ANIMATION_SPEED, __webpack_exports__AnimationStrategy.Loop)
};

// client/src/actors/entities/slime/slime.ts
class Slime extends CustomEntity {
  constructor(netId) {
    super(netId, {
      width: 16 * SLIME_SIZE,
      height: 12 * SLIME_SIZE,
      collisionType: __webpack_exports__CollisionType.Active,
      collider: __webpack_exports__Shape.Box(10 * SLIME_SIZE, 3 * SLIME_SIZE, __webpack_exports__vec(0.5, 0.5), __webpack_exports__vec(0, 4 * SLIME_SIZE))
    });
  }
  onInitialize(engine) {
    this.graphics.add("idle", animations2.idleAnim);
    this.graphics.use("idle");
  }
  onPreUpdate(_engine, _delta) {
  }
  update(_engine, _delta) {
  }
}

// client/src/actors/entities/entity-factory.ts
function createEntity(entityType, id) {
  switch (entityType) {
    case EntityType.PLAYER:
      return new Player(id);
    case EntityType.SLIME:
      return new Slime(id);
    default:
      throw new Error(`Entity type ${entityType} not found`);
  }
}

// client/src/game-manager.ts
class GameManager {
  game;
  ws;
  mainScene;
  entities = new Map;
  netId;
  ownPlayer;
  constructor(game, ws, mainScene) {
    this.game = game;
    this.ws = ws;
    this.mainScene = mainScene;
    this.registerHandlers();
  }
  init() {
    this.ws.waitForConnection().then(() => {
      this.ws.send("join", { playerName: "Player" });
    });
  }
  onLoaded() {
    this.ws.send("spawn", { id: this.netId });
  }
  registerHandlers() {
    this.ws.registerHandler("heartbeat", this.replyHeartbeat.bind(this));
    this.ws.registerHandler("join", this.handleJoin.bind(this));
    this.ws.registerHandler("leave", this.handleLeave.bind(this));
    this.ws.registerHandler("entity-spawn", this.handleEntitySpawn.bind(this));
    this.ws.registerHandler("entity-despawn", this.handleEntityDespawn.bind(this));
    this.ws.registerHandler("entity-move", this.handleEntityMove.bind(this));
    this.ws.registerHandler("player-update", this.handlePlayerUpdate.bind(this));
  }
  replyHeartbeat(data) {
    this.ws.send("heartbeat", { id: data.id });
  }
  handleJoin(data) {
    this.netId = data.id;
  }
  handleLeave(data) {
    this.ownPlayer.despawn();
  }
  handleEntitySpawn(data) {
    let entity6;
    if (data.id === this.netId) {
      entity6 = new PlayerOwn(data.id, this, this.ws);
      this.ownPlayer = entity6;
      this.game.currentScene.camera.strategy.elasticToActor(entity6, 0.5, 0.7);
    } else {
      entity6 = createEntity(data.entity, data.id);
    }
    this.entities.set(entity6.netId, entity6);
    entity6.spawn(data.x, data.y);
    this.mainScene.add(entity6);
  }
  handleEntityDespawn(data) {
    const entity6 = this.entities.get(data.id);
    if (entity6) {
      entity6.despawn();
      this.entities.delete(data.id);
    }
  }
  handleEntityMove(data) {
    const entity6 = this.entities.get(data.id);
    if (entity6 && entity6 !== this.ownPlayer) {
      if (data.speed === 0)
        entity6.move(data.x, data.y);
      else
        entity6.moveGradually(data.x, data.y, data.speed);
    }
  }
  handlePlayerUpdate(data) {
    const player3 = this.entities.get(data.id);
    if (player3 && player3 !== this.ownPlayer) {
      player3.facing = data.facing;
      player3.isRunning = data.isRunning;
      if (data.isAttacking)
        player3.attack();
    }
  }
  addEntity(entity6) {
    this.entities.set(entity6.netId, entity6);
    this.mainScene.add(entity6);
  }
  removeEntity(entity6) {
    this.entities.delete(entity6.netId);
    this.mainScene.remove(entity6);
  }
}

// client/src/game.ts
var wsManager = new WSManager;
var game = new __webpack_exports__Engine({});
var mainScene = new WorldScene(wsManager);
var gameManager = new GameManager(game, wsManager, mainScene);
gameManager.init();
loader.onUserAction().then(() => {
  gameManager.onLoaded.bind(gameManager)();
});
game.start(loader);
game.add("main", mainScene);
game.goToScene("main");
game.showDebug(true);
