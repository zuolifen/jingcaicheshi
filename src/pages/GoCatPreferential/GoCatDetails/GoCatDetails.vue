<template>
<div class="GoCatDetails-wrap">
    <div class="GoCatDetails">
        <div class="GoCatDetails-header">
            <div class="hot">火热进行</div>
            <div class="path">
                <span>精彩车市</span>
                <span class="icon">></span>
                <span>GO车惠</span>
                <span class="icon">></span>
                <span>{{brand}}</span>
            </div>
            <div class="apply">
                <span>本期已报名<i>1</i>人，</span>
                <span>已成交<i>1</i>人</span>

            </div>
        </div>
        <!-- form表单部分start -->
        <div class="form">
            <div class="form-brand item">
                <div class="left">品牌：</div>
                <div class="right">
                    {{brand}}
                </div>
            </div>
            <div class="form-models item">
                <div class="left">车型：</div>
                <div class="right">
                    <el-select v-model="carType">
                        <el-option v-for="(item,index) in carTypes" :key="index" :label="item" :value="item">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="form-img">
                <img :src="imgUrl" alt="">
            </div>
            <div class="form-text item">
                <span>已选择<i>{{carType}}</i>,尽快报名,即刻了解近期优惠</span>
            </div>
            <div class="form-name item">
                <div class="left">姓名：</div>
                <div class="right">
                    <el-input v-model="name" placeholder="请输入姓名"></el-input>
                </div>
            </div>
            <div class="form-phone item">
                <div class="left">电话：</div>
                <div class="right">
                    <el-input v-model="phone" placeholder="请输入手机号"></el-input>
                    <el-button type="danger" @click="getCaptcha" :disabled="flag">{{content}}</el-button>
                </div>
            </div>
            <div class="form-code item">
                <div class="left">短信验证码：</div>
                <div class="right">
                    <el-input v-model="code" placeholder="请输入验证码"></el-input>
                </div>
            </div>
            <div class="submit">
                <el-button type="danger" @click="submit">立刻报名</el-button>
            </div>
        </div>
        <!-- form表单部分start -->
        <!-- 经销商 s-->
        <div class="dealer-wrap">
            <div class="dealer">
                <div class="tr">
                    <span>【北京】已为推荐经销商服务</span>
                </div>
                <div class="td" v-for="(item,index) in dealerList" :key="index">
                    <span class="left">{{item.name}}</span>
                    <span class="right">{{item.phone}}</span>
                </div>
            </div>
            <div class="more" @click="toMore">
                <div>
                    <span>查看更多</span>
                    <i>
                        <img v-if="isMore" src="../../../static/image/up.png" alt="">
                        <img v-else src="../../../static/image/down.png" alt="">
                    </i>
                </div>
            </div>
        </div>
        <!-- 经销商 e-->

        <!-- 购车流程start -->
        <div class="proPoint">
            <div class="ico-pro once">
                <span class="one">
                    <i></i>
                </span>
                <span class="two"></span>
                <span class="three"></span>
                <span class="content">
                    <p>GO车流程</p>
                </span>
            </div>
            <div class="ico-pro num">
                <span class="one">
                    <i>1</i>
                </span>
                <span class="two"></span>
                <span class="three"></span>
                <span class="content">
                    <p class="content-t">在线报名</p>
                    <!-- <p>在线或电话报名</p> -->
                </span>

            </div>
            <div class="ico-pro num">
                <span class="one">
                    <i>2</i>
                </span>
                <span class="two"></span>
                <span class="three"></span>
                <span class="content">
                    <p class="content-t">邀约参展</p>
                    <!-- <p>销售邀约参展</p> -->
                </span>
            </div>
            <div class="ico-pro num">
                <span class="one">
                    <i>3</i>
                </span>
                <span class="two"></span>
                <span class="three"></span>
                <span class="content">
                    <p class="content-t">参加GO车</p>
                    <!-- <p>签到参展</p> -->
                </span>
            </div>
        </div>
        <!-- 购车流程end -->
        <!-- 活动详情start -->
        <div class="event-details">
            <div class="serverCinfo">
                <div class="serverCinfo-title">
                    <div class="img"><img src="../../../static/image/point.png" alt=""></div>
                    <div class="text">
                        <span>1.永远免费为用户服务，开展当天为用户提供具有竞争力的优惠价格!</span>
                        <span>2.联手北京市多家4S店，确保用户提车方便。</span>
                        <span>3.专业的销售、销售为用户提供购车帮助，订车可享好礼。</span>
                    </div>
                </div>
                <div class="serverCinfo-icon">
                    <div class="ico-point01 item">
                        <p><em class="icon1"></em><span>低价优惠</span></p>
                        <span>开展前，销售会在本地区众多4S店之间逐一迅询价合作，保证价格竞争力。</span>
                    </div>
                    <div class="ico-point02 item">
                        <p><em class="icon2"></em><span>车源保证</span></p>
                        <span>GO车会甄选本地优质4s店，以保证车源质量与数量。</span>
                    </div>
                    <div class="ico-point03 item">
                        <p><em class="icon3"></em><span>全国联保</span></p>
                        <span>GO车节覆盖全国百余城市，联手多个汽车主机厂。</span>
                    </div>
                    <div class="ico-point04 item">
                        <p><em class="icon4"></em><span>优先提车</span></p>
                        <span>GO车节订车属于批量订单，可享有优先提车权。</span>
                    </div>
                    <div class="ico-point05 item">
                        <p><em class="icon5"></em><span>售后维权</span></p>
                        <span>交订金后或提车后出现汽车质量问题，GO车协助用户向4S店磋商解决。</span>
                    </div>
                    <div class="ico-point06 item">
                        <p><em class="icon6"></em><span>购车有礼</span></p>
                        <span>GO车节购车享大礼。</span>
                    </div>
                </div>
                <div class="serverCinfo-why">
                    <div class="whyT">
                        <h5><i>为什么选择精彩车市</i></h5>
                    </div>
                    <div class="whyInfo">
                        <div class="ico-why01 dd">
                            <p>积淀深厚</p>
                            <span>精彩车市成立于2007年，实力 雄厚，极具效率和专业性</span>
                        </div>
                        <div class="ico-why02 dd">
                            <p>车源优质</p>
                            <span>全国8000家4S店与主机厂的长期合作，确保正品</span>
                        </div>
                        <div class="ico-why03 dd">
                            <p>覆盖全面</p>
                            <span>百城覆盖，超过百家汽车品牌曾参展精彩车市</span>
                        </div>
                        <div class="ico-why04 dd">
                            <p>价格优惠</p>
                            <span>百余城范围询价，确保优惠。</span>
                        </div>
                    </div>

                    <div class="bgCinfo">
                        <div class="ico-bg01 item">
                            <div class="bgimg"></div>
                            <div class="text">
                                <p>参加精彩车市有什么好处和优惠</p>
                                <span>省心：专职销售跑店省去您的舟车劳顿</span>
                                <span>省时：将全城低价展现给每一位消费者</span>
                                <span>省钱：精彩车市价格优于消费者的自询价格</span>
                            </div>
                        </div>
                        <div class="ico-bg02 item">
                            <div class="text">
                                <p>参加精彩车市VS消费者自购有何异同</p>
                                <span>相同：标准车型、品牌4S店、标准售后</span>
                                <span>不同：省钱省时、增值服务、快乐交友</span>
                            </div>
                            <div class="bgimg"></div>
                        </div>
                        <div class="ico-bg03 item">
                            <div class="bgimg"></div>
                            <div class="text">
                                <p>参加精彩车市要收费吗？</p>
                                <span>全程免费服务，不直接或间接收费</span>
                                <span>帮您免去4S店收取的部分附加费用</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- 活动详情end -->
