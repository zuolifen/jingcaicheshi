<template>
<div id="header-wap">
    <div class="header">
        <div class="header-left">
            <div class="city"><img src="../../static/image/timg.jpg" alt=""></div>
            <el-select class="select" v-model="cityName" filterable placeholder="全国">
                <el-option v-for="item in cityList" :key="item.city_name" :label="item.city_name" :value="item.city_name">
                </el-option>
            </el-select>
        </div>
        <h1 class="header-content">
            <div class="logo-a" @click="$router.push('/home')">
                <img class="logo" src="../../static/image/head_logo.jpg" alt="">
            </div>
        </h1>
        <div class="header-right">
            <div class="personal" @click="$router.push('/personal')">
                <span class="iconfont icon-geren"></span>
            </div>
        </div>
    </div>
    <div class="nav">
        <router-link to="/home">首页</router-link>
        <router-link to="/gocat">GO车惠</router-link>
        <router-link to="/news">新闻资讯</router-link>
        <router-link to="/testdrive">试驾测评</router-link>
        <router-link to="/honest">诚信商家</router-link>
    </div>
    <div class="search">
        <input class="search-input" type="text">
        <span class="iconfont icon-sousuo"></span>
    </div>

</div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            cityList: [],
            cityName: ''
        }
    },
    mounted() {
        this.changeCity()
    },
    methods: {
        async changeCity() {
            const result = await this.$http.home.getCityInfo();
            if (result.code === 200) {
                console.log(result)

                this.cityList = result.data
            }

        }
    }
}
</script>

<style lang="less">
#header-wap {
    width: 100%;

    .header {
        height: 100px;
        display: flex;
        padding: 0 30px;
        justify-content: space-between;
        align-items: center;
        font-size: 30px;
        margin-bottom: 16px;

        .header-left {
            width: 140px;
            display: flex;

            .city {
                img {
                    width: 30px;
                    height: 30px;
                }

                margin-right: 2px;
            }

            .el-input__inner {
                color: #000;
                border: none;
                padding: 0;
            }

            .el-input__inner::placeholder {
                color: #000;
            }
        }

        .header-content {
            .logo-a {
                display: block;
                width: 300px;
                height: 100px;

                .logo {
                    width: 100%;
                    display: block;
                }
            }

        }

        .header-right {

            .icon-geren {
                font-size: 40px;
            }

        }

    }

    .nav {
        background: #efefef;
        height: 80px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 30px;
        font-weight: 500;

        a.router-link-active {
            color: red;
        }
    }

    .search {
        height: 70px;
        padding: 0 4px;
        position: relative;

        .search-input {
            width: 100%;
            height: 100%;
            border: 2px #c5c3c3 solid;
            padding-left: 60px;
            font-size: 30px;
        }

        .icon-sousuo {
            position: absolute;
            top: 15px;
            left: 10px;
            font-size: 50px;
        }
    }
}
</style>
