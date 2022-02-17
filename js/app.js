function balanceText() {
    let balance = document.getElementById('balance');
    return balance;
}

// calculate total expenses & balance
function updateBalance() {

    const incomeInput = document.getElementById('income-input').value;
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const utilityInput = document.getElementById('utility-input').value;
    const othersInput = document.getElementById('others-input').value;
    let totalExpenses = document.getElementById('total-expenses');
    balanceText();

    if (incomeInput >= 0 && foodInput >= 0 && rentInput >= 0 && utilityInput && othersInput >= 0) {
        total = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(othersInput) + parseFloat(utilityInput);
        totalExpenses.innerText = total;
        remaining = parseFloat(incomeInput) - total;
        balance.innerText = remaining;
    }
    else {
        alert('Negative value & String not allowed');
    }
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    updateBalance();
});

// calculate save money part
function saveMoney() {
    const incomeInput = document.getElementById('income-input');
    let incomeInputValue = incomeInput.value;
    balanceText();
    let remainingBalanceNumber = document.getElementById('remaining-balance');
    const saveMoneyInput = document.getElementById('save-money-input').value;
    const savingAmount = document.getElementById('saving-amount');

    if (incomeInputValue >= 0 && saveMoneyInput >= 0) {
        let savesMoney = (incomeInputValue * saveMoneyInput) / 100;
        remainingBalance = parseFloat(balance.innerText) - savesMoney;
        savingAmount.innerText = savesMoney;
        remainingBalanceNumber.innerText = remainingBalance;
    }
    else {
        alert('Negative value & String not allowed');
    }
}