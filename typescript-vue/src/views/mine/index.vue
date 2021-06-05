<template>
  <div class="mine">
    <a-row>
      <a-col :span="12">left</a-col>
      <a-col :span="12">right</a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: '',
  components: {}
})
export default class Index extends Vue {
  
}
</script>

<style lang="scss" scoped>
.mine {
  height: 100%;

  .ant-row {
    height: 100%;

    .ant-col:first-child {
      height: 100%;
      border-right: 1px solid #DCDFE6;
    }
  }
}
</style>
