const listaSelecaoLoldevs = document.querySelectorAll(".league");

listaSelecaoLoldevs.forEach(league => {
	league.addEventListener("click", () => {
		esconderCartaoLoldev();

		const idLoldevSelecionado = mostrarCartaoLoldevSelecionado(league);

		desativarLoldevNaListagem();
		ativarLoldevSelecionadoNaListagem(idLoldevSelecionado);

	})
})


function ativarLoldevSelecionadoNaListagem(idLoldevSelecionado) {
	const loldevSelecionadoNaListagem = document.getElementById(idLoldevSelecionado);
	loldevSelecionadoNaListagem.classList.add("ativo");
}

function desativarLoldevNaListagem() {
	const loldevAtivoNaListagem = document.querySelector(".ativo");
	loldevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoLoldevSelecionado(league) {
	const idLoldevSelecionado = league.attributes.id.value;
	const idDoCartaoLoldevParaAbrir = "cartao-" + idLoldevSelecionado;
	const cartaoLoldevParaAbrir = document.getElementById(idDoCartaoLoldevParaAbrir);
	cartaoLoldevParaAbrir.classList.add("aberto");
	return idLoldevSelecionado;
}

function esconderCartaoLoldev() {
	const cartaoLoldevAberto = document.querySelector(".aberto");
	cartaoLoldevAberto.classList.remove("aberto");
}