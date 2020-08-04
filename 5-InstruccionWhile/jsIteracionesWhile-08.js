/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//var i;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	//i=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta =true;

	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingrese un número:");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado > 0)
		{
			sumaPositivos += numeroIngresado;
		}else
		{
			multiplicacionNegativos *= numeroIngresado;
		}
		respuesta = confirm("¿Quiere agregar otro número?");
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN