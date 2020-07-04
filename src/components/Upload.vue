<template>
  <div>
    <div class="md-title">プロフィール画像をUpload</div>
    <md-field>
      <label>画像を選択</label>
      <md-file v-model="uploadedImage" @md-change="onFileChange(uploadedImage)"/>
    </md-field>
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


