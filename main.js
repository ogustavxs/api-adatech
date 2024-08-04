const cidade = document.querySelector("#cidade");
const bairro = document.querySelector("#bairro");
const cep = document.querySelector("#cep");
const input = document.querySelector('input')
const enviar = document.querySelector('button')
console.log("Fetch API");

async function obterDadosdoCep(cepopt) {
	try {
		const resposta = await fetch(`https://viacep.com.br/ws/${cepopt}/json/`);
		const dados = await resposta.json();
        cidade.textContent = dados.localidade
        bairro.textContent = dados.bairro
        cep.textContent = dados.cep
		
	} catch (erro) {
        cidade.textContent = 0
        bairro.textContent = 0
        cep.textContent = 0
	} finally {
		console.log("Terminou a requisição.");
	}
}

enviar.addEventListener('click', () => {
    const ceptext = input.value
    input.value = ''
    obterDadosdoCep(ceptext)
})

