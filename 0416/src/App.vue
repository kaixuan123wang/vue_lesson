<template>
  <div id="app">
    <nav>
      <router-link to="home">首页</router-link>
      <router-link to="categery">分类</router-link>
      <router-link to="cart">购物车</router-link>
      <router-link to="me">个人信息</router-link>
    </nav>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
