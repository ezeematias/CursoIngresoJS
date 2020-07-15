/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var hilosAlambre;
    var metrosTotales;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    hilosAlambre = 3

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    metrosTotales = (largo + ancho) * hilosAlambre;

    alert("La cantidad de alambre a utilizar es " + metrosTotales + "mts");

}
function Circulo () 
{
    var radio;
    var circunferencia;
    var hilosAlambre;
    var metrosTotales;

    radio = txtIdRadio.value;
    hilosAlambre = 3

    radio = parseInt(radio);
    circunferencia = 2 * radio * 3.14;

    metrosTotales = circunferencia * hilosAlambre;

    alert("La cantidad de alambre a utilizar es " + metrosTotales + "mts");
}
function Materiales () 
{
    var largo;
    var ancho;
    var bolsasCemento;
    var bolsasCal;
    var bolsasCementoTotal;
    var bolsasCalTotal;
    var metrosCuadrados;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    bolsasCemento = 2;
    bolsasCal = 3;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    metrosCuadrados = largo * ancho;
    bolsasCementoTotal = metrosCuadrados * bolsasCemento;
    bolsasCalTotal = metrosCuadrados * bolsasCal;
       

    alert("Para los " + metrosCuadrados + "m2 se necesitan: " + bolsasCementoTotal + " bolsas de cemento y " + bolsasCalTotal + " bolsas de cal.");
}