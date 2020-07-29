//Ezequiel Unía - Div.H
/* 
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba 
tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba 
tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un 
aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var estadia;
	var tarifa;
	var precioFinal;
	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;
	estadia = 15000;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch (destinoIngresado)
			{
				case "Bariloche":
					tarifa = 1.2;
					break;
				case "Cataratas":
				case "Cordoba":
					tarifa = 0.9;
					break;
				case "Mar del plata":
					tarifa = 0.8;
					break;
			}
			break;	
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					tarifa = 0.8;
					break;
				case "Cataratas":
				case "Cordoba":
					tarifa = 1.1;
					break;
				case "Mar del plata":
					tarifa = 1.2;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":		
					tarifa = 1.1;
					break;
				case "Cordoba":
					tarifa = 1;
					break;	
			}
			break;
	}
	precioFinal = estadia * tarifa;
	alert("El presio final a pagar es " + precioFinal);

}