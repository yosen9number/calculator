(function () {
    var input_value = document.getElementById('calc_input') ;
    var values = [];
    var pattern;

    var container = document.getElementById('modal-conteiner');

    var elements = document.querySelectorAll('input');


    form.addEventListener('change', function(event) {
        var target = event.target;
        var a = target.value.split(/([0-9]+)([\+|\-|\*|\/]+)/);
        console.log(a);

        if ( target.name === 'calc') {
            pattern = /([0-9]+)([\+|\-|\*|\/]+)/;
        } else {
        }

        if (!pattern.test(target.value)) {
            target.classList.add('error');
            return false;
        } else {
            target.classList.remove('error');
            return true;
        }
    });

    function getDataFromInputs(elements) {
        elements = document.querySelectorAll('input');
        data = {};

        for (var i = 0; i < elements.length; i++) {
            element = elements[i];
            if (element.name === 'name') {
                text = 'Имя:';
            } else if (element.type === 'email') {
                text = 'Email:';
            } else if (element.type === 'tel') {
                text = 'Телефон:';
            }

            if (text in data) {
                values.push(element.value);
                data[text] = values.join(', ');
            } else {
                values = [element.value];
                data[text] = values;
            }
        }
        return data;
    }

    form.addEventListener('submit', function (e) {
        var data = getDataFromInputs(elements);

        e.preventDefault();
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            if (element.classList.contains('error') || element.value === '') {
                if (element.hasAttribute('required')) {
                    return false;
                } else {
                    element.value = false;
                }
            }
            else {
                container.style.display = 'block';
            }
        }

        return(data);

    });

})();


