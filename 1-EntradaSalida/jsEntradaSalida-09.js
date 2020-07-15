/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var	resto;

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);

	resto = sueldo * 1.1; 
	aumento = sueldo * 0.1;

	alert("El aumento es de " + aumento);
	txtIdResultado.value = resto;

	// alert("Resultado " + resto);
}