</template>

<script>
import {
    Data,
    DealerList
} from '@/static/js/data'

export default {
    name: "GoCatDetails",

    data() {
        return {
            initId: '',
            Data: [],
            carTypeById: '',
            brand: '比亚迪', //品牌
            carTypes: [], //车类型的数组
            carType: '', //车类型名称
            imgUrl: '', //车型url地址
            carList: {}, //一组车型对象
            name: '',
            phone: "",
            code: '', //验证码
            flag: false, //按钮是否可取
            content: "获取验证码", //按钮内文本
            totalTime: 60, //倒计时时间,
            dealerList: [],
            isMore: false
        }
    },
    watch: {

        carType: {
            handler(newValue) {
                this.getCarImgUrl(newValue)
            },
            deep: true
        }
    },
    methods: {

        // 根据车型获取对应imgurl
        getCarImgUrl(carType) {

            let fileItemURL = this.carList.filter((typeItem) => {
                return carType === typeItem.car_name
            })

            this.imgUrl = fileItemURL[0].photo;
            this.carTypeById = fileItemURL[0].id;
        },

        // 发送验证码
        getCaptcha() {

            //验证倒计时
            this.flag = true; //点击之后设置按钮不可取
            this.content = this.totalTime + "s后重新发送"; //按钮内文本
            let clock = window.setInterval(() => {
                this.totalTime--;
                this.content = this.totalTime + "s后重新发送";
                if (this.totalTime < 0) {
                    window.clearInterval(clock);
                    this.content = "重新发送验证码";
                    this.totalTime = 60;
                    this.flag = false; //这里重新开启
                }
            }, 1000);

            //短信验证码
            this.getSmsCode(this.phone)
        },
        //获取短信验证码
        async getSmsCode(phone) {
            await this.$http.goCatPreferential.getSmsCode({
                number: phone
            })
        },
        // 提交报名信息
        submit() {
            const sumitObj = {
                activityId: this.initId,
                carId: this.carTypeById,
                username: this.name,
                phone: this.phone,
                code: this.code
            }
        },
        //展示经销商数量
        showDealer(full) {
            this.dealerList = ((DealerList.length < 3) || full) ? DealerList : DealerList.slice(0, 3)
        },
        toMore() {
            this.isMore = !this.isMore;
            this.showDealer(this.isMore)
        },

        //获取购车惠详情
        async getActionInfoByID() {
            const result = await this.$http.goCatPreferential.getActionInfoByID({
                actionID: this.initId
            })
            if (result.code === 200) {
                this.Data = result.data;
                this.brand = result.data.brand.brand_name;
                result.data.car_list.forEach((carItem) => {
                    this.carTypes.push(carItem.car_name)
                })
                this.carType = this.carTypes[0];
                this.carList = result.data.car_list;

            }
        }
    },
    mounted() {
        this.initId = this.$route.params.id;
        this.getActionInfoByID();

        this.getCarImgUrl(this.carType);
        this.showDealer();

    }
}
</script>

