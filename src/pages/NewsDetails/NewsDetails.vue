<template>
<div class="news-datails">
    <div class="content" v-html="newsData.content"></div>
</div>
</template>

<script>
export default {
    name: "NewsDetails",
    data() {
        return {
            newsId: '',
            newsData: {}
        }
    },
    mounted() {
        this.newsId = this.$route.params.id;
        this.getNewsInfoByID();
    },
    methods: {
        async getNewsInfoByID() {
            const result = await this.$http.newsAndInformation.getNewsInfoByID({
                newsID: this.newsId
            })
            if (result.code === 200) {
                this.newsData = result.data;
            }
        }
    }

}
</script>

<style lang="less">
.news-datails {
    margin-top: 280px;
    padding: 0 10px;

    .content {
        img {
            width: 100%;
        }
    }
}
</style>
