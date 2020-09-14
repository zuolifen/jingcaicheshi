<template>
<div class="go-cat">
    <div class="go-header">
        <div class="go-hot">
            <div class="title">火热进行</div>
        </div>
        <div class="search ">
            <el-select v-model="value" filterable placeholder="选择品牌/车系">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-button type="danger">找车</el-button>
        </div>
    </div>
    <div class="go-content">
        <div class="content-item" v-for="(item,index) in GOList" :key="index">
            <div class="title">
                <!-- <img src="../../static/image/75.jpg" alt=""> -->
                <span>{{item.name}}</span>
            </div>
            <div class="content">
                <div class="content-img">
                    <img :src="item.photo" alt="">
                </div>
                <div class="content-info">
                    <div class="wrap timer">
                        <div class="left">活动时间：</div>
                        <div class="right">距离结束还剩:25天8小时55分钟37秒
                        </div>
                    </div>
                    <div class="wrap number">
                        <div class="left">参团人数：</div>
                        <div class="right"><span>1</span>人
                        </div>
                    </div>
                    <div class="wrap security">
                        <div class="left">活动保障：</div>
                        <div class="right"><span>新车保证</span><span>质量保证</span><span>售后保证</span><span>平台认证</span></div>
                    </div>
                    <div class="wrap deposit">
                        <div class="left">报名押金：</div>
                        <div class="right">99元
                        </div>
                    </div>
                    <div class="wrap models">
                        <div class="left">车型：</div>
                        <div class="right">新唐能源
                        </div>
                    </div>
                    <div class="wrap info">
                        <el-button type="danger" @click="$router.push(`/details/${item.id}`)">活动详情</el-button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name: 'GoCatPreferential',
    data() {
        return {
            options: [{
                value: '01',
                label: '比亚迪'
            }, {
                value: '02',
                label: '奥迪'
            }, {
                value: '03',
                label: '宝马'
            }, {
                value: '04',
                label: '奔驰'
            }, {
                value: '选项5',
                label: '大众'
            }],
            value: '',
            GOList: [],
            page: 1,
            pageSize: 8
        }

    },
    methods: {
        async getActionList() {
            const result = await this.$http.goCatPreferential.getActionList({
                page: 2
            });
            if (result.code === 200) {
                this.GOList = result.data;
            }
        }
    },
    mounted() {
        this.getActionList();
        new BScroll('.go-cat', {
            scrollY: true,
            click: true,
            enabled: true,
            probeType: 3,

        })
    }
}
</script>

<style lang="less">
.go-cat {
    width: 100%;

    .go-header {
        width: 100%;
        margin-bottom: 20px;

        .go-hot {
            height: 50px;
            background-color: #fafafa;
            padding-left: 30px;
            line-height: 50px;
            font-size: 20px;
            color: #c1452d;
            font-weight: 700;
            margin-bottom: 20px;
        }

        .search {
            height: 60px;
            display: flex;
            justify-content: space-between;
            padding: 0 5px;

            .el-input {

                input {
                    height: 60px;
                    width: 100%;
                }
            }

            button {
                width: 30%;
            }
        }
    }

    .go-content {
        .content-item {
            padding: 0 5px;

            .title {
                height: 80px;
                margin-left: 30px;

                img {
                    width: 80px;
                    height: 80px;

                }

                span {
                    font-size: 30px;
                    line-height: 80px;
                    font-weight: 700;
                }
            }

            .content {
                .content-img {
                    height: 300px;

                    img {
                        width: 100%;
                        height: 100%;
                    }

                }
            }

            .content-info {
                display: flex;
                flex-direction: column;
                font-size: 24px;

                .wrap {
                    display: flex;
                    height: 40px;
                }

                .info {
                    height: 60px;
                    display: flex;
                    justify-content: center;
                }

                .number {
                    .right {
                        span {
                            font-size: 28px;
                            color: red;
                        }
                    }
                }

                .security {
                    .right {
                        span {
                            margin-right: 20px;
                            color: #F07901;
                        }
                    }
                }
            }
        }
    }
}
</style>
