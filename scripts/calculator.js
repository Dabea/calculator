/**
 * Created by aanderson on 10/31/2015.
 */
'use strict';


var input = '';
var selected = false;
var firstNumber = false;
var firstDecmial = false;
var operator = false;
var secondNumber = false;
var secondDecmial = false;
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

$('.btn-number-decmial').click(function(){
    input = $('.input-area').html();
    var add = this.firstChild.innerHTML;
    if(  (firstNumber === true) && (operator === false)  && (firstDecmial === false )  ){
        input = input + add;
        console.log('first');
        $('.input-area').html(input);
        firstDecmial = true;
    }
    if( secondNumber === true  && secondDecmial === false ){
        input = input + add;
        console.log('second');
        $('.input-area').html(input);
        secondDecmial = true;
    }
});

$('.btn-operator-submit').click(function(){
    var operator = findOperator();
    var numbers = input.split(operator);
    choseMathEquations(operator, numbers[0], numbers[1]);
    decmialCheck();
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
        firstDecmial = false;
        operator = false;
        secondNumber = false;
        secondDecmial = false;
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


function findOperator(){
    var  string = input;
    for(var operatorIrritator = 0; operatorIrritator < operatorList.length; operatorIrritator++){

        for( var stringIrritator = 0; stringIrritator < string.length; stringIrritator++  ){
            if(operatorList[operatorIrritator] === string[stringIrritator] ){
                return operatorList[operatorIrritator];
            }

        }
    }
}


// Might be repaced with an object with methods vs a switch
function choseMathEquations(mathOperator, firstNumber, secondNumber){
    switch(mathOperator){
        case '+':
            doSum(firstNumber,secondNumber);
            break;
        case '-':
            doSubtract(firstNumber, secondNumber);
            break;
        case 'x':
            doProduct(firstNumber, secondNumber);
            break;
        case '÷':
            doDivision(firstNumber,secondNumber);
            break;
    }
}

function doSum(firstNumber, secondNumber){
    var firstInt = parseFloat(firstNumber);
    var secondInt = parseFloat(secondNumber);
    var sum = firstInt + secondInt;
    operator = false;
    secondNumber = false;
    firstNumber = true;
    $('.input-area').html(sum);

}

function doSubtract(firstNumber, secondNumber){
    var firstInt = parseFloat(firstNumber);
    var secondInt = parseFloat(secondNumber);
    var difference = firstInt - secondInt;
    operator = false;
    secondNumber = false;
    firstNumber = true;
    $('.input-area').html(difference);

}


function doProduct(firstNumber, secondNumber){
    var firstInt = parseFloat(firstNumber);
    var secondInt = parseFloat(secondNumber);
    var product = firstInt * secondInt;
    operator = false;
    secondNumber = false;
    firstNumber = true;
    $('.input-area').html(product);

}


function doDivision(firstNumber, secondNumber){
    var firstInt = parseFloat(firstNumber);
    var secondInt = parseFloat(secondNumber);
    var quotient = firstInt / secondInt;
    operator = false;
    secondNumber = false;
    firstNumber = true;
    $('.input-area').html(quotient);

}


function decmialCheck(){
    if(input.indexOf('.') >= 0 ){
        firstDecmial = true;
        secondDecmial = false;
        return true;
    }else{
        return false;
    }
}
