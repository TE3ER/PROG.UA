function calculate(operation) {
    var module = parseFloat(document.getElementById("moduleInput").value);
    var inputA = parseFloat(document.getElementById("inputA").value);
    var inputB = parseFloat(document.getElementById("inputB").value);

    if (isNaN(module) || isNaN(inputA) || isNaN(inputB)) {
        alert("Будь ласка, введіть числа для всіх полів.");
        return;
    }

    var result;

    switch (operation) {
        case '+':
            result = (inputA + inputB) % module;
            break;
        case '-':
            result = (inputA - inputB) % module;
            break;
        default:
            alert("Невідома операція");
            return;
    }

    document.getElementById("result").value = result;
}

function clearFields() {
    document.getElementById("moduleInput").value = "";
    document.getElementById("inputA").value = "";
    document.getElementById("inputB").value = "";
    document.getElementById("result").value = "";
}
