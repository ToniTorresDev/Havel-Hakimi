$( document ).ready(function() { 
    $( '#sendButton' ).click(cleanSequence);
})

function cleanSequence() {
    var sequence = $( '#sequence' ).val();

    // var res = sequence.replace(",", "");
    // checkArray(sequence);

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

    
}

function check(x) {
    console.log("Check: " + x);
}

