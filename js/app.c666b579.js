(function(t){function e(e){for(var a,s,o=e[0],i=e[1],l=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},c=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8267dd84"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=s(t);var l=new Error;c=function(e){i.onerror=i.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,n[1](l)}r[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Hexschool-Final/",o.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var u=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"377e":function(t,e){document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".recommendation-wall");t.style.cursor="grab";var e={top:0,left:0,x:0,y:0},n=function(n){var a=n.clientX-e.x,r=n.clientY-e.y;t.scrollTop=e.top-r,t.scrollLeft=e.left-a},a=function e(){t.style.cursor="grab",t.style.removeProperty("user-select"),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",e)},r=function(r){t.style.cursor="grabbing",t.style.userSelect="none",e={left:t.scrollLeft,top:t.scrollTop,x:r.clientX,y:r.clientY},document.addEventListener("mousemove",n),document.addEventListener("mouseup",a)};t.addEventListener("mousedown",r)}))},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=n("bc3a"),c=n.n(r),s=n("130e"),o=n("8a14"),i=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02"));function l(t,e,n,r,c,s){var o=Object(a["z"])("Navbar"),i=Object(a["z"])("Banner"),l=Object(a["z"])("FurnitureCompare"),d=Object(a["z"])("Recommendation"),u=Object(a["z"])("Transport"),p=Object(a["z"])("ProductDisplay"),m=Object(a["z"])("ShoppingCart"),b=Object(a["z"])("OrderInfo");return Object(a["s"])(),Object(a["f"])(a["a"],null,[Object(a["i"])(o),Object(a["i"])(i),Object(a["i"])(l),Object(a["i"])(d),Object(a["i"])(u),Object(a["i"])(p),Object(a["i"])(m),Object(a["i"])(b)],64)}var d={class:"navbar navbar-expand-lg navbar-light bg-white"},u=Object(a["h"])('<div class="container-fluid"><h1><a href="#" class="logo navbar-brand">WOWOROOM</a></h1><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav ms-auto mb-2 mb-lg-0 topBar-menu"><li class="nav-item"><a class="nav-link" href="#bedAdvantage">床墊優勢</a></li><li class="nav-item"><a class="nav-link" href="#recommendation">好評推薦</a></li><li class="nav-item"><a class="nav-link" href="#transport">運送方式</a></li><li class="nav-item"><a class="nav-link" href="#orderInfo">立即預訂</a></li></ul></div></div>',1),p=[u];function m(t,e,n,r,c,s){return Object(a["s"])(),Object(a["f"])("nav",d,p)}var b={},v=n("6b0d"),g=n.n(v);const f=g()(b,[["render",m]]);var h=f,O={class:"wrap",id:"bedAdvantage"},j=Object(a["h"])('<div class="banner"><h2 class="banner-text">窩窩家居<br>跟您一起品味生活</h2></div><h3 class="section-title">床墊優勢</h3><ul class="bedAdvantage"><li><img class="bedAdvantage-img" src="https://i.imgur.com/tR426y5.png" alt="原木料環保"><p class="bedAdvantage-text">原木料環保</p></li><li><img class="bedAdvantage-img" src="https://i.imgur.com/Fd2MiBb.png" alt="好收納"><p class="bedAdvantage-text">好收納</p></li><li><img class="bedAdvantage-img" src="https://github.com/hexschool/js-training/blob/main/%E7%AC%AC%E4%B9%9D%E9%80%B1%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99%E5%9C%96%E5%BA%AB/5n1uTFh.png?raw=true" alt="好組裝"><p class="bedAdvantage-text">好組裝</p></li></ul>',3),y=[j];function B(t,e){return Object(a["s"])(),Object(a["f"])("section",O,y)}const E={},C=g()(E,[["render",B]]);var A=C,x={class:"furniture-compare"},I=Object(a["h"])('<div class="wrap"><h3 class="section-title">家具比較</h3><div class="overflowWrap"><table class="compare-table"><thead><tr><th></th><th>窩窩系統模組家具</th><th class="text-muted">組合式家具</th><th class="text-muted">實木家具</th></tr></thead><tr><td>可單人自行組裝</td><td><span class="material-icons">done</span></td><td class="text-muted">不一定</td><td></td></tr><tr><td>可多次重複拆裝</td><td><span class="material-icons">done</span></td><td></td><td></td></tr><tr><td>床墊規格彈性大</td><td><span class="material-icons">done</span></td><td class="text-muted">不一定</td><td class="text-muted">不一定</td></tr><tr><td>材質可長久使用</td><td><span class="material-icons">done</span></td><td></td><td><span class="material-icons">done</span></td></tr><tr><td>小客車即可搬運</td><td><span class="material-icons">done</span></td><td></td><td></td></tr></table></div></div>',1),w=[I];function P(t,e){return Object(a["s"])(),Object(a["f"])("section",x,w)}const L={},T=g()(L,[["render",P]]);var k=T,S=n("74ca"),W={class:"transport",id:"transport"},z=Object(a["h"])('<h3 class="section-title">運送方式</h3><ul class="transport-intro"><li class="transport-card"><div class="cardImg"><span class="material-icons"> shopping_cart </span></div><h4>STEP.1</h4><p>選購商品</p></li><li class="transport-card"><div class="cardImg"><span class="material-icons"> format_list_bulleted </span></div><h4>STEP.2</h4><p>填寫預定資料</p></li><li class="transport-card"><div class="cardImg"><span class="material-icons"> local_post_office </span></div><h4>STEP.3</h4><p>預定成功</p></li><li class="transport-card"><div class="cardImg"><span class="material-icons"> done </span></div><h4>STEP.4</h4><p>Email 付款資訊</p></li></ul>',2),_=[z];function D(t,e){return Object(a["s"])(),Object(a["f"])("section",W,_)}const N={},H=g()(N,[["render",D]]);var M=H,F=(n("a4d3"),n("e01a"),{class:"wrap productDisplay"}),G={class:"d-flex align-items-center mb-2"},q=Object(a["g"])("option",{value:"全部"},"全部",-1),K=Object(a["g"])("option",{value:"床架"},"床架",-1),R=Object(a["g"])("option",{value:"收納"},"收納",-1),$=Object(a["g"])("option",{value:"窗簾"},"窗簾",-1),J=[q,K,R,$],X={class:"productWrap"},Q=Object(a["g"])("h4",{class:"productType"},"新品",-1),U=["src","alt"],Y=["onClick"],Z={class:"originPrice"},V={class:"nowPrice"};function tt(t,e,n,r,c,s){var o=Object(a["z"])("Loading");return Object(a["s"])(),Object(a["f"])("section",F,[Object(a["g"])("div",G,[Object(a["g"])("select",{name:"",class:"productSelect mb-0 me-3",onChange:e[0]||(e[0]=function(){return s.onChange&&s.onChange.apply(s,arguments)})},J,32),Object(a["g"])("button",{type:"button",class:"btn btn-outline-dark",onClick:e[1]||(e[1]=function(){return s.getProducts&&s.getProducts.apply(s,arguments)})},"更新產品列表")]),Object(a["g"])("ul",X,[Object(a["i"])(o,{active:c.isLoading},null,8,["active"]),(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(c.products,(function(t){return Object(a["s"])(),Object(a["f"])("li",{class:"productCard",key:t.id},[Q,Object(a["g"])("img",{src:t.images,alt:t.description},null,8,U),Object(a["g"])("a",{href:"#",class:"addCardBtn",onClick:Object(a["I"])((function(e){return s.addToCart(t.id)}),["prevent"])},"加入購物車",8,Y),Object(a["g"])("h3",null,Object(a["C"])(t.title),1),Object(a["g"])("del",Z,"NT$"+Object(a["C"])(t.origin_price),1),Object(a["g"])("p",V,"NT$"+Object(a["C"])(t.price),1)])})),128))])])}n("4de4"),n("99af");var et={url:"https://livejs-api.hexschool.io/api/livejs/v1",apiKey:"ken888686"},nt="".concat(et.url,"/customer/").concat(et.apiKey,"/products"),at="".concat(et.url,"/customer/").concat(et.apiKey,"/carts");"".concat(et.url,"/customer/").concat(et.apiKey,"/orders"),"".concat(et.url,"/admin/").concat(et.apiKey,"/orders");function rt(){return c.a.get(nt)}function ct(){return c.a.get(at)}function st(t){return c.a.delete("".concat(at,"/").concat(t))}var ot={data:function(){return{isLoading:!1,allProducts:[],products:[]}},methods:{onChange:function(t){var e=t.target.value;this.products="全部"!==e?this.allProducts.filter((function(t){return t.category===e})):this.allProducts},getProducts:function(){var t=this;this.isLoading=!0,rt().then((function(e){t.products=e.data.products,t.allProducts=e.data.products,t.isLoading=!1}))},addToCart:function(t){console.log(t)}},mounted:function(){this.getProducts()}};const it=g()(ot,[["render",tt]]);var lt=it,dt={class:"shoppingCart"},ut=Object(a["g"])("h3",{class:"section-title"},"我的購物車",-1),pt={class:"overflowWrap"},mt={class:"shoppingCart-table"},bt=Object(a["g"])("tr",null,[Object(a["g"])("th",{width:"40%"},"品項"),Object(a["g"])("th",{width:"15%"},"單價"),Object(a["g"])("th",{width:"15%"},"數量"),Object(a["g"])("th",{width:"15%"},"金額"),Object(a["g"])("th",{width:"15%"})],-1),vt={class:"cardItem-title"},gt=["src","alt"],ft={class:"discardBtn"},ht=["onClick"],Ot=Object(a["g"])("td",null,[Object(a["g"])("a",{href:"#",class:"discardAllBtn"},"刪除所有品項")],-1),jt=Object(a["g"])("td",null,null,-1),yt=Object(a["g"])("td",null,null,-1),Bt=Object(a["g"])("td",null,[Object(a["g"])("p",null,"總金額")],-1);function Et(t,e,n,r,c,s){return Object(a["s"])(),Object(a["f"])("section",dt,[ut,Object(a["g"])("div",pt,[Object(a["g"])("table",mt,[bt,(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["x"])(c.cartList,(function(t){return Object(a["s"])(),Object(a["f"])("tr",{key:t.id},[Object(a["g"])("td",null,[Object(a["g"])("div",vt,[Object(a["g"])("img",{src:t.product.images,alt:t.title},null,8,gt),Object(a["g"])("p",null,Object(a["C"])(t.product.title),1)])]),Object(a["g"])("td",null,"NT$"+Object(a["C"])(t.product.price),1),Object(a["g"])("td",null,Object(a["C"])(t.quantity),1),Object(a["g"])("td",null,"NT$"+Object(a["C"])(t.product.price*t.quantity),1),Object(a["g"])("td",ft,[Object(a["g"])("a",{href:"#",class:"material-icons",onClick:Object(a["I"])((function(e){return s.deleteItem(t.id)}),["prevent"])}," clear ",8,ht)])])})),128)),Object(a["g"])("tr",null,[Ot,jt,yt,Bt,Object(a["g"])("td",null,"NT$"+Object(a["C"])(c.sum),1)])])])])}var Ct={data:function(){return{cartList:[],sum:0}},methods:{refreshCart:function(t){this.cartList=t,this.sum=this.cartList.reduce((function(t,e){return t+e.product.price*e.quantity}),0)},getCartList:function(){var t=this;ct().then((function(e){t.refreshCart(e.data.carts)}))},deleteItem:function(t){var e=this;st(t).then((function(t){e.refreshCart(t.data.carts)}))}},mounted:function(){this.getCartList()}};const At=g()(Ct,[["render",Et]]);var xt=At,It={class:"orderInfo wrap",id:"orderInfo"},wt=Object(a["h"])('<h3 class="section-title">填寫預訂資料</h3><form action="" class="orderInfo-form"><div class="orderInfo-formGroup"><label for="customerName" class="orderInfo-label">姓名</label><div class="orderInfo-inputWrap"><input type="text" class="orderInfo-input" id="customerName" placeholder="請輸入姓名" name="姓名"><p class="orderInfo-message" data-message="姓名">必填</p></div></div><div class="orderInfo-formGroup"><label for="customerPhone" class="orderInfo-label">電話</label><div class="orderInfo-inputWrap"><input type="tel" class="orderInfo-input" id="customerPhone" placeholder="請輸入電話" name="電話"><p class="orderInfo-message" data-message="電話">必填</p></div></div><div class="orderInfo-formGroup"><label for="customerEmail" class="orderInfo-label">Email</label><div class="orderInfo-inputWrap"><input type="email" class="orderInfo-input" id="customerEmail" placeholder="請輸入 Email" name="Email"><p class="orderInfo-message" data-message="Email">必填</p></div></div><div class="orderInfo-formGroup"><label for="customerAddress" class="orderInfo-label">寄送地址</label><div class="orderInfo-inputWrap"><input type="text" class="orderInfo-input" id="customerAddress" placeholder="請輸入寄送地址" name="寄送地址"><p class="orderInfo-message" data-message="寄送地址">必填</p></div></div><div class="orderInfo-formGroup"><label for="tradeWay" class="orderInfo-label">交易方式</label><div class="orderInfo-inputWrap"><select id="tradeWay" class="orderInfo-input" name="交易方式"><option value="ATM" selected>ATM</option><option value="信用卡">信用卡</option><option value="超商付款">超商付款</option></select></div></div><input type="submit" value="送出預訂資料" class="orderInfo-btn"></form>',2),Pt=[wt];function Lt(t,e){return Object(a["s"])(),Object(a["f"])("section",It,Pt)}const Tt={},kt=g()(Tt,[["render",Lt]]);var St=kt,Wt={name:"Home",components:{Navbar:h,Banner:A,FurnitureCompare:k,Recommendation:S["default"],Transport:M,ProductDisplay:lt,ShoppingCart:xt,OrderInfo:St}};const zt=g()(Wt,[["render",l]]);var _t=zt,Dt=[{path:"/",name:"Home",component:_t},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Nt=Object(i["a"])({history:Object(i["b"])("/Hexschool-Final/"),routes:Dt}),Ht=Nt;function Mt(t,e){var n=Object(a["z"])("router-view");return Object(a["s"])(),Object(a["e"])(n)}const Ft={},Gt=g()(Ft,[["render",Mt]]);var qt=Gt;n("7b17"),n("21b6"),n("6c4a"),n("fe26");Object(a["d"])(qt).use(s["a"],c.a).use(Ht).component("Loading",o["a"]).mount("#app")},"6c4a":function(t,e,n){},"74ca":function(t,e,n){"use strict";var a=n("9fba"),r=n("dc07"),c=n("6b0d"),s=n.n(c);const o=s()(r["default"],[["render",a["a"]]]);e["default"]=o},"9fba":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("7a23"),r={class:"recommendation",id:"recommendation"},c=Object(a["h"])('<div class="wrap"><h3 class="section-title">好評推薦</h3><div class="recommendation-wall"><ul class="gallery-top"><li class="recommendation-card"><img src="https://i.imgur.com/cXcOLhu.png" alt=""><div class="recommend-content"><div class="recommend-img"><img src="https://i.imgur.com/I9L7WOr.png" alt=""><div><p>王六角</p><p class="recommend-text">Jodan 雙人床架</p></div></div><p>CP值很高。</p></div></li><li class="recommendation-card"><img src="https://i.imgur.com/BefHmH2.png" alt=""><div class="recommend-content"><div class="recommend-img"><img src="https://i.imgur.com/CUFGfay.png" alt=""><div><p>Leaf</p><p class="recommend-text">Antony 雙人床架</p></div></div><p>很喜歡～還有送三年保固～</p></div></li><li class="recommendation-card"><img src="https://github.com/hexschool/js-training/blob/main/%E7%AC%AC%E4%B9%9D%E9%80%B1%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99%E5%9C%96%E5%BA%AB/3IATkJG.png?raw=true" alt=""><div class="recommend-content"><div class="recommend-img"><img src="https://i.imgur.com/8WwZsLS.png" alt=""><div><p>美濃鄧子琪</p><p class="recommend-text">Charles 系列儲物組合</p></div></div><p>廚房必備美用品！</p></div></li><li class="recommendation-card"><img src="https://i.imgur.com/HvT3zlU.png" alt=""><div class="recommend-content"><div class="recommend-img"><img src="https://i.imgur.com/NycuPVy.png" alt=""><div><p>isRaynotArray</p><p class="recommend-text">Antony 雙人床架</p></div></div><p>物超所值!</p></div></li><li class="recommendation-card"><img src="https://i.imgur.com/Ed7bxLr.png" alt=""><div class="recommend-content"><div class="recommend-img"><img src="https://i.imgur.com/zdFOQIv.png" alt=""><div><p>程鮭魚</p><p class="recommend-text">Louvre 雙人床架</p></div></div><p>租屋用剛剛好</p></div></li></ul><ul class="gallery-bottom"><li class="recommendation-card"><img src="https://i.imgur.com/BefHmH2.png" alt=""><div class="recommend-content"><div class="recommend-img"><img src="https://i.imgur.com/W7fyzp2.png" alt=""><div><p>小杰</p><p class="recommend-text">Louvre 雙人床架</p></div></div><p>非常舒適，有需要會再回購</p></div></li><li class="recommendation-card"><img src="https://i.imgur.com/mjA01Tk.png" alt=""><div class="recommend-content"><div class="recommend-img"><img src="https://github.com/hexschool/js-training/blob/main/%E7%AC%AC%E4%B9%9D%E9%80%B1%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99%E5%9C%96%E5%BA%AB/8O1cOnG.png?raw=true" alt=""><div><p>江八角</p><p class="recommend-text">Charles 雙人床架</p></div></div><p>品質不錯～</p></div></li><li class="recommendation-card"><img src="https://i.imgur.com/npA3DgP.png" alt=""><div class="recommend-content"><div class="recommend-img"><img src="https://i.imgur.com/C0NDvSA.png" alt=""><div><p>juni讚神</p><p class="recommend-text">Antony 床邊桌</p></div></div><p>讚ㄉ！</p></div></li><li class="recommendation-card"><img src="https://i.imgur.com/Ed7bxLr.png" alt=""><div class="recommend-content"><div class="recommend-img"><img src="https://i.imgur.com/hUsTZDm.png" alt=""><div><p>久安說安安</p><p class="recommend-text">Antony 單人床架</p></div></div><p>一個躺剛剛好。</p></div></li><li class="recommendation-card"><img src="https://i.imgur.com/mjA01Tk.png" alt=""><div class="recommend-content"><div class="recommend-img"><img src="https://github.com/hexschool/js-training/blob/main/%E7%AC%AC%E4%B9%9D%E9%80%B1%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99%E5%9C%96%E5%BA%AB/3ako6QX.png?raw=true" alt=""><div><p>PeiQun</p><p class="recommend-text">Antony 雙人床架</p></div></div><p>睡起來很舒適</p></div></li></ul></div></div>',1),s=[c];function o(t,e,n,c,o,i){return Object(a["s"])(),Object(a["f"])("section",r,s)}},dc07:function(t,e,n){"use strict";var a=n("377e"),r=n.n(a);n.d(e,"default",(function(){return r.a}))}});
//# sourceMappingURL=app.c666b579.js.map