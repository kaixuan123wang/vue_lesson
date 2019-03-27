<template>
    <div id="app">
        <h1>Hello Vue.js!</h1>
        <li-list v-bind:list="list" v-on:del="del($event)"></li-list>
        <add-list v-on:add="add($event)"></add-list>
    </div>
</template>
<script>
    import VList from "./list";
    import AddList from "./add";
    export default {
        name:"app",
        data(){
            return{
                list:[
                    {id:1,name:"红楼梦",author:"曹雪芹",price:32},
                    {id:2,name:"水浒传",author:"施耐庵",price:30},
                    {id:3,name:"三国演义",author:"罗贯中",price:24},
                    {id:4,name:"西游记",author:"吴承恩",price:20}
                ],
                addValue:""
            }
        },
        methods:{
            del(id){
                this.list.splice(this.list.findIndex((item)=>(item.id==id)),1);
            },
            add(arr){
                if(arr[0]!="",arr[1]!="",arr[2]!=""){
                    var max = 0;
                    if(this.list.length>0){
                        max = Math.max.apply(null,this.list.map((item)=>(item.id)));
                    }
                    max++;
                    this.list.push({id:max,name:arr[0],author:arr[1],price:arr[2]});
                }else{
                    alert("请输入完整内容");
                }

            }
        },
        components:{
            "li-list":VList,
            "add-list":AddList
        }
    }
</script>
<style>
    #app{
        width: 80%;
        margin:5px auto;
    }
</style>