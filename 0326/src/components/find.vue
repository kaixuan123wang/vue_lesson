<template>
    <fieldset>
        <legend>搜索数据</legend>
        <p><label for="find">搜索：</label><input type="search" id="find" v-model="findValue" v-on:keyup="$emit('find',findValue)"></p>
    </fieldset>
</template>
<script>
    export default {
        data(){
            return{
                findValue:""
            }
        },
//        watch:{
//            "findValue":function s(newVal,oldVal){
//                this.$emit('find',newVal)
//            }
//        }
    }
</script>
