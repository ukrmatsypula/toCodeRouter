(function(t){function e(e){for(var i,r,a=e[0],c=e[1],u=e[2],l=0,d=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/toCodeRouter/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00a5":function(t,e,n){"use strict";n("df0f")},"0f01":function(t,e,n){t.exports=n.p+"img/7.495b1fa0.png"},"1f66":function(t,e,n){t.exports=n.p+"img/3.b67f085a.png"},"338d":function(t,e,n){t.exports=n.p+"img/6.272a3e75.png"},3967:function(t,e,n){t.exports=n.p+"img/12.ed605a23.png"},"4cb9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("div",{staticClass:"navbar"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-content"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("VUE-CLI")]),n("ul",{staticClass:"navbar-list"},t._l(t.links,(function(e,i){return n("li",{key:i,staticClass:"navbar-item"},[n("router-link",{staticClass:"navbar-link",attrs:{to:e.url}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)],1)])])]),n("router-view"),n("footer",[t._v("footer")])],1)},o=[],r={name:"App",components:{},data:function(){return{links:[{title:"Home",url:"/"},{title:"Shop",url:"/shop"}]}}},a=r,c=(n("5c0b"),n("2877")),u=Object(c["a"])(a,s,o,!1,null,null,null),p=u.exports,l=(n("c1c3"),n("8c4f")),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("section",[n("div",{staticClass:"container"},[n("h1",[t._v("Home page")])])])])}],f={name:"Home"},g=f,h=Object(c["a"])(g,d,m,!1,null,null,null),v=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("section",[n("div",{staticClass:"container"},[n("h1",[t._v("Shop page")]),n("div",{staticClass:"item-wrapper"},t._l(t.shopList,(function(t){return n("ShopItemList",{key:t.id,attrs:{product:t}})})),1)])])])},y=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:t.product.img,alt:t.product.title}}),n("router-link",{staticClass:"link",attrs:{to:"/shop/"+t.product.id,tag:"p"}},[t._v(" "+t._s(t.product.title)+" ")])],1)},w=[],_={name:"ShopItemList",props:{product:{type:Object,required:!0}},created:function(){console.log(this.product)}},x=_,L=Object(c["a"])(x,k,w,!1,null,null,null),C=L.exports,I={name:"Shop",components:{ShopItemList:C},data:function(){return{shopList:null}},created:function(){this.shopList=this.$store.getters.getShopList}},O=I,S=(n("00a5"),Object(c["a"])(O,b,y,!1,null,null,null)),j=S.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"product__wrapper"},[n("div",{staticClass:"product-slider"},[n("Carousel",{attrs:{perPage:1,paginationEnable:"true",paginationColor:"#b3b3b3",paginationActiveColor:"#494ce8"}},t._l(t.product.gallery,(function(e,i){return n("slide",{key:i},[n("img",{attrs:{src:e.img,alt:e.name}}),t._v(" "+t._s(e.name)+" ")])})),1)],1),n("div",{staticClass:"product-content"},[n("h1",{staticClass:"product-title"},[t._v(t._s(t.product.title))]),n("p",[t._v(t._s(t.product.description))])])])])])])},P=[],$=(n("a9e3"),n("0a63")),E={name:"ProductDatail",components:{Carousel:$["Carousel"],Slide:$["Slide"]},data:function(){return{product:null}},created:function(){var t=Number(this.$route.params.id);this.product=this.$store.getters.getProduct(t)}},M=E,A=(n("6920"),Object(c["a"])(M,N,P,!1,null,null,null)),H=A.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"not-found"},[n("h1",{staticClass:"title"},[t._v("Page not found")]),n("p",[t._v("Go to "),n("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("main page?")])],1)])])])])},D=[],G={name:"404"},J=G,R=(n("b5e8"),Object(c["a"])(J,T,D,!1,null,null,null)),q=R.exports;i["a"].use(l["a"]);var F=new l["a"]({mode:"history",routes:[{path:"/",name:"home",component:v},{path:"/shop",name:"shop",component:j},{path:"/shop/:id",name:"product",component:H},{path:"*",name:"notFound",component:q}]}),U=n("2f62"),V=(n("7db0"),n("d3b7"),{state:{shopList:[{id:1,title:"Nike Red",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:n("775a"),gallery:[{name:"Nike boots first",img:n("775a")},{name:"Nike boots second",img:n("8e30")},{name:"Nike boots third",img:n("1f66")}]},{id:2,title:"Nike Default",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:n("5fa5"),gallery:[{name:"Nike boots first",img:n("5fa5")},{name:"Nike boots second",img:n("c037")},{name:"Nike boots third",img:n("338d")}]},{id:3,title:"Nike Green",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:n("0f01"),gallery:[{name:"Nike boots first",img:n("0f01")},{name:"Nike boots second",img:n("eadf")},{name:"Nike boots third",img:n("6846")}]},{id:4,title:"Nike Street",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",img:n("e509"),gallery:[{name:"Nike boots second",img:n("e509")},{name:"Nike boots third",img:n("3967")}]}]},getters:{getShopList:function(t){return t.shopList},getProduct:function(t){return function(e){return t.shopList.find((function(t){return t.id===e}))}}},mutations:{},actions:{}});i["a"].use(U["a"]);var z=new U["a"].Store({modules:{shop:V}});i["a"].config.productionTip=!1,new i["a"]({router:F,store:z,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5fa5":function(t,e,n){t.exports=n.p+"img/4.29f29cb4.png"},6846:function(t,e,n){t.exports=n.p+"img/9.21343c8f.png"},6920:function(t,e,n){"use strict";n("a05c")},"775a":function(t,e,n){t.exports=n.p+"img/1.05c06ec6.png"},"8e30":function(t,e,n){t.exports=n.p+"img/2.ca30c023.png"},"9c0c":function(t,e,n){},a05c:function(t,e,n){},b5e8:function(t,e,n){"use strict";n("4cb9")},c037:function(t,e,n){t.exports=n.p+"img/5.0e05845d.png"},c1c3:function(t,e,n){},df0f:function(t,e,n){},e509:function(t,e,n){t.exports=n.p+"img/11.2fbd8cdd.png"},eadf:function(t,e,n){t.exports=n.p+"img/8.c5bfd1a1.png"}});
//# sourceMappingURL=app.83953417.js.map