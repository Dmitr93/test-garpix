let arrInit = [{shop: 'М.Видео', img: 'mvideoImg', cashback: '1,5%'},
    {shop: 'Бургер Кинг', img: 'burgerKingImg', cashback: '3%'},
    {shop: 'Холодильник.ру', img: 'tehnoparkImg', cashback: '4,5%'},
    {shop: 'BORK', img: 'borkImg', cashback: '1,5%'},
    {shop: 'Евросеть', img: 'eurosetImg', cashback: '1,5%'}];

export  function generateCashback(n) {
    for (let i = 0; i = arrInit.length; i++){
        arrInit.push(arrInit[i])
    }
    return arrInit
}
generateCashback(2);

console.log(arrInit);
