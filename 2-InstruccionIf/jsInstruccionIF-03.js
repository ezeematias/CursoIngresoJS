function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad>17)
	{
		alert("La persona es mayor de edad.");
	}
	else
	{
		alert("La persona es menor de edad");
	}
	

}//FIN DE LA FUNCIÓN