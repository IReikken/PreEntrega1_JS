let producto = " ";
let agregar = " ";
let costo = 0;
let costoTotal = 0;
let camtidad = 0;
let cantidadTotal = 0;
let precio = 0;
let msi = " ";
let cuota = " ";
let costoMes = 0;
let cuotaValida = true;

// Función para calcular el costo sumado de los productos
function multiplicacion(unidad,costo){
    return unidad * costo
}

// Función para guardar la cantidad total de productos agregadors
function acumulador(cantidad){
    return cantidadTotal=cantidad+cantidadTotal
}

// Función para aplicar descuento en base del total de productos
function descuento(cantidadTotal){
    
    if ((cantidadTotal > 10)){
        costoTotal=costoTotal*0.9
        alert("El monto a pagar con descuento es de $"+costoTotal)
    }
    else{
        alert("El monto a pagar es de $"+costoTotal)
    }
}

//Ciclo para acumular distintos tipos de productos
while(agregar != "no"){

    producto = prompt("Escriba qué artículo desea comprar: jarabe $200, pastilla $350, inyeccion $500")
    cantidad = parseInt(prompt("Escriba la cantidad que desea (10 o mas productos cambinados se hace 25% de descuento"))
    if(cantidad>0){
        //Calculadora de costos en función del producto elejido
        switch(producto){
            case "jarabe":
                precio = multiplicacion(cantidad,200)
                acumulador(cantidad)
                break
            case "pastilla":
                precio = multiplicacion(cantidad,350)
                acumulador(cantidad)
                break
            case "inyeccion":
                precio = multiplicacion(cantidad,500)
                acumulador(cantidad)
                break
            default:
                alert("Escriba un producto válido")
                break
                }
        //Acumulador del costo total de todos los productos seleccionados
        costoTotal=precio+costoTotal
        agregar = prompt("¿Desea comprar algo más? (Escriba 'no' para dejar de agregar productos")
        }
    else{
        alert("Escriba una cantidad mayor a 0")
    }
}       

//Función para determinar si se aplica descuento
descuento(cantidadTotal);

//Seleccion de pago a meses sin interes
msi= prompt("Desea pagar a meses sin intereses")
if(msi == "si"){
    // Bucle para validar cantidad de cuotas
    while(cuotaValida){
        cuota = prompt("Escoja en cuantas cuotas desea pagar (1-12)")
        if((cuota>0)&&(cuota<=12)){
            costoMes = costoTotal / cuota
            cuotaValida = false
            alert("El monto a pagar es $"+costoMes+" durante "+cuota+" meses")
            }
        else{
        alert("Escriba un numero válido de cuotas")
        }
    }
}
else { 
    alert("El monto a pagar es: $"+costoTotal)
}