(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1186:function(e,n,t){var content=t(1235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(59).default)("59d34d70",content,!0,{sourceMap:!1})},1234:function(e,n,t){"use strict";t(1186)},1235:function(e,n,t){var o=t(58)((function(i){return i[1]}));o.push([e.i,".vue-grid-layout[data-v-7971beb0]{\n  background:#eee\n}\n.vue-grid-item[data-v-7971beb0]:not(.vue-grid-placeholder){\n  background:#ccc;\n  border:1px solid #000\n}\n.vue-grid-item .resizing[data-v-7971beb0]{\n  opacity:.9\n}\n.vue-grid-item .static[data-v-7971beb0]{\n  background:#cce\n}\n.vue-grid-item .text[data-v-7971beb0]{\n  font-size:24px;\n  text-align:center;\n  position:absolute;\n  top:0;\n  bottom:0;\n  left:0;\n  right:0;\n  margin:auto\n}\n.vue-grid-item .no-drag[data-v-7971beb0],.vue-grid-item .text[data-v-7971beb0]{\n  height:100%;\n  width:100%\n}\n.vue-grid-item .minMax[data-v-7971beb0]{\n  font-size:12px\n}\n.vue-grid-item .add[data-v-7971beb0]{\n  cursor:pointer\n}\n.vue-draggable-handle[data-v-7971beb0]{\n  position:absolute;\n  width:20px;\n  height:20px;\n  top:0;\n  left:0;\n  padding:0 8px 8px 0;\n  background-origin:content-box;\n  background-color:#000;\n  box-sizing:border-box;\n  border-radius:10px;\n  cursor:pointer\n}\n.eventsJSON[data-v-7971beb0],.layoutJSON[data-v-7971beb0]{\n  background:#ddd;\n  border:1px solid #000;\n  margin-top:10px;\n  padding:10px\n}\n.eventsJSON[data-v-7971beb0]{\n  height:100px;\n  overflow-y:scroll\n}",""]),o.locals={},e.exports=o},1330:function(e,n,t){"use strict";t.r(n);var o=t(300),d={components:{GridLayout:o.GridLayout,GridItem:o.GridItem},data:function(){return{layout:[{h:2,i:"0",w:8,x:0,y:0},{h:15,i:"1",w:2,x:8,y:0},{h:15,i:"2",w:2,x:10,y:0},{h:13,i:"3",w:2,x:0,y:2},{h:13,i:"4",w:6,x:2,y:2},{h:7,i:"5",w:8,x:0,y:15},{h:7,i:"6",w:4,x:8,y:15}],draggable:!0,resizable:!0,index:0,eventLog:[]}},mounted:function(){this.$nextTick((function(){}))},methods:{moveEvent:function(i,e,n){},movedEvent:function(i,e,n){},resizeEvent:function(i,e,n,t,o){},resizedEvent:function(i,e,n,t,o){},containerResizedEvent:function(i,e,n,t,o){},layoutCreatedEvent:function(e){},layoutBeforeMountEvent:function(e){},layoutMountedEvent:function(e){},layoutReadyEvent:function(e){},layoutUpdatedEvent:function(e){console.log(e)}}},r=(t(1234),t(41)),component=Object(r.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("grid-layout",{attrs:{layout:e.layout,"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!0,"vertical-compact":!0,"use-css-transforms":!0},on:{"update:layout":function(n){e.layout=n},"layout-created":e.layoutCreatedEvent,"layout-before-mount":e.layoutBeforeMountEvent,"layout-mounted":e.layoutMountedEvent,"layout-ready":e.layoutReadyEvent,"layout-updated":e.layoutUpdatedEvent}},e._l(e.layout,(function(n,o){return t("grid-item",{key:o,attrs:{x:n.x,y:n.y,w:n.w,h:n.h,i:n.i,"drag-allow-from":".vue-draggable-handle","drag-ignore-from":".no-drag"},on:{resize:e.resizeEvent,move:e.moveEvent,resized:e.resizedEvent,"container-resized":e.containerResizedEvent,moved:e.movedEvent}},[t("div",{staticClass:"text"},[t("div",{staticClass:"vue-draggable-handle"}),e._v(" "),t("div",{staticClass:"no-drag"},[t("span",[e._v(e._s(n.i))])])])])})),1)],1)}),[],!1,null,"7971beb0",null);n.default=component.exports}}]);