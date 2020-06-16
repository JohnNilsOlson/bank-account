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
    $("ul#activity").prepend(`<li>${new Date().toDateString()} Deposit: ${beginningBalance.toFixed(2)} + ${deposit} = ${account.balance.toFixed(2)}</li>`);

    displayAccountDetails(account);;
  });
  $("#subtract").click(function() {
    event.preventDefault();
    const withdrawal = parseFloat($("input#withdrawal-amount").val());
    const beginningBalance = account.balance;
    account.sub(withdrawal);
    $("ul#activity").prepend(`<li>${new Date().toDateString()} Withdrawal: ${beginningBalance.toFixed(2)} - ${withdrawal} = ${account.balance.toFixed(2)}</li>`);

    displayAccountDetails(account);
  });
});
