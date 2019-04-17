<template>
  <div id="app">
    <button @click="getData">获取数据</button>
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
      arr:[]
    }
  },
  methods:{
    getData(){
      var uri = "http://jsonplaceholder.typicode.com/posts";

      this.$http.post(uri,{
        "userId": 10,
        "id": 101,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }).then((response)=>{
          console.log(response.body);
          console.log(response.status);
      },(response)=>{

      });
      // this.$http.get(uri).then((res)=>{
      //   this.arr = res.body;
      // },(err)=>{
      //   console.log(err);
      // });
    }
  }
}
</script>

<style>

</style>
