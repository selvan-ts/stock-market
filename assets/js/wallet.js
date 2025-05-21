let walletBalance = document.getElementById("coin-balance");
walletBalance.innerHTML = 50;
let rupeeBalance = document.getElementById("rupeeBalance");
rupeeBalance.innerHTML= 500;
function addCredits(){
    //apped transaction list on click
    let transactionList = document.getElementById("transactionList");
    const transactionContent = document.createElement('li');
    let amount = document.getElementById("amount").value;
    transactionContent.innerHTML = `<span style="display:flex; justify-content: space-between;"><span>New Account Created</span><span><span style="color: green;">+`+amount+`</span><span class="icon"><i class="fa fa-coins"></i></span></span></span>`
    transactionList.appendChild(transactionContent);

    //update amount
    let walletAdd = Number(walletBalance.innerHTML);
    let finalAmount = walletAdd + Number(amount);
    walletBalance.innerHTML =  finalAmount;

    rupeeBalance.innerHTML =Number(walletBalance.innerHTML) * 10;
}

function withdrawCredits(){
    //apped transaction list on click
    let transactionList = document.getElementById("transactionList");
    const transactionContent = document.createElement('li');
    let amount = document.getElementById("amount").value;
    transactionContent.innerHTML = `<span style="display:flex; justify-content: space-between;"><span>New Account Created</span><span><span style="color: red;">-`+amount+`</span><span class="icon"><i class="fa fa-coins"></i></span></span></span>`
    
    //update amount
    let walletAdd = Number(walletBalance.innerHTML);
    let finalAmount = walletAdd - Number(amount)
    if(finalAmount>=0){
        walletBalance.innerHTML = finalAmount; 
        rupeeBalance.innerHTML =Number(walletBalance.innerHTML) * 10;
        //apped transaction list
        transactionList.appendChild(transactionContent);
    }else if(walletAdd == 0){
        window.alert("Your balance is low");
    }
    else{
        window.alert("You can only withdraw a maximum of "+walletAdd+" credits");
    }
}