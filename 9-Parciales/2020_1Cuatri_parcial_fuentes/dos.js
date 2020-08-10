// Ezequiel Unía - Div.H
/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.

a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
  var tipoIngresado;
  var cantidadIngresada;
  var precioIngresado;
  var descuento;
  //var contadorArena;
  //var contadorCal;
  //var contadorCemento;
  var cantidadBolsasArena;
  var cantidadBolsasCal;
  var cantidadBolsasCemento;
  var mayorCantidadBolsas;
  var precioBolsasArena;
  var precioBolsasCal;
  var precioBolsasCemento;
  var tipoMasCaro;
  var bolsasTotales;
  var precioFinal;
  var precioConDescuento;


  contadorArena = 0;
  contadorCal = 0;
  contadorCemento = 0;
  cantidadBolsasArena = 0;
  cantidadBolsasCal = 0;
  cantidadBolsasCemento = 0;
  precioBolsasArena = 0;
  precioBolsasCal = 0;
  precioBolsasCemento = 0;
  descuento = 1;


  for(var flag = true; flag == true;)
  {
    tipoIngresado = prompt("Ingrese el material que necesite:");
    tipoIngresado = tipoIngresado.toUpperCase();
    while(tipoIngresado != "ARENA" && tipoIngresado != "CAL" && tipoIngresado != "CEMENTO")
    {
      tipoIngresado = prompt("Material mal ingresado, debe ingresar Arena, Cal o Cemento.");
      tipoIngresado = tipoIngresado.toUpperCase();
    }
    cantidadIngresada = prompt("Ingrese la cantidad de bolsas que necesite:");
    cantidadIngresada = parseInt(cantidadIngresada);
    while(isNaN(cantidadIngresada) || cantidadIngresada < 1)
    {
      cantidadIngresada = prompt("Cantidad mal ingresada, se debe ingresar como mínimo 1 bolsa:");
      cantidadIngresada = parseInt(cantidadIngresada);
    }
    precioIngresado = prompt("Ingrese el precio del material:");
    precioIngresado = parseInt(precioIngresado);
    while(isNaN(precioIngresado) || precioIngresado < 1)
    {
      precioIngresado = prompt("Precio mal ingresado, debe ingresar un precio válido:");
      precioIngresado = parseInt(precioIngresado);
    }

    switch(tipoIngresado)
    {
      case "ARENA":
        cantidadBolsasArena += cantidadIngresada;
        precioBolsasArena += precioIngresado * cantidadBolsasArena;
        //contadorArena++;
        break;

      case "CAL":
        cantidadBolsasCal += cantidadIngresada;
        precioBolsasCal += precioIngresado * cantidadBolsasCal;
        //contadorCal++;
        break;

      case "CEMENTO":
        cantidadBolsasCemento += cantidadIngresada;
        precioBolsasCemento += precioIngresado * cantidadBolsasCemento;
        //contadorCemento++;
        break;
    }
        
    flag = confirm("¿Desea comprar otro producto?");
    
  }
  
  if(cantidadBolsasArena > cantidadBolsasCal && cantidadBolsasArena > cantidadBolsasCemento)
  {
    mayorCantidadBolsas = "Arena";
  }else
  {
    if(cantidadBolsasCal > cantidadBolsasArena && cantidadBolsasCal > cantidadBolsasCemento)
    {
      mayorCantidadBolsas = "Cal";
    }else
    {
      mayorCantidadBolsas = "Cemento";
    }
  }

  if(precioBolsasArena > precioBolsasCal && precioBolsasArena > precioBolsasCemento)
  {
    tipoMasCaro = "Arena";
  }else
  {
    if(precioBolsasCal > precioBolsasArena && precioBolsasCal > precioBolsasCemento)
    {
      tipoMasCaro = "Cal"
    }else
    {
      tipoMasCaro = "Cemento"
    }
  }

  bolsasTotales = cantidadBolsasArena + cantidadBolsasCal + cantidadBolsasCemento;
  precioFinal = precioBolsasArena + precioBolsasCal + precioBolsasCemento;
  
  if(bolsasTotales > 9 && bolsasTotales < 30)
  {
    descuento = 0.85;
  }else
  {
    if(bolsasTotales > 30)
    {
      descuento = 0.75;
    }
  }
  precioConDescuento = precioFinal * descuento;

/* 
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

  document.write("El total a pagar sin descuento es: " + precioFinal);
  document.write("<br>El total a pagar con descuento es: " + precioConDescuento);
  document.write("<br>El material con más bolsas es: " + mayorCantidadBolsas);
  document.write("<br>El material con más más es: " + tipoMasCaro);  

}


