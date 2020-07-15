/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
	var num2;
	var suma;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	suma = num1 + num2;
	alert("La suma es " + suma);	
}

function restar()
{
	var num1;
	var num2;
	var resta;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	resta = num1 - num2;
	alert("La resta es " + resta);	
}

function multiplicar()
{ 
	var num1;
	var num2;
	var multiplica;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);

	multiplica = num1 * num2;
	alert("La multiplicación es " + multiplica);	
}

function dividir()
{
	var num1;
	var num2;
	var divide;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;

	num1 = parseInt(num1);
	num2 = parseInt(num2);
	divide = num1 / num2;
	
	alert("La divición es " + divide);
}

