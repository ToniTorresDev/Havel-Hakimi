document.addEventListener("DOMContentLoaded", function(event) { 
    var ele = document.getElementById("sendButton");
    ele.addEventListener("click", cleanSequence)
});

function cleanSequence() {
    // Clean HTML text
    var showActualSequence = document.getElementById("actualSequence");
    showActualSequence.innerHTML = "";
    var mssg = document.getElementById("mssg");
    mssg.innerHTML = "";
    document.getElementById("procedure").innerHTML = "";
    
    // Get sequence, show it in HTML and tranform to array
    var sequence = document.getElementById("sequence").value;

    if (!isOnlyNumeric(sequence)) {
        showActualSequence.innerHTML = "<p class='red'>You only can put numbers!</p>";
    } else {
        showActualSequence.innerHTML = "<b> Sequence: </b>" + sequence;
        var arrSequence = sequence.split("");
        calculate(arrSequence); // Execute the algorithm Havel-Hakimi
    }

    // Set layout in response
    document.getElementById("appear").classList.add("layout"); 
}

/*
    RULES TO BE GRAPHIC:
        Sequence cannot be graphic when...
        - Rule 1: if the Higher number cannot be bigger to sequence length
        - Rule 2: if we have a set of odd numbers that is odd. 
            Example: 
                3 3 3 2 = 3 odd numbers -> 3 is odd. not ok.
                3 3 2 2 = 2 odd numbers -> 2 is even ok.
        - Rule 3: if sequence end with some negative number.
        It is graphic...
        - Rule 4: if sequence end with all zero's.
*/

function calculate(arrSequence) {
    var arr = new Array();
    var count = 0;
    var step = 0;
    var newNum = 0;

    // Loop --> do While --> until sequence is graphic or not.
    do {
        // Order from highest to lowest
        sortNumbers(arrSequence);
        // Save in a variable the first position
        var numberOne = arrSequence[0];
        // Remove first position
        arrSequence.shift();

        // Before we do Havel-Hakimi we need to check Rule1
        if (numberOne > arrSequence.length) {
            mssg.innerHTML = "<p>This sequence <b>cannot be graphic</b>. </p> <p>The Higher number '" + numberOne + "' cannot be bigger to sequence length '" + arrSequence.length + "'.</p>";
            break;
        }
            
        // loop sequence, subtract one every number from secuence array but only 'numberOne' positions and save that numbers in a new array.
        for (const x in arrSequence) {
            if ( count < numberOne ) {
                newNum = arrSequence[x] - 1;
                arr.push(newNum);
                count++;
            } 
        }
        count = 0; // reset counter
        /* 
        Before set new numbers we need to remove from main array that numbers that were affected, 
        then concat both arrays and clean second array. */
        arrSequence.splice(0, arr.length);
        arrSequence = arrSequence.concat(arr);
        arr = [];

        // Show steps of the algorithm
        showProcedure(arrSequence, step);

        // Check if it is graphic and
        var isValid = isGraphic(arrSequence);

        switch (isValid) {
            case false:
                /* Rule 3: Negative number appear, so stop looping and show message */
                var isOdd = checkOddNumbers();
                document.getElementById('mssg').innerHTML = "<p>This sequence have a negative number, so is <b>not graphic</b>.</p>";
                if ( isOdd ) 
                    document.getElementById('mssg').innerHTML += "<p>Cannot be graphic because <b>the set of odd numbers is odd</b>. </p> <p> <b>Example:</b> sequence: 3 3 3 2 = 3 odd numbers -> 3 is odd.</p>";
                break;
            case "done":
                /* Rule 4: Sequence is all 0's, so stop looping and show message */
                document.getElementById('mssg').innerHTML = "<p>This sequence <b>is graphic</b>.</p>";
                isValid = false; /* Stop loop */
                break;
            default:
                document.getElementById('mssg').innerHTML = "<p>Something went wrong. Try later.</p>";
                break;
        }

        step++;
    } while (isValid);
}

function showProcedure(arr, step) {
    var text = "";

    sortNumbers(arr);

    for (const key in arr) {
        if (arr.hasOwnProperty(key)) {
            text += arr[key];
        }
    }
    document.getElementById('procedure').innerHTML += "<p> <b>Step " + step + ": </b>" + text + "</p>";
    step++;
}

function isGraphic(array) {
    const someIsNotZero = array.some(item => item != 0);
    const someIsNegative = array.some(item => item < 0);

    if ( someIsNotZero ) { // If there are some number different to 0
        if ( someIsNegative ) // If there are some negative number
            return false;
    } else 
        return "done";

    return true;
}

function sortNumbers(arr) {
    return arr.sort(function(a, b){ return b-a });
}

function checkOddNumbers() {
    var result = 0, odd = 0, num = 0;
    // Get main sequence and transform to array
    var sequence = document.getElementById("sequence").value;
    var arr = sequence.split("");

    // loop the sequence
    for (const i in arr) {
        if (arr.hasOwnProperty(i)) {
            // Check how many odd numbers we have in the sequence 
            num = arr[i] / 2;
            /* number result is downward and substract with the number without downward, 
            if result is different to 0 (odd) return true. Example 1.3 - 1 != 0 -> true */
            result = (num - Math.floor(num)) !== 0; // 
            if ( result ) // decimal number (odd) = true
                odd++;
        }
    }
    // Once we have number of odds we need to compare again to see if it's odd
    num = odd / 2;
    result = (num - Math.floor(num)) !== 0;
    if ( result )
        return true; // is odd

    // If it's not odd
    return false;
}

function isOnlyNumeric(input){
    var reg = /^\d+$/; 
    return (reg.test( input ));
}