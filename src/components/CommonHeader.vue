<template>
  <div id="CommonHeader">
    <div class="l-content">
      <el-button
        
        @click="hederMenu"
        plain
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- <h3 style="color:#fff">首页</h3> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          class="tagsColor"
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" szie="mini">
        <span>
          <img class="user" :src="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'CommonHeader',
    data () {
      return {
        userImg:require('@/assets/images/user.png')
      }
    },
    computed:{
      ...mapState({
        tags:state=>state.tab.tabsList
      }),
    },
    methods:{
       hederMenu(){
        this.$store.commit('collapseMenu')
      },
      logOut(){
        this.$store.commit('clearToken')
        this.$store.commit('clearMenu')
        this.$router.push('/login')
      },
    },
    
  }
</script>

<style scoped lang="less">
#CommonHeader {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
// 导航面包屑字体样式
.el-breadcrumb__item:last-child ::v-deep .el-breadcrumb__inner{
  color: #fff;
}
.el-breadcrumb__item ::v-deep .el-breadcrumb__inner{
  color: #666;
  font-weight: normal;
}

//  /deep/ .el-breadcrumb__item {
//   .el-breadcrumb__inner {
//     font-weight: normal;
//     &.is-link {
//       color: #666;
//     }
//     a {
//       color: #666;
//     }
//   }
//   &:last-child {
//     .el-breadcrumb__inner {
//       color: #fff;
//     }
//   }
// }
</style>