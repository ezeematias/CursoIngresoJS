/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("Ingrese su clave.");

	while (claveIngresada != "utn750" && claveIngresada != null)
	{
		claveIngresada = prompt("Clave incorrecta. Vuelva a ingresar su clave.");
	}

	if (claveIngresada == "utn750")
	{
		alert("Su clave es correcta");
	}
	
}//FIN DE LA FUNCIÓN
