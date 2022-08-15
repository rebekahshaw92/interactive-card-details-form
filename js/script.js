const cardholderName = document.getElementById('cardholder');
const nameOnCard = document.getElementById('name');
const cardNumber = document.getElementById('card-number');
const cardholderNumber = document.getElementById('cardholderNumber');
const errorCardHolderNumber = document.getElementById('errorCardHolderNumber');
const cardholderMonth = document.getElementById('cardholderMonth');
const month = document.getElementById('month');
const cardholderYear = document.getElementById('cardholderYear');
const year = document.getElementById('year');
const cardholderCVC = document.getElementById('cardholderCVC');
const cardCcv = document.getElementById('cardCcv');
const form = document.getElementById('card-form');
const errorCardHolderName = document.getElementById('errorCardHolderName');
const errorCardHolderDate = document.getElementById('errorCardHolderDate');
const errorCardHolderCVC = document.getElementById('errorCardHolderCVC');
const continueBtn = document.getElementById('continueBtn');
const thankYou = document.getElementById('thankYou');
const continueForm = document.getElementById('continueForm');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isNaN(cardholderNumber.value)) {
        errorCardHolderNumber.textContent = 'Wrong format, numbers only';
        cardholderNumber.classList.add('error');
    }

    if (cardholderNumber.value == '') {
        errorCardHolderNumber.textContent = "Can't be blank";
        cardholderNumber.classList.add('error');
    }

    if (cardholderName.value == '') {
        errorCardHolderName.textContent = "Can't be blank";
        cardholderName.classList.add('error');
    }

    if (cardholderMonth.value == '' || cardholderYear.value == '') {
        errorCardHolderDate.textContent = "Can't be blank";
        cardholderMonth.classList.add('error');
        cardholderYear.classList.add('error');
    }

    if (cardholderCVC.value == '') {
        errorCardHolderCVC.textContent = "Can't be blank";
        cardholderCVC.classList.add('error');
    }

    if(cardholderName.value != '' && cardholderMonth.value != '' && cardholderYear.value != '' && cardholderCVC.value != '') {
        form.classList.add('hidden');
        thankYou.classList.remove('hidden');
    }
});

continueForm.addEventListener("submit", () => {
    thankYou.classList.add('hidden');
    form.classList.remove('hidden');
});



cardholderName.addEventListener('input', () => {
    nameOnCard.textContent = cardholderName.value;
});

cardholderNumber.addEventListener('input', () => {
    let cardNumberReplace = cardholderNumber.value;
    // errorCardHolderNumber.textContent = '';
    // cardholderNumber.classList.add('error');
    cardNumberReplace = cardNumberReplace.replace(/\D/g, '').replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
    cardNumber.textContent = cardNumberReplace;
});

cardholderMonth.addEventListener('input', () => {
    month.textContent = cardholderMonth.value;
    
});

cardholderYear.addEventListener('input', () => {
    year.textContent = cardholderYear.value;
});

cardholderCVC .addEventListener('input', () => {
    cardCcv.textContent = cardholderCVC.value;
})
