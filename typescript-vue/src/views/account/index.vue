<template>
  <div class="account">
    <a-row>
      <a-col :span="12" class="left">
        <left></left>
      </a-col>
      <a-col :span="12" class="right">
        <div v-for="item in 10" :key="item" style="height: 50px"> {{ item }}</div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import left from './components/left.vue'

@Component({
  name: 'account',
  components:{
    left,
  }
})
export default class Index extends Vue {

}
</script>

<style lang="scss" scoped>
.account {
  height: 100%;

  .ant-row {
    height: 100%;

    .ant-col:first-child {
      height: 100%;
      border-right: 1px solid #DCDFE6;
    }

    .left {
      overflow-y: scroll;
    }
  }
}
</style>
