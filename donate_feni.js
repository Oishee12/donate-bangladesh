const donateBtn = document.getElementById('donate_btn_noakhali');
const donateInput = document.getElementById('donate_input_noakhali');
const totalDonate = document.getElementById('total_donate_noakhali');
const remainingAmount = document.getElementById('remaining-input');

const donationModal = document.getElementById('donation_modal');
const closeModal = document.getElementById('close_modal');

let totalDonation = 0;
let remainingAmountnav = 20000;

donateBtn.addEventListener('click', function () {
    const amount = parseFloat(donateInput.value);
   if (!amount || amount <= 0 || amount > remainingAmountnav){
    alert('please enter valid amount');
    donateInput.value = '';
    totalDonate = totalDonate;
    remainingAmount = remainingAmount;
   }

   totalDonation = totalDonation + amount;
   totalDonate.textContent = `${totalDonation} BDT`;
    
   remainingAmountnav -= amount;
   remainingAmount.textContent = `${remainingAmountnav} BDT`;

   donationModal.classList.remove('hidden');
   donateInput.value = '';
})

closeModal.addEventListener('click', function(){
    donationModal.classList.add('hidden');
})
