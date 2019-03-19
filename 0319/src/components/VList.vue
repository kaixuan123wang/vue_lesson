<template>
	<ul>
		<li v-for="(item,index) in todos" :key="item.id">
			<div class="left">
				<input type="checkbox" name="" id=""  v-model="item.isComplete">
				{{item.id}}.{{item.title}}
			</div>
			<div class="right">
				<button v-on:click="$emit('del',item.id)">删除</button>
			</div>
		</li>
	</ul>
</template>
<script>
	export default {
		props:["todos"],
		data(){
			return{

			}
		},
		methods:{
			
		}
	}
</script>
<style>
	*{
		margin: 0;
		padding: 0;
	}
	ul{

		list-style: none;
	}
	ul>li{
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		margin: 5px 10px;
	}
	ul>li a{
		display: inline-block;
		width: 5px;
		height: 5px;
		border: 6px double #000;
		border-radius: 14px;
		background: #ccc;
		cursor: pointer;
	}
</style>