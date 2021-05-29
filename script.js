function createbtc (){
const btc = document.createElement
('div')
btc.classList.add('btc');

btc.innerText = 'cointorep' ;

document.body.appendChild(btc);

}

setInterval(createbtc, 1000);