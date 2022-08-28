<template>
    <el-container style="height: 100%;">
      <el-aside width="auto" >
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>
          <common-header></common-header>
        </el-header>
        <CommonTag></CommonTag>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
//左侧导航
import CommonAside from '@/components/CommonAside'
//Header部分
import CommonHeader from '@/components/CommonHeader'
// Tag部分
import CommonTag from '@/components/CommonTag'

export default {
  name: "Main",
  components:{
    CommonAside,
    CommonHeader,
    CommonTag
  },
}
</script>

<style scoped lang="less">

.el-header{
  background-color: #333;
}
.el-main{
  padding-top: 0;
}
</style>