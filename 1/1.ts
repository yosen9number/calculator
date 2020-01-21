(function () {
    const calcValue = document.getElementById("calc_value");
    const form = document.getElementById("form");

    form.addEventListener("change", function (event) {
        const target = (<HTMLInputElement>event.target);
        let stack = [];
        target.value.split(' ').forEach(function (token) {
            if (token in operators) {
                var _a = [stack.pop(), stack.pop()], y = _a[0], x = _a[1];
                console.log(x, y);
                stack.push(operators[token](x, y));
            }
            else {
                stack.push(parseFloat(token));
            }
        });
        (<HTMLInputElement>calcValue).value = stack.pop();
        console.log((<HTMLInputElement>calcValue).value, stack);
    });
    var operators = {
        '+': function (firstOperand, secondOperand) { return firstOperand + secondOperand; },
        '-': function (firstOperand, secondOperand) { return firstOperand - secondOperand; },
        '*': function (firstOperand, secondOperand) { return firstOperand * secondOperand; },
        '/': function (firstOperand, secondOperand) { return firstOperand / secondOperand; }
    };
})();
