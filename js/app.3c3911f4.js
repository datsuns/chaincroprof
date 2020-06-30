(function(e){function t(t){for(var a,o,l=t[0],c=t[1],s=t[2],f=0,p=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"196f":function(e,t,n){"use strict";var a=n("3f4f"),r=n.n(a);r.a},"3f4f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("InputArea",{scopedSlots:e._u([{key:"leftArea",fn:function(){return[n("label",{attrs:{for:"backgroundImage"}},[e._v("ベース画像")])]},proxy:!0},{key:"rightArea",fn:function(){return[n("UserSelect",{attrs:{labelText:"backgroundImage",optionList:e.baseImages},on:{select:function(t){return e.updateBaseImage(t)}}})]},proxy:!0}])}),n("InputArea",{scopedSlots:e._u([{key:"leftArea",fn:function(){return[n("label",{attrs:{for:"userName"}},[e._v("名前")])]},proxy:!0},{key:"rightArea",fn:function(){return[n("UserInput",{attrs:{labelText:"userName",inputType:"text",value:e.userName},on:{input:function(t){e.userName=t}}})]},proxy:!0}])}),n("InputArea",{scopedSlots:e._u([{key:"leftArea",fn:function(){return[n("label",{attrs:{for:"friendID"}},[e._v("フレンドID")])]},proxy:!0},{key:"rightArea",fn:function(){return[n("UserInput",{attrs:{labelText:"friendID",inputType:"text",value:e.friendID},on:{input:function(t){e.friendID=t}}})]},proxy:!0}])}),n("InputArea",{scopedSlots:e._u([{key:"leftArea",fn:function(){return[n("label",{attrs:{for:"checkBox1"}},[e._v("チェックボックス")])]},proxy:!0},{key:"rightArea",fn:function(){return[n("UserInput",{attrs:{labelText:"checkBox1",inputType:"checkbox",value:e.checkBox1},on:{change:function(t){e.checkBox1=t}}})]},proxy:!0}])}),n("InputArea",{scopedSlots:e._u([{key:"leftArea",fn:function(){return[n("label",{attrs:{for:"twitterName"}},[e._v("Twitterアカウント")])]},proxy:!0},{key:"rightArea",fn:function(){return[n("UserInput",{attrs:{labelText:"twitterName",inputType:"text",value:e.twitterName},on:{input:function(t){e.twitterName=t}}})]},proxy:!0}])}),n("Upload",{on:{updated:function(t){return e.updateProfileImage(t)}}}),n("a",{attrs:{href:e.dataURL,download:"image.png"}},[e._v("画像ダウンロード")]),n("ProfileCanvas",{attrs:{height:650,width:1075,fontSize:parseInt(e.fontSize),textFont:e.textFont,baseImage:e.baseImage,userName:e.userName,friendID:e.friendID,twitterName:e.twitterName,profileImage:e.profileImage,checkBox1:e.checkBox1},on:{updated:function(t){return e.updateDataURL(t)}}})],1)},i=[],o=(n("7db0"),n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("canvas",{attrs:{id:"cv",height:e.height,width:e.width}}),n("div",{attrs:{hidden:""}},[e._v(" "+e._s(e.fontSize)+" "+e._s(e.textFont)+" "+e._s(e.baseImage)+" "+e._s(e.userName)+" "+e._s(e.friendID)+" "+e._s(e.twitterName)+" "+e._s(e.profileImage)+" "+e._s(e.checkBox1)+" ")])])}),l=[],c=(n("a9e3"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("ddb0"),n("2b3d"),n("96cf"),n("1da1")),s=n("fbd1"),u=n.n(s),f={name:"ProfileCanvas",props:{height:Number,width:Number,fontSize:Number,textFont:String,baseImage:String,userName:String,friendID:String,twitterName:String,profileImage:String,resizedProfileImg:null,checkBox1:Boolean},mounted:function(){console.log("mounted"),this.draw(),this.emitDataURL()},updated:function(){console.log("updated"),this.draw(),this.emitDataURL()},methods:{draw:function(){null!=this.profileImage?this.resizeImage(this.profileImage,500,800).then(this.drawBaseImage):this.drawBaseImage(null)},loadImage:function(e){return new Promise((function(t,n){var a=new Image;a.onload=function(){return t(a)},a.onerror=function(e){return n(e)},a.src=e}))},resizeImage:function(e,t,n){var a=this;return console.log("resize start"),new Promise((function(r){u.a.parseMetaData(e,(function(){var i={maxHeight:t,maxWidth:n,canvas:!0};u()(e,function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){var i,o,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=n.toDataURL(e.type),o=a.base64ToBlob(i,e.type),l=window.URL.createObjectURL(o),console.log("resize done"),r(l);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i)}))}))},drawBaseImage:function(e){var t=this;console.log("drawBaseImage");var n=document.getElementById("cv"),a=n.getContext("2d");a.clearRect(0,0,this.width,this.height),this.loadImage(this.baseImage).then((function(n){a.font=t.fontSize+"px "+t.textFont,a.drawImage(n,0,0),t.writeUserName(a,t.userName),t.writeFriendID(a,t.friendID),t.writeTwitterName(a,t.twitterName),t.drawCheckBox(a,t.checkBox1),null==e?(console.log("skip profile update"),t.emitDataURL()):t.drawUserPhoto(a,e)})).catch((function(e){console.log("onload error",e)}))},writeSimpleText:function(e,t,n,a){var r=e.fillStyle;e.fillStyle="#ff0000",e.fillText(t,n,a),e.fillStyle=r},writeUserName:function(e,t){var n=750,a=250;this.writeSimpleText(e,t,n,a)},writeFriendID:function(e,t){var n=750,a=340;this.writeSimpleText(e,t,n,a)},writeTwitterName:function(e,t){if(0!=t.length){var n=250,a=645,r=e.fillStyle;e.fillStyle="#ff0000",e.fillText("@"+t,n,a),e.fillStyle=r,e.beginPath(),e.lineWidth=8,e.strokeStyle="#990000",e.arc(n-65,a-5,50,0,2*Math.PI,!0),e.closePath(),e.stroke()}},drawUserPhoto:function(e,t){var n=this,a=45,r=45;this.loadImage(t).then((function(t){e.drawImage(t,a,r),n.emitDataURL()})).catch((function(e){console.log("onload error",e)}))},drawCheckBox:function(e,t){var n=250,a=815,r=e.fillStyle;e.fillStyle="#ff0000",t&&e.fillText("✔",n,a),e.fillStyle=r},base64ToBlob:function(e,t){for(var n=atob(e.replace(/^.*,/,"")),a=new Uint8Array(n.length),r=0;r<n.length;r++)a[r]=n.charCodeAt(r);return new Blob([a.buffer],{type:t||"image/png"})},emitDataURL:function(){var e=document.getElementById("cv").toDataURL("image/png");this.$emit("updated",e)}}},p=f,d=(n("d8ea"),n("2877")),m=Object(d["a"])(p,o,l,!1,null,"48ea027e",null),g=m.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{attrs:{id:e.labelText,type:e.inputType},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},change:function(t){return e.$emit("change",t.target.checked)}}})])},v=[],b={name:"UserInput",props:{labelText:String,inputType:String,value:[String,Number,Boolean]}},I=b,w=Object(d["a"])(I,h,v,!1,null,"d06198d2",null),x=w.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select",{on:{change:function(t){return e.changedCallback(t.target.value)}}},e._l(e.optionList,(function(t){return n("option",{key:t.name,domProps:{value:t.name}},[e._v(e._s(t.name))])})),0)])},y=[],S={name:"UserSelect",props:{labelText:String,optionList:Array},methods:{changedCallback:function(e){this.$emit("select",e)}}},k=S,N=Object(d["a"])(k,_,y,!1,null,"4a8b024e",null),U=N.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-centered"},[n("div",{staticClass:"cell left"},[e._t("leftArea")],2),n("div",{staticClass:"cell right"},[e._t("rightArea")],2)])},B=[],A={name:"InputArea"},D=A,P=(n("196f"),Object(d["a"])(D,T,B,!1,null,"750574b4",null)),C=P.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contents"},[n("label",{directives:[{name:"show",rawName:"v-show",value:!e.uploadedImage,expression:"!uploadedImage"}],staticClass:"input-item__label"},[e._v("画像を選択 "),n("input",{attrs:{type:"file"},on:{change:e.onFileChange}})]),n("div",{staticClass:"preview-item"},[n("img",{directives:[{name:"show",rawName:"v-show",value:e.uploadedImage,expression:"uploadedImage"}],staticClass:"preview-item-file",attrs:{src:e.uploadedImage,alt:""}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.uploadedImage,expression:"uploadedImage"}],staticClass:"preview-item-btn",on:{click:e.remove}},[n("p",{staticClass:"preview-item-name"},[e._v('"image"')])])])])},R=[],L={components:{},data:function(){return{uploadedImage:""}},methods:{onFileChange:function(e){var t=e.target.files||e.dataTransfer.files;this.createImage(t[0])},createImage:function(e){var t=this;console.log(e);var n=new FileReader;n.onload=function(e){t.$emit("updated",e.target.result)},n.readAsDataURL(e)},remove:function(){this.uploadedImage=!1}}},j=L,$=Object(d["a"])(j,O,R,!1,null,null,null),z=$.exports,F=n("6791"),E=n.n(F),M=n("fbed"),J=n.n(M),W=n("a4f0"),H=n.n(W),q=n("6935"),G=n.n(q),K=n("ca15"),Q=n.n(K),V=n("6a80"),X=n.n(V),Y={name:"App",components:{ProfileCanvas:g,InputArea:C,UserInput:x,UserSelect:U,Upload:z},data:function(){return{fontSize:50,textFont:"sans-serif",userName:"",friendID:"",twitterName:"",baseImage:E.a,dataURL:"",profileImage:null,checkBox1:!1,baseImages:[{name:"ヘリオス",img:E.a},{name:"アリーチェ",img:J.a},{name:"エシャル",img:H.a},{name:"セレステ",img:G.a},{name:"アマツ",img:Q.a},{name:"つかむ",img:X.a}]}},methods:{updateDataURL:function(e){this.dataURL=e},updateProfileImage:function(e){console.log("updateProfileImage:"+e),this.profileImage=e},updateBaseImage:function(e){var t=this.baseImages.find((function(t){return t.name===e}));console.log("updateBaseImage"),this.baseImage=t.img}}},Z=Y,ee=(n("034f"),Object(d["a"])(Z,r,i,!1,null,null,null)),te=ee.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(te)}}).$mount("#app")},6791:function(e,t,n){e.exports=n.p+"img/_images_common_card_01a.8ffb1099.png"},6935:function(e,t,n){e.exports=n.p+"img/_images_common_card_04a.d0cfc5f3.png"},"6a80":function(e,t,n){e.exports=n.p+"img/_images_common_card_06a.1bf23fb5.png"},"85ec":function(e,t,n){},"8e40":function(e,t,n){},a4f0:function(e,t,n){e.exports=n.p+"img/_images_common_card_03a.fb140969.png"},ca15:function(e,t,n){e.exports=n.p+"img/_images_common_card_05a.d4147146.png"},d8ea:function(e,t,n){"use strict";var a=n("8e40"),r=n.n(a);r.a},fbed:function(e,t,n){e.exports=n.p+"img/_images_common_card_02a.89ef213f.png"}});
//# sourceMappingURL=app.3c3911f4.js.map