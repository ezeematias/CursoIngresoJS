// Ezequiel Unía - Div. H
/*
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/


function mostrar()
{
  var productoIngresado;
  var cantidadIngresada;
  var precioIngresado;
  var ingresaOtroProducto;
  var precioArena;
  var precioiCal;
  var precioCemento;
  var acumuladorPrecio;
  var acumuladorArena;
  var acumuladorCal;
  var acumuladorCemento;
  var acumuladorBolsas;
  var descuento;
  var precioCondescuento;

  descuento = 1;
  precioArena = 0;
  precioiCal = 0;
  precioCemento = 0;
  acumuladorArena = 0;
  acumuladorCal = 0;
  acumuladorCemento = 0;
  acumuladorPrecio = 0;
  precioCondescuento = 0;
  acumuladorBolsas = 0;
  
  ingresaOtroProducto = true;
  
  while(ingresaOtroProducto == true)
  {
    productoIngresado = prompt("Ingrese el producto");
    productoIngresado = productoIngresado.toUpperCase();
    while(productoIngresado != "ARENA" && productoIngresado != "CAL" && productoIngresado != "CEMENTO")
      {
        productoIngresado = prompt("Los productos que debe ingresar son: \n - ARENA \n - CAL \n - CEMENTO");
        productoIngresado = productoIngresado.toUpperCase();
      }
      
    precioIngresado = prompt("Ingrese el precio");
    precioIngresado = parseInt(precioIngresado);		
    while(isNaN(precioIngresado) || precioIngresado < 100)
    {
      precioIngresado = prompt("Precio no válido, ingrese nuevamente");
      precioIngresado = parseInt(precioIngresado);
    }
      
    cantidadIngresada = prompt("Ingrese la cantidad");
    cantidadIngresada = parseInt(cantidadIngresada);
    while(isNaN(cantidadIngresada) || cantidadIngresada < 0)
    {
      cantidadIngresada = prompt("Cantidad mal ingresada, re-ingrese:");
      cantidadIngresada = parseInt(cantidadIngresada);
    }
    switch(productoIngresado)
    {
      case "ARENA":
        precioArena += cantidadIngresada * precioIngresado;
        acumuladorArena += cantidadIngresada;
        console.log(precioArena);
        break;

      case "CAL":
        precioiCal += cantidadIngresada * precioIngresado;
        acumuladorCal += cantidadIngresada;
        break;

      case "CEMENTO":
        precioCemento += cantidadIngresada * precioIngresado;
        acumuladorCemento += cantidadIngresada;
        break;    
    }
    acumuladorBolsas += cantidadIngresada;
    acumuladorPrecio = precioCemento + precioiCal + precioArena;
    console.log(acumuladorBolsas);

    if(acumuladorBolsas > 9 && acumuladorBolsas < 30)
    {
      descuento = 0.85;
    }else
    {
      if(acumuladorBolsas > 29)
      {
        descuento = 0.75;
      }
    }
    ingresaOtroProducto = confirm("¿Desea agregar otro producto?");
  }
    
    console.log("El importe total a pagar, bruto y sin descuento es de $" + acumuladorPrecio);
    if(descuento == 1)
    {
      console.log("Las cantidades no alcanzaron para obtener un descuento.")
    }else
    {
      precioCondescuento = acumuladorPrecio * descuento;
      console.log("El importe a pagar con descuento es de $" + precioCondescuento);
    }

    if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
    {
      console.log("La arena es el producto con más bolsas compradas");
    }else
    {
      if(acumuladorCemento > acumuladorCal && acumuladorCemento > acumuladorArena)
      {
        console.log("El cemento es el producto con más bolsas compradas");
      }else
      {
        console.log("La cal es el producto con más bolsas compradas");
      }
    }

  if(precioArena > precioCemento && precioArena > precioiCal)
  {
    console.log("La arena es el producto más caro comprado.");
  }else
  {
    if(precioCemento > precioArena && precioCemento > precioiCal)
    {
      console.log("El cemento es el producto más caro comprado.")
    }
    else
    {
      console.log("La cal es el producto más caro comprado.")
    }
  }

}
/*
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
*/