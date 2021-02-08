$(function() {
	// Muda a cor para vermelho:
	$("#target1").css({"color":"red"});
	// Desativa o botão:
	$("#target1").prop("disabled", true);
	// removendo elementos 
	$("#target4").remove();
	// Move o elemento
	$("#target2").appendTo("#right-well");
	// Faz a cópia de um elemento:
	$("#target5").clone().appendTo("#left-well");
	// Altera a cor de fundo do pai do elemento com id #target1:
	$("#target1").parent().css({"background":"red"});
	// altera a cor de todos o filhos:
	$("#right-well").children().css({"color":"orange"});
	// O segundo elemeto pula:
	$(".target:nth-child(2)").addClass("animated bounce");
	// Selecionando todos os elementos:
	$(".target:even").addClass("animated shake");
	// Derrubando o Playground:
	$("body").addClass("animated hinge");
});