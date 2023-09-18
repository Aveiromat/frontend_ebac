function compararNumeros() {
    var numA = parseFloat(document.getElementById("numA").value);
    var numB = parseFloat(document.getElementById("numB").value);
    var messageContainer = document.getElementById("messageContainer");

    messageContainer.innerHTML = "";
    messageContainer.className = "";

    if (isNaN(numA) || isNaN(numB)) {
        messageContainer.innerHTML = "Por favor, insira números válidos em ambos os campos.";
        messageContainer.className = "error-box";
    } else if (numA > numB) {
        messageContainer.innerHTML = "A is bigger than B!";
        messageContainer.className = "success-box";
    } else {
        messageContainer.innerHTML = "A is not bigger than B!";
        messageContainer.className = "error-box";
    }

    messageContainer.style.display = "block";
}
