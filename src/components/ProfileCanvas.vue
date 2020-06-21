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
      console.log("draw")
      //console.log("profileImage " + this.profileImage) 
      const cv = document.getElementById('cv')
      const ctx = cv.getContext('2d')
      //ctx.clearRect(0, 0, this.width, this.height)
      ctx.font = this.fontSize + 'px' + ' ' + this.textFont
      //if (this.isTransparent) {
      //  ctx.clearRect(0, 0, this.width, this.height)
      //} else {
      //  ctx.fillStyle = this.backgroundColor
      //  ctx.fillRect(0, 0, this.width, this.height)
      //}
      //ctx.fillStyle = this.foregroundColor
      //ctx.textAlign = 'center'
      //ctx.textBaseline = this.baseline
      //ctx.save()
      //ctx.translate(this.width / 2, this.height / 2)
      //ctx.rotate(this.angle * Math.PI / 180)
      //ctx.fillText(this.text, 0, 0)
      //ctx.lineWidth = 20
      //ctx.moveTo(0, 0)
      //ctx.lineTo(50, 50)
      //ctx.stroke()
      //ctx.restore()


      let self = this
      let usename = this.userName
      let twittername = this.twitterName
      let fWriteUser = this.writeUserName
      let fWriteTwitter = this.writeTwitterName
      let userPhotoFunc = this.drawUserPhoto
      let checkBoxFunc = this.drawCheckBox
      let checkd = this.checkBox1
      let frame = new Image()
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
