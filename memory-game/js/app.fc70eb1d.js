(function(e) {
	function t(t) {
		for (var a, i, c = t[0], o = t[1], u = t[2], p = 0, f = []; p < c.length; p++) i = c[p], Object.prototype.hasOwnProperty.call(s, i) && s[i] && f.push(s[i][0]), s[i] = 0;
		for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
		l && l(t);
		while (f.length) f.shift()();
		return r.push.apply(r, u || []), n()
	}
	function n() {
		for (var e, t = 0; t < r.length; t++) {
			for (var n = r[t], a = !0, c = 1; c < n.length; c++) {
				var o = n[c];
				0 !== s[o] && (a = !1)
			}
			a && (r.splice(t--, 1), e = i(i.s = n[0]))
		}
		return e
	}
	var a = {},
		s = {
			app: 0
		},
		r = [];

	function i(t) {
		if (a[t]) return a[t].exports;
		var n = a[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
	}
	i.m = e, i.c = a, i.d = function(e, t, n) {
		i.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, i.r = function(e) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, i.t = function(e, t) {
		if (1 & t && (e = i(e)), 8 & t) return e;
		if (4 & t && "object" === typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (i.r(n), Object.defineProperty(n, "default", {
			enumerable: !0,
			value: e
		}), 2 & t && "string" != typeof e) for (var a in e) i.d(n, a, function(t) {
			return e[t]
		}.bind(null, a));
		return n
	}, i.n = function(e) {
		var t = e && e.__esModule ?
		function() {
			return e["default"]
		} : function() {
			return e
		};
		return i.d(t, "a", t), t
	}, i.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, i.p = "/";
	var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
		o = c.push.bind(c);
	c.push = t, c = c.slice();
	for (var u = 0; u < c.length; u++) t(c[u]);
	var l = o;
	r.push([0, "chunk-vendors"]), n()
})({
	0: function(e, t, n) {
		e.exports = n("56d7")
	},
	"098f": function(e, t, n) {
		e.exports = n.p + "../img/pubg.1f6aba1d.jpg"
	},
	"0ff0": function(e, t, n) {
		e.exports = n.p + "../img/css.06694957.png"
	},
	"27be": function(e, t, n) {
		e.exports = n.p + "../img/psGame.b4579ee0.png"
	},
	"50a3": function(e, t, n) {
		"use strict";
		var a = n("7d32"),
			s = n.n(a);
		s.a
	},
	"56d7": function(e, t, n) {
		"use strict";
		n.r(t);
		n("e260"), n("e6cf"), n("cca6"), n("a79d");
		var a = n("2b0e"),
			s = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "wrap",
					attrs: {
						id: "app"
					}
				}, [n("Header", {
					attrs: {
						scoreA: e.scoreA,
						scoreB: e.scoreB,
						resetGame: e.resetGame
					}
				}), n("div", {
					staticClass: "cards"
				}, e._l(e.cards, (function(t, a) {
					return n("div", {
						key: a,
						staticClass: "card",
						class: {
							flipped: t.flipped,
							found: t.found
						},
						on: {
							click: function(n) {
								return e.flipCard(t)
							}
						}
					}, [n("div", {
						staticClass: "back"
					}), n("div", {
						staticClass: "front",
						style: {
							backgroundImage: "url(" + t.image + ")"
						}
					})])
				})), 0), e.show ? n("Lightbox", {
					attrs: {
						user: e.user,
						closeBox: e.closeBox
					}
				}) : e._e()], 1)
			},
			r = [],
			i = (n("99af"), n("4de4"), n("d81d"), n("b0c0"), n("2ef0")),
			c = n.n(i),
			o = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "wrap"
				}, [n("div", {
					staticClass: "info"
				}, [n("div", {
					staticClass: "label"
				}, [n("span", {
					staticClass: "title"
				}, [e._v("Score-A：")]), n("span", {
					staticClass: "value"
				}, [e._v(e._s(e.scoreA))])]), n("div", {
					staticClass: "label"
				}, [n("span", {
					staticClass: "title"
				}, [e._v("Score-B：")]), n("span", {
					staticClass: "value"
				}, [e._v(e._s(e.scoreB))])])]), n("div", {
					staticClass: "btnWrap"
				}, [n("button", {
					staticClass: "btn",
					on: {
						click: function(t) {
							return e.resetGame()
						}
					}
				}, [e._v("重新開始")])])])
			},
			u = [],
			l = {
				name: "Header",
				props: ["scoreA", "scoreB", "resetGame"]
			},
			p = l,
			f = (n("a77f"), n("2877")),
			d = Object(f["a"])(p, o, u, !1, null, "59d778be", null),
			m = d.exports,
			h = function() {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("div", {
					staticClass: "box"
				}, [n("div", {
					staticClass: "overlay"
				}), n("div", {
					staticClass: "content"
				}, [n("div", {
					staticClass: "title"
				}, [e._v("你猜錯了，換 " + e._s(e.user) + " 猜。")]), n("button", {
					on: {
						click: function(t) {
							return e.closeBox()
						}
					}
				}, [e._v("關閉")])])])
			},
			g = [],
			b = {
				name: "Lightbox",
				props: ["user", "closeBox"]
			},
			v = b,
			x = (n("50a3"), Object(f["a"])(v, h, g, !1, null, "8ed1c93c", null)),
			C = x.exports,
			B = n("691c"),
			_ = n.n(B),
			w = n("cce0"),
			k = n.n(w),
			y = n("9c9a"),
			A = n.n(y),
			T = n("b521"),
			j = n.n(T),
			O = n("6493"),
			F = n.n(O),
			G = n("0ff0"),
			P = n.n(G),
			S = n("e319"),
			M = n.n(S),
			$ = n("e004"),
			E = n.n($),
			H = n("622f"),
			L = n.n(H),
			D = n("27be"),
			J = n.n(D),
			I = n("098f"),
			W = n.n(I),
			q = [{
				name: "vue",
				image: _.a
			}, {
				name: "express",
				image: k.a
			}, {
				name: "mongo",
				image: A.a
			}, {
				name: "nodejs",
				image: E.a
			}, {
				name: "webpack",
				image: j.a
			}, {
				name: "babel",
				image: F.a
			}, {
				name: "css",
				image: P.a
			}, {
				name: "html",
				image: M.a
			}, {
				name: "switchGame",
				image: L.a
			}, {
				name: "psGame",
				image: J.a
			}, {
				name: "pubg",
				image: W.a
			}],
			z = function() {
				var e = [].concat(c.a.cloneDeep(q), c.a.cloneDeep(q));
				return c.a.shuffle(e)
			},
			K = {
				name: "App",
				components: {
					Header: m,
					Lightbox: C
				},
				data: function() {
					return {
						show: !1,
						cards: [],
						started: !1,
						startTime: 0,
						turns: 0,
						flipBackTimer: null,
						timer: null,
						time: "--:--",
						scoreA: 0,
						scoreB: 0,
						user: "A"
					}
				},
				methods: {
					resetGame: function() {
						this.show = !1;
						var e = z();
						this.turns = 0, this.scoreA = 0, this.scoreB = 0, this.user = "A", this.started = !1, this.startTime = 0, c.a.each(e, (function(e) {
							e.flipped = !1, e.found = !1
						})), this.cards = e
					},
					flippedCards: function() {
						return c.a.filter(this.cards, (function(e) {
							return e.flipped
						}))
					},
					sameFlippedCard: function() {
						var e = this.flippedCards();
						if (2 == e.length && e[0].name == e[1].name) {
							switch (this.user) {
							case "A":
								return this.scoreA = this.scoreA + 1;
							case "B":
								return this.scoreB = this.scoreB + 1;
							default:
								break
							}
							return !0
						}
					},
					setCardFounds: function() {
						c.a.each(this.cards, (function(e) {
							e.flipped && (e.found = !0)
						}))
					},
					checkAllFound: function() {
						var e = c.a.filter(this.cards, (function(e) {
							return e.found
						}));
						if (e.length == this.cards.length) return !0
					},
					closeBox: function() {
						this.show = !1
					},
					flipCard: function(e) {
						var t = this;
						if (!e.found && !e.flipped) {
							var n = this.flippedCards().length;
							0 == n ? e.flipped = !e.flipped : 1 == n && (e.flipped = !e.flipped, this.turns += 1, this.sameFlippedCard() ? this.flipBackTimer = setTimeout((function() {
								t.clearFlipBackTimer(), t.setCardFounds(), t.clearFlips(), t.checkAllFound() && t.finishGame()
							}), 200) : this.flipBackTimer = setTimeout((function() {
								t.user = "A" === t.user ? "B" : "A", t.show = !0, t.clearFlipBackTimer(), t.clearFlips()
							}), 1e3))
						}
					},
					clearFlips: function() {
						c.a.map(this.cards, (function(e) {
							return e.flipped = !1
						}))
					},
					clearFlipBackTimer: function() {
						clearTimeout(this.flipBackTimer), this.flipBackTimer = null
					}
				},
				created: function() {
					this.resetGame()
				}
			},
			N = K,
			Q = (n("5c0b"), Object(f["a"])(N, s, r, !1, null, null, null)),
			R = Q.exports;
		a["a"].config.productionTip = !1, new a["a"]({
			render: function(e) {
				return e(R)
			}
		}).$mount("#app")
	},
	"5c0b": function(e, t, n) {
		"use strict";
		var a = n("9c0c"),
			s = n.n(a);
		s.a
	},
	"622f": function(e, t, n) {
		e.exports = n.p + "../img/switchGame.585def46.png"
	},
	6493: function(e, t, n) {
		e.exports = n.p + "../img/babel.67aa7046.png"
	},
	"691c": function(e, t, n) {
		e.exports = n.p + "../img/vue.cf91a267.png"
	},
	"7d32": function(e, t, n) {},
	"9c0c": function(e, t, n) {},
	"9c9a": function(e, t, n) {
		e.exports = n.p + "../img/mongodb.c81f0054.png"
	},
	a77f: function(e, t, n) {
		"use strict";
		var a = n("e00a"),
			s = n.n(a);
		s.a
	},
	b521: function(e, t, n) {
		e.exports = n.p + "../img/webpack.5f7d5b64.png"
	},
	cce0: function(e, t, n) {
		e.exports = n.p + "../img/express.57c5e46e.png"
	},
	e004: function(e, t, n) {
		e.exports = n.p + "../img/nodejs.c7718d20.png"
	},
	e00a: function(e, t, n) {},
	e319: function(e, t, n) {
		e.exports = n.p + "../img/html.05823a40.png"
	}
});
//# sourceMappingURL=app.fc70eb1d.js.map