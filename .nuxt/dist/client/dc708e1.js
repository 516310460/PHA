(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1387:function(e,t,n){"use strict";n.r(t);var l={props:{nicknameDialogVisible:{type:Boolean,default:!1},content:{type:String,default:"未知错误"}},data:function(){return{visible:this.nicknameDialogVisible,ruleFormNickname:{nickname:""},rulesNickname:{nickname:[{required:!0,message:"请输入昵称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]}}},watch:{nicknameDialogVisible:function(){this.visible=this.nicknameDialogVisible}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.setNickname()}))},setNickname:function(){var e=this;this.$api.User.UpdateNickname(this.ruleFormNickname).then((function(t){t.isSuccess&&(e.$message.success("设置成功"),e.nicknameDialogVisible=!1)}))},handleClose:function(){this.$emit("close-dialog",!1)}}},r=n(44),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{staticClass:"new-dialog",attrs:{visible:e.visible,"append-to-body":"","before-close":e.handleClose,title:"设置昵称",width:"480px"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.$emit("update:nicknameDialogVisible",!1)}}},[n("div",{staticClass:"mb-6 cl454545"},[e._v("请设置您的账号昵称，建议不要使用真实姓名。")]),e._v(" "),n("el-form",{ref:"ruleFormNickname",staticClass:"demo-ruleForm",attrs:{model:e.ruleFormNickname,rules:e.rulesNickname,"label-width":"0"}},[n("el-form-item",{attrs:{prop:"nickname"}},[n("label",{attrs:{for:""}},[e._v("昵称")]),e._v(" "),n("el-input",{attrs:{placeholder:"请设置昵称",type:"text",maxlength:"20","show-word-limit":""},model:{value:e.ruleFormNickname.nickname,callback:function(t){e.$set(e.ruleFormNickname,"nickname",t)},expression:"ruleFormNickname.nickname"}})],1),e._v(" "),n("el-form-item",{staticClass:"mt-12"},[n("el-button",{staticClass:"w-full",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleFormNickname")}}},[e._v("设置昵称")])],1)],1)],1)}),[],!1,null,"4250ad03",null);t.default=component.exports}}]);