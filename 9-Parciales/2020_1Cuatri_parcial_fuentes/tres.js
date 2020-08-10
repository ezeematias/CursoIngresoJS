// Ezequiel Unía - Div. H
/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado 
civil("soltero", "casado" o "viudo")y temperatura corporal.

a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

/*
function mostrar()
{

	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaIngresada;
	

	for(var flag = true; flag == true;)
	{
		nombreIngresado = prompt("Ingrese su nombre:");
		nombreIngresado = nombreIngresado.toUpperCase();
		while(!isNaN(nombreIngresado))
		{
			nombreIngresado = prompt("Datos no válidos, ingrese nuevamente su nombre:");
			nombreIngresado = nombreIngresado.toUpperCase();
		}
		edadIngresada = prompt("Ingrerse su edad");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) || edadIngresada < 1)
		{
			edadIngresada = prompt("Edad no válida, ingrerse nuevamente su edad");
			edadIngresada = parseInt(edadIngresada);
		}
		sexoIngresado = prompt("Ingrese sexo: \n F - para femenino. \n M para masculino.")
		sexoIngresado = sexoIngresado.toUpperCase();
		while(sexoIngresado != "F" && sexoIngresado != "M")
		{
			sexoIngresado = prompt("Sexo inválido, vuelva a ingresar su sexo y recuerde: \n F - para femenino. \n M para masculino.");
			sexoIngresado = sexoIngresado.toUpperCase();
		}
		estadoCivilIngresado = prompt("Ingrese su estado civíl:");
		estadoCivilIngresado = estadoCivilIngresado.toUpperCase();
		while(!isNaN(estadoCivilIngresado) || estadoCivilIngresado != "SOLTERO" && estadoCivilIngresado != "CASADO" && estadoCivilIngresado != "VIUDO")
		{
			estadoCivilIngresado = prompt("Datos inválidos, re-ingrese su estado civíl. \n Soltero \n Casado \n Viudo");
			estadoCivilIngresado = estadoCivilIngresado.toUpperCase();
		}
		temperaturaIngresada = prompt("Ingrese su temperatura corporal");
		temperaturaIngresada = parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada) || temperaturaIngresada < 30)
		{
			temperaturaIngresada = prompt("Temperatura mal ingresada, vuelta a intentarlo");
			temperaturaIngresada = parseInt(temperaturaIngresada);
		}

		flag = confirm("¿Desea agregar a otra persona?");
	}

}



// Clase de repaso
// Ezequiel Unía - Div. H
/*
Enunciado  a)”bandera a full”
de una cantidad de espectadores  indeterminada debemos tomar lo siguiente datos
sexo
altura
edad
nombre
se debe informar:

1-el nombre de la más alta de las mujeres
2-el nombre del  más viejo de los hombres 
3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si  hay  algún adolescente)
NOTA:pedir datos por "prompt()" y mostrar por console.log()

function mostrar()
{
	var sexoIngresado;
	var alturaIngresada;
	var edadIngresada;
	var nombreIngresado;
	var masEspectadores;
	var mujerMasAlta;
	var nombreMujerAlta;
	var hombreMasViejo;
	var nombreHombreViejo;
	//var primerAdolescente;
	var nombrePrimerAdolescente;
	var banderaMujerAlta;
	var banderaHombreViejo;
	var banderaAdolescente;

	mujerMasAlta = 0;
	hombreMasViejo = 0;

	masEspectadores = true;
	banderaMujerAlta = true;
	banderaHombreViejo = true;
	banderaAdolescente = true;
	

	while(masEspectadores== true)
	{
		nombreIngresado = prompt("Ingresar nombre del espectador:");
		nombreIngresado = nombreIngresado.toUpperCase();

		edadIngresada = prompt("Ingrese la edad:");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) || edadIngresada < 0)
		{
			edadIngresada = prompt("Edad inválida, ingrese nuevamente:");
			edadIngresada = parseInt(edadIngresada);
		}

		sexoIngresado = prompt("Ingrese el sexo:");
		sexoIngresado = sexoIngresado.toUpperCase();
		while(sexoIngresado != "F" && sexoIngresado != "M")
		{
			sexoIngresado = prompt("Datos incorrectos. Debe ingresar: \n F - para Femenino. \n M - para Masculino.");
			sexoIngresado = sexoIngresado.toUpperCase();
		}

		alturaIngresada = prompt("Ingresar la altura:");
		alturaIngresada = parseInt(alturaIngresada);
		while(isNaN(alturaIngresada) || alturaIngresada < 0)
		{
			alturaIngresada = prompt("Altura mal ingresada. Ingrese nuevamente la altura:");
			alturaIngresada = parseInt(alturaIngresada);
		}
		
		switch(sexoIngresado)
		{
			case "F":

				if(banderaMujerAlta = true || mujerMasAlta < alturaIngresada)
				{
					mujerMasAlta = alturaIngresada;
					nombreMujerAlta = nombreIngresado;
					banderaMujerAlta = false;
				}
				break;

			case "M":

				if(banderaHombreViejo = true || hombreMasViejo < edadIngresada)
				{
					hombreMasViejo = edadIngresada;
					nombreHombreViejo = nombreIngresado;
					banderaHombreViejo = false;
				}
				break;
		}

		if (edadIngresada>12 && edadIngresada<18)
		{
			if (banderaAdolescente == true)
			{
				nombrePrimerAdolescente = nombreIngresado;
				banderaAdolescente = false;
			}			
		}
		masEspectadores = confirm("¿Desea ingresar otro espectador?");
	}
	if(mujerMasAlta == 0)
	{
		console.log("No hay mujeres.")
	}else
	{
		console.log("La mujer más alta es " + nombreMujerAlta);
	}
	if(hombreMasViejo == 0)
	{
		console.log("No hay hombres.")
	}else
	{
		console.log("El hombre más viejo es " + nombreHombreViejo);
	}
	
	if(banderaAdolescente == true)
	{
		console.log("No hay adolescentes.");
	}else
	{
		console.log("El primer adolescente es " + nombrePrimerAdolescente);
	}



}
*/

