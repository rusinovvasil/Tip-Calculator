const amount = document.getElementById("amount");
const guests = document.getElementById("guests");
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tip-amount");

calculate = () =>{
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
    amount.value = '';
    guests.value = '';
    quality.value = '';
    if(tip === 'Nan'){
        tipAmount.innerHTML = 'Tip $0 each';
        function showTipAmount();
        showTipAmount = () =>{
            let x = tipAmount;
            x.className = 'show';
            setTimeout(function(){x.className = x.className.replace('show', '')}, 3000)
        }
    } else {
        tipAmount.innerHTML = 'Tip $' + tip + ' each';
        function showTipAmount();
        showTipAmount = () =>{
            let x = tipAmount;
            x.className = 'show';
            setTimeout(function(){x.className = x.className.replace('show', '')}, 3000)
        }
    }
}

