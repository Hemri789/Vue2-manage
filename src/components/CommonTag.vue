<template>
  <div class="tabs">
    <el-tag 
      size="small"
      v-for="(tag,index) in tags" :key="tag.name"
      :closable ="tag.name !== 'home'"
      :effect="$route.name === tag.name? 'dark':'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag,index)">
      <i :class="`el-icon-${tag.icon}`"></i>
      {{tag.label}}
    </el-tag>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

  export default {
    name: 'CommonTag',
    data () {
      return {

      }
    },
    computed:{
      ...mapState({
        tags:state=>state.tab.tabsList
      })
    },
    methods:{
      ...mapMutations({
        close:'closeTag'
      }),
      changeMenu(tag){
        this.$router.push({name:tag.name})
      },
      handleClose(tag,index) {
        const length = this.tags.length-1
        this.close(tag)
        if (tag.name !== this.$route.name) {
          return
        }
        if (index === length) {
          this.$router.push({
            name:this.tags[index-1].name
          })
        }else{
          this.$router.push({
            name:this.tags[index].name
          })
        }
      },
    }
  }
</script>

<style scoped lang="less">
.tabs{
  margin:15px 0 15px 10px;
  .el-tag{
    margin-left:15px;
    cursor: pointer;
  }
}
</style>