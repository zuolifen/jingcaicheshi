export default {
    api:{
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
        getActionInfoByID:{
            url:'/api.php/action/getActionInfoByID',
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
        getSmsCode:{
            url:'/api.php/user/getSmsCode',
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