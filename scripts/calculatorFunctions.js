/**
 * Created by aanderson on 11/7/2015.
 */
'use strict';

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
    input = $('.input-area').html();
    if(input.indexOf('.') >= 0 ){
        firstDecmial = true;
        return true;
    }else{
        return false;
    }
}
