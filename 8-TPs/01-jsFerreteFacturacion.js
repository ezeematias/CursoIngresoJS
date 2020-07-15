/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaTotal;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    sumaTotal = precioUno + precioDos + precioTres;

    alert("La suma total es de " + sumaTotal);
}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var cantidadPrecios;
    var promedioTotal;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    cantidadPrecios = 3

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    promedioTotal = (precioUno + precioDos + precioTres) / cantidadPrecios;

    alert("El promedio de los precios es " + promedioTotal);
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var iva;
    var precioConIva;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    iva = 1.21

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    precioConIva = (precioUno + precioDos + precioTres) * iva;

    alert("El precio con IVA es " + precioConIva);
    
}