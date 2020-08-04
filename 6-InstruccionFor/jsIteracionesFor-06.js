//Ezequiel Unía - Div. H
//al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.

function mostrar()
{
	var ingreseNumero;
	var j; // Cantidad de pares
	j = 0;
	ingreseNumero = prompt("Ingrese un número ");
	ingreseNumero = parseInt(ingreseNumero);
	
	for(var i = 0; i < ingreseNumero ; i++)
	{
		if(i%2==0)
		{
			j++;				
			document.write(i);
		}	
	}
	document.write("<br>La cantidad de números pares es de: " + j);
	//alert("La cantidad de números pares es de: " + j );


}//FIN DE LA FUNCIÓN