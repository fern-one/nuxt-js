(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{206:function(t){t.exports=JSON.parse('[{"id":1,"name":"iPhone SE","detail":"Lorem ipsum dolor sit amet","price":"14900","hero":"OMG This just came out today!","image":"https://i.blogs.es/55d8e9/iphone/840_560.jpg"},{"id":2,"name":"iPhone Xr","detail":"Lorem ipsum dolor sit amet","price":"18400","info":"This is the latest and greatest product from Derp corp.","image":"https://www.beartai.com/wp-content/uploads/2019/05/iphone-xr.jpg"},{"id":3,"name":"iPhone 11","detail":"Lorem ipsum dolor sit amet","price":"22100","offer":"BOGOF","image":"https://assets.brandinside.asia/uploads/2019/09/iphone-11-cov5.jpg"},{"id":4,"name":"iPhone 12","detail":"Lorem ipsum dolor sit amet","price":"29900","image":"https://www.macthai.com/wp-content/uploads/2019/07/iphone-11-pro-640x399.png"},{"id":5,"name":"iPhone 12 Pro","detail":"Lorem ipsum dolor sit amet","price":"36900","offer":"No srsly GTFO","image":"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone12pro-back-camera_10132020_big.jpg.large.jpg"},{"id":6,"name":"iPhone 12 Pro Max","detail":"Lorem ipsum dolor sit amet","price":"39900","image":"https://static.thairath.co.th/media/dFQROr7oWzulq5FZUH5xQf2GhwrHf4B8E3RlKFkUlmP695oYvJfOLJmGOwMoqSeQy30.jpg"}]')},211:function(t,e,r){"use strict";r.r(e);var o=r(6),n=(r(35),r(31),r(206)),c=r(207),l=r.n(c),d={data:function(){return{products:n,chooseProducts:[],cart:!1}},methods:{addProduct:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.checkProduct(t)?e.chooseProducts.push(t):alert("This product has been selected.");case 1:case"end":return r.stop()}}),r)})))()},checkProduct:function(t){return!(l.a.filter(this.chooseProducts,{id:t.id}).length>0)}},created:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},m=r(15),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"bg-white py-8 bg-gray-100"},[r("div",{staticClass:"container mx-auto flex items-center flex-wrap pt-4 pb-12"},[r("nav",{staticClass:"w-full z-30 top-0 px-6 py-1",attrs:{id:"store"}},[r("div",{staticClass:"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"},[r("a",{staticClass:"uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl",attrs:{href:"#"}},[t._v("\n                        Store\n                    ")]),t._v(" "),r("div",{staticClass:"flex items-center",attrs:{id:"store-nav-content"}},[r("button",{staticClass:"pl-3  flex font-bold text-gray-800 text-xl",attrs:{href:"#"},on:{click:function(e){t.cart=!t.cart}}},[t._v("PAY")]),t._v(" "),r("div",{staticClass:"fixed bottom-6 shadow-xl flex bg-gray-400 rounded-full p-4 "},[r("img",{staticClass:"w-6 h-6",attrs:{src:"https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png",alt:""}}),t._v(" "+t._s(t.chooseProducts.length)+" ")])])])]),t._v(" "),t.cart?r("div",{staticClass:"w-full"},[r("Price",{attrs:{products:t.chooseProducts}})],1):t._l(t.products,(function(e,i){return r("div",{key:i,staticClass:"w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"},[r("a",{attrs:{href:"#"}},[r("img",{staticClass:"hover:grow hover:shadow-lg h-48",attrs:{src:e.image}}),t._v(" "),r("div",{staticClass:"pt-3 flex items-center justify-between"},[r("div",[r("p",{staticClass:"text-xl font-bold"},[t._v(t._s(e.name))])])]),t._v(" "),r("p",{staticClass:"text-yellow-600 font-bold"},[t._v("฿ "+t._s(e.price)+" ")]),t._v(" "),r("form",{ref:"product_"+e.id,refInFor:!0,staticClass:"flex  ",on:{submit:function(r){return r.preventDefault(),t.addProduct(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"product.count"}],staticClass:"w-2/3 border-2 border-blue-200",attrs:{required:"",value:"1",type:"text",placeholder:"number"},domProps:{value:e.count},on:{input:function(r){r.target.composing||t.$set(e,"count",r.target.value)}}}),t._v(" "),r("button",{staticClass:"w-1/3 rounded-xl bg-black text-white",attrs:{type:"submit"}},[t._v(" Add ")])])])])}))],2)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Price:r(109).default})}}]);