<template>
  <div>
    <canvas
      id="cv"
      :height="height"
      :width="width"
    >
    </canvas>
    <div hidden>
      {{ textFont }}
      {{ textColor }}
      {{ userPhotoStartX }}
      {{ userPhotoStartY }}

      {{ baseImage }}
      {{ userName }}
      {{ friendID }}
      {{ twitterName }}
      {{ charactorName }}
      {{ messageText }}
      {{ profileImage }}
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
    textFont: String,
    textColor: String,
    baseImage: String,
    userName: String,
    friendID: String,
    twitterName: String,
    charactorName: String,
    messageText: String,
    profileImage: String,
  },

  mounted () {
    this.draw()
    this.emitDataURL()
  },

  updated () {
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
        this.writeCharactorName(ctx, this.charactorName)
        this.writeMessageText(ctx, this.messageText)
        this.emitDataURL()
      }).catch(e => {
        console.log('onload error', e);
      })
    },

    clearImageArea: function (ctx) {
      const orgStyle = ctx.fillStyle
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, this.width, this.height)
      ctx.fillStyle = orgStyle
    },

    drawBaseImage: function (userProfileImage) {
      const cv = document.getElementById('cv')
      const ctx = cv.getContext('2d')

      this.clearImageArea(ctx)

      if (userProfileImage == null ){
        this.drawBaseImageMain(ctx)
      }
      else{
        const x = this.userPhotoStartX
        const y = this.userPhotoStartY
        this.drawUserPhoto(ctx, userProfileImage, x, y).then(this.drawBaseImageMain)
      }
    },

    writeSimpleText: function (ctx, s, x, y) {
      const orgStyle = ctx.fillStyle
      ctx.fillStyle = this.textColor
      ctx.fillText(s, x, y)
      ctx.fillStyle = orgStyle
    },

    writeUserName: function (ctx, name) {
      const fontSize = 50
      const posx = 730
      const posy = 250

      ctx.font = fontSize + 'px' + ' ' + this.textFont
      this.writeSimpleText(ctx, name.slice(0, 6), posx, posy)
    },

    writeFriendID: function (ctx, name) {
      const fontSize = 40
      const posx = 730
      const posy = 340

      ctx.font = fontSize + 'px' + ' ' + this.textFont
      this.writeSimpleText(ctx, name, posx, posy)
    },

    writeCharactorName: function (ctx, name) {
      const p = function(len) {
        if(len <= 6){
          return {x:710, y:430, fontSize:50}
        }
        else{
          return {x:530, y:432, fontSize:25}
        }
      }(name.length)

      ctx.font = p.fontSize + 'px' + ' ' + this.textFont
      this.writeSimpleText(ctx, name, p.x, p.y)
    },

    writeMessageText: function (ctx, text) {
      const fontSize = 30
      const posx = 530
      const posy = [530, 565, 600]
      const maxLen = 16
      const lines = text.split("\n")

      ctx.font = fontSize + 'px' + ' ' + this.textFont
      if( lines.length >= 1 ){
        this.writeSimpleText(ctx, lines[0].slice(0, maxLen), posx, posy[0])
      }
      if( lines.length >= 2 ){
        this.writeSimpleText(ctx, lines[1].slice(0, maxLen), posx, posy[1])
      }
      if( lines.length >= 3 ){
        this.writeSimpleText(ctx, lines[2].slice(0, maxLen), posx, posy[2])
      }
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
    }
  },
}
</script>

<style scoped>
canvas {
  margin-top: 10px;
}
</style>
