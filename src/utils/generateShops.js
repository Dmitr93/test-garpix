import  { getRandomInt } from  './getRandomInt.js'
import eurosetCardImg from '@img/euroset-card.svg'
import mvideoCardImg from '@img/mvideo-card.svg'
import tehnoparkCardImg from '@img/tehnopark-card.svg'
import mvideoImg from '@img/mvideo.svg'
import burgerKingImg from '@img/bk.svg'
import borkImg from '@img/bork.svg'
import tehnoparkImg from '@img/tehnopark.svg'
import eurosetImg from '@img/euroset.svg'


let arrInitCashback = [
    {shop: 'М.Видео', img: mvideoImg, cashback: '1,5%'},
    {shop: 'Бургер Кинг', img: burgerKingImg, cashback: '3%'},
    {shop: 'Холодильник.ру', img: tehnoparkImg, cashback: '4,5%'},
    {shop: 'BORK', img: borkImg, cashback: '1,5%'},
    {shop: 'Евросеть', img: eurosetImg, cashback: '1,5%'}];


let arrInitSale = [
    {shop: 'Евросеть', imgLogo: eurosetImg, imgCard:eurosetCardImg, text: '10% спасибо за покупки в черную пятницу'},
    {shop: 'Технопарк', imgLogo: tehnoparkImg, imgCard:tehnoparkCardImg, text: '20% спасибо за технику Electrolux'},
    {shop: 'М.Видео', imgLogo: mvideoImg, imgCard:mvideoCardImg, text: '15% спасибо для студентов'},]

export function generateCashback(n) {
    for (let i = 0; i <= n; i++){
        arrInitCashback.push(arrInitCashback[getRandomInt(0, 4)])
    }
    return arrInitCashback
}

export function generateSale(n) {
    for (let i = 0; i <= n; i++){
        arrInitSale.push(arrInitSale[getRandomInt(0, 2)])
    }
    return arrInitSale
}
