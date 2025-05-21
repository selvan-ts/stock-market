// functions to change the chart images on click
function oneDay(){
    document.getElementById("oneday").style.display="inline";
    document.getElementById("oneweek").style.display="none";
    document.getElementById("onemonth").style.display="none";
    document.getElementById("oneyear").style.display="none";
    document.getElementById("fiveyears").style.display="none";
}
function oneWeek() {
    document.getElementById("oneday").style.display = "none";
    document.getElementById("oneweek").style.display = "inline";
    document.getElementById("onemonth").style.display = "none";
    document.getElementById("oneyear").style.display = "none";
    document.getElementById("fiveyears").style.display = "none";
}
function oneMonth() {
    document.getElementById("oneday").style.display = "none";
    document.getElementById("oneweek").style.display = "none";
    document.getElementById("onemonth").style.display = "inline";
    document.getElementById("oneyear").style.display = "none";
    document.getElementById("fiveyears").style.display = "none";
}
function oneYear() {
    document.getElementById("oneday").style.display = "none";
    document.getElementById("oneweek").style.display = "none";
    document.getElementById("onemonth").style.display = "none";
    document.getElementById("oneyear").style.display = "inline";
    document.getElementById("fiveyears").style.display = "none";
}
function fiveYears() {
    document.getElementById("oneday").style.display = "none";
    document.getElementById("oneweek").style.display = "none";
    document.getElementById("onemonth").style.display = "none";
    document.getElementById("oneyear").style.display = "none";
    document.getElementById("fiveyears").style.display = "inline";
}
// get the stock details
function getStockDetails(stockNumber){
    let stockDetails = document.getElementById(`stock-${stockNumber}`).innerHTML;
    let stockPrice = document.getElementById(`stock-price-${stockNumber}`).innerHTML;
    sessionStorage.setItem("stockDetails", stockDetails);
    sessionStorage.setItem("stockPrice", stockPrice);

}
let stockDetails = sessionStorage.getItem("stockDetails");
let stockPrice = sessionStorage.getItem("stockPrice");
document.getElementById("stock-details").innerHTML=stockDetails;
document.getElementById("stock-buy-price").value = stockPrice;
console.log(stockDetails);
console.log(stockPrice);

// quantity and price logic
let quantity = document.getElementById("quantity").value;
let price = document.getElementById("stock-buy-price").value;
function plusOne(){
    document.getElementById("quantity").value = ++quantity;
    document.getElementById("stock-buy-price").value = (quantity * price).toFixed(2);
}     
function minusOne(){
    if(quantity>1){
    document.getElementById("quantity").value = --quantity;
    document.getElementById("stock-buy-price").value = (quantity * price).toFixed(2);
    }
}
function quantityOnChange(){
    quantity = document.getElementById("quantity").value;
    if(quantity>=1){
    document.getElementById("stock-buy-price").value = (quantity * price).toFixed(2);
    }
}
function quantityOnChangeCrypto(){
    quantity = document.getElementById("quantity").value;
    cryptoPrice = document.getElementById("stock-buy-price").value;
    console.log(quantity * price);
    if((quantity * price)>= 10){
        document.getElementById("stock-buy-price").value = (quantity * price).toFixed(2);
    }else{
        document.getElementById("stock-buy-price").value = "Minimum " +(10/price).toFixed(5) +" quantity";
    }
}
function priceOnchange(){
    priceNow = document.getElementById("stock-buy-price").value;
    priceNow>=10 ? document.getElementById("quantity").value = (priceNow/price).toFixed(6)
    : document.getElementById("quantity").value = "Minimum 10$";
}
function transactionComplete(){
    window.alert("Transaction Complete");
    window.location.reload();
}