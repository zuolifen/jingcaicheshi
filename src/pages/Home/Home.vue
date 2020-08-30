<template>
<div class="home-wrap">
    <div class="home">
        <!-- go车惠 -->
        <div class="go-cat">
            <TitleNav :left="'Go车惠'" :path="'/gocat'" />
            <Banner :banner="GOBanner" />
            <List :list="GOList" />
        </div>
        <!-- 新闻资讯 -->
        <div class="news">
            <TitleNav :left="'新闻资讯'" :path="'/news'" />
            <Banner :banner="NewsBanner" />
            <List :list="NewsList" />
        </div>
        <!-- 试驾测评 -->
        <div class="test-drive">
            <TitleNav :left="'试驾测评'" :path="'/testdrive'" />
            <Banner :banner="TestBanner" />
            <List :list="TestList" />
        </div>
        <!-- 诚信商家 -->
        <div class="honest-man">
            <TitleNav :left="'诚信商家'" :path="'/honest'" />
            <div class="merchants-wrap">
                <div class="merchants">
                    <div class="merchants-img">
                        <img src="http://jingcaicheshi.com/Public/photo/1565434654.jpeg" alt="">
                    </div>
                    <div class="merchants-text">
                        <span>北京首汽腾迪奥迪4S店</span>
                        <span>010-68488853</span>
                    </div>
                </div>
                <div class="merchants">
                    <div class="merchants-img">
                        <img src="http://jingcaicheshi.com/Public/photo/1565434636.jpeg" alt="">
                    </div>
                    <div class="merchants-text">
                        <span>北京通孚祥凯迪拉克4S店</span>
                        <span>010-65489999</span>
                    </div>
                </div>
                <div class="merchants">
                    <div class="merchants-img">
                        <img src="http://jingcaicheshi.com/Public/photo/1589276667.jpeg" alt="">
                    </div>
                    <div class="merchants-text">
                        <span>北京宝晋行宝马4S店</span>
                        <span>010-81912777</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll';
import TitleNav from '@/components/TitleNav/TitleNav';
import Banner from '@/components/Banner/Banner';
import List from '@/components/List/List';
export default {
    name: 'Home',
    components: {
        TitleNav,
        Banner,
        List
    },
    data() {
        return {
            GOList: ['政府补贴月,几何购车节', '北京文沛开业盛典', '枫叶汽车', '夏季狂欢团购节'],
            GOBanner: ['http://jingcaicheshi.com/Public/photo/1592304404.jpeg', 'http://jingcaicheshi.com/Public/photo/1591594497.jpeg'],
            NewsList: ['上汽奥迪项目提速', '可以“躺赢”的SUV吉利豪越全新中型SUV捷达VS7', '全新Jeep+自由光上市江淮iC5新车到店', '吉利豪越正式上市第10000辆理想ONE交付'],
            NewsBanner: ['http://p1.pstatp.com/large/pgc-image/bfdc460b0efa43aebb6611ffe2d43691', 'http://p3.pstatp.com/large/pgc-image/65b5a0847310457d9884b615d25499ed'],
            TestList: ['Jeep大指挥官性能测试', '凯迪拉克XT6试驾体验全新SUV HS7正式上市', '雪佛兰SUV家族行动长途试驾全新BMW 3系', '京城续航王”之几何A释放耀眼光芒'],
            TestBanner: ['http://jingcaicheshi.com/Public/photo/1591588649.jpeg', 'http://jingcaicheshi.com/Public/photo/1564114648.jpeg'],
        }
    },
    mounted() {
        new BScroll('.home-wrap', {
            scrollY: true,
            click: true
        })
    }
}
</script>

<style lang="less">
.honest-man {
    width: 100%;

    .merchants-wrap {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .merchants {
            width: 30%;

            .merchants-img {
                width: 100%;

                img {
                    width: 100%;

                }
            }

            .merchants-text {
                padding: 0 10px;
                display: flex;
                flex-direction: column;
            }
        }
    }
}
</style>
