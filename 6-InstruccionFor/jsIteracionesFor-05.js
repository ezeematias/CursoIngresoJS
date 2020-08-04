//Ezequiel Unía - Div. H
//al presionar el botón repetir el pedido de número hasta que ingresemos el 9.

function mostrar()
{
	var ingreseNumero;
	for(var i=0;;i++)
	{
		ingreseNumero = prompt("Ingrese un número: ");
		ingreseNumero = parseInt(ingreseNumero);
		if(ingreseNumero == 9)
		{
			alert("Adivinó el número, Felicidades!");
			break;
		}

	}
	
}//FIN DE LA FUNCIÓN