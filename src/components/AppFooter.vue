<template>
  <div>
    <md-card class="md-primary" width="200px">
      <md-card-header>
        <div class="md-title">ベースの画像は公式サイトのものを利用しています</div>
      </md-card-header>

      <md-card-actions>
        <md-button align="center" href="http://chronicle.sega-net.com/7th_chain/">公式サイトへ</md-button>
      </md-card-actions>
    </md-card>

    <md-card>
      <md-card-content>
        <a href="https://twitter.com/datsuns" target="_blank">by @datsuns</a>
        <br>
        <a href="https://github.com/chainchroprof/prof7th" target="_blank">source code(github)</a>
      </md-card-content>
    </md-card>

    <md-card>
      <md-dialog :md-active.sync="showChangeLog">
        <md-dialog-title>更新履歴</md-dialog-title>

        <md-tab md-label="General">
          <p>2020.07.05: フォント変えられまっせー</p>
          <p>2020.07.04: とりあえず作りましたぜー</p>
        </md-tab>

        <md-dialog-actions>
          <md-button class="md-primary" @click="showChangeLog = false">閉じる</md-button>
        </md-dialog-actions>
      </md-dialog>
      <md-button class="md-primary md-raised" @click="showChangeLog = true">更新履歴</md-button>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'AppFooter',
    data: () => ({
      showChangeLog: false
    })
  }
</script>

<style lang="scss" scoped>
  .md-card {
    margin: 2px;
    display: inline-block;
  }
</style>
