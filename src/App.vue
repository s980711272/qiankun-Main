<template>
  <div id="app">
    <el-menu :router="true" mode="horizontal" :default-active="activeIndex" v-model="activeIndex"  @select="handleSelect">
      <!--基座中可以放自己的路由-->
      <el-menu-item index="/">父应用</el-menu-item>
      <!--引用其他子应用-->
      <el-menu-item index="/vue/goods/compliance">A应用合规</el-menu-item>
      <el-menu-item index="/vue/goods/goodsData">A应用数据库</el-menu-item>
      <el-menu-item index="/child/goods/declare">B应用申报</el-menu-item>
      <el-menu-item index="/child/goods/appeal">B应用申诉</el-menu-item>
    </el-menu>

    <div id="vue"></div>
    <div id="child"></div>
  </div>
</template>

<script>
import { start } from 'qiankun';

export default {
  name: 'App',
  data(){
    return{
      activeIndex: '/',
      routeKey: ''
    }
  },
  computed:{
    // isShowVue(){
    //   return this.routeKey.indexOf('/vue') !== -1 
    // },
    // isShowChild(){
    //   return this.routeKey.indexOf('/child') !== -1 
    // }
  },
  methods:{
    handleSelect(key){
      this.routeKey = key
    }
  },
  mounted(){
    start()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
