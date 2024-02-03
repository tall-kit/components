(() => {
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

  // node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs
  function t(t2) {
    return t2.split("-")[1];
  }
  function e(t2) {
    return "y" === t2 ? "height" : "width";
  }
  function n(t2) {
    return t2.split("-")[0];
  }
  function o(t2) {
    return ["top", "bottom"].includes(n(t2)) ? "x" : "y";
  }
  function i(i3, r3, a3) {
    let { reference: l3, floating: s3 } = i3;
    const c3 = l3.x + l3.width / 2 - s3.width / 2, f3 = l3.y + l3.height / 2 - s3.height / 2, m3 = o(r3), u3 = e(m3), g3 = l3[u3] / 2 - s3[u3] / 2, d3 = "x" === m3;
    let p3;
    switch (n(r3)) {
      case "top":
        p3 = { x: c3, y: l3.y - s3.height };
        break;
      case "bottom":
        p3 = { x: c3, y: l3.y + l3.height };
        break;
      case "right":
        p3 = { x: l3.x + l3.width, y: f3 };
        break;
      case "left":
        p3 = { x: l3.x - s3.width, y: f3 };
        break;
      default:
        p3 = { x: l3.x, y: l3.y };
    }
    switch (t(r3)) {
      case "start":
        p3[m3] -= g3 * (a3 && d3 ? -1 : 1);
        break;
      case "end":
        p3[m3] += g3 * (a3 && d3 ? -1 : 1);
    }
    return p3;
  }
  var r = async (t2, e2, n3) => {
    const { placement: o3 = "bottom", strategy: r3 = "absolute", middleware: a3 = [], platform: l3 } = n3, s3 = a3.filter(Boolean), c3 = await (null == l3.isRTL ? void 0 : l3.isRTL(e2));
    let f3 = await l3.getElementRects({ reference: t2, floating: e2, strategy: r3 }), { x: m3, y: u3 } = i(f3, o3, c3), g3 = o3, d3 = {}, p3 = 0;
    for (let n4 = 0; n4 < s3.length; n4++) {
      const { name: a4, fn: h3 } = s3[n4], { x: y3, y: x3, data: w3, reset: v3 } = await h3({ x: m3, y: u3, initialPlacement: o3, placement: g3, strategy: r3, middlewareData: d3, rects: f3, platform: l3, elements: { reference: t2, floating: e2 } });
      m3 = null != y3 ? y3 : m3, u3 = null != x3 ? x3 : u3, d3 = { ...d3, [a4]: { ...d3[a4], ...w3 } }, v3 && p3 <= 50 && (p3++, "object" == typeof v3 && (v3.placement && (g3 = v3.placement), v3.rects && (f3 = true === v3.rects ? await l3.getElementRects({ reference: t2, floating: e2, strategy: r3 }) : v3.rects), { x: m3, y: u3 } = i(f3, g3, c3)), n4 = -1);
    }
    return { x: m3, y: u3, placement: g3, strategy: r3, middlewareData: d3 };
  };
  function a(t2) {
    return "number" != typeof t2 ? function(t3) {
      return { top: 0, right: 0, bottom: 0, left: 0, ...t3 };
    }(t2) : { top: t2, right: t2, bottom: t2, left: t2 };
  }
  function l(t2) {
    return { ...t2, top: t2.y, left: t2.x, right: t2.x + t2.width, bottom: t2.y + t2.height };
  }
  async function s(t2, e2) {
    var n3;
    void 0 === e2 && (e2 = {});
    const { x: o3, y: i3, platform: r3, rects: s3, elements: c3, strategy: f3 } = t2, { boundary: m3 = "clippingAncestors", rootBoundary: u3 = "viewport", elementContext: g3 = "floating", altBoundary: d3 = false, padding: p3 = 0 } = e2, h3 = a(p3), y3 = c3[d3 ? "floating" === g3 ? "reference" : "floating" : g3], x3 = l(await r3.getClippingRect({ element: null == (n3 = await (null == r3.isElement ? void 0 : r3.isElement(y3))) || n3 ? y3 : y3.contextElement || await (null == r3.getDocumentElement ? void 0 : r3.getDocumentElement(c3.floating)), boundary: m3, rootBoundary: u3, strategy: f3 })), w3 = "floating" === g3 ? { ...s3.floating, x: o3, y: i3 } : s3.reference, v3 = await (null == r3.getOffsetParent ? void 0 : r3.getOffsetParent(c3.floating)), b3 = await (null == r3.isElement ? void 0 : r3.isElement(v3)) && await (null == r3.getScale ? void 0 : r3.getScale(v3)) || { x: 1, y: 1 }, A2 = l(r3.convertOffsetParentRelativeRectToViewportRelativeRect ? await r3.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w3, offsetParent: v3, strategy: f3 }) : w3);
    return { top: (x3.top - A2.top + h3.top) / b3.y, bottom: (A2.bottom - x3.bottom + h3.bottom) / b3.y, left: (x3.left - A2.left + h3.left) / b3.x, right: (A2.right - x3.right + h3.right) / b3.x };
  }
  var c = Math.min;
  var f = Math.max;
  function m(t2, e2, n3) {
    return f(t2, c(e2, n3));
  }
  var u = (n3) => ({ name: "arrow", options: n3, async fn(i3) {
    const { element: r3, padding: l3 = 0 } = n3 || {}, { x: s3, y: c3, placement: f3, rects: u3, platform: g3, elements: d3 } = i3;
    if (null == r3)
      return {};
    const p3 = a(l3), h3 = { x: s3, y: c3 }, y3 = o(f3), x3 = e(y3), w3 = await g3.getDimensions(r3), v3 = "y" === y3, b3 = v3 ? "top" : "left", A2 = v3 ? "bottom" : "right", R2 = v3 ? "clientHeight" : "clientWidth", P3 = u3.reference[x3] + u3.reference[y3] - h3[y3] - u3.floating[x3], E2 = h3[y3] - u3.reference[y3], T3 = await (null == g3.getOffsetParent ? void 0 : g3.getOffsetParent(r3));
    let D3 = T3 ? T3[R2] : 0;
    D3 && await (null == g3.isElement ? void 0 : g3.isElement(T3)) || (D3 = d3.floating[R2] || u3.floating[x3]);
    const L3 = P3 / 2 - E2 / 2, k2 = p3[b3], O3 = D3 - w3[x3] - p3[A2], B2 = D3 / 2 - w3[x3] / 2 + L3, C2 = m(k2, B2, O3), H2 = null != t(f3) && B2 != C2 && u3.reference[x3] / 2 - (B2 < k2 ? p3[b3] : p3[A2]) - w3[x3] / 2 < 0;
    return { [y3]: h3[y3] - (H2 ? B2 < k2 ? k2 - B2 : O3 - B2 : 0), data: { [y3]: C2, centerOffset: B2 - C2 } };
  } });
  var g = ["top", "right", "bottom", "left"];
  var d = g.reduce((t2, e2) => t2.concat(e2, e2 + "-start", e2 + "-end"), []);
  var p = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function h(t2) {
    return t2.replace(/left|right|bottom|top/g, (t3) => p[t3]);
  }
  function y(n3, i3, r3) {
    void 0 === r3 && (r3 = false);
    const a3 = t(n3), l3 = o(n3), s3 = e(l3);
    let c3 = "x" === l3 ? a3 === (r3 ? "end" : "start") ? "right" : "left" : "start" === a3 ? "bottom" : "top";
    return i3.reference[s3] > i3.floating[s3] && (c3 = h(c3)), { main: c3, cross: h(c3) };
  }
  var x = { start: "end", end: "start" };
  function w(t2) {
    return t2.replace(/start|end/g, (t3) => x[t3]);
  }
  var b = function(e2) {
    return void 0 === e2 && (e2 = {}), { name: "flip", options: e2, async fn(o3) {
      var i3;
      const { placement: r3, middlewareData: a3, rects: l3, initialPlacement: c3, platform: f3, elements: m3 } = o3, { mainAxis: u3 = true, crossAxis: g3 = true, fallbackPlacements: d3, fallbackStrategy: p3 = "bestFit", fallbackAxisSideDirection: x3 = "none", flipAlignment: v3 = true, ...b3 } = e2, A2 = n(r3), R2 = n(c3) === c3, P3 = await (null == f3.isRTL ? void 0 : f3.isRTL(m3.floating)), E2 = d3 || (R2 || !v3 ? [h(c3)] : function(t2) {
        const e3 = h(t2);
        return [w(t2), e3, w(e3)];
      }(c3));
      d3 || "none" === x3 || E2.push(...function(e3, o4, i4, r4) {
        const a4 = t(e3);
        let l4 = function(t2, e4, n3) {
          const o5 = ["left", "right"], i5 = ["right", "left"], r5 = ["top", "bottom"], a5 = ["bottom", "top"];
          switch (t2) {
            case "top":
            case "bottom":
              return n3 ? e4 ? i5 : o5 : e4 ? o5 : i5;
            case "left":
            case "right":
              return e4 ? r5 : a5;
            default:
              return [];
          }
        }(n(e3), "start" === i4, r4);
        return a4 && (l4 = l4.map((t2) => t2 + "-" + a4), o4 && (l4 = l4.concat(l4.map(w)))), l4;
      }(c3, v3, x3, P3));
      const T3 = [c3, ...E2], D3 = await s(o3, b3), L3 = [];
      let k2 = (null == (i3 = a3.flip) ? void 0 : i3.overflows) || [];
      if (u3 && L3.push(D3[A2]), g3) {
        const { main: t2, cross: e3 } = y(r3, l3, P3);
        L3.push(D3[t2], D3[e3]);
      }
      if (k2 = [...k2, { placement: r3, overflows: L3 }], !L3.every((t2) => t2 <= 0)) {
        var O3, B2;
        const t2 = ((null == (O3 = a3.flip) ? void 0 : O3.index) || 0) + 1, e3 = T3[t2];
        if (e3)
          return { data: { index: t2, overflows: k2 }, reset: { placement: e3 } };
        let n3 = null == (B2 = k2.filter((t3) => t3.overflows[0] <= 0).sort((t3, e4) => t3.overflows[1] - e4.overflows[1])[0]) ? void 0 : B2.placement;
        if (!n3)
          switch (p3) {
            case "bestFit": {
              var C2;
              const t3 = null == (C2 = k2.map((t4) => [t4.placement, t4.overflows.filter((t5) => t5 > 0).reduce((t5, e4) => t5 + e4, 0)]).sort((t4, e4) => t4[1] - e4[1])[0]) ? void 0 : C2[0];
              t3 && (n3 = t3);
              break;
            }
            case "initialPlacement":
              n3 = c3;
          }
        if (r3 !== n3)
          return { reset: { placement: n3 } };
      }
      return {};
    } };
  };
  var D = function(e2) {
    return void 0 === e2 && (e2 = 0), { name: "offset", options: e2, async fn(i3) {
      const { x: r3, y: a3 } = i3, l3 = await async function(e3, i4) {
        const { placement: r4, platform: a4, elements: l4 } = e3, s3 = await (null == a4.isRTL ? void 0 : a4.isRTL(l4.floating)), c3 = n(r4), f3 = t(r4), m3 = "x" === o(r4), u3 = ["left", "top"].includes(c3) ? -1 : 1, g3 = s3 && m3 ? -1 : 1, d3 = "function" == typeof i4 ? i4(e3) : i4;
        let { mainAxis: p3, crossAxis: h3, alignmentAxis: y3 } = "number" == typeof d3 ? { mainAxis: d3, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d3 };
        return f3 && "number" == typeof y3 && (h3 = "end" === f3 ? -1 * y3 : y3), m3 ? { x: h3 * g3, y: p3 * u3 } : { x: p3 * u3, y: h3 * g3 };
      }(i3, e2);
      return { x: r3 + l3.x, y: a3 + l3.y, data: l3 };
    } };
  };
  function L(t2) {
    return "x" === t2 ? "y" : "x";
  }
  var k = function(t2) {
    return void 0 === t2 && (t2 = {}), { name: "shift", options: t2, async fn(e2) {
      const { x: i3, y: r3, placement: a3 } = e2, { mainAxis: l3 = true, crossAxis: c3 = false, limiter: f3 = { fn: (t3) => {
        let { x: e3, y: n3 } = t3;
        return { x: e3, y: n3 };
      } }, ...u3 } = t2, g3 = { x: i3, y: r3 }, d3 = await s(e2, u3), p3 = o(n(a3)), h3 = L(p3);
      let y3 = g3[p3], x3 = g3[h3];
      if (l3) {
        const t3 = "y" === p3 ? "bottom" : "right";
        y3 = m(y3 + d3["y" === p3 ? "top" : "left"], y3, y3 - d3[t3]);
      }
      if (c3) {
        const t3 = "y" === h3 ? "bottom" : "right";
        x3 = m(x3 + d3["y" === h3 ? "top" : "left"], x3, x3 - d3[t3]);
      }
      const w3 = f3.fn({ ...e2, [p3]: y3, [h3]: x3 });
      return { ...w3, data: { x: w3.x - i3, y: w3.y - r3 } };
    } };
  };

  // node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
  function n2(t2) {
    var e2;
    return (null == (e2 = t2.ownerDocument) ? void 0 : e2.defaultView) || window;
  }
  function o2(t2) {
    return n2(t2).getComputedStyle(t2);
  }
  function i2(t2) {
    return t2 instanceof n2(t2).Node;
  }
  function r2(t2) {
    return i2(t2) ? (t2.nodeName || "").toLowerCase() : "";
  }
  var l2;
  function c2() {
    if (l2)
      return l2;
    const t2 = navigator.userAgentData;
    return t2 && Array.isArray(t2.brands) ? (l2 = t2.brands.map((t3) => t3.brand + "/" + t3.version).join(" "), l2) : navigator.userAgent;
  }
  function s2(t2) {
    return t2 instanceof n2(t2).HTMLElement;
  }
  function f2(t2) {
    return t2 instanceof n2(t2).Element;
  }
  function u2(t2) {
    if ("undefined" == typeof ShadowRoot)
      return false;
    return t2 instanceof n2(t2).ShadowRoot || t2 instanceof ShadowRoot;
  }
  function a2(t2) {
    const { overflow: e2, overflowX: n3, overflowY: i3, display: r3 } = o2(t2);
    return /auto|scroll|overlay|hidden|clip/.test(e2 + i3 + n3) && !["inline", "contents"].includes(r3);
  }
  function d2(t2) {
    return ["table", "td", "th"].includes(r2(t2));
  }
  function h2(t2) {
    const e2 = /firefox/i.test(c2()), n3 = o2(t2), i3 = n3.backdropFilter || n3.WebkitBackdropFilter;
    return "none" !== n3.transform || "none" !== n3.perspective || !!i3 && "none" !== i3 || e2 && "filter" === n3.willChange || e2 && !!n3.filter && "none" !== n3.filter || ["transform", "perspective"].some((t3) => n3.willChange.includes(t3)) || ["paint", "layout", "strict", "content"].some((t3) => {
      const e3 = n3.contain;
      return null != e3 && e3.includes(t3);
    });
  }
  function p2() {
    return /^((?!chrome|android).)*safari/i.test(c2());
  }
  function g2(t2) {
    return ["html", "body", "#document"].includes(r2(t2));
  }
  var m2 = Math.min;
  var y2 = Math.max;
  var x2 = Math.round;
  function w2(t2) {
    const e2 = o2(t2);
    let n3 = parseFloat(e2.width), i3 = parseFloat(e2.height);
    const r3 = s2(t2), l3 = r3 ? t2.offsetWidth : n3, c3 = r3 ? t2.offsetHeight : i3, f3 = x2(n3) !== l3 || x2(i3) !== c3;
    return f3 && (n3 = l3, i3 = c3), { width: n3, height: i3, fallback: f3 };
  }
  function v2(t2) {
    return f2(t2) ? t2 : t2.contextElement;
  }
  var b2 = { x: 1, y: 1 };
  function L2(t2) {
    const e2 = v2(t2);
    if (!s2(e2))
      return b2;
    const n3 = e2.getBoundingClientRect(), { width: o3, height: i3, fallback: r3 } = w2(e2);
    let l3 = (r3 ? x2(n3.width) : n3.width) / o3, c3 = (r3 ? x2(n3.height) : n3.height) / i3;
    return l3 && Number.isFinite(l3) || (l3 = 1), c3 && Number.isFinite(c3) || (c3 = 1), { x: l3, y: c3 };
  }
  function E(e2, o3, i3, r3) {
    var l3, c3;
    void 0 === o3 && (o3 = false), void 0 === i3 && (i3 = false);
    const s3 = e2.getBoundingClientRect(), u3 = v2(e2);
    let a3 = b2;
    o3 && (r3 ? f2(r3) && (a3 = L2(r3)) : a3 = L2(e2));
    const d3 = u3 ? n2(u3) : window, h3 = p2() && i3;
    let g3 = (s3.left + (h3 && (null == (l3 = d3.visualViewport) ? void 0 : l3.offsetLeft) || 0)) / a3.x, m3 = (s3.top + (h3 && (null == (c3 = d3.visualViewport) ? void 0 : c3.offsetTop) || 0)) / a3.y, y3 = s3.width / a3.x, x3 = s3.height / a3.y;
    if (u3) {
      const t2 = n2(u3), e3 = r3 && f2(r3) ? n2(r3) : r3;
      let o4 = t2.frameElement;
      for (; o4 && r3 && e3 !== t2; ) {
        const t3 = L2(o4), e4 = o4.getBoundingClientRect(), i4 = getComputedStyle(o4);
        e4.x += (o4.clientLeft + parseFloat(i4.paddingLeft)) * t3.x, e4.y += (o4.clientTop + parseFloat(i4.paddingTop)) * t3.y, g3 *= t3.x, m3 *= t3.y, y3 *= t3.x, x3 *= t3.y, g3 += e4.x, m3 += e4.y, o4 = n2(o4).frameElement;
      }
    }
    return l({ width: y3, height: x3, x: g3, y: m3 });
  }
  function T2(t2) {
    return ((i2(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
  }
  function R(t2) {
    return f2(t2) ? { scrollLeft: t2.scrollLeft, scrollTop: t2.scrollTop } : { scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset };
  }
  function C(t2) {
    return E(T2(t2)).left + R(t2).scrollLeft;
  }
  function F(t2) {
    if ("html" === r2(t2))
      return t2;
    const e2 = t2.assignedSlot || t2.parentNode || u2(t2) && t2.host || T2(t2);
    return u2(e2) ? e2.host : e2;
  }
  function W(t2) {
    const e2 = F(t2);
    return g2(e2) ? e2.ownerDocument.body : s2(e2) && a2(e2) ? e2 : W(e2);
  }
  function D2(t2, e2) {
    var o3;
    void 0 === e2 && (e2 = []);
    const i3 = W(t2), r3 = i3 === (null == (o3 = t2.ownerDocument) ? void 0 : o3.body), l3 = n2(i3);
    return r3 ? e2.concat(l3, l3.visualViewport || [], a2(i3) ? i3 : []) : e2.concat(i3, D2(i3));
  }
  function S(e2, i3, r3) {
    let l3;
    if ("viewport" === i3)
      l3 = function(t2, e3) {
        const o3 = n2(t2), i4 = T2(t2), r4 = o3.visualViewport;
        let l4 = i4.clientWidth, c4 = i4.clientHeight, s3 = 0, f3 = 0;
        if (r4) {
          l4 = r4.width, c4 = r4.height;
          const t3 = p2();
          (!t3 || t3 && "fixed" === e3) && (s3 = r4.offsetLeft, f3 = r4.offsetTop);
        }
        return { width: l4, height: c4, x: s3, y: f3 };
      }(e2, r3);
    else if ("document" === i3)
      l3 = function(t2) {
        const e3 = T2(t2), n3 = R(t2), i4 = t2.ownerDocument.body, r4 = y2(e3.scrollWidth, e3.clientWidth, i4.scrollWidth, i4.clientWidth), l4 = y2(e3.scrollHeight, e3.clientHeight, i4.scrollHeight, i4.clientHeight);
        let c4 = -n3.scrollLeft + C(t2);
        const s3 = -n3.scrollTop;
        return "rtl" === o2(i4).direction && (c4 += y2(e3.clientWidth, i4.clientWidth) - r4), { width: r4, height: l4, x: c4, y: s3 };
      }(T2(e2));
    else if (f2(i3))
      l3 = function(t2, e3) {
        const n3 = E(t2, true, "fixed" === e3), o3 = n3.top + t2.clientTop, i4 = n3.left + t2.clientLeft, r4 = s2(t2) ? L2(t2) : { x: 1, y: 1 };
        return { width: t2.clientWidth * r4.x, height: t2.clientHeight * r4.y, x: i4 * r4.x, y: o3 * r4.y };
      }(i3, r3);
    else {
      const t2 = { ...i3 };
      if (p2()) {
        var c3, u3;
        const o3 = n2(e2);
        t2.x -= (null == (c3 = o3.visualViewport) ? void 0 : c3.offsetLeft) || 0, t2.y -= (null == (u3 = o3.visualViewport) ? void 0 : u3.offsetTop) || 0;
      }
      l3 = t2;
    }
    return l(l3);
  }
  function A(t2, e2) {
    return s2(t2) && "fixed" !== o2(t2).position ? e2 ? e2(t2) : t2.offsetParent : null;
  }
  function H(t2, e2) {
    const i3 = n2(t2);
    if (!s2(t2))
      return i3;
    let l3 = A(t2, e2);
    for (; l3 && d2(l3) && "static" === o2(l3).position; )
      l3 = A(l3, e2);
    return l3 && ("html" === r2(l3) || "body" === r2(l3) && "static" === o2(l3).position && !h2(l3)) ? i3 : l3 || function(t3) {
      let e3 = F(t3);
      for (; s2(e3) && !g2(e3); ) {
        if (h2(e3))
          return e3;
        e3 = F(e3);
      }
      return null;
    }(t2) || i3;
  }
  function V(t2, e2, n3) {
    const o3 = s2(e2), i3 = T2(e2), l3 = E(t2, true, "fixed" === n3, e2);
    let c3 = { scrollLeft: 0, scrollTop: 0 };
    const f3 = { x: 0, y: 0 };
    if (o3 || !o3 && "fixed" !== n3)
      if (("body" !== r2(e2) || a2(i3)) && (c3 = R(e2)), s2(e2)) {
        const t3 = E(e2, true);
        f3.x = t3.x + e2.clientLeft, f3.y = t3.y + e2.clientTop;
      } else
        i3 && (f3.x = C(i3));
    return { x: l3.left + c3.scrollLeft - f3.x, y: l3.top + c3.scrollTop - f3.y, width: l3.width, height: l3.height };
  }
  var O2 = { getClippingRect: function(t2) {
    let { element: e2, boundary: n3, rootBoundary: i3, strategy: l3 } = t2;
    const c3 = "clippingAncestors" === n3 ? function(t3, e3) {
      const n4 = e3.get(t3);
      if (n4)
        return n4;
      let i4 = D2(t3).filter((t4) => f2(t4) && "body" !== r2(t4)), l4 = null;
      const c4 = "fixed" === o2(t3).position;
      let s4 = c4 ? F(t3) : t3;
      for (; f2(s4) && !g2(s4); ) {
        const t4 = o2(s4), e4 = h2(s4);
        "fixed" === t4.position && (l4 = null), (c4 ? e4 || l4 : e4 || "static" !== t4.position || !l4 || !["absolute", "fixed"].includes(l4.position)) ? l4 = t4 : i4 = i4.filter((t5) => t5 !== s4), s4 = F(s4);
      }
      return e3.set(t3, i4), i4;
    }(e2, this._c) : [].concat(n3), s3 = [...c3, i3], u3 = s3[0], a3 = s3.reduce((t3, n4) => {
      const o3 = S(e2, n4, l3);
      return t3.top = y2(o3.top, t3.top), t3.right = m2(o3.right, t3.right), t3.bottom = m2(o3.bottom, t3.bottom), t3.left = y2(o3.left, t3.left), t3;
    }, S(e2, u3, l3));
    return { width: a3.right - a3.left, height: a3.bottom - a3.top, x: a3.left, y: a3.top };
  }, convertOffsetParentRelativeRectToViewportRelativeRect: function(t2) {
    let { rect: e2, offsetParent: n3, strategy: o3 } = t2;
    const i3 = s2(n3), l3 = T2(n3);
    if (n3 === l3)
      return e2;
    let c3 = { scrollLeft: 0, scrollTop: 0 }, f3 = { x: 1, y: 1 };
    const u3 = { x: 0, y: 0 };
    if ((i3 || !i3 && "fixed" !== o3) && (("body" !== r2(n3) || a2(l3)) && (c3 = R(n3)), s2(n3))) {
      const t3 = E(n3);
      f3 = L2(n3), u3.x = t3.x + n3.clientLeft, u3.y = t3.y + n3.clientTop;
    }
    return { width: e2.width * f3.x, height: e2.height * f3.y, x: e2.x * f3.x - c3.scrollLeft * f3.x + u3.x, y: e2.y * f3.y - c3.scrollTop * f3.y + u3.y };
  }, isElement: f2, getDimensions: function(t2) {
    return w2(t2);
  }, getOffsetParent: H, getDocumentElement: T2, getScale: L2, async getElementRects(t2) {
    let { reference: e2, floating: n3, strategy: o3 } = t2;
    const i3 = this.getOffsetParent || H, r3 = this.getDimensions;
    return { reference: V(e2, await i3(n3), o3), floating: { x: 0, y: 0, ...await r3(n3) } };
  }, getClientRects: (t2) => Array.from(t2.getClientRects()), isRTL: (t2) => "rtl" === o2(t2).direction };
  function P2(t2, e2, n3, o3) {
    void 0 === o3 && (o3 = {});
    const { ancestorScroll: i3 = true, ancestorResize: r3 = true, elementResize: l3 = true, animationFrame: c3 = false } = o3, s3 = i3 && !c3, u3 = s3 || r3 ? [...f2(t2) ? D2(t2) : t2.contextElement ? D2(t2.contextElement) : [], ...D2(e2)] : [];
    u3.forEach((t3) => {
      s3 && t3.addEventListener("scroll", n3, { passive: true }), r3 && t3.addEventListener("resize", n3);
    });
    let a3, d3 = null;
    l3 && (d3 = new ResizeObserver(() => {
      n3();
    }), f2(t2) && !c3 && d3.observe(t2), f2(t2) || !t2.contextElement || c3 || d3.observe(t2.contextElement), d3.observe(e2));
    let h3 = c3 ? E(t2) : null;
    return c3 && function e3() {
      const o4 = E(t2);
      !h3 || o4.x === h3.x && o4.y === h3.y && o4.width === h3.width && o4.height === h3.height || n3();
      h3 = o4, a3 = requestAnimationFrame(e3);
    }(), n3(), () => {
      var t3;
      u3.forEach((t4) => {
        s3 && t4.removeEventListener("scroll", n3), r3 && t4.removeEventListener("resize", n3);
      }), null == (t3 = d3) || t3.disconnect(), d3 = null, c3 && cancelAnimationFrame(a3);
    };
  }
  var z = (t2, n3, o3) => {
    const i3 = /* @__PURE__ */ new Map(), r3 = { platform: O2, ...o3 }, l3 = { ...r3.platform, _c: i3 };
    return r(t2, n3, { ...r3, platform: l3 });
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
            z(floatingReference, this.__floatingEl, {
              placement: options.placement,
              middleware: [
                D(options.offset),
                options.flip && b(),
                options.shift && k(),
                this.__arrowEl && u({ element: this.__arrowEl })
              ]
            }).then(({ x: x3, y: y3, placement, middlewareData }) => {
              this.__placement = placement;
              Object.assign(this.__floatingEl.style, {
                left: `${x3}px`,
                top: `${y3}px`
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
            this.__autoupdateCleanup = P2(floatingReference, this.__floatingEl, () => {
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

  // node_modules/tslib/tslib.es6.js
  function __rest(s3, e2) {
    var t2 = {};
    for (var p3 in s3)
      if (Object.prototype.hasOwnProperty.call(s3, p3) && e2.indexOf(p3) < 0)
        t2[p3] = s3[p3];
    if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i3 = 0, p3 = Object.getOwnPropertySymbols(s3); i3 < p3.length; i3++) {
        if (e2.indexOf(p3[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p3[i3]))
          t2[p3[i3]] = s3[p3[i3]];
      }
    return t2;
  }

  // node_modules/hey-listen/dist/hey-listen.es.js
  var warning = function() {
  };
  var invariant = function() {
  };
  if (true) {
    warning = function(check, message) {
      if (!check && typeof console !== "undefined") {
        console.warn(message);
      }
    };
    invariant = function(check, message) {
      if (!check) {
        throw new Error(message);
      }
    };
  }

  // node_modules/popmotion/dist/es/utils/clamp.mjs
  var clamp = (min, max, v3) => Math.min(Math.max(v3, min), max);

  // node_modules/popmotion/dist/es/animations/utils/find-spring.mjs
  var safeMin = 1e-3;
  var minDuration = 0.01;
  var maxDuration = 10;
  var minDamping = 0.05;
  var maxDamping = 1;
  function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
    let envelope;
    let derivative;
    warning(duration <= maxDuration * 1e3, "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
    duration = clamp(minDuration, maxDuration, duration / 1e3);
    if (dampingRatio < 1) {
      envelope = (undampedFreq2) => {
        const exponentialDecay = undampedFreq2 * dampingRatio;
        const delta = exponentialDecay * duration;
        const a3 = exponentialDecay - velocity;
        const b3 = calcAngularFreq(undampedFreq2, dampingRatio);
        const c3 = Math.exp(-delta);
        return safeMin - a3 / b3 * c3;
      };
      derivative = (undampedFreq2) => {
        const exponentialDecay = undampedFreq2 * dampingRatio;
        const delta = exponentialDecay * duration;
        const d3 = delta * velocity + velocity;
        const e2 = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
        const f3 = Math.exp(-delta);
        const g3 = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
        const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
        return factor * ((d3 - e2) * f3) / g3;
      };
    } else {
      envelope = (undampedFreq2) => {
        const a3 = Math.exp(-undampedFreq2 * duration);
        const b3 = (undampedFreq2 - velocity) * duration + 1;
        return -safeMin + a3 * b3;
      };
      derivative = (undampedFreq2) => {
        const a3 = Math.exp(-undampedFreq2 * duration);
        const b3 = (velocity - undampedFreq2) * (duration * duration);
        return a3 * b3;
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
    for (let i3 = 1; i3 < rootIterations; i3++) {
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
        resolveSpring = (t2) => {
          const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
          return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t2) + initialDelta * Math.cos(angularFreq * t2));
        };
        resolveVelocity = (t2) => {
          const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
          return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t2) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t2)) - envelope * (Math.cos(angularFreq * t2) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t2));
        };
      } else if (dampingRatio === 1) {
        resolveSpring = (t2) => to - Math.exp(-undampedAngularFreq * t2) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t2);
      } else {
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t2) => {
          const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t2);
          const freqForT = Math.min(dampedAngularFreq * t2, 300);
          return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
        };
      }
    }
    createSpring();
    return {
      next: (t2) => {
        const current = resolveSpring(t2);
        if (!isResolvedFromDuration) {
          const currentVelocity = resolveVelocity(t2) * 1e3;
          const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
          const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
          state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
        } else {
          state.done = t2 >= duration;
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
  spring.needsInterpolation = (a3, b3) => typeof a3 === "string" || typeof b3 === "string";
  var zero = (_t) => 0;

  // node_modules/popmotion/dist/es/utils/progress.mjs
  var progress = (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
  };

  // node_modules/popmotion/dist/es/utils/mix.mjs
  var mix = (from, to, progress2) => -progress2 * from + progress2 * to + from;

  // node_modules/style-value-types/dist/es/utils.mjs
  var clamp2 = (min, max) => (v3) => Math.max(Math.min(v3, max), min);
  var sanitize = (v3) => v3 % 1 ? Number(v3.toFixed(5)) : v3;
  var floatRegex = /(-)?([\d]*\.?[\d])+/g;
  var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
  var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
  function isString(v3) {
    return typeof v3 === "string";
  }

  // node_modules/style-value-types/dist/es/numbers/index.mjs
  var number = {
    test: (v3) => typeof v3 === "number",
    parse: parseFloat,
    transform: (v3) => v3
  };
  var alpha = Object.assign(Object.assign({}, number), { transform: clamp2(0, 1) });
  var scale = Object.assign(Object.assign({}, number), { default: 1 });

  // node_modules/style-value-types/dist/es/numbers/units.mjs
  var createUnitType = (unit) => ({
    test: (v3) => isString(v3) && v3.endsWith(unit) && v3.split(" ").length === 1,
    parse: parseFloat,
    transform: (v3) => `${v3}${unit}`
  });
  var degrees = createUnitType("deg");
  var percent = createUnitType("%");
  var px = createUnitType("px");
  var vh = createUnitType("vh");
  var vw = createUnitType("vw");
  var progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v3) => percent.parse(v3) / 100, transform: (v3) => percent.transform(v3 * 100) });

  // node_modules/style-value-types/dist/es/color/utils.mjs
  var isColorString = (type, testProp) => (v3) => {
    return Boolean(isString(v3) && singleColorRegex.test(v3) && v3.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v3, testProp));
  };
  var splitColor = (aName, bName, cName) => (v3) => {
    if (!isString(v3))
      return v3;
    const [a3, b3, c3, alpha2] = v3.match(floatRegex);
    return {
      [aName]: parseFloat(a3),
      [bName]: parseFloat(b3),
      [cName]: parseFloat(c3),
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
  var rgbUnit = Object.assign(Object.assign({}, number), { transform: (v3) => Math.round(clampRgbUnit(v3)) });
  var rgba = {
    test: isColorString("rgb", "red"),
    parse: splitColor("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
  };

  // node_modules/style-value-types/dist/es/color/hex.mjs
  function parseHex(v3) {
    let r3 = "";
    let g3 = "";
    let b3 = "";
    let a3 = "";
    if (v3.length > 5) {
      r3 = v3.substr(1, 2);
      g3 = v3.substr(3, 2);
      b3 = v3.substr(5, 2);
      a3 = v3.substr(7, 2);
    } else {
      r3 = v3.substr(1, 1);
      g3 = v3.substr(2, 1);
      b3 = v3.substr(3, 1);
      a3 = v3.substr(4, 1);
      r3 += r3;
      g3 += g3;
      b3 += b3;
      a3 += a3;
    }
    return {
      red: parseInt(r3, 16),
      green: parseInt(g3, 16),
      blue: parseInt(b3, 16),
      alpha: a3 ? parseInt(a3, 16) / 255 : 1
    };
  }
  var hex = {
    test: isColorString("#"),
    parse: parseHex,
    transform: rgba.transform
  };

  // node_modules/style-value-types/dist/es/color/index.mjs
  var color = {
    test: (v3) => rgba.test(v3) || hex.test(v3) || hsla.test(v3),
    parse: (v3) => {
      if (rgba.test(v3)) {
        return rgba.parse(v3);
      } else if (hsla.test(v3)) {
        return hsla.parse(v3);
      } else {
        return hex.parse(v3);
      }
    },
    transform: (v3) => {
      return isString(v3) ? v3 : v3.hasOwnProperty("red") ? rgba.transform(v3) : hsla.transform(v3);
    }
  };

  // node_modules/style-value-types/dist/es/complex/index.mjs
  var colorToken = "${c}";
  var numberToken = "${n}";
  function test(v3) {
    var _a, _b, _c, _d;
    return isNaN(v3) && isString(v3) && ((_b = (_a = v3.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v3.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
  }
  function analyse(v3) {
    if (typeof v3 === "number")
      v3 = `${v3}`;
    const values = [];
    let numColors = 0;
    const colors = v3.match(colorRegex);
    if (colors) {
      numColors = colors.length;
      v3 = v3.replace(colorRegex, colorToken);
      values.push(...colors.map(color.parse));
    }
    const numbers = v3.match(floatRegex);
    if (numbers) {
      v3 = v3.replace(floatRegex, numberToken);
      values.push(...numbers.map(number.parse));
    }
    return { values, numColors, tokenised: v3 };
  }
  function parse(v3) {
    return analyse(v3).values;
  }
  function createTransformer(v3) {
    const { values, numColors, tokenised } = analyse(v3);
    const numValues = values.length;
    return (v4) => {
      let output = tokenised;
      for (let i3 = 0; i3 < numValues; i3++) {
        output = output.replace(i3 < numColors ? colorToken : numberToken, i3 < numColors ? color.transform(v4[i3]) : sanitize(v4[i3]));
      }
      return output;
    };
  }
  var convertNumbersToZero = (v3) => typeof v3 === "number" ? 0 : v3;
  function getAnimatableNone(v3) {
    const parsed = parse(v3);
    const transformer = createTransformer(v3);
    return transformer(parsed.map(convertNumbersToZero));
  }
  var complex = { test, parse, createTransformer, getAnimatableNone };

  // node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs
  function hueToRgb(p3, q, t2) {
    if (t2 < 0)
      t2 += 1;
    if (t2 > 1)
      t2 -= 1;
    if (t2 < 1 / 6)
      return p3 + (q - p3) * 6 * t2;
    if (t2 < 1 / 2)
      return q;
    if (t2 < 2 / 3)
      return p3 + (q - p3) * (2 / 3 - t2) * 6;
    return p3;
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
      const p3 = 2 * lightness - q;
      red = hueToRgb(p3, q, hue + 1 / 3);
      green = hueToRgb(p3, q, hue);
      blue = hueToRgb(p3, q, hue - 1 / 3);
    }
    return {
      red: Math.round(red * 255),
      green: Math.round(green * 255),
      blue: Math.round(blue * 255),
      alpha: alpha2
    };
  }

  // node_modules/popmotion/dist/es/utils/mix-color.mjs
  var mixLinearColor = (from, to, v3) => {
    const fromExpo = from * from;
    const toExpo = to * to;
    return Math.sqrt(Math.max(0, v3 * (toExpo - fromExpo) + fromExpo));
  };
  var colorTypes = [hex, rgba, hsla];
  var getColorType = (v3) => colorTypes.find((type) => type.test(v3));
  var notAnimatable = (color2) => `'${color2}' is not an animatable color. Use the equivalent color code instead.`;
  var mixColor = (from, to) => {
    let fromColorType = getColorType(from);
    let toColorType = getColorType(to);
    invariant(!!fromColorType, notAnimatable(from));
    invariant(!!toColorType, notAnimatable(to));
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
    return (v3) => {
      for (const key in blended) {
        if (key !== "alpha") {
          blended[key] = mixLinearColor(fromColor[key], toColor[key], v3);
        }
      }
      blended.alpha = mix(fromColor.alpha, toColor.alpha, v3);
      return fromColorType.transform(blended);
    };
  };

  // node_modules/popmotion/dist/es/utils/inc.mjs
  var isNum = (v3) => typeof v3 === "number";

  // node_modules/popmotion/dist/es/utils/pipe.mjs
  var combineFunctions = (a3, b3) => (v3) => b3(a3(v3));
  var pipe = (...transformers) => transformers.reduce(combineFunctions);

  // node_modules/popmotion/dist/es/utils/mix-complex.mjs
  function getMixer(origin, target) {
    if (isNum(origin)) {
      return (v3) => mix(origin, target, v3);
    } else if (color.test(origin)) {
      return mixColor(origin, target);
    } else {
      return mixComplex(origin, target);
    }
  }
  var mixArray = (from, to) => {
    const output = [...from];
    const numValues = output.length;
    const blendValue = from.map((fromThis, i3) => getMixer(fromThis, to[i3]));
    return (v3) => {
      for (let i3 = 0; i3 < numValues; i3++) {
        output[i3] = blendValue[i3](v3);
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
    return (v3) => {
      for (const key in blendValue) {
        output[key] = blendValue[key](v3);
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
    for (let i3 = 0; i3 < numValues; i3++) {
      if (numNumbers || typeof parsed[i3] === "number") {
        numNumbers++;
      } else {
        if (parsed[i3].hue !== void 0) {
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
      warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
      return (p3) => `${p3 > 0 ? target : origin}`;
    }
  };

  // node_modules/popmotion/dist/es/utils/interpolate.mjs
  var mixNumber = (from, to) => (p3) => mix(from, to, p3);
  function detectMixerFactory(v3) {
    if (typeof v3 === "number") {
      return mixNumber;
    } else if (typeof v3 === "string") {
      if (color.test(v3)) {
        return mixColor;
      } else {
        return mixComplex;
      }
    } else if (Array.isArray(v3)) {
      return mixArray;
    } else if (typeof v3 === "object") {
      return mixObject;
    }
  }
  function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || detectMixerFactory(output[0]);
    const numMixers = output.length - 1;
    for (let i3 = 0; i3 < numMixers; i3++) {
      let mixer = mixerFactory(output[i3], output[i3 + 1]);
      if (ease) {
        const easingFunction = Array.isArray(ease) ? ease[i3] : ease;
        mixer = pipe(easingFunction, mixer);
      }
      mixers.push(mixer);
    }
    return mixers;
  }
  function fastInterpolate([from, to], [mixer]) {
    return (v3) => mixer(progress(from, to, v3));
  }
  function slowInterpolate(input, mixers) {
    const inputLength = input.length;
    const lastInputIndex = inputLength - 1;
    return (v3) => {
      let mixerIndex = 0;
      let foundMixerIndex = false;
      if (v3 <= input[0]) {
        foundMixerIndex = true;
      } else if (v3 >= input[lastInputIndex]) {
        mixerIndex = lastInputIndex - 1;
        foundMixerIndex = true;
      }
      if (!foundMixerIndex) {
        let i3 = 1;
        for (; i3 < inputLength; i3++) {
          if (input[i3] > v3 || i3 === lastInputIndex) {
            break;
          }
        }
        mixerIndex = i3 - 1;
      }
      const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v3);
      return mixers[mixerIndex](progressInRange);
    };
  }
  function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    invariant(inputLength === output.length, "Both input and output ranges must be the same length");
    invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");
    if (input[0] > input[inputLength - 1]) {
      input = [].concat(input);
      output = [].concat(output);
      input.reverse();
      output.reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
    return isClamp ? (v3) => interpolator(clamp(input[0], input[inputLength - 1], v3)) : interpolator;
  }

  // node_modules/popmotion/dist/es/easing/utils.mjs
  var reverseEasing = (easing) => (p3) => 1 - easing(1 - p3);
  var mirrorEasing = (easing) => (p3) => p3 <= 0.5 ? easing(2 * p3) / 2 : (2 - easing(2 * (1 - p3))) / 2;
  var createExpoIn = (power) => (p3) => Math.pow(p3, power);
  var createBackIn = (power) => (p3) => p3 * p3 * ((power + 1) * p3 - power);
  var createAnticipate = (power) => {
    const backEasing = createBackIn(power);
    return (p3) => (p3 *= 2) < 1 ? 0.5 * backEasing(p3) : 0.5 * (2 - Math.pow(2, -10 * (p3 - 1)));
  };

  // node_modules/popmotion/dist/es/easing/index.mjs
  var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
  var BOUNCE_FIRST_THRESHOLD = 4 / 11;
  var BOUNCE_SECOND_THRESHOLD = 8 / 11;
  var BOUNCE_THIRD_THRESHOLD = 9 / 10;
  var easeIn = createExpoIn(2);
  var easeOut = reverseEasing(easeIn);
  var easeInOut = mirrorEasing(easeIn);
  var circIn = (p3) => 1 - Math.sin(Math.acos(p3));
  var circOut = reverseEasing(circIn);
  var circInOut = mirrorEasing(circOut);
  var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
  var backOut = reverseEasing(backIn);
  var backInOut = mirrorEasing(backIn);
  var anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
  var ca = 4356 / 361;
  var cb = 35442 / 1805;
  var cc = 16061 / 1805;
  var bounceOut = (p3) => {
    if (p3 === 1 || p3 === 0)
      return p3;
    const p22 = p3 * p3;
    return p3 < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p22 : p3 < BOUNCE_SECOND_THRESHOLD ? 9.075 * p22 - 9.9 * p3 + 3.4 : p3 < BOUNCE_THIRD_THRESHOLD ? ca * p22 - cb * p3 + cc : 10.8 * p3 * p3 - 20.52 * p3 + 10.72;
  };
  var bounceIn = reverseEasing(bounceOut);

  // node_modules/popmotion/dist/es/animations/generators/keyframes.mjs
  function defaultEasing(values, easing) {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1);
  }
  function defaultOffset(values) {
    const numValues = values.length;
    return values.map((_value, i3) => i3 !== 0 ? i3 / (numValues - 1) : 0);
  }
  function convertOffsetToTimes(offset, duration) {
    return offset.map((o3) => o3 * duration);
  }
  function keyframes({ from = 0, to = 1, ease, offset, duration = 300 }) {
    const state = { done: false, value: from };
    const values = Array.isArray(to) ? to : [from, to];
    const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
    function createInterpolator() {
      return interpolate(times, values, {
        ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
      });
    }
    let interpolator = createInterpolator();
    return {
      next: (t2) => {
        state.value = interpolator(t2);
        state.done = t2 >= duration;
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
      next: (t2) => {
        const delta = -amplitude * Math.exp(-t2 / timeConstant);
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
          for (let i3 = 0; i3 < numToRun; i3++) {
            const callback = toRun[i3];
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
                D(tooltipOptions.offset),
                tooltipOptions.flip && b(),
                tooltipOptions.shift && k({ padding: 5 }),
                this._arrowEl && u({ element: this._arrowEl })
              ]
            };
            const runCompute = () => {
              z(triggerEl, el, options2).then(({ x: x3, y: y3, placement, middlewareData }) => {
                this._placementSide = placement.split("-")[0];
                Object.assign(el.style, {
                  left: `${x3}px`,
                  top: `${y3}px`
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
            this._autoUpdateHandler = P2(triggerEl, el, () => runCompute());
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
            D(this._options.offset),
            this._options.flip && b(),
            this._options.shift && k({ padding: 5 }),
            this._arrowEl && u({ element: this._arrowEl })
          ]
        };
        const runCompute = () => {
          z(triggerEl, this._el, overlayOptions).then(({ x: x3, y: y3, placement, middlewareData }) => {
            this._placementSide = placement.split("-")[0];
            Object.assign(this._el.style, {
              left: `${x3}px`,
              top: `${y3}px`
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
        this._autoUpdateHandler = P2(triggerEl, this._el, () => runCompute());
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
            for (let i3 = this.__values[index]; i3 <= this.__max; i3 += this.__step) {
              const offsetToValue = Math.abs(i3 - value);
              if (nearestValidValueOffset === null || offsetToValue < nearestValidValueOffset) {
                nearestValidValue = i3;
                nearestValidValueOffset = offsetToValue;
              }
            }
            return nearestValidValue;
          },
          __findNextNegativeValidValue(value, index) {
            let nearestValidValue = this.__values[index];
            let nearestValidValueOffset = null;
            for (let i3 = this.__values[index]; i3 >= this.__min; i3 -= this.__step) {
              const offsetToValue = Math.abs(i3 - value);
              if (nearestValidValueOffset === null || offsetToValue < nearestValidValueOffset) {
                nearestValidValue = i3;
                nearestValidValueOffset = offsetToValue;
              }
            }
            return nearestValidValue;
          }
        };
      },
      "x-on:pointerdown"(e2) {
        if (e2.pointerType === "mouse" && e2.button !== 0)
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
      "x-on:keydown"(e2) {
        if (["ArrowUp", "ArrowRight"].includes(e2.key)) {
          this.__nextValue();
        } else if (["ArrowDown", "ArrowLeft"].includes(e2.key)) {
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

  // resources/js/plugins/index.js
  function plugins_default(Alpine) {
    spinbutton_default(Alpine);
    floating_default(Alpine);
    fieldset_default(Alpine);
    listbox_default(Alpine);
    popover_default(Alpine);
    tooltip_default(Alpine);
    slider_default(Alpine);
    menu_default(Alpine);
    time_default(Alpine);
  }

  // builds/cdn.js
  document.addEventListener("alpine:init", () => {
    window.Alpine.plugin(plugins_default);
  });
})();
