//Ezequiel Unía - Div. H
/*
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/

function mostrar()
{
    var productoIngresado;
    var precioIngresado;
    var cantidadIngresada;
    var marcaIngresada;
	var fabricanteIngresado;
	var banderaJabón;
	var precioMaximoJabón;
	var cantidadJabón;
	var fabricanteJabón;
	var acumuladorJabón;
	var contadorJabón;
	var acumuladorBarbijo;
	var contadorBarbijo;
	var acumuladorAlcohol;
	var contadorAlcohol;
	var promedioPorCompra;

	promedioPorCompra = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabón = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabón = 0;
	banderaJabón = true;

    for (var i = 0; i < 5; i++)
    {
        productoIngresado = prompt("Ingrese el producto");
        productoIngresado = productoIngresado.toUpperCase();
        while(productoIngresado != "BARBIJO" && productoIngresado != "JABÓN" && productoIngresado != "ALCOHOL")
        {
            productoIngresado = prompt("Los productos que debe ingresar son: \n - Barbijo \n - Jabón \n - Alcohol");
            productoIngresado = productoIngresado.toUpperCase();
		}
		
        precioIngresado = prompt("Ingrese el precio");
		precioIngresado = parseInt(precioIngresado);		
        while(isNaN(precioIngresado) || precioIngresado < 100 || precioIngresado > 300)
        {
            precioIngresado = prompt("El precio debe ser entre $100 y $300");
            precioIngresado = parseInt(precioIngresado);
		}
		
		cantidadIngresada = prompt("Ingrese la cantidad");
		cantidadIngresada = parseInt(cantidadIngresada);
		while(isNaN(cantidadIngresada) || cantidadIngresada < 0 || cantidadIngresada > 1000)
		{
			cantidadIngresada = prompt("La cantidad no debe superar las 1000 unidades");
			cantidadIngresada = parseInt(cantidadIngresada);
		}

		marcaIngresada = prompt("Ingrese la marca del producto");
		marcaIngresada = marcaIngresada.toUpperCase();

		fabricanteIngresado = prompt("Ingrese el fabricante");
		fabricanteIngresado = fabricanteIngresado.toUpperCase();

		switch(productoIngresado)
		{
			case "JABÓN":
				if(banderaJabón == true)
				{
					banderaJabón = false;
					precioMaximoJabón = precioIngresado;
					cantidadJabón = cantidadIngresada;
					fabricanteJabón	= fabricanteIngresado;
				}else
				{
					if(precioIngresado > precioMaximoJabón)
					{
						precioMaximoJabón = precioIngresado;
						cantidadJabón = cantidadIngresada;
						fabricanteJabón	= fabricanteIngresado;
					}
				}
				acumuladorJabón += cantidadIngresada;
				contadorJabón++;
				break;

			case "BARBIJO":
				acumuladorBarbijo += cantidadIngresada;
				contadorBarbijo++;
				break;

			case "ALCOHOL":
				acumuladorAlcohol += cantidadIngresada;
				contadorAlcohol++;
				break;
			
		}	
	
	}

	
	
	if(contadorJabón == 0)
	{
		console.log("No se compró ningún jabón.")
	}else
	{
		console.log("La cantidad del jabón mñas caro es de " + cantidadJabón + " y su fabricante es " + fabricanteIngresado);
	}

	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabón)
	{
		promedioPorCompra = acumuladorAlcohol / contadorAlcohol;
	}else
	{
		if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabón)
		{
			promedioPorCompra = acumuladorBarbijo / contadorBarbijo;
		}else
		{			
			promedioPorCompra = acumuladorJabón / contadorJabón;
			
		}
	}
	
	console.log ("El promedio por compra del tipo con mas unidades es: " + promedioPorCompra);

	if(contadorBarbijo == 0)
	{
		console.log("No se compraron barbijos.")
	}else
	{
		console.log("Se comrparon en total " + acumuladorBarbijo);
	}
}

/*
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/