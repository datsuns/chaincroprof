<template>
  <div>
    <canvas
      id="cv"
      :height="height"
      :width="width"
    >
    </canvas>
    <div hidden>
      {{ fontSize }}
      {{ textFont }}

      {{ userName }}
      {{ twitterName }}
      {{ profileImage }}
      {{ checkBox1 }}
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import loadImage from 'blueimp-load-image';

export default {
  name: 'AppCanvas',
  props: {
    height: Number,
    width: Number,
    fontSize: Number,
    textFont: String,
    baseImage: String,
    userName: String,
    twitterName: String,
    profileImage: String,
    resizedProfileImg: null,
    checkBox1: Boolean
  },
  mounted () {
    // called from Runtime on initial
    console.log("mounted")
    this.draw()
    this.emitDataURL()
  },
  methods: {
    draw: function () {
      const cv = document.getElementById('cv')
      const ctx = cv.getContext('2d')
      ctx.font = this.fontSize + 'px' + ' ' + this.textFont

      const file = this.profileImage;
      loadImage.parseMetaData(file, () => {
        const options = {
          maxHeight: 100,
          maxWidth: 100,
          canvas: true
        };
        this.displayImage(file, options);
      });

      let self = this
      let usename = this.userName
      let twittername = this.twitterName
      let fWriteUser = this.writeUserName
      let fWriteTwitter = this.writeTwitterName
      let userPhotoFunc = this.drawUserPhoto
      let checkBoxFunc = this.drawCheckBox
      let checkd = this.checkBox1
      let frame = new Image()
      //let profile = this.resizedProfileImg
      let profile = this.profileImage
      //let checkImage = this.checkImage
      frame.src = this.baseImage
      frame.onload = function(){
        ctx.drawImage(frame, 0, 0)
        fWriteUser(ctx, usename)
        fWriteTwitter(ctx, twittername)
        //ctx.beginPath()
        //ctx.lineWidth = 10
        //ctx.strokeStyle = '#ff0000'
        ////ctx.arc(390, 565, 50, 0, Math.PI * 2, true)
        //ctx.closePath()
        //ctx.stroke()
        console.log("onload done")
        if (profile == null) {
          console.log("skip profile update")
          const dataURL = document.getElementById('cv').toDataURL('image/png')
          self.$emit('updated', dataURL)
        }
        else {
          userPhotoFunc(ctx, profile)
        }
        checkBoxFunc(ctx, checkd)
      }

    },

    drawBaseImage: function () {
      const cv = document.getElementById('cv')
      const ctx = cv.getContext('2d')
      ctx.font = this.fontSize + 'px' + ' ' + this.textFont
      let self = this
      let usename = this.userName
      let twittername = this.twitterName
      let fWriteUser = this.writeUserName
      let fWriteTwitter = this.writeTwitterName
      let userPhotoFunc = this.drawUserPhoto
      let checkBoxFunc = this.drawCheckBox
      let checkd = this.checkBox1
      let frame = new Image()
      console.log("resizedProfileImg " + this.resizedProfileImg)
      let profile = this.resizedProfileImg
      //let profile = this.profileImage
      //let checkImage = this.checkImage
      frame.src = this.baseImage
      frame.onload = function(){
        ctx.drawImage(frame, 0, 0)
        fWriteUser(ctx, usename)
        fWriteTwitter(ctx, twittername)
        //ctx.beginPath()
        //ctx.lineWidth = 10
        //ctx.strokeStyle = '#ff0000'
        ////ctx.arc(390, 565, 50, 0, Math.PI * 2, true)
        //ctx.closePath()
        //ctx.stroke()
        console.log("onload done")
        if (profile == null) {
          console.log("skip profile update")
          const dataURL = document.getElementById('cv').toDataURL('image/png')
          self.$emit('updated', dataURL)
        }
        else {
          userPhotoFunc(ctx, profile)
        }
        checkBoxFunc(ctx, checkd)
      }
    },

    writeUserName: function (ctx, name) {
      var posx = 350
      var posy = 195

      var orgStyle = ctx.fillStyle
      ctx.fillStyle = '#ff0000'
      ctx.fillText(name, posx, posy)
      ctx.fillStyle = orgStyle
    },

    writeTwitterName: function (ctx, name) {
      if( name.length == 0 ){
        return
      }
      var posx = 250
      var posy = 645

      var orgStyle = ctx.fillStyle
      ctx.fillStyle = '#ff0000'
      ctx.fillText('@' + name, posx, posy)
      ctx.fillStyle = orgStyle
      ctx.beginPath()
      ctx.lineWidth = 8
      ctx.strokeStyle = '#990000'
      ctx.arc(posx - 65, posy - 5, 50, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.stroke()
    },

    drawUserPhoto: function (ctx, src) {
      var posx = 1150
      var posy = 200

      let photoFrame = new Image()
      photoFrame.src = src
      photoFrame.onload = function(){
        ctx.drawImage(photoFrame, posx, posy)
        //const dataURL = document.getElementById('cv').toDataURL('image/png')
        //self.$emit('updated', dataURL)
      }
    },

    drawCheckBox: function (ctx, checked) {
      var posx = 250
      var posy = 815
      var orgStyle = ctx.fillStyle
      ctx.fillStyle = '#ff0000'
      if( checked ){
        ctx.fillText("✔", posx, posy)
      }
      ctx.fillStyle = orgStyle
    },

    displayImage(file, options) {
      loadImage(
        file,
        async (canvas) => {
          const data = canvas.toDataURL(file.type)
          // data_url形式をblob objectに変換
          const blob = this.base64ToBlob(data, file.type)
          // objectのURLを生成
          const url = window.URL.createObjectURL(blob)

          this.resizedProfileImg = url
          this.drawBaseImage()
        },
        options
      );
    },

    base64ToBlob(base64, fileType) {
      const bin = atob(base64.replace(/^.*,/, ''))
      const buffer = new Uint8Array(bin.length)
      for (let i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i)
      }
      return new Blob([buffer.buffer], {
        type: fileType ? fileType : 'image/png'
      });
    },

    emitDataURL: function () {
      const dataURL = document.getElementById('cv').toDataURL('image/png')
      this.$emit('updated', dataURL)
      console.log("emitDataURL")
    }
  },
  updated () {
    console.log("updated")
    this.draw()
    this.emitDataURL()
  }
}
</script>

<style scoped>
canvas {
  margin-top: 10px;
  border: 1px dotted;
}
</style>
