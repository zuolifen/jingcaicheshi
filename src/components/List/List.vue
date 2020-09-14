<template>
<div class="list">

    <div class="list-item" v-for="(item,index) in List" :key="index" @click="$router.push(`${path}/${id[index]}`)">
        <span class="dot"></span>
        <span class="text">{{item}}</span>
    </div>
</div>
</template>

<script>
export default {
    name: 'List',
    props: {
        List: Array,
        id: Array,
        path: String
    }
}
</script>

<style lang="less">
.list {
    border-top: 2px solid #f5dad1;
    margin-top: 20px;

    .list-item {
        border-bottom: 2px solid #f5dad1;
        height: 70px;
        padding-left: 50px;
        line-height: 70px;
        color: #000;
        position: relative;

        .dot {
            display: block;
            width: 4px;
            height: 4px;
            background-color: #000;
            position: absolute;
            left: 50px;
            top: 50%;
        }

        .text {
            margin-left: 20px;
        }
    }
}
</style>
