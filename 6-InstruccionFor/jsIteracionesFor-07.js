v
//al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.

function mostrar()
{
	var numeroIngresado;
	var cantidadDivisores;
	var banderaComentario;
	banderaComentario = true;
	cantidadDivisores = 0;
	numeroIngresado = prompt("Ingrese un número:");

	for(var i = 0; i <= numeroIngresado; i++)
	{
		if(banderaComentario==true)
		{
			banderaComentario=false;
			document.write("Los divosores son: ")
		}else
		{
			if(numeroIngresado%i==0)
			{
				document.write(i + " ");
				cantidadDivisores++;
			}

		}	
	}
	document.write("<br>La cantidad de divisores es: " + cantidadDivisores);


}//FIN DE LA FUNCIÓN