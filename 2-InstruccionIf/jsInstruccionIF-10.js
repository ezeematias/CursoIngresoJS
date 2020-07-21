// Ezequiel Unía - Div. H
// Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
// "EXCELENTE" para notas igual a 9 o 10,
// "APROBÓ" para notas mayores a 4,
// "Vamos, la proxima se puede" para notas menores a 4

function mostrar()
{
	var numero;

	numero = parseInt (Math.random() * 10);

	if(numero<4)
	{
		alert("¡Vamos! La próxima se puede. Te sacaste un " + numero);
	}else
	{
		if(numero>3 && numero <9)
		{
			alert("APROBÓ. Te sacaste un " + numero);
		}else
		{
			alert("EXCELENTE. Te sacaste un " + numero);
		}
	}
	//alert(numero);	
	//Genero el número RANDOM entre 1 y 10 
	//alert("ok");

}//FIN DE LA FUNCIÓN