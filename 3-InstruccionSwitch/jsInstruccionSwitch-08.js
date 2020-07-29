function mostrar()
{
	var destinoIngresado;
	destinoIngresado = txtIdDestino.value;
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frio");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Hace calor");
			break;
	}

}//FIN DE LA FUNCIÓN