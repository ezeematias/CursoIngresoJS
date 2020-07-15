/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var	resto;

	importe = txtIdImporte.value;
	importe = parseInt(importe);

	resto = importe * 0.75; 
	descuento = importe * 0.25;

	alert("El descuento es de " + descuento);
	txtIdResultado.value = resto;
	//alert("ok");
}
