//Ezequiel Unía - Div.H
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var promedioPosivito;
	var promedioNegativo;
	var diferenciaPositivoNegativo;
	var respuesta;
	var i;
	respuesta = true;
	i = 0; // contador de positivos
	j = 0; // contador de negativos
	k = 0; // contador de ceros
	l = 0; // contador de pares
	sumaPositivos = 0;
	sumaNegativos = 0;
	promedioNegativo = 0;
	promedioPosivito = 0;
	diferenciaPositivoNegativo = 0;
	
	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado > 0)
		{
			sumaPositivos += numeroIngresado;
			i++;
			promedioPosivito = sumaPositivos/i;			
		}else if (numeroIngresado < 0)
		{
			sumaNegativos += numeroIngresado;
			j++;
			promedioNegativo = sumaNegativos/j;
		}else if (numeroIngresado == 0)
		{
			k++;
		}		
		if (numeroIngresado%2==0)
		{
			l++;
		}
		if (i>0 && j>0)
		{
			diferenciaPositivoNegativo = sumaPositivos - sumaNegativos;
		}

		respuesta = confirm("¿Quere agregar otro número?");
	}	
	document.write("<h1>" + "1-Suma de los negativos es: " + sumaNegativos + "<br>"+ "2-Suma de los positivos es: " + sumaPositivos + "<br>" + "3-Cantidad de positivos es: " + i +
	"<br>" + "4-Cantidad de negativos es: " + j + "<br>" + "5-Cantidad de ceros es: " + k + "<br>" + "6-Cantidad de números pares es: " + l + "<br>" + "7-Promedio de positivos es: " 
	+ promedioPosivito.toFixed(2) + "<br>" + "8-Promedios de negativos es: " + promedioNegativo.toFixed(2) + "<br>" + " 9-Diferencia entre positivos y negativos es: " + diferenciaPositivoNegativo + "</h1>");
}//FIN DE LA FUNCIÓN
