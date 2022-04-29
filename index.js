document.getElementsByClassName("amountbutton").onclick = function () {
  var initialAmount = document.getElementsByClassName("initial-income").innerHTML;
  console.log(initialAmount);
};

var mylist = document.getElementById("myList");
mylist.onchange = function (e) {
  mylist = e.target.value;
  // console.log(mylist);
};

var income = document.querySelector("#income");
var incomeNum = parseInt(income.innerHTML);

var moneyleft = document.querySelector(".moneyleft");
var moneyleftNum = parseInt(moneyleft.innerHTML);
var expenses = document.querySelector(".expenses");
var expensesNum = parseInt(expenses.innerHTML);
var amount = document.getElementById("amount");
// document.getElementById("buttonadd").onclick = function () {
//   var myText = document.getElementById("myText").value;
//   console.log(myText);
//-------DESCRIPTION DISPLAY------
//   var incomeDes = document.getElementsByClassName("income-des");
//   var expensesDes = document.getElementsByClassName("expenses-des");
//   var paragraph = document.createElement("p");
//   var text = document.createTextNode(myText);
//   // text.innerHTML = `${myText} <span class="span">${amountNum}</span>`;
//   // console.log(text);
//   paragraph.appendChild(text);
//   // console.log(paragraph)
//   // document.getElementsByClassName("income-des").appendChild(paragraph);
//   document.getElementById("income-des").appendChild(paragraph);
//   console.log(paragraph);
//   paragraph.classList.add("paragraph-styling");
//   // paragraph.classList.add("income-des-p");
//   // incomeInput = incomeDes.document.createTextNode(myText);
//   // // incomeInput = `<p class="paragraph-styling">${myText} <span>${amountNum}</span></p>`;
//   // console.log(incomeInput);
//   // document.getElementsByClassName("income-des").appendChild(incomeInput);

//   // incomeDes.appendChild(document.createTextNode(myText));
//   // incomeDes.appendChild(paragraph);
//   //  ------AMOUNT DISPLAY----

//   var amountDisplay = document.createElement("span");
//   // var amountText = document.createTextNode(amountNum);
//   // // console.log(amountNum);
//   paragraph.appendChild(amountDisplay);
//   amountDisplay.innerHTML = `${amountNum}`;

//   // document.getElementById("income-des-p").appendChild(amountDisplay);
//   // console.log(amountDisplay);
//   amountDisplay.classList.add("amount-styling");
//

// -------------------------DIV CREATION----------------

// var incomeDes = document.getElementsByClassName("income-des");
// var expensesDes = document.getElementsByClassName("expenses-des");
// var divCreate = document.createElement("div");
// var dest = document.getElementById("income-des");
// dest.appendChild(divCreate);
// divCreate.classList.add("new-div");
// var paragraph = document.createElement("p");
// divCreate.appendChild(paragraph);
// paragraph.innerHTML = `${myText}`;
// paragraph.classList.add("paragraph-styling");
// var amountDisplay = document.createElement("h2");
// amountDisplay.innerHTML=`+ ${amountNum}`
// divCreate.appendChild(amountDisplay);
// amountDisplay.classList.add("amount-styling");
//};

var amountNum;
amount.onchange = function (e) {
  amountNum = parseInt(e.target.value);
};

// console.log(amountNum);
// console.log(typeof parseInt(amountNum));
var addButton = document.getElementById("buttonadd");
// console.log(typeof moneyleftNum);
addButton.addEventListener("click", function () {
  var myText = document.getElementById("myText").value;
  console.log(myText);
  if (mylist === "inc") {
    // console.log(amountNum);
    // console.log(typeof amountNum);
    incomeNum = incomeNum + amountNum;
    // console.log(incomeNum);
    moneyleftNum = amountNum + moneyleftNum;
    income.innerHTML = incomeNum;
    moneyleft.innerHTML = moneyleftNum;
    // console.log(moneyleftNum);
    var incomeDes = document.getElementsByClassName("income-des");
    var expensesDes = document.getElementsByClassName("expenses-des");
    var divCreate = document.createElement("div");
    var dest = document.getElementById("income-des");
    dest.appendChild(divCreate);
    divCreate.classList.add("new-div");
    var paragraph = document.createElement("p");
    divCreate.appendChild(paragraph);
    paragraph.innerHTML = `${myText}`;
    paragraph.classList.add("paragraph-styling");
    var amountDisplay = document.createElement("h2");
    amountDisplay.innerHTML = `+ ${amountNum}`;
    divCreate.appendChild(amountDisplay);
    amountDisplay.classList.add("amount-styling");
  } else if (mylist === "exp") {
    expensesNum = expensesNum + amountNum;
    moneyleftNum = moneyleftNum - amountNum;
    // console.log(expensesNum);
    // console.log(moneyleftNum);
    moneyleft.innerHTML = moneyleftNum;
    expenses.innerHTML = expensesNum;
    var incomeDes = document.getElementsByClassName("income-des");
    var expensesDes = document.getElementsByClassName("expenses-des");
    var divCreate = document.createElement("div");
    var dest = document.getElementById("expenses-des");
    // divCreate.textContent="hello";
    // dest.appendChild(divCreate);
    document.getElementById("expenses-des").appendChild(divCreate);
    console.log(divCreate);
    divCreate.classList.add("new-exp-div");
    var paragraph = document.createElement("p");
    divCreate.appendChild(paragraph);
    paragraph.innerHTML = `${myText}`;
    paragraph.classList.add("paragraph-exp-styling");
    var amountDisplay = document.createElement("h2");
    amountDisplay.innerHTML = `- ${amountNum}`;
    divCreate.appendChild(amountDisplay);
    amountDisplay.classList.add("amount-exp-styling");
  }
});
