<template>
    <div id="app">
        <div class="block">
            <span class="demonstration">默认 Hover 指示器触发</span>
            <el-carousel height="650px">
                <el-carousel-item v-for="item in list" :key="item">
                    <h3><img :src=item alt=""></h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="block">
            <span class="demonstration">Click 指示器触发</span>
            <el-carousel trigger="click" height="650px">
                <el-carousel-item v-for="item in list" :key="item">
                    <h3><img :src=item alt=""></h3>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list:[
                    "./src/assets/ad1.jpg",
                    "./src/assets/ad2.jpg",
                    "./src/assets/ad3.jpg",
                    "./src/assets/ad4.jpg",
                    "./src/assets/ad5.jpg",
                    "./src/assets/ad6.jpg"
                ]
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }
    .el-carousel__item h3 img{
        width: 100%;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>