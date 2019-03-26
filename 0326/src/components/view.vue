<template>
    <div id="app">
        <v-find v-on:find="find($event)"></v-find>
        <v-add v-on:add="add($event)"></v-add>
        <v-table v-bind:list="findArr" v-bind:th="th" v-on:del="del($event)"></v-table>
    </div>
</template>
<script>
    import find from "./find.vue";
    import add from "./add.vue";
    import table from "./table.vue";
    export default {
        name:"app",
        data(){
          return {
              th:["id","name","age","sex","del"],
              list:[
                  {id:0,name:"Jack",age:30,sex:"Male"},
                  {id:1,name:"Bill",age:26,sex:"Male"},
                  {id:2,name:"Tracy",age:22,sex:"Female"},
                  {id:3,name:"Chris",age:36,sex:"Male"}
              ],
              findArr:[],
          }
        },
        methods:{
          del(id){
              this.list.splice(this.list.findIndex((item)=>(item.id==id)),1);
          },
            add(arr){
              if(arr[0] != "" && arr[1] != "" && arr[2] !=""){
                  var max = 0;
                  if(this.list.length>0){
                      max = Math.max.apply(null,this.list.map((item)=>(item.id)));
                  }
                  max++;
                  this.list.push({id:max,name:arr[0],age:arr[1],sex:arr[2]});
              }
            },
            find(value){
                if(value != "" && value != null){
                    this.findArr = [];
                    this.list.forEach((item) => {
                        if(JSON.stringify(item).indexOf(value) != -1){
                            this.findArr.push(item);
                        }
                    });
                }else{
                    this.findArr = this.list;
                }
            }
        },
        components:{
            "v-table":table,
            "v-find":find,
            "v-add":add
        },
        mounted(){
            this.findArr = this.list;
        }
    }
</script>
<style>

</style>