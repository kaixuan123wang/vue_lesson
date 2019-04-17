<template>
    <div id="app">
        <v-find v-on:find="find($event)"></v-find>
        <v-add v-on:add="add($event)"></v-add>
        <v-table v-bind:list="list.concat(findArr)" v-bind:th="th" v-on:del="del($event)" v-on:sort="sort($event)"></v-table>
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
              th:["id","name","age","sex"],
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
              localStorage.setItem('list',JSON.stringify(this.findArr));
          },
            add(arr){
              if(arr[0] != "" && arr[1] != "" && arr[2] !=""){
                  var max = 0;
                  if(this.list.length>0){
                      max = Math.max.apply(null,this.list.map((item)=>(item.id)));
                  }
                  max++;
                  this.findArr.push({id:max,name:arr[0],age:arr[1],sex:arr[2]});
                  localStorage.setItem('list',JSON.stringify(this.findArr));
              }
            },
            find(value){
                if(value != "" && value != null){
                    this.findArr = [];
                    this.list.forEach((item) => {
                        if(item.id.toString().indexOf(value) != -1 || item.name.indexOf(value) != -1 || item.age.toString().indexOf(value) != -1 || item.sex.indexOf(value) != -1){
                            this.findArr.push(item);
                        }
                    });
                    // this.findArr = this.list.filter((item)=>{
                    //     var reg = new RegExp(value,'i');
                    //     return (reg.test(item.id) || reg.test(item.name) || reg.test(item.age) || reg.test(item.sex))
                    // })
                }else{
                    this.findArr = this.list;
                }
            },
            sort(dict){
                var col = dict.col,updown = dict.desc;
                function compare(prop,desc){
                    return function(item1,item2){
                        if(prop=="age" || prop=="id"){
                            if(desc.box1){
                                return item1[prop]-item2[prop];
                            }else{
                                return item2[prop]-item1[prop];
                            }

                        }else{
                            if(desc.box1){
                                return item1[prop].localeCompare(item2[prop]);
                            }else{
                                return item2[prop].localeCompare(item1[prop]);
                            }
                        }
                    }
                }
                this.findArr.sort(compare(col,updown));
            }
        },
        components:{
            "v-table":table,
            "v-find":find,
            "v-add":add
        },
        mounted(){
            if(localStorage.getItem('list')){
                this.findArr = JSON.parse(localStorage.getItem("list"));
            }

        }
    }
</script>
<style>

</style>