<template>
  <div id="app">
    <todo-list></todo-list>       
  </div>
</template>

<script>
  //引入组件Todolist.vue
  import TodoList from "./components/TodoList.vue";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  components:{//注册组件
    "todo-list":TodoList
  }
}
</script>
  
<style>

</style>
