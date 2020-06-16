//business logic
function Account(firstName, lastName, balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}

Account.prototype.add = function(deposit) {
  this.balance += deposit;
}

Account.prototype.sub = function(withdrawal) {
  this.balance -= withdrawal;
}

//user interface logic
function displayAccountDetails(accountToDisplay) {
  $("span#name-output").text(accountToDisplay.firstName);
  $("span#balance-output").text(accountToDisplay.balance.toFixed(2));
}

$(document).ready(function() {

  
  let account = new Account('', '', 0);

  $("#create").click(function(event) {
    event.preventDefault();

    account.firstName = $("input#first-name").val();
    account.lastName = $("input#last-name").val();
    account.balance = parseFloat($("input#initial-deposit").val());

    $(".hide").show();
    $(".show").hide();
    displayAccountDetails(account);
  });
  $("#add").click(function() {
    event.preventDefault();
    const deposit = parseFloat($("input#deposit-amount").val());
    const beginningBalance = account.balance;
    account.add(deposit);
    $("table#output").append(`<tr><td>${new Date().toDateString()}</td> <td>Deposit</td> <td>${beginningBalance.toFixed(2)}</td> <td>${deposit}</td> <td>${account.balance.toFixed(2)}</td></tr>`);

    displayAccountDetails(account);;
  });
  $("#subtract").click(function() {
    event.preventDefault();
    const withdrawal = parseFloat($("input#withdrawal-amount").val());
    const beginningBalance = account.balance;
    account.sub(withdrawal);
    $("table#output").append(`<tr><td>${new Date().toDateString()}</td> <td>Withdrawal</td> <td>${beginningBalance.toFixed(2)}</td> <td>${withdrawal}</td> <td>${account.balance.toFixed(2)}</td></tr>`);;

    displayAccountDetails(account);
  });
});
