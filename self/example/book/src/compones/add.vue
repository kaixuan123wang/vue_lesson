<template>
    <div id="add">
        <h2>添加书籍</h2>
        <ul>
            <li>书名</li>
            <li><input type="text" v-model="name"></li>
            <li>作者</li>
            <li><input type="text" v-model="author"></li>
            <li>价格</li>
            <li><input type="number" v-model="price"></li>
            <li>
                <button v-on:click="$emit('add',[name,author,price]),end()">添加</button>
            </li>
        </ul>
    </div>

</template>
<script>
    export default {
        data(){
            return{
                name:"",
                author:"",
                price:""
            }
        },
        methods:{
            end(){
                this.name = "";
                this.author = "";
                this.price = "";
            }
        }
    }
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    #add{
        width: 100%;
        text-align: left;
        margin:25px auto;
    }
    #add h2{
        padding-bottom:5px;
        border-bottom:1px solid #ccc;
        font-weight: initial;
    }
    #add li{
        list-style:none;
        margin:5px auto;
    }
    #add li input{
        height: 25px;
        border-radius:3px;
        border:1px solid #999;
        outline:none;
        width: 100%;
    }
    #add ul li button{
        width: 100%;
        background: #4b86c7;
        height: 35px;
        border:1px solid #fff;
        border-radius:5px;
        color:#fff;
    }
</style>