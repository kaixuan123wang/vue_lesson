<template>
    <table border="1" cellspacing="0">
        <thead>
            <tr>
                <th>编号</th>
                <th>品牌名称</th>
                <th>创建时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in list">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.date}}</td>
                <td>
                    <button v-on:click="$emit('del',item.id)">删除</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "show",
        props:["list"]
    }
</script>

<style scoped>
    table{
        width: 65%;
        text-align: center;
    }
    table thead{
        background: #0f0;
        color:#fff;
    }
    table thead tr th:nth-child(1),table thead tr th:nth-child(4){
        width: 12%;
    }
    table tbody tr:nth-child(odd) td button{
        background: #f00;
        border:none;
        width: 100%;
        height: 25px;
        color:#fff;
        font-weight: bold;
    }
    table tbody tr:nth-child(even) td button{
        background: #0f0;
        border:none;
        width: 100%;
        height: 25px;
        color:#fff;
        font-weight: bold;
    }
</style>