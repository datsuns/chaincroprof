<template>
  <div class="contents">
    <label v-show="!uploadedImage" class="input-item__label"
      >画像を選択
      <input type="file" @change="onFileChange" />
    </label>
    <div class="preview-item">
      <img
        v-show="uploadedImage"
        class="preview-item-file"
        :src="uploadedImage"
        alt=""
      />
      <div v-show="uploadedImage" class="preview-item-btn" @click="remove">
        <p class="preview-item-name">"image"</p>
        <!--
        <e-icon class="preview-item-icon">close</e-icon>
        -->
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  components: {
  },
  data() {
    return {
      uploadedImage: ''
    };
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
    },
    // アップロードした画像を表示
    createImage(file) {
      console.log(file)
      const reader = new FileReader();
      reader.onload = e => {
        //this.uploadedImage = e.target.result;
        //console.log(e.target.result)
        this.$emit('updated', e.target.result)
      };
      reader.readAsDataURL(file);
    },
    remove() {
      this.uploadedImage = false;
    },
  },
};
</script>


