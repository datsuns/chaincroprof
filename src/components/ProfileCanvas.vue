<template>
  <div>
    <canvas
      id="cv"
      :height="height"
      :width="width"
    >
    </canvas>
    <div hidden>
      {{ backgroundColor }}
      {{ foregroundColor }}
      {{ text }}
      {{ size }}
      {{ font }}
      {{ baseline }}
      {{ isTransparent }}
      {{ angle }}
      {{ profileImage }}
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
    foregroundColor: String,
    backgroundColor: String,
    text: String,
    size: Number,
    font: String,
    baseline: String,
    angle: Number,
    isTransparent: Boolean,
    baseImage: String,
    checkImage: String,
    profileImage: String
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
      ctx.font = this.size + 'px' + ' ' + this.font
      //if (this.isTransparent) {
      //  ctx.clearRect(0, 0, this.width, this.height)
      //} else {
      //  ctx.fillStyle = this.backgroundColor
      //  ctx.fillRect(0, 0, this.width, this.height)
      //}
      ctx.fillStyle = this.foregroundColor
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


      let showText = this.text
      let target = this
      let frame = new Image()
      //let checkImage = this.checkImage
      let profile = this.profileImage
      frame.src = this.baseImage
      frame.onload = function(){
        console.log("onload " + showText)
        ctx.drawImage(frame, 0, 0)
        ctx.fillText(showText[0], 36 + target.size, 58)
        ctx.fillText(showText[1], 150, 58)
        ctx.fillText(showText[2], 200, 58)
        ctx.fillText(showText[3], 250, 58)
        ctx.fillText(showText[4], 300, 58)
        ctx.fillText("文字を埋める", 200, 358)
        ctx.beginPath()
        ctx.lineWidth = 10
        ctx.strokeStyle = '#ff0000'
        ctx.arc(390, 565, 50, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.stroke()
        console.log("onload done")
        if (profile == null) {
          const dataURL = document.getElementById('cv').toDataURL('image/png')
          target.$emit('updated', dataURL)
        }
        else {
          let okFrame = new Image()
          okFrame.src = profile
          okFrame.onload = function(){
            console.log("ok!!")
            ctx.drawImage(okFrame, 0, 0)
            const dataURL = document.getElementById('cv').toDataURL('image/png')
            target.$emit('updated', dataURL)
          }
        }
      }


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
