var balance = 0;

function updateBalance() {
    var balanceElement = document.getElementById("balance");
    balanceElement.textContent = "Balance: $" + balance;
}

function deposit(event) {
    event.preventDefault();
    var amountElement = document.getElementById("amount");
    var amount = parseInt(amountElement.value);
    if (amount > 0) {
        balance += amount;
        updateBalance();
        var transactionStatus = document.getElementById("transactionStatus");
        transactionStatus.textContent = "Deposit of $" + amount + " successful.";
        amountElement.value = "";
    }
}

function withdraw() {
    var amountElement = document.getElementById("amount");
    var amount = parseInt(amountElement.value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        var transactionStatus = document.getElementById("transactionStatus");
        transactionStatus.textContent = "Withdrawal of $" + amount + " successful.";
        amountElement.value = "";
    } else {
        var transactionStatus = document.getElementById("transactionStatus");
        transactionStatus.textContent = "Insufficient funds.";
    }
}

var transactionForm = document.getElementById("transactionForm");
transactionForm.addEventListener("submit", deposit);
