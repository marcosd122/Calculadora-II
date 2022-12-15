
const saida = document.getElementById('saida');
const botao = document.querySelectorAll('.btn');
const limpar = document.getElementById('btn-limpar');
const igual = document.getElementById('btn-igual');

botao.forEach(button => {
	button.addEventListener('click', () => {
		let value = button.innerText;
		saida.value += value;
	})
})

igual.addEventListener('click', () => {
	if (saida.value != '') {
		let answer = eval(saida.value);
		saida.value = answer;
	}
})

limpar.addEventListener('click', () => {
	saida.value = ''
})
