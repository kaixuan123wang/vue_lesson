<template>
  <div id="app">
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
    <tree></tree>
    <progress></progress>
    <carousel></carousel>
  </div>
</template>

<script>
  import tree from "./Tree";
  import progress from "./Progress";
  import carousel from "./Carousel";
export default {
  name: 'app',
  data () {
    return {
      visible: false
    }
  },
  components:{
    "tree":tree,
    "progress":progress,
    "carousel":carousel
  }
}
</script>

<style lang="scss">

</style>
