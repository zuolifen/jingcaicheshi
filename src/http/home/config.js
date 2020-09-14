export default {
    api:{
        getNewsIndexList:{
            url:'/api.php/news/getNewsIndexList',
            method:'get',
            crosUrl:'/api',
           
            hooks:{
                beforeReq(callback){
                    callback && callback()
                    // console.log('beforeReq')
                },
                receiveRes(callback){
                    callback && callback()
                    // console.log('receiveRes')
                },
            }
        },
        getActionList:{
            url:'/api.php/action/getActionList',
            method:'get',
            crosUrl:'/api',
            hooks:{
                beforeReq(callback){
                    callback && callback()
                    // console.log('beforeReq')
                },
                receiveRes(callback){
                    callback && callback()
                    // console.log('receiveRes')
                },
            }
        },
        getUserIndexList:{
            url:'/api.php/user/getUserIndexList',
            method:'get',
            crosUrl:'/api',
            hooks:{
                beforeReq(callback){
                    callback && callback()
                    // console.log('beforeReq')
                },
                receiveRes(callback){
                    callback && callback()
                    // console.log('receiveRes')
                },
            }
        },
        getCityInfo:{
            url:'/api.php/city/getCityInfo',
            method:'get',
            crosUrl:'/api',
            hooks:{
                beforeReq(callback){
                    callback && callback()
                    // console.log('beforeReq')
                },
                receiveRes(callback){
                    callback && callback()
                    // console.log('receiveRes')
                },
            }
        },
    },
    hooks:{
        beforeContactReq(callback){
            callback && callback()
        },
        receiveContactRes(callback){
            callback && callback()
        }
    }
}