// Clase de repaso
// Ezequiel Unía - Div.H
/*
Enunciado b)”sin banderas”
Se debe ingresar 10:
nombre
edad(0 y 115)
altura(30 y 230)
sexo
Dinero(puede ser positivo o negativo, pero debe ser un número)
CantidadDeHijos(0 y 10)
despues de validar todos los datos,
se debe informar:

1- nombre de la persona con edad más vieja
2- promedio de altura de las mujeres
3- nombre de la mujer más joven
NOTA:pedir datos por "prompt()" y mostrar por console.log(),
verificar que los datos  exitan antes de mostrarlos
*/



function mostrar()
{

	var nombreIngresado;
	var edadIngresada;
	var alturaIngresada;
	var sexoIngresado;
	var dineroIngresado;
	var cantidadDeHijosIngresados;
	var personaMasVieja;
	var edadPersonaMasVieja;
	var contadorMujeres;
	var acumuladorAlturaMujeres;
	var mujerMasJoven;
	var edadMujerMasJoven;
	var promedioMujerJoven;

	contadorMujeres = 0;
	acumuladorAlturaMujeres = 0;

	for(var i = 0; i < 2; i++)
	{		
		nombreIngresado = prompt("Ingresar nombre de la persona:");
		nombreIngresado = nombreIngresado.toUpperCase();
		
		edadIngresada = prompt("Ingrese la edad:");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) || edadIngresada < 0 || edadIngresada > 115)
		{
			edadIngresada = prompt("Edad inválida, ingrese nuevamente:");
			edadIngresada = parseInt(edadIngresada);
		}
		
		sexoIngresado = prompt("Ingrese el sexo:");
		sexoIngresado = sexoIngresado.toUpperCase();
		while(sexoIngresado != "F" && sexoIngresado != "M")
		{
			sexoIngresado = prompt("Datos incorrectos. Debe ingresar: \n F - para Femenino. \n M - para Masculino.");
			sexoIngresado = sexoIngresado.toUpperCase();
		}
		
		alturaIngresada = prompt("Ingresar la altura:");
		alturaIngresada = parseInt(alturaIngresada);
		while(isNaN(alturaIngresada) || alturaIngresada < 30 || alturaIngresada > 230)
		{
			alturaIngresada = prompt("Altura mal ingresada. Ingrese nuevamente la altura:");
			alturaIngresada = parseInt(alturaIngresada);
		}

		dineroIngresado = prompt("Ingresar su dinero");
		dineroIngresado = parseInt(dineroIngresado);
		while(isNaN(dineroIngresado))
		{
			dineroIngresado = prompt("Error, debe ingresar ingresar una cifra");
			dineroIngresado = parseInt(dineroIngresado);
		}

		cantidadDeHijosIngresados = prompt("Ingrese la cantidad de hijos");
		cantidadDeHijosIngresados = parseInt(cantidadDeHijosIngresados);
		while(isNaN(cantidadDeHijosIngresados) || cantidadDeHijosIngresados < 0 || cantidadDeHijosIngresados > 10 )
		{
			cantidadDeHijosIngresados = prompt("Cantidad de hijos inválida, ingrese nuevamente la cantidad de crías que tenga");
			cantidadDeHijosIngresados = parseInt(cantidadDeHijosIngresados);
		}

			
			//1- nombre de la persona con edad más vieja
			//2- promedio de altura de las mujeres
			//3- nombre de la mujer más joven
			

		if (i == 0)
		{
			personaMasVieja = nombreIngresado;
			edadPersonaMasVieja = edadIngresada;			
		}else 
		{
			if(edadPersonaMasVieja < edadIngresada)
			{
				personaMasVieja = nombreIngresado;
				edadPersonaMasVieja = edadIngresada;
			}
		}
		if (sexoIngresado == "F")
		{
			acumuladorAlturaMujeres += alturaIngresada;
			contadorMujeres++;
			
			if(contadorMujeres == 1)
			{
				edadMujerMasJoven = edadIngresada;
				mujerMasJoven = nombreIngresado;
			}else
			{
				if(edadMujerMasJoven > edadIngresada)
				{
					edadMujerMasJoven = edadIngresada;
					mujerMasJoven = nombreIngresado;
				}
			}

		}
	}

	promedioMujerJoven = acumuladorAlturaMujeres / contadorMujeres;

	console.log("La persona más vieja es " + personaMasVieja);
	if(contadorMujeres == 0)
	{
		console.log("No hay mujeres ingresadas.")
	}else
	{
		console.log("El promedio de la altura de las mujeres es de " + promedioMujerJoven);
		console.log("La mujer más joven es " + mujerMasJoven);
	}
		
}


