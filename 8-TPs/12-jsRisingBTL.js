//Ezequiel Unía - Div.H
/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e 
ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
  	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBrutoIngresado;
	var numeroLegajoingresado;
	var nacionalidadIngresada;
	
	edadIngresada = prompt("Ingrese su edad:");
	edadIngresada = parseInt(edadIngresada);

	while(edadIngresada < 18 || edadIngresada > 90 || isNaN(edadIngresada) == true)
	{
		edadIngresada = prompt("Su edad ingresada no es correcta, Ingrese nuevamente:");
		edadIngresada = parseInt(edadIngresada);
	}
	txtIdEdad.value = edadIngresada;

	sexoIngresado = prompt("Ingrese su sexo: 'M' para masculino o 'F' para femenino.");
	sexoIngresado = sexoIngresado.toUpperCase();
	
	while(sexoIngresado != "M" && sexoIngresado != "F")
	{
		sexoIngresado = prompt("Su sexo ingresado no es correcto, Ingrese nuevamente");
		sexoIngresado = sexoIngresado.toUpperCase();
	}
	txtIdSexo.value = sexoIngresado;

	estadoCivilIngresado = prompt("Ingrese el número corrspondiente a su estado civil: \n 1 - Para soltero. \n 2 - Para casados. \n 3 - Para divorciados. \n 4 - Para viudos.");
	estadoCivilIngresado = parseInt(estadoCivilIngresado);
	
	while(estadoCivilIngresado !=1 && estadoCivilIngresado !=2 && estadoCivilIngresado !=3 && estadoCivilIngresado !=4 && isNaN(estadoCivilIngresado) == true)
	{
		estadoCivilIngresado = prompt("Número incorrecto. Re-ingrese el número corrspondiente a su estado civil: \n 1 - Para soltero. \n 2 - Para casados. \n 3 - Para divorciados. \n 4 - Para viudos.");
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}
	switch(estadoCivilIngresado)
		{
			case 1:
				estadoCivilIngresado = "Soltero/a";
				break;
			case 2:
				estadoCivilIngresado = "Casado/a";
				break;
			case 3:
				estadoCivilIngresado = "Divorciado/a";
				break;
			case 4:
				estadoCivilIngresado = "Viudo/a";
				break;	
		}
	txtIdEstadoCivil.value = estadoCivilIngresado;
	
	sueldoBrutoIngresado = prompt("Ingrese su sueldo bruto. Debe ser mayor de $8.000");
	sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);

	while(sueldoBrutoIngresado < 8000 || isNaN(sueldoBrutoIngresado) == true)
	{
		sueldoBrutoIngresado = prompt("Sueldo incorrecto, re-ingrese su sueldo bruto. Debe ser mayor de $8.000");
		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
	}
	txtIdSueldo.value = sueldoBrutoIngresado;
	
	numeroLegajoingresado = prompt("Ingrese su número de legajo: ");
	numeroLegajoingresado = parseInt(numeroLegajoingresado);

	while(numeroLegajoingresado < 1000 || numeroLegajoingresado > 9999 || isNaN(numeroLegajoingresado) == true)
	{
		numeroLegajoingresado = prompt("Legajo incorrecto, re-ingrese su número de legajo. ");
		numeroLegajoingresado = parseInt(numeroLegajoingresado);
	}
	txtIdLegajo.value = numeroLegajoingresado;

	nacionalidadIngresada = prompt("Ingrese su nacionalidad: \n A - Para Argentinos \n E - Para Extranjeros \n N - Para Nacionalizados");
	nacionalidadIngresada = nacionalidadIngresada.toUpperCase();

	while(nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N")
	{
		nacionalidadIngresada = prompt("Incorrecto. Vuelva a ingresar su nacionalidad: \n A - Para Argentinos \n E - Para Extranjeros \n N - Para Nacionalizados");
		nacionalidadIngresada = nacionalidadIngresada.toUpperCase();
	}
	switch(nacionalidadIngresada)
	{
		case "A":
			nacionalidadIngresada = "Argentino"
			break;
		case "E":
			nacionalidadIngresada = "Extranjero"
			break;
		case "N":
			nacionalidadIngresada = "Nacionalizado"	
			break;	
	}
	txtIdNacionalidad.value = nacionalidadIngresada;
}

