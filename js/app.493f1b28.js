(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],m=0,d=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"015c":function(t,e,a){"use strict";var n=a("4a06"),r=a.n(n);r.a},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"08f2":function(t,e,a){},"1e5a":function(t,e,a){t.exports=a.p+"img/images_common_card_01a.8ffb1099.png"},2018:function(t,e,a){},2876:function(t,e,a){t.exports=a.p+"img/images_common_card_06a.1bf23fb5.png"},"31ae":function(t,e,a){t.exports=a.p+"img/images_common_card_04a.d0cfc5f3.png"},"4a06":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("AppTitle",{attrs:{titleText:t.titleText}}),a("div",{staticClass:"viewport"},[a("md-toolbar",{attrs:{"md-elevation":1}},[a("span",{staticClass:"md-title"},[t._v("こちらに入力！")])]),a("md-list",{staticClass:"md-double-line"},[a("md-list-item",[a("md-field",[a("label",{attrs:{for:"backgroundImage"}},[t._v("背景イメージ選択")]),a("md-select",{attrs:{name:"baseImageTitle",id:"baseImageTitle"},on:{"md-selected":function(e){return t.updateBaseImageTitle(t.baseImageTitle)}},model:{value:t.baseImageTitle,callback:function(e){t.baseImageTitle=e},expression:"baseImageTitle"}},[a("md-option",{attrs:{value:"ヘリオス"}},[t._v("ヘリオス")]),a("md-option",{attrs:{value:"アリーチェ"}},[t._v("アリーチェ")]),a("md-option",{attrs:{value:"エシャル"}},[t._v("エシャル")]),a("md-option",{attrs:{value:"セレステ"}},[t._v("セレステ")]),a("md-option",{attrs:{value:"アマツ"}},[t._v("アマツ")]),a("md-option",{attrs:{value:"つかむ"}},[t._v("つかむ")])],1)],1)],1),a("md-list-item",[a("md-field",[a("label",[t._v("名前")]),a("md-input",{attrs:{placeholder:"名前"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1)],1),a("md-list-item",[a("md-field",[a("label",[t._v("フレンドID")]),a("md-input",{attrs:{placeholder:"フレンドID"},model:{value:t.friendID,callback:function(e){t.friendID=e},expression:"friendID"}})],1)],1),a("md-list-item",[a("md-field",[a("label",[t._v("キャラクタ名")]),a("md-input",{attrs:{placeholder:"キャラクタ名"},model:{value:t.charactorName,callback:function(e){t.charactorName=e},expression:"charactorName"}})],1)],1),a("md-list-item",[a("md-field",[a("label",[t._v("メッセージ")]),a("md-textarea",{attrs:{placeholder:"メッセージ(３行まで)"},model:{value:t.messageText,callback:function(e){t.messageText=e},expression:"messageText"}})],1)],1),a("md-list-item",[a("label",[t._v("文字色変更")]),a("compact-picker",{on:{input:t.updateTextColor},model:{value:t.colors,callback:function(e){t.colors=e},expression:"colors"}})],1),a("md-list-item",[a("md-field",[a("label",[t._v("フォント変更")]),a("md-select",{attrs:{name:"textFont",id:"textFont"},on:{"md-selected":function(e){return t.updateTextFont(t.textFont)}},model:{value:t.textFont,callback:function(e){t.textFont=e},expression:"textFont"}},[a("md-option",{attrs:{value:"Tetsubin"}},[t._v("男前")]),a("md-option",{attrs:{value:"Avenir"}},[t._v("元に戻す")]),a("md-option",{attrs:{value:"FgZero"}},[t._v("戦闘機")])],1)],1)],1)],1)],1),a("div",{staticClass:"viewport"},[a("md-toolbar",{attrs:{"md-elevation":1}},[a("span",{staticClass:"md-title"},[t._v("プレビュー")])]),a("md-list",{staticClass:"md-double-line"},[a("md-list-item",[a("ProfileCanvas",{attrs:{height:650,width:1075,userPhotoStartX:t.userPhotoStartX,userPhotoStartY:t.userPhotoStartY,fontSize:parseInt(t.fontSize),textFont:t.textFont,customFontList:t.customFontList,textColor:t.textColor,baseImage:t.baseImage,userName:t.userName,friendID:t.friendID,twitterName:t.twitterName,charactorName:t.charactorName,messageText:t.messageText,profileImage:t.profileImage},on:{updated:function(e){return t.updateDataURL(e)}}})],1),a("Upload",{on:{updated:function(e){return t.updateProfileImage(e)}}}),a("md-card-header",[a("div",{staticClass:"md-title"},[t._v("画像位置調整")])]),a("md-card-content",[a("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.updateProfilePosX(10)}}},[t._v("→")]),a("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.updateProfilePosX(-10)}}},[t._v("←")]),a("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.updateProfilePosY(10)}}},[t._v("↓")]),a("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.updateProfilePosY(-10)}}},[t._v("↑")]),a("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.resetProfilePos()}}},[t._v("reset")])],1),a("DownloadButton",{attrs:{labelText:t.dlButtonLabel,dataURL:t.dataURL}})],1)],1),t._m(0),t._m(1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" ベースの画像は公式サイトのものを利用しています → "),a("a",{attrs:{href:"http://chronicle.sega-net.com/7th_chain/",target:"_blank"}},[t._v("チェインクロニクル3 7周年特設サイト")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{attrs:{href:"https://github.com/chainchroprof/prof7th",target:"_blank"}},[t._v("source code(github)")]),a("br"),a("a",{attrs:{href:"https://twitter.com/datsuns",target:"_blank"}},[t._v("by @datsuns")])])}],i=(a("7db0"),a("b0c0"),a("51de"),a("e094"),a("43f9")),s=a.n(i),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("canvas",{attrs:{id:"cv",height:t.height,width:t.width}}),a("div",{attrs:{hidden:""}},[t._v(" "+t._s(t.textFont)+" "+t._s(t.textColor)+" "+t._s(t.userPhotoStartX)+" "+t._s(t.userPhotoStartY)+" "+t._s(t.baseImage)+" "+t._s(t.userName)+" "+t._s(t.friendID)+" "+t._s(t.twitterName)+" "+t._s(t.charactorName)+" "+t._s(t.messageText)+" "+t._s(t.profileImage)+" ")])])},c=[],u=(a("fb6a"),a("a9e3"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("1276"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),m=a("fbd1"),d=a.n(m),f={name:"ProfileCanvas",props:{height:Number,width:Number,userPhotoStartX:Number,userPhotoStartY:Number,textFont:String,customFontList:Array,textColor:String,baseImage:String,userName:String,friendID:String,twitterName:String,charactorName:String,messageText:String,profileImage:String},mounted:function(){this.forceFontLoad(),this.draw(),this.emitDataURL()},updated:function(){this.draw(),this.emitDataURL()},methods:{forceFontLoad:function(){var t=document.getElementById("cv"),e=t.getContext("2d"),a=e.font;for(var n in this.customFontList)e.font="0px "+this.customFontList[n],this.writeSimpleText(e,"a",0,0);e.font=a},draw:function(){null!=this.profileImage?this.resizeImage(this.profileImage,500,800).then(this.drawBaseImage):this.drawBaseImage(null)},loadImage:function(t){return new Promise((function(e,a){var n=new Image;n.onload=function(){return e(n)},n.onerror=function(t){return a(t)},n.src=t}))},resizeImage:function(t,e,a){var n=this;return new Promise((function(r){d.a.parseMetaData(t,(function(){var o={maxHeight:e,maxWidth:a,canvas:!0};d()(t,function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(a){var o,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o=a.toDataURL(t.type),i=n.base64ToBlob(o,t.type),s=window.URL.createObjectURL(i),r(s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o)}))}))},drawBaseImageMain:function(t){var e=this;this.loadImage(this.baseImage).then((function(a){t.font=e.fontSize+"px "+e.textFont,t.drawImage(a,0,0),e.writeUserName(t,e.userName),e.writeFriendID(t,e.friendID),e.writeCharactorName(t,e.charactorName),e.writeMessageText(t,e.messageText),e.emitDataURL()})).catch((function(t){console.log("onload error",t)}))},clearImageArea:function(t){var e=t.fillStyle;t.fillStyle="#ffffff",t.fillRect(0,0,this.width,this.height),t.fillStyle=e},drawBaseImage:function(t){var e=document.getElementById("cv"),a=e.getContext("2d");if(this.clearImageArea(a),null==t)this.drawBaseImageMain(a);else{var n=this.userPhotoStartX,r=this.userPhotoStartY;this.drawUserPhoto(a,t,n,r).then(this.drawBaseImageMain)}},writeSimpleText:function(t,e,a,n){var r=t.fillStyle;t.fillStyle=this.textColor,t.fillText(e,a,n),t.fillStyle=r},writeUserName:function(t,e){var a=50,n=730,r=250;t.font=a+"px "+this.textFont,this.writeSimpleText(t,e.slice(0,6),n,r)},writeFriendID:function(t,e){var a=40,n=730,r=340;t.font=a+"px "+this.textFont,this.writeSimpleText(t,e,n,r)},writeCharactorName:function(t,e){var a=function(t){return t<=6?{x:710,y:430,fontSize:50}:{x:530,y:432,fontSize:25}}(e.length);t.font=a.fontSize+"px "+this.textFont,this.writeSimpleText(t,e,a.x,a.y)},writeMessageText:function(t,e){var a=30,n=530,r=[530,565,600],o=16,i=e.split("\n");t.font=a+"px "+this.textFont,i.length>=1&&this.writeSimpleText(t,i[0].slice(0,o),n,r[0]),i.length>=2&&this.writeSimpleText(t,i[1].slice(0,o),n,r[1]),i.length>=3&&this.writeSimpleText(t,i[2].slice(0,o),n,r[2])},drawUserPhoto:function(t,e,a,n){var r=this;return new Promise((function(o){r.loadImage(e).then((function(e){t.drawImage(e,a,n),o(t)})).catch((function(t){console.log("onload error",t)}))}))},base64ToBlob:function(t,e){for(var a=atob(t.replace(/^.*,/,"")),n=new Uint8Array(a.length),r=0;r<a.length;r++)n[r]=a.charCodeAt(r);return new Blob([n.buffer],{type:e||"image/png"})},emitDataURL:function(){var t=document.getElementById("cv").toDataURL("image/png");this.$emit("updated",t)}}},p=f,h=(a("81a2"),a("2877")),g=Object(h["a"])(p,l,c,!1,null,"7ce0e030",null),v=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"md-title"},[t._v("プロフィール画像をUpload")]),a("md-field",[a("label",[t._v("画像を選択")]),a("md-file",{on:{"md-change":function(e){return t.onFileChange(t.uploadedImage)}},model:{value:t.uploadedImage,callback:function(e){t.uploadedImage=e},expression:"uploadedImage"}})],1)],1)},x=[],_={components:{},data:function(){return{uploadedImage:""}},methods:{onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;this.createImage(e[0])},createImage:function(t){var e=this;console.log(t);var a=new FileReader;a.onload=function(t){e.$emit("updated",t.target.result)},a.readAsDataURL(t)},remove:function(){this.uploadedImage=!1}}},I=_,w=Object(h["a"])(I,b,x,!1,null,null,null),S=w.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("md-button",{staticClass:"md-raised md-primary",attrs:{type:"button"},on:{click:t.onclick}},[t._v(" "+t._s(t.labelText)+" ")]),a("div",{attrs:{hidden:""}},[t._v(" "+t._s(t.dataURL)+" ")])],1)},P=[],y={name:"DownloadButton",props:{labelText:String,dataURL:String},methods:{onclick:function(){var t=document.createElement("a");t.href=this.dataURL,t.download="image.png",t.click()}}},C=y,F=(a("bcc5"),Object(h["a"])(C,T,P,!1,null,"243031a0",null)),N=F.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("md-content",{staticClass:"md-primary"},[t._v(t._s(t.titleText))])],1)},k=[],D={name:"",props:{titleText:String}},U=D,R=(a("015c"),Object(h["a"])(U,L,k,!1,null,"dbe288f6",null)),B=R.exports,O=a("1e5a"),j=a.n(O),A=a("be08"),E=a.n(A),X=a("e877"),Y=a.n(X),M=a("31ae"),$=a.n(M),z=a("fe2b"),J=a.n(z),Z=a("2876"),H=a.n(Z),W=a("c345");n["default"].use(s.a);var q={name:"App",components:{ProfileCanvas:v,Upload:S,DownloadButton:N,AppTitle:B,"compact-picker":W["Compact"]},data:function(){return{titleText:"チェンクロ名刺ジェネレータ",textFont:"Avenir",fontSize:30,userPhotoStartX:45,userPhotoStartY:45,dlButtonLabel:"画像ダウンロード",userName:"",friendID:"",twitterName:"",charactorName:"",messageText:"",baseImage:j.a,baseImageTitle:"ヘリオス",dataURL:"",profileImage:null,textColor:"#000000",colors:{hex:"#000000"},customFontList:["Tetsubin","FgZero"],baseImages:[{name:"ヘリオス",img:j.a},{name:"アリーチェ",img:E.a},{name:"エシャル",img:Y.a},{name:"セレステ",img:$.a},{name:"アマツ",img:J.a},{name:"つかむ",img:H.a}]}},methods:{updateDataURL:function(t){this.dataURL=t},updateProfileImage:function(t){console.log("updateProfileImage:"+t),this.profileImage=t},updateBaseImage:function(t){var e=this.baseImages.find((function(e){return e.name===t}));this.baseImage=e.img},updateBaseImageTitle:function(t){var e=this.baseImages.find((function(e){return e.name===t}));this.baseImage=e.img},updateTextColor:function(){this.textColor=this.colors.hex},updateProfilePosX:function(t){this.userPhotoStartX+=t},updateProfilePosY:function(t){this.userPhotoStartY+=t},resetProfilePos:function(){this.userPhotoStartX=45,this.userPhotoStartY=45},updateTextFont:function(t){this.textFont=t}}},G=q,K=(a("034f"),Object(h["a"])(G,r,o,!1,null,null,null)),Q=K.exports;a("2018");n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(Q)}}).$mount("#app")},"81a2":function(t,e,a){"use strict";var n=a("08f2"),r=a.n(n);r.a},"85ec":function(t,e,a){},aa95:function(t,e,a){},bcc5:function(t,e,a){"use strict";var n=a("aa95"),r=a.n(n);r.a},be08:function(t,e,a){t.exports=a.p+"img/images_common_card_02a.89ef213f.png"},e877:function(t,e,a){t.exports=a.p+"img/images_common_card_03a.fb140969.png"},fe2b:function(t,e,a){t.exports=a.p+"img/images_common_card_05a.d4147146.png"}});
//# sourceMappingURL=app.493f1b28.js.map