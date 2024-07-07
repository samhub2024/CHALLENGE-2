//Write a function that accepts a string as input and swaps the case of each character

// This script efficiently swaps the case of characters in a given string.

// The caseSwapper function iterates through each character of the input string,
function caseSwapper(inputString){
    let swapped = "";
    // Using a for loop to iterate over each character ensures that the swapping process is applied to each string
    for (let a = 0; a < inputString.length; a++){
    let character = inputString.charAt(a);
    if (character === character.toUpperCase()){
         swapped += character.toLowerCase();    
    }else {
        swapped += character.toUpperCase();
    }
}
    window.alert(swapped)
    console.log(swapped)
}
const string = prompt("please type-in your string:");
let changed = caseSwapper(string);
window.alert(changed)
console.log(changed)
