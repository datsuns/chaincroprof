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
      {{ userPhotoStartX }}
      {{ userPhotoStartY }}

      {{ baseImage }}
      {{ userName }}
      {{ friendID }}
      {{ twitterName }}
      {{ charactorName }}
      {{ profileImage }}
      {{ checkBox1 }}
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import blueimpLoadImage from 'blueimp-load-image';

export default {
  name: 'ProfileCanvas',
  props: {
    height: Number,
    width: Number,
    userPhotoStartX: Number,
    userPhotoStartY: Number,
    fontSize: Number,
    textFont: String,
    baseImage: String,
    userName: String,
    friendID: String,
    twitterName: String,
    charactorName: String,
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

  updated () {
    console.log("updated")
    this.draw()
    this.emitDataURL()
  },

  methods: {
    draw: function () {
      if( this.profileImage != null ){
        this.resizeImage(this.profileImage, 500, 800).then(this.drawBaseImage)
      }
      else{
        this.drawBaseImage(null)
      }
    },

    loadImage: function(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (e) => reject(e);
        img.src = src;
        });
    },

    resizeImage: function(src, x, y) {
      console.log("resize start")
      return new Promise((loaded) => {
        blueimpLoadImage.parseMetaData(src, () => {
          const options = {
            maxHeight: x,
            maxWidth: y,
            canvas: true
          }

          blueimpLoadImage(
            src,
            async (canvas) => {
              const data = canvas.toDataURL(src.type)
              // data_url形式をblob objectに変換
              const blob = this.base64ToBlob(data, src.type)
              // objectのURLを生成
              const url = window.URL.createObjectURL(blob)

              //this.resizedProfileImg = url
              //ok(this.resizedProfileImg)
              console.log("resize done")
              loaded(url)
            },
            options
          );
        })
      })
    },

    drawBaseImageMain: function (ctx) {
      this.loadImage(this.baseImage).then(res => {
        ctx.font = this.fontSize + 'px' + ' ' + this.textFont
        ctx.drawImage(res, 0, 0)
        this.writeUserName(ctx, this.userName)
        this.writeFriendID(ctx, this.friendID)
        this.writeTwitterName(ctx, this.twitterName)
        this.writeCharactorName(ctx, this.charactorName)
        this.drawCheckBox(ctx, this.checkBox1)
        this.emitDataURL()
      }).catch(e => {
        console.log('onload error', e);
      })
    },

    drawBaseImage: function (userProfileImage) {
      console.log("drawBaseImage")
      const cv = document.getElementById('cv')
      const ctx = cv.getContext('2d')
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, this.width, this.height)

      if (userProfileImage == null ){
        this.drawBaseImageMain(ctx)
      }
      else{
        var x = this.userPhotoStartX
        var y = this.userPhotoStartY
        this.drawUserPhoto(ctx, userProfileImage, x, y).then(this.drawBaseImageMain)
      }
    },

    writeSimpleText: function (ctx, s, x, y) {
      var orgStyle = ctx.fillStyle
      ctx.fillStyle = '#ff0000'
      ctx.fillText(s, x, y)
      ctx.fillStyle = orgStyle
    },

    writeUserName: function (ctx, name) {
      var posx = 750
      var posy = 250
      this.writeSimpleText(ctx, name, posx, posy)
    },

    writeFriendID: function (ctx, name) {
      var posx = 750
      var posy = 340
      this.writeSimpleText(ctx, name, posx, posy)
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
      //ctx.beginPath()
      //ctx.lineWidth = 8
      //ctx.strokeStyle = '#990000'
      //ctx.arc(posx - 65, posy - 5, 50, 0, Math.PI * 2, true)
      //ctx.closePath()
      //ctx.stroke()
    },

    writeCharactorName: function (ctx, name) {
      var posx = 750
      var posy = 430
      this.writeSimpleText(ctx, name, posx, posy)
    },

    drawUserPhoto: function (ctx, src, x, y) {
      return new Promise((loaded) => {
        this.loadImage(src).then(res => {
          ctx.drawImage(res, x, y)
          loaded(ctx)
        }).catch(e => {
          console.log('onload error', e)
        })
      })
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
      //console.log(dataURL)
      this.$emit('updated', dataURL)
    }
  },
}
</script>

<style scoped>
canvas {
  margin-top: 10px;
  border: 1px dotted;
}
</style>
