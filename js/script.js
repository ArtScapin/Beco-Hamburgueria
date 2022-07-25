function irCarrinho(opcao){
	window.location.href = "secoes/pedidos.html?opcao="+String(opcao);
}

const urlParams = new URLSearchParams(window.location.search);
let pedido = typeof(urlParams.get('opcao')) !== 'string' ? 1 : urlParams.get('opcao');
let nome = urlParams.get('nome');
let valor = 0;
let quantidade = 1;
let opAtual = 1;

document.getElementById("pedido"+String(pedido)).checked=true;

atualizarPedido(parseInt(pedido));

function atualizarPedido(opcao){
	opAtual=opcao;function irCarrinho(opcao){
	window.location.href = "secoes/pedidos.html?opcao="+String(opcao);
}

const urlParams = new URLSearchParams(window.location.search);
let pedido = typeof(urlParams.get('opcao')) !== 'string' ? 1 : urlParams.get('opcao');
let nome = urlParams.get('nome');
let valor = 0;
let quantidade = 1;
let opAtual = 1;

document.getElementById("pedido"+String(pedido)).checked=true;

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
	document.getElementById("subtotal").innerHTML = "R$"+String(valor*quantidade)+",00"; 
	document.getElementById("total").innerHTML = "R$"+String(valor*quantidade)+",00";
}

function atualizarQtde(incremento){
	if((parseInt(quantidade)+parseInt(incremento))>=0){
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

function resize(){
	if(innerWidth<=1120){
		$("#ocultar1").hide();
		$("#ocultar2").hide();
	}else{
		$("#ocultar1").show();
		$("#ocultar2").show();
	}
	if(innerWidth<=850){
		$("#carousel").hide();
	}else{
		$("#carousel").show();
	}
}
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
	document.getElementById("subtotal").innerHTML = "R$"+String(valor*quantidade)+",00"; 
	document.getElementById("total").innerHTML = "R$"+String(valor*quantidade)+",00";
}

function atualizarQtde(incremento){
	if((parseInt(quantidade)+parseInt(incremento))>=0){
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

