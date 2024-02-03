var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb2, mod) => function __require() {
  return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/tslib/tslib.js"(exports, module) {
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __spreadArray2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __classPrivateFieldIn2;
    var __createBinding2;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends2 = function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest2 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate2 = function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar2 = function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding2(o, m, p);
      };
      __createBinding2 = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values2 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __spreadArray2 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding2(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn2 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__spreadArray", __spreadArray2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn2);
    });
  }
});

// node_modules/hey-listen/dist/index.js
var require_dist = __commonJS({
  "node_modules/hey-listen/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.warning = function() {
    };
    exports.invariant = function() {
    };
    if (true) {
      exports.warning = function(check, message) {
        if (!check && typeof console !== "undefined") {
          console.warn(message);
        }
      };
      exports.invariant = function(check, message) {
        if (!check) {
          throw new Error(message);
        }
      };
    }
  }
});

// resources/js/plugins/spinbutton.js
function spinbutton_default(Alpine) {
  Alpine.directive("spinbutton", (el, directive) => {
    if (!directive.value)
      handleSpinbutton(el, Alpine);
  }).before("bind");
}
function handleSpinbutton(el, Alpine) {
  Alpine.bind(el, {
    "role": "spinbutton",
    "taxindex": "0",
    "contenteditable": "true",
    "spellcheck": "false",
    "autocapitalize": "off",
    "autocorrect": "off",
    "enterkeyhint": "next",
    "inputmode": "numeric",
    "x-data"() {
      return {
        __min: null,
        __max: null,
        __value: null,
        __step: null,
        __isActive: false,
        init() {
          queueMicrotask(() => {
            this.__value = Alpine.bound(el, "value", null);
            this.__min = Alpine.bound(el, "min", null);
            this.__max = Alpine.bound(el, "max", null);
            this.__step = Alpine.bound(el, "step", null);
          });
        },
        __handleValue(value) {
          value = parseInt(value);
          if (this.__min !== null && value < this.__min)
            value = this.__min;
          if (this.__max !== null && value > this.__max)
            value = this.__max;
          if (value !== this.__value) {
            this.__value = value;
            this.$dispatch("change");
          }
        },
        __getNextValue(value) {
          let multipler = this.__value ? parseInt(this.__value) : 0;
          return multipler * 10 + value;
        },
        __findNextSpinbutton() {
          let next = el.nextElementSibling;
          while (next) {
            if (next.getAttribute("role") === "spinbutton")
              return next;
            next = next.nextElementSibling;
          }
          return null;
        },
        __findPreviousSpinbutton() {
          let previous = el.previousElementSibling;
          while (previous) {
            if (previous.getAttribute("role") === "spinbutton")
              return previous;
            previous = previous.previousElementSibling;
          }
          return null;
        },
        __subValue() {
          if (this.__value !== null) {
            let newValue = parseInt(this.__value.toString().slice(0, -1));
            this.__value = isNaN(newValue) ? null : newValue;
            this.$dispatch("change");
          }
        }
      };
    },
    "x-bind:aria-valuenow"() {
      return this.__value;
    },
    "x-bind:aria-valuemin"() {
      return this.__min;
    },
    "x-bind:aria-valuemax"() {
      return this.__max;
    },
    "x-on:keypress.stop.prevent"(event) {
      if (isNaN(event.key) || event.code === "Space") {
        return;
      }
      if (this.__max !== null && this.__getNextValue(0) >= this.__max) {
        this.__value = null;
      }
      this.__handleValue(this.__getNextValue(parseInt(event.key)));
      if (this.__max !== null && this.__getNextValue(0) >= this.__max) {
        let nextSpinbutton = this.__findNextSpinbutton();
        if (nextSpinbutton) {
          this.$nextTick(() => {
            nextSpinbutton.focus({ preventScroll: true });
          });
        }
      }
    },
    "x-on:keydown.backspace.stop.prevent"() {
      this.__subValue();
    },
    "x-on:keydown.delete.stop.prevent"() {
      this.__subValue();
    },
    "x-on:keydown.up.stop.prevent"() {
      let nextValue = parseInt(this.__value ?? "0") + 1;
      if (this.__max !== null && nextValue > this.__max)
        nextValue = this.__min;
      this.__handleValue(nextValue);
    },
    "x-on:keydown.down.stop.prevent"() {
      let nextValue = parseInt(this.__value ?? "0") - 1;
      if (this.__min !== null && nextValue < this.__min)
        nextValue = this.__max;
      this.__handleValue(nextValue);
    },
    "x-on:keydown.right.stop.prevent"() {
      let nextSpinbutton = this.__findNextSpinbutton();
      if (nextSpinbutton) {
        this.$nextTick(() => {
          nextSpinbutton.focus({ preventScroll: true });
        });
      }
    },
    "x-on:keydown.left.stop.prevent"() {
      let previousSpinbutton = this.__findPreviousSpinbutton();
      if (previousSpinbutton) {
        this.$nextTick(() => {
          previousSpinbutton.focus({ preventScroll: true });
        });
      }
    },
    "x-on:focus"() {
      this.__isActive = true;
    },
    "x-on:blur"() {
      this.__isActive = false;
    }
  });
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      element,
      padding = 0
    } = options || {};
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements
    } = state;
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const min3 = paddingObject[minProp];
    const max3 = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = within(min3, center, max3);
    const shouldAddOffset = getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min3 ? paddingObject[minProp] : paddingObject[maxProp]) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min3 ? min3 - center : max3 - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2
      }
    };
  }
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, value) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === "x";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === "function" ? value(state) : value;
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: "offset",
    options: value,
    async fn(state) {
      const {
        x,
        y
      } = state;
      const diffCoords = await convertValueToCoords(state, value);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || "").toLowerCase() : "";
}
var uaString;
function getUAString() {
  if (uaString) {
    return uaString;
  }
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    uaString = uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
    return uaString;
  }
  return navigator.userAgent;
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle$1(element);
  const backdropFilter = css.backdropFilter || css.WebkitBackdropFilter;
  return css.transform !== "none" || css.perspective !== "none" || (backdropFilter ? backdropFilter !== "none" : false) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective"].some((value) => css.willChange.includes(value)) || ["paint", "layout", "strict", "content"].some((value) => {
    const contain = css.contain;
    return contain != null ? contain.includes(value) : false;
  });
}
function isClientRectVisualViewportBased() {
  return /^((?!chrome|android).)*safari/i.test(getUAString());
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width);
  let height = parseFloat(css.height);
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    fallback: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
var FALLBACK_SCALE = {
  x: 1,
  y: 1
};
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return FALLBACK_SCALE;
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    fallback
  } = getCssDimensions(domElement);
  let x = (fallback ? round(rect.width) : rect.width) / width;
  let y = (fallback ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale2 = FALLBACK_SCALE;
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale2 = getScale(offsetParent);
      }
    } else {
      scale2 = getScale(element);
    }
  }
  const win = domElement ? getWindow(domElement) : window;
  const addVisualOffsets = isClientRectVisualViewportBased() && isFixedStrategy;
  let x = (clientRect.left + (addVisualOffsets ? ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0 : 0)) / scale2.x;
  let y = (clientRect.top + (addVisualOffsets ? ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0 : 0)) / scale2.y;
  let width = clientRect.width / scale2.x;
  let height = clientRect.height / scale2.y;
  if (domElement) {
    const win2 = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win2.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win2) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += iframeRect.x;
      y += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale2 = {
    x: 1,
    y: 1
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale2 = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale2.x,
    height: rect.height * scale2.y,
    x: rect.x * scale2.x - scroll.scrollLeft * scale2.x + offsets.x,
    y: rect.y * scale2.y - scroll.scrollTop * scale2.y + offsets.y
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return parentNode.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isClientRectVisualViewportBased();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale2 = isHTMLElement(element) ? getScale(element) : {
    x: 1,
    y: 1
  };
  const width = element.clientWidth * scale2.x;
  const height = element.clientHeight * scale2.y;
  const x = left * scale2.x;
  const y = top * scale2.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const mutableRect = {
      ...clippingAncestor
    };
    if (isClientRectVisualViewportBased()) {
      var _win$visualViewport, _win$visualViewport2;
      const win = getWindow(element);
      mutableRect.x -= ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0;
      mutableRect.y -= ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0;
    }
    rect = mutableRect;
  }
  return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const containingBlock = isContainingBlock(currentNode);
    if (computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !containingBlock && !currentContainingBlockComputedStyle : !containingBlock && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  return getCssDimensions(element);
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, true, strategy === "fixed", offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
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
var platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...await getDimensionsFn(floating)
      }
    };
  },
  getClientRects: (element) => Array.from(element.getClientRects()),
  isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
};
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll: _ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestorScroll = _ancestorScroll && !animationFrame;
  const ancestors = ancestorScroll || ancestorResize ? [...isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  let observer = null;
  if (elementResize) {
    observer = new ResizeObserver(() => {
      update();
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _observer;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// resources/js/plugins/floating.js
function floating_default(Alpine) {
  Alpine.directive("floating", (el, { value, expression }, { evaluate, cleanup }) => {
    if (!value)
      handleRoot(el, expression, evaluate, cleanup, Alpine);
    else if (value === "reference")
      handleReference(el, Alpine);
    else if (value === "content")
      handleContent(el, Alpine);
    else if (value === "arrow")
      handleArrow(el, Alpine);
  }).before("bind");
  Alpine.magic("floating", (el) => {
    const $data = Alpine.$data(el);
    return {
      get isShown() {
        return $data.__isShown;
      },
      get placementSide() {
        return $data.__placementSide;
      },
      show() {
        $data.__show();
      },
      hide() {
        $data.__hide();
      }
    };
  });
}
function handleRoot(el, expression, evaluate, cleanup, Alpine) {
  let options = {
    placement: "top",
    offset: 12,
    delay: 0,
    flip: true,
    shift: true,
    transition: true
  };
  if (expression) {
    Object.assign(options, evaluate(expression));
  }
  Alpine.bind(el, {
    "x-data"() {
      return {
        init() {
          cleanup(() => {
            this.__hide();
          });
        },
        __update() {
          let floatingReference = this.__referenceEl ?? el;
          if (floatingReference.offsetParent === null) {
            this.$dispatch("floating-disappear");
            return;
          }
          if (!floatingReference || !this.__floatingEl)
            return;
          computePosition2(floatingReference, this.__floatingEl, {
            placement: options.placement,
            middleware: [
              offset(options.offset),
              options.flip && flip(),
              options.shift && shift(),
              this.__arrowEl && arrow({ element: this.__arrowEl })
            ]
          }).then(({ x, y, placement, middlewareData }) => {
            this.__placement = placement;
            Object.assign(this.__floatingEl.style, {
              left: `${x}px`,
              top: `${y}px`
            });
            if (this.__arrowEl) {
              const { x: arrowX, y: arrowY } = middlewareData.arrow;
              const staticSide = {
                top: "bottom",
                right: "left",
                bottom: "top",
                left: "right"
              }[placement.split("-")[0]];
              Object.assign(this.__arrowEl.style, {
                left: arrowX != null ? `${arrowX}px` : "",
                top: arrowY != null ? `${arrowY}px` : "",
                right: "",
                bottom: "",
                [staticSide]: "0px"
              });
            }
          });
        },
        __placement: options.placement,
        __isShown: false,
        __autoupdateCleanup: null,
        __referenceEl: null,
        __floatingEl: null,
        __arrowEl: null,
        get __placementSide() {
          return this.__placement ? this.__placement.split("-")[0] : null;
        },
        __show() {
          this.__isShown = true;
          this.__update();
          let floatingReference = this.__referenceEl ?? el;
          if (!floatingReference || !this.__floatingEl)
            return;
          this.__handleAutoupdateCleanup();
          this.__autoupdateCleanup = autoUpdate(floatingReference, this.__floatingEl, () => {
            this.__update();
          });
          this.$dispatch("floating-show");
        },
        __hide() {
          this.__handleAutoupdateCleanup();
          this.__isShown = false;
          this.$dispatch("floating-hide");
        },
        __handleAutoupdateCleanup() {
          if (typeof this.__autoupdateCleanup === "function")
            this.__autoupdateCleanup();
        }
      };
    }
  });
}
function handleArrow(el, Alpine) {
  Alpine.bind(el, {
    "x-init"() {
      this.__arrowEl = el;
    }
  });
}
function handleContent(el, Alpine) {
  Alpine.bind(el, {
    "x-init"() {
      this.$data.__floatingEl = el;
    },
    "x-show"() {
      return this.$data.__isShown;
    },
    "x-effect"() {
      this.$data.__floatingEl.style.display = this.$data.__isShown ? "block" : "none";
    }
  });
}
function handleReference(el, Alpine) {
  Alpine.bind(el, {
    "x-init"() {
      this.__referenceEl = el;
    }
  });
}

// resources/js/plugins/fieldset.js
function fieldset_default(Alpine) {
  Alpine.directive("field", (el, { value }) => {
    if (!value)
      handleField(el, Alpine);
  }).before("bind");
  Alpine.directive("label", (el, { value }) => {
    if (!value)
      handleLabel(el, Alpine);
  }).before("bind");
  Alpine.directive("input", (el, { value }) => {
    if (!value)
      handleInput(el, Alpine);
  }).before("bind");
  Alpine.directive("switch", (el, { value }) => {
    if (!value)
      handleSwitch(el, Alpine);
  }).before("bind");
  Alpine.directive("error", Alpine.skipDuringClone((el, { value }, { cleanup }) => {
    if (!value)
      handleError(el, Alpine, cleanup);
  })).before("bind");
  Alpine.directive("description", Alpine.skipDuringClone((el, { value }, { cleanup }) => {
    if (!value)
      handleDescription(el, Alpine, cleanup);
  })).before("bind");
  Alpine.magic("switch", (el) => {
    let $data = Alpine.$data(el);
    return {
      get isChecked() {
        return $data._checked;
      },
      get isDisabled() {
        return $data._disabled;
      },
      toggle() {
        $data._toggle();
      },
      enable() {
        $data._disabled = false;
      },
      disable() {
        $data._disabled = true;
      }
    };
  });
}
function handleField(el, Alpine) {
  Alpine.bind(el, {
    "x-id"() {
      return ["field-label", "field-input", "field-description", "field-error"];
    },
    "x-data"() {
      return {
        _labelEl: null,
        _descriptionEl: null,
        _errorEl: null
      };
    }
  });
}
function handleLabel(el, Alpine) {
  const fieldEl = el.closest("[x-field]");
  if (!fieldEl)
    return;
  Alpine.bind(el, {
    "x-bind:id"() {
      return this.$id("field-label");
    },
    "x-bind:for"() {
      return this.$id("field-input");
    }
  });
}
function handleInput(el, Alpine) {
  Alpine.bind(el, {
    "x-data"() {
      return {
        _invalid: false,
        init() {
          this._invalid = Alpine.bound(el, "invalid", "false") === "true";
        }
      };
    },
    "x-bind:id"() {
      return this.$id("field-input");
    },
    "x-bind:aria-invalid"() {
      this._invalid = Alpine.bound(el, "invalid", "false") === "true";
      if (this._invalid)
        return true;
    },
    "x-bind:describedby"() {
      const ids = [];
      if (this.$data._descriptionEl)
        ids.push(this.$data._descriptionEl.id);
      if (this._invalid && this.$data._errorEl)
        ids.push(this.$data._errorEl.id);
      if (ids.length)
        return ids.join(" ");
    }
  });
}
function handleSwitch(el, Alpine) {
  Alpine.bind(el, {
    "role": "switch",
    "tabindex": "0",
    "x-modelable": "_checked",
    "x-data"() {
      return {
        init() {
          queueMicrotask(() => {
            this._checked = Alpine.bound(el, "checked", false);
          });
        },
        _checked: false,
        _disabled: false,
        _toggle() {
          this._checked = !this._checked;
        }
      };
    },
    "x-bind:id"() {
      return this.$id("field-input");
    },
    "x-bind:disabled"() {
      return this._disabled;
    },
    "x-bind:aria-checked"() {
      return this._checked;
    },
    "x-bind:aria-labelledby"() {
      return this._labelEl && this.$id("input-label");
    },
    "x-bind:aria-describedby"() {
      return this._descriptionEl && this.$id("field-description");
    },
    "x-on:click.prevent"() {
      this._toggle();
    }
  });
}
function handleError(el, Alpine, cleanup) {
  Alpine.bind(el, {
    "x-data"() {
      return {
        init() {
          this.$data._errorEl = el;
          el.id = this.$id("field-error");
          cleanup(() => {
            this.$data._errorEl = null;
          });
        }
      };
    }
  });
}
function handleDescription(el, Alpine, cleanup) {
  Alpine.bind(el, {
    "x-data"() {
      return {
        init() {
          this.$data._descriptionEl = el;
          el.id = this.$id("field-description");
          cleanup(() => {
            this.$data._descriptionEl = null;
          });
        }
      };
    }
  });
}

// resources/js/plugins/listbox.js
function listbox_default(Alpine) {
  Alpine.directive("listbox", (el, directive, { evaluate }) => {
    if (!directive.value)
      handleListbox(el, Alpine);
    else if (directive.value === "group")
      handleGroup(el, Alpine);
    else if (directive.value === "option")
      handleOption(el, evaluate(directive.expression), Alpine);
    else if (directive.value === "options")
      handleOptions(el, Alpine);
    else if (directive.value === "trigger")
      handleTrigger(el, Alpine);
    else if (directive.value === "dropdown")
      handleDropdown(el, directive.expression, evaluate, Alpine);
  }).before("bind");
  Alpine.magic("listbox", (el) => {
    const isListboxEl = el.hasAttribute("[x-listbox]");
    if (!isListboxEl) {
      const listboxEl = Alpine.$data(el).__listboxEl;
      if (listboxEl)
        el = listboxEl;
    }
    const $data = Alpine.$data(el);
    return {
      get selected() {
        const multiple = $data.__multiple ?? false;
        const selectedOptions = $data.__selectedOptions ?? /* @__PURE__ */ new Map();
        const selected = [];
        selectedOptions.forEach((data) => selected.push(data));
        return multiple ? selected : selected[0] ?? null;
      }
    };
  });
  Alpine.magic("listboxOption", (el) => {
    const isOption = Alpine.bound(el, "role") === "option";
    if (!isOption) {
      const optionEl = el.closest("[x-listbox\\:option]");
      if (optionEl)
        el = optionEl;
    }
    let $data = Alpine.$data(el);
    let state = $data.__getState(el);
    return {
      get isActive() {
        return state.active;
      },
      get isSelected() {
        return state.selected;
      },
      get isDisabled() {
        return state.disabled;
      },
      ...$data.__data ?? {
        value: null,
        name: null
      }
    };
  });
}
function handleListbox(el, Alpine) {
  const inDropdown = el.closest("[x-listbox\\:dropdown]") !== null;
  if (inDropdown) {
    Alpine.bind(el, {
      "x-floating:content"() {
      },
      "x-init"() {
        this.$data.__listboxEl = el;
      },
      "x-on:click.outside"() {
        this.$data.__hideAndHandleFocus();
      },
      "x-on:keydown.escape.stop.prevent"() {
        this.$data.__hideAndHandleFocus();
      },
      "x-on:change"() {
        if (!this.$data.__multiple)
          this.$data.__hideAndHandleFocus();
      }
    });
  }
  Alpine.bind(el, {
    "tabindex": "0",
    "role": "listbox",
    "aria-orientation": "vertical",
    "x-modelable": "__selectedValue",
    "x-data"() {
      return {
        __optionStates: /* @__PURE__ */ new Map(),
        __selectedOptions: /* @__PURE__ */ new Map(),
        __selectedValue: null,
        __activeOptionEl: null,
        __firstOptionEl: null,
        __lastOptionEl: null,
        __optionsEl: null,
        __multiple: false,
        init() {
          queueMicrotask(() => {
            this.__multiple = Alpine.bound(el, "multiple-options", false);
          });
          this.$watch("__selectedValue", () => {
            let nextOptionEl = this.__optionsEl.firstElementChild;
            this.__iterateEnabledOptions(nextOptionEl, (optionEl) => {
              Alpine.$data(optionEl).__syncStateWithSelectedModelable();
            });
          });
        },
        get __selected() {
          return this.__multiple && this.__selectedValue ? this.__selectedValue.map((value) => this.__buildSelectedOptionData(value)) : this.__buildSelectedOptionData(this.__selectedValue);
        },
        __iterateEnabledOptions(nextEl, callback) {
          if (!nextEl)
            return;
          const parentGroupElement = nextEl.parentElement.getAttribute("role") === "group" ? nextEl.parentElement : null;
          while (nextEl) {
            if (this.__isEnabledOption(nextEl)) {
              callback(nextEl);
            } else if (nextEl.getAttribute("role") === "group") {
              return this.__iterateEnabledOptions(nextEl.firstElementChild, callback);
            }
            nextEl = nextEl.nextElementSibling;
          }
          if (parentGroupElement) {
            return this.__iterateEnabledOptions(parentGroupElement.nextElementSibling, callback);
          }
        },
        __buildSelectedOptionData(value) {
          return this.__selectedOptions.get(value);
        },
        __getState(optionEl) {
          return this.__optionStates.get(optionEl) ?? {
            active: false,
            selected: false,
            disabled: false
          };
        },
        __activateFirstOption() {
          if (this.__activeOptionEl)
            Alpine.$data(this.__activeOptionEl).__deactivate();
          this.__activateNextOption(this.__optionsEl.firstElementChild);
        },
        __activateLastOption() {
          if (this.__activeOptionEl)
            Alpine.$data(this.__activeOptionEl).__deactivate();
          this.__activatePreviousOption(this.__optionsEl.lastElementChild);
        },
        __isEnabledOption(optionEl) {
          const isDisabled = optionEl.getAttribute("disabled") === "disabled";
          const isOption = optionEl.getAttribute("role") === "option";
          return isOption && !isDisabled;
        },
        __activateNextOption(nextEl) {
          if (!nextEl)
            return;
          const parentGroupElement = nextEl.parentElement.getAttribute("role") === "group" ? nextEl.parentElement : null;
          while (nextEl) {
            if (this.__isEnabledOption(nextEl)) {
              return Alpine.$data(nextEl).__activate();
            } else if (nextEl.getAttribute("role") === "group") {
              return this.__activateNextOption(nextEl.firstElementChild);
            }
            nextEl = nextEl.nextElementSibling;
          }
          if (parentGroupElement) {
            return this.__activateNextOption(parentGroupElement.nextElementSibling);
          }
        },
        __activatePreviousOption(previousEl) {
          if (!previousEl)
            return;
          const parentGroupElement = previousEl.parentElement.getAttribute("role") === "group" ? previousEl.parentElement : null;
          while (previousEl) {
            if (this.__isEnabledOption(previousEl)) {
              return Alpine.$data(previousEl).__activate();
            } else if (previousEl.getAttribute("role") === "group") {
              return this.__activatePreviousOption(previousEl.lastElementChild);
            }
            previousEl = previousEl.previousElementSibling;
          }
          if (parentGroupElement) {
            return this.__activatePreviousOption(parentGroupElement.previousElementSibling);
          }
        },
        __activateSelectedOption() {
          if (this.__activeOptionEl)
            Alpine.$data(this.__activeOptionEl).__deactivate();
          this.__optionStates.forEach((optionState, optionEl) => {
            if (!optionState.selected || optionState.disabled || this.__activeOptionEl)
              return;
            Alpine.$data(optionEl).__activate();
          });
        },
        __updateValue() {
          let selectedValue = this.__multiple ? [] : null;
          this.__optionStates.forEach((optionState, optionEl) => {
            if (!optionState.selected)
              return;
            this.__multiple ? selectedValue.push(Alpine.$data(optionEl).__data.value) : selectedValue = Alpine.$data(optionEl).__data.value;
          });
          if (this.__selectedValue !== selectedValue) {
            this.__selectedValue = selectedValue;
            this.$dispatch("change");
          }
        }
      };
    },
    "x-on:keydown.down.stop.prevent"() {
      this.__activeOptionEl ? this.__activateNextOption(this.__activeOptionEl.nextElementSibling) : this.__activateFirstOption();
    },
    "x-on:keydown.up.stop.prevent"() {
      this.__activeOptionEl ? this.__activatePreviousOption(this.__activeOptionEl.previousElementSibling) : this.__activateLastOption();
    },
    "x-on:keydown.enter.stop.prevent"() {
      if (this.__activeOptionEl)
        Alpine.$data(this.__activeOptionEl).__select();
    },
    "x-on:keydown.space.stop.prevent"() {
      if (this.__activeOptionEl)
        Alpine.$data(this.__activeOptionEl).__select();
    }
  });
}
function handleGroup(el, Alpine) {
  Alpine.bind(el, {
    "role": "group"
  });
}
function handleOption(el, optionData, Alpine) {
  Alpine.bind(el, {
    "tabindex": "-1",
    "role": "option",
    "x-data"() {
      return {
        init() {
          queueMicrotask(() => {
            const disabled = Alpine.bound(el, "disabled", false) || (optionData.disabled ?? false);
            if (disabled)
              return this.__disable();
            const selected = Alpine.bound(el, "selected", false) || (optionData.selected ?? false);
            if (selected)
              this.__select(false);
          });
        },
        __value: null,
        __name: null,
        __data: optionData,
        __activate() {
          const $data = this.$data;
          if ($data.__activeOptionEl === el)
            return;
          if ($data.__getState(el).disabled)
            return;
          if ($data.__activeOptionEl)
            Alpine.$data($data.__activeOptionEl).__deactivate();
          $data.__activeOptionEl = el;
          $data.__optionStates.set(el, {
            active: true,
            disabled: false,
            selected: $data.__getState(el).selected
          });
          this.$nextTick(() => {
            $data.__activeOptionEl.scrollIntoView({
              block: "nearest"
            });
          });
        },
        __deactivate() {
          const $data = this.$data;
          const state = $data.__getState(el);
          if (state.disabled)
            return;
          state.selected ? state.active = false : $data.__optionStates.delete(el);
          if ($data.__activeOptionEl === el)
            $data.__activeOptionEl = null;
        },
        __disable() {
          const $data = this.$data;
          Alpine.bind(el, {
            "disabled": "true"
          });
          $data.__optionStates.set(el, {
            active: false,
            selected: false,
            disabled: true
          });
        },
        __select(activate = true) {
          const $data = this.$data;
          const state = $data.__getState(el);
          if (state.disabled)
            return;
          if ($data.__multiple) {
            $data.__optionStates.set(el, {
              active: activate,
              selected: !$data.__getState(el).selected,
              disabled: false
            });
          } else {
            $data.__optionStates.forEach((optionState, optionEl) => {
              if (optionState.selected) {
                this.__optionStates.delete(optionEl);
              }
            });
            $data.__optionStates.set(el, {
              active: activate,
              selected: true,
              disabled: false
            });
          }
          $data.__updateValue();
        },
        __syncStateWithSelectedModelable() {
          const $data = this.$data;
          const state = $data.__getState(el);
          if (state.disabled)
            return;
          const isSelected = $data.__multiple ? $data.__selectedValue.includes(this.__data.value) : $data.__selectedValue === this.__data.value;
          if (isSelected) {
            $data.__optionStates.set(el, {
              active: state.active,
              selected: true,
              disabled: state.disabled
            });
            $data.__selectedOptions.set(this.__data.value, this.__data);
          } else {
            $data.__optionStates.delete(el);
            $data.__selectedOptions.delete(this.__data.value);
          }
        }
      };
    },
    "x-bind:aria-disabled"() {
      return this.$data.__getState(el).disabled;
    },
    "x-bind:aria-selected"() {
      return this.$data.__getState(el).selected;
    },
    "x-on:mousemove"() {
      this.__activate();
    },
    "x-on:mouseleave"() {
      this.__deactivate();
    },
    "x-on:click"() {
      this.__select();
    }
  });
}
function handleOptions(el, Alpine) {
  Alpine.bind(el, {
    "x-init"() {
      this.$data.__optionsEl = el;
    }
  });
}
function handleDropdown(el, expression, evaluate, Alpine) {
  let options = {
    placement: "bottom-start",
    offset: 2,
    flip: true,
    shift: false
  };
  if (expression) {
    Object.assign(options, evaluate(expression));
  }
  Alpine.bind(el, {
    "x-floating"() {
      return options;
    },
    "x-id"() {
      return ["dropdown-content"];
    },
    "x-data"() {
      return {
        __triggerEl: null,
        __listboxEl: null,
        __hideAndHandleFocus() {
          this.$data.__hide();
          this.$nextTick(() => {
            this.__triggerEl.focus({ preventScroll: true });
          });
        },
        __showAndActivateFirstOption() {
          this.$data.__show();
          if (!Alpine.$data(this.__listboxEl).__selectedValue) {
            Alpine.$data(this.__listboxEl).__activateFirstOption();
          }
          this.$nextTick(() => {
            this.__listboxEl.focus();
          });
        },
        __toggle() {
          if (this.$data.__isShown) {
            this.$data.__hide();
          } else {
            this.__show();
            this.$nextTick(() => {
              this.__triggerEl.blur();
              this.__listboxEl.focus();
            });
          }
        }
      };
    },
    "x-on:floating-show"() {
      Alpine.$data(this.__listboxEl).__activateSelectedOption();
    }
  });
}
function handleTrigger(el, Alpine) {
  Alpine.bind(el, {
    "aria-haspopup": "true",
    "x-floating:reference"() {
    },
    "x-init"() {
      this.__triggerEl = el;
    },
    "x-bind:aria-expanded"() {
      return this.$data.__isShown;
    },
    "x-bind:aria-controls"() {
      return this.$data.__isShown && this.$id("dropdown-content");
    },
    "x-on:click"() {
      this.$data.__toggle();
    },
    "x-on:keydown.space.prevent.stop"() {
      this.$data.__showAndActivateFirstOption();
    },
    "x-on:keydown.enter.prevent.stop"() {
      this.$data.__showAndActivateFirstOption();
    },
    "x-on:keydown.down.stop.prevent"() {
      this.$data.__showAndActivateFirstOption();
    }
  });
}

// resources/js/utils/animationHandler.js
function animationHandler() {
  return {
    isBusy: false,
    _pendingActions: [],
    _duration: 100,
    // ms
    afterRelease(callback) {
      if (this.isBusy) {
        this._pendingActions.push(callback);
      } else {
        callback();
      }
    },
    clearPendingActions() {
      this._pendingActions = [];
    },
    ifReleased(callback) {
      if (!this.isBusy) {
        callback();
      }
    },
    start() {
      this.isBusy = true;
    },
    release() {
      this.isBusy = false;
      this._pendingActions.forEach((callback, index) => {
        callback();
        delete this._pendingActions[index];
      });
    }
  };
}

// node_modules/tslib/modules/index.js
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn
} = import_tslib.default;

// node_modules/popmotion/dist/es/animations/utils/find-spring.mjs
var import_hey_listen = __toESM(require_dist(), 1);

// node_modules/popmotion/dist/es/utils/clamp.mjs
var clamp = (min3, max3, v) => Math.min(Math.max(v, min3), max3);

// node_modules/popmotion/dist/es/animations/utils/find-spring.mjs
var safeMin = 1e-3;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
  let envelope;
  let derivative;
  (0, import_hey_listen.warning)(duration <= maxDuration * 1e3, "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
  duration = clamp(minDuration, maxDuration, duration / 1e3);
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a = exponentialDecay - velocity;
      const b = calcAngularFreq(undampedFreq2, dampingRatio);
      const c = Math.exp(-delta);
      return safeMin - a / b * c;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a * b;
    };
    derivative = (undampedFreq2) => {
      const a = Math.exp(-undampedFreq2 * duration);
      const b = (velocity - undampedFreq2) * (duration * duration);
      return a * b;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1e3;
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// node_modules/popmotion/dist/es/animations/generators/spring.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
  return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, options);
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0, mass: 1 });
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring(_a) {
  var { from = 0, to = 1, restSpeed = 2, restDelta } = _a, options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);
  const state = { done: false, value: from };
  let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
  let resolveSpring = zero;
  let resolveVelocity = zero;
  function createSpring() {
    const initialVelocity = velocity ? -(velocity / 1e3) : 0;
    const initialDelta = to - from;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
    if (restDelta === void 0) {
      restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
    }
    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
      };
      resolveVelocity = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t) => to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
  }
  createSpring();
  return {
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        const currentVelocity = resolveVelocity(t) * 1e3;
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? to : current;
      return state;
    },
    flipTarget: () => {
      velocity = -velocity;
      [from, to] = [to, from];
      createSpring();
    }
  };
}
spring.needsInterpolation = (a, b) => typeof a === "string" || typeof b === "string";
var zero = (_t) => 0;

