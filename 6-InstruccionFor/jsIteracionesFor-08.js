//Ezequiel Unía - Div.H
//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.

function mostrar()
{
	var numeroIngresado;
	var cantidadDivisores;
	cantidadDivisores = 0;
	numeroIngresado = prompt("Ingrese un número:");
	numeroIngresado = parseInt(numeroIngresado);

	for(var i = 0; i <= numeroIngresado; i++)
	{	
		if(numeroIngresado%i==0)
		{
			cantidadDivisores++;
		}	
			
	}
	if(cantidadDivisores == 2)
	{
		alert("El número " + numeroIngresado + " es primo.");
	} else
	{
		alert("El número " + numeroIngresado + " no es primo.");
	}

}//FIN DE LA FUNCIÓN