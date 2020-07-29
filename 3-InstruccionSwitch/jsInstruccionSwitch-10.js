//Ezequiel Unía - Div.H
/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la 
estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var viaje;
	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;


	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					viaje = "Se viaja";
					break;
				default:
					viaje = "No se viaja";
					break;					
			}
			break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Mar del plata":
				case "Cataratas":
					viaje = "Se viaja";
					break;
				default:
					viaje = "No se viaja";
					break;					
			}
			break;
		case "Otoño":
			viaje = "Se viaja";
			break;
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					viaje = "No se viaja";
					break;
				default:
					viaje = "Se viaja";
					break;					
			}
			break;
	}
alert(viaje);

}//FIN DE LA FUNCIÓN