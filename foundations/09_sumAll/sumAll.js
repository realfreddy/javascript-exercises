const sumAll = function(num1,num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    }
    let calc = 0;
    if (num1 < num2){
    for (let i = num1; i <= num2; i++){
        calc += i
    }
} else {
    for (let i = num1; i >= num2; i--){
        calc += i
    }

}
    return calc
};

// Do not edit below this line
module.exports = sumAll;
