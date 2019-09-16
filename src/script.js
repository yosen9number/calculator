(function () {
    const inputValue = document.getElementById("calc_input") ;
    const calcValue = document.getElementById("calc_value") ;
    const pattern = /([0-9]+)([\+|\-|\*|\/]+)/;

    form.addEventListener("change", function(event) {
        var target = event.target;
        var a = target.value.split(/([0-9]+)([\+|\-|\*|\/]+)/);
        console.log(a, a[1].length, a[2].length);

        if (!pattern.test(target.value)){
            target.classList.add("error");
        } else if (a[1].length !== ((a[2].length) + 1)){
            target.classList.add("error");
        } else {
            target.classList.remove("error");
            calcValue.value = calculate(a[1], a[2]);
            return true;
        }
    });

    function calculate(operands, operators) {
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
    }
})();


