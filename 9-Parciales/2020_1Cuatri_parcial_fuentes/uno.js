//Ezequiel Unía - Div. H
/*
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{

	//Validación
	var tipoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	var bandera;

	//a)
	var precioAlcohol;
	var cantidadAlcohol;
	var fabricanteAlcohol;
	bandera = true;
	cantidadAlcohol = 0;

	//b y c)
	var iAlcohol;
	var acumuladorAlcohol;
	var iBarbijo;
	var acumuladorBarbijo;
	var iJabón;
	var acumuladorJabón;
	var promedio;

	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabón = 0;
	iAlcohol = 0;
	iBarbijo = 0;
	iJabón = 0;

	for(var i = 0; i < 5; i++)
	{
		tipoIngresado = prompt("Ingresar tipo del producto:");
		tipoIngresado = tipoIngresado.toUpperCase();
		while(tipoIngresado != "BARBIJO" && tipoIngresado != "JABÓN" && tipoIngresado != "ALCOHOL")
		{
			tipoIngresado = prompt("El producto no es válido; debe ser barbijo, jabón o alcohol");
			tipoIngresado = tipoIngresado.toUpperCase();
		}
		precioIngresado = prompt("Ingrese el precio del producto:");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado) || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt("Precio incorrecto, debe ser un valor entre $100 y $300");
			precioIngresado = parseInt(precioIngresado);
		}
		cantidadIngresada = prompt("Ingrese la cantidad de unidades del producto:");
		cantidadIngresada = parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada) || cantidadIngresada < 1 || cantidadIngresada > 1000)
		{
			cantidadIngresada = prompt("Cantidad de unidades incorrectas, deben ser entre 1u y 1000u");
			cantidadIngresada = parseInt(cantidadIngresada);
		}
		marcaIngresada = prompt("Ingrese la marca del producto:");
		marcaIngresada = marcaIngresada.toUpperCase();
		fabricanteIngresado = prompt("Ingrese el fabricante del producto:");
		fabricanteIngresado = fabricanteIngresado.toUpperCase();

		switch(tipoIngresado)
		{	
			case "ALCOHOL":	
				if(bandera = true || precioAlcohol > precioIngresado)
				{
					bandera = false;
					precioAlcohol = precioIngresado;
					cantidadAlcohol = cantidadIngresada;
					fabricanteAlcohol = fabricanteIngresado;
				}
				acumuladorAlcohol += cantidadIngresada;
				iAlcohol++;
				break;

			case "BARBIJO":
				acumuladorBarbijo += cantidadIngresada;
				iBarbijo++;
				break;

			case "JABÓN":
				acumuladorJabón += cantidadIngresada;
				iJabón++;
				break;
		}
	}

	if(acumuladorJabón>acumuladorBarbijo && acumuladorJabón>acumuladorAlcohol)
	{
		promedio = acumuladorJabón / iJabón;
	}
	else
	{
		if(acumuladorBarbijo>acumuladorJabón && acumuladorBarbijo>acumuladorAlcohol)
		{
			promedio = acumuladorBarbijo / iBarbijo;
		}else
		{
			promedio = acumuladorAlcohol / iAlcohol;
		}
	}

	//a)
	if(cantidadAlcohol == 0)
	{
		document.write("No hay stock de alcohol");
	}else
	{
		document.write("La cantidad de alcohol más barato es de " + cantidadAlcohol + " unidades de " + fabricanteAlcohol);
	}

	//b)
	document.write("<br>El promedio del tipo con más unidades es " + promedio);

	//c)
	if(acumuladorJabón == 0)
	{
		document.write("<br>No hay stock de Jabón");
	}else
	{
		document.write("<br>Hay en stock " + acumuladorJabón + " unidades de jabones");
	}

}
