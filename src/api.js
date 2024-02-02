import {cryptoData, cryptoAssets} from './data'

export function FetchData() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(cryptoData)
        },2000)
    })
}

export function FetchAssets() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets)
        },2000)
    })
}