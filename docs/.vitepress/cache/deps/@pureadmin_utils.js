import { vue_runtime_esm_bundler_exports } from "./chunk-GYZ4PULS.js";
import "./chunk-PK2WSZZ2.js";
import { __publicField } from "./chunk-DC5AMYBS.js";

// ../node_modules/.pnpm/@pureadmin+utils@2.4.8_vue@3.5.12_typescript@5.6.3_/node_modules/@pureadmin/utils/dist/index.mjs
var Se = Object.defineProperty;
var Ze = Object.getOwnPropertyDescriptor;
var Qe = Object.getOwnPropertyNames;
var Je = Object.prototype.hasOwnProperty;
var et = (e, t) => {
  for (var n in t) Se(e, n, { get: t[n], enumerable: true });
};
var Ee = (e, t, n, r) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let o of Qe(t))
      !Je.call(e, o) &&
        o !== n &&
        Se(e, o, {
          get: () => t[o],
          enumerable: !(r = Ze(t, o)) || r.enumerable
        });
  return e;
};
var fe = (e, t, n) => (Ee(e, t, "default"), n && Ee(n, t, "default"));
var It = e => e.replace(/^\s*/, "");
var $t = e => e.replace(/(\s*$)/g, "");
var Ht = e => e.replace(/^\s*|\s*$/g, "");
var Te = e => e.replace(/\s*/g, "");
var tt = Object.prototype.toString;
function N(e, t) {
  return tt.call(e) === `[object ${t}]`;
}
function G(e) {
  return e !== null && N(e, "Object");
}
function Ut(e) {
  let t;
  return (
    Object.prototype.toString.call(e) === "[object Object]" &&
    ((t = Object.getPrototypeOf(e)),
    t === null || t == Object.getPrototypeOf({}))
  );
}
function V(e) {
  return typeof e < "u";
}
function Ae(e) {
  return !V(e);
}
function ve(e) {
  return e === null;
}
function zt(e) {
  return ve(e) && Ae(e);
}
function nt(e) {
  return ve(e) || Ae(e);
}
function rt(e) {
  return v(e) || O(e)
    ? e.length === 0
    : e instanceof Map || e instanceof Set
      ? e.size === 0
      : G(e)
        ? Object.keys(e).length === 0
        : false;
}
function j(e) {
  return !!(rt(e) || nt(e));
}
function Nt(e) {
  return N(e, "Date");
}
function jt(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function X(e) {
  return N(e, "Number");
}
function qt(e) {
  var _a;
  if (!e || !(typeof e == "object" || typeof e == "function")) return false;
  let t = e;
  return (
    t instanceof Promise ||
    (z(t.then) &&
      z(t.catch) &&
      (Object.prototype.toString.call(t) === "[object Promise]" ||
        ((_a = t.constructor) == null ? void 0 : _a.name) === "Promise"))
  );
}
function O(e) {
  return N(e, "String");
}
function z(e) {
  return typeof e == "function";
}
function Me(e) {
  return N(e, "Boolean");
}
function _t(e) {
  return N(e, "RegExp");
}
function v(e) {
  return e && Array.isArray(e);
}
function Wt(e) {
  if (O(e))
    try {
      let t = JSON.parse(e);
      return !!(G(t) && t);
    } catch {
      return false;
    }
  return false;
}
function Yt(e) {
  return typeof window < "u" && N(e, "Window");
}
function Kt(e) {
  return G(e) && !!e.tagName;
}
var Gt = e => {
  if (e === "" || e.trim() === "") return false;
  try {
    return btoa(atob(e)) == e;
  } catch {
    return false;
  }
};
var Vt = e => /^#[a-fA-F0-9]{3}$|#[a-fA-F0-9]{6}$/.test(e);
var Xt = e => /^rgb\((\s*\d+\s*,?){3}\)$/.test(e);
var Zt = e => /^rgba\((\s*\d+\s*,\s*){3}\s*\d(\.\d+)?\s*\)$/.test(e);
var ot = typeof window > "u";
var me = !ot;
var h = typeof document < "u";
function Le(e) {
  let t =
    "^((https|http|ftp|rtsp|mms)?://)(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,5})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
  return new RegExp(t, "ig").test(e);
}
function Qt(e) {
  return /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/.test(
    e
  );
}
function Jt(e) {
  return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e);
}
function en(e) {
  return /^[1-9][0-9]{4,12}$/.test(e.toString());
}
function tn(e) {
  return /^[1-9][0-9]{5}$/.test(e.toString());
}
function nn(e, t) {
  let n = "[一-鿿",
    r = "。；，：“”（）、？《》！【】￥";
  if (
    ((t == null ? void 0 : t.pure) && (e = Te(e)), t == null ? void 0 : t.all)
  ) {
    let o;
    return (
      (t == null ? void 0 : t.unicode)
        ? (o = new RegExp(
            `(^${n}${r}${t == null ? void 0 : t.unicode}]+$)`,
            "g"
          ))
        : (t == null ? void 0 : t.replaceUnicode)
          ? (o = new RegExp(
              `(^${n}${t == null ? void 0 : t.replaceUnicode}]+$)`,
              "g"
            ))
          : (o = new RegExp(`(^${n}${r}]+$)`, "g")),
      o.test(e)
    );
  } else {
    let o;
    return (
      (t == null ? void 0 : t.unicode)
        ? (o = new RegExp(`(${n}${r}${t == null ? void 0 : t.unicode}]+)`, "g"))
        : (t == null ? void 0 : t.replaceUnicode)
          ? (o = new RegExp(
              `(${n}${t == null ? void 0 : t.replaceUnicode}]+)`,
              "g"
            ))
          : (o = new RegExp(`(${n}${r}]+)`, "g")),
      o.test(e)
    );
  }
}
function rn(e) {
  return /^[a-z]+$/.test(e);
}
function on(e) {
  return /^[A-Z]+$/.test(e);
}
function sn(e) {
  return /^[A-Za-z]+$/.test(e);
}
function Oe(e) {
  return !!new RegExp(/\s+/g).test(e);
}
function an(e) {
  return /<("[^"]*"|'[^']*'|[^'">])*>/.test(e);
}
var st = e => {
  let t = parseFloat(e);
  if (isNaN(t)) return false;
  t = Math.round(e * 100) / 100;
  let n = t.toString(),
    r = n.indexOf(".");
  for (r < 0 && ((r = n.length), (n += ".")); n.length <= r + 2; ) n += "0";
  return n;
};
var un = (e, t = true) => {
  let n = e;
  (n = e * 0.01), (n += "");
  let r =
    n.indexOf(".") > -1
      ? /(\d{1,3})(?=(?:\d{3})+\.)/g
      : /(\d{1,3})(?=(?:\d{3})+$)/g;
  return (n = n.replace(r, "$1")), t ? st(n) : n;
};
var fn = (e, t = 100) => {
  let n = 0,
    r = e.toString(),
    o = t.toString();
  try {
    n += r.split(".")[1].length;
  } catch {}
  try {
    n += o.split(".")[1].length;
  } catch {}
  return (
    (Number(r.replace(".", "")) * Number(o.replace(".", ""))) / Math.pow(10, n)
  );
};
var mn = e => (
  (e = e.toString()), e.includes(".") ? e.toString().split(".")[1].length : 0
);
var pn = (e, t = "整") => {
  let n = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"],
    r = ["", "拾", "佰", "仟"],
    o = ["", "万", "亿", "兆"],
    s = ["角", "分", "毫", "厘"],
    i = "元",
    c,
    f,
    m = "",
    y;
  if (e == "" || ((e = parseFloat(e)), e >= 1e15)) return "";
  if (e == 0) return (m = n[0] + i), m;
  (e = e.toString()),
    e.indexOf(".") == -1
      ? ((c = e), (f = ""), (i = `元${t}`))
      : ((y = e.split(".")), (c = y[0]), (f = y[1].substr(0, 4)));
  let p = 0,
    l = 0,
    d,
    g,
    w,
    E,
    R = 0;
  if (parseInt(c, 10) > 0) {
    (p = 0), (l = c.length);
    for (let b = 0; b < l; b++)
      (d = c.substr(b, 1)),
        (g = l - b - 1),
        (E = g / 4),
        (w = g % 4),
        d == "0"
          ? p++
          : (p > 0 && (m += n[0]), (p = 0), (m += n[parseInt(d)] + r[w])),
        w == 0 && p < 4 && (m += o[E]);
    m += i;
  }
  if (f != "") {
    R = f.length;
    for (let b = 0; b < R; b++)
      (d = f.substr(b, 1)), d != "0" && (m += n[Number(d)] + s[b]);
  }
  return m == "" && (m += n[0] + i), m;
};
var dn = (e, t) => {
  if (j(e)) return "";
  let n = (t == null ? void 0 : t.digit) ?? 0;
  if ((t == null ? void 0 : t.round) ?? false)
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: n,
      maximumFractionDigits: n
    }).format(e);
  {
    let o = e.toString(),
      [s, i] = o.split("."),
      u = "";
    return (
      i ? (u = i.slice(0, n).padEnd(n, "0")) : n > 0 && (u = "0".repeat(n)),
      s.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (u ? "." + u : "")
    );
  }
};
function ne(e) {
  e.preventDefault();
}
var yn = e => {
  if (!h) return;
  function t(n) {
    n === "add"
      ? e.forEach(r => {
          document.addEventListener(r, ne, { passive: false });
        })
      : e.forEach(r => {
          document.removeEventListener(r, ne);
        });
  }
  document.addEventListener("visibilitychange", () => {
    document.visibilityState === "visible"
      ? t("add")
      : document.visibilityState === "hidden" &&
        (t("remove"), document.removeEventListener("visibilitychange", ne));
  }),
    t("add");
};
var bn = e => {
  h &&
    e.forEach(t => {
      document.removeEventListener(t, ne);
    });
};
function ke(e) {
  if (!h) return;
  let t = e.split(","),
    r = t[0].match(/:(.*?);/)[1],
    o = window.atob(t[1]),
    s = o.length,
    i = new Uint8Array(s);
  for (; s--; ) i[s] = o.charCodeAt(s);
  return new Blob([i], { type: r });
}
function Ce(e, t, n) {
  return new Promise((r, o) => {
    h || o();
    let s = document.createElement("CANVAS"),
      i = s.getContext("2d"),
      u = new Image();
    (u.crossOrigin = ""),
      (u.onload = function () {
        if (!s || !i) return o();
        (s.height = u.height), (s.width = u.width), i.drawImage(u, 0, 0);
        let c = s.toDataURL(t || "image/png", n);
        (s = null), r(c);
      }),
      (u.src = e);
  });
}
function En(e, t = {}) {
  return new Promise((n, r) => {
    h || r();
    let { red: o = 0.3, green: s = 0.59, blue: i = 0.11, scale: u = 1 } = t,
      c = new Image();
    new URL(e, window.location.href).origin !== window.location.origin &&
      ((c.crossOrigin = "anonymous"), (c.referrerPolicy = "no-referrer")),
      (c.onload = () => {
        let f = document.createElement("canvas"),
          m = f.getContext("2d");
        if (!m) {
          r("无法获取画布上下文");
          return;
        }
        let y = c.width * u,
          p = c.height * u;
        (f.width = y), (f.height = p), m.drawImage(c, 0, 0, y, p);
        let l;
        try {
          l = m.getImageData(0, 0, f.width, f.height);
        } catch (g) {
          r(g);
          return;
        }
        let d = l.data;
        for (let g = 0; g < d.length; g += 4) {
          let w = d[g] * o + d[g + 1] * s + d[g + 2] * i;
          d[g] = d[g + 1] = d[g + 2] = w;
        }
        m.putImageData(l, 0, 0), n(f.toDataURL());
      }),
      (c.onerror = () => {
        r("图片加载失败");
      }),
      (c.src = e);
  });
}
var re = (e, t) =>
  h
    ? !!(e == null
        ? void 0
        : e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)")))
    : false;
