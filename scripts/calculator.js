/**
 * Created by aanderson on 10/31/2015.
 */
'use strict';


var input = '';
var selected = false;
var firstNumber = false;
var operator = false;
var secondNumber = false;
var operatorList = ['x', '*', '+', '-', '/', '÷', '%' ];


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
    doMath();
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
        operatorReplace(operatorToAdd);
        return input;
    }


}

function operatorReplace(operatorToAdd){
    var  string = input;
    for(var operatorIrritator = 0; operatorIrritator < operatorList.length; operatorIrritator++){
        for( var stringIrritator = 0; stringIrritator < string.length; stringIrritator++  ){
            if(string.indexOf(operatorList[operatorIrritator]) > 0){
                input = input.replace((operatorList[operatorIrritator]), operatorToAdd );
            }
        }
    }
}


function doMath(){
    var  string = input;
    for(var operatorIrritator = 0; operatorIrritator < operatorList.length; operatorIrritator++){
        for( var stringIrritator = 0; stringIrritator < string.length; stringIrritator++  ){
            return operatorList[operatorIrritator];
        }
    }
}
// Might be repaced with an object with methods vs a switch
function choseMathEquations(mathOperator){
    switch(mathOperator){
        case '+':
            doSum();
            break;

    }
}

function formatEquation(){

}