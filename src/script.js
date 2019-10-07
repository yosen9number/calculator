(function () {
    const calcValue = document.getElementById("calc_value") ;

    form.addEventListener("change", function(event) {
        const target = event.target;
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
        '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
        '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
        '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
        '/': (firstOperand, secondOperand) => firstOperand / secondOperand
    };
})();


