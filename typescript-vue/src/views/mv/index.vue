<template>
  <div class="found">
    <a-row>
      <a-col :span="16">
        <a-row class="tabs">
          <a-col v-for="tab in tabsData" :key="tab.key" :span="5"
           :class="tabsKey === tab.key ? 'tabActive': ''"
           @click.native="tabsChange(tab.key, tab.tabPath)"
           >
            {{ tab.name }}
           </a-col>
        </a-row>
      </a-col>
      <a-col :span="6">
        <a-input :allowClear="true"  placeholder="Basic usage" />
      </a-col>
      <a-col :span="2"></a-col>
    </a-row>
    <a-row class="content">
      <router-view></router-view>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface tabsConfig {
  key: number,
  name:  string,
  tabPath: string
}

@Component({
  name: '',
  components: {}
})
export default class Index extends Vue {
  tabsKey:number = 1

  tabsData: Array<tabsConfig> = [
    {
      key: 1,
      name: 'MV精选',
      tabPath: '/mv'
    },
    {
      key: 2,
      name: '网易独家',
      tabPath: '/mv/exclusive'
    },
    {
      key: 3,
      name: '全部MV',
      tabPath: '/mv/all'
    }
  ]

  tabsChange (val: number, path: string) {
    this.tabsKey = val
    this.$router.push(path)
  }
}
</script>

<style lang="scss" scoped>
.found {
  height: 100%;

  .ant-row:first-child {
    height: 64px;
    border-bottom: 1px solid #DCDFE6;

    .ant-col {
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;

      .tabs {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .tabActive {
          color: rgba(255,0,0,.5);
          border-bottom: 1px solid rgba(255,0,0,.5);
        }
      }
    }

    .ant-col {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }

  .content {
    padding: 20px 20px 0 20px;
    overflow-y: scroll;
  }
}
</style>
