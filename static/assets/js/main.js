!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    n(1), (e.exports = n(2));
  },
  function (e, t) {},
  function (e, t) {
    var n = document.querySelector(".container"),
      o = document.querySelector(".menu"),
      r = document.querySelector(".menu-trigger"),
      i =
        (document.querySelector(".menu__inner--desktop"),
        document.querySelector(".menu__sub-inner-more-trigger")),
      u = document.querySelector(".menu__sub-inner-more"),
      c = getComputedStyle(document.body).getPropertyValue("--phoneWidth"),
      d = function () {
        return window.matchMedia(c).matches;
      },
      s = function () {
        r && r.classList.toggle("hidden", !d()),
          o && o.classList.toggle("hidden", d()),
          u && u.classList.toggle("hidden", !d());
      };
    o &&
      o.addEventListener("click", function (e) {
        return e.stopPropagation();
      }),
      u &&
        u.addEventListener("click", function (e) {
          return e.stopPropagation();
        }),
      s(),
      document.body.addEventListener("click", function () {
        d() || !u || u.classList.contains("hidden")
          ? d() && !o.classList.contains("hidden") && o.classList.add("hidden")
          : u.classList.add("hidden");
      }),
      window.addEventListener("resize", s),
      r &&
        r.addEventListener("click", function (e) {
          e.stopPropagation(), o && o.classList.toggle("hidden");
        }),
      i &&
        i.addEventListener("click", function (e) {
          e.stopPropagation(),
            u && u.classList.toggle("hidden"),
            u.getBoundingClientRect().right > n.getBoundingClientRect().right &&
              ((u.style.left = "auto"), (u.style.right = 0));
        });
  },
]);
