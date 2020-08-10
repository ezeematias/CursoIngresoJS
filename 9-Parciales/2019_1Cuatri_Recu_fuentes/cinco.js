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
        precioIngresado = precioIngresado.toUpperCase();
        while(!isNaN(precioIngresado) && precioIngresado < 100 || precioIngresado > 300)
        {
            precioIngresado = prompt("El precio debe ser entre $100 y $300");
            precioIngresado = precioIngresado.toUpperCase();
        }
    }

}
