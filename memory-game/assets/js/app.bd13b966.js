(function(e){function t(t){for(var a,i,c=t[0],o=t[1],u=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"098f":function(e,t,n){e.exports=n.p+"assets/img/pubg.1f6aba1d.jpg"},"0ff0":function(e,t,n){e.exports=n.p+"assets/img/css.06694957.png"},"27be":function(e,t,n){e.exports=n.p+"assets/img/psGame.b4579ee0.png"},"2c4a":function(e,t,n){},4004:function(e,t,n){"use strict";var a=n("df2f"),s=n.n(a);s.a},"4ec9":function(e,t,n){"use strict";var a=n("77a0"),s=n.n(a);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap",attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/game"}},[e._v("Game")])],1),n("router-view")],1)},r=[],i={name:"App"},c=i,o=(n("5c0b"),n("2877")),u=Object(o["a"])(c,s,r,!1,null,null,null),l=u.exports,f=n("8c4f"),p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[n("h1",[e._v("我是首頁")])])}],m={name:"Home"},h=m,v=(n("823b"),Object(o["a"])(h,p,d,!1,null,"fe3f2d6a",null)),b=v.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[n("Header",{attrs:{scoreA:e.scoreA,scoreB:e.scoreB,resetGame:e.resetGame}}),n("Card",{attrs:{cards:e.cards,flipCard:e.flipCard}}),n("transition",{attrs:{name:"fade"}},[e.show?n("Lightbox",{attrs:{user:e.user,closeBox:e.closeBox}}):e._e()],1)],1)},C=[],_=(n("99af"),n("4de4"),n("d81d"),n("b0c0"),n("2ef0")),x=n.n(_),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"btnWrap"},[n("button",{staticClass:"btn",on:{click:function(t){return e.resetGame()}}},[e._v("重新開始")])]),n("div",{staticClass:"info"},[n("div",{staticClass:"label"},[n("span",{staticClass:"title"},[e._v("A組：")]),n("span",{staticClass:"value"},[e._v(e._s(e.scoreA))])]),n("div",{staticClass:"label"},[n("span",{staticClass:"title"},[e._v("B組：")]),n("span",{staticClass:"value"},[e._v(e._s(e.scoreB))])])])])},y=[],B={name:"Header",props:["scoreA","scoreB","resetGame"]},k=B,A=(n("cf3f"),Object(o["a"])(k,w,y,!1,null,"67c2690f",null)),O=A.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cards"},[n("transition-group",{attrs:{name:"flippe",tag:"div"}},e._l(e.cards,(function(t,a){return n("div",{key:a,staticClass:"card",class:{flipped:t.flipped,found:t.found},on:{click:function(n){return e.flipCard(t)}}},[n("div",{staticClass:"back"}),n("div",{staticClass:"front",style:{backgroundImage:"url("+t.image+")"}})])})),0)],1)},j=[],G={name:"Card",props:["cards","flipCard"]},F=G,$=(n("4ec9"),Object(o["a"])(F,T,j,!1,null,"6eaf0d51",null)),E=$.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box"},[n("div",{staticClass:"overlay"}),n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[e._v("你猜錯了，換 "+e._s(e.user)+" 猜。")]),n("button",{on:{click:function(t){return e.closeBox()}}},[e._v("關閉")])])])},H=[],M={name:"Lightbox",props:["user","closeBox"]},S=M,L=(n("4004"),Object(o["a"])(S,P,H,!1,null,"0d003ccc",null)),D=L.exports,J=n("691c"),I=n.n(J),W=n("0ff0"),q=n.n(W),z=n("e319"),K=n.n(z),N=n("622f"),Q=n.n(N),R=n("27be"),U=n.n(R),V=n("098f"),X=n.n(V),Y={name:"Game",components:{Header:O,Lightbox:D,Card:E},data:function(){return{show:!1,cards:[],flipBackTimer:null,scoreA:0,scoreB:0,user:"A",CardTypes:[{name:"vue",image:I.a},{name:"css",image:q.a},{name:"html",image:K.a},{name:"switchGame",image:Q.a},{name:"psGame",image:U.a},{name:"pubg",image:X.a}]}},methods:{shuffleCards:function(){var e=[].concat(x.a.cloneDeep(this.CardTypes),x.a.cloneDeep(this.CardTypes));return x.a.shuffle(e)},resetGame:function(){this.show=!1;var e=this.shuffleCards();this.scoreA=0,this.scoreB=0,this.user="A",x.a.each(e,(function(e){e.flipped=!1,e.found=!1})),this.cards=e},flippedCards:function(){return x.a.filter(this.cards,(function(e){return e.flipped}))},sameFlippedCard:function(){var e=this.flippedCards();if(2==e.length&&e[0].name==e[1].name){switch(this.user){case"A":return this.scoreA=this.scoreA+1;case"B":return this.scoreB=this.scoreB+1;default:break}return!0}},setCardFounds:function(){x.a.each(this.cards,(function(e){e.flipped&&(e.found=!0)}))},checkAllFound:function(){var e=x.a.filter(this.cards,(function(e){return e.found}));if(e.length==this.cards.length)return!0},closeBox:function(){this.show=!1},flipCard:function(e){var t=this;if(!e.found&&!e.flipped){var n=this.flippedCards().length;0==n?e.flipped=!e.flipped:1==n&&(e.flipped=!e.flipped,this.sameFlippedCard()?this.flipBackTimer=setTimeout((function(){t.clearFlipBackTimer(),t.setCardFounds(),t.clearFlips(),t.checkAllFound()&&t.finishGame()}),200):this.flipBackTimer=setTimeout((function(){t.user="A"===t.user?"B":"A",t.show=!0,t.clearFlipBackTimer(),t.clearFlips()}),1e3))}},clearFlips:function(){x.a.map(this.cards,(function(e){return e.flipped=!1}))},clearFlipBackTimer:function(){clearTimeout(this.flipBackTimer),this.flipBackTimer=null}},beforeMount:function(){this.resetGame()}},Z=Y,ee=(n("cda8"),Object(o["a"])(Z,g,C,!1,null,"ffa19946",null)),te=ee.exports;a["a"].use(f["a"]);var ne=[{path:"/",name:"Home",component:b},{path:"/game",name:"Game",component:te}],ae=new f["a"]({mode:"history",routes:ne}),se=ae;a["a"].config.productionTip=!1,new a["a"]({router:se,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),s=n.n(a);s.a},"622f":function(e,t,n){e.exports=n.p+"assets/img/switchGame.585def46.png"},"691c":function(e,t,n){e.exports=n.p+"assets/img/vue.cf91a267.png"},"6c27":function(e,t,n){},"77a0":function(e,t,n){},"823b":function(e,t,n){"use strict";var a=n("6c27"),s=n.n(a);s.a},"9c0c":function(e,t,n){},c3f8:function(e,t,n){},cda8:function(e,t,n){"use strict";var a=n("c3f8"),s=n.n(a);s.a},cf3f:function(e,t,n){"use strict";var a=n("2c4a"),s=n.n(a);s.a},df2f:function(e,t,n){},e319:function(e,t,n){e.exports=n.p+"assets/img/html.05823a40.png"}});