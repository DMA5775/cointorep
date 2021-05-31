function createbtc (){
    const btc = document.createElement
    ('div')
    btc.classList.add('btc');

    btc.style.left = Math.random () *100 + "VW";

    btc.style.animationDuration = Math.random() *2 + 3 + "s";

    btc.innerText = '🚀' ;

    document.body.appendChild(btc);

}

setInterval(createbtc, 100);