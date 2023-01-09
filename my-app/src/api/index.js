import http from '../utils/request'

//请求首页数据
export const getData = () => {
    //返回一个promise对象
    return http.get('/gm/getData')
}

export const getArticleList = () => {
    return http.get('/gm/getArticleList')
}

// export const getArticleByTitle = () => {
//     return http.get('/gm/getArticle')
// }
export const getRecommend = () => {
    return http.get('/gm/getRecommendList')
}

export const getTips = () => {
    return http.get('gm/getTips')
}

export const getUnverified = () => {
    return http.get('gm/getUnverifiedLine')
}

export const getLine = () => {
    return http.get('/gm/getLine')
}

export const getMes = () => {
    return http.get('/gm/getMes')
}