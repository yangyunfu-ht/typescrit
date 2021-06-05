<template>
  <div class="private">
    <a-drawer
      placement="bottom"
      :closable="false"
      :visible="visible"
      height= "100%"
    >
      <header class="header">1111</header>
    </a-drawer>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component()
export default class Index extends Vue {
  visible = false

  created () {
    setTimeout(() => {
      this.visible = !this.visible
    }, 0.5 * 100)
  }
}
</script>

<style lang="scss" scoped>
</style>
