<template>
<div id="app">
    <Header v-if="$route.meta.showHeader"></Header>
    <router-view></router-view>
    <Footer v-if="$route.meta.showHeader"></Footer>
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
}
</style>