<style lang="less">
.GoCatDetails-wrap {
    margin-top: 280px;
    width: 100%;

    .GoCatDetails {
        padding: 0 10px;

        .GoCatDetails-header {
            .hot {
                height: 60px;
                background-color: #c1452d;
                color: #fff;
                font-size: 30px;
                font-weight: 700;
                line-height: 60px;
                width: 500px;
                border-radius: 20px;
                text-align: center;
                margin-bottom: 20px;
            }

            .path {
                .icon {
                    margin: 0 5px;
                    color: #c1452d;
                }
            }

            .apply {
                margin-top: 20px;
                font-size: 40px;
                color: #575757;

                i {
                    color: #c1452d;
                }
            }
        }

        .form {
            font-size: 26px;

            .item {
                height: 80px;
                display: flex;
                line-height: 80px;

                input {
                    height: 60px;
                }
            }

            .form-models {
                .el-radio {
                    height: 70px;
                    line-height: 40px;

                    span {
                        font-size: 30px;
                    }
                }
            }

            .form-img {
                img {
                    width: 100%;
                    height: 300px;
                }

            }

            .form-text {
                i {
                    color: #c1452d;
                }
            }

            .form-phone {
                .right {
                    display: flex;
                    align-items: center;

                    button {
                        height: 60px;
                    }
                }
            }

            .submit {
                text-align: center;
                height: 120px;
                margin-top: 20px;

                button {
                    height: 90px;
                    width: 200px;
                    font-size: 34px;
                }
            }
        }

        .dealer-wrap {
            margin-bottom: 20px;

            .dealer {
                border: 1px solid #d5d5d5;
                border-bottom: none;

                .tr {
                    height: 70px;
                    background-color: #f7f7f7;
                    line-height: 70px;
                    text-align: center;
                    border-bottom: 1px solid #d5d5d5;

                }

                .td {
                    height: 70px;
                    line-height: 70px;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #d5d5d5;

                    .right {
                        color: #CF0D28;
                    }
                }
            }

            .more {
                height: 60px;

                div {
                    line-height: 60px;
                    width: 240px;
                    margin: 0 auto;
                    text-align: center;
                    border: 1px solid #d5d5d5;
                    border-top: none;
                    color: #000;

                    i {
                        margin-left: 10px;
                    }
                }
            }
        }

        .proPoint {
            height: 80px;
            display: flex;
            justify-content: start;
            font-size: 20px;

            .ico-pro {
                position: relative;
                width: 170px;
                margin-right: 20px;

                .one {
                    width: 0;
                    height: 0;
                    border-top: 40px solid transparent;
                    border-bottom: 40px solid transparent;
                    border-left: 40px solid #CF0D28;
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: 5;
                }

                .two {
                    width: 0;
                    height: 0;
                    border-top: 40px solid transparent;
                    border-bottom: 40px solid transparent;
                    border-left: 40px solid #fff;
                    position: absolute;
                    left: 10px;
                    top: 0;
                    z-index: 4;
                }

                .three {
                    width: 0;
                    height: 0;
                    border-top: 40px solid transparent;
                    border-bottom: 40px solid transparent;
                    border-left: 40px solid #CF0D28;
                    position: absolute;
                    left: 13px;
                    top: 0;
                    z-index: 3;
                }

                .content {
                    width: 160px;
                    height: 76px;
                    position: absolute;
                    left: 11px;
                    top: 0px;
                    border: 2px solid #CF0D28;
                    border-left: none;
                    text-align: center;
                }
            }

            .once {
                .content {
                    background-color: #CF0D28;
                    color: #fff;
                    font-size: 20px;
                    font-weight: 700;

                    p {
                        line-height: 76px;
                        margin-left: 32px;
                    }
                }
            }

            .num {
                .one {
                    i {
                        width: 20px;
                        height: 80px;
                        position: absolute;
                        left: -30px;
                        top: -16px;
                        color: #fff;
                        font-size: 20px;
                    }

                }

                .content {
                    .content-t {
                        font-size: 20px;
                        // letter-spacing: 2px;
                    }

                    p {
                        margin-left: 32px;
                        line-height: 76px;
                        font-size: 16px;
                        font-weight: 700;
                        color: #7A7A7A;
                    }
                }

            }

        }

        .event-details {
            border: solid 1px #e8e8e8;
            margin-top: 20px;

            .serverCinfo {
                .serverCinfo-title {
                    display: flex;

                    .img {
                        img {
                            width: 150px;
                            height: 150px;
                        }

                        margin-right: 20px;
                    }

                    .text {
                        display: flex;
                        flex-direction: column;
                        color: #000;
                        font-weight: 600;
                    }
                }

                .serverCinfo-icon {
                    margin-top: 20px;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-around;

                    .item {
                        width: 45%;
                        border: solid 1px #dedede;
                        border-radius: 8px;
                        margin-bottom: 10px;

                        p {
                            font-size: 16px;
                            font-weight: bold;
                            height: 50px;
                            width: 100%;
                            background: #f7f7f7;
                            line-height: 50px;
                            border-top-left-radius: 8px;
                            border-top-right-radius: 8px;
                            display: flex;

                            span {
                                color: #222;
                            }

                            em {
                                background: url(../../../static/image/ico-pointsmall.png) no-repeat;
                                display: block;
                                width: 36px;
                                height: 36px;
                                margin: 8px 15px 0 20px;
                            }

                            .icon2 {
                                background-position: 0 -90px;
                            }

                            .icon3 {
                                background-position: 0 -195px;
                            }

                            .icon4 {
                                background-position: 0 -285px;
                            }

                            .icon5 {
                                background-position: 0 -382px;
                            }

                            .icon6 {
                                background-position: 0 -480px;
                            }
                        }

                        span {
                            font-size: 12px;
                            line-height: 24px;
                            padding: 8px;
                            color: #999;
                        }
                    }
                }

                .serverCinfo-why {
                    margin-top: 20px;

                    .whyT {
                        position: relative;
                        border-top: solid 1px #dedede;
                        height: 0px;

                        h5 {
                            position: absolute;
                            left: 0;
                            top: -15px;
                            text-align: center;
                            width: 100%;
                            height: 30px;
                            font-size: 20px;
                            color: #ff3838;
                            font-weight: bold;

                            i {
                                background: #fff;
                                padding: 5px 10px;
                            }
                        }
                    }

                    .whyInfo {
                        margin-top: 20px;

                        .dd {
                            background: url(../../../static/image/ico-why.png) no-repeat;
                            margin: 20px 15px 0 60px;
                            height: 140px;
                            padding: 0 11px 30px 120px;
                            border-bottom: dashed 1px #dbdbdb;

                            p {
                                font-size: 16px;
                                font-weight: bold;
                                color: #261d18;
                                line-height: 30px;
                                padding-left: 60px;
                            }

                            span {
                                font-size: 12px;
                                color: #7a7a7a;
                            }
                        }

                        .ico-why02 {
                            background-position: 0 -297px;
                        }

                        .ico-why03 {
                            background-position: 0 -594px;
                        }

                        .ico-why04 {
                            background-position: 0 -891px;
                            border-bottom: none;
                        }
                    }

                    .bgCinfo {
                        margin-top: 20px;

                        .item {
                            height: 280px;
                            display: flex;

                            .bgimg {
                                height: 100%;
                                width: 40%;
                                background: url(../../../static/image/bg.png) no-repeat;

                            }

                            .text {
                                width: 60%;
                                padding-top: 60px;

                                p {
                                    font-size: 22px;
                                    color: #ff3838;
                                    font-weight: bold;
                                    height: 40px;
                                    line-height: 40px;
                                }

                                span {
                                    display: block;
                                    color: #7a7a7a;
                                }
                            }
                        }

                        .ico-bg02 {
                            .bgimg {
                                background-position: 10px -346px;
                            }
                        }

                        .ico-bg03 {
                            .bgimg {
                                background-position: 10px -720px;
                            }

                        }
                    }
                }
            }
        }
    }
}
</style>
