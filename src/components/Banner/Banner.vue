<template>
<div class="banner">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
                <a @click.prevent href="">
                    <img :src="item" alt="">
                </a>
            </div>

        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
    </div>
</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
export default {
    name: 'Banner',
    props: {
        banner: Array
    },
    mounted() {
        new Swiper('.swiper-container', {
            loop: true,
            paginationClickable: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 1000, //1秒切换一次
            },
        })
    }
}
</script>

<style lang="less">
.banner {
    overflow: hidden;
    width: 100%;

    .swiper-container {
        .swiper-wrapper {
            .swiper-slide {
                a {
                    display: block;

                    img {
                        width: 100vw;
                        height: 400px;
                    }
                }

            }
        }
    }
}
</style>
