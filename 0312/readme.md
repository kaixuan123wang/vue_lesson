web标准：结构（Structure）、表现（Presentation）和行为（Behavior）
MVVM/MVW：数据/视图/数据视图连接
SPA：单页面开发

vue模板：
1.放在script中
var app = new Vue({
	template:`
		<h1>123</h1>
	`
})
2.单独
<template id="app">
	
</template>
<script>
	var app = new Vue({
		template:'#app'
	})
</script>
3.
	<script type="x-template" id="a">
		<h1></h1>	
	</script>
	<script>

	</script>

箭头函数：var add=(x,y)=>(x+y);