// node_modules/popmotion/dist/es/utils/progress.mjs
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

// node_modules/popmotion/dist/es/utils/mix.mjs
var mix = (from, to, progress2) => -progress2 * from + progress2 * to + from;

// node_modules/style-value-types/dist/es/utils.mjs
var clamp2 = (min3, max3) => (v) => Math.max(Math.min(v, max3), min3);
var sanitize = (v) => v % 1 ? Number(v.toFixed(5)) : v;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
  return typeof v === "string";
}

// node_modules/style-value-types/dist/es/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = Object.assign(Object.assign({}, number), { transform: clamp2(0, 1) });
var scale = Object.assign(Object.assign({}, number), { default: 1 });

// node_modules/style-value-types/dist/es/numbers/units.mjs
var createUnitType = (unit) => ({
  test: (v) => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v) => percent.parse(v) / 100, transform: (v) => percent.transform(v * 100) });

// node_modules/style-value-types/dist/es/color/utils.mjs
var isColorString = (type, testProp) => (v) => {
  return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (!isString(v))
    return v;
  const [a, b, c, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a),
    [bName]: parseFloat(b),
    [cName]: parseFloat(c),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/style-value-types/dist/es/color/hsla.mjs
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/style-value-types/dist/es/color/rgba.mjs
var clampRgbUnit = clamp2(0, 255);
var rgbUnit = Object.assign(Object.assign({}, number), { transform: (v) => Math.round(clampRgbUnit(v)) });
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/style-value-types/dist/es/color/hex.mjs
function parseHex(v) {
  let r = "";
  let g = "";
  let b = "";
  let a = "";
  if (v.length > 5) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b = v.substr(5, 2);
    a = v.substr(7, 2);
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b = v.substr(3, 1);
    a = v.substr(4, 1);
    r += r;
    g += g;
    b += b;
    a += a;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/style-value-types/dist/es/color/index.mjs
var color = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v) => {
    return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// node_modules/style-value-types/dist/es/complex/index.mjs
var colorToken = "${c}";
var numberToken = "${n}";
function test(v) {
  var _a, _b, _c, _d;
  return isNaN(v) && isString(v) && ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}
function analyse(v) {
  if (typeof v === "number")
    v = `${v}`;
  const values = [];
  let numColors = 0;
  const colors = v.match(colorRegex);
  if (colors) {
    numColors = colors.length;
    v = v.replace(colorRegex, colorToken);
    values.push(...colors.map(color.parse));
  }
  const numbers = v.match(floatRegex);
  if (numbers) {
    v = v.replace(floatRegex, numberToken);
    values.push(...numbers.map(number.parse));
  }
  return { values, numColors, tokenised: v };
}
function parse(v) {
  return analyse(v).values;
}
function createTransformer(v) {
  const { values, numColors, tokenised } = analyse(v);
  const numValues = values.length;
  return (v2) => {
    let output = tokenised;
    for (let i = 0; i < numValues; i++) {
      output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v2[i]) : sanitize(v2[i]));
    }
    return output;
  };
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parse(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = { test, parse, createTransformer, getAnimatableNone };

// node_modules/popmotion/dist/es/utils/mix-color.mjs
var import_hey_listen2 = __toESM(require_dist(), 1);

// node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/popmotion/dist/es/utils/mix-color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
var notAnimatable = (color2) => `'${color2}' is not an animatable color. Use the equivalent color code instead.`;
var mixColor = (from, to) => {
  let fromColorType = getColorType(from);
  let toColorType = getColorType(to);
  (0, import_hey_listen2.invariant)(!!fromColorType, notAnimatable(from));
  (0, import_hey_listen2.invariant)(!!toColorType, notAnimatable(to));
  let fromColor = fromColorType.parse(from);
  let toColor = toColorType.parse(to);
  if (fromColorType === hsla) {
    fromColor = hslaToRgba(fromColor);
    fromColorType = rgba;
  }
  if (toColorType === hsla) {
    toColor = hslaToRgba(toColor);
    toColorType = rgba;
  }
  const blended = Object.assign({}, fromColor);
  return (v) => {
    for (const key in blended) {
      if (key !== "alpha") {
        blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
      }
    }
    blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
};

// node_modules/popmotion/dist/es/utils/inc.mjs
var isNum = (v) => typeof v === "number";

// node_modules/popmotion/dist/es/utils/pipe.mjs
var combineFunctions = (a, b) => (v) => b(a(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);

// node_modules/popmotion/dist/es/utils/mix-complex.mjs
var import_hey_listen3 = __toESM(require_dist(), 1);
function getMixer(origin, target) {
  if (isNum(origin)) {
    return (v) => mix(origin, target, v);
  } else if (color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}
var mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i) => getMixer(fromThis, to[i]));
  return (v) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }
    return output;
  };
};
var mixObject = (origin, target) => {
  const output = Object.assign(Object.assign({}, origin), target);
  const blendValue = {};
  for (const key in output) {
    if (origin[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
};
function analyse2(value) {
  const parsed = complex.parse(value);
  const numValues = parsed.length;
  let numNumbers = 0;
  let numRGB = 0;
  let numHSL = 0;
  for (let i = 0; i < numValues; i++) {
    if (numNumbers || typeof parsed[i] === "number") {
      numNumbers++;
    } else {
      if (parsed[i].hue !== void 0) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }
  return { parsed, numNumbers, numRGB, numHSL };
}
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyse2(origin);
  const targetStats = analyse2(target);
  const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
  } else {
    (0, import_hey_listen3.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return (p) => `${p > 0 ? target : origin}`;
  }
};

// node_modules/popmotion/dist/es/utils/interpolate.mjs
var import_hey_listen4 = __toESM(require_dist(), 1);
var mixNumber = (from, to) => (p) => mix(from, to, p);
function detectMixerFactory(v) {
  if (typeof v === "number") {
    return mixNumber;
  } else if (typeof v === "string") {
    if (color.test(v)) {
      return mixColor;
    } else {
      return mixComplex;
    }
  } else if (Array.isArray(v)) {
    return mixArray;
  } else if (typeof v === "object") {
    return mixObject;
  }
}
function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i] : ease;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function fastInterpolate([from, to], [mixer]) {
  return (v) => mixer(progress(from, to, v));
}
function slowInterpolate(input, mixers) {
  const inputLength = input.length;
  const lastInputIndex = inputLength - 1;
  return (v) => {
    let mixerIndex = 0;
    let foundMixerIndex = false;
    if (v <= input[0]) {
      foundMixerIndex = true;
    } else if (v >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }
    if (!foundMixerIndex) {
      let i = 1;
      for (; i < inputLength; i++) {
        if (input[i] > v || i === lastInputIndex) {
          break;
        }
      }
      mixerIndex = i - 1;
    }
    const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
    return mixers[mixerIndex](progressInRange);
  };
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
  const inputLength = input.length;
  (0, import_hey_listen4.invariant)(inputLength === output.length, "Both input and output ranges must be the same length");
  (0, import_hey_listen4.invariant)(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");
  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }
  const mixers = createMixers(output, ease, mixer);
  const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
  return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/popmotion/dist/es/easing/utils.mjs
var reverseEasing = (easing) => (p) => 1 - easing(1 - p);
var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
var createExpoIn = (power) => (p) => Math.pow(p, power);
var createBackIn = (power) => (p) => p * p * ((power + 1) * p - power);
var createAnticipate = (power) => {
  const backEasing = createBackIn(power);
  return (p) => (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};

// node_modules/popmotion/dist/es/easing/index.mjs
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4 / 11;
var BOUNCE_SECOND_THRESHOLD = 8 / 11;
var BOUNCE_THIRD_THRESHOLD = 9 / 10;
var easeIn = createExpoIn(2);
var easeOut = reverseEasing(easeIn);
var easeInOut = mirrorEasing(easeIn);
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circOut);
var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = reverseEasing(backIn);
var backInOut = mirrorEasing(backIn);
var anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356 / 361;
var cb = 35442 / 1805;
var cc = 16061 / 1805;
var bounceOut = (p) => {
  if (p === 1 || p === 0)
    return p;
  const p2 = p * p;
  return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = reverseEasing(bounceOut);

// node_modules/popmotion/dist/es/animations/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
  const numValues = values.length;
  return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset2, duration) {
  return offset2.map((o) => o * duration);
}
function keyframes({ from = 0, to = 1, ease, offset: offset2, duration = 300 }) {
  const state = { done: false, value: from };
  const values = Array.isArray(to) ? to : [from, to];
  const times = convertOffsetToTimes(offset2 && offset2.length === values.length ? offset2 : defaultOffset(values), duration);
  function createInterpolator() {
    return interpolate(times, values, {
      ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
    });
  }
  let interpolator = createInterpolator();
  return {
    next: (t) => {
      state.value = interpolator(t);
      state.done = t >= duration;
      return state;
    },
    flipTarget: () => {
      values.reverse();
      interpolator = createInterpolator();
    }
  };
}

// node_modules/popmotion/dist/es/animations/generators/decay.mjs
function decay({ velocity = 0, from = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget }) {
  const state = { done: false, value: from };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - from;
  return {
    next: (t) => {
      const delta = -amplitude * Math.exp(-t / timeConstant);
      state.done = !(delta > restDelta || delta < -restDelta);
      state.value = state.done ? target : target + delta;
      return state;
    },
    flipTarget: () => {
    }
  };
}

// node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs
var types = { keyframes, spring, decay };
function detectAnimationFromOptions(config) {
  if (Array.isArray(config.to)) {
    return keyframes;
  } else if (types[config.type]) {
    return types[config.type];
  }
  const keys = new Set(Object.keys(config));
  if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) {
    return keyframes;
  } else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
    return spring;
  }
  return keyframes;
}

// node_modules/framesync/dist/es/on-next-frame.mjs
var defaultTimestep = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

// node_modules/framesync/dist/es/create-render-step.mjs
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing2 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing2;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing2)
          numToRun = toRun.length;
      }
      return callback;
    },
    cancel: (callback) => {
      const index = toRunNextFrame.indexOf(callback);
      if (index !== -1)
        toRunNextFrame.splice(index, 1);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      if (isProcessing2) {
        flushNextFrame = true;
        return;
      }
      isProcessing2 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }
      isProcessing2 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}

