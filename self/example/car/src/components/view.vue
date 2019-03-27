<template>
    <div id="app">
        <add-list v-on:add="add($event)"></add-list>
        <show-list v-bind:list="list" v-on:del="del($event)"></show-list>
    </div>
</template>
<script>
    import AddList from "./add";
    import VList from "./show";
    export default {
        name:"app",
        data(){
            return{
                list:[
                    {id:1,name:"宝马",date:"2017-12-27 16:26"},
                    {id:2,name:"奔驰",date:"2017-12-27 16:24"}
                ],
                addValue:""
            }
        },
        methods:{
          del(id){
              this.list.splice(this.list.findIndex((item)=>(item.id==id)),1);
          },
            add(name){
              var max = 0;
              if(this.list.length>0){
                  max = Math.max.apply(null,this.list.map((item)=>(item.id)));
              }
              max++;
              var date=new Date();
              var year = date.getFullYear();
              var month = date.getMonth();
              var day = date.getDate();
              var hour = date.getHours();
              var min = date.getMinutes();
              if(month<10){
                  month = "0"+ month;
              }
              if(day<10){
                  day = "0"+ day;
              }
              if(hour<10){
                  hour = "0" + hour;
              }
              if(min<10){
                  min = "0" + min;
              }
              var dateStr = year+"-"+month+"-"+day+" "+hour+":"+min;
              this.list.push({id:max,name:name,date:dateStr});
            }
        },
        components:{
            "show-list":VList,
            "add-list":AddList
        }
    }
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
    #app{
        display: flex;
        flex-flow:row nowrap;
        justify-content:space-between;
        width: 100%;
    }
</style>