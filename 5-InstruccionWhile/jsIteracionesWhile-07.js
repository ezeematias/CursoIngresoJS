/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var i;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	i=0;
	acumulador=0;
	respuesta= true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador += numeroIngresado;
		i++;
		respuesta = confirm("¿Quiere ingresar otro número?");
	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/i;

}//FIN DE LA FUNCIÓN