function getCurrentBalance() {
    let balanceTotal = document.getElementById('balance');
    return balanceTotal;
}


// calculate total expenses & balance
function updateBalance() {

    const incomeInput = document.getElementById('income-input').value;
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const utilityInput = document.getElementById('utility-input').value;
    const othersInput = document.getElementById('others-input').value;
    const totalExpenses = document.getElementById('total-expenses');
    const totalBalance = getCurrentBalance();

    total = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(othersInput) + parseFloat(utilityInput);

    if (incomeInput >= 0 && foodInput >= 0 && rentInput >= 0 && utilityInput && othersInput >= 0 && incomeInput > totalExpenses) {
        totalExpenses.innerText = total;
        remaining = parseFloat(incomeInput) - total;
        totalBalance.innerText = remaining;
    }
    else {
        alert('Only positive value & numeric allowed\nEmpty string not allowed\nTotal Expenses value is greater than Income');
    }
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    updateBalance();
});

// calculate save money part
function saveMoney() {
    const incomeInput = document.getElementById('income-input');
    let incomeInputValue = incomeInput.value;
    let balance = getCurrentBalance();
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