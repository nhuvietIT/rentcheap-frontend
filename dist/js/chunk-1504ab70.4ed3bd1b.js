(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1504ab70"],{"488d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoading?n("div",{staticClass:"js-preloader",attrs:{id:"js-preloader"}},[t._m(0)]):t._e(),n("header",{staticClass:"header-area header-sticky wow slideInDown",attrs:{"data-wow-duration":"0.75s","data-wow-delay":"0s",id:"navbar"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row",staticStyle:{width:"100%"}},[n("div",{staticClass:"col-12"},[n("nav",{staticClass:"main-nav"},[n("a",{staticClass:"logo",on:{click:function(e){return t.$router.push("/")}}},[n("img",{attrs:{src:a("1c0c"),alt:"Chain App Dev",width:"60",height:"80"}})]),n("ul",{staticClass:"nav",attrs:{id:"myLinks"}},[n("li",{staticClass:"scroll-to-section active",on:{click:t.myMenu}},[n("a",{on:{click:function(e){return t.$router.push("/")}}},[t._v("Trang chủ")])]),n("li",{staticClass:"scroll-to-section",on:{click:t.myMenu}},[n("a",{on:{click:function(e){t.$router.push("/sale").catch((function(){}))}}},[t._v("Quản lý Sale")])]),n("li",{staticClass:"scroll-to-section gradient-button"},[n("a",{attrs:{id:"modal_trigger"},on:{click:t.signOut}},[n("i",{staticClass:"fa fa-sign-in-alt"}),t._v(" Đăng Xuất")])])]),n("a",{class:t.checkMenu?"menu-trigger":"menu-trigger active",on:{click:t.myMenu}},[n("span",[t._v("Menu")])])])])])])]),n("footer",{attrs:{id:"newsletter"}},[n("div",{staticClass:"container"},[t._m(1),n("div",{staticClass:"row",staticStyle:{"justify-content":"center"}},[t._m(2),n("div",{staticClass:"col-lg-3"},[n("div",{staticClass:"footer-widget"},[n("h4",[t._v("Về chúng tôi")]),n("ul",[n("li",[n("a",{on:{click:function(e){return t.$router.push("/")}}},[t._v("Trang Chủ")])]),n("li",[n("a",{on:{click:function(e){return t.$router.push("/")}}},[t._v("Đăng ký")])]),n("li",[n("a",{on:{click:function(e){return t.$router.push("/")}}},[t._v("Rent & Sale")])])])])]),t._m(3),t._m(4)])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"preloader-inner"},[a("span",{staticClass:"dot"}),a("div",{staticClass:"dots"},[a("span"),a("span"),a("span")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 offset-lg-2"},[a("div",{staticClass:"section-heading"},[a("h4",{staticStyle:{"text-transform":"none"}},[t._v(" Tham gia cùng của chúng tôi để nhận tin tức & ưa đãi mới nhất ")])])]),a("div",{staticClass:"col-lg-6 offset-lg-3"},[a("form",{attrs:{id:"search",action:"#",method:"GET"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 col-sm-6"},[a("fieldset",[a("input",{staticClass:"email",attrs:{type:"address",name:"address",placeholder:"Email Address...",autocomplete:"on",required:""}})])]),a("div",{staticClass:"col-lg-6 col-sm-6"},[a("fieldset",[a("button",{staticClass:"main-button",attrs:{type:"submit"}},[t._v(" Theo dõi ngay "),a("i",{staticClass:"fa fa-angle-right"})])])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"footer-widget"},[a("h4",[t._v("Liên hệ chúng tôi")]),a("p",[t._v("Điện Bàn - Hội An - Quảng Nam")]),a("p",[a("a",[t._v("0899-885-880")])]),a("p",[a("a",[t._v("nhuvietmmo@gmail.com")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-3"},[a("div",{staticClass:"footer-widget"},[a("h4",[t._v("Rent Cheap")]),a("div",{staticClass:"logo"}),a("p",[t._v(" Rent Cheap là dịch dụ thuê xe giữa người cho thuê và người cần thuê. Đồng thời là dịch dụ giới thiệu khách hàng cần thuê xe và được chiếc khấu hoa hồng khi giới thiệu thành công. ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"copyright-text"},[a("p",[t._v(" Copyright © 2022 Rent-Cheap App "),a("br"),t._v("Design: "),a("a",{attrs:{href:"https://www.facebook.com/nhuvietit",target:"_blank"}},[t._v("Nguyễn Như Việt")])])])])}],s=(a("0d84"),a("2d21"),a("0bf8"),a("af34"),a("60ce")),c={name:"information-sale",components:{},data:function(){return{dialog:!1,isLoading:!0,checkMenu:!0,steps:[{target:".v-step-0",header:{title:"Get Started"},content:"Register to do Rent",params:{enableScrolling:!1}},{target:".v-step-1",content:"Register to do Sale",params:{enableScrolling:!1}},{target:".v-step-3",content:"Sigin user",params:{placement:"top",enableScrolling:!1,highlight:!0}},{target:".v-step-4",content:"Search for a rental location",params:{enableScrolling:!0}}]}},provide:function(){return{closeDialog:this.closeDialog}},methods:{myMenu:function(){var t=document.getElementById("myLinks");"block"===t.style.display?(t.style.display="none",this.checkMenu=!0):(t.style.display="block",this.checkMenu=!1)},openDialog:function(){this.dialog=!0,this.myMenu()},closeDialog:function(){this.dialog=!1},signOut:function(){s["a"].clearToken(),s["a"].clearCurrentUser(),this.$router.push("/").catch((function(){}))}},created:function(){},mounted:function(){var t=this;setTimeout((function(){t.isLoading=!1}),2e3),document.getElementById("navbar").style.border="none";var e=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;e>50?(document.getElementById("navbar").style.backgroundColor="white",document.getElementById("navbar").style.borderBottom="1px solid #E6E6E6"):(document.getElementById("navbar").style.backgroundColor="",document.getElementById("navbar").style.border="none"),e=t}}},o=c,l=(a("9d9f"),a("2877")),r=Object(l["a"])(o,n,i,!1,null,"e2f86796",null);e["default"]=r.exports},"9d9f":function(t,e,a){"use strict";a("e592")},e592:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1504ab70.4ed3bd1b.js.map