var An = (e, t, n) => {
  h &&
    (re(e, t) || (e.className += " " + t),
    n && !re(e, n) && (e.className += " " + n));
};
var vn = (e, t, n) => {
  if (h) {
    if (re(e, t)) {
      let r = new RegExp("(\\s|^)" + t + "(\\s|$)");
      e.className = e.className.replace(r, " ").trim();
    }
    if (n && re(e, n)) {
      let r = new RegExp("(\\s|^)" + n + "(\\s|$)");
      e.className = e.className.replace(r, " ").trim();
    }
  }
};
var Mn = (e, t, n) => {
  if (!h) return;
  let r = n || document.body,
    { className: o } = r,
    s = o.replace(t, "").trim().split(/\s+/).join(" ");
  r.className = e ? `${s} ${t}` : s;
};
var Ln = e =>
  h
    ? Oe(e == null ? void 0 : e.className)
      ? e == null
        ? void 0
        : e.className.split(" ")
      : e == null
        ? void 0
        : e.className
    : "";
var it = Object.prototype.toString;
function at(e, t) {
  return e && e.hasOwnProperty ? e.hasOwnProperty(t) : false;
}
function ct(e, t, n) {
  if (e)
    if (e.forEach) e.forEach(t, n);
    else for (let r = 0, o = e.length; r < o; r++) t.call(n, e[r], r, e);
}
function lt(e, t, n) {
  if (e) for (let r in e) at(e, r) && t.call(n, e[r], r, e);
}
function pe(e, t) {
  let n = e.__proto__.constructor;
  return t ? new n(t) : new n();
}
function oe(e, t) {
  return t ? de(e, t) : e;
}
function de(e, t) {
  if (e)
    switch (it.call(e)) {
      case "[object Object]": {
        let n = Object.create(e.__proto__);
        return (
          lt(e, function (r, o) {
            n[o] = oe(r, t);
          }),
          n
        );
      }
      case "[object Date]":
      case "[object RegExp]":
        return pe(e, e.valueOf());
      case "[object Array]":
      case "[object Arguments]": {
        let n = [];
        return (
          ct(e, function (r) {
            n.push(oe(r, t));
          }),
          n
        );
      }
      case "[object Set]": {
        let n = pe(e);
        return (
          n.forEach(function (r) {
            n.add(oe(r, t));
          }),
          n
        );
      }
      case "[object Map]": {
        let n = pe(e);
        return (
          n.forEach(function (r) {
            n.set(oe(r, t));
          }),
          n
        );
      }
    }
  return e;
}
function kn(e, t) {
  return e && de(e, t);
}
function Cn(e) {
  return e && de(e, true);
}
var Pn = e => {
  let t = (e == null ? void 0 : e.type) ?? "rgb",
    n = (e == null ? void 0 : e.num) ?? 0;
  if (n === 0)
    switch (t) {
      case "rgb":
        return h
          ? window.crypto.getRandomValues(new Uint8Array(3)).toString()
          : void 0;
      case "hex":
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, `${Math.random() * 10}`)}`;
      case "hsl":
        return [
          360 * Math.random(),
          `${100 * Math.random()}%`,
          `${100 * Math.random()}%`
        ].toString();
    }
  else
    switch (t) {
      case "rgb":
        let r = [];
        if (!h) return;
        for (let i = 0; i < n; i++)
          r.push(window.crypto.getRandomValues(new Uint8Array(3)).toString());
        return r;
      case "hex":
        let o = [];
        for (let i = 0; i < n; i++)
          o.push(
            `#${Math.floor(Math.random() * 16777215)
              .toString(16)
              .padStart(6, `${Math.random() * 10}`)}`
          );
        return o;
      case "hsl":
        let s = [];
        for (let i = 0; i < n; i++)
          s.push(
            [
              360 * Math.random(),
              `${100 * Math.random()}%`,
              `${100 * Math.random()}%`
            ].toString()
          );
        return s;
    }
};
function Z(e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
}
function ge(e, t, n) {
  return `hsl(${e}, ${t}%, ${n}%)`;
}
var In = (e = {}) => {
  let {
      baseHue: t = Z(0, 360),
      hueOffset: n = 30,
      saturation: r = 70,
      lightness: o = 60,
      angle: s = 135,
      randomizeHue: i = false,
      randomizeSaturation: u = false,
      randomizeLightness: c = false,
      randomizeAngle: f = false
    } = e,
    m = i ? Z(0, 360) : t,
    y = u ? Z(50, 100) : r,
    p = c ? Z(40, 70) : o,
    l = f ? Z(0, 360) : s,
    d = ge(m, y, p),
    g = ge((m + n) % 360, y, p),
    w = ge((m + 180) % 360, y, p);
  return `linear-gradient(${l}deg, ${d}, ${g}, ${w})`;
};
var Re = e => {
  let t = e.replace("#", "").match(/../g);
  for (let n = 0; n < 3; n++) t[n] = parseInt(t[n], 16);
  return t;
};
var De = (e, t, n) => {
  let r = [e.toString(16), t.toString(16), n.toString(16)];
  for (let o = 0; o < 3; o++) r[o].length == 1 && (r[o] = `0${r[o]}`);
  return `#${r.join("")}`;
};
var $n = (e, t) => {
  let n = Re(e);
  for (let r = 0; r < 3; r++) n[r] = Math.floor(n[r] * (1 - t));
  return De(n[0], n[1], n[2]);
};
var Hn = (e, t) => {
  let n = Re(e);
  for (let r = 0; r < 3; r++) n[r] = Math.floor((255 - n[r]) * t + n[r]);
  return De(n[0], n[1], n[2]);
};
function Fn(e) {
  let t = /^\\\\\?\\/.test(e),
    n = /[^\u0000-\u0080]+/.test(e);
  return t || n ? e : e.replace(/\\/g, "/");
}
var se = 52.35987755982988;
var M = 3.141592653589793;
var ie = 6378245;
var ae = 0.006693421622965943;
function Pe(e, t) {
  let n = +e,
    r = +t,
    o =
      -100 +
      2 * n +
      3 * r +
      0.2 * r * r +
      0.1 * n * r +
      0.2 * Math.sqrt(Math.abs(n));
  return (
    (o += ((20 * Math.sin(6 * n * M) + 20 * Math.sin(2 * n * M)) * 2) / 3),
    (o += ((20 * Math.sin(r * M) + 40 * Math.sin((r / 3) * M)) * 2) / 3),
    (o +=
      ((160 * Math.sin((r / 12) * M) + 320 * Math.sin((r * M) / 30)) * 2) / 3),
    o
  );
}
function Ie(e, t) {
  let n = +e,
    r = +t,
    o =
      300 +
      e +
      2 * r +
      0.1 * n * n +
      0.1 * n * r +
      0.1 * Math.sqrt(Math.abs(n));
  return (
    (o += ((20 * Math.sin(6 * n * M) + 20 * Math.sin(2 * n * M)) * 2) / 3),
    (o += ((20 * Math.sin(n * M) + 40 * Math.sin((n / 3) * M)) * 2) / 3),
    (o +=
      ((150 * Math.sin((n / 12) * M) + 300 * Math.sin((n / 30) * M)) * 2) / 3),
    o
  );
}
function zn(e, t) {
  let n = +e,
    r = +t,
    o = n - 65e-4,
    s = r - 6e-3,
    i = Math.sqrt(o * o + s * s) - 2e-5 * Math.sin(s * se),
    u = Math.atan2(s, o) - 3e-6 * Math.cos(o * se),
    c = i * Math.cos(u),
    f = i * Math.sin(u);
  return [c, f];
}
function Nn(e, t) {
  let n = +e,
    r = +t,
    o = Math.sqrt(n * n + r * r) + 2e-5 * Math.sin(r * se),
    s = Math.atan2(r, n) + 3e-6 * Math.cos(n * se),
    i = o * Math.cos(s) + 65e-4,
    u = o * Math.sin(s) + 6e-3;
  return [i, u];
}
function jn(e, t) {
  let n = +e,
    r = +t;
  if ($e(n, r)) return [n, r];
  {
    let o = Pe(n - 105, r - 35),
      s = Ie(n - 105, r - 35),
      i = (r / 180) * M,
      u = Math.sin(i);
    u = 1 - ae * u * u;
    let c = Math.sqrt(u);
    (o = (o * 180) / (((ie * (1 - ae)) / (u * c)) * M)),
      (s = (s * 180) / ((ie / c) * Math.cos(i) * M));
    let f = r + o;
    return [n + s, f];
  }
}
function qn(e, t) {
  let n = +e,
    r = +t;
  if ($e(n, r)) return [n, r];
  {
    let o = Pe(n - 105, r - 35),
      s = Ie(n - 105, r - 35),
      i = (r / 180) * M,
      u = Math.sin(i);
    u = 1 - ae * u * u;
    let c = Math.sqrt(u);
    (o = (o * 180) / (((ie * (1 - ae)) / (u * c)) * M)),
      (s = (s * 180) / ((ie / c) * Math.cos(i) * M));
    let f = r + o,
      m = n + s;
    return [n * 2 - m, r * 2 - f];
  }
}
function $e(e, t) {
  let n = +e,
    r = +t;
  return !(n > 73.66 && n < 135.05 && r > 3.86 && r < 53.55);
}
var Yn = e => (v(e) && e.length > 0 ? Math.max.apply(null, e) : 0);
var Kn = e => (v(e) && e.length > 0 ? Math.min.apply(null, e) : 0);
var ut = e => (v(e) && e.length > 0 ? e.reduce((t, n) => t + n) : 0);
var Gn = e => (v(e) && e.length > 0 ? ut(e) / e.length : 0);
var He = e => {
  if (!e && typeof e > "u") return "";
  if (Number(e) === 0) return "零";
  let t = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
    n = ["", "十", "百", "千", "万", "亿", "点", ""],
    r = ("" + e).replace(/(^0*)/g, "").split("."),
    o = 0,
    s = "";
  for (let i = r[0].length - 1; i >= 0; i--) {
    switch (o) {
      case 0:
        s = n[7] + s;
        break;
      case 4:
        new RegExp("0{4}//d{" + (r[0].length - i - 1) + "}$").test(r[0]) ||
          (s = n[4] + s);
        break;
      case 8:
        (s = n[5] + s), (n[7] = n[5]), (o = 0);
        break;
    }
    o % 4 == 2 &&
      r[0].charAt(i + 2) != 0 &&
      r[0].charAt(i + 1) == 0 &&
      (s = t[0] + s),
      r[0].charAt(i) != 0 && (s = t[r[0].charAt(i)] + n[o % 4] + s),
      o++;
  }
  if (r.length > 1) {
    s += n[6];
    for (let i = 0; i < r[1].length; i++) s += t[r[1].charAt(i)];
  }
  return (
    s == "一十" && (s = "十"),
    s.match(/^一/) && s.length == 3 && (s = s.replace("一", "")),
    s
  );
};
function ce(e) {
  let t = e > Number.MAX_SAFE_INTEGER;
  return (
    t &&
      console.warn(
        "The calculation length has exceeded the JS maximum security integer"
      ),
    t
  );
}
function he(e, t) {
  let n =
      e.toString().split(".").length > 1
        ? e.toString().split(".")[1].length
        : 0,
    r =
      t.toString().split(".").length > 1
        ? t.toString().split(".")[1].length
        : 0;
  return Math.pow(10, Math.max(n, r));
}
function Vn(e, t, n) {
  let r = he(e, t),
    o = e * r + t * r;
  ce(o);
  let s = o / r;
  return (s = n || n ? s.toFixed(n) : s), Number(s);
}
function Xn(e, t, n) {
  let r = he(e, t),
    o = e * r - t * r;
  ce(o);
  let s = o / r;
  return (s = n || n ? s.toFixed(n) : s), Number(s);
}
function Zn(e, t, n) {
  let r = e * t;
  ce(r);
  let o = r;
  return (o = n ? o.toFixed(n) : o), Number(o);
}
function Qn(e, t, n) {
  let r = he(e, t),
    o = (e * r) / (t * r);
  return ce(o), (o = n || n ? o.toFixed(n) : o), Number(o);
}
var Jn = (e, t) => {
  if (e == 0) return "0 Bytes";
  let n = 1024,
    r = t || 2,
    o = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    s = Math.floor(Math.log(e) / Math.log(n));
  return parseFloat((e / Math.pow(n, s)).toFixed(r)) + " " + o[s];
};
function q(e) {
  let t = /* @__PURE__ */ new Date(),
    n = {
      "M+": t.getMonth() + 1,
      "D+": t.getDate(),
      "H+": t.getHours(),
      "m+": t.getMinutes(),
      "s+": t.getSeconds()
    };
  /(Y+)/.test(e) &&
    (e = e.replace(
      RegExp.$1,
      (t.getFullYear() + "").substr(4 - RegExp.$1.length)
    ));
  for (let r in n)
    new RegExp("(" + r + ")").test(e) &&
      (e = e.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? n[r] : ("00" + n[r]).substr(("" + n[r]).length)
      ));
  return e;
}
function ft(e = "星期") {
  let t = /* @__PURE__ */ new Date().getDay();
  return `${e}${t === 0 ? "日" : He(t)}`;
}
function nr(e) {
  e = new Date(e);
  let t = e.getFullYear(),
    n = e.getMonth() + 1;
  return new Date(t, n, 0).getDate();
}
function rr(e) {
  let t = [];
  for (let n = 0; n <= /* @__PURE__ */ new Date().getFullYear() - e; n++)
    t.push(e + n);
  return t.reverse();
}
function or(e) {
  let t = (e == null ? void 0 : e.type) ?? 1,
    n = ft((e == null ? void 0 : e.prefix) ?? "星期"),
    r = { ymd: q("YYYY年MM月DD日"), hms: q("HH时mm分ss秒"), week: n },
    o = { ymd: q("YYYY-MM-DD"), hms: q("HH-mm-ss"), week: n },
    s = { ymd: q("YYYY/MM/DD"), hms: q("HH/mm/ss"), week: n };
  switch (t) {
    case 1:
      return r;
    case 2:
      return o;
    case 3:
      return s;
    default:
      return r;
  }
}
function sr(e, t = true) {
  let n = i => ((i = Math.floor(i)), i < 10 && t ? `0${i}` : i),
    r = n(e / 3600),
    o = n((e % 3600) / 60),
    s = n(e % 60);
  return { h: r, m: o, s };
}
var _ = (e = 20) => new Promise(t => setTimeout(t, e));
var W = (e, t = 200, n = false) => {
  let r,
    o = t,
    s = void 0;
  return function () {
    r && clearTimeout(r),
      n
        ? (r || e.call(s, ...arguments), (r = setTimeout(() => (r = null), o)))
        : (r = setTimeout(() => e.call(s, ...arguments), o));
  };
};
var ar = (e, t = 1e3) => {
  let n;
  return function () {
    n ||
      (n = setTimeout(() => {
        e.call(void 0, ...arguments), (n = null);
      }, t));
  };
};
function Be(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Fe(e) {
  return Array.isArray(e);
}
function Ue(e) {
  return e instanceof Date;
}
function ze(e) {
  return e instanceof RegExp;
}
function Ne(e) {
  return e instanceof Map;
}
function je(e) {
  return e instanceof Set;
}
function mt(e, t, n) {
  if (e.size !== t.size) return false;
  for (let [r, o] of e) if (!t.has(r) || !n(o, t.get(r))) return false;
  return true;
}
function pt(e, t) {
  if (e.size !== t.size) return false;
  for (let n of e) if (!t.has(n)) return false;
  return true;
}
function dt(e, t, n) {
  if (e.length !== t.length) return false;
  for (let r = 0; r < e.length; r++) if (!n(e[r], t[r])) return false;
  return true;
}
function Y(e, t, n = /* @__PURE__ */ new WeakMap()) {
  if (e === t) return true;
  if (Ue(e) && Ue(t)) return e.getTime() === t.getTime();
  if (ze(e) && ze(t)) return e.toString() === t.toString();
  if (Ne(e) && Ne(t)) return mt(e, t, Y);
  if (je(e) && je(t)) return pt(e, t);
  if (Fe(e) && Fe(t)) return dt(e, t, Y);
  if (Be(e) && Be(t)) {
    if (n.has(e)) return n.get(e) === t;
    n.set(e, t);
    let r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return false;
    for (let s of r)
      if (!Object.prototype.hasOwnProperty.call(t, s) || !Y(e[s], t[s], n))
        return false;
    return true;
  }
  return false;
}
var fr = () => {
  if (!h) return;
  let e = navigator.userAgent.toLowerCase(),
    t = e.match(/midp/i) == "midp",
    n = e.match(/ucweb/i) == "ucweb",
    r = e.match(/android/i) == "android",
    o = e.match(/iphone os/i) == "iphone os",
    s = e.match(/windows ce/i) == "windows ce",
    i = e.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
    u = e.match(/windows mobile/i) == "windows mobile";
  return t || n || r || o || s || i || u;
};
var mr = () => {
  if (!h) return;
  let e = navigator.userAgent,
    t,
    n =
      e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) ||
      [];
  return /trident/i.test(n[1])
    ? ((t = /\brv[ :]+(\d+)/g.exec(e) || []),
      { browser: "ie", version: t[1] || "" })
    : n[1] === "Chrome" && ((t = e.match(/\b(OPR|Edge)\/(\d+)/)), t != null)
      ? { browser: t[1].replace("OPR", "Opera").toLowerCase(), version: t[2] }
      : ((n = n[2]
          ? [n[1], n[2]]
          : [navigator.appName, navigator.appVersion, "-?"]),
        (t = e.match(/version\/(\d+)/i)) != null && n.splice(1, 1, t[1]),
        { browser: n[0].toLowerCase(), version: n[1] });
};
var qe = (e, t = "_blank") => {
  if (!h) return;
  let n = document.createElement("a");
  n.setAttribute("href", e),
    n.setAttribute("target", t),
    n.setAttribute("rel", "noreferrer noopener"),
    n.setAttribute("id", "external");
  let r = document.getElementById("external");
  r && document.body.removeChild(r),
    document.body.appendChild(n),
    n.click(),
    n.remove();
};
function xr(e, t, n, r) {
  Ce(e).then(o => {
    gt(o, t, n, r);
  });
}
function gt(e, t, n, r) {
  let o = ke(e);
  ht(o, t, n, r);
}
function ht(e, t, n, r) {
  if (!h) return;
  let o = typeof r < "u" ? [r, e] : [e],
    s = new Blob(o, { type: n || "application/octet-stream" }),
    i = window.URL.createObjectURL(s),
    u = document.createElement("a");
  (u.style.display = "none"),
    (u.href = i),
    u.setAttribute("download", t),
    typeof u.download > "u" && u.setAttribute("target", "_blank"),
    document.body.appendChild(u),
    u.click(),
    document.body.removeChild(u),
    window.URL.revokeObjectURL(i);
}
function wr(e, t, n = "_self") {
  if (!h) return;
  let r = window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1,
    o = window.navigator.userAgent.toLowerCase().indexOf("safari") > -1;
  if (/(iP)/g.test(window.navigator.userAgent))
    return console.error("Your browser does not support download!"), false;
  if (r || o) {
    let s = document.createElement("a");
    if (
      ((s.href = e),
      (s.target = n),
      s.download !== void 0 &&
        (s.download = t || e.substring(e.lastIndexOf("/") + 1, e.length)),
      document.createEvent)
    ) {
      let i = document.createEvent("MouseEvents");
      return i.initEvent("click", true, true), s.dispatchEvent(i), true;
    }
  }
  return e.indexOf("?") === -1 && (e += "?download"), qe(e, n), true;
}
function _e(e, t) {
  if (e === t) return true;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null)
    return false;
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return false;
  for (let o of n) if (!r.includes(o) || !_e(e[o], t[o])) return false;
  return true;
}
function yt(e, t) {
  if (!e || !t) return false;
  let { length: n } = e;
  if (n !== t.length) return false;
  for (let r = 0; r < n; r++) if (!bt(e[r], t[r])) return false;
  return true;
}
function bt(e, t) {
  let n = Object.prototype.toString.call(e);
  return n !== Object.prototype.toString.call(t)
    ? false
    : n === "[object Object]"
      ? _e(e, t)
      : n === "[object Array]"
        ? yt(e, t)
        : n === "[object Function]"
          ? e === t
            ? true
            : e.toString() === t.toString()
          : e === t;
}
function Tr(e) {
  let t = new FormData();
  return (
    Object.keys(e).forEach(n => {
      t.append(n, e[n]);
    }),
    t
  );
}
function Ar(e, t = {}) {
  let n = new FormData(),
    r = t.fileKey || "file",
    o = t.filter || [],
    s = u => o.includes(u),
    i = (u, c, f) => {
      let m = f ? `${f}[${u}]` : u;
      s(c) ||
        (t.handleFile && (c instanceof File || c instanceof Blob)
          ? t.handleFile({ file: c, key: m, formData: n })
          : c instanceof File || c instanceof Blob
            ? n.append(r, c, c instanceof File ? c.name : "blob")
            : Array.isArray(c)
              ? c.forEach((y, p) => i(String(p), y, m))
              : c && typeof c == "object" && c.constructor === Object
                ? Object.keys(c).forEach(y => i(y, c[y], m))
                : n.append(m, c));
    };
  return Object.keys(e).forEach(u => i(u, e[u])), n;
}
var Mr = (e, t) => {
  if (
    ((e.install = n => {
      for (let r of [e, ...Object.values(t ?? {})]) n.component(r.name, r);
    }),
    t)
  )
    for (let [n, r] of Object.entries(t)) e[n] = r;
  return e;
};
var Lr = e => ((e.install = NOOP), e);
var Or = (e, t) => (
  (e.install = n => {
    (e._context = n._context), (n.config.globalProperties[t] = e);
  }),
  e
);
var Cr = e => {
  let t = /-(\w)/g;
  return e.replace(t, (n, r) => (r ? r.toUpperCase() : ""));
};
var Rr = e => {
  let t = /\B([A-Z])/g;
  return e.replace(t, "-$1").toLowerCase();
};
var Ir = (e, t) => {
  let n = { ...e };
  return (
    (v(t) ? t : [t]).forEach(o => {
      delete n[o];
    }),
    n
  );
};
function Fr() {
  return new Promise((e, t) => {
    h || t();
    let n = window.performance.timing;
    _(500)
      .then(r => {
        e({
          dns: (n.domainLookupEnd - n.domainLookupStart) / 1e3,
          tcp: (n.connectEnd - n.connectStart) / 1e3,
          request: (n.responseEnd - n.responseStart) / 1e3,
          dom: (n.domComplete - n.domInteractive) / 1e3,
          whiteScreen: (n.domComplete - n.navigationStart) / 1e3
        });
      })
      .catch(r => {
        t(r);
      });
  });
}
var Q = class {
  constructor(t) {
    __publicField(this, "storage");
    this.storage = t;
  }
  setItem(t, n) {
    j(this.storage) || this.storage.setItem(t, JSON.stringify(n));
  }
  getItem(t) {
    if (!j(this.storage)) return JSON.parse(this.storage.getItem(t));
  }
  removeItem(t) {
    j(this.storage) || this.storage.removeItem(t);
  }
  clear() {
    j(this.storage) || this.storage.clear();
  }
};
var le = class extends Q {
  constructor(t) {
    super(t);
  }
};
var Nr = () => (me ? new le(window.localStorage) : new le(""));
var jr = () => (me ? new Q(window.sessionStorage) : new Q(""));
function xt(e, t) {
  return O(t) ? e.substring(0, e.indexOf(t)) : "";
}
function wt(e, t) {
  return O(t) ? e.substring(e.lastIndexOf(t) + t.length, e.length) : "";
}
function Wr(e, t) {
  return O(t) ? [xt(e, t), wt(e, t)] : [];
}
function Yr(e, t, n) {
  if (!O(t) || !O(n)) return "";
  let r = e.substring(e.indexOf(t) + t.length, e.length);
  return r.substring(0, r.indexOf(n));
}
function Kr(e, t = 3) {
  return (e = e.toString()), e.length > t ? e.substr(0, t) + "..." : e;
}
function Gr(e) {
  return e ? [...(e + "")].map(Number) : "";
}
function Vr(e, t, n = "*") {
  X(e) && (e = e.toString()), v(t) || (t = Array.of(t));
  let r = e.split("");
  for (let o = 0; o < t.length; o++) {
    let s = t[o];
    if (G(s) && !v(s)) {
      let { start: i, end: u } = s;
      i >= 0 && i < u && r.fill(n, i, u + 1);
      continue;
    }
    X(s) && Number.isInteger(s) && s >= 0 && (r[t[o]] = n);
  }
  return r.join("");
}
var Et = e => {
  if (!Array.isArray(e)) return console.warn("tree must be an array"), [];
  if (!e || e.length === 0) return [];
  let t = [];
  for (let n of e)
    n.children && n.children.length > 0 && Et(n.children), t.push(n.uniqueId);
  return t;
};
var St = (e, t = []) => {
  if (!Array.isArray(e)) return console.warn("menuTree must be an array"), [];
  if (!e || e.length === 0) return [];
  for (let [n, r] of e.entries())
    r.children && r.children.length === 1 && delete r.children,
      (r.id = n),
      (r.parentId = t.length ? t[t.length - 1] : null),
      (r.pathList = [...t, r.id]),
      (r.uniqueId =
        r.pathList.length > 1 ? r.pathList.join("-") : r.pathList[0]),
      r.children && r.children.length > 0 && St(r.children, r.pathList);
  return e;
};
var Tt = (e, t = []) => {
  if (!Array.isArray(e)) return console.warn("tree must be an array"), [];
  if (!e || e.length === 0) return [];
  for (let [n, r] of e.entries())
    (r.id = n),
      (r.parentId = t.length ? t[t.length - 1] : null),
      (r.pathList = [...t, r.id]),
      r.children && r.children.length > 0 && Tt(r.children, r.pathList);
  return e;
};
var At = (e, t) => {
  if (!Array.isArray(e)) return console.warn("menuTree must be an array"), [];
  if (!e || e.length === 0) return [];
  let n = e.find(o => o.uniqueId === t);
  if (n) return n;
  let r = e
    .filter(o => o.children)
    .map(o => o.children)
    .flat(1);
  return At(r, t);
};
var vt = (e, t, n) => {
  if (!Array.isArray(e)) return console.warn("menuTree must be an array"), [];
  if (!e || e.length === 0) return [];
  for (let r of e) {
    let o = r.children && r.children.length > 0;
    r.uniqueId === t &&
      Object.prototype.toString.call(n) === "[object Object]" &&
      Object.assign(r, n),
      o && vt(r.children, t, n);
  }
  return e;
};
var Zr = (e, t, n, r) => {
  if (!Array.isArray(e)) return console.warn("data must be an array"), [];
  let o = {
      id: t || "id",
      parentId: n || "parentId",
      childrenList: r || "children"
    },
    s = {},
    i = {},
    u = [];
  for (let f of e) {
    let m = f[o.parentId];
    s[m] == null && (s[m] = []), (i[f[o.id]] = f), s[m].push(f);
  }
  for (let f of e) {
    let m = f[o.parentId];
    i[m] == null && u.push(f);
  }
  for (let f of u) c(f);
  function c(f) {
    if (
      (s[f[o.id]] !== null && (f[o.childrenList] = s[f[o.id]]),
      f[o.childrenList])
    )
      for (let m of f[o.childrenList]) c(m);
  }
  return u;
};
function eo() {
  if (h) return window.location;
}
function to(e) {
  if (!Le(e)) return console.error(`${e}不符合超链接规范`), {};
  let t = e.indexOf("?"),
    r = e.slice(t + 1).split("&"),
    o = {};
  for (let s = 0; s < r.length; s++) o[r[s].split("=")[0]] = r[s].split("=")[1];
  return o;
}
var ro = () => {
  let e = "",
    t = [];
  for (let n = 0; n <= 15; n++) t[n] = n.toString(16);
  for (let n = 1; n <= 36; n++)
    n === 9 || n === 14 || n === 19 || n === 24
      ? (e += "-")
      : n === 15
        ? (e += 4)
        : n === 20
          ? (e += t[(Math.random() * 4) | 8])
          : (e += t[(Math.random() * 16) | 0]);
  return e.replace(/-/g, "");
};
var oo = (e = "") => {
  let t = 0,
    n = Date.now(),
    r = Math.floor(Math.random() * 1e9);
  return t++, `${e}${r}${t}${String(n)}`;
};
var so = (e, t, n = "") => {
  let r =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
        ""
      ),
    o = [],
    s;
  if (((t = t || r.length), e))
    for (s = 0; s < e; s++) o[s] = r[0 | (Math.random() * t)];
  else {
    let i;
    for (o[8] = o[13] = o[18] = o[23] = "-", o[14] = "4", s = 0; s < 36; s++)
      o[s] ||
        ((i = 0 | (Math.random() * 16)), (o[s] = r[s == 19 ? (i & 3) | 8 : i]));
  }
  return n ? n + o.join("") : o.join("");
};
function We(e) {
  for (let t = e.length - 1; t > 0; t--) {
    let n = Math.floor(Math.random() * (t + 1));
    [e[t], e[n]] = [e[n], e[t]];
  }
  return e;
}
function fo(e, t) {
  return e.every(n => t.some(r => r === n));
}
var mo = (...e) => [...e].reduce((t, n) => t.filter(r => n.includes(r)));
function po(e, t, n) {
  return (e[t] = e.splice(n, 1, e[t])[0]), e;
}
function go(e, t, n = true) {
  let r = [];
  for (let o of e) o[t] !== void 0 && o[t] !== null && r.push(o[t]);
  return n ? Array.from(new Set(r)) : r;
}
function ho(e, t, n = {}) {
  let r = n.minPerPart ?? 0,
    o = n.maxPerPart,
    s = n.order ?? "random";
  if ((n.minPerPart && e < t * r) || (o && e > t * o))
    return (
      console.error(
        "总数不足以按指定的最小阀值分成相应的份数，或者总数超过了按最大阀值分配的能力"
      ),
      []
    );
  let i = e - r * t,
    u = Array.from({ length: t }, () => Math.random()),
    c = u.reduce((p, l) => p + l, 0),
    f = u.map(p => {
      let l = Math.floor((p / c) * i),
        d = r + l;
      return o !== void 0 && (d = Math.min(d, o)), d;
    }),
    m = f.reduce((p, l) => p + l, 0),
    y = 0;
  for (; m !== e; )
    y >= f.length && (y = 0),
      m < e && (o === void 0 || f[y] < o)
        ? (f[y]++, m++)
        : m > e && f[y] > r && (f[y]--, m--),
      y++;
  switch (s) {
    case "asc":
      f.sort((p, l) => p - l);
      break;
    case "desc":
      f.sort((p, l) => l - p);
      break;
    case "random":
      We(f);
      break;
  }
  return f;
}
var yo = (e, t) => {
  if (!v(e) || !v(t)) return false;
  let n = new Set(e);
  return t.every(r => n.has(r));
};
var bo = (e, t) => t.every(n => e.some(r => Y(r, n)));
var Ye = (e, t) => {
  if (!v(e) || !v(t)) return false;
  let n = new Set(e);
  return t.some(r => n.has(r));
};
function xo(e, t) {
  return t.some(n => e.some(r => Y(r, n)));
}
function wo(e, ...t) {
  let n = new Array(e.length);
  for (let r = 0; r < e.length; r++) {
    let o = {};
    for (let s of t) o[s] = e[r][s];
    n[r] = o;
  }
  return n;
}
var a = {};
et(a, { Vue: () => vue_runtime_esm_bundler_exports });
fe(a, vue_runtime_esm_bundler_exports);
var Lt = ["class", "style"];
var Ot = /^on[A-Z]/;
function kt(e) {
  return Object.keys(e).map(t => [t, e[t]]);
}
function Ao(e = {}) {
  let t = (0, a.getCurrentInstance)();
  if (!t) return {};
  let { excludeListeners: n = false, excludeKeys: r = [] } = e,
    o = (0, a.shallowRef)({}),
    s = r.concat(Lt);
  return (
    (t.attrs = (0, a.reactive)(t.attrs)),
    (0, a.watchEffect)(() => {
      let i = kt(t.attrs).reduce(
        (u, [c, f]) => (!s.includes(c) && !(n && Ot.test(c)) && (u[c] = f), u),
        {}
      );
      o.value = i;
    }),
    o
  );
}
var Lo = e => (0, a.h)((0, a.resolveComponent)(e));
function Ke(e, { target: t = h ? document.body : void 0 } = {}) {
  let n = document.createElement("textarea"),
    r = document.activeElement;
  (n.value = e),
    n.setAttribute("readonly", ""),
    (n.style.contain = "strict"),
    (n.style.position = "absolute"),
    (n.style.left = "-9999px"),
    (n.style.fontSize = "12pt");
  let o = document.getSelection(),
    s;
  o && o.rangeCount > 0 && (s = o.getRangeAt(0)),
    t == null ? void 0 : t.append(n),
    n.select(),
    (n.selectionStart = 0),
    (n.selectionEnd = e.length);
  let i = false;
  try {
    i = document.execCommand("copy");
  } catch (u) {
    throw new Error(u.message);
  }
  return (
    n.remove(),
    s && o && (o.removeAllRanges(), o.addRange(s)),
    r instanceof HTMLElement && r.focus(),
    i
  );
}
var Ro = (e = "") => {
  let t = (0, a.shallowRef)(e),
    n = (0, a.shallowRef)(false);
  return (
    (0, a.watch)(
      t,
      (o = e) => {
        (o = (0, a.isProxy)(o) || (0, a.isRef)(o) ? (0, a.unref)(o) : o),
          (o = o.trim().length === 0 ? e : o),
          o.length > 0 ? (n.value = Ke(o)) : (n.value = false);
      },
      { flush: "sync" }
    ),
    {
      clipboardValue: t,
      copied: n,
      update: o => {
        t.value = (0, a.isProxy)(o) || (0, a.isRef)(o) ? (0, a.unref)(o) : o;
        let s = t.value.trim().length === 0 ? e : t.value;
        s.length > 0 ? (n.value = Ke(s)) : (n.value = false);
      }
    }
  );
};
function U(e) {
  (0, a.getCurrentInstance)() && (0, a.onUnmounted)(e);
}
function Ge(e) {
  return (0, a.getCurrentScope)() ? ((0, a.onScopeDispose)(e), true) : false;
}
function ye(e) {
  let t = (0, a.toValue)(e);
  return (t == null ? void 0 : t.$el) ?? t;
}
var Bo = e => {
  let t = (e == null ? void 0 : e.className) ?? "dark",
    n = (0, a.shallowRef)(false),
    r,
    o = () => {
      let i = (e == null ? void 0 : e.selector)
        ? e.selector === "html"
          ? document.documentElement
          : document.body
        : document.documentElement;
      n.value = i.classList.contains(t);
    },
    s = () => {
      ((e == null ? void 0 : e.selector)
        ? e.selector === "html"
          ? document.documentElement
          : document.body
        : document.documentElement
      ).classList.toggle(t);
    };
  return (
    U(() => {
      r && (r.takeRecords(), r.disconnect());
    }),
    (0, a.onBeforeMount)(() => {
      let i = (e == null ? void 0 : e.selector)
        ? e.selector === "html"
          ? document.documentElement
          : document.body
        : document.documentElement;
      o(),
        (r = new MutationObserver(o)),
        r.observe(i, { attributes: true, attributeFilter: ["class"] });
    }),
    { isDark: n, toggleDark: s }
  );
};
function Ve(e, t = "px") {
  if (!e) return "";
  if (O(e)) return e;
  if (X(e)) return `${e}${t}`;
  console.warn("绑定值必须是字符串或数字");
}
var jo = (e, t, n) => {
  let r = (n == null ? void 0 : n.dragRefStyle) ?? {
      cursor: "move",
      userSelect: "none"
    },
    o = (n == null ? void 0 : n.resize) ?? true,
    s = (0, a.ref)(false),
    i = (0, a.ref)(true),
    u = (0, a.reactive)({ offsetX: 0, offsetY: 0 }),
    c = null,
    f = b => {
      let x = b.clientX,
        A = b.clientY,
        { offsetX: L, offsetY: D } = u,
        B = O(e) ? document.querySelector(e) : e.value,
        F = B.getBoundingClientRect(),
        I = F.left,
        H = F.top,
        P = F.width,
        S = F.height,
        k = document.documentElement.clientWidth,
        $ = document.documentElement.clientHeight,
        C = -I + L,
        T = -H + D,
        ue = k - I - P + L,
        J = $ - H - S + D,
        ee = be => {
          let xe = Math.min(Math.max(L + be.clientX - x, C), ue),
            we = Math.min(Math.max(D + be.clientY - A, T), J);
          (s.value = true),
            (u.offsetX = xe),
            (u.offsetY = we),
            c !== null && cancelAnimationFrame(c),
            (c = requestAnimationFrame(() => {
              B.style.transform = `translate(${Ve(xe)}, ${Ve(we)})`;
            }));
        },
        te = () => {
          (s.value = false),
            document.removeEventListener("mousemove", ee),
            document.removeEventListener("mouseup", te),
            c !== null && (cancelAnimationFrame(c), (c = null));
        };
      document.addEventListener("mousemove", ee),
        document.addEventListener("mouseup", te);
    },
    m = () => {
      (0, a.nextTick)(() => {
        let b = O(e) ? document.querySelector(e) : e.value,
          x = O(t) ? document.querySelector(t) : t.value;
        x &&
          b &&
          (r &&
            Object.keys(r).forEach(A => {
              let L = A;
              x.style[L] = r[L];
            }),
          x.addEventListener("mousedown", f));
      });
    },
    y = () => {
      (0, a.nextTick)(() => {
        let b = O(e) ? document.querySelector(e) : e.value,
          x = O(t) ? document.querySelector(t) : t.value;
        x && b && x.removeEventListener("mousedown", f);
      });
    },
    p = () => {
      let b = O(e) ? document.querySelector(e) : e.value;
      b &&
        ((u.offsetX = 0),
        (u.offsetY = 0),
        (b.style.transition =
          "transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)"),
        (0, a.nextTick)(() => {
          b.style.transform = "none";
          let x = () => {
            (b.style.transition = ""),
              b.removeEventListener("transitionend", x);
          };
          b.addEventListener("transitionend", x);
        }));
    },
    l = o
      ? W(
          () => {
            if (s.value) return;
            let b = O(e) ? document.querySelector(e) : e.value;
            if (b) {
              let x = b.getBoundingClientRect(),
                A = document.documentElement.clientWidth,
                L = document.documentElement.clientHeight;
              (x.left < 0 || x.top < 0 || x.right > A || x.bottom > L) && p();
            }
          },
          Me(o) ? 60 : o
        )
      : false,
    d = () => {
      y(),
        (s.value = false),
        (i.value = true),
        (u.offsetX = 0),
        (u.offsetY = 0);
    },
    g = z(l),
    w = () => {
      d(), m(), h && g && window.addEventListener("resize", l);
    },
    E = () => {
      g && window.removeEventListener("resize", l),
        y(),
        (s.value = false),
        (i.value = true),
        m(),
        h && g && window.addEventListener("resize", l);
    },
    R = () => {
      y(),
        (s.value = false),
        (i.value = false),
        h && g && window.removeEventListener("resize", l);
    };
  return (
    (0, a.onBeforeUnmount)(() => {
      d(),
        h &&
          (g && window.removeEventListener("resize", l),
          c !== null && cancelAnimationFrame(c));
    }),
    {
      draggable: i,
      dragging: s,
      transform: u,
      init: w,
      open: E,
      close: R,
      reset: p
    }
  );
};
function Xe(e, t, n = {}) {
  let { time: r = 40, box: o = "content-box", immediate: s = true } = n,
    i,
    u = !s,
    c = W((w, E) => {
      u ? t(w, E) : (u = true);
    }, r),
    f = () => {
      i && (i.disconnect(), (i = null));
    },
    m = w => typeof w == "string",
    y = w => (h ? Array.from(document.querySelectorAll(w)) : []),
    p = (0, a.computed)(() =>
      m(e)
        ? y(e)
        : Array.isArray(e)
          ? e.map(w => (m(w) ? y(w) : ye(w))).flat()
          : [ye(e)]
    ),
    l,
    d = () => {
      h &&
        (f(),
        l == null ? void 0 : l(),
        (l = (0, a.watch)(
          p,
          (w, E, R) => {
            window &&
              w.length &&
              ((i = new ResizeObserver(c)),
              w.forEach(b => {
                if (b && (i.observe(b, { box: o }), !u)) {
                  let x = b.getBoundingClientRect(),
                    A = {
                      target: b,
                      contentRect: x,
                      borderBoxSize: [
                        { inlineSize: x.width, blockSize: x.height }
                      ],
                      contentBoxSize: [
                        { inlineSize: x.width, blockSize: x.height }
                      ],
                      devicePixelContentBoxSize: [
                        { inlineSize: x.width, blockSize: x.height }
                      ]
                    };
                  t([A], i);
                }
              })),
              R(f);
          },
          { immediate: true, flush: "post", deep: true }
        )));
    };
  (0, a.nextTick)(() => {
    d();
  });
  let g = () => {
    f(), l && l();
  };
  return Ge(g), { stop: g, restart: d };
}
function K() {
  let {
    appContext: {
      config: { globalProperties: e }
    }
  } = (0, a.getCurrentInstance)();
  return e;
}
var os = (e, t) => {
  let n = "$echarts",
    r = (t == null ? void 0 : t.theme)
      ? (0, a.isProxy)(t.theme) || (0, a.isRef)(t.theme)
        ? t.theme
        : (0, a.ref)(t.theme)
      : (0, a.ref)("default"),
    o = (t == null ? void 0 : t.tooltipId) ?? "tooltipElement",
    s = K().$echarts;
  s ||
    Object.keys(K()).forEach(S => {
      var _a, _b, _c, _d, _e2;
      ((_b = (_a = K()) == null ? void 0 : _a[S]) == null ? void 0 : _b.Axis) &&
        ((_d = (_c = K()) == null ? void 0 : _c[S]) == null
          ? void 0
          : _d.ChartView) &&
        ((s = (_e2 = K()) == null ? void 0 : _e2[S]), (n = S));
    });
  let i = true,
    u = false,
    c = null,
    f = (0, a.ref)({}),
    m = (0, a.ref)(),
    y = (0, a.computed)(() =>
      r.value !== "dark"
        ? f.value
        : { backgroundColor: "transparent", ...f.value }
    );
  function p(S) {
    let k = (0, a.unref)(e);
    if (!(!k || !(0, a.unref)(k))) {
      if (!s) throw new Error("useECharts:  echarts未绑定到globalProperties");
      c = s.init(k, S, t);
    }
  }
  function l(S, ...k) {
    var _a;
    if (
      ((f.value = S),
      (m.value = k),
      ((_a = (0, a.unref)(e)) == null ? void 0 : _a.offsetHeight) === 0)
    ) {
      _().then(() => l((0, a.unref)(y), ...k));
      return;
    }
    (0, a.nextTick)(() => {
      _().then(() => {
        !c && p(r.value),
          (S.clear ?? true) && d(),
          c == null ? void 0 : c.setOption((0, a.unref)(y)),
          k &&
            k.map(C => {
              (C == null ? void 0 : C.type) !== "zrender" &&
                typeof (C == null ? void 0 : C.callback) == "function" &&
                (c == null
                  ? void 0
                  : c.on(
                      C == null ? void 0 : C.name,
                      (C == null ? void 0 : C.query)
                        ? C == null
                          ? void 0
                          : C.query
                        : "",
                      T => {
                        C == null ? void 0 : C.callback(T);
                      }
                    )),
                (C == null ? void 0 : C.type) === "zrender" &&
                  typeof (C == null ? void 0 : C.callback) == "function" &&
                  (c == null
                    ? void 0
                    : c.getZr().on(C == null ? void 0 : C.name, T => {
                        T.target || (C == null ? void 0 : C.callback(T));
                      }));
            }),
          (S == null ? void 0 : S.addTooltip) && I(S.addTooltip);
      });
    });
  }
  function d() {
    c && c.clear();
  }
  function g() {
    c && c.resize();
  }
  function w(S) {
    let k = (S == null ? void 0 : S.type) ?? "default",
      $ = (S == null ? void 0 : S.opts) ?? {};
    c.showLoading(k, $);
  }
  function E() {
    c.hideLoading();
  }
  function R(S) {
    c.appendData(S);
  }
  function b() {
    return c.getWidth();
  }
  function x() {
    return c.getHeight();
  }
  function A() {
    return c || p(r.value), c;
  }
  function L() {
    return c.getDom();
  }
  function D() {
    return c.getOption();
  }
  function B(S) {
    return c.getDataURL(S);
  }
  function F(S) {
    return c.getConnectedDataURL(S);
  }
  function I(S) {
    if (!S || !h) return;
    let k = document.querySelector("html");
    if (!document.getElementById(o)) {
      let T = document.createElement("div");
      T.setAttribute("id", o), (T.style.display = "block"), k.appendChild(T);
    }
    let $ = document.querySelector(`#${o}`),
      C = T => {
        if ((T == null ? void 0 : T.targetType) !== "axisLabel") return;
        let ue = `
        padding: 5px;
        font-size: 12px;
        display: inline;
        border-radius: 4px;
        position: absolute;
        background-color: #303133;
        z-index: 99999;color: #fff;
        box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 8px;
      `;
        ($.style.cssText = ue),
          ($.innerHTML = T == null ? void 0 : T.value),
          (k.onmousemove = J => {
            let ee = J.pageX - 10,
              te = J.pageY + 15;
            ($.style.top = te + "px"), ($.style.left = ee + "px");
          });
      };
    c == null
      ? void 0
      : c.on("mouseover", T => {
          ((S === "x" && T.componentType == "xAxis") ||
            (S === "y" && T.componentType == "yAxis") ||
            (S.toString() === "true" && T.componentType.includes("Axis"))) &&
            C(T);
        }),
      c == null
        ? void 0
        : c.on("mouseout", () => {
            (k.onmousemove = null), ($.style.cssText = "display:none");
          });
  }
  function H() {
    return { name: n, value: s };
  }
  (0, a.watch)(
    () => r.value,
    S => {
      c && (c.dispose(), p(S), l(f.value, ...m.value));
    }
  );
  function P() {
    var _a;
    c &&
      _(((_a = f.value) == null ? void 0 : _a.delay) ?? 300).then(() => {
        g();
      });
  }
  return (
    (0, a.onMounted)(() => {
      (0, a.nextTick)(() => {
        var _a, _b, _c;
        if ((_a = f.value) == null ? void 0 : _a.container) {
          let S = ((_b = f.value) == null ? void 0 : _b.delay) ?? 40;
          Xe(f.value.container, g, { time: S }),
            (u = Ye(
              ["body", "html", "document"],
              Array.of(f.value.container).flat()
            )),
            u && window.addEventListener("resize", P);
        } else
          (i = ((_c = f.value) == null ? void 0 : _c.resize) ?? true),
            i && window.addEventListener("resize", P);
      });
    }),
    U(() => {
      var _a, _b, _c;
      !((_a = f.value) == null ? void 0 : _a.container) &&
        i &&
        window.removeEventListener("resize", P),
        ((_b = f.value) == null ? void 0 : _b.container) &&
          u &&
          window.removeEventListener("resize", P),
        c &&
          (c.dispose(),
          (c = null),
          (_c = document.querySelector(`#${o}`)) == null
            ? void 0
            : _c.remove());
    }),
    {
      echarts: s,
      setOptions: l,
      getInstance: A,
      showLoading: w,
      hideLoading: E,
      clear: d,
      resize: g,
      getGlobalProperties: H,
      getDom: L,
      getWidth: b,
      getHeight: x,
      getOption: D,
      appendData: R,
      getDataURL: B,
      getConnectedDataURL: F,
      addTooltip: I
    }
  );
};
function Ct(e) {
  return `${e}-${/* @__PURE__ */ new Date().getTime()}-${Math.random().toString(36).substr(2, 9)}`;
}
function cs(e = true) {
  function t(o, s) {
    if (!h) return;
    let u = (Array.isArray(o) ? o : [o])
      .map(c =>
        (Array.isArray(c.src) ? c.src : [c.src]).map(m => {
          let y = s === "css" ? `link[href="${m}"]` : `script[src="${m}"]`,
            p = document.querySelector(y),
            l;
          return (
            p
              ? ((l = p.cloneNode(false)), p.replaceWith(l))
              : (s === "css"
                  ? ((l = document.createElement("link")),
                    (l.rel = "stylesheet"),
                    (l.href = m))
                  : ((l = document.createElement("script")),
                    (l.type = "text/javascript"),
                    (l.src = m)),
                (l.id = Ct(
                  s === "css" ? "pure-utils-css" : "pure-utils-script"
                )),
                (c.element instanceof HTMLElement
                  ? c.element
                  : document[c.element ?? (s === "css" ? "head" : "body")]
                ).appendChild(l)),
            new Promise((d, g) => {
              (l.onload = () => d({ src: m, message: "加载成功" })),
                (l.onerror = () => g({ src: m, message: "加载失败" }));
            })
          );
        })
      )
      .flat();
    return Promise.all(u);
  }
  function n(o) {
    return t(o, "css");
  }
  function r(o) {
    return t(o, "script");
  }
  return (
    U(() => {
      h &&
        e &&
        document
          .querySelectorAll(
            'link[id^="pure-utils-css"], script[id^="pure-utils-script"]'
          )
          .forEach(o => o.remove());
    }),
    { loadCss: n, loadScript: r }
  );
}
var Rt = ({ timeElapsed: e, startValue: t, byValue: n, duration: r }) => (
  (e /= r / 2),
  e < 1 ? (n / 2) * e ** 2 + t : (-n / 2) * (--e * (e - 2) - 1) + t
);
var ms = e => {
  let t = (0, a.isProxy)(e.el) ? e.el : (0, a.ref)(e.el),
    n = e.to,
    r = e.directions,
    o = (e == null ? void 0 : e.duration) ?? 0,
    s = (0, a.shallowRef)(false),
    i = null,
    u = () => {
      let m = t.value;
      if (!m) return;
      i !== null && cancelAnimationFrame(i);
      let y = m.scrollHeight - m.clientHeight,
        p = m.scrollWidth - m.clientWidth,
        l = Math.max(0, Math.min(n, r === "scrollTop" ? y : p));
      if (o === 0 || m[r] === l) {
        (m[r] = l),
          e.callback &&
            z(e.callback) &&
            (o === 0 ? e.callback("滚动完毕") : e.callback("无需滚动"));
        return;
      }
      let d = m[r],
        g = l - d,
        E = Math.max(1, o / 60),
        R = 0,
        b = () => {
          R += E;
          let x = Rt({
            timeElapsed: R,
            startValue: d,
            byValue: g,
            duration: o
          });
          (m[r] = x),
            R < o
              ? (i = requestAnimationFrame(b))
              : ((m[r] = l),
                (i = null),
                e.callback && z(e.callback) && e.callback("滚动完毕"));
        };
      i = requestAnimationFrame(b);
    };
  return {
    start: () => {
      s.value || ((s.value = true), u());
    },
    stop: () => {
      i !== null && (cancelAnimationFrame(i), (i = null)), (s.value = false);
    }
  };
};
var Dt = Symbol("watermark-dom");
var bs = (e = (0, a.ref)(h ? document.body : "")) => {
  let t = Dt.toString(),
    n = (0, a.shallowRef)(),
    r = p =>
      new Promise((l, d) => {
        h || d();
        let g = new Image();
        new URL(p, window.location.href).origin !== window.location.origin &&
          ((g.crossOrigin = "anonymous"), (g.referrerPolicy = "no-referrer")),
          (g.onload = () => l(g)),
          (g.onerror = d),
          (g.src = p);
      }),
    o = () => {
      let p = (0, a.unref)(n);
      n.value = void 0;
      let l = (0, a.unref)(e);
      l && p && l.removeChild(p);
    };
  function s(p, l) {
    if (!h) return Promise.resolve("");
    let d = document.createElement("canvas"),
      g = (l == null ? void 0 : l.width) ?? 250,
      w = (l == null ? void 0 : l.height) ?? 100;
    (d.width = g), (d.height = w);
    let E = d.getContext("2d");
    if (!E) return Promise.resolve("");
    let R = (((l == null ? void 0 : l.rotate) ?? -10) * Math.PI) / 180;
    if (
      (E.translate(g / 2, w / 2),
      E.rotate(R),
      (l == null ? void 0 : l.globalAlpha) && (E.globalAlpha = l.globalAlpha),
      l == null ? void 0 : l.shadowConfig)
    ) {
      let { shadowConfig: x } = l;
      (E.shadowBlur = x[0]),
        (E.shadowColor = (x == null ? void 0 : x[1]) ?? "#000000"),
        (E.shadowOffsetX = (x == null ? void 0 : x[2]) ?? 0),
        (E.shadowOffsetY = (x == null ? void 0 : x[3]) ?? 0);
    }
    let b = () => {
      E.font =
        (l == null ? void 0 : l.font) ??
        "normal 16px Arial, 'Courier New', 'Droid Sans', sans-serif";
      let x = p.includes((l == null ? void 0 : l.wrap) ?? "、")
          ? "center"
          : "left",
        A = (l == null ? void 0 : l.textAlign) ?? x;
      if (
        ((E.textAlign = A),
        (E.textBaseline = "middle"),
        (l == null ? void 0 : l.gradient) && v(l == null ? void 0 : l.gradient))
      ) {
        let I = E.createLinearGradient(0, 0, g, 0);
        l == null
          ? void 0
          : l.gradient.forEach(H => {
              I.addColorStop(H.value, H.color);
            }),
          (E.fillStyle = I);
      } else
        E.fillStyle =
          (l == null ? void 0 : l.color) ?? "rgba(128, 128, 128, 0.3)";
      let L = p.split((l == null ? void 0 : l.wrap) ?? "、"),
        D = (l == null ? void 0 : l.lineHeight) ?? 20,
        F = -((L.length * D) / 2) + D / 2;
      L.forEach((I, H) => {
        let P;
        A === "left" || A === "start"
          ? (P = -g / 4)
          : A === "right" || A === "end"
            ? (P = g / 4)
            : (P = 0),
          E.fillText(I, P, F + H * D);
      }),
        E.rotate(-R),
        E.translate(-g / 2, -w / 2);
    };
    return new Promise(x => {
      let A = l == null ? void 0 : l.image;
      A
        ? r(A)
            .then(L => {
              let D = (l == null ? void 0 : l.imageWidth) ?? L.width,
                B = (l == null ? void 0 : l.imageHeight) ?? L.height;
              E.drawImage(L, -D / 2, -B / 2, D, B), x(d.toDataURL("image/png"));
            })
            .catch(() => {
              b(), x(d.toDataURL("image/png"));
            })
        : (b(), x(d.toDataURL("image/png")));
    });
  }
  function i(p = {}) {
    let l = (0, a.unref)(n);
    l &&
      (V(p.width) && (l.style.width = `${p.width}px`),
      V(p.height) && (l.style.height = `${p.height}px`),
      V(p.str) &&
        s(p.str, p.attr).then(d => {
          l.style.background = `url(${d}) left top repeat`;
        }));
  }
  let u = W(() => {
      let p = (0, a.unref)(e);
      if (!p) return;
      let { clientHeight: l, clientWidth: d } = p;
      i({ height: l, width: d });
    }),
    c = (p, l) => {
      var _a;
      if (!h) return;
      if ((0, a.unref)(n)) return i({ str: p, attr: l }), t;
      let d = (0, a.unref)(e),
        g = document.createElement("div");
      if (
        ((n.value = g),
        (g.id = t),
        (g.style.pointerEvents = "none"),
        (g.style.top = "0px"),
        (g.style.left = "0px"),
        (g.style.position = d === document.body ? "fixed" : "absolute"),
        (g.style.zIndex = (l == null ? void 0 : l.zIndex) ?? "100000"),
        !d)
      )
        return t;
      let { clientHeight: w, clientWidth: E } = d;
      return (
        i({ str: p, width: E, height: w, attr: l }),
        ((_a = d == null ? void 0 : d.style) == null ? void 0 : _a.position) ||
          (d.style.position = "relative"),
        d.appendChild(g),
        t
      );
    };
  function f(p, { str: l, attr: d }) {
    p[0].removedNodes[0] &&
      p[0].removedNodes[0].id === t &&
      ((n.value = void 0), c(l, d));
  }
  function m(p, l) {
    let d = {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    };
    new MutationObserver(w => f(w, { str: p, attr: l })).observe(
      (0, a.unref)(e),
      d
    );
  }
  function y(p, l) {
    if (!h) return;
    c(p, l),
      window.addEventListener("resize", u),
      (l == null ? void 0 : l.forever) && m(p, l),
      (0, a.getCurrentInstance)() && o && o();
  }
  return (
    U(() => {
      h && window.removeEventListener("resize", u);
    }),
    { clear: o, setWatermark: y }
  );
};
export {
  An as addClass,
  st as addZero,
  Vn as addition,
  bn as allowMouseEvent,
  vt as appendFieldByUniqueId,
  yo as arrayAllExist,
  bo as arrayAllExistDeep,
  Ye as arrayAnyExist,
  xo as arrayAnyExistDeep,
  Gn as average,
  yn as banMouseEvent,
  zn as bd09togcj02,
  Tt as buildHierarchyTree,
  oo as buildPrefixUUID,
  ro as buildUUID,
  un as centsToDollars,
  kn as clone,
  Cn as cloneDeep,
  En as convertImageToGray,
  Fn as convertPath,
  Ke as copyTextToClipboard,
  Ar as createFormData,
  rr as createYear,
  $n as darken,
  ke as dataURLtoBlob,
  q as dateFormat,
  W as debounce,
  Y as deepEqual,
  Ir as delObjectProperty,
  _ as delay,
  St as deleteChildren,
  fr as deviceDetection,
  Qn as divisionOperation,
  fn as dollarsToCents,
  gt as downloadByBase64,
  ht as downloadByData,
  xr as downloadByOnlineUrl,
  wr as downloadByUrl,
  Rt as easeInOutQuad,
  kt as entries,
  ce as exceedMathMax,
  wo as extractFields,
  Et as extractPathList,
  Tr as formDataHander,
  Jn as formatBytes,
  Nn as gcj02tobd09,
  qn as gcj02towgs84,
  mr as getBrowserInfo,
  Ln as getClass,
  or as getCurrentDate,
  ft as getCurrentWeek,
  mn as getDecimalPlaces,
  go as getKeyList,
  eo as getLocation,
  At as getNodeByUniqueId,
  Fr as getPerformance,
  to as getQueryMap,
  sr as getTime,
  Zr as handleTree,
  nn as hasCNChars,
  re as hasClass,
  at as hasOwnProp,
  Re as hexToRgb,
  Vr as hideTextAtIndex,
  mo as intersection,
  N as is,
  j as isAllEmpty,
  sn as isAlphabets,
  v as isArray,
  Gt as isBase64,
  Me as isBoolean,
  h as isBrowser,
  me as isClient,
  Nt as isDate,
  V as isDef,
  Kt as isElement,
  Jt as isEmail,
  rt as isEmpty,
  bt as isEqual,
  yt as isEqualArray,
  _e as isEqualObject,
  Oe as isExistSpace,
  z as isFunction,
  Vt as isHex,
  an as isHtml,
  fo as isIncludeAllChildren,
  Wt as isJSON,
  jt as isLeapYear,
  rn as isLowerCase,
  ve as isNull,
  zt as isNullAndUnDef,
  nt as isNullOrUnDef,
  X as isNumber,
  G as isObject,
  Qt as isPhone,
  Ut as isPlainObject,
  tn as isPostCode,
  qt as isPromise,
  en as isQQ,
  _t as isRegExp,
  Xt as isRgb,
  Zt as isRgba,
  ot as isServer,
  O as isString,
  Ae as isUnDef,
  on as isUpperCase,
  Le as isUrl,
  Yt as isWindow,
  Hn as lighten,
  mt as mapsEqual,
  Yn as max,
  Kn as min,
  nr as monthDays,
  Zn as multiplication,
  Cr as nameCamelize,
  Rr as nameHyphenate,
  He as numberToChinese,
  qe as openLink,
  $e as out_of_china,
  dn as priceToThousands,
  pn as priceUppercase,
  Pn as randomColor,
  ho as randomDivide,
  In as randomGradient,
  Te as removeAllSpace,
  Ht as removeBothSidesSpace,
  vn as removeClass,
  It as removeLeftSpace,
  $t as removeRightSpace,
  De as rgbToHex,
  pt as setsEqual,
  We as shuffleArray,
  Gr as splitNum,
  Nr as storageLocal,
  jr as storageSession,
  wt as subAfter,
  xt as subBefore,
  Yr as subBetween,
  Wr as subBothSides,
  Kr as subTextAddEllipsis,
  Xn as subtraction,
  ut as sum,
  po as swapOrder,
  ar as throttle,
  Mn as toggleClass,
  Ce as urlToBase64,
  Ao as useAttrs,
  Ro as useCopyToClipboard,
  Bo as useDark,
  jo as useDraggable,
  Lo as useDynamicComponent,
  os as useECharts,
  K as useGlobal,
  cs as useLoader,
  Xe as useResizeObserver,
  ms as useScrollTo,
  bs as useWatermark,
  so as uuid,
  jn as wgs84togcj02,
  Mr as withInstall,
  Or as withInstallFunction,
  Lr as withNoopInstall
};
//# sourceMappingURL=@pureadmin_utils.js.map
