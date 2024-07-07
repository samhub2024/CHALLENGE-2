//Write a JavaScript function that accepts two numbers to generate an array between them.  

function arrayGenerator(start, end) {
    let startNumber = prompt("Enter start number: ");
    let endNumber = prompt("Enter end number: ");

    // Convert inputs to numbers
    start = parseFloat(startNumber);
    end = parseFloat(endNumber);
    // Exit the function if start or end is not a number
    if (isNaN(start) || isNaN(end)) {
        window.alert("Both start and end values must be numbers.");
        console.log("Both start and end values must be numbers.");
        return; 
    }  
    // Exit the function if end is not greater than start
    if (start >= end) {
        window.alert("End value must be greater than start value.");
        console.log("End value must be greater than start value.")
        return; 
    }

    let result = [];
    for (let a = start; a <= end; a++) {
        result.push(a);
    }

    window.alert(result);
    console.log(result)
}


arrayGenerator()
