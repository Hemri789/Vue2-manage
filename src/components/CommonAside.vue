<template>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <h3>{{isCollapse ? '后台':'通用后台管理系统'}}</h3>
      <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path+''" :key="item.path">
        <i :class="'el-icon-'+ item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :index="item.path+''" :key="item.path">
        <template slot="title">
          <i :class="'el-icon-'+item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="(itemChildren,itemIndex) in item.children" :key="itemChildren.path">
          <!-- <i :class="'el-icon-'+itemChildren.icon"></i> -->
          <el-menu-item @click="clickMenu(itemChildren)" :index="itemIndex+''">{{itemChildren.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: [],
      defaultActive:'/home'
    };
  },
  created(){
    //进首页默认第一个导航Menu为高亮
    this.defaultActive = this.$route.path
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    clickMenu(item){
      this.$router.push({
        name:item.name,
      })
      this.$store.commit('selectMenu',item)
    },
  },
  computed:{
    noChildren(){
      return this.asyncMenu.filter(item => !item.children)
    },
    hasChildren(){
      return this.asyncMenu.filter(item => item.children)
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    },
    asyncMenu(){
      return this.$store.state.tab.menu
    }
  },
};
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height: 100%;
  border: none;
  h3{
    color: #fff;
    text-align:center;
    line-height: 48px;
  }
}
</style>