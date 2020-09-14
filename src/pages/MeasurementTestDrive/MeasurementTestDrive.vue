<template>
<div class="testdrive-wrap">
    <NewsTemplate :listData="testList"></NewsTemplate>
</div>
</template>

<script>
import NewsTemplate from '@/components/NewsTemplate/NewsTemplate';
export default {
    name: 'MeasurementTestDrive',
    components: {
        NewsTemplate
    },
    data() {
        return {
            testList: []
        }
    },
    mounted() {
        this.getNewsList()
    },
    methods: {
        async getNewsList() {
            const result = await this.$http.newsAndInformation.getNewsList({
                classify: 3
            });
            if (result.code === 200) {
                this.testList = result.data;
            }
        }
    }
}
</script>

<style>
.testdrive-wrap {
    margin-top: 280px;
}
</style>
