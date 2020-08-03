/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	//banderaDelPrimero="es el primero";
	//respuesta=true;
	
//	while(respuesta==true)
//	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		numeroMaximo = numeroIngresado;
		numeroMinimo = numeroIngresado;
		respuesta = confirm("¿Quere agregar otro número?");

		while(respuesta ==true)
		{
			numeroIngresado = prompt("Ingrese un número");
			numeroIngresado = parseInt(numeroIngresado);
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}else if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
			respuesta = confirm("¿Quere agregar otro número?");
		}
//	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
	
}//FIN DE LA FUNCIÓN