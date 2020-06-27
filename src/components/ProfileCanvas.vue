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
import blueimpLoadImage from 'blueimp-load-image';

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
      if( this.profileImage != null ){
        this.resizeImage(this.profileImage, 100, 200).then(this.drawBaseImage)
        //this.loadUserProfileImage(this.profileImage, this.drawBaseImage)
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
      return new Promise((ok) => {
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
              ok(url)
            },
            options
          );
        })
      })
    },

    loadUserProfileImage: function(imageSrc, callback) {
      blueimpLoadImage.parseMetaData(imageSrc, () => {
        const options = {
          maxHeight: 100,
          maxWidth: 100,
          canvas: true
        };
        this.resizeUserProfileImage(imageSrc, options, callback);
      });
    },

    drawBaseImage: function (userProfileImage) {
      console.log("drawBaseImage")
      const cv = document.getElementById('cv')
      const ctx = cv.getContext('2d')
      ctx.font = this.fontSize + 'px' + ' ' + this.textFont
      let profile = userProfileImage
      this.loadImage(this.baseImage).then(res => {
        ctx.drawImage(res, 0, 0)
        this.writeUserName(ctx, this.userName)
        this.writeTwitterName(ctx, this.twitterName)
        this.drawCheckBox(ctx, this.checkBox1)
        if (profile == null) {
          console.log("skip profile update")
          this.emitDataURL()
        }
        else {
          this.drawUserPhoto(ctx, profile)
        }
      }).catch(e => {
        console.log('onload error', e);
      });
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

      this.loadImage(src).then(res => {
        ctx.drawImage(res, posx, posy)
        this.emitDataURL()
      }).catch(e => {
        console.log('onload error', e);
      });
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

    resizeUserProfileImage(file, options, callback) {
      blueimpLoadImage(
        file,
        async (canvas) => {
          const data = canvas.toDataURL(file.type)
          // data_url形式をblob objectに変換
          const blob = this.base64ToBlob(data, file.type)
          // objectのURLを生成
          const url = window.URL.createObjectURL(blob)

          this.resizedProfileImg = url
          callback(this.resizedProfileImg)
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
