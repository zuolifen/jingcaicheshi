<template>
<div id="app">
    <Header class="app-header" v-if="$route.meta.showHeader"></Header>
    <div class="app-content">
        <router-view></router-view>
    </div>
    <Footer class="app-footer" v-if="$route.meta.showHeader"></Footer>
</div>
</template>

<script>
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
export default {
    name: 'App',
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="less">
#app {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .app-header {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99;
        height: 280px;
        background-color: #fff;
    }

    .app-content {

        margin-top: 280px;
        height: calc(100vh-490px);
        margin-bottom: 210px;
    }

    .app-footer {
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 99;
        height: 210px;
        background: #fff;
    }
}
</style>
