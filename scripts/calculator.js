/**
 * Created by aanderson on 10/31/2015.
 */
'use strict';

// Might place all these variables in an Object
var input = '';
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
        $('.input-area').html(input);
        firstDecmial = true;
    }
    if( secondNumber === true  && secondDecmial === false ){
        input = input + add;
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


