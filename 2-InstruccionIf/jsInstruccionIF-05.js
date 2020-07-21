function mostrar()
{
	//tomo la edad  
	var edad ;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	/*if (edad>12 && edad<18)
	{		
		alert ("Eres un adolescente");
	}else
	{
		alert ("No eres un adolescente");
	}*/

	if (edad<13 || edad>17)
	{
		alert ("No eres un adolescente");
	}

}//FIN DE LA FUNCIÓN