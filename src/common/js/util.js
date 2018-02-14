/*
 * @Author: Rainy 
 * @Date: 2018-02-14 22:58:15 
 * @Last Modified by: Rainy
 * @Last Modified time: 2018-02-14 22:58:45
 */
/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
/* eslint space-before-function-paren: ["error", "never"] */
export function urlParse() {
    let url = window.location.search
    let obj = {}
    let reg = /[?&][^?&]+=[^?&]+/g
    let arr = url.match(reg)
        // ['?id=12345', '&a=b']
    if (arr) {
        arr.forEach((item) => {
            let tempArr = item.substring(1).split('=')
            let key = decodeURIComponent(tempArr[0])
            let val = decodeURIComponent(tempArr[1])
            obj[key] = val
        })
    }
    return obj
}