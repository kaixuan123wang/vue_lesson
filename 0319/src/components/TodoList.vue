<template>
  <div id="app">
    <header>
        <h1>TodoList</h1>
        <form action="" v-on:submit.prevent="">
          <input type="text" name="" id="" v-model="addValue" v-on:keyup.enter="add()">
        </form>
    </header>
    <section>
      <div class="inner">
        <h3>正在进行</h3>
        <v-list :todos="todos1" v-on:del="remove($event)" v-on:is="sel($event)"></v-list>
        <h3>已经完成</h3>
        <v-list :todos="todos2" v-on:del="remove($event)" v-on:is="sel($event)"></v-list>
      </div>
    </section>
    <footer>
      <div class="inner">Copyright &copy;2019 wyj@cvit.com.cn</div>
    </footer>
  </div>
</template>
<script>
  import storage from "../assets/storage";
import VList from "./VList.vue";
export default {
  name: "app",
  data() {
    return {
      todos: [
      ],
      addValue:""
    }
  },
  computed: {
    todos1() {
      return this.todos.filter(
        (item)=>(!item.isComplete)
      )
    },
    todos2() {
      return this.todos.filter(
        (item)=>(item.isComplete)
      )
    }
  },
  components: {
    "v-list": VList
  },
  methods:{
    sel(sid){
      this.todos[this.todos.findIndex(
        (item)=>(item.id == sid)
      )].isComplete = !this.todos[this.todos.findIndex(
        (item)=>(item.id == sid)
      )].isComplete
      storage.set("todos",this.todos);
    },
    remove(sid){
      this.todos.splice(this.todos.findIndex(
          (item)=>(item.id == sid)
        ),1);
      storage.set("todos",this.todos);
    },
    add(){
      var max = 0;
      for(var i=0;i<this.todos.length;i++){
        if(this.todos[i].id>=max){  //这里有两种做法
          max = this.todos[i].id + 1;
        }
      }
      this.todos.push({id:max,title:this.addValue,isComplete:false});
      this.addValue = "";
      storage.set("todos",this.todos);
    }
  },
  mounted(){
    var todos = storage.get("todos");
    if(todos){
      this.todos=todos;
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  background: #999;
  height: 50px;
}

header h1 {
  flex: 2;
  text-align: center;
  margin-top: 10px;
  color: #fff;
}

header form {
  flex: 3;
  height: 50px;
}

header>form>input {
  border-radius: 14px;
  height: 30px;
  width: 300px;
  outline: none;
  padding-left: 15px;
  margin: 10px auto;
}

section {
  margin: 0 auto;
  width: 600px;
}

section>h3 {
  margin: 30px 0;
}

footer {
  margin: 10px 0;
  background: #999;
  height: 30px;
  line-height: 30px;
  text-align: center;
}

</style>
