/*
 * @Author: Rainy 
 * @Date: 2018-02-14 22:03:03 
 * @Last Modified by: Rainy
 * @Last Modified time: 2018-02-14 22:58:27
 */
/* eslint space-before-function-paren: ["error", "never"] */
export function saveToLocal(id, key, value) {
    let seller = window.localStorage.__seller__
    if (!seller) {
        seller = {}
        seller[id] = {}
    } else {
        seller = JSON.parse(seller)
        if (!seller[id]) {
            seller[id] = {}
        }
    }
    seller[id][key] = value
    window.localStorage.__seller__ = JSON.stringify(seller)
}

export function loadFromLocal(id, key, def) {
    let seller = window.localStorage.__seller__
    if (!seller) {
        return def
    }
    seller = JSON.parse(seller)[id]
    if (!seller) {
        return def
    }
    let ret = seller[key]
    return ret || def
}