/*
// Clase de repaso
// Ezequiel Unía - Div.H

Enunciado c)”mixing bandera”
de una cantidad de animales indeterminada del zoológico debemos tomar lo siguiente
raza
peso
temperatura media del lugar donde habita
edad
si está en peligro de extinción( si o no)
se debe informar:

1-el promedio de edad total
2-la raza del más pesado
3-la temperatura máxima ingresada de los animales en extinción
NOTA:pedir datos por "prompt()" y mostrar por console.log()
*/
/*
function mostrar()
{
	var razaIngresada;
	var pesoIngresado;
	var temperaturaIngresada;
	var edadIngresada;
	var peligroExtinción;
	var agregarAnimales;
	var contadorEdad;
	var acumuladorEdad;
	var promedioEdad;
	var pesoMaximo;
	var razaPesada;
	var temperaturaMaxima;
	var banderaPrimeraExtinción;

	contadorEdad = 0;
	acumuladorEdad = 0;
	agregarAnimales = true;
	banderaPrimeraExtinción = true;

	while(agregarAnimales == true)
	{
		razaIngresada = prompt("Ingrese la raza:");
		razaIngresada = razaIngresada.toUpperCase();
		while(!isNaN(razaIngresada))
		{
			razaIngresada = prompt("ERROR! Ingrese nuevamente la raza:");
			razaIngresada = razaIngresada.toUpperCase();	
		}

		pesoIngresado = prompt("Ingrese el peso del animal:");
		pesoIngresado = parseInt(pesoIngresado);
		while(isNaN(pesoIngresado) || pesoIngresado < 0)
		{
			pesoIngresado = prompt("ERROR! Ingrese nuevamente el peso del animal:");
			pesoIngresado = parseInt(pesoIngresado);	
		}

		temperaturaIngresada = prompt("Ingrese la temperatura media del habitat");
		temperaturaIngresada = parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada))
		{
			temperaturaIngresada = prompt("ERROR! Ingrese nuevamente la temperatura media del habitat");
			temperaturaIngresada = parseInt(temperaturaIngresada);
		}

		edadIngresada = prompt("Ingresar la edad del animal:");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) || edadIngresada < 0)
		{
			edadIngresada = prompt("ERROR! Ingresar nuevamente la edad del animal:");
			edadIngresada = parseInt(edadIngresada);
		}
		
		peligroExtinción = confirm("¿El animal se encuentra en peligro de extinción?");	


		acumuladorEdad += edadIngresada;
		contadorEdad++;

		
		if(contadorEdad == 1)
		{
			pesoMaximo = pesoIngresado;
			razaPesada = razaIngresada;
		}else
		{
			if(pesoMaximo < pesoIngresado)
			{
				pesoMaximo = pesoIngresado;
				razaPesada = razaIngresada;
			}
		}

		if(peligroExtinción == true)
		{
			if(banderaPrimeraExtinción == true)
			{
				banderaPrimeraExtinción = false;
				temperaturaMaxima = temperaturaIngresada;
			}else
			{
				if(temperaturaMaxima < temperaturaIngresada)
				{
					temperaturaMaxima = temperaturaIngresada;
				}
			}
		}
		
		agregarAnimales = confirm("¿Desea agregar más animales?");
				
	}

	promedioEdad = acumuladorEdad / contadorEdad;
	console.log("El promedio de edad de todos los animales es: " + promedioEdad);
	console.log("La raza más pesada es " + razaPesada);
	if(banderaPrimeraExtinción == true)
	{
		console.log("No hay razas ingresadas en peligro de extinción");
	}else
	{
		console.log("La temperatura máxima del habitat de los animales en extinción es de " + temperaturaMaxima);
	}
}

*/