export default {
    api:{
        getNewsList:{
            url:'/api.php/news/getNewsList',
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
        getNewsInfoByID:{
            url:'/api.php/news/getNewsInfoByID',
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