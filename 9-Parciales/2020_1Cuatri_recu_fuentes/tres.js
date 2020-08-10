//Ezequiel Unía - Div.H
/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/

function mostrar()
{
	var nombreIngresado;
	var nacionalidadIngresada;
	var edadIngresada;
	var sexoIngresado;
	var esatadoCivilIngresado;
	var temperaturaCorporalIngresada;
	var nuevoPasajero;
	var banderaTemperatura;
	var temperaturaMaxima;
	var nacionalidadConTemperatura;
	var contadorSolteros;
	var contadorMujeresViudas;
	var contadorMujeresSolteras;
	var contadorMujeresCasadas;
	var contadorTemperaturaTerceraEdad;
	var promedioEdadMujeres;
	var edadesMujeres;
	var acumuladorMujeresSolterasViudas;

	banderaTemperatura = true;
	nuevoPasajero = true;
	contadorSolteros = 0;
	contadorMujeresCasadas = 0;
	contadorMujeresSolteras = 0;
	contadorMujeresViudas = 0;
	contadorTemperaturaTerceraEdad = 0;
	promedioEdadMujeres = 0;
	edadesMujeres = 0;
	acumuladorMujeresSolterasViudas = 0;

	while(nuevoPasajero == true)
	{
		nombreIngresado = prompt("Ingrese su nombre:");
		nombreIngresado = nombreIngresado.toUpperCase();
		while(!isNaN(nombreIngresado))
		{
			nombreIngresado = prompt("Ingrese nuevamente su nombre:");
			nombreIngresado = nombreIngresado.toUpperCase();
		}

		nacionalidadIngresada = prompt("Ingrese su nacionalidad:");
		nacionalidadIngresada = nacionalidadIngresada.toUpperCase();
		while(!isNaN(nacionalidadIngresada))
		{
			nacionalidadIngresada = prompt("Ingrese nuevamente su nacionalidad:");
			nacionalidadIngresada = nacionalidadIngresada.toUpperCase();
		}

		edadIngresada = prompt("Ingrese su edad:");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) || edadIngresada < 0)
		{
			edadIngresada = prompt("Ingrese nuevamente su edad;");
			edadIngresada = parseInt(edadIngresada);
		}

		sexoIngresado = prompt("Ingrese su sexo:");
		sexoIngresado = sexoIngresado.toUpperCase();
		while(sexoIngresado != "F" && sexoIngresado != "M")
		{
			sexoIngresado = prompt("Ingrese su sexo nuevamente: \n F - Para FEMENINO \n M - Para MASCULINO");
			sexoIngresado = sexoIngresado.toUpperCase();
		}

		esatadoCivilIngresado = prompt("Ingrese su estado civil:");
		esatadoCivilIngresado = esatadoCivilIngresado.toUpperCase();
		while(esatadoCivilIngresado != "SOLTERO" && esatadoCivilIngresado != "CASADO" && esatadoCivilIngresado != "VIUDO")
		{
			esatadoCivilIngresado = prompt("Ingrese nuevamente su estado civil: \n CASADO \n SOLTERO \n VIUDO");
			esatadoCivilIngresado = esatadoCivilIngresado.toUpperCase();
		}

		temperaturaCorporalIngresada = prompt("Ingrese la temperatura corporal:");
		temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada) || temperaturaCorporalIngresada < 30)
		{
			temperaturaCorporalIngresada = prompt("Ingrese nuevamente la temperatura corporal:");
			temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		}

		if(banderaTemperatura == true || temperaturaMaxima < temperaturaCorporalIngresada)
		{	
			banderaTemperatura = false;
			temperaturaMaxima = temperaturaCorporalIngresada;
			nacionalidadConTemperatura = nacionalidadIngresada;
		}
		 switch(esatadoCivilIngresado)
		 {
			case "CASADO":
				if(sexoIngresado == "F")
				{
					contadorMujeresCasadas++;
					edadesMujeres += edadIngresada;
				}
				break;

			case "SOLTERO":
				if(edadIngresada > 17)
				{
					contadorSolteros++;
				}
				if(sexoIngresado == "F")
				{
					contadorMujeresSolteras++;
				}
				break;
			
			case "VIUDO":
				if(sexoIngresado == "F")
				{
					contadorMujeresViudas++;
				}

				break;			
		 }
		 if(edadIngresada > 59)
		 {
			if(temperaturaCorporalIngresada > 37)
			{
				contadorTemperaturaTerceraEdad++;
			}
		 }		 
		 nuevoPasajero = confirm("¿Desea agregar otro pasajero?");
	}

	console.log("La nacionalidad de la persona con más temperara es " + nacionalidadConTemperatura);

	if(contadorSolteros == 0)
	{
		console.log("No hay mayores de edad solteros.");
	}else
	{
		console.log("Tenemos " + contadorSolteros + " pasajeros solteros mayores de edad.")
	}

	if(contadorMujeresViudas == 0 && contadorMujeresSolteras == 0)
	{
		console.log("No hay mujeres solteras o viudas.");
	}else
	{
		acumuladorMujeresSolterasViudas = contadorMujeresSolteras + contadorMujeresViudas;
		console.log("Hay " + acumuladorMujeresSolterasViudas + " mujeres solteras o viudas.")
	}

	if(contadorTemperaturaTerceraEdad == 0)
	{
		console.log("No hay mayores de edad con más de 38 de temperatura");
	}else
	{
		console.log("Hay " + contadorTemperaturaTerceraEdad + " pasajeros de la tercera edad con 38º.")
	}
	if(contadorMujeresCasadas == 0)
	{
		console.log("No hay mujeres casadas");
	}else
	{
		promedioEdadMujeres = edadesMujeres / contadorMujeresCasadas;
		console.log("El promedio de edad de las mujeres casadas es de " + promedioEdadMujeres);
	}
}
/*
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/