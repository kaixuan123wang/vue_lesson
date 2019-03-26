<template>
    <table cellspacing="0" border="1">
        <caption>个人信息</caption>
        <thead>
            <tr>
                <th v-for="name in th">{{name}}</th>
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
        props:["list","th"]
    }
</script>
<style>
    table{
        width:100%;
        text-align: center;
    }

</style>