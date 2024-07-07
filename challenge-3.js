//A function to  generate an arrayband only output the prime numbers only
function primeSelector() {
    let firstNumber = prompt("Enter the first number:");
    let lastNumber = prompt("Enter the last number:")


//for the function to work you will have to use numbers,,,so you have to change the inputs to numbers
let first = parseInt(firstNumber);
let last = parseInt(lastNumber);

if (isNaN(first) || isNaN(last)) {
    window.alert("Please make sure the first and last values are numbers");
    console.log("Please make sure the first and last values are numbers");
    //if the values are not numbers,,you exit the function
    return;
}
let result = [];
for (let num = first; num <= last; num++) {
    if (isPrime(num)){
        result.push(num);
    }
}
  window.alert(result)
  console.log(result)  
  //A function to check if a number is prime  
  function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let n = 2; n <= Math.sqrt(num); n++) {
        if (num % n === 0) {
            return false;
                
    } else {
        return true;
    }
    }
  }
  
  }
  primeSelector()
