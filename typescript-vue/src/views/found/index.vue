<template>
  <div class="found">
    <a-row>
      <a-col :span="14">
        <a-row class="tabs">
          <a-col v-for="tab in tabsData" :key="tab.key" :span="4"
           :class="tabsKey === tab.key ? 'tabActive': ''"
           @click.native="tabsChange(tab.key, tab.tabPath)"
           >
            {{ tab.name }}
           </a-col>
        </a-row>
      </a-col>
      <a-col :span="8">
        <a-input :allowClear="true" placeholder="Basic usage" />
      </a-col>
      <a-col :span="2">
        <a-icon type="audio" />
        <a-icon type="appstore" />
      </a-col>
    </a-row>
    <a-row class="content">
      <router-view></router-view>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import http from '../../api/index'

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
  private tabsKey:number = 1

  created () {
    this.getTopic(4)
  }

  async getTopic (limit: number):Promise<any> {
    const data = await http.hotTopic(limit)
    console.log(data)
  }

  tabsData: Array<tabsConfig> = [
    {
      key: 1,
      name: '推荐',
      tabPath: '/found'
    },
    {
      key: 2,
      name: '歌单',
      tabPath: '/found/songList'
    },
    {
      key: 3,
      name: '电台',
      tabPath: '/found/radioStation'
    },
    {
      key:4,
      name: '排行榜',
      tabPath: '/found/leaderBoard'
    },
    {
      key: 5,
      name: '新歌',
      tabPath: '/found/newSong'
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
