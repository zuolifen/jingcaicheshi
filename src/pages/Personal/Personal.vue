<template>
<div id="personal">
    <button @click="$router.push('/home')">去首页</button>
    <div class="personal-header">
        <div></div>
    </div>
</div>
</template>

<script>
export default {
    name: "Personal"
}
</script>

<style lang="less">
#app {
    .app-content {
        margin-top: 10px;
    }
}
</style>
