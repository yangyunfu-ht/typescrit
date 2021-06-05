<template>
  <div class="account-left">
    <a-row class="header">账号</a-row>
    <a-row class="user-info">
      <a-col :span="6">
         <a-avatar :size="64" :src="userAvatar" icon="user" />
      </a-col>
      <a-col :span="12">{{ userName }}</a-col>
      <a-col :span="6">
        <a-button icon="edit">编辑</a-button>
      </a-col>
    </a-row>
    <a-row class="fans">
      <a-col :span="8">
        <a-col class="title">动态</a-col>
        <a-col class="num"></a-col>
      </a-col>
      <a-col :span="8" class="attention">
        <a-col class="title">关注</a-col>
        <a-col class="num"></a-col>
      </a-col>
      <a-col :span="8">
        <a-col class="title">粉丝</a-col>
        <a-col class="num"></a-col>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Avatar, Button } from 'ant-design-vue'
import http from '../../../api/index'

Vue.use(Avatar).use(Button)
@Component({})
export default class left extends Vue{

  private userName:string = ''
  private userAvatar:string = ''


  created () {
    this.getUserInfo()
  }

  async getUserInfo () {
    const { data } = await http.userInfo()
    const { code, profile } = data
    if (code === 200) {
      console.log(profile)
      this.userName = profile.nickname
      this.userAvatar = profile.avatarUrl
    }
  }

}
</script>



<style lang="scss" scoped>
.account-left {
  .header {
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #DCDFE6;
  }

  .user-info {
    height: 100px;
    
    .ant-col {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .fans {
    height: 64px;

    .ant-col-8 {
      border-top: 1px solid #DCDFE6;
      border-bottom: 1px solid #DCDFE6;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .attention {
      border-left:1px solid #DCDFE6;
      border-right:1px solid #DCDFE6;
    }
  }
}
</style>