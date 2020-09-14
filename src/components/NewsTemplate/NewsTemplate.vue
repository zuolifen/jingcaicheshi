<template>
<div class="news-template-wrap">
    <div v-for="(item,index) in listData" :key="index" class="news-template" @click="$router.push(`/newsDetails/${item.id}`)">
        <div class="template-left">
            <img :src="item.photo" alt="">
        </div>
        <div class="template-right">
            <h2>{{item.name}}</h2>
            <span class="subtitle">{{item.remark}}</span>
            <div class="collection-icon">
                <span class="timer">{{item.time}}</span>
                <div class="icon">
                    <span>收藏</span>
                    <span class="img"><img src="../../static/image/new_sc.png" alt=""></span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "NewsTemplate",
    props: ['listData']
}
</script>

<style lang="less">
.news-template {
    width: 100%;
    // height: 300px;
    display: flex;
    border-bottom: 1px dashed #e1e1e1;
    padding-bottom: 20px;
    padding-top: 20px;

    .template-left {
        width: 38%;
        margin-right: 20px;

        img {
            width: 100%;
        }
    }

    .template-right {
        cursor: pointer;
        width: 60%;

        h2 {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            margin-bottom: 10px;
            color: #404040;
        }

        .subtitle {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-height: 30px;
        }

        .collection-icon {
            padding: 0 20px;
            display: flex;
            margin-top: 20px;
            justify-content: space-between;
            vertical-align: middle;

            .img {
                margin-left: 20px;
            }
        }
    }
}
</style>
