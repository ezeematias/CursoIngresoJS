// Ezequiel Unía - Div. H
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var precioLamparitas;
    var cantidadLamparitas;
    var marcaLamparitas;
    var descuento50;
    var descuento40;
    var descuento30;
    var descuento25;
    var descuento20;
    var descuento15;
    var descuento10;
    var precioTotal;
    var precioConDescuento;
    var iibb;
    var precioFinal;
        
    precioLamparitas = 35;
    descuento50 = 0.5;
    descuento40 = 0.60;
    descuento30 = 0.7;
    descuento25 = 0.75;
    descuento20 = 0.8;
    descuento15 = 0.85;
    descuento10 = 0.90;
    iibb = 1.1;

    cantidadLamparitas = txtIdCantidad.value;
    cantidadLamparitas = parseInt(cantidadLamparitas);
    marcaLamparitas = Marca.value;
    precioTotal = cantidadLamparitas * precioLamparitas;
    //precioDescuento = txtIdprecioDescuento.value;

    //alert(cantidadLamparitas);
    //alert(marcaLamparitas);

     if(cantidadLamparitas>2)
     {
        if(cantidadLamparitas == 3 && marcaLamparitas == "ArgentinaLuz")
        {
            precioConDescuento =  precioTotal * descuento15;
        }else
        {
            if(cantidadLamparitas == 3 && marcaLamparitas == "FelipeLamparas")
            {
            precioConDescuento = precioTotal * descuento10;
            }else
            {
                if(cantidadLamparitas == 4 && (marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas"))
                {
                    precioConDescuento = precioTotal * descuento25;
                }else
                {
                    if(cantidadLamparitas == 4)
                    {
                        precioConDescuento = precioTotal * descuento20;
                    }else
                    {
                        if(cantidadLamparitas == 5 && marcaLamparitas == "ArgentinaLuz")
                        {
                            precioConDescuento = precioTotal * descuento40;
                        }else
                        {
                            if(cantidadLamparitas ==5)
                            {
                                precioConDescuento = precioTotal * descuento30;
                            }else
                            {
                                precioConDescuento = precioTotal * descuento50;
                            }
                        }
                    }

                }
            }
        }    
        //alert(precioDescuento);
     }
     if(precioConDescuento > 120)
     {
        precioFinal = precioConDescuento * iibb;
        txtIdprecioDescuento.value = precioFinal.toFixed(2);
        alert("Usted pago $" + precioFinal.toFixed(2) + " de IIBB.")
     }else
     {
        txtIdprecioDescuento.value = precioConDescuento.toFixed(2);
     }
}   
