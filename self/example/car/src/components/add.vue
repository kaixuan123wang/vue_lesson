<template>
    <div id="add">
        <p><input type="text" placeholder="输入名称" v-model="name" v-on:keyup.13="$emit('add',name)"></p>
        <p><button v-on:click="$emit('add',name)">添加数据</button></p>
    </div>
</template>

<script>
    export default {
        name: "add",
        data(){
            return{
                name:""
            }
        }
    }
</script>

<style scoped>
    #add{
        width: 30%;
        border:1px solid #000;

    }
    #add p{
        width: 90%;
        margin:5px auto;
    }
    #add p input{
        height: 25px;
        width: 100%;
    }
    #add p button{
        width: 40%;
    }
</style>