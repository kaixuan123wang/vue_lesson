vue工作流
0.安装node.js

1.安装vue脚手架
--npm install vue-cli -g --save-dev
2.安装webpack工程化工具
--npm install webpack --save-dev
3.初始化项目文件夹
--npm init
3.在项目文件夹生成项目
--vue init webpack-simple 项目名
4.进入项目
--cd 项目名
5.安装项目配件
--npm install
6.运行环境
--npm run dev

cnpm镜像的安装
npm install -g cnpm --registry=https://registry.npm.taobao.org


组件的使用
一。组件建立
1。在./src下建立components文件夹
2。建立组件文件（.vue）
<template></template>
<script></script>
<style></style>
3.在父组件中引入子组件
import 名称 from 子组件位置
4.注册子组件
<script>
export default{
	...
	components:{
		组件名:名称
	}
}
</script>
5.使用
在template中使用
<组件名></组件名>

组件之间数据传递方法
1。父向子传
v-bind:属性名
2.子组件要进行定义和使用
选项：
props:[]/{}
3.直接可以使用其值