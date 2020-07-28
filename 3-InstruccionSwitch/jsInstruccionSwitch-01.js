// Ezequiel Unía - Div. H
//al seleccionar un mes informar.
//si es Enero: "que comiences bien el año!!!."
//si es Marzo: "a clases!!!."
//si es Julio: "se vienen las vacaciones!!!."
//si es Diciembre: "Felices fiesta!!!."

function mostrar()
{
	var mesDelAño;
	mesDelAño = txtIdMes.value;
	
	switch(mesDelAño)
	{
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("A clases!!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices fiestas!!!");
			break;
	
	}

}//FIN DE LA FUNCIÓN