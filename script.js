$( document ).ready(function() { 
    $( '#sendButton' ).click(cleanSequence);
})

function cleanSequence() {
    var sequence = $( '#sequence' ).val();

    // var res = sequence.replace(",", "");
    // check(sequence);

    var x = "";

    var arrSequence = sequence.split(x);

    calculate(arrSequence);
    
}

function calculate(arrSequence) {
    var arr = new Array();
    var count = 0;
    var newNum = 0;
    var re = true;



    do {
            arrSequence.sort(function(a, b){ return b-a });
        var numberOne = arrSequence[0];
        arrSequence.shift();
        check(arrSequence);
    
        for (const x in arrSequence) {
            if ( count < numberOne ) {
                console.log("if " + count + " < " + numberOne);
                newNum = arrSequence[x] - 1;
                console.log("Operation:" + newNum + " = " + arrSequence[x] + " - 1");
                arr.push(newNum);
                console.log('count: ' + count);
                count++;
            } 
        }
        count = 0;
        //check(arr);
        arrSequence.splice(0,arr.length);
        check(arrSequence);

        arrSequence = arrSequence.concat(arr);
        //arrSequence.sort(function(a, b){ return b-a });

        check(arrSequence);
        arr = [];

        var isValid = isGraphic(arrSequence);
        console.log("result: " + isValid);
        
        if (isValid === "done")
            isValid = false;

        //return false;
    } while (isValid);
}

function check(x) {
    console.log("Check: " + x);
}

function isGraphic(array) {
    const someIsNotZero = array.some(item => item != 0);
    const someIsNegative = array.some(item => item < 0);
    console.log("someIsNotZero: " + someIsNotZero);
    console.log("someIsNegative: " + someIsNegative);

    if ( someIsNotZero ) { // Si hay algun num != 0
        if ( someIsNegative ) // Y si hay algun negativo
            return false;
    } else 
        return "done";

    return true;
}