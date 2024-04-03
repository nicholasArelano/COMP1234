//variables
let total =0;
let operation = '';


//input from user
let num1 = parseFloat(prompt("Choose one number:"));
let num2= parseFloat(prompt("Choose another number:"));

//Solving
operation = prompt("Choose an arithmetic operation ( +. -, *, / )");
    if (operation !=='+' && operation!=='-' && operation!== '*' && operation!== '/') {
       alert("Invalid Arithmetic Operation!");
    } else {
        function calculate(num1, num2, operation) {
            switch (operation) {
                case '+':
                    return num1 + num2;

                case '-':
                    return num1 - num2;

                case '*':
                    return num1 * num2;

                case '/':
                    if (num2 !== 0) {
                        return num1 / num2;
                    } else {
                        return 'Error: Division by zero';
                    }
                default:
                    return 'Error: Invalid operation';
            }


        }

        total = calculate(num1, num2, operation);
//Presenting
        document.write(num1 + " " + operation + " " + num2 + " = " + total);
    }