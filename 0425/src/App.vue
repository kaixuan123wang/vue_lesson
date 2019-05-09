<template>
  <div id="app">
    <div class="swiper-container" ref="container">
      <div class="swiper-wrapper">
        <div v-for="item in images" class="swiper-slide">
          <img :src="item.img_url" :alt="item.name">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination" ref="pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper/dist/js/swiper";
  import "swiper/dist/css/swiper.css";
export default {
  name: 'app',
  data () {
    return {
      images:[
        {id:0,img_url:"src/assets/images/ad1.jpg",name:"slide1"},
        {id:1,img_url:"src/assets/images/ad2.jpg",name:"slide2"},
        {id:2,img_url:"src/assets/images/ad3.jpg",name:"slide3"},
        {id:3,img_url:"src/assets/images/ad4.jpg",name:"slide4"},
        {id:4,img_url:"src/assets/images/ad5.jpg",name:"slide5"},
        {id:5,img_url:"src/assets/images/ad6.jpg",name:"slide6"}
      ]
    }
  },
  mounted(){
    var mySwiper = new Swiper (this.$refs.container, {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
      autoplay:true,

    // 如果需要分页器
    pagination: {
      el: this.$refs.pagination,
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
  }
}
</script>

<style lang="scss">
  .swiper-container {
    width: 810px;
    height: 300px;
  }
</style>
