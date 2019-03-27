<template>
    <table cellspacing="0">
        <thead>
            <tr>
                <th>序号</th>
                <th>书名</th>
                <th>作者</th>
                <th>价格</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in list">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.author}}</td>
                <td>{{item.price}}</td>
                <td>
                    <button v-on:click="$emit('del',item.id)">删除</button>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="5">
                    总价：{{sum}}
                </td>
            </tr>
        </tfoot>
    </table>
</template>
<script>
    export default {
        props:["list"],
        computed:{
            sum(){
                var s=0;
                this.list.forEach((item)=>(s+=parseInt(item.price)))
                return s;
            }
        }
    }
</script>
<style>
    table{
        width: 100%;
        margin:5px auto;
        text-align: center;
    }
    table tr td,th{
        border-bottom:1px solid #ccc;
    }
    table tfoot{
        text-align: right;
    }
    table tbody tr:nth-child(odd) td button{
        background: #f00;
        color:#fff;
        border:1px solid #fff;
        border-radius:5px;
        height: 30px;
        width: 50px;
    }
    table tbody tr:nth-child(even) td button{
        background: #007a05;
        color:#fff;
        border:1px solid #fff;
        border-radius:5px;
        height: 30px;
        width: 50px;
    }
</style>