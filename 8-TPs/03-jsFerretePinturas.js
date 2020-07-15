/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheit;
    var conversion;
    
    fahrenheit = txtIdTemperatura.value;
    fahrenheit = parseInt(fahrenheit);
    conversion = (fahrenheit - 32) * 5 / 9;

    alert(fahrenheit + "º fahrenheit son " + conversion + "º centígrados");
}

function CentigradosFahrenheit () 
{
    var centigrados;
    var conversion;
    
    centigrados = txtIdTemperatura.value;
    centigrados = parseInt(centigrados);
    conversion = (centigrados * 9 / 5) + 32;

    alert(centigrados + "º centrígrados son " + conversion + "º fahrenheit");
}
