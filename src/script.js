(function () {
    const inputValue = document.getElementById("calc_input") ;
    const calcValue = document.getElementById("calc_value") ;
    const pattern = /([0-9]+)([\+|\-|\*|\/]+)/;

    form.addEventListener("change", function(event) {
        var target = event.target;
        let stack = [];

        target.value.split(' ').forEach((token) => {
            if (token in operators) {
                let [y, x] = [stack.pop(), stack.pop()];
                console.log(x, y);
                stack.push(operators[token](x, y));
            } else {
                stack.push(parseFloat(token));
            }
        });
            calcValue.value = stack.pop();
            console.log(calcValue.value, stack);
    });

    const operators = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y
    };


    /*function calculate(operands, operators) {
        let result = Number(operands[0]);
        let operator;
        let firstOperatorsResult = 0;

        let arrOperators = operators.split("");
        console.log(arrOperators);

        let arrOperands = operands.split("");
        console.log(arrOperands);


        for (let i = 0; i < arrOperators.length; i++) {
            operator = arrOperators[i];
            if (operator === "*") {
                firstOperatorsResult = Number(operands[i]) * Number(operands[i+1]);
                new arrOperators.splice(i, 1);
                new arrOperands.splice(i, 2, firstOperatorsResult);
            } else if (operator === "/") {
                firstOperatorsResult = Number(operands[i]) / Number(operands[i+1]);
                new arrOperators.splice(i, 1);
                new arrOperands.splice(i, 2, firstOperatorsResult);
            }
        }
        for (let j = 0; j < arrOperators.length; j++) {
            operator = arrOperators[j];
            if (operator === "+") {
                result = result + Number(operands[j+1]);
            } else if (operator === "-") {
                result = result - Number(operands[j+1]);
            }
            console.log(arrOperators, arrOperands, result);
        }
        return result;
    }*/
})();


