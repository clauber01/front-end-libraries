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
});