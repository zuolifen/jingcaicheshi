<template>
<div class="home-wrap">
    <div class="home">
        <!-- go车惠 -->
        <div class="go-cat">
            <TitleNav :left="'Go车惠'" :path="'/gocat'" />
            <Banner :banner="GOBanner" :id="GOId" :path="'/details'" />
            <List :list="GOList" :id="GOId" :path="'/details'" />
        </div>
        <!-- 新闻资讯 -->
        <div class="news">
            <TitleNav :left="'新闻资讯'" :path="'/news'" />
            <Banner :banner="NewsBanner" :id="NewsId" :path="'/newsDetails'" />
            <List :list="NewsList" :id="NewsId" :path="'/newsDetails'" />
        </div>
        <!-- 试驾测评 -->
        <div class="test-drive">
            <TitleNav :left="'试驾测评'" :path="'/testdrive'" />
            <Banner :banner="TestBanner" :id="TestId" :path="'/newsDetails'" />
            <List :list="TestList" :id="TestId" :path="'/newsDetails'" />
        </div>
        <!-- 诚信商家 -->
        <div class="honest-man">
            <TitleNav :left="'诚信商家'" :path="'/honest'" />
            <div class="merchants-wrap">
                <div class="merchants" v-for="(item,index) in merchants" :key="index">
                    <div class="merchants-img" :data-id="item.id">
                        <img :src="item.acater" alt="">
                    </div>
                    <div class="merchants-text">
                        <span>{{item.username}}</span>
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
            GOList: [],
            GOBanner: [],
            GOId: [],
            NewsList: [],
            NewsBanner: [],
            NewsId: [],
            TestList: [],
            TestBanner: [],
            TestId: [],
            merchants: []
        }
    },
    mounted() {
        this.getNewsIndexList();
        this.getActionList();
        this.getUserIndexList();
        this.$nextTick(() => {
            new BScroll('.home-wrap', {
                scrollY: true,
                click: true
            })
        })

    },
    methods: {
        async getNewsIndexList() {
            const result = await this.$http.home.getNewsIndexList({
                pageSize: 4
            })
            if (result.code === 200) {
                result.data.news_car.forEach((newsItem) => {
                    this.NewsList.push(newsItem.title);
                    this.NewsBanner.push(newsItem.photo);
                    this.NewsId.push(newsItem.id);
                })
                result.data.shijia.forEach((testItem) => {
                    this.TestList.push(testItem.title)
                    this.TestBanner.push(testItem.photo)
                    this.TestId.push(testItem.id)
                })
            }
        },
        async getActionList() {
            const result = await this.$http.home.getActionList({
                pageSize: 4
            });
            if (result.code === 200) {
                result.data.forEach((goItem) => {
                    this.GOBanner.push(goItem.photo);
                    this.GOList.push(goItem.name);
                    this.GOId.push(goItem.id);
                })
            }
        },
        async getUserIndexList() {
            const result = await this.$http.home.getUserIndexList({
                pageSize: 4
            })
            if (result.code === 200) {
                this.merchants = result.data
            }
        }
    }
}
</script>

<style lang="less">
.home-wrap {
    margin-top: 280px;

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
}
</style>
