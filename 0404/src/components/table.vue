<template>
    <table cellspacing="0" border="1">
        <caption>个人信息</caption>
        <thead>
            <tr>
                <th v-for="(n,index) in th" v-on:click="pai(n,index),show(index)">{{n}} <div class="jian"><div v-bind:class="color?['box2','color2']:['box2','color4']" v-if="num==index"></div><div v-bind:class="color?['box1','color3']:['box1','color1']" v-if="num==index"></div></div></th>
                <th>del</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="li in list" :key="li.id">
                <td v-for="(l) in li">{{l}}</td>
                <td><button v-on:click="$emit('del',li.id)">删除</button></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    export default {
        props:["list","th"],
        data(){
            return{
                sortClass: {
                        box1:true,
                        box2:false
                    },
                num:0,
                color:true,
            }
        },
        methods:{
            pai(n,index){
                this.sortClass.box1 = !this.sortClass.box1;
                this.sortClass.box2 = !this.sortClass.box2;
                // if(index == this.num){
                //     this.color=!this.color;
                // }else{
                //     this.color=true;
                // }
                index==this.num?this.color=!this.color:this.color=true;
                this.$emit('sort',{col:n,desc:this.sortClass});
            },

            show(index){
                this.num = index;
            }
        },
    }
</script>
<style>
    table{
        width:100%;
        text-align: center;
    }
    table th{

    }
    table th:hover{
        cursor: pointer;
    }
    table td{
        width: 20%;
    }
    .jian{
        display: inline-flex;
        flex-flow:column nowrap;
        justify-content: center;
        margin-bottom: 8px;
        vertical-align:top;
        margin-top:5px;
    }
    .box1{
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 6px 0 6px;
    }
    .box2{
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 6px 10px 6px;
    }
    .color1{
        border-color:#f00 #fff #fff #fff;
    }
    .color3{
        border-color:#0f0 #fff #fff #fff;
    }
    .color2{
        border-color:#fff #fff #f00 #fff;
    }
    .color4{
        border-color:#fff #fff #0f0 #fff;
    }

</style>