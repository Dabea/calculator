/**
 * Created by aanderson on 10/31/2015.
 */
'use strict';


var input = '';
var selected = false;
var firstNumber = false;
var operator = false;
var secondNumber = false;


$('.btn-number').click(function(){
    input = $('.input-area').html();
    var add = this.firstChild.innerHTML;
    input = input + add;
    $('.input-area').html(input);
    firstNumber = true;
    if(operator){
        secondNumber = true;
    }
});


$('.btn-operator-submit').click(function(){
    var safeInput = stripInput(input);
    try {
        var equals =  eval(safeInput);
    } catch (e) {
        if (e instanceof SyntaxError) {

        }
    }
    // console.log(equals);
    if($.isNumeric( equals )){
        operator = false;
        secondNumber = false;
        $('.input-area').html(equals);

    }else{
        $('.input-area').html('Error');
    }

});


$('.btn-operator').click(function(){
    input = $('.input-area').html();
    var add = this.firstChild.innerHTML;
    if(add === undefined){
        add = ' ÷ ';
    }
    var operator = input[input.length-2];

    input = checkOperator(add);

    $('.input-area').html(input);

});

/*
 * Keyboard Listener activation State
 */
$('.input-area').click(function () {

    $('.input-area').addClass('selected');
    selected = true;
    return false;
});

$(document).click(function() {
    selected = false;
    $('.input-area').removeClass('selected');
});


function stripInput(input){
    var str = input;
    var res = str.replace(/\sx\s/g , '*');
    res = res.replace(/\s÷\s/g , '/');
    var cleanString = res.replace(/[|&;$%@"<>,:?]/g, "");
    return cleanString;
}


function checkOperator(operatorToAdd){
    if(operatorToAdd === 'C'){
        input = '';
        firstNumber = false;
        operator = false;
        secondNumber = false;
        return input;
    }
    if(firstNumber && !operator){
        operator = true;
        return input + operatorToAdd;
    }
    if(operator){
        checkFormat();
    }


}

function checkFormat(){
    var  string = input;

}
