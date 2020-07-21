// Ezequiel Unía - Div. H
/* Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

function mostrar()
{
	var edad ;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad>12 && edad<18)
	{		
		alert ("Eres un adolescente");
	}else
		{
			if (edad>17)
			{
			alert ("Eres un mayor de edad");
			}else
			{
			alert ("Eres un niño");
			}
		}
		
	
		
	
  
	

}//FIN DE LA FUNCIÓN