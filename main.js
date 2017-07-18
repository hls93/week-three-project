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
    //adding number to the array
    // displayArray.push(number[i].innerHTML)

    input.innerHTML += `${number[i].innerHTML}`
    console.log(number[i].innerHTML);
  });
}

//all operators ===========================
for (let i = 0; i < op.length; i++) {
    //click the button
  op[i].addEventListener("click", function(){
    //adding number to string
    displayResult += op[i].value
    //adding number to the array
    // displayArray.push(op[i].innerHTML)

    input.innerHTML += `${op[i].innerHTML}`
    console.log(op[i].innerHTML);
  });
}

//clear event ==================================
  clear.addEventListener("click", function(){
    displayResult = "";
    console.log(clear.innerHTML);
    input.innerHTML = displayResult;
  });

//equals event ================================
  equals.addEventListener("click", function(){
    console.log(equals.innerHTML);
    displayResult = eval(displayResult).toString();
    input.innerHTML = displayResult;
  });
