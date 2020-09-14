<template>
<div class="news-wrap">
    <NewsTemplate :listData="newsList"></NewsTemplate>
</div>
</template>

<script>
import NewsTemplate from '@/components/NewsTemplate/NewsTemplate';
export default {
    name: 'NewsAndInformation',
    components: {
        NewsTemplate
    },
    data() {
        return {
            newsList: []
        }
    },
    mounted() {
        this.getNewsList()
    },
    methods: {
        async getNewsList() {
            const result = await this.$http.newsAndInformation.getNewsList({
                classify: 1
            });
            if (result.code === 200) {
                this.newsList = result.data;
            }
        }
    }
}
</script>

<style>
.news-wrap {
    margin-top: 280px;
}
</style>
