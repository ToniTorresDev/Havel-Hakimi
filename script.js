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

    arrSequence.sort();
    
    var numberOne = arrSequence[0];
    
    arrSequence.shift();
    check(arrSequence);

    var count = 0;
    var newNum = 0;
    
    for (const x in arrSequence) {
        
        if ( count < numberOne ) {

            console.log("if " + count + " < " + numberOne);
            newNum = arrSequence[x] - 1;
            console.log("Operation:" + newNum + " = " + arrSequence[x] + " - 1");
            arr.push(newNum);
        }
        
        count++;
    }
    check(arr);
    arrSequence.splice(0,arr.length);
    check(arrSequence);
    arrSequence = arrSequence.concat(arr);
    
    arrSequence.sort();
    check(arrSequence);
    arr = [];

}

function check(x) {
    console.log("Check: " + x);
}