let screen = document.querySelector(".screen");
let btns = document.querySelectorAll("button");

let expression = '';
let result = '';

btns.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === '=') {
            try {
                result = eval(expression);
                screen.textContent = result;
                expression = result.toString();
            } catch (error) {
                screen.textContent = 'Error';
                expression = '';
            }
        } else if (value === 'C') {
            expression = '';
            screen.textContent = '';
        } else if (value === 'DE') {
                expression = expression.slice(0, -1);
                screen.textContent = expression;
            
        } else {
            expression += value;
            screen.textContent = expression;
        }
    });
});