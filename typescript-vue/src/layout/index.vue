<template>
  <div class="app-container flex">
    <a-row class="app-sider border">
      <a-col v-for="menu in menuArray" :key="menu.id">
        <router-link :to="menu.path" class="menu" active-class="menu-active">{{ menu.name }}</router-link>
      </a-col>
    </a-row>
    <a-row class="app-content border">
      <router-view></router-view>
    </a-row>
    <a-drawer
      placement="bottom"
      :closable="false"
      :visible="false"
      height="100px"
      :mask="false"
    >
      footer
    </a-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface menuConfig {
  id: number,
  path: string,
  name: string,
  menuIcon: string
}

@Component({
  name: '',
  components:{}
})
export default class Layout extends Vue {

  private menuArray:Array<menuConfig>  = [
    {
      id: 1,
      path: '/found',
      name: '发现',
      menuIcon: 'hello'
    },
    {
      id: 2,
      path: '/mv',
      name: 'MV',
      menuIcon: 'hello'
    },
    {
      id: 3,
      path: '/mine',
      name: '我的',
      menuIcon: 'hello'
    },
    {
      id: 4,
      path: '/firend',
      name: '朋友',
      menuIcon: 'hello'
    },
    {
      id: 5,
      path: '/account',
      name: '账号',
      menuIcon: 'hello'
    },
    {
      id: 6,
      path: '/private',
      name: '私人FM',
      menuIcon: 'hello'
    },
  ]

  tabMenu (menu: menuConfig) {
    this.$router.push(menu.path)
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;

  .app-sider {
    min-width: 120px;
    flex: 2;
    background: #eee;
    border-right:1px solid #DCDFE6;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .ant-col {
      .menu {
        color: #909399;
      }

      .menu-active {
        color: rgba(255,0,0,.5);
      }
    }
  }

  .app-content {
    flex: 22;
  }
}
</style>
