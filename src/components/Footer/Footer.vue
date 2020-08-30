<template>
<div class="footer">
    <div class="footer-info">
        <div class="info-about">
            <span>关于我们</span>
            <span class="line">|</span>
            <span>广告服务</span>
            <span class="line">|</span>
            <span>业务合作</span>
        </div>
        <div class="info-record">京ICP备19026690号</div>
    </div>
</div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="less">
.footer {
    width: 100%;
    margin-top: 30px;
    border-top: 2px solid #c5c3c3;

    .footer-info {
        height: 150px;
        background-color: #c3c3c3;
        margin-top: 60px;
        padding-top: 50px;
        text-align: center;
        font-size: 30px;

        .info-about {
            .line {
                margin: 0 10px;
            }
        }
    }
}
</style>
