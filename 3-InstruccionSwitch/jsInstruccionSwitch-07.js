// Ezequiel Unía - Div. H
//Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste

function mostrar()
{
	var destinoIngresado;
	destinoIngresado = txtIdDestino.value;
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Sur");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Este");
			break;
	}

}//FIN DE LA FUNCIÓN