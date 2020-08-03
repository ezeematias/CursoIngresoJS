function mostrar()
{
	var i;
	var acumulador;
	var numeroIngresado;

	i=0;
	acumulador=0;
	
	while(i<5)
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		i++;
		acumulador += numeroIngresado;

	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/i;
}//FIN DE LA FUNCIÓN