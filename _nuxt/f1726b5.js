(window.webpackJsonp=window.webpackJsonp||[]).push([[45,18,21,23,28],{511:function(t,e,r){t.exports={}},512:function(t,e,r){t.exports={}},513:function(t,e,r){"use strict";r.r(e);var n=r(129),o=r(205),c=r(650),l=(r(28),r(217),r(6)),d=(r(38),r(39),{name:"Prompt",data:function(){return{search:"",baseUrlLoaded:!1}},computed:{baseURL:function(){return this.$config.axios.baseURL},promptText:function(){return this.$store.state.chat.search},promptResponse:function(){return this.$store.state.chat.promptResponse}},methods:{sendPrompt:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.search.length<4)){e.next=6;break}t.$store.dispatch("snackbar/updateInfoStatus",!0,{root:!0}),t.$store.dispatch("snackbar/updateInfoType","error",{root:!0}),t.$store.dispatch("snackbar/updateInfoText","Please try to search with minimum 4 characters.",{root:!0}),e.next=59;break;case 6:e.t0=t.$route.name,e.next="index"===e.t0?9:"Chat"===e.t0?13:"Scenario"===e.t0?17:"Image"===e.t0?21:"Realistic-Image"===e.t0?25:"Portrait"===e.t0?29:"Video"===e.t0?33:"Image-Video"===e.t0?37:"GIF"===e.t0?41:"Music"===e.t0?45:"Dog"===e.t0?49:"Cat"===e.t0?53:58;break;case 9:return e.next=11,t.$store.dispatch("chat/sendPrompt",t.search);case 11:return console.log("Home page"),e.abrupt("break",58);case 13:return e.next=15,t.$store.dispatch("chat/sendPrompt",t.search);case 15:return console.log("chat page"),e.abrupt("break",58);case 17:return e.next=19,t.$store.dispatch("scenario/sendPrompt",t.search);case 19:return console.log("scenario page"),e.abrupt("break",58);case 21:return e.next=23,t.$store.dispatch("image/sendPrompt",t.search);case 23:return console.log("image page"),e.abrupt("break",58);case 25:return e.next=27,t.$store.dispatch("realisticimage/sendPrompt",t.search);case 27:return console.log("realisticimage page"),e.abrupt("break",58);case 29:return e.next=31,t.$store.dispatch("portrait/sendPrompt",t.search);case 31:return console.log("portrait page"),e.abrupt("break",58);case 33:return e.next=35,t.$store.dispatch("video/sendPrompt",t.search);case 35:return console.log("video page"),e.abrupt("break",58);case 37:return e.next=39,t.$store.dispatch("imagevideo/sendPrompt",t.search);case 39:return console.log("image video page"),e.abrupt("break",58);case 41:return e.next=43,t.$store.dispatch("gif/sendPrompt",t.search);case 43:return console.log("GIF page"),e.abrupt("break",58);case 45:return e.next=47,t.$store.dispatch("audio/sendPrompt",t.search);case 47:return console.log("Music page"),e.abrupt("break",58);case 49:return e.next=51,t.$store.dispatch("dog/sendPrompt",t.search);case 51:return console.log("Dog page"),e.abrupt("break",58);case 53:return e.next=55,t.$store.dispatch("cat/sendPrompt",t.search);case 55:return console.log("Cat page"),e.abrupt("break",58);case 58:t.search="";case 59:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.$config.baseUrl?this.baseUrlLoaded=!0:this.$nextTick((function(){t.baseUrlLoaded=!0}))}}),m=(r(518),r(23)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"prompt"},[e("div",{staticClass:"prompt__search"},[e(c.a,{staticClass:"search__input",attrs:{solo:"","clear-icon":"mdi-close-circle",clearable:"",label:"Prompt...",type:"text",dense:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),e("div",{staticClass:"search__button"},[e(n.a,{staticClass:"mx-2",attrs:{float:"",fab:"",outlined:"",color:"primary",small:""},on:{click:t.sendPrompt}},[e(o.a,{attrs:{dark:""}},[t._v("mdi-arrow-right")])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports},516:function(t,e,r){"use strict";r(511)},517:function(t,e,r){"use strict";r.r(e);var n=r(509),o={name:"PageInfo",props:{text:{type:String,required:!0}},data:function(){return{testData:null}}},c=(r(516),r(23)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page__info"},[e(n.a,{staticClass:"page__alert",attrs:{dense:"",icon:"mdi-information-outline",text:"",color:"primary",outlined:""}},[t._v("\n    "+t._s(t.text)+"\n  ")])],1)}),[],!1,null,"0e6050fe",null);e.default=component.exports},518:function(t,e,r){"use strict";r(512)},524:function(t,e,r){t.exports={}},526:function(t,e,r){t.exports={}},535:function(t,e,r){"use strict";r(524)},540:function(t,e,r){"use strict";r(526)},553:function(t,e,r){"use strict";r.r(e);var n=r(129),o=r(210),c=r(75),l=r(497),d=r(205),m=r(6),h=(r(38),{name:"ImageCard",props:{url:{type:String,required:!0},prompt:{type:String,required:!0},promptDate:{type:String,required:!0},render:{type:String,required:!0}},data:function(){return{}},mounted:function(){},methods:{openModal:function(t,e){this.$store.dispatch("modal/updatePath",t),this.$store.dispatch("modal/updateText",e),this.$store.dispatch("modal/updateStatus",!0)},regenerate:function(t){this.sendPrompt(t)},toVideo:function(t){var e=encodeURIComponent(t);this.$router.push({path:"/image-video",query:{action:e}})},sendPrompt:function(t){var e=this;return Object(m.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("image/sendPrompt",t);case 2:case"end":return r.stop()}}),r)})))()}},computed:{walletStatus:function(){return this.$store.state.wallet.walletStatus}}}),f=(r(540),r(23)),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{cols:"12",sm:"4",md:"4"}},[e(o.a,{staticClass:"image__box"},[e("div",{staticClass:"image__wrap"},[e("div",{staticClass:"image__button"},[e(n.a,{staticClass:"lighten-1",attrs:{color:"secondary",fab:"","x-small":""},on:{click:function(e){return t.openModal(t.url,t.prompt)}}},[e(d.a,[t._v("mdi-arrow-expand-all")])],1)],1),t._v(" "),e("img",{attrs:{src:t.url}})]),t._v(" "),e(c.b,[e("ul",[e("li",[e(d.a,{attrs:{small:"",dense:"",color:"primary"}},[t._v("mdi-clock")]),t._v(" "),e("strong",[t._v("Prompt")]),t._v(": "+t._s(t.prompt)+"\n        ")],1),t._v(" "),e("li",[e(d.a,{attrs:{small:"",dense:"",color:"primary"}},[t._v("mdi-calendar-range")]),t._v(" "),e("strong",[t._v("Time")]),t._v(": "+t._s(t.promptDate)+"\n        ")],1),t._v(" "),e("li",[e(d.a,{attrs:{small:"",dense:"",color:"primary"}},[t._v("mdi-clock-fast")]),t._v(" "),e("strong",[t._v("Render")]),t._v(": "+t._s(t.render)+"\n        ")],1)])])],1)],1)}),[],!1,null,"6ed4d346",null);e.default=component.exports},558:function(t,e,r){"use strict";r.r(e);var n=r(509),o=r(167),c={name:"SubLogo",data:function(){return{testData:null}}},l=(r(535),r(23)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"project__logo"},[e(o.a,{staticClass:"sub__logo",attrs:{src:"/images/project-logo/logo.png"}}),t._v(" "),e(n.a,{staticClass:"note__alert",attrs:{dense:"",text:"",type:"primary",icon:"mdi-information"}},[t._v("\n    Please use Telegram Bot for all modules. "),e("a",{attrs:{href:"https://t.me/SolGenAI_bot",target:"_blank"}},[t._v("https://t.me/SolGenAI_bot")])]),t._v(" "),e(n.a,{staticClass:"note__alert note__multi",attrs:{dense:"",text:"",type:"secondary",icon:"mdi-flag"}},[t._v("\n    Please ask questions in any language. Multiple languages are active.\n  ")])],1)}),[],!1,null,"3b470e86",null);e.default=component.exports},589:function(t,e,r){t.exports={}},624:function(t,e,r){"use strict";r(589)},661:function(t,e,r){"use strict";r.r(e);var n=r(497),o=r(507),c=r(496),l=r(59),d=r(513),m=r(558),h=r(218),f=r(517),_=r(553),v={name:"TextToImage",components:{Prompt:d.default,PageLead:h.default,PageInfo:f.default,ImageCard:_.default,SubLogo:m.default},data:function(){return{}},computed:{imageStatus:function(){return this.$store.state.image.promptRequest},promptList:function(){var t=this.$store.state.image.promptList;return t&&t.length?Object(l.a)(t).reverse():[]}},head:{title:"Image Module",meta:[{hid:"description",name:"description",content:"bot Image module is a powerful tool developed to convert text-based descriptions into visual content."}]}},x=(r(624),r(23)),component=Object(x.a)(v,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{justify:"center",align:"center"}},[e(n.a,{attrs:{cols:"10",sm:"10",md:"10"}},[e("PageInfo",{attrs:{text:"You can create images with this module. Please try typing something by clicking the prompt below."}}),t._v(" "),e("PageLead",{directives:[{name:"show",rawName:"v-show",value:!t.imageStatus,expression:"!imageStatus"}],attrs:{title:"IMAGE",text:"Please type a few prompts and touch the run button."}}),t._v(" "),e("SubLogo",{class:"status__".concat(t.imageStatus)}),t._v(" "),e("Prompt"),t._v(" "),e(o.a,{directives:[{name:"show",rawName:"v-show",value:t.imageStatus,expression:"imageStatus"}]},[e(c.a,{attrs:{justify:"center",align:"center"}},t._l(t.promptList,(function(image,t){return e("ImageCard",{key:t,attrs:{url:image.url,prompt:image.prompt,promptDate:image.promptDate,render:image.render}})})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Prompt:r(513).default,ImageCard:r(553).default})}}]);