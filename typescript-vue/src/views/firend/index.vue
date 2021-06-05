<template>
  <div class="firend">
    <a-row>
      <a-col :span="18">
        <div class="header">{{ headerTitle }}</div>
      </a-col>
      <a-col :span="6">
        <div class="subHeader">{{ subHeaderTitle }}</div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Index extends Vue {
  private headerTitle: string = '朋友动态'
  private subHeaderTitle: string = '添加关注'
}
</script>

<style lang="scss" scoped>
.firend {
  height: 100%;

  .ant-row:first-child {
    height: 100%;
    .ant-col-18 {
      height: 100%;
      overflow-y: scroll;

      .header {
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid #DCDFE6;
      }
    }
    .ant-col-6 {
      height: 100%;
      border-left: 1px solid #DCDFE6;

      .subHeader {
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
      }
    }
  }
}
</style>
