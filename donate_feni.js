const donateFeniBtn = document.getElementById('donatefeni_btn');
const donateFeniInput = document.getElementById('donatefeni_input');
const donateFeniTotal = document.getElementById('donatefeni_total');
const donateRemaining = document.querySelector('.remaining-donation');

let totalFeniDonation = 600;
let remainingDonation = parseFloat(donateRemaining.textContent);
// console.log(remainingDonation);

donateFeniBtn.addEventListener('click', function(){
    const feniAmount = parseFloat(donateFeniInput.value);  
    if(!feniAmount || feniAmount <= 0 || feniAmount > remainingDonation){
        alert('please enter valid amount');
        donateFeniInput.value = '';
        totalFeniDonation = totalFeniDonation;
        remainingDonation = remainingDonation;
    }

    totalFeniDonation += feniAmount;
    donateFeniTotal.textContent = `${totalFeniDonation} BDT`;
    donateFeniInput.value = '';
    remainingDonation -= feniAmount;

     donateRemaining.textContent = `${remainingDonation} BDT`;
})
