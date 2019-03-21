<template>	
<ul>

<li v-for="item in todos" :key="item.id">
	<div class="left">
		<input type="checkbox" name="" id="" v-model="item.isComplete" v-on:click="$emit('sel',item.id)">
		{{item.id}}.{{item.title}}
	</div>
<div class="right">
	<a href="#" v-on:click="$emit('del',item.id)">-</a>
</div>

</li>

</ul>
</template>
<script>
export default {
	props:["todos"]
}	
</script>
<style>	
ul li{
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	border-left: 5px solid #0f0;
	width: 100%;
	background: #fff;
	border-radius: 5px;
	padding-left:10px; 
	margin: 10px auto;
	list-style: none;
	height: 30px;
	line-height: 30px;
}
ul li .left input{
	width: 20px;
	height: 20px;
	margin-top: 5px;
	vertical-align:top;
}
ul li .right a{
	display: inline-block;
	width: 20px;
	height: 20px;
	border-radius: 15px;
	line-height: 20px;
	text-align: center;
	text-decoration: none;
	background: #ccc;
	color: #fff;
	margin-right: 10px;
}
</style>