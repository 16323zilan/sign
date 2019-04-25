import request from '@/utils/request';

// 登陆接口
export let login = code => {
    console.log('code...', code);
    return request.post('/user/code2session', {
        code
    })
};
export let addSign = params => {
    return request.post('/sign', params)
};
//获取面试列表
export let getSignList = params => {
    return request.get('/sign', params)
};

//获取面试详情
export let getSignDetail = id => {
    return request.get('/sign/' + id)
}