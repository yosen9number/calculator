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
        let firstOperand = Number(operands[0]);


        let a = operators.split("");
        console.log(a);


        for (let i = 0; i < operators.length; i++) {
            operator = operators[i];
            if (operator === "*") {
                result = result * Number(operands[i+1]);
            } else if (operator === "/") {
                result = result / Number(operands[i+1]);
            }

            /*else if ((operator === "+") || (operator === "-")) {
                result = (operator === "+") ? result + Number(numbers[i+1]) : result - Number(numbers[i+1]);
            }*/
            console.log(operator, result);
        }
        return result;
    }
})();


