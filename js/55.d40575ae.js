(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{"24bd":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"q-pa-lg"},[n("MultipleBreadcrumbs",{attrs:{"multiple-data":e.multipleData}}),n("div",{staticClass:"q-pa-md",staticStyle:{margin:"0px 200px"}},[n("q-card",{staticClass:"my-card",staticStyle:{padding:"20px",height:"100%"}},[n("h5",{staticClass:"q-mt-none",staticStyle:{"min-width":"150px","padding-top":"16px","padding-left":"16px"},attrs:{outlined:"",dense:"","options-dense":""}},[e._v("\n        "+e._s(e.$t("permission.create.title"))+"\n      ")]),n("q-card-section",[n("q-form",{staticClass:"q-gutter-md",on:{submit:e.onSubmit}},[n("q-input",{attrs:{filled:"",label:e.$t("permission.create.permission"),"lazy-rules":"",rules:[function(t){return t&&t.length>0||e.$t("permission.create.permission_hint")}]},model:{value:e.form.permission,callback:function(t){e.$set(e.form,"permission",t)},expression:"form.permission"}}),n("q-input",{attrs:{filled:"",label:e.$t("permission.create.display_name"),"lazy-rules":"",rules:[function(t){return null!==t&&""!==t||e.$t("permission.create.permission_display_hint")}]},model:{value:e.form.display_name,callback:function(t){e.$set(e.form,"display_name",t)},expression:"form.display_name"}}),n("q-select",{attrs:{filled:"",options:e.includedMenuOptions,"emit-value":"","map-options":"","transition-show":"jump-up","transition-hide":"jump-up",label:e.$t("permission.create.included_menu"),"lazy-rules":"",rules:[function(t){return null!==t&&""!==t||e.$t("permission.create.included_menu_hint")}]},model:{value:e.form.menu_id,callback:function(t){e.$set(e.form,"menu_id",t)},expression:"form.menu_id"}}),n("div",[n("q-btn",{attrs:{label:e.$tc("submit",1),type:"submit",color:"primary"}}),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"q-ml-sm",attrs:{flat:"",label:e.$t("cancel"),color:"primary",to:"/user_manager/permissions"}})],1)],1)],1)],1)],1)],1)},i=[],r=n("c973"),a=n.n(r),o=n("ded3"),l=n.n(o),u=(n("96cf"),n("2f62")),c={name:"permissionCreate",components:{},preFetch:function(e){var t=e.store;t.dispatch("getIncludedMenuOptions")},data:function(){return{form:{permission:"",display_name:"",menu_id:""}}},computed:l()(l()({multipleData:function(){var e=[{label:this.$t("breadCrumbs.dashboard"),icon:"icon_dashboard",to:"/dashboard"},{label:this.$t("breadCrumbs.user_manager"),icon:"icon_user_manager"},{label:this.$t("breadCrumbs.permission.page"),icon:"person",to:"/user_manager/permissions"},{label:this.$t("breadCrumbs.permission.create"),icon:"person"}];return e}},Object(u["e"])({includedMenuOptions:function(e){return e.permissions.included_menu_options}})),Object(u["c"])({})),methods:l()(l()({},Object(u["b"])(["getIncludedMenuOptions","createPermissionInfo"])),{},{onSubmit:function(){var e=this;return a()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("createPermissionInfo",e.form);case 2:e.$router.push({path:"/user_manager/permissions"});case 3:case"end":return t.stop()}}),t)})))()}})},m=c,p=n("2877"),d=n("9989"),f=n("f09f"),b=n("a370"),h=n("0378"),_=n("27f9"),g=n("ddd8"),$=n("9c40"),v=n("7f67"),y=n("eebe"),q=n.n(y),C=Object(p["a"])(m,s,i,!1,null,null,null);t["default"]=C.exports;q()(C,"components",{QPage:d["a"],QCard:f["a"],QCardSection:b["a"],QForm:h["a"],QInput:_["a"],QSelect:g["a"],QBtn:$["a"]}),q()(C,"directives",{ClosePopup:v["a"]})}}]);