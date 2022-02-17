// calculate total expenses & balance
function updateBalance() {

    const incomeInput = document.getElementById('income-input').value;
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const utilityInput = document.getElementById('utility-input').value;
    const othersInput = document.getElementById('others-input').value;

    const total = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(othersInput) + parseFloat(utilityInput);

    if (isNaN(total) || total > incomeInput){
        alert("you have not enough income to expense");
    }else if(incomeInput <0 || foodInput < 0 || rentInput < 0 || utilityInput < 0 || othersInput < 0){
        alert("Input only positive value");
    }else{
        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = total;
        const totalBalance = document.getElementById('balance');
        totalBalance.innerText = incomeInput - parseInt(totalExpenses.innerText);
    }
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    updateBalance();
});

// calculate save money part
function saveMoney() {
    const incomeInput = document.getElementById('income-input');
    let incomeInputValue = incomeInput.value;
    let balance = document.getElementById('balance');
    let remainingBalanceText = document.getElementById('remaining-balance');
    const saveMoneyInput = document.getElementById('save-money-input').value;
    const savingAmount = document.getElementById('saving-amount');

    // if (incomeInputValue >= 0 && saveMoneyInput >= 0) {
    //     let savesMoney = (incomeInputValue * saveMoneyInput) / 100;
    //     remainingBalance = parseFloat(balance.innerText) - savesMoney;
    //     savingAmount.innerText = savesMoney;
    //     remainingBalanceText.innerText = remainingBalance;
    // }
    // else {
    //     alert('Negative value & String not allowed');
    // }

    if (isNaN(saveMoneyInput) || incomeInputValue > parseFloat(balance.innerText)) {
        alert("you have not enough money for savings");
      } else if (saveMoneyInput < 0) {
        alert("don't write a nagative value");
      } else {
        savingAmount.innerText = incomeInputValue;
        remainingBalanceText.innerText =
          parseFloat(balance.innerText) - parseFloat(savingAmount.innerText);
      }
}