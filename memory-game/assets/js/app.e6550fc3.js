(function(e){function t(t){for(var n,i,c=t[0],o=t[1],l=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/memory-game/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"098f":function(e,t,a){e.exports=a.p+"assets/img/pubg.1f6aba1d.jpg"},"0ff0":function(e,t,a){e.exports=a.p+"assets/img/css.06694957.png"},"1d7a":function(e,t,a){},"27be":function(e,t,a){e.exports=a.p+"assets/img/psGame.b4579ee0.png"},"2c4a":function(e,t,a){},4004:function(e,t,a){"use strict";var n=a("df2f"),s=a.n(n);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap",attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),a("router-link",{attrs:{to:"/game"}},[e._v("Game")])],1),a("router-view")],1)},r=[],i={name:"App"},c=i,o=(a("5c0b"),a("2877")),l=Object(o["a"])(c,s,r,!1,null,null,null),u=l.exports,f=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("h1",[e._v("我是首頁")]),a("button",{staticClass:"btn btn-primary btn-ms",on:{click:e.handleOnClick}},[e._v("點擊")]),a("div",{staticClass:"msg"},[e._v(e._s(e.message))])])},d=[],m={name:"Home",data:function(){return{message:"get Data!"}},methods:{handleOnClick:function(){this.message="get Data Now!!",console.log(this.message)}},beforeCreate:function(){console.log("beforeCreate data資料： "+this.$data.message)},created:function(){console.log("created data資料： "+this.$data.message)},beforeMount:function(){console.log("beforeMount data資料： "+this.$data.message)},mounted:function(){console.log("mounted data資料： "+this.$data.message)}},h=m,v=(a("98b0"),Object(o["a"])(h,p,d,!1,null,"958674da",null)),b=v.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("Header",{attrs:{scoreA:e.scoreA,scoreB:e.scoreB,resetGame:e.resetGame}}),a("Card",{attrs:{cards:e.cards},on:{flipCard:e.flipCard}}),a("transition",{attrs:{name:"fade"}},[e.show?a("Lightbox",{attrs:{user:e.user,closeBox:e.closeBox}}):e._e()],1)],1)},C=[],_=(a("99af"),a("4de4"),a("d81d"),a("b0c0"),a("2ef0")),x=a.n(_),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"btnWrap"},[a("button",{staticClass:"btn",on:{click:function(t){return e.resetGame()}}},[e._v("重新開始")])]),a("div",{staticClass:"info"},[a("div",{staticClass:"label"},[a("span",{staticClass:"title"},[e._v("A組：")]),a("span",{staticClass:"value"},[e._v(e._s(e.scoreA))])]),a("div",{staticClass:"label"},[a("span",{staticClass:"title"},[e._v("B組：")]),a("span",{staticClass:"value"},[e._v(e._s(e.scoreB))])])])])},y=[],k={name:"Header",props:["scoreA","scoreB","resetGame"]},B=k,O=(a("cf3f"),Object(o["a"])(B,w,y,!1,null,"67c2690f",null)),A=O.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cards"},[a("transition-group",{attrs:{name:"flippe",tag:"div"}},e._l(e.cards,(function(t,n){return a("div",{key:n,staticClass:"card",class:{flipped:t.flipped,found:t.found},on:{click:function(a){return e.$emit("flipCard",t)}}},[a("div",{staticClass:"back"}),a("div",{staticClass:"front",style:{backgroundImage:"url("+t.image+")"}})])})),0)],1)},j=[],G={name:"Card",props:["cards","flipCard"]},F=G,$=(a("aef1"),Object(o["a"])(F,T,j,!1,null,"519ea060",null)),M=$.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("div",{staticClass:"overlay"}),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[e._v("你猜錯了，換 "+e._s(e.user)+" 猜。")]),a("button",{on:{click:function(t){return e.closeBox()}}},[e._v("關閉")])])])},E=[],H={name:"Lightbox",props:["user","closeBox"]},S=H,D=(a("4004"),Object(o["a"])(S,P,E,!1,null,"0d003ccc",null)),L=D.exports,J=a("691c"),I=a.n(J),N=a("0ff0"),W=a.n(N),q=a("e319"),z=a.n(q),K=a("622f"),Q=a.n(K),R=a("27be"),U=a.n(R),V=a("098f"),X=a.n(V),Y={name:"Game",components:{Header:A,Lightbox:L,Card:M},data:function(){return{show:!1,cards:[],flipBackTimer:null,scoreA:0,scoreB:0,user:"A",CardTypes:[{name:"vue",image:I.a},{name:"css",image:W.a},{name:"html",image:z.a},{name:"switchGame",image:Q.a},{name:"psGame",image:U.a},{name:"pubg",image:X.a}]}},methods:{shuffleCards:function(){var e=[].concat(x.a.cloneDeep(this.CardTypes),x.a.cloneDeep(this.CardTypes));return x.a.shuffle(e)},resetGame:function(){this.show=!1;var e=this.shuffleCards();this.scoreA=0,this.scoreB=0,this.user="A",x.a.each(e,(function(e){e.flipped=!1,e.found=!1})),this.cards=e},flippedCards:function(){return x.a.filter(this.cards,(function(e){return e.flipped}))},sameFlippedCard:function(){var e=this.flippedCards();if(2==e.length&&e[0].name==e[1].name){switch(this.user){case"A":return this.scoreA=this.scoreA+1;case"B":return this.scoreB=this.scoreB+1;default:break}return!0}},setCardFounds:function(){x.a.each(this.cards,(function(e){e.flipped&&(e.found=!0)}))},checkAllFound:function(){var e=x.a.filter(this.cards,(function(e){return e.found}));if(e.length==this.cards.length)return!0},closeBox:function(){this.show=!1},flipCard:function(e){var t=this;if(!e.found&&!e.flipped){var a=this.flippedCards().length;0==a?e.flipped=!e.flipped:1==a&&(e.flipped=!e.flipped,this.sameFlippedCard()?this.flipBackTimer=setTimeout((function(){t.clearFlipBackTimer(),t.setCardFounds(),t.clearFlips(),t.checkAllFound()&&t.finishGame()}),200):this.flipBackTimer=setTimeout((function(){t.user="A"===t.user?"B":"A",t.show=!0,t.clearFlipBackTimer(),t.clearFlips()}),1e3))}},clearFlips:function(){x.a.map(this.cards,(function(e){return e.flipped=!1}))},clearFlipBackTimer:function(){clearTimeout(this.flipBackTimer),this.flipBackTimer=null}},beforeMount:function(){this.resetGame()}},Z=Y,ee=(a("eb0b"),Object(o["a"])(Z,g,C,!1,null,"7d87b173",null)),te=ee.exports;n["a"].use(f["a"]);var ae=[{path:"/",name:"Home",component:b},{path:"/game",name:"Game",component:te}],ne=new f["a"]({mode:"history",routes:ae}),se=ne;n["a"].config.productionTip=!1,new n["a"]({router:se,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"622f":function(e,t,a){e.exports=a.p+"assets/img/switchGame.585def46.png"},"68ea":function(e,t,a){},"691c":function(e,t,a){e.exports=a.p+"assets/img/vue.cf91a267.png"},"98b0":function(e,t,a){"use strict";var n=a("1d7a"),s=a.n(n);s.a},"9c0c":function(e,t,a){},aef1:function(e,t,a){"use strict";var n=a("c724"),s=a.n(n);s.a},c724:function(e,t,a){},cf3f:function(e,t,a){"use strict";var n=a("2c4a"),s=a.n(n);s.a},df2f:function(e,t,a){},e319:function(e,t,a){e.exports=a.p+"assets/img/html.05823a40.png"},eb0b:function(e,t,a){"use strict";var n=a("68ea"),s=a.n(n);s.a}});