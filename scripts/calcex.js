
function checkOperator(operatorToAdd){
    var checkForOperator = input[input.length-2];
    if(operatorToAdd === 'C'){
        input = '';

        return input;
    }
    if(operatorToAdd === checkForOperator){
        input = input;
        console.log('same');
        return input;

    }else if((operatorToAdd === ' x ') || (operatorToAdd === ' - ') || (operatorToAdd === ' + ') || (operatorToAdd === ' ÷ ') && $.isNumeric(input[input.length-1]) ){
        input = input.slice(0,-3) + ' ' + operatorToAdd + ' ' ;
        console.log(operatorToAdd);
        return input;
    }else{
        input = input + ' ' + operatorToAdd + ' ';
        console.log('else');
        return input;
    }
};

