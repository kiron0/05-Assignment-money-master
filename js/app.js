document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input').value;
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const utilityInput = document.getElementById('utility-input').value;
    const othersInput = document.getElementById('others-input').value;
    let totalExpenses = document.getElementById('total-expenses');
    let balance = document.getElementById('balance');
    total = parseInt(foodInput) + parseInt(rentInput) + parseInt(othersInput) + parseInt(utilityInput);
    totalExpenses.innerText = total;
    remaining = parseInt(incomeInput) - total;
    balance.innerText = remaining;

});

document.getElementById('save-money').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    let incomeInputValue = incomeInput.value;
    let balance = document.getElementById('balance').innerText;
    let remainingBalanceNumber = document.getElementById('remaining-balance');
    const saveMoneyInput = document.getElementById('save-money-input').value;
    const savingAmount = document.getElementById('saving-amount');
    let savesMoney = (incomeInputValue * saveMoneyInput) / 100;
    remainingBalance = parseFloat(balance) - savesMoney;
    savingAmount.innerText = savesMoney;
    remainingBalanceNumber.innerText = remainingBalance;
})