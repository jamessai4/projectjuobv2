(function(e){function t(t){for(var a,o,l=t[0],s=t[1],c=t[2],v=0,d=[];v<l.length;v++)o=l[v],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"089f":function(e,t,n){"use strict";var a=n("b9cb"),r=n.n(a);r.a},"3f46":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Header"),n("Menu"),n("Content")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{attrs:{color:"green darken-1",app:"",dense:"",dark:""}},[n("v-toolbar-title",[e._v(" Manage Chat Bot")]),n("v-spacer"),n("span",[e._v("Logout")]),n("v-btn",{attrs:{icon:""},on:{click:e.onClickLogOff}},[n("v-icon",[e._v("mdi-export")])],1)],1)],1)},l=[],s={},c=s,u=n("2877"),v=n("6544"),d=n.n(v),m=n("40dc"),f=n("8336"),p=n("132d"),b=n("2fa4"),Q=n("2a7f"),h=Object(u["a"])(c,o,l,!1,null,null,null),_=h.exports;d()(h,{VAppBar:m["a"],VBtn:f["a"],VIcon:p["a"],VSpacer:b["a"],VToolbarTitle:Q["a"]});var M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{app:"",permanent:""}},[[n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.0-9/29694791_605743706433011_7002678869339103955_n.jpg?_nc_cat=103&_nc_sid=7aed08&_nc_eui2=AeEBaBYQLezK_2mE0xrn03YKY-P6gymAAG9j4_qDKYAAb6Wi3H4ePl_bl7EMCInE8-vaxLgb3ZKjMJcUYgTb_VNe&_nc_ohc=EbgLaK3OmrYAX-2zVSG&_nc_ht=scontent.fbkk5-4.fna&oh=aac9d1a54cb46be6b0a5c75107ae1eb3&oe=5F86D40B"}})],1),n("v-list-item-content",[n("v-list-item-title",[e._v("James Kittithach")]),n("v-list-item-subtitle",[e._v("Logged In")])],1)],1)],n("v-divider"),n("v-container",[n("v-icon",[e._v("keyboard_arrow_down")]),n("h0",[e._v("บัญชีของฉัน")])],1),n("v-list",[n("v-list-item-group",{attrs:{mandatory:"",color:"success"},model:{value:e.selectedMenus,callback:function(t){e.selectedMenus=t},expression:"selectedMenus"}},[e._l(e.menus,(function(t,a){var r=t[0],i=t[1],o=t[2];return n("v-list-item",{key:a,on:{click:function(t){return e.onClickMenu(o)}}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(r))])],1),n("v-list-item-content",[n("v-list-tile-title",[e._v(e._s(i))])],1)],1)})),n("v-container",[n("v-divider")],1)],2)],1)],2)},g=[],x=(n("c740"),{methods:{onClickMenu:function(e){this.$router.push(e).catch((function(e){}))}},mounted:function(){var e=this;this.selectedMenu=this.menus.findIndex((function(t){return t[2]==e.$route.path}))},data:function(){return{selectedMenu:0,menus:[["comment","จัดการ Chat Bot","/manage"],["question_answer","ประวัติการสอบถาม","/Register"]]}}}),A=x,V=(n("74f5"),n("a523")),k=n("ce7e"),y=n("adda"),I=n("8860"),w=n("da13"),O=n("8270"),j=n("5d23"),C=n("1baa"),E=n("34c3"),P=n("f774"),T=Object(u["a"])(A,M,g,!1,null,null,null),L=T.exports;d()(T,{VContainer:V["a"],VDivider:k["a"],VIcon:p["a"],VImg:y["a"],VList:I["a"],VListItem:w["a"],VListItemAvatar:O["a"],VListItemContent:j["a"],VListItemGroup:C["a"],VListItemIcon:E["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"],VNavigationDrawer:P["a"]});var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",[n("router-view")],1)},D=[],$={},B=$,K=n("a75b"),Y=Object(u["a"])(B,S,D,!1,null,null,null),F=Y.exports;d()(Y,{VContent:K["a"]});var R={name:"App",components:{Header:_,Menu:L,Content:F}},U=R,q=n("7496"),J=Object(u["a"])(U,r,i,!1,null,null,null),G=J.exports;d()(J,{VApp:q["a"]});var H=n("8c4f"),X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v(" ระบบจัดการคำถาม "),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),n("v-data-table",{attrs:{search:e.search,headers:e.headers,items:e.desserts},scopedSlots:e._u([{key:"item.I",fn:function(t){var a=t.item;return[n("router-link",{attrs:{to:"/edit"}},[n("v-icon",{attrs:{small:""},on:{click:function(t){return e.edit(a)}}},[e._v(" mdi-pencil ")])],1),n("router-link",{attrs:{to:"/view"}},[n("v-icon",{attrs:{small:""},on:{click:function(t){return e.view(a)}}},[e._v(" mdi-eye ")])],1)]}}])})],1)},z=[],N={methods:{edit:function(e){this.$router.push(e).catch((function(e){}))}},data:function(){return{search:"",headers:[{text:"ลำดับ",align:"start",sortable:!1,value:"name"},{text:"หมวดคำถาม",value:"MQ"},{text:"คำถาม",value:"Q"},{text:"การจัดการ",value:"I",sortable:!1}],desserts:[{name:"1",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ผู้ประกอบธุรกิจตรวจสอบมาตรฐานสินค้าต้องรายงานประจำเดือนการตรวจสอบ มส.20 ภายในกี่วัน"},{name:"2",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"มาตรการ CVD คืออะไร"},{name:"3",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"DUI คืออะไร\t"},{name:"4",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"มาตรการเยียวยาทางการค้า คืออะไร\t"},{name:"5",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ตรวจสอบกิจกรรมของ APi ได้จากช่องทางใด\t"},{name:"6",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"Dual-Use Items คืออะไร"},{name:"7",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ตรวจสอบกิจกรรมของสถาบันส่งเสริมสินค้าเกษตรนวัตกรรม ได้จากช่องทางใด"},{name:"8",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"มาตรการตอบโต้การอุดหนุน คืออะไร\t"},{name:"9",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ชำระเงินค่าธรรมเนียม มส. ผ่านช่องทางใดได้บ้าง\t"},{name:"10",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ผู้ตรวจสอบมาตรฐานสินค้า ทำหน้าที่อะไร\t"},{name:"11",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ถ้าผู้ตรวจสอบมาตรฐานสินค้า มีการเปลี่ยนแปลงชื่อสกุล จะต้องทำอย่างไร\t"},{name:"12",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ผู้ตรวจสอบมาตรฐานสินค้า แบ่งออกเป็นกี่ประเภท\t"},{name:"13",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ตรวจสอบกฎถิ่นกำเนิดสินค้าได้จากช่องทางใด\t"},{name:"14",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ผู้ประกอบธุรกิจตรวจสอบมาตรฐานสินค้าทำหน้าที่อะไร"},{name:"15",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"Institute for Agricultural Product Innovation สนับสนุนผู้ประกอบการอย่างไร"},{name:"16",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"APi คืออะไร"},{name:"17",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ผู้เกี่ยวข้องกับพระราชบัญญัติสินค้าการแพร่ขยายอาวุธอานุภาพทำลายล้างสูง พ.ศ. 2562 ได้แก่ใครบ้าง"},{name:"18",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"หากใบอนุญาตของผู้ตรวจสอบมาตรฐานสินค้าสูญหาย จะต้องทำอย่างไร"},{name:"19",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ผู้ส่งกลับสินค้าที่ใช้ได้สองทางไปนอกราชอาณาจักรต้องเตรียมตัวอย่างไรบ้าง"},{name:"20",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ระบบ REX คืออะไร"}]}}},W=N,Z=n("b0af"),ee=n("99d9"),te=n("8fea"),ne=n("8654"),ae=Object(u["a"])(W,X,z,!1,null,null,null),re=ae.exports;d()(ae,{VCard:Z["a"],VCardTitle:ee["a"],VDataTable:te["a"],VIcon:p["a"],VSpacer:b["a"],VTextField:ne["a"]});var ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v(" ระบบจัดการประวัติคำถาม "),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),n("v-data-table",{attrs:{search:e.search,headers:e.headers,items:e.desserts}})],1)},oe=[],le={data:function(){return{search:"",headers:[{text:"ลำดับ",align:"start",sortable:!1,value:"name"},{text:"หมวดคำถาม",value:"MQ"},{text:"คำถาม",value:"Q"},{text:"คำตอบ",value:"A",sortable:!1}],desserts:[{name:"1",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ผู้ประกอบธุรกิจตรวจสอบมาตรฐานสินค้าต้องรายงานประจำเดือนการตรวจสอบ มส.20 ภายในกี่วัน",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"2",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"มาตรการ CVD คืออะไร",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"3",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"DUI คืออะไร\t",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"4",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"มาตรการเยียวยาทางการค้า คืออะไร\t",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"5",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ตรวจสอบกิจกรรมของ APi ได้จากช่องทางใด\t",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"6",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"Dual-Use Items คืออะไร",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"7",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ตรวจสอบกิจกรรมของสถาบันส่งเสริมสินค้าเกษตรนวัตกรรม ได้จากช่องทางใด",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"8",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"มาตรการตอบโต้การอุดหนุน คืออะไร\t",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"9",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ชำระเงินค่าธรรมเนียม มส. ผ่านช่องทางใดได้บ้าง\t",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"10",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ผู้ตรวจสอบมาตรฐานสินค้า ทำหน้าที่อะไร\t",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"11",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ถ้าผู้ตรวจสอบมาตรฐานสินค้า มีการเปลี่ยนแปลงชื่อสกุล จะต้องทำอย่างไร\t",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"12",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ผู้ตรวจสอบมาตรฐานสินค้า แบ่งออกเป็นกี่ประเภท\t",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"13",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ตรวจสอบกฎถิ่นกำเนิดสินค้าได้จากช่องทางใด\t",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"14",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ผู้ประกอบธุรกิจตรวจสอบมาตรฐานสินค้าทำหน้าที่อะไร",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"15",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"Institute for Agricultural Product Innovation สนับสนุนผู้ประกอบการอย่างไร",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"16",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"APi คืออะไร",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"17",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ผู้เกี่ยวข้องกับพระราชบัญญัติสินค้าการแพร่ขยายอาวุธอานุภาพทำลายล้างสูง พ.ศ. 2562 ได้แก่ใครบ้าง",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"18",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"หากใบอนุญาตของผู้ตรวจสอบมาตรฐานสินค้าสูญหาย จะต้องทำอย่างไร",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"19",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ผู้ส่งกลับสินค้าที่ใช้ได้สองทางไปนอกราชอาณาจักรต้องเตรียมตัวอย่างไรบ้าง",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"},{name:"20",MQ:"คำถามทั่วไปเกี่ยวกับบริการของกรม",Q:"ระบบ REX คืออะไร",A:"เอ๋ อันนี้น้องสมาร์ทไม่สามารถตอบได้ แต่ท่านสามารถรอเจ้าหน้าที่มาตอบหรือสามารถติดต่อเจ้าหน้าที่ได้ที่เบอร์"}]}}},se=le,ce=Object(u["a"])(se,ie,oe,!1,null,null,null),ue=ce.exports;d()(ce,{VCard:Z["a"],VCardTitle:ee["a"],VDataTable:te["a"],VSpacer:b["a"],VTextField:ne["a"]});var ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v(" กลุ่มคำถาม "),n("v-text-field",{attrs:{label:"Main input",rules:e.rules,"hide-details":"auto"}}),n("br"),e._v("คำถาม "),n("v-text-field",{attrs:{label:"Another input"}}),n("br"),e._v("ดำตอบ "),n("v-text-field",{attrs:{label:"Another input"}}),n("br"),n("router-link",{attrs:{to:"/mange"}},[n("v-btn",e._g(e._b({attrs:{color:"green",dark:""}},"v-btn",e.attrs,!1),e.on),[e._v("ย้อนกลับ")])],1),e._v(" "),n("router-link",{attrs:{to:"/manage"}},[n("v-btn",e._g(e._b({attrs:{color:"orange",dark:""}},"v-btn",e.attrs,!1),e.on),[e._v("บันทึก")])],1)],1)])},de=[],me={data:function(){return{rules:[function(e){return!!e||"Required."},function(e){return e&&e.length>=3||"Min 3 characters"}]}}},fe=me,pe=(n("d572"),Object(u["a"])(fe,ve,de,!1,null,null,null)),be=pe.exports;d()(pe,{VBtn:f["a"],VTextField:ne["a"]});var Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v(" กลุ่มคำถาม "),n("v-text-field",{attrs:{label:"Main input",rules:e.rules,"hide-details":"auto"}}),n("br"),e._v("คำถาม "),n("v-text-field",{attrs:{label:"Another input"}}),n("br"),e._v("ดำตอบ "),n("v-text-field",{attrs:{label:"Another input"}}),n("br"),n("router-link",{attrs:{to:"/mange"}},[n("v-btn",e._g(e._b({attrs:{color:"green",dark:""}},"v-btn",e.attrs,!1),e.on),[e._v("ย้อนกลับ")])],1)],1)])},he=[],_e={data:function(){return{rules:[function(e){return!!e||"Required."},function(e){return e&&e.length>=3||"Min 3 characters"}]}}},Me=_e,ge=(n("089f"),Object(u["a"])(Me,Qe,he,!1,null,null,null)),xe=ge.exports;d()(ge,{VBtn:f["a"],VTextField:ne["a"]}),a["a"].use(H["a"]);var Ae=[{path:"/manage",name:"manage",component:re},{path:"/register",name:"register",component:ue},{path:"/view",name:"view",component:xe},{path:"/edit",name:"edit",component:be},{path:"/",redirect:"/manage"},{path:"*",redirect:"/manage"}],Ve=new H["a"]({mode:"history",base:"/",routes:Ae}),ke=Ve,ye=n("2f62");a["a"].use(ye["a"]);var Ie=new ye["a"].Store({state:{},mutations:{},actions:{},modules:{}}),we=n("f309");a["a"].use(we["a"]);var Oe=new we["a"]({});n("d1e78");a["a"].config.productionTip=!1,new a["a"]({router:ke,store:Ie,vuetify:Oe,render:function(e){return e(G)}}).$mount("#app")},"74f5":function(e,t,n){"use strict";var a=n("8c19"),r=n.n(a);r.a},"8c19":function(e,t,n){},b9cb:function(e,t,n){},d572:function(e,t,n){"use strict";var a=n("3f46"),r=n.n(a);r.a}});
//# sourceMappingURL=app.e458d9de.js.map