// node_modules/framesync/dist/es/index.mjs
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
var sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process2, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process2, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);
  return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frame);
var processFrame = (timestamp) => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};
var startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame(processFrame);
};
var es_default = sync;

// node_modules/popmotion/dist/es/animations/utils/elapsed.mjs
function loopElapsed(elapsed, duration, delay = 0) {
  return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}

// node_modules/popmotion/dist/es/animations/index.mjs
var framesync = (update) => {
  const passTimestamp = ({ delta }) => update(delta);
  return {
    start: () => es_default.update(passTimestamp, true),
    stop: () => cancelSync.update(passTimestamp)
  };
};
function animate(_a) {
  var _b, _c;
  var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = __rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to } = options;
  let driverControls;
  let repeatCount = 0;
  let computedDuration = options.duration;
  let latest;
  let isComplete = false;
  let isForwardPlayback = true;
  let interpolateFromNumber;
  const animator = detectAnimationFromOptions(options);
  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
    interpolateFromNumber = interpolate([0, 100], [from, to], {
      clamp: false
    });
    from = 0;
    to = 100;
  }
  const animation = animator(Object.assign(Object.assign({}, options), { from, to }));
  function repeat() {
    repeatCount++;
    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror")
        animation.flipTarget();
    }
    isComplete = false;
    onRepeat && onRepeat();
  }
  function complete() {
    driverControls.stop();
    onComplete && onComplete();
  }
  function update(delta) {
    if (!isForwardPlayback)
      delta = -delta;
    elapsed += delta;
    if (!isComplete) {
      const state = animation.next(Math.max(0, elapsed));
      latest = state.value;
      if (interpolateFromNumber)
        latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
    if (isComplete) {
      if (repeatCount === 0)
        computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
      if (repeatCount < repeatMax) {
        hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }
  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update);
    driverControls.start();
  }
  autoplay && play();
  return {
    stop: () => {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
}

// resources/js/utils/overlayHandler.js
function overlayHandler(el, options) {
  return {
    _show: false,
    _opacity: false,
    _translateX: false,
    _translateY: false,
    _placementSide: "top",
    _animationHandler: animationHandler(),
    _autoUpdateHandler: null,
    _options: options,
    _el: el,
    _arrowEl: null,
    _duration: 100,
    _instance: null,
    show(triggerEl) {
      this._show = true;
      this._animationHandler.start();
      this._placementSide = this._options.placement.split("-")[0];
      const overlayOptions = {
        placement: this._options.placement,
        middleware: [
          offset(this._options.offset),
          this._options.flip && flip(),
          this._options.shift && shift({ padding: 5 }),
          this._arrowEl && arrow({ element: this._arrowEl })
        ]
      };
      const runCompute = () => {
        computePosition2(triggerEl, this._el, overlayOptions).then(({ x, y, placement, middlewareData }) => {
          this._placementSide = placement.split("-")[0];
          Object.assign(this._el.style, {
            left: `${x}px`,
            top: `${y}px`
          });
          if (this._arrowEl) {
            const { x: arrowX, y: arrowY } = middlewareData.arrow;
            const staticSide = {
              top: "bottom",
              right: "left",
              bottom: "top",
              left: "right"
            }[placement.split("-")[0]];
            Object.assign(this._arrowEl.style, {
              left: arrowX != null ? `${arrowX}px` : "",
              top: arrowY != null ? `${arrowY}px` : "",
              right: "",
              bottom: "",
              [staticSide]: "0px"
            });
          }
        });
      };
      this._autoUpdateHandler = autoUpdate(triggerEl, this._el, () => runCompute());
      this._instance = animate({
        from: {
          opacity: 0,
          translateY: {
            "top": 10,
            "bottom": -10
          }[this._placementSide] || 0,
          translateX: {
            "right": -10,
            "left": 10
          }[this._placementSide] || 0
        },
        to: {
          opacity: 1,
          translateY: 0,
          translateX: 0
        },
        ease: easeInOut,
        duration: this._duration,
        onUpdate: (latest) => {
          this._opacity = latest.opacity;
          this._translateY = latest.translateY;
          this._translateX = latest.translateX;
        },
        onComplete: () => {
          this._animationHandler.release();
        },
        onStop: () => {
          this._animationHandler.clearPendingActions();
        }
      });
    },
    hide() {
      this._instance.stop();
      animate({
        from: {
          opacity: this._opacity
        },
        to: {
          opacity: 0
        },
        ease: easeInOut,
        duration: this._duration / 2,
        onUpdate: (latest) => {
          this._opacity = latest.opacity;
        },
        onComplete: () => {
          this._show = false;
          this.cleanup();
        }
      });
    },
    toggle(triggerEl) {
      this._show ? this.hide() : this.show(triggerEl);
    },
    cleanup() {
      this._releaseAutoUpdateHandler();
    },
    get styles() {
      return {
        display: this._show ? "block" : "none",
        opacity: this._opacity,
        transform: `translate(${this._translateX}px, ${this._translateY}px)`,
        pointerEvents: this._animationHandler.isBusy ? "none" : "auto"
      };
    },
    _releaseAutoUpdateHandler() {
      typeof this._autoUpdateHandler === "function" && this._autoUpdateHandler();
    }
  };
}

// resources/js/plugins/popover.js
function popover_default(Alpine) {
  Alpine.directive("popover", Alpine.skipDuringClone((el, { value, expression }, { evaluate, cleanup }) => {
    if (value === null)
      handlePopover(el, evaluate(expression || "{}"), cleanup, Alpine);
    else if (value === "trigger")
      handlePopoverTrigger(el, evaluate(expression || "[]"), Alpine);
  })).before("bind");
  Alpine.magic("popover", (el) => {
    const $data = Alpine.$data(el);
    return {
      toggle() {
        const run = () => {
          if (!$data.target)
            return;
          Alpine.$data($data.target).toggle();
        };
        $data.target ? run() : $data.$nextTick(run);
      }
      // hide() {
      //     if(!$data.target) return;
      //     Alpine.$data($data.target).hide();
      // },
      // get placementSide() {
      //     if(!$data.target) return 'top';
      //     return Alpine.$data($data.target).placementSide;
      // }
    };
  });
}
function handlePopover(el, options, cleanup, Alpine) {
  const popoverOptions = {
    placement: "bottom",
    offset: 6,
    flip: true,
    shift: true,
    ...options
  };
  Alpine.$data(el).target = el;
  Alpine.bind(el, {
    "x-init"() {
      cleanup(() => this._handler.cleanup());
    },
    "x-data"() {
      return {
        _handler: overlayHandler(el, popoverOptions),
        toggle() {
          this._handler.toggle(this.$data.trigger);
        }
      };
    },
    "x-bind:style"() {
      return this._handler.styles;
    }
  });
}
function handlePopoverTrigger(el, triggers, Alpine) {
  Alpine.bind(el, {
    "x-data"() {
      return {
        get target() {
          return this._targetEl;
        },
        set target(el2) {
          this._targetEl = el2;
        },
        get trigger() {
          return el;
        },
        _targetEl: null
      };
    },
    "x-bind:aria-expanded"() {
      return this.$data.__isShown;
    },
    "x-bind:aria-controls"() {
      return this.$data.__isShown && this.$id("popover-content");
    },
    "x-on:click"() {
      triggers.includes("click") && this.$popover.toggle();
    },
    "x-on:keydown.escape.stop.prevent"() {
      this.$data.__hide();
    }
  });
}

// resources/js/plugins/tooltip.js
function tooltip_default(Alpine) {
  const activeTooltips = /* @__PURE__ */ new Map();
  Alpine.directive("tooltip", Alpine.skipDuringClone((el, { value, expression }, { evaluate, cleanup }) => {
    if (value === null)
      handleTooltip(el, evaluate(expression || "{}"), cleanup, Alpine, activeTooltips);
    else if (value === "trigger")
      handleTooltipTrigger(el, evaluate(expression || "{}"), Alpine);
    else if (value === "reference")
      handleTooltipReference(el, Alpine);
    else if (value === "arrow")
      handleTooltipArrow(el, Alpine);
  })).before("bind");
  Alpine.magic("tooltip", (el) => {
    const $data = Alpine.$data(el);
    return {
      show(duration) {
        const run = () => {
          if (!$data.target)
            return;
          Alpine.$data($data.target).show($data.trigger, duration);
        };
        if (!$data.target)
          $data.$nextTick(run);
        run();
      },
      hide() {
        if (!$data.target)
          return;
        Alpine.$data($data.target).hide();
      },
      get placementSide() {
        if (!$data.target)
          return "top";
        return Alpine.$data($data.target).placementSide;
      }
    };
  });
}
function handleTooltipArrow(el, Alpine) {
  Alpine.bind(el, {
    "x-init"() {
      this.$data._arrowEl = el;
    }
  });
}
function handleTooltipReference(el, Alpine) {
  Alpine.bind(el, {
    "x-init"() {
      this.$data._referenceEl = el;
    }
  });
}
function handleTooltip(el, options, cleanup, Alpine, activeTooltips) {
  const tooltipOptions = {
    placement: "top",
    offset: 6,
    flip: true,
    shift: true,
    ...options
  };
  Alpine.$data(el).target = el;
  const animationDuration = 100;
  Alpine.bind(el, {
    "role": "tooltip",
    "x-data"() {
      return {
        show(triggerEl, duration) {
          if (duration) {
            clearInterval(this._durationInterval);
            this._durationInterval = setInterval(() => {
              this.hide();
            }, duration);
          }
          if (this._show)
            return this._animationHandler.clearPendingActions();
          this._show = true;
          activeTooltips.set(el, this._show);
          this._animationHandler.start();
          this._opacity = 0;
          const options2 = {
            placement: tooltipOptions.placement,
            middleware: [
              offset(tooltipOptions.offset),
              tooltipOptions.flip && flip(),
              tooltipOptions.shift && shift({ padding: 5 }),
              this._arrowEl && arrow({ element: this._arrowEl })
            ]
          };
          const runCompute = () => {
            computePosition2(triggerEl, el, options2).then(({ x, y, placement, middlewareData }) => {
              this._placementSide = placement.split("-")[0];
              Object.assign(el.style, {
                left: `${x}px`,
                top: `${y}px`
              });
              if (this._arrowEl) {
                const { x: arrowX, y: arrowY } = middlewareData.arrow;
                const staticSide = {
                  top: "bottom",
                  right: "left",
                  bottom: "top",
                  left: "right"
                }[placement.split("-")[0]];
                Object.assign(this._arrowEl.style, {
                  left: arrowX != null ? `${arrowX}px` : "",
                  top: arrowY != null ? `${arrowY}px` : "",
                  right: "",
                  bottom: "",
                  [staticSide]: "0px"
                });
              }
            });
          };
          this._autoUpdateHandler = autoUpdate(triggerEl, el, () => runCompute());
          animate({
            from: {
              opacity: 0,
              translateY: {
                "top": 10,
                "bottom": -10
              }[this._placementSide] || 0,
              translateX: {
                "right": -10,
                "left": 10
              }[this._placementSide] || 0
            },
            to: {
              opacity: 1,
              translateY: 0,
              translateX: 0
            },
            ease: easeInOut,
            duration: animationDuration,
            onUpdate: (latest) => {
              this._opacity = latest.opacity;
              this._translateY = latest.translateY;
              this._translateX = latest.translateX;
            },
            onComplete: () => {
              this._animationHandler.release();
            }
          });
          cleanup(() => this._releaseAutoUpdateHandler());
        },
        hide() {
          this.$nextTick(() => {
            this._animationHandler.afterRelease(() => {
              this._show = false;
              this._releaseAutoUpdateHandler();
            });
          });
        },
        get placementSide() {
          return this._placementSide;
        },
        _show: false,
        _opacity: 0,
        _translateY: 0,
        _translateX: 0,
        _arrowEl: null,
        _placementSide: "top",
        _autoUpdateHandler: null,
        _animationHandler: animationHandler(),
        _durationInterval: null,
        _releaseAutoUpdateHandler() {
          typeof this._autoUpdateHandler === "function" && this._autoUpdateHandler();
        }
      };
    },
    "x-bind:style"() {
      return {
        display: this._show ? "block" : "none",
        opacity: this._opacity,
        transform: `translate(${this._translateX}px, ${this._translateY}px)`,
        pointerEvents: this._animationHandler.isBusy ? "none" : "auto"
      };
    },
    "x-bind:id"() {
      return this.$id("tooltip");
    }
  });
}
function handleTooltipTrigger(el, options, Alpine) {
  const triggerOptions = {
    hover: true,
    focus: true,
    ...options
  };
  Alpine.bind(el, {
    "x-id"() {
      return ["tooltip"];
    },
    "x-data"() {
      return {
        get target() {
          return this._targetEl;
        },
        set target(el2) {
          this._targetEl = el2;
        },
        get trigger() {
          return this._referenceEl || el;
        },
        _targetEl: null,
        _referenceEl: null
      };
    },
    "x-bind:aria-describedby"() {
      return this.$id("tooltip");
    },
    "x-on:mouseenter"() {
      triggerOptions.hover && this.$tooltip.show();
    },
    "x-on:mouseleave"() {
      triggerOptions.hover && this.$tooltip.hide();
    },
    "x-on:focusin"() {
      triggerOptions.focus && this.$tooltip.show();
    },
    "x-on:focusout"() {
      triggerOptions.focus && this.$tooltip.hide();
    },
    "x-on:keydown.escape.stop.prevent"() {
      triggerOptions.focus && this.$tooltip.hide();
    }
  });
}

// resources/js/plugins/slider.js
function slider_default(Alpine) {
  Alpine.directive("slider", (el, directive) => {
    if (!directive.value)
      handleSlider(el, Alpine);
    else if (directive.value === "thumb")
      handleThumb(el, Alpine);
    else if (directive.value === "range")
      handleRange(el, Alpine);
  }).before("bind");
  Alpine.magic("thumb", (el) => {
    const $data = Alpine.$data(el);
    return {
      get value() {
        return $data.__value;
      }
    };
  });
}
function handleSlider(el, Alpine) {
  Alpine.bind(el, {
    "x-data"() {
      return {
        init() {
          queueMicrotask(() => {
            this.__min = parseFloat(Alpine.bound(this.$el, "min", 0));
            this.__max = parseFloat(Alpine.bound(this.$el, "max", 100));
            this.__step = parseFloat(Alpine.bound(this.$el, "step", 1));
          });
        },
        __min: 0,
        __max: 100,
        __step: 1,
        __values: [],
        __dragThumbEl: null,
        __thumbs: [],
        __currentPositionX(thumbEl) {
          const sliderRect = el.getBoundingClientRect();
          const trackWidthPerPercent = sliderRect.width / (this.__max - this.__min);
          const trackPercentX = (this.$event.clientX - sliderRect.left) / (sliderRect.width / 100);
          const multiplier = (trackPercentX - 50) / 100;
          const clientX = this.$event.clientX + multiplier * (thumbEl ? thumbEl.getBoundingClientRect().width : 0);
          const trackPositionX = (clientX - sliderRect.left) / trackWidthPerPercent;
          let currentPositionX = this.__min + trackPositionX;
          currentPositionX = Math.max(this.__min, currentPositionX);
          currentPositionX = Math.min(this.__max, currentPositionX);
          return currentPositionX;
        },
        __setValue(value, index) {
          const nextValidValue = value > this.__values[index] ? this.__findNextPositiveValidValue(value, index) : this.__findNextNegativeValidValue(value, index);
          const nextIndex = index + 1;
          if (nextIndex in this.__values && nextValidValue > this.__values[nextIndex]) {
            this.__values[index] = this.__values[nextIndex];
            return;
          }
          const prevIndex = index - 1;
          if (prevIndex in this.__values && nextValidValue < this.__values[prevIndex]) {
            this.__values[index] = this.__values[prevIndex];
            return;
          }
          this.__values[index] = nextValidValue;
        },
        __findNextPositiveValidValue(value, index) {
          let nearestValidValue = this.__values[index];
          let nearestValidValueOffset = null;
          for (let i = this.__values[index]; i <= this.__max; i += this.__step) {
            const offsetToValue = Math.abs(i - value);
            if (nearestValidValueOffset === null || offsetToValue < nearestValidValueOffset) {
              nearestValidValue = i;
              nearestValidValueOffset = offsetToValue;
            }
          }
          return nearestValidValue;
        },
        __findNextNegativeValidValue(value, index) {
          let nearestValidValue = this.__values[index];
          let nearestValidValueOffset = null;
          for (let i = this.__values[index]; i >= this.__min; i -= this.__step) {
            const offsetToValue = Math.abs(i - value);
            if (nearestValidValueOffset === null || offsetToValue < nearestValidValueOffset) {
              nearestValidValue = i;
              nearestValidValueOffset = offsetToValue;
            }
          }
          return nearestValidValue;
        }
      };
    },
    "x-on:pointerdown"(e) {
      if (e.pointerType === "mouse" && e.button !== 0)
        return;
      if (!this.__dragThumbEl) {
        let minValueOffsetRange = null;
        this.__thumbs.forEach((thumb, index) => {
          const thumbValue = this.__values[index];
          const currentPositionX = this.__currentPositionX(thumb);
          const valueOffsetRange = Math.abs(currentPositionX - thumbValue);
          if (minValueOffsetRange === null || valueOffsetRange <= minValueOffsetRange) {
            this.__dragThumbEl = thumb;
            minValueOffsetRange = valueOffsetRange;
          }
        });
      }
      const $thumbData = Alpine.$data(this.__dragThumbEl);
      this.__setValue(this.__currentPositionX(this.__dragThumbEl), $thumbData.__index());
      this.$focus.focus(this.__dragThumbEl);
    },
    "x-on:pointermove.document"() {
      if (!this.__dragThumbEl)
        return;
      const $thumbData = Alpine.$data(this.__dragThumbEl);
      this.__setValue(this.__currentPositionX(this.__dragThumbEl), $thumbData.__index());
    },
    "x-on:pointerup.document"() {
      if (!this.__dragThumbEl)
        return;
      Alpine.$data(this.__dragThumbEl).__triggerChangeEvent();
      this.__dragThumbEl.blur();
      this.__dragThumbEl = null;
    }
  });
}
function handleThumb(el, Alpine) {
  const $data = Alpine.$data(el);
  const index = $data.__thumbs.push(el) - 1;
  Alpine.bind(el, {
    "role": "slider",
    "tabindex": "0",
    "x-modelable": `__values[${index}]`,
    "x-data"() {
      return {
        __previousValue: null,
        init() {
          queueMicrotask(() => {
            this.__values[index] = parseFloat(Alpine.bound(this.$el, "value", 0));
          });
        },
        get __value() {
          return this.__values[index];
        },
        __percentByValue() {
          const trackRange = this.__max - this.__min;
          return (this.__value - this.__min) * 100 / trackRange;
        },
        __currentOffsetX() {
          const multiplier = (this.__percentByValue() - 50) / 100;
          return el.getBoundingClientRect().width * multiplier;
        },
        __nextValue() {
          if (this.__max >= this.__value + this.__step) {
            this.__setValue(this.__value + this.__step, index);
            this.__triggerChangeEvent();
          }
        },
        __prevValue() {
          if (this.__min <= this.__value - this.__step) {
            this.__setValue(this.__value - this.__step, index);
            this.__triggerChangeEvent();
          }
        },
        __index() {
          return index;
        },
        __triggerChangeEvent() {
          if (this.__previousValue !== this.__value)
            this.$dispatch("change");
          this.__previousValue = this.__value;
        }
      };
    },
    "x-bind:aria-valuemin"() {
      return this.__min;
    },
    "x-bind:aria-valuemax"() {
      return this.__max;
    },
    "x-bind:aria-valuenow"() {
      return this.__values[index];
    },
    "x-bind:aria-valuetext"() {
      return this.__values[index];
    },
    "x-bind:style"() {
      const offsetX = this.__currentOffsetX();
      const calcType = offsetX >= 0 ? "-" : "+";
      return {
        left: `calc(${this.__percentByValue()}% ${calcType} ${Math.abs(offsetX)}px)`
      };
    },
    "x-on:keydown"(e) {
      if (["ArrowUp", "ArrowRight"].includes(e.key)) {
        this.__nextValue();
      } else if (["ArrowDown", "ArrowLeft"].includes(e.key)) {
        this.__prevValue();
      }
    }
  });
}
function handleRange(el, Alpine) {
  Alpine.bind(el, {
    "x-bind:style"() {
      let buildCalcString = (thumbEl) => {
        const $thumbData = Alpine.$data(thumbEl);
        const percent2 = $thumbData.__percentByValue();
        const offsetX = $thumbData.__currentOffsetX();
        const calcType = offsetX >= 0 ? "-" : "+";
        return `${percent2}% ${calcType} ${Math.abs(offsetX)}px`;
      };
      let minCalc = "0px";
      let maxCalc = "0px";
      let thumbCount = this.__thumbs.length;
      if (thumbCount === 1) {
        maxCalc = buildCalcString(this.__thumbs[0]);
      } else if (thumbCount > 1) {
        minCalc = buildCalcString(this.__thumbs[0]);
        maxCalc = buildCalcString(this.__thumbs[thumbCount - 1]);
      }
      return {
        marginLeft: `calc(${minCalc})`,
        width: `calc((${maxCalc}) - (${minCalc}))`
      };
    }
  });
}

// resources/js/plugins/menu.js
function menu_default(Alpine) {
  Alpine.directive("menu", (el, directive, { evaluate }) => {
    if (!directive.value)
      handleMenu(el, Alpine);
    else if (directive.value === "item")
      handleItem(el, Alpine);
    else if (directive.value === "submenu")
      handleSubmenu(el, Alpine);
    else if (directive.value === "content")
      handleContent2(el, Alpine);
    else if (directive.value === "trigger")
      handleTrigger2(el, Alpine);
    else if (directive.value === "dropdown")
      handleDropdown2(el, directive.expression, evaluate, Alpine);
  }).before("bind");
  Alpine.magic("menuitem", (el) => {
    const isMenuitem = Alpine.bound(el, "role") === "menuitem";
    if (!isMenuitem) {
      const menuitemEl = el.closest("[x-menu\\:item]");
      if (menuitemEl)
        el = menuitemEl;
    }
    const state = typeof Alpine.$data(el).__getState === "undefined" ? {
      active: false,
      disabled: false,
      expanded: false
    } : Alpine.$data(el).__getState(el);
    return {
      get isActive() {
        return state.active;
      },
      get isDisabled() {
        return state.disabled;
      },
      get isExpanded() {
        return state.expanded;
      }
    };
  });
  Alpine.magic("dropdownMenu", (el) => {
    if (!el.hasAttribute("[x-menu\\:dropdown]")) {
      el = Alpine.$data(el).__triggerEl;
    }
    const $data = Alpine.$data(el);
    return {
      ...$data.$floating,
      hideAndFocus() {
        $data.__hideAndHandleFocus();
      }
    };
  });
  Alpine.magic("submenu", (el) => {
    const $data = Alpine.$data(el);
    return {
      ...$data.$floating
    };
  });
}
function handleMenu(el, Alpine) {
  Alpine.bind(el, {
    "role": "menu",
    "aria-orientation": "vertical",
    "x-data"() {
      return {
        __itemStates: /* @__PURE__ */ new Map(),
        __activeEl: null,
        __firstItemEl: null,
        __lastItemEl: null,
        __getState(itemEl) {
          return this.__itemStates.get(itemEl) ?? {
            active: false,
            expanded: false,
            disabled: false
          };
        },
        __activateFirstItem() {
          if (this.__activeEl)
            Alpine.$data(this.__activeEl).__deactivate();
          this.__activateNextItem(el.firstElementChild);
        },
        __activateLastItem() {
          if (this.__activeEl)
            Alpine.$data(this.__activeEl).__deactivate();
          this.__activatePreviousItem(el.lastElementChild);
        },
        __activateNextItem(nextEl) {
          while (nextEl) {
            const isDisabled = nextEl.getAttribute("disabled") === "disabled";
            const isMenuitem = nextEl.getAttribute("role") === "menuitem";
            if (isMenuitem && !isDisabled) {
              return Alpine.$data(nextEl).__activate();
            }
            nextEl = nextEl.nextElementSibling;
          }
        },
        __activatePreviousItem(previousEl) {
          while (previousEl) {
            const isDisabled = previousEl.getAttribute("disabled") === "disabled";
            const isMenuitem = previousEl.getAttribute("role") === "menuitem";
            if (isMenuitem && !isDisabled) {
              Alpine.$data(previousEl).__activate();
              break;
            }
            previousEl = previousEl.previousElementSibling;
          }
        }
      };
    },
    "x-on:keydown.down.stop.prevent"() {
      this.__activeEl ? this.__activateNextItem(this.__activeEl.nextElementSibling) : this.__activateFirstItem();
    },
    "x-on:keydown.up.stop.prevent"() {
      this.__activeEl ? this.__activatePreviousItem(this.__activeEl.previousElementSibling) : this.__activateLastItem();
    },
    "x-on:click.outside.stop.prevent"() {
      if (this.__activeEl)
        Alpine.$data(this.__activeEl).__deactivate();
    }
  });
}
function handleItem(el, Alpine) {
  if (typeof Alpine.$data(el).__getState === "undefined")
    return;
  Alpine.bind(el, {
    "role": "menuitem",
    "aria-orientation": "vertical",
    "x-data"() {
      return {
        init() {
          const disabled = Alpine.bound(el, "disabled", false);
          if (disabled)
            return this.__disable();
          if (!this.$data.__firstItemEl)
            this.$data.__firstItemEl = el;
          this.$data.__lastItemEl = el;
        },
        __activate() {
          if (this.$data.__activeEl === el)
            return;
          if (this.$data.__getState(el).disabled)
            return;
          if (this.$data.__activeEl)
            Alpine.$data(this.$data.__activeEl).__deactivate();
          this.$data.__activeEl = el;
          this.$data.__itemStates.set(el, {
            active: true,
            disabled: false,
            expanded: false
          });
          this.$nextTick(() => {
            el.focus();
          });
        },
        __deactivate() {
          if (this.$data.__getState(el).disabled)
            return;
          el.blur();
          this.$data.__itemStates.delete(el);
          if (this.$data.__activeEl === el)
            this.$data.__activeEl = null;
        },
        __disable() {
          Alpine.bind(el, {
            "disabled": "true"
          });
          this.__itemStates.set(el, {
            active: false,
            expanded: false,
            disabled: true
          });
        }
      };
    },
    "x-bind:aria-disabled"() {
      return this.$data.__getState(el).disabled;
    },
    "x-bind:tabindex"() {
      const state = this.$data.__getState(el);
      if (state.disabled)
        return void 0;
      return state.active ? "0" : "-1";
    },
    "x-on:click.stop"() {
    },
    "x-on:mousemove"() {
      this.__activate();
    },
    "x-on:mouseleave"() {
      this.__deactivate();
    },
    "x-on:blur"() {
      const state = this.$data.__getState(el);
      if (state.active)
        this.$data.__itemStates.delete(el);
    }
  });
}
function handleSubmenu(el, Alpine) {
  Alpine.bind(el, {
    "role": "menuitem",
    "aria-orientation": "vertical",
    "aria-haspopup": "menu",
    "x-data"() {
      return {
        init() {
          const disabled = Alpine.bound(el, "disabled", false);
          if (disabled)
            return this.$data.__disable(el);
        },
        __activate(expand = false) {
          const state = this.$data.__getState(el);
          if (state.disabled)
            return;
          if (this.$data.__activeEl === el && state.expanded === expand) {
            el.focus();
            return;
          }
          if (this.$data.__activeEl)
            Alpine.$data(this.$data.__activeEl).__deactivate();
          this.$data.__activeEl = el;
          this.$data.__itemStates.set(el, {
            active: true,
            disabled: false,
            expanded: expand
          });
          this.$nextTick(() => {
            el.focus();
          });
          if (expand)
            this.$submenu.show();
        },
        __expand() {
          this.__activate(true);
        },
        __expandAndHandleFocus() {
          const submenuEl = this.__floatingEl.querySelector("[x-menu]");
          if (!submenuEl)
            return;
          Alpine.$data(this.__floatingEl).__show();
          Alpine.$data(submenuEl).__activateFirstItem();
        },
        __collapse() {
          this.__deactivate();
          this.__activate(false);
        },
        __deactivate() {
          if (this.$data.__getState(el).disabled)
            return;
          el.blur();
          this.$data.__itemStates.delete(el);
          if (this.$data.__activeEl === el)
            this.$data.__activeEl = null;
          this.$submenu.hide();
        },
        __disable() {
          Alpine.bind(el, {
            "disabled": "true"
          });
          this.__itemStates.set(el, {
            active: false,
            expanded: false,
            disabled: true
          });
        }
      };
    },
    "x-bind:aria-expanded"() {
      return this.$data.__getState(el).expanded;
    },
    "x-bind:aria-disabled"() {
      return this.$data.__getState(el).disabled;
    },
    "x-bind:tabindex"() {
      const state = this.$data.__getState(el);
      if (state.disabled)
        return void 0;
      return state.active ? "0" : "-1";
    },
    "x-on:click.stop"() {
    },
    "x-on:mousemove"() {
      this.__expand();
    },
    "x-on:keydown.right.stop.prevent"() {
      this.__expandAndHandleFocus();
    },
    "x-on:keydown.enter.stop.prevent"() {
      this.__expandAndHandleFocus();
    },
    "x-on:keydown.space.stop.prevent"() {
      this.__expandAndHandleFocus();
    },
    "x-on:floating-disappear"() {
      if (this.$data.__activeEl)
        Alpine.$data(this.$data.__activeEl).__deactivate();
    },
    "x-on:floating-hide"() {
      if (this.$data.__activeEl)
        Alpine.$data(this.$data.__activeEl).__deactivate();
    },
    "x-floating"() {
      return {
        placement: "right-start",
        shift: false,
        offset: 2
      };
    },
    "x-floating:reference"() {
    }
  });
}
function handleDropdown2(el, expression, evaluate, Alpine) {
  let options = {
    placement: "bottom-start",
    offset: 2,
    flip: true,
    shift: true
  };
  if (expression) {
    Object.assign(options, evaluate(expression));
  }
  Alpine.bind(el, {
    "x-floating"() {
      return options;
    },
    "x-id"() {
      return ["dropdown-content"];
    },
    "x-data"() {
      return {
        __triggerEl: null,
        __hideAndHandleFocus() {
          this.$data.__hide();
          this.$nextTick(() => {
            this.__triggerEl.focus({ preventScroll: true });
          });
        },
        __toggle() {
          if (this.$data.__isShown) {
            this.$data.__hide();
          } else {
            this.__triggerEl.blur();
            this.__show();
            this.$nextTick(() => {
              this.__floatingEl.focus();
            });
          }
        },
        __showAndFocusFirstItem() {
          this.__triggerEl.blur();
          this.__show();
          const menuEl = this.$data.__floatingEl.querySelector("[x-menu]");
          const menuFirstItemEl = Alpine.$data(menuEl).__firstItemEl;
          Alpine.$data(menuFirstItemEl).__activate();
        }
      };
    }
  });
}
function handleTrigger2(el, Alpine) {
  Alpine.bind(el, {
    "aria-haspopup": "menu",
    "x-floating:reference"() {
    },
    "x-init"() {
      this.__triggerEl = el;
    },
    "x-bind:aria-expanded"() {
      return this.$data.__isShown;
    },
    "x-bind:aria-controls"() {
      return this.$data.__isShown && this.$id("dropdown-content");
    },
    "x-on:click"() {
      this.$data.__toggle();
    },
    "x-on:keydown.space.prevent.stop"() {
      this.$data.__showAndFocusFirstItem();
    },
    "x-on:keydown.enter.prevent.stop"() {
      this.$data.__showAndFocusFirstItem();
    }
  });
}
function handleContent2(el, Alpine) {
  Alpine.bind(el, {
    "tabindex": "0",
    "x-floating:content"() {
    },
    "x-bind:id"() {
      return this.$id("dropdown-content");
    },
    "x-on:click.outside.stop.prevent"() {
      this.$dropdownMenu.hideAndFocus();
    },
    "x-on:keydown.escape.stop.prevent"() {
      this.$dropdownMenu.hideAndFocus();
    },
    "x-on:keydown.down.stop.prevent"() {
      const menuEl = this.__floatingEl.querySelector("[x-menu]");
      Alpine.$data(menuEl).__activateFirstItem();
    },
    "x-on:keydown.up.stop.prevent"() {
      const menuEl = this.__floatingEl.querySelector("[x-menu]");
      Alpine.$data(menuEl).__activateLastItem();
    },
    "x-on:keydown.left.stop.prevent"() {
      const parentMenuEl = this.__referenceEl.closest("[x-menu]");
      if (!parentMenuEl)
        return;
      const submenuEl = this.__floatingEl.querySelector("[x-menu]");
      if (submenuEl) {
        const submenuActiveEl = Alpine.$data(submenuEl).__activeEl;
        if (submenuActiveEl)
          Alpine.$data(submenuActiveEl).__deactivate();
      }
      if (this.__activeEl)
        Alpine.$data(this.__activeEl).__collapse();
    }
  });
}

// resources/js/plugins/time.js
function time_default(Alpine) {
  Alpine.directive("time", (el, directive) => {
    if (!directive.value)
      handleTime(el, Alpine);
    else if (directive.value === "hours")
      handleHours(el, Alpine);
    else if (directive.value === "minutes")
      handleMinutes(el, Alpine);
  }).before("bind");
  Alpine.magic("time", (el) => {
    const $data = Alpine.$data(el);
    return {
      get isActive() {
        if ($data.__hoursEl && Alpine.$data($data.__hoursEl).__isActive)
          return true;
        if ($data.__minutesEl && Alpine.$data($data.__minutesEl).__isActive)
          return true;
        return false;
      },
      set hours(value) {
        $data.__hours = value;
      },
      set minutes(value) {
        $data.__minutes = value;
      },
      set value(value) {
        $data.__value = value;
      },
      get hours() {
        return $data.__hours;
      },
      get minutes() {
        return $data.__minutes;
      }
    };
  });
  Alpine.magic("hours", (el) => {
    const $data = Alpine.$data(el);
    const value = $data.__value ?? null;
    return {
      get value() {
        return value;
      },
      get formatted() {
        return value;
      },
      get isEmpty() {
        return $data.__value === null;
      }
    };
  });
  Alpine.magic("minutes", (el) => {
    const $data = Alpine.$data(el);
    const value = $data.__value ?? null;
    return {
      get value() {
        return value;
      },
      get formatted() {
        return value.toString().padStart(2, "0");
      },
      get isEmpty() {
        return value === null;
      }
    };
  });
}
function handleTime(el, Alpine) {
  Alpine.bind(el, {
    "role": "group",
    "x-modelable": "__timeValue",
    "x-data"() {
      return {
        init() {
          queueMicrotask(() => {
            this.__by = Alpine.bound(el, "by", null);
          });
          this.$watch("__timeValue", (value) => {
            this.__value = value;
          });
        },
        __by: null,
        __hoursEl: null,
        __minutesEl: null,
        __timeValue: null,
        __hoursValue: null,
        __minutesValue: null,
        __updateTimeValue() {
          if (this.__hoursEl && this.__hoursValue === null) {
            this.__timeValue = null;
            return;
          }
          if (this.__minutesEl && this.__minutesValue === null) {
            this.__timeValue = null;
            return;
          }
          switch (this.__by) {
            case "total-minutes":
              this.__timeValue = this.__totalMinutes;
              break;
            default:
              this.__timeValue = [
                this.__hoursValue,
                this.__minutesValue.toString().padStart(2, "0")
              ].join(":");
          }
        },
        set __hours(value) {
          value = parseInt(value);
          if (isNaN(value))
            value = null;
          this.__hoursValue = value;
          this.$nextTick(() => {
            if (this.__hoursEl) {
              Alpine.$data(this.__hoursEl).__handleValue(value);
            }
          });
        },
        set __minutes(value) {
          value = parseInt(value);
          if (isNaN(value))
            value = null;
          this.__minutesValue = value;
          this.$nextTick(() => {
            if (this.__minutesEl) {
              Alpine.$data(this.__minutesEl).__handleValue(value);
            }
          });
        },
        set __totalMinutes(value) {
          const minutes = value % 60;
          this.__minutes = minutes;
          this.__hours = (value - minutes) / 60;
        },
        set __totalHours(value) {
          this.__totalMinutes = parseFloat(value) * 60;
        },
        set __value(value) {
          if (value === null)
            return;
          switch (this.__by) {
            case "total-minutes":
              this.__totalMinutes = value;
              break;
            default:
              const time = value.split(":");
              this.__hours = time[0] ?? null;
              this.__minutes = time[1] ?? null;
          }
        },
        get __hours() {
          if (this.__hoursEl) {
            return Alpine.$data(this.__hoursEl).__value ?? 0;
          }
          return 0;
        },
        get __minutes() {
          if (this.__minutesEl) {
            return Alpine.$data(this.__minutesEl).__value ?? 0;
          }
          return 0;
        },
        get __totalMinutes() {
          return this.__hours * 60 + this.__minutes;
        }
      };
    }
  });
}
function handleHours(el, Alpine) {
  Alpine.bind(el, {
    "x-spinbutton"() {
    },
    "x-init"() {
      this.$data.__hoursEl = el;
    },
    "x-on:change"() {
      if (this.$data.__hoursValue === this.__value)
        return;
      this.$data.__hoursValue = this.__value;
      this.$data.__updateTimeValue();
      this.$dispatch("input", this.__timeValue ?? "");
    }
  });
}
function handleMinutes(el, Alpine) {
  Alpine.bind(el, {
    "x-spinbutton"() {
    },
    "x-init"() {
      this.$data.__minutesEl = el;
    },
    "x-on:change"() {
      if (this.$data.__minutesValue === this.__value)
        return;
      this.$data.__minutesValue = this.__value;
      this.$data.__updateTimeValue();
      this.$dispatch("input", this.__timeValue ?? "");
    }
  });
}
export {
  fieldset_default as fieldset,
  floating_default as floating,
  listbox_default as listbox,
  menu_default as menu,
  popover_default as popover,
  slider_default as slider,
  spinbutton_default as spinbutton,
  time_default as time,
  tooltip_default as tooltip
};
