<template>
  <div id="app">
    <header>
      <h1>
        ToDoList
      </h1>
      <form action="" v-on:submit.prevent="">
        <input type="text" placeholder="添加ToDo" v-model="addValue" v-on:keyup.enter="add()">
      </form>
    </header>
    <section>
    <div class="top">
    	<h2>正在进行</h2>
    	<div v-model="is">
    		{{counter[1]}}
    	</div>
    </div>
      
      <v-list v-bind:todos="todos1" v-on:del="del($event)" v-on:sel="sel($event)"></v-list>
      <div class="top">
      	<h2>已经完成</h2>
      	<div>
      		{{counter[0]}}
      	</div>
      </div>
      <v-list v-bind:todos="todos2" v-on:del="del($event)" v-on:sel="sel($event)"></v-list>
    </section>
    <footer>
      <p>
        Copyright &copy; 2014 todolist.cn 
        <a href="#" v-on:click="all()">clear</a>
      </p>
    </footer>
  </div>
</template>
<script>
	import Storage from "../modules/storage.js";
	console.log(Storage);
	import VList from "./VList";
	export default {
		name:"app",
		data(){
			return {
				todos:[
				],
				addValue:"",
				is:"",
				not:""
			}
		},
		computed:{
			todos1(){
				return this.todos.filter(
						(item)=>(!item.isComplete)
					)
			},
			todos2(){
				return this.todos.filter(
						(item)=>(item.isComplete)
					)
			},
			counter(){
                let c = [0,0];
                this.todos.forEach(function(item,index){
                    if(item.isComplete){
                        c[0] += 1;
                    }else{
                        c[1] += 1;
                    }
                });
                return c;
            }
		},
		methods:{
			sel(sid){
				this.todos[this.todos.findIndex((item)=>(item.id == sid))].isComplete = !this.todos[this.todos.findIndex((item)=>(item.id == sid))].isComplete;
				Storage.set("todos",this.todos);
			},
			del(sid){
				this.todos.splice(this.todos.findIndex((item)=>(item.id == sid)),1);
				Storage.set("todos",this.todos);
			},
			add(){
				var max = Math.max.apply(null,this.todos.map((item)=>(item.id)));
				// for(var i=0;i<this.todos.length;i++){
				// 	if(this.todos[i].id > max){
				// 		max = this.todos[i].id;
				// 	}
				// }
				max++;
				this.todos.push({id:max,title:this.addValue,isComplete:false});
				this.addValue = "";
				Storage.set("todos",this.todos);
			},
			all(){
				this.todos = [];
				Storage.set("todos",this.todos);
			}
		},
		components:{
			"v-list":VList
		},
		mounted(){
			var todos = Storage.get("todos");
			if(todos){
				this.todos = todos;
			}
		}
	}
</script>
<style>
*{
	margin: 0;
	padding: 0;
}
body{
	background: #ccc;
}
header{
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-around;
	background: #999;
	height: 50px;
	line-height: 50px;
}
header h1{
	flex: 2;
	text-align: center;
	color: #fff;
}
header form{
	flex: 3;
}
header form input{
	height: 20px;
	line-height: 20px;
	width: 300px;
	border-radius: 8px;
	outline: none;
	padding: 5px;
	margin-bottom: 15px;
}
section{
	width: 600px;
	margin: 0 auto;
}
section h2{
	display: block;
	width: 100%;
	line-height: 50px;
}
section .top{
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	height: 50px;
	line-height: 50px;
}
footer{
	width: 100%;
	text-align: center;
	margin-top: 20px;
	margin-bottom: 20px;
}
footer p{
	padding: 20px;
}
footer a{
	color: #808080;
	text-decoration: none;
}
</style>
