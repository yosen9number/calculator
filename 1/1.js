(function () {
    var calcValue = document.getElementById("calc_value");
    var form = document.getElementById("form");
    form.addEventListener("change", function (event) {
        var target = event.target;
        var stack = [];
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
        calcValue.value = stack.pop();
        console.log(calcValue.value, stack);
    });
    var operators = {
        '+': function (firstOperand, secondOperand) { return firstOperand + secondOperand; },
        '-': function (firstOperand, secondOperand) { return firstOperand - secondOperand; },
        '*': function (firstOperand, secondOperand) { return firstOperand * secondOperand; },
        '/': function (firstOperand, secondOperand) { return firstOperand / secondOperand; }
    };
})();
