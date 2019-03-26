<template>
    <fieldset>
        <legend>添加数据</legend>
        <p><label for="name">名字：</label><input type="text" name="name" id="name" v-model="name"></p>
        <p><label for="age">年龄：</label><input type="number" name="age" id="age" v-model="age"></p>
        <p>性别：<input type="radio" name="sex" value="男" checked id="nan" v-model="sex"><label
                for="nan">男</label> <input
                type="radio" name="sex" value="女" id="nv" v-model="sex"><label for="nv">女</label></p>
        <p><button v-on:click="$emit('add',[name,age,sex]),end()">添加</button></p>
    </fieldset>
</template>
<script>
    export default {
        data(){
            return{
                name:"",
                age:"",
                sex:""
            }
        },
        methods:{
            end(){
                this.name="";
                this.age="";
            }
        }
    }
</script>