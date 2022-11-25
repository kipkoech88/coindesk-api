// to consume moviedb api  
document.querySelector('button').addEventListener('click', checkCoin) 

function checkCoin(){
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json") 
    .then(res=>res.json()) 
    .then(data=>{
        console.log(data)
        document.querySelector('h1').innerHTML=data.bpi.EUR.description 
        document.querySelector('h2').innerText=data.bpi.EUR.symbol
        document.querySelector('p').innerText=data.bpi.EUR.rate 
        document.querySelector('h3').innerText=data.time.updated, data.time.updateduk
    }) 
    .catch(err=>{
        console.log(err)
    })
}
