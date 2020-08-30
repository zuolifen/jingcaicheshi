<template>
<div class="title-nav">
    <div class="nav-left">{{left}}</div>
    <div class="nav-right" @click="goto(path)">更多</div>
</div>
</template>

<script>
export default {
    name: 'TitleNav',
    props: {
        left: String,
        path: String
    },
    methods: {
        goto(path) {
            this.$router.push(path)
        }
    },
}
</script>

<style lang="less">
.title-nav {
    width: 100%;
    height: 90px;
    margin-top: 30px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #151515;
    font-size: 30px;
    border-top: 2px solid #c5c3c3;
    font-weight: 500;
}
</style>
