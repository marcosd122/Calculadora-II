var input = document.getElementById("input");
numero = document.querySelectorAll(".numeros div");
operadores = document.querySelectorAll(".operadores div");
resultado = document.getElementById("resultado");
limpar = document.getElementById("limpar");

resultShow = false;

for (var i = 0; i < numero.length; i++) {
  numero[i].addEventListener("click", function (e) {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (resultShow === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultShow === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      resultShow = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      resultShow = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}

for (var i = 0; i < operadores.length; i++) {
  operadores[i].addEventListener("click", function (e) {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];
	if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
		var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
		input.innerHTML = newString;
	} else if (currentString.length == 0) {

	} else {
		input.innerHTML += e.target.innerHTML;
	}
  });
}

resultado.addEventListener("click", function () {
	var inputString = input.innerHTML;
	var numeros = inputString.split(/\+|\-|\×|\÷/g);
	var operadores = inputString.replace(/[0-9]|\./g, "").split("");

	var divisao = operadores.indexOf("÷");
	while (divisao != -1) {
		numeros.splice(divisao, 2, numeros[divisao] / numeros[divisao + 1]);
		operadores.splice(divisao, 1);
		divisao = operadores.indexOf("÷");
	}

	var multiplicacao = operadores.indexOf("×");
	while (multiplicacao != -1) {
		numeros.splice(multiplicacao, 2, numeros[multiplicacao] * numeros[multiplicacao + 1]);
		operadores.splice(multiplicacao, 1);
		multiplicacao = operadores.indexOf("×");
	}

	var subtracao = operadores.indexOf("-");
	while (subtracao != -1) {
		numeros.splice(subtracao, 2, numeros[subtracao] - numeros[subtracao + 1]);
		operadores.splice(subtracao, 1);
		subtracao = operadores.indexOf("-");
	}
	
	var soma = operadores.indexOf("+");
	while (soma != -1) {
		numeros.splice(soma, 2, parseFloat(numeros[soma]) + parseFloat(numeros[soma + 1]));
		operadores.splice(soma, 1);
		soma = operadores.indexOf("+");
	}

	input.innerHTML = numeros[0];
	resultShow = true;

});

limpar.addEventListener("click", function () {
	input.innerHTML = "";
})
