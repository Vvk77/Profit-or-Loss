var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stock-quantity');
var currentPrice = document.querySelector('#current-price');
var checkBtn = document.querySelector('#check-btn');
var outputBox = document.querySelector('#output-box');



checkBtn.addEventListener('click', submitHandler);

function submitHandler () {
    var ip = Number(initialPrice.value);
    var qty= Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip ,qty ,curr);


}




function calculateProfitAndLoss(initial,quantity,current) {

if(initial > current) {
    var loss = (initial - current)*quantity;
    var lossPercentage = (loss / initial) * 100;
    showOutput(`Your Loss is ${loss} and the percent is ${lossPercentage}%`);


}else if(current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
showOutput(`Your Profit is ${profit} and the percent is ${profitPercentage}%`);

}else{
     showOutput('No proft,No loss');


}

}

function showOutput(message) {
    outputBox.innerHTML=message;

  
   }




