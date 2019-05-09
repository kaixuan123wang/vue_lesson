<template>
  <div id="app">
    <button @click="getData">获取数据</button>
    <button @click="pushData">提交数据</button>
    <ol>
      <li v-for="(item,index) in arr" :key="index">
        <ol>
          <li v-for="i in item">{{i}}</li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      arr:[],
      uri:"http://jsonplaceholder.typicode.com/posts"
    }
  },
  methods:{
    getData(){
       /*
       this.$http.get(this.uri).then((res)=>{
         this.arr = res.body;
       },(err)=>{
         console.log(err);
       });
    */
       var xhr = new XMLHttpRequest();
       xhr.open("GET",this.uri,true);
       xhr.send();
    //将this变到本域
       var _this = this;
       xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                _this.arr = eval(xhr.responseText);
            }
        }
    },
  pushData(){
    this.$http.post(this.uri,{
        userId: 10,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }).then((response)=>{
          console.log(response);
          console.log(response.status);
      },(response)=>{
          console.log(response);
      });
    }
  },
mounted(){
    alert('456');
    this.getData();
    alert('123');
}
}
</script>

<style>

</style>
