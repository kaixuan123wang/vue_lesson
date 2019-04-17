<template>
  <div id="app">
    <button @click="shows">显隐效果</button>
    <transition name="xf">
        <div class="dim" v-if="show">
            <p>
                ssssssssssssssssssss
            </p>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show:true
    }
  },
    methods:{
    shows(){
        this.show = !this.show;
    }
}
}
</script>

<style>
#app{
    width:600px;
    margin:0 auto;
}
.dim{
    position:relative;
    width:500px;
    height:300px;
    margin:50px auto;
    perspective:1300px; /*透视点*/
}
p{
    position:relative;
    width:300px;
    height:200px;
    transform-style:preserve-3d;    /*保留3d效果*/
}
.xf-enter-active{
    animation:sl 1s;
    
}
.xf-leave-active{
    animation:sl 1s reverse;
}
@keyframes sl{
    0%{
        transform:scale(0);
    }
    50%{
        transform:scale(1.5) rotateX(150deg);
    }
    100%{
        transform:scale(1);
    }
}
@keyframes se{
    0%{
        transform:scale(1);
        opacity:1;
    }
    100%{
        transform:scale(0) rotateZ(180deg);
        opacity:0;
    }
}
</style>
