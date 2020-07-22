// Ezequiel Unía - Div. H
// Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive


function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;

	numero = parseInt (Math.random() * 10) + 1;
	alert(numero);	

}//FIN DE LA FUNCIÓN