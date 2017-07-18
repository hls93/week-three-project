console.log("hello world");
let displayResult = "";
let input = document.querySelector('#enter');
let number = document.querySelectorAll(".num");
let op = document.querySelectorAll(".operator");
let clear = document.querySelector('#clear');
let equals = document.querySelector('#r53')

//all numbers ============================
for (let i = 0; i < number.length; i++) {
    //click the button
  number[i].addEventListener("click", function(){
    //adding number to string
    displayResult += number[i].innerHTML
    //adding number to the input
    input.innerHTML += `${number[i].innerHTML}`
    console.log(number[i].innerHTML);
  });
}

//all operators ===========================
for (let i = 0; i < op.length; i++) {
    //click the button
  op[i].addEventListener("click", function(){
    //adding operators to string
    displayResult += op[i].value
    //adding operators to the input
    input.innerHTML += `${op[i].innerHTML}`
    console.log(op[i].innerHTML);
  });
}

//clear event ==================================
  clear.addEventListener("click", function(){
    //displayResult is empty, so when clicked, input button is cleared
    displayResult = "";
    console.log(clear.innerHTML);
    //adding a clear displayResult to the input
    input.innerHTML = displayResult;
  });

//equals event ================================
  equals.addEventListener("click", function(){
    console.log(equals.innerHTML);
    //displayResult equals displayResult evaluated
    //we add .toString to keep the numbers as a string in the input
    displayResult = eval(displayResult).toString();
    //adding the newly evaluated displayResult to the input
    input.innerHTML = displayResult;
  });
