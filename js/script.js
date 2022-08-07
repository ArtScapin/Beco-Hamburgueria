let arquivo = window.location.href;
arquivo = arquivo.split('/');
arquivo = arquivo[arquivo.length-1]
arquivo = arquivo.split('.');
arquivo = arquivo[0];

if (arquivo === 'index') {
	mobileTransition();

	function mobileTransition(){
		if(innerWidth<=1120){
			$("#cardsRow1").hide();
			$("#cardsRow2").hide();
			$("#listaRow1").show();
			$("#listaRow2").show();
			document.getElementsByName('quebraLinha')[0].innerHTML = '</p><p>';
			document.getElementsByName('quebraLinha')[1].innerHTML = '</p><p>';
		}else{
			$("#cardsRow1").show();
			$("#cardsRow2").show();
			$("#listaRow1").hide();
			$("#listaRow2").hide();
			document.getElementsByName('quebraLinha')[0].innerHTML = '&emsp;&emsp;&emsp;&emsp;';
			document.getElementsByName('quebraLinha')[1].innerHTML = '&emsp;&emsp;&emsp;&emsp;';
		}
		if(innerWidth<=650){
			$("#carouselRow").hide();
		}else{
			$("#carouselRow").show();
		}
		alterarNome();
	}

	function irCarrinho(opcao){
		window.location.href = "secoes/pedidos.html?opcao="+String(opcao);
	}

	function recolherNav(){
		$("#navbarToggleExternalContent").removeClass("show");
	}


}else if (arquivo === 'pedidos'){
	const urlParams = new URLSearchParams(window.location.search);
	let pedido = typeof(urlParams.get('opcao')) !== 'string' ? 1 : urlParams.get('opcao');
	let valor;
	let subtotal;
	let valorDesconto = 0;
	let quantidade = 1;
	let opAtual = 1;

	alterarNome();
	atualizarPedido(parseInt(pedido));

	function atualizarPedido(opcao){
		opAtual=opcao;
		switch(opcao){
			case 1:
				valor = 22;
				document.getElementById("name_burguer").innerHTML="Beco Diagonal";
				break;
			case 2:
				valor = 20;
				document.getElementById("name_burguer").innerHTML="Super Burguer";
				break;
			case 3:
				valor = 30;
				document.getElementById("name_burguer").innerHTML="Bacon 360";
				break;
			case 4:
				valor = 37;
				document.getElementById("name_burguer").innerHTML="Combo Diagonal";
				break;
			case 5:
				valor = 35;
				document.getElementById("name_burguer").innerHTML="Super Combo";
				break;
			case 6:
				valor = 45;
				document.getElementById("name_burguer").innerHTML="Combo 360";
				break;
		}
		document.getElementById("pedido"+String(opAtual)).checked=true;
		document.getElementById("valor_burguer").innerHTML = "R$"+String(valor)+",00"; 
		document.getElementById("qtde_burguer").innerHTML=String(quantidade);
		subtotal = valor * quantidade;
		document.getElementById("subtotal").innerHTML = "R$"+String(subtotal)+",00";
		if (valorDesconto > 0)
			valorDesconto = parseInt(subtotal/10);
		document.getElementById("desconto").innerHTML = "-R$"+String(valorDesconto)+",00";
		total = subtotal - valorDesconto;
		document.getElementById("total").innerHTML = "R$"+String(total)+",00";
	}

	function atualizarQtde(incremento){
		if((parseInt(quantidade)+parseInt(incremento))>0){
			quantidade=parseInt(quantidade)+parseInt(incremento);
			atualizarPedido(opAtual);
			document.getElementById("qtde").innerHTML = quantidade;
		}
	}

	function enviarPedido(){
		if(document.getElementById("nome").value.length >= 7 && document.getElementById("endereco").value.length >= 10 && document.getElementById("numero").value.length >= 8){
			alert(`${document.getElementById("nome").value},\nSeu pedido será enviado para:\n- ${document.getElementById("endereco").value}\n\nEm caso de problemas com seu pedido entraremos em contato através do número : ${document.getElementById("numero").value}`);
			window.location.href = '../index.html'
		}else{
			if(document.getElementById("nome").value.length >= 7 && document.getElementById("endereco").value.length >= 10)
				alert('Você esqueceu de nos dizer seu número!');
			else if(document.getElementById("nome").value.length >= 7 && document.getElementById("numero").value.length >= 8)
				alert('Você esqueceu de nos dizer seu endereço!');
			else if(document.getElementById("endereco").value.length >= 10 && document.getElementById("numero").value.length >= 8)
				alert('Você esqueceu de nos dizer seu nome completo!');
			else if(document.getElementById("nome").value.length >= 7)
				alert('Você esqueceu de nos dizer seu endereço e seu número!');
			else if(document.getElementById("endereco").value.length >= 10)
				alert('Você esqueceu de nos dizer seu nome e seu número!');
			else if(document.getElementById("numero").value.length >= 8)
				alert('Você esqueceu de nos dizer seu nome completo e seu endereço!');
			else
				alert('Você esqueceu de nos dizer seus dados para a entrega!');
		}
	}	

	function descontoSurpresa(){
		alert('PARABÉNS!!!\nVOCÊ ENCONTROU O NOSSO DESCONTO SURPRESA\n\nUm desconto de 10% foi adicionado ao seu pedido!');
		valorDesconto = 1;
		atualizarPedido(opAtual);
	}
}

function alterarNome(){
	if(innerWidth<=650)
		document.getElementById("nomeHamburgueria").innerHTML = "Beco"
	else
		document.getElementById("nomeHamburgueria").innerHTML = "Beco Hamburgueria"
}
